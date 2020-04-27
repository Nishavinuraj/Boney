import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from 'src/app/router.animations';
declare var moment: any
import { Observable } from 'rxjs';
import * as momentTZ from 'moment-timezone';
// import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
  animations: [routerTransition()]
})

export class JobListComponent implements OnInit {

  srno:  number;
  truckno:  number;
  max_jobno:  number;
  jobNoList: any = [];
  jobDetails: any = [];
  jobNoData: any = {};
  addForm: FormGroup;
  addMultipleJobDetails: FormArray;
  date: NgbDateStruct;
  mainTotal = 0;

  listActive = true;
  CardActive = false;
  saveActive = true;
  updateActive = false;
  file;

  job_data;

  constructor(
    private maintenance: MaintenanceService,
    private toastr: ToastrService,
    public activedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private calendar: NgbCalendar,

  ) {
    this.activedRoute.params.subscribe(params => {
      this.srno = params.srno;
      this.truckno = params.truckno;
    });

    this.addForm = this.formBuilder.group({
      date: [''],
      jobno: [''],
      srno: [''],
      truckno: [''],
      km_reading: [''],
      vendor_name: [''],
      remarks: [''],
      bill_amount: [''],
      app_amount: [''],
      job_details: [''],
      upload_bill: [''],
      addMultipleJobDetails: this.formBuilder.array([])
    });

   }

  ngOnInit() {
    this.fetchData();
    this.getMaxJobNo();


  }

  get detailData(): FormArray { return this.addForm.get('addMultipleJobDetails') as FormArray; }

  // get multipleEditControls() {
  //   return this.addForm.get('addMultipleJobDetails')['controls'];
  // }


  createItem(): FormGroup {
    return this.formBuilder.group({
      work_be_done: [''],
      last_done_on: [''],
      remarks: [''],
      qty: [''],
      scrap_qty: [''],
      next_due_km: [''],
      rate: [''],
      gst: [''],
      amount: [''],
    });
  }

  existingData(data) {

    return new FormGroup({
      work_be_done: new FormControl(data.work_be_done),
      last_done_on: new FormControl(data.last_done_on),
      remarks: new FormControl(data.remarks),
      qty: new FormControl(data.qty),
      scrap_qty: new FormControl(data.scrap_qty),
      next_due_km: new FormControl(data.next_due_km),
      rate: new FormControl(data.rate),
      gst: new FormControl(data.gst),
      amount: new FormControl(data.amount),
    });
  }

  addDetail(): void {
    this.addMultipleJobDetails = this.addForm.get('addMultipleJobDetails') as FormArray;
    this.addMultipleJobDetails.push(this.createItem());
  }

  // Remove multiple form
  removeItem(index) {
    if (index === 0) {
      this.toastr.error('Cannot remove this form.');
    } else {
      this.addMultipleJobDetails.removeAt(index);
    }
  }

  fetchData() {
    this.mainTotal = 0;
    const detail = this.addForm.get('addMultipleJobDetails') as FormArray;
    while (detail.length !== 0) {
      detail.removeAt(0);
    }
    // if no job detail then push empty item
    detail.push(this.createItem());
    this.maintenance.getJobNoList(this.srno).subscribe((res: any) => {
      console.log('res >>>>>>>', res.result);
      this.jobNoList = res.result;
    });

  }

  newJobCard() {
    this.mainTotal = 0;
    this.addForm.reset();
    this.date = this.calendar.getToday();

    console.log('this.date  >>>>>>', this.date );
    // const bDateObj = {
    //   day: parseInt(bDate[0]),
    //   month: parseInt(bDate[1]),
    //   year: parseInt(bDate[2])
    // };
    this.addForm.controls['date'].setValue(this.date);
    this.file = '';
    const detail = this.addForm.get('addMultipleJobDetails') as FormArray;
    while (detail.length !== 0) {
      detail.removeAt(0);
    }
    // if no job detail then push empty item
    detail.push(this.createItem());

    this.CardActive = true;
    this.listActive = false;
    this.saveActive = true;
    this.updateActive = false;
  }

  Back() {
    this.CardActive = false;
    this.listActive = true;
    this.getMaxJobNo();
    this.mainTotal = 0;

    const detail = this.addForm.get('addMultipleJobDetails') as FormArray;
    while (detail.length !== 0) {
      detail.removeAt(0);
    }
    // if no job detail then push empty item
    detail.push(this.createItem());
  }

