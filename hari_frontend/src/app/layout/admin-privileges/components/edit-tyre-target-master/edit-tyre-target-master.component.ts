import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AdminprivilegesService } from '../adminprivileges.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-tyre-target-master',
  templateUrl: './edit-tyre-target-master.component.html',
  styleUrls: ['./edit-tyre-target-master.component.scss']
})
export class EditTyreTargetMasterComponent implements OnInit {
  public ttmForm: FormGroup;
  public process: string;
  public ttmDetails: any;


  constructor(
    private fb: FormBuilder,
    private as: AdminprivilegesService,
    private router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ttmDetails = this.aroute.snapshot.data['ttm_details'];

    console.log(this.ttmDetails);

    this.buildForm();
    this.getOptions();
  }
  public buildForm(): void {
    this.ttmForm = this.fb.group(
      {
        'name': [this.ttmDetails.name],
        'tamount': [this.ttmDetails.tamount]
      }
    );
  }

  public saveitems() {
    this.process = 'saving';
    this.as.updatTtm(this.ttmDetails['_id'], this.ttmForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/admin-privileges/tyre-target-master']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  private getOptions() {
}

}

