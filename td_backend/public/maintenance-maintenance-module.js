(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maintenance-maintenance-module"],{

/***/ "./src/app/layout/maintenance/add-engine-typemaster/add-engine-typemaster.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/maintenance/add-engine-typemaster/add-engine-typemaster.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"etmForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Add Engine Type Master</div>\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n          <div class=\"col-md-3\">\n            <label class=\"required\">Engine Type Name</label>\n            <input type=\"text\" formControlName=\"enginetype\" class=\"form-control manual-entry\"\n              placeholder=\"Name\">\n          </div>\n    </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Job Work Details\n                <button class=\"btn btn-primary float-right\" (click)=\"addEtmitems()\" [disabled]=\"!etmForm.valid\"\n                  type=\"button\">\n                  Add Job Work Name Details\n                </button>\n              </div>\n              <!-- /.box-header -->\n              <div class=\"card-body\" *ngIf=\"etmForm.controls.multidest.controls.length > 0\">\n                <table class=\"table table-bordered\" formArrayName=\"multidest\">\n                  <tr>\n                    <th>Job Work Name</th>\n                    <th>Km Tolerance</th>\n                    <th>Average</th>\n                    <th>Action</th>\n                  </tr>\n                  \n                  <tr *ngFor=\"let school of etmForm.controls.multidest.controls; let i=index\" formGroupName=\"{{i}}\">\n                    <td>\n                      <div class=\"input-group\">\n                        <select class=\"form-control manual-entry\" formControlName=\"jobworkname\">\n                          <option value=\"\">Select Job Work Name</option>\n                          <option *ngFor=\"let t of jobworkname_option\" [value]=\"t.jobworkname\"> {{t.jobworkname}}</option>\n                        </select>\n                      </div>\n                    </td>\n                    <td>\n                      <input type=\"Number\" formControlName=\"kmtolerance\" class=\"form-control  manual-entry\">\n                    </td>\n\n                    <td>\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"etmForm.controls?.multidest.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                      </button>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n              <div class=\"card-body\" *ngIf=\"etmForm.controls?.multidest.controls.length == 0\">\n                <p>Please select vendor</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!etmForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/layout/maintenance/add-engine-typemaster/add-engine-typemaster.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/maintenance/add-engine-typemaster/add-engine-typemaster.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auto-entry {\n  border: 2px solid #fcbd47 !important; }\n\n.manual-entry {\n  border: 2px solid #51cc51 !important; }\n\n::ng-deep .ng-select.manual-entry {\n  border: 2px solid #51cc51 !important; }\n\n::ng-deep .ng-select.auto-entry {\n  border: 2px solid #fcbd47 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21haW50ZW5hbmNlL2FkZC1lbmdpbmUtdHlwZW1hc3Rlci9EOlxcdGVzdGluZ19mb2xkZXJcXHRoaXJ1XFxmcm9udGVuZFxcdGRfZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcbWFpbnRlbmFuY2VcXGFkZC1lbmdpbmUtdHlwZW1hc3RlclxcYWRkLWVuZ2luZS10eXBlbWFzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQTZDLEVBQUE7O0FBR2pEO0VBQ0ksb0NBQTRDLEVBQUE7O0FBR2hEO0VBQ0ksb0NBQTRDLEVBQUE7O0FBR2hEO0VBQ0ksb0NBQTZDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWFpbnRlbmFuY2UvYWRkLWVuZ2luZS10eXBlbWFzdGVyL2FkZC1lbmdpbmUtdHlwZW1hc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRvLWVudHJ5e1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMjUyLCAxODksIDcxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFudWFsLWVudHJ5e1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoODEsIDIwNCwgODEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmctc2VsZWN0Lm1hbnVhbC1lbnRyeXtcclxuICAgIGJvcmRlcjoycHggc29saWQgcmdiKDgxLCAyMDQsIDgxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm5nLXNlbGVjdC5hdXRvLWVudHJ5e1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMjUyLCAxODksIDcxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/maintenance/add-engine-typemaster/add-engine-typemaster.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/maintenance/add-engine-typemaster/add-engine-typemaster.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddEngineTypemasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEngineTypemasterComponent", function() { return AddEngineTypemasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _maintenance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../maintenance.service */ "./src/app/layout/maintenance/maintenance.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddEngineTypemasterComponent = /** @class */ (function () {
    function AddEngineTypemasterComponent(fb, metaService, ms, router) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.router = router;
    }
    AddEngineTypemasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.etmForm.controls.multidest.valueChanges.subscribe(function (changes) {
            _this.updateValues();
        });
        this.getOptions();
    };
    AddEngineTypemasterComponent.prototype.buildForm = function () {
        this.etmForm = this.fb.group({
            'enginetype': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'multidest': this.fb.array([]),
        });
        this.addEtmitems();
    };
    AddEngineTypemasterComponent.prototype.initItems = function () {
        return this.fb.group({
            'jobworkname': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'kmtolerance': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    AddEngineTypemasterComponent.prototype.addEtmitems = function () {
        var control = this.etmForm.controls['multidest'];
        control.push(this.initItems());
    };
    AddEngineTypemasterComponent.prototype.removeItems = function (i) {
        var control = this.etmForm.controls['multidest'];
        control.removeAt(i);
    };
    AddEngineTypemasterComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var multidest = this.etmForm.controls['multidest'].value;
        var index = multidest.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    AddEngineTypemasterComponent.prototype.save = function () {
        var _this = this;
        console.log('Save', this.etmForm.value);
        this.process = 'saving';
        this.ms.crateEtm(this.etmForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/maintenance/engine-typemaster']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddEngineTypemasterComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getJobWorkNameList().subscribe(function (trackInfo) {
            _this.jobworkname_option = trackInfo['result'];
            // console.log('Job Work Description >>>>>', this.jobworkname_option);
        });
    };
    AddEngineTypemasterComponent.prototype.updateValues = function () {
    };
    AddEngineTypemasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-engine-typemaster',
            template: __webpack_require__(/*! ./add-engine-typemaster.component.html */ "./src/app/layout/maintenance/add-engine-typemaster/add-engine-typemaster.component.html"),
            styles: [__webpack_require__(/*! ./add-engine-typemaster.component.scss */ "./src/app/layout/maintenance/add-engine-typemaster/add-engine-typemaster.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            _maintenance_service__WEBPACK_IMPORTED_MODULE_4__["MaintenanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddEngineTypemasterComponent);
    return AddEngineTypemasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/add-job-work/add-job-work.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/maintenance/add-job-work/add-job-work.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"jwForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Add Job Work</div>\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n          <div class=\"col-md-3\">\n            <label class=\"required\">Site</label>\n            <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n              formControlName=\"site\">\n            </ng-select>\n          </div>\n          <div class=\"col-md-3\">\n            <label class=\"required\">Job type</label>\n            <select class=\"form-control\" formControlName=\"job_type\" (change)=\"generatejobNumber()\">\n              <option value=\"\">Select Job type</option>\n              <option value=\"Job Work\">Job Work</option>\n              <option value=\"Job Card\">Job Card</option>\n            </select>\n          </div>\n          <div class=\"col-md-2\">\n            <label>Job No.</label>\n            <input disabled type=\"text\" formControlName=\"job_number\" class=\"form-control\" placeholder=\"Job No.\">\n          </div>\n\n          <div class=\"col-md-2\">\n            <label class=\"required\">Job date</label>\n            <div class=\"input-group datepicker-input\">\n              <input\n                class=\"form-control\"\n                placeholder=\"dd-mm-yyyy\"\n                name=\"dp2\"\n                formControlName=\"job_date\"\n                ngbDatepicker\n                #d2=\"ngbDatepicker\" \n              />\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-2\">\n            <label class=\"required\">Truck No.</label>\n            <ng-select [items]=\"trucks_option\" placeholder=\"Type and search items\" bindLabel=\"truckno\" bindValue=\"truckno\"\n              formControlName=\"truck_no\">\n            </ng-select>\n          </div>\n          <div class=\"col-md-3\">\n            <label class=\"required\">Km Reading</label>\n            <input type=\"number\" formControlName=\"km_reading\" class=\"form-control\" placeholder=\"Km Reading\">\n          </div>\n          <div class=\"col-md-3\">\n            <label class=\"required\">Vendor</label>\n            <ng-select [items]=\"vendor_option\" placeholder=\"Type and search vendor\" bindLabel=\"name\" bindValue=\"name\"\n              formControlName=\"vendor\">\n            </ng-select>\n          </div>\n\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Engine Type</label>\n              <input type=\"text\" *ngIf=\"!etField\" disabled formControlName=\"enginetype\" class=\"form-control\" placeholder=\"Engine Type\">\n              <input type=\"text\" *ngIf=\"etField\" formControlName=\"enginetype\" class=\"form-control\" placeholder=\"Engine Type\">\n            </div>\n          </div>\n\n          <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <label>Mannual Entry </label>\n              <div class=\"checkbox\">\n                  <label>\n                      <input type=\"checkbox\" formControlName=\"mannualenginetype\" >\n                      Enter Engine Type .?\n                    </label>\n              </div>\n                </div>\n          </div>\n\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Job work items\n                <button class=\"btn btn-primary float-right\" (click)=\"addJwitems()\" [disabled]=\"!jwForm.valid\"\n                  type=\"button\">\n                  Add Job\n                </button>\n              </div>\n              <!-- /.box-header -->\n              <div class=\"card-body\" *ngIf=\"jwForm.controls.job_items.controls.length > 0\">\n                <table class=\"table table-bordered\" formArrayName=\"job_items\">\n                  <tr>\n                    <th>Work To Be Done</th>\n                    <th>Last Done On</th>\n                    <th>Remarks</th>\n                    <th>Next Due Km</th>\n                    <th>Action</th>\n                  </tr>\n                  <tr *ngFor=\"let school of jwForm.controls.job_items.controls; let i=index\" formGroupName=\"{{i}}\">\n                    <td>\n                        <div class=\"input-group\">\n                          <select class=\"form-control\" formControlName=\"worktobedone\">\n                            <option value=\"\">Select Job Description</option>\n                            <option *ngFor=\"let j of jobworkname_option\" [value]=\"j.jobworkname\"> {{j.jobworkname}}</option>\n                          </select>\n                        </div>\n  \n                      </td>\n                    <td>\n                        <div class=\"input-group\">\n                          <select class=\"form-control\">\n                            <input type=\"text\" #ld=\"bsDatepicker\" [bsConfig]=\"{ containerClass: 'theme-blue', 'dateInputFormat': 'DD-MM-YYYY', 'showWeekNumbers': false, 'minDate': currentDate }\" bsDatepicker formControlName=\"lastdoneon\"\n                              class=\"form-control\">\n                            <div class=\"input-group-prepend\" (click)=\"ld.toggle()\">\n                              <span class=\"input-group-text\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n                            </div>\n                          </select>\n                          </div>\n                      </td>                    \n                    <td>\n                      <input type=\"text\" formControlName=\"remarks\"\n                        class=\"form-control remarks\">\n                    </td>\n                    <td>\n                      <input type=\"number\" min=\"0\" formControlName=\"nextduekm\"\n                        class=\"form-control nextduekm\">\n                    </td>\n                    <td>\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"jwForm.controls?.job_items.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                      </button>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n              <div class=\"card-body\" *ngIf=\"jwForm.controls?.job_items.controls.length == 0\">\n                <p>Please select </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        </div>\n      </div>\n      <div class=\"mt-3\">\n        <div class=\"form-group row\">\n          <div class=\"col-md-3\">\n            <label>Bill Amount</label>\n            <input type=\"number\" formControlName=\"bill_amount\" class=\"form-control\" placeholder=\"Bill Amount\">\n          </div>\n          <div class=\"col-md-3\">\n            <label>Approved Amount</label>\n            <input type=\"number\" formControlName=\"app_amount\" class=\"form-control\" placeholder=\"Approved Amount\">\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label class=\"\">Job Remarks</label>\n            <input type=\"text\" formControlName=\"job_remarks\" class=\"form-control\" placeholder=\"Please enter Job Remarks\">\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!jwForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/layout/maintenance/add-job-work/add-job-work.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/maintenance/add-job-work/add-job-work.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWludGVuYW5jZS9hZGQtam9iLXdvcmsvYWRkLWpvYi13b3JrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/maintenance/add-job-work/add-job-work.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/maintenance/add-job-work/add-job-work.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddJobWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddJobWorkComponent", function() { return AddJobWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _maintenance_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../maintenance/maintenance.service */ "./src/app/layout/maintenance/maintenance.service.ts");
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





var AddJobWorkComponent = /** @class */ (function () {
    function AddJobWorkComponent(fb, ms, metaService, router) {
        this.fb = fb;
        this.ms = ms;
        this.metaService = metaService;
        this.router = router;
        this.etField = false;
        this.loading = false;
        this.currentDate = new Date();
        this.usertype = this.metaService.getSiteFromStorage().role;
        this.site_name = this.metaService.getSiteFromStorage().site;
        var current = new Date();
        this.minDate = {
            year: current.getFullYear(),
            month: current.getMonth() + 1,
            day: current.getDate()
        };
    }
    AddJobWorkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bsConfig = Object.assign({}, { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
        this.buildForm();
        this.jwForm.get('truck_no').valueChanges.subscribe(function (val) {
            _this.metaService.getEnginetype(val).subscribe(function (res) {
                _this.jwForm.controls['enginetype'].setValue(null);
                _this.jwForm.patchValue({ 'enginetype': res['enginetype'] });
            });
        });
        this.jwForm.get('mannualenginetype').valueChanges.subscribe(function (val) {
            _this.etField = val;
        });
        this.jwForm.controls.job_items.valueChanges.subscribe(function (changes) {
            _this.updateValues();
        });
        this.jwForm.get('km_reading').valueChanges.subscribe(function (val) {
            _this.updateValues();
        });
        this.getOptions();
        this.getSites();
    };
    AddJobWorkComponent.prototype.buildForm = function () {
        this.jwForm = this.fb.group({
            'site': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'job_type': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'job_number': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'job_date': [{ year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() }],
            'truck_no': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'km_reading': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'enginetype': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mannualenginetype': [''],
            'vendor': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'job_items': this.fb.array([]),
            'bill_amount': ['0'],
            'app_amount': ['0'],
            'job_remarks': [''],
        });
        this.addJwitems();
    };
    AddJobWorkComponent.prototype.initItems = function () {
        return this.fb.group({
            'worktobedone': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'lastdoneon': [''],
            'remarks': [''],
            'nextduekm': [0],
        });
    };
    AddJobWorkComponent.prototype.addJwitems = function () {
        var control = this.jwForm.controls['job_items'];
        control.push(this.initItems());
    };
    AddJobWorkComponent.prototype.removeItems = function (i) {
        var control = this.jwForm.controls['job_items'];
        control.removeAt(i);
    };
    AddJobWorkComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var job_items = this.jwForm.controls['job_items'].value;
        var index = job_items.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    AddJobWorkComponent.prototype.save = function () {
        var _this = this;
        var job_date;
        if (this.jwForm.controls['job_date'].value) {
            var dt = this.jwForm.controls['job_date'].value.year + '-' +
                this.jwForm.controls['job_date'].value.month + '-' +
                this.jwForm.controls['job_date'].value.day;
            job_date = moment(dt, 'YYYY-MM-DD').format();
            console.log(job_date);
        }
        else {
            job_date = moment().format();
        }
        this.process = 'saving';
        var savedata = this.jwForm.value;
        savedata.job_date = job_date;
        console.log('Job Work >> Save', this.jwForm.value);
        this.ms.crateJobwork(this.jwForm.value).subscribe(function (miInfo) {
            _this.process = 'done';
            var data = {
                truckno: savedata.truck_no,
                enginetype: savedata.enginetype
            };
            _this.metaService.updateTruckEnginetype(data).subscribe(function (res) {
                _this.router.navigate(['/maintenance/job-work']);
            }, function (error) {
                _this.process = 'done';
                console.log(error);
            });
        });
    };
    AddJobWorkComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                _this.jwForm.controls['site'].setValue(_this.siteOptions[0].branch_name);
            }
            else {
                _this.jwForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    AddJobWorkComponent.prototype.getOptions = function () {
        var _this = this;
        this.ms.getVendorMasterList().subscribe(function (siteInfo) {
            _this.vendor_option = siteInfo['result'];
            // console.log('>>>>Vendor List', siteInfo['result']);
        });
        this.metaService.getCompanyTruckList().subscribe(function (trackInfo) {
            _this.trucks_option = trackInfo['result'];
            // console.log('Trucks List >>>>>', this.trucks_option);
        });
        this.metaService.getJobWorkNameList().subscribe(function (trackInfo) {
            _this.jobworkname_option = trackInfo['result'];
            // console.log('Job Work Description >>>>>', this.jobworkname_option);
        });
    };
    AddJobWorkComponent.prototype.updateValues = function () {
        var km_reading = this.jwForm.controls['km_reading'].value;
        var control = this.jwForm.controls['job_items'];
        var _loop_1 = function () {
            var values = control.controls[intial_val].value;
            var jobworkname = values['worktobedone'];
            var data = {
                enginetype: this_1.jwForm.controls['enginetype'].value,
                worktobedone: jobworkname
            };
            km_tolerance = 0;
            net_nextduekm = 0;
            if (data.enginetype && data.worktobedone) {
                this_1.metaService.getworktobedonetolerance(data).subscribe(function (res) {
                    km_tolerance = Number(res['kmtolerance']);
                    if (km_tolerance > 0) {
                        console.log('km_tolerance OKAY', km_tolerance);
                        console.log('km_reading OKAY', km_reading);
                        net_nextduekm = (Number(res['kmtolerance']) + km_reading);
                        console.log("net_nextduekm OKAY " + data.worktobedone, net_nextduekm);
                        // this.jwForm.controls.job_items.patchValue([{'nextduekm': (Number(res['kmtolerance'])+km_reading )}]);
                    }
                });
                // net_nextduekm = (km_tolerance + km_reading );
                console.log('km_tolerance 2 ', km_tolerance);
                console.log('net_nextduekm 2', net_nextduekm);
                // control.controls[intial_val].patchValue({
                //   nextduekm: net_nextduekm
                // }, { emitEvent: false });
            }
            control.controls[intial_val].patchValue({
                nextduekm: net_nextduekm
            }, { emitEvent: false });
        };
        var this_1 = this, km_tolerance, net_nextduekm;
        for (var intial_val = 0; intial_val < control.length; intial_val++) {
            _loop_1();
        }
    };
    AddJobWorkComponent.prototype.generatejobNumber = function () {
        var _this = this;
        var job_type = this.jwForm.controls.job_type.value;
        var site = this.jwForm.controls.site.value;
        if (site && job_type) {
            var matchCond = { site: site, job_type: job_type };
            console.log('mathCond >>', matchCond);
            this.ms.getJobNumberDetails(matchCond).subscribe(function (jwInfo) {
                _this.jwForm.controls.job_number.setValue(jwInfo['count'] + 1);
            }, function (error) {
                console.log(error);
            });
        }
    };
    AddJobWorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-job-work',
            template: __webpack_require__(/*! ./add-job-work.component.html */ "./src/app/layout/maintenance/add-job-work/add-job-work.component.html"),
            styles: [__webpack_require__(/*! ./add-job-work.component.scss */ "./src/app/layout/maintenance/add-job-work/add-job-work.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _maintenance_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddJobWorkComponent);
    return AddJobWorkComponent;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/add-job-workmaster/add-job-workmaster.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/maintenance/add-job-workmaster/add-job-workmaster.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"itemsForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Add Job Work Master</div>\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n          <div class=\"col-md-8\">\n            <label class=\"required\">Job Work Name</label>\n            <input type=\"text\" formControlName=\"jobworkname\" class=\"form-control manual-entry\"\n              placeholder=\"Job Work Name\">\n          </div>\n        </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"saveitems()\" [disabled]=\"!itemsForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/layout/maintenance/add-job-workmaster/add-job-workmaster.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/maintenance/add-job-workmaster/add-job-workmaster.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auto-entry {\n  border: 2px solid #fcbd47 !important; }\n\n.manual-entry {\n  border: 2px solid #51cc51 !important; }\n\n::ng-deep .ng-select.manual-entry {\n  border: 2px solid #51cc51 !important; }\n\n::ng-deep .ng-select.auto-entry {\n  border: 2px solid #fcbd47 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21haW50ZW5hbmNlL2FkZC1qb2Itd29ya21hc3Rlci9EOlxcdGVzdGluZ19mb2xkZXJcXHRoaXJ1XFxmcm9udGVuZFxcdGRfZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcbWFpbnRlbmFuY2VcXGFkZC1qb2Itd29ya21hc3RlclxcYWRkLWpvYi13b3JrbWFzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQTZDLEVBQUE7O0FBR2pEO0VBQ0ksb0NBQTRDLEVBQUE7O0FBR2hEO0VBQ0ksb0NBQTRDLEVBQUE7O0FBR2hEO0VBQ0ksb0NBQTZDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWFpbnRlbmFuY2UvYWRkLWpvYi13b3JrbWFzdGVyL2FkZC1qb2Itd29ya21hc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRvLWVudHJ5e1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMjUyLCAxODksIDcxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFudWFsLWVudHJ5e1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoODEsIDIwNCwgODEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmctc2VsZWN0Lm1hbnVhbC1lbnRyeXtcclxuICAgIGJvcmRlcjoycHggc29saWQgcmdiKDgxLCAyMDQsIDgxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm5nLXNlbGVjdC5hdXRvLWVudHJ5e1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMjUyLCAxODksIDcxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/maintenance/add-job-workmaster/add-job-workmaster.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/maintenance/add-job-workmaster/add-job-workmaster.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AddJobWorkmasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddJobWorkmasterComponent", function() { return AddJobWorkmasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _maintenance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maintenance.service */ "./src/app/layout/maintenance/maintenance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddJobWorkmasterComponent = /** @class */ (function () {
    function AddJobWorkmasterComponent(fb, ms, router) {
        this.fb = fb;
        this.ms = ms;
        this.router = router;
    }
    AddJobWorkmasterComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getOptions();
    };
    AddJobWorkmasterComponent.prototype.buildForm = function () {
        this.itemsForm = this.fb.group({
            'jobworkname': ['']
        });
    };
    AddJobWorkmasterComponent.prototype.saveitems = function () {
        var _this = this;
        this.process = 'saving';
        console.log(this.itemsForm.value);
        this.ms.crateJobworkmaster(this.itemsForm.value).subscribe(function (ordersInfo) {
            _this.process = 'done';
            _this.router.navigate(['/maintenance/job-workmaster']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddJobWorkmasterComponent.prototype.getOptions = function () {
    };
    AddJobWorkmasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-job-workmaster',
            template: __webpack_require__(/*! ./add-job-workmaster.component.html */ "./src/app/layout/maintenance/add-job-workmaster/add-job-workmaster.component.html"),
            styles: [__webpack_require__(/*! ./add-job-workmaster.component.scss */ "./src/app/layout/maintenance/add-job-workmaster/add-job-workmaster.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddJobWorkmasterComponent);
    return AddJobWorkmasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/dashboard/dashboard.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/maintenance/dashboard/dashboard.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <strong>Job Work Reminders Dashboard</strong>\n  </div>\n  <div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-lg\">\n        <div class=\"card\">\n          <div class=\"card-body\" *ngIf=\"activeTab === 'docOverview'\">\n            <p>\n              <button [disabled]=\"loading\" class=\"btn btn-success\" (click)=\"showDetails()\">\n                <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n                Details\n              </button>\n            </p>\n            <table class=\"table tableFixHead mytable\">\n              <thead>\n                <tr>\n                  <th>Job Work</th>\n                  <th>Expired</th>\n                  <th>500-kms</th>\n                  <th>1000-kms</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngIf=\"loading\">\n                  <td colspan=\"4\">\n                    <div class=\"showbox\">\n                      <div class=\"loader\">\n                        <svg class=\"circular\" viewBox=\"25 25 50 50\">\n                          <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n                        </svg>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n                <tr *ngFor=\"let d of data\">\n                  <td>{{ d.Name }}</td>\n                  <td>{{ d.Expired }}</td>\n                  <td>{{ d['500_kms'] }}</td>\n                  <td>{{ d['1000_kms'] }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"card-body\" *ngIf=\"activeTab === 'details'\">\n            <p>\n              <button class=\"btn btn-danger\" (click)=\"showOverview()\">\n                <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                Back\n              </button>\n            </p>\n\n            <!-- Second Screen 0-20 Days -->\n            <form [formGroup]=\"editForm\" novalidate> \n              <table class=\"table tableFixHead mytable\">\n                <thead>\n                    <tr>\n                      <th> Job Work Trucks ( 0 to 1000 Kms ) </th>\n                    </tr>\n                </thead>\n                <thead>\n                  <tr>\n                    <th>Truck No</th>\n                    <th>Job Work</th>\n                    <th>Due Km</th>\n                    <th>Current Km</th>\n                    <th>Km Left</th>\n                    <th>Status</th>\n                    <th>Remarks</th>\n                    <th>Actions</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngIf=\"loading\">\n                    <td colspan=\"4\">\n                      <div class=\"showbox\">\n                        <div class=\"loader\">\n                          <svg class=\"circular\" viewBox=\"25 25 50 50\">\n                            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n                          </svg>\n                        </div>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr *ngFor=\"let detail of details; let i = index\">\n                    <td>{{ detail.truck_no }}</td>\n                    <td>{{ detail.worktobedone }}</td>\n                    <td>{{ detail.duekm }}</td>\n                    <td>{{ detail.currkm }}</td>\n                    <td>{{ detail.kmleft }}</td>\n                    <td *ngIf=\"!detail.editing\">{{ detail.status ? detail.status : '--' }}</td>\n                    <td *ngIf=\"detail.editing\">\n                      <select class=\"form-control\" formControlName=\"status\">\n                        <option value=\"\">Select</option>\n                        <option value=\"At RTO\">At RTO</option>\n                        <option value=\"Transist\">Transist</option>\n                        <option value=\"At Workshop\">At Workshop</option>\n                        <option value=\"Expired\">Expired</option>\n                        <option value=\"Done\">Done</option>\n                        <option value=\"Seen\">Seen</option>\n                      </select>\n                    </td>\n\n                    <td *ngIf=\"!detail.editing\">{{ detail.remarks ? detail.remarks : '--' }}</td>\n\n                    <td *ngIf=\"detail.editing\">\n                      <input type=\"text\" class=\"form-control\" formControlName=\"remarks\" />\n                    </td>\n\n                    <td>\n                      <button [disabled]=\"loading\" *ngIf=\"!detail.editing\" class=\"btn btn-primary\" (click)=\"edit(detail, i)\">\n                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                        Edit</button\n                      >&nbsp;\n                      <button [disabled]=\"loading\" *ngIf=\"detail.editing\" class=\"btn btn-warning\" (click)=\"update(detail)\">\n                        <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n                        Update</button\n                      >&nbsp;\n                      <button [disabled]=\"loading\" *ngIf=\"detail.editing\" class=\"btn btn-danger\" (click)=\"cancel(detail)\">\n                        <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                        Cancel\n                      </button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </form>\n\n            <!-- Second Screen Expired -->\n            <form [formGroup]=\"editForm\" novalidate> \n              <table class=\"table tableFixHead mytable\">\n                <thead>\n                    <tr>\n                      <th> Expired Job Works</th>\n                    </tr>\n                </thead>\n                <thead>\n                  <tr>\n                    <th>Truck No</th>\n                    <th>Job Work</th>\n                    <th>Due Km</th>\n                    <th>Current Km</th>\n                    <th>Excess Km</th>\n                    <th>Status</th>\n                    <th>Remarks</th>\n                    <th>Actions</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngIf=\"loading\">\n                    <td colspan=\"4\">\n                      <div class=\"showbox\">\n                        <div class=\"loader\">\n                          <svg class=\"circular\" viewBox=\"25 25 50 50\">\n                            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n                          </svg>\n                        </div>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr *ngFor=\"let edetail of expiredDetails; let i = index\">\n                    <td>{{ edetail.truck_no }}</td>\n                    <td>{{ edetail.worktobedone }}</td>\n                    <td>{{ edetail.duekm }}</td>\n                    <td>{{ edetail.currkm }}</td>\n                    <td>{{ edetail.excesskm }}</td>\n                    <td *ngIf=\"!edetail.editing\">{{ edetail.status ? edetail.status : '--' }}</td>\n    \n                    <td *ngIf=\"edetail.editing\">\n                      <select class=\"form-control\" formControlName=\"status\">\n                        <option value=\"\">Select</option>\n                        <option value=\"At Workshop\">At Workshop</option>\n                        <option value=\"Transist\">Transist</option>\n                        <option value=\"Expired\">Expired</option>\n                        <option value=\"Done\">Done</option>\n                        <option value=\"Seen\">Seen</option>\n                      </select>\n                    </td>\n    \n                    <td *ngIf=\"!edetail.editing\">{{ edetail.remarks ? edetail.remarks : '--' }}</td>\n    \n                    <td *ngIf=\"edetail.editing\">\n                      <input type=\"text\" class=\"form-control\" formControlName=\"remarks\" />\n                    </td>\n    \n                    <td>\n                      <button [disabled]=\"loading\" *ngIf=\"!edetail.editing\" class=\"btn btn-primary\" (click)=\"edit(edetail, i)\">\n                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                        Edit</button\n                      >&nbsp;\n                      <button [disabled]=\"loading\" *ngIf=\"edetail.editing\" class=\"btn btn-warning\" (click)=\"update(edetail)\">\n                        <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n                        Update</button\n                      >&nbsp;\n                      <button [disabled]=\"loading\" *ngIf=\"edetail.editing\" class=\"btn btn-danger\" (click)=\"cancel(edetail)\">\n                        <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                        Cancel\n                      </button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </form>\n            \n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/maintenance/dashboard/dashboard.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/maintenance/dashboard/dashboard.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWludGVuYW5jZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/maintenance/dashboard/dashboard.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/maintenance/dashboard/dashboard.component.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _maintenance_maintenance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../maintenance/maintenance.service */ "./src/app/layout/maintenance/maintenance.service.ts");
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
    function DashboardComponent(reminders, toastr, fb) {
        this.reminders = reminders;
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
        this.reminders.getOverAllData().subscribe(function (resp) {
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
        this.reminders.getDetails().subscribe(function (resp) {
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
        this.reminders.getExpiredAllTrucksDetails().subscribe(function (resp) {
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
        this.reminders.updateAttachements(obj).subscribe(function (resp) {
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
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/layout/maintenance/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/layout/maintenance/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_maintenance_maintenance_service__WEBPACK_IMPORTED_MODULE_1__["MaintenanceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/edit-engine-typemaster/edit-engine-typemaster.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/maintenance/edit-engine-typemaster/edit-engine-typemaster.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"etmForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Edit Engine Type Master</div>\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n          <div class=\"col-md-3\">\n            <label class=\"required\">Engine Type Name</label>\n            <input type=\"text\" formControlName=\"enginetype\" class=\"form-control  manual-entry\"\n              placeholder=\"Name\">\n          </div>\n    </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Job Work Details\n                <button class=\"btn btn-primary float-right\" (click)=\"addEtmitems()\" [disabled]=\"!etmForm.valid\"\n                  type=\"button\">\n                  Add Job Work Name Details\n                </button>\n              </div>\n              <!-- /.box-header -->\n              <div class=\"card-body\" *ngIf=\"etmForm.controls.multidest.controls.length > 0\">\n                <table class=\"table table-bordered\" formArrayName=\"multidest\">\n                  <tr>\n                    <th>Job Work Name</th>\n                    <th>Km Tolerance</th>\n                    <th>Action</th>\n                  </tr>\n                  \n                  <tr *ngFor=\"let school of etmForm.controls.multidest.controls; let i=index\" formGroupName=\"{{i}}\">\n                    <td>\n                      <div class=\"input-group\">\n                        <select class=\"form-control  manual-entry\" formControlName=\"jobworkname\">\n                          <option value=\"\">Select Job Work Name</option>\n                          <option *ngFor=\"let t of jobworkname_option\" [value]=\"t.jobworkname\"> {{t.jobworkname}}</option>\n                        </select>\n                      </div>\n                    </td>\n                    <td>\n                      <input type=\"Number\" formControlName=\"kmtolerance\" class=\"form-control  manual-entry\">\n                    </td>\n\n                    <td>\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"etmForm.controls?.multidest.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                      </button>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n              <div class=\"card-body\" *ngIf=\"etmForm.controls?.multidest.controls.length == 0\">\n                <p>Please select vendor</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      \n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!etmForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/layout/maintenance/edit-engine-typemaster/edit-engine-typemaster.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/maintenance/edit-engine-typemaster/edit-engine-typemaster.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auto-entry {\n  border: 2px solid #fcbd47 !important; }\n\n.manual-entry {\n  border: 2px solid #51cc51 !important; }\n\n::ng-deep .ng-select.manual-entry {\n  border: 2px solid #51cc51 !important; }\n\n::ng-deep .ng-select.auto-entry {\n  border: 2px solid #fcbd47 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21haW50ZW5hbmNlL2VkaXQtZW5naW5lLXR5cGVtYXN0ZXIvRDpcXHRlc3RpbmdfZm9sZGVyXFx0aGlydVxcZnJvbnRlbmRcXHRkX2Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXG1haW50ZW5hbmNlXFxlZGl0LWVuZ2luZS10eXBlbWFzdGVyXFxlZGl0LWVuZ2luZS10eXBlbWFzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQTZDLEVBQUE7O0FBR2pEO0VBQ0ksb0NBQTRDLEVBQUE7O0FBR2hEO0VBQ0ksb0NBQTRDLEVBQUE7O0FBR2hEO0VBQ0ksb0NBQTZDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWFpbnRlbmFuY2UvZWRpdC1lbmdpbmUtdHlwZW1hc3Rlci9lZGl0LWVuZ2luZS10eXBlbWFzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dG8tZW50cnl7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJnYigyNTIsIDE4OSwgNzEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYW51YWwtZW50cnl7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJnYig4MSwgMjA0LCA4MSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5uZy1zZWxlY3QubWFudWFsLWVudHJ5e1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoODEsIDIwNCwgODEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmctc2VsZWN0LmF1dG8tZW50cnl7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJnYigyNTIsIDE4OSwgNzEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/maintenance/edit-engine-typemaster/edit-engine-typemaster.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/maintenance/edit-engine-typemaster/edit-engine-typemaster.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EditEngineTypemasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEngineTypemasterComponent", function() { return EditEngineTypemasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _maintenance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../maintenance.service */ "./src/app/layout/maintenance/maintenance.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditEngineTypemasterComponent = /** @class */ (function () {
    function EditEngineTypemasterComponent(fb, metaService, ms, router, aroute) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.router = router;
        this.aroute = aroute;
    }
    EditEngineTypemasterComponent.prototype.ngOnInit = function () {
        this.etmDetails = this.aroute.snapshot.data['etm_details'];
        this.buildForm();
        this.getOptions();
    };
    EditEngineTypemasterComponent.prototype.buildForm = function () {
        var _this = this;
        this.etmForm = this.fb.group({
            'enginetype': [this.etmDetails.enginetype, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'multidest': this.fb.array([]),
        });
        // this.addMaterialreceiptItems()
        this.etmDetails.multidest.forEach(function (element) {
            var control = _this.etmForm.controls['multidest'];
            control.push(_this.initItemsData(element));
        });
    };
    EditEngineTypemasterComponent.prototype.initItemsData = function (data) {
        return this.fb.group({
            'jobworkname': [data.jobworkname],
            'kmtolerance': [data.kmtolerance, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    EditEngineTypemasterComponent.prototype.initItems = function () {
        return this.fb.group({
            'jobworkname': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'kmtolerance': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    EditEngineTypemasterComponent.prototype.addEtmitems = function () {
        var control = this.etmForm.controls['multidest'];
        control.push(this.initItems());
    };
    EditEngineTypemasterComponent.prototype.removeItems = function (i) {
        var control = this.etmForm.controls['multidest'];
        control.removeAt(i);
    };
    EditEngineTypemasterComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var multidest = this.etmForm.controls['multidest'].value;
        var index = multidest.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    EditEngineTypemasterComponent.prototype.save = function () {
        var _this = this;
        this.process = 'saving';
        this.ms.updatEtm(this.etmDetails['_id'], this.etmForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/maintenance/engine-typemaster']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditEngineTypemasterComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getJobWorkNameList().subscribe(function (trackInfo) {
            _this.jobworkname_option = trackInfo['result'];
            // console.log('Job Work Description >>>>>', this.jobworkname_option);
        });
    };
    EditEngineTypemasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-engine-typemaster',
            template: __webpack_require__(/*! ./edit-engine-typemaster.component.html */ "./src/app/layout/maintenance/edit-engine-typemaster/edit-engine-typemaster.component.html"),
            styles: [__webpack_require__(/*! ./edit-engine-typemaster.component.scss */ "./src/app/layout/maintenance/edit-engine-typemaster/edit-engine-typemaster.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            _maintenance_service__WEBPACK_IMPORTED_MODULE_4__["MaintenanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditEngineTypemasterComponent);
    return EditEngineTypemasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/edit-job-work/edit-job-work.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/maintenance/edit-job-work/edit-job-work.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"jwForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Edit Job Work</div>\n      <div class=\"card-body\">\n\n        <div class=\"form-group row\">\n          <div class=\"col-md-3\">\n            <label class=\"required\">Site</label>\n            <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n              formControlName=\"site\">\n            </ng-select>\n          </div>\n          <div class=\"col-md-3\">\n            <label class=\"required\">Job type</label>\n            <select class=\"form-control\" formControlName=\"job_type\" (change)=\"generatejobNumber()\">\n              <option value=\"\">Select Job type</option>\n              <option value=\"Job Work\">Job Work</option>\n              <option value=\"Job Card\">Job Card</option>\n            </select>\n          </div>\n          <div class=\"col-md-3\">\n            <label>Job No.</label>\n            <input disabled type=\"text\" formControlName=\"job_number\" class=\"form-control\" placeholder=\"Job No.\">\n          </div>\n          <div class=\"col-md-3\">\n            <label class=\"required\">Job date</label>\n            <div class=\"input-group datepicker-input\">\n              <input\n                class=\"form-control\"\n                placeholder=\"dd-mm-yyyy\"\n                name=\"dp2\"\n                formControlName=\"job_date\"\n                ngbDatepicker\n                #d2=\"ngbDatepicker\" \n              />\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <label class=\"required\">Truck No.</label>\n            <ng-select [items]=\"trucks_option\" placeholder=\"Type and search items\" bindLabel=\"truckno\" bindValue=\"truckno\"\n              formControlName=\"truck_no\">\n            </ng-select>\n          </div>\n          <div class=\"col-md-3\">\n            <label>Km Reading</label>\n            <input type=\"number\" formControlName=\"km_reading\" class=\"form-control\" placeholder=\"Km Reading\">\n          </div>\n          <div class=\"col-md-3\">\n            <label class=\"required\">Vendor</label>\n            <ng-select [items]=\"vendor_option\" placeholder=\"Type and search vendor\" bindLabel=\"name\" bindValue=\"name\"\n              formControlName=\"vendor\">\n            </ng-select>\n          </div>\n          <div class=\"col-md-3\">\n            <label>Engine Type</label>\n            <input type=\"text\" disabled formControlName=\"enginetype\" class=\"form-control\" placeholder=\"Engine Type\">\n          </div>\n          \n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Job Work items\n                <button class=\"btn btn-primary float-right\" (click)=\"addJwItems()\" [disabled]=\"!jwForm.valid\"\n                  type=\"button\">\n                  Add Item\n                </button>\n              </div>\n              <!-- /.box-header -->\n              <div class=\"card-body\" *ngIf=\"jwForm.controls.job_items.controls.length > 0\">\n                <table class=\"table table-bordered\" formArrayName=\"job_items\">\n                  <tr>\n                    <th>Work To Be Done</th>\n                    <th>Last Done On</th>\n                    <th>Remarks</th>\n                    <th>Next Due Km</th>\n                    <th>Action</th>\n                  </tr>\n                  <tr *ngFor=\"let school of jwForm.controls.job_items.controls; let i=index\" formGroupName=\"{{i}}\">\n                    <td>\n                      <div class=\"input-group\">\n                        <select class=\"form-control\" formControlName=\"worktobedone\">\n                          <option value=\"\">Select Job Description</option>\n                          <option *ngFor=\"let j of jobworkname_option\" [value]=\"j.jobworkname\"> {{j.jobworkname}}</option>\n                        </select>\n                      </div>\n\n                    </td>\n                  <td>\n                      <div class=\"input-group\">\n                        <select class=\"form-control\">\n                          <input type=\"text\" #ld=\"bsDatepicker\" [bsConfig]=\"{ containerClass: 'theme-blue', 'dateInputFormat': 'DD-MM-YYYY', 'showWeekNumbers': false, 'minDate': currentDate }\" bsDatepicker formControlName=\"lastdoneon\"\n                            class=\"form-control\">\n                          <div class=\"input-group-prepend\" (click)=\"ld.toggle()\">\n                            <span class=\"input-group-text\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n                          </div>\n                        </select>\n                        </div>\n                    </td>                    \n                  <td>\n                    <input type=\"text\" formControlName=\"remarks\"\n                      class=\"form-control remarks\">\n                  </td>\n                  <td>\n                    <input type=\"number\" min=\"0\" formControlName=\"nextduekm\"\n                      class=\"form-control nextduekm\">\n                  </td>\n                  <td>\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"jwForm.controls?.job_items.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                      </button>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n              <div class=\"card-body\" *ngIf=\"jwForm.controls?.job_items.controls.length == 0\">\n                <p>Please select vendor</p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"mt-6\">\n        <div class=\"form-group row\">\n          <div class=\"col-md-3\">\n            <label>Bill Amount</label>\n            <input type=\"number\" formControlName=\"bill_amount\" class=\"form-control\" placeholder=\"Bill Amount\">\n          </div>\n          <div class=\"col-md-3\">\n            <label>Approved Amount</label>\n            <input type=\"number\" formControlName=\"app_amount\" class=\"form-control\" placeholder=\"Approved Amount\">\n          </div>\n\n          <div class=\"col-lg-6 col-md-6\">\n            <label class=\"\">Job Remarks</label>\n            <input type=\"text\" formControlName=\"job_remarks\" class=\"form-control\" placeholder=\"Please enter Job Remarks\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"saveJw()\" [disabled]=\"!jwForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  \n  </form>\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/layout/maintenance/edit-job-work/edit-job-work.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/maintenance/edit-job-work/edit-job-work.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWludGVuYW5jZS9lZGl0LWpvYi13b3JrL2VkaXQtam9iLXdvcmsuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/maintenance/edit-job-work/edit-job-work.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/maintenance/edit-job-work/edit-job-work.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditJobWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditJobWorkComponent", function() { return EditJobWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _maintenance_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../maintenance/maintenance.service */ "./src/app/layout/maintenance/maintenance.service.ts");
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





var EditJobWorkComponent = /** @class */ (function () {
    function EditJobWorkComponent(fb, ms, metaService, aroute, router) {
        this.fb = fb;
        this.ms = ms;
        this.metaService = metaService;
        this.aroute = aroute;
        this.router = router;
        this.etField = false;
        this.loading = false;
        this.currentDate = new Date();
        this.usertype = this.metaService.getSiteFromStorage().role;
        this.site_name = this.metaService.getSiteFromStorage().site;
        var current = new Date();
        this.minDate = {
            year: current.getFullYear(),
            month: current.getMonth() + 1,
            day: current.getDate()
        };
    }
    EditJobWorkComponent.prototype.ngOnInit = function () {
        this.jwDetails = this.aroute.snapshot.data['jw_details'];
        this.bsConfig = Object.assign({}, { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
        this.buildForm();
        // this.jwForm.controls.job_items.valueChanges.subscribe(changes => {
        //   this.updateValues();
        // });
        this.getOptions();
        // this.getSites();
    };
    EditJobWorkComponent.prototype.buildForm = function () {
        var _this = this;
        this.jwForm = this.fb.group({
            'site': [this.jwDetails.site, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'job_type': [this.jwDetails.job_type, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'job_number': [this.jwDetails.job_number, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'job_date': [{ year: new Date(this.jwDetails.job_date).getFullYear(), month: new Date(this.jwDetails.job_date).getMonth() + 1, day: new Date(this.jwDetails.job_date).getDate() }],
            'truck_no': [this.jwDetails.truck_no, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'km_reading': [this.jwDetails.km_reading],
            'enginetype': [this.jwDetails.enginetype, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'vendor': [this.jwDetails.vendor, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'job_items': this.fb.array([]),
            'bill_amount': [this.jwDetails.bill_amount],
            'app_amount': [this.jwDetails.app_amount],
            'job_remarks': [this.jwDetails.job_remarks]
        });
        // this.addMaterialreceiptItems()
        this.jwDetails.job_items.forEach(function (element) {
            var control = _this.jwForm.controls['job_items'];
            control.push(_this.initItemsData(element));
        });
    };
    EditJobWorkComponent.prototype.initItemsData = function (data) {
        return this.fb.group({
            'worktobedone': [data.worktobedone],
            'lastdoneon': [data.lastdoneon],
            'remarks': [data.remarks],
            'nextduekm': [data.nextduekm]
        });
    };
    EditJobWorkComponent.prototype.initItems = function () {
        return this.fb.group({
            'worktobedone': [''],
            'lastdoneon': [''],
            'remarks': [''],
            'nextduekm': [0]
        });
    };
    EditJobWorkComponent.prototype.addJwItems = function () {
        var control = this.jwForm.controls['job_items'];
        control.push(this.initItems());
    };
    EditJobWorkComponent.prototype.removeItems = function (i) {
        var control = this.jwForm.controls['job_items'];
        control.removeAt(i);
    };
    EditJobWorkComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var job_items = this.jwForm.controls['job_items'].value;
        var index = job_items.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    EditJobWorkComponent.prototype.saveJw = function () {
        var _this = this;
        var job_date;
        if (this.jwForm.controls['job_date'].value) {
            var dt = this.jwForm.controls['job_date'].value.year + '-' +
                this.jwForm.controls['job_date'].value.month + '-' +
                this.jwForm.controls['job_date'].value.day;
            job_date = moment(dt, 'YYYY-MM-DD').format();
            console.log(job_date);
        }
        else {
            job_date = moment().format();
        }
        this.process = 'saving';
        var data = this.jwForm.value;
        data.job_date = job_date;
        console.log('Edit Job Work Saving', this.jwDetails);
        this.ms.updatJobwork(this.jwDetails['_id'], this.jwForm.value).subscribe(function (miInfo) {
            _this.process = 'done';
            _this.router.navigate(['/maintenance/job-work']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditJobWorkComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                _this.jwForm.controls['site'].setValue(_this.siteOptions[0].branch_name);
            }
            else {
                _this.jwForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    EditJobWorkComponent.prototype.getOptions = function () {
        var _this = this;
        this.ms.getVendorMasterList().subscribe(function (siteInfo) {
            _this.vendor_option = siteInfo['result'];
            // console.log('>>>>Vendor List', siteInfo['result']);
        });
        this.metaService.getCompanyTruckList().subscribe(function (trackInfo) {
            _this.trucks_option = trackInfo['result'];
            // console.log('Trucks List >>>>>', this.trucks_option);
        });
        this.metaService.getJobWorkNameList().subscribe(function (trackInfo) {
            _this.jobworkname_option = trackInfo['result'];
            // console.log('Job Work Description >>>>>', this.jobworkname_option);
        });
    };
    EditJobWorkComponent.prototype.updateValues = function () {
    };
    EditJobWorkComponent.prototype.generatejobNumber = function () {
        var _this = this;
        var job_type = this.jwForm.controls.job_type.value;
        var site = this.jwForm.controls.site.value;
        if (site && job_type) {
            var matchCond = { site: site, job_type: job_type };
            console.log('mathCond >>', matchCond);
            this.ms.getJobNumberDetails(matchCond).subscribe(function (jwInfo) {
                _this.jwForm.controls.job_number.setValue(jwInfo['count'] + 1);
            }, function (error) {
                console.log(error);
            });
        }
    };
    EditJobWorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-job-work',
            template: __webpack_require__(/*! ./edit-job-work.component.html */ "./src/app/layout/maintenance/edit-job-work/edit-job-work.component.html"),
            styles: [__webpack_require__(/*! ./edit-job-work.component.scss */ "./src/app/layout/maintenance/edit-job-work/edit-job-work.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _maintenance_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditJobWorkComponent);
    return EditJobWorkComponent;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/edit-job-workmaster/edit-job-workmaster.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/maintenance/edit-job-workmaster/edit-job-workmaster.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"itemsForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Edit Job Work Master</div>\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n          <div class=\"col-md-8\">\n            <label class=\"required\">Job Work Name</label>\n            <input type=\"text\" formControlName=\"jobworkname\" class=\"form-control manual-entry\"\n              placeholder=\"Job work Name\">\n          </div>\n\n        </div>\n       </div>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"saveitems()\" [disabled]=\"!itemsForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/layout/maintenance/edit-job-workmaster/edit-job-workmaster.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/maintenance/edit-job-workmaster/edit-job-workmaster.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auto-entry {\n  border: 2px solid #fcbd47 !important; }\n\n.manual-entry {\n  border: 2px solid #51cc51 !important; }\n\n::ng-deep .ng-select.manual-entry {\n  border: 2px solid #51cc51 !important; }\n\n::ng-deep .ng-select.auto-entry {\n  border: 2px solid #fcbd47 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21haW50ZW5hbmNlL2VkaXQtam9iLXdvcmttYXN0ZXIvRDpcXHRlc3RpbmdfZm9sZGVyXFx0aGlydVxcZnJvbnRlbmRcXHRkX2Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXG1haW50ZW5hbmNlXFxlZGl0LWpvYi13b3JrbWFzdGVyXFxlZGl0LWpvYi13b3JrbWFzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQTZDLEVBQUE7O0FBR2pEO0VBQ0ksb0NBQTRDLEVBQUE7O0FBR2hEO0VBQ0ksb0NBQTRDLEVBQUE7O0FBR2hEO0VBQ0ksb0NBQTZDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWFpbnRlbmFuY2UvZWRpdC1qb2Itd29ya21hc3Rlci9lZGl0LWpvYi13b3JrbWFzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dG8tZW50cnl7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJnYigyNTIsIDE4OSwgNzEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYW51YWwtZW50cnl7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJnYig4MSwgMjA0LCA4MSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5uZy1zZWxlY3QubWFudWFsLWVudHJ5e1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoODEsIDIwNCwgODEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmctc2VsZWN0LmF1dG8tZW50cnl7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJnYigyNTIsIDE4OSwgNzEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/maintenance/edit-job-workmaster/edit-job-workmaster.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/maintenance/edit-job-workmaster/edit-job-workmaster.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditJobWorkmasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditJobWorkmasterComponent", function() { return EditJobWorkmasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _maintenance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maintenance.service */ "./src/app/layout/maintenance/maintenance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditJobWorkmasterComponent = /** @class */ (function () {
    function EditJobWorkmasterComponent(fb, ms, router, aroute) {
        this.fb = fb;
        this.ms = ms;
        this.router = router;
        this.aroute = aroute;
    }
    EditJobWorkmasterComponent.prototype.ngOnInit = function () {
        this.jwmDetails = this.aroute.snapshot.data['jwm_details'];
        console.log(this.jwmDetails);
        this.buildForm();
        this.getOptions();
    };
    EditJobWorkmasterComponent.prototype.buildForm = function () {
        this.itemsForm = this.fb.group({
            'jobworkname': [this.jwmDetails.jobworkname]
        });
    };
    EditJobWorkmasterComponent.prototype.saveitems = function () {
        var _this = this;
        this.process = 'saving';
        this.ms.updatJobworkmaster(this.jwmDetails['_id'], this.itemsForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/maintenance/job-workmaster']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditJobWorkmasterComponent.prototype.getOptions = function () {
    };
    EditJobWorkmasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-job-workmaster',
            template: __webpack_require__(/*! ./edit-job-workmaster.component.html */ "./src/app/layout/maintenance/edit-job-workmaster/edit-job-workmaster.component.html"),
            styles: [__webpack_require__(/*! ./edit-job-workmaster.component.scss */ "./src/app/layout/maintenance/edit-job-workmaster/edit-job-workmaster.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditJobWorkmasterComponent);
    return EditJobWorkmasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/enginetypemaster-reslover.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/maintenance/enginetypemaster-reslover.ts ***!
  \*****************************************************************/
/*! exports provided: EnginetypemasterReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnginetypemasterReslover", function() { return EnginetypemasterReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _maintenance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maintenance.service */ "./src/app/layout/maintenance/maintenance.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnginetypemasterReslover = /** @class */ (function () {
    function EnginetypemasterReslover(ms) {
        this.ms = ms;
    }
    EnginetypemasterReslover.prototype.resolve = function (route) {
        return this.ms.getEtm(route.paramMap.get('id'));
    };
    EnginetypemasterReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_maintenance_service__WEBPACK_IMPORTED_MODULE_1__["MaintenanceService"]])
    ], EnginetypemasterReslover);
    return EnginetypemasterReslover;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/job-card/job-card.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/maintenance/job-card/job-card.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>Job Card</strong>\r\n  </div>\r\n  <form [formGroup]=\"addForm\">\r\n\r\n    <div class=\"modal-body\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-3\">\r\n          <label>Date</label>\r\n          <div class=\"form-inline\">\r\n            <div class=\"form-group\">\r\n              \r\n              <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp\"\r\n                  formControlName=\"date\"\r\n                  ngbDatepicker\r\n                  #d1=\"ngbDatepicker\"\r\n                />\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Job No</label>\r\n            <input type=\"number\" class=\"form-control\" formControlName=\"jobno\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Sr No</label>\r\n            <input type=\"number\" class=\"form-control\" formControlName=\"srno\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Truck No</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"truckno\" />\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>KM Reading</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"km_reading\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Vendor Name</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"vendor_name\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Bill Amount</label>\r\n            <input type=\"number\" class=\"form-control\" formControlName=\"bill_amount\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>App Amount</label>\r\n            <input type=\"number\" class=\"form-control\" formControlName=\"app_amount\" />\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"table\">\r\n      <tbody>\r\n        <tr>\r\n          <td>\r\n            <label>Work To Be Done</label>\r\n            <!-- <input type=\"number\" class=\"form-control\" formControlName=\"work_be_done\"> -->\r\n            <div class=\"input-group datepicker-input\">\r\n              <input class=\"form-control\" type=\"text\" formControlName=\"work_be_done\"/>\r\n            </div>\r\n          </td>\r\n\r\n          <td>\r\n            <label>Last Done on</label>\r\n            <!-- <input type=\"number\" class=\"form-control\" formControlName=\"last_done_on\"> -->\r\n            <div class=\"input-group datepicker-input\">\r\n              <input class=\"form-control\" placeholder=\"dd/mm/yyyy\" name=\"dp\" formControlName=\"last_done_on\" ngbDatepicker #d3=\"ngbDatepicker\" />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d3.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n\r\n          <td>\r\n            <label>Remarks</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"remarks\">\r\n          </td>\r\n\r\n          <td>\r\n            <label>Qty</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"qty\">\r\n          </td>\r\n\r\n          <td>\r\n            <label>Scrap Qty</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"scrap_qty\">\r\n          </td>\r\n\r\n          <td>\r\n            <label>Next Due KM</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"next_due_km\">\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" (click)=\"submit()\" class=\"btn btn-success\">Save</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/maintenance/job-card/job-card.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/maintenance/job-card/job-card.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWludGVuYW5jZS9qb2ItY2FyZC9qb2ItY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/maintenance/job-card/job-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/maintenance/job-card/job-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: JobCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobCardComponent", function() { return JobCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobCardComponent = /** @class */ (function () {
    function JobCardComponent(maintenanceService, formBuilder, toastr, modalService) {
        this.maintenanceService = maintenanceService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.modalService = modalService;
    }
    JobCardComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            date: [''],
            jobno: [''],
            srno: [''],
            truckno: [''],
            km_reading: [''],
            vendor_name: [''],
            bill_amount: [''],
            app_amount: [''],
            job_details: [''],
            work_be_done: [''],
            last_done_on: [''],
            remarks: [''],
            qty: [''],
            scrap_qty: [''],
            next_due_km: [''],
        });
    };
    JobCardComponent.prototype.submit = function () {
        var _this = this;
        var getFromData = this.addForm.value;
        console.log('FromData >>>>', getFromData);
        var tdate = getFromData.date;
        var wdate = getFromData.work_be_done;
        var ldate = getFromData.last_done_on;
        var mDate = tdate.year + '-' + tdate.month + '-' + tdate.day;
        var workDate = wdate.year + '-' + wdate.month + '-' + wdate.day;
        var lastDate = ldate.year + '-' + ldate.month + '-' + ldate.day;
        var mainObj = {
            'date': mDate,
            'jobno': getFromData.jobno,
            'srno': getFromData.srno,
            'truckno': getFromData.truckno,
            'km_reading': getFromData.km_reading,
            'vendor_name': getFromData.vendor_name,
            'bill_amount': getFromData.bill_amount,
            'app_amount': getFromData.app_amount,
            'job_details': [{
                    'work_be_done': workDate,
                    'last_done_on': lastDate,
                    'remarks': getFromData.remarks,
                    'qty': getFromData.qty,
                    'scrap_qty': getFromData.scrap_qty,
                    'next_due_km': getFromData.next_due_km,
                }]
        };
        this.maintenanceService.addJobCard(mainObj).subscribe(function (res) {
            _this.addForm.reset();
            _this.toastr.success('Job Card Added successfully.');
        }, function (err) {
            console.log('err   >>>', err);
            _this.toastr.error('Something went wrong when adding!');
        });
    };
    JobCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-card',
            template: __webpack_require__(/*! ./job-card.component.html */ "./src/app/layout/maintenance/job-card/job-card.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_5__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./job-card.component.scss */ "./src/app/layout/maintenance/job-card/job-card.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], JobCardComponent);
    return JobCardComponent;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/job-list/job-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/maintenance/job-list/job-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4><i class=\"fa fa-file-text-o\"></i> Srno #{{ srno }} Details</h4>\r\n\r\n<div class=\"row\" *ngIf=\"listActive\">\r\n  <div class=\"col-md-3\">\r\n    <button type=\"button\" class=\"btn btn-warning\" (click)=\"newJobCard()\">Create New Job Card</button>\r\n  </div>\r\n\r\n  <div class=\"col-md-3\">\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>Job No.</th>\r\n          <th>Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let j of jobNoList; let i = index\">\r\n          <td>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"getJobCard(j.jobno)\">{{ j.jobno ? j.jobno : '--' }}</button>\r\n          </td>\r\n          <td>\r\n            <button class=\"btn btn-danger\" type=\"button\" (click)=\"delete(i, j.jobno)\" >-</button>\r\n            <!-- (click)=\"delete(i)\" -->\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<!-- Create New Job Card -->\r\n<div class=\"card\" *ngIf=\"CardActive\">\r\n  <div class=\"card-header\">\r\n    <strong>Job Card</strong>\r\n    <button type=\"button\" class=\"btn btn-warning\" (click)=\"Back()\" style=\"float:right;\">Back</button>\r\n  </div>\r\n  <form [formGroup]=\"addForm\">\r\n    <div class=\"modal-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <label>Date</label>\r\n          <div class=\"form-inline\">\r\n            <div class=\"form-group\">\r\n              <input class=\"form-control\" placeholder=\"dd/mm/yyyy\" name=\"dp\" formControlName=\"date\" ngbDatepicker #d1=\"ngbDatepicker\" />\r\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- <button type=\"button\" (click)=\"submit()\" class=\"btn btn-success\" *ngIf=\"saveActive\">Save</button>\r\n      <button type=\"button\" (click)=\"update()\" class=\"btn btn-success\" *ngIf=\"updateActive\">Update</button> -->\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Job No</label>\r\n            <input type=\"number\" class=\"form-control\" formControlName=\"jobno\" value=\"{{ max_jobno }}\" *ngIf=\"saveActive\" readonly/> \r\n            <input type=\"number\" class=\"form-control\" formControlName=\"jobno\" *ngIf=\"updateActive\" readonly/> \r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Sr No</label>\r\n            <input type=\"number\" class=\"form-control\" formControlName=\"srno\" value=\"{{ srno }}\" readonly/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Truck No</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"truckno\" value=\"{{ truckno }}\" readonly/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>KM Reading</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"km_reading\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Vendor Name</label>\r\n            <!-- <input type=\"text\" class=\"form-control\" formControlName=\"vendor_name\" /> -->\r\n            <input class=\"form-control\" ng2-auto-complete formControlName=\"vendor_name\" \r\n             [source]=\"vendorName.bind(this)\" list-formatter=\"name\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Remarks</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"remarks\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Bill Amount</label>\r\n            <input type=\"number\" class=\"form-control\" formControlName=\"bill_amount\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>App Amount</label>\r\n            <input type=\"number\" class=\"form-control\" formControlName=\"app_amount\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Upload Bill</label>\r\n            <br />\r\n            <input\r\n              type=\"file\"\r\n              class=\"form-control\"\r\n              formControlName=\"upload_bill\"\r\n              class=\"inputfile\"\r\n              name=\"file1\"\r\n              id=\"file1\"\r\n              (change)=\"onSelectBill($event)\"\r\n            />\r\n            <label class=\"btn btn-success\" for=\"file1\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i> Select file</label>\r\n            {{ file ? file.name : '' }}\r\n            <br>\r\n            <a *ngIf=\"job_data && job_data.bill\" href=\"{{ job_data && job_data.bill ? job_data.bill : '' }}\">Download</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-header\">\r\n      <strong>Job Detail</strong>\r\n    </div>\r\n    <div class=\"table-scroll\">\r\n      <div\r\n        class=\"table-scroll-inner\"\r\n        formArrayName=\"addMultipleJobDetails\">\r\n        \r\n        <div >\r\n          <!-- class=\"table tableFixHead mytable\" -->\r\n          <table class=\"table \">\r\n            <tbody>\r\n              <tr *ngFor=\"let d of detailData.controls; let i = index\" [formGroup]=\"d\">\r\n                <td>\r\n                  <label>Work To Be Done</label>\r\n                  <!-- <input type=\"number\" class=\"form-control\" formControlName=\"work_be_done\"> -->\r\n                  <!-- <div class=\"input-group datepicker-input\"> -->\r\n                    <!-- <input type=\"text\" class=\"form-control\" formControlName=\"work_be_done\" /> -->\r\n                    <input class=\"form-control\" width=\"100%\" ng2-auto-complete formControlName=\"work_be_done\" (change)=\"getLastDate(i)\" [source]=\"wdName.bind(this)\" list-formatter=\"name\" />\r\n                  <!-- </div> -->\r\n                </td>\r\n\r\n                <td>\r\n                  <label>Last Done on</label>\r\n                  <!-- <input type=\"number\" class=\"form-control\" formControlName=\"last_done_on\"> -->\r\n                  <div class=\"input-group datepicker-input\">\r\n                    <input\r\n                      class=\"form-control\"\r\n                      placeholder=\"dd/mm/yyyy\"\r\n                      name=\"dp3\"\r\n                      formControlName=\"last_done_on\"\r\n                      ngbDatepicker\r\n                      #d3=\"ngbDatepicker\"\r\n                      readonly                      \r\n                    />\r\n                    <!-- <div class=\"input-group-append\">\r\n                      <button class=\"btn btn-outline-secondary calendar\" (click)=\"d3.toggle()\" type=\"button\" readonly>\r\n                        <i class=\"fa fa-calendar\" aria-hidden=\"true\" readonly></i>\r\n                      </button>\r\n                    </div> -->\r\n                  </div>\r\n                </td>\r\n\r\n                <td>\r\n                  <label>Remarks</label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"remarks\" />\r\n                </td>\r\n\r\n                <td>\r\n                  <label>Qty</label>\r\n                  <input type=\"number\" class=\"form-control\" (change)=\"setTotalAmount(i)\" formControlName=\"qty\" />\r\n                </td>\r\n\r\n                <td>\r\n                  <label>Scrap Qty</label>\r\n                  <input type=\"number\" class=\"form-control\" formControlName=\"scrap_qty\" />\r\n                </td>\r\n\r\n                <td>\r\n                  <label>Next Due KM</label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"next_due_km\" />\r\n                </td>\r\n\r\n                <td>\r\n                  <label>Rate</label>\r\n                  <input type=\"number\" class=\"form-control\" (change)=\"setTotalAmount(i)\" formControlName=\"rate\" />\r\n                </td>\r\n\r\n                <td>\r\n                  <label>GST</label>\r\n                  <input type=\"number\" class=\"form-control\" (change)=\"setTotalAmount(i)\" formControlName=\"gst\" />\r\n                </td>\r\n\r\n                <td>\r\n                  <label>Amount</label>\r\n                  <input type=\"number\" class=\"form-control\" (change)=\"GetTotalAmount(i)\" formControlName=\"amount\" />\r\n                </td>\r\n\r\n                <td style=\"width: 100px;\">\r\n                  <label> Action </label> <br />\r\n                  <!-- <button (click)=\"addDetail()\">Add</button> -->\r\n                  <button class=\"btn btn-success\" type=\"button\" (click)=\"addDetail()\">+</button>&nbsp;\r\n                  <button class=\"btn btn-danger\" type=\"button\" (click)=\"removeItem(i)\">-</button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            <tbody>\r\n              <tr>\r\n                <td [colSpan]=\"8\"></td>\r\n                <td><b>Total : {{ mainTotal }} </b></td>\r\n              </tr>\r\n\r\n              \r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" (click)=\"submit()\" class=\"btn btn-success\" *ngIf=\"saveActive\">Save</button>\r\n      <button type=\"button\" (click)=\"update()\" class=\"btn btn-success\" *ngIf=\"updateActive\">Update</button>\r\n      \r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/maintenance/job-list/job-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/maintenance/job-list/job-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21haW50ZW5hbmNlL2pvYi1saXN0L0Q6XFx0ZXN0aW5nX2ZvbGRlclxcdGhpcnVcXGZyb250ZW5kXFx0ZF9mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxtYWludGVuYW5jZVxcam9iLWxpc3RcXGpvYi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWFpbnRlbmFuY2Uvam9iLWxpc3Qvam9iLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXRmaWxlIHtcclxuXHR3aWR0aDogMC4xcHg7XHJcblx0aGVpZ2h0OiAwLjFweDtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHotaW5kZXg6IC0xO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/maintenance/job-list/job-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/maintenance/job-list/job-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: JobListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobListComponent", function() { return JobListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
var JobListComponent = /** @class */ (function () {
    function JobListComponent(maintenance, toastr, activedRoute, formBuilder, calendar) {
        var _this = this;
        this.maintenance = maintenance;
        this.toastr = toastr;
        this.activedRoute = activedRoute;
        this.formBuilder = formBuilder;
        this.calendar = calendar;
        this.jobNoList = [];
        this.jobDetails = [];
        this.jobNoData = {};
        this.mainTotal = 0;
        this.listActive = true;
        this.CardActive = false;
        this.saveActive = true;
        this.updateActive = false;
        // Search query for work to be done List
        this.wdName = function (keyword) {
            if (keyword) {
                return _this.maintenance.getWorkDoneList(keyword)
                    .map(function (res) {
                    return res;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].of([]);
            }
        };
        // Search query for work to be done List
        this.vendorName = function (keyword) {
            if (keyword) {
                return _this.maintenance.getVendorNameList(keyword)
                    .map(function (res) {
                    return res;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].of([]);
            }
        };
        this.activedRoute.params.subscribe(function (params) {
            _this.srno = params.srno;
            _this.truckno = params.truckno;
        });
        this.addForm = this.formBuilder.group({
            date: [''],
            jobno: [''],
            srno: [''],
            truckno: [''],
            km_reading: [''],
            vendor_name: [''],
            remarks: [''],
            bill_amount: [''],
            app_amount: [''],
            job_details: [''],
            upload_bill: [''],
            addMultipleJobDetails: this.formBuilder.array([])
        });
    }
    JobListComponent.prototype.ngOnInit = function () {
        this.fetchData();
        this.getMaxJobNo();
    };
    Object.defineProperty(JobListComponent.prototype, "detailData", {
        get: function () { return this.addForm.get('addMultipleJobDetails'); },
        enumerable: true,
        configurable: true
    });
    // get multipleEditControls() {
    //   return this.addForm.get('addMultipleJobDetails')['controls'];
    // }
    JobListComponent.prototype.createItem = function () {
        return this.formBuilder.group({
            work_be_done: [''],
            last_done_on: [''],
            remarks: [''],
            qty: [''],
            scrap_qty: [''],
            next_due_km: [''],
            rate: [''],
            gst: [''],
            amount: [''],
        });
    };
    JobListComponent.prototype.existingData = function (data) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            work_be_done: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data.work_be_done),
            last_done_on: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data.last_done_on),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data.remarks),
            qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data.qty),
            scrap_qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data.scrap_qty),
            next_due_km: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data.next_due_km),
            rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data.rate),
            gst: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data.gst),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](data.amount),
        });
    };
    JobListComponent.prototype.addDetail = function () {
        this.addMultipleJobDetails = this.addForm.get('addMultipleJobDetails');
        this.addMultipleJobDetails.push(this.createItem());
    };
    // Remove multiple form
    JobListComponent.prototype.removeItem = function (index) {
        if (index === 0) {
            this.toastr.error('Cannot remove this form.');
        }
        else {
            this.addMultipleJobDetails.removeAt(index);
        }
    };
    JobListComponent.prototype.fetchData = function () {
        var _this = this;
        this.mainTotal = 0;
        var detail = this.addForm.get('addMultipleJobDetails');
        while (detail.length !== 0) {
            detail.removeAt(0);
        }
        // if no job detail then push empty item
        detail.push(this.createItem());
        this.maintenance.getJobNoList(this.srno).subscribe(function (res) {
            console.log('res >>>>>>>', res.result);
            _this.jobNoList = res.result;
        });
    };
    JobListComponent.prototype.newJobCard = function () {
        this.mainTotal = 0;
        this.addForm.reset();
        this.date = this.calendar.getToday();
        console.log('this.date  >>>>>>', this.date);
        // const bDateObj = {
        //   day: parseInt(bDate[0]),
        //   month: parseInt(bDate[1]),
        //   year: parseInt(bDate[2])
        // };
        this.addForm.controls['date'].setValue(this.date);
        this.file = '';
        var detail = this.addForm.get('addMultipleJobDetails');
        while (detail.length !== 0) {
            detail.removeAt(0);
        }
        // if no job detail then push empty item
        detail.push(this.createItem());
        this.CardActive = true;
        this.listActive = false;
        this.saveActive = true;
        this.updateActive = false;
    };
    JobListComponent.prototype.Back = function () {
        this.CardActive = false;
        this.listActive = true;
        this.getMaxJobNo();
        this.mainTotal = 0;
        var detail = this.addForm.get('addMultipleJobDetails');
        while (detail.length !== 0) {
            detail.removeAt(0);
        }
        // if no job detail then push empty item
        detail.push(this.createItem());
    };
    JobListComponent.prototype.getJobCard = function (jobno) {
        var _this = this;
        this.CardActive = true;
        this.listActive = false;
        this.saveActive = false;
        this.updateActive = true;
        this.maintenance.getJobNoJobDetails(jobno).subscribe(function (res) {
            _this.job_data = res;
            var control = _this.addForm.controls['addMultipleJobDetails'];
            for (var i_1 = control.length - 1; i_1 >= 0; i_1--) {
                control.removeAt(i_1);
            }
            var fDate = moment(res.date).format('DD/MM/YYYY');
            var bDate = fDate.split('/');
            var bDateObj = {
                day: parseInt(bDate[0]),
                month: parseInt(bDate[1]),
                year: parseInt(bDate[2])
            };
            _this.max_jobno = res.jobno;
            _this.addForm.controls['date'].setValue(bDateObj);
            _this.addForm.controls['jobno'].setValue(_this.max_jobno);
            _this.addForm.controls['srno'].setValue(_this.srno);
            _this.addForm.controls['truckno'].setValue(_this.truckno);
            _this.addForm.controls['km_reading'].setValue(res.km_reading);
            _this.addForm.controls['vendor_name'].setValue(res.vendor_name);
            _this.addForm.controls['remarks'].setValue(res.remarks);
            _this.addForm.controls['bill_amount'].setValue(res.bill_amount);
            _this.addForm.controls['app_amount'].setValue(res.app_amount);
            var detail = _this.addForm.get('addMultipleJobDetails');
            // if no job detail then push empty item
            var i = 0;
            if (res.job_details.length === 0) {
                detail.push(_this.createItem());
            }
            else {
                res.job_details.forEach(function (element) {
                    // set date
                    element.last_done_on = moment_timezone__WEBPACK_IMPORTED_MODULE_8__(element.last_done_on).tz('Asia/Calcutta').format('DD/MM/YYYY');
                    var splitedDate = element.last_done_on.split('/');
                    var dateObj = {
                        day: parseInt(splitedDate[0], 10),
                        month: parseInt(splitedDate[1], 10),
                        year: parseInt(splitedDate[2], 10)
                    };
                    element.last_done_on = dateObj;
                    i = i + 1;
                    detail.push(_this.existingData(element));
                });
            }
            _this.jobNoData = res;
            // this.jobNoList = res.result;
            _this.GetTotalAmount((i - 1));
        });
    };
    JobListComponent.prototype.getMaxJobNo = function () {
        var _this = this;
        this.maintenance.getMaxJobNo().subscribe(function (res) {
            console.log('res >>>>>>>', res);
            // this.jobNoList = res.result;
            _this.max_jobno = res.jobno;
        });
    };
    JobListComponent.prototype.onSelectBill = function (event) {
        this.file = event.target.files[0];
    };
    JobListComponent.prototype.submit = function () {
        var _this = this;
        var getFromData = this.addForm.value;
        var tdate = getFromData.date;
        var mDate = tdate.year + '-' + tdate.month + '-' + tdate.day;
        // console.log('addMultipleJobDetails >>>', getFromData.addMultipleJobDetails);
        var vendorname = getFromData.vendor_name.name;
        getFromData.vendor_name = vendorname ? vendorname : getFromData.vendor_name;
        getFromData.addMultipleJobDetails.forEach(function (element) {
            // const wdate = element.work_be_done;
            // if (wdate) {
            //   const workDate = wdate.year + '-' + wdate.month + '-' + wdate.day;
            //   element.work_be_done = workDate;
            // }
            // const ldate = element.last_done_on;
            // if (ldate) {
            //   const lastDate = ldate.year + '-' + ldate.month + '-' + ldate.day;
            //   element.last_done_on = lastDate;
            // }
            var wdname = element.work_be_done.name;
            element.work_be_done = wdname ? wdname : element.work_be_done;
            _this.jobDetails.push(element);
        });
        var d = new FormData();
        d.append('file', this.file);
        var bill = '';
        if (getFromData.upload_bill) {
            this.maintenance.uploadBill(d).subscribe(function (res) {
                console.log('>>res', res);
                bill = res.url;
                _this.toastr.success('Bill uploaded.');
                var mainObj = {
                    'date': mDate,
                    'jobno': _this.max_jobno,
                    'srno': Number(_this.srno),
                    'truckno': _this.truckno,
                    'km_reading': getFromData.km_reading,
                    'vendor_name': getFromData.vendor_name,
                    'remarks': getFromData.remarks,
                    'bill_amount': getFromData.bill_amount,
                    'app_amount': getFromData.app_amount,
                    'job_details': _this.jobDetails,
                    'bill': bill
                };
                _this.maintenance.addJobCard(mainObj).subscribe(function (res) {
                    _this.addForm.reset();
                    _this.file = '';
                    _this.toastr.success('Job Card Added successfully.');
                    _this.fetchData();
                    _this.getMaxJobNo();
                    _this.CardActive = false;
                    _this.listActive = true;
                }, function (err) {
                    console.log('err   >>>', err);
                    _this.toastr.error('Something went wrong when adding!');
                });
            }, function (err) {
                console.log('err   >>>', err);
                _this.toastr.error('Something went wrong when adding!');
            });
        }
        else {
            var mainObj = {
                'date': mDate,
                'jobno': this.max_jobno,
                'srno': Number(this.srno),
                'truckno': this.truckno,
                'km_reading': getFromData.km_reading,
                'vendor_name': getFromData.vendor_name,
                'remarks': getFromData.remarks,
                'bill_amount': getFromData.bill_amount,
                'app_amount': getFromData.app_amount,
                'job_details': this.jobDetails,
                'bill': bill
            };
            this.maintenance.addJobCard(mainObj).subscribe(function (res) {
                _this.addForm.reset();
                _this.file = '';
                _this.toastr.success('Job Card Added successfully.');
                _this.fetchData();
                _this.getMaxJobNo();
                _this.CardActive = false;
                _this.listActive = true;
            }, function (err) {
                console.log('err   >>>', err);
                _this.toastr.error('Something went wrong when adding!');
            });
        }
    };
    JobListComponent.prototype.getLastDate = function (idx) {
        var _this = this;
        var getFromData = this.addForm.value;
        var truckno = this.truckno;
        var work_be_done;
        if (getFromData.addMultipleJobDetails[idx].work_be_done.name) {
            work_be_done = getFromData.addMultipleJobDetails[idx].work_be_done.name;
        }
        console.log('truckno  >>>', truckno);
        console.log('work_be_done  >>>', work_be_done);
        this.maintenance.getLastDoneOn(truckno, work_be_done).subscribe(function (res) {
            console.log('res  >>>', res.result.last_done_on);
            if (res.result.last_done_on) {
                var dt = moment_timezone__WEBPACK_IMPORTED_MODULE_8__(res.result.last_done_on.last_done_on).tz('Asia/Calcutta');
                var dateObj = {
                    day: parseInt(dt.format('DD')),
                    month: parseInt(dt.format('MM')),
                    year: parseInt(dt.format('YYYY'))
                };
                _this.addForm.controls['addMultipleJobDetails']['controls'][idx].controls['last_done_on'].setValue(dateObj);
            }
        }, function (err) {
            _this.toastr.error('Something went wrong.', 'Error');
        });
    };
    JobListComponent.prototype.update = function () {
        var _this = this;
        this.jobDetails = [];
        var getFromData = this.addForm.value;
        var tdate = getFromData.date;
        var mDate = tdate.year + '-' + tdate.month + '-' + tdate.day;
        // console.log('addMultipleJobDetails >>>', getFromData.addMultipleJobDetails);
        var vendorname = getFromData.vendor_name.name;
        getFromData.vendor_name = vendorname ? vendorname : getFromData.vendor_name;
        getFromData.addMultipleJobDetails.forEach(function (element) {
            // console.log('element  >>>>', element);
            // const ldate = element.last_done_on;
            // if (ldate) {
            //   const lastDate = ldate.year + '-' + ldate.month + '-' + ldate.day;
            //   element.last_done_on = lastDate;
            // }
            delete element.last_done_on;
            var wdname = element.work_be_done.name;
            element.work_be_done = wdname ? wdname : element.work_be_done;
            _this.jobDetails.push(element);
        });
        // console.log(this.jobDetails);
        var d = new FormData();
        d.append('file', this.file);
        var bill = '';
        if (getFromData.upload_bill) {
            this.maintenance.uploadBill(d).subscribe(function (res) {
                bill = res.url;
                _this.toastr.success('Job Card Updated successfully.');
                var mainObj = {
                    'date': mDate,
                    'jobno': _this.max_jobno,
                    'srno': Number(_this.srno),
                    'truckno': _this.truckno,
                    'km_reading': getFromData.km_reading,
                    'vendor_name': getFromData.vendor_name,
                    'remarks': getFromData.remarks,
                    'bill_amount': getFromData.bill_amount,
                    'app_amount': getFromData.app_amount,
                    'job_details': _this.jobDetails,
                    'bill': bill
                };
                console.log('mainObj  >>>>>', mainObj);
                _this.maintenance.updateJobCard(mainObj).subscribe(function (res) {
                    _this.addForm.reset();
                    _this.file = '';
                    _this.toastr.success('Job Card Updated Successfully.');
                    _this.CardActive = false;
                    _this.listActive = true;
                    _this.getMaxJobNo();
                    var detail = _this.addForm.get('addMultipleJobDetails');
                    while (detail.length !== 0) {
                        detail.removeAt(0);
                    }
                }, function (err) {
                    console.log('err   >>>', err);
                    _this.toastr.error('Something went wrong when adding!');
                });
            }, function (err) {
                console.log('err   >>>', err);
                _this.toastr.error('Something went wrong when adding!');
            });
        }
        else {
            var mainObj = {
                'date': mDate,
                'jobno': this.max_jobno,
                'srno': Number(this.srno),
                'truckno': this.truckno,
                'km_reading': getFromData.km_reading,
                'vendor_name': getFromData.vendor_name,
                'remarks': getFromData.remarks,
                'bill_amount': getFromData.bill_amount,
                'app_amount': getFromData.app_amount,
                'job_details': this.jobDetails
            };
            console.log('mainObj  >>>>>', mainObj);
            this.maintenance.updateJobCard(mainObj).subscribe(function (res) {
                _this.addForm.reset();
                _this.file = '';
                _this.toastr.success('Job Card Updated Successfully.');
                _this.CardActive = false;
                _this.listActive = true;
                _this.getMaxJobNo();
                var detail = _this.addForm.get('addMultipleJobDetails');
                while (detail.length !== 0) {
                    detail.removeAt(0);
                }
            }, function (err) {
                console.log('err   >>>', err);
                _this.toastr.error('Something went wrong when adding!');
            });
        }
    };
    JobListComponent.prototype.delete = function (idx, jobno) {
        var _this = this;
        console.log('idx  >>>>>', idx);
        console.log('jobno  >>>>>', jobno);
        var conf = confirm('Are you sure you want to delete this record ?');
        if (conf === true) {
            this.maintenance.deleteJobCard(jobno).subscribe(function (res) {
                _this.jobNoList.splice(idx, 1);
                _this.toastr.success('Job Card deleted successfully.');
                _this.getMaxJobNo();
            }, function (err) {
                _this.toastr.error('Something went wrong.');
            });
        }
    };
    JobListComponent.prototype.setTotalAmount = function (idx) {
        var getFromData = this.addForm.value;
        if (getFromData.addMultipleJobDetails[idx].qty && getFromData.addMultipleJobDetails[idx].rate) {
            var newQty = getFromData.addMultipleJobDetails[idx].qty;
            var newRate = getFromData.addMultipleJobDetails[idx].rate;
            var newGST = getFromData.addMultipleJobDetails[idx].gst;
            // console.log('newQty  >>>', newQty);
            // console.log('newRate  >>>', newRate);
            // console.log('totalAmount  >>>', newGST);
            var totalAmount = newQty * newRate;
            var gstAmount = (totalAmount * newGST) / 100;
            // console.log('totalAmount  >>>', totalAmount);
            // console.log('gstAmount  >>>', gstAmount);
            var finalAmount = totalAmount + gstAmount;
            this.addForm.controls['addMultipleJobDetails']['controls'][idx].controls['amount'].setValue(finalAmount);
            this.GetTotalAmount(idx);
        }
    };
    JobListComponent.prototype.GetTotalAmount = function (idx) {
        var getFromData = this.addForm.value;
        if (getFromData.addMultipleJobDetails[idx].amount) {
            var t = 0;
            // const i = 0;
            while (idx >= 0) {
                t = t + getFromData.addMultipleJobDetails[idx].amount;
                idx = idx - 1;
            }
            this.mainTotal = t;
        }
    };
    JobListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-list',
            template: __webpack_require__(/*! ./job-list.component.html */ "./src/app/layout/maintenance/job-list/job-list.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_6__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./job-list.component.scss */ "./src/app/layout/maintenance/job-list/job-list.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_1__["MaintenanceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"]])
    ], JobListComponent);
    return JobListComponent;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/jobwork-reslover.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/maintenance/jobwork-reslover.ts ***!
  \********************************************************/
/*! exports provided: JobworkReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobworkReslover", function() { return JobworkReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _maintenance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maintenance.service */ "./src/app/layout/maintenance/maintenance.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobworkReslover = /** @class */ (function () {
    function JobworkReslover(ms) {
        this.ms = ms;
    }
    JobworkReslover.prototype.resolve = function (route) {
        return this.ms.getJobwork(route.paramMap.get('id'));
    };
    JobworkReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_maintenance_service__WEBPACK_IMPORTED_MODULE_1__["MaintenanceService"]])
    ], JobworkReslover);
    return JobworkReslover;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/jobworkmaster-reslover.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/maintenance/jobworkmaster-reslover.ts ***!
  \**************************************************************/
/*! exports provided: JobworkmasterReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobworkmasterReslover", function() { return JobworkmasterReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _maintenance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maintenance.service */ "./src/app/layout/maintenance/maintenance.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobworkmasterReslover = /** @class */ (function () {
    function JobworkmasterReslover(ms) {
        this.ms = ms;
    }
    JobworkmasterReslover.prototype.resolve = function (route) {
        return this.ms.getJobworkmaster(route.paramMap.get('id'));
    };
    JobworkmasterReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_maintenance_service__WEBPACK_IMPORTED_MODULE_1__["MaintenanceService"]])
    ], JobworkmasterReslover);
    return JobworkmasterReslover;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/list-engine-typemaster/list-engine-typemaster.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/maintenance/list-engine-typemaster/list-engine-typemaster.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Engine Type Master'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/maintenance/list-engine-typemaster/list-engine-typemaster.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/maintenance/list-engine-typemaster/list-engine-typemaster.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWludGVuYW5jZS9saXN0LWVuZ2luZS10eXBlbWFzdGVyL2xpc3QtZW5naW5lLXR5cGVtYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/maintenance/list-engine-typemaster/list-engine-typemaster.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/maintenance/list-engine-typemaster/list-engine-typemaster.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ListEngineTypemasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEngineTypemasterComponent", function() { return ListEngineTypemasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../maintenance.service */ "./src/app/layout/maintenance/maintenance.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListEngineTypemasterComponent = /** @class */ (function () {
    function ListEngineTypemasterComponent(router, ms) {
        this.router = router;
        this.ms = ms;
        this.addButtonInfo = { text: 'Add Engine Type Master', url: '/maintenance/add-engine-typemaster' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('maintenance/engine-typemaster');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Engine Type' };
        this.columns = [
            { title: 'Engine Type', name: 'enginetype', sort: false },
            { title: 'Actions', links: ['Edit', 'Delete'] }
        ];
    }
    ListEngineTypemasterComponent.prototype.ngOnInit = function () {
    };
    ListEngineTypemasterComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        // console.log('list material', data);
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/maintenance/engine-typemaster/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListEngineTypemasterComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListEngineTypemasterComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.ms.deleteEtm(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) { console.log(error); });
    };
    ListEngineTypemasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-engine-typemaster',
            template: __webpack_require__(/*! ./list-engine-typemaster.component.html */ "./src/app/layout/maintenance/list-engine-typemaster/list-engine-typemaster.component.html"),
            styles: [__webpack_require__(/*! ./list-engine-typemaster.component.scss */ "./src/app/layout/maintenance/list-engine-typemaster/list-engine-typemaster.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"]])
    ], ListEngineTypemasterComponent);
    return ListEngineTypemasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/list-job-work/list-job-work.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/maintenance/list-job-work/list-job-work.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'JOB WORK'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/maintenance/list-job-work/list-job-work.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/maintenance/list-job-work/list-job-work.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWludGVuYW5jZS9saXN0LWpvYi13b3JrL2xpc3Qtam9iLXdvcmsuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/maintenance/list-job-work/list-job-work.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/maintenance/list-job-work/list-job-work.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListJobWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListJobWorkComponent", function() { return ListJobWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _maintenance_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../maintenance/maintenance.service */ "./src/app/layout/maintenance/maintenance.service.ts");
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





var ListJobWorkComponent = /** @class */ (function () {
    function ListJobWorkComponent(router, meta, ms) {
        this.router = router;
        this.meta = meta;
        this.ms = ms;
        this.addButtonInfo = { text: 'Add Job Work', url: '/maintenance/add-job-work' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('maintenance/job-work');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by TruckNo, Vendor' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Site', name: 'site', sort: false },
                { title: 'Type', name: 'job_type', sort: false },
                { title: 'Job No', name: 'job_number', sort: false },
                { title: 'Job Date', name: 'job_date', sort: false },
                { title: 'Truck No', name: 'truck_no', sort: false },
                { title: 'Vendor', name: 'vendor', sort: false },
                { title: 'User', name: 'user', sort: false },
                { title: 'Actions', links: ['Edit', 'Delete'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Site', name: 'site', sort: false },
                { title: 'Type', name: 'job_type', sort: false },
                { title: 'Job No', name: 'job_number', sort: false },
                { title: 'Job Date', name: 'job_date', sort: false },
                { title: 'Truck No', name: 'truck_no', sort: false },
                { title: 'Vendor', name: 'vendor', sort: false },
                { title: 'User', name: 'user', sort: false },
                { title: 'Actions', links: ['Edit'] }
            ];
        }
    }
    ListJobWorkComponent.prototype.ngOnInit = function () {
    };
    ListJobWorkComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        // console.log('list material', data);
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/maintenance/job-work/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListJobWorkComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListJobWorkComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.ms.deleteJobwork(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) { console.log(error); });
    };
    ListJobWorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-job-work',
            template: __webpack_require__(/*! ./list-job-work.component.html */ "./src/app/layout/maintenance/list-job-work/list-job-work.component.html"),
            styles: [__webpack_require__(/*! ./list-job-work.component.scss */ "./src/app/layout/maintenance/list-job-work/list-job-work.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _maintenance_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"]])
    ], ListJobWorkComponent);
    return ListJobWorkComponent;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/list-job-workmaster/list-job-workmaster.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/maintenance/list-job-workmaster/list-job-workmaster.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Job Work Master'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete Job Work Master</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete this Job Work Master?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/maintenance/list-job-workmaster/list-job-workmaster.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/maintenance/list-job-workmaster/list-job-workmaster.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWludGVuYW5jZS9saXN0LWpvYi13b3JrbWFzdGVyL2xpc3Qtam9iLXdvcmttYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/maintenance/list-job-workmaster/list-job-workmaster.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/maintenance/list-job-workmaster/list-job-workmaster.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ListJobWorkmasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListJobWorkmasterComponent", function() { return ListJobWorkmasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../maintenance.service */ "./src/app/layout/maintenance/maintenance.service.ts");
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





var ListJobWorkmasterComponent = /** @class */ (function () {
    function ListJobWorkmasterComponent(router, meta, ms) {
        this.router = router;
        this.meta = meta;
        this.ms = ms;
        this.addButtonInfo = { text: 'Add Job-Work-Master', url: '/maintenance/add-job-workmaster' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('maintenance/job-workmaster');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Job Work Name' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Name', name: 'jobworkname', sort: true },
                { title: 'Actions', links: ['Edit', 'Delete'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Name', name: 'jobworkname', sort: true },
                { title: 'Actions', links: ['Edit'] }
            ];
        }
    }
    ListJobWorkmasterComponent.prototype.ngOnInit = function () {
    };
    ListJobWorkmasterComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/maintenance/job-workmaster/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListJobWorkmasterComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListJobWorkmasterComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.ms.deleteJobworkmaster(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) {
            console.log(error);
        });
    };
    ListJobWorkmasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-job-workmaster',
            template: __webpack_require__(/*! ./list-job-workmaster.component.html */ "./src/app/layout/maintenance/list-job-workmaster/list-job-workmaster.component.html"),
            styles: [__webpack_require__(/*! ./list-job-workmaster.component.scss */ "./src/app/layout/maintenance/list-job-workmaster/list-job-workmaster.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"]])
    ], ListJobWorkmasterComponent);
    return ListJobWorkmasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/maintenance-master/maintenance-master.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/maintenance/maintenance-master/maintenance-master.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <ngb-tabset>\r\n      <ngb-tab>\r\n        <ng-template ngbTabTitle><b>Truck Maintenance</b></ng-template>\r\n        <ng-template ngbTabContent>\r\n          <p></p>\r\n          <h4>Pending Records</h4>\r\n          <table class=\"table mytable tableFixHead\">\r\n            <thead>\r\n              <tr>\r\n                <th>Sr No.</th>\r\n                <th>TA Name</th>\r\n                <th>Truck No</th>\r\n                <th>Particulars</th>\r\n                <th>TA Time</th>\r\n                <th>Assign To</th>\r\n                <th>Km Reading</th>\r\n                <th>Remarks</th>\r\n                <th>Actions</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"flags.loadingTruckRecords\">\r\n                <td colspan=\"14\">\r\n                  <div class=\"showbox\">\r\n                    <div class=\"loader\">\r\n                      <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                        <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                      </svg>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n\r\n              <tr *ngFor=\"let td of truckData\">\r\n                <td>{{ td.srno }}</td>\r\n                <td>{{ td.taname }}</td>\r\n                <td>{{ td.truckno }}</td>\r\n                <td>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"td.particulars\" name=\"particular{{ td.srno }}\">\r\n                </td>\r\n                <td>{{ td.ta_time | date: \"dd/MM/yyyy HH:mm:ss\" }}</td>\r\n                <td><input type=\"text\" class=\"form-control\" [(ngModel)]=\"td.assign_to\" name=\"assignTo{{ td.srno }}\"></td>\r\n                <td><input type=\"text\" class=\"form-control\" [(ngModel)]=\"td.km_reading\" name=\"km_reading{{ td.srno }}\"></td>\r\n                <td><input type=\"text\" class=\"form-control\" [(ngModel)]=\"td.remarks\" name=\"remarks{{ td.srno }}\"></td>\r\n                <td>\r\n                  <button class=\"btn btn-success\" (click)=\"acceptTruckRecord(td)\">Accept</button>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"flags.loadedTruckRecords && truckData.length === 0\">\r\n                <td align=\"center\" colspan=\"14\">No data available</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <p></p>\r\n          <hr>\r\n          <h4>Accepted Records</h4>\r\n          <table class=\"table mytable tableFixHead\">\r\n            <thead>\r\n              <tr>\r\n                <th>Sr No.</th>\r\n                <th>Truck No</th>\r\n                <th>Particulars </th>\r\n                <th>TA Time</th>\r\n                <th>Job Time</th>\r\n                <th>Hrs</th>\r\n                <th style=\"width: 15%;\">Status</th>\r\n                <th>Remarks</th>\r\n                <th>Actions</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"flags.loadingAcceptedTruckRecords\">\r\n                <td colspan=\"14\">\r\n                  <div class=\"showbox\">\r\n                    <div class=\"loader\">\r\n                      <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                        <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                      </svg>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr *ngFor=\"let td of truckAcceptedData\">\r\n                <td>{{ td.srno }}</td>\r\n                <td>{{ td.truckno }}</td>\r\n                <td>{{ td.particulars }}</td>\r\n                <td>{{ td.ta_time | date: \"dd/MM/yyyy HH:mm:ss\" }}</td>\r\n                <td>{{ td.job_time | date: \"dd/MM/yyyy HH:mm:ss\" }}</td>\r\n                <td>{{ td.countHrs.toFixed(2) }}</td>\r\n                <td>\r\n                  <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"td.status\" name=\"status{{td.srno}}\"> -->\r\n\r\n                  <select [(ngModel)]=\"td.status\" class=\"form-control\">\r\n                    <option value=\"\">Select Status</option>\r\n                    <option *ngFor=\"let s of statuses\"  value=\"{{ s.status }}\"> \r\n                      {{ s.status }}\r\n                    </option>\r\n                  </select>\r\n                </td>\r\n                <!-- <td>\r\n                  <div class=\"radio\">\r\n                    <label><input type=\"radio\" [(ngModel)]=\"td.status\" name=\"status{{td.srno}}\" value=\"Up\">Up</label>\r\n                  </div>\r\n                  <div class=\"radio\">\r\n                    <label><input type=\"radio\" [(ngModel)]=\"td.status\" name=\"status{{td.srno}}\" value=\"Down\">Down</label>\r\n                  </div>\r\n                  <div class=\"radio\">\r\n                    <label><input type=\"radio\" [(ngModel)]=\"td.status\" name=\"status{{td.srno}}\" value=\"No driver\">No</label>\r\n                  </div>\r\n                  <div class=\"radio\">\r\n                    <label><input type=\"radio\" [(ngModel)]=\"td.status\" name=\"status{{td.srno}}\" value=\"Maintenance\">Maintenance</label>\r\n                  </div>\r\n                </td> -->\r\n                <td>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"td.remarks\" name=\"status{{ td.remarks }}\">\r\n                </td>\r\n                <td>\r\n                  <button class=\"btn btn-success\" (click)=\"updateTruckRecord(td)\">Update</button>&nbsp;&nbsp;\r\n                  <a [routerLink]=\"['/maintenance/job-list/', {srno: td.srno, truckno: td.truckno}]\">\r\n                  <button type=\"button\" class=\"btn btn-warning\">Job Card</button></a><br><br>\r\n\r\n                  <a [routerLink]=\"['/maintenance/truck-history/', { truckno: td.truckno }]\">\r\n                    <button type=\"button\" class=\"btn btn-warning\">Truck History</button></a>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"flags.loadedAcceptedTruckRecords && truckAcceptedData.length === 0\">\r\n                <td align=\"center\" colspan=\"14\">No data available</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab>\r\n        <ng-template ngbTabTitle><b>Tyre Maintenance</b></ng-template>\r\n        <ng-template ngbTabContent>\r\n          <p></p>\r\n          <h4>Pending Records</h4>\r\n          <table class=\"table mytable tableFixHead\">\r\n            <thead>\r\n              <tr>\r\n                <th>Sr No.</th>\r\n                <th>TA Name</th>\r\n                <th>Truck No</th>\r\n                <th>Particulars </th>\r\n                <th>TA Time</th>\r\n                <th>Assign To</th>\r\n                <th>Km Reading</th>\r\n                <th>Remarks</th>\r\n                <th>Actions</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"flags.loadingTyreRecords\">\r\n                <td colspan=\"14\">\r\n                  <div class=\"showbox\">\r\n                    <div class=\"loader\">\r\n                      <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                        <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                      </svg>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr *ngFor=\"let td of tyreData\">\r\n                <td>{{ td.srno }}</td>\r\n                <td>{{ td.taname }}</td>\r\n                <td>{{ td.truckno }}</td>\r\n                <td><input type=\"text\" class=\"form-control\" [(ngModel)]=\"td.particulars\" name=\"particular{{ td.srno }}\"></td>\r\n                <td>{{ td.ta_time | date: \"dd/MM/yyyy HH:mm:ss\" }}</td>\r\n                <td><input type=\"text\" class=\"form-control\" [(ngModel)]=\"td.assign_to\" name=\"assignTo{{ td.srno }}\"></td>\r\n                <td><input type=\"text\" class=\"form-control\" [(ngModel)]=\"td.km_reading\" name=\"km_reading{{ td.srno }}\"></td>\r\n                <td><input type=\"text\" class=\"form-control\" [(ngModel)]=\"td.remarks\" name=\"remarks{{ td.srno }}\"></td>\r\n                <td>\r\n                  <button class=\"btn btn-success\" (click)=\"acceptTyreRecord(td)\">Accept</button>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"flags.loadedTyreRecords && tyreData.length === 0\">\r\n                <td align=\"center\" colspan=\"14\">No data available</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <p></p>\r\n          <hr>\r\n          <h4>Accepted Records</h4>\r\n          <table class=\"table mytable tableFixHead\">\r\n            <thead>\r\n              <tr>\r\n                <th>Sr No.</th>\r\n                <th>Truck No</th>\r\n                <th>Particulars </th>\r\n                <th>TA Time</th>\r\n                <th>Job Time</th>\r\n                <th>Hrs</th>\r\n                <th style=\"width: 15%;\">Status</th>\r\n                <th>Remarks</th>\r\n                <th>Actions</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngIf=\"flags.loadingAcceptedTyreRecords\">\r\n                <td colspan=\"14\">\r\n                  <div class=\"showbox\">\r\n                    <div class=\"loader\">\r\n                      <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                        <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                      </svg>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr *ngFor=\"let td of tyreAcceptedData\">\r\n                <td>{{ td.srno }}</td>\r\n                <td>{{ td.truckno }}</td>\r\n                <td>{{ td.particulars }}</td>\r\n                <td>{{ td.ta_time | date: \"dd/MM/yyyy HH:mm:ss\" }}</td>\r\n                <td>{{ td.job_time | date: \"dd/MM/yyyy HH:mm:ss\" }}</td>\r\n                <td>{{ td.countHrs.toFixed(2) }}</td>\r\n                <td>\r\n                  <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"td.status\" name=\"status{{td.srno}}\"> -->\r\n\r\n                  <select [(ngModel)]=\"td.status\" class=\"form-control\">\r\n                    <option value=\"\">Select Status</option>\r\n                    <option *ngFor=\"let s of statuses\"  value=\"{{ s.status }}\"> \r\n                      {{ s.status }}\r\n                    </option>\r\n                  </select>\r\n                </td>\r\n                <!-- <td>\r\n                  <div class=\"radio\">\r\n                    <label><input type=\"radio\" [(ngModel)]=\"td.status\" name=\"status{{td.srno}}\" value=\"Up\">Up</label>\r\n                  </div>\r\n                  <div class=\"radio\">\r\n                    <label><input type=\"radio\" [(ngModel)]=\"td.status\" name=\"status{{td.srno}}\" value=\"Down\">Down</label>\r\n                  </div>\r\n                  <div class=\"radio\">\r\n                    <label><input type=\"radio\" [(ngModel)]=\"td.status\" name=\"status{{td.srno}}\" value=\"No driver\">No</label>\r\n                  </div>\r\n                  <div class=\"radio\">\r\n                    <label><input type=\"radio\" [(ngModel)]=\"td.status\" name=\"status{{td.srno}}\" value=\"Maintenance\">Maintenance</label>\r\n                  </div>\r\n                </td> -->\r\n                <td>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"td.remarks\" name=\"status{{ td.remarks }}\">\r\n                </td>\r\n                <td>\r\n                  <button class=\"btn btn-success\" (click)=\"updateTyreRecord(td)\">Update</button>&nbsp;&nbsp;\r\n                  <a [routerLink]=\"['/maintenance/job-list/', {srno: td.srno, truckno: td.truckno}]\">\r\n                    <button type=\"button\" class=\"btn btn-warning\">Job Card</button></a><br><br>\r\n\r\n                    <a [routerLink]=\"['/maintenance/truck-history/', { truckno: td.truckno }]\">\r\n                      <button type=\"button\" class=\"btn btn-warning\">Truck History</button></a>\r\n                </td>                \r\n              </tr>\r\n              <tr *ngIf=\"flags.loadedAcceptedTyreRecords && tyreAcceptedData.length === 0\">\r\n                <td align=\"center\" colspan=\"14\">No data available</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </ng-template>\r\n      </ngb-tab>\r\n    </ngb-tabset>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/maintenance/maintenance-master/maintenance-master.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/maintenance/maintenance-master/maintenance-master.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWludGVuYW5jZS9tYWludGVuYW5jZS1tYXN0ZXIvbWFpbnRlbmFuY2UtbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/maintenance/maintenance-master/maintenance-master.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/maintenance/maintenance-master/maintenance-master.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MaintenanceMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceMasterComponent", function() { return MaintenanceMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaintenanceMasterComponent = /** @class */ (function () {
    function MaintenanceMasterComponent(maintenance, toastr) {
        this.maintenance = maintenance;
        this.toastr = toastr;
        this.truckData = [];
        this.truckAcceptedData = [];
        this.tyreData = [];
        this.tyreAcceptedData = [];
        this.statuses = [
            { status: 'Waiting for Spares' },
            { status: 'Work in Progress' },
            { status: 'Completed' },
        ];
        this.flags = {
            loadingTruckRecords: true,
            loadingAcceptedTruckRecords: true,
            loadedTruckRecords: false,
            loadedAcceptedTruckRecords: false,
            loadingTyreRecords: true,
            loadingAcceptedTyreRecords: true,
            loadedTyreRecords: false,
            loadedAcceptedTyreRecords: false,
        };
    }
    MaintenanceMasterComponent.prototype.ngOnInit = function () {
        this.getTruckRecords();
        this.getAcceptedTruckRecords();
        this.getTyreRecords();
        this.getAcceptedTyreRecords();
    };
    MaintenanceMasterComponent.prototype.getTruckRecords = function () {
        var _this = this;
        this.flags.loadingTruckRecords = true;
        this.maintenance.getTruckRecords().subscribe(function (res) {
            res.result.forEach(function (r) {
                r.editing = true;
            });
            _this.truckData = res.result;
            _this.flags.loadingTruckRecords = false;
            _this.flags.loadedTruckRecords = true;
        }, function (err) {
            _this.flags.loadingTruckRecords = false;
            _this.toastr.error('Something went wrong when loading Truck Maintenance Records.', 'Error');
        });
    };
    MaintenanceMasterComponent.prototype.getAcceptedTruckRecords = function () {
        var _this = this;
        this.flags.loadingAcceptedTruckRecords = true;
        this.maintenance.getAcceptedTruckRecords().subscribe(function (res) {
            res.result.forEach(function (r) {
                r.editing = true;
                var now = moment(new Date()); // todays date
                var end = r.job_time;
                var duration = moment.duration(now.diff(end));
                var hours = duration.asHours();
                r.countHrs = hours;
            });
            console.log();
            _this.truckAcceptedData = res.result;
            _this.flags.loadingAcceptedTruckRecords = false;
            _this.flags.loadedAcceptedTruckRecords = true;
        }, function (err) {
            _this.flags.loadingAcceptedTruckRecords = false;
            _this.toastr.error('Something went wrong when loading Accepted Truck Maintenance Records.', 'Error');
        });
    };
    MaintenanceMasterComponent.prototype.getTyreRecords = function () {
        var _this = this;
        this.flags.loadingTyreRecords = true;
        this.maintenance.getTyreRecords().subscribe(function (res) {
            res.result.forEach(function (r) {
                r.editing = true;
            });
            _this.tyreData = res.result;
            _this.flags.loadingTyreRecords = false;
            _this.flags.loadedTyreRecords = true;
        }, function (err) {
            _this.flags.loadingTyreRecords = false;
            _this.toastr.error('Something went wrong when loading Truck Maintenance Records.', 'Error');
        });
    };
    MaintenanceMasterComponent.prototype.getAcceptedTyreRecords = function () {
        var _this = this;
        this.flags.loadingAcceptedTyreRecords = true;
        this.maintenance.getAcceptedTyreRecords().subscribe(function (res) {
            res.result.forEach(function (r) {
                r.editing = true;
                var now = moment(new Date()); // todays date
                var end = r.job_time;
                var duration = moment.duration(now.diff(end));
                var hours = duration.asHours();
                r.countHrs = hours;
            });
            _this.tyreAcceptedData = res.result;
            _this.flags.loadingAcceptedTyreRecords = false;
            _this.flags.loadedAcceptedTyreRecords = true;
        }, function (err) {
            _this.flags.loadingAcceptedTyreRecords = false;
            _this.toastr.error('Something went wrong when loading Accepted Truck Maintenance Records.', 'Error');
        });
    };
    /** Actions and edits code below */
    MaintenanceMasterComponent.prototype.acceptTruckRecord = function (td) {
        var _this = this;
        var data = {
            particulars: td.particulars,
            assign_to: td.assign_to,
            km_reading: td.km_reading,
            remarks: td.remarks
        };
        this.maintenance.acceptTruckData(td.id, data).subscribe(function (res) {
            _this.getTruckRecords();
            _this.getAcceptedTruckRecords();
        }, function (err) {
            _this.toastr.error('Something went wrong when accepting truck maintenance record.', 'Error');
        });
    };
    MaintenanceMasterComponent.prototype.acceptTyreRecord = function (td) {
        var _this = this;
        var data = {
            particulars: td.particulars,
            assign_to: td.assign_to,
            km_reading: td.km_reading,
            remarks: td.remarks
        };
        this.maintenance.acceptTyreData(td.id, data).subscribe(function (res) {
            _this.getTyreRecords();
            _this.getAcceptedTyreRecords();
        }, function (err) {
            _this.toastr.error('Something went wrong when accepting tyre maintenance record.', 'Error');
        });
    };
    MaintenanceMasterComponent.prototype.updateTruckRecord = function (td) {
        var _this = this;
        var data = {
            id: td.id,
            status: td.status,
            remarks: td.remarks
        };
        this.maintenance.updateAcceptedTruck(data).subscribe(function (res) {
            _this.getTyreRecords();
            _this.getAcceptedTyreRecords();
        }, function (err) {
            _this.toastr.error('Something went wrong when accepting tyre maintenance record.', 'Error');
        });
    };
    MaintenanceMasterComponent.prototype.updateTyreRecord = function (td) {
        var _this = this;
        var data = {
            id: td.id,
            status: td.status,
            remarks: td.remarks
        };
        this.maintenance.updateAcceptedTyre(data).subscribe(function (res) {
            _this.getTyreRecords();
            _this.getAcceptedTyreRecords();
        }, function (err) {
            _this.toastr.error('Something went wrong when accepting tyre maintenance record.', 'Error');
        });
    };
    MaintenanceMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maintenance-master',
            template: __webpack_require__(/*! ./maintenance-master.component.html */ "./src/app/layout/maintenance/maintenance-master/maintenance-master.component.html"),
            styles: [__webpack_require__(/*! ./maintenance-master.component.scss */ "./src/app/layout/maintenance/maintenance-master/maintenance-master.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_1__["MaintenanceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], MaintenanceMasterComponent);
    return MaintenanceMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/maintenance-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/maintenance/maintenance-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: MaintenanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceRoutingModule", function() { return MaintenanceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _maintenance_master_maintenance_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maintenance-master/maintenance-master.component */ "./src/app/layout/maintenance/maintenance-master/maintenance-master.component.ts");
/* harmony import */ var _vendor_master_vendor_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor-master/vendor-master.component */ "./src/app/layout/maintenance/vendor-master/vendor-master.component.ts");
/* harmony import */ var _job_card_job_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job-card/job-card.component */ "./src/app/layout/maintenance/job-card/job-card.component.ts");
/* harmony import */ var _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job-list/job-list.component */ "./src/app/layout/maintenance/job-list/job-list.component.ts");
/* harmony import */ var _truck_history_truck_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./truck-history/truck-history.component */ "./src/app/layout/maintenance/truck-history/truck-history.component.ts");
/* harmony import */ var _add_job_workmaster_add_job_workmaster_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-job-workmaster/add-job-workmaster.component */ "./src/app/layout/maintenance/add-job-workmaster/add-job-workmaster.component.ts");
/* harmony import */ var _edit_job_workmaster_edit_job_workmaster_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-job-workmaster/edit-job-workmaster.component */ "./src/app/layout/maintenance/edit-job-workmaster/edit-job-workmaster.component.ts");
/* harmony import */ var _list_job_workmaster_list_job_workmaster_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-job-workmaster/list-job-workmaster.component */ "./src/app/layout/maintenance/list-job-workmaster/list-job-workmaster.component.ts");
/* harmony import */ var _jobworkmaster_reslover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./jobworkmaster-reslover */ "./src/app/layout/maintenance/jobworkmaster-reslover.ts");
/* harmony import */ var _add_job_work_add_job_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-job-work/add-job-work.component */ "./src/app/layout/maintenance/add-job-work/add-job-work.component.ts");
/* harmony import */ var _edit_job_work_edit_job_work_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-job-work/edit-job-work.component */ "./src/app/layout/maintenance/edit-job-work/edit-job-work.component.ts");
/* harmony import */ var _list_job_work_list_job_work_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list-job-work/list-job-work.component */ "./src/app/layout/maintenance/list-job-work/list-job-work.component.ts");
/* harmony import */ var _jobwork_reslover__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./jobwork-reslover */ "./src/app/layout/maintenance/jobwork-reslover.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/layout/maintenance/dashboard/dashboard.component.ts");
/* harmony import */ var _add_engine_typemaster_add_engine_typemaster_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-engine-typemaster/add-engine-typemaster.component */ "./src/app/layout/maintenance/add-engine-typemaster/add-engine-typemaster.component.ts");
/* harmony import */ var _edit_engine_typemaster_edit_engine_typemaster_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edit-engine-typemaster/edit-engine-typemaster.component */ "./src/app/layout/maintenance/edit-engine-typemaster/edit-engine-typemaster.component.ts");
/* harmony import */ var _list_engine_typemaster_list_engine_typemaster_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./list-engine-typemaster/list-engine-typemaster.component */ "./src/app/layout/maintenance/list-engine-typemaster/list-engine-typemaster.component.ts");
/* harmony import */ var _enginetypemaster_reslover__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./enginetypemaster-reslover */ "./src/app/layout/maintenance/enginetypemaster-reslover.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Job-workmaster




// Job-work




// dashbaord

// engine type master




var routes = [
    { path: '', redirectTo: 'maintenance-master', pathMatch: 'prefix' },
    { path: 'maintenance-master', component: _maintenance_master_maintenance_master_component__WEBPACK_IMPORTED_MODULE_2__["MaintenanceMasterComponent"] },
    { path: 'vendor-master', component: _vendor_master_vendor_master_component__WEBPACK_IMPORTED_MODULE_3__["VendorMasterComponent"] },
    // job workmaster
    { path: 'job-workmaster', component: _list_job_workmaster_list_job_workmaster_component__WEBPACK_IMPORTED_MODULE_9__["ListJobWorkmasterComponent"] },
    { path: 'job-workmaster/:id/edit', component: _edit_job_workmaster_edit_job_workmaster_component__WEBPACK_IMPORTED_MODULE_8__["EditJobWorkmasterComponent"], resolve: { jwm_details: _jobworkmaster_reslover__WEBPACK_IMPORTED_MODULE_10__["JobworkmasterReslover"] } },
    { path: 'add-job-workmaster', component: _add_job_workmaster_add_job_workmaster_component__WEBPACK_IMPORTED_MODULE_7__["AddJobWorkmasterComponent"] },
    // job work
    { path: 'job-work', component: _list_job_work_list_job_work_component__WEBPACK_IMPORTED_MODULE_13__["ListJobWorkComponent"] },
    { path: 'job-work/:id/edit', component: _edit_job_work_edit_job_work_component__WEBPACK_IMPORTED_MODULE_12__["EditJobWorkComponent"], resolve: { jw_details: _jobwork_reslover__WEBPACK_IMPORTED_MODULE_14__["JobworkReslover"] } },
    { path: 'add-job-work', component: _add_job_work_add_job_work_component__WEBPACK_IMPORTED_MODULE_11__["AddJobWorkComponent"] },
    { path: 'job-card', component: _job_card_job_card_component__WEBPACK_IMPORTED_MODULE_4__["JobCardComponent"] },
    { path: 'job-list', component: _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_5__["JobListComponent"] },
    { path: 'truck-history', component: _truck_history_truck_history_component__WEBPACK_IMPORTED_MODULE_6__["TruckHistoryComponent"] },
    // dashboard
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"] },
    // engine typemaster
    { path: 'engine-typemaster', component: _list_engine_typemaster_list_engine_typemaster_component__WEBPACK_IMPORTED_MODULE_18__["ListEngineTypemasterComponent"] },
    { path: 'engine-typemaster/:id/edit', component: _edit_engine_typemaster_edit_engine_typemaster_component__WEBPACK_IMPORTED_MODULE_17__["EditEngineTypemasterComponent"], resolve: { etm_details: _enginetypemaster_reslover__WEBPACK_IMPORTED_MODULE_19__["EnginetypemasterReslover"] } },
    { path: 'add-engine-typemaster', component: _add_engine_typemaster_add_engine_typemaster_component__WEBPACK_IMPORTED_MODULE_16__["AddEngineTypemasterComponent"] }
];
var MaintenanceRoutingModule = /** @class */ (function () {
    function MaintenanceRoutingModule() {
    }
    MaintenanceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MaintenanceRoutingModule);
    return MaintenanceRoutingModule;
}());

// ng g component layout/admin-privileges/components/PlantsRateList BilltyModule


/***/ }),

/***/ "./src/app/layout/maintenance/maintenance.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/maintenance/maintenance.module.ts ***!
  \**********************************************************/
/*! exports provided: MaintenanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceModule", function() { return MaintenanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _maintenance_master_maintenance_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maintenance-master/maintenance-master.component */ "./src/app/layout/maintenance/maintenance-master/maintenance-master.component.ts");
/* harmony import */ var _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maintenance-routing.module */ "./src/app/layout/maintenance/maintenance-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ng2_auto_complete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-auto-complete */ "./node_modules/ng2-auto-complete/dist/index.js");
/* harmony import */ var ng2_auto_complete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_auto_complete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vendor_master_vendor_master_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vendor-master/vendor-master.component */ "./src/app/layout/maintenance/vendor-master/vendor-master.component.ts");
/* harmony import */ var _job_card_job_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./job-card/job-card.component */ "./src/app/layout/maintenance/job-card/job-card.component.ts");
/* harmony import */ var _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./job-list/job-list.component */ "./src/app/layout/maintenance/job-list/job-list.component.ts");
/* harmony import */ var _vendor_master_edit_vendor_master_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vendor-master-edit/vendor-master-edit.component */ "./src/app/layout/maintenance/vendor-master-edit/vendor-master-edit.component.ts");
/* harmony import */ var _truck_history_truck_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./truck-history/truck-history.component */ "./src/app/layout/maintenance/truck-history/truck-history.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _add_job_workmaster_add_job_workmaster_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-job-workmaster/add-job-workmaster.component */ "./src/app/layout/maintenance/add-job-workmaster/add-job-workmaster.component.ts");
/* harmony import */ var _edit_job_workmaster_edit_job_workmaster_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-job-workmaster/edit-job-workmaster.component */ "./src/app/layout/maintenance/edit-job-workmaster/edit-job-workmaster.component.ts");
/* harmony import */ var _list_job_workmaster_list_job_workmaster_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./list-job-workmaster/list-job-workmaster.component */ "./src/app/layout/maintenance/list-job-workmaster/list-job-workmaster.component.ts");
/* harmony import */ var _jobworkmaster_reslover__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./jobworkmaster-reslover */ "./src/app/layout/maintenance/jobworkmaster-reslover.ts");
/* harmony import */ var _add_job_work_add_job_work_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-job-work/add-job-work.component */ "./src/app/layout/maintenance/add-job-work/add-job-work.component.ts");
/* harmony import */ var _edit_job_work_edit_job_work_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./edit-job-work/edit-job-work.component */ "./src/app/layout/maintenance/edit-job-work/edit-job-work.component.ts");
/* harmony import */ var _list_job_work_list_job_work_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./list-job-work/list-job-work.component */ "./src/app/layout/maintenance/list-job-work/list-job-work.component.ts");
/* harmony import */ var _jobwork_reslover__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./jobwork-reslover */ "./src/app/layout/maintenance/jobwork-reslover.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/layout/maintenance/dashboard/dashboard.component.ts");
/* harmony import */ var _add_engine_typemaster_add_engine_typemaster_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-engine-typemaster/add-engine-typemaster.component */ "./src/app/layout/maintenance/add-engine-typemaster/add-engine-typemaster.component.ts");
/* harmony import */ var _edit_engine_typemaster_edit_engine_typemaster_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit-engine-typemaster/edit-engine-typemaster.component */ "./src/app/layout/maintenance/edit-engine-typemaster/edit-engine-typemaster.component.ts");
/* harmony import */ var _list_engine_typemaster_list_engine_typemaster_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./list-engine-typemaster/list-engine-typemaster.component */ "./src/app/layout/maintenance/list-engine-typemaster/list-engine-typemaster.component.ts");
/* harmony import */ var _enginetypemaster_reslover__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./enginetypemaster-reslover */ "./src/app/layout/maintenance/enginetypemaster-reslover.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// job workmaster




