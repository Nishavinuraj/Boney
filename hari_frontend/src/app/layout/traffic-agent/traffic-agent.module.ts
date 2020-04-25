import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrafficAgentListComponent } from './traffic-agent-list.component';
import { VehicleMonitoringComponent } from './components/vehicle-monitoring/vehicle-monitoring.component';
import { TrafficAgentRoutingModule } from './traffic-agent-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleMonitoringReportsComponent } from './components/vehicle-monitoring-reports/vehicle-monitoring-reports.component';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VehicleMonitoringV2Component } from './components/vehicle-monitoring-v2/vehicle-monitoring-v2.component';

@NgModule({
  declarations: [
    TrafficAgentListComponent,
    VehicleMonitoringComponent,
    VehicleMonitoringReportsComponent,
    DashboardComponent,
    VehicleMonitoringV2Component
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TrafficAgentRoutingModule,
    Ng2AutoCompleteModule
  ]
})
export class TrafficAgentModule { }
