import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminPrivilegesService } from 'src/app/shared/services/admin-privileges.service';
import { MetaService } from 'src/app/shared/services/meta.service';
declare var moment: any
import * as momentTZ from 'moment-timezone';


@Component({
  selector: 'app-update-plant-rate-list',
  templateUrl: './update-plant-rate-list.component.html',
  styleUrls: ['./update-plant-rate-list.component.scss']
})
export class UpdatePlantRateListComponent implements OnInit {

  filterForm: FormGroup;
  sites: any = [];
  companies: any = [];
  file;
  site_name: any;
  usertype: any;
  shown = false;
  plantRateList: any = [];

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
        rateby: ['SPI'],
        date_from: [''],
        date_to: [''],
    });
    this.getSites();
    this.getCompanies();
  }

  ngOnInit() {
    this.getPlantRateList();
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

  getPlantRateList() {

      this.meta.getPlantRateList().subscribe((res: any) => {
        res.result.forEach(element => {
          element.date_from = momentTZ(element.date_from).tz('Asia/Calcutta').format('DD/MM/YYYY');
          element.date_to = momentTZ(element.date_to).tz('Asia/Calcutta').format('DD/MM/YYYY');
        });
        this.plantRateList = res.result;
        console.log('plantRateList >>>', this.plantRateList);
      }, err => {
          console.log('error', err);
      });
    }

  getSearchPlantRateList() {

    const getFormData = this.filterForm.value;
    console.log('getFormData >>>>>', getFormData);
    const Name = getFormData.name;
    const Site = getFormData.site;

    this.meta.searchPlantRateList(Name, Site).subscribe((res: any) => {
      res.result.forEach(element => {
        element.date_from = momentTZ(element.date_from).tz('Asia/Calcutta').format('DD/MM/YYYY');
        element.date_to = momentTZ(element.date_to).tz('Asia/Calcutta').format('DD/MM/YYYY');
      });
      this.plantRateList = res.result;
      console.log('plantRateList >>>', this.plantRateList);
    }, err => {
        console.log('error', err);
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

      const date = this.filterForm.value.date_from;
      const fdate = this.filterForm.value.date_to;

      const fronDate = date.year + '-' + date.month + '-' + date.day;
      const toDate = fdate.year + '-' + fdate.month + '-' + fdate.day;

      d.append('file', this.file);
      d.append('name', this.filterForm.value.name);
      d.append('site', this.filterForm.value.site);
      d.append('status', this.filterForm.value.status);
      d.append('rateby', this.filterForm.value.rateby);
      d.append('date_from', fronDate);
      d.append('date_to', toDate);

      this.Admin.updatePlantRateList(d).subscribe(res => {
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
