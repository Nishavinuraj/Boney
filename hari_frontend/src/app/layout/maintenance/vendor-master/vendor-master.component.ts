import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { NgbModal, NgbDateStruct, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from 'src/app/router.animations';
import { Observable } from 'rxjs';
import { VendorMasterEditComponent } from '../vendor-master-edit/vendor-master-edit.component';
import { MetaService } from 'src/app/shared/services/meta.service';

  // <button class="btn btn-danger" (click)="deleteVendor(list)">Delete</button>

@Component({
  selector: 'app-vendor-master',
  templateUrl: './vendor-master.component.html',
  styleUrls: ['./vendor-master.component.scss'],
  animations: [routerTransition()]
})


export class VendorMasterComponent implements OnInit {

  addForm: FormGroup;
  public process: string;
  public state_option: any;
  vendor_types = [
    {vendor_type: 'Supplier'},
    {vendor_type: 'Mistri'}
  ];

  currentRate = 0;
  vendor_master_list = [];
  filterKeys: string[] = ['name'];
  filteredData = [];
  text_filter = '';

  constructor(
    public maintenanceService: MaintenanceService,
    private formBuilder: FormBuilder,
    public toastr: ToastrService,
    private modalService: NgbModal,
    private metaService: MetaService,
    config: NgbRatingConfig,
  ) {
    config.max = 5;

  }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      name: [''],
      address: [''],
      location: [''],
      vendor_type: [''],
      specialized_in: [''],
      mobile_no: [''],
      email: [''],
      contact_person: [''],
      gst_no: [''],
      condition: [''],
      statename: [''],
      remarks: ['']
    });

    this.getOptions();
  }

  private getOptions() {

    this.maintenanceService.getVendorMasterList().subscribe((res: any) => {
      console.log('>>>>res', res);
      this.vendor_master_list = res.result;
      this.filterVendorNameData();
    }, err => {
      console.log('err   >>>', err);
    });

    this.metaService.getStateList().subscribe(trackInfo => {
      this.state_option = trackInfo['result'];
      console.log('>>>>StateIndia', trackInfo['result']);

    });
  }

  edit(record) {
    console.log('edit>>>>>', record);
    const modalRef = this.modalService.open(VendorMasterEditComponent);
    modalRef.componentInstance.data = record;

    modalRef.result.then((result) => {
      if (result) {
        this.getOptions();
      }
    });
  }

  deleteVendor(data) {
    const conf = confirm('Are you sure you want to delete this vendor ?');

    if (conf === true) {
      this.maintenanceService.deleteVendor(data._id).subscribe((res: any) => {
        this.toastr.success('Vendor Master deleted successfully.');
        this.getOptions();
      }, err => {
        console.log('err   >>>', err);
        this.toastr.error('Something went wrong when deleting vendor!');
      });
    }
  }

  getSpecializedIn = (keyword: any): Observable<any[]> => {
    if (keyword) {
      return this.maintenanceService.getSpecializedIn(keyword).map((res: any) => {
        console.log('>>>>res', res);
        return res.result;
      });
    } else {
      return Observable.of([]);
    }
  }

  getLocation = (keyword: any): Observable<any[]> => {
    if (keyword) {
      return this.maintenanceService.getLocations(keyword).map((res: any) => {
        console.log('>>>>res', res);
        return res.result;
      });
    } else {
      return Observable.of([]);
    }
  }

  getVendorType = (keyword: any): Observable<any[]> => {
    if (keyword) {
      return this.maintenanceService.getVendorType(keyword).map((res: any) => {
        console.log('>>>>res', res);
        return res.result;
      });
    } else {
      return Observable.of([]);
    }
  }

  // Search query for work to be done List
  // vendorName = (keyword: any): Observable<any[]> => {
  //   if (keyword) {
  //     return  this.maintenanceService.getVendorNameList(keyword)
  //       .map((res: any) => {
  //         return res;
  //       });
  //   } else {
  //     return Observable.of([]);
  //   }
  // }


  filterVendorNameData(): void {
    if (this.text_filter !== '') {
      this.filteredData = this.vendor_master_list.filter(obj =>
        this.filterKeys.some(propertyName =>
          obj[propertyName].toString().toLowerCase().includes(this.text_filter.toLowerCase())));
    } else {
      this.filteredData = this.vendor_master_list;
    }
  }


  submit() {
    const getFromData = this.addForm.value;
    getFromData.rating = this.currentRate;

    console.log('FromData >>>>', getFromData);
    this.maintenanceService.addVendorMasterData(getFromData).subscribe(res => {
      this.addForm.reset();
      this.getOptions();
      this.toastr.success('Vendor Master Added successfully.');
    }, err => {
      console.log('err   >>>', err);
      this.toastr.error('Something went wrong when adding!');
    });
  }
}
