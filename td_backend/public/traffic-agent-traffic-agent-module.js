(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["traffic-agent-traffic-agent-module"],{

/***/ "./src/app/layout/traffic-agent/components/add-trafficagent-master/add-trafficagent-master.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/add-trafficagent-master/add-trafficagent-master.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"tamForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Add Traffic Agent Master</div>\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n          <div class=\"col-lg-3 col-md-3\">\n            <label  class=\"required\" >Traffic Agent Name</label>\n            <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"Traffic Agent Name\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Mobile No. 1</label>\n            <input type=\"text\" formControlName=\"mobile1\" class=\"form-control\" placeholder=\"Mobile No\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Mobile No. 2</label>\n            <input type=\"text\" formControlName=\"mobile2\" class=\"form-control\" placeholder=\"Mobile No\">\n          </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label>Address</label>\n          <input type=\"text\" formControlName=\"address\" class=\"form-control\" placeholder=\"Address\">\n        </div>\n\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label class=\"required\" >Status</label>\n            <select formControlName=\"status\" class=\"form-control\">\n              <option value=\"Active\">Active</option>\n              <option value=\"Non Active\">Non Active</option>\n            </select>\n          </div>\n        </div>\n\n\n      </div>\n\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!tamForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/traffic-agent/components/add-trafficagent-master/add-trafficagent-master.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/add-trafficagent-master/add-trafficagent-master.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90cmFmZmljLWFnZW50L2NvbXBvbmVudHMvYWRkLXRyYWZmaWNhZ2VudC1tYXN0ZXIvYWRkLXRyYWZmaWNhZ2VudC1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/traffic-agent/components/add-trafficagent-master/add-trafficagent-master.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/add-trafficagent-master/add-trafficagent-master.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AddTrafficagentMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTrafficagentMasterComponent", function() { return AddTrafficagentMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _trafficagent_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trafficagent.service */ "./src/app/layout/traffic-agent/components/trafficagent.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddTrafficagentMasterComponent = /** @class */ (function () {
    function AddTrafficagentMasterComponent(fb, metaService, tam, router) {
        this.fb = fb;
        this.metaService = metaService;
        this.tam = tam;
        this.router = router;
        this.loading = false;
        this.usertype = this.metaService.getSiteFromStorage().role;
    }
    AddTrafficagentMasterComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getOptions();
    };
    AddTrafficagentMasterComponent.prototype.buildForm = function () {
        this.tamForm = this.fb.group({
            'name': [''],
            'mobile1': [''],
            'mobile2': [''],
            'status': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    AddTrafficagentMasterComponent.prototype.save = function () {
        var _this = this;
        this.process = 'saving';
        this.tam.addTam(this.tamForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/traffic-agent/trafficagent-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddTrafficagentMasterComponent.prototype.getOptions = function () {
    };
    AddTrafficagentMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-trafficagent-master',
            template: __webpack_require__(/*! ./add-trafficagent-master.component.html */ "./src/app/layout/traffic-agent/components/add-trafficagent-master/add-trafficagent-master.component.html"),
            styles: [__webpack_require__(/*! ./add-trafficagent-master.component.scss */ "./src/app/layout/traffic-agent/components/add-trafficagent-master/add-trafficagent-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            _trafficagent_service__WEBPACK_IMPORTED_MODULE_4__["TrafficagentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddTrafficagentMasterComponent);
    return AddTrafficagentMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/traffic-agent/components/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <form [formGroup]=\"filterForm\" novalidate>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <h4><i class=\"fa fa-truck\"></i> Traffic Agent Dashboard</h4>\r\n              <hr />\r\n            </div>\r\n            <div class=\"col-md-3 col-xs-12 col-sm-12 col-lg-3\">\r\n              <div class=\"form-group\">\r\n                <label>Traffic Agent*</label>\r\n                <select formControlName=\"traffic_agent\" class=\"form-control\">\r\n                  <option *ngFor=\"let a of agents\" value=\"{{ a.name }}\">\r\n                    {{ a.name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3 col-xs-12 col-sm-12 col-lg-3\">\r\n                <label>Actions</label>\r\n                <div class=\"form-group\">\r\n                    <button (click)=\"fetch()\" class=\"btn btn-warning\"><i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch </button>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"card-body\" *ngIf=\"activeTab === 'docOverview'\">\r\n        <p>\r\n          <button [disabled]=\"loading\" class=\"btn btn-success\" (click)=\"showDetails()\">\r\n            <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\r\n            Details\r\n          </button>\r\n        </p>\r\n        <table class=\"table tableFixHead mytable\">\r\n          <thead>\r\n            <tr>\r\n              <th>Name</th>\r\n              <th>Expired</th>\r\n              <th>0-20 Days</th>\r\n              <th>21-40 Days</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngIf=\"loading\">\r\n              <td colspan=\"4\">\r\n                <div class=\"showbox\">\r\n                  <div class=\"loader\">\r\n                    <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                      <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                    </svg>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr *ngFor=\"let d of data\">\r\n              <td>{{ d.Name }}</td>\r\n              <td>{{ d.Expired }}</td>\r\n              <td>{{ d['20_Days'] }}</td>\r\n              <td>{{ d['40_Days'] }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"card-body\" *ngIf=\"activeTab === 'details'\">\r\n        <p>\r\n          <button class=\"btn btn-danger\" (click)=\"showOverview()\">\r\n            <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\r\n            Back\r\n          </button>\r\n        </p>\r\n\r\n        <!-- Second Screen 0-20 Days -->\r\n        <form [formGroup]=\"editForm\" novalidate> \r\n          <table class=\"table tableFixHead mytable\">\r\n            <thead>\r\n                <tr>\r\n                  <th> 0-20 Days Trucks</th>\r\n                </tr>\r\n            </thead>\r\n            <thead>\r\n              <tr>\r\n                <th>Truck No</th>\r\n                <th>Document Name</th>\r\n                <th>Start Date</th>\r\n                <th>End date</th>\r\n                <th>Status</th>\r\n                <th>Remarks</th>\r\n                <th>Actions</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"loading\">\r\n                <td colspan=\"4\">\r\n                  <div class=\"showbox\">\r\n                    <div class=\"loader\">\r\n                      <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                        <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                      </svg>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr *ngFor=\"let detail of details; let i = index\">\r\n                <td>{{ detail.truck_no }}</td>\r\n                <td>{{ detail.document_name }}</td>\r\n                <td>{{ detail.startdate | date: 'dd/MM/yyyy' }}</td>\r\n                <td>{{ detail.enddate | date: 'dd/MM/yyyy' }}</td>\r\n\r\n                <td *ngIf=\"!detail.editing\">{{ detail.status ? detail.status : '--' }}</td>\r\n\r\n                <td *ngIf=\"detail.editing\">\r\n                  <select class=\"form-control\" formControlName=\"status\">\r\n                    <option value=\"\">Select</option>\r\n                    <option value=\"At RTO\">At RTO</option>\r\n                    <option value=\"Transist\">Transist</option>\r\n                    <option value=\"Submit To RTO\">Submit To RTO</option>\r\n                    <option value=\"In Process\">In Process</option>\r\n                    <option value=\"Expired\">Expired</option>\r\n                    <option value=\"Done\">Done</option>\r\n                    <option value=\"Not Seen\">Not Seen</option>\r\n                    <option value=\"Seen\">Seen</option>\r\n                  </select>\r\n                </td>\r\n\r\n                <td *ngIf=\"!detail.editing\">{{ detail.remarks ? detail.remarks : '--' }}</td>\r\n\r\n                <td *ngIf=\"detail.editing\">\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"remarks\" />\r\n                </td>\r\n\r\n                <td>\r\n                  <button [disabled]=\"loading\" *ngIf=\"!detail.editing\" class=\"btn btn-primary\" (click)=\"edit(detail, i)\">\r\n                    <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                    Edit</button\r\n                  >&nbsp;\r\n                  <button [disabled]=\"loading\" *ngIf=\"detail.editing\" class=\"btn btn-warning\" (click)=\"update(detail)\">\r\n                    <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\r\n                    Update</button\r\n                  >&nbsp;\r\n                  <button [disabled]=\"loading\" *ngIf=\"detail.editing\" class=\"btn btn-danger\" (click)=\"cancel(detail)\">\r\n                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                    Cancel\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </form>\r\n\r\n\r\n        <!-- Second Screen Expired -->\r\n        <form [formGroup]=\"editForm\" novalidate> \r\n          <table class=\"table tableFixHead mytable\">\r\n            <thead>\r\n                <tr>\r\n                  <th> Expired Trucks</th>\r\n                </tr>\r\n            </thead>\r\n            <thead>\r\n              <tr>\r\n                <th>Truck No</th>\r\n                <th>Document Name</th>\r\n                <th>Start Date</th>\r\n                <th>End date</th>\r\n                <th>Status</th>\r\n                <th>Remarks</th>\r\n                <th>Actions</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"loading\">\r\n                <td colspan=\"4\">\r\n                  <div class=\"showbox\">\r\n                    <div class=\"loader\">\r\n                      <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                        <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                      </svg>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr *ngFor=\"let edetail of expiredDetails; let i = index\">\r\n                <td>{{ edetail.truck_no }}</td>\r\n                <td>{{ edetail.document_name }}</td>\r\n                <td>{{ edetail.startdate | date: 'dd/MM/yyyy' }}</td>\r\n                <td>{{ edetail.enddate | date: 'dd/MM/yyyy' }}</td>\r\n\r\n                <td *ngIf=\"!edetail.editing\">{{ edetail.status ? edetail.status : '--' }}</td>\r\n\r\n                <td *ngIf=\"edetail.editing\">\r\n                  <select class=\"form-control\" formControlName=\"status\">\r\n                    <option value=\"\">Select</option>\r\n                    <option value=\"At RTO\">At RTO</option>\r\n                    <option value=\"Transist\">Transist</option>\r\n                    <option value=\"Submit To RTO\">Submit To RTO</option>\r\n                    <option value=\"In Process\">In Process</option>\r\n                    <option value=\"Expired\">Expired</option>\r\n                    <option value=\"Done\">Done</option>\r\n                    <option value=\"Not Seen\">Not Seen</option>\r\n                    <option value=\"Seen\">Seen</option>\r\n                  </select>\r\n                </td>\r\n\r\n                <td *ngIf=\"!edetail.editing\">{{ edetail.remarks ? edetail.remarks : '--' }}</td>\r\n\r\n                <td *ngIf=\"edetail.editing\">\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"remarks\" />\r\n                </td>\r\n\r\n                <td>\r\n                  <button [disabled]=\"loading\" *ngIf=\"!edetail.editing\" class=\"btn btn-primary\" (click)=\"edit(edetail, i)\">\r\n                    <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                    Edit</button\r\n                  >&nbsp;\r\n                  <button [disabled]=\"loading\" *ngIf=\"edetail.editing\" class=\"btn btn-warning\" (click)=\"update(edetail)\">\r\n                    <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\r\n                    Update</button\r\n                  >&nbsp;\r\n                  <button [disabled]=\"loading\" *ngIf=\"edetail.editing\" class=\"btn btn-danger\" (click)=\"cancel(edetail)\">\r\n                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                    Cancel\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </form>\r\n\r\n      </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/layout/traffic-agent/components/dashboard/dashboard.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/dashboard/dashboard.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90cmFmZmljLWFnZW50L2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/traffic-agent/components/dashboard/dashboard.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/dashboard/dashboard.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_traffic_agent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/traffic-agent.service */ "./src/app/shared/services/traffic-agent.service.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_attach_documents_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/attach-documents.service */ "./src/app/shared/services/attach-documents.service.ts");
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
    function DashboardComponent(agentService, meta, fb, toastr, attachments) {
        this.agentService = agentService;
        this.meta = meta;
        this.fb = fb;
        this.toastr = toastr;
        this.attachments = attachments;
        this.agents = [];
        this.loading = false;
        this.activeTab = '';
        this.data = [];
        this.details = [];
        this.expiredDetails = [];
        this.filterForm = this.fb.group({
            traffic_agent: [''],
            site_name: ['']
        });
        this.editForm = this.fb.group({
            status: [''],
            remarks: ['']
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getAgentList();
    };
    DashboardComponent.prototype.fetch = function () {
        this.activeTab = 'docOverview';
        this.getOverAllData();
        this.getDetails();
        this.getExpiredTrucksDetails();
    };
    DashboardComponent.prototype.getAgentList = function () {
        var _this = this;
        this.meta.getTrafficAgents().subscribe(function (res) {
            _this.agents = res;
            _this.filterForm.controls['traffic_agent'].setValue(_this.agents[0].name);
        }, function (err) { });
    };
    DashboardComponent.prototype.getOverAllData = function () {
        var _this = this;
        this.loading = true;
        this.attachments.getTrafficAgentDocumentOverAllData({ traffic_agent: this.filterForm.value.traffic_agent }).subscribe(function (resp) {
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
        this.attachments.getTrafficAgentDocumentDetails({ traffic_agent: this.filterForm.value.traffic_agent }).subscribe(function (resp) {
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
    DashboardComponent.prototype.getExpiredTrucksDetails = function () {
        var _this = this;
        this.loading = true;
        this.attachments.getExpiredTrafficAgentDocumentDetails({ traffic_agent: this.filterForm.value.traffic_agent }).subscribe(function (resp) {
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
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/layout/traffic-agent/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/layout/traffic-agent/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_traffic_agent_service__WEBPACK_IMPORTED_MODULE_2__["TrafficAgentService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__["MetaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            src_app_shared_services_attach_documents_service__WEBPACK_IMPORTED_MODULE_5__["AttachDocumentsService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/layout/traffic-agent/components/edit-trafficagent-master/edit-trafficagent-master.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/edit-trafficagent-master/edit-trafficagent-master.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"tamForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Edit Traffic Agent Master</div>\n      <div class=\"card-body\">\n\n        <div class=\"form-group row\">\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label  class=\"required\" >Traffic Agent Name</label>\n            <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"Traffic Agent Name\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Mobile No. 1</label>\n            <input type=\"text\" formControlName=\"mobile1\" class=\"form-control\" placeholder=\"Mobile No\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Mobile No. 2</label>\n            <input type=\"text\" formControlName=\"mobile2\" class=\"form-control\" placeholder=\"Mobile No\">\n          </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label>Address</label>\n          <input type=\"text\" formControlName=\"address\" class=\"form-control\" placeholder=\"Address\">\n        </div>\n\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label class=\"required\" >Status</label>\n            <select formControlName=\"status\" class=\"form-control\">\n              <option value=\"Active\">Active</option>\n              <option value=\"Non Active\">Non Active</option>\n            </select>\n          </div>\n        </div>\n\n\n\n\n\n        </div>\n\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"saveTam()\" [disabled]=\"!tamForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/traffic-agent/components/edit-trafficagent-master/edit-trafficagent-master.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/edit-trafficagent-master/edit-trafficagent-master.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90cmFmZmljLWFnZW50L2NvbXBvbmVudHMvZWRpdC10cmFmZmljYWdlbnQtbWFzdGVyL2VkaXQtdHJhZmZpY2FnZW50LW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/traffic-agent/components/edit-trafficagent-master/edit-trafficagent-master.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/edit-trafficagent-master/edit-trafficagent-master.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: EditTrafficagentMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTrafficagentMasterComponent", function() { return EditTrafficagentMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _trafficagent_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trafficagent.service */ "./src/app/layout/traffic-agent/components/trafficagent.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditTrafficagentMasterComponent = /** @class */ (function () {
    function EditTrafficagentMasterComponent(fb, metaService, tam, router, aroute) {
        this.fb = fb;
        this.metaService = metaService;
        this.tam = tam;
        this.router = router;
        this.aroute = aroute;
        this.loading = false;
    }
    EditTrafficagentMasterComponent.prototype.ngOnInit = function () {
        this.tamDetails = this.aroute.snapshot.data['tam_details'];
        this.buildForm();
        this.getOptions();
    };
    EditTrafficagentMasterComponent.prototype.buildForm = function () {
        this.tamForm = this.fb.group({
            'name': [this.tamDetails.name],
            'mobile1': [this.tamDetails.mobile1],
            'mobile2': [this.tamDetails.mobile2],
            'status': [this.tamDetails.status]
        });
    };
    EditTrafficagentMasterComponent.prototype.saveTam = function () {
        var _this = this;
        this.process = 'saving';
        this.tam.updatTam(this.tamDetails['_id'], this.tamForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/traffic-agent/trafficagent-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditTrafficagentMasterComponent.prototype.getOptions = function () {
    };
    EditTrafficagentMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-trafficagent-master',
            template: __webpack_require__(/*! ./edit-trafficagent-master.component.html */ "./src/app/layout/traffic-agent/components/edit-trafficagent-master/edit-trafficagent-master.component.html"),
            styles: [__webpack_require__(/*! ./edit-trafficagent-master.component.scss */ "./src/app/layout/traffic-agent/components/edit-trafficagent-master/edit-trafficagent-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            _trafficagent_service__WEBPACK_IMPORTED_MODULE_4__["TrafficagentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditTrafficagentMasterComponent);
    return EditTrafficagentMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/traffic-agent/components/list-trafficagent-master/list-trafficagent-master.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/list-trafficagent-master/list-trafficagent-master.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Traffic Agent Master'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/traffic-agent/components/list-trafficagent-master/list-trafficagent-master.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/list-trafficagent-master/list-trafficagent-master.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90cmFmZmljLWFnZW50L2NvbXBvbmVudHMvbGlzdC10cmFmZmljYWdlbnQtbWFzdGVyL2xpc3QtdHJhZmZpY2FnZW50LW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/traffic-agent/components/list-trafficagent-master/list-trafficagent-master.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/list-trafficagent-master/list-trafficagent-master.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ListTrafficagentMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTrafficagentMasterComponent", function() { return ListTrafficagentMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _trafficagent_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trafficagent.service */ "./src/app/layout/traffic-agent/components/trafficagent.service.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListTrafficagentMasterComponent = /** @class */ (function () {
    function ListTrafficagentMasterComponent(router, meta, tas) {
        this.router = router;
        this.meta = meta;
        this.tas = tas;
        this.addButtonInfo = { text: 'Add Traffic Agent Master', url: '/traffic-agent/add-trafficagent-master' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('traffic-agent/trafficagent-master');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Name / Mobile no' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Name', name: 'name', sort: true },
                { title: 'Mobile No 1', name: 'mobile1', sort: true },
                { title: 'Mobile No 2', name: 'mobile2', sort: true },
                { title: 'Status', name: 'status', sort: true },
                { title: 'Actions', links: ['Edit', 'Delete'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Name', name: 'name', sort: true },
                { title: 'Mobile No 1', name: 'mobile1', sort: true },
                { title: 'Mobile No 2', name: 'mobile2', sort: true },
                { title: 'Status', name: 'status', sort: true },
                { title: 'Actions', links: ['Edit'] }
            ];
        }
    }
    ListTrafficagentMasterComponent.prototype.ngOnInit = function () {
    };
    ListTrafficagentMasterComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/traffic-agent/trafficagent-master/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListTrafficagentMasterComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListTrafficagentMasterComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.tas.deleteTam(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) {
            console.log(error);
        });
    };
    ListTrafficagentMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-trafficagent-master',
            template: __webpack_require__(/*! ./list-trafficagent-master.component.html */ "./src/app/layout/traffic-agent/components/list-trafficagent-master/list-trafficagent-master.component.html"),
            styles: [__webpack_require__(/*! ./list-trafficagent-master.component.scss */ "./src/app/layout/traffic-agent/components/list-trafficagent-master/list-trafficagent-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _trafficagent_service__WEBPACK_IMPORTED_MODULE_3__["TrafficagentService"]])
    ], ListTrafficagentMasterComponent);
    return ListTrafficagentMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/traffic-agent/components/trafficagent.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/trafficagent.service.ts ***!
  \*************************************************************************/
/*! exports provided: TrafficagentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficagentService", function() { return TrafficagentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrafficagentService = /** @class */ (function () {
    function TrafficagentService(api) {
        this.api = api;
    }
    // Traffic Agent-master
    TrafficagentService.prototype.addTam = function (data) {
        return this.api.post('traffic-agent/trafficagent-master', data);
    };
    TrafficagentService.prototype.getTam = function (id) {
        return this.api.get('traffic-agent/trafficagent-master/' + id);
    };
    TrafficagentService.prototype.updatTam = function (id, data) {
        return this.api.put('traffic-agent/trafficagent-master?id=' + id, data);
    };
    TrafficagentService.prototype.deleteTam = function (id) {
        return this.api.delete("traffic-agent/trafficagent-master/" + id);
    };
    TrafficagentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], TrafficagentService);
    return TrafficagentService;
}());



/***/ }),

/***/ "./src/app/layout/traffic-agent/components/trafficagentmaster-reslover.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/trafficagentmaster-reslover.ts ***!
  \********************************************************************************/
/*! exports provided: TrafficagentmasterReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficagentmasterReslover", function() { return TrafficagentmasterReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _trafficagent_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trafficagent.service */ "./src/app/layout/traffic-agent/components/trafficagent.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrafficagentmasterReslover = /** @class */ (function () {
    function TrafficagentmasterReslover(aps) {
        this.aps = aps;
    }
    TrafficagentmasterReslover.prototype.resolve = function (route) {
        return this.aps.getTam(route.paramMap.get('id'));
    };
    TrafficagentmasterReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_trafficagent_service__WEBPACK_IMPORTED_MODULE_1__["TrafficagentService"]])
    ], TrafficagentmasterReslover);
    return TrafficagentmasterReslover;
}());



/***/ }),

/***/ "./src/app/layout/traffic-agent/components/vehicle-monitoring-reports/vehicle-monitoring-reports.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/vehicle-monitoring-reports/vehicle-monitoring-reports.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <a routerLink=\"/traffic-agent/vehicle-monitoring\" [routerLinkActive]=\"['router-link-active']\">\r\n            <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> &nbsp;\r\n          </a>\r\n          <span> <i class=\"fa fa-industry\"></i> Vehicle Monitoring Reports </span>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form [formGroup]=\"form\">\r\n            <div class=\"pull-left\">\r\n                <h3>Truck No: {{vehicle_no}}</h3> \r\n            </div>\r\n            <div\r\n              class=\"btn-group btn-group-toggle pull-right\"\r\n              (change)=\"onReportParameterChange(form.value['filters'])\"\r\n              ngbRadioGroup\r\n              name=\"radioBasic\"\r\n              formControlName=\"filters\"\r\n            >\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\"> <input ngbButton type=\"radio\" value=\"date\" /> Date Wise </label>\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\"> <input ngbButton type=\"radio\" value=\"month\" /> Month Wise </label>\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\"> <input ngbButton type=\"radio\" value=\"performance\" /> Performance Wise </label>\r\n            </div>\r\n          </form>\r\n          <div class=\"clearfix\"></div>\r\n          <br />\r\n\r\n          <div class=\"row\" *ngIf=\"active_report == 'date'\">\r\n            <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n              <form [formGroup]=\"dateWiseFrom\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label>Start Date</label>\r\n                      <div class=\"input-group datepicker-input\">\r\n                        <input\r\n                          class=\"form-control\"\r\n                          placeholder=\"dd/mm/yyyy\"\r\n                          name=\"dp\"\r\n                          formControlName=\"start_date\"\r\n                          ngbDatepicker\r\n                          #d=\"ngbDatepicker\"\r\n                        />\r\n                        <div class=\"input-group-append\">\r\n                          <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label>End Date</label>\r\n                      <div class=\"input-group datepicker-input\">\r\n                        <input\r\n                          class=\"form-control\"\r\n                          placeholder=\"dd/mm/yyyy\"\r\n                          name=\"dp2\"\r\n                          formControlName=\"end_date\"\r\n                          ngbDatepicker\r\n                          #d1=\"ngbDatepicker\"\r\n                        />\r\n                        <div class=\"input-group-append\">\r\n                          <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label>Truck No.*</label>\r\n                      <input\r\n                        class=\"form-control\"\r\n                        ng2-auto-complete\r\n                        formControlName=\"truck_no\"\r\n                        [source]=\"truckPosition.bind(this)\"\r\n                        list-formatter=\"truckno\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <button (click)=\"fetchDateWiseData()\" class=\"btn btn-warning mg-top-26\"><i class=\"fa fa-get-pocket\"></i> Fetch</button>&nbsp;&nbsp;\r\n                    <button [disabled]=\"dateWiseReport.length === 0\" (click)=\"exportDateWiseReport()\" class=\"btn btn-success mg-top-26\"><i class=\"fa fa-get-pocket\"></i> Export to excel</button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n              <hr />\r\n              <table id=\"dailytable\" class=\"table mytable tableFixHead\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>S.No</th>\r\n                    <th>Date</th>\r\n                    <th>From</th>\r\n                    <th>To</th>\r\n                    <th>Km</th>\r\n                    <th>Qty</th>\r\n                    <th>Rate</th>\r\n                    <th>Freight</th>\r\n                    <th>D.Qty</th>\r\n                    <th>D.Amt</th>\r\n                    <th>JST Adv</th>\r\n                    <th>Party Adv.</th>\r\n                    <th>Others</th>\r\n                    <th>Tot.Exp</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"loading\">\r\n                    <td colspan=\"14\">\r\n                      <div class=\"showbox\">\r\n                        <div class=\"loader\">\r\n                          <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                          </svg>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let d of dateWiseReport\">\r\n                    <td>{{ d.sno ? d.sno : '--' }}</td>\r\n                    <td>{{ d.date ? d.date : '--' }}</td>\r\n                    <td>{{ d.from ? d.from : '--' }}</td>\r\n                    <td>{{ d.to ? d.to : '--' }}</td>\r\n                    <td>{{ d.km ? d.km : '--' }}</td>\r\n                    <td>{{ d.qty ? d.qty : '--' }}</td>\r\n                    <td>{{ d.rate ? d.rate : '--' }}</td>\r\n                    <td>{{ (d.freight ? d.freight : 0) | number: '1.2-2' }}</td>\r\n                    <td>{{ d.dqty ? d.dqty : '--' }}</td>\r\n                    <td>{{ (d.damount ? d.damount : 0) | number: '1.2-2' }}</td>\r\n                    <td>{{ d.JSTC_Adv ? d.JSTC_Adv : '--' }}</td>\r\n                    <td>{{ d.Party_Adv ? d.Party_Adv : '--' }}</td>\r\n                    <td>{{ d.other ? d.other : '--' }}</td>\r\n                    <td>{{ (d.ex_diesal ? d.ex_diesal : 0) | number: '1.2-2' }}</td>\r\n                  </tr>\r\n                  <tr *ngIf=\"loaded && dateWiseReport.length === 0\">\r\n                    <td align=\"center\" colspan=\"14\">No data available</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n\r\n\r\n\r\n              <table id=\"dailytable\" class=\"table table mytable\" width=\"40%\">\r\n                  <tr>\r\n                    <td colspan=\"2\"><b>Summary Report</b></td>\r\n                  </tr>\r\n                <tr>\r\n                  <td>Freight Amount</td>\r\n                  <td>{{ summaryReport.freight_amount ? summaryReport.freight_amount: 0 }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Comm</td>\r\n                  <td>{{ summaryReport.comm ? summaryReport.comm: 0 }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Diesal Amount</td>\r\n                  <td>{{ summaryReport.diesal_amount ? summaryReport.diesal_amount: 0 }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Trip Amount</td>\r\n                  <td>{{ summaryReport.trip_amount ? summaryReport.trip_amount: 0 }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Total Amount</td>\r\n                  <td>{{ summaryReport.total_amount ? summaryReport.total_amount: 0 }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Driver Salary</td>\r\n                  <td>{{ summaryReport.driver_salary ? summaryReport.driver_salary: 0 }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>EMi</td>\r\n                  <td>{{ summaryReport.emi ? summaryReport.emi: 0 }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Tyre</td>\r\n                  <td>{{ summaryReport.tyre ? summaryReport.tyre: 0 }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Doc</td>\r\n                  <td>{{ summaryReport.doc ? summaryReport.doc: 0 }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Final Amount</td>\r\n                  <td>{{ summaryReport.final_amount ? summaryReport.final_amount: 0 }}</td>\r\n                </tr>\r\n              </table>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\" *ngIf=\"active_report == 'month'\">\r\n            <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n              <form [formGroup]=\"monthWiseForms\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label>Start Date</label>\r\n                      <div class=\"input-group datepicker-input\">\r\n                        <input\r\n                          class=\"form-control\"\r\n                          placeholder=\"dd/mm/yyyy\"\r\n                          name=\"dp\"\r\n                          formControlName=\"start_date\"\r\n                          ngbDatepicker\r\n                          #d=\"ngbDatepicker\"\r\n                        />\r\n                        <div class=\"input-group-append\">\r\n                          <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label>End Date</label>\r\n                      <div class=\"input-group datepicker-input\">\r\n                        <input\r\n                          class=\"form-control\"\r\n                          placeholder=\"dd/mm/yyyy\"\r\n                          name=\"dp2\"\r\n                          formControlName=\"end_date\"\r\n                          ngbDatepicker\r\n                          #d1=\"ngbDatepicker\"\r\n                        />\r\n                        <div class=\"input-group-append\">\r\n                          <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label>Truck No.*</label>\r\n                      <input\r\n                        class=\"form-control\"\r\n                        ng2-auto-complete\r\n                        formControlName=\"truck_no\"\r\n                        [source]=\"truckPosition.bind(this)\"\r\n                        list-formatter=\"truckno\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <button (click)=\"fetchMonthWiseData()\" class=\"btn btn-warning mg-top-26\"><i class=\"fa fa-get-pocket\"></i> Fetch</button>&nbsp;&nbsp;\r\n                    <button [disabled]=\"monthWiseReport.length === 0\" (click)=\"exportMonthWiseReport()\" class=\"btn btn-success mg-top-26\"><i class=\"fa fa-get-pocket\"></i> Export to excel</button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n              <hr>\r\n              <table class=\"table mytable tableFixHead\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Trip</th>\r\n                    <th>MTons</th>\r\n                    <th>Freight</th>\r\n                    <th>JSTC</th>\r\n                    <th>Party</th>\r\n                    <th>Other</th>\r\n                    <th>Diesal Amount</th>\r\n                    <th>Comm</th>\r\n                    <th>Salary</th>\r\n                    <th>Emi</th>\r\n                    <th>Doc</th>\r\n                    <th>Tyre</th>\r\n                    <th>Maint.</th>\r\n                    <th>Net Profit</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let m of monthWiseReport\">\r\n                    <td>{{ m.trips ? m.trips : '--' }}</td>\r\n                    <td>{{ m.mtons ? m.mtons : '--' }}</td>\r\n                    <td>{{ (m.freight ? m.freight : 0) | number: '1.2-2' }}</td>\r\n                    <td>{{ m.jstc ? m.jstc : '--' }}</td>\r\n                    <td>{{ m.party ? m.party : '--' }}</td>\r\n                    <td>{{ (m.other ? m.other : '0') | number : '1.2-2' }}</td>\r\n                    <td>{{ (m.diesal_amount ? m.diesal_amount : 0) | number: '1.2-2' }}</td>\r\n                    <td>{{ (m.comm ? m.comm : '0') | number : '1.2-2' }}</td>\r\n                    <td>{{ m.salary ? m.salary : '--' }}</td>\r\n                    <td>{{ m.emi ? m.emi : '--' }}</td>\r\n                    <td>{{ m.doc ? m.doc : '--' }}</td>\r\n                    <td>{{ m.tyre ? m.tyre : '--' }}</td>\r\n                    <td>{{ m.maint ? m.maint : '--' }}</td>\r\n                    <td>{{ (m.net_profit ? m.net_profit : '0') | number : '1.2-2' }}</td>\r\n                  </tr>\r\n                  <tr *ngIf=\"loaded && monthWiseReport.length === 0\">\r\n                    <td align=\"center\" colspan=\"14\">No data available</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"active_report == 'performance'\">\r\n            <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n              <form [formGroup]=\"performanceForms\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label>Years</label>\r\n                      <select class=\"form-control\" formControlName=\"year\">\r\n                        <option value=\"\">--Select year--</option>\r\n                        <option *ngFor=\"let y of years\" value=\"{{y.year}}\">{{y.year}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                      <label>Truck No.*</label>\r\n                      <input\r\n                        class=\"form-control\"\r\n                        ng2-auto-complete\r\n                        formControlName=\"truck_no\"\r\n                        [source]=\"truckPosition.bind(this)\"\r\n                        list-formatter=\"truckno\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <button (click)=\"fetchPerformanceWiseData()\" class=\"btn btn-warning mg-top-26\"><i class=\"fa fa-get-pocket\"></i> Fetch</button>&nbsp;&nbsp;\r\n                    <!-- <button [disabled]=\"performanceWiseReport.length === 0\" (click)=\"exportMonthWiseReport()\" class=\"btn btn-success mg-top-26\"><i class=\"fa fa-get-pocket\"></i> Export</button> -->\r\n                  </div>\r\n                </div>\r\n              </form>\r\n              <hr>\r\n              <table class=\"table mytable tableFixHead\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Month</th>\r\n                    <th>Trip</th>\r\n                    <th>MTons</th>\r\n                    <th>Target</th>\r\n                    <th>Freight</th>\r\n                    <th>JSTC</th>\r\n                    <th>Party</th>\r\n                    <th>Other</th>\r\n                    <th>Diesal Amount</th>\r\n                    <th>Comm</th>\r\n                    <th>Salary</th>\r\n                    <th>Emi</th>\r\n                    <th>Doc</th>\r\n                    <th>Tyre</th>\r\n                    <th>Maint.</th>\r\n                    <th>Net Profit</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let m of performanceWiseReport\">\r\n                    <td>{{ m.month ? m.month : '--' }}</td>\r\n                    <td>{{ m.trips ? m.trips : '--' }}</td>\r\n                    <td>{{ (m.mtons ? m.mtons : 0) | number: '1.2-2' }}</td>\r\n                    <td>{{ m.target ? m.target : '--' }}</td>\r\n                    <td>{{ (m.freight ? m.freight : 0) | number: '1.2-2'}}</td>\r\n                    <td>{{ m.jstc ? m.jstc : '--' }}</td>\r\n                    <td>{{ m.party ? m.party : '--' }}</td>\r\n                    <td>{{ (m.other ? m.other : '0') | number : '1.2-2' }}</td>\r\n                    <td>{{ m.diesal_amount ? m.diesal_amount : '--' }}</td>\r\n                    <td>{{ (m.comm ? m.comm : '0') | number : '1.2-2' }}</td>\r\n                    <td>{{ m.salary ? m.salary : '--' }}</td>\r\n                    <td>{{ m.emi ? m.emi : '--' }}</td>\r\n                    <td>{{ m.doc ? m.doc : '--' }}</td>\r\n                    <td>{{ m.tyre ? m.tyre : '--' }}</td>\r\n                    <td>{{ m.maint ? m.maint : '--' }}</td>\r\n                    <td>{{ (m.net_profit ? m.net_profit : '0') | number : '1.2-2' }}</td>\r\n                  </tr>\r\n                  <tr *ngIf=\"loaded && performanceWiseReport.length === 0\">\r\n                    <td align=\"center\" colspan=\"14\">No data available</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/traffic-agent/components/vehicle-monitoring-reports/vehicle-monitoring-reports.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/vehicle-monitoring-reports/vehicle-monitoring-reports.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mg-top-26 {\n  margin-top: 26px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RyYWZmaWMtYWdlbnQvY29tcG9uZW50cy92ZWhpY2xlLW1vbml0b3JpbmctcmVwb3J0cy9EOlxcdGVzdGluZ19mb2xkZXJcXHRoaXJ1XFxmcm9udGVuZFxcdGRfZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcdHJhZmZpYy1hZ2VudFxcY29tcG9uZW50c1xcdmVoaWNsZS1tb25pdG9yaW5nLXJlcG9ydHNcXHZlaGljbGUtbW9uaXRvcmluZy1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdHJhZmZpYy1hZ2VudC9jb21wb25lbnRzL3ZlaGljbGUtbW9uaXRvcmluZy1yZXBvcnRzL3ZlaGljbGUtbW9uaXRvcmluZy1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1nLXRvcC0yNiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/traffic-agent/components/vehicle-monitoring-reports/vehicle-monitoring-reports.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/vehicle-monitoring-reports/vehicle-monitoring-reports.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: VehicleMonitoringReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleMonitoringReportsComponent", function() { return VehicleMonitoringReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/site.service */ "./src/app/shared/services/site.service.ts");
/* harmony import */ var src_app_shared_services_traffic_agent_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/traffic-agent.service */ "./src/app/shared/services/traffic-agent.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var VehicleMonitoringReportsComponent = /** @class */ (function () {
    function VehicleMonitoringReportsComponent(fb, site, agentService, toastr, activatedRoute, calendar, excelService) {
        var _this = this;
        this.fb = fb;
        this.site = site;
        this.agentService = agentService;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.calendar = calendar;
        this.excelService = excelService;
        this.active_report = 'date';
        this.dateFilters = {
            start_date: '',
            end_date: '',
            truck_no: '',
            page: 1
        };
        this.monthFilters = {
            start_date: '',
            end_date: '',
            truckno: ''
        };
        this.performanceFilters = {
            truckno: '',
            year: ''
        };
        this.dateWiseReport = [];
        this.monthWiseReport = [];
        this.performanceWiseReport = [];
        this.loading = false;
        this.loaded = true;
        this.years = [];
        this.submitted = false;
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        // Search query for truck no list
        this.truckPosition = function (keyword) {
            if (keyword) {
                return _this.site.getTruckPositionList(keyword).map(function (res) {
                    return res;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of([]);
            }
        };
    }
    VehicleMonitoringReportsComponent.prototype.ngOnInit = function () {
        // const table = TableExport(document.getElementById("export-buttons-table"));
        var _this = this;
        this.form = this.fb.group({
            filters: ['date']
        });
        this.dateWiseFrom = this.fb.group({
            start_date: [''],
            end_date: [''],
            truck_no: ['']
        });
        this.monthWiseForms = this.fb.group({
            start_date: [''],
            end_date: [''],
            truck_no: ['']
        });
        this.performanceForms = this.fb.group({
            year: [''],
            truck_no: ['']
        });
        this.activatedRoute.params.subscribe(function (res) {
            if (res.truck_no) {
                _this.vehicle_no = res.truck_no;
                _this.dateWiseFrom.controls['truck_no'].setValue(_this.vehicle_no);
                _this.dateWiseFrom.controls['start_date'].setValue(_this.calendar.getToday());
                _this.dateWiseFrom.controls['end_date'].setValue(_this.calendar.getToday());
                _this.monthWiseForms.controls['start_date'].setValue(_this.calendar.getToday());
                _this.monthWiseForms.controls['end_date'].setValue(_this.calendar.getToday());
                _this.monthWiseForms.controls['truck_no'].setValue(_this.vehicle_no);
                _this.performanceForms.controls['truck_no'].setValue(_this.vehicle_no);
                _this.performanceForms.controls['year'].setValue(moment().year());
                _this.fetchDateWiseData();
                _this.fetchMonthWiseData();
                _this.fetchPerformanceWiseData();
            }
            else {
                _this.vehicle_no = '--';
            }
        });
        for (var i = 2025; i >= 2015; i--) {
            this.years.push({ year: i });
        }
    };
    VehicleMonitoringReportsComponent.prototype.onReportParameterChange = function (val) {
        console.log(val);
        this.active_report = val;
    };
    VehicleMonitoringReportsComponent.prototype.fetchDateWiseData = function () {
        var _this = this;
        var sDate = this.dateWiseFrom.value.start_date;
        var eDate = this.dateWiseFrom.value.end_date;
        sDate = sDate.year + '-' + sDate.month + '-' + sDate.day;
        eDate = eDate.year + '-' + eDate.month + '-' + eDate.day;
        var stDate = moment(sDate, 'YYYY-MM-DD');
        var edDate = moment(eDate, 'YYYY-MM-DD');
        if (stDate <= edDate) {
            if (this.dateWiseFrom.value.start_date) {
                this.dateFilters.start_date = sDate;
            }
            else {
                this.dateFilters.start_date = '';
            }
            if (this.dateWiseFrom.value.end_date) {
                this.dateFilters.end_date = eDate;
            }
            else {
                this.dateFilters.end_date = '';
            }
            if (this.dateWiseFrom.value.truck_no) {
                this.dateFilters.truck_no = this.dateWiseFrom.value.truck_no;
            }
            else {
                this.dateFilters.truck_no = '';
            }
            this.loading = true;
            this.loaded = false;
            this.dateWiseReport = [];
            this.agentService.getDateWiseReport(this.dateFilters).subscribe(function (res) {
                _this.loading = false;
                _this.loaded = true;
                res.result.forEach(function (element) {
                    element.date = moment(element.date, 'YYYY-MM-DD').format('DD/MM/YYYY');
                });
                _this.dateWiseReport = res.result;
                _this.agentService.getSummaryReport(_this.dateFilters).subscribe(function (res1) {
                    _this.loading = false;
                    _this.loaded = true;
                    _this.summaryReport = res1.result;
                }, function (err1) {
                    _this.loading = false;
                    _this.loaded = true;
                    console.log('>>>>Err', err1);
                });
            }, function (err) {
                _this.loading = false;
                _this.loaded = true;
                console.log('>>>>Err', err);
            });
        }
        else {
            this.toastr.error('Start date cannot be greater then end date.');
        }
    };
    VehicleMonitoringReportsComponent.prototype.fetchMonthWiseData = function () {
        var _this = this;
        var sDate = this.monthWiseForms.value.start_date;
        var eDate = this.monthWiseForms.value.end_date;
        sDate = sDate.year + '-' + sDate.month + '-' + sDate.day;
        eDate = eDate.year + '-' + eDate.month + '-' + eDate.day;
        var stDate = moment(sDate, 'YYYY-MM-DD');
        var edDate = moment(eDate, 'YYYY-MM-DD');
        if (stDate <= edDate) {
            if (this.monthWiseForms.value.start_date) {
                this.monthFilters.start_date = sDate;
            }
            else {
                this.monthFilters.start_date = '';
            }
            if (this.monthWiseForms.value.end_date) {
                this.monthFilters.end_date = eDate;
            }
            else {
                this.monthFilters.end_date = '';
            }
            if (this.monthWiseForms.value.truck_no) {
                this.monthFilters.truckno = this.monthWiseForms.value.truck_no;
            }
            else {
                this.monthFilters.truckno = '';
            }
            this.loading = true;
            this.loaded = false;
            this.monthWiseReport = [];
            this.agentService.getMonthWiseReport(this.monthFilters).subscribe(function (res) {
                _this.loading = false;
                _this.loaded = true;
                _this.monthWiseReport = res.result;
            }, function (err) {
                _this.loading = false;
                _this.loaded = true;
                console.log('>>>>Err', err);
            });
        }
        else {
            this.toastr.error('Start date cannot be greater then end date.');
        }
    };
    VehicleMonitoringReportsComponent.prototype.fetchPerformanceWiseData = function () {
        var _this = this;
        if (this.performanceForms.value.year) {
            this.performanceFilters.year = this.performanceForms.value.year;
        }
        else {
            this.performanceFilters.year = '';
        }
        if (this.performanceForms.value.truck_no) {
            this.performanceFilters.truckno = this.performanceForms.value.truck_no;
        }
        else {
            this.performanceFilters.truckno = '';
        }
        this.loading = true;
        this.loaded = false;
        this.performanceWiseReport = [];
        this.agentService.getPerfromanceWiseReport(this.performanceFilters).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            _this.performanceWiseReport = res.result;
        }, function (err) {
            _this.loading = false;
            _this.loaded = true;
            console.log('>>>>Err', err);
        });
    };
    VehicleMonitoringReportsComponent.prototype.exportDateWiseReport = function () {
        this.excelService.exportAsExcelFile(this.dateWiseReport, this.dateWiseFrom.value.truck_no + '_daily');
    };
    VehicleMonitoringReportsComponent.prototype.exportMonthWiseReport = function () {
        this.excelService.exportAsExcelFile(this.monthWiseReport, this.monthWiseForms.value.truck_no + '_monthly');
    };
    VehicleMonitoringReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle-monitoring-reports',
            template: __webpack_require__(/*! ./vehicle-monitoring-reports.component.html */ "./src/app/layout/traffic-agent/components/vehicle-monitoring-reports/vehicle-monitoring-reports.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-monitoring-reports.component.scss */ "./src/app/layout/traffic-agent/components/vehicle-monitoring-reports/vehicle-monitoring-reports.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_3__["SiteService"],
            src_app_shared_services_traffic_agent_service__WEBPACK_IMPORTED_MODULE_4__["TrafficAgentService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCalendar"],
            src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExcelService"]])
    ], VehicleMonitoringReportsComponent);
    return VehicleMonitoringReportsComponent;
}());



/***/ }),

/***/ "./src/app/layout/traffic-agent/components/vehicle-monitoring-v2/vehicle-monitoring-v2.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/vehicle-monitoring-v2/vehicle-monitoring-v2.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"row\">\r\n    \r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\">\r\n        <ngb-tabset>\r\n            <ngb-tab title=\"Vehicle Monitoring\">\r\n              <ng-template ngbTabContent>\r\n                <br>\r\n                <form [formGroup]=\"filterForm\" novalidate>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                      <h4><i class=\"fa fa-truck\"></i> Vehicle Monitoring</h4>\r\n                      <hr />\r\n                    </div>\r\n                    <div class=\"col-md-3 col-xs-12 col-sm-12 col-lg-3\">\r\n                      <div class=\"form-group\">\r\n                        <label>Traffic Agent*</label>\r\n                        <select formControlName=\"traffic_agent\" class=\"form-control\" (change)=\"onChangeTrafficAgent($event.target.value)\">\r\n                          <option value=\"\">All</option>\r\n                          <option *ngFor=\"let a of agents\" value=\"{{ a.name }}\">\r\n                            {{ a.name }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-2 col-xs-12 col-sm-12 col-lg-1\">\r\n                      <div class=\"form-group\">\r\n                        <label>Actions</label>\r\n                        <button (click)=\"fetch()\" [disabled]=\"loading\" class=\"btn btn-warning\"><i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch</button>&nbsp;\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-2 col-xs-12 col-sm-12 col-lg-1\">\r\n                        <div class=\"form-group\">\r\n                          <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\r\n                          <button class=\"btn btn-primary\" (click)=\"goToReport3()\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i> Truck Performance</button>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n                </form>\r\n                <hr />\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>Search Truck</label>\r\n                      <input [(ngModel)]=\"text_filter\" class=\"form-control\" (input)=\"filterTruckData()\" name=\"search\" placeholder=\"Search Truck No\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                \r\n                <!-- Screen One -->\r\n                <table class=\"table table-bordered mytable tableFixHead\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Truck No.</th>\r\n                      <th>Status</th>\r\n                      <th>Last location</th>\r\n                      <th>Date</th>\r\n                      <th>Time</th>\r\n                      <th>Remarks</th>\r\n                      <th>Truck Maintenance</th>\r\n                      <th>Tyre Maintenance</th>\r\n                      <th>Assign To</th>\r\n                      <th align=\"center\">Actions</th>\r\n                      <!-- <th align=\"center\">History</th>    -->\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngIf=\"loading\">\r\n                      <td colspan=\"14\">\r\n                        <div class=\"showbox\">\r\n                          <div class=\"loader\">\r\n                            <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                              <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                            </svg>\r\n                          </div>\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let r of filteredData\">\r\n                      <td>\r\n                        <a href=\"javascript:void(0)\" (click)=\"onTruckNoClick(r)\">{{ r.truckno }}</a>\r\n                        <i class=\"fa fa-circle-o-notch fa-spin\" *ngIf=\"r.loading\" aria-hidden=\"true\"></i>\r\n                      </td>\r\n                      <td>\r\n                        <div *ngIf=\"r.editing === true\">\r\n                          <div class=\"radio\">\r\n                            <label><input type=\"radio\" [(ngModel)]=\"r.status\" name=\"status{{ r.truckno }}\" value=\"Up\">Up</label>\r\n                          </div>\r\n                          <div class=\"radio\">\r\n                            <label><input type=\"radio\" [(ngModel)]=\"r.status\" name=\"status{{ r.truckno }}\" value=\"Down\">Down</label>\r\n                          </div>\r\n                          <div class=\"radio\">\r\n                            <label><input type=\"radio\" [(ngModel)]=\"r.status\" name=\"status{{ r.truckno }}\" value=\"No driver\">No Driver</label>\r\n                          </div>\r\n                          <div class=\"radio\">\r\n                            <label><input type=\"radio\" [(ngModel)]=\"r.status\" name=\"status{{ r.truckno }}\" value=\"Maintenance\">Maintenance</label>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <span *ngIf=\"!r.editing\"><span *ngIf=\"r.status === 'Up'\"><i class=\"fa fa-arrow-up fa-up\" aria-hidden=\"true\"></i></span></span>\r\n\r\n                        <span *ngIf=\"!r.editing\"><span *ngIf=\"r.status === 'Down'\"><i class=\"fa fa-arrow-down fa-down\" aria-hidden=\"true\"></i></span></span>\r\n                        \r\n                        <span *ngIf=\"!r.editing\"><span *ngIf=\"r.status === 'No driver'\"><img [src]=\"no_driver_img\" class=\"no-driver\"></span></span>\r\n\r\n                        <span *ngIf=\"!r.editing\"><span *ngIf=\"r.status === 'Maintenance'\"><i class=\"fa fa-wrench\" aria-hidden=\"true\"></i></span></span>\r\n                      </td>\r\n                      <td>\r\n                        <input *ngIf=\"r.editing === true\" [(ngModel)]=\"r.last_location\" type=\"text\" class=\"form-control\" name=\"last_location\">\r\n                        <span *ngIf=\"!r.editing\">{{ r.last_location }}</span>\r\n                      </td>\r\n                      <td>\r\n                        <!-- <input *ngIf=\"r.editing === true\" [(ngModel)]=\"r.date\" type=\"date\" class=\"form-control\" name=\"date\"> -->\r\n                        <span *ngIf=\"!r.editing && r.date\">{{ r.date | date: 'dd/MM/yyyy'}}</span>\r\n                      </td>\r\n                      <td>\r\n                          <!-- <div *ngIf=\"r.editing === true\">\r\n                            <ngb-timepicker [(ngModel)]=\"r.time\"></ngb-timepicker>\r\n                          </div> -->\r\n                          <span *ngIf=\"!r.editing\" [ngClass]=\"{bgcolor_change :r.is_after}\">{{ r.formatted_time | date: 'HH:mm:ss' }}</span>\r\n                      </td>\r\n                      <td>\r\n                          <input *ngIf=\"r.editing === true\" [(ngModel)]=\"r.remarks\" type=\"text\" class=\"form-control\" name=\"date\">\r\n                          <span *ngIf=\"!r.editing\">{{ r.remarks }}</span>\r\n                      </td>\r\n                      <td>\r\n                        <span *ngIf=\"!r.editing\">{{ r.truck_m }}</span>\r\n                        <!-- Input box -->\r\n                        <span *ngIf=\"r.editing\">\r\n                          <span *ngIf=\"r.truck_maint === true\">\r\n                            <div class=\"checkbox\">\r\n                              <label><input [disabled]=\"true\" type=\"checkbox\" [(ngModel)]=\"r.truck_maintenance\" >Truck Maintenance</label>\r\n                            </div>\r\n                            <!-- <span>{{ r.truck_particulars }}</span>       -->\r\n                          </span>\r\n                        </span>\r\n                        \r\n                        <span *ngIf=\"r.truck_particulars\"><br> {{ r.truck_particulars }}</span>\r\n                        <span *ngIf=\"r.editing\">\r\n                          <span *ngIf=\"r.truck_maint === false\">\r\n                            <div class=\"checkbox\">\r\n                              <label><input type=\"checkbox\" [(ngModel)]=\"r.truck_maintenance\" >Truck Maintenance</label>\r\n                            </div>\r\n\r\n                            <span *ngIf=\"r.truck_maintenance\">\r\n                              <input [(ngModel)]=\"r.truck_particulars\" type=\"text\" class=\"form-control\" name=\"truck_particulars\">\r\n                            </span>\r\n                          </span>\r\n                        </span>\r\n                      </td>\r\n                      <td>\r\n                        <span *ngIf=\"!r.editing\">{{ r.tyre_m }}</span>\r\n\r\n                        <!-- Input box -->\r\n                        <span *ngIf=\"r.editing\">\r\n                          <span *ngIf=\"r.tyre_maint === true\">\r\n                            <div class=\"checkbox\">\r\n                              <label><input [disabled]=\"true\" type=\"checkbox\" [(ngModel)]=\"r.tyre_maintenance\" >Tyre Maintenance</label>\r\n                            </div>\r\n                            <span>{{ r.tyre_particulars }}</span>      \r\n                          </span>\r\n                        </span>\r\n\r\n                        <span *ngIf=\"r.editing\">\r\n                          <span *ngIf=\"r.tyre_maint === false\">\r\n                            <div class=\"checkbox\">\r\n                              <label><input type=\"checkbox\" name=\"tr_m\" [(ngModel)]=\"r.tyre_maintenance\" #tr_m=\"ngModel\">Tyre Maintenance</label>\r\n                            </div>\r\n\r\n                            <span *ngIf=\"r.tyre_maintenance\">\r\n                              <input [(ngModel)]=\"r.tyre_particulars\" type=\"text\" class=\"form-control\" name=\"tyre_particulars\">\r\n                            </span>\r\n                          </span>\r\n                        </span>\r\n                      </td>\r\n                      <td>\r\n                          <!-- <input *ngIf=\"r.editing === true\" [(ngModel)]=\"r.assign\" type=\"text\" class=\"form-control\" name=\"assign_to\"> -->\r\n                          <span>{{ r.assign }}</span>\r\n                      </td>\r\n                      <td>\r\n                        <button class=\"btn btn-primary\" *ngIf=\"!r.editing\" (click)=\"edit(r)\">Edit</button>\r\n                        <a [routerLink]=\"['/maintenance/truck-history/', { truckno: r.truckno }]\">\r\n                          &nbsp;<button type=\"button\" class=\"btn btn-warning\">Truck History</button></a>\r\n\r\n                        <button class=\"btn btn-success\" *ngIf=\"r.editing\" (click)=\"update(r)\">Update</button>&nbsp;&nbsp;\r\n                        <button class=\"btn btn-warning\" *ngIf=\"r.editing\" (click)=\"cancel(r)\">Cancel</button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n                <br>\r\n                <div class=\"card\" *ngIf=\"selected_truck && selected_truck.truckno\">\r\n                  <div class=\"card-header\">\r\n                      <h3>Truck Info: {{ selected_truck.truckno }}</h3>\r\n                  </div>\r\n                  <div class=\"card-body\">\r\n                    <div class=\"zui-scroller\" *ngIf=\"selected_truck && selected_truck.srno\">\r\n                      <form [formGroup]=\"editForm\" class=\"table-overflow\">\r\n                        <table id=\"section2\" class=\"table table-bordered mytable zui-table\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th class=\"zui-sticky-col zui-1\">Sr.No</th>\r\n                              <th class=\"zui-sticky-col zui-2\">Vehicle No.</th>\r\n                              <th>Lrno</th>\r\n                              <th>Date</th>\r\n                              <th>From</th>\r\n                              <th>Destination</th>\r\n                              <th>M.Ton</th>\r\n                              <th>Customer Name</th>\r\n                              <th>Map</th>\r\n                              <th>Km Run</th>\r\n                              <th>Current Location</th>\r\n                              <th>Trips Status</th>\r\n                              <th>Remark</th>\r\n                              <th>Completed</th>\r\n                              <th align=\"center\">Actions</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngIf=\"loading\">\r\n                              <td colspan=\"14\">\r\n                                <div class=\"showbox\">\r\n                                  <div class=\"loader\">\r\n                                    <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                                      <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                                    </svg>\r\n                                  </div>\r\n                                </div>\r\n                              </td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td class=\"zui-sticky-col zui-1\">{{selected_truck.srno ? selected_truck.srno : '--'}}</td>\r\n                              <td class=\"zui-sticky-col zui-2\"><a [routerLink]=\"['/traffic-agent/vehicle-monitoring/reports', {truck_no: selected_truck.truckno}]\">{{selected_truck.truckno ? selected_truck.truckno : '--'}}</a></td>\r\n                              <td>{{selected_truck.lrno ? selected_truck.lrno : '--'}}</td>\r\n                              <td>{{selected_truck.date | date:'dd/MM/yyyy'}}</td>\r\n                              <td>{{selected_truck.from ? selected_truck.from : '--'}}</td>\r\n                              <td>{{selected_truck.to ? selected_truck.to : '--'}}</td>\r\n                              <td>{{selected_truck.m_ton ? selected_truck.m_ton : '--'}}</td>\r\n                              <td>{{selected_truck.customer_name ? selected_truck.customer_name : '--'}}</td>\r\n                              <td>{{selected_truck.map ? selected_truck.map : '--'}}</td>\r\n              \r\n                              <td *ngIf=\"!selected_truck.editing\">\r\n                                  {{selected_truck.km ? selected_truck.km : '--'}}\r\n                              </td>\r\n                              <td *ngIf=\"selected_truck.editing\">\r\n                                <input class=\"form-control\" formControlName=\"km_run\" type=\"number\" >\r\n                              </td>\r\n              \r\n                              <td *ngIf=\"!selected_truck.editing\">{{selected_truck.currentlocation ? selected_truck.currentlocation : '--'}}</td>\r\n                              <td *ngIf=\"selected_truck.editing\">\r\n                                <input class=\"form-control\" formControlName=\"current_location\" type=\"text\" >\r\n                              </td>\r\n              \r\n                              <td *ngIf=\"!selected_truck.editing\">{{selected_truck.tripsstatus ? selected_truck.tripsstatus : '--'}}</td>\r\n                              <td *ngIf=\"selected_truck.editing\">\r\n                                <select class=\"form-control\" formControlName=\"trip_status\">\r\n                                  <option *ngFor=\"let t of tripStatus\" value=\"{{ t.name }}\">{{t.name}}</option>\r\n                                </select>    \r\n                              </td>\r\n              \r\n                              <td *ngIf=\"!selected_truck.editing\">{{selected_truck.remark ? selected_truck.remark : '--'}}</td>\r\n                              <td *ngIf=\"selected_truck.editing\">\r\n                                <input class=\"form-control\" formControlName=\"remark\" type=\"text\" >\r\n                              </td>\r\n                              \r\n                              <td *ngIf=\"!selected_truck.editing\">{{selected_truck.completed ? selected_truck.completed : '--'}}</td>\r\n                              <td *ngIf=\"selected_truck.editing\">\r\n                                <select class=\"form-control\" formControlName=\"completed\">\r\n                                  <option *ngFor=\"let c of completed\" value=\"{{ c.name }}\">{{c.name}}</option>\r\n                                </select>\r\n                              </td>\r\n                              \r\n                              <td>\r\n                                <button *ngIf=\"!selected_truck.editing\" class=\"btn btn-primary\" (click)=\"edit(selected_truck)\">Edit</button>&nbsp;&nbsp;\r\n                                <button *ngIf=\"selected_truck.editing\" class=\"btn btn-danger\" (click)=\"cancel(selected_truck)\">Cancel</button>&nbsp;&nbsp;\r\n                                <button *ngIf=\"selected_truck.editing\" class=\"btn btn-success\" (click)=\"update(selected_truck)\">Update</button>\r\n                              </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"loaded && report_data.length === 0 \">\r\n                              <td align=\"center\" colspan=\"14\">No data available</td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </form>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n          \r\n                <!-- Screen 3 -->\r\n                <div class=\"row\" id=\"screen3\">\r\n                  <div class=\"col-lg\">\r\n                    <div class=\"card\">\r\n                      <div class=\"card-header\">\r\n                        <span> <i class=\"fa fa-industry\"></i> Vehicle Monitoring Reports </span>\r\n                      </div>\r\n                      <div class=\"card-body\">\r\n                        <form [formGroup]=\"screen3FilterForm\">\r\n                          <div class=\"pull-left\">\r\n                              <h3 *ngIf=\"selected_truck\">Truck No: {{selected_truck.truckno}}</h3> \r\n                          </div>\r\n                          <div\r\n                            class=\"btn-group btn-group-toggle pull-right\"\r\n                            (change)=\"onReportParameterChange(screen3FilterForm.value['filters'])\"\r\n                            ngbRadioGroup\r\n                            name=\"radioBasic\"\r\n                            formControlName=\"filters\"\r\n                          >\r\n                            <!-- <label ngbButtonLabel class=\"btn-primary btn-sm\"> <input ngbButton type=\"radio\" value=\"date\" /> Date Wise </label>\r\n                            <label ngbButtonLabel class=\"btn-primary btn-sm\"> <input ngbButton type=\"radio\" value=\"month\" /> Month Wise </label>\r\n                            <label ngbButtonLabel class=\"btn-primary btn-sm\"> <input ngbButton type=\"radio\" value=\"performance\" /> Performance Wise </label> -->\r\n\r\n                            <label ngbButtonLabel class=\"btn-primary btn-sm\"> <input ngbButton type=\"radio\" value=\"date\" /> Date Wise </label>\r\n                            <label ngbButtonLabel class=\"btn-primary btn-sm\"> <input ngbButton type=\"radio\" value=\"month\" /> Month Wise </label>\r\n                            <label ngbButtonLabel class=\"btn-primary btn-sm\"> <input ngbButton type=\"radio\" value=\"performance\" /> Performance Wise </label>\r\n\r\n                          </div>\r\n                        </form>\r\n                        <div class=\"clearfix\"></div>\r\n                        <br />\r\n              \r\n                        <div class=\"row\" *ngIf=\"active_report == 'date'\">\r\n                          <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n                            <form [formGroup]=\"dateWiseFrom\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>Start Date</label>\r\n                                    <div class=\"input-group datepicker-input\">\r\n                                      <input\r\n                                        class=\"form-control\"\r\n                                        placeholder=\"dd/mm/yyyy\"\r\n                                        name=\"dp\"\r\n                                        formControlName=\"start_date\"\r\n                                        ngbDatepicker\r\n                                        #d=\"ngbDatepicker\"\r\n                                      />\r\n                                      <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                                        </button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>End Date</label>\r\n                                    <div class=\"input-group datepicker-input\">\r\n                                      <input\r\n                                        class=\"form-control\"\r\n                                        placeholder=\"dd/mm/yyyy\"\r\n                                        name=\"dp2\"\r\n                                        formControlName=\"end_date\"\r\n                                        ngbDatepicker\r\n                                        #d1=\"ngbDatepicker\"\r\n                                      />\r\n                                      <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                                        </button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>Truck No.*</label>\r\n                                    <input\r\n                                      class=\"form-control\"\r\n                                      ng2-auto-complete\r\n                                      formControlName=\"truck_no\"\r\n                                      [source]=\"truckPosition.bind(this)\"\r\n                                      list-formatter=\"truckno\"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                  <button (click)=\"fetchDateWiseData()\" class=\"btn btn-warning mg-top-26\"><i class=\"fa fa-get-pocket\"></i> Fetch</button>&nbsp;&nbsp;\r\n                                  <button [disabled]=\"dateWiseReport.length === 0\" (click)=\"exportDateWiseReport()\" class=\"btn btn-success mg-top-26\"><i class=\"fa fa-get-pocket\"></i> Export to excel</button>\r\n                                </div>\r\n                              </div>\r\n                            </form>\r\n                            <hr />\r\n                            \r\n                            <table id=\"dailytable\" class=\"table mytable tableFixHead\">\r\n                              <thead>\r\n                                <tr>\r\n                                  <th>S.No</th>\r\n                                  <th>LR.No</th>\r\n                                  <th>Date</th>\r\n                                  <th>From</th>\r\n                                  <th>To</th>\r\n                                  <th>Km</th>\r\n                                  <th>Qty</th>\r\n                                  <th>Rate</th>\r\n                                  <th>Freight</th>\r\n                                  <th>D.Qty</th>\r\n                                  <th>D.Amt</th>\r\n                                  <th>JST Adv</th>\r\n                                  <th>Party Adv.</th>\r\n                                  <th>Others</th>\r\n                                  <th>Total.Exp</th>\r\n                                  <th>Gross Profit</th>\r\n                                </tr>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr *ngIf=\"loading\">\r\n                                  <td colspan=\"14\">\r\n                                    <div class=\"showbox\">\r\n                                      <div class=\"loader\">\r\n                                        <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                                          <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                                        </svg>\r\n                                      </div>\r\n                                    </div>\r\n                                  </td>\r\n                                </tr>\r\n                                <tr *ngFor=\"let d of dateWiseReport\">\r\n                                  <td>{{ d.sno ? d.sno : '--' }}</td>\r\n                                  <td>{{ d.lrno ? d.lrno : '--' }}</td>\r\n                                  <td>{{ d.date ? d.date : '' | date: 'dd/MM/yyyy' }}</td>\r\n                                  <td>{{ d.from ? d.from : '--' }}</td>\r\n                                  <td>{{ d.to ? d.to : '--' }}</td>\r\n                                  <td>{{ d.km ? d.km : '--' }}</td>\r\n                                  <td>{{ d.qty ? d.qty : '--' }}</td>\r\n                                  <td>{{ d.rate ? d.rate : '--' }}</td>\r\n                                  <td>{{ (d.freight ? d.freight : 0) | number: '1.2-2' }}</td>\r\n                                  <td>{{ d.dqty ? d.dqty : '--' }}</td>\r\n                                  <td>{{ (d.damount ? d.damount : 0) | number: '1.2-2' }}</td>\r\n                                  <td>{{ d.JSTC_Adv ? d.JSTC_Adv : '--' }}</td>\r\n                                  <td>{{ d.Party_Adv ? d.Party_Adv : '--' }}</td>\r\n                                  <td>{{ d.other ? d.other : '--' }}</td>\r\n                                  <td>{{ (d.tot_exp ? d.tot_exp : 0) | number: '1.2-2' }}</td>\r\n                                  <td>{{ (d.gross_profit ? d.gross_profit : 0) | number: '1.2-2' }}</td>\r\n                                </tr>\r\n                                \r\n                                <tr *ngIf=\"loaded && dateWiseReport.length === 0\">\r\n                                  <td align=\"center\" colspan=\"14\">No data available</td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n        \r\n                            <table id=\"dailytable\" class=\"table table mytable\" width=\"40%\" *ngIf=\"summaryReport\">\r\n                                <tr>\r\n                                  <td colspan=\"2\"><b>Summary Report</b></td>\r\n                                </tr>\r\n                              <tr>\r\n                                <td>Freight Amount</td>\r\n                                <td>{{ summaryReport.freight_amount ? summaryReport.freight_amount: 0 }}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>Comm</td>\r\n                                <td>{{ summaryReport.comm ? summaryReport.comm: 0 }}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>Diesal Amount</td>\r\n                                <td>{{ (summaryReport.diesal_amount ? summaryReport.diesal_amount: 0) | number: '1.2-2' }}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>Trip Amount</td>\r\n                                <td>{{ summaryReport.trip_amount ? summaryReport.trip_amount: 0 }}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>Total Amount</td>\r\n                                <td>{{ (summaryReport.total_amount ? summaryReport.total_amount: 0) | number: '1.2-2' }}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>Driver Salary</td>\r\n                                <td>{{ summaryReport.driver_salary ? summaryReport.driver_salary: 0 }}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>EMi</td>\r\n                                <td>{{ summaryReport.emi ? summaryReport.emi: 0 }}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>Tyre</td>\r\n                                <td>{{ summaryReport.tyre ? summaryReport.tyre: 0 }}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>Doc</td>\r\n                                <td>{{ summaryReport.doc ? summaryReport.doc: 0 }}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>Final Amount</td>\r\n                                <td>{{ (summaryReport.final_amount ? summaryReport.final_amount: 0) | number: '1.2-2' }}</td>\r\n                              </tr>\r\n                            </table>\r\n              \r\n                          </div>\r\n                        </div>\r\n              \r\n                        <div class=\"row\" *ngIf=\"active_report == 'performance'\">\r\n                          <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n                            <form [formGroup]=\"monthWiseForms\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>Start Date</label>\r\n                                    <div class=\"input-group datepicker-input\">\r\n                                      <input\r\n                                        class=\"form-control\"\r\n                                        placeholder=\"dd/mm/yyyy\"\r\n                                        name=\"dp\"\r\n                                        formControlName=\"start_date\"\r\n                                        ngbDatepicker\r\n                                        #d=\"ngbDatepicker\"\r\n                                      />\r\n                                      <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                                        </button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>End Date</label>\r\n                                    <div class=\"input-group datepicker-input\">\r\n                                      <input\r\n                                        class=\"form-control\"\r\n                                        placeholder=\"dd/mm/yyyy\"\r\n                                        name=\"dp2\"\r\n                                        formControlName=\"end_date\"\r\n                                        ngbDatepicker\r\n                                        #d1=\"ngbDatepicker\"\r\n                                      />\r\n                                      <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                                        </button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>Truck No.*</label>\r\n                                    <input\r\n                                      class=\"form-control\"\r\n                                      ng2-auto-complete\r\n                                      formControlName=\"truck_no\"\r\n                                      [source]=\"truckPosition.bind(this)\"\r\n                                      list-formatter=\"truckno\"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                  <button (click)=\"fetchMonthWiseData()\" class=\"btn btn-warning mg-top-26\"><i class=\"fa fa-get-pocket\"></i> Fetch</button>&nbsp;&nbsp;\r\n                                  <button [disabled]=\"monthWiseReport.length === 0\" (click)=\"exportMonthWiseReport()\" class=\"btn btn-success mg-top-26\"><i class=\"fa fa-get-pocket\"></i> Export to excel</button>\r\n                                </div>\r\n                              </div>\r\n                            </form>\r\n                            <hr>\r\n                            <table class=\"table mytable tableFixHead\">\r\n                              <thead>\r\n                                <tr>\r\n                                  <th>Trip</th>\r\n                                  <th>MTons</th>\r\n                                  <th>Freight</th>\r\n                                  <th>JSTC</th>\r\n                                  <th>Party</th>\r\n                                  <th>Other</th>\r\n                                  <th>Diesal Amount</th>\r\n                                  <th>Comm</th>\r\n                                  <th>Salary</th>\r\n                                  <th>Emi</th>\r\n                                  <th>Doc</th>\r\n                                  <th>Tyre</th>\r\n                                  <th>Maint.</th>\r\n                                  <th>Net Profit</th>\r\n                                </tr>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr *ngFor=\"let m of monthWiseReport\">\r\n                                  <td>{{ m.trips ? m.trips : '--' }}</td>\r\n                                  <td>{{ m.mtons ? m.mtons : '--' }}</td>\r\n                                  <td>{{ (m.freight ? m.freight : 0) | number: '1.2-2' }}</td>\r\n                                  <td>{{ m.jstc ? m.jstc : '--' }}</td>\r\n                                  <td>{{ m.party ? m.party : '--' }}</td>\r\n                                  <td>{{ (m.other ? m.other : '0') | number : '1.2-2' }}</td>\r\n                                  <td>{{ (m.diesal_amount ? m.diesal_amount : 0) | number: '1.2-2' }}</td>\r\n                                  <td>{{ (m.comm ? m.comm : '0') | number : '1.2-2' }}</td>\r\n                                  <td>{{ m.salary ? m.salary : '--' }}</td>\r\n                                  <td>{{ m.emi ? m.emi : '--' }}</td>\r\n                                  <td>{{ m.doc ? m.doc : '--' }}</td>\r\n                                  <td>{{ m.tyre ? m.tyre : '--' }}</td>\r\n                                  <td>{{ m.maint ? m.maint : '--' }}</td>\r\n                                  <td>{{ (m.net_profit ? m.net_profit : '0') | number : '1.2-2' }}</td>\r\n                                </tr>\r\n                                <tr *ngIf=\"loaded && monthWiseReport.length === 0\">\r\n                                  <td align=\"center\" colspan=\"14\">No data available</td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"active_report == 'month'\">\r\n                          <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n                            <form [formGroup]=\"performanceForms\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>Years</label>\r\n                                    <select class=\"form-control\" formControlName=\"year\">\r\n                                      <option value=\"\">--Select year--</option>\r\n                                      <option *ngFor=\"let y of years\" value=\"{{y.year}}\">{{y.year}}</option>\r\n                                    </select>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>Truck No.*</label>\r\n                                    <input\r\n                                      class=\"form-control\"\r\n                                      ng2-auto-complete\r\n                                      formControlName=\"truck_no\"\r\n                                      [source]=\"truckPosition.bind(this)\"\r\n                                      list-formatter=\"truckno\"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                  <button (click)=\"fetchPerformanceWiseData()\" class=\"btn btn-warning mg-top-26\"><i class=\"fa fa-get-pocket\"></i> Fetch</button>&nbsp;&nbsp;\r\n                                  <!-- <button [disabled]=\"performanceWiseReport.length === 0\" (click)=\"exportMonthWiseReport()\" class=\"btn btn-success mg-top-26\"><i class=\"fa fa-get-pocket\"></i> Export</button> -->\r\n                                </div>\r\n                              </div>\r\n                            </form>\r\n                            <hr>\r\n                            <table class=\"table mytable tableFixHead\">\r\n                              <thead>\r\n                                <tr>\r\n                                  <th>Month</th>\r\n                                  <th>Trip</th>\r\n                                  <th>MTons</th>\r\n                                  <th>Target</th>\r\n                                  <th>Freight</th>\r\n                                  <th>JSTC</th>\r\n                                  <th>Party</th>\r\n                                  <th>Other</th>\r\n                                  <th>Diesal Amount</th>\r\n                                  <th>Comm</th>\r\n                                  <th>Gross Profit</th>\r\n                                  <th>Salary</th>\r\n                                  <th>Emi</th>\r\n                                  <th>Doc</th>\r\n                                  <th>Tyre</th>\r\n                                  <th>Maint.</th>\r\n                                  <th>Net Profit</th>\r\n                                </tr>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr *ngFor=\"let m of performanceWiseReport\">\r\n                                  <td>{{ m.month ? m.month : '--' }}</td>\r\n                                  <td>{{ m.trips ? m.trips : '--' }}</td>\r\n                                  <td>{{ (m.mtons ? m.mtons : 0) | number: '1.2-2' }}</td>\r\n                                  <td>{{ m.target ? m.target : '--' }}</td>\r\n                                  <td>{{ (m.freight ? m.freight : 0) | number: '1.2-2'}}</td>\r\n                                  <td>{{ m.jstc ? m.jstc : '--' }}</td>\r\n                                  <td>{{ m.party ? m.party : '--' }}</td>\r\n                                  <td>{{ (m.other ? m.other : '0') | number : '1.2-2' }}</td>\r\n                                  <td>{{ (m.diesal_amount ? m.diesal_amount : 0) | number : '1.2-2' }}</td>\r\n                                  <td>{{ (m.comm ? m.comm : '0') | number : '1.2-2' }}</td>\r\n                                  <td>{{ (m.gross_profit ? m.gross_profit : '0') | number : '1.2-2' }}</td>\r\n                                  <td>{{ m.salary ? m.salary : '--' }}</td>\r\n                                  <td>{{ m.emi ? m.emi : '--' }}</td>\r\n                                  <td>{{ m.doc ? m.doc : '--' }}</td>\r\n                                  <td>{{ m.tyre ? m.tyre : '--' }}</td>\r\n                                  <td>{{ m.maint ? m.maint : '--' }}</td>\r\n                                  <td>{{ (m.net_profit ? m.net_profit : '0') | number : '1.2-2' }}</td>\r\n                                </tr>\r\n                                <tr *ngIf=\"loaded && performanceWiseReport.length === 0\">\r\n                                  <td align=\"center\" colspan=\"14\">No data available</td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab title=\"Vehicle Monitoring History\">\r\n              <ng-template ngbTabContent>\r\n                <br>\r\n                <div class=\"row\">\r\n                  <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n                    <form [formGroup]=\"historyForm\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                          <div class=\"form-group\">\r\n                            <label>Truck No.*</label>\r\n                            <input\r\n                              class=\"form-control\"\r\n                              ng2-auto-complete\r\n                              formControlName=\"truck_no\"\r\n                              [source]=\"truckPosition.bind(this)\"\r\n                              list-formatter=\"truckno\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                          <button (click)=\"getHistoryTabData()\" class=\"btn btn-warning mg-top-26\"><i class=\"fa fa-get-pocket\"></i> Fetch</button>&nbsp;&nbsp;\r\n                          <!-- <button [disabled]=\"performanceWiseReport.length === 0\" (click)=\"exportMonthWiseReport()\" class=\"btn btn-success mg-top-26\"><i class=\"fa fa-get-pocket\"></i> Export</button> -->\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                    <hr>\r\n                    <table class=\"table table-bordered mytable tableFixHead\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th>Truck No.</th>\r\n                          <th>Agent Name</th>\r\n                          <th>Status</th>\r\n                          <th>Last location</th>\r\n                          <th>Date</th>\r\n                          <th>Time</th>\r\n                          <th>Remarks</th>\r\n                          <!-- <th>Tyre maintenance</th>\r\n                          <th>Tyre particulars</th>\r\n                          <th>Truck maintenance</th>\r\n                          <th>Truck particulars</th>\r\n                          <th>Assign</th> -->\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngIf=\"loading\">\r\n                          <td colspan=\"14\">\r\n                            <div class=\"showbox\">\r\n                              <div class=\"loader\">\r\n                                <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                                  <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                                </svg>\r\n                              </div>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                        <tr *ngFor=\"let hr of historyReports\">\r\n                          <td>{{hr.truckno}}</td>\r\n                          <td>{{hr.taname}}</td>\r\n                          <td>{{hr.status}}</td>\r\n                          <td>{{hr.last_location}}</td>\r\n                          <td>{{hr.date}}</td>\r\n                          <td>{{hr.time }}</td>\r\n                          <td>{{hr.remarks}}</td>\r\n                          <!-- <td>{{hr.tyre_maintenance}}</td>\r\n                          <td>{{hr.tyre_particulars}}</td>\r\n                          <td>{{hr.truck_maintenance}}</td>\r\n                          <td>{{hr.truck_particulars}}</td>\r\n                          <td>{{hr.assign}}</td> -->\r\n                        </tr>\r\n                        <tr *ngIf=\"loaded && historyReports.length === 0 \">\r\n                            <td align=\"center\" colspan=\"12\">No data available</td>\r\n                          </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n          </ngb-tabset>\r\n  \r\n\r\n      <!-- Screen Two -->\r\n\r\n\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/layout/traffic-agent/components/vehicle-monitoring-v2/vehicle-monitoring-v2.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/vehicle-monitoring-v2/vehicle-monitoring-v2.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mg-top-26 {\n  margin-top: 26px; }\n\n.bgcolor_change {\n  background-color: #fa0404; }\n\n.no-driver {\n  width: 1.33em; }\n\n.fa-up {\n  color: green; }\n\n.fa-down {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RyYWZmaWMtYWdlbnQvY29tcG9uZW50cy92ZWhpY2xlLW1vbml0b3JpbmctdjIvRDpcXHRlc3RpbmdfZm9sZGVyXFx0aGlydVxcZnJvbnRlbmRcXHRkX2Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHRyYWZmaWMtYWdlbnRcXGNvbXBvbmVudHNcXHZlaGljbGUtbW9uaXRvcmluZy12MlxcdmVoaWNsZS1tb25pdG9yaW5nLXYyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0kseUJBQStCLEVBQUE7O0FBR25DO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdHJhZmZpYy1hZ2VudC9jb21wb25lbnRzL3ZlaGljbGUtbW9uaXRvcmluZy12Mi92ZWhpY2xlLW1vbml0b3JpbmctdjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWctdG9wLTI2IHtcclxuICAgIG1hcmdpbi10b3A6IDI2cHg7XHJcbn1cclxuXHJcbi5iZ2NvbG9yX2NoYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTAsIDQsIDQpO1xyXG59XHJcblxyXG4ubm8tZHJpdmVyIHtcclxuICAgIHdpZHRoOiAxLjMzZW07XHJcbn1cclxuXHJcbi5mYS11cCB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5mYS1kb3duIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/traffic-agent/components/vehicle-monitoring-v2/vehicle-monitoring-v2.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/vehicle-monitoring-v2/vehicle-monitoring-v2.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: VehicleMonitoringV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleMonitoringV2Component", function() { return VehicleMonitoringV2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_traffic_agent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/traffic-agent.service */ "./src/app/shared/services/traffic-agent.service.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");
/* harmony import */ var src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/site.service */ "./src/app/shared/services/site.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var VehicleMonitoringV2Component = /** @class */ (function () {
    function VehicleMonitoringV2Component(agentService, meta, fb, site, excelService, toastr, calendar) {
        var _this = this;
        this.agentService = agentService;
        this.meta = meta;
        this.fb = fb;
        this.site = site;
        this.excelService = excelService;
        this.toastr = toastr;
        this.calendar = calendar;
        this.agents = [];
        this.sites = [];
        this.loading = false;
        this.loaded = true;
        // pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.filterKeys = ['truckno'];
        this.filteredData = [];
        this.text_filter = '';
        this.filters = {
            traffic_agent: '',
            site_name: ''
        };
        this.report_data = [];
        this.tripStatus = [
            { name: 'Loading' },
            { name: 'Unloading' },
            { name: 'On the Way' },
            { name: 'Party Haulting' },
            { name: 'Plant Haulting' },
            { name: 'Not Unloaded' },
            { name: 'Accident' },
            { name: 'Maintenance' },
            { name: 'On site' },
            { name: 'Return to Plant' }
        ];
        this.completed = [
            { name: 'Yes' },
            { name: 'No' },
        ];
        this.active_report = 'date';
        this.dateFilters = {
            start_date: '',
            end_date: '',
            truck_no: '',
            page: 1
        };
        this.monthFilters = {
            start_date: '',
            end_date: '',
            truckno: ''
        };
        this.performanceFilters = {
            truckno: '',
            year: ''
        };
        this.historyFormFilters = {
            truck_no: ''
        };
        this.dateWiseReport = [];
        this.monthWiseReport = [];
        this.performanceWiseReport = [];
        this.years = [];
        this.historyReports = [];
        this.no_driver_img = '';
        // Search query for truck no list
        this.truckPosition = function (keyword) {
            if (keyword) {
                return _this.site.getTruckPositionList(keyword).map(function (res) {
                    return res;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].of([]);
            }
        };
        this.filterForm = this.fb.group({
            traffic_agent: [''],
            site_name: ['']
        });
        this.editForm = this.fb.group({
            km_run: [''],
            current_location: [''],
            trip_status: [''],
            remark: [''],
            completed: ['']
        });
        this.screen3FilterForm = this.fb.group({
            filters: ['date']
        });
        this.dateWiseFrom = this.fb.group({
            start_date: [''],
            end_date: [''],
            truck_no: ['']
        });
        this.monthWiseForms = this.fb.group({
            start_date: [''],
            end_date: [''],
            truck_no: ['']
        });
        this.performanceForms = this.fb.group({
            year: [''],
            truck_no: ['']
        });
        this.historyForm = this.fb.group({
            truck_no: ['']
        });
        for (var i = 2025; i >= 2015; i--) {
            this.years.push({ year: i });
        }
    }
    VehicleMonitoringV2Component.prototype.ngOnInit = function () {
        this.getAgentList();
        this.getHistoryTabData();
        this.no_driver_img = 'assets/images/driver.png';
    };
    VehicleMonitoringV2Component.prototype.filterTruckData = function () {
        var _this = this;
        if (this.text_filter !== '') {
            this.filteredData = this.report_data.filter(function (obj) {
                return _this.filterKeys.some(function (propertyName) {
                    return obj[propertyName].toString().toLowerCase().includes(_this.text_filter.toLowerCase());
                });
            });
        }
        else {
            this.filteredData = this.report_data;
        }
    };
    VehicleMonitoringV2Component.prototype.goToReport3 = function () {
        var el = document.getElementById('screen3');
        el.scrollIntoView({ behavior: 'smooth' });
    };
    VehicleMonitoringV2Component.prototype.getAgentList = function () {
        var _this = this;
        this.meta.getTrafficAgents().subscribe(function (res) {
            _this.agents = res;
            _this.getSites(_this.agents[0].name);
        }, function (err) { });
    };
    VehicleMonitoringV2Component.prototype.onChangeTrafficAgent = function (agentName) {
        this.getSites(agentName);
    };
    VehicleMonitoringV2Component.prototype.getSites = function (agentName) {
        var _this = this;
        this.agentService.getSites(agentName).subscribe(function (res) {
            _this.sites = res.sites;
        }, function (err) {
            console.log('>>>>Err', err);
        });
    };
    VehicleMonitoringV2Component.prototype.fetch = function () {
        var _this = this;
        if (this.filterForm.value.traffic_agent) {
            this.filters.traffic_agent = this.filterForm.value.traffic_agent;
        }
        else {
            this.filters.traffic_agent = '';
        }
        this.loading = true;
        this.loaded = false;
        this.report_data = [];
        this.agentService.getMaitanenceTrucksData(this.filters).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            res.result.forEach(function (element) {
                element.editing = false;
                element.formatted_time = element.time;
                if (element.tyre_maintenance === 'Yes' || element.tyre_maintenance === true) {
                    element.tyre_maint = true;
                    element.tyre_maintenance = true;
                    element.tyre_m = 'Yes';
                }
                else {
                    element.tyre_maint = false;
                    element.tyre_maintenance = false;
                    element.tyre_m = 'No';
                }
                if (element.truck_maintenance === 'Yes' || element.truck_maintenance === true) {
                    element.truck_maint = true;
                    element.truck_maintenance = true;
                    element.truck_m = 'Yes';
                }
                else {
                    element.truck_maint = false;
                    element.truck_maintenance = false;
                    element.truck_m = 'No';
                }
                var c = moment().subtract(360, 'minutes').format('YYYY-MM-DD HH:mm:ss');
                var g = moment(element.time).format('YYYY-MM-DD HH:mm:ss');
                var active_time = moment.utc(g, 'YYYY-MM-DD[T]HH:mm[Z]');
                var current_time = moment.utc(c, 'YYYY-MM-DD[T]HH:mm[Z]');
                // console.log('>>>>>>active_time : ', active_time);
                // console.log('>>>>>>current_time : ', current_time);
                // console.log('>>>>>> : ', );
                if (active_time.isAfter(current_time) === false) {
                    console.log('>>>>>>active_time : ', active_time);
                    element.is_after = true;
                }
                else {
                    element.is_after = false;
                }
            });
            console.log('>>>>>>active_time : ', res.result);
            _this.report_data = res.result;
            _this.filterTruckData();
        }, function (err) {
            _this.loading = false;
            _this.loaded = true;
            console.log('>>>>>>err', err);
        });
    };
    VehicleMonitoringV2Component.prototype.edit = function (data) {
        data.editing = true;
    };
    VehicleMonitoringV2Component.prototype.cancel = function (data) {
        data.editing = false;
    };
    VehicleMonitoringV2Component.prototype.update = function (record) {
        var _this = this;
        var data = JSON.parse(JSON.stringify(record));
        // data.time = moment(data.time.hour + ':' + data.time.minute + ':' + data.time.second, 'HH:mm:ss').format();
        // record.formatted_time = data.time;
        // console.log(record.formatted_time);
        if (data.truck_maintenance === true || data.truck_maintenance === 'Yes') {
            data.truck_maintenance = 'Yes';
        }
        else {
            data.truck_maintenance = 'No';
        }
        if (data.tyre_maintenance === true || data.tyre_maintenance === 'Yes') {
            data.tyre_maintenance = 'Yes';
        }
        else {
            data.tyre_maintenance = 'No';
        }
        this.loading = true;
        this.agentService.saveMaintanenceDate(data).subscribe(function (resp) {
            _this.agentService.updateMaintanenceDate(data).subscribe(function (res) {
                console.log('>>>>>>resp', resp);
                console.log('>>>>>>res', res);
                _this.loading = false;
                record.editing = false;
                _this.toastr.success('Updated successfully.');
                _this.fetch();
            }, function (err) {
                _this.loading = false;
                record.editing = false;
                _this.toastr.error('Could not add monitoring data. Something went wrong. We are looking into it.');
                console.log('>>>>>>err', err);
                _this.fetch();
            });
        }, function (err) {
            _this.toastr.error('Could not save monitoring data. Something went wrong. We are looking into it.');
            console.log('>>>>>>err', err);
        });
    };
    VehicleMonitoringV2Component.prototype.onTruckNoClick = function (r) {
        var _this = this;
        r.loading = true;
        this.agentService.getMonitoringDataByTruck({ truckno: r.truckno }).subscribe(function (res) {
            _this.selected_truck = res.result;
            _this.dateWiseFrom.controls['truck_no'].setValue(_this.selected_truck.truckno);
            _this.dateWiseFrom.controls['start_date'].setValue(_this.calendar.getToday());
            _this.dateWiseFrom.controls['end_date'].setValue(_this.calendar.getToday());
            _this.monthWiseForms.controls['start_date'].setValue(_this.calendar.getToday());
            _this.monthWiseForms.controls['end_date'].setValue(_this.calendar.getToday());
            _this.monthWiseForms.controls['truck_no'].setValue(_this.selected_truck.truckno);
            _this.performanceForms.controls['truck_no'].setValue(_this.selected_truck.truckno);
            _this.performanceForms.controls['year'].setValue(moment().year());
            _this.fetchDateWiseData();
            setTimeout(function () {
                r.loading = false;
                var el = document.getElementById('section2');
                el.scrollIntoView({ behavior: 'smooth' });
            }, 2000);
            // this.sectoion2DivRef.scrollIntoView(});
        }, function (err) {
            r.loading = false;
            _this.toastr.error('Something went wrong when getting truck data.', 'Error');
        });
    };
    VehicleMonitoringV2Component.prototype.onReportParameterChange = function (val) {
        console.log(val);
        this.active_report = val;
    };
    VehicleMonitoringV2Component.prototype.fetchDateWiseData = function () {
        var _this = this;
        var sDate = this.dateWiseFrom.value.start_date;
        var eDate = this.dateWiseFrom.value.end_date;
        sDate = sDate.year + '-' + sDate.month + '-' + sDate.day;
        eDate = eDate.year + '-' + eDate.month + '-' + eDate.day;
        var stDate = moment(sDate, 'YYYY-MM-DD');
        var edDate = moment(eDate, 'YYYY-MM-DD');
        if (stDate <= edDate) {
            if (this.dateWiseFrom.value.start_date) {
                this.dateFilters.start_date = sDate;
            }
            else {
                this.dateFilters.start_date = '';
            }
            if (this.dateWiseFrom.value.end_date) {
                this.dateFilters.end_date = eDate;
            }
            else {
                this.dateFilters.end_date = '';
            }
            if (this.dateWiseFrom.value.truck_no) {
                this.dateFilters.truck_no = this.dateWiseFrom.value.truck_no;
            }
            else {
                this.dateFilters.truck_no = '';
            }
            this.loading = true;
            this.loaded = false;
            this.dateWiseReport = [];
            this.agentService.getDateWiseReport(this.dateFilters).subscribe(function (res) {
                _this.loading = false;
                _this.loaded = true;
                res.result.forEach(function (element) {
                    element.date = moment(element.date, 'YYYY-MM-DD').format('DD/MM/YYYY');
                });
                _this.dateWiseReport = res.result;
                console.log(' Date wise report', res.result);
                _this.agentService.getSummaryReport(_this.dateFilters).subscribe(function (res1) {
                    _this.loading = false;
                    _this.loaded = true;
                    _this.summaryReport = res1.result;
                    console.log(' Summary report', res1.result);
                }, function (err1) {
                    _this.loading = false;
                    _this.loaded = true;
                    console.log('>>>>Err', err1);
                });
            }, function (err) {
                _this.loading = false;
                _this.loaded = true;
                console.log('>>>>Err', err);
            });
        }
        else {
            this.toastr.error('Start date cannot be greater then end date.');
        }
    };
    VehicleMonitoringV2Component.prototype.fetchMonthWiseData = function () {
        var _this = this;
        var sDate = this.monthWiseForms.value.start_date;
        var eDate = this.monthWiseForms.value.end_date;
        sDate = sDate.year + '-' + sDate.month + '-' + sDate.day;
        eDate = eDate.year + '-' + eDate.month + '-' + eDate.day;
        var stDate = moment(sDate, 'YYYY-MM-DD');
        var edDate = moment(eDate, 'YYYY-MM-DD');
        if (stDate <= edDate) {
            if (this.monthWiseForms.value.start_date) {
                this.monthFilters.start_date = sDate;
            }
            else {
                this.monthFilters.start_date = '';
            }
            if (this.monthWiseForms.value.end_date) {
                this.monthFilters.end_date = eDate;
            }
            else {
                this.monthFilters.end_date = '';
            }
            if (this.monthWiseForms.value.truck_no) {
                this.monthFilters.truckno = this.monthWiseForms.value.truck_no;
            }
            else {
                this.monthFilters.truckno = '';
            }
            this.loading = true;
            this.loaded = false;
            this.monthWiseReport = [];
            this.agentService.getMonthWiseReport(this.monthFilters).subscribe(function (res) {
                _this.loading = false;
                _this.loaded = true;
                _this.monthWiseReport = res.result;
            }, function (err) {
                _this.loading = false;
                _this.loaded = true;
                console.log('>>>>Err', err);
            });
        }
        else {
            this.toastr.error('Start date cannot be greater then end date.');
        }
    };
    VehicleMonitoringV2Component.prototype.fetchPerformanceWiseData = function () {
        var _this = this;
        if (this.performanceForms.value.year) {
            this.performanceFilters.year = this.performanceForms.value.year;
        }
        else {
            this.performanceFilters.year = '';
        }
        if (this.performanceForms.value.truck_no) {
            this.performanceFilters.truckno = this.performanceForms.value.truck_no;
        }
        else {
            this.performanceFilters.truckno = '';
        }
        this.loading = true;
        this.loaded = false;
        this.performanceWiseReport = [];
        this.agentService.getPerfromanceWiseReport(this.performanceFilters).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            _this.performanceWiseReport = res.result;
        }, function (err) {
            _this.loading = false;
            _this.loaded = true;
            console.log('>>>>Err', err);
        });
    };
    VehicleMonitoringV2Component.prototype.exportDateWiseReport = function () {
        this.excelService.exportAsExcelFile(this.dateWiseReport, this.dateWiseFrom.value.truck_no + '_daily');
    };
    VehicleMonitoringV2Component.prototype.exportMonthWiseReport = function () {
        this.excelService.exportAsExcelFile(this.monthWiseReport, this.monthWiseForms.value.truck_no + '_monthly');
    };
    VehicleMonitoringV2Component.prototype.getHistoryTabData = function () {
        var _this = this;
        console.log('><<<<<<<<<<<<Value', this.historyForm.value.truck_no);
        if (this.historyForm.value.truck_no) {
            this.historyFormFilters.truck_no = this.historyForm.value.truck_no;
        }
        else {
            this.historyFormFilters.truck_no = '';
        }
        this.loading = true;
        this.loaded = false;
        this.historyReports = [];
        this.agentService.getMonitoringList(this.historyFormFilters).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            res.result.forEach(function (element) {
                element.date = moment(element.date).format('DD/MM/YYYY');
                element.time = moment(element.time).format('HH:mm:ss');
            });
            _this.historyReports = res.result;
        }, function (err) {
            _this.loading = false;
            _this.loaded = true;
            console.log('>>>>Err', err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('section2'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], VehicleMonitoringV2Component.prototype, "sectoion2DivRef", void 0);
    VehicleMonitoringV2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle-monitoring-v2',
            template: __webpack_require__(/*! ./vehicle-monitoring-v2.component.html */ "./src/app/layout/traffic-agent/components/vehicle-monitoring-v2/vehicle-monitoring-v2.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-monitoring-v2.component.scss */ "./src/app/layout/traffic-agent/components/vehicle-monitoring-v2/vehicle-monitoring-v2.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_traffic_agent_service__WEBPACK_IMPORTED_MODULE_2__["TrafficAgentService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__["MetaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_7__["SiteService"],
            src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCalendar"]])
    ], VehicleMonitoringV2Component);
    return VehicleMonitoringV2Component;
}());



