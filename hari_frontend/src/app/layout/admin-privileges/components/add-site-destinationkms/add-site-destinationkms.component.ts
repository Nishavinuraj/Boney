import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MetaService } from 'src/app/shared/services/meta.service';
import { Router } from '@angular/router';
import { AdminprivilegesService } from '../adminprivileges.service';

@Component({
  selector: 'app-add-site-destinationkms',
  templateUrl: './add-site-destinationkms.component.html',
  styleUrls: ['./add-site-destinationkms.component.scss']
})
export class AddSiteDestinationkmsComponent implements OnInit {
  public sdkForm: any;
  public process: string;
  public siteOptions: any;

  constructor(
    private fb: FormBuilder,
    private metaService: MetaService,
    private as: AdminprivilegesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getOptions();
  }
  public buildForm(): void {
    this.sdkForm = this.fb.group(
      {
        'site': [''],
        'destination': [''],
        'km': [0]
      }
    );
  }

  public save() {

    console.log('Site Destination Kms Save', this.sdkForm.value);

    this.process = 'saving';
    this.as.addSdk(this.sdkForm.value).subscribe(mrInfo => {
      this.process = 'done';
      this.router.navigate(['/admin-privileges/site-destinationkms']);
    }, error => { this.process = 'done'; console.log(error);
  });
  }
  private getOptions() {
    this.metaService.getallSites().subscribe(siteInfo => {
      this.siteOptions = siteInfo;
    });

  }
}
