import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TrafficAgentService {

  constructor(public api: ApiService) { }

  getSites(agentName) {
    return this.api.get('site_assign_to_traffic_agents/select_traffic_agent?ta_name=' + agentName);
  }

  getMonitoringData(filters) {
    return this.api.get('vehicle_monitoring/by_site', filters);
  }

  updateMonitoringData(id, data) {
    return this.api.put('vehicle_monitoring/update?id=' + id, data);
  }

  getDateWiseReport(filters) {
    return this.api.get('vehicle_monitoring/daily', filters);
  }

  getSummaryReport(filters) {
    return this.api.get('vehicle_monitoring/summary', filters);
  }

  getMonthWiseReport(filters) {
    return this.api.get('vehicle_monitoring/monthly', filters);
  }

  getPerfromanceWiseReport(filters) {
    return this.api.get('vehicle_monitoring/performance?', filters);
  }

  getDashboardList(filters) {
    return this.api.get('vehicle_monitoring/performance?', filters);
  }

  getMaitanenceTrucksData(filters) {
    return this.api.get('vehicle_monitoring/screen_one', filters);
  }

  updateMaintanenceDate(data) {
    return this.api.post('vehicle_monitoring/add_maintenance', data);
  }

  getMonitoringDataByTruck(params) {
    return this.api.get('vehicle_monitoring/by_truck', params);
  }

  saveMaintanenceDate(data) {
    return this.api.post('vehicle_monitoring/save_maintenance', data);
  }

  getMonitoringList(filters) {
    return this.api.get('vehicle_monitoring/maintenance_list', filters);
  }
}
