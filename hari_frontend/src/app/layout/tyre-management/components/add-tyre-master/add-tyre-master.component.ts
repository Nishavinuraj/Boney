import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TyremanagementService } from '../../tyremanagement.service';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from 'src/app/shared/services/meta.service';
import { NgbModal, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
declare var moment: any;

@Component({
  selector: 'app-add-tyre-master',
  templateUrl: './add-tyre-master.component.html',
  styleUrls: ['./add-tyre-master.component.scss']
})

export class AddTyreMasterComponent implements OnInit {
  public tmForm: FormGroup;
  public process: string;
  public bsConfig: Partial<BsDatepickerConfig>;
  tyrepositions_option = [];
  vendor_option = [];
  truckno_option = [];
  companyname_option = [];
  brand_option = [];
  currCompanyTcm;
  public currentDate = new Date();
  constructor(
    private fb: FormBuilder,
    private ts: TyremanagementService,
    private router: Router,
    public toastr: ToastrService,
    public meta: MetaService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getOptions();
    this.tmForm.get('company_name').valueChanges.subscribe(val => {
      this.tmForm.patchValue({brand: ''});
      this.generateBrand(val);
    });

    this.tmForm.valueChanges.subscribe(value=>{
        if (value.tyre_type && value.tyre_size && value.brand && this.currCompanyTcm) {
          this.currCompanyTcm.tcm_items.forEach(tcm => {
            if(tcm.brand==value.brand && tcm.tyre_size==value.tyre_size && tcm.tyre_type==value.tyre_type){
              this.tmForm.patchValue({nsd: tcm.nsd}, {emitEvent: false})
            } 
          })
        } else{
          this.tmForm.patchValue({nsd: '0'},{emitEvent: false})
        }
    })
  }


  public buildForm(): void {
    this.tmForm = this.fb.group(
      {
        tyre_no: ['', [Validators.required]],
        purchase_type: ['', [Validators.required]],
        bill_no: [''],
        bill_date: [''],
        dealer_name: ['', [Validators.required]],
        price: [0, [Validators.required]],
        company_name: ['', [Validators.required]],
        brand: ['', [Validators.required]],
        tyre_type: ['', [Validators.required]],
        nsd: [0, [Validators.required]],
        rtd: [''],
        date_of_fitment: [new Date(), [Validators.required]],
        fitment_km: [''],
        tyre_size: [''],
        vehicle_no: ['', [Validators.required]],
        tyrestatus: ['', [Validators.required]],
        tyreposition: ['', [Validators.required]],
        rs_date: [''],
        removekm:  [0, [Validators.required]]
        }
    );
  }


  public saveitems() {

    let bill_date;
    if (this.tmForm.controls['bill_date'].value) {
      const dt = this.tmForm.controls['bill_date'].value.year + '-' +
        this.tmForm.controls['bill_date'].value.month + '-' +
        this.tmForm.controls['bill_date'].value.day;
      bill_date = moment(dt, 'YYYY-MM-DD').format();
    } else {
      bill_date = moment().format();
    }

    let date_of_fitment;
    if (this.tmForm.controls['date_of_fitment'].value) {
      const dt = this.tmForm.controls['date_of_fitment'].value.year + '-' +
        this.tmForm.controls['date_of_fitment'].value.month + '-' +
        this.tmForm.controls['date_of_fitment'].value.day;
      date_of_fitment = moment(dt, 'YYYY-MM-DD').format();
    } else {
      date_of_fitment = moment().format();
    }

    let rs_date;
    if (this.tmForm.controls['rs_date'].value) {
      const dt = this.tmForm.controls['rs_date'].value.year + '-' +
        this.tmForm.controls['rs_date'].value.month + '-' +
        this.tmForm.controls['rs_date'].value.day;
      rs_date = moment(dt, 'YYYY-MM-DD').format();
    } else {
      rs_date = moment().format();
    }


    this.process = 'saving';
    console.log(this.tmForm.value);
    this.ts.addTm(this.tmForm.value).subscribe(ordersInfo => {
      this.process = 'done';
      this.router.navigate(['/tyre-management/tyre-master']);
    }, error => { this.process = 'done'; console.log(error);
   });
  }

  private getOptions() {
    this.ts.getVendorMasterList().subscribe(siteInfo => {
      this.vendor_option = siteInfo['result'];
      console.log('>>>>Vendor List', siteInfo['result']);
    });

    this.meta.getCompanyTruckList().subscribe(siteInfo => {
      this.truckno_option = siteInfo['result'];
      console.log('>>>>Vendor List', siteInfo['result']);
    });

    this.meta.getTyrePositionList().subscribe(siteInfo => {
      this.tyrepositions_option = siteInfo['result'];
      console.log('>>>>Tyre Positions', siteInfo['result']);
    });

    this.meta.getCompanyNamesList().subscribe(siteInfo => {
      this.companyname_option = siteInfo['result'];
      console.log('>>>>Company Name', siteInfo['result']);
    });

    this.meta.getBrandsList().subscribe(siteInfo => {
      console.log('>>>>Brand', siteInfo['result']);
    });


  }

  private generateBrand(value) {
    console.log(' generate brand ');
    this.ts.getCompanyTcm(value).subscribe(res=>{
      this.currCompanyTcm = res;
      this.brand_option = [];
      this.currCompanyTcm.tcm_items.forEach(tcm => {
        if(this.brand_option.map(function(e) { return e.brand; }).indexOf(tcm.brand)==-1){
          this.brand_option.push(tcm);
        }
      });
/*       this.brand_option = this.currCompanyTcm.tcm_items;
 */    }, error=>{

    });
}

}
