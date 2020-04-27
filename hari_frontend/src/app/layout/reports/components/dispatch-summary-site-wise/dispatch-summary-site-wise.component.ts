import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { ReportsService } from 'src/app/shared/services/reports.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ExcelService } from 'src/app/shared/services/excel.service';


@Component({
  selector: 'app-dispatch-summary-site-wise',
  templateUrl: './dispatch-summary-site-wise.component.html',
  styleUrls: ['./dispatch-summary-site-wise.component.scss']
})
export class DispatchSummarySiteWiseComponent implements OnInit {

  summary: JSON;
  sitename: String;
  filters = { site: '', start_date: '', end_date: '' };
  mFilters = { site: '', year: '' };
  report_data = [];
  report_data_monthly = [];
  active_report = 'date';
  startDt = '';
  endDt = '';

  public form: FormGroup;

  constructor(private route: ActivatedRoute,
    public api: ApiService,
    public reportService: ReportsService,
    private formBuilder: FormBuilder,
    private excelService: ExcelService
  ) { }

  ngOnInit() {
    // console.log(this.route.snapshot.paramMap.get('site'));
    // console.log(this.route.snapshot.paramMap.get('start_date'));
    // console.log(this.route.snapshot.paramMap.get('end_date'));
    // this.summary = this.route.snapshot.paramMap.get('site');
    //  this.summary = JSON.parse(this.route.snapshot.paramMap.get('site'));
    //  console.log(this.summary);

    this.sitename = this.route.snapshot.paramMap.get('site');
    this.startDt = this.route.snapshot.paramMap.get('start_date');
    this.endDt = this.route.snapshot.paramMap.get('end_date');
    // this.filters.site = this.route.snapshot.paramMap.get('site');
    // this.filters.start_date = this.startDt ;
    // this.filters.site = this.endDt;
    // this.form = new FormGroup({
    //   filters: new FormControl('filters'),
    //   start_date: new FormControl('start_date'),
    //   end_date: new FormControl('end_date'),
    // });

    this.form = this.formBuilder.group({
      'filters': ['date'],
      // 'start_date': [this.startDt],
      // 'end_date': [this.endDt],
    });
    // if (this.form.get('start_date') != null) {
    //   this.form.get('start_date').setValue(this.startDt);
    // }
    // if (this.form.get('end_date') != null) {
    //   this.form.get('end_date').setValue(this.endDt);
    // }
    this.fetchhData();
    this.fetchMonthWiseData();
  }

  onReportParameterChange(val) {
    console.log(val);
    this.active_report = val;
  }

  fetchhData() {
    /// dispatch_summary_site_wise


    this.filters.site = this.route.snapshot.paramMap.get('site');
    this.filters.start_date = this.route.snapshot.paramMap.get('start_date');
    this.filters.end_date = this.route.snapshot.paramMap.get('end_date');
    // console.log(this.filters);
    this.reportService.getDispatchSummarySiteWise(this.filters).subscribe((res: any) => {
      console.log('dailyreport');
      console.log(res);
      this.report_data = res;
    }, err => {

    });
  }

  fetchMonthWiseData() {
    this.mFilters.site = this.route.snapshot.paramMap.get('site');
    this.mFilters.year = '2020';

    // console.log('monthly report filter');
    // console.log(this.mFilters);
    this.reportService.getDispatchSummarySiteWiseMonthly(this.mFilters).subscribe((res: any) => {
      // console.log('monthly report');
      // console.log(res);
      this.report_data_monthly = res;
    }, err => {

    });
  }



  ExportAsExcel() {
    if (this.active_report === 'date') {
      this.excelService.exportAsExcelFile(this.report_data, this.sitename + '_dispatch_summary');
    } else {
      this.excelService.exportAsExcelFile(this.report_data_monthly, this.sitename + '_dispatch_summary');
    }
  }

}
