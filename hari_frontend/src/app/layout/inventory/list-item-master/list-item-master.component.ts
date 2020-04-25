import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../parameters';
import { InventoryService } from '../inventory.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-item-master',
  templateUrl: './list-item-master.component.html',
  styleUrls: ['./list-item-master.component.scss']
})
export class ListItemMasterComponent implements OnInit {

  public addButtonInfo: Object = { text: 'Add Item-Master', url: '/inventory/add-item-master' };
  public fetchUrl: string = GetApiurl('inventory/items-master');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  usertype: any;
  process: string;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Item Name'};
  constructor(
    private router: Router,
    public meta: MetaService,
    private is: InventoryService
  ) {
    this.usertype = this.meta.getSiteFromStorage().role;
    console.log(' Usertype >>>  ', this.usertype);

    if (this.usertype === 'ADMIN') {
      this.columns = [
        { title: 'Name', name: 'name', sort: true },
        { title: 'Type', name: 'type', sort: false },
        { title: 'Units', name: 'unit', sort: false },
        { title: 'ItemType', name: 'itemtype', sort: false },
        { title: 'Rate(₹)', name: 'rate', sort: false },
        { title: 'Actions', links: ['Edit', 'Delete', 'View'] }
      ];
    } else {
      this.columns = [
        { title: 'Name', name: 'name', sort: true },
        { title: 'Type', name: 'type', sort: false },
        { title: 'Units', name: 'unit', sort: false },
        { title: 'ItemType', name: 'itemtype', sort: false },
        { title: 'Rate(₹)', name: 'rate', sort: false },
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
      this.router.navigate([`/inventory/items-master/${this.dataRow['row']['_id']}/edit`]);
    }
    if (event.data.action === 'View') {
      this.router.navigate([`/inventory/items-master/${this.dataRow['row']['_id']}/view`]);
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
    this.is.deleteItemMaster(index).subscribe(
      ng2TableData => {
        this.process = 'done';
        $('#deleteModal').modal('hide');
        this.refreshRedTable = { mode: 'delete', id: index };
      }, // filter(row => row.id != index),
      error => { console.log(error);
      }
    );
  }


}
