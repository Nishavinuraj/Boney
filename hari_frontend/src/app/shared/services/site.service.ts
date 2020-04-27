import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(public api: ApiService) { }

  getRecords(filters) {
    return this.api.get('site_management/principal_billing', filters);
  }

  deleteRecord(k) {
    return this.api.delete('billing/bill_delete', {params: k});
  }

  deleteBillByNumber(id) {
    return this.api.delete('billing/bill_delete_by_bill_no', {params: id});
  }

  deleteLedgerByBillNumber(id) {
    return this.api.delete('billing/delete_principle_billing_posting', {params: id});
  }

  saveRecord(data) {
    return this.api.post('billing/insert_bill', data);
  }

  getBillNo(site, accountname) {
    return this.api.get('billing/billing_maxnum?site=' + site + '&accountname=' + accountname);
  }

  getBillingRecords() {
    return this.api.get('billing/billing_list');
  }

  getBillNumberData(bill_no, site_name, account_name) {
    return this.api.get('billing/bill_number_data?bill_no=' + bill_no + '&site_name=' + site_name + '&account_name=' + account_name);
  }

  addTruckPosition(data) {
    return this.api.post('plants_truck_position/add', data);
  }

  deleteTruckPosition(k) {
    return this.api.delete('plants_truck_position/delete', {params: k});
  }

  updateTruckPosition(data) {
    return this.api.put('plants_truck_position/update', data);
  }

  getTruckPosition(filters) {
    return this.api.get('plants_truck_position/list', filters);
  }

  getDestinationList(query) {
    return this.api.get('meta/to_destinations?q=' + query);
  }

  getBilltyList(truckNo) {
    return this.api.get('reports/billty_latest?truck_no=' + truckNo);
  }

  updateBillties(data) {
    return this.api.put('plants_truck_position/update_billty_time', data);
  }

  updatePlacedtime(data) {
    return this.api.put('plants_truck_position/update_placed_time', data);
  }

  getTruckPositionList(query) {
    return this.api.get('meta/trucks?q=' + query);
  }

  getCompanyTruckPositionList(query) {
    return this.api.get('meta/company_trucks?q=' + query);
  }

  getLrNumber(filters) {
    return this.api.get('meta/lr_numbers', filters);
  }

  cancelPositionEntry(data) {
    return this.api.put('plants_truck_position/cancel_position_entry', data);
  }

  getDocumentStatus(params) {
    return this.api.get('plants_truck_position/document_names', params);
  }

  getConsignorCity(consignor) {
    return this.api.get('accounts/consignor_city?consignor=' + consignor);
  }

  principleBillingPosting(data) {
    return this.api.post('accounts/principle_billing_posting', data);
  }

  updateBillByLrNo(billno, lrno, data) {
    return this.api.put('billing/update_bill?billno=' + billno + '&lrno=' + lrno, data);
  }
}
