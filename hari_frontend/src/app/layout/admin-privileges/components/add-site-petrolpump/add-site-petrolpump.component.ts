import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { Router } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';

@Component({
  selector: 'app-add-site-petrolpump',
  templateUrl: './add-site-petrolpump.component.html',
  styleUrls: ['./add-site-petrolpump.component.scss']
})
export class AddSitePetrolpumpComponent implements OnInit {
  public sppForm: any;
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
    // this.sppForm.controls.multidest.valueChanges.subscribe(changes => {
    //   this.updateValues();
    // });
    this.getOptions();
    this.getSites();
  }
  public buildForm(): void {
    this.sppForm = this.fb.group(
      {
        'site': ['', [Validators.required]],
        'multidest': this.fb.array([
        ]),
      }
    );
    this.addSppItems();
  }
  private initItems() {
    return this.fb.group({
      'vendername': ['', [Validators.required]],
      'company': ['', [Validators.required]],
      'mobileno': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'status': ['', [Validators.required]]
    });
  }
  addSppItems() {
    const control = <FormArray>this.sppForm.controls['multidest'];
    control.push(this.initItems());
  }
  removeItems(i: number) {
    const control = <FormArray>this.sppForm.controls['multidest'];
    control.removeAt(i);
  }
  public removed(value: any): void {
    const product_id = value['id'];
    const multidest = this.sppForm.controls['multidest'].value;
    var index = multidest.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }
  public save() {

    console.log('Petrol pump Save', this.sppForm.value);

    this.process = 'saving';
    this.as.addSpp(this.sppForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/admin-privileges/site-petrolpump']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }

  getSites() {
    this.loading = true;
    this.metaService.getSites().subscribe((res: any) => {
        this.loading = false;
        this.siteOptions = res;
        if (this.usertype === 'ADMIN') {
          this.sppForm.controls['site'].setValue(this.siteOptions[0].branch_name);
        } else {
          this.sppForm.controls['site'].setValue(this.site_name);
        }
      },
      err => {
        this.loading = false;
      }
    );
  }

  private getOptions() {
    // this.metaService.getallSites().subscribe(siteInfo => {
    //   this.siteOptions = siteInfo;
    // });

  }
  public updateValues() {
  }
}
