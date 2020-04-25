import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../../parameters';
import { TyremanagementService } from '../../tyremanagement.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-tyre-company-master',
  templateUrl: './list-tyre-company-master.component.html',
  styleUrls: ['./list-tyre-company-master.component.scss']
})
export class ListTyreCompanyMasterComponent implements OnInit {
  public addButtonInfo: Object = { text: 'Add Tyre Company Master', url: '/tyre-management/add-tyre-company-master' };
  public fetchUrl: string = GetApiurl('tyre-management/tyre-company-master');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  process: string;
  usertype: any;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Company Name'};
  constructor(
    private router: Router,
    public meta: MetaService,
    private ts: TyremanagementService
  ) {
    this.usertype = this.meta.getSiteFromStorage().role;
    console.log(' Usertype >>>  ', this.usertype);

    if (this.usertype === 'ADMIN') {
      this.columns = [
        { title: 'Name', name: 'coname', sort: false },
        { title: 'Actions', links: ['Edit', 'Delete'] }
      ];
    } else {
      this.columns = [
        { title: 'Name', name: 'coname', sort: false },
        { title: 'Actions', links: ['Edit'] }
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
      this.router.navigate([`/tyre-management/tyre-company-master/${this.dataRow['row']['_id']}/edit`]);
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
    this.ts.deleteTcm(index).subscribe(
      ng2TableData => {
        this.process = 'done';
        $('#deleteModal').modal('hide');
        this.refreshRedTable = { mode: 'delete', id: index };
      }, // filter(row => row.id != index),
      error => { console.log(error); }
    );
  }
}
