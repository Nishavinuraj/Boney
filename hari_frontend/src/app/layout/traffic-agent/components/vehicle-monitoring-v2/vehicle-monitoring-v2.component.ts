import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { routerTransition } from 'src/app/router.animations';
import { TrafficAgentService } from 'src/app/shared/services/traffic-agent.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var moment: any;
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ExcelService } from 'src/app/shared/services/excel.service';
import { SiteService } from 'src/app/shared/services/site.service';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vehicle-monitoring-v2',
  templateUrl: './vehicle-monitoring-v2.component.html',
  styleUrls: ['./vehicle-monitoring-v2.component.scss']
})
export class VehicleMonitoringV2Component implements OnInit {

  @ViewChild('section2') sectoion2DivRef: ElementRef;

  filterForm: FormGroup;
  editForm: FormGroup;
  historyForm: FormGroup;

  agents = [];
  sites = [];
  loading = false;
  loaded = true;
  // pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };

  filterKeys: string[] = ['truckno'];
  filteredData = [];
  text_filter = '';

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

  selected_truck;

  active_report = 'date';
  screen3FilterForm: FormGroup;
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
  historyFormFilters = {
    truck_no: ''
  };
  dateWiseReport = [];
  summaryReport;
  monthWiseReport = [];
  performanceWiseReport = [];
  vehicle_no: any;
  years = [];
  historyReports = [];
  no_driver_img = '';

