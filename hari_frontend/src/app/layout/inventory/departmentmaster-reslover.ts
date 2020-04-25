import { Injectable } from '@angular/core';
import { InventoryService } from './inventory.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class DepartmentmasterReslover implements Resolve<any> {
    constructor(private is: InventoryService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.is.getDepartmentMaster(route.paramMap.get('id'));
    }
}
