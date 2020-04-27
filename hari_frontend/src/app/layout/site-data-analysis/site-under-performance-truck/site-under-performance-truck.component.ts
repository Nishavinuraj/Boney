import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/shared/services/meta.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { ReportsService } from 'src/app/shared/services/reports.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-site-under-performance-truck',
  templateUrl: './site-under-performance-truck.component.html',
  styleUrls: ['./site-under-performance-truck.component.scss']
})
export class SiteUnderPerformanceTruckComponent implements OnInit {
  model = 'all'
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
      tyre: '',
      year: '',
      month: ''
  };

  resetFilters(){
    this.filterForm.setValue({
      site_name: '',
      site: '',
      tyre: '',
      year:'',
      month:''
  })
  }

  constructor( public api: ApiService,
    public meta: MetaService,
    private formBuilder: FormBuilder,
    public reportService: ReportsService,
    public toastr: ToastrService) {
      this.usertype = this.meta.getSiteFromStorage().role;

      this.filterForm = this.formBuilder.group({
        site_name: [''],

        tyre: [''],
        year: [''],
        month: ['']
    });
    this.getSites();

     }

     doFilter(value){
       this.model = value
       this.dataFilter = [];
       if(value=='all'){
         this.dataFilter = this.data
       } else if(value=='up'){
         var df = [];
         this.data.forEach(r => {
            if(r.value=="Under Performance"){
              df.push(r);
            }
         });
         this.dataFilter = df
       } else if(value=='exc'){
        var df = [];
        this.data.forEach(r => {
           if(r.value=="Excellent"){
             df.push(r);
           }
        });
        this.dataFilter = df
      }
     }


     fetchReport(){
       this.model = 'all'
      this.loading = true;
      this.filters.site = this.filterForm.value.site_name;
      this.filters.tyre = this.filterForm.value.tyre;
      this.filters.year = this.filterForm.value.year ?this.filterForm.value.year : new Date().getFullYear();
      this.filters.month = this.filterForm.value.month ?this.filterForm.value.month : new Date().getMonth();
      this.data = [];
      this.dataFilter = [];
      this.reportService.getUnderPerformanceTruckReportSite(this.filters).subscribe(res=>{
        this.data = res;
        this.dataFilter = res;
        this.loading = false;
      })
     }

  ngOnInit() {
    
  }

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
