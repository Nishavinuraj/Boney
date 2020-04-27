import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { itemUnits } from '../../../parameters';
import { InventoryService } from '../inventory.service';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
declare var moment: any;


@Component({
  selector: 'app-add-material-receipt',
  templateUrl: './add-material-receipt.component.html',
  styleUrls: ['./add-material-receipt.component.scss']
})
export class AddMaterialReceiptComponent implements OnInit {
  public mrForm: any;
  public process: string;
  public bsConfig: Partial<BsDatepickerConfig>;
  public siteOptions: any;
  minDate;
  site_name: any;
  usertype: any;
  loading = false;
  public vendor_option: any;
  public dept_option: any;
  public materialr_items; any;
  public unit_option = itemUnits;
  godowns = [];
  public currentDate = new Date();
  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private ms: MaintenanceService,
    private is: InventoryService,
    private ds: DashboardService,
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
    this.mrForm.controls.materialr_items.valueChanges.subscribe(changes => {
      this.updateValues();
    });
    this.getOptions();
    this.getSites();
  }
  public buildForm(): void {
    this.mrForm = this.fb.group(
      {
        'site': [''],
        'mr_type': ['', [Validators.required]],
        'mr_number': ['', [Validators.required]],
        'mr_date': [{year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()}],
        'vendor': ['', [Validators.required]],
        'department': ['', [Validators.required]],
        'godown': ['', [Validators.required]],
        'rec_type': ['', [Validators.required]],
        'invno': '',
        'invdate': [''],
        'pjno': '',
        'materialr_items': this.fb.array([
        ]),
        'narration': [''],
        'gross_amount': [''],
        'cgst_amount': [''],
        'sgst_amount': [''],
        'igst_amount': [''],
        'net_amount': [''],
        'rounded_off': [''],
        'round_off_type': [''],
        'total_amount': ['']
      }
    );
    this.addMrItems();
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
      'total': ['', [Validators.required]]
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
    const product_id = value['id'];
    const materialr_items = this.mrForm.controls['materialr_items'].value;
    const index = materialr_items.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }



  public save() {
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

    this.is.addMr(this.mrForm.value).subscribe(mrInfo => {
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
    // this.metaService.getSites().subscribe(siteInfo => {
    //   this.siteOptions = siteInfo;
    // });


    this.ms.getVendorMasterList().subscribe(siteInfo => {
      this.vendor_option = siteInfo['result'];
      console.log('>>>>Vendor List', siteInfo['result']);
    });
    this.metaService.getDeptList().subscribe(trackInfo => {
      this.dept_option = trackInfo['result'];
    });

    this.ds.getGodownList().subscribe( (res: any) => {
      this.godowns = res;
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
      const values = control.controls[intial_val].value;

      const item_mater_data = this.materialr_items.find(item => item['_id'] == values['item_id']);
      const qty = values['qty'] ? values['qty'] : item_mater_data ? 1 : 0;
      // const price = values['price'] ? values['price'] : item_mater_data ? parseFloat(item_mater_data['rate']) : 0;
      const price = values['price'] ? values['price'] : item_mater_data ? 0 : 0;
      const original_price = qty * price;
      const dis_difference = parseFloat(values['discount']) / 100;
      const discounted_amount = original_price * dis_difference;
      // gross amount
      const discounted_price = original_price - discounted_amount;
      // individual tax calculation
      const cgst_perc = values['cgst'];
      const cgst_amount = parseFloat(cgst_perc) / 100;
      const cgsttaxamount = discounted_price * cgst_amount;

      const sgst_perc = values['sgst'];
      const sgst_amount = parseFloat(sgst_perc) / 100;
      const sgsttaxamount = discounted_price * sgst_amount;

      const igst_perc = values['igst'];
      const igst_amount = parseFloat(igst_perc) / 100;
      const igsttaxamount = discounted_price * igst_amount;

      // Tax calculation starts here
      const total_taxes = values['cgst'] + values['sgst'] + values['igst'];
      const tax_difference = parseFloat(total_taxes) / 100;
      const tax_axmount = discounted_price * tax_difference;
      const total = discounted_price + tax_axmount;
      const unit = values['unit'] ? values['unit'] : item_mater_data ? item_mater_data.unit : '';

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
