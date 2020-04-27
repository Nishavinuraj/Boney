import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(public api: ApiService) { }

  getBalanceStock(filters) {
    return this.api.get('reportsinv/site_balance_stock', filters);
  }

  getBalanceScrapStock(filters) {
    return this.api.get('reportsinv/site_balance_scrap_stock', filters);
  }

  getDealerWisePurchase(filters) {
    return this.api.get('reportsinv/dealer_wise_purchase', filters);
  }

  getMilageReport(filters) {
    return this.api.get('reportsinv/mileage_report', filters);
  }

  getTyreRemovalReport(filters) {
    return this.api.get('reportsinv/tyre_removal_report', filters);
  }

}
