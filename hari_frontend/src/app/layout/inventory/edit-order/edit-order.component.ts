import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { itemUnits } from '../../../parameters';
import { InventoryService } from '../inventory.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var moment: any;

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  public orderForm: any;
  public process: string;
  public bsConfig: Partial<BsDatepickerConfig>;
  public siteOptions: any;
  public vendor_option: any;
  public dept_option: any;
  public order_items; any;
  public unit_option = itemUnits;
  public orderDetails: any;
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
    private router: Router,
    private aroute: ActivatedRoute
  ) {
    this.usertype = this.metaService.getSiteFromStorage().role;
    this.site_name = this.metaService.getSiteFromStorage().site;
   }

  ngOnInit() {
    this.orderDetails = this.aroute.snapshot.data['order_details']
    this.bsConfig = Object.assign({}, { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
    this.buildForm();
    this.orderForm.controls.order_items.valueChanges.subscribe(changes => {
      this.updateValues()
    })
    this.getOptions();
    this.getSites();
  }
  public buildForm(): void {
    this.orderForm = this.fb.group(
      {
        'order_date': [{year: new Date(this.orderDetails.order_date).getFullYear(), month: new Date(this.orderDetails.order_date).getMonth() + 1, day: new Date(this.orderDetails.order_date).getDate()}],
        'delivery_date': [{year: new Date(this.orderDetails.delivery_date).getFullYear(), month: new Date(this.orderDetails.delivery_date).getMonth() + 1, day: new Date(this.orderDetails.delivery_date).getDate()}],
        'site': [this.orderDetails.site],
        'order_type': [this.orderDetails.order_type, [Validators.required]],
        'order_number': [this.orderDetails.order_number, [Validators.required]],
        'vendor': [this.orderDetails.vendor, [Validators.required]],
        'job_type': [this.orderDetails.job_type, [Validators.required]],
        'department': [this.orderDetails.department, [Validators.required]],
        'order_items': this.fb.array([

        ]),
        'narration': [this.orderDetails.narration],
        'terms_and_conditions': [this.orderDetails.terms_and_conditions],
        'net_amount': [this.orderDetails.net_amount],
        'rounded_off': [this.orderDetails.rounded_off],
        'round_off_type': [this.orderDetails.round_off_type],
        'total_amount': [this.orderDetails.total_amount]
      }
    );
    //this.addOrderItems()
    this.orderDetails.order_items.forEach(element => {
      const control = <FormArray>this.orderForm.controls['order_items'];
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
      'total': ['', [Validators.required]]
    });
  }
  addOrderItems() {
    const control = <FormArray>this.orderForm.controls['order_items'];
    control.push(this.initItems());
  }
  removeItems(i: number) {
    const control = <FormArray>this.orderForm.controls['order_items'];
    control.removeAt(i);
  }
  public removed(value: any): void {
    let product_id = value['id']
    let order_items = this.orderForm.controls['order_items'].value
    var index = order_items.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index)
  }
  public saveOrders() {
    let order_date;
    if (this.orderForm.controls['order_date'].value) {
      const dt = this.orderForm.controls['order_date'].value.year + '-' +
        this.orderForm.controls['order_date'].value.month + '-' +
        this.orderForm.controls['order_date'].value.day;
      order_date = moment(dt, 'YYYY-MM-DD').format();
    } else {
      order_date = moment().format();
    }

    let delivery_date;
    if (this.orderForm.controls['delivery_date'].value) {
      const dt = this.orderForm.controls['delivery_date'].value.year + '-' +
        this.orderForm.controls['delivery_date'].value.month + '-' +
        this.orderForm.controls['delivery_date'].value.day;
      delivery_date = moment(dt, 'YYYY-MM-DD').format();
    } else {
      delivery_date = moment().format();
    }

    this.process = 'saving';
    let data = this.orderForm.value;
    data.order_date = order_date;
    data.delivery_date = delivery_date;
    this.is.updatOrder(this.orderDetails['_id'], this.orderForm.value).subscribe(ordersInfo => {
      this.process = 'done';
      this.router.navigate(['/inventory/orders'])
    }, error => { this.process = 'done'; console.log(error) })
  }
  getSites() {
    this.loading = true;
    this.metaService.getSites().subscribe((res: any) => {
        this.loading = false;
        this.siteOptions = res;
        if (this.usertype === 'ADMIN') {
          this.orderForm.controls['site'].setValue(this.siteOptions[0].branch_name);
        } else {
          this.orderForm.controls['site'].setValue(this.site_name);
        }
      },
      err => {
        this.loading = false;
      }
    );
  }
  private getOptions() {
    // this.metaService.getSites().subscribe(siteInfo => {
    //   this.siteOptions = siteInfo
    // })
    this.ms.getVendorMasterList().subscribe(siteInfo => {
      this.vendor_option = siteInfo['result']
    })
    this.metaService.getDeptList().subscribe(trackInfo => {
      this.dept_option = trackInfo['result'];
    });
    this.ms.getItemMaster().subscribe(trackInfo => {
      this.order_items = trackInfo['records']
    });
  }
  public updateValues() {
    let net_price = 0;
    const control = <FormArray>this.orderForm.controls['order_items'];
    for (var intial_val = 0; intial_val < control.length; intial_val++) {
      let values = control.controls[intial_val].value
      let item_mater_data = this.order_items.find(item => item['_id'] == values['item_id']);
      let qty = values['qty'] ? values['qty'] : item_mater_data ? 1 : 0;
      let unit = values['unit'] ? values['unit'] : item_mater_data ? item_mater_data.unit : '';
      let price = values['price'] ? values['price'] : item_mater_data ? parseFloat(item_mater_data['rate']) : 0
      let original_price = qty * price;
      let dis_difference = parseFloat(values['discount']) / 100;
      let discounted_amount = original_price * dis_difference
      let discounted_price = original_price - discounted_amount
      // Tax calculation starts here
      let total_taxes = values['cgst'] + values['sgst'] + values['igst']
      let tax_difference = parseFloat(total_taxes) / 100;
      let tax_axmount = discounted_price * tax_difference
      let total = discounted_price + tax_axmount
      // Tax calculation ends here
      control.controls[intial_val].patchValue({
        unit: unit,
        price: price,
        name: item_mater_data ? item_mater_data.name : '',
        qty: qty,
        discounted_price: discounted_price,
        total: total.toFixed(5)
      }, { emitEvent: false })
      net_price += total;
    }
    this.orderForm.patchValue({
      'net_amount': net_price,
      'rounded_off': net_price,
      'total_amount': net_price
    }, { emitEvent: false })
  }
  // public generateOrderNumber() {
  //   const order_type = this.orderForm.controls.order_type.value;
  //   this.is.getOrderNumberDetails(order_type).subscribe(orderInfo => {
  //     this.orderForm.controls.order_number.setValue(orderInfo['count'] + 1);
  //   }, error => { console.log(error);
  //    });
  // }

  public generateOrderNumber() {
    const order_type = this.orderForm.controls.order_type.value;
    const site = this.orderForm.controls.site.value;
    if (site && order_type) {
      const matchCond = { site: site, order_type: order_type };
      console.log('mathCond >>' , matchCond );
      this.is.getOrderNumberDetails(matchCond).subscribe(mrInfo => {
        this.orderForm.controls.order_number.setValue(mrInfo['count'] + 1);
      }, error => { console.log(error);
      });
    }
  }

}
