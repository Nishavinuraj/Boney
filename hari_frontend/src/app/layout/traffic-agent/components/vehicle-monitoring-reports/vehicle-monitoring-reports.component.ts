import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  } from '@angular/forms';
import { Observable } from 'rxjs';
import { SiteService } from 'src/app/shared/services/site.service';
import { TrafficAgentService } from 'src/app/shared/services/traffic-agent.service';
declare var moment:any
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ExcelService } from 'src/app/shared/services/excel.service';

@Component({
  selector: 'app-vehicle-monitoring-reports',
  templateUrl: './vehicle-monitoring-reports.component.html',
  styleUrls: ['./vehicle-monitoring-reports.component.scss']
})

export class VehicleMonitoringReportsComponent implements OnInit {
  active_report = 'date';
  form: FormGroup;
  dateWiseFrom: FormGroup;
  monthWiseForms: FormGroup;
  performanceForms: FormGroup;
  dateFilters = {
    start_date: '',
    end_date: '',
    truck_no: '',
    page: 1
  };
  monthFilters = {
    start_date: '',
    end_date: '',
    truckno: ''
  };
  performanceFilters = {
    truckno: '',
    year: ''
  };
  dateWiseReport = [];
  summaryReport;
  monthWiseReport = [];
  performanceWiseReport = [];
  loading = false;
  loaded = true;
  years = [];
  submitted = false;
  pagination = {total: 0, currenPage: 1, pageSize: 50, maxSize: 10};
  vehicle_no: any;

  constructor(
    public fb: FormBuilder,
    public site: SiteService,
    public agentService: TrafficAgentService,
    public toastr: ToastrService,
    public activatedRoute: ActivatedRoute,
    private calendar: NgbCalendar,
    private excelService: ExcelService

  ) {}

  ngOnInit() {
    // const table = TableExport(document.getElementById("export-buttons-table"));

    this.form = this.fb.group({
      filters: ['date']
    });

    this.dateWiseFrom = this.fb.group({
      start_date: [''],
      end_date: [''],
      truck_no: ['']
    });

    this.monthWiseForms = this.fb.group({
      start_date: [''],
      end_date: [''],
      truck_no: ['']
    });

    this.performanceForms = this.fb.group({
      year: [''],
      truck_no: ['']
    });

    this.activatedRoute.params.subscribe(res => {
      if (res.truck_no) {
        this.vehicle_no = res.truck_no;
        this.dateWiseFrom.controls['truck_no'].setValue(this.vehicle_no);
        this.dateWiseFrom.controls['start_date'].setValue(this.calendar.getToday());
        this.dateWiseFrom.controls['end_date'].setValue(this.calendar.getToday());
        this.monthWiseForms.controls['start_date'].setValue(this.calendar.getToday());
        this.monthWiseForms.controls['end_date'].setValue(this.calendar.getToday());
        this.monthWiseForms.controls['truck_no'].setValue(this.vehicle_no);
        this.performanceForms.controls['truck_no'].setValue(this.vehicle_no);
        this.performanceForms.controls['year'].setValue(moment().year());
        this.fetchDateWiseData();
        this.fetchMonthWiseData();
        this.fetchPerformanceWiseData();
      } else {
        this.vehicle_no = '--';
      }
    });

    for (let i = 2025; i >= 2015; i--) {
      this.years.push({ year: i });
    }
  }

  // Search query for truck no list
  truckPosition = (keyword: any): Observable<any[]> => {
    if (keyword) {
      return this.site.getTruckPositionList(keyword).map((res: any) => {
        return res;
      });
    } else {
      return Observable.of([]);
    }
  }

  onReportParameterChange(val) {
    console.log(val);
    this.active_report = val;
  }

