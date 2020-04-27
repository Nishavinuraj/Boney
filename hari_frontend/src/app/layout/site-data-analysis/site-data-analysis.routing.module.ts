import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteEgaReportComponent } from './site-ega-report/site-ega-report.component';
import { SiteDataAnalysisComponent } from './site-data-analysis.component';
import { SiteUnderPerformanceTruckComponent } from './site-under-performance-truck/site-under-performance-truck.component';
import { SiteDispatchSummaryComponent } from './site-dispatch-summary/site-dispatch-summary.component';
import { SiteDispsummaryComponent } from './site-dispsummary/site-dispsummary.component';


const routes: Routes = [
  {
    path: '',
    component: SiteDataAnalysisComponent,
    children: [
      {path: '', redirectTo: 'site-ega-report', pathMatch: 'prefix' },
      {path: 'site-ega-report', component: SiteEgaReportComponent},
      {path: 'site-under-performance-truck', component: SiteUnderPerformanceTruckComponent},
      {path: 'site-dispatch-summary', component: SiteDispatchSummaryComponent},
      {path: 'site-dispsummary', component: SiteDispsummaryComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SiteDataAnalysisRoutingModule { }