/***/ }),

/***/ "./src/app/layout/traffic-agent/components/vehicle-monitoring/vehicle-monitoring.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/vehicle-monitoring/vehicle-monitoring.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\">\r\n        <form [formGroup]=\"filterForm\" novalidate>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <h4><i class=\"fa fa-truck\"></i> Vehicle Monitoring</h4>\r\n              <hr />\r\n            </div>\r\n            <div class=\"col-md-3 col-xs-12 col-sm-12 col-lg-3\">\r\n              <div class=\"form-group\">\r\n                <label>Traffic Agent*</label>\r\n                <select formControlName=\"traffic_agent\" class=\"form-control\" (change)=\"onChangeTrafficAgent($event.target.value)\">\r\n                  <option value=\"\">--Select All--</option>\r\n                  <option *ngFor=\"let a of agents\" value=\"{{ a.name }}\">\r\n                    {{ a.name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3 col-xs-12 col-sm-12 col-lg-3\">\r\n              <button (click)=\"fetch()\" class=\"btn btn-warning mg-top-26\"><i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch </button>&nbsp;&nbsp;\r\n              <a routerLink=\"/traffic-agent/vehicle-monitoring/reports\" class=\"btn btn-primary mg-top-26\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i> Report 22</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n      <hr />\r\n      <!-- <ngb-pagination\r\n        [(page)]=\"pagination.currenPage\"\r\n        [pageSize]=\"pagination.pageSize\"\r\n        [collectionSize]=\"pagination.total\"\r\n        [maxSize]=\"pagination.maxSize\"\r\n        (pageChange)=\"fetchReport()\"\r\n      ></ngb-pagination> -->\r\n      <!-- <p>\r\n        <strong>Total:</strong> {{ pagination.total }}, <strong>Records per page:</strong> {{ pagination.pageSize }},\r\n        <strong>Showing:</strong> {{ (pagination.currenPage - 1) * pagination.pageSize }} -\r\n        {{ (pagination.currenPage - 1) * pagination.pageSize + 50 }}\r\n      </p> -->\r\n      \r\n      <form [formGroup]=\"editForm\" class=\"table-overflow\">\r\n        <div class=\"zui-scroller\">\r\n          <table class=\"table mytable zui-table\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"zui-sticky-col zui-1\">Sr.No</th>\r\n                <th class=\"zui-sticky-col zui-2\">Vehicle No.</th>\r\n                <th>Lrno</th>\r\n                <th>Date</th>\r\n                <th>From</th>\r\n                <th>Destination</th>\r\n                <th>M.Ton</th>\r\n                <th>Customer Name</th>\r\n                <th>Map</th>\r\n                <th>Km Run</th>\r\n                <th>Current Location</th>\r\n                <th>Trips Status</th>\r\n                <th>Remark</th>\r\n                <th>Completed</th>\r\n                <th align=\"center\">Actions</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"loading\">\r\n                <td colspan=\"14\">\r\n                  <div class=\"showbox\">\r\n                    <div class=\"loader\">\r\n                      <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                        <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                      </svg>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr *ngFor=\"let report of report_data\">\r\n                <td class=\"zui-sticky-col zui-1\">{{report.srno ? report.srno : '--'}}</td>\r\n                <td class=\"zui-sticky-col zui-2\"><a [routerLink]=\"['/traffic-agent/vehicle-monitoring/reports', {truck_no: report.truckno}]\">{{report.truckno ? report.truckno : '--'}}</a></td>\r\n                <td>{{report.lrno ? report.lrno : '--'}}</td>\r\n                <td>{{report.date ? report.date : '--'}}</td>\r\n                <td>{{report.from ? report.from : '--'}}</td>\r\n                <td>{{report.to ? report.to : '--'}}</td>\r\n                <td>{{report.m_ton ? report.m_ton : '--'}}</td>\r\n                <td>{{report.customer_name ? report.customer_name : '--'}}</td>\r\n                <td>{{report.map ? report.map : '--'}}</td>\r\n\r\n                <td *ngIf=\"!report.editing\">\r\n                    {{report.km ? report.km : '--'}}\r\n                </td>\r\n                <td *ngIf=\"report.editing\">\r\n                  <input class=\"form-control\" formControlName=\"km_run\" type=\"number\" >\r\n                </td>\r\n\r\n                <td *ngIf=\"!report.editing\">{{report.currentlocation ? report.currentlocation : '--'}}</td>\r\n                <td *ngIf=\"report.editing\">\r\n                  <input class=\"form-control\" formControlName=\"current_location\" type=\"text\" >\r\n                </td>\r\n\r\n                <td *ngIf=\"!report.editing\">{{report.tripsstatus ? report.tripsstatus : '--'}}</td>\r\n                <td *ngIf=\"report.editing\">\r\n                  <select class=\"form-control\" formControlName=\"trip_status\">\r\n                    <option *ngFor=\"let t of tripStatus\" value=\"{{ t.name }}\">{{t.name}}</option>\r\n                  </select>    \r\n                </td>\r\n\r\n                <td *ngIf=\"!report.editing\">{{report.remark ? report.remark : '--'}}</td>\r\n                <td *ngIf=\"report.editing\">\r\n                  <input class=\"form-control\" formControlName=\"remark\" type=\"text\" >\r\n                </td>\r\n                \r\n                <td *ngIf=\"!report.editing\">{{report.completed ? report.completed : '--'}}</td>\r\n                <td *ngIf=\"report.editing\">\r\n                  <select class=\"form-control\" formControlName=\"completed\">\r\n                    <option *ngFor=\"let c of completed\" value=\"{{ c.name }}\">{{c.name}}</option>\r\n                  </select>\r\n                </td>\r\n                \r\n                <td>\r\n                  <button class=\"btn btn-primary\" (click)=\"edit(report)\">Edit</button>&nbsp;&nbsp;\r\n                  <button *ngIf=\"report.editing\" class=\"btn btn-danger\" (click)=\"cancel(report)\">Cancel</button>&nbsp;&nbsp;\r\n                  <button *ngIf=\"report.editing\" class=\"btn btn-success\" (click)=\"update(report)\">Update</button>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"loaded && report_data.length === 0 \">\r\n                <td align=\"center\" colspan=\"14\">No data available</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </form>\r\n      <!-- <ngb-pagination\r\n        [(page)]=\"pagination.currenPage\"\r\n        [pageSize]=\"pagination.pageSize\"\r\n        [collectionSize]=\"pagination.total\"\r\n        [maxSize]=\"pagination.maxSize\"\r\n        (pageChange)=\"fetchReport()\"\r\n      ></ngb-pagination> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/traffic-agent/components/vehicle-monitoring/vehicle-monitoring.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/vehicle-monitoring/vehicle-monitoring.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mg-top-26 {\n  margin-top: 26px; }\n\n.zui-table th.zui-sticky-col {\n  height: 39px; }\n\n.zui-table td.zui-sticky-col {\n  height: 57px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RyYWZmaWMtYWdlbnQvY29tcG9uZW50cy92ZWhpY2xlLW1vbml0b3JpbmcvRDpcXHRlc3RpbmdfZm9sZGVyXFx0aGlydVxcZnJvbnRlbmRcXHRkX2Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHRyYWZmaWMtYWdlbnRcXGNvbXBvbmVudHNcXHZlaGljbGUtbW9uaXRvcmluZ1xcdmVoaWNsZS1tb25pdG9yaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQTZCLFlBQVksRUFBQTs7QUFDekM7RUFBNkIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3RyYWZmaWMtYWdlbnQvY29tcG9uZW50cy92ZWhpY2xlLW1vbml0b3JpbmcvdmVoaWNsZS1tb25pdG9yaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1nLXRvcC0yNiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xyXG59XHJcblxyXG4uenVpLXRhYmxlIHRoLnp1aS1zdGlja3ktY29se2hlaWdodDogMzlweDt9XHJcbi56dWktdGFibGUgdGQuenVpLXN0aWNreS1jb2x7aGVpZ2h0OiA1N3B4O30iXX0= */"

