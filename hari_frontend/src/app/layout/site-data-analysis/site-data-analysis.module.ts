import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { NgSelectModule } from '@ng-select/ng-select';

import { SiteEgaReportComponent } from './site-ega-report/site-ega-report.component';
import { SiteDataAnalysisRoutingModule } from './site-data-analysis.routing.module';
import { SiteDataAnalysisComponent } from './site-data-analysis.component';
import { SiteUnderPerformanceTruckComponent } from './site-under-performance-truck/site-under-performance-truck.component';
import { SiteDispatchSummaryComponent } from './site-dispatch-summary/site-dispatch-summary.component';
import { SiteDispsummaryComponent } from './site-dispsummary/site-dispsummary.component';

@NgModule({
  declarations: [
    SiteEgaReportComponent,
    SiteDataAnalysisComponent,
    SiteUnderPerformanceTruckComponent,
    SiteDispatchSummaryComponent,
    SiteDispsummaryComponent
  ],
  imports: [
    CommonModule,
    SiteDataAnalysisRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    Ng2AutoCompleteModule
  ]
})
export class SiteDataAnalysisModule { }
