import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MaintenanceService } from '../../maintenance/maintenance.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var moment: any;

@Component({
  selector: 'app-add-job-work',
  templateUrl: './add-job-work.component.html',
  styleUrls: ['./add-job-work.component.scss']
})
export class AddJobWorkComponent implements OnInit {
  public jwForm: any;
  public process: string;
  public job_items: any;
  public siteOptions: any;
  public vendor_option: any;
  public trucks_option: any;
  public bsConfig: Partial<BsDatepickerConfig>;
  public jobworkname_option: any;
  public etField = false;
  minDate;
  site_name: any;
  usertype: any;
  loading = false;
  public currentDate = new Date();
  constructor(
    private fb: FormBuilder,
    private ms: MaintenanceService,
    private metaService: MetaService,
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
    this.bsConfig = Object.assign({},
      { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
    this.buildForm();

    this.jwForm.get('truck_no').valueChanges.subscribe(val => {
      this.metaService.getEnginetype(val).subscribe(res => {
        this.jwForm.controls['enginetype'].setValue(null);
        this.jwForm.patchValue({'enginetype' : res['enginetype']});
       });
    });

    this.jwForm.get('mannualenginetype').valueChanges.subscribe(val => {
      this.etField = val;
    });

    this.jwForm.controls.job_items.valueChanges.subscribe(changes => {
      this.updateValues();
    });

    this.jwForm.get('km_reading').valueChanges.subscribe(val => {
      this.updateValues();
    });

    this.getOptions();
    this.getSites();
  }
  public buildForm(): void {
    this.jwForm = this.fb.group(
      {
        'site': ['', [Validators.required]],
        'job_type': ['', [Validators.required]],
        'job_number': ['', [Validators.required]],
        'job_date': [{year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()}],
        'truck_no': ['', [Validators.required]],
        'km_reading': [0, [Validators.required]],
        'enginetype': ['', [Validators.required]],
        'mannualenginetype': [''],
        'vendor': ['', [Validators.required]],
        'job_items': this.fb.array([
        ]),
        'bill_amount': ['0'],
        'app_amount': ['0'],
        'job_remarks': [''],
      }
    );
    this.addJwitems();
  }
  private initItems() {
    return this.fb.group({
      'worktobedone': ['', [Validators.required]],
      'lastdoneon': [''],
      'remarks': [''],
      'nextduekm': [0],
    });
  }
  
  addJwitems() {
    const control = <FormArray>this.jwForm.controls['job_items'];
    control.push(this.initItems());
  }
  removeItems(i: number) {
    const control = <FormArray>this.jwForm.controls['job_items'];
    control.removeAt(i);
  }
  public removed(value: any): void {
    const product_id = value['id'];
    const job_items = this.jwForm.controls['job_items'].value;
    var index = job_items.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }
  public save() {

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
    let savedata = this.jwForm.value;
    savedata.job_date = job_date;

    console.log ('Job Work >> Save', this.jwForm.value);

    this.ms.crateJobwork(this.jwForm.value).subscribe(miInfo => {
      this.process = 'done';
      let data = {
        truckno: savedata.truck_no,
        enginetype: savedata.enginetype
      };
      this.metaService.updateTruckEnginetype(data).subscribe(res => {
        this.router.navigate(['/maintenance/job-work']);

    }, error => { this.process = 'done'; console.log(error);
    });
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

    const km_reading = this.jwForm.controls['km_reading'].value;
    
    const control = <FormArray>this.jwForm.controls['job_items'];
    
    for (var intial_val = 0; intial_val < control.length; intial_val++) {
      let values = control.controls[intial_val].value;


      const jobworkname = values['worktobedone'];

      let data = {
        enginetype: this.jwForm.controls['enginetype'].value,
        worktobedone: jobworkname
      };
      var km_tolerance = 0;
      var net_nextduekm =  0;

      if(data.enginetype && data.worktobedone){
          this.metaService.getworktobedonetolerance(data).subscribe(res => {
           km_tolerance = Number(res['kmtolerance']);

           if (km_tolerance > 0) {
            console.log('km_tolerance OKAY' , km_tolerance);
            console.log('km_reading OKAY', km_reading);
            net_nextduekm = (Number(res['kmtolerance']) + km_reading);

            console.log(`net_nextduekm OKAY ${data.worktobedone}`, net_nextduekm);

            // this.jwForm.controls.job_items.patchValue([{'nextduekm': (Number(res['kmtolerance'])+km_reading )}]);

          }

        });

        // net_nextduekm = (km_tolerance + km_reading );

        console.log('km_tolerance 2 ', km_tolerance);
        console.log('net_nextduekm 2', net_nextduekm);

        // control.controls[intial_val].patchValue({
        //   nextduekm: net_nextduekm
        // }, { emitEvent: false });

      }

      control.controls[intial_val].patchValue({
        nextduekm: net_nextduekm
      }, { emitEvent: false });


    }
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
