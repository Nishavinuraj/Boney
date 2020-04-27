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
  selector: 'app-edit-scrap-sale',
  templateUrl: './edit-scrap-sale.component.html',
  styleUrls: ['./edit-scrap-sale.component.scss']
})
export class EditScrapSaleComponent implements OnInit {
  public ssForm: any;
  public process: string;
  public bsConfig: Partial<BsDatepickerConfig>;
  public siteOptions: any;
  public dept_option: any;
  public vendor_option: any;
  public issuedby_option: any;
  public scraps_items: any;
  public scraps_godowns: any;
  public ssDetails: any;
  public unit_option = itemUnits;
  public currentDate = new Date();
  site_name: any;
  usertype: any;
  loading = false;
  minDate;

  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private ms: MaintenanceService,
    private is: InventoryService,
    private ds: DashboardService,
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
    this.ssDetails = this.aroute.snapshot.data['ss_details'];
    this.bsConfig = Object.assign({},
      { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
    this.buildForm();
    this.ssForm.controls.scraps_items.valueChanges.subscribe(changes => {
      this.updateValues();
    });
    this.getOptions();
    this.getSites();
  }
  public buildForm(): void {

    this.ssForm = this.fb.group(
      {
        'site': [this.ssDetails.site],
        'ss_type': [this.ssDetails.ss_type],
        'ss_number': [this.ssDetails.ss_number, [Validators.required]],
        'ss_date': [{year: new Date(this.ssDetails.ss_date).getFullYear(), month: new Date(this.ssDetails.ss_date).getMonth() + 1, day: new Date(this.ssDetails.ss_date).getDate()}],
        'issuedby': [this.ssDetails.issuedby, [Validators.required]],
        'department': [this.ssDetails.department, [Validators.required]],
        'vendor': [this.ssDetails.vendor, [Validators.required]],
        'scraps_items': this.fb.array([

        ]),
        'narration': [this.ssDetails.narration],
        'net_amount': [this.ssDetails.net_amount],
        'rounded_off': [this.ssDetails.rounded_off],
        'round_off_type': [this.ssDetails.round_off_type],
        'total_amount': [this.ssDetails.total_amount]
      }
    );
    // this.addMaterialreceiptItems()
    this.ssDetails.scraps_items.forEach(element => {
      const control = <FormArray>this.ssForm.controls['scraps_items'];
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
      'total': [data.total, [Validators.required]],
      'godown': [data.godown, [Validators.required]]
    });
  }
  private initItems() {
    return this.fb.group({
      'name': [''],
      'item_id': ['', [Validators.required]],
      'unit': [''],
      'qty': [0, [Validators.required]],
      'price': [0, [Validators.required]],
      'total': ['', [Validators.required]],
      'godown': ['', [Validators.required]]

    });
  }
  addSsItems() {
    const control = <FormArray>this.ssForm.controls['scraps_items'];
    control.push(this.initItems());
  }
  removeItems(i: number) {
    const control = <FormArray>this.ssForm.controls['scraps_items'];
    control.removeAt(i);
  }
  public removed(value: any): void {
    let product_id = value['id'];
    let scraps_items = this.ssForm.controls['scraps_items'].value;
    var index = scraps_items.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }
  public saveSs() {
    let ss_date;
    if (this.ssForm.controls['ss_date'].value) {
      const dt = this.ssForm.controls['ss_date'].value.year + '-' +
        this.ssForm.controls['ss_date'].value.month + '-' +
        this.ssForm.controls['ss_date'].value.day;
      ss_date = moment(dt, 'YYYY-MM-DD').format();
    } else {
      ss_date = moment().format();
    }

    this.process = 'saving';
    let data = this.ssForm.value;
    data.ss_date = ss_date;

    console.log('Edit Issue Saving',this.ssDetails);

    this.is.updatSs(this.ssDetails['_id'], this.ssForm.value).subscribe(miInfo => {
      this.process = 'done';
      this.router.navigate(['/inventory/scrap-sale']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  getSites() {
    this.loading = true;
    this.metaService.getSites().subscribe((res: any) => {
        this.loading = false;
        this.siteOptions = res;
        if (this.usertype === 'ADMIN') {
          this.ssForm.controls['site'].setValue(this.siteOptions[0].branch_name);
        } else {
          this.ssForm.controls['site'].setValue(this.site_name);
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
    this.metaService.getDeptList().subscribe(trackInfo => {
      this.dept_option = trackInfo['result'];
    });

    this.metaService.getIssuedbyList().subscribe(trackInfo => {
      this.issuedby_option = trackInfo['result'];
    });
    this.ms.getVendorMasterList().subscribe(siteInfo => {
      this.vendor_option = siteInfo['result'];
    });

    this.ms.getItemMaster().subscribe(trackInfo => {
      this.scraps_items = trackInfo['records'];
    });
    this.ds.getGodownList().subscribe( (res: any) => {
      this.scraps_godowns = res;
    });
  }
  public updateValues() {
    let net_price = 0;
    const control = <FormArray>this.ssForm.controls['scraps_items'];
    for (var intial_val = 0; intial_val < control.length; intial_val++) {
      let values = control.controls[intial_val].value;
      let item_mater_data = this.scraps_items.find(item => item['_id'] == values['item_id']);
      // let qty = values['qty'] ? values['qty'] : item_mater_data ? 1 : 0;
      let qty = values['qty'] ? values['qty'] : item_mater_data ? 0 : 0;
      let unit = values['unit'] ? values['unit'] : item_mater_data ? item_mater_data.unit : '';
      // let price = values['price'] ? values['price'] : item_mater_data ? parseFloat(item_mater_data['rate']) : 0;
      let price = values['price'] ? values['price'] : item_mater_data ? 0 : 0;
      let original_price = qty * price;
      let total = original_price
      // Tax calculation ends here
      control.controls[intial_val].patchValue({
        unit: unit,
        price: price,
        name: item_mater_data ? item_mater_data.name : '',
        qty: qty,
        total: total.toFixed(5)
      }, { emitEvent: false });
      net_price += total;
    }
    this.ssForm.patchValue({
      'net_amount': net_price,
      'rounded_off': net_price,
      'total_amount': net_price
    }, { emitEvent: false });
  }

  public generateSsNumber() {
    const ss_type = this.ssForm.controls.ss_type.value;
    const site = this.ssForm.controls.site.value;
    if (site && ss_type) {
      const matchCond = { site: site, ss_type: ss_type };
      console.log('mathCond >>' , matchCond );
      this.is.getSsNumberDetails(matchCond).subscribe(ssInfo => {
        this.ssForm.controls.ss_number.setValue(ssInfo['count'] + 1);
      }, error => { console.log(error);
      });
    }
  }

}

