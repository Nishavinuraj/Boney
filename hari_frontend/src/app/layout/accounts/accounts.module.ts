import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { TrialBalanceComponent } from './components/trial-balance/trial-balance.component';
import { MonthlyOutstandingComponent } from './components/monthly-outstanding/monthly-outstanding.component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { PageHeaderModule } from 'src/app/shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountsService } from './accounts.service';
import { SharedModule } from '../../shared/shared.module';
import { AccountTransactionComponent } from './components/account-transaction/account-transaction.component';
import { NgSelectModule } from '@ng-select/ng-select';

import { AddAccountsDataentryComponent } from './components/add-accounts-dataentry/add-accounts-dataentry.component';
import { EditAccountsDataentryComponent } from './components/edit-accounts-dataentry/edit-accounts-dataentry.component';
import { ListAccountsDataentryComponent } from './components/list-accounts-dataentry/list-accounts-dataentry.component';
import { AccountsdataentryReslover } from './components/accountsdataentry-reslover';

@NgModule({
  declarations: [
    AccountsComponent,
    TrialBalanceComponent,
    MonthlyOutstandingComponent,
    AccountTransactionComponent,
    AddAccountsDataentryComponent,
    EditAccountsDataentryComponent,
    ListAccountsDataentryComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AccountsRoutingModule,
    NgbModule,
    NgSelectModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AccountsService,
    AccountsdataentryReslover
  ]
})
export class AccountsModule { }