// job work




// dashboard

// engine type master




var MaintenanceModule = /** @class */ (function () {
    function MaintenanceModule() {
    }
    MaintenanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _maintenance_master_maintenance_master_component__WEBPACK_IMPORTED_MODULE_2__["MaintenanceMasterComponent"],
                _job_card_job_card_component__WEBPACK_IMPORTED_MODULE_9__["JobCardComponent"],
                _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_10__["JobListComponent"],
                _vendor_master_vendor_master_component__WEBPACK_IMPORTED_MODULE_8__["VendorMasterComponent"],
                _vendor_master_edit_vendor_master_edit_component__WEBPACK_IMPORTED_MODULE_11__["VendorMasterEditComponent"],
                _truck_history_truck_history_component__WEBPACK_IMPORTED_MODULE_12__["TruckHistoryComponent"],
                // job workmaster
                _add_job_workmaster_add_job_workmaster_component__WEBPACK_IMPORTED_MODULE_14__["AddJobWorkmasterComponent"],
                _edit_job_workmaster_edit_job_workmaster_component__WEBPACK_IMPORTED_MODULE_15__["EditJobWorkmasterComponent"],
                _list_job_workmaster_list_job_workmaster_component__WEBPACK_IMPORTED_MODULE_16__["ListJobWorkmasterComponent"],
                // job work
                _add_job_work_add_job_work_component__WEBPACK_IMPORTED_MODULE_18__["AddJobWorkComponent"],
                _edit_job_work_edit_job_work_component__WEBPACK_IMPORTED_MODULE_19__["EditJobWorkComponent"],
                _list_job_work_list_job_work_component__WEBPACK_IMPORTED_MODULE_20__["ListJobWorkComponent"],
                // dashboard
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"],
                // engine type master
                _add_engine_typemaster_add_engine_typemaster_component__WEBPACK_IMPORTED_MODULE_23__["AddEngineTypemasterComponent"],
                _edit_engine_typemaster_edit_engine_typemaster_component__WEBPACK_IMPORTED_MODULE_24__["EditEngineTypemasterComponent"],
                _list_engine_typemaster_list_engine_typemaster_component__WEBPACK_IMPORTED_MODULE_25__["ListEngineTypemasterComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_3__["MaintenanceRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                ng2_auto_complete__WEBPACK_IMPORTED_MODULE_7__["Ng2AutoCompleteModule"],
            ],
            entryComponents: [
                _vendor_master_edit_vendor_master_edit_component__WEBPACK_IMPORTED_MODULE_11__["VendorMasterEditComponent"]
            ],
            providers: [
                _jobworkmaster_reslover__WEBPACK_IMPORTED_MODULE_17__["JobworkmasterReslover"],
                _jobwork_reslover__WEBPACK_IMPORTED_MODULE_21__["JobworkReslover"],
                _enginetypemaster_reslover__WEBPACK_IMPORTED_MODULE_26__["EnginetypemasterReslover"]
            ]
        })
    ], MaintenanceModule);
    return MaintenanceModule;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/maintenance.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/maintenance/maintenance.service.ts ***!
  \***********************************************************/
