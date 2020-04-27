import { Component, OnInit } from '@angular/core';
import { UserCreationServiceService } from 'src/app/shared/services/user-creation-service.service';
import { routerTransition } from 'src/app/router.animations';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserCreationEditComponent } from '../user-creation-edit/user-creation-edit.component';

@Component({
  selector: 'app-user-creation-list',
  templateUrl: './user-creation-list.component.html',
  styleUrls: ['./user-creation-list.component.scss'],
  animations: [routerTransition()]
})
export class UserCreationListComponent implements OnInit {
  usersList: any = [];
  constructor(
    public usersService: UserCreationServiceService,
    private formBuilder: FormBuilder,
    public toastr: ToastrService,
    private modalService: NgbModal
  ) {
    this.getUsersList();
  }

  getUsersList() {
    this.usersService.getUsersList().subscribe(res => {
        this.usersList = res;
        this.usersList.forEach(r => {
          const per = [];
          r.permissions.forEach(e => {
            const data = ' ' + e.pname;
            per.push(data);
          });
          r.permissions = per;

        });

    }, err => {
        // on error
    });
  }

  delete(data, index) {

    const obj = {
      name: data.name,
    };

    const conf = confirm('Are you sure you want to delete this record ?');

    if (conf === true) {
      // this.loading = true;

      console.log('data  >>>>', obj);
      this.usersService.deleteRecord(obj).subscribe(res => {

        this.usersList.splice(index, 1);
        this.toastr.success('User deleted successfully.');
        // this.loading = false;
      }, err => {
        this.toastr.error('Something went wrong.');
        // this.loading = false;
      });
    }
  }

  ngOnInit() {
  }

  edit(d) {
    const modalRef = this.modalService.open(UserCreationEditComponent);
    modalRef.componentInstance.user_data = d;

    modalRef.result.then((res) => {
      if (res) {
        this.getUsersList();
      }
    });
  }


}
