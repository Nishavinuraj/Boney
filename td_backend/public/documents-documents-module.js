(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documents-documents-module"],{

/***/ "./src/app/layout/documents/components/attach-documents/attach-documents.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/documents/components/attach-documents/attach-documents.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-tabset>\r\n  <ngb-tab>\r\n    <ng-template ngbTabTitle><b>Attachments</b></ng-template>\r\n    <ng-template ngbTabContent>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <form [formGroup]=\"addExpenseForm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-1\">\r\n                    <label>Truck No </label>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <!-- <input type=\"text\" class=\"form-control\" formControlName=\"truckno\" /> -->\r\n                    <input\r\n                      class=\"form-control\"\r\n                      ng2-auto-complete\r\n                      formControlName=\"truckno\"\r\n                      [source]=\"truckPosition.bind(this)\"\r\n                      list-formatter=\"truckno\"\r\n                    />\r\n                  </div>\r\n                  <div class=\"col-md-2\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"fetchTruck()\">\r\n                      <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i>\r\n                      Fetch\r\n                    </button>\r\n                  </div>\r\n                  <!-- <td  class=\"truck-selection\"><i class=\"fa fa-truck\" aria-hidden=\"true\"></i> Document Master</td> -->\r\n                </div>\r\n                <br />\r\n                <table *ngIf=\"active\" class=\"table tableFixHead mytable\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Document Name</th>\r\n                      <th>Attach Document</th>\r\n                      <th>Start Date</th>\r\n                      <th>End Date</th>\r\n                      <th>Actions</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let data of documentMasterList.results; let i = index\">\r\n                      <td>\r\n                        <label>{{ data.name ? data.name : '--' }}</label>\r\n                      </td>\r\n                      <!-- <td>\r\n                                  <input class=\"form-control\" ng2-auto-complete formControlName=\"documentname\" [source]='documentName.bind(this)' list-formatter=\"name\" />  \r\n                                </td> -->\r\n\r\n                      <td>\r\n                        <input type=\"file\" class=\"form-control\" formControlName=\"file\" (change)=\"onSelectCSV($event)\" />\r\n                        <br>\r\n                        <table class=\"table table-bordered small-table\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>Document</th>\r\n                              <th>Start / End Date</th>\r\n                              <th>Actions</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let f of data.files\">\r\n                              <td>\r\n                                <a href=\"/{{ f.attachdocument }}\" target=\"_blank\">\r\n                                {{ f.attachdocument.replace('uploads/', '') }} \r\n                                </a>\r\n                              </td>\r\n                              <td>\r\n                                  {{ f.startdate | date:'dd/MM/yyyy' }} - {{ f.enddate | date:'dd/MM/yyyy' }}\r\n                              </td>\r\n                              <td>\r\n                                  <a class=\"btn btn-sm btn-primary\" href=\"javascript:void(0)\" (click)=\"editDocument(f)\"><i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i></a>&nbsp;\r\n                                  <a class=\"btn btn-sm btn-danger\" href=\"javascript:void(0)\" (click)=\"deleteDocument(f)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></a>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </td>\r\n\r\n                      <td>\r\n                        <div class=\"form-inline\">\r\n                          <input\r\n                            class=\"form-control\"\r\n                            placeholder=\"dd/mm/yyyy\"\r\n                            name=\"dp\"\r\n                            formControlName=\"start_date\"\r\n                            ngbDatepicker\r\n                            #d1=\"ngbDatepicker\"\r\n                          />\r\n                          <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                          </button>\r\n                        </div>\r\n                      </td>\r\n\r\n                      <td>\r\n                        <div class=\"form-inline\">\r\n                          <input\r\n                            class=\"form-control\"\r\n                            placeholder=\"dd/mm/yyyy\"\r\n                            name=\"dp\"\r\n                            formControlName=\"end_date\"\r\n                            ngbDatepicker\r\n                            #d2=\"ngbDatepicker\"\r\n                          />\r\n                          <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                          </button>\r\n                        </div>\r\n                      </td>\r\n\r\n                      <td>\r\n                        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"save(data)\" [disabled]=\"data.disabled\">\r\n                            <i *ngIf=\"data.disabled\" class=\"fa fa-circle-o-notch fa-spin\" aria-hidden=\"true\"></i> \r\n                          Save\r\n                        </button>\r\n                      </td>\r\n\r\n                      <!-- <td><button class=\"btn btn-primary\" (click)=\"edit(data)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit</button>&nbsp;</td>\r\n                                <td>\r\n                                  <button class=\"btn btn-danger\" (click)=\"delete(data, i)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</button>\r\n                                </td> -->\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab>\r\n    <ng-template ngbTabTitle><b>Documents Master</b></ng-template>\r\n    <ng-template ngbTabContent>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <p>\r\n                <button class=\"btn btn-primary\" (click)=\"addDocumentMaster()\">\r\n                  <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> \r\n                  Add\r\n                </button>\r\n              </p>\r\n              <form [formGroup]=\"editForm\">\r\n                <table class=\"table tableFixHead mytable\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Name</th>\r\n                      <th colspan=\"3\">Action</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let data of documentMasterList.results; let i = index\">\r\n                      <td *ngIf=\"!data.flag\">{{ data.name ? data.name : '--' }}</td>\r\n                      <td *ngIf=\"data.flag\"><input type=\"text\" class=\"form-control\" formControlName=\"name\" /></td>\r\n\r\n                      <td>\r\n                        <button *ngIf=\"!data.flag\" class=\"btn btn-primary\" (click)=\"editDocumentMaster(data)\">\r\n                          <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit</button\r\n                        >&nbsp;&nbsp;\r\n                        <button *ngIf=\"!data.flag\" class=\"btn btn-danger\" (click)=\"deleteDocumentMaster(data, i)\">\r\n                          <i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</button\r\n                        >&nbsp;&nbsp; <button *ngIf=\"data.flag\" (click)=\"cancel(data)\" class=\"btn btn-danger\">Cancel</button>&nbsp;&nbsp;\r\n                        <button *ngIf=\"data.flag\" (click)=\"update(data)\" class=\"btn btn-success\">Update</button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </ngb-tab>\r\n</ngb-tabset>\r\n"

/***/ }),

