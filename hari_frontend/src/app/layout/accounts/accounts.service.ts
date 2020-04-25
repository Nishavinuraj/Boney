import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(public api: ApiService) { }

    // Accounts-Dataentry
    addAde(data) {
      return this.api.post('accounts/accounts-dataentry', data);
    }
    getAde(id) {
      return this.api.get('accounts/accounts-dataentry/' + id);
    }

    updatAde(id, data) {
      return this.api.put('accounts/accounts-dataentry?id=' + id, data);
    }
    deleteAde(id) {
      return this.api.delete(`accounts/accounts-dataentry/${id}`);
    }

    getAdeNumberDetails(data) {
      return this.api.post('accounts/accounts-dataentry/generate_ade_number', data);
    }
  
}
