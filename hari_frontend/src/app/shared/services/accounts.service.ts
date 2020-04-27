import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(public api: ApiService) { }

  getTrialBalance(filters) {
    return this.api.get('reports/site_trial_balance', filters);
  }

  getMonthlyOutstanding(filters) {
    return this.api.get('reports/site_monthly_outstanding', filters);
  }

  getBalanceStock(filters) {
    return this.api.get('reports/site_balance_stock', filters);
  }

  addTransaction(data) {
    return this.api.post('accounts_transaction/create', data);
  }

  deleteTransaction(id) {
    return this.api.delete('accounts_transaction/delete?id=' +  id);
  }

  getTransactions() {
    return this.api.get('accounts_transaction/list');
  }

  updateTransaction(id, data) {
    return this.api.put('accounts_transaction/update?id=' + id, data);
  }

}
