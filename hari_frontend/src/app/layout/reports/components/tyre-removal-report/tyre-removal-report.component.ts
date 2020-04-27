import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InventoryService } from 'src/app/shared/services/inventory.service';
import { routerTransition } from 'src/app/router.animations';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var moment: any;

@Component({
  selector: 'app-tyre-removal-report',
  templateUrl: './tyre-removal-report.component.html',
  styleUrls: ['./tyre-removal-report.component.scss'],
  animations: [routerTransition()]
})
export class TyreRemovalReportComponent implements OnInit {
public tyre_option: any;
  monthlyData = [];
  filterForm: FormGroup;
  loading = false;

  filters = {
      start_date: '',
      end_date: '',
      tyre_no: '',
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
    //   private ms: MaintenanceService,
  ) {

      this.filterForm = this.formBuilder.group({
          start_date: [''],
          end_date: [''],
          tyre_no: ['']
      });
  }

  ngOnInit() {
      this.getOptions();
  }

  getOptions() {
    this.meta.getTyreNoList().subscribe(siteInfo => {
        this.tyre_option = siteInfo['result'];
        console.log('>>>> Tyre List', siteInfo['result']);
      });

}

  resetFilters() {
      this.filterForm.get('start_date').setValue('');
      this.filterForm.get('end_date').setValue('');
      this.filters = {
          start_date: '',
          end_date: '',
          tyre_no: '',
          page: 0
      };
      this.fetchReport();
  }


  fetchReport() {
      let startDt = '';
      let endDt = '';

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

      if (this.filterForm.controls['tyre_no'].value) {
        this.filters.tyre_no = this.filterForm.controls['tyre_no'].value;
        } else {
            this.filters.tyre_no = '';
        }

      this.filters.page = this.pagination.currenPage;

      this.filters.start_date = startDt;
      this.filters.end_date = endDt;

      this.loading = true;
      this.loaded = false;
      this.monthlyData = [];
      this.is.getTyreRemovalReport(this.filters).subscribe((res: any) => {
          this.loading = false;
          this.loaded = true;
          res.result.forEach(element => {
            element.date_of_fitment = moment(element.date_of_fitment, 'YYYY-MM-DD').format('DD/MM/YYYY');
            element.rs_date = moment(element.rs_date, 'YYYY-MM-DD').format('DD/MM/YYYY');
          });

          this.monthlyData = res.result;
          // this.pagination.total = res.total;
      }, err => {
          this.loaded = true;
          this.loading = false;
      });

  }

}