/***/ "./src/app/layout/documents/components/attach-documents/attach-documents.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/documents/components/attach-documents/attach-documents.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".small-table {\n  font-size: 12px; }\n\n.small-table th, .small-table td {\n  padding: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2RvY3VtZW50cy9jb21wb25lbnRzL2F0dGFjaC1kb2N1bWVudHMvRDpcXHRlc3RpbmdfZm9sZGVyXFx0aGlydVxcZnJvbnRlbmRcXHRkX2Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXGRvY3VtZW50c1xcY29tcG9uZW50c1xcYXR0YWNoLWRvY3VtZW50c1xcYXR0YWNoLWRvY3VtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFBa0MsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2RvY3VtZW50cy9jb21wb25lbnRzL2F0dGFjaC1kb2N1bWVudHMvYXR0YWNoLWRvY3VtZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbWFsbC10YWJsZSB7IFxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uc21hbGwtdGFibGUgdGgsIC5zbWFsbC10YWJsZSB0ZCB7cGFkZGluZzogMnB4fSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/documents/components/attach-documents/attach-documents.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/documents/components/attach-documents/attach-documents.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AttachDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachDocumentsComponent", function() { return AttachDocumentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_services_attach_documents_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/attach-documents.service */ "./src/app/shared/services/attach-documents.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _document_master_add_document_master_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../document-master-add/document-master-add.component */ "./src/app/layout/documents/components/document-master-add/document-master-add.component.ts");
/* harmony import */ var src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/site.service */ "./src/app/shared/services/site.service.ts");
/* harmony import */ var _edit_document_edit_document_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-document/edit-document.component */ "./src/app/layout/documents/components/attach-documents/edit-document/edit-document.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AttachDocumentsComponent = /** @class */ (function () {
    function AttachDocumentsComponent(
    // public activeModal: NgbActiveModal,
    formBuilder, attachDocumentsService, toastr, modalService, calendar, site) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.attachDocumentsService = attachDocumentsService;
        this.toastr = toastr;
        this.modalService = modalService;
        this.calendar = calendar;
        this.site = site;
        this.activeTab = 'main';
        this.active = false;
        this.documentMasterList = [];
        this.fileList = [];
        // Search query for list Document Name
        this.documentName = function (keyword) {
            if (keyword) {
                return _this.attachDocumentsService.getdocumentName(keyword)
                    .map(function (res) {
                    return res;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].of([]);
            }
        };
        // Search query for truck no list
        this.truckPosition = function (keyword) {
            if (keyword) {
                // getTruckPositionList
                return _this.site.getCompanyTruckPositionList(keyword).map(function (res) {
                    return res;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].of([]);
            }
        };
    }
    AttachDocumentsComponent.prototype.ngOnInit = function () {
        this.addExpenseForm = this.formBuilder.group({
            start_date: [''],
            truckno: [''],
            documentname: [''],
            end_date: [''],
            file: [''],
        });
        this.editForm = this.formBuilder.group({
            name: [''],
        });
        this.addExpenseForm.controls['start_date'].setValue(this.calendar.getToday());
        this.addExpenseForm.controls['end_date'].setValue(this.calendar.getToday());
        this.getMasterName();
    };
    AttachDocumentsComponent.prototype.fetchTruck = function () {
        var _this = this;
        this.active = true;
        var truckno = this.addExpenseForm.value.truckno.truckno;
        console.log('truckno   >>>>>', truckno);
        this.attachDocumentsService.getfilesList(truckno).subscribe(function (res) {
            _this.fileList = res; // existing files
            // add existing files to documents master
            _this.documentMasterList.results.forEach(function (d) {
                _this.fileList.forEach(function (f) {
                    if (d.name === f.documentname) {
                        d.files = f.files;
                    }
                });
            });
        }, function (err) {
            // on error
        });
    };
    AttachDocumentsComponent.prototype.onSelectCSV = function (event) {
        this.file = event.target.files[0];
        console.log('file >>>>>>>', this.file);
    };
    AttachDocumentsComponent.prototype.save = function (data) {
        var _this = this;
        data.disabled = true;
        var getFromData = this.addExpenseForm.value;
        var tDate = getFromData.start_date;
        var pDate = getFromData.end_date;
        var tdDate = tDate.year + '-' + tDate.month + '-' + tDate.day;
        var paDate = pDate.year + '-' + pDate.month + '-' + pDate.day;
        getFromData.start_date = tdDate; // moment(tDate, 'YYYY-MM-DD');
        getFromData.end_date = paDate; // moment(pDate, 'YYYY-MM-DD');
        // console.log('Before Add  >>>>', getFromData);
        // getFromData.documentname = getFromData.documentname.name;
        console.log('After Add  >>>>', getFromData);
        console.log('After Add  >>>>', data.name);
        var d = new FormData();
        d.append('file', this.file);
        d.append('startdate', getFromData.start_date);
        d.append('truckno', getFromData.truckno);
        d.append('enddate', getFromData.end_date);
        d.append('documentname', data.name);
        // console.log('Data  >>>>', d);
        var obj = {
            truckno: getFromData.truckno,
            files: []
        };
        // obj.files.push(d);
        this.attachDocumentsService.createRecord(d).subscribe(function (res) {
            _this.toastr.success('Uploaded!');
            _this.fetchTruck();
            _this.addExpenseForm.get('file').reset();
            data.disabled = false;
        }, function (err) {
            console.log('err   >>>', err);
            _this.toastr.error('Something went wrong when adding!');
        });
    };
    AttachDocumentsComponent.prototype.onSecondarySelect = function () {
        this.activeTab = 'secondary';
        this.getMasterName();
    };
    AttachDocumentsComponent.prototype.onMainSelect = function () {
        this.activeTab = 'main';
        this.getMasterName();
    };
    AttachDocumentsComponent.prototype.getMasterName = function () {
        var _this = this;
        this.attachDocumentsService.getMasterName().subscribe(function (res) {
            console.log('res >>>>>>>', res);
            res.results.forEach(function (element) {
                element.flag = false;
            });
            _this.documentMasterList = res;
        }, function (err) {
            // on error
        });
    };
    // getfilesList() {
    //   //
    // }
    AttachDocumentsComponent.prototype.editDocumentMaster = function (data) {
        data.flag = true;
        this.editForm.controls['name'].setValue(data.name);
    };
    AttachDocumentsComponent.prototype.cancel = function (data) {
        data.flag = false;
    };
    AttachDocumentsComponent.prototype.update = function (data) {
        var _this = this;
        console.log('Update >>>>', data);
        var id = data._id;
        var formdata = this.editForm.value;
        console.log('New >>>>', formdata);
        var obj = {
            name: formdata.name
        };
        this.attachDocumentsService.updatDocumentMaster(id, obj).subscribe(function (res) {
            // this.documentMasterList.results.splice(i, 1);
            data.flag = false;
            _this.toastr.success('Document Master updated successfully.');
            _this.getMasterName();
            // this.loading = false;
        }, function (err) {
            _this.toastr.error('Something went wrong.');
            // this.loading = false;
        });
    };
    AttachDocumentsComponent.prototype.deleteDocumentMaster = function (data, i) {
        var _this = this;
        console.log('data >>>>>', data);
        var obj = {
            id: data._id,
        };
        var conf = confirm('Are you sure you want to delete this record ?');
        if (conf === true) {
            // this.loading = true;
            console.log('data  >>>>', obj);
            this.attachDocumentsService.deleteDocumentMaster(obj).subscribe(function (res) {
                _this.documentMasterList.results.splice(i, 1);
                _this.toastr.success('Document Master deleted successfully.');
                // this.loading = false;
            }, function (err) {
                _this.toastr.error('Something went wrong.');
                // this.loading = false;
            });
        }
    };
    AttachDocumentsComponent.prototype.addDocumentMaster = function () {
        var _this = this;
        var modalRef = this.modalService.open(_document_master_add_document_master_add_component__WEBPACK_IMPORTED_MODULE_6__["DocumentMasterAddComponent"]);
        // , { size: 'lg' }
        // modalRef.componentInstance;
        modalRef.result.then(function (res) {
            if (res) {
                _this.getMasterName();
            }
        });
    };
    AttachDocumentsComponent.prototype.editDocument = function (d) {
        var _this = this;
        var modalRef = this.modalService.open(_edit_document_edit_document_component__WEBPACK_IMPORTED_MODULE_8__["EditDocumentComponent"]);
        modalRef.componentInstance.data = d;
        modalRef.result.then(function (res) {
            if (res) {
                _this.fetchTruck();
            }
        });
    };
    AttachDocumentsComponent.prototype.deleteDocument = function (f) {
        var _this = this;
        if (confirm('Are you sure you want to delete?')) {
            var data = {
                id: f.parent_id,
                document_id: f._id
            };
            this.attachDocumentsService.deleteDocument(data).subscribe(function (res) {
                _this.fetchTruck();
            }, function (err) {
                _this.toastr.error('Something went wrong! Try again later.', 'Error');
            });
        }
    };
    AttachDocumentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attach-documents',
            template: __webpack_require__(/*! ./attach-documents.component.html */ "./src/app/layout/documents/components/attach-documents/attach-documents.component.html"),
            styles: [__webpack_require__(/*! ./attach-documents.component.scss */ "./src/app/layout/documents/components/attach-documents/attach-documents.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_attach_documents_service__WEBPACK_IMPORTED_MODULE_4__["AttachDocumentsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"],
            src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_7__["SiteService"]])
    ], AttachDocumentsComponent);
    return AttachDocumentsComponent;
}());



