import { Component, OnInit } from '@angular/core';
import { EstimateService } from 'src/app/shared/services/estimates.service';
import { Response } from '@angular/http/src/static_response';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { MetaService } from 'src/app/shared/services/meta.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-created-estimate',
  templateUrl: './all-created-estimate.component.html',
  styleUrls: ['./all-created-estimate.component.scss']
})
export class AllCreatedEstimateComponent implements OnInit {
  estimates:any;
  isEdit:boolean = false;
  public items_option: any;
  minDate;
  editId;
  loading=true;
  loaded=false;
  filterForm: FormGroup;
  constructor(private estimateService:EstimateService,private parserFormatter: NgbDateParserFormatter,
    private formBuilder: FormBuilder,     public toastr: ToastrService,
    public meta: MetaService,     private calendar: NgbCalendar,

  ) {
    this.filterForm = this.formBuilder.group({
      site_name: [''],
      item_name: [''],
      start_date: [''],
      end_date: ['']
  });

  const current = new Date();
  this.minDate = {
    year: current.getFullYear(),
    month: current.getMonth() + 1,
    day: current.getDate()
  };

   }

   edit(t){
     this.editId=t._id;
     this.isEdit = true;
   }

   delete(t){
    this.estimateService.delete(t._id).subscribe(res=>{
      this.toastr.success('Estimate Deleted successfully.');
      this.isEdit=false;
      this.getEstimates();
    })
   }

   save(t){
    const estimate = {
      product: t.product,
      productQty: t.productQty,
      expiryDate: new Date(t.ngbExpiry.year, t.ngbExpiry.month - 1, t.ngbExpiry.day,23,59,59)
    }
    this.estimateService.update(t._id,estimate).subscribe(res=>{
      this.toastr.success('Estimate Updated successfully.');
      this.isEdit=false;
      this.getEstimates();
    })
   }


  ngOnInit() {
    this.getEstimates();
    this.getItems();
  }

getEstimates(){
  this.estimateService.getCreatedEstimates().subscribe(res=>{
    var estimates = res['result']
    estimates.forEach(t => {
      t.ngbExpiry = {
        year: new Date(t.expiryDate).getFullYear(),
        month: new Date(t.expiryDate).getMonth() + 1,
        day: new Date(t.expiryDate).getDate()
      }
    });
    this.estimates=estimates;
    this.loading=false;
    this.loaded=true;
  },
  error=>{
    this.loading=false;
    this.loaded=true;
    this.estimates = [];
  })
}

  getItems() {
    this.meta.getItemsList().subscribe(trackInfo => {
      this.items_option = trackInfo['result'];
      console.log('ItemsList >>>>>', this.items_option);
    });
}

}
