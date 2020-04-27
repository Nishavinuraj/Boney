import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EstimateService } from 'src/app/shared/services/estimates.service';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-received-estimates',
  templateUrl: './received-estimates.component.html',
  styleUrls: ['./received-estimates.component.scss']
})
export class ReceivedEstimatesComponent implements OnInit {

  estimates:any;
  loading=true;
  loaded=false;
  detailId;
  estimateInstances = [];
  filterForm: FormGroup;
  constructor(private estimateService:EstimateService,
    private parserFormatter: NgbDateParserFormatter,
    private router: Router,
    private formBuilder: FormBuilder,
    public toastr: ToastrService,
  ) {
    this.filterForm = this.formBuilder.group({
      site_name: [''],
      item_name: [''],
      start_date: [''],
      end_date: ['']
  });
   }

   hideDetails(){
     this.estimateInstances = [];
     this.detailId = null;
   }

   getEstimateDetails(id){
    this.estimateService.getEstimatesProdSubmisions(id).subscribe(res=>{
      this.estimateInstances = res['result'];
      this.detailId = id;
    })
   }

   purchaseOrder(){
      this.router.navigateByUrl('/inventory/add-order/'+this.detailId);
      //inventory/add-order
   }

   reject(){
      this.estimateService.rejectEstimateSubmission(this.detailId).subscribe(res=>{
        this.toastr.success('Estimate Rejected successfully.');
      })
   }

  ngOnInit() {
    this.estimateService.getEstimatesSubmisions().subscribe(res=>{
      var estimates = res['result']
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
}
