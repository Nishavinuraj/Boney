import { Injectable } from '@angular/core';
import { TyremanagementService } from './tyremanagement.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ObservationandrecommendationReslover implements Resolve<any> {
    constructor(private tm: TyremanagementService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.tm.getOar(route.paramMap.get('id'));
    }
}
