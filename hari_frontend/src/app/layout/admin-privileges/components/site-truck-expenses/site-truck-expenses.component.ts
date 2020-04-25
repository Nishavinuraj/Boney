import { Component, OnInit } from '@angular/core';
import { AdminPrivilegesService } from 'src/app/shared/services/admin-privileges.service';
import { routerTransition } from 'src/app/router.animations';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-site-truck-expenses',
  templateUrl: './site-truck-expenses.component.html',
  styleUrls: ['./site-truck-expenses.component.scss'],
  animations: [routerTransition()]
})
export class SiteTruckExpensesComponent implements OnInit {

  expenses: any = [];
  multiDests: any = [];
  activeTab = 'list';
  pagination = {total: 0, currenPage: 1, pageSize: 50, maxSize: 10};
  filters = { page: 0 };
  loading = false;
  constructor(
    public adminService: AdminPrivilegesService
  ) {
  }

  ngOnInit() {
    this.getExpenseList();
  }

  getExpenseList() {
    this.filters.page = this.pagination.currenPage;

    this.loading = true;
    this.adminService.getSiteTruckExp(this.filters).subscribe((res: any) => {
      this.loading = false;
      this.expenses = res.results;
      this.pagination.total = res.total;
    }, err => {
      this.loading = false;
      console.log('>>>>>>>>>>>>>err', err);
    });
  }

  multiDest(obj) {
    localStorage.setItem('siteName', JSON.stringify(obj.site));
  }

}
