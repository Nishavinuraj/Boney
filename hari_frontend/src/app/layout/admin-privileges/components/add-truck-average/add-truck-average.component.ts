import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { Router } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-add-truck-average',
  templateUrl: './add-truck-average.component.html',
  styleUrls: ['./add-truck-average.component.scss']
})
export class AddTruckAverageComponent implements OnInit {
  public taForm: any;
  public process: string;
  public multidest; any;
  public siteOptions: any;
  public tyre_option: any;
  
  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private as: AdminprivilegesService,
    private ds: DashboardService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
    this.taForm.controls.multidest.valueChanges.subscribe(changes => {
      this.updateValues();
    });
    this.getOptions();
  }
  public buildForm(): void {
    this.taForm = this.fb.group(
      {
        'site': ['', [Validators.required]],
        'multidest': this.fb.array([
        ]),
      }
    );
    this.addTaItems();
  }
  private initItems() {
    return this.fb.group({
      'tyre': [0, [Validators.required]],
      'tcc': [0, [Validators.required]],
      'tavg': [0, [Validators.required]]
    });
  }
  addTaItems() {
    const control = <FormArray>this.taForm.controls['multidest'];
    control.push(this.initItems());
  }
  removeItems(i: number) {
    const control = <FormArray>this.taForm.controls['multidest'];
    control.removeAt(i);
  }
  public removed(value: any): void {
    const product_id = value['id'];
    const multidest = this.taForm.controls['multidest'].value;
    var index = multidest.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }
  public save() {

    console.log('Truck Average Save', this.taForm.value);

    this.process = 'saving';
    this.as.addTa(this.taForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/admin-privileges/truck-average']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  private getOptions() {
    this.metaService.getallSites().subscribe(siteInfo => {
      this.siteOptions = siteInfo;
    });
    this.ds.getTyreList().subscribe( (res: any) => {
      this.tyre_option = res;
    });
  }
  public updateValues() {
    // const control = <FormArray>this.taForm.controls['multidest'];
    // for (var intial_val = 0; intial_val < control.length; intial_val++) {
    //   const values = control.controls[intial_val].value;
    //   const item_mater_data = this.multidest.find(item => item['_id'] == values['vender_id']);
    //   // Tax calculation ends here
    //   control.controls[intial_val].patchValue({
    //     name: item_mater_data ? item_mater_data.name : '',
    //     location: item_mater_data ? item_mater_data.location : ''
    //   }, { emitEvent: false });
    // }
    // this.taForm.patchValue({
    //   // 'net_amount': net_price,
    //   // 'rounded_off': net_price,
    //   // 'total_amount': net_price
    // }, { emitEvent: false });
  }
}
