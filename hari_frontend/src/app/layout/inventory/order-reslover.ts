import { Injectable } from '@angular/core';
import { InventoryService } from './inventory.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class OrderReslover implements Resolve<any> {
    constructor(private is: InventoryService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.is.getOrder(route.paramMap.get('id'));
    }
}
