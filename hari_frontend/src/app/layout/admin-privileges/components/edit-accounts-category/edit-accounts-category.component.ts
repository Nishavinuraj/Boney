import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';

@Component({
  selector: 'app-edit-accounts-category',
  templateUrl: './edit-accounts-category.component.html',
  styleUrls: ['./edit-accounts-category.component.scss']
})
export class EditAccountsCategoryComponent implements OnInit {
  public acForm: any;
  public process: string;
  public undergroup_options: any;

  public acDetails: any;

  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private as: AdminprivilegesService,
    private router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.acDetails = this.aroute.snapshot.data['ac_details'];
    this.buildForm();
    this.getOptions();
  }
  public buildForm(): void {
    this.acForm = this.fb.group(
      {
        'catname': [this.acDetails.catname],
        'cattype': [this.acDetails.cattype],
        'undergroup': [this.acDetails.undergroup],
        'accounts': [this.acDetails.accounts],
        'drcr': [this.acDetails.drcr],
      }
    );
  }

  public saveAc() {
    this.process = 'saving';
    this.as.updatAc(this.acDetails['_id'], this.acForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/admin-privileges/accounts-category']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  private getOptions() {
    this.metaService.getCatNames().subscribe(siteInfo => {
      this.undergroup_options = siteInfo['result'];
    });

  }

}