/***/ }),

/***/ "./src/app/layout/traffic-agent/components/vehicle-monitoring/vehicle-monitoring.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/components/vehicle-monitoring/vehicle-monitoring.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: VehicleMonitoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleMonitoringComponent", function() { return VehicleMonitoringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_traffic_agent_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/traffic-agent.service */ "./src/app/shared/services/traffic-agent.service.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VehicleMonitoringComponent = /** @class */ (function () {
    function VehicleMonitoringComponent(agentService, meta, fb, toastr) {
        this.agentService = agentService;
        this.meta = meta;
        this.fb = fb;
        this.toastr = toastr;
        this.agents = [];
        this.sites = [];
        this.loading = false;
        this.loaded = true;
        // pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.filters = {
            traffic_agent: '',
            site_name: ''
        };
        this.report_data = [];
        this.tripStatus = [
            { name: 'Loading' },
            { name: 'Unloading' },
            { name: 'On the Way' },
            { name: 'Party Haulting' },
            { name: 'Plant Haulting' },
            { name: 'Not Unloaded' },
            { name: 'Accident' },
            { name: 'Maintenance' },
            { name: 'On site' },
            { name: 'Return to Plant' }
        ];
        this.completed = [
            { name: 'Yes' },
            { name: 'No' },
        ];
        this.filterForm = this.fb.group({
            traffic_agent: [''],
            site_name: ['']
        });
        this.editForm = this.fb.group({
            km_run: [''],
            current_location: [''],
            trip_status: [''],
            remark: [''],
            completed: ['']
        });
    }
    VehicleMonitoringComponent.prototype.ngOnInit = function () {
        this.getAgentList();
    };
    VehicleMonitoringComponent.prototype.getAgentList = function () {
        var _this = this;
        this.meta.getTrafficAgents().subscribe(function (res) {
            _this.agents = res;
            _this.filterForm.controls['traffic_agent'].setValue(_this.agents[0].name);
            _this.getSites(_this.agents[0].name);
        }, function (err) { });
    };
    VehicleMonitoringComponent.prototype.onChangeTrafficAgent = function (agentName) {
        this.getSites(agentName);
    };
    VehicleMonitoringComponent.prototype.getSites = function (agentName) {
        var _this = this;
        this.agentService.getSites(agentName).subscribe(function (res) {
            _this.sites = res.sites;
        }, function (err) {
            console.log('>>>>Err', err);
        });
    };
    VehicleMonitoringComponent.prototype.fetch = function () {
        var _this = this;
        if (this.filterForm.value.traffic_agent) {
            this.filters.traffic_agent = this.filterForm.value.traffic_agent;
        }
        else {
            this.filters.traffic_agent = '';
        }
        this.loading = true;
        this.loaded = false;
        this.report_data = [];
        this.agentService.getMonitoringData(this.filters).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            res.result.forEach(function (element) {
                element.editing = false;
                element.date = moment(element.date, 'YYYY-MM-DD').format('DD/MM/YYYY');
            });
            _this.report_data = res.result;
        }, function (err) {
            _this.loading = false;
            _this.loaded = true;
            console.log('>>>>>>err', err);
        });
    };
    VehicleMonitoringComponent.prototype.edit = function (data) {
        data.editing = true;
        this.editForm.controls['km_run'].setValue(data.km);
        this.editForm.controls['current_location'].setValue(data.currentlocation);
        this.editForm.controls['trip_status'].setValue(data.tripsstatus);
        this.editForm.controls['remark'].setValue(data.remark);
        this.editForm.controls['completed'].setValue(data.completed);
    };
    VehicleMonitoringComponent.prototype.cancel = function (data) {
        data.editing = false;
    };
    VehicleMonitoringComponent.prototype.update = function (data) {
        var _this = this;
        var obj = {
            tripsstatus: this.editForm.value.trip_status,
            currentlocation: this.editForm.value.current_location,
            remark: this.editForm.value.remark,
            newkm: this.editForm.value.km_run,
            completed: this.editForm.value.completed
        };
        this.loading = true;
        this.agentService.updateMonitoringData(data.id, obj).subscribe(function (res) {
            _this.loading = false;
            data.editing = false;
            data.km = _this.editForm.value.km_run;
            data.currentlocation = _this.editForm.value.current_location;
            data.tripsstatus = _this.editForm.value.trip_status;
            data.remark = _this.editForm.value.remark;
            data.completed = _this.editForm.value.completed;
            _this.toastr.success('Vehicle monitoring updated successfully.');
        }, function (err) {
            _this.loading = false;
            data.editing = false;
            _this.toastr.error('Something went wrong.');
            console.log('>>>>>>err', err);
        });
    };
    VehicleMonitoringComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle-monitoring',
            template: __webpack_require__(/*! ./vehicle-monitoring.component.html */ "./src/app/layout/traffic-agent/components/vehicle-monitoring/vehicle-monitoring.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./vehicle-monitoring.component.scss */ "./src/app/layout/traffic-agent/components/vehicle-monitoring/vehicle-monitoring.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_traffic_agent_service__WEBPACK_IMPORTED_MODULE_3__["TrafficAgentService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], VehicleMonitoringComponent);
    return VehicleMonitoringComponent;
}());



