import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';

@Component({
  selector: 'app-edit-diesal-ratemaster',
  templateUrl: './edit-diesal-ratemaster.component.html',
  styleUrls: ['./edit-diesal-ratemaster.component.scss']
})

export class EditDiesalRatemasterComponent implements OnInit {
  public drmForm: any;
  public process: string;
  public drmDetails: any;
  public vendername_options: any;
  minDate;
  site_name: any;
  usertype: any;
  loading = false;
  currSiteVname;
  currentDate = new Date();

  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private ms: MaintenanceService,
    private as: AdminprivilegesService,
    private router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.drmDetails = this.aroute.snapshot.data['drm_details'];
    this.buildForm();
    this.getOptions();
  }

  public buildForm(): void {
    this.drmForm = this.fb.group(
      {
        'site': [this.drmDetails.site],
        'vendername': [this.drmDetails.vendername],
        'date': [new Date(this.drmDetails.date)],
        'rate': [this.drmDetails.rate]
      }
    );
  }

  public saveDrm() {
    this.process = 'saving';
    this.as.updatDrm(this.drmDetails['_id'], this.drmForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/admin-privileges/diesal-ratemaster']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }

  private getOptions() {
  }
}
