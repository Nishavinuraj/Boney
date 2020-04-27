import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { Ng2TableComponent } from './ng2-table/ng2-table.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationService } from './form-validations/validation.service';
import { ControlMessagesComponent } from './form-validations/control-messages.component';
import { BsDatepickerModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    ControlMessagesComponent,
    Ng2TableComponent,
    SmartTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2TableModule,
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  exports: [
    ControlMessagesComponent,
    Ng2TableComponent,
    Ng2TableModule,
    PaginationModule,
    SmartTableComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule
],
providers: [
    ValidationService,
]
})
export class SharedModule { }