  constructor(
    public agentService: TrafficAgentService,
    public meta: MetaService,
    public fb: FormBuilder,
    public site: SiteService,
    private excelService: ExcelService,
    private toastr: ToastrService,
    private calendar: NgbCalendar
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

    this.screen3FilterForm = this.fb.group({
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

    this.historyForm = this.fb.group({
      truck_no: ['']
    });

    for (let i = 2025; i >= 2015; i--) {
      this.years.push({ year: i });
    }
  }

  ngOnInit() {
    this.getAgentList();
    this.getHistoryTabData();

    this.no_driver_img = 'assets/images/driver.png';
  }

  filterTruckData(): void {
    if (this.text_filter !== '') {
      this.filteredData = this.report_data.filter(obj =>
        this.filterKeys.some(propertyName =>
          obj[propertyName].toString().toLowerCase().includes(this.text_filter.toLowerCase())));
    } else {
      this.filteredData = this.report_data;
    }
  }

  goToReport3() {
    const el = document.getElementById('screen3');
    el.scrollIntoView({behavior: 'smooth'});
  }

  getAgentList() {
    this.meta.getTrafficAgents().subscribe(
      (res: any) => {
        this.agents = res;
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
    this.agentService.getMaitanenceTrucksData(this.filters).subscribe((res: any) => {
      this.loading = false;
      this.loaded = true;
      res.result.forEach(element => {
        element.editing = false;
        element.formatted_time = element.time;

        if (element.tyre_maintenance === 'Yes' || element.tyre_maintenance === true) {
          element.tyre_maint =  true;
          element.tyre_maintenance = true;
          element.tyre_m = 'Yes';
        } else {
          element.tyre_maint =  false;
          element.tyre_maintenance = false;
          element.tyre_m = 'No';
        }

        if (element.truck_maintenance === 'Yes' || element.truck_maintenance === true) {
          element.truck_maint =  true;
          element.truck_maintenance = true;
          element.truck_m = 'Yes';
        } else {
          element.truck_maint =  false;
          element.truck_maintenance = false;
          element.truck_m = 'No';
        }

        const c = moment().subtract(360, 'minutes').format('YYYY-MM-DD HH:mm:ss');
        const g = moment(element.time ).format('YYYY-MM-DD HH:mm:ss');

        const active_time = moment.utc(g, 'YYYY-MM-DD[T]HH:mm[Z]');
        const current_time = moment.utc(c, 'YYYY-MM-DD[T]HH:mm[Z]');
        // console.log('>>>>>>active_time : ', active_time);
        // console.log('>>>>>>current_time : ', current_time);
        // console.log('>>>>>> : ', );
        if (active_time.isAfter(current_time) === false) {
          console.log('>>>>>>active_time : ', active_time);
          element.is_after = true;
        } else {
          element.is_after = false;
        }

      });
      console.log('>>>>>>active_time : ', res.result);
      this.report_data = res.result;
      this.filterTruckData();

    }, err => {
      this.loading = false;
      this.loaded = true;
      console.log('>>>>>>err', err);
    });

  }

  edit(data) {
    data.editing = true;
  }

  cancel(data) {
    data.editing = false;
  }

  update(record) {
    const data = JSON.parse(JSON.stringify(record));
    // data.time = moment(data.time.hour + ':' + data.time.minute + ':' + data.time.second, 'HH:mm:ss').format();
    // record.formatted_time = data.time;
    // console.log(record.formatted_time);
    if (data.truck_maintenance === true || data.truck_maintenance === 'Yes') {
      data.truck_maintenance = 'Yes';
    } else {
      data.truck_maintenance = 'No';
    }

    if (data.tyre_maintenance === true || data.tyre_maintenance === 'Yes') {
      data.tyre_maintenance = 'Yes';
    } else {
      data.tyre_maintenance = 'No';
    }
    this.loading = true;
    this.agentService.saveMaintanenceDate(data).subscribe((resp: any) => {

      this.agentService.updateMaintanenceDate(data).subscribe((res: any) => {

        console.log('>>>>>>resp', resp);
        console.log('>>>>>>res', res);
        this.loading = false;
        record.editing = false;
        this.toastr.success('Updated successfully.');
        this.fetch();
      }, err => {
        this.loading = false;
        record.editing = false;
        this.toastr.error('Could not add monitoring data. Something went wrong. We are looking into it.');
        console.log('>>>>>>err', err);
        this.fetch();
      });

    }, err => {
      this.toastr.error('Could not save monitoring data. Something went wrong. We are looking into it.');
      console.log('>>>>>>err', err);
    });

  }

  onTruckNoClick(r) {
    r.loading = true;
    this.agentService.getMonitoringDataByTruck({truckno: r.truckno}).subscribe((res: any) => {
      this.selected_truck = res.result;

      this.dateWiseFrom.controls['truck_no'].setValue(this.selected_truck.truckno);
      this.dateWiseFrom.controls['start_date'].setValue(this.calendar.getToday());
      this.dateWiseFrom.controls['end_date'].setValue(this.calendar.getToday());
      this.monthWiseForms.controls['start_date'].setValue(this.calendar.getToday());
      this.monthWiseForms.controls['end_date'].setValue(this.calendar.getToday());
      this.monthWiseForms.controls['truck_no'].setValue(this.selected_truck.truckno);
      this.performanceForms.controls['truck_no'].setValue(this.selected_truck.truckno);
      this.performanceForms.controls['year'].setValue(moment().year());
      this.fetchDateWiseData();
      setTimeout(() => {
        r.loading = false;
        const el = document.getElementById('section2');
        el.scrollIntoView({behavior: 'smooth'});
      }, 2000);
      // this.sectoion2DivRef.scrollIntoView(});
    }, err => {
      r.loading = false;
      this.toastr.error('Something went wrong when getting truck data.', 'Error');
    });
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
          console.log(' Date wise report', res.result );
          this.agentService.getSummaryReport(this.dateFilters).subscribe((res1: any) => {
            this.loading = false;
            this.loaded = true;
            this.summaryReport = res1.result;
            console.log(' Summary report', res1.result );
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

  getHistoryTabData() {

    console.log('><<<<<<<<<<<<Value', this.historyForm.value.truck_no);

    if (this.historyForm.value.truck_no) {
      this.historyFormFilters.truck_no = this.historyForm.value.truck_no;
    } else {
      this.historyFormFilters.truck_no = '';
    }

    this.loading = true;
    this.loaded = false;
    this.historyReports = [];
    this.agentService.getMonitoringList(this.historyFormFilters).subscribe((res: any) => {
        this.loading = false;
        this.loaded = true;

        res.result.forEach(element => {
          element.date = moment(element.date).format('DD/MM/YYYY');
          element.time = moment(element.time).format('HH:mm:ss');
        });

        this.historyReports = res.result;
      },
      err => {
        this.loading = false;
        this.loaded = true;
        console.log('>>>>Err', err);
      }
    );
  }

}
