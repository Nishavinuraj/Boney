import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../../parameters';
declare var $: any;
@Component({
  selector: 'app-admin-master',
  templateUrl: './admin-master.component.html',
  styleUrls: ['./admin-master.component.scss']
})
export class AdminMasterComponent implements OnInit {
  public addButtonInfo: Object = { text: 'Add admin master', url: null };
  public fetchUrl: string = GetApiurl('admin-privileges/admin-master');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  process: string;
  public modal_title: string;
  constructor(
    private router: Router,
  ) {
    this.columns = [
      { title: 'Name', name: 'name', sort: false },
      { title: 'Type', name: 'field', sort: false },
      { title: 'Actions', links: ['Edit', 'Delete'] }
    ];
  }

  ngOnInit() {
  }
  linkClicked(event: any): any {
    const data = event.data;
    this.dataRow = data;
    if (event.data.action === 'Add') {
      $('#addAndEditModal').modal('show');
      this.modal_title = 'Add admin master';
    }
    if (event.data.action === 'Edit') {
      $('#addAndEditModal').modal('show');
      this.modal_title = 'Edit admin master';
    }
    if (data.action === 'Delete') {
      $('#deleteModal').modal('show');
    }
  }
  public deleteControllerClick() {
    this.process = 'processing';
    this.deleteProject(this.dataRow['row']['id']);
  }
  public deleteProject(index: number) {
    /* this.ps.deletePlaces(index).subscribe(
      ng2TableData => {
        this.process = 'done';
        $('#deleteModal').modal('hide');
        this.refreshRedTable = { mode: 'delete', id: index };
      }, // filter(row => row.id != index),
      error => { console.log(error) }
    ) */
  }


}
