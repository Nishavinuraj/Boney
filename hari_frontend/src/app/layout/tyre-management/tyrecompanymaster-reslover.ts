import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TyremanagementService } from './tyremanagement.service';

@Injectable()
export class TyrecompanymasterReslover implements Resolve<any> {
    constructor(private ts: TyremanagementService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.ts.getTcm(route.paramMap.get('id'));
    }
}
