import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { TrialBalanceComponent } from './components/trial-balance/trial-balance.component';
import { MonthlyOutstandingComponent } from './components/monthly-outstanding/monthly-outstanding.component';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { AccountTransactionComponent } from './components/account-transaction/account-transaction.component';

import { AddAccountsDataentryComponent } from './components/add-accounts-dataentry/add-accounts-dataentry.component';
import { EditAccountsDataentryComponent } from './components/edit-accounts-dataentry/edit-accounts-dataentry.component';
import { ListAccountsDataentryComponent } from './components/list-accounts-dataentry/list-accounts-dataentry.component';
import { AccountsdataentryReslover } from './components/accountsdataentry-reslover';

const routes: Routes = [
  {
    path: '',
    component: AccountsComponent,
    children: [
      { path: '', redirectTo: 'trial-balance', pathMatch: 'prefix' },
      { path: 'trial-balance', component: TrialBalanceComponent },
      { path: 'monthly-outstanding', component: MonthlyOutstandingComponent },
      { path: 'account-transactions', component: AccountTransactionComponent },
      // Broker Master
      {path: 'accounts-dataentry', component: ListAccountsDataentryComponent},
      {path: 'accounts-dataentry/:id/edit', component: EditAccountsDataentryComponent,  resolve: { ade_details: AccountsdataentryReslover }},
      {path: 'add-accounts-dataentry', component: AddAccountsDataentryComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule {}
