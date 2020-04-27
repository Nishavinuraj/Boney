import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(public api: ApiService) { }

  getItemCategoryList() {
    return this.api.get('dashboard/itemcategoryslist');
  }
  getUnitList() {
    return this.api.get('dashboard/unitslist');
  }

  getGodownList() {
    return this.api.get('dashboard/godownslist');
  }

  getTyreList() {
    return this.api.get('dashboard/tyreslist');
  }

  getTyrePositionList() {
    return this.api.get('dashboard/tyrepositionslist');
  }

  getTruckList() {
    return this.api.get('dashboard/truckslist');
  }

  getSiteTruckPostion(filters) {
    return this.api.get('reports/sitewise_summary', filters);
  }
}
