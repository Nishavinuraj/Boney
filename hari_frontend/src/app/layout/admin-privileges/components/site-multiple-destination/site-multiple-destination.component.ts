import { Component, OnInit } from '@angular/core';
import { AdminPrivilegesService } from 'src/app/shared/services/admin-privileges.service';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from 'src/app/router.animations';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MetaService } from 'src/app/shared/services/meta.service';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs';
import { SiteService } from 'src/app/shared/services/site.service';

@Component({
  selector: 'app-site-multiple-destination',
  templateUrl: './site-multiple-destination.component.html',
  styleUrls: ['./site-multiple-destination.component.scss'],
  animations: [routerTransition()]
})
export class SiteMultipleDestinationComponent implements OnInit {


  rows: any = [];
  siteName = '';
  editing = {};
  multiDestForm: FormGroup;
  searchForm: FormGroup;
  pagination = {total: 0, currenPage: 1, pageSize: 50, maxSize: 10};
  filters = { page: 0 };
  addExpenseForm: FormGroup;
  sites: any = [];
  destinations = [];
  typingTimer;
  loading = false;
  site_name: any;
  usertype: any;

  constructor(
    public adminService: AdminPrivilegesService,
    private activatedRoute: ActivatedRoute,
    public toastr: ToastrService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    public meta: MetaService,
    public site: SiteService
  ) {

    this.usertype = this.meta.getSiteFromStorage().role;
    this.site_name = this.meta.getSiteFromStorage().site;

    this.activatedRoute.params.subscribe(res => {
      this.siteName = res.name;
    });

    this.site_name = this.meta.getSiteFromStorage().site;

    this.multiDestForm = this.formBuilder.group({
      loading: [''],
      destination: [''],
      km: [''],
      newbhatta: [''],
      newmisc: [''],
      newtoll: [''],
      spi: [''],
      newtotal: [''],
      status: ['Active']
    });


    this.searchForm = this.formBuilder.group({
      destination: ['']
    });

    this.addExpenseForm = this.formBuilder.group({
      site: [''],
      status: ['Active'],
      destination: [''],
      spi: [''],
      km: [''],
      newtoll: [''],
      newbhatta: [''],
      loading: [''],
      newmisc: ['']
    });

    this.getSites();
  }

  getSites() {
    this.meta.getSites().subscribe(res => {
        this.sites = res;
        if (this.usertype === 'ADMIN') {
          this.addExpenseForm.controls['site'].setValue(this.sites[0].branch_name);
        } else {
          this.addExpenseForm.controls['site'].setValue(this.site_name);
        }
    }, err => {
        // on error
    });
  }

  ngOnInit() {
    this.getMultiDes();
  }

  getMultiDes() {

    this.filters.page = this.pagination.currenPage;

    const obj = {
      'site_name': this.siteName,
      'page': this.filters.page,
      'limit': 100
    };

    this.loading = true;
    this.adminService.getMultiDest(obj).subscribe((res: any) => {
      this.loading = false;
      res.results.forEach(element => {
        element.updated = false;
      });

      this.rows = res.results;
      this.pagination.total = res.total;
      this.searchForm.controls['destination'].setValue('');
    }, err => {
      this.loading = false;
      console.log('>>>>>>>>>>>>err', err);
      this.toastr.error('Something went wrong.');
    });
  }

  edit(data) {
    data.updated = !data.updated;

    // Set Form Value for edit form
    this.multiDestForm.controls['loading'].setValue(data.loading);
    this.multiDestForm.controls['destination'].setValue(data.destination);
    this.multiDestForm.controls['km'].setValue(data.km);
    this.multiDestForm.controls['newbhatta'].setValue(data.newbhatta);
    this.multiDestForm.controls['newmisc'].setValue(data.newmisc);
    this.multiDestForm.controls['newtoll'].setValue(data.newtoll);
    this.multiDestForm.controls['spi'].setValue(data.spi);
    this.multiDestForm.controls['newtotal'].setValue(data.newtotal);
    this.multiDestForm.controls['status'].setValue(data.status);
  }

