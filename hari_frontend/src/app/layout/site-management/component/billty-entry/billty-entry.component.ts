import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SiteService } from 'src/app/shared/services/site.service';
import { MetaService } from 'src/app/shared/services/meta.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
declare var moment: any
import { environment } from 'src/environments/environment';
var momentTZ = require('moment-timezone');

@Component({
  selector: 'app-billty-entry',
  templateUrl: './billty-entry.component.html',
  styleUrls: ['./billty-entry.component.scss']
})
export class BilltyEntryComponent implements OnInit {

  private url = environment.api_endpoint;
  billtyForm: FormGroup;
  filters = {
    'start_date': '',
    'end_date': '',
    'from_lrno': '',
    'to_lrno': '',
    'site_name': '',
    'flag': 0
  };
  stDate: any;
  edDate: any;
  loading = false;
  sites = [];
  site_name: any;
  usertype: any;
  startdt: NgbDateStruct;
  enddt: NgbDateStruct;
  lr_from = [];
  lr_to = [];
  disable = false;


  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    public router: Router,
    public meta: MetaService,
    private calendar: NgbCalendar,
    public site: SiteService
  ) {

    this.usertype = this.meta.getSiteFromStorage().role;
    this.site_name = this.meta.getSiteFromStorage().site;

    this.billtyForm = this.fb.group({
      start_date: ['', Validators.required],
      end_date: [''],
      lrno_from: [''],
      lrno_to: [''],
      site: ['']
    });

  }

  ngOnInit() {

    this.billtyForm.controls['start_date'].setValue(this.calendar.getToday());
    this.billtyForm.controls['end_date'].setValue(this.calendar.getToday());

    this.getSites();
  }

  getSites() {
    this.loading = true;
    this.meta.getSites().subscribe((res: any) => {
        this.loading = false;
        this.sites = res;
        if (this.usertype === 'ADMIN') {
          this.billtyForm.controls['site'].setValue(this.sites[0].branch_name);
          this.fetch();
        } else {
          this.billtyForm.controls['site'].setValue(this.site_name);
          this.fetch();
        }
      },
      err => {
        this.loading = false;
      }
    );
  }

  changeStatus(event) {
    console.log('event >>>>', event.target.checked);

    if (event.target.checked) {
      this.filters.flag = 1;
    } else {
      this.filters.flag = 0;
    }
  }

  billtyOne() {


    this.stDate = this.billtyForm.value.start_date;
    this.edDate = this.billtyForm.value.end_date;

    this.stDate = this.stDate.year + '-' + this.stDate.month + '-' + this.stDate.day;
    this.edDate = this.edDate.year + '-' + this.edDate.month + '-' + this.edDate.day;

    const sDate = moment(this.stDate, 'YYYY-MM-DD');
    const eDate = moment(this.edDate, 'YYYY-MM-DD');


    if (this.billtyForm.value.start_date) {
      this.filters.start_date = this.stDate;
    } else {
      this.filters.start_date = '';
    }

    if (this.billtyForm.value.end_date) {
      this.filters.end_date = this.edDate;
    } else {
      this.filters.end_date = '';
    }

    if (this.billtyForm.value.lrno_from) {
      this.filters.from_lrno = this.billtyForm.value.lrno_from;
    } else {
      this.filters.from_lrno = '';
    }

    if (this.billtyForm.value.lrno_to) {
      this.filters.to_lrno = this.billtyForm.value.lrno_to;
    } else {
      this.filters.to_lrno = '';
    }

    if (this.billtyForm.value.site) {
      this.filters.site_name = this.billtyForm.value.site;
    } else {
      this.filters.site_name = '';
    }

    const queryString = Object.keys(this.filters).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(this.filters[key]);
    }).join('&');

    window.open(this.url + 'billty/print/one?' + queryString);
  }

  billtyTwo() {

    if (this.billtyForm.value.lrno_from) {
      this.filters.from_lrno = this.billtyForm.value.lrno_from;
    } else {
      this.filters.from_lrno = '';
    }

    if (this.billtyForm.value.site) {
      this.filters.site_name = this.billtyForm.value.site;
    } else {
      this.filters.site_name = '';
    }

    delete this.filters.start_date;
    delete this.filters.end_date;
    delete this.filters.to_lrno;

    const queryString = Object.keys(this.filters).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(this.filters[key]);
    }).join('&');

    window.open(this.url + 'billty/print/two?' + queryString);
  }

  fetch() {

    if (this.billtyForm.controls['start_date'].valid) {

      let startDt = '';
      let endDt = '';

      if (this.billtyForm.controls['start_date'].value) {
        this.stDate = this.billtyForm.controls['start_date'].value.year + '-' +
              this.billtyForm.controls['start_date'].value.month + '-' +
              this.billtyForm.controls['start_date'].value.day;
      } else {
        this.stDate = '';
      }

      if (this.billtyForm.controls['end_date'].value) {
        this.edDate = this.billtyForm.controls['end_date'].value.year + '-' +
              this.billtyForm.controls['end_date'].value.month + '-' +
              (this.billtyForm.controls['end_date'].value.day);
      } else {
        this.edDate = '';
      }


      // this.stDate = this.billtyForm.value.start_date;
      // this.edDate = this.billtyForm.value.end_date;

      // this.stDate = this.stDate.year + '-' + this.stDate.month + '-' + this.stDate.day;
      // this.edDate = this.edDate.year + '-' + this.edDate.month + '-' + this.edDate.day;

      const sDate = moment(this.stDate, 'YYYY-MM-DD');
      const eDate = moment(this.edDate, 'YYYY-MM-DD');

      // this.stDate = momentTZ(this.billtyForm.value.start_date, 'YYYY-MM-DD').tz('Asia/Calcutta').format('YYYY-MM-DD');
      // this.edDate = momentTZ(this.billtyForm.value.end_date, 'YYYY-MM-DD').tz('Asia/Calcutta').format('YYYY-MM-DD');
      // const sDate = new Date(this.stDate);
      // const eDate = new Date(this.edDate);

      // sDate.setUTCHours(00,00,00,000);
      // eDate.setUTCHours(23,59,59,999);

      if (sDate <= eDate) {

        if (this.billtyForm.value.start_date) {
          this.filters.start_date = this.stDate;
        } else {
          this.filters.start_date = '';
        }

        if (this.billtyForm.value.end_date) {
          this.filters.end_date = this.edDate;
        } else {
          this.filters.end_date = '';
        }

        if (this.billtyForm.value.site) {
          this.filters.site_name = this.billtyForm.value.site;
        } else {
          this.filters.site_name = '';
        }

        this.filters.from_lrno = '';
        this.filters.to_lrno = '';

        this.site.getLrNumber(this.filters).subscribe((res: any) => {
          this.lr_from = res.result;
          this.lr_to = res.result;

          if (this.lr_from.length > 0) {
            this.billtyForm.controls['lrno_from'].setValue(this.lr_from[0].lrno);
            this.billtyForm.controls['lrno_to'].setValue(this.lr_to[0].lrno);
            this.disable = false;
          } else {
            this.billtyForm.controls['lrno_from'].setValue('');
            this.billtyForm.controls['lrno_to'].setValue('');
            this.disable = true;
          }

        }, err => {
          this.toastr.error('Something went wrong, While fetching billty records.');
        });

      } else {
        this.toastr.error('Start date cannot be greater then end date.');
      }

    } else {
      this.toastr.error('Please select start date.');
    }
  }
}
