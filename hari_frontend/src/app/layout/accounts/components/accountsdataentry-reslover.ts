import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AccountsService } from '../accounts.service';

@Injectable()
export class AccountsdataentryReslover implements Resolve<any> {
    constructor(private as: AccountsService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.as.getAde(route.paramMap.get('id'));
    }
}
