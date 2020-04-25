import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { SiteService } from 'src/app/shared/services/site.service';
import { MetaService } from 'src/app/shared/services/meta.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { routerTransition } from 'src/app/router.animations';
declare var moment: any

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
  animations: [routerTransition()]
})
export class BillingComponent implements OnInit {

  loading = false;
  pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
  billing_data: any = [];

  constructor(
    private toastr: ToastrService,
    public site: SiteService
  ) {
  }

  ngOnInit() {
    this.fetchReport();

  }

  fetchReport() {
    this.loading = true;
    this.site.getBillingRecords().subscribe((res: any) => {
        this.loading = false;

        res.forEach(element => {
          element.billdate = element.billdate === 'Invalid date' ? '--' : element.billdate;
        });


        this.billing_data = res;

        this.billing_data.forEach(element => {
          element.billdate = moment(element._id.billdate).format('DD/MM/YYYY');
        });

        console.log(this.billing_data);
      },
      err => {
        this.loading = false;
      }
    );
  }

  delete(data) {
    console.log('Bill Data >>>>', data);

    const obj = {
      bill_no: data._id.billno,
      branch: data._id.site
    };

    const bill_obj = {
      bill_no: data._id.billno,
      site: data._id.site,
      accountname: data._id.accountname
    };

    const conf = confirm('Are you sure you want to delete this record ?');

    if (conf === true) {
      // this.loading = true;
      // this.loading = true;

      this.site.deleteLedgerByBillNumber(obj).subscribe(res => {
        this.site.deleteBillByNumber(bill_obj).subscribe(res => {
          this.fetchReport();
          this.toastr.success('Bill deleted successfully.');
          // this.loading = false;
        }, err => {
          console.log('err >', err);
          this.toastr.error('Something went wrong.');
          this.loading = false;
        });
      }, err => {
        console.log('err >', err);
        this.toastr.error('Something went wrong.');
        this.loading = false;
      });
    }
  }
}
