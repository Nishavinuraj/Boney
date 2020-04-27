import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../../parameters';
import { AdminprivilegesService } from '../adminprivileges.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-tyre-target-master',
  templateUrl: './list-tyre-target-master.component.html',
  styleUrls: ['./list-tyre-target-master.component.scss']
})
export class ListTyreTargetMasterComponent implements OnInit {

  public addButtonInfo: Object = { text: 'Add Tyre-Target-Master', url: '/admin-privileges/add-tyre-target-master' };
  public fetchUrl: string = GetApiurl('admin-privileges/tyre-target-master');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  usertype: any;
  process: string;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Tyre Number'};
  constructor(
    private router: Router,
    public meta: MetaService,
    private as: AdminprivilegesService
  ) {
    this.usertype = this.meta.getSiteFromStorage().role;
    console.log(' Usertype >>>  ', this.usertype);

    if (this.usertype === 'ADMIN') {
      this.columns = [
        { title: 'Name', name: 'name', sort: true },
        { title: 'Amount', name: 'tamount', sort: true },
        { title: 'Actions', links: ['Edit', 'Delete'] }
      ];
    } else {
      this.columns = [
        { title: 'Name', name: 'name', sort: true },
        { title: 'Amount', name: 'tamount', sort: true },
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
      this.router.navigate([`/admin-privileges/tyre-target-master/${this.dataRow['row']['_id']}/edit`]);
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
    this.as.deleteTtm(index).subscribe(
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
