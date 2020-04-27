import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.service';
import { MetaService } from 'src/app/shared/services/meta.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-principal-billing-reports',
  templateUrl: './principal-billing-reports.component.html',
  styleUrls: ['./principal-billing-reports.component.scss']
})
export class PrincipalBillingReportsComponent implements OnInit {

  filterForm: FormGroup;

  constructor(
    public api: ApiService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public metaService: MetaService
  ) {}

  ngOnInit() {
    // Filter form control
    this.filterForm = this.formBuilder.group({
      site: [''],
      bill_date: [''],
      consigner: [''],
      from_date: [''],
      to_date: [''],
      bill_no: [''],
      mcu_invoice_number: [''],
      acc_invoice_number: [''],
      utcl_invoice_number: ['']
    });

    this.filterForm.controls['mcu_invoice_number'].setValue('MCU-I-');
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

  objectToQuery(params) {
    const queryString = Object.keys(params).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');

    return queryString;
  }

  printManikghar() {
    const param = {
      bill_no: this.filterForm.value.bill_no,
      site_name: this.filterForm.value.site,
      account_name: this.filterForm.value.consigner,
      invoice_no: this.filterForm.value.mcu_invoice_number
    };

    const url = environment.api_endpoint + 'billing/manikgarh_report_bill?' + this.objectToQuery(param);
    const win = window.open(url, '_blank');
    win.focus();
  }

  printACC() {
    const param = {
      bill_no: this.filterForm.value.bill_no,
      site_name: this.filterForm.value.site,
      account_name: this.filterForm.value.consigner,
      invoice_no: 'ACC0' + this.filterForm.value.acc_invoice_number + '/2019-20'
    };

    const url = environment.api_endpoint + 'billing/acc_report_bill?' + this.objectToQuery(param);
    const win = window.open(url, '_blank');
    win.focus();
  }

  printUTCL() {
    const param = {
      bill_no: this.filterForm.value.bill_no,
      site_name: this.filterForm.value.site,
      account_name: this.filterForm.value.consigner,
      invoice_no: 'NCW' + this.filterForm.value.utcl_invoice_number
    };

    const url = environment.api_endpoint + 'billing/utcl_report_bill?' + this.objectToQuery(param);
    const win = window.open(url, '_blank');
    win.focus();
  }

}
