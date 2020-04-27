import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminPrivilegesService } from 'src/app/shared/services/admin-privileges.service';
import { MetaService } from 'src/app/shared/services/meta.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-creation-edit',
  templateUrl: './user-creation-edit.component.html',
  styleUrls: ['./user-creation-edit.component.scss']
})
export class UserCreationEditComponent implements OnInit {

  @Input() user_data;

  editForm: FormGroup;
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
    public activeModal: NgbActiveModal,
    public fb: FormBuilder,
    public adminService: AdminPrivilegesService,
    public toastr: ToastrService,
    public meta: MetaService
  ) {

  }

  ngOnInit() {

    this.usertype = this.meta.getSiteFromStorage().role;
    this.site_name = this.meta.getSiteFromStorage().site;

    this.editForm = this.fb.group({
      permissions: [''],
      name: [''],
      site: [''],
      role: [''],
    });

    this.getSites();
    this.getPermissions();

    // Get permission array
    this.editForm.controls['name'].setValue(this.user_data.name);
    this.editForm.controls['site'].setValue(this.user_data.site);
    this.editForm.controls['role'].setValue(this.user_data.role);
  }

  getPermissions() {
    this.adminService.getPermissions().subscribe((res: any) => {

      res.forEach(element => {
        element.checked = false;
      });

      this.user_data.permissions.forEach(p => {
        p = p.trim();
        res.forEach(element => {
          if (p === element.name) {
            element.checked = true;
          }
        });
      });

      this.permissions = res;
    }, err => {
        // on error
    });
  }

  onPermissionClick(p) {
    p.checked = !p.checked;
  }

  getSites() {
    this.loading = true;
    this.meta.getSites().subscribe(res => {
        this.loading = false;
        this.sites = res;
      },
      err => {
        this.loading = false;
      }
    );
  }

  update() {

    const getFromData = this.editForm.value;
    const val = {
      'name': getFromData.name,
      'site': getFromData.site,
      'role': getFromData.role,
      'permissions' : []
    };

    const mainArray = [];
    console.log(' my permissions', this.permissions)
    this.permissions.forEach(element => {
      if (element.checked === true) {
        const obj = {
            'pname': element.name,
            'pvalue': element.value
          };
          val.permissions.push(obj);
        }
    });

    this.adminService.updateUserCreation(this.user_data._id, val).subscribe(res => {
      this.activeModal.close(res);
      this.toastr.success('User creation updated!');
    }, err => {
      this.activeModal.dismiss();
      this.toastr.error('Something went wrong when adding!');
    });

  }

}
