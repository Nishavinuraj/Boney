import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { MetaService } from 'src/app/shared/services/meta.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { ReportsService } from 'src/app/shared/services/reports.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-accounts-items-ledger-report',
  templateUrl: './accounts-items-ledger-report.component.html',
  styleUrls: ['./accounts-items-ledger-report.component.scss']
})
export class AccountsItemsLedgerReportComponent implements OnInit {
  public accounts_option: any;
  sites;
  // accounts = [];
  filterForm: FormGroup;
  model;
  loading = false;
  loaded = true;
  filters = {
      site_name: '',
      account_name: '',
      start_date: '',
      end_date: '',
      page: 0
  };
  accounts_data = {results: [], closing_balance: 0, opening_balance: {opening_balance: 0, type: ''}, account_type: ''};
  pagination = {total: 0, currenPage: 1, pageSize: 50, maxSize: 10};
  site_name: any;
  usertype: any;

  constructor(
      public api: ApiService,
      public meta: MetaService,
      private formBuilder: FormBuilder,
      public reportService: ReportsService,
      public toastr: ToastrService
  ) {

      this.usertype = this.meta.getSiteFromStorage().role;
      this.site_name = this.meta.getSiteFromStorage().site;

      this.filterForm = this.formBuilder.group({
          site_name: [''],
          account_name: [''],
          start_date: [''],
          end_date: ['']
      });
  }

  ngOnInit() {
      this.getAccounts();
      this.getSites();
      // this.fetchReport();
  }

  getSites() {
      this.meta.getSites().subscribe((res: any) => {
          this.sites = res;
          if (this.usertype === 'ADMIN') {
              this.filterForm.controls['site_name'].setValue('');
          } else {
              this.filterForm.controls['site_name'].setValue('');
          }
      }, err => {

      });
  }
  getAccounts() {
      this.meta.getAccountsItemsLedgerList().subscribe(trackInfo => {
        this.accounts_option = trackInfo['result'];
        console.log('AccountsList >>>>>', this.accounts_option);
      });
  }

  resetFilters() {
      this.filterForm.get('account_name').setValue('');
      this.filterForm.get('start_date').setValue('');
      this.filterForm.get('end_date').setValue('');
      this.filters = {
          site_name: '',
          account_name: '',
          start_date: '',
          end_date: '',
          page: 0
      };
      this.fetchReport();
  }


  fetchReport() {
      let startDt = '';
      let endDt = '';

      // if (!this.filterForm.controls['account_name'].value) {
      //     this.toastr.error('Please enter account name.', 'No Account Selected.');
      //     return;
      // }

      if (this.filterForm.controls['start_date'].value) {
          startDt = this.filterForm.controls['start_date'].value.year + '-' +
              this.filterForm.controls['start_date'].value.month + '-' +
              this.filterForm.controls['start_date'].value.day;
      } else {
          startDt = '';
      }

      if (this.filterForm.controls['end_date'].value) {
          endDt = this.filterForm.controls['end_date'].value.year + '-' +
              this.filterForm.controls['end_date'].value.month + '-' +
              (this.filterForm.controls['end_date'].value.day);
      } else {
          endDt = '';
      }

      this.filters.page = this.pagination.currenPage;

      if (this.filterForm.controls['site_name'].value) {
          this.filters.site_name = this.filterForm.controls['site_name'].value;
      } else {
          this.filters.site_name = '';
      }

      if (this.filterForm.controls['account_name'].value) {
          this.filters.account_name = this.filterForm.controls['account_name'].value;
      } else {
          this.filters.account_name = '';
      }

      this.filters.start_date = startDt;
      this.filters.end_date = endDt;

      this.loading = true;
      this.loaded = false;
      // this.accounts_data = [];
      this.reportService.getAccountItemsLedgerReports(this.filters).subscribe((res: any) => {
          this.loading = false;
          this.loaded = true;
          console.log(this.filters);
          console.log(res);
          this.accounts_data = res;
          // this.pagination.total = res.total;
      }, err => {
          this.loading = false;
          this.loaded = true;
      });

  }
}
