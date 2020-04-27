import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' },
            { path: 'site-management', loadChildren: './site-management/site-management.module#SiteManagementModule' },
            { path: 'admin-privileges', loadChildren: './admin-privileges/admin-privileges.module#AdminPrivilegesModule' },
            { path: 'accounts', loadChildren: './accounts/accounts.module#AccountsModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'traffic-agent', loadChildren: './traffic-agent/traffic-agent.module#TrafficAgentModule' },
            { path: 'tyre-management', loadChildren: './tyre-management/tyre-management.module#TyreManagementModule' },
            { path: 'documents', loadChildren: './documents/documents.module#DocumentsModule' },
            { path: 'maintenance', loadChildren: './maintenance/maintenance.module#MaintenanceModule' },
            { path: 'inventory', loadChildren: './inventory/inventory.module#InventoryModule' },
            { path: 'estimates', loadChildren: './estimates/estimates.module#EstimatesModule' },
            { path: 'analysis-report', loadChildren: './analysis-report/analysis-report.module#AnalysisReportsModule' },
            { path: 'site-data-analysis', loadChildren: './site-data-analysis/site-data-analysis.module#SiteDataAnalysisModule' }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