/***/ }),

/***/ "./src/app/layout/documents/components/attach-documents/edit-document/edit-document.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/documents/components/attach-documents/edit-document/edit-document.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Edit Document: {{ data.attachdocument.replace('uploads/', '') }}</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form [formGroup]=\"editForm\">\r\n  <div class=\"row\">\r\n      <div class=\"form-group col-md-6\">\r\n          <div class=\"input-group\">\r\n            <input class=\"form-control\" placeholder=\"dd/mm/yyyy\" name=\"dp\" formControlName=\"startdate\" ngbDatepicker #d1=\"ngbDatepicker\" />\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n      </div>\r\n  \r\n      <div class=\"form-group col-md-6\">\r\n          <div class=\"input-group\">\r\n            <input class=\"form-control\" placeholder=\"dd/mm/yyyy\" name=\"dp\" formControlName=\"enddate\" ngbDatepicker #d2=\"ngbDatepicker\" />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"row\">\r\n      <div class=\"form-group col-md-12\">\r\n        <button class=\"btn btn-primary\" (click)=\"update()\">Update</button>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/documents/components/attach-documents/edit-document/edit-document.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/documents/components/attach-documents/edit-document/edit-document.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kb2N1bWVudHMvY29tcG9uZW50cy9hdHRhY2gtZG9jdW1lbnRzL2VkaXQtZG9jdW1lbnQvZWRpdC1kb2N1bWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/documents/components/attach-documents/edit-document/edit-document.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/documents/components/attach-documents/edit-document/edit-document.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EditDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDocumentComponent", function() { return EditDocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_attach_documents_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/attach-documents.service */ "./src/app/shared/services/attach-documents.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditDocumentComponent = /** @class */ (function () {
    function EditDocumentComponent(activeModal, fb, toastr, attachDocumentsService) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.toastr = toastr;
        this.attachDocumentsService = attachDocumentsService;
    }
    EditDocumentComponent.prototype.ngOnInit = function () {
        var start_date = {
            day: parseInt(moment(this.data.startdate).format('DD'), 10),
            month: parseInt(moment(this.data.startdate).format('MM'), 10),
            year: parseInt(moment(this.data.startdate).format('YYYY'), 10)
        };
        var end_date = {
            day: parseInt(moment(this.data.enddate).format('DD'), 10),
            month: parseInt(moment(this.data.enddate).format('MM'), 10),
            year: parseInt(moment(this.data.enddate).format('YYYY'), 10)
        };
        this.editForm = this.fb.group({
            startdate: [start_date],
            enddate: [end_date],
        });
    };
    EditDocumentComponent.prototype.update = function () {
        var _this = this;
        var data = {
            id: this.data._id,
            startdate: this.editForm.value.startdate.year + '-' + this.editForm.value.startdate.month + '-' + this.editForm.value.startdate.day,
            enddate: this.editForm.value.enddate.year + '-' + this.editForm.value.enddate.month + '-' + this.editForm.value.enddate.day
        };
        this.attachDocumentsService.updateDocumentData(data).subscribe(function (res) {
            _this.activeModal.close(res);
            _this.toastr.success('Updated!');
        }, function (err) {
            _this.toastr.error('Something went wrong! Try again later.', 'Error');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditDocumentComponent.prototype, "data", void 0);
    EditDocumentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-document',
            template: __webpack_require__(/*! ./edit-document.component.html */ "./src/app/layout/documents/components/attach-documents/edit-document/edit-document.component.html"),
            styles: [__webpack_require__(/*! ./edit-document.component.scss */ "./src/app/layout/documents/components/attach-documents/edit-document/edit-document.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_shared_services_attach_documents_service__WEBPACK_IMPORTED_MODULE_4__["AttachDocumentsService"]])
    ], EditDocumentComponent);
    return EditDocumentComponent;
}());



