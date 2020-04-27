import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TyreComponent } from './tyre.component';

// truck inspection
// import { TruckInspectionComponent } from './components/truck-inspection/truck-inspection.component';
import { AddTruckInspectionComponent } from './components/add-truck-inspection/add-truck-inspection.component';
import { ListTruckInspectionComponent } from './components/list-truck-inspection/list-truck-inspection.component';
import { ViewTruckInspectionComponent } from './components/view-truck-inspection/view-truck-inspection.component';
import { EditTruckInspectionComponent } from './components/edit-truck-inspection/edit-truck-inspection.component';
import { TruckinspectionReslover } from './truckinspection-reslover';

// truck tyre master
import { AddTyreMasterComponent } from './components/add-tyre-master/add-tyre-master.component';
import { ListTyreMasterComponent } from './components/list-tyre-master/list-tyre-master.component';
import { EditTyreMasterComponent } from './components/edit-tyre-master/edit-tyre-master.component';
import { TyremasterReslover } from './tyremaster-reslover';

// tyre-company-master
import { AddTyreCompanyMasterComponent } from './components/add-tyre-company-master/add-tyre-company-master.component';
import { ListTyreCompanyMasterComponent } from './components/list-tyre-company-master/list-tyre-company-master.component';
import { ViewTyreCompanyMasterComponent } from './components/view-tyre-company-master/view-tyre-company-master.component';
import { EditTyreCompanyMasterComponent } from './components/edit-tyre-company-master/edit-tyre-company-master.component';
import { TyrecompanymasterReslover } from './tyrecompanymaster-reslover';

// observation and recommendation
import { ListObservationAndRecommendationComponent } from './components/list-observation-and-recommendation/list-observation-and-recommendation.component';
import { AddObservationAndRecommendationComponent } from './components/add-observation-and-recommendation/add-observation-and-recommendation.component';
import { EditObservationAndRecommendationComponent } from './components/edit-observation-and-recommendation/edit-observation-and-recommendation.component';
import { ObservationandrecommendationReslover } from './observationandrecommendation-reslover';


const routes: Routes = [
  {
    path: '',
    component: TyreComponent,
    children: [
      { path: '', redirectTo: 'tyre-management', pathMatch: 'prefix' },


      // truck inspection
      // {path: 'truck-inspection', component: TruckInspectionComponent},

      {path: 'truck-inspection', component: ListTruckInspectionComponent},
      {path: 'truck-inspection/:id/edit', component: EditTruckInspectionComponent, resolve: { ti_details: TruckinspectionReslover}},
      {path: 'truck-inspection/:id/view', component: ViewTruckInspectionComponent, resolve: { ti_details: TruckinspectionReslover}},
      {path: 'add-truck-inspection', component: AddTruckInspectionComponent},

      // tyre Master
      {path: 'tyre-master', component: ListTyreMasterComponent},
      {path: 'tyre-master/:id/edit', component: EditTyreMasterComponent, resolve: { tm_details: TyremasterReslover}},
      {path: 'add-tyre-master', component: AddTyreMasterComponent},


      // tyre company Master
      {path: 'tyre-company-master', component: ListTyreCompanyMasterComponent},
      {path: 'tyre-company-master/:id/view', component: ViewTyreCompanyMasterComponent, resolve: { tcm_details: TyrecompanymasterReslover}},
      {path: 'tyre-company-master/:id/edit', component: EditTyreCompanyMasterComponent, resolve: { tcm_details: TyrecompanymasterReslover}},
      {path: 'add-tyre-company-master', component: AddTyreCompanyMasterComponent},

      // Observation and Recommendation Master
      {path: 'observation-and-recommendation', component: ListObservationAndRecommendationComponent},
      {path: 'observation-and-recommendation/:id/edit', component: EditObservationAndRecommendationComponent, resolve: { oar_details: ObservationandrecommendationReslover}},
      {path: 'add-observation-and-recommendation', component: AddObservationAndRecommendationComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TyreRoutingModule { }
