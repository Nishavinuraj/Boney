import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../parameters';
import { InventoryService } from '../inventory.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-material-issue',
  templateUrl: './list-material-issue.component.html',
  styleUrls: ['./list-material-issue.component.scss']
})
export class ListMaterialIssueComponent implements OnInit {
  public addButtonInfo: Object = { text: 'Add Material Issue', url: '/inventory/add-material-issue' };
  public fetchUrl: string = GetApiurl('inventory/material-issue');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  usertype: any;
  process: string;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Site/MI Type/Department'};
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
        { title: 'MI no', name: 'mi_number', sort: false },
        { title: 'Mi type', name: 'mi_type', sort: false },
        { title: 'Department', name: 'department', sort: false },
        { title: 'Mi date', name: 'mi_date', dateFormat: 'fullDate', sort: false },
        { title: 'Total(₹)', name: 'total_amount', sort: false },
        { title: 'User', name: 'user', sort: false },
        { title: 'Actions', links: ['Edit', 'Delete', 'View'] }
      ];
    } else {
      this.columns = [
        { title: 'Site', name: 'site', sort: false },
        { title: 'MI no', name: 'mi_number', sort: false },
        { title: 'Mi type', name: 'mi_type', sort: false },
        { title: 'Department', name: 'department', sort: false },
        { title: 'Mi date', name: 'mi_date', dateFormat: 'fullDate', sort: false },
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
      this.router.navigate([`/inventory/material-issue/${this.dataRow['row']['_id']}/edit`]);
    }
    if (event.data.action === 'View') {
      this.router.navigate([`/inventory/material-issue/${this.dataRow['row']['_id']}/view`]);
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
    this.is.deleteMi(index).subscribe(
      ng2TableData => {
        this.process = 'done';
        $('#deleteModal').modal('hide');
        this.refreshRedTable = { mode: 'delete', id: index };
      }, // filter(row => row.id != index),
      error => { console.log(error); }
    );
  }


}
