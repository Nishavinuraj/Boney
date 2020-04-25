import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { MetaService } from 'src/app/shared/services/meta.service';
import { SiteService } from 'src/app/shared/services/site.service';
declare var moment: any;
import { NgbModal, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TruckTyreMasterService } from 'src/app/shared/services/truck-tyre-master.service';

@Component({
  selector: 'app-principle-billing',
  templateUrl: './principle-billing.component.html',
  styleUrls: ['./principle-billing.component.scss'],
  animations: [routerTransition()]
})
export class PrincipleBillingComponent implements OnInit {

  constructor(
    public api: ApiService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public site: SiteService,
    public meta: MetaService,
    private modalService: NgbModal,
    public router: Router,
    public metaService: MetaService,
    public calendar: NgbCalendar
  ) {

    this.usertype = this.meta.getSiteFromStorage().role;
    this.site_name = this.meta.getSiteFromStorage().site;

    // Filter form control
    this.filterForm = this.formBuilder.group({
      site: [''],
      bill_date: [''],
      consigner: [''],
      from_date: [''],
      to_date: ['']
    });

    // Create or Save form control
    this.createBillForm = this.formBuilder.group({
      billing_no: [''],
      bill_date: [''],
      billing_name: [''],
      billing_address: ['']
    });

    //// Edit modal form controls
    this.editForm = this.formBuilder.group({
      l_chrge: [0],
      ul_chrge: [0],
      h_days: [0],
      h_amt: [0],
    });

    // GSt form controls
    this.gstForm = this.formBuilder.group({
      sgst: [0],
      cgst: [0],
      igst: [0]
    });
  }

  loading = false;
  filterForm: FormGroup;
  gstForm: FormGroup;
  editForm: FormGroup;
  createBillForm: FormGroup;
  filters = {
    site: '',
    // bill_date: '',
    consigner: '',
    start_date: '',
    end_date: '',
    page: 0
  };
  pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
  sites: any = [];
  parties: any = [];
  billing_data: any = [];
  cgstGstPercentage: any = 0;
  sgstGstPercentage: any = 0;
  igstGstPercentage: any = 0;
  grandTotal = 0; // final amount including gst
  sgst: number;
  cgst: number;
  subTotal = 0; //
  igst: number;

  // used for modal total
  obj: any = {
    total: 0
  };
  site_name: any;
  usertype: any;

  search_sites;
  billNewAmount: number;

  ngOnInit() {

    this.createBillForm.controls['bill_date'].setValue(this.calendar.getToday());

    // this.getSites();
    // this.getPartyName();
    // this.getBillNo();
    this.calculateTotalBillAmount();
  }

  sgstChange() {
    this.sgst = this.gstForm.controls['sgst'].value;
    this.calculateSgstPercentage(this.sgst, this.subTotal);
  }

  cgstChange() {
    this.cgst = this.gstForm.controls['cgst'].value;
    this.calculateCgstPercentage(this.cgst, this.subTotal);
  }

  igstChange() {
    this.igst = this.gstForm.controls['igst'].value;
    this.calculateIgstPercentage(this.igst, this.subTotal);
  }

  calculateSgstPercentage(percentage, totalValue) {
    this.sgstGstPercentage = (totalValue * percentage) / 100;
    this.calculateTotalBillAmount();
  }

  calculateCgstPercentage(percentage, totalValue) {
    this.cgstGstPercentage = (totalValue * percentage) / 100;
    this.calculateTotalBillAmount();
  }

  calculateIgstPercentage(percentage, totalValue) {
    this.igstGstPercentage = (totalValue * percentage) / 100;
    this.calculateTotalBillAmount();
  }

  // Final total bill amount with gst%
  calculateTotalBillAmount() {
    let subTotal = 0;
    this.billing_data.forEach(d => {
      if (d.selected) {
        subTotal += d.total;
      }
    });
    this.subTotal = subTotal;
    this.grandTotal = this.subTotal  +  this.sgstGstPercentage + this.igstGstPercentage + this.cgstGstPercentage;
  }

  onFilterChange() {
    this.fetchReport();
  }

  onSelectRecord(b) {
    console.log('b >>', b);
    b.selected = !b.selected;
    this.calculateTotalBillAmountWithGST();
  }

