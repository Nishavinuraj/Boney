import { Component, OnInit } from '@angular/core';
import { AttachDocumentsService } from 'src/app/shared/services/attach-documents.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-documents-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data = [];
  details = [];
  loading = false;
  activeTab = 'docOverview';
  editForm: FormGroup;
  expiredDetails = [];
  constructor(
    public attachments: AttachDocumentsService,
    public toastr: ToastrService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.editForm = this.fb.group({
      status: [''],
      remarks: ['']
    });

    this.getOverAllData();
    this.getDetails();
    this.getExpiredAllTrucksDetails();
  }

  getOverAllData() {
    this.loading = true;
    this.attachments.getOverAllData().subscribe((resp: any) => {
      this.data = resp;
      this.loading = false;
    }, err => {
      this.loading = false;
      this.toastr.error('Something went wrong when getting the data.');
    });
  }

  getDetails() {
    this.loading = true;
    this.attachments.getDetails().subscribe((resp: any) => {

      resp.forEach(element => {
        element.editing = false;
      });

      this.details = resp;
      this.loading = false;
    }, err => {
      this.loading = false;
      this.toastr.error('Something went wrong when getting the data.');
    });
  }


  getExpiredAllTrucksDetails() {
    this.loading = true;
    this.attachments.getExpiredAllTrucksDetails().subscribe((resp: any) => {

      resp.forEach(element => {
        element.editing = false;
      });

      this.expiredDetails = resp;
      this.loading = false;
    }, err => {
      this.loading = false;
      this.toastr.error('Something went wrong when getting the data.');
    });
  }

  showDetails() {
    this.activeTab = 'details';
  }

  showOverview() {
    this.activeTab = 'docOverview';
  }

  edit(data, index) {
    data.editing = true;
    this.editForm.controls['status'].setValue(data.status);
    this.editForm.controls['remarks'].setValue(data.remarks);
  }

  cancel(data) {
    data.editing = false;
  }

  update(data) {

    const obj = {
      'id': data.document_id,
      'status' : this.editForm.value.status,
      'remarks' : this.editForm.value.remarks
    };

    console.log('>>>>obj', obj);

    this.loading = true;
    this.attachments.updateAttachements(obj).subscribe((resp: any) => {
      this.loading = false;

      data.remarks = this.editForm.value.remarks;
      data.status = this.editForm.value.status;
      data.editing = false;
      this.toastr.success('Dashboard documents updated successfully.');
    }, err => {
      this.loading = false;
      this.toastr.error('Something went wrong when getting the data.');
    });
  }

}
