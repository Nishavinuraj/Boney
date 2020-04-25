import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MetaService } from 'src/app/shared/services/meta.service';
import { Router } from '@angular/router';
import { SitemanagementService } from '../../sitemanagement.service';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
declare var moment: any;


@Component({
  selector: 'app-add-vehicle-master',
  templateUrl: './add-vehicle-master.component.html',
  styleUrls: ['./add-vehicle-master.component.scss']
})
export class AddVehicleMasterComponent implements OnInit {
  public vmForm: any;
  loading = false;

  // public siteOptions: any;
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
    private calendar: NgbCalendar
  ) {
   }

  ngOnInit() {
    this.buildForm();
    this.vmForm.controls['purchasedate'].setValue(this.calendar.getToday());
    this.vmForm.controls['salesdate'].setValue(this.calendar.getToday());
    this.getOptions();

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
  public buildForm(): void {
    this.vmForm = this.fb.group(
      {
        'vtype': ['', [Validators.required]],
        'truckno': ['', [Validators.required]],
        'spi': ['', [Validators.required]],
        'taname': [''],
        'drivername': [''],
        'gps': ['', [Validators.required]],
        'status': ['', [Validators.required]],
        'ownername': [''],
        'newaddress': [''],
        'newpan': [''],
        'newaadhar': [''],
        'newmobile': [''],
        'newcontactp': [''],
        'newcmobile': [''],
        'type': ['', [Validators.required]],
        'newcarring': [0, [Validators.required]],
        'newengine': [''],
        'enginetype': ['', [Validators.required]],
        'newchasis': [''],
        'purchasedate': [new Date()],
        'salesdate': [new Date()],
        'newcommision': [''],
        'newrates': [0],
        'newpaymentcharge': [0],
        'newbilltycharge': [0]
      });
  }

  getCurrentDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var d = dd+'';
    var m = mm + '';
    var td = today.toString();
    var yyyy = today.getFullYear();
    if(dd<10){d='0'+dd} if(mm<10){m='0'+mm} td = yyyy+'-'+m+'-'+d;
    return td;

  }
  private initItems() {
  }


  public save() {
    if(this.vmForm.valid){
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
  
      this.ss.addVm(this.vmForm.value).subscribe(mrInfo => {
        this.process = 'done';
        this.router.navigate(['/site-management/vehicle-master']);
      }, error => { this.process = 'done'; console.log(error);
    });
      }
  }
}