/***/ }),

/***/ "./src/app/layout/documents/components/document-master-add/document-master-add.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/documents/components/document-master-add/document-master-add.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Document Master Add</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"addForm\">\r\n      <div class=\"form-group\">\r\n          <label>Name</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\" />\r\n      </div>\r\n\r\n      <div class=\"col-md-12\">\r\n        <button class=\"btn btn-primary\" (click)=\"add()\">Save</button>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n  \r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n  </div>\r\n    "

/***/ }),

/***/ "./src/app/layout/documents/components/document-master-add/document-master-add.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/documents/components/document-master-add/document-master-add.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kb2N1bWVudHMvY29tcG9uZW50cy9kb2N1bWVudC1tYXN0ZXItYWRkL2RvY3VtZW50LW1hc3Rlci1hZGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/documents/components/document-master-add/document-master-add.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/documents/components/document-master-add/document-master-add.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DocumentMasterAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentMasterAddComponent", function() { return DocumentMasterAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_attach_documents_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/attach-documents.service */ "./src/app/shared/services/attach-documents.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DocumentMasterAddComponent = /** @class */ (function () {
    function DocumentMasterAddComponent(activeModal, attachDocumentsService, formBuilder, toastr, modalService) {
        this.activeModal = activeModal;
        this.attachDocumentsService = attachDocumentsService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.modalService = modalService;
    }
    DocumentMasterAddComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            name: ['']
        });
    };
    DocumentMasterAddComponent.prototype.add = function () {
        var _this = this;
        var dormData = this.addForm.value;
        console.log('dormData >>>>>', dormData);
        this.attachDocumentsService.addDocumentMaster(dormData).subscribe(function (res) {
            _this.activeModal.close(res);
            _this.toastr.success('Document Master added!');
        }, function (err) {
            console.log('err >>>', err);
            _this.activeModal.dismiss();
            _this.toastr.error('Something went wrong when adding!');
        });
    };
    DocumentMasterAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-document-master-add',
            template: __webpack_require__(/*! ./document-master-add.component.html */ "./src/app/layout/documents/components/document-master-add/document-master-add.component.html"),
            styles: [__webpack_require__(/*! ./document-master-add.component.scss */ "./src/app/layout/documents/components/document-master-add/document-master-add.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            src_app_shared_services_attach_documents_service__WEBPACK_IMPORTED_MODULE_4__["AttachDocumentsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], DocumentMasterAddComponent);
    return DocumentMasterAddComponent;
}());