  fetchDateWiseData() {
    let sDate = this.dateWiseFrom.value.start_date;
    let eDate = this.dateWiseFrom.value.end_date;

    sDate = sDate.year + '-' + sDate.month + '-' + sDate.day;
    eDate = eDate.year + '-' + eDate.month + '-' + eDate.day;

    const stDate = moment(sDate, 'YYYY-MM-DD');
    const edDate = moment(eDate, 'YYYY-MM-DD');

    if (stDate <= edDate) {

      if (this.dateWiseFrom.value.start_date) {
        this.dateFilters.start_date = sDate;
      } else {
        this.dateFilters.start_date = '';
      }

      if (this.dateWiseFrom.value.end_date) {
        this.dateFilters.end_date = eDate;
      } else {
        this.dateFilters.end_date = '';
      }

      if (this.dateWiseFrom.value.truck_no) {
        this.dateFilters.truck_no = this.dateWiseFrom.value.truck_no;
      } else {
        this.dateFilters.truck_no = '';
      }

      this.loading = true;
      this.loaded = false;
      this.dateWiseReport = [];
      this.agentService.getDateWiseReport(this.dateFilters).subscribe((res: any) => {
          this.loading = false;
          this.loaded = true;
          res.result.forEach(element => {
            element.date = moment(element.date, 'YYYY-MM-DD').format('DD/MM/YYYY');
          });
          this.dateWiseReport = res.result;
          this.agentService.getSummaryReport(this.dateFilters).subscribe((res1: any) => {
            this.loading = false;
            this.loaded = true;
            this.summaryReport = res1.result;
          },
          err1 => {
            this.loading = false;
            this.loaded = true;
            console.log('>>>>Err', err1);
          }
        );
        },
        err => {
          this.loading = false;
          this.loaded = true;
          console.log('>>>>Err', err);
        }
      );

      





    } else {
      this.toastr.error('Start date cannot be greater then end date.');
    }
  }

  fetchMonthWiseData() {
    let sDate = this.monthWiseForms.value.start_date;
    let eDate = this.monthWiseForms.value.end_date;

    sDate = sDate.year + '-' + sDate.month + '-' + sDate.day;
    eDate = eDate.year + '-' + eDate.month + '-' + eDate.day;

    const stDate = moment(sDate, 'YYYY-MM-DD');
    const edDate = moment(eDate, 'YYYY-MM-DD');

    if (stDate <= edDate) {

      if (this.monthWiseForms.value.start_date) {
        this.monthFilters.start_date = sDate;
      } else {
        this.monthFilters.start_date = '';
      }

      if (this.monthWiseForms.value.end_date) {
        this.monthFilters.end_date = eDate;
      } else {
        this.monthFilters.end_date = '';
      }

      if (this.monthWiseForms.value.truck_no) {
        this.monthFilters.truckno = this.monthWiseForms.value.truck_no;
      } else {
        this.monthFilters.truckno = '';
      }

      this.loading = true;
      this.loaded = false;
      this.monthWiseReport = [];
      this.agentService.getMonthWiseReport(this.monthFilters).subscribe((res: any) => {
          this.loading = false;
          this.loaded = true;
          this.monthWiseReport = res.result;
        },
        err => {
          this.loading = false;
          this.loaded = true;
          console.log('>>>>Err', err);
        }
      );
    } else {
      this.toastr.error('Start date cannot be greater then end date.');
    }

  }

  fetchPerformanceWiseData() {

    if (this.performanceForms.value.year) {
      this.performanceFilters.year = this.performanceForms.value.year;
    } else {
      this.performanceFilters.year = '';
    }

    if (this.performanceForms.value.truck_no) {
      this.performanceFilters.truckno = this.performanceForms.value.truck_no;
    } else {
      this.performanceFilters.truckno = '';
    }

    this.loading = true;
    this.loaded = false;
    this.performanceWiseReport = [];
    this.agentService.getPerfromanceWiseReport(this.performanceFilters).subscribe((res: any) => {
        this.loading = false;
        this.loaded = true;
        this.performanceWiseReport = res.result;
      },
      err => {
        this.loading = false;
        this.loaded = true;
        console.log('>>>>Err', err);
      }
    );
  }

  exportDateWiseReport(): void {
    this.excelService.exportAsExcelFile(this.dateWiseReport, this.dateWiseFrom.value.truck_no + '_daily');
  }

  exportMonthWiseReport(): void {
    this.excelService.exportAsExcelFile(this.monthWiseReport, this.monthWiseForms.value.truck_no + '_monthly');
  }
}
