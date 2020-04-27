import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../../parameters';
import { AdminprivilegesService } from '../adminprivileges.service';
declare var $: any;

@Component({
  selector: 'app-list-truck-average',
  templateUrl: './list-truck-average.component.html',
  styleUrls: ['./list-truck-average.component.scss']
})
export class ListTruckAverageComponent implements OnInit {
  public addButtonInfo: Object = { text: 'Add Truck Average', url: '/admin-privileges/add-truck-average' };
  public fetchUrl: string = GetApiurl('admin-privileges/truck-average');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  process: string;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Site Name'};
  constructor(
    private router: Router,
    private as: AdminprivilegesService
  ) {
    this.columns = [
      { title: 'Site Name', name: 'site', sort: false },
      { title: 'Actions', links: ['Edit', 'Delete'] }
    ];
  }

  ngOnInit() {
  }
  linkClicked(event: any): any {
    const data = event.data;

    // console.log('list material', data);

    this.dataRow = data;
    if (event.data.action === 'Edit') {
      this.router.navigate([`/admin-privileges/truck-average/${this.dataRow['row']['_id']}/edit`]);
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
    this.as.deleteTa(index).subscribe(
      ng2TableData => {
        this.process = 'done';
        $('#deleteModal').modal('hide');
        this.refreshRedTable = { mode: 'delete', id: index };
      }, // filter(row => row.id != index),
      error => { console.log(error); }
    );
  }


}
