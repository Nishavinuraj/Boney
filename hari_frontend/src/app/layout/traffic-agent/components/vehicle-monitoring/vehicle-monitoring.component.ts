import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { routerTransition } from 'src/app/router.animations';
import { TrafficAgentService } from 'src/app/shared/services/traffic-agent.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var moment: any;
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vehicle-monitoring',
  templateUrl: './vehicle-monitoring.component.html',
  styleUrls: ['./vehicle-monitoring.component.scss'],
  animations: [routerTransition()]
})
export class VehicleMonitoringComponent implements OnInit {

  filterForm: FormGroup;
  editForm: FormGroup;

  agents = [];
  sites = [];
  loading = false;
  loaded = true;
  // pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };

  filters = {
    traffic_agent: '',
    site_name: ''
  };

  report_data = [];

  tripStatus = [
    { name: 'Loading' },
    { name: 'Unloading' },
    { name: 'On the Way' },
    { name: 'Party Haulting' },
    { name: 'Plant Haulting' },
    { name: 'Not Unloaded' },
    { name: 'Accident' },
    { name: 'Maintenance' },
    { name: 'On site' },
    { name: 'Return to Plant' }
  ];

  completed = [
    { name: 'Yes' },
    { name: 'No' },
  ];

  constructor(
    public agentService: TrafficAgentService,
    public meta: MetaService,
    public fb: FormBuilder,
    private toastr: ToastrService
  ) {

    this.filterForm = this.fb.group({
      traffic_agent: [''],
      site_name: ['']
    });

    this.editForm = this.fb.group({
      km_run: [''],
      current_location: [''],
      trip_status: [''],
      remark: [''],
      completed: ['']
    });

  }

  ngOnInit() {
    this.getAgentList();
  }

  getAgentList() {
    this.meta.getTrafficAgents().subscribe(
      (res: any) => {
        this.agents = res;
        this.filterForm.controls['traffic_agent'].setValue(this.agents[0].name);
        this.getSites(this.agents[0].name);
      },
      err => {}
    );
  }

  onChangeTrafficAgent(agentName) {
    this.getSites(agentName);
  }

  getSites(agentName) {
    this.agentService.getSites(agentName).subscribe((res: any) => {
        this.sites = res.sites;
      },
      err => {
        console.log('>>>>Err', err);
      }
    );
  }

  fetch() {

    if (this.filterForm.value.traffic_agent) {
      this.filters.traffic_agent = this.filterForm.value.traffic_agent;
    } else {
      this.filters.traffic_agent = '';
    }

    this.loading = true;
    this.loaded = false;
    this.report_data = [];
    this.agentService.getMonitoringData(this.filters).subscribe((res: any) => {
      this.loading = false;
      this.loaded = true;
      res.result.forEach(element => {
        element.editing = false;
        element.date = moment(element.date, 'YYYY-MM-DD').format('DD/MM/YYYY');
      });

      this.report_data = res.result;
    }, err => {
      this.loading = false;
      this.loaded = true;
      console.log('>>>>>>err', err);
    });

  }

  edit(data) {
    data.editing = true;
    this.editForm.controls['km_run'].setValue(data.km);
    this.editForm.controls['current_location'].setValue(data.currentlocation);
    this.editForm.controls['trip_status'].setValue(data.tripsstatus);
    this.editForm.controls['remark'].setValue(data.remark);
    this.editForm.controls['completed'].setValue(data.completed);
  }

  cancel(data) {
    data.editing = false;
  }

  update(data) {
    const obj = {
      tripsstatus: this.editForm.value.trip_status,
      currentlocation: this.editForm.value.current_location,
      remark: this.editForm.value.remark,
      newkm: this.editForm.value.km_run,
      completed: this.editForm.value.completed
    };

    this.loading = true;
    this.agentService.updateMonitoringData(data.id, obj).subscribe((res: any) => {
      this.loading = false;
      data.editing = false;
      data.km = this.editForm.value.km_run;
      data.currentlocation = this.editForm.value.current_location;
      data.tripsstatus = this.editForm.value.trip_status;
      data.remark = this.editForm.value.remark;
      data.completed = this.editForm.value.completed;
      this.toastr.success('Vehicle monitoring updated successfully.');
    }, err => {
      this.loading = false;
      data.editing = false;
      this.toastr.error('Something went wrong.');
      console.log('>>>>>>err', err);
    });
  }
}