/***/ }),

/***/ "./src/app/layout/traffic-agent/traffic-agent-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/traffic-agent-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/traffic-agent/traffic-agent-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/layout/traffic-agent/traffic-agent-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90cmFmZmljLWFnZW50L3RyYWZmaWMtYWdlbnQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/traffic-agent/traffic-agent-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/traffic-agent/traffic-agent-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: TrafficAgentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficAgentListComponent", function() { return TrafficAgentListComponent; });
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

var TrafficAgentListComponent = /** @class */ (function () {
    function TrafficAgentListComponent() {
    }
    TrafficAgentListComponent.prototype.ngOnInit = function () {
    };
    TrafficAgentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-traffic-agent-list',
            template: __webpack_require__(/*! ./traffic-agent-list.component.html */ "./src/app/layout/traffic-agent/traffic-agent-list.component.html"),
            styles: [__webpack_require__(/*! ./traffic-agent-list.component.scss */ "./src/app/layout/traffic-agent/traffic-agent-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TrafficAgentListComponent);
    return TrafficAgentListComponent;
}());



/***/ }),

/***/ "./src/app/layout/traffic-agent/traffic-agent-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/traffic-agent/traffic-agent-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: TrafficAgentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficAgentRoutingModule", function() { return TrafficAgentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _traffic_agent_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./traffic-agent-list.component */ "./src/app/layout/traffic-agent/traffic-agent-list.component.ts");
/* harmony import */ var _components_vehicle_monitoring_reports_vehicle_monitoring_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/vehicle-monitoring-reports/vehicle-monitoring-reports.component */ "./src/app/layout/traffic-agent/components/vehicle-monitoring-reports/vehicle-monitoring-reports.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/layout/traffic-agent/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_vehicle_monitoring_v2_vehicle_monitoring_v2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/vehicle-monitoring-v2/vehicle-monitoring-v2.component */ "./src/app/layout/traffic-agent/components/vehicle-monitoring-v2/vehicle-monitoring-v2.component.ts");
/* harmony import */ var _components_add_trafficagent_master_add_trafficagent_master_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-trafficagent-master/add-trafficagent-master.component */ "./src/app/layout/traffic-agent/components/add-trafficagent-master/add-trafficagent-master.component.ts");
/* harmony import */ var _components_list_trafficagent_master_list_trafficagent_master_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/list-trafficagent-master/list-trafficagent-master.component */ "./src/app/layout/traffic-agent/components/list-trafficagent-master/list-trafficagent-master.component.ts");
/* harmony import */ var _components_edit_trafficagent_master_edit_trafficagent_master_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/edit-trafficagent-master/edit-trafficagent-master.component */ "./src/app/layout/traffic-agent/components/edit-trafficagent-master/edit-trafficagent-master.component.ts");
/* harmony import */ var _components_trafficagentmaster_reslover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/trafficagentmaster-reslover */ "./src/app/layout/traffic-agent/components/trafficagentmaster-reslover.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// trafficagent-master




