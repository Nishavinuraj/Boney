import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../../parameters';
import { AdminprivilegesService } from '../adminprivileges.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-accounts-category',
  templateUrl: './list-accounts-category.component.html',
  styleUrls: ['./list-accounts-category.component.scss']
})
export class ListAccountsCategoryComponent implements OnInit {

  public addButtonInfo: Object = { text: 'Add Accounts Category', url: '/admin-privileges/add-accounts-category' };
  public fetchUrl: string = GetApiurl('admin-privileges/accounts-category');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  usertype: any;
  process: string;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Category/Type/UnderGroup'};
  constructor(
    private router: Router,
    public meta: MetaService,
    private as: AdminprivilegesService
  ) {
    this.usertype = this.meta.getSiteFromStorage().role;
    console.log(' Usertype >>>  ', this.usertype);

    if (this.usertype === 'ADMIN') {
      this.columns = [
        { title: 'Category', name: 'catname', sort: true },
        { title: 'Type', name: 'cattype', sort: true },
        { title: 'Under Group', name: 'undergroup', sort: true },
        { title: 'Accounts', name: 'accounts', sort: true },
        { title: 'Debit-Credit', name: 'drcr', sort: true },
        { title: 'Actions', links: ['Edit', 'Delete'] }
      ];
    } else {
      this.columns = [
        { title: 'Category', name: 'catname', sort: true },
        { title: 'Type', name: 'cattype', sort: true },
        { title: 'Under Group', name: 'undergroup', sort: true },
        { title: 'Accounts', name: 'accounts', sort: true },
        { title: 'Debit-Credit', name: 'drcr', sort: true },
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
      this.router.navigate([`/admin-privileges/accounts-category/${this.dataRow['row']['_id']}/edit`]);
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
    this.as.deleteAc(index).subscribe(
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
