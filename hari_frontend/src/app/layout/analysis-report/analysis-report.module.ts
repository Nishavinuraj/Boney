import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgSelectModule } from '@ng-select/ng-select';

import { EgaReportComponent } from './ega-report/ega-report.component';
import { AnalysisReportsRoutingModule } from './analysis-report.routing.module';
import { AnalysisReportComponent } from './analysis-report.component';
import { UnderPerformanceTruckReportComponent } from './under-performance-truck-report/under-performance-truck-report.component';
import { MonthlyBalanceChartComponent } from './monthly-balance-chart/monthly-balance-chart.component';
import { ChartsModule } from 'ng2-charts';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@NgModule({
  declarations: [
    EgaReportComponent,
    AnalysisReportComponent,
    UnderPerformanceTruckReportComponent,
    MonthlyBalanceChartComponent
  ],
  imports: [
    CommonModule,
    AnalysisReportsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    Ng2AutoCompleteModule,
    ChartsModule
  ]
})
export class AnalysisReportsModule { }
