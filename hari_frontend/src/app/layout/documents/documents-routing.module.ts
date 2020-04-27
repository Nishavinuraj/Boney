import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './documents.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AttachDocumentsComponent } from './components/attach-documents/attach-documents.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentsComponent,
    children: [
      { path: '', redirectTo: 'documents', pathMatch: 'prefix' },
      {path: 'dashboard', component: DashboardComponent},
      {path: 'attach-documents', component: AttachDocumentsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DocumentsRoutingModule { }
