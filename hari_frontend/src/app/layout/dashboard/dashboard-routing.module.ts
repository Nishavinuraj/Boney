import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { SiteTruckPositionComponent } from './components/site-truck-position/site-truck-position.component';

const routes: Routes = [
    {
        path: '', component: DashboardComponent
    },
    {
        path: 'site-truck-position', component: SiteTruckPositionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
