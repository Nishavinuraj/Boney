import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { MetaService } from 'src/app/shared/services/meta.service';
import { ReportsService } from 'src/app/shared/services/reports.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-site-ega-report',
  templateUrl: './site-ega-report.component.html',
  styleUrls: ['./site-ega-report.component.scss']
})
export class SiteEgaReportComponent implements OnInit {
  model = 'avg';
  // accounts = [];
  filterForm: FormGroup;
  loading = false;
  loaded = true;
  data;
  dataFilter;
  usertype: any;
  sites;
  site_name: any;
  filters = {
     site_name: '',
      site: '',
      year:'',
      month:''
  };

  doFilter(value){
    this.model = value;
    this.apply();
  }

  apply(){
    var dataFilter = []
    if(this.model=='exc'){
      this.data.forEach(report => {
          if(report.value=='Excellent'){
            dataFilter.push(report);
          }
      });
    } else if(this.model=='good'){
      this.data.forEach(report => {
        if(report.value=='Good'){
          dataFilter.push(report);
        }
      });
    } else if(this.model=='avg'){
      this.data.forEach(report => {
        if(report.value=='Average'){
          dataFilter.push(report);
        }
      });
    } else if(this.model=='all'){
      dataFilter = this.data;
    }
    this.dataFilter = dataFilter;
  }

  resetFilters(){
    this.filterForm.setValue({
      site_name: '',
      site: '',
      year:'',
      month:''
  })
  }

  fetchEgaReport(){
    this.model = 'all'
    this.loading = true;
    this.filters.site = this.filterForm.value.site_name;
    this.filters.year = this.filterForm.value.year ?this.filterForm.value.year : new Date().getFullYear();
    this.filters.month = this.filterForm.value.month ?this.filterForm.value.month : new Date().getMonth();
    this.data = [];
    this.dataFilter = [];
    this.reportService.getEgaReport(this.filters).subscribe(res=>{
      this.data = res;
      this.model = 'avg'
     this.apply();
      this.loading = false;
    })
  }

  constructor( public api: ApiService,
    public meta: MetaService,
    private formBuilder: FormBuilder,
    public reportService: ReportsService,
    public toastr: ToastrService) {
      this.usertype = this.meta.getSiteFromStorage().role;
      this.site_name = this.meta.getSiteFromStorage().site;

      this.filterForm = this.formBuilder.group({
        site_name: [''],
        year: [''],
        month: ['']
    });

    this.getSites();

     }

  ngOnInit() {

  }

//   getSites() {
//     this.meta.getSites().subscribe((res: any) => {
//         this.sites = res;
//         if (this.usertype === 'ADMIN') {
//             this.filterForm.controls['site_name'].setValue('');
//         } else {
//             this.filterForm.controls['site_name'].setValue('');
//         }
//     }, err => {

//     });
// }

getSites() {
  this.meta.getSites().subscribe((res: any) => {
      this.sites = res;
      if (this.usertype === 'ADMIN') {
          this.filterForm.controls['site_name'].setValue('');
      } else {
          // this.filterForm.controls['site_name'].setValue('');
          this.filterForm.controls['site_name'].setValue(this.site_name);
      }

  }, err => {
  });
}

}
