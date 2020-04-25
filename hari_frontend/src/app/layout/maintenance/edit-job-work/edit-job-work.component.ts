import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MaintenanceService } from '../../maintenance/maintenance.service';
import { MetaService } from 'src/app/shared/services/meta.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
declare var moment: any;

@Component({
  selector: 'app-edit-job-work',
  templateUrl: './edit-job-work.component.html',
  styleUrls: ['./edit-job-work.component.scss']
})
export class EditJobWorkComponent implements OnInit {
  public jwForm: any;
  public process: string;
  public job_items: any;
  public siteOptions: any;
  public vendor_option: any;
  public trucks_option: any;
  public jobworkname_option: any;
  public etField = false;
  public bsConfig: Partial<BsDatepickerConfig>;
  minDate;
  site_name: any;
  usertype: any;
  loading = false;
  public currentDate = new Date();
  public jwDetails: any;
  constructor(
    private fb: FormBuilder,
    private ms: MaintenanceService,
    private metaService: MetaService,
    private aroute: ActivatedRoute,
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
    this.jwDetails = this.aroute.snapshot.data['jw_details'];
    this.bsConfig = Object.assign({},
      { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
    this.buildForm();
    // this.jwForm.controls.job_items.valueChanges.subscribe(changes => {
    //   this.updateValues();
    // });
    this.getOptions();
    // this.getSites();
  }
  public buildForm(): void {

    this.jwForm = this.fb.group(
      {
        'site': [this.jwDetails.site, [Validators.required]],
        'job_type': [this.jwDetails.job_type, [Validators.required]],
        'job_number': [this.jwDetails.job_number, [Validators.required]],
        'job_date': [{year: new Date(this.jwDetails.job_date).getFullYear(), month: new Date(this.jwDetails.job_date).getMonth() + 1, day: new Date(this.jwDetails.job_date).getDate()}],
        'truck_no': [this.jwDetails.truck_no, [Validators.required]],
        'km_reading': [this.jwDetails.km_reading],
        'enginetype': [this.jwDetails.enginetype, [Validators.required]],
        'vendor': [this.jwDetails.vendor, [Validators.required]],
        'job_items': this.fb.array([
        ]),
        'bill_amount': [this.jwDetails.bill_amount],
        'app_amount': [this.jwDetails.app_amount],
        'job_remarks': [this.jwDetails.job_remarks]
      }
    );
    // this.addMaterialreceiptItems()
    this.jwDetails.job_items.forEach(element => {
      const control = <FormArray>this.jwForm.controls['job_items'];
      control.push(this.initItemsData(element));
    });
  }
  private initItemsData(data) {
    return this.fb.group({
      'worktobedone': [data.worktobedone],
      'lastdoneon': [data.lastdoneon],
      'remarks': [data.remarks],
      'nextduekm': [data.nextduekm]
    });
  }
  private initItems() {
    return this.fb.group({
      'worktobedone': [''],
      'lastdoneon': [''],
      'remarks': [''],
      'nextduekm': [0]
    });
  }
  addJwItems() {
    const control = <FormArray>this.jwForm.controls['job_items'];
    control.push(this.initItems());
  }
  removeItems(i: number) {
    const control = <FormArray>this.jwForm.controls['job_items'];
    control.removeAt(i);
  }
  public removed(value: any): void {
    let product_id = value['id'];
    let job_items = this.jwForm.controls['job_items'].value;
    var index = job_items.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }
  public saveJw() {
    let job_date;
    if (this.jwForm.controls['job_date'].value) {
      const dt = this.jwForm.controls['job_date'].value.year + '-' +
        this.jwForm.controls['job_date'].value.month + '-' +
        this.jwForm.controls['job_date'].value.day;
      job_date = moment(dt, 'YYYY-MM-DD').format();
      console.log(job_date);
    } else {
      job_date = moment().format();
    }

    this.process = 'saving';
    let data = this.jwForm.value;
    data.job_date = job_date;

    console.log('Edit Job Work Saving', this.jwDetails);

    this.ms.updatJobwork(this.jwDetails['_id'], this.jwForm.value).subscribe(miInfo => {
      this.process = 'done';
      this.router.navigate(['/maintenance/job-work']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  getSites() {
    this.loading = true;
    this.metaService.getSites().subscribe((res: any) => {
        this.loading = false;
        this.siteOptions = res;
        if (this.usertype === 'ADMIN') {
          this.jwForm.controls['site'].setValue(this.siteOptions[0].branch_name);
        } else {
          this.jwForm.controls['site'].setValue(this.site_name);
        }
      },
      err => {
        this.loading = false;
      }
    );
  }
  private getOptions() {
    this.ms.getVendorMasterList().subscribe(siteInfo => {
      this.vendor_option = siteInfo['result'];
      // console.log('>>>>Vendor List', siteInfo['result']);
    });

    this.metaService.getCompanyTruckList().subscribe(trackInfo => {
      this.trucks_option = trackInfo['result'];
      // console.log('Trucks List >>>>>', this.trucks_option);
    });

    this.metaService.getJobWorkNameList().subscribe(trackInfo => {
      this.jobworkname_option = trackInfo['result'];
      // console.log('Job Work Description >>>>>', this.jobworkname_option);
    });

  }
  public updateValues() {
  }
  public generatejobNumber() {
    const job_type = this.jwForm.controls.job_type.value;
    const site = this.jwForm.controls.site.value;
    if (site && job_type) {
      const matchCond = { site: site, job_type: job_type };
      console.log('mathCond >>' , matchCond );
      this.ms.getJobNumberDetails(matchCond).subscribe(jwInfo => {
        this.jwForm.controls.job_number.setValue(jwInfo['count'] + 1);
      }, error => { console.log(error);
      });
    }
  }
}
