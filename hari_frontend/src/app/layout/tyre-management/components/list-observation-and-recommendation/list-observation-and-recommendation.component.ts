import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../../parameters';
import { TyremanagementService } from '../../tyremanagement.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-observation-and-recommendation',
  templateUrl: './list-observation-and-recommendation.component.html',
  styleUrls: ['./list-observation-and-recommendation.component.scss']
})
export class ListObservationAndRecommendationComponent implements OnInit {

  public addButtonInfo: Object = { text: 'Add Observation and Recommendation Master',
  url: '/tyre-management/add-observation-and-recommendation' };

  public fetchUrl: string = GetApiurl('tyre-management/observation-and-recommendation');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  process: string;
  usertype: any;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Name'};
  constructor(
    private router: Router,
    public meta: MetaService,
    private tm: TyremanagementService
  ) {
    this.usertype = this.meta.getSiteFromStorage().role;

    console.log(' Usertype >>>  ', this.usertype);
    if (this.usertype === 'ADMIN') {
      this.columns = [
        { title: 'Type', name: 'orname', sort: true },
        { title: 'Description', name: 'desc', sort: false },
        { title: 'Actions', links: ['Edit', 'Delete'] }
      ];
    } else {
      this.columns = [
        { title: 'Type', name: 'orname', sort: true },
        { title: 'Description', name: 'desc', sort: false },
        { title: 'Actions', links: ['Edit', 'Delete'] }
      ];
    }

  }

  ngOnInit() {
  }
  linkClicked(event: any): any {
    const data = event.data;
    this.dataRow = data;
    if (event.data.action === 'Edit') {
      this.router.navigate([`/tyre-management/observation-and-recommendation/${this.dataRow['row']['_id']}/edit`]);
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
    this.tm.deleteOar(index).subscribe(
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
