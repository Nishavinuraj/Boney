import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminPrivilegesService {

  constructor(public api: ApiService) { }

  planRateList() {
    return this.api.get('plant_rate/async_plant_rate_list');
  }

  getPlanRateList(filters) {
    return this.api.get('plant_rate/plant_rate_list', filters);
  }

  getSitePlanRateDetails(filters) {
    return this.api.get('plant_rate/plant_rate_detail', filters);
  }

  updateSitePlanRate(data) {
    return this.api.put('plant_rate/plant_rate_update', data);
  }

  getSiteTruckExp(filters) {
    return this.api.get('site_expense/site_expense_list', filters);
  }

  updateSiteTruckExp(data) {
    return this.api.put('site_expense/site_expense_update', data);
  }

  getMultiDest(filters) {
    return this.api.get('site_expense/site_expense_multidest_detail', filters);
  }

  getFleetTargetList(filters) {
    return this.api.get('fleets_target/fleets_targets_list', filters);
  }

  updateFleetTargetList(data) {
    return this.api.put('fleets_target/fleets_targets_update', data);
  }

  importSiteTruckExpense(data) {
    return this.api.post('import/site_truck_expenses', data);
  }

  importPlantRateList(data) {
    return this.api.post('import/plant_rate_list', data);
  }

  updatePlantRateList(data) {
    return this.api.post('plant_rates_list/data', data);
  }

  addPlantRateList(data) {
    return this.api.post('plant_rate/plant_rate_multidest_add', data);
  }

  addSiteTruckExpenseList(data) {
    return this.api.post('site_expense/site_expense_multidest_add', data);
  }

  getPermissions() {
    return this.api.get('user_creation/list_of_permissions');
  }

  addUser(data) {
    return this.api.post('user_creation/create_user', data);
  }

  saveTrafficAgentsData(data) {
    return this.api.post('site_assign_to_traffic_agents/create_traffic_agent', data);
  }

  getAssignedSitesList(agent_name) {
    return this.api.get('site_assign_to_traffic_agents/select_traffic_agent?ta_name=' + agent_name);
  }

  updateUserCreation(id, data) {
    return this.api.put('user_creation/update_user?id=' + id, data);
  }
}