var routes = [
    {
        path: '',
        component: _traffic_agent_list_component__WEBPACK_IMPORTED_MODULE_2__["TrafficAgentListComponent"],
        children: [
            { path: '', redirectTo: 'vehicle-monitoring', pathMatch: 'prefix' },
            { path: 'vehicle-monitoring', component: _components_vehicle_monitoring_v2_vehicle_monitoring_v2_component__WEBPACK_IMPORTED_MODULE_5__["VehicleMonitoringV2Component"] },
            { path: 'vehicle-monitoring/reports', component: _components_vehicle_monitoring_reports_vehicle_monitoring_reports_component__WEBPACK_IMPORTED_MODULE_3__["VehicleMonitoringReportsComponent"] },
            { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            // Trafic Agent master
            { path: 'trafficagent-master', component: _components_list_trafficagent_master_list_trafficagent_master_component__WEBPACK_IMPORTED_MODULE_7__["ListTrafficagentMasterComponent"] },
            { path: 'trafficagent-master/:id/edit', component: _components_edit_trafficagent_master_edit_trafficagent_master_component__WEBPACK_IMPORTED_MODULE_8__["EditTrafficagentMasterComponent"], resolve: { tam_details: _components_trafficagentmaster_reslover__WEBPACK_IMPORTED_MODULE_9__["TrafficagentmasterReslover"] } },
            { path: 'add-trafficagent-master', component: _components_add_trafficagent_master_add_trafficagent_master_component__WEBPACK_IMPORTED_MODULE_6__["AddTrafficagentMasterComponent"] },
        ]
    }
];
var TrafficAgentRoutingModule = /** @class */ (function () {
    function TrafficAgentRoutingModule() {
    }
    TrafficAgentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TrafficAgentRoutingModule);
    return TrafficAgentRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/traffic-agent/traffic-agent.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/traffic-agent/traffic-agent.module.ts ***!
  \**************************************************************/
/*! exports provided: TrafficAgentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficAgentModule", function() { return TrafficAgentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _traffic_agent_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./traffic-agent-list.component */ "./src/app/layout/traffic-agent/traffic-agent-list.component.ts");
/* harmony import */ var _components_vehicle_monitoring_vehicle_monitoring_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/vehicle-monitoring/vehicle-monitoring.component */ "./src/app/layout/traffic-agent/components/vehicle-monitoring/vehicle-monitoring.component.ts");
/* harmony import */ var _traffic_agent_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./traffic-agent-routing.module */ "./src/app/layout/traffic-agent/traffic-agent-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_vehicle_monitoring_reports_vehicle_monitoring_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/vehicle-monitoring-reports/vehicle-monitoring-reports.component */ "./src/app/layout/traffic-agent/components/vehicle-monitoring-reports/vehicle-monitoring-reports.component.ts");
/* harmony import */ var ng2_auto_complete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-auto-complete */ "./node_modules/ng2-auto-complete/dist/index.js");
/* harmony import */ var ng2_auto_complete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_auto_complete__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/layout/traffic-agent/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_vehicle_monitoring_v2_vehicle_monitoring_v2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/vehicle-monitoring-v2/vehicle-monitoring-v2.component */ "./src/app/layout/traffic-agent/components/vehicle-monitoring-v2/vehicle-monitoring-v2.component.ts");
/* harmony import */ var _components_add_trafficagent_master_add_trafficagent_master_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-trafficagent-master/add-trafficagent-master.component */ "./src/app/layout/traffic-agent/components/add-trafficagent-master/add-trafficagent-master.component.ts");
/* harmony import */ var _components_edit_trafficagent_master_edit_trafficagent_master_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/edit-trafficagent-master/edit-trafficagent-master.component */ "./src/app/layout/traffic-agent/components/edit-trafficagent-master/edit-trafficagent-master.component.ts");
/* harmony import */ var _components_list_trafficagent_master_list_trafficagent_master_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/list-trafficagent-master/list-trafficagent-master.component */ "./src/app/layout/traffic-agent/components/list-trafficagent-master/list-trafficagent-master.component.ts");
/* harmony import */ var _components_trafficagentmaster_reslover__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/trafficagentmaster-reslover */ "./src/app/layout/traffic-agent/components/trafficagentmaster-reslover.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// traffic agent master




