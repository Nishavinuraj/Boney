import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ReportsService } from 'src/app/shared/services/reports.service';
import { Router } from '@angular/router';
import { MetaService } from 'src/app/shared/services/meta.service';

@Component({
  selector: 'app-site-dispatch-summary',
  templateUrl: './site-dispatch-summary.component.html',
  styleUrls: ['./site-dispatch-summary.component.scss']
})
export class SiteDispatchSummaryComponent implements OnInit {

  activeTab = 'main_report';
  filterForm: FormGroup;
  loading = false;
  filters = {
    site_name: '',
    site: '',
    start_date: '',
    end_date: '',
    page: 0
  };
  pagination = {total: 0, currenPage: 1, pageSize: 50, maxSize: 10};
  dispatch_summary_data = { result: [] };
  // selected_site_name;
  usertype: any;
  sites;
  site_name: any;

  constructor(
    public meta: MetaService,
    public api: ApiService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public reportService: ReportsService,
    private myRouter: Router
  ) {
    this.filterForm = this.formBuilder.group({
      site_name: '',
      site: '',
      start_date: [0],
      end_date: [0]
    });
  }

  ngOnInit() {
    this.getSites();
    // this.fetchReport();
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

    // this.myRouter.navigate(['/reports/dispatch-summary-site-wise', { site: t._id, start_date: startDt, end_date: endDt,
    //   year: this.filterForm.controls['start_date'].value.year }]);
      this.myRouter.navigate(['/site-data-analysis/site-dispsummary', { site: t._id, start_date: startDt, end_date: endDt,
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

    this.filters.site = this.filterForm.value.site_name;
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

    console.log('site >>>>>>>>>.', this.filters.site);
    console.log('startDt >>>>>>>>>.', startDt);
    console.log('endDt >>>>>>>>>>>', endDt);

    this.loading = true;
    this.filters.page = this.pagination.currenPage;
    this.filters.site = this.filterForm.value.site_name;
    this.filters.start_date = startDt;
    this.filters.end_date = endDt;

    // console.log('filters');
    // console.log(this.filters);
    this.reportService.getDispatchSummarySite(this.filters).subscribe((res: any) => {
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

  getSites() {
    this.meta.getSites().subscribe((res: any) => {
        this.sites = res;
        if (this.usertype === 'ADMIN') {
            this.filterForm.controls['site_name'].setValue('');
        } else {
            // this.filterForm.controls['site_name'].setValue('');
            this.filterForm.controls['site_name'].setValue(this.site_name);
        }

    }, err => {
    });
  }

}
