import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GpsRateService {

  constructor(public api: ApiService) { }

  getAllGpsRate() {
    return this.api.get('gps_rate_master/getgpsrate');
  }

  getGpsRateByDestination(filters) {
    return this.api.get('gps_rate_master/getgpsratebydestination', filters);
  }

  getDestination() {
    return this.api.get('gps_rate_master/getdestination');
  }

  addRate(data) {
    return this.api.post('gps_rate_master/insert_gps_rate', data);
  }
  
  deleteData(filters) {
    return this.api.get('gps_rate_master/deleteData',filters);
  }
}
