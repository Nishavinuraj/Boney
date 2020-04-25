import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { TyremanagementService } from '../../tyremanagement.service';

@Component({
  selector: 'app-add-tyre-company-master',
  templateUrl: './add-tyre-company-master.component.html',
  styleUrls: ['./add-tyre-company-master.component.scss']
})
export class AddTyreCompanyMasterComponent implements OnInit {
  public tcmForm: any;
  public process: string;
  public tcm_items: any;

  constructor(
    private fb: FormBuilder,
    private ts: TyremanagementService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
    this.tcmForm.controls.tcm_items.valueChanges.subscribe(changes => {
      this.updateValues();
    });
  }
  public buildForm(): void {
    this.tcmForm = this.fb.group(
      {
        'coname': ['', [Validators.required]],
        'tcm_items': this.fb.array([
        ])
      }
    );
    this.addTcmitems();
  }
  private initItems() {
    return this.fb.group({
      'brand': [''],
      'tyre_size': [''],
      'tyre_type': [''],
      'nsd': [0, [Validators.required]],
    });
  }
  addTcmitems() {
    const control = <FormArray>this.tcmForm.controls['tcm_items'];
    control.push(this.initItems());
  }
  removeItems(i: number) {
    const control = <FormArray>this.tcmForm.controls['tcm_items'];
    control.removeAt(i);
  }
  public removed(value: any): void {
    const product_id = value['id'];
    const tcm_items = this.tcmForm.controls['tcm_items'].value;
    var index = tcm_items.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }
  public save() {

    this.process = 'saving';

    console.log ('Tyre Company Master >> Save', this.tcmForm.value);

    this.ts.addTcm(this.tcmForm.value).subscribe(miInfo => {
      this.process = 'done';
      this.router.navigate(['/tyre-management/tyre-company-master']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }

  public updateValues() {
  }
}