/***/ }),

/***/ "./src/app/layout/documents/documents-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/documents/documents-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DocumentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsRoutingModule", function() { return DocumentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _documents_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documents.component */ "./src/app/layout/documents/documents.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/layout/documents/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_attach_documents_attach_documents_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/attach-documents/attach-documents.component */ "./src/app/layout/documents/components/attach-documents/attach-documents.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _documents_component__WEBPACK_IMPORTED_MODULE_2__["DocumentsComponent"],
        children: [
            { path: '', redirectTo: 'documents', pathMatch: 'prefix' },
            { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
            { path: 'attach-documents', component: _components_attach_documents_attach_documents_component__WEBPACK_IMPORTED_MODULE_4__["AttachDocumentsComponent"] }
        ]
    }
];
var DocumentsRoutingModule = /** @class */ (function () {
    function DocumentsRoutingModule() {
    }
    DocumentsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DocumentsRoutingModule);
    return DocumentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/documents/documents.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/documents/documents.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/documents/documents.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/documents/documents.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kb2N1bWVudHMvZG9jdW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/documents/documents.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/documents/documents.component.ts ***!
  \*********************************************************/
/*! exports provided: DocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsComponent", function() { return DocumentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent() {
    }
    DocumentsComponent.prototype.ngOnInit = function () {
    };
    DocumentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documents',
            template: __webpack_require__(/*! ./documents.component.html */ "./src/app/layout/documents/documents.component.html"),
            styles: [__webpack_require__(/*! ./documents.component.scss */ "./src/app/layout/documents/documents.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocumentsComponent);
    return DocumentsComponent;
}());



