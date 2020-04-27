import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../../parameters';
import { TyremanagementService } from '../../tyremanagement.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-tyre-master',
  templateUrl: './list-tyre-master.component.html',
  styleUrls: ['./list-tyre-master.component.scss']
})
export class ListTyreMasterComponent implements OnInit {

  public addButtonInfo: Object = { text: 'Add Tyre-Master', url: '/tyre-management/add-tyre-master' };
  public fetchUrl: string = GetApiurl('tyre-management/tyre-master');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  process: string;
  usertype: any;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Tyre No / Purchase Type / Tyre Position / Tyre Size / Vehicle No '};
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
        { title: 'Tyre No', name: 'tyre_no', sort: true },
        { title: 'Purchase Type', name: 'purchase_type', sort: false },
        { title: 'NSD', name: 'nsd', sort: false },
        { title: 'Fitment Date', name: 'date_of_fitment', sort: false },
        { title: 'Fitment Km', name: 'fitment_km', sort: false },
        { title: 'Tyre Position', name: 'tyreposition', sort: false },
        { title: 'Tyre Size', name: 'tyre_size', sort: false },
        { title: 'Vehicle No', name: 'vehicle_no', sort: false },
        { title: 'Status', name: 'tyrestatus', sort: false },
        { title: 'User', name: 'user', sort: false },
        { title: 'Actions', links: ['Edit', 'Delete'] }
      ];

    } else {
      this.columns = [
        { title: 'Tyre No', name: 'tyre_no', sort: true },
        { title: 'Purchase Type', name: 'purchase_type', sort: false },
        { title: 'NSD', name: 'nsd', sort: false },
        { title: 'Fitment Date', name: 'date_of_fitment', sort: false },
        { title: 'Fitment Km', name: 'fitment_km', sort: false },
        { title: 'Tyre Position', name: 'tyreposition', sort: false },
        { title: 'Tyre Size', name: 'tyre_size', sort: false },
        { title: 'Vehicle No', name: 'vehicle_no', sort: false },
        { title: 'Status', name: 'tyrestatus', sort: false },
        { title: 'User', name: 'user', sort: false },
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
      this.router.navigate([`/tyre-management/tyre-master/${this.dataRow['row']['_id']}/edit`]);
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
    this.ts.deleteTm(index).subscribe(
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
