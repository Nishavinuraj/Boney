import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/shared/services/meta.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminPrivilegesService } from 'src/app/shared/services/admin-privileges.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-import-site-truck-expense',
  templateUrl: './import-site-truck-expense.component.html',
  styleUrls: ['./import-site-truck-expense.component.scss']
})
export class ImportSiteTruckExpenseComponent implements OnInit {
    filterForm: FormGroup;
    sites: any = [];
    file;
    site_name: any;
    usertype: any;
    shown = false;

    constructor(
        public meta: MetaService,
        private formBuilder: FormBuilder,
        private Admin: AdminPrivilegesService,
        private toastr: ToastrService
    ) {

        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;

        // Filter form control
        this.filterForm = this.formBuilder.group({
            site: [''],
            status: ['Active']
        });
        this.getSites();
    }

    ngOnInit() {
    }

    getSites() {
        this.meta.getSites().subscribe(res => {
            this.sites = res;
            if (this.usertype === 'ADMIN') {
                this.filterForm.controls['site'].setValue(this.sites[0].branch_name);
            } else {
              this.filterForm.controls['site'].setValue(this.site_name);
            }
        }, err => {
            // on error
        });
    }

    onSelectCSV(event) {
        this.file = event.target.files[0];
    }

    startImport() {
        this.shown = true;
        const d = new FormData();
        d.append('file', this.file);
        d.append('site', this.filterForm.value.site);
        d.append('status', this.filterForm.value.status);
        this.Admin.importSiteTruckExpense(d).subscribe(res => {
            this.toastr.success('Imported successfully.');
            this.shown = false;
            this.file = '';
        }, err => {
            this.shown = false;
            this.file = '';
            this.toastr.error('Something went wrong when importing.');
        });
    }

}
