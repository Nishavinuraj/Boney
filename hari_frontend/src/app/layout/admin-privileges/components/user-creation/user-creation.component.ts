import { Component, OnInit } from '@angular/core';
import { AdminPrivilegesService } from 'src/app/shared/services/admin-privileges.service';
import { routerTransition } from 'src/app/router.animations';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from 'src/app/shared/services/meta.service';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss'],
  animations: [routerTransition()]
})

export class UserCreationComponent implements OnInit {

  addExpenseForm: FormGroup;
  permissions: any = [];
  sites: any = [];
  loading = false;
  site_name: any;
  usertype: any;

  roles = [
    {role_name: 'ADMIN'},
    {role_name: 'STAFF'},
    {role_name: 'DRIVER'},
    {role_name: 'AP'}
  ];

  constructor(
    public adminService: AdminPrivilegesService,
    private formBuilder: FormBuilder,
    public toastr: ToastrService,
    public meta: MetaService
  ) {

    this.usertype = this.meta.getSiteFromStorage().role;
    this.site_name = this.meta.getSiteFromStorage().site;

    this.addExpenseForm = this.formBuilder.group({
      name: [''],
      password: [''],
      tpassword: [''],
      site: [''],
      role: [''],
      permissions: [''],
    });

    this.getPermissions();
    this.getSites();
   }

   getPermissions() {
    this.adminService.getPermissions().subscribe(res => {
        this.permissions = res;
    }, err => {
        // on error
    });
  }

  ngOnInit() {
  }

  getSites() {
    this.loading = true;
    this.meta.getSites().subscribe(res => {
        this.loading = false;
        this.sites = res;
        if (this.usertype === 'ADMIN') {
          this.addExpenseForm.controls['site'].setValue(this.sites[0].branch_name);
        } else {
          this.addExpenseForm.controls['site'].setValue(this.site_name);
        }
      },
      err => {
        this.loading = false;
      }
    );
  }

  save() {
    const mainArray = [];
    const getFromData = this.addExpenseForm.value;
    const getAllPermissionsFromUser = getFromData['permissions'];
    const getAllPermissionsFromDB = this.permissions;
    // console.log('getAllPermissionsFromUser  >>>>', getAllPermissionsFromUser);

    getAllPermissionsFromUser.forEach(r => {
      getAllPermissionsFromDB.forEach(i => {
        if (r === i.value) {
          const obj = {
            'pname': i.name,
            'pvalue': i.value
          };
          mainArray.push(obj);
        }
      });
    });
    console.log('mainArray  >>>>', mainArray);

    getFromData['permissions'] = mainArray;
    console.log('After Add  >>>>', getFromData);

    this.adminService.addUser(getFromData).subscribe(res => {
      this.toastr.success('Added!');
      this.addExpenseForm.reset();
      this.addExpenseForm.controls['site'].setValue(this.site_name);
      // this.modalService.dismissAll();
    }, err => {
      console.log('err   >>>', err);
      this.toastr.error('Something went wrong when adding!');
    });

  }
}
