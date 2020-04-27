import { Component, OnInit } from '@angular/core';
import { AdminPrivilegesService } from 'src/app/shared/services/admin-privileges.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sync-plan-list',
  templateUrl: './sync-plan-list.component.html',
  styleUrls: ['./sync-plan-list.component.scss']
})
export class SyncPlanListComponent implements OnInit {

  constructor(
    public admin: AdminPrivilegesService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
  }

  updateDatabase() {
    this.admin.planRateList().subscribe(res => {
      this.toastr.success('Database Updated.');
      console.log('>>>>>res', res);
    }, err => {
      this.toastr.error('Something went wrong.');
      console.log('>>>>>Err', err);
    });
  }
}
