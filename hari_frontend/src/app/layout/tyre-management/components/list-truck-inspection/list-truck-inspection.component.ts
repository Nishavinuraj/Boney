import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../../parameters';
import { TyremanagementService } from '../../tyremanagement.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-truck-inspection',
  templateUrl: './list-truck-inspection.component.html',
  styleUrls: ['./list-truck-inspection.component.scss']
})
export class ListTruckInspectionComponent implements OnInit {

  public addButtonInfo: Object = { text: 'Add Truck Inspection', url: '/tyre-management/add-truck-inspection' };
  public fetchUrl: string = GetApiurl('tyre-management/truck_inspection');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  process: string;
  usertype: any;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Truckno '};
  constructor(
    private router: Router,
    private ts: TyremanagementService,
    public meta: MetaService
  ) {


    this.usertype = this.meta.getSiteFromStorage().role;
    console.log(' Usertype >>>  ', this.usertype);

    // if (this.usertype === 'ADMIN') {
    // } else {
    // }

    if (this.usertype === 'ADMIN') {
      this.columns = [
        { title: 'Date', name: 'idate', sort: false },
        { title: 'Truck No', name: 'truck_no', sort: true },
        { title: 'Km Reading', name: 'km_reading', sort: false },
        { title: 'User', name: 'user', sort: false },
        { title: 'Actions', links: ['Edit', 'Delete', 'View'] }
      ];

    } else {
      this.columns = [
        { title: 'Date', name: 'idate', sort: false },
        { title: 'Truck No', name: 'truck_no', sort: true },
        { title: 'Km Reading', name: 'km_reading', sort: false },
        { title: 'User', name: 'user', sort: false },
        { title: 'Actions', links: ['Edit', 'View'] }
      ];

    }


  }

  ngOnInit() {
  }
  linkClicked(event: any): any {
    const data = event.data;
    this.dataRow = data;
    if (event.data.action === 'Edit') {
      this.router.navigate([`/tyre-management/truck_inspection/${this.dataRow['row']['_id']}/edit`]);
    }
    if (event.data.action === 'View') {
      this.router.navigate(['/tyre-management/truck-inspection/'+this.dataRow['row']['_id']+'/view']);
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
    this.ts.deleteTi(index).subscribe(
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
