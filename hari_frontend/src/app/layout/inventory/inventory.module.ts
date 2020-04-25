import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { SharedModule } from '../../shared/shared.module';
import { InventoryService } from './inventory.service';
import { NgSelectModule } from '@ng-select/ng-select';


// orders
import { AddOrderComponent } from './add-order/add-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import {  OrderReslover } from './order-reslover';

// material receipt
import { AddMaterialReceiptComponent } from './add-material-receipt/add-material-receipt.component';
import { EditMaterialReceiptComponent } from './edit-material-receipt/edit-material-receipt.component';
import { ListMaterialReceiptComponent } from './list-material-receipt/list-material-receipt.component';
import { ViewMaterialReceiptComponent } from './view-material-receipt/view-material-receipt.component';
import {  MaterialreceiptReslover } from './materialreceipt-reslover';


// material issue
import { AddMaterialIssueComponent } from './add-material-issue/add-material-issue.component';
import { EditMaterialIssueComponent } from './edit-material-issue/edit-material-issue.component';
import { ViewMaterialIssueComponent } from './view-material-issue/view-material-issue.component';
import { ListMaterialIssueComponent } from './list-material-issue/list-material-issue.component';
import {  MaterialissueReslover } from './materialissue-reslover';

// item-master
import { ListItemMasterComponent } from './list-item-master/list-item-master.component';
import { ViewItemMasterComponent } from './view-item-master/view-item-master.component';
import { EditItemMasterComponent } from './edit-item-master/edit-item-master.component';
import { AddItemMasterComponent } from './add-item-master/add-item-master.component';
import { ItemmasterReslover } from './itemmaster-reslover';

// scrap-sale
import { AddScrapSaleComponent } from './add-scrap-sale/add-scrap-sale.component';
import { EditScrapSaleComponent } from './edit-scrap-sale/edit-scrap-sale.component';
import { ListScrapSaleComponent } from './list-scrap-sale/list-scrap-sale.component';
import { ViewScrapSaleComponent } from './view-scrap-sale/view-scrap-sale.component';
import { ScrapsaleReslover } from './scrapsale-reslover';
// department Master
import { AddDepartmentMasterComponent } from './add-department-master/add-department-master.component';
import { EditDepartmentMasterComponent } from './edit-department-master/edit-department-master.component';
import { ListDepartmentMasterComponent } from './list-department-master/list-department-master.component';
import { DepartmentmasterReslover } from './departmentmaster-reslover';

@NgModule({
  declarations: [
    InventoryComponent,
    AddOrderComponent,
    ListOrderComponent,
    EditOrderComponent,
    ViewOrderComponent,

    AddMaterialReceiptComponent,
    EditMaterialReceiptComponent,
    ListMaterialReceiptComponent,
    ViewMaterialReceiptComponent,

    ListItemMasterComponent,
    ViewItemMasterComponent,
    EditItemMasterComponent,
    AddItemMasterComponent,

    AddScrapSaleComponent,
    EditScrapSaleComponent,
    ListScrapSaleComponent,
    ViewScrapSaleComponent,

    AddMaterialIssueComponent,
    EditMaterialIssueComponent,
    ViewMaterialIssueComponent,
    ListMaterialIssueComponent,

    AddDepartmentMasterComponent,
    EditDepartmentMasterComponent,
    ListDepartmentMasterComponent
  ],
  imports: [
    SharedModule,
    NgbModule,
    NgSelectModule,
    InventoryRoutingModule
  ],
  providers: [
    InventoryService,
    OrderReslover,
    ItemmasterReslover,
    MaterialreceiptReslover,
    MaterialissueReslover,
    ScrapsaleReslover,
    DepartmentmasterReslover
  ]
})
export class InventoryModule { }
