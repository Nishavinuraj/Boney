import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../parameters';
import { MaintenanceService } from '../maintenance.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-job-workmaster',
  templateUrl: './list-job-workmaster.component.html',
  styleUrls: ['./list-job-workmaster.component.scss']
})
export class ListJobWorkmasterComponent implements OnInit {

  public addButtonInfo: Object = { text: 'Add Job-Work-Master', url: '/maintenance/add-job-workmaster' };
  public fetchUrl: string = GetApiurl('maintenance/job-workmaster');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  usertype: any;
  process: string;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Job Work Name'};
  constructor(
    private router: Router,
    public meta: MetaService,
    private ms: MaintenanceService
  ) {
    this.usertype = this.meta.getSiteFromStorage().role;
    console.log(' Usertype >>>  ', this.usertype);

    if (this.usertype === 'ADMIN') {
      this.columns = [
        { title: 'Name', name: 'jobworkname', sort: true },
        { title: 'Actions', links: ['Edit', 'Delete'] }
      ];
    } else {
      this.columns = [
        { title: 'Name', name: 'jobworkname', sort: true },
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
      this.router.navigate([`/maintenance/job-workmaster/${this.dataRow['row']['_id']}/edit`]);
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
    this.ms.deleteJobworkmaster(index).subscribe(
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
