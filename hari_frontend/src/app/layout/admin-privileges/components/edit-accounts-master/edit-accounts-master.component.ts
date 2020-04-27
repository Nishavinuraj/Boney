import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';

@Component({
  selector: 'app-edit-accounts-master',
  templateUrl: './edit-accounts-master.component.html',
  styleUrls: ['./edit-accounts-master.component.scss']
})
export class EditAccountsMasterComponent implements OnInit {
  public amForm: any;
  public process: string;

  // public siteOptions: any;
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

  public amDetails: any;

  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private ms: MaintenanceService,
    private as: AdminprivilegesService,
    private router: Router,
    private aroute: ActivatedRoute
  ){
    this.usertype = this.metaService.getSiteFromStorage().role;
    this.site_name = this.metaService.getSiteFromStorage().site;
   }

  ngOnInit() {

    this.amDetails = this.aroute.snapshot.data['am_details'];
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
        'accountname': [this.amDetails.accountname],
        'category': [this.amDetails.category],
        'group': [this.amDetails.group],
        'accounttype': [this.amDetails.accounttype],
        'underledger': [this.amDetails.underledger],
        'site' : [this.amDetails.site],
        'gstnumber': [this.amDetails.gstnumber],
        'panno': [this.amDetails.panno],
        'vcode': [this.amDetails.vcode],
        'contactpersonname': [this.amDetails.contactpersonname],
        'email': [this.amDetails.email],
        'mobile1': [this.amDetails.mobile1],
        'mobile2': [this.amDetails.mobile2],
        'opbal': [this.amDetails.opbal],
        'ocrdr': [this.amDetails.ocrdr],
        'clbal': [this.amDetails.clbal],
        'cdrcr': [this.amDetails.cdrcr],
        'bstreet1': [this.amDetails.bstreet1],
        'bstreet2': [this.amDetails.bstreet2],
        'bcity': [this.amDetails.bcity],
        'bstate': [this.amDetails.bstate],
        'bzip': [this.amDetails.bzip],
        'bcountry': [this.amDetails.bcountry],
        'bphone': [this.amDetails.bphone],
        'sstreet1': [this.amDetails.sstreet1],
        'sstreet2': [this.amDetails.sstreet2],
        'scity': [this.amDetails.scity],
        'sstate': [this.amDetails.sstate],
        'szip': [this.amDetails.szip],
        'scountry': [this.amDetails.scountry],
        'sphone': [this.amDetails.sphone]
      }
    );
  }

  public saveAm() {
    this.process = 'saving';
    this.as.updatAm(this.amDetails['_id'], this.amForm.value).subscribe(mrInfo => {
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

