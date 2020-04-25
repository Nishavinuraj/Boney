import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TyremanagementService } from './tyremanagement.service';

@Injectable()
export class TyremasterReslover implements Resolve<any> {
    constructor(private ts: TyremanagementService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.ts.getTm(route.paramMap.get('id'));
    }
}
