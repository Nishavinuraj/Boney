import { Injectable } from '@angular/core';
import { MaintenanceService } from './maintenance.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class JobworkReslover implements Resolve<any> {
    constructor(private ms: MaintenanceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.ms.getJobwork(route.paramMap.get('id'));
    }
}
