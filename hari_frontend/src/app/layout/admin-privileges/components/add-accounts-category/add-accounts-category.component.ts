import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MetaService } from 'src/app/shared/services/meta.service';
import { Router } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';

@Component({
  selector: 'app-add-accounts-category',
  templateUrl: './add-accounts-category.component.html',
  styleUrls: ['./add-accounts-category.component.scss']
})
export class AddAccountsCategoryComponent implements OnInit {
  public AcForm: any;
  public process: string;
  public undergroup_options: any;

  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private as: AdminprivilegesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getOptions();
  }
  public buildForm(): void {
    this.AcForm = this.fb.group(
      {
        'catname': [''],
        'cattype': [''],
        'undergroup': [''],
        'accounts': [''],
        'drcr': [''],
      }
    );
  }

  public save() {

    console.log('Accounts Category Save', this.AcForm.value);

    this.process = 'saving';
    this.as.addAc(this.AcForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/admin-privileges/accounts-category']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  private getOptions() {
    this.metaService.getCatNamesGroup().subscribe(siteInfo => {
      this.undergroup_options = siteInfo['result'];
    });

  }
}
