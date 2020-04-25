
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TyremanagementService } from '../../tyremanagement.service';

@Component({
  selector: 'app-edit-tyre-company-master',
  templateUrl: './edit-tyre-company-master.component.html',
  styleUrls: ['./edit-tyre-company-master.component.scss']
})
export class EditTyreCompanyMasterComponent implements OnInit {
  public tcmForm: any;
  public process: string;
  public tcm_items: any;
  public tcmDetails: any;
  constructor(
    private fb: FormBuilder,
    private ts: TyremanagementService,
    private aroute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.tcmDetails = this.aroute.snapshot.data['tcm_details'];
    this.buildForm();
    this.tcmForm.controls.tcm_items.valueChanges.subscribe(changes => {
      this.updateValues();
    });
    this.getOptions();
  }
  public buildForm(): void {

    this.tcmForm = this.fb.group(
      {
        'coname': [this.tcmDetails.coname, [Validators.required]],
        'tcm_items': this.fb.array([
        ])
      }
    );
    // this.addMaterialreceiptItems()
    this.tcmDetails.tcm_items.forEach(element => {
      const control = <FormArray>this.tcmForm.controls['tcm_items'];
      control.push(this.initItemsData(element));
    });
  }
  private initItemsData(data) {
    return this.fb.group({
      'brand': [data.brand, [Validators.required]],
      'tyre_size': [data.tyre_size, [Validators.required]],
      'tyre_type': [data.tyre_type, [Validators.required]],
      'nsd': [data.nsd, [Validators.required]]
    });
  }
  private initItems() {
    return this.fb.group({
      'brand': ['', [Validators.required]],
      'tyre_size': ['', [Validators.required]],
      'tyre_type': ['', [Validators.required]],
      'nsd': [0, [Validators.required]]
    });
  }
  addTcmItems() {
    const control = <FormArray>this.tcmForm.controls['tcm_items'];
    control.push(this.initItems());
  }
  removeItems(i: number) {
    const control = <FormArray>this.tcmForm.controls['tcm_items'];
    control.removeAt(i);
  }
  public removed(value: any): void {
    let product_id = value['id'];
    let tcm_items = this.tcmForm.controls['tcm_items'].value;
    var index = tcm_items.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }
  public saveTcm() {
    this.process = 'saving';
    console.log('Edit Issue Saving', this.tcmDetails);

    this.ts.updatTcm(this.tcmDetails['_id'], this.tcmForm.value).subscribe(miInfo => {
      this.process = 'done';
      this.router.navigate(['/tyre-management/tyre-company-master']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  private getOptions() {
  }
  public updateValues() {
  }

}











