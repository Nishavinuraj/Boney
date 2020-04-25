import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { Router } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';

@Component({
  selector: 'app-add-consignee-master',
  templateUrl: './add-consignee-master.component.html',
  styleUrls: ['./add-consignee-master.component.scss']
})
export class AddConsigneeMasterComponent implements OnInit {
  public cmForm: any;
  public process: string;
  public multidest; any;
  public siteOptions: any;
  site_name: any;
  usertype: any;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private as: AdminprivilegesService,
    private router: Router
  ) {
    this.usertype = this.metaService.getSiteFromStorage().role;
    this.site_name = this.metaService.getSiteFromStorage().site;
  }

  ngOnInit() {
    this.buildForm();
    // this.cmForm.controls.multidest.valueChanges.subscribe(changes => {
    //   this.updateValues();
    // });
    this.getOptions();
    this.getSites();
  }
  public buildForm(): void {
    this.cmForm = this.fb.group(
      {
        'site': ['', [Validators.required]],
        'name': [''],
        'mobile': [''],
        'gst': [''],
        'multidest': this.fb.array([
        ]),
      }
    );
    this.addCmItems();
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
    const product_id = value['id'];
    const multidest = this.cmForm.controls['multidest'].value;
    var index = multidest.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }
  public save() {

    console.log('Consignee Master Save', this.cmForm.value);

    this.process = 'saving';
    this.as.addCm(this.cmForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/admin-privileges/consignee-master']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }

  getSites() {
    this.loading = true;
    this.metaService.getSites().subscribe((res: any) => {
        this.loading = false;
        this.siteOptions = res;
        if (this.usertype === 'ADMIN') {
          this.cmForm.controls['site'].setValue(this.siteOptions[0].branch_name);
        } else {
          this.cmForm.controls['site'].setValue(this.site_name);
        }
      },
      err => {
        this.loading = false;
      }
    );
  }

  private getOptions() {

  }
  public updateValues() {
  }
}
