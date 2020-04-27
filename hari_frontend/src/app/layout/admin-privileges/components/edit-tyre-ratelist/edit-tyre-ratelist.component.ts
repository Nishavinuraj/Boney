import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';

@Component({
  selector: 'app-edit-tyre-ratelist',
  templateUrl: './edit-tyre-ratelist.component.html',
  styleUrls: ['./edit-tyre-ratelist.component.scss']
})
export class EditTyreRatelistComponent implements OnInit {
  public trlForm: any;
  public process: string;
  public bsConfig: Partial<BsDatepickerConfig>;
  public trl_items; any;
  public company_option: any;
  public brand_option: any;
  public trlDetails: any;
  public currentDate = new Date();

  tyre_types = [
    {tyre_type: 'New Nylon'},
    {tyre_type: 'New Radial'},
    {tyre_type: 'Retread Nylon'},
    {tyre_type: 'Retread Radial'},
    {tyre_type: 'Khol'}
  ];

  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private ms: MaintenanceService,
    private as: AdminprivilegesService,
    private router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.trlDetails = this.aroute.snapshot.data['trl_details'];
    this.bsConfig = Object.assign({},
      { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
    this.buildForm();
    this.trlForm.controls.trl_items.valueChanges.subscribe(changes => {
      this.updateValues();
    });
    this.getOptions();
  }
  public buildForm(): void {

    this.trlForm = this.fb.group(
      {
        'trl_date': [new Date(this.trlDetails.trl_date)],
        'company_name': { value: this.trlDetails.company_name, disabled: true },
        'brand': { value: this.trlDetails.brand, disabled: true },
        'tyre_type': { value: this.trlDetails.tyre_type, disabled: true },
        'tyre_size': { value: this.trlDetails.tyre_size, disabled: true },
        'nsd': { value: this.trlDetails.nsd, disabled: true },
        'trl_items': this.fb.array([

        ]),
      }
    );
    // this.addMaterialreceiptItems()
    this.trlDetails.trl_items.forEach(element => {
      const control = <FormArray>this.trlForm.controls['trl_items'];
      control.push(this.initItemsData(element));
    });
  }
  private initItemsData(data) {
    return this.fb.group({
      'name': [data.name],
      'item_id': [data.item_id, [Validators.required]],
      'location': [data.location, [Validators.required]],
      'price': [data.price, [Validators.required]]
    });
  }
  private initItems() {
    return this.fb.group({
      'name': [''],
      'item_id': ['', [Validators.required]],
      'location': ['',[Validators.required]],
      'price': [0, [Validators.required]]
    });
  }
  addTrlItems() {
    const control = <FormArray>this.trlForm.controls['trl_items'];
    control.push(this.initItems());
  }
  removeItems(i: number) {
    const control = <FormArray>this.trlForm.controls['trl_items'];
    control.removeAt(i);
  }
  public removed(value: any): void {
    let product_id = value['id'];
    let trl_items = this.trlForm.controls['trl_items'].value;
    var index = trl_items.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }
  public saveTrl() {
    this.process = 'saving';
    this.as.updatTrl(this.trlDetails['_id'], this.trlForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/admin-privileges/tyre-ratelist']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  private getOptions() {
    this.as.getVendorMaster().subscribe(trackInfo => {
      this.trl_items = trackInfo['records'];
    });
    this.metaService.getCompanyList().subscribe(trackInfo => {
      this.company_option = trackInfo['result'];
    });
    this.metaService.getBrandList().subscribe(trackInfo => {
      this.brand_option = trackInfo['result'];
    });
  }
  public updateValues() {
    const control = <FormArray>this.trlForm.controls['trl_items'];
    for (var intial_val = 0; intial_val < control.length; intial_val++) {
      const values = control.controls[intial_val].value;
      const item_mater_data = this.trl_items.find(item => item['_id'] == values['item_id']);
      // Tax calculation ends here
      control.controls[intial_val].patchValue({
        name: item_mater_data ? item_mater_data.name : '',
        location: item_mater_data ? item_mater_data.location : ''
      }, { emitEvent: false });
    }
    this.trlForm.patchValue({
      // 'net_amount': net_price,
      // 'rounded_off': net_price,
      // 'total_amount': net_price
    }, { emitEvent: false });
  }

}