var TrafficAgentModule = /** @class */ (function () {
    function TrafficAgentModule() {
    }
    TrafficAgentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _traffic_agent_list_component__WEBPACK_IMPORTED_MODULE_2__["TrafficAgentListComponent"],
                _components_vehicle_monitoring_vehicle_monitoring_component__WEBPACK_IMPORTED_MODULE_3__["VehicleMonitoringComponent"],
                _components_vehicle_monitoring_reports_vehicle_monitoring_reports_component__WEBPACK_IMPORTED_MODULE_9__["VehicleMonitoringReportsComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _components_vehicle_monitoring_v2_vehicle_monitoring_v2_component__WEBPACK_IMPORTED_MODULE_12__["VehicleMonitoringV2Component"],
                _components_add_trafficagent_master_add_trafficagent_master_component__WEBPACK_IMPORTED_MODULE_13__["AddTrafficagentMasterComponent"],
                _components_edit_trafficagent_master_edit_trafficagent_master_component__WEBPACK_IMPORTED_MODULE_14__["EditTrafficagentMasterComponent"],
                _components_list_trafficagent_master_list_trafficagent_master_component__WEBPACK_IMPORTED_MODULE_15__["ListTrafficagentMasterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _traffic_agent_routing_module__WEBPACK_IMPORTED_MODULE_4__["TrafficAgentRoutingModule"],
                ng2_auto_complete__WEBPACK_IMPORTED_MODULE_10__["Ng2AutoCompleteModule"]
            ],
            providers: [
                _components_trafficagentmaster_reslover__WEBPACK_IMPORTED_MODULE_16__["TrafficagentmasterReslover"]
            ],
        })
    ], TrafficAgentModule);
    return TrafficAgentModule;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, noTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTransition", function() { return noTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function routerTransition() {
    return noTransition();
}
function noTransition() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', []);
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


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



