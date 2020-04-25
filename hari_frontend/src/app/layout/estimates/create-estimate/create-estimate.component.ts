import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { EstimateService } from 'src/app/shared/services/estimates.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-estimate',
  templateUrl: './create-estimate.component.html',
  styleUrls: ['./create-estimate.component.scss']
})
export class CreateEstimateComponent implements OnInit {
  public createEstimateForm: FormGroup;
  public items_option: any;
  minDate;
  qtys = [];
  public vendor_master_list:any;
  constructor(private formBuilder: FormBuilder,
    private calendar: NgbCalendar,
    public meta: MetaService,
    public maintenanceService: MaintenanceService,
    private estimateService: EstimateService,
    public toastr: ToastrService,
  ) { 
    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };
  }

  ngOnInit() {
    this.createEstimateForm = this.formBuilder.group({
      product: ['',Validators.required],
      productQty: [''],
      creationDate: ['',Validators.required],
      expiryDate: ['',Validators.required],
      vendor: ['',Validators.required],
      remark: [''],
    });

    this.createEstimateForm.controls['creationDate'].setValue(this.calendar.getToday());
    this.getItems();
    this.getList();
  }

  getItems() {
    this.meta.getItemsList().subscribe(trackInfo => {
      this.items_option = trackInfo['result'];
      console.log('ItemsList >>>>>', this.items_option);
    });
}

submit(){
  console.log(this.qtys.length)
  if(this.createEstimateForm.valid && this.qtys.length){
    const estimate = {
      product: this.createEstimateForm.value.product,
      productQty: this.qtys,
      creationDate: new Date(this.createEstimateForm.value.creationDate.year, this.createEstimateForm.value.creationDate.month - 1, this.createEstimateForm.value.creationDate.day),
      expiryDate: new Date(this.createEstimateForm.value.expiryDate.year, this.createEstimateForm.value.expiryDate.month - 1, this.createEstimateForm.value.expiryDate.day,23,59,59),
      vendors: this.createEstimateForm.value.vendor,
      remark: this.createEstimateForm.value.remark,
      status: 'CREATED'
    }
    this.estimateService.addEstimate(estimate).subscribe(response=>{
      this.toastr.success('Estimate Created successfully.');
      this.reset();
    })
  }
}

reset(){
  this.createEstimateForm.reset();
  this.createEstimateForm.controls['creationDate'].setValue(this.calendar.getToday());
}

/* filterVendorNameData(): void {
  if (this.text_filter !== '') {
    this.filteredData = this.vendor_master_list.filter(obj =>
      this.filterKeys.some(propertyName =>
        obj[propertyName].toString().toLowerCase().includes(this.text_filter.toLowerCase())));
  } else {
    this.filteredData = this.vendor_master_list;
  }
} */



getList() {
  this.maintenanceService.getVendorMasterList().subscribe((res: any) => {
    console.log('>>>>res', res);
    var vList:any = [];
    res.result.forEach(vendor => {
      vList.push(vendor.name);
    });
    this.vendor_master_list = vList;
    console.log('Vendorlist >>>>>', this.vendor_master_list);
  }, err => {
    console.log('err   >>>', err);
  });
}



}
