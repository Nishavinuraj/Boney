import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AdminprivilegesService } from '../adminprivileges.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tyre-target-master',
  templateUrl: './add-tyre-target-master.component.html',
  styleUrls: ['./add-tyre-target-master.component.scss']
})
export class AddTyreTargetMasterComponent implements OnInit {
  public ttmForm: FormGroup;
  public process: string;

  constructor(
    private fb: FormBuilder,
    private as: AdminprivilegesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getOptions();
  }


  public buildForm(): void {
    this.ttmForm = this.fb.group(
      {
        'name': [''],
        'tamount': [0]
      }
    );
  }


  public saveitems() {
    this.process = 'saving';
    console.log(this.ttmForm.value);
    this.as.addTtm(this.ttmForm.value).subscribe(ordersInfo => {
      this.process = 'done';
      this.router.navigate(['/admin-privileges/tyre-target-master']);
    }, error => { this.process = 'done'; console.log(error);
   });
  }

  private getOptions() {
}

}