/***/ }),

/***/ "./src/app/shared/services/traffic-agent.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/traffic-agent.service.ts ***!
  \**********************************************************/
/*! exports provided: TrafficAgentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficAgentService", function() { return TrafficAgentService; });
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


var TrafficAgentService = /** @class */ (function () {
    function TrafficAgentService(api) {
        this.api = api;
    }
    TrafficAgentService.prototype.getSites = function (agentName) {
        return this.api.get('site_assign_to_traffic_agents/select_traffic_agent?ta_name=' + agentName);
    };
    TrafficAgentService.prototype.getMonitoringData = function (filters) {
        return this.api.get('vehicle_monitoring/by_site', filters);
    };
    TrafficAgentService.prototype.updateMonitoringData = function (id, data) {
        return this.api.put('vehicle_monitoring/update?id=' + id, data);
    };
    TrafficAgentService.prototype.getDateWiseReport = function (filters) {
        return this.api.get('vehicle_monitoring/daily', filters);
    };
    TrafficAgentService.prototype.getSummaryReport = function (filters) {
        return this.api.get('vehicle_monitoring/summary', filters);
    };
    TrafficAgentService.prototype.getMonthWiseReport = function (filters) {
        return this.api.get('vehicle_monitoring/monthly', filters);
    };
    TrafficAgentService.prototype.getPerfromanceWiseReport = function (filters) {
        return this.api.get('vehicle_monitoring/performance?', filters);
    };
    TrafficAgentService.prototype.getDashboardList = function (filters) {
        return this.api.get('vehicle_monitoring/performance?', filters);
    };
    TrafficAgentService.prototype.getMaitanenceTrucksData = function (filters) {
        return this.api.get('vehicle_monitoring/screen_one', filters);
    };
    TrafficAgentService.prototype.updateMaintanenceDate = function (data) {
        return this.api.post('vehicle_monitoring/add_maintenance', data);
    };
    TrafficAgentService.prototype.getMonitoringDataByTruck = function (params) {
        return this.api.get('vehicle_monitoring/by_truck', params);
    };
    TrafficAgentService.prototype.saveMaintanenceDate = function (data) {
        return this.api.post('vehicle_monitoring/save_maintenance', data);
    };
    TrafficAgentService.prototype.getMonitoringList = function (filters) {
        return this.api.get('vehicle_monitoring/maintenance_list', filters);
    };
    TrafficAgentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], TrafficAgentService);
    return TrafficAgentService;
}());



/***/ })

}]);
//# sourceMappingURL=traffic-agent-traffic-agent-module.js.map