import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../parameters';
import { InventoryService } from '../inventory.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {

  public addButtonInfo: Object = { text: 'Add orders', url: '/inventory/add-order' };
  public fetchUrl: string = GetApiurl('inventory/orders');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  process: string;
  usertype: any;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Site/Vendor/Department'};
  constructor(
    private router: Router,
    public meta: MetaService,
    private is: InventoryService
  ) {
    this.usertype = this.meta.getSiteFromStorage().role;
    console.log(' Usertype >>>  ', this.usertype);

    if (this.usertype === 'ADMIN') {
      this.columns = [
        { title: 'Site', name: 'site', sort: false },
        { title: 'Order no', name: 'order_number', sort: false },
        { title: 'Order type', name: 'order_type', sort: false },
        { title: 'Vendor', name: 'vendor', sort: false },
        { title: 'Department', name: 'department', sort: false },
        { title: 'Order date', name: 'order_date', dateFormat: 'fullDate', sort: false },
        { title: 'Total(₹)', name: 'total_amount', sort: false },
        { title: 'User', name: 'user', sort: false },
        { title: 'Actions', links: ['Edit', 'Delete', 'View'] }
      ];
    } else {
      this.columns = [
        { title: 'Site', name: 'site', sort: false },
        { title: 'Order no', name: 'order_number', sort: false },
        { title: 'Order type', name: 'order_type', sort: false },
        { title: 'Vendor', name: 'vendor', sort: false },
        { title: 'Department', name: 'department', sort: false },
        { title: 'Order date', name: 'order_date', dateFormat: 'fullDate', sort: false },
        { title: 'Total(₹)', name: 'total_amount', sort: false },
        { title: 'User', name: 'user', sort: false },
        { title: 'Actions', links: ['View'] }
      ];
    }

  }

  ngOnInit() {
  }
  linkClicked(event: any): any {
    const data = event.data;
    this.dataRow = data;
    if (event.data.action === 'Edit') {
      this.router.navigate([`/inventory/orders/${this.dataRow['row']['_id']}/edit`]);
    }
    if (event.data.action === 'View') {
      this.router.navigate([`/inventory/orders/${this.dataRow['row']['_id']}/view`]);
    }
    if (data.action === 'Delete') {
      $('#deleteModal').modal('show');
    }
  }
  public deleteRecord() {
    this.process = 'processing';
    this.deleteProject(this.dataRow['row']['_id']);
  }
  public deleteProject(index: number) {
    this.is.deleteOrder(index).subscribe(
      ng2TableData => {
        this.process = 'done';
        $('#deleteModal').modal('hide');
        this.refreshRedTable = { mode: 'delete', id: index };
      }, // filter(row => row.id != index),
      error => { console.log(error) }
    )
  }
}
