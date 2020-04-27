import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { SitemanagementService } from './sitemanagement.service';

@Injectable()
export class BilltydataentryReslover implements Resolve<any> {
    constructor(private sm: SitemanagementService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.sm.getBde(route.paramMap.get('id'));
    }
}
