import { Injectable } from '@angular/core';
import { MaintenanceService } from './maintenance.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class EnginetypemasterReslover implements Resolve<any> {
    constructor(private ms: MaintenanceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.ms.getEtm(route.paramMap.get('id'));
    }
}
