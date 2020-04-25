import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/shared/services/site.service';
import { routerTransition } from 'src/app/router.animations';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var moment: any
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.scss'],
  animations: [routerTransition()]
})
export class BillDetailsComponent implements OnInit {

  constructor(
    public site: SiteService,
    public activedRoute: ActivatedRoute,
    public toastr: ToastrService,
    public fb: FormBuilder,
  ) {
    this.activedRoute.params.subscribe(params => {
      this.bill_no = params.billno;
      this.site_name = params.site;
      this.account_name = params.accountname;
    });

    this.editForm = this.fb.group({
      lchrg: [''],
      ulchrg: [''],
      hdays: [''],
      hamt: [''],
    });
   }

  editForm: FormGroup;
  loading = false;
  billing_data: any = [];
  bill_no;
  site_name;
  account_name;
  cgst: any;
  sgst: any;
  igst: any;
  total = 0;
  totalBillAmount: number;
  editing = false;
  grandTotal = 0; // final amount including gst
  subTotal = 0;
  billNewAmount;
  cgstGstPercentage: any = 0;
  sgstGstPercentage: any = 0;
  igstGstPercentage: any = 0;

  ngOnInit() {
    this.fetchReport();

    // this.cgst = JSON.parse(localStorage.getItem('cgst'));
    // this.sgst = JSON.parse(localStorage.getItem('sgst'));
    // this.igst = JSON.parse(localStorage.getItem('igst'));
  }

  fetchReport() {
    this.loading = true;
    this.site.getBillNumberData(this.bill_no, this.site_name, this.account_name).subscribe((res: any) => {
        this.loading = false;
        res.forEach(element => {
          element.lr_date = moment(element.lr_date).format('DD/MM/YYYY');
          element.editing = false;
          this.total += element.bill_amt;
        });
        this.billing_data = res;


        if (this.billing_data[0]) {
          const perSGST = this.billing_data[0].sgst;
          const perCGST = this.billing_data[0].cgst;
          const perIGST = this.billing_data[0].igst;

          this.cgstGstPercentage = perCGST;
          this.sgstGstPercentage = perSGST;
          this.igstGstPercentage = perIGST;

          this.sgst = (this.total * perSGST) / 100;
          this.igst = (this.total * perIGST) / 100;
          this.cgst = (this.total * perCGST) / 100;

          this.totalBillAmount = this.total + this.sgst + this.igst + this.cgst;

        } else {
          this.totalBillAmount = this.total;
        }

      },
      err => {
        this.loading = false;
      }
    );
  }

  delete(data, index) {

    const obj = {
      bill_no: data[index].bill_no,
      lr_no: data[index].lr_no
    };

    const conf = confirm('Are you sure you want to delete this record ?');

    if (conf === true) {
      this.loading = true;
      this.site.deleteRecord(obj).subscribe(res => {
        // this.cgst = JSON.parse(localStorage.getItem('cgst'));
        // this.sgst = JSON.parse(localStorage.getItem('sgst'));
        // this.igst = JSON.parse(localStorage.getItem('igst'));
        this.total = 0;
        this.fetchReport();
        this.toastr.success('Bill deleted successfully.');
        // this.loading = false;
      }, err => {
        this.toastr.error('Something went wrong.');
        this.loading = false;
      });
    }
  }

  edit(data) {
    data.editing = true;
    this.billNewAmount = data.tbb_amount;
    this.editForm.controls['lchrg'].setValue(data.lchrg);
    this.editForm.controls['ulchrg'].setValue(data.ulchrg);
    this.editForm.controls['hdays'].setValue(data.hdays);
    this.editForm.controls['hamt'].setValue(data.hamt);
  }

  cancel(data) {
    data.editing = false;
  }

