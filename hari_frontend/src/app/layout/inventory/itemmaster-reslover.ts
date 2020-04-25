import { Injectable } from '@angular/core';
import { InventoryService } from './inventory.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ItemmasterReslover implements Resolve<any> {
    constructor(private is: InventoryService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.is.getItemMaster(route.paramMap.get('id'));
    }
}
