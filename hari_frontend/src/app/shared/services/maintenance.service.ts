import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  constructor(public api: ApiService) { }

  getTruckRecords() {
    return this.api.get('truck_maintenance/list_trucks');
  }
  getItemMaster() {
    return this.api.get('inventory/items-master/all_items');
  }

  getScrapLedgerItemsList() {
    return this.api.get('inventory/items-master/scrapledger_items');
  }

  acceptTruckData(id, data) {
    return this.api.put('truck_maintenance/accept_truck_maintenance?id=' + id, data);
  }

  getAcceptedTruckRecords() {
    return this.api.get('truck_maintenance/accepted_trucks');
  }

  updateAcceptedTruck(data) {
    return this.api.put('truck_maintenance/update_accepted_truck', data);
  }

  getTyreRecords() {
    return this.api.get('tyre_maintenance/list_tyres');
  }

  acceptTyreData(id, data) {
    return this.api.put('tyre_maintenance/accept_tyre_maintenance?id=' + id, data);
  }

  getAcceptedTyreRecords() {
    return this.api.get('tyre_maintenance/accepted_tyres');
  }

  updateAcceptedTyre(data) {
    return this.api.put('tyre_maintenance/update_accepted_tyre', data);
  }

  addVendorMasterData(data) {
    return this.api.post('vendor_master/add', data);
  }

  addJobCard(data) {
    return this.api.post('job_card/add', data);
  }

  getJobNoList(srno) {
    return this.api.get('job_card/list_by_srno?srno=' + srno);
  }

  getMaxJobNo() {
    return this.api.get('job_card/max_jobno');
  }

  getJobNoJobDetails(jobno) {
    return this.api.get('job_card/list_by_jobno?jobno=' + jobno);
  }

  getLocations(filters) {
    return this.api.get('vendor_master/locations?q=' + filters);
  }

  getVendorType(filters) {
    return this.api.get('vendor_master/vendor_type?q=' + filters);
  }

  // getVendorName(filters) {
  //   return this.api.get('vendor_master/vendorname?q=' + filters);
  // }

  getSpecializedIn(filters) {
    return this.api.get('vendor_master/specialized_in?q=' + filters);
  }

  uploadBill(data) {
    return this.api.post('job_card/upload_bill', data);
  }

  getVendorMasterList() {
    return this.api.get('vendor_master/list');
  }

  deleteVendor(id) {
    return this.api.delete('vendor_master/' + id);
  }

  updateVendorMaster(data) {
    return this.api.put('vendor_master', data);
  }

  getWorkDoneList(query) {
    return this.api.get('job_card/list_work_done?q=' + query);
  }

  getVendorNameList(query) {
    return this.api.get('vendor_master/search_vendor_name?q=' + query);
  }

  getLastDoneOn(t, wd) {
    return this.api.get('job_card/get_last_done_on?truckno=' + t + '&work_be_done=' + wd);
  }

  getTruckHistory(query) {
    return this.api.get('job_card/truck_jobcard_history?truckno=' + query);
  }

  updateJobCard(data) {
    return this.api.put('job_card/update', data);
  }

  deleteJobCard(query) {
    return this.api.delete('job_card/delete?jobno=' + query);
  }
}
