import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { TyremanagementService } from '../../tyremanagement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-observation-and-recommendation',
  templateUrl: './add-observation-and-recommendation.component.html',
  styleUrls: ['./add-observation-and-recommendation.component.scss']
})
export class AddObservationAndRecommendationComponent implements OnInit {
  public oarForm: FormGroup;
  public process: string;

  constructor(
    private fb: FormBuilder,
    private tm: TyremanagementService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getOptions();
  }


  public buildForm(): void {
    this.oarForm = this.fb.group(
      {
        'orname': [''],
        'desc': ['']
      }
    );
  }


  public saveitems() {
    this.process = 'saving';
    console.log(this.oarForm.value);
    this.tm.addOar(this.oarForm.value).subscribe(ordersInfo => {
      this.process = 'done';
      this.router.navigate(['/tyre-management/observation-and-recommendation']);
    }, error => { this.process = 'done'; console.log(error);
   });
  }

  private getOptions() {

}


}
