import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceMasterComponent } from './maintenance-master/maintenance-master.component';
import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { VendorMasterComponent } from './vendor-master/vendor-master.component';
import { JobCardComponent } from './job-card/job-card.component';
import { JobListComponent } from './job-list/job-list.component';
import { VendorMasterEditComponent } from './vendor-master-edit/vendor-master-edit.component';
import { TruckHistoryComponent } from './truck-history/truck-history.component';
import { SharedModule } from '../../shared/shared.module';
// job workmaster
import { AddJobWorkmasterComponent } from './add-job-workmaster/add-job-workmaster.component';
import { EditJobWorkmasterComponent } from './edit-job-workmaster/edit-job-workmaster.component';
import { ListJobWorkmasterComponent } from './list-job-workmaster/list-job-workmaster.component';
import { JobworkmasterReslover } from './jobworkmaster-reslover';
// job work
import { AddJobWorkComponent } from './add-job-work/add-job-work.component';
import { EditJobWorkComponent } from './edit-job-work/edit-job-work.component';
import { ListJobWorkComponent } from './list-job-work/list-job-work.component';
import { JobworkReslover } from './jobwork-reslover';
// dashboard
import { DashboardComponent } from './dashboard/dashboard.component';
// engine type master
import { AddEngineTypemasterComponent } from './add-engine-typemaster/add-engine-typemaster.component';
import { EditEngineTypemasterComponent } from './edit-engine-typemaster/edit-engine-typemaster.component';
import { ListEngineTypemasterComponent } from './list-engine-typemaster/list-engine-typemaster.component';
import { EnginetypemasterReslover } from './enginetypemaster-reslover';
@NgModule({
  declarations: [
    MaintenanceMasterComponent,
    JobCardComponent,
    JobListComponent,
    VendorMasterComponent,
    VendorMasterEditComponent,
    TruckHistoryComponent,
    // job workmaster
    AddJobWorkmasterComponent,
    EditJobWorkmasterComponent,
    ListJobWorkmasterComponent,
    // job work
    AddJobWorkComponent,
    EditJobWorkComponent,
    ListJobWorkComponent,
    // dashboard
    DashboardComponent,
    // engine type master
    AddEngineTypemasterComponent,
    EditEngineTypemasterComponent,
    ListEngineTypemasterComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MaintenanceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    Ng2AutoCompleteModule,
  ],
  entryComponents: [
    VendorMasterEditComponent
  ],
  providers: [
    JobworkmasterReslover,
    JobworkReslover,
    EnginetypemasterReslover
  ]

})
export class MaintenanceModule { }
