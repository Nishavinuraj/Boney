import { Component, OnInit } from '@angular/core';
import { AdminPrivilegesService } from 'src/app/shared/services/admin-privileges.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { routerTransition } from 'src/app/router.animations';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-fleet-targets',
  templateUrl: './fleet-targets.component.html',
  styleUrls: ['./fleet-targets.component.scss'],
  animations: [routerTransition()]
})
export class FleetTargetsComponent implements OnInit {

  filterForm: FormGroup;
  editForm: FormGroup;

  pagination = {total: 0, currenPage: 1, pageSize: 50, maxSize: 10};
  filters = {
    year: '',
    tyre_no: ''
  };
  reports = [];
  years = [];
  tyres = [];
  loading = false;

  constructor(
    public adminService: AdminPrivilegesService,
    public toastr: ToastrService,
    private formBuilder: FormBuilder,
    public dashboardService: DashboardService
  ) {

    for (let i = 2025; i >= 2015; i--) {
      this.years.push({ year: i });
    }

    this.filterForm = this.formBuilder.group({
      years: [''],
      tyres: ['']
    });

    this.editForm = this.formBuilder.group({
      January: [''],
      February: [''],
      March: [''],
      April: [''],
      May: [''],
      June: [''],
      July: [''],
      August: [''],
      September: [''],
      October: [''],
      November: [''],
      December: [''],
      years: ['']
    });

  }

  ngOnInit() {
    this.fetchReport();
    this.getTyres();
  }

  fetchReport() {

    if (this.filterForm.controls['years'].value) {
      this.filters.year = this.filterForm.controls['years'].value;
    } else {
      this.filters.year = '';
    }

    if (this.filterForm.controls['tyres'].value) {
      this.filters.tyre_no = this.filterForm.controls['tyres'].value;
    } else {
      this.filters.tyre_no = '';
    }

    this.loading = true;
    this.adminService.getFleetTargetList(this.filters).subscribe((res: any) => {
      this.loading = false;
      res.forEach(e => {
        e.updated = false;
      });

      this.reports = res;
      // this.pagination.total = res.total;
      // console.log('>>>>>>>>>>>>>res ', res);
    }, err => {
      this.loading = false;
      console.log('>>>>>>>>>>>>>err', err);
    });
  }

  edit(report, month) {

    report.updated = !report.updated;

    month.forEach(element => {
      this.editForm.controls[element.name].setValue(element.target);
    });
    this.editForm.controls['years'].setValue(report.year);
  }

  getTyres() {
    this.dashboardService.getTyreList().subscribe( (res: any) => {
      this.tyres = res;
      },
      err => {
    });
  }

  updateValue(data, report) {

    const month = [];

    data.forEach(element => {
      for (const key in this.editForm.controls) {
        if (key === element.name) {
          element.target = this.editForm.controls[key].value;
          month.push(element);
        }
      }
    });

    const obj = {
      truckno: report.truckno,
      year: this.editForm.controls['years'].value,
      months: month
    };

    this.adminService.updateFleetTargetList(obj).subscribe(res => {
      this.toastr.success('Data updated successfully.');
      report.updated = false;
      this.fetchReport();
    }, err => {
      console.log('>>>>>>>>>>>>err', err);
      this.toastr.error('Something went wrong.');
    });
  }

  refersh() {
    this.fetchReport();
  }

}
