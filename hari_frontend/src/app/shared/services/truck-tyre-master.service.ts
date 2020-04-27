import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TruckTyreMasterService {

  constructor(public api: ApiService) { }

  getList() {
    return this.api.get('truck_tyre_master/list');
  }

  getSearchList(query) {
    return this.api.get('truck_tyre_master/search?tyre_no=' + query);
  }

  getBrandList(query) {
    return this.api.get('truck_tyre_master/list_brand?q=' + query);
  }

  getCompanyList(query) {
    return this.api.get('truck_tyre_master/list_company?q=' + query);
  }

  getTyreList(query) {
    return this.api.get('truck_tyre_master/list_tyres?q=' + query);
  }

  createRecord(data) {
    return this.api.post('truck_tyre_master/create', data);
  }

  updatRecord(id, data) {
    return this.api.put('truck_tyre_master/update?id=' + id, data);
  }

  deleteRecord(k) {
    return this.api.delete('truck_tyre_master/delete', {params: k});
  }

  getDestinationList(query) {
    return this.api.get('meta/to_destinations?q=' + query);
  }

  getTruckInspectionList(fiters) {
    return this.api.get('tyre-management/truck_inspection/list', fiters);
  }

  addTruckInspection(data) {
    return this.api.post('tyre-management/truck_inspection/create', data);
  }

  updateTruckInspection(data) {
    return this.api.put('tyre-management/truck_inspection/update_inspection', data);
  }

  // Delete by $pull so it is put req.
  deleteTruckInspection(id, obj) {
    return this.api.put('tyre-management/truck_inspection/delete?id=' + id,  obj);
  }

  getTyreNo(query) {
    return this.api.get('meta/tyre_no', {q: query});
  }

  getNsdFromTyreNo(tyre_no) {
    return this.api.get('truck_inspection/get_tyre', tyre_no);
  }

  getTyrePosition(obj) {
    return this.api.get('tyre-management/truck_inspection/list_tyre', obj);
  }
}
