import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-edit-truck-average',
  templateUrl: './edit-truck-average.component.html',
  styleUrls: ['./edit-truck-average.component.scss']
})
export class EditTruckAverageComponent implements OnInit {
  public taForm: any;
  public process: string;
  public multidest; any;
  public TaDetails: any;
  public siteOptions: any;
  public tyre_option: any;


  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private ms: MaintenanceService,
    private as: AdminprivilegesService,
    private router: Router,
    private ds: DashboardService,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.TaDetails = this.aroute.snapshot.data['ta_details'];
    this.buildForm();
    this.getOptions();
  }
  public buildForm(): void {

    this.taForm = this.fb.group(
      {
        'site': [this.TaDetails.site, [Validators.required]],
        'multidest': this.fb.array([

        ]),
      }
    );
    // this.addMaterialreceiptItems()
    this.TaDetails.multidest.forEach(element => {
      const control = <FormArray>this.taForm.controls['multidest'];
      control.push(this.initItemsData(element));
    });
  }
  private initItemsData(data) {
    return this.fb.group({
      'tyre': [data.tyre],
      'tcc': [data.tcc, [Validators.required]],
      'tavg': [data.tavg, [Validators.required]]
    });
  }
  private initItems() {
    return this.fb.group({
      'tyre': [''],
      'tcc': ['', [Validators.required]],
      'tavg': ['', [Validators.required]]
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
    let product_id = value['id'];
    let multidest = this.taForm.controls['multidest'].value;
    var index = multidest.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }
  public saveTa() {
    this.process = 'saving';
    this.as.updatTa(this.TaDetails['_id'], this.taForm.value).subscribe(mrInfo => {
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

}

