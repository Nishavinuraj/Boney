import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MetaService } from 'src/app/shared/services/meta.service';
import { Router } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';

@Component({
  selector: 'app-add-broker-master',
  templateUrl: './add-broker-master.component.html',
  styleUrls: ['./add-broker-master.component.scss']
})
export class AddBrokerMasterComponent implements OnInit {
  public sdkForm: any;
  public process: string;
  public siteOptions: any;
  public state_option: any;
  site_name: any;
  usertype: any;
  loading = false;

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
  public buildForm(): void {
    this.sdkForm = this.fb.group(
      {
        'site': ['', [Validators.required]],
        'brokername': [''],
        'mobileno': [''],
        'panno': [''],
        'address': [''],
        'city': [''],
        'state': ['', [Validators.required]],
        'pinno': [''],
      }
    );
  }

  public save() {

    console.log('Site Profile Save', this.sdkForm.value);

    this.process = 'saving';
    this.as.addBm(this.sdkForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/admin-privileges/broker-master']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  getSites() {
    this.loading = true;
    this.metaService.getSites().subscribe((res: any) => {
        this.loading = false;
        this.siteOptions = res;
        if (this.usertype === 'ADMIN') {
          this.sdkForm.controls['site'].setValue(this.siteOptions[0].branch_name);
        } else {
          this.sdkForm.controls['site'].setValue(this.site_name);
        }
      },
      err => {
        this.loading = false;
      }
    );
  }

  private getOptions() {
    this.metaService.getStateList().subscribe(trackInfo => {
      this.state_option = trackInfo['result'];
      console.log('>>>>StateIndia', trackInfo['result']);

    });

  }
}
