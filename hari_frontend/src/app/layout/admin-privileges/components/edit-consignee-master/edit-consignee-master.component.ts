import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';

@Component({
  selector: 'app-edit-consignee-master',
  templateUrl: './edit-consignee-master.component.html',
  styleUrls: ['./edit-consignee-master.component.scss']
})
export class EditConsigneeMasterComponent implements OnInit {
  public cmForm: any;
  public process: string;
  public multidest; any;
  public siteOptions: any;
  site_name: any;
  usertype: any;
  loading = false;

  public cmDetails: any;
  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private ms: MaintenanceService,
    private as: AdminprivilegesService,
    private router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.cmDetails = this.aroute.snapshot.data['cm_details'];
    this.buildForm();
    // this.cmForm.controls.multidest.valueChanges.subscribe(changes => {
    //   this.updateValues();
    // });
    this.getOptions();
  }
  public buildForm(): void {

    this.cmForm = this.fb.group(
      {
        'site': [this.cmDetails.site, [Validators.required]],
        'name': [this.cmDetails.name],
        'mobile': [this.cmDetails.mobile],
        'gst': [this.cmDetails.gst],
        'multidest': this.fb.array([
        ]),
      }
    );
    // this.addMaterialreceiptItems()
    this.cmDetails.multidest.forEach(element => {
      const control = <FormArray>this.cmForm.controls['multidest'];
      control.push(this.initItemsData(element));
    });
  }
  private initItemsData(data) {
    return this.fb.group({
      'unloadingaddress': [data.unloadingaddress],
      'contactperson': [data.contactperson],
      'phoneno': [data.phoneno]
    });
  }
  private initItems() {
    return this.fb.group({
      'unloadingaddress': [''],
      'contactperson': [''],
      'phoneno': ['']
    });
  }
  addCmItems() {
    const control = <FormArray>this.cmForm.controls['multidest'];
    control.push(this.initItems());
  }
  removeItems(i: number) {
    const control = <FormArray>this.cmForm.controls['multidest'];
    control.removeAt(i);
  }
  public removed(value: any): void {
    let product_id = value['id'];
    let multidest = this.cmForm.controls['multidest'].value;
    var index = multidest.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }
  public saveCm() {
    this.process = 'saving';
    this.as.updatCm(this.cmDetails['_id'], this.cmForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/admin-privileges/consignee-master']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  private getOptions() {
    // this.metaService.getallSites().subscribe(siteInfo => {
    //   this.siteOptions = siteInfo;
    // });
  }
  public updateValues() {
  }

}

