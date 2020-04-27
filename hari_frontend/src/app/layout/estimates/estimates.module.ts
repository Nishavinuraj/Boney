import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoAgainEstimatesComponent } from 'src/app/layout/estimates/po-again-estimates/po-again-estimates.component';
import { ReceivedEstimatesComponent } from 'src/app/layout/estimates/received-estimates/received-estimates.component';
import { AllCreatedEstimateComponent } from 'src/app/layout/estimates/all-created-estimate/all-created-estimate.component';
import { CreateEstimateComponent } from 'src/app/layout/estimates/create-estimate/create-estimate.component';
import { EstimatesRoutingModule } from 'src/app/layout/estimates/estimates-routing.module';
import { EstimatesComponent } from 'src/app/layout/estimates/estimates.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { NgSelectModule } from '@ng-select/ng-select';
import { SubmitEstimateComponent } from 'src/app/layout/estimates/submit-estimate/submit-estimate.component';


@NgModule({
  declarations: [CreateEstimateComponent, AllCreatedEstimateComponent, ReceivedEstimatesComponent,
     PoAgainEstimatesComponent, EstimatesComponent,SubmitEstimateComponent],
  imports: [
    CommonModule,
    EstimatesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    Ng2AutoCompleteModule,
  ]
})
export class EstimatesModule { }