  calculateTotalBillAmountWithGST() {
    let subTotal = 0;
    this.billing_data.forEach(d => {
      if (d.selected) {
        subTotal += d.total;
      }
    });
    this.subTotal = subTotal;

    if (this.sgst) {
      this.sgstGstPercentage = (this.subTotal * this.sgst) / 100;
    }
    if (this.cgst) {
      this.cgstGstPercentage = (this.subTotal * this.cgst) / 100;
    }
    if (this.igst) {
      this.igstGstPercentage = (this.subTotal * this.igst) / 100;
    }
    this.grandTotal = this.subTotal  +  this.sgstGstPercentage + this.igstGstPercentage + this.cgstGstPercentage;
  }

  fetchReport() {
    this.loading = true;
    this.filters.page = this.pagination.currenPage;
    const billDate = '';
    let fromDate = '';
    let toDate = '';

    // if (this.filterForm.controls['bill_date'].value) {
    //   billDate = this.filterForm.controls['bill_date'].value.year + '-' +
    //     this.filterForm.controls['bill_date'].value.month + '-' +
    //     this.filterForm.controls['bill_date'].value.day;
    // } else {
    //     billDate = '';
    // }

    if (this.filterForm.controls['from_date'].value) {
      fromDate = this.filterForm.controls['from_date'].value.year + '-' +
        this.filterForm.controls['from_date'].value.month + '-' +
        this.filterForm.controls['from_date'].value.day;
    } else {
        fromDate = '';
    }

    if (this.filterForm.controls['to_date'].value) {
      toDate = this.filterForm.controls['to_date'].value.year + '-' +
        this.filterForm.controls['to_date'].value.month + '-' +
        this.filterForm.controls['to_date'].value.day;
    } else {
        toDate = '';
    }


    const siteRow = this.filterForm.controls['site'].value;
    const siteName = siteRow.name ? siteRow.name : '';

    if (siteName) {
      this.filters.site = siteName;
    } else {
      this.filters.site = '';
    }

    const consignerNameRow = this.filterForm.controls['consigner'].value;
    const consignerName = consignerNameRow.accountname ? consignerNameRow.accountname : '';

    if (consignerName) {
      this.filters.consigner = consignerName;
    } else {
      this.filters.consigner = '';
    }

    // this.filters.bill_date = billDate;
    this.filters.start_date = fromDate;
    this.filters.end_date = toDate;

    this.site.getRecords(this.filters).subscribe((res: any) => {
        this.loading = false;
        res.forEach(element => {
          element.selected = false;
          element.lrdate = !element.lrdate ? '--' : moment(element.lrdate).format('YYYY-MM-DD');
          element.total = Number(element.newamount);
          this.subTotal += element.newamount;
        });

        this.billing_data = res;
        this.calculateTotalBillAmount();
        this.getBillNo();
        // this.pagination.total = res.total;
      },
      err => {
        this.loading = false;
      }
    );
  }

  getSites() {
    this.loading = true;
    this.meta.getSites().subscribe(
      res => {
        this.loading = false;
        this.sites = res;
        if (this.usertype === 'ADMIN') {
          this.filterForm.controls['site'].setValue(this.sites[0].branch_name);
        } else {
            this.filterForm.controls['site'].setValue(this.site_name);
        }
      },
      err => {
        this.loading = false;
      }
    );
  }

  getBillNo() {
    this.loading = true;


    const siteRow = this.filterForm.controls['site'].value;
    const siteName = siteRow.name ? siteRow.name : '';
    const consignerNameRow = this.filterForm.controls['consigner'].value;
    const consignerName = consignerNameRow.accountname ? consignerNameRow.accountname : '';


    this.site.getBillNo(siteName, consignerName).subscribe((res: any) => {
      this.loading = false;
      const val = res.max_billno;
      if (val) {
        this.createBillForm.controls['billing_no'].setValue(val);
      } else {
        const newValue = 1;
        this.createBillForm.controls['billing_no'].setValue(newValue.toString());
      }
      },      err => {
        this.loading = false;
      }
    );
  }

  getPartyName() {
    this.loading = true;
    this.meta.getPartyNames().subscribe(
      res => {
        this.loading = false;
        this.parties = res;
      },
      err => {
        this.loading = false;
      }
    );
  }

