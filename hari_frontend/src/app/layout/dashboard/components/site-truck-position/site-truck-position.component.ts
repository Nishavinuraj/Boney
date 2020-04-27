import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
declare var moment:any
import * as momentTZ from 'moment-timezone';
import { ToastrService } from 'ngx-toastr';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-site-truck-position',
  templateUrl: './site-truck-position.component.html',
  styleUrls: ['./site-truck-position.component.scss'],
  animations: [routerTransition()]
})
export class SiteTruckPositionComponent implements OnInit {

  siteForm: FormGroup;
  filters = {
    'start_date': '',
    'end_date': ''
  };
  submitted = false;
  sitePositions = [];
  loading = false;
  loaded = true;

  constructor(
    public fb: FormBuilder,
    public dashboardService: DashboardService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    this.siteForm = this.fb.group({
      start_date: ['', Validators.required],
      end_date: ['', Validators.required]
    });

    this.getPositions();
  }

  getPositions() {

    this.submitted = true;
    if (this.siteForm.controls['start_date'].valid) {

      let sDate = this.siteForm.value.start_date;
      let eDate = this.siteForm.value.end_date;

      sDate = sDate.year + '-' + sDate.month + '-' + sDate.day;
      eDate = eDate.year + '-' + eDate.month + '-' + eDate.day;

      const stDate = moment(sDate, 'YYYY-MM-DD');
      const edDate = moment(eDate, 'YYYY-MM-DD');

      if (stDate <= edDate) {
        if (this.siteForm.value.start_date) {
          this.filters.start_date = sDate;
        } else {
          this.filters.start_date = '';
        }

        if (this.siteForm.value.end_date) {
          this.filters.end_date = eDate;
        } else {
          this.filters.end_date = '';
        }

        this.loading = true;
        this.loaded = false;
        this.sitePositions = [];
        this.dashboardService.getSiteTruckPostion(this.filters).subscribe((res: any) => {
          this.loading = false;
          this.loaded = true;

          res.result.forEach(element => {
            element.siteResult.forEach(e => {
              e.date = momentTZ(e.date).tz('Asia/Calcutta').format('DD/MM/YYYY HH:mm:ss');
            });
          });

          this.sitePositions = res.result;
        }, err => {
          this.loading = false;
          this.loaded = true;
          console.log('err>>>>>>>>>', err);
        });
      } else {
        this.toastr.error('Start date cannot be greater then end date.');
      }

    } else {

      // Fetch data without date filter
      this.submitted = false;
      this.loading = true;
      this.loaded = false;
      this.sitePositions = [];
      this.dashboardService.getSiteTruckPostion(this.filters).subscribe((res: any) => {
        this.loading = false;
        this.loaded = true;

        res.result.forEach(element => {
          element.siteResult.forEach(e => {
            e.date = e.date ? momentTZ(e.date).tz('Asia/Calcutta').format('DD/MM/YYYY HH:mm:ss') : '--';
            e.billtytime = e.billtytime ? momentTZ(e.billtytime).tz('Asia/Calcutta').format('DD/MM/YYYY HH:mm:ss') : '--';
            e.placedtime = e.placedtime ? momentTZ(e.placedtime).tz('Asia/Calcutta').format('DD/MM/YYYY HH:mm:ss') : '--';
            e.timein = e.timein ? momentTZ(e.timein).tz('Asia/Calcutta').format('DD/MM/YYYY HH:mm:ss') : '--';
          });
        });

        this.sitePositions = res.result;
      }, err => {
        this.loading = false;
        this.loaded = true;
        console.log('err>>>>>>>>>', err);
      });
    }

  }

}
