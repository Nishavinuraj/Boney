import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserCreationServiceService {

  constructor(public api: ApiService) { }

  getUsersList() {
    return this.api.get('user_creation/list_of_users');
  }

  deleteRecord(k) {
    return this.api.delete('user_creation/delete_user', {params: k});
  }

}