/*! exports provided: MaintenanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceService", function() { return MaintenanceService; });
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


var MaintenanceService = /** @class */ (function () {
    function MaintenanceService(api) {
        this.api = api;
    }
    // job-workmaster
    MaintenanceService.prototype.crateJobworkmaster = function (data) {
        return this.api.post('maintenance/job-workmaster', data);
    };
    MaintenanceService.prototype.getJobworkmaster = function (id) {
        return this.api.get('maintenance/job-workmaster/' + id);
    };
    MaintenanceService.prototype.updatJobworkmaster = function (id, data) {
        return this.api.put('maintenance/job-workmaster?id=' + id, data);
    };
    MaintenanceService.prototype.deleteJobworkmaster = function (id) {
        return this.api.delete("maintenance/job-workmaster/" + id);
    };
    // job-work
    MaintenanceService.prototype.crateJobwork = function (data) {
        return this.api.post('maintenance/job-work', data);
    };
    MaintenanceService.prototype.getJobwork = function (id) {
        return this.api.get('maintenance/job-work/' + id);
    };
    MaintenanceService.prototype.updatJobwork = function (id, data) {
        return this.api.put('maintenance/job-work?id=' + id, data);
    };
    MaintenanceService.prototype.deleteJobwork = function (id) {
        return this.api.delete("maintenance/job-work/" + id);
    };
    MaintenanceService.prototype.getJobNumberDetails = function (data) {
        return this.api.post('maintenance/job-work/generate_job_number', data);
    };
    MaintenanceService.prototype.getVendorMasterList = function () {
        return this.api.get('vendor_master/list');
    };
    MaintenanceService.prototype.getOverAllData = function () {
        return this.api.get('maintenance/reminders/first_screen');
    };
    MaintenanceService.prototype.getDetails = function () {
        return this.api.get('maintenance/reminders/second_screen');
    };
    MaintenanceService.prototype.getExpiredAllTrucksDetails = function () {
        return this.api.get('maintenance/reminders/second_screen_expired');
    };
    MaintenanceService.prototype.updateAttachements = function (data) {
        return this.api.put('maintenance/reminders/update', data);
    };
    // engine-typemaster
    MaintenanceService.prototype.crateEtm = function (data) {
        return this.api.post('maintenance/engine-typemaster', data);
    };
    MaintenanceService.prototype.getEtm = function (id) {
        return this.api.get('maintenance/engine-typemaster/' + id);
    };
    MaintenanceService.prototype.updatEtm = function (id, data) {
        return this.api.put('maintenance/engine-typemaster?id=' + id, data);
    };
    MaintenanceService.prototype.deleteEtm = function (id) {
        return this.api.delete("maintenance/engine-typemaster/" + id);
    };
    MaintenanceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], MaintenanceService);
    return MaintenanceService;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/truck-history/truck-history.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/maintenance/truck-history/truck-history.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <strong>Truck History</strong>\r\n    </div>\r\n    <br>\r\n    <b>&nbsp;Truck NO : #{{ truckno }}</b>\r\n    <br>\r\n    <div class=\"animated fadeIn\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg\">\r\n          <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                  <!-- tableFixHead mytable -->\r\n                  <table class=\"table\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th>Job No</th>\r\n                          <th width=\"15%\">Date</th>\r\n                          <th>Sr No</th>\r\n                          <th>KM Reading</th>\r\n                          <th>Work Be Done</th>\r\n                          <th>Remarks</th>\r\n                          <th>Qty</th>\r\n                          <th>Scrap Qty</th>\r\n                          <th>Next Due KM</th>\r\n                          <th>Rate</th>\r\n                          <th>GST</th>\r\n                          <th>Amount</th>\r\n                          <th>Vendor Name</th>\r\n                        \r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor= \"let truck of truckHistory; let i = index\">\r\n                            <!-- <a [routerLink]=\"['/admin-privileges/plants-rate-multiple-destination', truck.site]\"> -->\r\n                          <td>{{truck.jobno ? truck.jobno : '--'}}</td>\r\n                          <td>{{truck.date ? truck.date : '--'}}</td>\r\n                          <td>{{truck.srno ? truck.srno : '--'}}</td>\r\n                          <td>{{truck.km_reading ? truck.km_reading : '--'}}</td>\r\n                          <td>{{truck.work_be_done ? truck.work_be_done : '--'}}</td>\r\n                          <td>{{truck.remarks ? truck.remarks : '--'}}</td>\r\n                          <td>{{truck.qty ? truck.qty : '--'}}</td>\r\n                          <td>{{truck.scrap_qty ? truck.scrap_qty : '--'}}</td>\r\n                          <td>{{truck.next_due_km ? truck.next_due_km : '--'}}</td>\r\n                          <td>{{truck.rate ? truck.rate : '--'}}</td>\r\n                          <td>{{truck.gst ? truck.gst : '--'}}</td>\r\n                          <td>{{truck.amount ? truck.amount : '--'}}</td>\r\n                          <td>{{truck.vendor_name ? truck.vendor_name : '--'}}</td>\r\n\r\n\r\n\r\n                          <!-- <td><button class=\"btn btn-primary\" (click)=\"edit(user)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit</button>&nbsp;</td>\r\n                          <td>\r\n                            <button class=\"btn btn-danger\" (click)=\"delete(user, i)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</button>\r\n                          </td> -->\r\n                        </tr>\r\n                      </tbody>\r\n                      <tbody>\r\n                          <tr>\r\n                              <td [colSpan]=10></td>\r\n                              <td><b>Total</b></td>\r\n                              <td>{{ total_amount ? total_amount : \"0\" }}</td>\r\n                          </tr>\r\n                      </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/layout/maintenance/truck-history/truck-history.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/maintenance/truck-history/truck-history.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWludGVuYW5jZS90cnVjay1oaXN0b3J5L3RydWNrLWhpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/maintenance/truck-history/truck-history.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/maintenance/truck-history/truck-history.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TruckHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckHistoryComponent", function() { return TruckHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TruckHistoryComponent = /** @class */ (function () {
    function TruckHistoryComponent(maintenance, toastr, activedRoute, formBuilder) {
        var _this = this;
        this.maintenance = maintenance;
        this.toastr = toastr;
        this.activedRoute = activedRoute;
        this.formBuilder = formBuilder;
        this.truckHistory = [];
        this.activedRoute.params.subscribe(function (params) {
            _this.truckno = params.truckno;
        });
    }
    TruckHistoryComponent.prototype.ngOnInit = function () {
        this.getTruckHistory();
    };
    TruckHistoryComponent.prototype.getTruckHistory = function () {
        var _this = this;
        this.maintenance.getTruckHistory(this.truckno).subscribe(function (res) {
            // this.truckHistory = res.result;
            res.result.forEach(function (element) {
                element.date = moment(element.date).format('YYYY-MM-DD');
                _this.truckHistory.push(element);
            });
            _this.total_amount = res.total;
            console.log('truckHistory  >>>', _this.truckHistory);
        }, function (err) {
            _this.toastr.error('Something went wrong when loading Truck Job Card History.', 'Error');
        });
    };
    TruckHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truck-history',
            template: __webpack_require__(/*! ./truck-history.component.html */ "./src/app/layout/maintenance/truck-history/truck-history.component.html"),
            styles: [__webpack_require__(/*! ./truck-history.component.scss */ "./src/app/layout/maintenance/truck-history/truck-history.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_1__["MaintenanceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], TruckHistoryComponent);
    return TruckHistoryComponent;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/vendor-master-edit/vendor-master-edit.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/maintenance/vendor-master-edit/vendor-master-edit.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Vendor Master Edit</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div>\r\n  <form [formGroup]=\"editForm\">\r\n    <div class=\"modal-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"required\">Name</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"required\">Address</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"address\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"required\">Location</label>\r\n            <input class=\"form-control\" ng2-auto-complete formControlName=\"location\" [source]=\"getLocation.bind(this)\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n          <label class=\"required\">State</label>\r\n          <ng-select [items]=\"state_option\" placeholder=\"State\" bindLabel=\"statename\" bindValue=\"statename\"\r\n            formControlName=\"statename\">\r\n          </ng-select>\r\n        </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"required\">Vendor Type</label>\r\n            <input class=\"form-control\" ng2-auto-complete formControlName=\"vendor_type\" [source]=\"getVendorType.bind(this)\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"required\">Specialized in</label>\r\n            <input class=\"form-control\" ng2-auto-complete formControlName=\"specialized_in\" [source]=\"getSpecializedIn.bind(this)\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Mobile No</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"mobile_no\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Contact Person</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"contact_person\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>GST No</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"gst_no\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Condition if Any</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"condition\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Remarks</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"remarks\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Ratings</label>\r\n            <br />\r\n            <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" (click)=\"update()\" class=\"btn btn-success\">Update</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/maintenance/vendor-master-edit/vendor-master-edit.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/maintenance/vendor-master-edit/vendor-master-edit.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWludGVuYW5jZS92ZW5kb3ItbWFzdGVyLWVkaXQvdmVuZG9yLW1hc3Rlci1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/maintenance/vendor-master-edit/vendor-master-edit.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/maintenance/vendor-master-edit/vendor-master-edit.component.ts ***!
  \***************************************************************************************/
