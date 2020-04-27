import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbCalendar, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AttachDocumentsService } from 'src/app/shared/services/attach-documents.service';
import { Observable } from 'rxjs';
import { DocumentMasterAddComponent } from '../document-master-add/document-master-add.component';
import { SiteService } from 'src/app/shared/services/site.service';
import { EditDocumentComponent } from './edit-document/edit-document.component';

@Component({
  selector: 'app-attach-documents',
  templateUrl: './attach-documents.component.html',
  styleUrls: ['./attach-documents.component.scss']
})
export class AttachDocumentsComponent implements OnInit {

  activeTab = 'main';
  active = false;
  addExpenseForm: FormGroup;
  editForm: FormGroup;
  file;
  documentMasterList: any =  [];
  fileList: any =  [];
  filepathshow;
  constructor(
    // public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public attachDocumentsService: AttachDocumentsService,
    public toastr: ToastrService,
    private modalService: NgbModal,
    private calendar: NgbCalendar,
    public site: SiteService
  ) { }

  ngOnInit() {

    this.addExpenseForm = this.formBuilder.group({
      start_date: [''],
      truckno: [''],
      documentname: [''],
      end_date: [''],
      file: [''],
      // documentname: []
    });

    this.editForm = this.formBuilder.group({
      name: [''],
    });

    this.addExpenseForm.controls['start_date'].setValue(this.calendar.getToday());
    this.addExpenseForm.controls['end_date'].setValue(this.calendar.getToday());
    this.getMasterName();
  }

  fetchTruck() {
    this.active = true;

    const truckno = this.addExpenseForm.value.truckno.truckno;

    console.log('truckno   >>>>>', truckno);
    this.attachDocumentsService.getfilesList(truckno).subscribe((res: any)  => {

      this.fileList = res; // existing files

      // add existing files to documents master
      this.documentMasterList.results.forEach(d => {
        this.fileList.forEach(f => {
          if (d.name === f.documentname) {
            d.files = f.files;
          }
        });
      });

    }, err => {
        // on error
    });

  }
  // Search query for list Document Name
  documentName = (keyword: any): Observable<any[]> => {
    if (keyword) {
      return  this.attachDocumentsService.getdocumentName(keyword)
        .map((res: any) => {
          return res;
        });
    } else {
      return Observable.of([]);
    }
  }

  // Search query for truck no list
  truckPosition = (keyword: any): Observable<any[]> => {
    if (keyword) {
      // getTruckPositionList
      return this.site.getCompanyTruckPositionList(keyword).map((res: any) => {
        return res;
      });
    } else {
      return Observable.of([]);
    }
  }

  onSelectCSV(event) {
    this.file = event.target.files[0];
    console.log('file >>>>>>>', this.file);
  }

  save(data) {
    data.disabled = true;
    const getFromData = this.addExpenseForm.value;

    const tDate = getFromData.start_date;
    const pDate = getFromData.end_date;

    const tdDate = tDate.year + '-' + tDate.month + '-' + tDate.day;
    const paDate = pDate.year + '-' + pDate.month + '-' + pDate.day;

    getFromData.start_date = tdDate;    // moment(tDate, 'YYYY-MM-DD');
    getFromData.end_date = paDate; // moment(pDate, 'YYYY-MM-DD');

    // console.log('Before Add  >>>>', getFromData);
    // getFromData.documentname = getFromData.documentname.name;
    console.log('After Add  >>>>', getFromData);
    console.log('After Add  >>>>', data.name);



    const d = new FormData();
    d.append('file', this.file);
    d.append('startdate', getFromData.start_date);
    d.append('truckno', getFromData.truckno);
    d.append('enddate', getFromData.end_date);
    d.append('documentname', data.name);

    // console.log('Data  >>>>', d);

    const obj = {
      truckno: getFromData.truckno,
      files: []
    };

    // obj.files.push(d);



    this.attachDocumentsService.createRecord(d).subscribe(res => {
      this.toastr.success('Uploaded!');
      this.fetchTruck();
      this.addExpenseForm.get('file').reset();
      data.disabled = false;
    }, err => {
      console.log('err   >>>', err);
      this.toastr.error('Something went wrong when adding!');
    });

  }

  onSecondarySelect() {
    this.activeTab = 'secondary';
    this.getMasterName();
  }
  onMainSelect() {
    this.activeTab = 'main';
    this.getMasterName();
  }

  getMasterName() {
    this.attachDocumentsService.getMasterName().subscribe((res: any)  => {
      console.log('res >>>>>>>', res);
      res.results.forEach(element => {
        element.flag = false;
      });
      this.documentMasterList = res;
    }, err => {
        // on error
    });
  }

  // getfilesList() {
  //   //
  // }

  editDocumentMaster(data) {
    data.flag = true;
    this.editForm.controls['name'].setValue(data.name);
  }

  cancel(data) {
    data.flag = false;
  }

  update(data) {
    console.log('Update >>>>', data);
    const id = data._id;
    const formdata = this.editForm.value;
    console.log('New >>>>', formdata);
    const obj = {
      name: formdata.name
    };
    this.attachDocumentsService.updatDocumentMaster(id, obj).subscribe(res => {

      // this.documentMasterList.results.splice(i, 1);
      data.flag = false;
      this.toastr.success('Document Master updated successfully.');
      this.getMasterName();
      // this.loading = false;
    }, err => {
      this.toastr.error('Something went wrong.');
      // this.loading = false;
    });


  }

  deleteDocumentMaster(data, i) {

    console.log('data >>>>>', data);
    const obj = {
      id: data._id,
    };


    const conf = confirm('Are you sure you want to delete this record ?');

    if (conf === true) {
      // this.loading = true;

      console.log('data  >>>>', obj);
      this.attachDocumentsService.deleteDocumentMaster(obj).subscribe(res => {

        this.documentMasterList.results.splice(i, 1);
        this.toastr.success('Document Master deleted successfully.');
        // this.loading = false;
      }, err => {
        this.toastr.error('Something went wrong.');
        // this.loading = false;
      });
    }

  }

  addDocumentMaster() {

    const modalRef = this.modalService.open(DocumentMasterAddComponent );
    // , { size: 'lg' }

    // modalRef.componentInstance;

    modalRef.result.then((res) => {
      if (res) {
        this.getMasterName();
      }
    });

  }

  editDocument(d) {
    const modalRef = this.modalService.open(EditDocumentComponent);
    modalRef.componentInstance.data = d;

    modalRef.result.then((res) => {
      if (res) {
        this.fetchTruck();
      }
    });
  }

  deleteDocument(f) {
    if (confirm('Are you sure you want to delete?')) {
      const data = {
        id: f.parent_id,
        document_id: f._id
      };
      this.attachDocumentsService.deleteDocument(data).subscribe(res => {
        this.fetchTruck();
      }, err => {
        this.toastr.error('Something went wrong! Try again later.', 'Error');
      });
    }
  }

}
