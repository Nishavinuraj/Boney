import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { itemUnits } from '../../../parameters';
import { InventoryService } from '../inventory.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
declare var moment: any;

@Component({
  selector: 'app-edit-material-receipt',
  templateUrl: './edit-material-receipt.component.html',
  styleUrls: ['./edit-material-receipt.component.scss']
})
export class EditMaterialReceiptComponent implements OnInit {

  public mrForm: any;
  public process: string;
  public bsConfig: Partial<BsDatepickerConfig>;
  public siteOptions: any;
  public vendor_option: any;
  public dept_option: any;
  public materialr_items; any;
  public mrDetails: any;
  public unit_option = itemUnits;
  godowns = [];
  public currentDate = new Date();
  minDate;
  site_name: any;
  usertype: any;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private ms: MaintenanceService,
    private is: InventoryService,
    private ds: DashboardService,
    private router: Router,
    private aroute: ActivatedRoute
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

    this.mrDetails = this.aroute.snapshot.data['mr_details'];
    this.bsConfig = Object.assign({},
      { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
    this.buildForm();
    this.mrForm.controls.materialr_items.valueChanges.subscribe(changes => {
      this.updateValues();
    });
    this.getOptions();
    this.getSites();
  }
  public buildForm(): void {

    this.mrForm = this.fb.group(
      {
        'mr_date': [{year: new Date(this.mrDetails.mr_date).getFullYear(), month: new Date(this.mrDetails.mr_date).getMonth() + 1, day: new Date(this.mrDetails.mr_date).getDate()}],
        'site': [this.mrDetails.site],
        'mr_type': [ this.mrDetails.mr_type, [Validators.required]],
        'mr_number': [ this.mrDetails.mr_number, [Validators.required]],
        'vendor': [ this.mrDetails.vendor, [Validators.required]],
        'department': [this.mrDetails.department, [Validators.required]],
        'rec_type': [this.mrDetails.rec_type, [Validators.required]],
        'godown': [this.mrDetails.godown, [Validators.required]],
        'invno': [this.mrDetails.invno],
        'invdate': [this.mrDetails.invdate ? {year: new Date(this.mrDetails.invdate).getFullYear(), month: new Date(this.mrDetails.invdate).getMonth() + 1, day: new Date(this.mrDetails.invdate).getDate()} : ''],
        'pjno': [this.mrDetails.pjno],
        'materialr_items': this.fb.array([

        ]),
        'narration': [this.mrDetails.narration],
        'gross_amount': [this.mrDetails.gross_amount],
        'cgst_amount': [this.mrDetails.cgst_amount],
        'sgst_amount': [this.mrDetails.sgst_amount],
        'igst_amount': [this.mrDetails.igst_amount],
        'net_amount': [this.mrDetails.net_amount],
        'rounded_off': [this.mrDetails.rounded_off],
        'round_off_type': [this.mrDetails.round_off_type],
        'total_amount': [this.mrDetails.total_amount]
      }
    );
    // this.addMaterialreceiptItems()
    this.mrDetails.materialr_items.forEach(element => {
      const control = <FormArray>this.mrForm.controls['materialr_items'];
      control.push(this.initItemsData(element));
    });
  }
  private initItemsData(data) {
    return this.fb.group({
      'name': [data.name],
      'item_id': [data.item_id, [Validators.required]],
      'unit': [data.unit],
      'qty': [data.qty, [Validators.required]],
      'price': [data.price, [Validators.required]],
      'discount': [data.discount ? data.discount : 0, [Validators.required]],
      'discounted_price': [0],
      'cgst': [data.cgst, [Validators.required]],
      'sgst': [data.sgst, [Validators.required]],
      'igst': [data.igst, [Validators.required]],
      'total': [data.total, [Validators.required]]
    });
  }
  private initItems() {
    return this.fb.group({
      'name': [''],
      'item_id': ['', [Validators.required]],
      'unit': [''],
      'qty': [0, [Validators.required]],
      'price': [0, [Validators.required]],
      'discount': [0, [Validators.required]],
      'discounted_price': [0],
      'cgst': [0, [Validators.required]],
      'sgst': [0, [Validators.required]],
      'igst': [0, [Validators.required]],
      'total': [0, [Validators.required]]
    });
  }
  addMrItems() {
    const control = <FormArray>this.mrForm.controls['materialr_items'];
    control.push(this.initItems());
  }
  removeItems(i: number) {
    const control = <FormArray>this.mrForm.controls['materialr_items'];
    control.removeAt(i);
  }
  public removed(value: any): void {
    let product_id = value['id'];
    let materialr_items = this.mrForm.controls['materialr_items'].value;
    var index = materialr_items.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }
  public saveMr() {
    let mr_date;
    if (this.mrForm.controls['mr_date'].value) {
      const dt = this.mrForm.controls['mr_date'].value.year + '-' +
        this.mrForm.controls['mr_date'].value.month + '-' +
        this.mrForm.controls['mr_date'].value.day;
      mr_date = moment(dt, 'YYYY-MM-DD').format();
      console.log(mr_date);
    } else {
      mr_date = moment().format();
    }

    let invdate;
    if (this.mrForm.controls['invdate'].value) {
      const dt = this.mrForm.controls['invdate'].value.year + '-' +
        this.mrForm.controls['invdate'].value.month + '-' +
        this.mrForm.controls['invdate'].value.day;
      invdate = moment(dt, 'YYYY-MM-DD').format();
    } else {
      invdate = moment().format();
    }


    this.process = 'saving';
    let data = this.mrForm.value;
    data.mr_date = mr_date;
    data.invdate = invdate;
    this.is.updatMr(this.mrDetails['_id'], this.mrForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/inventory/material-receipt']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }

  getSites() {
    this.loading = true;
    this.metaService.getSites().subscribe((res: any) => {
        this.loading = false;
        this.siteOptions = res;
        if (this.usertype === 'ADMIN') {
          this.mrForm.controls['site'].setValue(this.siteOptions[0].branch_name);
        } else {
          this.mrForm.controls['site'].setValue(this.site_name);
        }
      },
      err => {
        this.loading = false;
      }
    );
  }

  private getOptions() {
    this.metaService.getSites().subscribe(siteInfo => {
      this.siteOptions = siteInfo;
    });
    this.ms.getVendorMasterList().subscribe(siteInfo => {
      this.vendor_option = siteInfo['result'];
    });
    this.ds.getGodownList().subscribe( (res: any) => {
      this.godowns = res;
    });
    this.metaService.getDeptList().subscribe(trackInfo => {
      this.dept_option = trackInfo['result'];
    });
    this.ms.getItemMaster().subscribe(trackInfo => {
      this.materialr_items = trackInfo['records'];
    });
  }
  public updateValues() {
    let gross_price = 0;
    let cgst_price = 0;
    let sgst_price = 0;
    let igst_price = 0;
    let net_price = 0;
    const control = <FormArray>this.mrForm.controls['materialr_items'];
    for (var intial_val = 0; intial_val < control.length; intial_val++) {
      let values = control.controls[intial_val].value;
      let item_mater_data = this.materialr_items.find(item => item['_id'] == values['item_id']);
      // let qty = values['qty'] ? values['qty'] : item_mater_data ? 1 : 0;
      let qty = values['qty'] ? values['qty'] : item_mater_data ? 0 : 0;
      let unit = values['unit'] ? values['unit'] : item_mater_data ? item_mater_data.unit : '';
      // let price = values['price'] ? values['price'] : item_mater_data ? parseFloat(item_mater_data['rate']) : 0;
      let price = values['price'] ? values['price'] : item_mater_data ? 0 : 0;
      let original_price = qty * price;
      let dis_difference = parseFloat(values['discount']) / 100;
      let discounted_amount = original_price * dis_difference;

      // gross amount
      const discounted_price = original_price - discounted_amount;

      // Tax calculation starts here

      // // individual tax calculation
      const cgst_perc = values['cgst'];
      const cgst_axmount = parseFloat(cgst_perc) / 100;
      const cgsttaxamount = discounted_price * cgst_axmount;

      const sgst_perc = values['sgst'];
      const sgst_axmount = parseFloat(sgst_perc) / 100;
      const sgsttaxamount = discounted_price * sgst_axmount;

      const igst_perc = values['igst'];
      const igst_axmount = parseFloat(igst_perc) / 100;
      const igsttaxamount = discounted_price * igst_axmount;

      // const total = discounted_price + tax_axmount;
      const total = discounted_price +  cgsttaxamount + sgsttaxamount + igsttaxamount;
      // Tax calculation ends here
      control.controls[intial_val].patchValue({
        unit: unit,
        price: price,
        name: item_mater_data ? item_mater_data.name : '',
        qty: qty,
        discounted_price: discounted_price,
        total: total.toFixed(5)
      }, { emitEvent: false });
      gross_price += discounted_price;
      cgst_price += cgsttaxamount;
      sgst_price += sgsttaxamount;
      igst_price += igsttaxamount;
      net_price += total;
    }
    this.mrForm.patchValue({
      'gross_amount': gross_price,
      'cgst_amount': cgst_price,
      'sgst_amount': sgst_price,
      'igst_amount': igst_price,
      'net_amount': net_price,
      'rounded_off': net_price,
      'total_amount': net_price
    }, { emitEvent: false });
  }
  public generateMrNumber() {
    const mr_type = this.mrForm.controls.mr_type.value;
    const site = this.mrForm.controls.site.value;
    if (site && mr_type) {
      const matchCond = { site: site, mr_type: mr_type };
      console.log('mathCond >>' , matchCond );
      this.is.getMrNumberDetails(matchCond).subscribe(mrInfo => {
        this.mrForm.controls.mr_number.setValue(mrInfo['count'] + 1);
      }, error => { console.log(error);
      });
    }
  }

}