/*! exports provided: VendorMasterEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorMasterEditComponent", function() { return VendorMasterEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VendorMasterEditComponent = /** @class */ (function () {
    function VendorMasterEditComponent(activeModal, fb, maintenanceService, toastr, metaService, config) {
        var _this = this;
        this.activeModal = activeModal;
        this.fb = fb;
        this.maintenanceService = maintenanceService;
        this.toastr = toastr;
        this.metaService = metaService;
        this.vendor_types = [
            { vendor_type: 'Supplier' },
            { vendor_type: 'Mistri' }
        ];
        this.currentRate = 0;
        this.getSpecializedIn = function (keyword) {
            if (keyword) {
                return _this.maintenanceService.getSpecializedIn(keyword).map(function (res) {
                    // console.log(">>>>res", res);
                    return res.result;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].of([]);
            }
        };
        this.getLocation = function (keyword) {
            if (keyword) {
                return _this.maintenanceService.getLocations(keyword).map(function (res) {
                    // console.log(">>>>res", res);
                    return res.result;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].of([]);
            }
        };
        this.getVendorType = function (keyword) {
            if (keyword) {
                return _this.maintenanceService.getVendorType(keyword).map(function (res) {
                    // console.log(">>>>res", res);
                    return res.result;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].of([]);
            }
        };
        config.max = 5;
    }
    VendorMasterEditComponent.prototype.ngOnInit = function () {
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
    };
    VendorMasterEditComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getStateList().subscribe(function (trackInfo) {
            _this.state_option = trackInfo['result'];
            console.log('>>>>StateIndia', trackInfo['result']);
        });
    };
    VendorMasterEditComponent.prototype.update = function () {
        var _this = this;
        var getFromData = this.editForm.value;
        getFromData.rating = this.currentRate;
        getFromData._id = this.data._id;
        console.log('FromData >>>>', getFromData);
        this.maintenanceService.updateVendorMaster(getFromData).subscribe(function (res) {
            _this.activeModal.close({ result: 'success' });
            _this.toastr.success('Vendor Master updated successfully.');
        }, function (err) {
            _this.activeModal.close({ result: 'success' });
            console.log('err   >>>', err);
            _this.toastr.error('Something went wrong when adding!');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VendorMasterEditComponent.prototype, "data", void 0);
    VendorMasterEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vendor-master-edit',
            template: __webpack_require__(/*! ./vendor-master-edit.component.html */ "./src/app/layout/maintenance/vendor-master-edit/vendor-master-edit.component.html"),
            styles: [__webpack_require__(/*! ./vendor-master-edit.component.scss */ "./src/app/layout/maintenance/vendor-master-edit/vendor-master-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_6__["MetaService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"]])
    ], VendorMasterEditComponent);
    return VendorMasterEditComponent;
}());



/***/ }),

/***/ "./src/app/layout/maintenance/vendor-master/vendor-master.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/maintenance/vendor-master/vendor-master.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>Vendor Master</strong>\r\n  </div>\r\n  <form [formGroup]=\"addForm\">\r\n\r\n    <div class=\"modal-body\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"required\" >Name</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"required\" >Address</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"address\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"required\">Location</label>\r\n            <input\r\n            class=\"form-control\"\r\n            ng2-auto-complete\r\n            formControlName=\"location\"\r\n            [source]=\"getLocation.bind(this)\"\r\n            />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n          <label class=\"required\">State</label>\r\n          <ng-select [items]=\"state_option\" placeholder=\"State\" bindLabel=\"statename\" bindValue=\"statename\"\r\n            formControlName=\"statename\">\r\n          </ng-select>\r\n        </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"required\">Vendor Type</label>\r\n            <input\r\n            class=\"form-control\"\r\n            ng2-auto-complete\r\n            formControlName=\"vendor_type\"\r\n            [source]=\"getVendorType.bind(this)\"\r\n            />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"required\">Specialized in</label>\r\n            <input\r\n            class=\"form-control\"\r\n            ng2-auto-complete\r\n            formControlName=\"specialized_in\"\r\n            [source]=\"getSpecializedIn.bind(this)\"\r\n            />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"required\">Mobile No</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"mobile_no\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Contact Person</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"contact_person\" />\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>GST No</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"gst_no\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Condition if Any</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"condition\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Remarks</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"remarks\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Ratings</label>\r\n            <br>\r\n            <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"modal-footer\">\r\n      <button type=\"button\" (click)=\"submit()\" [disabled]=\"!addForm.valid || process == 'saving'\" class=\"btn btn-success\">Save</button>\r\n    </div> -->\r\n    <div class=\"modal-footer\">\r\n      <button class=\"btn btn-success float-right\" (click)=\"submit()\" [disabled]=\"!addForm.valid || process == 'saving'\" type=\"button\">\r\n        Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n      </button>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n\r\n<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>Vendor Master List</strong>\r\n    \r\n  </div>\r\n  <!-- formControlName=\"vendor_name\" -->\r\n  <br>\r\n  <div class=\"row\">\r\n      <div class=\"col-md-7\">\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <label>&nbsp;Search Vendor :</label>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <input [(ngModel)]=\"text_filter\" class=\"form-control\" \r\n        (input)=\"filterVendorNameData()\" name=\"search\" placeholder=\"Search Vendor Name\">\r\n      </div>\r\n  </div>\r\n  \r\n  <div class=\"card-body\">\r\n    <table class=\"table tableFixHead mytable\">\r\n      <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>State</th>\r\n          <th>Vendor Type</th>\r\n          <th>Mobile No.</th>\r\n          <th>Email</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let list of filteredData; let i = index\">\r\n          <td>{{list.name ? list.name : '--'}}</td>\r\n          <td>{{list.statename ? list.statename : '--'}}</td>\r\n          <td>{{list.vendor_type ? list.vendor_type : '--'}}</td>\r\n          <td>{{ list.mobile_no ? list.mobile_no : '--' }}</td>\r\n          <td>{{ list.email ? list.email : '--' }}</td>\r\n          <td>\r\n            <button class=\"btn btn-primary\" (click)=\"edit(list)\">Edit</button>&nbsp;&nbsp;\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"vendor_master_list.length === 0\">\r\n          <td colspan=\"12\">No data found yet!</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n            \r\n"

/***/ }),

