import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { NgbModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from 'src/app/router.animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
  animations: [routerTransition()]
})
export class JobCardComponent implements OnInit {

  addForm: FormGroup;
  items: FormArray;

  constructor(
    public maintenanceService: MaintenanceService,
    private formBuilder: FormBuilder,
    public toastr: ToastrService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      date: [''],
      jobno: [''],
      srno: [''],
      truckno: [''],
      km_reading: [''],
      vendor_name: [''],
      bill_amount: [''],
      app_amount: [''],
      job_details: [''],
      work_be_done: [''],
      last_done_on: [''],
      remarks: [''],
      qty: [''],
      scrap_qty: [''],
      next_due_km: [''],
    });
  }

  submit() {
    const getFromData = this.addForm.value;

    console.log('FromData >>>>', getFromData);

    const tdate = getFromData.date;
    const wdate = getFromData.work_be_done;
    const ldate = getFromData.last_done_on;

    const mDate = tdate.year + '-' + tdate.month + '-' + tdate.day;
    const workDate = wdate.year + '-' + wdate.month + '-' + wdate.day;
    const lastDate = ldate.year + '-' + ldate.month + '-' + ldate.day;

    const mainObj = {
      'date': mDate,
      'jobno': getFromData.jobno,
      'srno': getFromData.srno,
      'truckno': getFromData.truckno,
      'km_reading': getFromData.km_reading,
      'vendor_name': getFromData.vendor_name,
      'bill_amount': getFromData.bill_amount,
      'app_amount': getFromData.app_amount,
      'job_details': [{
        'work_be_done': workDate,
        'last_done_on': lastDate,
        'remarks': getFromData.remarks,
        'qty': getFromData.qty,
        'scrap_qty': getFromData.scrap_qty,
        'next_due_km': getFromData.next_due_km,
      }]
    };
    this.maintenanceService.addJobCard(mainObj).subscribe(res => {

      this.addForm.reset();
      this.toastr.success('Job Card Added successfully.');
    }, err => {
      console.log('err   >>>', err);
      this.toastr.error('Something went wrong when adding!');
    });
  }
}
