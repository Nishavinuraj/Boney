import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountsService } from 'src/app/shared/services/accounts.service';
import { routerTransition } from 'src/app/router.animations';
import { MetaService } from 'src/app/shared/services/meta.service';

@Component({
  selector: 'app-trial-balance',
  templateUrl: './trial-balance.component.html',
  styleUrls: ['./trial-balance.component.scss'],
  animations: [routerTransition()]
})
export class TrialBalanceComponent implements OnInit {

    sites;
    trialBalances = [];
    filterForm: FormGroup;
    loading = false;
    filters = {
        site_name: '',
        start_date: '',
        end_date: '',
        page: 0
    };
    pagination = {total: 0, currenPage: 1, pageSize: 50, maxSize: 10};
    totalDr = 0;
    totalCr = 0;
    loaded = true;
    site_name: any;
    usertype: any;

    constructor(
        private formBuilder: FormBuilder,
        public toastr: ToastrService,
        public accountService: AccountsService,
        public meta: MetaService
    ) {

        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;

        this.filterForm = this.formBuilder.group({
            site_name: ['', Validators.required],
            start_date: [''],
            end_date: ['']
        });
    }

    ngOnInit() {
        this.getSites();
        // this.fetchReport();
    }

    getSites() {
        this.meta.getSites().subscribe((res: any) => {
            this.sites = res;
            if (this.usertype === 'ADMIN') {
                this.filterForm.controls['site_name'].setValue(this.sites[0].branch_name);
            } else {
                this.filterForm.controls['site_name'].setValue(this.site_name);
            }
        }, err => {

        });
    }

    resetFilters() {
        this.filterForm.get('start_date').setValue('');
        this.filterForm.get('end_date').setValue('');
        this.filters = {
            site_name: '',
            start_date: '',
            end_date: '',
            page: 0
        };
        this.fetchReport();
    }

    fetchReport() {

        let startDt = '';
        let endDt = '';

        if (this.filterForm.controls['site_name'].value) {
            this.filters.site_name = this.filterForm.controls['site_name'].value;
        } else {
            this.filters.site_name = '';
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
        this.trialBalances = [];
        this.accountService.getTrialBalance(this.filters).subscribe((res: any) => {
            this.loading = false;
            this.loaded = true;
            res.result.forEach(element => {
                this.totalDr = this.totalDr + element.dr;
                this.totalCr = this.totalCr + element.cr;
            });

            this.trialBalances = res.result;
            // this.pagination.total = res.total;
        }, err => {
            this.loaded = true;
            this.loading = false;
        });

    }
}
