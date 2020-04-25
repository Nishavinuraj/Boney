import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../parameters';
import { MaintenanceService } from '../../maintenance/maintenance.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-job-work',
  templateUrl: './list-job-work.component.html',
  styleUrls: ['./list-job-work.component.scss']
})
export class ListJobWorkComponent implements OnInit {
  public addButtonInfo: Object = { text: 'Add Job Work', url: '/maintenance/add-job-work' };
  public fetchUrl: string = GetApiurl('maintenance/job-work');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  process: string;
  usertype: any;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by TruckNo, Vendor'};
  constructor(
    private router: Router,
    public meta: MetaService,
    private ms: MaintenanceService
  ) {
    this.usertype = this.meta.getSiteFromStorage().role;
    console.log(' Usertype >>>  ', this.usertype);

    if (this.usertype === 'ADMIN') {
      this.columns = [
        { title: 'Site', name: 'site', sort: false },
        { title: 'Type', name: 'job_type', sort: false },
        { title: 'Job No', name: 'job_number', sort: false },
        { title: 'Job Date', name: 'job_date', sort: false },
        { title: 'Truck No', name: 'truck_no', sort: false },
        { title: 'Vendor', name: 'vendor', sort: false },
        { title: 'User', name: 'user', sort: false },
        { title: 'Actions', links: ['Edit', 'Delete'] }
      ];
    } else {
      this.columns = [
        { title: 'Site', name: 'site', sort: false },
        { title: 'Type', name: 'job_type', sort: false },
        { title: 'Job No', name: 'job_number', sort: false },
        { title: 'Job Date', name: 'job_date', sort: false },
        { title: 'Truck No', name: 'truck_no', sort: false },
        { title: 'Vendor', name: 'vendor', sort: false },
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
      this.router.navigate([`/maintenance/job-work/${this.dataRow['row']['_id']}/edit`]);
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
    this.ms.deleteJobwork(index).subscribe(
      ng2TableData => {
        this.process = 'done';
        $('#deleteModal').modal('hide');
        this.refreshRedTable = { mode: 'delete', id: index };
      }, // filter(row => row.id != index),
      error => { console.log(error); }
    );
  }
}
