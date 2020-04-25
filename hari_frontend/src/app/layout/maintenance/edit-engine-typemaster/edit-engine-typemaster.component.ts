import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MetaService } from 'src/app/shared/services/meta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MaintenanceService } from '../maintenance.service';

@Component({
  selector: 'app-edit-engine-typemaster',
  templateUrl: './edit-engine-typemaster.component.html',
  styleUrls: ['./edit-engine-typemaster.component.scss']
})
export class EditEngineTypemasterComponent implements OnInit {
  public etmForm: any;
  public process: string;
  public multidest; any;
  public jobworkname_option: any;
  public etmDetails: any;


  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private ms: MaintenanceService,
    private router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.etmDetails = this.aroute.snapshot.data['etm_details'];
    this.buildForm();
    this.getOptions();
  }
  public buildForm(): void {

    this.etmForm = this.fb.group(
      {
        'enginetype': [this.etmDetails.enginetype, [Validators.required]],
        'multidest': this.fb.array([

        ]),
      }
    );
    // this.addMaterialreceiptItems()
    this.etmDetails.multidest.forEach(element => {
      const control = <FormArray>this.etmForm.controls['multidest'];
      control.push(this.initItemsData(element));
    });
  }
  private initItemsData(data) {
    return this.fb.group({
      'jobworkname': [data.jobworkname],
      'kmtolerance': [data.kmtolerance, [Validators.required]]
    });
  }
  private initItems() {
    return this.fb.group({
      'jobworkname': ['', [Validators.required]],
      'kmtolerance': [0, [Validators.required]]
    });
  }
  addEtmitems() {
    const control = <FormArray>this.etmForm.controls['multidest'];
    control.push(this.initItems());
  }
  removeItems(i: number) {
    const control = <FormArray>this.etmForm.controls['multidest'];
    control.removeAt(i);
  }
  public removed(value: any): void {
    let product_id = value['id'];
    let multidest = this.etmForm.controls['multidest'].value;
    var index = multidest.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }
  public save() {
    this.process = 'saving';
    this.ms.updatEtm(this.etmDetails['_id'], this.etmForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/maintenance/engine-typemaster']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  private getOptions() {
    this.metaService.getJobWorkNameList().subscribe(trackInfo => {
      this.jobworkname_option = trackInfo['result'];
      // console.log('Job Work Description >>>>>', this.jobworkname_option);
    });
  }

}

