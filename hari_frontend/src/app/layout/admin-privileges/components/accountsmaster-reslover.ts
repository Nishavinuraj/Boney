import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AdminprivilegesService } from './adminprivileges.service';

@Injectable()
export class AccountsmasterReslover implements Resolve<any> {
    constructor(private aps: AdminprivilegesService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.aps.getAm(route.paramMap.get('id'));
    }
}
