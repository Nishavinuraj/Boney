import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';

@Component({
  selector: 'app-edit-site-destinationkms',
  templateUrl: './edit-site-destinationkms.component.html',
  styleUrls: ['./edit-site-destinationkms.component.scss']
})
export class EditSiteDestinationkmsComponent implements OnInit {
  public sdkForm: any;
  public process: string;
  public sdkDetails: any;
  public siteOptions: any;


  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private ms: MaintenanceService,
    private as: AdminprivilegesService,
    private router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.sdkDetails = this.aroute.snapshot.data['sdk_details'];
    this.buildForm();
    this.getOptions();
  }
  public buildForm(): void {
    this.sdkForm = this.fb.group(
      {
        'site': [this.sdkDetails.site],
        'destination': [this.sdkDetails.destination],
        'km': [this.sdkDetails.km]
      }
    );
  }

  public saveSdk() {
    this.process = 'saving';
    this.as.updatSdk(this.sdkDetails['_id'], this.sdkForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/admin-privileges/site-destinationkms']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  private getOptions() {
    this.metaService.getallSites().subscribe(siteInfo => {
      this.siteOptions = siteInfo;
    });
  }

}

