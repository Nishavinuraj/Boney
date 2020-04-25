import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MetaService } from 'src/app/shared/services/meta.service';
import { Router } from '@angular/router';
import { MaintenanceService } from '../maintenance.service';

@Component({
  selector: 'app-add-engine-typemaster',
  templateUrl: './add-engine-typemaster.component.html',
  styleUrls: ['./add-engine-typemaster.component.scss']
})
export class AddEngineTypemasterComponent implements OnInit {
  public etmForm: any;
  public process: string;
  public multidest; any;
  public jobworkname_option: any;

  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private ms: MaintenanceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
    this.etmForm.controls.multidest.valueChanges.subscribe(changes => {
      this.updateValues();
    });
    this.getOptions();
  }
  public buildForm(): void {
    this.etmForm = this.fb.group(
      {
        'enginetype': ['', [Validators.required]],
        'multidest': this.fb.array([
        ]),
      }
    );
    this.addEtmitems();
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
    const product_id = value['id'];
    const multidest = this.etmForm.controls['multidest'].value;
    var index = multidest.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }
  public save() {

    console.log('Save', this.etmForm.value);

    this.process = 'saving';
    this.ms.crateEtm(this.etmForm.value).subscribe(mrInfo => {
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
  public updateValues() {
  }
}
