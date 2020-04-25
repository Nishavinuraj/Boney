import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TrafficAgentService } from 'src/app/shared/services/traffic-agent.service';
import { MetaService } from 'src/app/shared/services/meta.service';
import { ToastrService } from 'ngx-toastr';
import { AttachDocumentsService } from 'src/app/shared/services/attach-documents.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  filterForm: FormGroup;
  editForm: FormGroup;
  agents = [];
  loading = false;
  activeTab = '';
  data = [];
  details = [];
  expiredDetails = [];

  constructor(
    public agentService: TrafficAgentService,
    public meta: MetaService,
    public fb: FormBuilder,
    private toastr: ToastrService,
    public attachments: AttachDocumentsService
  ) {

    this.filterForm = this.fb.group({
      traffic_agent: [''],
      site_name: ['']
    });

    this.editForm = this.fb.group({
      status: [''],
      remarks: ['']
    });
  }

  ngOnInit() {
    this.getAgentList();
  }

  fetch() {
    this.activeTab = 'docOverview';
    this.getOverAllData();
    this.getDetails();
    this.getExpiredTrucksDetails();
  }

  getAgentList() {
    this.meta.getTrafficAgents().subscribe(
      (res: any) => {
        this.agents = res;
        this.filterForm.controls['traffic_agent'].setValue(this.agents[0].name);
      },
      err => {}
    );
  }

  getOverAllData() {
    this.loading = true;
    this.attachments.getTrafficAgentDocumentOverAllData({traffic_agent: this.filterForm.value.traffic_agent}).subscribe((resp: any) => {
      this.data = resp;
      this.loading = false;
    }, err => {
      this.loading = false;
      this.toastr.error('Something went wrong when getting the data.');
    });
  }

  getDetails() {
    this.loading = true;
    this.attachments.getTrafficAgentDocumentDetails({traffic_agent: this.filterForm.value.traffic_agent}).subscribe((resp: any) => {

      resp.forEach(element => {
        element.editing = false;
      });

      this.details = resp;
      this.loading = false;
    }, err => {
      this.loading = false;
      this.toastr.error('Something went wrong when getting the data.');
    });
  }

  getExpiredTrucksDetails() {
    this.loading = true;
    this.attachments.getExpiredTrafficAgentDocumentDetails({traffic_agent: this.filterForm.value.traffic_agent}).subscribe((resp: any) => {

      resp.forEach(element => {
        element.editing = false;
      });

      this.expiredDetails = resp;
      this.loading = false;
    }, err => {
      this.loading = false;
      this.toastr.error('Something went wrong when getting the data.');
    });
  }

  showDetails() {
    this.activeTab = 'details';
  }

  showOverview() {
    this.activeTab = 'docOverview';
  }

  edit(data, index) {
    data.editing = true;
    this.editForm.controls['status'].setValue(data.status);
    this.editForm.controls['remarks'].setValue(data.remarks);
  }

  cancel(data) {
    data.editing = false;
  }

  update(data) {

    const obj = {
      'id': data.document_id,
      'status' : this.editForm.value.status,
      'remarks' : this.editForm.value.remarks
    };

    console.log('>>>>obj', obj);

    this.loading = true;
    this.attachments.updateAttachements(obj).subscribe((resp: any) => {
      this.loading = false;

      data.remarks = this.editForm.value.remarks;
      data.status = this.editForm.value.status;
      data.editing = false;
      this.toastr.success('Dashboard documents updated successfully.');
    }, err => {
      this.loading = false;
      this.toastr.error('Something went wrong when getting the data.');
    });
  }

}
