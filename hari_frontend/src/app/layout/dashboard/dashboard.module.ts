import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule} from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiteTruckPositionComponent } from './components/site-truck-position/site-truck-position.component';
import { DocumentsModule } from '../documents/documents.module';
import { AppCommonModule } from '../common/app-common/app-common.module';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        StatModule,
        Ng2Charts,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        AppCommonModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        SiteTruckPositionComponent
    ]
})
export class DashboardModule {}
