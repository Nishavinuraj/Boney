import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../parameters';
import { InventoryService } from '../inventory.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-scrap-sale',
  templateUrl: './list-scrap-sale.component.html',
  styleUrls: ['./list-scrap-sale.component.scss']
})
export class ListScrapSaleComponent implements OnInit {
  public addButtonInfo: Object = { text: 'Add Scrap Sale', url: '/inventory/add-scrap-sale' };
  public fetchUrl: string = GetApiurl('inventory/scrap-sale');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  usertype: any;
  dataRow: any;
  process: string;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by vendor/department'};
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
        { title: 'Ss no', name: 'ss_number', sort: false },
        { title: 'Ss date', name: 'ss_date', dateFormat: 'fullDate', sort: false },
        { title: 'Vendor', name: 'vendor', sort: false },
        { title: 'Department', name: 'department', sort: false },
        { title: 'Total(₹)', name: 'total_amount', sort: false },
        { title: 'User', name: 'user', sort: false },
        { title: 'Actions', links: ['Edit', 'Delete', 'View'] }
      ];
    } else {
      this.columns = [
        { title: 'Site', name: 'site', sort: false },
        { title: 'Ss no', name: 'ss_number', sort: false },
        { title: 'Ss date', name: 'ss_date', dateFormat: 'fullDate', sort: false },
        { title: 'Vendor', name: 'vendor', sort: false },
        { title: 'Department', name: 'department', sort: false },
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

    // console.log('list material', data);

    this.dataRow = data;
    if (event.data.action === 'Edit') {
      this.router.navigate([`/inventory/scrap-sale/${this.dataRow['row']['_id']}/edit`]);
    }
    if (event.data.action === 'View') {
      this.router.navigate([`/inventory/scrap-sale/${this.dataRow['row']['_id']}/view`]);
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
    this.is.deleteSs(index).subscribe(
      ng2TableData => {
        this.process = 'done';
        $('#deleteModal').modal('hide');
        this.refreshRedTable = { mode: 'delete', id: index };
      }, // filter(row => row.id != index),
      error => { console.log(error); }
    );
  }


}
