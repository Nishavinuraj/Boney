import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AdminprivilegesService } from './adminprivileges.service';

@Injectable()
export class TyretargetmasterReslover implements Resolve<any> {
    constructor(private aps: AdminprivilegesService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.aps.getTtm(route.paramMap.get('id'));
    }
}
