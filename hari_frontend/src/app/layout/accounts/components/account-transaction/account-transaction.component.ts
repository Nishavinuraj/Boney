import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MetaService } from 'src/app/shared/services/meta.service';
import { ToastrService } from 'ngx-toastr';
import { AccountsService } from 'src/app/shared/services/accounts.service';
import * as momentTZ from 'moment-timezone';

@Component({
  selector: 'app-account-transaction',
  templateUrl: './account-transaction.component.html',
  styleUrls: ['./account-transaction.component.scss']
})
export class AccountTransactionComponent implements OnInit {

  addForm: FormGroup;
  editForm: FormGroup;
  usertype: any;
  site_name: any;
  submitted = false;
  sites = [];
  accounts = [];
  transactions = [];
  loading = false;
  loaded = true;

  voucher_types = [
    { v_name: 'Receipt' },
    { v_name: 'Payment' },
    { v_name: 'Contra' },
    { v_name: 'Journal' },
    { v_name: 'Debit Note' },
    { v_name: 'Credit Note' }
  ];

  payment_types = [
    { p_name: 'Bank to Bank' },
    { p_name: 'Cash' },
    { p_name: 'Cheque' },
    { p_name: 'Credit' },
    { p_name: 'Imps' },
    { p_name: 'Internal Transfer' },
    { p_name: 'Neft' },
    { p_name: 'Rtgs' }
  ];

  againsts = [
    { a_name: 'DOCUMENT' },
    { a_name: 'EMI' },
    { a_name: 'INVESTMENT' },
    { a_name: 'MAINTENANCE' },
    { a_name: 'SALARY' },
    { a_name: 'SITE ADVANCE' },
    { a_name: 'TYRE' }
  ];

  constructor(
    public fb: FormBuilder,
    public meta: MetaService,
    public toastr: ToastrService,
    public accountService: AccountsService
  ) {}

  ngOnInit() {

    this.usertype = this.meta.getSiteFromStorage().role;
    this.site_name = this.meta.getSiteFromStorage().site;

    this.addForm = this.fb.group({
      site_name: ['', Validators.required],
      voucher_type: ['', Validators.required],
      voucher_no: [''],
      date: ['', Validators.required],
      account_head: [''],
      payment_type: ['', Validators.required],
      against: [''],
      account_name: ['', Validators.required],
      debit: [''],
      credit: [''],
      naration: ['', Validators.required]
    });

    this.editForm = this.fb.group({
      site_name: [''],
      voucher_type: [''],
      date: [''],
      account_head: [''],
      payment_type: [''],
      against: [''],
      account_name: [''],
      debit: [''],
      credit: [''],
      naration: ['']
    });

    this.getSites();
    this.getAccountName();
    this.getTransactions();
  }

  getSites() {
    this.meta.getSites().subscribe(
      (res: any) => {
        this.sites = res;
        if (this.usertype === 'ADMIN') {
          this.addForm.controls['site_name'].setValue(this.sites[0].branch_name);
        } else {
          this.addForm.controls['site_name'].setValue(this.site_name);
        }
      },
      err => {}
    );
  }

  getTransactions() {
    this.loading = true;
    this.loaded = false;
    this.accountService.getTransactions().subscribe((res: any) => {
      this.loading = false;
      this.loaded = true;

      res.result.forEach(element => {
        element.tdate = momentTZ(element.placedtime).tz('Asia/Calcutta').format('DD/MM/YYYY HH:mm:ss');
        element.editing = false;
      });

      this.transactions = res.result;
    }, err => {
      this.loading = false;
      this.loaded = true;
    });
  }

  getAccountName() {
    this.meta.getAccounts().subscribe((res: any) => {
      this.accounts = res;
      console.log('>>>>res', res);
    }, err => {
      console.log('>>>>err', err);
    });
  }

  save(isValid, formValue) {
    this.submitted = true;
    if (isValid) {

      const date = formValue.date.year + '-' + formValue.date.month +  '-' +  formValue.date.day;

      let debit: number;
      let credit: number;

      if (formValue.debit) {
        debit = formValue.debit;
      } else {
        debit = 0;
      }

      if (formValue.credit) {
        credit = formValue.credit;
      } else {
        credit = 0;
      }

      const obj = {
        'site': formValue.site_name,
        'voucher_type': formValue.voucher_type,
        'tdate': date,
        'account_head': formValue.account_head,
        'payment_type': formValue.payment_type,
        'against': formValue.against,
        'account_name': formValue.account_name,
        'debit': formValue.debit,
        'credit': formValue.credit,
        'naration': formValue.naration
        // 'voucher_no': formValue.voucher_no
      };

      this.accountService.addTransaction(obj).subscribe((res: any) => {
        this.getTransactions();
        this.addForm.reset();
        this.submitted = false;
        this.toastr.success('Tranaction added successfully.');
        this.addForm.controls['account_name'].setValue(undefined);
      }, err => {
        this.toastr.success('Something went wrong.');
      });

    }
  }

  reset() {
    this.addForm.reset();
    this.submitted = false;
  }

  edit(data) {
    data.editing = true;
    this.editForm.controls['voucher_type'].setValue(data.voucher_type);
    this.editForm.controls['payment_type'].setValue(data.payment_type);
    this.editForm.controls['naration'].setValue(data.naration);
  }

  cancel(data) {
    data.editing = false;
  }

  update(data, formValue) {

    const obj = {
      'payment_type': formValue.payment_type,
      'voucher_type': formValue.voucher_type,
      'naration': formValue.naration
    };

    this.accountService.updateTransaction(data._id, obj).subscribe((res: any) => {
      this.toastr.success('Tranaction updated successfully.');
      data.editing = false;
      data.payment_type = formValue.payment_type;
      data.voucher_type = formValue.voucher_type;
      data.naration = formValue.naration;
    }, err => {
      data.editing = false;
      this.toastr.success('Something went wrong.');
    });

  }

  delete(data, index) {

    const conf = confirm('Are you sure you want to delete this transaction?');

    if (conf === true) {
      this.accountService.deleteTransaction(data._id).subscribe((res: any) => {
        this.toastr.success('Tranaction deleted successfully.');
        this.transactions.splice(index, 1);
      }, err => {
        this.toastr.success('Something went wrong.');
      });
    }
  }
}
