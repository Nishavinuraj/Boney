import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MetaService } from 'src/app/shared/services/meta.service';
import { Router } from '@angular/router';
import { AccountsService } from '../../accounts.service';
declare var moment: any;

@Component({
  selector: 'app-add-accounts-dataentry',
  templateUrl: './add-accounts-dataentry.component.html',
  styleUrls: ['./add-accounts-dataentry.component.scss']
})
export class AddAccountsDataentryComponent implements OnInit {
  public adeForm: any;
  public process: string;
  public siteOptions: any;
  public dept_option: any;
  public draccname_option: any;
  public craccname_option: any;
  site_name: any;
  usertype: any;
  loading = false;
  minDate;

  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private as: AccountsService,
    private router: Router
  ) {
    this.usertype = this.metaService.getSiteFromStorage().role;
    this.site_name = this.metaService.getSiteFromStorage().site;
    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };
  }

  ngOnInit() {
    this.buildForm();
    this.getOptions();
    this.getSites();
  }

  public buildForm(): void {
    this.adeForm = this.fb.group(
      {
        'site': ['', [Validators.required]],
        'ade_type': ['', [Validators.required]],
        'ade_number': ['', [Validators.required]],
        'ade_date': [{year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()}],
        'payment_type': ['', [Validators.required]],
        'against': ['', [Validators.required]],
        'department': ['', [Validators.required]],
        'draccount_name': ['', [Validators.required]],
        'craccount_name': ['', [Validators.required]],
        'amount': [0, [Validators.required]],
        'remarks': ['']
      }
    );
  }

  public save() {

    console.log('Accounts Data Save', this.adeForm.value);

    let ade_date;
    if (this.adeForm.controls['ade_date'].value) {
      const dt = this.adeForm.controls['ade_date'].value.year + '-' +
        this.adeForm.controls['ade_date'].value.month + '-' +
        this.adeForm.controls['ade_date'].value.day;
      ade_date = moment(dt, 'YYYY-MM-DD').format();
      console.log(ade_date);
    } else {
      ade_date = moment().format();
    }

    this.process = 'saving';
    let data = this.adeForm.value;
    data.ade_date = ade_date;
    this.as.addAde(this.adeForm.value).subscribe(mrInfo => {
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
          this.adeForm.controls['site'].setValue(this.siteOptions[0].branch_name);
        } else {
          this.adeForm.controls['site'].setValue(this.site_name);
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

  public generateAdeNumber() {
    const ade_type = this.adeForm.controls.ade_type.value;
    const site = this.adeForm.controls.site.value;

    if (site && ade_type) {
      const matchCond = { site: site, ade_type: ade_type };
      console.log('mathCond >>' , matchCond );
      this.as.getAdeNumberDetails(matchCond).subscribe(mrInfo => {
        this.adeForm.controls.ade_number.setValue(mrInfo['count'] + 1);
      }, error => { console.log(error);
      });
    }

    console.log(' ade_type >>>>>', ade_type);

    this.metaService.getDraccountList(ade_type).subscribe(trackInfo => {
      this.draccname_option = trackInfo['result'];
    });

    this.metaService.getCraccountList(ade_type).subscribe(trackInfo => {
      this.craccname_option = trackInfo['result'];
    });

  }

}