  getJobCard(jobno) {
    this.CardActive = true;
    this.listActive = false;
    this.saveActive = false;
    this.updateActive = true;

    this.maintenance.getJobNoJobDetails(jobno).subscribe((res: any) => {
      this.job_data = res;

      const control = <FormArray>this.addForm.controls['addMultipleJobDetails'];

      for (let i = control.length - 1; i >= 0; i--) {
        control.removeAt(i);
      }

      const fDate = moment(res.date).format('DD/MM/YYYY');
      const bDate = fDate.split('/');

      const bDateObj = {
        day: parseInt(bDate[0]),
        month: parseInt(bDate[1]),
        year: parseInt(bDate[2])
      };
      this.max_jobno = res.jobno;
      this.addForm.controls['date'].setValue(bDateObj);
      this.addForm.controls['jobno'].setValue(this.max_jobno);
      this.addForm.controls['srno'].setValue(this.srno);
      this.addForm.controls['truckno'].setValue(this.truckno);
      this.addForm.controls['km_reading'].setValue(res.km_reading);
      this.addForm.controls['vendor_name'].setValue(res.vendor_name);
      this.addForm.controls['remarks'].setValue(res.remarks);
      this.addForm.controls['bill_amount'].setValue(res.bill_amount);
      this.addForm.controls['app_amount'].setValue(res.app_amount);

      const detail = this.addForm.get('addMultipleJobDetails') as FormArray;

      // if no job detail then push empty item
      let i = 0;
      if (res.job_details.length === 0) {
        detail.push(this.createItem());
      } else {
        res.job_details.forEach(element => {
            // set date
            element.last_done_on = momentTZ(element.last_done_on).tz('Asia/Calcutta').format('DD/MM/YYYY');
            const splitedDate = element.last_done_on.split('/');
            const dateObj = {
              day: parseInt(splitedDate[0], 10),
              month: parseInt(splitedDate[1], 10),
              year: parseInt(splitedDate[2], 10)
            };
            element.last_done_on = dateObj;
            i = i + 1;
          detail.push(this.existingData(element));
        });
      }

      this.jobNoData = res;
      // this.jobNoList = res.result;
      this.GetTotalAmount((i - 1));
    });
  }

  getMaxJobNo() {

    this.maintenance.getMaxJobNo().subscribe((res: any) => {
      console.log('res >>>>>>>', res);
      // this.jobNoList = res.result;
      this.max_jobno = res.jobno;
    });
  }

  onSelectBill(event) {
    this.file = event.target.files[0];
  }

  submit() {

    const getFromData = this.addForm.value;
    const tdate = getFromData.date;
    const mDate = tdate.year + '-' + tdate.month + '-' + tdate.day;
    // console.log('addMultipleJobDetails >>>', getFromData.addMultipleJobDetails);

    const vendorname = getFromData.vendor_name.name;
    getFromData.vendor_name = vendorname ? vendorname : getFromData.vendor_name;

    getFromData.addMultipleJobDetails.forEach(element => {

      // const wdate = element.work_be_done;
      // if (wdate) {
      //   const workDate = wdate.year + '-' + wdate.month + '-' + wdate.day;
      //   element.work_be_done = workDate;
      // }

      // const ldate = element.last_done_on;
      // if (ldate) {
      //   const lastDate = ldate.year + '-' + ldate.month + '-' + ldate.day;
      //   element.last_done_on = lastDate;
      // }
      const wdname = element.work_be_done.name;
      element.work_be_done = wdname ? wdname : element.work_be_done;


      this.jobDetails.push(element);
    });

    const d = new FormData();
    d.append('file', this.file);
    let bill = '';
    if (getFromData.upload_bill) {
      this.maintenance.uploadBill(d).subscribe((res: any) => {
        console.log('>>res', res);
        bill = res.url;
        this.toastr.success('Bill uploaded.');

        const mainObj = {
          'date': mDate,
          'jobno': this.max_jobno,
          'srno': Number(this.srno),
          'truckno': this.truckno,
          'km_reading': getFromData.km_reading,
          'vendor_name': getFromData.vendor_name,
          'remarks': getFromData.remarks,
          'bill_amount': getFromData.bill_amount,
          'app_amount': getFromData.app_amount,
          'job_details': this.jobDetails,
          'bill': bill
        };

        this.maintenance.addJobCard(mainObj).subscribe(res => {

          this.addForm.reset();
          this.file = '';
          this.toastr.success('Job Card Added successfully.');

          this.fetchData();
          this.getMaxJobNo();
          this.CardActive = false;
          this.listActive = true;
        }, err => {
          console.log('err   >>>', err);
          this.toastr.error('Something went wrong when adding!');
        });

      }, err => {
        console.log('err   >>>', err);
        this.toastr.error('Something went wrong when adding!');
      });
    } else {
      const mainObj = {
        'date': mDate,
        'jobno': this.max_jobno,
        'srno': Number(this.srno),
        'truckno': this.truckno,
        'km_reading': getFromData.km_reading,
        'vendor_name': getFromData.vendor_name,
        'remarks': getFromData.remarks,
        'bill_amount': getFromData.bill_amount,
        'app_amount': getFromData.app_amount,
        'job_details': this.jobDetails,
        'bill': bill
      };

      this.maintenance.addJobCard(mainObj).subscribe(res => {

        this.addForm.reset();
        this.file = '';
        this.toastr.success('Job Card Added successfully.');

        this.fetchData();
        this.getMaxJobNo();
        this.CardActive = false;
        this.listActive = true;
      }, err => {
        console.log('err   >>>', err);
        this.toastr.error('Something went wrong when adding!');
      });
    }

  }

