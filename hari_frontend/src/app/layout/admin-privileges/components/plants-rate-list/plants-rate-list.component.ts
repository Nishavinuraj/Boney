import { Component, OnInit } from '@angular/core';
import { AdminPrivilegesService } from 'src/app/shared/services/admin-privileges.service';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-plants-rate-list',
  templateUrl: './plants-rate-list.component.html',
  styleUrls: ['./plants-rate-list.component.scss'],
  animations: [routerTransition()]
})
export class PlantsRateListComponent implements OnInit {

  plantRates: any = [];
  pagination = {total: 0, currenPage: 1, pageSize: 50, maxSize: 10};
  filters = { page: 0 };
  loading = false;

  constructor(
    public adminService: AdminPrivilegesService
  ) {
    this.planRateList();
  }

  ngOnInit() {
  }

  planRateList() {

    this.filters.page = this.pagination.currenPage;
    this.loading = true;
    this.adminService.getPlanRateList(this.filters).subscribe((res: any) => {
      this.loading = false;
      this.plantRates = res.results;
      this.pagination.total = res.total;
      console.log('>>>>>>>>>>>>>res ', res);
    }, err => {
      this.loading = false;
      console.log('>>>>>>>>>>>>>err', err);
    });
  }

  fetchReport() {

  }

}
