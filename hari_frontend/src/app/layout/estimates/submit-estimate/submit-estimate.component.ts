import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { MetaService } from 'src/app/shared/services/meta.service';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { EstimateService } from 'src/app/shared/services/estimates.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { itemUnits } from 'src/app/parameters';


@Component({
  selector: 'submit-create-estimate',
  templateUrl: './submit-estimate.component.html',
  styleUrls: ['./submit-estimate.component.scss']
})
export class SubmitEstimateComponent implements OnInit {
  public submitEstimateForm: FormGroup;
  public items_option: any;
  public vendor_master_list:any;
  public estimate:any;
  public estimateInstances = [];
  public vendor;
  public unit_option = itemUnits;
  stockOptions=['Available','Not-Available']
  constructor(private formBuilder: FormBuilder,
    private calendar: NgbCalendar,
    public meta: MetaService,
    public maintenanceService: MaintenanceService,
    private estimateService: EstimateService,
    public toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) { 
    
  }

  evaluate(i){
    var ei = this.estimateInstances[i];
    var price = ei.unitRate;
    var qty = ei.productQty;
      if(price){
        var discount = ei.discount
        var cgst = ei.cgst
        var sgst = ei.sgst
        var igst = ei.igst
        var tax = cgst + sgst + igst;
        var total = price - (price * (discount/100)) + ((price * (tax/100)))
        this.estimateInstances[i].total = total*qty;
      } else{
        this.estimateInstances[i].total = 0;
      }
  }

  ngOnInit() {
    this.submitEstimateForm = this.formBuilder.group({
      product: ['',Validators.required],
      productQty: ['',Validators.required],
      estimateId: ['',Validators.required],
      vendor: ['',Validators.required],
      remark: [''],
      otherDetails: [''],
    });

    

    this.activatedRoute.queryParams.subscribe(params => {
      let estimateId = params['estimateId'];
      this.vendor = params['vendor']
      this.estimateService.getSubmissionOfVendor(estimateId,this.vendor).subscribe(res=>{
        if(res['result'].length==0){
          console.log(estimateId);
          this.estimateService.getEstimateById(estimateId).subscribe(estimate=>{
            this.estimate = estimate['result'];
            this.getList();
            console.log(estimate)
          })
        }
      })
      
    });

  }

  getItems() {
    this.meta.getItemsList().subscribe(trackInfo => {
      this.items_option = trackInfo['result'];
      console.log('ItemsList >>>>>', this.items_option);
    });
}

submit(){
  if(this.submitEstimateForm.valid && this.isEstimationValid()){
    const estimate = {
      product: this.submitEstimateForm.value.product,
      productQty: this.submitEstimateForm.value.productQty,
      estimateId:this.submitEstimateForm.value.estimateId,
      vendor:this.submitEstimateForm.value.vendor,
      remark:this.submitEstimateForm.value.remark,
      otherDetails:this.submitEstimateForm.value.otherDetails,
      estimateDate:this.estimate.creationDate,
      total:this.total(),
      totalPrice:this.total(),
      receivedDate:new Date()
    }
    let req = {
      estimate : estimate,
      instances : this.estimateInstances
    }
    this.estimateService.submitEstimate(req).subscribe(response=>{
      this.toastr.success('Response Saved successfully.');
      close();
    })
  }
}

reset(){
  this.submitEstimateForm.reset();
  this.submitEstimateForm.controls['creationDate'].setValue(this.calendar.getToday());
}

getList() {
  this.vendor_master_list = this.estimate.vendors;
  let estimateVal  = {
      product: this.estimate.product,
      productQty: this.estimate.productQty,
      estimateId: this.estimate._id,
      vendor:this.vendor
  }
  this.submitEstimateForm.patchValue(estimateVal);
  for(var i =0 ; i < this.estimate.product.length;i++){
    let ei = {};
    ei['estimateId']=this.estimate._id
    ei['product']=this.estimate.product[i];
    ei['productQty']=this.estimate.productQty[i];
    ei['discount']=0;
    ei['total']=0;
    ei['cgst']=0;
    ei['sgst']=0;
    ei['igst']=0;
    this.estimateInstances.push(ei);
  }
}

total(){
  var total = 0;
  for(var i =0 ; i < this.estimateInstances.length; i++) {
    total = total + this.estimateInstances[i].total;
  }
  return total;
}

isEstimationValid(){
  var out = true;
  var statuses = [];
  for(var i =0 ; i < this.estimateInstances.length; i++) {
    var status = false;
    var ei = this.estimateInstances[i];
    console.log(ei)
    if(!ei.stockStatus){
      status = false;
    }
    else if(ei.stockStatus=='Available'){
      status = false;
      if(ei.unitRate && ei.total){
        status = true;
      }
    } else{
      status = true;
    }
    statuses.push(status)
    
  }
  for(var j =0 ; j< statuses.length;j++){
    if(!statuses[j]){
       out = false;
       break;
    }
  }
  return out;
}



}

 async function close(){
  await sleep(1000)
  window.location.reload();
    
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
