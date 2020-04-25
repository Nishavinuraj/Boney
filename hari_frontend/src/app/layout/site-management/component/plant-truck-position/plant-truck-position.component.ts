import { Component, OnInit, Injectable, Input, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MetaService } from 'src/app/shared/services/meta.service';
import { ReportsService } from 'src/app/shared/services/reports.service';
import { ToastrService } from 'ngx-toastr';
import { SiteService } from 'src/app/shared/services/site.service';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs';
import { NgbTimeStruct, NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
declare var moment: any;
import * as momentTZ from 'moment-timezone';
import { BilltySelectionComponent } from './billty-selection/billty-selection.component';

@Component({
  selector: 'app-plant-truck-position',
  templateUrl: './plant-truck-position.component.html',
  styleUrls: ['./plant-truck-position.component.scss']
})

export class PlantTruckPositionComponent implements OnInit {

  val: NgbTimeStruct;
  loading = false;
  loaded = false;
  addForm: FormGroup;
  editForm: FormGroup;
  // submitted = false;
  sites: any = [];
  dataList: any = [];
  truckDetails = [];
  destinations = [];
  destination_option = [];
  filters = {
    page: 0,
    site_name: ''
  };
  pagination = {total: 0, currenPage: 1, pageSize: 50, maxSize: 10};
  billties = [];

  selectedRow;

  // For html Modal
  // @ViewChild('content') private billtyModal: TemplateRef<any>;
  modalRef: NgbModalRef;
  site_name: any;
  usertype: any;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    public site: SiteService,
    public reportService: ReportsService,
    public meta: MetaService,
    public router: Router,
    private modalService: NgbModal
  ) {

    this.usertype = this.meta.getSiteFromStorage().role;
    this.site_name = this.meta.getSiteFromStorage().site;

    this.addForm = this.fb.group({
      site: ['', Validators.required],
      lrno: ['', Validators.required],
      truck_no: ['', Validators.required],
      destination: [''],
      prefdestination: [''],
      lastkm_reading: [0, Validators.required],
      lastdestinationkm: [0],
      mannualtodest: [''],
      km_reading: [0, Validators.required],
      excesskm: [0],
      product: [''],
      googlekm: [0],
      remarks: ['']
    });

    this.editForm = this.fb.group({
      place_time: ['']
    });
  }


  ngOnInit() {
    this.getSites();
    // this.getPrefdestination();
    this.addForm.get('site').valueChanges.subscribe(
      site => {
          this.reportService.getMaxLrno(site).subscribe(res=>{
              this.addForm.patchValue(res);
          });

          // getting to destination form plant rate list
        this.meta.getToDestinationsFromPlantRateList(site).subscribe(res=>{
          // console.log('To destination', res['info'] );
          var toDestination = [];
          res['info'].forEach(dim => {
            toDestination.push(dim.destination);
          });
          this.destination_option = toDestination;
        });

        this.meta.getTruckPositionParking(site).subscribe(res => {
          // this.addForm.controls['destination'].setValue(null);
          // console.log(' parking destination', res['destination']);
          // this.addForm.controls['destination'].setValue(res['destination']);
        });



        }



    );


    this.addForm.get('mannualtodest').valueChanges.subscribe(val => {
      this.addForm.controls['prefdestination'].setValue(null);
      this.meta.getprefdestinationlist().subscribe(siteInfo => {
        this.destination_option = siteInfo['result'];
        console.log('All Destination list >>>>>', siteInfo['result']);
      }, err => {
        console.log('err   >>>', err);
      });

    });

    this.addForm.get('truck_no').valueChanges.subscribe(
      truck_no => {
          this.reportService.getTruckDestinationDetails(truck_no).subscribe(res=>{
              var tkmr = res['result']['tkmr'];
              var newkm = res['result']['newkm'];
              var destValue = {
                lastkm_reading:tkmr?tkmr:0,
                lastdestinationkm:newkm?newkm:0
              }
              this.addForm.patchValue(destValue);
          });
      }
    );

    this.addForm.get('lastkm_reading').valueChanges.subscribe(val=>{

      this.addForm.controls['km_reading'].setValue(null);
      var lkmr,ckmr,ldkm;
      lkmr=Number(this.addForm.controls['lastkm_reading'].value);
      ldkm=Number(this.addForm.controls['lastdestinationkm'].value);
      ckmr = Number(lkmr) + Number(ldkm);

      this.addForm.get('km_reading').setValue(Number(ckmr));

    });

    this.addForm.get('lastdestinationkm').valueChanges.subscribe(val=>{

      this.addForm.controls['km_reading'].setValue(null);
      var lkmr,ckmr,ldkm;
      lkmr=Number(this.addForm.controls['lastkm_reading'].value);
      ldkm=Number(this.addForm.controls['lastdestinationkm'].value);
      ckmr = Number(lkmr) + Number(ldkm);

      this.addForm.get('km_reading').setValue(Number(ckmr));

    });

    this.addForm.get('km_reading').valueChanges.subscribe(val=>{

      this.addForm.controls['excesskm'].setValue(null);
      var lkmr,ckmr,exkm,ldkm;
      lkmr=Number(this.addForm.controls['lastkm_reading'].value);
      ckmr=Number(this.addForm.controls['km_reading'].value);
      ldkm=Number(this.addForm.controls['lastdestinationkm'].value);
      exkm = Number(ckmr) - Number(lkmr) - Number(ldkm);

      this.addForm.get('excesskm').setValue(Number(exkm));

    });

  }

  getPrefdestination() {
    this.meta.getprefdestinationlist().subscribe((res: any) => {
      console.log('>>>>res', res);
      var vList: any = [];
      res.result.forEach(prefdestination => {
        vList.push(prefdestination.name);
      });
      this.destination_option = vList;
      console.log('Pref Destination list >>>>>', this.destination_option);
    }, err => {
      console.log('err   >>>', err);
    });
  }




  getSites() {
    this.loading = true;
    this.meta.getSites().subscribe(res => {
        this.loading = false;
        this.sites = res;
        if (this.usertype === 'ADMIN') {
          this.addForm.controls['site'].setValue(this.sites[0].branch_name);
        } else {
            this.addForm.controls['site'].setValue(this.site_name);
        }
      },
      err => {
        this.loading = false;
      }
    );
  }

  getDocumentStatus() {

      this.loading = true;
      this.loaded = false;
      this.dataList = [];
      this.site.getDocumentStatus({truckno: this.addForm.value.truck_no.truckno}).subscribe((res: any) => {
        this.loading = false;

        this.dataList = res;
      }, err => {
          this.loading = false;
          console.log('error', err);
      });
      this.generateTruckLastBilltyDetails();
  }

  onDestChange() {
      this.meta.getToDestinations(this.addForm.value.destination).subscribe((res: any) => {
        console.log('>>>>>>>>Successs', res);
      }, err => {
        console.log('>>>>>>>>err', err);
      });
  }

  public generateTruckLastBilltyDetails() {
    const truck_no = this.addForm.controls.truck_no.value;
    const site = this.addForm.controls.site.value;

    if (truck_no) {
      const matchCond = { truckno: truck_no };
      console.log('mathCond >>' , matchCond );

      this.meta.getTruckLastBilltyDetails(matchCond).subscribe(mrInfo => {
        this.addForm.controls.lastkm_reading.setValue(mrInfo['tkmr']);
        this.addForm.controls.lastdestinationkm.setValue(mrInfo['newkm']);
      }, error => { console.log(error);
      });
    }
  }

  fetchData() {
    if (this.addForm.controls['site'].valid) {
      this.getTruckData();
    } else {
      this.toastr.error('Please select site name to get data.');
    }
  }

  getTruckData() {

    this.filters.page = this.pagination.currenPage;
    if (this.addForm.value.site) {
      this.filters.site_name = this.addForm.value.site;
    }
    this.loading = true;
    this.site.getTruckPosition(this.filters).subscribe((res: any) => {
      console.log('>>>>>>truckData', res);
      this.loading = false;

      res.results.forEach(element => {
        element.updated = false;
        element.show = false;
        element.pdate = moment(element.pdate, 'YYYY-MM-DD').format('DD/MM/YYYY');
        if (element.placedtime) {
          element.placedtime = momentTZ(element.placedtime).tz('Asia/Calcutta').format('DD/MM/YYYY HH:mm:ss');
        }
        if (element.billtytime) {
          element.billtytime = moment(element.billtytime).format('DD/MM/YYYY');
        }
      });

      this.truckDetails = res.results;
      this.pagination.total = res.total;

      this.getDocumentStatus();
    }, err => {
      this.loading = false;
      this.toastr.error('Something went wrong.');
      console.log('>>>>>>truckDataerr', err);
    });
  }


  delete(data, index) {

    console.log('data >>>>>', data);
    const obj = {
      sr_no: data.srno,
    };


    const conf = confirm('Are you sure you want to delete this record ?');

    if (conf === true) {
      // this.loading = true;

      console.log('data  >>>>', obj);
      this.site.deleteTruckPosition(obj).subscribe(res => {

        this.truckDetails.splice(index, 1);
        this.toastr.success('Truck deleted successfully.');
        // this.loading = false;
      }, err => {
        this.toastr.error('Something went wrong.');
        // this.loading = false;
      });
    }
  }

  // Search query for destination list
  observableSource = (keyword: any): Observable<any[]> => {
    if (keyword) {
      return  this.site.getDestinationList(keyword)
        .map((res: any) => {
          return res;
        });
    } else {
      return Observable.of([]);
    }
  }

  // Search query for truck no list
  truckPosition = (keyword: any): Observable<any[]> => {
    if (keyword) {
      return  this.site.getTruckPositionList(keyword)
        .map((res: any) => {
          return res;
        });
    } else {
      return Observable.of([]);
    }
  }

  addData() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.submitted = false;
      const obj = {
        site: this.addForm.value.site,
        lrno: this.addForm.value.lrno,
        truckno: this.addForm.value.truck_no.truckno,
        destination: this.addForm.value.destination,
        prefdestination: this.addForm.value.prefdestination,
        product: this.addForm.value.product,
        lastkm_reading: this.addForm.value.lastkm_reading,
        lastdestinationkm: this.addForm.value.lastdestinationkm,
        googlekm: this.addForm.value.googlekm,
        km_reading: this.addForm.value.km_reading,
        excesskm: this.addForm.value.excesskm,
        remarks: this.addForm.value.remarks
      };

      this.loading = true;
      this.site.addTruckPosition(obj).subscribe(res => {
        this.loading = false;
        this.toastr.success('Truck details added successfully.');
        this.getTruckData();
        this.addForm.reset();
        if (this.usertype === 'ADMIN') {
          this.addForm.controls['site'].setValue(this.sites[0].branch_name);
        } else {
            this.addForm.controls['site'].setValue(this.site_name);
        }
      }, err => {
        this.loading = false;
        this.toastr.error('Something went wrong.');
      });
    }
  }

  resetFilters() {
    this.addForm.reset();
    if (this.usertype === 'ADMIN') {
      this.addForm.controls['site'].setValue(this.sites[0].branch_name);
    } else {
        this.addForm.controls['site'].setValue(this.site_name);
    }
    this.getTruckData();
  }

  edit(data) {
    data.editing = true;
    data.updated = true;

    data.show = !data.show;
    console.log('>>>>>>>>data', data);
    let val: NgbTimeStruct;

    const time = data.placedtime.split(':');

    const obj = {
      hour: parseInt(time[0]),
      minute: parseInt(time[1]),
      second: parseInt(time[2]),
    };

    val = obj;
    this.editForm.controls['place_time'].setValue(val);
  }

  cancel(data) {
    data.editing = false;
    data.updated = false;
    data.show = false;
  }

  update(data) {

    // For pass time with '0'
    const time = this.editForm.value.place_time;

    time.hour = time.hour < 10 ? '0' + time.hour.toString() : time.hour;
    time.minute = time.minute < 10 ? '0' + time.minute.toString() : time.minute;
    time.second = time.second < 10 ? '0' + time.second.toString() : time.second;

    const finalTime = time.hour + ':' + time.minute + ':' + time.second;

    const obj = {
      placed_time: finalTime,
      sr_no: data.srno
    };

    this.loading = true;
    this.site.updateTruckPosition(obj).subscribe(res => {
      this.loading = false;
      data.editing = false;
      data.updated = false;
      this.toastr.success('Truck details updated successfully.');
      // Set value for table
      let formVal = this.editForm.value.place_time;
      formVal = formVal.hour.toString() + ':' + formVal.minute.toString() + ':' + formVal.minute.toString();
      data.placedtime = formVal;

    }, err => {
      this.loading = false;
      this.toastr.error('Something went wrong.');
      console.log('>>>>>>>>err', err);
    });
  }

  openBiltyModal(detail) {
    this.selectedRow = detail;
    const modalRef  =  this.modalService.open(BilltySelectionComponent);
    modalRef.componentInstance.truckDetails = detail;
  }

  cancelModal (): void {
    if ( this.modalRef ) {
       this.modalRef.dismiss();
       this.modalRef = null;
    }
 }

  updatePlacedTime(detail) {
    this.site.updatePlacedtime({srno: detail.srno}).subscribe((res: any) => {
      this.toastr.success('Updated placed time!');
      detail.placedtime = res.time;
    }, err => {
      this.toastr.error('Something went wrong.');
    });
  }

  cancelEntry(detail) {
    if (confirm('Are you sure you want to do this?')) {
      this.site.cancelPositionEntry({id: detail.id}).subscribe((res: any) => {
        this.toastr.success('Updated placed time!');
        detail.status = 'cancelled';
        this.getTruckData();
      }, err => {
        this.toastr.error('Something went wrong.');
      });
    }
  }

}
