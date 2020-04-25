import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AdminprivilegesService } from './adminprivileges.service';

@Injectable()
export class TruckaverageReslover implements Resolve<any> {
    constructor(private aps: AdminprivilegesService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.aps.getTa(route.paramMap.get('id'));
    }
}
