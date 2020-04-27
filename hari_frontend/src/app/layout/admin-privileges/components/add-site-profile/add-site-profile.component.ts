import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MetaService } from 'src/app/shared/services/meta.service';
import { Router } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';

@Component({
  selector: 'app-add-site-profile',
  templateUrl: './add-site-profile.component.html',
  styleUrls: ['./add-site-profile.component.scss']
})
export class AddSiteProfileComponent implements OnInit {
  public sdkForm: any;
  public process: string;
  public siteOptions: any;
  public consignor_options: any;
  public godown_option: any;
  public department_option: any;

  froms = [];

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
    this.sdkForm = this.fb.group(
      {
        'site': [''],
        'consignor': [''],
        'destination': [''],
        'from': [''],
        'godown': [''],
        'department': [''],
        'gstno': [''],
        'siteaddress': [''],
        'phoneno': [''],
        'emailid': [''],
        'custcareno': [''],
      }
    );
  }

  public save() {

    console.log('Site Profile Save', this.sdkForm.value);

    this.process = 'saving';
    this.as.addSpro(this.sdkForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/admin-privileges/site-profile']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  private getOptions() {
    this.metaService.getallSites().subscribe(siteInfo => {
      this.siteOptions = siteInfo;
    });
    this.metaService.getConsignorNames().subscribe(siteInfo => {
      // console.log('>>>>consignor_options', siteInfo['result']);
      this.consignor_options = siteInfo['result'];
    });
    this.metaService.getDfrom().subscribe(siteInfo => {
      // console.log('>>>>From Destination', siteInfo['result']);
      this.froms = siteInfo['result'];
    });

    this.metaService.getDeptList().subscribe(siteInfo => {
      console.log('>>>>Department List', siteInfo['result']);
      this.department_option = siteInfo['result'];
    });

    this.metaService.getGodownList().subscribe(siteInfo => {
      // console.log('>>>>Godown List', siteInfo['result']);
      this.godown_option = siteInfo['result'];
    });

  }
}
