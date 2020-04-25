import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';

@Component({
  selector: 'app-edit-site-profile',
  templateUrl: './edit-site-profile.component.html',
  styleUrls: ['./edit-site-profile.component.scss']
})
export class EditSiteProfileComponent implements OnInit {
  public sdkForm: any;
  public process: string;
  public siteOptions: any;
  public consignor_options: any;
  froms = [];
  public godown_option: any;
  public department_option: any;

  public sproDetails: any;

  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private ms: MaintenanceService,
    private as: AdminprivilegesService,
    private router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.sproDetails = this.aroute.snapshot.data['spro_details'];
    this.buildForm();
    this.getOptions();
  }
  public buildForm(): void {
    this.sdkForm = this.fb.group(
      {
        'site': [this.sproDetails.site],
        'consignor': [this.sproDetails.consignor],
        'destination': [this.sproDetails.destination],
        'from': [this.sproDetails.from],
        'godown': [this.sproDetails.godown],
        'department': [this.sproDetails.department],
        'gstno': [this.sproDetails.gstno],
        'siteaddress': [this.sproDetails.siteaddress],
        'phoneno': [this.sproDetails.phoneno],
        'emailid': [this.sproDetails.emailid],
        'custcareno': [this.sproDetails.custcareno]
      }
    );
  }

  public saveSpro() {
    this.process = 'saving';
    this.as.updatSpro(this.sproDetails['_id'], this.sdkForm.value).subscribe(mrInfo => {
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
      console.log('>>>>consignor_options', siteInfo['result']);
      this.consignor_options = siteInfo['result'];
    });
    this.metaService.getDfrom().subscribe(siteInfo => {
      console.log('>>>>From Destination', siteInfo['result']);
      this.froms = siteInfo['result'];
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

