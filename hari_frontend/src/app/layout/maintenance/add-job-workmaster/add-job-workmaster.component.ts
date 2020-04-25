import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MaintenanceService } from '../maintenance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-job-workmaster',
  templateUrl: './add-job-workmaster.component.html',
  styleUrls: ['./add-job-workmaster.component.scss']
})
export class AddJobWorkmasterComponent implements OnInit {
  public itemsForm: FormGroup;
  public process: string;

  constructor(
    private fb: FormBuilder,
    private ms: MaintenanceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getOptions();
  }


  public buildForm(): void {
    this.itemsForm = this.fb.group(
      {
        'jobworkname': ['']
      }
    );
  }


  public saveitems() {
    this.process = 'saving';
    console.log(this.itemsForm.value);
    this.ms.crateJobworkmaster(this.itemsForm.value).subscribe(ordersInfo => {
      this.process = 'done';
      this.router.navigate(['/maintenance/job-workmaster']);
    }, error => { this.process = 'done'; console.log(error);
   });
  }

  private getOptions() {
}

}
