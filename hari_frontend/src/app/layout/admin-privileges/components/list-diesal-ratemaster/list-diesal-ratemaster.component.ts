import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../../parameters';
import { AdminprivilegesService } from '../adminprivileges.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-diesal-ratemaster',
  templateUrl: './list-diesal-ratemaster.component.html',
  styleUrls: ['./list-diesal-ratemaster.component.scss']
})
export class ListDiesalRatemasterComponent implements OnInit {

  public addButtonInfo: Object = { text: 'Add Diesal Rates', url: '/admin-privileges/add-diesal-ratemaster' };
  public fetchUrl: string = GetApiurl('admin-privileges/diesal-ratemaster');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  usertype: any;
  process: string;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by pump name'};
  constructor(
    private router: Router,
    public meta: MetaService,
    private as: AdminprivilegesService
  ) {
    this.usertype = this.meta.getSiteFromStorage().role;
    console.log(' Usertype >>>  ', this.usertype);

    if (this.usertype === 'ADMIN') {
      this.columns = [
        { title: 'Site', name: 'site', sort: true },
        { title: 'Pump Name', name: 'vendername', sort: true },
        { title: 'Date', name: 'date', sort: true },
        { title: 'Rate', name: 'rate', sort: true },
        { title: 'UserName', name: 'username', sort: true },
        { title: 'Actions', links: ['Edit', 'Delete'] }
      ];
    } else {
      this.columns = [
        { title: 'Site', name: 'site', sort: true },
        { title: 'Pump Name', name: 'vendername', sort: true },
        { title: 'Date', name: 'date', sort: true },
        { title: 'Rate', name: 'rate', sort: true },
        { title: 'UserName', name: 'username', sort: true },
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
      this.router.navigate([`/admin-privileges/diesal-ratemaster/${this.dataRow['row']['_id']}/edit`]);
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
    this.as.deleteDrm(index).subscribe(
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
