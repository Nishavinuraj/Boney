import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(public api: ApiService) { }

  getAllSite() {
    return this.api.get('plant_rate/get_all_site');
  }

  getEgaReport(filters) {
    return this.api.get('reports/ega',filters);
  }

  getTruckDestinationDetails(truck){
    return this.api.get('reports/truck_dest_details', {truckno: truck});
  }

  getMaxLrno(siteValue){
    return this.api.get('reports/max_lrno', {site: siteValue});
  }
  getMonthlyBalanceReport(filters){
    return this.api.get('reports/monthly-balance-chart', filters);
  }

  getUnderPerformanceTruckReport(filters){
    return this.api.get('reports/under-performance-truck-report', filters);
  }

  getUnderPerformanceTruckReportSite(filters){
    return this.api.get('reports/under-performance-truck-report-site', filters);
  }

  getDestinationBySite(filters) {
    return this.api.get('plant_rate/get_destination_by_site', filters);
  }


  getDispatchSummary(filters) {
    return this.api.get('reports/dispatch_summary', filters);
  }

  getDispatchSummarySite(filters) {
    return this.api.get('reports/dispatch_summary_site', filters);
  }

  getDispatchSummarySiteWise(filters) {
    return this.api.get('reports/dispatch_summary_site_wise', filters);
  }

  getDispatchSummarySiteWiseMonthly(filters) {
    return this.api.get('reports/dispatch_summary_site_wise_monthly', filters);
  }

  getOwnFleetReportBySite(filters) {
    return this.api.get('reports/own_fleet_report_by_site', filters);
  }

  getOwnFleetReportBySiteMonthly(filters) {
    return this.api.get('reports/own_fleet_report_by_site_monthly', filters);
  }

  getAccountReports(filters) {
    return this.api.get('accounts/ledger', filters);
  }

  getAccountItemsLedgerReports(filters) {
    return this.api.get('accounts/accountsitemsledger', filters);
  }

  getItemReports(filters) {
    return this.api.get('itemsl/ledger', filters);
  }

  getTruckLedgerReports(filters) {
    return this.api.get('trucksl/ledger', filters);
  }
  getOrderReports(filters) {
    return this.api.get('ordersl/ledger', filters);
  }

  getScrapReports(filters) {
    return this.api.get('scrapsl/ledger', filters);
  }
  getOwnFleetReport(filters) {
    return this.api.get('reports/ownfleet_report', filters);
  }

  getOwnFleetTruckReport(truckNo) {
    return this.api.get('reports/ownfleet_truck_report/' + truckNo);
  }
}