  updateValue(data, index) {

    const obj = {
      id: data.id,
      multidest_id: data.multidest_id,
      loading: this.multiDestForm.value.loading,
      destination: this.multiDestForm.value.destination,
      km: this.multiDestForm.value.km,
      newbhatta: this.multiDestForm.value.newbhatta,
      newmisc: this.multiDestForm.value.newmisc,
      newtoll: this.multiDestForm.value.newtoll,
      spi: this.multiDestForm.value.spi,
      newtotal: this.multiDestForm.value.loading + this.multiDestForm.value.newbhatta + this.multiDestForm.value.newmisc + this.multiDestForm.value.newtoll,
      status: this.multiDestForm.value.status
    };

    this.adminService.updateSiteTruckExp(obj).subscribe(res => {
      this.toastr.success('Data updated successfully.');
      data.updated = false;

      // Set the value after update
      data.loading = this.multiDestForm.value.loading,
      data.destination = this.multiDestForm.value.destination,
      data.km = this.multiDestForm.value.km,
      data.newbhatta = this.multiDestForm.value.newbhatta,
      data.newmisc = this.multiDestForm.value.newmisc,
      data.newtoll = this.multiDestForm.value.newtoll,
      data.spi = this.multiDestForm.value.spi,
      data.newtotal = this.multiDestForm.value.loading + this.multiDestForm.value.newbhatta + this.multiDestForm.value.newmisc + this.multiDestForm.value.newtoll;
      data.status = this.multiDestForm.value.status;
    }, err => {
      console.log('>>>>>>>>>>>>err', err);
      this.toastr.error('Something went wrong.');
    });
  }

  refershPage() {
    this.getMultiDes();
  }

  search() {

    const obj = {
      'destination_name': this.searchForm.value.destination
    };

    this.adminService.getMultiDest(obj).subscribe((res: any) => {

      res.results.forEach(element => {
        element.updated = false;
      });

      this.rows = res.results;
      this.pagination.total = res.total;
      // this.searchForm.controls['destination'].setValue('');
    }, err => {
      console.log('>>>>>>>>>>>>err', err);
      this.toastr.error('Something went wrong.');
    });
  }

  // Add Modal
  addModal(content) {
    const modalRef = this.modalService.open(content, {
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

  onDestChange() {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      this.meta.getToDestinations(this.addExpenseForm.value.destination).subscribe((res: any) => {
      const arr = [];
        res.forEach(r => {
          arr.push(r.name);
        });

        this.destinations = arr;
      });
    }, 1000);
  }

  searchDestination = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.destinations.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )

  saveSiteTruckExpense() {
    const data = JSON.parse(JSON.stringify(this.addExpenseForm.value));
    data.loading = parseInt(data.loading, 10);
    data.km = parseInt(data.km, 10);
    data.newbhatta = parseInt(data.newbhatta, 10);
    data.newmisc = parseInt(data.newmisc, 10);
    data.newtoll = parseInt(data.newtoll, 10);
    data.spi = parseInt(data.spi, 10);
    data.newtotal = data.loading + data.newmisc + data.newbhatta + data.newtoll;

    data.multidest = {
      destination: data.destination,
      spi: data.spi,
      km: data.km,
      newtoll: data.newtoll,
      newbhatta: data.newbhatta,
      loading: data.loading,
      newmisc: data.newmisc,
      newtotal: data.newtotal
    };

    delete data.destination;
    delete data.spi;
    delete data.km;
    delete data.newtoll;
    delete data.newbhatta;
    delete data.loading;
    delete data.newmisc;
    delete data.newtotal;

    // console.log(JSON.stringify(data));

    this.adminService.addSiteTruckExpenseList(data).subscribe(res => {
      this.toastr.success('Added!');
      this.addExpenseForm.reset();
      if (this.usertype === 'ADMIN') {
        this.addExpenseForm.controls['site'].setValue(this.sites[0].branch_name);
      } else {
        this.addExpenseForm.controls['site'].setValue(this.site_name);
      }
      this.addExpenseForm.controls['status'].setValue('Active');
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
