import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { InventoryService } from '../inventory.service';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-add-item-master',
  templateUrl: './add-item-master.component.html',
  styleUrls: ['./add-item-master.component.scss']
})
export class AddItemMasterComponent implements OnInit {
  public itemsForm: FormGroup;
  public process: string;

  itemcategorys = [];
  units = [];
  godowns = [];

  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private ms: MaintenanceService,
    private is: InventoryService,
    private ds: DashboardService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getOptions();
  }


  public buildForm(): void {
    this.itemsForm = this.fb.group(
      {
        'type': [''],
        'name': [''],
        'itemcategory': [''],
        'unit': [''],
        'gst': [''],
        'hsncode': [''],
        'srate': [''],
        'prate': [''],
        'sdescritption': [''],
        'pdescription': [''],
        'oq': [''],
        'rate': [''],
        'value': [''],
        'godown': [''],
        'itemtype': ['']
      }
    );
  }


  public saveitems() {
    this.process = 'saving';
    console.log(this.itemsForm.value);
    this.is.crateItemMaster(this.itemsForm.value).subscribe(ordersInfo => {
      this.process = 'done';
      this.router.navigate(['/inventory/items-master']);
    }, error => { this.process = 'done'; console.log(error);
   });
  }

  private getOptions() {
    this.ds.getUnitList().subscribe( (res: any) => {
      // console.log('results  >>>', res);
      this.units = res;
    });

    this.ds.getItemCategoryList().subscribe( (res: any) => {
      this.itemcategorys = res;
    });

    this.ds.getGodownList().subscribe( (res: any) => {
      this.godowns = res;
    });
}


}
