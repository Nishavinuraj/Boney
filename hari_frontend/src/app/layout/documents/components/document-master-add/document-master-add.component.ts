import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AttachDocumentsService } from 'src/app/shared/services/attach-documents.service';

@Component({
  selector: 'app-document-master-add',
  templateUrl: './document-master-add.component.html',
  styleUrls: ['./document-master-add.component.scss']
})
export class DocumentMasterAddComponent implements OnInit {

  addForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    public attachDocumentsService: AttachDocumentsService,
    private formBuilder: FormBuilder,
    public toastr: ToastrService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['']
    });
  }

  add() {

    const dormData = this.addForm.value;
    console.log('dormData >>>>>', dormData);

    this.attachDocumentsService.addDocumentMaster(dormData).subscribe(res => {
      this.activeModal.close(res);
      this.toastr.success('Document Master added!');
    }, err => {
      console.log('err >>>', err);
      this.activeModal.dismiss();
      this.toastr.error('Something went wrong when adding!');
    });
  }

}
