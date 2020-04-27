import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../../parameters';
import { AdminprivilegesService } from '../adminprivileges.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-accounts-master',
  templateUrl: './list-accounts-master.component.html',
  styleUrls: ['./list-accounts-master.component.scss']
})
export class ListAccountsMasterComponent implements OnInit {

  public addButtonInfo: Object = { text: 'Add Accounts Master', url: '/admin-privileges/add-accounts-master' };
  public fetchUrl: string = GetApiurl('admin-privileges/accounts-master');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  usertype: any;
  process: string;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Accounts Name/Category/Group/City'};
  constructor(
    private router: Router,
    public meta: MetaService,
    private as: AdminprivilegesService
  ) {
    this.usertype = this.meta.getSiteFromStorage().role;
    console.log(' Usertype >>>  ', this.usertype);

    if (this.usertype === 'ADMIN') {
      this.columns = [
        { title: 'Name', name: 'accountname', sort: true },
        { title: 'Category', name: 'category', sort: true },
        { title: 'Under Group', name: 'group', sort: true },
        { title: 'Site', name: 'site', sort: true },
        { title: 'Opening', name: 'opbal', sort: true },
        { title: 'DRCR', name: 'ocrdr', sort: true },

        { title: 'Actions', links: ['Edit', 'Delete'] }
      ];
    } else {
      this.columns = [
        { title: 'Name', name: 'accountname', sort: true },
        { title: 'Category', name: 'category', sort: true },
        { title: 'Under Group', name: 'group', sort: true },
        { title: 'Site', name: 'site', sort: true },
        { title: 'Opening', name: 'opbal', sort: true },
        { title: 'DRCR', name: 'ocrdr', sort: true },
        { title: 'Actions', links: ['Edit'] }
      ];
    }

  }

  ngOnInit() {
  }
  linkClicked(event: any): any {
    const data = event.data;
    this.dataRow = data;
    if (event.data.action === 'Edit') {
      this.router.navigate([`/admin-privileges/accounts-master/${this.dataRow['row']['_id']}/edit`]);
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
    this.as.deleteAm(index).subscribe(
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
