import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../../parameters';
import { AdminprivilegesService } from '../adminprivileges.service';
declare var $: any;

@Component({
  selector: 'app-list-tyre-ratelist',
  templateUrl: './list-tyre-ratelist.component.html',
  styleUrls: ['./list-tyre-ratelist.component.scss']
})
export class ListTyreRatelistComponent implements OnInit {
  public addButtonInfo: Object = { text: 'Add Tyre Rate List', url: '/admin-privileges/add-tyre-ratelist' };
  public fetchUrl: string = GetApiurl('admin-privileges/tyre-ratelist');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  process: string;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by CompanyName/Brand/TyreType/TyreSize'};
  constructor(
    private router: Router,
    private as: AdminprivilegesService
  ) {
    this.columns = [
      { title: 'Company Name', name: 'company_name', sort: false },
      { title: 'Brand', name: 'brand', sort: false },
      { title: 'Tyre Type', name: 'tyre_type', sort: false },
      { title: 'Tyre size', name: 'tyre_size', sort: false },
      { title: 'NSD', name: 'nsd', sort: false },
      { title: 'Date', name: 'trl_date', dateFormat: 'fullDate', sort: false },
      { title: 'Actions', links: ['Edit', 'Delete', 'View'] }
    ];
  }

  ngOnInit() {
  }
  linkClicked(event: any): any {
    const data = event.data;

    // console.log('list material', data);

    this.dataRow = data;
    if (event.data.action === 'Edit') {
      this.router.navigate([`/admin-privileges/tyre-ratelist/${this.dataRow['row']['_id']}/edit`]);
    }
    if (event.data.action === 'View') {
      this.router.navigate([`/admin-privileges/tyre-ratelist/${this.dataRow['row']['_id']}/view`]);
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
    this.as.deleteTrl(index).subscribe(
      ng2TableData => {
        this.process = 'done';
        $('#deleteModal').modal('hide');
        this.refreshRedTable = { mode: 'delete', id: index };
      }, // filter(row => row.id != index),
      error => { console.log(error); }
    );
  }


}
