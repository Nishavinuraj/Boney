import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private api: ApiService
  ) { }

  login(data) {
    return this.api.post('login', data);
  }

  // accessLog(body) {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   body.user_id = user.id;
  //   body.user_type = user.role.name;
  //   return this.api.post('/admin/log', body);
  // }

  // companyAccessLog(body) {
  //   return this.api.post('/company/log', body);
  // }

  /**
   * Check if user has specific permission(s)
   * @param {string | string[]} permission
   * @returns {boolean}
   */
  hasAccess(permission: string | string[]): boolean {
    if (this.getUserFromLocalStorage()) {
      const assigned_permissions = this.getUserFromLocalStorage().permissions;
      const assigned_permissions_values = [];
      if (Array.isArray(permission)) {
        assigned_permissions.forEach(p => {
          assigned_permissions_values.push(p.pvalue);
        });
        return assigned_permissions_values.some(p => permission.includes(p));
      } else {
        return assigned_permissions_values.indexOf(permission) !== -1;
      }
    } else {
      return false;
    }
  }

  /**
   * get User data from Local storage
   * @returns {User}
   */
  getUserFromLocalStorage() {
    if (localStorage.getItem('user') === null) {
      return null;
    } else {
      return JSON.parse(localStorage.getItem('user'));
    }
  }

}
