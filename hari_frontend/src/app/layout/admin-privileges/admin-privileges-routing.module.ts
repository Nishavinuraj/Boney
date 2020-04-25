import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPrivilegesComponent } from './admin-privileges.component';
import { SyncPlanListComponent } from './components/sync-plan-list/sync-plan-list.component';
import { PlantsRateListComponent } from './components/plants-rate-list/plants-rate-list.component';
import { GpsRateListComponent } from './components/gps-rate-list/gps-rate-list.component';
import { PlantsRateMultipleDestinationComponent } from './components/plants-rate-multiple-destination/plants-rate-multiple-destination.component';
import { SiteMultipleDestinationComponent } from './components/site-multiple-destination/site-multiple-destination.component';
import { SiteTruckExpensesComponent } from './components/site-truck-expenses/site-truck-expenses.component';
import { FleetTargetsComponent } from './components/fleet-targets/fleet-targets.component';
import { ImportSiteTruckExpenseComponent } from './components/import-site-truck-expense/import-site-truck-expense.component';
import { ImportPlantRateListComponent } from './components/import-plant-rate-list/import-plant-rate-list.component';
import { UserCreationComponent } from './components/user-creation/user-creation.component';
import { UserCreationListComponent } from './components/user-creation-list/user-creation-list.component';
import { AgentAssignedSiteComponent } from './components/agent-assigned-site/agent-assigned-site.component';
import { UpdatePlantRateListComponent } from './components/update-plant-rate-list/update-plant-rate-list.component';


// master-data
import {ListMasterDataComponent } from './components/list-master-data/list-master-data.component';

// tyre-ratelist
import { AddTyreRatelistComponent } from './components/add-tyre-ratelist/add-tyre-ratelist.component';
import { EditTyreRatelistComponent } from './components/edit-tyre-ratelist/edit-tyre-ratelist.component';
import { ViewTyreRatelistComponent } from './components/view-tyre-ratelist/view-tyre-ratelist.component';
import { ListTyreRatelistComponent } from './components/list-tyre-ratelist/list-tyre-ratelist.component';
import { TyreratelistReslover } from './components/tyreratelist-reslover';
// site profile
import { AddSiteProfileComponent } from './components/add-site-profile/add-site-profile.component';
import { EditSiteProfileComponent } from './components/edit-site-profile/edit-site-profile.component';
import { ListSiteProfileComponent } from './components/list-site-profile/list-site-profile.component';
import { SiteprofileReslover } from './components/siteprofile-reslover';

// broker master
import { AddBrokerMasterComponent } from './components/add-broker-master/add-broker-master.component';
import { EditBrokerMasterComponent } from './components/edit-broker-master/edit-broker-master.component';
import { ListBrokerMasterComponent } from './components/list-broker-master/list-broker-master.component';
import { BrokermasterReslover } from './components/brokermaster-reslover';

// diesal rates master
import { AddDiesalRatemasterComponent } from './components/add-diesal-ratemaster/add-diesal-ratemaster.component';
import { EditDiesalRatemasterComponent } from './components/edit-diesal-ratemaster/edit-diesal-ratemaster.component';
import { ListDiesalRatemasterComponent } from './components/list-diesal-ratemaster/list-diesal-ratemaster.component';
import { DiesalratemasterReslover } from './components/diesalratemaster-reslover';

// Consignee master
import { AddConsigneeMasterComponent } from './components/add-consignee-master/add-consignee-master.component';
import { EditConsigneeMasterComponent } from './components/edit-consignee-master/edit-consignee-master.component';
import { ListConsigneeMasterComponent } from './components/list-consignee-master/list-consignee-master.component';
import { ConsigneemasterReslover } from './components/consigneemaster-reslover';

// site petrol pump
import { AddSitePetrolpumpComponent } from './components/add-site-petrolpump/add-site-petrolpump.component';
import { EditSitePetrolpumpComponent } from './components/edit-site-petrolpump/edit-site-petrolpump.component';
import { ListSitePetrolpumpComponent } from './components/list-site-petrolpump/list-site-petrolpump.component';
import { SitepetrolpumpReslover } from './components/sitepetrolpump-reslover';

// site destination kms
import { ListSiteDestinationkmsComponent } from './components/list-site-destinationkms/list-site-destinationkms.component';
import { EditSiteDestinationkmsComponent } from './components/edit-site-destinationkms/edit-site-destinationkms.component';
import { AddSiteDestinationkmsComponent } from './components/add-site-destinationkms/add-site-destinationkms.component';
import { SitedestinationkmsReslover } from './components/sitedestinationkms-reslover';

// truck average
import { AddTruckAverageComponent } from './components/add-truck-average/add-truck-average.component';
import { ListTruckAverageComponent } from './components/list-truck-average/list-truck-average.component';
import { EditTruckAverageComponent } from './components/edit-truck-average/edit-truck-average.component';
import { TruckaverageReslover } from './components/truckaverage-reslover';

