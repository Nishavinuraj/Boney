import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPrivilegesComponent } from './admin-privileges.component';
import { SyncPlanListComponent } from './components/sync-plan-list/sync-plan-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../shared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminPrivilegesRoutingModule } from './admin-privileges-routing.module';
import { PlantsRateListComponent } from './components/plants-rate-list/plants-rate-list.component';
import { GpsRateListComponent } from './components/gps-rate-list/gps-rate-list.component';
import { SiteTruckExpensesComponent } from './components/site-truck-expenses/site-truck-expenses.component';
// tslint:disable-next-line:max-line-length
import { PlantsRateMultipleDestinationComponent } from './components/plants-rate-multiple-destination/plants-rate-multiple-destination.component';
import { SiteMultipleDestinationComponent } from './components/site-multiple-destination/site-multiple-destination.component';
import { FleetTargetsComponent } from './components/fleet-targets/fleet-targets.component';
import { ImportSiteTruckExpenseComponent } from './components/import-site-truck-expense/import-site-truck-expense.component';
import { ImportPlantRateListComponent } from './components/import-plant-rate-list/import-plant-rate-list.component';
import { UserCreationComponent } from './components/user-creation/user-creation.component';
import { UserCreationListComponent } from './components/user-creation-list/user-creation-list.component';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { AgentAssignedSiteComponent } from './components/agent-assigned-site/agent-assigned-site.component';
import { UserCreationEditComponent } from './components/user-creation-edit/user-creation-edit.component';
import { UpdatePlantRateListComponent } from './components/update-plant-rate-list/update-plant-rate-list.component';
// list-master-data
import { TypeMasterComponent } from './components/type-master/type-master.component';
import { AdminMasterComponent } from './components/admin-master/admin-master.component';
import { ListMasterDataComponent } from './components/list-master-data/list-master-data.component';
// tyre rate list
import { AddTyreRatelistComponent } from './components/add-tyre-ratelist/add-tyre-ratelist.component';
import { EditTyreRatelistComponent } from './components/edit-tyre-ratelist/edit-tyre-ratelist.component';
import { ListTyreRatelistComponent } from './components/list-tyre-ratelist/list-tyre-ratelist.component';
import { ViewTyreRatelistComponent } from './components/view-tyre-ratelist/view-tyre-ratelist.component';
import { TyreratelistReslover } from './components/tyreratelist-reslover';
import { AdminprivilegesService } from './components/adminprivileges.service';

// site destination kms
import { AddSiteDestinationkmsComponent } from './components/add-site-destinationkms/add-site-destinationkms.component';
import { EditSiteDestinationkmsComponent } from './components/edit-site-destinationkms/edit-site-destinationkms.component';
import { ListSiteDestinationkmsComponent } from './components/list-site-destinationkms/list-site-destinationkms.component';
import { SitedestinationkmsReslover } from './components/sitedestinationkms-reslover';

// truck average
import { AddTruckAverageComponent } from './components/add-truck-average/add-truck-average.component';
import { EditTruckAverageComponent } from './components/edit-truck-average/edit-truck-average.component';
import { ListTruckAverageComponent } from './components/list-truck-average/list-truck-average.component';
import { TruckaverageReslover } from './components/truckaverage-reslover';
import { AddSitePetrolpumpComponent } from './components/add-site-petrolpump/add-site-petrolpump.component';
import { EditSitePetrolpumpComponent } from './components/edit-site-petrolpump/edit-site-petrolpump.component';
import { ListSitePetrolpumpComponent } from './components/list-site-petrolpump/list-site-petrolpump.component';
import { SitepetrolpumpReslover } from './components/sitepetrolpump-reslover';

