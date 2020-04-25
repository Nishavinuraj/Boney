import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TyremanagementService } from '../../tyremanagement.service';
import { ToastrService } from 'ngx-toastr';
import { MetaService } from 'src/app/shared/services/meta.service';
import { NgbModal, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
declare var moment: any;

@Component({
  selector: 'app-edit-tyre-master',
  templateUrl: './edit-tyre-master.component.html',
  styleUrls: ['./edit-tyre-master.component.scss']
})
export class EditTyreMasterComponent implements OnInit {
  public tmForm: FormGroup;
  public process: string;
  public bsConfig: Partial<BsDatepickerConfig>;
  tyrepositions_option = [];
  vendor_option = [];
  truckno_option = [];
  companyname_option = [];
  brand_option = [];
  public currentDate = new Date();
  public tmDetails: any;


  constructor(
    private fb: FormBuilder,
    private ts: TyremanagementService,
    private router: Router,
    public toastr: ToastrService,
    public meta: MetaService,
    private modalService: NgbModal,
    private aroute: ActivatedRoute

  ) { }

  ngOnInit() {
    this.tmDetails = this.aroute.snapshot.data['tm_details'];

    console.log(this.tmDetails);

    this.buildForm();
    this.getOptions();
  }
  public buildForm(): void {
    this.tmForm = this.fb.group(
      {
        'tyre_no': [this.tmDetails.tyre_no, [Validators.required]],
        'purchase_type': [this.tmDetails.purchase_type, [Validators.required]],
        'bill_no': [this.tmDetails.bill_no],
        'bill_date': [this.tmDetails.bill_date ? new Date(this.tmDetails.bill_date) : ''],
        'dealer_name': [this.tmDetails.dealer_name, [Validators.required]],
        'price': [this.tmDetails.price],
        'company_name': [this.tmDetails.company_name, [Validators.required]],
        'brand': [this.tmDetails.brand, [Validators.required]],
        'tyre_type': [this.tmDetails.tyre_type, [Validators.required]],
        'nsd': [this.tmDetails.nsd],
        'rtd': [this.tmDetails.rtd],
        'date_of_fitment': [new Date(this.tmDetails.date_of_fitment)],
        'fitment_km': [this.tmDetails.fitment_km],
        'tyre_size': [this.tmDetails.tyre_size, [Validators.required]],
        'vehicle_no': [this.tmDetails.vehicle_no, [Validators.required]],
        'tyrestatus': [this.tmDetails.tyrestatus, [Validators.required]],
        'tyreposition': [this.tmDetails.tyreposition, [Validators.required]],
        'rs_date': [this.tmDetails.rs_date ? new Date(this.tmDetails.rs_date) : ''],
        'removekm': [this.tmDetails.removekm]
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
    this.ts.updatTm(this.tmDetails['_id'], this.tmForm.value).subscribe(mrInfo => {
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
      this.brand_option = siteInfo['result'];
      console.log('>>>>Brand', siteInfo['result']);
    });


  }

}

