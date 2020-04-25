import { NgModule } from '@angular/core';
import { NgbModule, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { SitemanagementService } from './sitemanagement.service';
import { CommonModule } from '@angular/common';
import { SiteManagementComponent } from './site-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { SharedModule } from '../../shared/shared.module';

import { SiteRoutingModule } from './site-routing.module';
import { PrincipleBillingComponent } from './component/principle-billing/principle-billing.component';
import { BillingComponent } from './component/billing/billing.component';
import { BillDetailsComponent } from './component/bill-details/bill-details.component';
import { BilltyEntryComponent } from './component/billty-entry/billty-entry.component';
import { PodComponent } from './component/pod/pod.component';
import { ExtraReturnExpencesComponent } from './component/extra-return-expences/extra-return-expences.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PlantTruckPositionComponent } from './component/plant-truck-position/plant-truck-position.component';
import { BilltySelectionComponent } from './component/plant-truck-position/billty-selection/billty-selection.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PrincipalBillingReportsComponent } from './component/principal-billing-reports/principal-billing-reports.component';
// billty dataentry
import { AddBilltyDataentryComponent } from './component/add-billty-dataentry/add-billty-dataentry.component';
import { EditBilltyDataentryComponent } from './component/edit-billty-dataentry/edit-billty-dataentry.component';
import { ListBilltyDataentryComponent } from './component/list-billty-dataentry/list-billty-dataentry.component';
import { BilltydataentryReslover } from './billtydataentry-reslover';

import { ListVehicleMasterComponent } from './component/list-vehicle-master/list-vehicle-master.component';
import { EditVehicleMasterComponent } from './component/edit-vehicle-master/edit-vehicle-master.component';
import { AddVehicleMasterComponent } from './component/add-vehicle-master/add-vehicle-master.component';
import { VehiclemasterReslover } from './vehiclemaster-reslover';

@NgModule({
  declarations: [
    SiteManagementComponent,
    PrincipleBillingComponent,
    BillingComponent,
    BillDetailsComponent,
    BilltyEntryComponent,
    PodComponent,
    ExtraReturnExpencesComponent,
    PlantTruckPositionComponent,
    BilltySelectionComponent,
    DashboardComponent,
    PrincipalBillingReportsComponent,

    AddBilltyDataentryComponent,
    EditBilltyDataentryComponent,
    ListBilltyDataentryComponent,
    ListVehicleMasterComponent,
    EditVehicleMasterComponent,
    AddVehicleMasterComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    SiteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    Ng2AutoCompleteModule,
    CollapseModule.forRoot()
  ],
  providers: [
    SitemanagementService,
    BilltydataentryReslover,
    VehiclemasterReslover
  ],
  entryComponents: [BilltySelectionComponent]
})
export class SiteManagementModule { }
