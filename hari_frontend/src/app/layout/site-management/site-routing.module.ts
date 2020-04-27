import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteManagementComponent } from './site-management.component';
import { PrincipleBillingComponent } from './component/principle-billing/principle-billing.component';
import { BillingComponent } from './component/billing/billing.component';
import { BillDetailsComponent } from './component/bill-details/bill-details.component';
import { BilltyEntryComponent } from './component/billty-entry/billty-entry.component';
import { ExtraReturnExpencesComponent } from './component/extra-return-expences/extra-return-expences.component';
import { PodComponent } from './component/pod/pod.component';
import { PlantTruckPositionComponent } from './component/plant-truck-position/plant-truck-position.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PrincipalBillingReportsComponent } from './component/principal-billing-reports/principal-billing-reports.component';

// Billty DataEntry
import { AddBilltyDataentryComponent } from './component/add-billty-dataentry/add-billty-dataentry.component';
import { ListBilltyDataentryComponent } from './component/list-billty-dataentry/list-billty-dataentry.component';
import { EditBilltyDataentryComponent } from './component/edit-billty-dataentry/edit-billty-dataentry.component';
import { BilltydataentryReslover } from './billtydataentry-reslover';

// Vehicle Master
import { AddVehicleMasterComponent } from './component/add-vehicle-master/add-vehicle-master.component';
import { ListVehicleMasterComponent } from './component/list-vehicle-master/list-vehicle-master.component';
import { EditVehicleMasterComponent } from './component/edit-vehicle-master/edit-vehicle-master.component';
import { VehiclemasterReslover } from './vehiclemaster-reslover';

const routes: Routes = [
  {
    path: '',
    component: SiteManagementComponent,
    children: [
      { path: '', redirectTo: 'principle-billing', pathMatch: 'prefix' },
      {path: 'principle-billing', component: PrincipleBillingComponent},
      {path: 'principle-billing-repots', component: PrincipalBillingReportsComponent},
      {path: 'billing', component: BillingComponent},
      {path: 'bill-details', component: BillDetailsComponent},
      {path: 'billty-entry', component: BilltyEntryComponent},
      {path: 'extra-return-expences', component: ExtraReturnExpencesComponent},
      {path: 'pod', component: PodComponent},
      {path: 'plant-truck-postion', component: PlantTruckPositionComponent},
      {path: 'dashboard', component: DashboardComponent},
      // Billty Data Entry
      {path: 'billty-dataentry', component: ListBilltyDataentryComponent},
      {path: 'billty-dataentry/:id/edit', component: EditBilltyDataentryComponent, resolve: { bde_details: BilltydataentryReslover}},
      {path: 'add-billty-dataentry', component: AddBilltyDataentryComponent},

      // VehicleMaster
      {path: 'vehicle-master', component: ListVehicleMasterComponent},
      {path: 'vehicle-master/:id/edit', component: EditVehicleMasterComponent, resolve: { vm_details: VehiclemasterReslover}},
      {path: 'add-vehicle-master', component: AddVehicleMasterComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SiteRoutingModule { }


// ng g component layout/admin-privileges/components/PlantsRateList BilltyModule
