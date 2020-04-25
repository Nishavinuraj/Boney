import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MetaService } from 'src/app/shared/services/meta.service';
import { Router } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';
declare var moment: any;

@Component({
  selector: 'app-add-diesal-ratemaster',
  templateUrl: './add-diesal-ratemaster.component.html',
  styleUrls: ['./add-diesal-ratemaster.component.scss']
})
export class AddDiesalRatemasterComponent implements OnInit {
  public drmForm: any;
  public process: string;
  public siteOptions: any;
  public vendername_options: any;
  minDate;
  site_name: any;
  usertype: any;
  loading = false;
  currSiteVname;

  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private as: AdminprivilegesService,
    private router: Router
  ) {
    this.usertype = this.metaService.getSiteFromStorage().role;
    this.site_name = this.metaService.getSiteFromStorage().site;
    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };
   }

  ngOnInit() {
    this.buildForm();
    this.getOptions();
    this.getSites();
    this.drmForm.get('site').valueChanges.subscribe(val => {
      this.drmForm.controls['vendername'].setValue(null);
      this.drmForm.patchValue({vendername: ''});
      this.generateVendername(val);
    });

  }
  public buildForm(): void {
    this.drmForm = this.fb.group(
      {
        'site': [''],
        'vendername': [''],
        'date': [{year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()}],
        'rate': [0],
      }
    );
  }

  public save() {

    console.log('Diesal Rate Save', this.drmForm.value);

    let date;
    if (this.drmForm.controls['date'].value) {
      const dt = this.drmForm.controls['date'].value.year + '-' +
        this.drmForm.controls['date'].value.month + '-' +
        this.drmForm.controls['date'].value.day;
      date = moment(dt, 'YYYY-MM-DD').format();
    } else {
      date = moment().format();
    }

    this.process = 'saving';
    let data = this.drmForm.value;
    data.date = date;
    this.as.addDrm(this.drmForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/admin-privileges/diesal-ratemaster']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }

  getSites() {
    this.loading = true;
    this.metaService.getSites().subscribe((res: any) => {
        this.loading = false;
        this.siteOptions = res;
        if (this.usertype === 'ADMIN') {
          this.drmForm.controls['site'].setValue(this.siteOptions[0].branch_name);
        } else {
          this.drmForm.controls['site'].setValue(this.site_name);
        }
      },
      err => {
        this.loading = false;
      }
    );
  }

  private getOptions() {
  }

  private generateVendername(value) {
    console.log(' generate vendername ');
//     this.as.getSitePetrolpump(value).subscribe(res=>{
//       this.currSiteVname = res;
//       this.vendername_options = [];
//       this.currSiteVname.multidest.forEach(tcm => {
//         if(this.vendername_options.map(function(e) { return e.vendername; }).indexOf(tcm.vendername)==-1){
//           this.vendername_options.push(tcm);
//         }
//       });
// /*       this.brand_option = this.currSiteVname.tcm_items;
//  */    }, error=>{

//     });

    this.metaService.getSitePetrolPump(value).subscribe(res=>{
      var sitePetrolpump = [];
      res['info'].forEach(dim => {
        sitePetrolpump.push(dim.vendername);
      });
      this.vendername_options = sitePetrolpump;
    });


}

}
