

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TyreComponent } from './tyre.component';
import { TyreRoutingModule } from './tyre-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../shared/shared.module';
import { TyremanagementService } from './tyremanagement.service';

import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

// truck inspection
import { AddTruckInspectionComponent } from './components/add-truck-inspection/add-truck-inspection.component';
import { EditTruckInspectionComponent } from './components/edit-truck-inspection/edit-truck-inspection.component';
import { ListTruckInspectionComponent } from './components/list-truck-inspection/list-truck-inspection.component';
import { ViewTruckInspectionComponent } from './components/view-truck-inspection/view-truck-inspection.component';
import { TruckinspectionReslover } from './truckinspection-reslover';

// tyre company master
import { AddTyreCompanyMasterComponent } from './components/add-tyre-company-master/add-tyre-company-master.component';
import { EditTyreCompanyMasterComponent } from './components/edit-tyre-company-master/edit-tyre-company-master.component';
import { ListTyreCompanyMasterComponent } from './components/list-tyre-company-master/list-tyre-company-master.component';
import { ViewTyreCompanyMasterComponent } from './components/view-tyre-company-master/view-tyre-company-master.component';
import { TyrecompanymasterReslover } from './tyrecompanymaster-reslover';

// observation and recommendation
import { AddObservationAndRecommendationComponent } from './components/add-observation-and-recommendation/add-observation-and-recommendation.component';
import { EditObservationAndRecommendationComponent } from './components/edit-observation-and-recommendation/edit-observation-and-recommendation.component';
import { ListObservationAndRecommendationComponent } from './components/list-observation-and-recommendation/list-observation-and-recommendation.component';
import { ObservationandrecommendationReslover } from './observationandrecommendation-reslover';

// tyre master
import { AddTyreMasterComponent } from './components/add-tyre-master/add-tyre-master.component';
import { EditTyreMasterComponent } from './components/edit-tyre-master/edit-tyre-master.component';
import { ListTyreMasterComponent } from './components/list-tyre-master/list-tyre-master.component';
import { TyremasterReslover } from './tyremaster-reslover';
import { TruckInspectionComponent } from './components/truck-inspection/truck-inspection.component';


@NgModule({
  declarations: [
    TyreComponent,
    AddTruckInspectionComponent,
    EditTruckInspectionComponent,
    ListTruckInspectionComponent,
    TruckInspectionComponent,

    // tyre company master
    AddTyreCompanyMasterComponent,
    EditTyreCompanyMasterComponent,
    ListTyreCompanyMasterComponent,
    ViewTyreCompanyMasterComponent,

    // Observation and Recommendation
    AddObservationAndRecommendationComponent,
    EditObservationAndRecommendationComponent,
    ListObservationAndRecommendationComponent,

    // tyre master
    AddTyreMasterComponent,
    EditTyreMasterComponent,
    ListTyreMasterComponent,
    ViewTruckInspectionComponent
  ],
  imports: [
    TyreRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    Ng2AutoCompleteModule,
    SharedModule,

    // NgbActiveModal

  ],
  providers: [
    TyremanagementService,
    TyrecompanymasterReslover,
    TyremasterReslover,
    TruckinspectionReslover,
    ObservationandrecommendationReslover

  ]
})
export class TyreManagementModule { }
