import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnFleetReportComponent } from './components/own-fleet-report/own-fleet-report.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReportsComponent } from './reports.component';
import { PageHeaderModule } from 'src/app/shared';
import { AccountsLedgerReportComponent } from './components/accounts-ledger-report/accounts-ledger-report.component';

import { DispatchSummaryComponent } from './components/dispatch-summary/dispatch-summary.component';
import { PlantRateListTempComponent } from './components/plant-rate-list-temp/plant-rate-list-temp.component';
import { DispatchSummarySiteWiseComponent } from './components/dispatch-summary-site-wise/dispatch-summary-site-wise.component';
import { OwnFleetReportAdminComponent } from './components/own-fleet-report-admin/own-fleet-report-admin.component';
import { ItemsLedgerReportComponent } from './components/items-ledger-report/items-ledger-report.component';
import { BalanceStockReportComponent } from './components/balance-stock-report/balance-stock-report.component';
import { OrderLedgerReportComponent } from './components/order-ledger-report/order-ledger-report.component';
import { ScrapLedgerReportComponent } from './components/scrap-ledger-report/scrap-ledger-report.component';
import { TruckLedgerReportComponent } from './components/truck-ledger-report/truck-ledger-report.component';
import { AccountsItemsLedgerReportComponent } from './components/accounts-items-ledger-report/accounts-items-ledger-report.component';
import { DealerWisePurchaseComponent } from './components/dealer-wise-purchase/dealer-wise-purchase.component';
import { TyreRemovalReportComponent } from './components/tyre-removal-report/tyre-removal-report.component';
import { MileageReportComponent } from './components/mileage-report/mileage-report.component';
import { BalanceScrapReportComponent } from './components/balance-scrap-report/balance-scrap-report.component';
// import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
// import * as jsPDF from 'jspdf';
// import 'jspdf-autotable';

@NgModule({
  declarations: [
    ReportsComponent,
    OwnFleetReportComponent,
    AccountsLedgerReportComponent,
    DispatchSummaryComponent,
    PlantRateListTempComponent,
    DispatchSummarySiteWiseComponent,
    OwnFleetReportAdminComponent,
    ItemsLedgerReportComponent,
    BalanceStockReportComponent,
    OrderLedgerReportComponent,
    ScrapLedgerReportComponent,
    TruckLedgerReportComponent,
    AccountsItemsLedgerReportComponent,
    DealerWisePurchaseComponent,
    TyreRemovalReportComponent,
    MileageReportComponent,
    BalanceScrapReportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    PageHeaderModule,
    // PDFExportModule
  ]
})
export class ReportsModule { }
