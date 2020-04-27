import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MaintenanceService } from '../maintenance.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-job-workmaster',
  templateUrl: './edit-job-workmaster.component.html',
  styleUrls: ['./edit-job-workmaster.component.scss']
})
export class EditJobWorkmasterComponent implements OnInit {
  public itemsForm: FormGroup;
  public process: string;
  public jwmDetails: any;


  constructor(
    private fb: FormBuilder,
    private ms: MaintenanceService,
    private router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.jwmDetails = this.aroute.snapshot.data['jwm_details'];

    console.log(this.jwmDetails);

    this.buildForm();
    this.getOptions();
  }
  public buildForm(): void {
    this.itemsForm = this.fb.group(
      {
        'jobworkname': [this.jwmDetails.jobworkname]
      }
    );
  }

  public saveitems() {
    this.process = 'saving';
    this.ms.updatJobworkmaster(this.jwmDetails['_id'], this.itemsForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/maintenance/job-workmaster']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  private getOptions() {
}

}

