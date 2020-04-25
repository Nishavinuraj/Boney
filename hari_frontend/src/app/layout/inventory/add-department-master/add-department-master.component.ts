import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { InventoryService } from '../inventory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department-master',
  templateUrl: './add-department-master.component.html',
  styleUrls: ['./add-department-master.component.scss']
})

export class AddDepartmentMasterComponent implements OnInit {
  public itemsForm: FormGroup;
  public process: string;

  constructor(
    private fb: FormBuilder,
    private is: InventoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getOptions();
  }


  public buildForm(): void {
    this.itemsForm = this.fb.group(
      {
        'deptname': ['']
      }
    );
  }


  public saveitems() {
    this.process = 'saving';
    console.log(this.itemsForm.value);
    this.is.crateDepartmentMaster(this.itemsForm.value).subscribe(ordersInfo => {
      this.process = 'done';
      this.router.navigate(['/inventory/department-master']);
    }, error => { this.process = 'done'; console.log(error);
   });
  }

  private getOptions() {
}

}
