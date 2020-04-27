import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { ApiService } from 'src/app/shared/services/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ReportsService } from 'src/app/shared/services/reports.service';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import { MetaService } from 'src/app/shared/services/meta.service';
@Component({
  selector: 'app-own-fleet-report',
  templateUrl: './own-fleet-report.component.html',
  styleUrls: ['./own-fleet-report.component.scss'],
  animations: [routerTransition()]
})
export class OwnFleetReportComponent implements OnInit {
    activeTab = 'main_report';
    years = [];
    tyres = [];
    agents = [];
    report_data = [];
    trucks = [];
    loading = false;
    filterForm: FormGroup;
    filters = {year: '', tyre: '', truck_no: '', traffic_agent: '', page: 0};
    pagination = {total: 0, currenPage: 1, pageSize: 50, maxSize: 10};
    secondary_report_data = [];
    selected_truck_number;


    constructor(
        public api: ApiService,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        public reportService: ReportsService,
        public dashboardService: DashboardService,
        public meta: MetaService
        ) {

        for (let i = 2020; i >= 2019; i--) {
            this.years.push({ year: i });
        }

        this.filterForm = this.formBuilder.group({
            year: [0],
            tyre: [0],
            truck_no: [],
            traffic_agent: [0]
        });

    }

    ngOnInit() {
        this.getTyres();
        this.getAgentList();
        this.getTrucksList();
        this.fetchReport();
    }

    getTyres() {
        this.dashboardService.getTyreList().subscribe( (res: any) => {
            this.tyres = res;
            },
            err => {}
        );
    }

    getAgentList() {
        this.meta.getTrafficAgents().subscribe((res: any) => {
            this.agents = res;
            },
            err => {}
        );
    }

    getTrucksList() {
        this.dashboardService.getTruckList().subscribe((res: any) => {
            const d = [];
            res.forEach(r => {
                d.push(r.truckno);
            });
            this.trucks = d;
            },
            err => {}
        );
    }

    resetFilters() {
        this.filterForm.get('year').setValue(0);
        this.filterForm.get('tyre').setValue(0);
        this.filterForm.get('truck_no').setValue('');
        this.filterForm.get('traffic_agent').setValue(0);
        this.filters = {year: '', tyre: '', truck_no: '', traffic_agent: '', page: 0};
        this.fetchReport();
    }


    search = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            map(term => (term.length < 2 ? [] : this.trucks.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)))
    )

    onFilterChange() {
        this.fetchReport();
    }

    fetchReport() {
        this.loading = true;
        this.filters.page = this.pagination.currenPage;

        if (this.filterForm.controls['year'].value && this.filterForm.controls['year'].value !== '0') {
            this.filters.year = this.filterForm.controls['year'].value;
        } else {
            this.filters.year = '';
        }

        if (this.filterForm.controls['tyre'].value && this.filterForm.controls['tyre'].value !== '0') {
            this.filters.tyre = this.filterForm.controls['tyre'].value;
        } else {
            this.filters.tyre = '';
        }

        if (this.filterForm.controls['truck_no'].value) {
            this.filters.truck_no = this.filterForm.controls['truck_no'].value;
        } else {
            this.filters.truck_no = '';
        }

        if (this.filterForm.controls['traffic_agent'].value && this.filterForm.controls['traffic_agent'].value !== '0') {
            this.filters.traffic_agent = this.filterForm.controls['traffic_agent'].value;
        } else {
            this.filters.traffic_agent = '';
        }

        this.reportService.getOwnFleetReport(this.filters).subscribe((res: any) => {
            this.loading = false;

            console.log(res);
            res.results.forEach(element => {
                element.net_bal = element.profit - element.maint;
            });

            this.report_data = res.results;
            this.pagination.total = res.total;
        },
            err => {
                this.loading = false;
            }
        );
    }

    onTruckSelect(t) {
        this.selected_truck_number = t.truckno;
        this.activeTab = 'secondary_report';
        this.fetchSecondaryReport();
    }

    fetchSecondaryReport() {
        this.reportService.getOwnFleetTruckReport(this.selected_truck_number).subscribe((res: any) => {
            this.loading = false;
            this.secondary_report_data = res.months;
        }, err => {
                this.loading = false;
            }
        );
    }
}
