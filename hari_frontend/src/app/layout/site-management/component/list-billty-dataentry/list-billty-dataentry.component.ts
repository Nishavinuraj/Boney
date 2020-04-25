import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../../parameters';
import { SitemanagementService } from '../../sitemanagement.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-billty-dataentry',
  templateUrl: './list-billty-dataentry.component.html',
  styleUrls: ['./list-billty-dataentry.component.scss']
})
export class ListBilltyDataentryComponent implements OnInit {
  public addButtonInfo: Object = { text: 'Add Billty Entry', url: '/site-management/add-billty-dataentry' };
  public fetchUrl: string = GetApiurl('site-management/billty-dataentry');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  usertype: any;
  process: string;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Site/lrno/TruckNo/Consignee'};
  constructor(
    private router: Router,
    public meta: MetaService,
    private ss: SitemanagementService
  ) {
    this.usertype = this.meta.getSiteFromStorage().role;
    console.log(' Usertype >>>  ', this.usertype);

    if (this.usertype === 'ADMIN') {
      this.columns = [
        { title: 'Site', name: 'site', sort: false },
        { title: 'Lr no', name: 'lrno', sort: false },
        { title: 'Lr Date', name: 'lrdate', sort: false },
        { title: 'Truck No', name: 'truckno', sort: false },
        { title: 'Consignee', name: 'consignne', sort: false },
        { title: 'User', name: 'user', sort: false },
        { title: 'Actions', links: ['Edit', 'Delete', 'View'] }
      ];
    } else {
      this.columns = [
        { title: 'Site', name: 'site', sort: false },
        { title: 'Lr no', name: 'lrno', sort: false },
        { title: 'Lr Date', name: 'lrdate', sort: false },
        { title: 'Truck No', name: 'truckno', sort: false },
        { title: 'Consignee', name: 'consignne', sort: false },
        { title: 'User', name: 'user', sort: false },
        { title: 'Actions', links: ['View'] }
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
      this.router.navigate([`/site-management/billty-dataentry/${this.dataRow['row']['_id']}/edit`]);
    }
    if (event.data.action === 'View') {
      this.router.navigate([`/site-management/billty-dataentry/${this.dataRow['row']['_id']}/view`]);
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
    let data = {
      site:this.dataRow['row']['truckno'],
      truckno:this.dataRow['row']['site'],
      lrno:this.dataRow['row']['lrno']
    }
    this.ss.deleteBde(index).subscribe(
      ng2TableData => {
        
        this.ss.updateTruckPositionBiltyGen(data).subscribe(res=>{
          this.process = 'done';
          $('#deleteModal').modal('hide');
          this.refreshRedTable = { mode: 'delete', id: index };
        })

        
      }, // filter(row => row.id != index),
      error => { console.log(error); }
    );
  }

}