// tyre-target-master
import { AddTyreTargetMasterComponent } from './components/add-tyre-target-master/add-tyre-target-master.component';
import { ListTyreTargetMasterComponent } from './components/list-tyre-target-master/list-tyre-target-master.component';
import { EditTyreTargetMasterComponent } from './components/edit-tyre-target-master/edit-tyre-target-master.component';
import { TyretargetmasterReslover } from './components/tyretargetmaster-reslover';

const routes: Routes = [
  {
    path: '',
    component: AdminPrivilegesComponent,
    children: [
      {path: '', redirectTo: 'sync-plan-list', pathMatch: 'prefix' },
      {path: 'master-data', component: ListMasterDataComponent},
      {path: 'sync-plan-list', component: SyncPlanListComponent},
      {path: 'plants-rate-list', component: PlantsRateListComponent},
      // Tyre Rate List
      {path: 'tyre-ratelist', component: ListTyreRatelistComponent},
      {path: 'tyre-ratelist/:id/view', component: ViewTyreRatelistComponent, resolve: { trl_details: TyreratelistReslover}},
      {path: 'tyre-ratelist/:id/edit', component: EditTyreRatelistComponent,  resolve: { trl_details: TyreratelistReslover }},
      {path: 'add-tyre-ratelist', component: AddTyreRatelistComponent},

      // Site profile
      {path: 'site-profile', component: ListSiteProfileComponent},
      {path: 'site-profile/:id/edit', component: EditSiteProfileComponent,  resolve: { spro_details: SiteprofileReslover }},
      {path: 'add-site-profile', component: AddSiteProfileComponent},

      // Broker Master
      {path: 'broker-master', component: ListBrokerMasterComponent},
      {path: 'broker-master/:id/edit', component: EditBrokerMasterComponent,  resolve: { bm_details: BrokermasterReslover }},
      {path: 'add-broker-master', component: AddBrokerMasterComponent},

      // Diesal rate Master
      {path: 'diesal-ratemaster', component: ListDiesalRatemasterComponent},
      {path: 'diesal-ratemaster/:id/edit', component: EditDiesalRatemasterComponent,  resolve: { drm_details: DiesalratemasterReslover }},
      {path: 'add-diesal-ratemaster', component: AddDiesalRatemasterComponent},

      // Consignee Master
      {path: 'consignee-master', component: ListConsigneeMasterComponent},
      {path: 'consignee-master/:id/edit', component: EditConsigneeMasterComponent,  resolve: { cm_details: ConsigneemasterReslover }},
      {path: 'add-consignee-master', component: AddConsigneeMasterComponent},

      // Site Petrol Pump
      {path: 'site-petrolpump', component: ListSitePetrolpumpComponent},
      {path: 'site-petrolpump/:id/edit', component: EditSitePetrolpumpComponent,  resolve: { spp_details: SitepetrolpumpReslover }},
      {path: 'add-site-petrolpump', component: AddSitePetrolpumpComponent},

      // Site destinationkms
      {path: 'site-destinationkms', component: ListSiteDestinationkmsComponent},
      {path: 'site-destinationkms/:id/edit', component: EditSiteDestinationkmsComponent,  resolve: { sdk_details: SitedestinationkmsReslover }},
      {path: 'add-site-destinationkms', component: AddSiteDestinationkmsComponent},

      // Truck Average
      {path: 'truck-average', component: ListTruckAverageComponent},
      {path: 'truck-average/:id/edit', component: EditTruckAverageComponent,  resolve: { ta_details: TruckaverageReslover }},
      {path: 'add-truck-average', component: AddTruckAverageComponent},

      // Tyre target master
      {path: 'tyre-target-master', component: ListTyreTargetMasterComponent},
      {path: 'tyre-target-master/:id/edit', component: EditTyreTargetMasterComponent,  resolve: { ttm_details: TyretargetmasterReslover }},
      {path: 'add-tyre-target-master', component: AddTyreTargetMasterComponent},


      {path: 'site-truck-expenses', component: SiteTruckExpensesComponent},
      {path: 'gps-rate-list', component: GpsRateListComponent},
      {path: 'site-multiple-destination/:name', component: SiteMultipleDestinationComponent},
      {path: 'plants-rate-multiple-destination/:name', component: PlantsRateMultipleDestinationComponent},
      {path: 'fleet-targets', component: FleetTargetsComponent},
      {path: 'import-site-truck-expenses', component: ImportSiteTruckExpenseComponent},
      {path: 'import-plant-rate-list', component: ImportPlantRateListComponent},
      {path: 'update-plant-rate-list', component: UpdatePlantRateListComponent},
      {path: 'user-create', component: UserCreationComponent},
      {path: 'user-list', component: UserCreationListComponent},
      {path: 'site-assign-to-agents', component: AgentAssignedSiteComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminPrivilegesRoutingModule { }
