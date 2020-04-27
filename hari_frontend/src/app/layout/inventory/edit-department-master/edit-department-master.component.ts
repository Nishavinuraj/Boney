import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { InventoryService } from '../inventory.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-department-master',
  templateUrl: './edit-department-master.component.html',
  styleUrls: ['./edit-department-master.component.scss']
})
export class EditDepartmentMasterComponent implements OnInit {
  public itemsForm: FormGroup;
  public process: string;
  public deptDetails: any;

  
  constructor(
    private fb: FormBuilder,
    private is: InventoryService,
    private router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.deptDetails = this.aroute.snapshot.data['dept_details'];

    console.log(this.deptDetails);

    this.buildForm();
    this.getOptions();
  }
  public buildForm(): void {
    this.itemsForm = this.fb.group(
      {
        'deptname': [this.deptDetails.deptname]
      }
    );
  }

  public saveitems() {
    this.process = 'saving';
    this.is.updatDepartmentMaster(this.deptDetails['_id'], this.itemsForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/inventory/department-master']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  private getOptions() {
}

}

