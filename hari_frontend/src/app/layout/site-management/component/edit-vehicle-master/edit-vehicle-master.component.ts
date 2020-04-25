import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SitemanagementService } from '../../sitemanagement.service';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
declare var moment: any;

@Component({
  selector: 'app-edit-vehicle-master',
  templateUrl: './edit-vehicle-master.component.html',
  styleUrls: ['./edit-vehicle-master.component.scss']
})
export class EditVehicleMasterComponent implements OnInit {
  public vmForm: any;
  loading = false;
  
  minDate;
  // public siteOptions: any;
  public vmDetails: any;
  public bsConfig: Partial<BsDatepickerConfig>;
  public process: string;
  public currentDate = new Date();
  public ta_options: any;
  public driver_options: any;
  public tyre_options: any;

  constructor(
    private fb: FormBuilder,
    private ss: SitemanagementService,
    private router: Router,
    private metaService: MetaService,
    private toastr: ToastrService,
    private calendar: NgbCalendar,
    private aroute: ActivatedRoute
  ) {
    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };

   }

  ngOnInit() {
    this.vmDetails = this.aroute.snapshot.data['vm_details'];
    this.bsConfig = Object.assign({},
      { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });

    console.log(this.vmDetails);

    this.buildForm();
    this.getOptions();
  }
  public buildForm(): void {
    this.vmForm = this.fb.group(
      {
        'vtype': [ this.vmDetails.vtype, [Validators.required]],
        'truckno': [ this.vmDetails.truckno, [Validators.required]],
        'spi': [this.vmDetails.spi, [Validators.required]],
        'taname': [this.vmDetails.taname],
        'drivername': [this.vmDetails.drivername],
        'gps': [this.vmDetails.gps, [Validators.required]],
        'status': [this.vmDetails.status, [Validators.required]],
        'ownername': [this.vmDetails.ownername],
        'newaddress': [this.vmDetails.newaddress],
        'newpan': [this.vmDetails.newpan],
        'newaadhar': [this.vmDetails.newaadhar],
        'newmobile': [this.vmDetails.newmobile],
        'newcontactp': [this.vmDetails.newcontactp],
        'newcmobile': [this.vmDetails.newcmobile],
        'type': [this.vmDetails.type, [Validators.required]],
        'newcarring': [this.vmDetails.newcarring, [Validators.required]],
        'newengine': [this.vmDetails.newengine],
        'enginetype': [this.vmDetails.enginetype, [Validators.required]],
        'newchasis': [this.vmDetails.newchasis],
        'newcommision': [this.vmDetails.newcommision],
        'newrates': [this.vmDetails.newrates],
        'newpaymentcharge': [this.vmDetails.newpaymentcharge],
        'newbilltycharge': [this.vmDetails.newbilltycharge],
        'purchasedate': [{year: new Date(this.vmDetails.purchasedate).getFullYear(), 
          month: new Date(this.vmDetails.purchasedate).getMonth() + 1, 
          day: new Date(this.vmDetails.purchasedate).getDate()}],
        'salesdate': [{year: new Date(this.vmDetails.salesdate).getFullYear(), 
          month: new Date(this.vmDetails.salesdate).getMonth() + 1, 
          day: new Date(this.vmDetails.salesdate).getDate()}]

      }
    );
  }

  public saveitems() {
    let purchasedate;
    if (this.vmForm.controls['purchasedate'].value) {
      const dt = this.vmForm.controls['purchasedate'].value.year + '-' +
        this.vmForm.controls['purchasedate'].value.month + '-' +
        this.vmForm.controls['purchasedate'].value.day;
      purchasedate = moment(dt, 'YYYY-MM-DD').format();
      console.log(purchasedate);
    } else {
      purchasedate = moment().format();
    }

    let salesdate;
    if (this.vmForm.controls['salesdate'].value) {
      const dt = this.vmForm.controls['salesdate'].value.year + '-' +
        this.vmForm.controls['salesdate'].value.month + '-' +
        this.vmForm.controls['salesdate'].value.day;
      salesdate = moment(dt, 'YYYY-MM-DD').format();
    } else {
      salesdate = moment().format();
    }

    this.process = 'saving';

    let data = this.vmForm.value;
    data.purchasedate = purchasedate;
    data.salesdate = salesdate;

    this.ss.updatVm(this.vmDetails['_id'], this.vmForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/site-management/vehicle-master']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  private getOptions() {
    this.metaService.getTaNames().subscribe(siteInfo => {
      this.ta_options = siteInfo['result'];
    });

    this.metaService.getTyreNames().subscribe(siteInfo => {
      this.tyre_options = siteInfo['result'];
    });

    this.metaService.getDriverNames().subscribe(siteInfo => {
      this.driver_options = siteInfo['result'];
    });

}

}

