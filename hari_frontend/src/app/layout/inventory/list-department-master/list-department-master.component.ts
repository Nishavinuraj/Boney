import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiurl } from '../../../parameters';
import { InventoryService } from '../inventory.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var $: any;

@Component({
  selector: 'app-list-department-master',
  templateUrl: './list-department-master.component.html',
  styleUrls: ['./list-department-master.component.scss']
})
export class ListDepartmentMasterComponent implements OnInit {

  public addButtonInfo: Object = { text: 'Add Department-Master', url: '/inventory/add-department-master' };
  public fetchUrl: string = GetApiurl('inventory/department-master');
  columns: Array<any> = [
  ];
  refreshRedTable: any;
  dataRow: any;
  usertype: any;
  process: string;
  public modal_title: string;
  public commonFilter: Object = {filterString: '', columnName: 'searchString', placeholder: 'Search by Department Name'};
  constructor(
    private router: Router,
    public meta: MetaService,
    private is: InventoryService
  ) {
    this.usertype = this.meta.getSiteFromStorage().role;
    console.log(' Usertype >>>  ', this.usertype);

    if (this.usertype === 'ADMIN') {
      this.columns = [
        { title: 'Name', name: 'deptname', sort: true },
        { title: 'Actions', links: ['Edit', 'Delete'] }
      ];
    } else {
      this.columns = [
        { title: 'Name', name: 'deptname', sort: true },
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
      this.router.navigate([`/inventory/department-master/${this.dataRow['row']['_id']}/edit`]);
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
    this.is.deleteDepartmentMaster(index).subscribe(
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
