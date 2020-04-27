import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  userData: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    public toastr: ToastrService,
    private titleService: Title
  ) {}

  /**
   * Auth-Guard Main function to validate user permission/login before the page visit
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {boolean}
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // ToDo: check if user is login using jwt tokenNotExpired function
    if(state.url.startsWith('/estimates/submit-estimate')){
      return true;
    }
    if (!localStorage.getItem('user')) {
      // If user is not login redirect user to company login page.
      // Later we can be more smart and decide if needs to redirect to admin login.

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      this.toastr.error('You must be logged in to view this content.', 'First Login');
      return false;
    } else {
      // If user is logged in check if permission is set in route data.

      if (route.data['permission']) {
        // Check if user has the permission the permission required for the route.
        if (!this.authService.hasAccess(route.data['permission'])) {
          this.userData = JSON.parse(localStorage.getItem('user'));

          const data = {
            user_id: this.userData._id,
            user_type: this.userData.role,
            action: 'route_access'
          };

          // this.authService.accessLog(data).subscribe(
          //   res => {
          //     console.log('>>>>>>>>>>>>>>res', res);
          //   },
          //   err => {
          //     console.log('>>>>>>>>>>>>>>err', err);
          //   }
          // );

          // this.authService.companyAccessLog(data).subscribe(
          //   res => {
          //     console.log('>>>>>>>>>>>>>>comres', res);
          //   },
          //   err => {
          //     console.log('>>>>>>>>>>>>>>companyerr', err);
          //   }
          // );

          this.toastr.error(`You do not have permission to view "${state.url}".`, 'Access Denied');

          // Redirect to dashboard if the route previous route is login, or it is page refresh, or it is company login
          if (this.router.url.startsWith('/login') || this.router.url === '/') {
            this.router.navigate(['dashboard']);
          }

          // otherwise return false that won't redirect to dashboard and user stays on the same page.
          return false;
        }
      }
    }

    // Set the title
    if (route.data['title']) {
      this.titleService.setTitle(route.data['title']);
    }

    return true;
  }
}
