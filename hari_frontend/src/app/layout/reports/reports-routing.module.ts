import { PlantRateListTempComponent } from './components/plant-rate-list-temp/plant-rate-list-temp.component';
import { DispatchSummaryComponent } from './components/dispatch-summary/dispatch-summary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnFleetReportComponent } from './components/own-fleet-report/own-fleet-report.component';
import { AccountsLedgerReportComponent } from './components/accounts-ledger-report/accounts-ledger-report.component';
import { AccountsItemsLedgerReportComponent} from './components/accounts-items-ledger-report/accounts-items-ledger-report.component';
import { ReportsComponent } from './reports.component';
import { DispatchSummarySiteWiseComponent } from './components/dispatch-summary-site-wise/dispatch-summary-site-wise.component';
import { OwnFleetReportAdminComponent } from './components/own-fleet-report-admin/own-fleet-report-admin.component';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { BalanceStockReportComponent } from './components/balance-stock-report/balance-stock-report.component';
import { BalanceScrapReportComponent } from './components/balance-scrap-report/balance-scrap-report.component';
import { ItemsLedgerReportComponent } from './components/items-ledger-report/items-ledger-report.component';
import { OrderLedgerReportComponent } from './components/order-ledger-report/order-ledger-report.component';
import { ScrapLedgerReportComponent } from './components/scrap-ledger-report/scrap-ledger-report.component';
import { TruckLedgerReportComponent } from './components/truck-ledger-report/truck-ledger-report.component';
import { DealerWisePurchaseComponent } from './components/dealer-wise-purchase/dealer-wise-purchase.component';
import { MileageReportComponent } from './components/mileage-report/mileage-report.component';
import { TyreRemovalReportComponent } from './components/tyre-removal-report/tyre-removal-report.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      { path: '', redirectTo: 'own_fleet_performance', pathMatch: 'prefix' },
      {
        path: 'own_fleet_performance',
        component: OwnFleetReportComponent
      },
      {
        path: 'own_fleet_performance_admin',
        component: OwnFleetReportAdminComponent
      },
      {
        path: 'accounts_ledger_report',
        component: AccountsLedgerReportComponent
      },
      {
        path: 'accounts_items_ledger_report',
        component: AccountsItemsLedgerReportComponent
      },
      {
        path: 'items_ledger_report',
        component: ItemsLedgerReportComponent
      },
      {
        path: 'order_ledger_report',
        component: OrderLedgerReportComponent
      },
      {
        path: 'scrap_ledger_report',
        component: ScrapLedgerReportComponent
      },
      {
        path: 'truck_ledger_report',
        component: TruckLedgerReportComponent
      },

      {
        path: 'balance_stock_report',
        component: BalanceStockReportComponent
      },
      {
        path: 'balance_scrap_report',
        component: BalanceScrapReportComponent
      },
      {
        path: 'mileage_report',
        component: MileageReportComponent
      },
      {
        path: 'tyre_removal_report',
        component: TyreRemovalReportComponent
      },

      {
        path: 'dealer_wise_purchase',
        component: DealerWisePurchaseComponent
      },

      {
        path: 'dispatch_summary',
        component: DispatchSummaryComponent
      },
      {
        path: 'plant_rate_list',
        component: PlantRateListTempComponent
      },
      {
        path: 'dispatch-summary-site-wise',
        component: DispatchSummarySiteWiseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {}