  update(data) {

    const obj = {
      load: this.editForm.value.lchrg,
      unload: this.editForm.value.ulchrg,
      haltdays: this.editForm.value.hdays,
      haltamt: this.editForm.value.hamt,
    };

    const ledger_obj = {
      bill_no: data.bill_no,
      branch: this.site_name
    };

    const siteName = this.site_name;
    const consignerName = this.account_name;

    console.log('Bill no >>>>', data.bill_no);
    console.log('Lr no >>>>', data.lr_no);
    console.log('obj >>>>', obj);


    this.loading = true;
    this.site.deleteLedgerByBillNumber(ledger_obj).subscribe(res => {               // ------------- Delete old account ledger posting.

      this.site.getConsignorCity(consignerName).subscribe((res: any) => {           // ------------- Get Consignor City.
        // console.log('getConsignorCity  >>>>>', res.bstate);
        const consignerState = res.bstate;
        const accountLedgers = [];
        const billingNo = data.bill_no;
        this.grandTotal = this.totalBillAmount;
        this.subTotal = this.total;
        const billDate = moment(data.bill_date, 'YYYY-MM-DD').format();

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

        this.site.principleBillingPosting(accountLedgers).subscribe((res: any) => {                // ------------- Add Account Ledger Posting

          this.site.updateBillByLrNo(data.bill_no, data.lr_no, obj).subscribe((res: any) => {      // --------------- Update Bill by billno and lrno
            this.loading = false;
            data.editing = false;
            data.lchrg = this.editForm.value.lchrg;
            data.ulchrg = this.editForm.value.ulchrg;
            data.hdays = this.editForm.value.hdays;
            data.hamt = this.editForm.value.hamt;
            data.bill_amt = this.billNewAmount + this.editForm.value.lchrg + this.editForm.value.ulchrg + this.editForm.value.hamt;
            this.toastr.success('Bill updated successfully.');
          }, err => {
            this.loading = false;
            data.editing = false;
            this.toastr.error('Something went wrong.');
            console.log('>>>>>>err', err);
          });

        }, err => {
          this.loading = false;
          data.editing = false;
          this.toastr.error('Something went wrong.');
          console.log('>>>>>>err', err);
        });

      }, err => {
        this.loading = false;
        data.editing = false;
        this.toastr.error('Something went wrong.');
        console.log('>>>>>>err', err);
      });

    }, err => {
      this.loading = false;
      data.editing = false;
      this.toastr.error('Something went wrong.');
      console.log('>>>>>>err', err);
    });
  }

  changeLChargeModalValue(data) {

    data.bill_amt = this.editForm.controls['lchrg'].value + this.editForm.controls['ulchrg'].value +
    this.editForm.controls['hamt'].value + this.billNewAmount;

    this.total = 0;
    this.billing_data.forEach(element => {
      this.total += element.bill_amt;
    });

    this.cgst = (this.total * this.cgstGstPercentage) / 100;
    this.sgst = (this.total * this.sgstGstPercentage) / 100;
    this.igst = (this.total * this.igstGstPercentage) / 100;

    this.totalBillAmount = this.total + this.sgst + this.igst + this.cgst;

  }

  changeUlChargeModalValue(data) {

    data.bill_amt = this.editForm.controls['lchrg'].value + this.editForm.controls['ulchrg'].value +
    this.editForm.controls['hamt'].value + this.billNewAmount;

    this.total = 0;
    this.billing_data.forEach(element => {
      this.total += element.bill_amt;
    });

    this.cgst = (this.total * this.cgstGstPercentage) / 100;
    this.sgst = (this.total * this.sgstGstPercentage) / 100;
    this.igst = (this.total * this.igstGstPercentage) / 100;

    this.totalBillAmount = this.total + this.sgst + this.igst + this.cgst;

  }

  changeHamtModalValue(data) {

    data.bill_amt = this.editForm.controls['lchrg'].value + this.editForm.controls['ulchrg'].value +
    this.editForm.controls['hamt'].value + this.billNewAmount;

    this.total = 0;
    this.billing_data.forEach(element => {
      this.total += element.bill_amt;
    });

    this.cgst = (this.total * this.cgstGstPercentage) / 100;
    this.sgst = (this.total * this.sgstGstPercentage) / 100;
    this.igst = (this.total * this.igstGstPercentage) / 100;

    this.totalBillAmount = this.total + this.sgst + this.igst + this.cgst;
  }
}
