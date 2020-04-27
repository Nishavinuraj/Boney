import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EgaReportComponent } from './ega-report/ega-report.component';
import { AnalysisReportComponent } from './analysis-report.component';
import { UnderPerformanceTruckReportComponent } from './under-performance-truck-report/under-performance-truck-report.component';
import { MonthlyBalanceChartComponent } from './monthly-balance-chart/monthly-balance-chart.component';


const routes: Routes = [
  {
    path: '',
    component: AnalysisReportComponent,
    children: [
      {path: '', redirectTo: 'ega-report', pathMatch: 'prefix' },
      {path: 'ega-report', component: EgaReportComponent},
      {path: 'under-performance-truck-report', component: UnderPerformanceTruckReportComponent},
      {path: 'monthly-balance-chart', component: MonthlyBalanceChartComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AnalysisReportsRoutingModule { }
