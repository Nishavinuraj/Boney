import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InventoryService } from 'src/app/shared/services/inventory.service';
// import { routerTransition } from 'src/app/router.animations';
import { MetaService } from 'src/app/shared/services/meta.service';

@Component({
  selector: 'app-dealer-wise-purchase',
  templateUrl: './dealer-wise-purchase.component.html',
  styleUrls: ['./dealer-wise-purchase.component.scss']
//   animations: [routerTransition()]

})
export class DealerWisePurchaseComponent implements OnInit {

  public vendor_option: any;
  public item_option: any;
  reportData = [];
  filterForm: FormGroup;
  loading = false;

  filters = {
      vendor: '',
      item_name: '',
      start_date: '',
      end_date: '',
      page: 0
  };
  pagination = {total: 0, currenPage: 1, pageSize: 50, maxSize: 10};
  totalDr = 0;
  totalCr = 0;
  loaded = true;

  constructor(
      private formBuilder: FormBuilder,
      public toastr: ToastrService,
      public is: InventoryService,
      public meta: MetaService
  ) {

      this.filterForm = this.formBuilder.group({
          vendor: [''],
          item_name: [''],
          start_date: [''],
          end_date: ['']
      });
  }

  ngOnInit() {
      this.getOptions();
  }

  getOptions() {

    this.meta.getmrItemList().subscribe(siteInfo => {
        this.item_option = siteInfo['result'];
        console.log('>>>>Item List', siteInfo['result']);
      });

    this.meta.getmrVendorList().subscribe(siteInfo => {
      this.vendor_option = siteInfo['result'];
      console.log('>>>>Vendor List', siteInfo['result']);
    });


}

  resetFilters() {
      this.filterForm.get('start_date').setValue('');
      this.filterForm.get('end_date').setValue('');
      this.filters = {
          vendor: '',
          item_name: '',
          start_date: '',
          end_date: '',
          page: 0
      };
      this.fetchReport();
  }


  fetchReport() {
      let startDt = '';
      let endDt = '';

      if (this.filterForm.controls['vendor'].value) {
          this.filters.vendor = this.filterForm.controls['vendor'].value;
      } else {
          this.filters.vendor = '';
      }

      if (this.filterForm.controls['item_name'].value) {
        this.filters.item_name = this.filterForm.controls['item_name'].value;
    } else {
        this.filters.item_name = '';
    }

      if (this.filterForm.controls['start_date'].value) {
          startDt = this.filterForm.controls['start_date'].value.year + '-' +
              this.filterForm.controls['start_date'].value.month + '-' +
              this.filterForm.controls['start_date'].value.day;
      } else {
          startDt = '';
      }

      if (this.filterForm.controls['end_date'].value) {
          endDt = this.filterForm.controls['end_date'].value.year + '-' +
              this.filterForm.controls['end_date'].value.month + '-' +
              (this.filterForm.controls['end_date'].value.day);
      } else {
          endDt = '';
      }

      this.filters.page = this.pagination.currenPage;

      this.filters.start_date = startDt;
      this.filters.end_date = endDt;

      this.loading = true;
      this.loaded = false;

      this.reportData = [];
      this.is.getDealerWisePurchase(this.filters).subscribe((res: any) => {
          this.loading = false;
          this.loaded = true;
          this.reportData = res.result;
      }, err => {
          this.loaded = true;
          this.loading = false;
      });
  }

}
