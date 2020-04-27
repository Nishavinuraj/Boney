import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { MetaService } from 'src/app/shared/services/meta.service';
import { ReportsService } from 'src/app/shared/services/reports.service';
import { ToastrService } from 'ngx-toastr';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-monthly-balance-chart',
  templateUrl: './monthly-balance-chart.component.html',
  styleUrls: ['./monthly-balance-chart.component.scss']
})
export class MonthlyBalanceChartComponent implements OnInit {

  resetFilters(){
    this.filterForm.setValue({
      site: '',
      year:'',
  })
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
/*   public defaultXAxis = [0,0,0,0,0,0,0,0,0,0,0,0]
 */
    public barChartData: ChartDataSets[] = [
      /* { data: [65, 59, 80, 81, 56, 55, 40,80, 81, 56,65, 59], label: 'Series A', stack: 'a' },
      { data: [28, 48, 40, 19, 86, 27, 90,40, 19, 86,28, 48], label: 'Series B', stack: 'a' } */
    ];


  model = 'all';
  sites;
  // accounts = [];
  filterForm: FormGroup;
  loading = false;
  loaded = true;
  data;
  dataFilter;
  usertype: any;
  filters = {
      site: '',
      year:'',
  };

  fetchReport(){
    this.barChartData = [];
    this.filters.year = this.filterForm.value.year ? this.filterForm.value.year  : new Date().getFullYear();
    this.filters.site = this.filterForm.value.site;
    this.reportService.getMonthlyBalanceReport(this.filters).subscribe(res=>{
      this.data = res;
        var map = new Map();
        this.data.forEach(record => {
          if(!map.get(record['_id']['site'])){
            map.set(record['_id']['site'],[]);
          }
          let d = {};
          d['month'] = record['_id']['month']
          d['balance']= record['balance']
          map.get(record['_id']['site']).push(d);
        });
        if(map.size>0){
          this.processForChart(map);
        } else {
          this.barChartData.push({ data: [0,0,0,0,0,0,0,0,0,0,0,0], label: 'No Data', stack: 'a' })
        }

    })
  }

  processForChart(map){
      map.forEach((value: boolean, key: string) => {
        var stack = { data: [0,0,0,0,0,0,0,0,0,0,0,0], label: key, stack: 'a' }
          var entValues = map.get(key);
          console.log(entValues)
          entValues.forEach(entValue => {
            stack.data[parseInt(entValue['month'])-1] = parseInt(entValue['balance'])
          });
          console.log(stack);
          this.barChartData.push(stack);
      });
  }

  constructor( public api: ApiService,
    public meta: MetaService,
    private formBuilder: FormBuilder,
    public reportService: ReportsService,
    public toastr: ToastrService) {
      this.usertype = this.meta.getSiteFromStorage().role;

      this.filterForm = this.formBuilder.group({
        site: [''],
        year: ['']
    });

    this.getSites();

     }

  ngOnInit() {
    
  }

  getSites() {
    this.meta.getSites().subscribe((res: any) => {
        this.sites = res;
        if (this.usertype === 'ADMIN') {
            this.filterForm.controls['site_name'].setValue('');
        } else {
            this.filterForm.controls['site_name'].setValue('');
        }
    }, err => {

    });
}

}
