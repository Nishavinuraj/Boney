import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MaintenanceService } from 'src/app/shared/services/maintenance.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { MetaService } from 'src/app/shared/services/meta.service';

@Component({
  selector: 'app-vendor-master-edit',
  templateUrl: './vendor-master-edit.component.html',
  styleUrls: ['./vendor-master-edit.component.scss']
})
export class VendorMasterEditComponent implements OnInit {

  @Input() data;

  editForm: FormGroup;
  public state_option: any;
  vendor_types = [
    {vendor_type: 'Supplier'},
    {vendor_type: 'Mistri'}
  ];
  currentRate: number = 0;

  constructor(
    public activeModal: NgbActiveModal,
    public fb: FormBuilder,
    public maintenanceService: MaintenanceService,
    public toastr: ToastrService,
    private metaService: MetaService,
    config: NgbRatingConfig
  ) {
    config.max = 5;

  }

  ngOnInit() {

    this.editForm = this.fb.group({
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

    // console.log(">>>>this.data", this.data);

    this.editForm.controls['name'].setValue(this.data.name);
    this.editForm.controls['address'].setValue(this.data.address);
    this.editForm.controls['location'].setValue(this.data.location);
    this.editForm.controls['vendor_type'].setValue(this.data.vendor_type);
    this.editForm.controls['specialized_in'].setValue(this.data.specialized_in);
    this.editForm.controls['mobile_no'].setValue(this.data.mobile_no);
    this.editForm.controls['email'].setValue(this.data.email);
    this.editForm.controls['contact_person'].setValue(this.data.contact_person);
    this.editForm.controls['gst_no'].setValue(this.data.gst_no);
    this.editForm.controls['condition'].setValue(this.data.condition);
    this.editForm.controls['statename'].setValue(this.data.statename);
    this.editForm.controls['remarks'].setValue(this.data.remarks);
    this.currentRate = this.data.rating;

    this.getOptions();

  }

  private getOptions() {

    this.metaService.getStateList().subscribe(trackInfo => {
      this.state_option = trackInfo['result'];
      console.log('>>>>StateIndia', trackInfo['result']);

    });
  }

  getSpecializedIn = (keyword: any): Observable<any[]> => {
    if (keyword) {
      return this.maintenanceService.getSpecializedIn(keyword).map((res: any) => {
        // console.log(">>>>res", res);
        return res.result;
      });
    } else {
      return Observable.of([]);
    }
  }

  getLocation = (keyword: any): Observable<any[]> => {
    if (keyword) {
      return this.maintenanceService.getLocations(keyword).map((res: any) => {
        // console.log(">>>>res", res);
        return res.result;
      });
    } else {
      return Observable.of([]);
    }
  }

  getVendorType = (keyword: any): Observable<any[]> => {
    if (keyword) {
      return this.maintenanceService.getVendorType(keyword).map((res: any) => {
        // console.log(">>>>res", res);
        return res.result;
      });
    } else {
      return Observable.of([]);
    }
  }


  update() {
    const getFromData = this.editForm.value;
    getFromData.rating = this.currentRate;
    getFromData._id = this.data._id;

    console.log('FromData >>>>', getFromData);
    this.maintenanceService.updateVendorMaster(getFromData).subscribe(res => {
      this.activeModal.close({result: 'success'});
      this.toastr.success('Vendor Master updated successfully.');
    }, err => {
      this.activeModal.close({result: 'success'});
      console.log('err   >>>', err);
      this.toastr.error('Something went wrong when adding!');
    });
}

}

