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
  selector: 'app-add-scrap-sale',
  templateUrl: './add-scrap-sale.component.html',
  styleUrls: ['./add-scrap-sale.component.scss']
})
export class AddScrapSaleComponent implements OnInit {
  public ssForm: any;
  public process: string;
  public bsConfig: Partial<BsDatepickerConfig>;
  public siteOptions: any;
  public vendor_option: any;
  public dept_option: any;
  public issuedby_option: any;
  public scraps_items: any;
  public scraps_godowns: any;
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
    this.ssForm.controls.scraps_items.valueChanges.subscribe(changes => {
      this.updateValues();
    });
    this.getOptions();
    this.getSites();
  }
  public buildForm(): void {
    this.ssForm = this.fb.group(
      {
        'site': ['', [Validators.required]],
        'ss_type': ['', [Validators.required]],
        'ss_number': ['', [Validators.required]],
        'ss_date': [{year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()}],
        'issuedby': ['', [Validators.required]],
        'vendor': ['', [Validators.required]],
        'department': ['', [Validators.required]],
        'scraps_items': this.fb.array([
        ]),
        'narration': [''],
        'net_amount': [''],
        'rounded_off': [''],
        'round_off_type': [''],
        'total_amount': ['']
      }
    );
    this.addSsitems();
  }
  private initItems() {
    return this.fb.group({
      'name': [''],
      'item_id': ['', [Validators.required]],
      'unit': [''],
      'qty': [0, [Validators.required]],
      'price': [0, [Validators.required]],
      'godown': ['', [Validators.required]],
      'total': [0, [Validators.required]]
    });
  }
  addSsitems() {
    const control = <FormArray>this.ssForm.controls['scraps_items'];
    control.push(this.initItems());
  }
  removeItems(i: number) {
    const control = <FormArray>this.ssForm.controls['scraps_items'];
    control.removeAt(i);
  }
  public removed(value: any): void {
    const product_id = value['id'];
    const scraps_items = this.ssForm.controls['scraps_items'].value;
    var index = scraps_items.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }
  public save() {
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

    console.log ('Scrap Sale >> Save', this.ssForm.value);

    this.is.addSs(this.ssForm.value).subscribe(ssInfo => {
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
    this.metaService.getSites().subscribe(siteInfo => {
      this.siteOptions = siteInfo;
    });
    this.metaService.getDeptList().subscribe(trackInfo => {
      this.dept_option = trackInfo['result'];
    });
    this.ms.getVendorMasterList().subscribe(siteInfo => {
      this.vendor_option = siteInfo['result'];
    });

    this.metaService.getIssuedbyList().subscribe(trackInfo => {
      this.issuedby_option = trackInfo['result'];
    });

    this.ms.getItemMaster().subscribe(trackInfo => {
      this.scraps_items = trackInfo['records'];
    });

    // this.ms.getScrapLedgerItemsList().subscribe(trackInfo => {
    //   this.scraps_items = trackInfo['records'];
    //   console.log('Scrap ItemsList >>>>>', this.scraps_items);
    // });

    this.ds.getGodownList().subscribe( (res: any) => {
      this.scraps_godowns = res;
    });

  }
  public updateValues() {
    let net_price = 0;
    const control = <FormArray>this.ssForm.controls['scraps_items'];
    for (var intial_val = 0; intial_val < control.length; intial_val++) {
      const values = control.controls[intial_val].value;
      const item_mater_data = this.scraps_items.find(item => item['_id'] == values['item_id']);
      const qty = values['qty'] ? values['qty'] : item_mater_data ? 0 : 0;
      // const price = values['price'] ? values['price'] : item_mater_data ? parseFloat(item_mater_data['rate']) : 0;
      const price = values['price'] ? values['price'] : item_mater_data ? 0 : 0;
      const original_price = qty * price;
      const total = original_price;
      const unit = values['unit'] ? values['unit'] : item_mater_data ? item_mater_data.unit : '';

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
  // public generateSsNumber() {
  //   const ss_type = this.ssForm.controls.ss_type.value;
  //   this.is.getSsNumberDetails(ss_type).subscribe(ssInfo => {
  //     this.ssForm.controls.ss_number.setValue(ssInfo['count'] + 1);
  //   }, error => { console.log(error);
  //    });
  // }

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
