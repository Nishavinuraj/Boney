import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
declare var moment: any
import { AttachDocumentsService } from 'src/app/shared/services/attach-documents.service';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.scss']
})
export class EditDocumentComponent implements OnInit {

  @Input() data;
  editForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    public fb: FormBuilder,
    public toastr: ToastrService,
    public attachDocumentsService: AttachDocumentsService
  ) {
  }

  ngOnInit() {
    const start_date = {
      day: parseInt(moment(this.data.startdate).format('DD'), 10),
      month: parseInt(moment(this.data.startdate).format('MM'), 10),
      year: parseInt(moment(this.data.startdate).format('YYYY'), 10)
    };

    const end_date = {
      day: parseInt(moment(this.data.enddate).format('DD'), 10),
      month: parseInt(moment(this.data.enddate).format('MM'), 10),
      year: parseInt(moment(this.data.enddate).format('YYYY'), 10)
    };

    this.editForm = this.fb.group({
      startdate: [start_date],
      enddate: [end_date],
    });
  }

  update() {
    const data = {
      id: this.data._id,
      startdate: this.editForm.value.startdate.year + '-' + this.editForm.value.startdate.month + '-' + this.editForm.value.startdate.day,
      enddate: this.editForm.value.enddate.year + '-' + this.editForm.value.enddate.month + '-' + this.editForm.value.enddate.day
    };
    this.attachDocumentsService.updateDocumentData(data).subscribe(res => {
      this.activeModal.close(res);
      this.toastr.success('Updated!');
    }, err => {
      this.toastr.error('Something went wrong! Try again later.', 'Error');
    });
  }

}
