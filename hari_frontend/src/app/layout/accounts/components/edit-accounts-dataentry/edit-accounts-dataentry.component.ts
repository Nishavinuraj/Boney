import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountsService } from '../../accounts.service';

@Component({
  selector: 'app-edit-accounts-dataentry',
  templateUrl: './edit-accounts-dataentry.component.html',
  styleUrls: ['./edit-accounts-dataentry.component.scss']
})
export class EditAccountsDataentryComponent implements OnInit {
  public sdkForm: any;
  public process: string;
  public siteOptions: any;
  public dept_option: any;
  public draccname_option: any;
  public craccname_option: any;
  site_name: any;
  usertype: any;
  loading = false;
  currentDate = new Date();

  public adeDetails: any;

  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private ms: MaintenanceService,
    private as: AccountsService,
    private router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.adeDetails = this.aroute.snapshot.data['ade_details'];
    this.buildForm();
    this.getOptions();
  }
  public buildForm(): void {
    this.sdkForm = this.fb.group(
      {
        'site': [this.adeDetails.site],
        'ade_type': [this.adeDetails.ade_type],
        'ade_number': [this.adeDetails.ade_number],
        'ade_date': [new Date(this.adeDetails.ade_date)],
        'payment_type': [this.adeDetails.payment_type],
        'against': [this.adeDetails.against],
        'department': [this.adeDetails.department],
        'draccount_name': [this.adeDetails.draccount_name],
        'craccount_name': [this.adeDetails.craccount_name],
        'amount': [this.adeDetails.amount],
        'remarks': [this.adeDetails.remarks]
      }
    );
  }

  public saveBm() {
    this.process = 'saving';
    this.as.updatAde(this.adeDetails['_id'], this.sdkForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/accounts/accounts-dataentry']);
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
    this.metaService.getDeptList().subscribe(trackInfo => {
      this.dept_option = trackInfo['result'];
    });

  }

}