/***/ }),

/***/ "./src/app/layout/documents/documents.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/documents/documents.module.ts ***!
  \******************************************************/
/*! exports provided: DocumentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsModule", function() { return DocumentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_auto_complete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-auto-complete */ "./node_modules/ng2-auto-complete/dist/index.js");
/* harmony import */ var ng2_auto_complete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_auto_complete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _documents_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documents-routing.module */ "./src/app/layout/documents/documents-routing.module.ts");
/* harmony import */ var _documents_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documents.component */ "./src/app/layout/documents/documents.component.ts");
/* harmony import */ var _components_attach_documents_attach_documents_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/attach-documents/attach-documents.component */ "./src/app/layout/documents/components/attach-documents/attach-documents.component.ts");
/* harmony import */ var _components_document_master_add_document_master_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/document-master-add/document-master-add.component */ "./src/app/layout/documents/components/document-master-add/document-master-add.component.ts");
/* harmony import */ var _common_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/app-common/app-common.module */ "./src/app/layout/common/app-common/app-common.module.ts");
/* harmony import */ var _components_attach_documents_edit_document_edit_document_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/attach-documents/edit-document/edit-document.component */ "./src/app/layout/documents/components/attach-documents/edit-document/edit-document.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DocumentsModule = /** @class */ (function () {
    function DocumentsModule() {
    }
    DocumentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _documents_component__WEBPACK_IMPORTED_MODULE_6__["DocumentsComponent"],
                _components_attach_documents_attach_documents_component__WEBPACK_IMPORTED_MODULE_7__["AttachDocumentsComponent"],
                _components_document_master_add_document_master_add_component__WEBPACK_IMPORTED_MODULE_8__["DocumentMasterAddComponent"],
                _components_attach_documents_edit_document_edit_document_component__WEBPACK_IMPORTED_MODULE_10__["EditDocumentComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                ng2_auto_complete__WEBPACK_IMPORTED_MODULE_4__["Ng2AutoCompleteModule"],
                _common_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_9__["AppCommonModule"],
                _documents_routing_module__WEBPACK_IMPORTED_MODULE_5__["DocumentsRoutingModule"],
            ],
            entryComponents: [
                _components_document_master_add_document_master_add_component__WEBPACK_IMPORTED_MODULE_8__["DocumentMasterAddComponent"],
                _components_attach_documents_edit_document_edit_document_component__WEBPACK_IMPORTED_MODULE_10__["EditDocumentComponent"]
            ],
            exports: []
        })
    ], DocumentsModule);
    return DocumentsModule;
}());



/***/ })

}]);
//# sourceMappingURL=documents-documents-module.js.map