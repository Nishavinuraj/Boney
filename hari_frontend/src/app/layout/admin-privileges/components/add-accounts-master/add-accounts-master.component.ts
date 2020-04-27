import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MetaService } from 'src/app/shared/services/meta.service';
import { Router } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';

@Component({
  selector: 'app-add-accounts-master',
  templateUrl: './add-accounts-master.component.html',
  styleUrls: ['./add-accounts-master.component.scss']
})
export class AddAccountsMasterComponent implements OnInit {
  public amForm: any;
  public process: string;
  loading = false;
  // public siteOptions: any;
  siteOptions = [];
  usertype: any;
  site_name: any;

  public category_options: any;
  public group_options: any;
  public accounttype_options: any;
  public underledger_options: any;
  public bcity_options: any;
  public bstate_options: any;
  public bcountry_options: any;
  public scity_options: any;
  public sstate_options: any;
  public scountry_options: any;

  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private as: AdminprivilegesService,
    private router: Router
  ) {
    this.usertype = this.metaService.getSiteFromStorage().role;
    this.site_name = this.metaService.getSiteFromStorage().site;
   }

  ngOnInit() {
    this.buildForm();
    this.getOptions();
    this.getSites();
  }

  getSites() {
    this.loading = true;
    this.metaService.getSites().subscribe((res: any) => {
        this.loading = false;
        this.siteOptions = res;
        // if (this.usertype === 'ADMIN') {
        //   // this.amForm.controls['site'].setValue(this.siteOptions[0].branch_name);
        // } else {
        //   this.amForm.controls['site'].setValue(this.site_name);
        // }
      },
      err => {
        this.loading = false;
      }
    );
  }


  public buildForm(): void {
    this.amForm = this.fb.group(
      {
        'accountname': ['', [Validators.required]],
        'category': ['', [Validators.required]],
        'group': [''],
        'accounttype': [''],
        'site': [''],
        'underledger': [''],
        'gstnumber': [''],
        'panno': [''],
        'vcode': [''],
        'contactpersonname': [''],
        'email': [''],
        'mobile1': [''],
        'mobile2': [''],
        'opbal': [0],
        'ocrdr': [''],
        'clbal': [0],
        'cdrcr': [''],
        'bstreet1': [''],
        'bstreet2': [''],
        'bcity': [''],
        'bstate': [''],
        'bzip': [''],
        'bcountry': [''],
        'bphone': [''],
        'sstreet1': [''],
        'sstreet2': [''],
        'scity': [''],
        'sstate': [''],
        'szip': [''],
        'scountry': [''],
        'sphone': [''],

      }
    );
  }

  public save() {

    console.log('Accounts Master Save', this.amForm.value);

    this.process = 'saving';
    this.as.addSpro(this.amForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/admin-privileges/accounts-master']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  private getOptions() {
    this.metaService.getCatNames().subscribe(siteInfo => {
      this.category_options = siteInfo['result'];
    });
    this.metaService.getCatNamesGroup().subscribe(siteInfo => {
      this.group_options = siteInfo['result'];
    });
    this.metaService.getAccounttype().subscribe(siteInfo => {
      this.accounttype_options = siteInfo['result'];
    });
    this.metaService.getUnderledger().subscribe(siteInfo => {
      this.underledger_options = siteInfo['result'];
    });
    this.metaService.getcity().subscribe(siteInfo => {
      this.bcity_options = siteInfo['result'];
    });
    this.metaService.getstate().subscribe(siteInfo => {
      this.bstate_options = siteInfo['result'];
    });
    this.metaService.getcountry().subscribe(siteInfo => {
      this.bcountry_options = siteInfo['result'];
    });

    this.metaService.getcity().subscribe(siteInfo => {
      this.scity_options = siteInfo['result'];
    });
    this.metaService.getstate().subscribe(siteInfo => {
      this.sstate_options = siteInfo['result'];
    });
    this.metaService.getcountry().subscribe(siteInfo => {
      this.scountry_options = siteInfo['result'];
    });


  }
}
