import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InventoryService } from 'src/app/shared/services/inventory.service';
import { routerTransition } from 'src/app/router.animations';
import { MetaService } from 'src/app/shared/services/meta.service';

@Component({
  selector: 'app-mileage-report',
  templateUrl: './mileage-report.component.html',
  styleUrls: ['./mileage-report.component.scss'],
  animations: [routerTransition()]
})
export class MileageReportComponent implements OnInit {

  public truck_option: any;
  monthlyData = [];
  filterForm: FormGroup;
  loading = false;

  filters = {
      truck_no: '',
      page: 0
  };
  pagination = {total: 0, currenPage: 1, pageSize: 50, maxSize: 10};
  loaded = true;

  constructor(
      private formBuilder: FormBuilder,
      public toastr: ToastrService,
      public is: InventoryService,
      public meta: MetaService
  ) {

      this.filterForm = this.formBuilder.group({
          truck_no: [''],
      });
  }

  ngOnInit() {
      this.getOptions();
  }

  getOptions() {

    this.meta.getCompanyTruckList().subscribe(siteInfo => {
      this.truck_option = siteInfo['result'];
      console.log('>>>>Company Truck List', siteInfo['result']);
    });


}

  resetFilters() {
      this.filterForm.get('start_date').setValue('');
      this.filterForm.get('end_date').setValue('');
      this.filters = {
          truck_no: '',
          page: 0
      };
      this.fetchReport();
  }


  fetchReport() {

      if (this.filterForm.controls['truck_no'].value) {
          this.filters.truck_no = this.filterForm.controls['truck_no'].value;
      } else {
          this.filters.truck_no = '';
      }

      this.filters.page = this.pagination.currenPage;

      this.loading = true;
      this.loaded = false;
      this.monthlyData = [];
      this.is.getMilageReport(this.filters).subscribe((res: any) => {
          this.loading = false;
          this.loaded = true;
        //   res.result.forEach(element => {
        //       this.totalDr = this.totalDr + element.dr;
        //       this.totalCr = this.totalCr + element.cr;
        //   });
          this.monthlyData = res.result;
          // this.pagination.total = res.total;
      }, err => {
          this.loaded = true;
          this.loading = false;
      });

  }

}
