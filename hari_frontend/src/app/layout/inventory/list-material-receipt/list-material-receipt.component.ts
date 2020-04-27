import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../parameters';
import { InventoryService } from '../inventory.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-material-receipt',
  templateUrl: './list-material-receipt.component.html',
  styleUrls: ['./list-material-receipt.component.scss']
})
export class ListMaterialReceiptComponent implements OnInit {
  public addButtonInfo: Object = { text: 'Add Material Receipts', url: '/inventory/add-material-receipt' };
  public fetchUrl: string = GetApiurl('inventory/material-receipt');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  usertype: any;
  process: string;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Site/MrNo/Vendor/Department'};
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
        { title: 'Mr no', name: 'mr_number', sort: false },
        { title: 'Mr type', name: 'mr_type', sort: false },
        { title: 'Rec type', name: 'rec_type', sort: false },
        { title: 'Vendor', name: 'vendor', sort: false },
        { title: 'Department', name: 'department', sort: false },
        { title: 'Mr date', name: 'mr_date', dateFormat: 'fullDate', sort: false },
        { title: 'Total(₹)', name: 'total_amount', sort: false },
        { title: 'User', name: 'user', sort: false },
        { title: 'Actions', links: ['Edit', 'Delete', 'View'] }
      ];
    } else {
      this.columns = [
        { title: 'Site', name: 'site', sort: false },
        { title: 'Mr no', name: 'mr_number', sort: false },
        { title: 'Mr type', name: 'mr_type', sort: false },
        { title: 'Rec type', name: 'rec_type', sort: false },
        { title: 'Vendor', name: 'vendor', sort: false },
        { title: 'Department', name: 'department', sort: false },
        { title: 'Mr date', name: 'mr_date', dateFormat: 'fullDate', sort: false },
        { title: 'Total(₹)', name: 'total_amount', sort: false },
        { title: 'Actions', links: ['View'] }
      ];
    }

  }

  ngOnInit() {
  }
  linkClicked(event: any): any {
    const data = event.data;

    // console.log('list material', data);

    this.dataRow = data;
    if (event.data.action === 'Edit') {
      this.router.navigate([`/inventory/material-receipt/${this.dataRow['row']['_id']}/edit`]);
    }
    if (event.data.action === 'View') {
      this.router.navigate([`/inventory/material-receipt/${this.dataRow['row']['_id']}/view`]);
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
    this.is.deleteMr(index).subscribe(
      ng2TableData => {
        this.process = 'done';
        $('#deleteModal').modal('hide');
        this.refreshRedTable = { mode: 'delete', id: index };
      }, // filter(row => row.id != index),
      error => { console.log(error); }
    );
  }


}
