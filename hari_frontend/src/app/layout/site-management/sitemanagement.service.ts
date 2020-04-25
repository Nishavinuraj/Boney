import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SitemanagementService {

  constructor(public api: ApiService) { }
  // billty-dataentry
  addBde(data) {
    return this.api.post('site-management/billty-dataentry', data);
  }
  getBde(id) {
    return this.api.get('site-management/billty-dataentry/' + id);
  }

  updatBde(id, data) {
    return this.api.put('site-management/billty-dataentry?id=' + id, data);
  }
  deleteBde(id) {
    return this.api.delete(`site-management/billty-dataentry/${id}`);
  }

  updateTruckPositionBiltyGen(data){
    return this.api.put('reports/update_false_truck_positions_bilty_gen/',data);
  }

  getLrNumberDetails(id) {
    return this.api.post('site-management/billty-dataentry/generate_lr_number', { site: id });
  }

  // vehicle-master
  addVm(data) {
    return this.api.post('site-management/vehicle-master', data);
  }
  getVm(id) {
    return this.api.get('site-management/vehicle-master/' + id);
  }

  updatVm(id, data) {
    return this.api.put('site-management/vehicle-master?id=' + id, data);
  }
  deleteVm(id) {
    return this.api.delete(`site-management/vehicle-master/${id}`);
  }


}
