import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { TyremanagementService } from '../../tyremanagement.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-observation-and-recommendation',
  templateUrl: './edit-observation-and-recommendation.component.html',
  styleUrls: ['./edit-observation-and-recommendation.component.scss']
})
export class EditObservationAndRecommendationComponent implements OnInit {
  public oarForm: FormGroup;
  public process: string;
  public itemsDetails: any;

  constructor(
    private fb: FormBuilder,
    private tm: TyremanagementService,
    private router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.itemsDetails = this.aroute.snapshot.data['oar_details'];

    console.log(this.itemsDetails);

    this.buildForm();
    this.getOptions();
  }
  public buildForm(): void {
    this.oarForm = this.fb.group(
      {
        'orname': [this.itemsDetails.orname],
        'desc': [this.itemsDetails.desc]
      }
    );
  }

  public saveitems() {
    this.process = 'saving';
    this.tm.updatOar(this.itemsDetails['_id'], this.oarForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/tyre-management/observation-and-recommendation']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  private getOptions() {
}

}

