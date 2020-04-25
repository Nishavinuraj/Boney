import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from 'src/app/router.animations';
declare var moment: any
import { Observable } from 'rxjs';
import * as momentTZ from 'moment-timezone';


@Component({
  selector: 'app-truck-history',
  templateUrl: './truck-history.component.html',
  styleUrls: ['./truck-history.component.scss']
})
export class TruckHistoryComponent implements OnInit {

  truckno:  number;
  truckHistory: any = [];
  total_amount:  number;

  constructor(
    private maintenance: MaintenanceService,
    private toastr: ToastrService,
    public activedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.activedRoute.params.subscribe(params => {
      this.truckno = params.truckno;
    });
  }

  ngOnInit() {
    this.getTruckHistory();
  }

  getTruckHistory() {

    this.maintenance.getTruckHistory(this.truckno).subscribe((res: any) => {
      // this.truckHistory = res.result;
      res.result.forEach(element => {
        element.date = moment(element.date).format('YYYY-MM-DD');
        this.truckHistory.push(element);
      });
      this.total_amount = res.total;
      console.log('truckHistory  >>>', this.truckHistory);
    }, err => {
      this.toastr.error('Something went wrong when loading Truck Job Card History.' , 'Error');
    });
  }

}
