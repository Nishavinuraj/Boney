import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class TyremanagementService {

  constructor(public api: ApiService) { }
  // Tyre-master
  addTm(data) {
    return this.api.post('tyre-management/tyre-master', data);
  }
  getTm(id) {
    return this.api.get('tyre-management/tyre-master/' + id);
  }

  updatTm(id, data) {
    return this.api.put('tyre-management/tyre-master?id=' + id, data);
  }
  deleteTm(id) {
    return this.api.delete(`tyre-management/tyre-master/${id}`);
  }
  
  
  getCompanyTcm(name) {
    return this.api.get('tyre-management/tyre-company-master/company/' + name);
  }
  
  getVendorMasterList() {
    return this.api.get('vendor_master/list');
  }

  // Tyre-company-master
  addTcm(data) {
    return this.api.post('tyre-management/tyre-company-master', data);
  }
  getTcm(id) {
    return this.api.get('tyre-management/tyre-company-master/' + id);
  }

  updatTcm(id, data) {
    return this.api.put('tyre-management/tyre-company-master?id=' + id, data);
  }
  deleteTcm(id) {
    return this.api.delete(`tyre-management/tyre-company-master/${id}`);
  }

  // Observation and Recommendation
  addOar(data) {
    return this.api.post('tyre-management/observation-and-recommendation', data);
  }
  getOar(id) {
    return this.api.get('tyre-management/observation-and-recommendation/' + id);
  }

  getAllOar() {
    return this.api.get('tyre-management/observation-and-recommendation/all');
  }

  updatOar(id, data) {
    return this.api.put('tyre-management/observation-and-recommendation?id=' + id, data);
  }
  deleteOar(id) {
    return this.api.delete(`tyre-management/observation-and-recommendation/${id}`);
  }
  // Truck inspection
  addTi(data) {
    return this.api.post('tyre-management/truck_inspection', data);
  }
  getTi(id) {
    return this.api.get('tyre-management/truck_inspection/' + id);
  }

  updatTi(id, data) {
    return this.api.put('tyre-management/truck_inspection?id=' + id, data);
  }
  deleteTi(id) {
    return this.api.delete(`tyre-management/truck_inspection/${id}`);
  }


}