  // Search query for work to be done List
  wdName = (keyword: any): Observable<any[]> => {
    if (keyword) {
      return  this.maintenance.getWorkDoneList(keyword)
        .map((res: any) => {
          return res;
        });
    } else {
      return Observable.of([]);
    }
  }


  // Search query for work to be done List
  vendorName = (keyword: any): Observable<any[]> => {
    if (keyword) {
      return  this.maintenance.getVendorNameList(keyword)
        .map((res: any) => {
          return res;
        });
    } else {
      return Observable.of([]);
    }
  }

  getLastDate(idx) {
    const getFromData = this.addForm.value;
    const truckno = this.truckno;
    let work_be_done;
    if (getFromData.addMultipleJobDetails[idx].work_be_done.name) {
      work_be_done =  getFromData.addMultipleJobDetails[idx].work_be_done.name;
    }

    console.log('truckno  >>>', truckno);
    console.log('work_be_done  >>>', work_be_done);

    this.maintenance.getLastDoneOn(truckno, work_be_done).subscribe((res: any) => {
      console.log('res  >>>', res.result.last_done_on);
      if (res.result.last_done_on) {
        const dt = momentTZ(res.result.last_done_on.last_done_on).tz('Asia/Calcutta');
        const dateObj = {
          day: parseInt(dt.format('DD')),
          month: parseInt(dt.format('MM')),
          year: parseInt(dt.format('YYYY'))
        };

        this.addForm.controls['addMultipleJobDetails']['controls'][idx].controls['last_done_on'].setValue(dateObj);
      }
    }, err => {
      this.toastr.error('Something went wrong.' , 'Error');
    });
  }

