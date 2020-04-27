import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { itemUnits } from '../../../parameters';
import { InventoryService } from '../inventory.service';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
declare var moment: any;

@Component({
  selector: 'app-add-material-issue',
  templateUrl: './add-material-issue.component.html',
  styleUrls: ['./add-material-issue.component.scss']
})
export class AddMaterialIssueComponent implements OnInit {
  public miForm: any;
  public process: string;
  public bsConfig: Partial<BsDatepickerConfig>;
  public siteOptions: any;
  public dept_option: any;
  public issuedby_option: any;
  public materiali_items: any;
  public materiali_godowns: any;
  public unit_option = itemUnits;
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
    this.miForm.controls.materiali_items.valueChanges.subscribe(changes => {
      this.updateValues();
    });
    this.getOptions();
    this.getSites();
  }
  public buildForm(): void {
    this.miForm = this.fb.group(
      {
        'site': ['', [Validators.required]],
        'mi_type': ['', [Validators.required]],
        'mi_number': ['', [Validators.required]],
        'mi_date': [{year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()}],
        'issuedby': ['', [Validators.required]],
        'issuedfor': ['', [Validators.required]],
        'mcreading': '',
        'department': ['', [Validators.required]],
        'materiali_items': this.fb.array([
        ]),
        'narration': [''],
        'net_amount': [''],
        'rounded_off': [''],
        'round_off_type': [''],
        'total_amount': ['']
      }
    );
    this.addMiitems();
  }
  private initItems() {
    return this.fb.group({
      'name': [''],
      'item_id': ['', [Validators.required]],
      'unit': [''],
      'qty': [0, [Validators.required]],
      'price': [0, [Validators.required]],
      'refund': ['', [Validators.required]],
      'mat_type': [''],
      'ref_qty': [0],
      'total': [0, [Validators.required]],
      'godown': ['', [Validators.required]],
    });
  }
  addMiitems() {
    const control = <FormArray>this.miForm.controls['materiali_items'];
    control.push(this.initItems());
  }
  removeItems(i: number) {
    const control = <FormArray>this.miForm.controls['materiali_items'];
    control.removeAt(i);
  }
  public removed(value: any): void {
    const product_id = value['id'];
    const materiali_items = this.miForm.controls['materiali_items'].value;
    var index = materiali_items.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }
  public save() {
    let mi_date;
    if (this.miForm.controls['mi_date'].value) {
      const dt = this.miForm.controls['mi_date'].value.year + '-' +
        this.miForm.controls['mi_date'].value.month + '-' +
        this.miForm.controls['mi_date'].value.day;
      mi_date = moment(dt, 'YYYY-MM-DD').format();
    } else {
      mi_date = moment().format();
    }

    this.process = 'saving';
    let data = this.miForm.value;
    data.mi_date = mi_date;

    console.log ('ISsue >> Save', this.miForm.value);

    this.is.addMi(this.miForm.value).subscribe(miInfo => {
      this.process = 'done';
      this.router.navigate(['/inventory/material-issue']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  getSites() {
    this.loading = true;
    this.metaService.getSites().subscribe((res: any) => {
        this.loading = false;
        this.siteOptions = res;
        if (this.usertype === 'ADMIN') {
          this.miForm.controls['site'].setValue(this.siteOptions[0].branch_name);
        } else {
          this.miForm.controls['site'].setValue(this.site_name);
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

    this.ms.getItemMaster().subscribe(trackInfo => {
      this.materiali_items = trackInfo['records'];
    });
    this.ds.getGodownList().subscribe( (res: any) => {
      this.materiali_godowns = res;
    });

  }
  public updateValues() {
    let net_price = 0;
    const control = <FormArray>this.miForm.controls['materiali_items'];

    for (var intial_val = 0; intial_val < control.length; intial_val++) {
      
      const values = control.controls[intial_val].value;
      const item_mater_data = this.materiali_items.find(item => item['_id'] == values['item_id']);
      const qty = values['qty'] ? values['qty'] : item_mater_data ? 1 : 0;
      const price = values['price'] ? values['price'] : item_mater_data ? parseFloat(item_mater_data['rate']) : 0;
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
    this.miForm.patchValue({
      'net_amount': net_price,
      'rounded_off': net_price,
      'total_amount': net_price
    }, { emitEvent: false });
  }
  // public generateMiNumber() {
  //   const mi_type = this.miForm.controls.mi_type.value;
  //   this.is.getMiNumberDetails(mi_type).subscribe(miInfo => {
  //     this.miForm.controls.mi_number.setValue(miInfo['count'] + 1);
  //   }, error => { console.log(error);
  //    });
  // }

  public generateMiNumber() {
    const mi_type = this.miForm.controls.mi_type.value;
    const site = this.miForm.controls.site.value;
    if(site && mi_type) {
      const matchCond = { site: site, mi_type: mi_type };
      console.log('mathCond >>' , matchCond );
      this.is.getMiNumberDetails(matchCond).subscribe(mrInfo => {
        this.miForm.controls.mi_number.setValue(mrInfo['count'] + 1);
      }, error => { console.log(error);
      });
    }
  }


}
