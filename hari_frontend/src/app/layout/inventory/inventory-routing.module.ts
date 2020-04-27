import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';



// item-master
import { AddItemMasterComponent } from './add-item-master/add-item-master.component';
import { EditItemMasterComponent } from './edit-item-master/edit-item-master.component';
import { ViewItemMasterComponent } from './view-item-master/view-item-master.component';
import { ListItemMasterComponent } from './list-item-master/list-item-master.component';
import { ItemmasterReslover } from './itemmaster-reslover';

// department-master
import { AddDepartmentMasterComponent } from './add-department-master/add-department-master.component';
import { EditDepartmentMasterComponent } from './edit-department-master/edit-department-master.component';
import { ListDepartmentMasterComponent } from './list-department-master/list-department-master.component';
import { DepartmentmasterReslover } from './departmentmaster-reslover';

// orders
import { AddOrderComponent } from './add-order/add-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { OrderReslover } from './order-reslover';

// materialreceipt
import { AddMaterialReceiptComponent } from './add-material-receipt/add-material-receipt.component';
import { EditMaterialReceiptComponent } from './edit-material-receipt/edit-material-receipt.component';
import { ViewMaterialReceiptComponent } from './view-material-receipt/view-material-receipt.component';
import { ListMaterialReceiptComponent } from './list-material-receipt/list-material-receipt.component';
import { MaterialreceiptReslover } from './materialreceipt-reslover';

// materialissue
import { AddMaterialIssueComponent } from './add-material-issue/add-material-issue.component';
import { EditMaterialIssueComponent } from './edit-material-issue/edit-material-issue.component';
import { ViewMaterialIssueComponent } from './view-material-issue/view-material-issue.component';
import { ListMaterialIssueComponent } from './list-material-issue/list-material-issue.component';
import { MaterialissueReslover } from './materialissue-reslover';

// scrapsale
import { AddScrapSaleComponent } from './add-scrap-sale/add-scrap-sale.component';
import { EditScrapSaleComponent } from './edit-scrap-sale/edit-scrap-sale.component';
import { ViewScrapSaleComponent } from './view-scrap-sale/view-scrap-sale.component';
import { ListScrapSaleComponent } from './list-scrap-sale/list-scrap-sale.component';
import { ScrapsaleReslover } from './scrapsale-reslover';

const routes: Routes = [{
  path: '',
  component: InventoryComponent,
  children: [

    // item master
    {path: 'items-master', component: ListItemMasterComponent},
    {path: 'items-master/:id/view', component: ViewItemMasterComponent, resolve: { items_details: ItemmasterReslover }},
    {path: 'items-master/:id/edit', component: EditItemMasterComponent, resolve: { items_details: ItemmasterReslover }},
    {path: 'add-item-master', component: AddItemMasterComponent},

    // department master
    {path: 'department-master', component: ListDepartmentMasterComponent},
    {path: 'department-master/:id/edit', component: EditDepartmentMasterComponent, resolve: { dept_details: DepartmentmasterReslover }},
    {path: 'add-department-master', component: AddDepartmentMasterComponent},

    // orders
    {path: 'orders', component: ListOrderComponent},
    {path: 'orders/:id/view', component: ViewOrderComponent, resolve: { order_details: OrderReslover }},
    {path: 'orders/:id/edit', component: EditOrderComponent, resolve: { order_details: OrderReslover }},
    {path: 'add-order', component: AddOrderComponent},
    {path: 'add-order/:estimateId', component: AddOrderComponent},


    // material receipts
    {path: 'material-receipt', component: ListMaterialReceiptComponent},
    {path: 'material-receipt/:id/view', component: ViewMaterialReceiptComponent, resolve: { mr_details: MaterialreceiptReslover}},
    {path: 'material-receipt/:id/edit', component: EditMaterialReceiptComponent,  resolve: { mr_details: MaterialreceiptReslover }},
    {path: 'add-material-receipt', component: AddMaterialReceiptComponent},

    // material issue
    {path: 'material-issue', component: ListMaterialIssueComponent},
    {path: 'material-issue/:id/view', component: ViewMaterialIssueComponent, resolve: { mi_details: MaterialissueReslover}},
    {path: 'material-issue/:id/edit', component: EditMaterialIssueComponent,  resolve: { mi_details: MaterialissueReslover }},
    {path: 'add-material-issue', component: AddMaterialIssueComponent},

    // scrap sale
    {path: 'scrap-sale', component: ListScrapSaleComponent},
    {path: 'scrap-sale/:id/view', component: ViewScrapSaleComponent, resolve: { ss_details: ScrapsaleReslover}},
    {path: 'scrap-sale/:id/edit', component: EditScrapSaleComponent,  resolve: { ss_details: ScrapsaleReslover }},
    {path: 'add-scrap-sale', component: AddScrapSaleComponent}

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
