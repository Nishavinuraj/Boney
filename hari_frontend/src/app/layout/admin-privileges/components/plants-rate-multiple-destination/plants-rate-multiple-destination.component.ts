import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { AdminPrivilegesService } from 'src/app/shared/services/admin-privileges.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder } from '@angular/forms';
declare var moment:any;
import { NgbModal, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { MetaService } from 'src/app/shared/services/meta.service';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';
import { SiteService } from 'src/app/shared/services/site.service';

@Component({
  selector: 'app-plants-rate-multiple-destination',
  templateUrl: './plants-rate-multiple-destination.component.html',
  styleUrls: ['./plants-rate-multiple-destination.component.scss'],
  animations: [routerTransition()]
})

export class PlantsRateMultipleDestinationComponent implements OnInit {

  rows: any = [];
  siteName = '';
  editing = {};
  pagination = {total: 0, currenPage: 1, pageSize: 50, maxSize: 10};
  filters = { page: 0 };
  multiDestForm: FormGroup;
  searchForm: FormGroup;
  addPlantRateForm: FormGroup;
  sites: any = [];
  companies: any = [];
  destinations = [];
  typingTimer;
  startdt: NgbDateStruct;
  enddt: NgbDateStruct;
  loading = false;
  dest: any;
  site_name: any;
  usertype: any;

  constructor(
    public meta: MetaService,
    public adminService: AdminPrivilegesService,
    private activatedRoute: ActivatedRoute,
    public toastr: ToastrService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private calendar: NgbCalendar,
    public site: SiteService
  ) {

    this.activatedRoute.params.subscribe(res => {
      this.siteName = res.name;
    });

    this.usertype = this.meta.getSiteFromStorage().role;
    this.site_name = this.meta.getSiteFromStorage().site;

    this.multiDestForm = this.formBuilder.group({
      company: [''],
      destination: [''],
      startdate: [''],
      enddate: [''],
      freight: [''],
      km: [''],
      spi: [''],
      rateby: [''],
    });

    this.searchForm = this.formBuilder.group({
      destination: ['']
    });

    this.addPlantRateForm = this.formBuilder.group({
      name: [''],
      site: [''],
      status: ['Active'],
      rateby: ['SPI'],
      destination: [''],
      km: [''],
      spi: [''],
      freight: [''],
      startdate: [''],
      enddate: ['']
    });

    this.getSites();
    this.getCompanies();
  }

  ngOnInit() {
    this.getMultiDes();
  }

  // getSites() {
  //   this.meta.getSites().subscribe(res => {
  //       this.sites = res;
  //       if (this.usertype === 'ADMIN') {
  //         this.addPlantRateForm.controls['site'].setValue(this.sites[0].branch_name);
  //       } else {
  //         this.addPlantRateForm.controls['site'].setValue(this.site_name);
  //       }
  //   }, err => {
  //       // on error
  //   });
  // }

  getSites() {
    this.meta.getallSites().subscribe(res => {
        this.sites = res;
        // if (this.usertype === 'ADMIN') {
          // this.addPlantRateForm.controls['site'].setValue(this.sites[0].branch_name);
        // } else {
        //   this.addPlantRateForm.controls['site'].setValue(this.site_name);
        // }
        this.addPlantRateForm.controls['site'].setValue(this.site_name);
        // this.addPlantRateForm.controls['site'].setValue(this.sites[0].branch_name);
    }, err => {
        // on error
    });
  }

  getCompanies() {
    this.meta.getPartyNames().subscribe(res => {
        this.companies = res;
    }, err => {
        // on error
    });
  }

  getMultiDes() {

    this.filters.page = this.pagination.currenPage;

    const obj = {
      'site_name': this.siteName,
      'page': this.filters.page,
      'destination_name': '',
      'limit': 100
    };

    if (this.searchForm.value.destination) {
      obj.destination_name = this.searchForm.value.destination;
    }

    this.loading = true;
    this.adminService.getSitePlanRateDetails(obj).subscribe((res: any) => {
      this.loading = false;
      res.results.forEach(element => {
        element.updated = false;
        element.startdate = element.startdate ? moment(element.startdate).format('DD/MM/YYYY') : '--';
        element.enddate = element.enddate ? moment(element.enddate).format('DD/MM/YYYY') : '--' ;
      });
      this.rows = res.results;
      this.pagination.total = res.total;
    }, err => {
      console.log('>>>>>>>>>>>>err', err);
      this.loading = false;
      this.toastr.error('Something went wrong.');
    });
  }

  edit(data) {

    data.updated = !data.updated;

    // set value for date when edit button clicked
    const splitStartDt = data.startdate.split('/');
    const endSplitDt = data.enddate.split('/');

    const startDtObj = {
      day: parseInt(splitStartDt[0]),
      month: parseInt(splitStartDt[1]),
      year: parseInt(splitStartDt[2])
    };

    const endDtObj = {
      day: parseInt(endSplitDt[0]),
      month: parseInt(endSplitDt[1]),
      year: parseInt(endSplitDt[2])
    };

    this.startdt = startDtObj;
    this.enddt = endDtObj;

    // Set Form Value for edit form
    this.multiDestForm.controls['startdate'].setValue(this.startdt);
    this.multiDestForm.controls['enddate'].setValue(this.enddt);
    this.multiDestForm.controls['company'].setValue(data.company);
    this.multiDestForm.controls['destination'].setValue(data.destination);
    this.multiDestForm.controls['freight'].setValue(data.freight);
    this.multiDestForm.controls['km'].setValue(data.km);
    this.multiDestForm.controls['spi'].setValue(data.spi);
    this.multiDestForm.controls['rateby'].setValue(data.rateby);
  }

  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    } else {
        return null;
    }
  }

  onDestChange(event) {
    let e: object;
    if (event) {
      e = event.name;
    }
    this.dest = e ? e : this.multiDestForm.value.destination;
  }

  updateValue(data, index) {

    let stDate = this.multiDestForm.value.startdate;
    let edDate = this.multiDestForm.value.enddate;

    stDate = stDate.year.toString() + '-' + stDate.month.toString() + '-' + stDate.day.toString();
    edDate = edDate.year.toString() + '-' + edDate.month.toString() + '-' + edDate.day.toString();

    const startDate = stDate;
    const endDate = edDate;

    const obj = {
      id: data.id,
      multidest_id: data.multidest_id,
      name: this.multiDestForm.value.name,
      company: this.multiDestForm.value.company,
      destination: this.dest,
      startdate: startDate,
      enddate: endDate,
      freight: this.multiDestForm.value.freight,
      km: this.multiDestForm.value.km,
      spi: this.multiDestForm.value.spi,
      rateby: this.multiDestForm.value.rateby,
    };

    console.log('>>>>>Obj', obj);

    // this.adminService.updateSitePlanRate(obj).subscribe(res => {
    //   this.toastr.success('Data updated successfully.');
    //   this.rows[index].updated = false;

    //   // Set vale for start date and end date
    //   let stDate = this.multiDestForm.value.startdate;
    //   let endDate = this.multiDestForm.value.enddate;

    //   if (stDate) {
    //     stDate = stDate.day.toString() + '/' + stDate.month.toString() + '/' + stDate.year.toString();
    //     data.startdate = stDate;
    //   } else {
    //     this.multiDestForm.controls['startdate'].reset();
    //   }

    //   if (endDate) {
    //     endDate = endDate.day.toString() + '/' + endDate.month.toString() + '/' + endDate.year.toString();
    //     data.enddate = endDate;
    //   } else {
    //     this.multiDestForm.controls['enddate'].reset();
    //   }

    //   data.spi = this.multiDestForm.value.spi;
    //   data.km = this.multiDestForm.value.km;
    //   data.freight = this.multiDestForm.value.freight;
    //   data.rateby = this.multiDestForm.value.rateby;
    //   data.destination = this.multiDestForm.value.destination;

    // }, err => {
    //   console.log('>>>>>>>>>>>>err', err);
    //   this.toastr.error('Something went wrong.');
    // });
  }

  refershPage() {
    this.getMultiDes();
  }

  search() {
    this.getMultiDes();
  }

  // Add Modal
  addModal(add_plant_rate_multi_dest) {
    const modalRef = this.modalService.open(add_plant_rate_multi_dest, {
      backdrop : 'static',
      keyboard : false,
      windowClass: 'my-class'
    });

    // Modal result
    modalRef.result.then((res) => {

    }, (reason) => {
      console.log('>>>>>>>>>>>>>', reason);
    });
  }

  // onDestChange() {
  //   clearTimeout(this.typingTimer);
  //   this.typingTimer = setTimeout(() => {
  //     this.meta.getToDestinations(this.addPlantRateForm.value.destination).subscribe((res: any) => {
  //     const arr = [];
  //       res.forEach(r => {
  //         arr.push(r.name);
  //       });

  //       this.destinations = arr;
  //     });
  //   }, 1000);
  // }

  searchDestination = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.destinations.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )

  savePlatRateList() {
    console.log(this.addPlantRateForm.value);
    const data = JSON.parse(JSON.stringify(this.addPlantRateForm.value));
    data.startdate = this.addPlantRateForm.value.startdate.year + '-' +
    this.addPlantRateForm.value.startdate.month + '-' + this.addPlantRateForm.value.startdate.day;
    data.enddate = this.addPlantRateForm.value.enddate.year + '-' +
    this.addPlantRateForm.value.enddate.month + '-' + this.addPlantRateForm.value.enddate.day;
    data.multidest = {
      destination: data.destination.name,
      km: data.km,
      spi: data.spi,
      freight: data.freight,
      startdate: data.startdate,
      enddate: data.enddate
    };

    delete data.destination.name;
    delete data.km;
    delete data.spi;
    delete data.freight;
    delete data.startdate;
    delete data.enddate;

    // console.log(JSON.stringify(data));
    this.adminService.addPlantRateList(data).subscribe(res => {
      this.toastr.success('Added!');
      this.addPlantRateForm.reset();
      if (this.usertype === 'ADMIN') {
        this.addPlantRateForm.controls['site'].setValue(this.sites[0].branch_name);
      } else {
        this.addPlantRateForm.controls['site'].setValue(this.site_name);
      }
      this.addPlantRateForm.controls['status'].setValue('Active');
      this.addPlantRateForm.controls['rateby'].setValue('SPI');
      this.addPlantRateForm.controls['name'].setValue('');
      this.modalService.dismissAll();
    }, err => {
      this.toastr.error('Something went wrong when adding!');
    });
  }

  // Search query for destination list
  destSearch = (keyword: any): Observable<any[]> => {
    if (keyword) {
      return  this.site.getDestinationList(keyword)
        .map((res: any) => {
          return res;
        });
    } else {
      return Observable.of([]);
    }
  }

}
