
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ReportsService } from 'src/app/shared/services/reports.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MetaService } from 'src/app/shared/services/meta.service';

@Component({
  selector: 'app-plant-rate-list-temp',
  templateUrl: './plant-rate-list-temp.component.html',
  styleUrls: ['./plant-rate-list-temp.component.scss']
})
export class PlantRateListTempComponent implements OnInit {

  filterForm: FormGroup;
  filters = { site: '' };
  all_site = { results: [] };
  rate_list_data = {};
  site_name: any;
  usertype: any;
  sites = [];

  constructor(
    public api: ApiService,
    private formBuilder: FormBuilder,
    public reportService: ReportsService,
    public meta: MetaService
  ) {

    this.usertype = this.meta.getSiteFromStorage().role;
    this.site_name = this.meta.getSiteFromStorage().site;

    this.filterForm = this.formBuilder.group({
      site: [''],
      // end_date: [0]
    });
   }

  ngOnInit() {
    this.getSites();
  }

  getDestinationBySite() {
    this.filters.site = this.filterForm.controls['site'].value;
    this.reportService.getDestinationBySite(this.filters).subscribe((res: any) => {
      this.rate_list_data = res.results[0].multidest;
      console.log(this.rate_list_data);
    });
  }

  getSites() {
    this.meta.getSites().subscribe((res: any) => {
      this.sites = res;
      if (this.usertype === 'ADMIN') {
          this.filterForm.controls['site'].setValue(this.sites[0].branch_name);
      } else {
          this.filterForm.controls['site'].setValue(this.site_name);
      }
    }, err => {
    });
  }
}
