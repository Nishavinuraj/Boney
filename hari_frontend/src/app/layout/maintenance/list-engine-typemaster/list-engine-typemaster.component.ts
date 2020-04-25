import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../parameters';
import { MaintenanceService } from '../maintenance.service';
declare var $: any;

@Component({
  selector: 'app-list-engine-typemaster',
  templateUrl: './list-engine-typemaster.component.html',
  styleUrls: ['./list-engine-typemaster.component.scss']
})
export class ListEngineTypemasterComponent implements OnInit {
  public addButtonInfo: Object = { text: 'Add Engine Type Master', url: '/maintenance/add-engine-typemaster' };
  public fetchUrl: string = GetApiurl('maintenance/engine-typemaster');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  process: string;

  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Engine Type'};
  constructor(
    private router: Router,
    private ms: MaintenanceService
  ) {
    this.columns = [
      { title: 'Engine Type', name: 'enginetype', sort: false },
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
      this.router.navigate([`/maintenance/engine-typemaster/${this.dataRow['row']['_id']}/edit`]);
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
    this.ms.deleteEtm(index).subscribe(
      ng2TableData => {
        this.process = 'done';
        $('#deleteModal').modal('hide');
        this.refreshRedTable = { mode: 'delete', id: index };
      }, // filter(row => row.id != index),
      error => { console.log(error); }
    );
  }


}
