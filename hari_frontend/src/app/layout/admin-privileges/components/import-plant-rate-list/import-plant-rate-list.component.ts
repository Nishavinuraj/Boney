import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/shared/services/meta.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminPrivilegesService } from 'src/app/shared/services/admin-privileges.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-import-plant-rate-list',
  templateUrl: './import-plant-rate-list.component.html',
  styleUrls: ['./import-plant-rate-list.component.scss']
})
export class ImportPlantRateListComponent implements OnInit {

  filterForm: FormGroup;
    sites: any = [];
    companies: any = [];
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

        console.log('>>>>>SItename', this.site_name);

        // Filter form control
        this.filterForm = this.formBuilder.group({
            name: [''],
            site: [''],
            status: ['Active'],
            rateby: ['SPI']
        });
        this.getSites();
        this.getCompanies();
    }

    ngOnInit() {
    }

    // getSites() {
    //     this.meta.getSites().subscribe(res => {
    //         this.sites = res;
    //         if (this.usertype === 'ADMIN') {
    //             this.filterForm.controls['site'].setValue(this.sites[0].branch_name);
    //         } else {
    //           this.filterForm.controls['site'].setValue(this.site_name);
    //         }
    //     }, err => {
    //         // on error
    //     });
    // }

    getSites() {
        this.meta.getallSites().subscribe(siteInfo => {
            this.sites = siteInfo;
          });
    }

    getCompanies() {
        this.meta.getPartyNames().subscribe(res => {
            this.companies = res;
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
        d.append('name', this.filterForm.value.name);
        d.append('site', this.filterForm.value.site);
        d.append('status', this.filterForm.value.status);
        d.append('rateby', this.filterForm.value.rateby);

        this.Admin.importPlantRateList(d).subscribe(res => {
            this.toastr.success('Imported successfully.');
            this.shown = false;
            this.file = '';
            this.filterForm.controls['name'].setValue('');
        }, err => {
            this.toastr.error('Something went wrong when importing.');
            this.shown = false;
            this.file = '';
        });
    }

}
