import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';

@Component({
  selector: 'app-edit-broker-master',
  templateUrl: './edit-broker-master.component.html',
  styleUrls: ['./edit-broker-master.component.scss']
})
export class EditBrokerMasterComponent implements OnInit {
  public sdkForm: any;
  public process: string;
  public siteOptions: any;
  public state_option: any;
  site_name: any;
  usertype: any;
  loading = false;

  public bmDetails: any;

  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private ms: MaintenanceService,
    private as: AdminprivilegesService,
    private router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.bmDetails = this.aroute.snapshot.data['bm_details'];
    this.buildForm();
    this.getOptions();
  }
  public buildForm(): void {
    this.sdkForm = this.fb.group(
      {
        'site': [this.bmDetails.site],
        'brokername': [this.bmDetails.brokername],
        'mobileno': [this.bmDetails.mobileno],
        'panno': [this.bmDetails.panno],
        'address': [this.bmDetails.address],
        'city': [this.bmDetails.city],
        'state': [this.bmDetails.state],
        'pinno': [this.bmDetails.pinno]
      }
    );
  }

  public saveBm() {
    this.process = 'saving';
    this.as.updatBm(this.bmDetails['_id'], this.sdkForm.value).subscribe(mrInfo => {
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

