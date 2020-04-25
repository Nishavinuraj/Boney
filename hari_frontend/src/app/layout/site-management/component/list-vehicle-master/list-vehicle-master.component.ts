import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../../parameters';
import { SitemanagementService } from '../../sitemanagement.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-vehicle-master',
  templateUrl: './list-vehicle-master.component.html',
  styleUrls: ['./list-vehicle-master.component.scss']
})
export class ListVehicleMasterComponent implements OnInit {

  public addButtonInfo: Object = { text: 'Add Vehicle Master', url: '/site-management/add-vehicle-master' };
  public fetchUrl: string = GetApiurl('site-management/vehicle-master');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  usertype: any;
  process: string;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Truck No, Owner Name'};
  constructor(
    private router: Router,
    public meta: MetaService,
    private as: SitemanagementService
  ) {
    this.usertype = this.meta.getSiteFromStorage().role;
    console.log(' Usertype >>>  ', this.usertype);

    if (this.usertype === 'ADMIN') {
      this.columns = [
        { title: 'TruckNo', name: 'truckno', sort: true },
        { title: 'Type', name: 'vtype', sort: true },
        { title: 'Owner Name', name: 'ownername', sort: true },
        { title: 'Tyre', name: 'type', sort: true },
        { title: 'CC', name: 'newcarring', sort: true },
        { title: 'Engine Type', name: 'enginetype', sort: true },
        { title: 'Actions', links: ['Edit', 'Delete'] }
      ];
    } else {
      this.columns = [
        { title: 'TruckNo', name: 'truckno', sort: true },
        { title: 'Type', name: 'vtype', sort: true },
        { title: 'Owner Name', name: 'ownername', sort: true },
        { title: 'Tyre', name: 'type', sort: true },
        { title: 'CC', name: 'newcarring', sort: true },
        { title: 'Engine Type', name: 'enginetype', sort: true },
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
      this.router.navigate([`/site-management/vehicle-master/${this.dataRow['row']['_id']}/edit`]);
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
    this.as.deleteVm(index).subscribe(
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