// tyre target master
import { AddTyreTargetMasterComponent } from './components/add-tyre-target-master/add-tyre-target-master.component';
import { EditTyreTargetMasterComponent } from './components/edit-tyre-target-master/edit-tyre-target-master.component';
import { ListTyreTargetMasterComponent } from './components/list-tyre-target-master/list-tyre-target-master.component';
import { TyretargetmasterReslover } from './components/tyretargetmaster-reslover';

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
// consignee master
import { AddConsigneeMasterComponent } from './components/add-consignee-master/add-consignee-master.component';
import { EditConsigneeMasterComponent } from './components/edit-consignee-master/edit-consignee-master.component';
import { ListConsigneeMasterComponent } from './components/list-consignee-master/list-consignee-master.component';
import { ConsigneemasterReslover } from './components/consigneemaster-reslover';
// diesal rate master
import { AddDiesalRatemasterComponent } from './components/add-diesal-ratemaster/add-diesal-ratemaster.component';
import { EditDiesalRatemasterComponent } from './components/edit-diesal-ratemaster/edit-diesal-ratemaster.component';
import { ListDiesalRatemasterComponent } from './components/list-diesal-ratemaster/list-diesal-ratemaster.component';
import { DiesalratemasterReslover } from './components/diesalratemaster-reslover';
// accounts master
import { AddAccountsMasterComponent } from './components/add-accounts-master/add-accounts-master.component';
import { EditAccountsMasterComponent } from './components/edit-accounts-master/edit-accounts-master.component';
import { ListAccountsMasterComponent } from './components/list-accounts-master/list-accounts-master.component';
import { AccountsmasterReslover } from './components/accountsmaster-reslover';
// accounts category
import { AddAccountsCategoryComponent } from './components/add-accounts-category/add-accounts-category.component';
import { EditAccountsCategoryComponent } from './components/edit-accounts-category/edit-accounts-category.component';
import { ListAccountsCategoryComponent } from './components/list-accounts-category/list-accounts-category.component';
import { AccountscategoryReslover } from './components/accountscategory-reslover';

@NgModule({
  declarations: [
    AdminPrivilegesComponent,
    SyncPlanListComponent,
    PlantsRateListComponent,
    GpsRateListComponent,
    SiteTruckExpensesComponent,
    PlantsRateMultipleDestinationComponent,
    SiteMultipleDestinationComponent,
    FleetTargetsComponent,
    ImportSiteTruckExpenseComponent,
    ImportPlantRateListComponent,
    UserCreationComponent,
    UserCreationListComponent,
    AgentAssignedSiteComponent,
    UserCreationEditComponent,
    UpdatePlantRateListComponent,

    ListMasterDataComponent,
    TypeMasterComponent,
    AdminMasterComponent,

    AddTyreRatelistComponent,
    EditTyreRatelistComponent,
    ListTyreRatelistComponent,
    ViewTyreRatelistComponent,

    AddSiteDestinationkmsComponent,
    EditSiteDestinationkmsComponent,
    ListSiteDestinationkmsComponent,

    AddTruckAverageComponent,
    EditTruckAverageComponent,
    ListTruckAverageComponent,

    AddSitePetrolpumpComponent,
    EditSitePetrolpumpComponent,
    ListSitePetrolpumpComponent,

    AddTyreTargetMasterComponent,
    EditTyreTargetMasterComponent,
    ListTyreTargetMasterComponent,

    AddSiteProfileComponent,
    EditSiteProfileComponent,
    ListSiteProfileComponent,

    AddBrokerMasterComponent,
    EditBrokerMasterComponent,
    ListBrokerMasterComponent,

    AddConsigneeMasterComponent,
    EditConsigneeMasterComponent,
    ListConsigneeMasterComponent,

    AddDiesalRatemasterComponent,
    EditDiesalRatemasterComponent,
    ListDiesalRatemasterComponent,

    AddAccountsMasterComponent,
    EditAccountsMasterComponent,
    ListAccountsMasterComponent,
    AddAccountsCategoryComponent,
    EditAccountsCategoryComponent,
    ListAccountsCategoryComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminPrivilegesRoutingModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2AutoCompleteModule
  ],
  providers: [
    AdminprivilegesService,
    TyreratelistReslover,
    SitedestinationkmsReslover,
    TruckaverageReslover,
    SitepetrolpumpReslover,
    TyretargetmasterReslover,
    SiteprofileReslover,
    BrokermasterReslover,
    ConsigneemasterReslover,
    DiesalratemasterReslover,
    AccountsmasterReslover,
    AccountscategoryReslover
  ],
  entryComponents: [
    UserCreationEditComponent
  ]
})
export class AdminPrivilegesModule { }
