(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~documents-documents-module"],{

/***/ "./src/app/layout/common/app-common/app-common.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/common/app-common/app-common.module.ts ***!
  \***************************************************************/
/*! exports provided: AppCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCommonModule", function() { return AppCommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _documents_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../documents/components/dashboard/dashboard.component */ "./src/app/layout/documents/components/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppCommonModule = /** @class */ (function () {
    function AppCommonModule() {
    }
    AppCommonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_documents_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            exports: [_documents_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]]
        })
    ], AppCommonModule);
    return AppCommonModule;
}());



/***/ }),

/***/ "./src/app/layout/documents/components/dashboard/dashboard.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/layout/documents/components/dashboard/dashboard.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>Documents Dashboard</strong>\r\n  </div>\r\n  <div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\" *ngIf=\"activeTab === 'docOverview'\">\r\n            <p>\r\n              <button [disabled]=\"loading\" class=\"btn btn-success\" (click)=\"showDetails()\">\r\n                <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\r\n                Details\r\n              </button>\r\n            </p>\r\n            <table class=\"table tableFixHead mytable\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Name</th>\r\n                  <th>Expired</th>\r\n                  <th>0-20 Days</th>\r\n                  <th>21-40 Days</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"loading\">\r\n                  <td colspan=\"4\">\r\n                    <div class=\"showbox\">\r\n                      <div class=\"loader\">\r\n                        <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                          <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                        </svg>\r\n                      </div>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                <tr *ngFor=\"let d of data\">\r\n                  <td>{{ d.Name }}</td>\r\n                  <td>{{ d.Expired }}</td>\r\n                  <td>{{ d['20_Days'] }}</td>\r\n                  <td>{{ d['40_Days'] }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"card-body\" *ngIf=\"activeTab === 'details'\">\r\n            <p>\r\n              <button class=\"btn btn-danger\" (click)=\"showOverview()\">\r\n                <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\r\n                Back\r\n              </button>\r\n            </p>\r\n\r\n            <!-- Second Screen 0-20 Days -->\r\n            <form [formGroup]=\"editForm\" novalidate> \r\n              <table class=\"table tableFixHead mytable\">\r\n                <thead>\r\n                    <tr>\r\n                      <th> 0-20 Days Trucks</th>\r\n                    </tr>\r\n                </thead>\r\n                <thead>\r\n                  <tr>\r\n                    <th>Truck No</th>\r\n                    <th>Document Name</th>\r\n                    <th>Start Date</th>\r\n                    <th>End date</th>\r\n                    <th>Status</th>\r\n                    <th>Remarks</th>\r\n                    <th>Actions</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"loading\">\r\n                    <td colspan=\"4\">\r\n                      <div class=\"showbox\">\r\n                        <div class=\"loader\">\r\n                          <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                          </svg>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let detail of details; let i = index\">\r\n                    <td>{{ detail.truck_no }}</td>\r\n                    <td>{{ detail.document_name }}</td>\r\n                    <td>{{ detail.startdate | date: 'dd/MM/yyyy' }}</td>\r\n                    <td>{{ detail.enddate | date: 'dd/MM/yyyy' }}</td>\r\n\r\n                    <td *ngIf=\"!detail.editing\">{{ detail.status ? detail.status : '--' }}</td>\r\n\r\n                    <td *ngIf=\"detail.editing\">\r\n                      <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\">Select</option>\r\n                        <option value=\"At RTO\">At RTO</option>\r\n                        <option value=\"Transist\">Transist</option>\r\n                        <option value=\"Submit To RTO\">Submit To RTO</option>\r\n                        <option value=\"In Process\">In Process</option>\r\n                        <option value=\"Expired\">Expired</option>\r\n                        <option value=\"Done\">Done</option>\r\n                        <option value=\"Not Seen\">Not Seen</option>\r\n                        <option value=\"Seen\">Seen</option>\r\n                      </select>\r\n                    </td>\r\n\r\n                    <td *ngIf=\"!detail.editing\">{{ detail.remarks ? detail.remarks : '--' }}</td>\r\n\r\n                    <td *ngIf=\"detail.editing\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"remarks\" />\r\n                    </td>\r\n\r\n                    <td>\r\n                      <button [disabled]=\"loading\" *ngIf=\"!detail.editing\" class=\"btn btn-primary\" (click)=\"edit(detail, i)\">\r\n                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                        Edit</button\r\n                      >&nbsp;\r\n                      <button [disabled]=\"loading\" *ngIf=\"detail.editing\" class=\"btn btn-warning\" (click)=\"update(detail)\">\r\n                        <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\r\n                        Update</button\r\n                      >&nbsp;\r\n                      <button [disabled]=\"loading\" *ngIf=\"detail.editing\" class=\"btn btn-danger\" (click)=\"cancel(detail)\">\r\n                        <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                        Cancel\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </form>\r\n\r\n            <!-- Second Screen Expired -->\r\n            <form [formGroup]=\"editForm\" novalidate> \r\n              <table class=\"table tableFixHead mytable\">\r\n                <thead>\r\n                    <tr>\r\n                      <th> Expired Trucks</th>\r\n                    </tr>\r\n                </thead>\r\n                <thead>\r\n                  <tr>\r\n                    <th>Truck No</th>\r\n                    <th>Document Name</th>\r\n                    <th>Start Date</th>\r\n                    <th>End date</th>\r\n                    <th>Status</th>\r\n                    <th>Remarks</th>\r\n                    <th>Actions</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"loading\">\r\n                    <td colspan=\"4\">\r\n                      <div class=\"showbox\">\r\n                        <div class=\"loader\">\r\n                          <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                          </svg>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let edetail of expiredDetails; let i = index\">\r\n                    <td>{{ edetail.truck_no }}</td>\r\n                    <td>{{ edetail.document_name }}</td>\r\n                    <td>{{ edetail.startdate | date: 'dd/MM/yyyy' }}</td>\r\n                    <td>{{ edetail.enddate | date: 'dd/MM/yyyy' }}</td>\r\n    \r\n                    <td *ngIf=\"!edetail.editing\">{{ edetail.status ? edetail.status : '--' }}</td>\r\n    \r\n                    <td *ngIf=\"edetail.editing\">\r\n                      <select class=\"form-control\" formControlName=\"status\">\r\n                        <option value=\"\">Select</option>\r\n                        <option value=\"At RTO\">At RTO</option>\r\n                        <option value=\"Transist\">Transist</option>\r\n                        <option value=\"Submit To RTO\">Submit To RTO</option>\r\n                        <option value=\"In Process\">In Process</option>\r\n                        <option value=\"Expired\">Expired</option>\r\n                        <option value=\"Done\">Done</option>\r\n                        <option value=\"Not Seen\">Not Seen</option>\r\n                        <option value=\"Seen\">Seen</option>\r\n                      </select>\r\n                    </td>\r\n    \r\n                    <td *ngIf=\"!edetail.editing\">{{ edetail.remarks ? edetail.remarks : '--' }}</td>\r\n    \r\n                    <td *ngIf=\"edetail.editing\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"remarks\" />\r\n                    </td>\r\n    \r\n                    <td>\r\n                      <button [disabled]=\"loading\" *ngIf=\"!edetail.editing\" class=\"btn btn-primary\" (click)=\"edit(edetail, i)\">\r\n                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                        Edit</button\r\n                      >&nbsp;\r\n                      <button [disabled]=\"loading\" *ngIf=\"edetail.editing\" class=\"btn btn-warning\" (click)=\"update(edetail)\">\r\n                        <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\r\n                        Update</button\r\n                      >&nbsp;\r\n                      <button [disabled]=\"loading\" *ngIf=\"edetail.editing\" class=\"btn btn-danger\" (click)=\"cancel(edetail)\">\r\n                        <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                        Cancel\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </form>\r\n            \r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/documents/components/dashboard/dashboard.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/layout/documents/components/dashboard/dashboard.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kb2N1bWVudHMvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/documents/components/dashboard/dashboard.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/documents/components/dashboard/dashboard.component.ts ***!
  \******************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_attach_documents_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/attach-documents.service */ "./src/app/shared/services/attach-documents.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(attachments, toastr, fb) {
        this.attachments = attachments;
        this.toastr = toastr;
        this.fb = fb;
        this.data = [];
        this.details = [];
        this.loading = false;
        this.activeTab = 'docOverview';
        this.expiredDetails = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.editForm = this.fb.group({
            status: [''],
            remarks: ['']
        });
        this.getOverAllData();
        this.getDetails();
        this.getExpiredAllTrucksDetails();
    };
    DashboardComponent.prototype.getOverAllData = function () {
        var _this = this;
        this.loading = true;
        this.attachments.getOverAllData().subscribe(function (resp) {
            _this.data = resp;
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            _this.toastr.error('Something went wrong when getting the data.');
        });
    };
    DashboardComponent.prototype.getDetails = function () {
        var _this = this;
        this.loading = true;
        this.attachments.getDetails().subscribe(function (resp) {
            resp.forEach(function (element) {
                element.editing = false;
            });
            _this.details = resp;
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            _this.toastr.error('Something went wrong when getting the data.');
        });
    };
    DashboardComponent.prototype.getExpiredAllTrucksDetails = function () {
        var _this = this;
        this.loading = true;
        this.attachments.getExpiredAllTrucksDetails().subscribe(function (resp) {
            resp.forEach(function (element) {
                element.editing = false;
            });
            _this.expiredDetails = resp;
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            _this.toastr.error('Something went wrong when getting the data.');
        });
    };
    DashboardComponent.prototype.showDetails = function () {
        this.activeTab = 'details';
    };
    DashboardComponent.prototype.showOverview = function () {
        this.activeTab = 'docOverview';
    };
    DashboardComponent.prototype.edit = function (data, index) {
        data.editing = true;
        this.editForm.controls['status'].setValue(data.status);
        this.editForm.controls['remarks'].setValue(data.remarks);
    };
    DashboardComponent.prototype.cancel = function (data) {
        data.editing = false;
    };
    DashboardComponent.prototype.update = function (data) {
        var _this = this;
        var obj = {
            'id': data.document_id,
            'status': this.editForm.value.status,
            'remarks': this.editForm.value.remarks
        };
        console.log('>>>>obj', obj);
        this.loading = true;
        this.attachments.updateAttachements(obj).subscribe(function (resp) {
            _this.loading = false;
            data.remarks = _this.editForm.value.remarks;
            data.status = _this.editForm.value.status;
            data.editing = false;
            _this.toastr.success('Dashboard documents updated successfully.');
        }, function (err) {
            _this.loading = false;
            _this.toastr.error('Something went wrong when getting the data.');
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documents-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/layout/documents/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/layout/documents/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_attach_documents_service__WEBPACK_IMPORTED_MODULE_1__["AttachDocumentsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/attach-documents.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/attach-documents.service.ts ***!
  \*************************************************************/
/*! exports provided: AttachDocumentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachDocumentsService", function() { return AttachDocumentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/shared/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AttachDocumentsService = /** @class */ (function () {
    function AttachDocumentsService(api) {
        this.api = api;
    }
    AttachDocumentsService.prototype.createRecord = function (data) {
        return this.api.post('attach_documents/create', data);
    };
    AttachDocumentsService.prototype.getdocumentName = function (query) {
        return this.api.get('attach_documents/list_document_name?q=' + query);
    };
    AttachDocumentsService.prototype.getMasterName = function () {
        return this.api.get('attach_documents/list_document_master');
    };
    AttachDocumentsService.prototype.getfilesList = function (truckno) {
        return this.api.get('attach_documents/list_files?truckno=' + truckno);
    };
    AttachDocumentsService.prototype.addDocumentMaster = function (data) {
        return this.api.post('attach_documents/add_document_master', data);
    };
    AttachDocumentsService.prototype.deleteDocumentMaster = function (d) {
        return this.api.delete('attach_documents/delete_document_master', { params: d });
    };
    AttachDocumentsService.prototype.updatDocumentMaster = function (id, data) {
        return this.api.put('attach_documents/update_document_master?id=' + id, data);
    };
    AttachDocumentsService.prototype.getOverAllData = function () {
        return this.api.get('attach_documents/first_screen');
    };
    AttachDocumentsService.prototype.getDetails = function () {
        return this.api.get('attach_documents/second_screen');
    };
    AttachDocumentsService.prototype.getExpiredAllTrucksDetails = function () {
        return this.api.get('attach_documents/second_screen_expired');
    };
    AttachDocumentsService.prototype.getTrafficAgentDocumentOverAllData = function (params) {
        return this.api.get('traffic_agent/first_screen', params);
    };
    AttachDocumentsService.prototype.getTrafficAgentDocumentDetails = function (params) {
        return this.api.get('traffic_agent/second_screen', params);
    };
    AttachDocumentsService.prototype.getExpiredTrafficAgentDocumentDetails = function (params) {
        return this.api.get('traffic_agent/second_screen_expired', params);
    };
    AttachDocumentsService.prototype.updateAttachements = function (data) {
        return this.api.put('attach_documents/update', data);
    };
    AttachDocumentsService.prototype.deleteDocument = function (data) {
        return this.api.put('attach_documents/delete_document', data);
    };
    AttachDocumentsService.prototype.updateDocumentData = function (data) {
        return this.api.put('attach_documents/update_file_date', data);
    };
    AttachDocumentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], AttachDocumentsService);
    return AttachDocumentsService;
}());



/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~documents-documents-module.js.map