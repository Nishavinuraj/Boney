import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../../parameters';
declare var $: any;

@Component({
  selector: 'app-type-master',
  templateUrl: './type-master.component.html',
  styleUrls: ['./type-master.component.scss']
})
export class TypeMasterComponent implements OnInit {

  public fetchUrl: string = GetApiurl('admin-privileges/type-master');
  public addButtonInfo: Object = { text: 'Add type master', url: null };
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
      { title: 'Type', name: 'field', sort: false },
      { title: 'Actions', links: ['Edit', 'Delete']}
    ];
  }

  ngOnInit() {
  }
  linkClicked(event: any): any {
    const data = event.data;
    this.dataRow = data;
    /* if (data.action === 'Edit') {
      const url: string = 'app/project/' + data['row']['id'];
      this.router.navigateByUrl(url);
    } */
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