  update() {

    this.jobDetails = [];
    const getFromData = this.addForm.value;
    const tdate = getFromData.date;
    const mDate = tdate.year + '-' + tdate.month + '-' + tdate.day;
    // console.log('addMultipleJobDetails >>>', getFromData.addMultipleJobDetails);


    const vendorname = getFromData.vendor_name.name;
    getFromData.vendor_name = vendorname ? vendorname : getFromData.vendor_name;


    getFromData.addMultipleJobDetails.forEach(element => {

      // console.log('element  >>>>', element);
      // const ldate = element.last_done_on;
      // if (ldate) {
      //   const lastDate = ldate.year + '-' + ldate.month + '-' + ldate.day;
      //   element.last_done_on = lastDate;
      // }
      delete element.last_done_on;
      const wdname = element.work_be_done.name;
      element.work_be_done = wdname ? wdname : element.work_be_done;
      this.jobDetails.push(element);

    });

    // console.log(this.jobDetails);

    const d = new FormData();
    d.append('file', this.file);
    let bill = '';
    if (getFromData.upload_bill) {
      this.maintenance.uploadBill(d).subscribe((res: any) => {
        bill = res.url;
        this.toastr.success('Job Card Updated successfully.');

        const mainObj = {
          'date': mDate,
          'jobno': this.max_jobno,
          'srno': Number(this.srno),
          'truckno': this.truckno,
          'km_reading': getFromData.km_reading,
          'vendor_name': getFromData.vendor_name,
          'remarks': getFromData.remarks,
          'bill_amount': getFromData.bill_amount,
          'app_amount': getFromData.app_amount,
          'job_details': this.jobDetails,
          'bill': bill
        };

        console.log('mainObj  >>>>>', mainObj);

        this.maintenance.updateJobCard(mainObj).subscribe(res => {

          this.addForm.reset();
          this.file = '';
          this.toastr.success('Job Card Updated Successfully.');
          this.CardActive = false;
          this.listActive = true;
          this.getMaxJobNo();

          const detail = this.addForm.get('addMultipleJobDetails') as FormArray;
          while (detail.length !== 0) {
            detail.removeAt(0);
          }

        }, err => {
          console.log('err   >>>', err);
          this.toastr.error('Something went wrong when adding!');
        });
      }, err => {
        console.log('err   >>>', err);
        this.toastr.error('Something went wrong when adding!');
      });
    } else {
      const mainObj = {
        'date': mDate,
        'jobno': this.max_jobno,
        'srno': Number(this.srno),
        'truckno': this.truckno,
        'km_reading': getFromData.km_reading,
        'vendor_name': getFromData.vendor_name,
        'remarks': getFromData.remarks,
        'bill_amount': getFromData.bill_amount,
        'app_amount': getFromData.app_amount,
        'job_details': this.jobDetails
      };

      console.log('mainObj  >>>>>', mainObj);

      this.maintenance.updateJobCard(mainObj).subscribe(res => {

        this.addForm.reset();
        this.file = '';
        this.toastr.success('Job Card Updated Successfully.');
        this.CardActive = false;
        this.listActive = true;
        this.getMaxJobNo();

        const detail = this.addForm.get('addMultipleJobDetails') as FormArray;
        while (detail.length !== 0) {
          detail.removeAt(0);
        }

      }, err => {
        console.log('err   >>>', err);
        this.toastr.error('Something went wrong when adding!');
      });
    }
  }

  delete(idx, jobno) {
    console.log('idx  >>>>>', idx);
    console.log('jobno  >>>>>', jobno);

    const conf = confirm('Are you sure you want to delete this record ?');

    if (conf === true) {
      this.maintenance.deleteJobCard(jobno).subscribe(res => {
        this.jobNoList.splice(idx, 1);
        this.toastr.success('Job Card deleted successfully.');
        this.getMaxJobNo();
      }, err => {
        this.toastr.error('Something went wrong.');
      });
    }
  }

  setTotalAmount(idx) {
    const getFromData = this.addForm.value;
    if ( getFromData.addMultipleJobDetails[idx].qty && getFromData.addMultipleJobDetails[idx].rate ) {
      const newQty =  getFromData.addMultipleJobDetails[idx].qty;
      const newRate =  getFromData.addMultipleJobDetails[idx].rate;
      const newGST =  getFromData.addMultipleJobDetails[idx].gst;

      // console.log('newQty  >>>', newQty);
      // console.log('newRate  >>>', newRate);
      // console.log('totalAmount  >>>', newGST);

      const totalAmount = newQty * newRate;
      const gstAmount = (totalAmount * newGST) / 100;
      // console.log('totalAmount  >>>', totalAmount);
      // console.log('gstAmount  >>>', gstAmount);
      const finalAmount = totalAmount + gstAmount;

      this.addForm.controls['addMultipleJobDetails']['controls'][idx].controls['amount'].setValue(finalAmount);
      this.GetTotalAmount(idx);
    }
  }

  GetTotalAmount(idx) {
    const getFromData = this.addForm.value;
    if ( getFromData.addMultipleJobDetails[idx].amount ) {
      let t = 0;
      // const i = 0;
      while (idx >= 0) {
        t = t + getFromData.addMultipleJobDetails[idx].amount;
        idx = idx - 1;
      }

      this.mainTotal = t;

    }
  }
}
