import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimatesComponent } from 'src/app/layout/estimates/estimates.component';
import { CreateEstimateComponent } from 'src/app/layout/estimates/create-estimate/create-estimate.component';
import { AllCreatedEstimateComponent } from 'src/app/layout/estimates/all-created-estimate/all-created-estimate.component';
import { ReceivedEstimatesComponent } from 'src/app/layout/estimates/received-estimates/received-estimates.component';
import { PoAgainEstimatesComponent } from 'src/app/layout/estimates/po-again-estimates/po-again-estimates.component';
import { SubmitEstimateComponent } from 'src/app/layout/estimates/submit-estimate/submit-estimate.component';

const routes: Routes = [
  {
    path: '',
    component: EstimatesComponent,
    children: [
      {path: '', redirectTo: 'create-estimate', pathMatch: 'prefix' },
      {path: 'create-estimate', component: CreateEstimateComponent},
      {path: 'all-created-estimates', component: AllCreatedEstimateComponent},
      {path: 'received-estimates', component: ReceivedEstimatesComponent},
      {path: 'po-again-estimates', component: PoAgainEstimatesComponent},
      {path: 'submit-estimate', component: SubmitEstimateComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EstimatesRoutingModule { }
