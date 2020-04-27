import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { ReportsService } from 'src/app/shared/services/reports.service';
import { ExcelService } from 'src/app/shared/services/excel.service';

@Component({
  selector: 'app-own-fleet-report-admin',
  templateUrl: './own-fleet-report-admin.component.html',
  styleUrls: ['./own-fleet-report-admin.component.scss']
})
export class OwnFleetReportAdminComponent implements OnInit {

  sitename: String;
  public form: FormGroup;
  filters = { site: '', start_date: '', end_date: '' };
  active_report = 'date';
  report_data = [];
  report_data_monthly = [];
  filterForm: FormGroup;
  dateFilters = { start_date: '', end_date: '' };

  constructor(
    private route: ActivatedRoute,
    public api: ApiService,
    public reportService: ReportsService,
    private formBuilder: FormBuilder,
    private excelService: ExcelService
  ) {
    this.filterForm = this.formBuilder.group({
      start_date: [0],
      end_date: [0]
    });
  }

  ngOnInit() {
    this.sitename = this.route.snapshot.paramMap.get('site');
    this.form = this.formBuilder.group({
      'filters': ['date'],
    });
    this.fetchData();
    this.fetchMonthlyData();
  }

  onReportParameterChange(val) {
    this.active_report = val;
  }

  fetchData() {
    this.filters.site = this.route.snapshot.paramMap.get('site');
    let startDt = '';
    let endDt = '';
    if (this.filterForm.controls['start_date'].value) {
      startDt = this.filterForm.controls['start_date'].value.year + '-' +
        this.filterForm.controls['start_date'].value.month + '-' +
        this.filterForm.controls['start_date'].value.day;
    } else {
      startDt = this.route.snapshot.paramMap.get('start_date');
      // this.filterForm.controls['start_date'].setValue(startDt);
    }

    if (this.filterForm.controls['end_date'].value) {
      endDt = this.filterForm.controls['end_date'].value.year + '-' +
        this.filterForm.controls['end_date'].value.month + '-' +
        (this.filterForm.controls['end_date'].value.day);
    } else {
      endDt = this.route.snapshot.paramMap.get('end_date');
      // this.filterForm.controls['end_date'].setValue(endDt);
    }
    this.filters.start_date = startDt;
    this.filters.end_date = endDt;

    this.reportService.getOwnFleetReportBySite(this.filters).subscribe((res: any) => {
      console.log(res);
      this.report_data = res;
    }, err => {

    });
  }

  fetchReport() {
    this.fetchData();
  }
  resetFilters() {

  }

  fetchMonthlyData() {
    this.filters.site = this.route.snapshot.paramMap.get('site');
    this.reportService.getOwnFleetReportBySiteMonthly(this.filters).subscribe((res: any) => {
      console.log(res);
      this.report_data_monthly = res;
    });
  }

  ExportAsExcel() {
    if (this.active_report === 'date') {
      this.excelService.exportAsExcelFile(this.report_data, this.sitename + '_fleet_report');
    } else {
      this.excelService.exportAsExcelFile(this.report_data_monthly, this.sitename + '_fleet_report');
    }
  }

}