/***/ "./src/app/layout/maintenance/vendor-master/vendor-master.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/maintenance/vendor-master/vendor-master.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWludGVuYW5jZS92ZW5kb3ItbWFzdGVyL3ZlbmRvci1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/maintenance/vendor-master/vendor-master.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/maintenance/vendor-master/vendor-master.component.ts ***!
  \*****************************************************************************/
/*! exports provided: VendorMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorMasterComponent", function() { return VendorMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _vendor_master_edit_vendor_master_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vendor-master-edit/vendor-master-edit.component */ "./src/app/layout/maintenance/vendor-master-edit/vendor-master-edit.component.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// <button class="btn btn-danger" (click)="deleteVendor(list)">Delete</button>
var VendorMasterComponent = /** @class */ (function () {
    function VendorMasterComponent(maintenanceService, formBuilder, toastr, modalService, metaService, config) {
        var _this = this;
        this.maintenanceService = maintenanceService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.modalService = modalService;
        this.metaService = metaService;
        this.vendor_types = [
            { vendor_type: 'Supplier' },
            { vendor_type: 'Mistri' }
        ];
        this.currentRate = 0;
        this.vendor_master_list = [];
        this.filterKeys = ['name'];
        this.filteredData = [];
        this.text_filter = '';
        this.getSpecializedIn = function (keyword) {
            if (keyword) {
                return _this.maintenanceService.getSpecializedIn(keyword).map(function (res) {
                    console.log('>>>>res', res);
                    return res.result;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"].of([]);
            }
        };
        this.getLocation = function (keyword) {
            if (keyword) {
                return _this.maintenanceService.getLocations(keyword).map(function (res) {
                    console.log('>>>>res', res);
                    return res.result;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"].of([]);
            }
        };
        this.getVendorType = function (keyword) {
            if (keyword) {
                return _this.maintenanceService.getVendorType(keyword).map(function (res) {
                    console.log('>>>>res', res);
                    return res.result;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"].of([]);
            }
        };
        config.max = 5;
    }
    VendorMasterComponent.prototype.ngOnInit = function () {
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
    };
    VendorMasterComponent.prototype.getOptions = function () {
        var _this = this;
        this.maintenanceService.getVendorMasterList().subscribe(function (res) {
            console.log('>>>>res', res);
            _this.vendor_master_list = res.result;
            _this.filterVendorNameData();
        }, function (err) {
            console.log('err   >>>', err);
        });
        this.metaService.getStateList().subscribe(function (trackInfo) {
            _this.state_option = trackInfo['result'];
            console.log('>>>>StateIndia', trackInfo['result']);
        });
    };
    VendorMasterComponent.prototype.edit = function (record) {
        var _this = this;
        console.log('edit>>>>>', record);
        var modalRef = this.modalService.open(_vendor_master_edit_vendor_master_edit_component__WEBPACK_IMPORTED_MODULE_7__["VendorMasterEditComponent"]);
        modalRef.componentInstance.data = record;
        modalRef.result.then(function (result) {
            if (result) {
                _this.getOptions();
            }
        });
    };
    VendorMasterComponent.prototype.deleteVendor = function (data) {
        var _this = this;
        var conf = confirm('Are you sure you want to delete this vendor ?');
        if (conf === true) {
            this.maintenanceService.deleteVendor(data._id).subscribe(function (res) {
                _this.toastr.success('Vendor Master deleted successfully.');
                _this.getOptions();
            }, function (err) {
                console.log('err   >>>', err);
                _this.toastr.error('Something went wrong when deleting vendor!');
            });
        }
    };
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
    VendorMasterComponent.prototype.filterVendorNameData = function () {
        var _this = this;
        if (this.text_filter !== '') {
            this.filteredData = this.vendor_master_list.filter(function (obj) {
                return _this.filterKeys.some(function (propertyName) {
                    return obj[propertyName].toString().toLowerCase().includes(_this.text_filter.toLowerCase());
                });
            });
        }
        else {
            this.filteredData = this.vendor_master_list;
        }
    };
    VendorMasterComponent.prototype.submit = function () {
        var _this = this;
        var getFromData = this.addForm.value;
        getFromData.rating = this.currentRate;
        console.log('FromData >>>>', getFromData);
        this.maintenanceService.addVendorMasterData(getFromData).subscribe(function (res) {
            _this.addForm.reset();
            _this.getOptions();
            _this.toastr.success('Vendor Master Added successfully.');
        }, function (err) {
            console.log('err   >>>', err);
            _this.toastr.error('Something went wrong when adding!');
        });
    };
    VendorMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vendor-master',
            template: __webpack_require__(/*! ./vendor-master.component.html */ "./src/app/layout/maintenance/vendor-master/vendor-master.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_5__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./vendor-master.component.scss */ "./src/app/layout/maintenance/vendor-master/vendor-master.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_8__["MetaService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbRatingConfig"]])
    ], VendorMasterComponent);
    return VendorMasterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=maintenance-maintenance-module.js.map