  edit(content, index) {
    this.billNewAmount = this.billing_data[index].newamount;
    this.obj.total = this.billNewAmount;
    const modalRef = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});

    // Modal result
    modalRef.result.then((res) => {
      this.billing_data[index].l_chrge = res.l_chrge;
      this.billing_data[index].ul_chrge = res.ul_chrge;
      this.billing_data[index].h_days = res.h_days;
      this.billing_data[index].h_amt = res.h_amt;
      this.billing_data[index].total = this.billing_data[index].newamount  + res.l_chrge + res.ul_chrge + res.h_amt;
      this.calculateTotalBillAmount();
      this.toastr.success('Bill detail updated successfully.');
    }, (reason) => {
      console.log('>>>>>>>>>>>>>', reason);
    });
  }

  changeLChargeModalValue() {
    // Total of load, unload and hamount = total bill amount for modal
    this.obj.total = this.editForm.controls['l_chrge'].value + this.editForm.controls['ul_chrge'].value +
    this.editForm.controls['h_amt'].value + this.billNewAmount;
    this.calculateTotalBillAmount();
  }

  changeUlChargeModalValue() {
    // Total of load, unload and hamount = total bill amount for modal
    this.obj.total = this.editForm.controls['l_chrge'].value + this.editForm.controls['ul_chrge'].value +
    this.editForm.controls['h_amt'].value + this.billNewAmount;
    this.calculateTotalBillAmount();
  }

  changeHamtModalValue() {
    // Total of load, unload and hamount = total bill amount for modal
    this.obj.total = this.editForm.controls['l_chrge'].value + this.editForm.controls['ul_chrge'].value +
    this.editForm.controls['h_amt'].value + this.billNewAmount;
    this.calculateTotalBillAmount();
  }

  // Search query for tyre no list
  searchPartyName = (keyword: any): Observable<any[]> => {
    if (keyword) {
      return this.metaService.getSearchPartyNames(keyword).map((res: any) => {
        return res;
      });
    } else {
      return Observable.of([]);
    }
  }

  searchSite = (keyword: any): Observable<any[]> => {
    if (keyword) {
      return this.metaService.getSearchSite(keyword).map((res: any) => {
        return res;
      });
    } else {
      return Observable.of([]);
    }
  }

  save() {
    let billDate;
    if (this.createBillForm.controls['bill_date'].value) {
      const dt = this.createBillForm.controls['bill_date'].value.year + '-' +
        this.createBillForm.controls['bill_date'].value.month + '-' +
        this.createBillForm.controls['bill_date'].value.day;
      billDate = moment(dt, 'YYYY-MM-DD').format();

    } else {
      billDate = moment().format();
    }

    const siteRow = this.filterForm.controls['site'].value;
    const siteName = siteRow.name ? siteRow.name : '';
    const consignerNameRow = this.filterForm.controls['consigner'].value;
    const consignerName = consignerNameRow.accountname ? consignerNameRow.accountname : '';

    this.billing_data.forEach(element => {
      if (element.selected) {
        element.billno = this.createBillForm.controls['billing_no'].value.toString();
        element.billdate = billDate;
        element.site = siteName;
        element.accountname = consignerName;
        element.billname = this.createBillForm.controls['billing_name'].value;
        element.billadr = this.createBillForm.controls['billing_address'].value;
        element.description = element.contains;
        element.weightkg = element.actualweight;
        element.tbbamount = element.newamount;
        element.load = element.l_chrge ? element.l_chrge : 0;
        element.unload = element.ul_chrge ? element.ul_chrge : 0;
        element.haltamt = element.h_amt ? element.h_amt : 0;
        element.haltdays = element.h_days ? element.h_days : 0;
        element.bill_subTotal = this.subTotal ? this.subTotal : 0;
        element.bill_cgst = this.gstForm.controls['cgst'].value;
        element.bill_sgst = this.gstForm.controls['sgst'].value;
        element.bill_igst = this.gstForm.controls['igst'].value;
        element.bill_total = this.grandTotal ? this.grandTotal : 0;
        // element.total_bill_amount = this.totalBillAmount;
        delete element._id;
      }
    });

    localStorage.setItem('cgst', this.cgstGstPercentage);
    localStorage.setItem('sgst', this.sgstGstPercentage);
    localStorage.setItem('igst', this.igstGstPercentage);

    this.loading = true;
    const final_data = JSON.parse(JSON.stringify(this.billing_data));
    for (let i = final_data.length - 1; i >= 0; i--) {
      if (!final_data[i].selected) {
        final_data.splice(i, 1);
      }
    }

    // final_data.forEach(element => {
    //   element.lrno = Number(element.lrno);
    // });
    // console.log(final_data);
    // return;





    this.site.getConsignorCity(consignerName).subscribe((res: any) => {
      // console.log('getConsignorCity  >>>>>', res.bstate);
      const consignerState = res.bstate;
      const accountLedgers = [];
      const billingNo = this.createBillForm.controls['billing_no'].value;
      const date = new Date();
      const todayDate = moment(date).format('YYYY-MM-DD');


      const credit = {
        'branch': siteName,
        'accountname': consignerName + ' UNBILLED A/C.',
        'avouno': billingNo,
        'arefno': 'Bill No ' + billingNo,
        'adoctp': 'pbill',
        'adebtamt': '0',
        'acrdtamt': this.subTotal.toString(),
        'avoudt': billDate
      };
      accountLedgers.push(credit);

      const debit = {
        'branch': siteName,
        'accountname': consignerName + ' BILL A/C.',
        'avouno': billingNo,
        'arefno': 'Bill No ' + billingNo,
        'adoctp': 'pbill',
        'adebtamt': this.grandTotal.toString(),
        'acrdtamt': '0',
        'avoudt': billDate
      };
      accountLedgers.push(debit);
      // this.subTotal = subTotal;
      // this.grandTotal;

      if (this.cgst) {

        const cgstCredit = {
          'branch': siteName,
          'accountname': 'CGST OUTWARD @' + this.cgst + '% ' + consignerState,
          'avouno': billingNo,
          'arefno': 'Bill No ' + billingNo + ' ' + consignerName,
          'adoctp': 'pbill',
          'adebtamt': '0',
          'acrdtamt': this.cgstGstPercentage.toString(),
          'avoudt': billDate
        };
        accountLedgers.push(cgstCredit);

      }
      if (this.sgst) {

        const sgstCredit = {
          'branch': siteName,
          'accountname': 'SGST OUTWARD @' + this.sgst + '% ' + consignerState,
          'avouno': billingNo,
          'arefno': 'Bill No ' + billingNo + ' ' + consignerName,
          'adoctp': 'pbill',
          'adebtamt': '0',
          'acrdtamt': this.sgstGstPercentage.toString(),
          'avoudt': billDate
        };
        accountLedgers.push(sgstCredit);

      }
      if (this.igst) {

        const igstCredit = {
          'branch': siteName,
          'accountname': 'IGST OUTWARD @' + this.igst + '% ' + consignerState,
          'avouno': billingNo,
          'arefno': 'Bill No ' + billingNo + ' ' + consignerName,
          'adoctp': 'pbill',
          'adebtamt': '0',
          'acrdtamt': this.igstGstPercentage.toString(),
          'avoudt': billDate
        };
        accountLedgers.push(igstCredit);

      }

      this.site.principleBillingPosting(accountLedgers).subscribe((res: any) => {
        this.site.saveRecord(final_data).subscribe(res => {
          this.toastr.success('Billing data saved successfully.');
          this.router.navigate(['/site-management/billing']);
          this.loading = false;
        }, err => {
          console.log('>>>>>>>>>err', err);
          this.toastr.error('Something went wrong.');
          this.loading = false;
        });
      }, err => {
        console.log('>>>>>>>>>err', err);
        this.toastr.error('Something went wrong.');
        this.loading = false;
      });
    }, err => {
      console.log('>>>>>>>>>err', err);
      this.toastr.error('Something went wrong.');
      this.loading = false;
    });
  }

  changeStatus(event) {
    if (event.target.checked) {
      this.billing_data.forEach(element => {
        element.selected = true;
      });
      this.calculateTotalBillAmount();
    } else {
      console.log('event >>>>', event.target.checked);

      this.billing_data.forEach(element => {
        element.selected = false;
      });
      this.calculateTotalBillAmount();
    }
  }
}
