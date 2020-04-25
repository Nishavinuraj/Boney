import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ReportsService } from 'src/app/shared/services/reports.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispatch-summary',
  templateUrl: './dispatch-summary.component.html',
  styleUrls: ['./dispatch-summary.component.scss']
})
export class DispatchSummaryComponent implements OnInit {

  activeTab = 'main_report';
  filterForm: FormGroup;
  loading = false;
  filters = { start_date: '', end_date: '', page: 0 };
  pagination = {total: 0, currenPage: 1, pageSize: 50, maxSize: 10};
  dispatch_summary_data = { result: [] };
  selected_site_name;
  constructor(
    public api: ApiService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public reportService: ReportsService,
    private myRouter: Router
  ) {
    this.filterForm = this.formBuilder.group({
      start_date: [0],
      end_date: [0]
    });
  }

  ngOnInit() {
    this.fetchReport();
  }

  onSiteSelect(t) {
    // console.log(t);
    let startDt = '';
    let endDt = '';

    if (this.filterForm.controls['start_date'].value) {
      startDt = this.filterForm.controls['start_date'].value.year + '-' +
        this.filterForm.controls['start_date'].value.month + '-' +
        this.filterForm.controls['start_date'].value.day;
    } else {
      startDt = this.getTodaysDate();
      // this.filterForm.controls['start_date'].setValue(startDt);
    }

    if (this.filterForm.controls['end_date'].value) {
      endDt = this.filterForm.controls['end_date'].value.year + '-' +
        this.filterForm.controls['end_date'].value.month + '-' +
        (this.filterForm.controls['end_date'].value.day);
    } else {
      endDt = this.getTodaysDate();
      // this.filterForm.controls['end_date'].setValue(endDt);
    }

    this.myRouter.navigate(['/reports/dispatch-summary-site-wise', { site: t._id, start_date: startDt, end_date: endDt,
      year: this.filterForm.controls['start_date'].value.year }]);
  }

  resetFilters() {

  }

  getTodaysDate() {
    const today = new Date();
    return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  }
  getTommrowsDate() {
    const today = new Date();
    return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 1);
  }

  fetchReport() {
    let startDt = '';
    let endDt = '';

    if (this.filterForm.controls['start_date'].value) {
      startDt = this.filterForm.controls['start_date'].value.year + '-' +
        this.filterForm.controls['start_date'].value.month + '-' +
        this.filterForm.controls['start_date'].value.day;
    } else {
      startDt = this.getTodaysDate();
      // this.filterForm.controls['start_date'].setValue(startDt);
    }

    if (this.filterForm.controls['end_date'].value) {
      endDt = this.filterForm.controls['end_date'].value.year + '-' +
        this.filterForm.controls['end_date'].value.month + '-' +
        (this.filterForm.controls['end_date'].value.day);
    } else {
      endDt = this.getTommrowsDate();
      // this.filterForm.controls['end_date'].setValue(endDt);
    }

    console.log('startDt >>>>>>>>>.', startDt);
    console.log('endDt >>>>>>>>>>>', endDt);

    this.loading = true;
    this.filters.page = this.pagination.currenPage;
    this.filters.start_date = startDt;
    this.filters.end_date = endDt;

    // console.log('filters');
    // console.log(this.filters);
    this.reportService.getDispatchSummary(this.filters).subscribe((res: any) => {
      this.loading = false;

      this.dispatch_summary_data = res;
      console.log(res);
    }, err => {
      this.loading = false;
    });


    // console.log('start date ');
    // console.log(this.filterForm.controls['start_date'].value);
    // console.log('end date ');
    // console.log(this.filterForm.controls['end_date'].value);
    // this.filterForm.controls['start_date'].value
  }

}
