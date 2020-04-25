import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../../parameters';
import { AdminprivilegesService } from '../adminprivileges.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-broker-master',
  templateUrl: './list-broker-master.component.html',
  styleUrls: ['./list-broker-master.component.scss']
})
export class ListBrokerMasterComponent implements OnInit {

  public addButtonInfo: Object = { text: 'Add Broker Master', url: '/admin-privileges/add-broker-master' };
  public fetchUrl: string = GetApiurl('admin-privileges/broker-master');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  usertype: any;
  process: string;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Brokername'};
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
        { title: 'Broker Name', name: 'brokername', sort: true },
        { title: 'Mobile No', name: 'mobileno', sort: true },
        { title: 'State', name: 'statename', sort: true },
        { title: 'Actions', links: ['Edit', 'Delete'] }
      ];
    } else {
      this.columns = [
        { title: 'Site', name: 'site', sort: true },
        { title: 'Broker Name', name: 'brokername', sort: true },
        { title: 'Mobile No', name: 'mobileno', sort: true },
        { title: 'State', name: 'statename', sort: true },
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
      this.router.navigate([`/admin-privileges/broker-master/${this.dataRow['row']['_id']}/edit`]);
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
    this.as.deleteBm(index).subscribe(
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
