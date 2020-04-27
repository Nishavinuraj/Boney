import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';

@Component({
  selector: 'app-edit-site-petrolpump',
  templateUrl: './edit-site-petrolpump.component.html',
  styleUrls: ['./edit-site-petrolpump.component.scss']
})
export class EditSitePetrolpumpComponent implements OnInit {
  public sppForm: any;
  public process: string;
  public multidest; any;
  public sppDetails: any;
  public siteOptions: any;


  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private ms: MaintenanceService,
    private as: AdminprivilegesService,
    private router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.sppDetails = this.aroute.snapshot.data['spp_details'];
    this.buildForm();
    this.sppForm.controls.multidest.valueChanges.subscribe(changes => {
      this.updateValues();
    });
    this.getOptions();
  }
  public buildForm(): void {

    this.sppForm = this.fb.group(
      {
        'site': [this.sppDetails.site, [Validators.required]],
        'multidest': this.fb.array([

        ]),
      }
    );
    // this.addMaterialreceiptItems()
    this.sppDetails.multidest.forEach(element => {
      const control = <FormArray>this.sppForm.controls['multidest'];
      control.push(this.initItemsData(element));
    });
  }
  private initItemsData(data) {
    return this.fb.group({
      'vendername': [data.vendername],
      'company': [data.company, [Validators.required]],
      'mobileno': [data.mobileno, [Validators.required]],
      'email': [data.email, [Validators.required]],
      'status': [data.status, [Validators.required]]
    });
  }
  private initItems() {
    return this.fb.group({
      'vendername': [''],
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
    let product_id = value['id'];
    let multidest = this.sppForm.controls['multidest'].value;
    var index = multidest.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }
  public saveSpp() {
    this.process = 'saving';
    this.as.updatSpp(this.sppDetails['_id'], this.sppForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/admin-privileges/site-petrolpump']);
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

