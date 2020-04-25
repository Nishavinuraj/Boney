import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { DocumentsRoutingModule } from './documents-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DocumentsComponent } from './documents.component';
import { AttachDocumentsComponent } from './components/attach-documents/attach-documents.component';
import { DocumentMasterAddComponent } from './components/document-master-add/document-master-add.component';
import { AppCommonModule } from '../common/app-common/app-common.module';
import { EditDocumentComponent } from './components/attach-documents/edit-document/edit-document.component';


@NgModule({

  declarations: [
    DocumentsComponent,
    AttachDocumentsComponent,
    DocumentMasterAddComponent,
    EditDocumentComponent
],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2AutoCompleteModule,
    AppCommonModule,
    DocumentsRoutingModule,
  ],

  entryComponents: [
    DocumentMasterAddComponent,
    EditDocumentComponent
  ],
  exports: []

})
export class DocumentsModule { }
