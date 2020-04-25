import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { InventoryService } from '../inventory.service';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-item-master',
  templateUrl: './edit-item-master.component.html',
  styleUrls: ['./edit-item-master.component.scss']
})
export class EditItemMasterComponent implements OnInit {
  public itemsForm: FormGroup;
  public process: string;
  public itemsDetails: any;
  itemcategorys = [];
  units = [];
  godowns = [];

  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private ms: MaintenanceService,
    private is: InventoryService,
    private ds: DashboardService,
    private router: Router,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.itemsDetails = this.aroute.snapshot.data['items_details'];

    console.log(this.itemsDetails);

    this.buildForm();
    this.getOptions();
  }
  public buildForm(): void {
    this.itemsForm = this.fb.group(
      {
        'type': [this.itemsDetails.type],
        'name': [this.itemsDetails.name],
        'pdescription': [this.itemsDetails.pdescription],
        'itemcategory': [this.itemsDetails.itemcategory, [Validators.required]],
        'itemtype': [this.itemsDetails.itemtype, [Validators.required]],
        'unit': [this.itemsDetails.unit, [Validators.required]],
        'godown': [this.itemsDetails.godown, [Validators.required]],
        'oq': [this.itemsDetails.oq],
        'rate': [this.itemsDetails.rate],
        'value': [this.itemsDetails.value],
        'hsncode': [this.itemsDetails.hsncode],
        'gst': [this.itemsDetails.gst]
      }
    );
  }

  public saveitems() {
    this.process = 'saving';
    this.is.updatItemMaster(this.itemsDetails['_id'], this.itemsForm.value).subscribe(mrInfo => {
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

