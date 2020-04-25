import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceMasterComponent } from './maintenance-master/maintenance-master.component';
import { VendorMasterComponent } from './vendor-master/vendor-master.component';
import { JobCardComponent } from './job-card/job-card.component';
import { JobListComponent } from './job-list/job-list.component';
import { TruckHistoryComponent } from './truck-history/truck-history.component';
// Job-workmaster
import { AddJobWorkmasterComponent } from './add-job-workmaster/add-job-workmaster.component';
import { EditJobWorkmasterComponent } from './edit-job-workmaster/edit-job-workmaster.component';
import { ListJobWorkmasterComponent } from './list-job-workmaster/list-job-workmaster.component';
import { JobworkmasterReslover } from './jobworkmaster-reslover';
// Job-work
import { AddJobWorkComponent } from './add-job-work/add-job-work.component';
import { EditJobWorkComponent } from './edit-job-work/edit-job-work.component';
import { ListJobWorkComponent } from './list-job-work/list-job-work.component';
import { JobworkReslover } from './jobwork-reslover';
// dashbaord
import { DashboardComponent } from './dashboard/dashboard.component';
// engine type master
import { AddEngineTypemasterComponent } from './add-engine-typemaster/add-engine-typemaster.component';
import { EditEngineTypemasterComponent } from './edit-engine-typemaster/edit-engine-typemaster.component';
import { ListEngineTypemasterComponent } from './list-engine-typemaster/list-engine-typemaster.component';
import { EnginetypemasterReslover } from './enginetypemaster-reslover';

const routes: Routes = [
    { path: '', redirectTo: 'maintenance-master', pathMatch: 'prefix' },
    {path: 'maintenance-master', component: MaintenanceMasterComponent},
    {path: 'vendor-master', component: VendorMasterComponent},
    // job workmaster
    {path: 'job-workmaster', component: ListJobWorkmasterComponent},
    {path: 'job-workmaster/:id/edit', component: EditJobWorkmasterComponent, resolve: { jwm_details: JobworkmasterReslover }},
    {path: 'add-job-workmaster', component: AddJobWorkmasterComponent},
    // job work
    {path: 'job-work', component: ListJobWorkComponent},
    {path: 'job-work/:id/edit', component: EditJobWorkComponent, resolve: { jw_details: JobworkReslover }},
    {path: 'add-job-work', component: AddJobWorkComponent},

    {path: 'job-card', component: JobCardComponent},
    {path: 'job-list', component: JobListComponent},
    {path: 'truck-history', component: TruckHistoryComponent},
    // dashboard
    {path: 'dashboard', component: DashboardComponent},
    // engine typemaster
    {path: 'engine-typemaster', component: ListEngineTypemasterComponent},
    {path: 'engine-typemaster/:id/edit', component: EditEngineTypemasterComponent, resolve: { etm_details: EnginetypemasterReslover }},
    {path: 'add-engine-typemaster', component: AddEngineTypemasterComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MaintenanceRoutingModule { }


// ng g component layout/admin-privileges/components/PlantsRateList BilltyModule
