import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../../parameters';
import { AdminprivilegesService } from '../adminprivileges.service';
declare var $: any;

@Component({
  selector: 'app-list-site-destinationkms',
  templateUrl: './list-site-destinationkms.component.html',
  styleUrls: ['./list-site-destinationkms.component.scss']
})
export class ListSiteDestinationkmsComponent implements OnInit {
  public addButtonInfo: Object = { text: 'Add Site Destination Kms', url: '/admin-privileges/add-site-destinationkms' };
  public fetchUrl: string = GetApiurl('admin-privileges/site-destinationkms');
  columns: Array<any> = [
  ];
  sdkName = "Update Invalid Site Destination kms";
  rdkName = "Update Invalid Site Rates Destinations";
  sdkZero = "Update Site Destination kms equals zero";
  
  refreshRedTable: any;
  dataRow: any;
  process: string;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Site / Destination Name'};
  constructor(
    private router: Router,
    private as: AdminprivilegesService
  ) {
    this.columns = [
      { title: 'Site Name', name: 'site', sort: false },
      { title: 'Destination', name: 'destination', sort: false },
      { title: 'KM', name: 'km', sort: false },
      { title: 'Actions', links: ['Edit', 'Delete'] }
    ];
  }

  updateSiteDestKm(){
    this.sdkName = "Please wait..."
    this.as.updateSiteDestKm().subscribe(res=>{
      this.sdkName = "Update Invalid Site Destination kms"

    })
  }

  updateRateDestKm(){
    this.rdkName = 'Please Wait...'
    this.as.updateRateMultidestKm().subscribe(res=>{
      this.rdkName = "Update Invalid Site Rates Destinations";
    })
  }

  ngOnInit() {
  }
  linkClicked(event: any): any {
    const data = event.data;

    // console.log('list material', data);

    this.dataRow = data;
    if (event.data.action === 'Edit') {
      this.router.navigate([`/admin-privileges/site-destinationkms/${this.dataRow['row']['_id']}/edit`]);
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
    this.as.deleteSdk(index).subscribe(
      ng2TableData => {
        this.process = 'done';
        $('#deleteModal').modal('hide');
        this.refreshRedTable = { mode: 'delete', id: index };
      }, // filter(row => row.id != index),
      error => { console.log(error); }
    );
  }


}
