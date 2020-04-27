import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../../parameters';
import { AccountsService } from '../../accounts.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-accounts-dataentry',
  templateUrl: './list-accounts-dataentry.component.html',
  styleUrls: ['./list-accounts-dataentry.component.scss']
})
export class ListAccountsDataentryComponent implements OnInit {

  public addButtonInfo: Object = { text: 'Add Accounts Data Entry', url: '/accounts/add-accounts-dataentry' };
  public fetchUrl: string = GetApiurl('accounts/accounts-dataentry');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  usertype: any;
  process: string;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Accountname / User Name'};
  constructor(
    private router: Router,
    public meta: MetaService,
    private as: AccountsService
  ) {
    this.usertype = this.meta.getSiteFromStorage().role;
    console.log(' Usertype >>>  ', this.usertype);

    if (this.usertype === 'ADMIN') {
      this.columns = [
        { title: 'Site', name: 'site', sort: true },
        { title: 'Type', name: 'ade_type', sort: true },
        { title: 'Tran.No', name: 'ade_number', sort: true },
        { title: 'Department', name: 'department', sort: true },
        { title: 'Dr_name', name: 'draccount_name', sort: true },
        { title: 'Cr_name', name: 'craccount_name', sort: true },
        { title: 'User', name: 'user', sort: true },
        { title: 'Actions', links: ['Edit', 'Delete'] }
      ];
    } else {
      this.columns = [
        { title: 'Site', name: 'site', sort: true },
        { title: 'Type', name: 'ade_type', sort: true },
        { title: 'Tran.No', name: 'ade_number', sort: true },
        { title: 'Department', name: 'department', sort: true },
        { title: 'Dr_name', name: 'draccount_name', sort: true },
        { title: 'Cr_name', name: 'craccount_name', sort: true },
        { title: 'User', name: 'user', sort: true },
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
      this.router.navigate([`/accounts/accounts-dataentry/${this.dataRow['row']['_id']}/edit`]);
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
    this.as.deleteAde(index).subscribe(
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
