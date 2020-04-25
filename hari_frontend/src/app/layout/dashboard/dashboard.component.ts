import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ApiService } from 'src/app/shared/services/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

declare var Chart;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  public dispatchCount: Number;
  public advanceCount: Number;
  public bankBalanceCount: Number;
  public billingCount: Number;
  public unBilledCount: Number;
  public podCount: Number;
  public cashBalanceCount: Number;
  public pieData: Array<any>;

  public dispatch_summary_data = { result: [] };
  public report_data = [];
  public flags = {
    pieDataLoaded: false,
    advancePieDataLoaded: false,
    unBilledPieDataLoaded: false,
    bankBalancePieDataLoaded: false,
    cashBalancePieDataLoaded: false,
    billingPieDataLoaded: false
  };

  // Pie
  public barChartOptions: any = {
    legend: {
      display: true,
      position: 'right',
    },
    responsive: true
  };

  // Dispatched variables
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: string;

  // Advance chart variables
  public advancePieChartLabels: string[] = [];
  public advancePieChartData: number[] = [];

  // unBilled chart variables
  public unBilledPieChartLabels: string[] = [];
  public unBilledPieChartData: number[] = [];

  // bank balance chart variables
  public bankBalancePieChartLabels: string[] = [];
  public bankBalancePieChartData: number[] = [];

  // billing chart variables
  public billingPieChartLabels: string[] = [];
  public billingPieChartData: number[] = [];

  // cash balance chart variables
  public cashBalancePieChartLabels: string[] = [];
  public today = '';
  public cashBalancePieChartData: number[] = [];

  public form: FormGroup;
  public loading = false;

  constructor(public api: ApiService, private formBuilder: FormBuilder, private myRouter: Router) {
    this.pieChartType = 'pie';
    Chart.defaults.global.defaultFontFamily = 'Nunito Sans'; // default chart fonts
    this.dispatched();
    this.advanced();
    this.balanced();
    this.billed();
    this.unBilled();
    this.pod();
    this.cashBalance();
    this.siteWiseDispatchChart('today');
    this.advanceChart('today');
    this.unbilledChart('today');
    this.bankBalancChart('today');
    this.billingChart('today');
    this.cashBalanceChart('today');
    this.dispatchReport('site');
    this.fleetPerformanceReport('site');
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'dispatched': ['today'],
      'advanced': ['today'],
      'unbilled': ['today'],
      'balanced': ['today'],
      'billed': ['today'],
      'dispatch': ['site'],
      'fleet_performance': ['site'],
      'start_date': [''],
      'end_date': ['']
    });
  }



  onSiteSelect(val) {
    // console.log('on site select >>>>', val);
    const startDt = this.getTodaysDate();
    const endDt = this.getTodaysDate();
    this.myRouter.navigate(['/reports/own_fleet_performance_admin', { site: val._id.site, start_date: startDt, end_date: endDt }]);
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  // events
  public advanceChartClicked(e: any): void {
    console.log(e);
  }

  // events
  public unBilledChartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public advanceChartHovered(e: any): void {
    console.log(e);
  }

  public unBilledChartHovered(e: any): void {
    console.log(e);
  }

  onDispatchChange(val) {
    this.siteWiseDispatchChart(val);
  }

  onAdvanceChange(val) {
    this.advanceChart(val);
  }

  onUnbilledChange(val) {
    this.unbilledChart(val);
  }

  onBankBalanceChange(val) {
    this.bankBalancChart(val);
  }


  onBillingChange(val) {
    this.billingChart(val);
  }

  onCashBalanceChange(val) {
    this.cashBalanceChart(val);
  }

  onDispatchParameterChange(val) {
    this.dispatchReport(val);
  }

  onFleetPerformanceParameterChange(val) {
    this.fleetPerformanceReport(val);
  }

  refreshPage() {
    this.dispatched();
    this.advanced();
    this.balanced();
    this.billed();
    this.unBilled();
    this.pod();
    this.cashBalance();
    this.siteWiseDispatchChart('today');
    this.advanceChart('today');
    this.unbilledChart('today');
    this.bankBalancChart('today');
    this.billingChart('today');
    this.cashBalanceChart('today');
    this.dispatchReport('site');
    this.fleetPerformanceReport('site');
  }

  dispatched() {
    this.api.get('dashboard/dispatch').subscribe((res: any) => {
      this.dispatchCount = res.total ? res.total : 0;
      // console.log(this.dispatchCount);
    }, err => {

    });
  }

  advanced() {
    this.api.get('dashboard/advance').subscribe((res: any) => {
      this.advanceCount = res.total ? res.total : 0;
      console.log(this.advanceCount);
    }, err => {

    });
  }

  balanced() {
    this.api.get('bankbalance/account_info').subscribe((res: any) => {
      this.bankBalanceCount = res.total_balance ? res.total_balance : 0;
    }, err => {

    });
  }

  billed() {
    this.api.get('bankbalance/billing').subscribe((res: any) => {
      this.billingCount = res.total_balance ? res.total_balance : 0;
    }, err => {

    });
  }

  unBilled() {
    this.api.get('dashboard/unbilled').subscribe((res: any) => {
      this.unBilledCount = res.newamount ? res.newamount : 0;
    }, err => {

    });
  }

  // Get api for pod
  pod() {
    this.api.get('dashboard/unbilled').subscribe((res: any) => {
      this.podCount = 100;
    }, err => {

    });
  }

  // Get api for cash balance
  cashBalance() {
    this.api.get('bankbalance/cash_balance').subscribe((res: any) => {
      this.cashBalanceCount = res.total_balance ? res.total_balance : 0;
    }, err => {

    });
  }

  // Api for dispatched Chart
  siteWiseDispatchChart(val) {
    this.flags.pieDataLoaded = false;
    this.pieChartLabels = [];
    this.pieChartData = [];
    this.api.get('dashboard/charts/dispatch?period=' + val).subscribe((res: any) => {
      res.forEach(d => {
        this.pieChartLabels.push(d._id + ': ' + d.total);
        this.pieChartData.push(d.total);
        this.flags.pieDataLoaded = true;
      });
      // console.log(this.pieChartLabels);
    }, err => {

    });
  }

  // Api for advance chart
  advanceChart(val) {
    this.flags.advancePieDataLoaded = false;
    this.advancePieChartLabels = [];
    this.advancePieChartData = [];
    this.api.get('dashboard/charts/advance?period=' + val).subscribe((res: any) => {
      res.forEach(d => {
        this.advancePieChartLabels.push(d._id + ': ' + d.total);
        this.advancePieChartData.push(d.total);
        this.flags.advancePieDataLoaded = true;
      });
      // console.log(this.advancePieChartLabels);
    }, err => {

    });
  }

  // Api for unbuild chart
  unbilledChart(val) {
    this.flags.unBilledPieDataLoaded = false;
    this.unBilledPieChartLabels = [];
    this.unBilledPieChartData = [];
    this.api.get('dashboard/charts/unbilled?period=' + val).subscribe((res: any) => {
      res.forEach(d => {
        this.unBilledPieChartLabels.push(d._id ? d._id + ': ' + d.newamount : 'N/A' + ': ' + d.newamount);
        this.unBilledPieChartData.push(d.newamount);
        this.flags.unBilledPieDataLoaded = true;
      });
    }, err => {

    });
  }

  // Api for bank balance chart
  bankBalancChart(val) {
    this.flags.bankBalancePieDataLoaded = false;
    this.bankBalancePieChartLabels = [];
    this.bankBalancePieChartData = [];
    this.api.get('bankbalance/chart/account_info?period=' + val).subscribe((res: any) => {
      res.forEach(d => {
        this.bankBalancePieChartLabels.push(d.accountname ? d.accountname + ': ' + d.balance : 'N/A' + ': ' + d.balance);
        this.bankBalancePieChartData.push(d.balance);
        this.flags.bankBalancePieDataLoaded = true;
      });
    }, err => {

    });
  }

  // api for billing chart
  billingChart(val) {
    this.flags.billingPieDataLoaded = false;
    this.billingPieChartLabels = [];
    this.billingPieChartData = [];
    this.api.get('bankbalance/chart/billing?period=' + val).subscribe((res: any) => {
      res.forEach(d => {
        this.billingPieChartLabels.push(d.accountname ? d.accountname + ': ' + d.balance : 'N/A' + ': ' + d.balance);
        this.billingPieChartData.push(d.balance);
        this.flags.billingPieDataLoaded = true;
      });
    }, err => {

    });
  }

  // api for billing chart
  cashBalanceChart(val) {
    this.flags.cashBalancePieDataLoaded = false;
    this.cashBalancePieChartLabels = [];
    this.cashBalancePieChartData = [];
    this.api.get('bankbalance/chart/cash_balance?period=' + val).subscribe((res: any) => {
      res.forEach(d => {
        this.cashBalancePieChartLabels.push(d.accountname ? d.accountname + ': ' + d.balance : 'N/A' + ': ' + d.balance);
        this.cashBalancePieChartData.push(d.balance);
        this.flags.cashBalancePieDataLoaded = true;
      });
    }, err => {

    });
  }

  getTodaysDate() {
    const today = new Date();
    return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  }
  getLastMonthStartDate() {
    const today = new Date();
    today.setDate(today.getDate() - 30);
    return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  }

  getThisMonthFirstDate() {
    const today = new Date();
    return today.getFullYear() + '-' + (today.getMonth() + 1) + '-01';
  }

  getAprilDate() {
    const today = new Date();
    today.setDate(today.getDate() - 365);
    return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  }

  getTommrowsDate() {
    const today = new Date();
    return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 1);
  }
  // api for dispatch Report
  dispatchReport(val) {

    const startDt = this.getTodaysDate();
    const endDt = this.getTodaysDate();

    // if (this.form.controls['start_date'].value) {
    //   startDt = this.form.controls['start_date'].value.year + '-' +
    //     this.form.controls['start_date'].value.month + '-' +
    //     this.form.controls['start_date'].value.day;
    // } else {
    //   startDt = this.getTodaysDate();
    // }

    // if (this.form.controls['end_date'].value) {
    //   endDt = this.form.controls['end_date'].value.year + '-' +
    //     this.form.controls['end_date'].value.month + '-' +
    //     (this.form.controls['end_date'].value.day + 1);
    // } else {
    //   endDt = this.getTommrowsDate();
    // }

    // tslint:disable-next-line:max-line-length
    this.loading = true;
    this.api.get('reports/dispatch_summary?start_date=' + startDt + '&end_date=' + endDt + '&page=1').subscribe((res: any) => {
      console.log(res);
      this.loading = false;
      this.dispatch_summary_data = res;
    }, err => {
      this.loading = false;
    });
  }

  fleetPerformanceReport(val) {
    // const startDt = this.getLastMonthStartDate();
    // const startDt = this.getAprilDate();
    const startDt = this.getThisMonthFirstDate();
    const endDt = this.getTodaysDate();
    this.loading = true;
    this.api.get('reports/sitewise_own_fleet_report?start_date=' + startDt  + '&end_date=' + endDt).subscribe((res: any) => {
      this.loading = false;
      console.log('ownfleet_report');
      console.log(startDt);
      console.log(res);
      this.report_data = res;
    }, err => {
      this.loading = false;
    });
  }

  fetchReport() {
    console.log(this.form.controls['start_date'].value);
    console.log(this.form.controls['end_date'].value);
  }

  resetFilters() {
    console.log(this.form.controls['start_date'].value);
    console.log(this.form.controls['end_date'].value);
  }
}
