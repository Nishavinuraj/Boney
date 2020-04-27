import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrafficAgentListComponent } from './traffic-agent-list.component';
import { VehicleMonitoringComponent } from './components/vehicle-monitoring/vehicle-monitoring.component';
import { VehicleMonitoringReportsComponent } from './components/vehicle-monitoring-reports/vehicle-monitoring-reports.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VehicleMonitoringV2Component } from './components/vehicle-monitoring-v2/vehicle-monitoring-v2.component';

const routes: Routes = [
  {
    path: '',
    component: TrafficAgentListComponent,
    children: [
      { path: '', redirectTo: 'vehicle-monitoring', pathMatch: 'prefix' },
      {path: 'vehicle-monitoring', component: VehicleMonitoringV2Component},
      {path: 'vehicle-monitoring/reports', component: VehicleMonitoringReportsComponent},
      {path: 'dashboard', component: DashboardComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class TrafficAgentRoutingModule { }
