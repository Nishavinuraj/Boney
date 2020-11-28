(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estimates-estimates-module"],{

/***/ "./src/app/layout/estimates/all-created-estimate/all-created-estimate.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/estimates/all-created-estimate/all-created-estimate.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <h4><i class=\"fa fa-book\"></i> Estimate Details</h4>\r\n              <p class=\"text-muted\"></p>\r\n              <hr />\r\n            </div></div>\r\n      <!-- <form [formGroup]=\"filterForm\">\r\n        \r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Expiry Date (From:) </label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp\"\r\n                  formControlName=\"start_date\"\r\n                  ngbDatepicker\r\n                  #d=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Expiry Date (Till)</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp2\"\r\n                  formControlName=\"end_date\"\r\n                  ngbDatepicker\r\n                  #d1=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Select Product</label>\r\n              <select formControlName=\"site_name\" class=\"form-control\">\r\n                  <option value=\"\">All</option>\r\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                  {{ s.branch_name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          \r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Product</label>\r\n            <ng-select [items]=\"items_option\" placeholder=\"Type and search items\" bindLabel=\"itemname\" bindValue=\"itemname\"\r\n              formControlName=\"item_name\">\r\n            </ng-select>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-md-4 wrapper-right\">\r\n            <button (click)=\"fetchReport()\" class=\"btn btn-primary\" >\r\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\r\n            </button>&nbsp;\r\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\r\n          </div>\r\n        </div>\r\n      </form> -->\r\n<!--       <hr />\r\n -->      \r\n      <table class=\"table table-hover table-striped table-bordered table-condensed\">\r\n  <thead>\r\n    <tr>\r\n      <th class=\"cell-align\">S No</th>\r\n<!--       <th class=\"cell-align\">Estimate ID</th>\r\n -->      <th class=\"cell-align\">Product Name</th>\r\n      <th class=\"cell-align\">Quantity</th>\r\n      <th class=\"cell-align\">Created On</th>\r\n      <th class=\"cell-align\">Expiry Date</th>\r\n      <th align=\"center\">Actions</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngIf=\"loading\">\r\n      <td colspan=\"10\">\r\n        <div class=\"showbox\">\r\n          <div class=\"loader\">\r\n            <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n              <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n            </svg>\r\n          </div>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n    <tr *ngFor=\"let t of estimates; let i = index\">\r\n\r\n      <!-- <td *ngIf=\"t.editing\">\r\n        <input type=\"text\">\r\n      </td> -->\r\n\r\n      <td class=\"cell-align\">{{ i + 1}}</td>\r\n      \r\n<!--       <td  class=\"cell-align\">{{ t._id}}</td>\r\n -->      \r\n      <td class=\"cell-align\" *ngIf=\"!isEdit ||  t._id!=editId\">\r\n        {{t.product}}\r\n      </td>\r\n      <td class=\"cell-align\" *ngIf=\"isEdit && t._id==editId\">\r\n        <!-- <ng-select [multiple]=\"true\" [items]=\"items_option\" placeholder=\"Type and search items\" bindLabel=\"itemname\" bindValue=\"itemname\"\r\n            [(ngModel)]=\"t.product\">\r\n          </ng-select> -->\r\n          {{t.product}}\r\n      </td>\r\n      \r\n      <td class=\"cell-align\" *ngIf=\"!isEdit ||  t._id!=editId\"> \r\n        {{t.productQty}}\r\n      </td>\r\n      <td class=\"cell-align\" *ngIf=\"isEdit && t._id==editId\">\r\n       <!--  <input type=\"text\" class=\"form-control\" style=\"width: 50px !important; text-align: center !important;\"\r\n         [(ngModel)]=\"t.productQty\" /> -->\r\n         {{t.productQty}}\r\n      </td>\r\n\r\n      <td class=\"cell-align\">\r\n        {{t.creationDate | date:'longDate'}}\r\n      </td>\r\n      <td class=\"cell-align\" *ngIf=\"!isEdit ||  t._id!=editId\">\r\n        {{t.expiryDate | date:'longDate'}}\r\n      </td>\r\n      <td class=\"cell-align\" *ngIf=\"isEdit && t._id==editId\">\r\n          <div class=\"input-group datepicker-input\">\r\n            <input\r\n            class=\"form-control\"\r\n            placeholder=\"dd/mm/yyyy\"\r\n            name=\"dp3\"\r\n            style=\"width: 80px !important; text-align: center !important;\"\r\n            [(ngModel)]=\"t.ngbExpiry\"\r\n            ngbDatepicker\r\n            #d3=\"ngbDatepicker\" [minDate]=\"minDate\"  required\r\n          />\r\n          <div class=\"input-group-append\">\r\n              <button class=\"btn btn-outline-secondary calendar\" \r\n               (click)=\"d3.toggle()\" type=\"button\">\r\n                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n      </td>\r\n      <td>\r\n        <button class=\"btn btn-primary\" *ngIf=\"!isEdit ||  t._id!=editId\" (click)=\"edit(t)\">Edit</button>&nbsp;&nbsp;\r\n        <button  class=\"btn btn-danger\"  *ngIf=\"!isEdit ||  t._id!=editId\" (click)=\"delete(t)\">Delete</button>\r\n        <button class=\"btn btn-primary\" *ngIf=\"isEdit && t._id==editId\" (click)=\"save(t)\" >Save</button>&nbsp;&nbsp;\r\n        <button  class=\"btn btn-danger\"  *ngIf=\"isEdit && t._id==editId\" (click)=\"isEdit=false;\">Cancel</button>\r\n      </td>\r\n    </tr>\r\n    <tr *ngIf=\"loaded && estimates.length === 0\">\r\n        <td align=\"center\" colspan=\"7\">No data available</td>\r\n    </tr>\r\n  </tbody>\r\n</table></div></div></div>"

/***/ }),

/***/ "./src/app/layout/estimates/all-created-estimate/all-created-estimate.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/estimates/all-created-estimate/all-created-estimate.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9lc3RpbWF0ZXMvYWxsLWNyZWF0ZWQtZXN0aW1hdGUvYWxsLWNyZWF0ZWQtZXN0aW1hdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/estimates/all-created-estimate/all-created-estimate.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/estimates/all-created-estimate/all-created-estimate.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AllCreatedEstimateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCreatedEstimateComponent", function() { return AllCreatedEstimateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_estimates_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/estimates.service */ "./src/app/shared/services/estimates.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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







var AllCreatedEstimateComponent = /** @class */ (function () {
    function AllCreatedEstimateComponent(estimateService, parserFormatter, formBuilder, toastr, meta, calendar) {
        this.estimateService = estimateService;
        this.parserFormatter = parserFormatter;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.meta = meta;
        this.calendar = calendar;
        this.isEdit = false;
        this.loading = true;
        this.loaded = false;
        this.filterForm = this.formBuilder.group({
            site_name: [''],
            item_name: [''],
            start_date: [''],
            end_date: ['']
        });
        var current = new Date();
        this.minDate = {
            year: current.getFullYear(),
            month: current.getMonth() + 1,
            day: current.getDate()
        };
    }
    AllCreatedEstimateComponent.prototype.edit = function (t) {
        this.editId = t._id;
        this.isEdit = true;
    };
    AllCreatedEstimateComponent.prototype.delete = function (t) {
        var _this = this;
        this.estimateService.delete(t._id).subscribe(function (res) {
            _this.toastr.success('Estimate Deleted successfully.');
            _this.isEdit = false;
            _this.getEstimates();
        });
    };
    AllCreatedEstimateComponent.prototype.save = function (t) {
        var _this = this;
        var estimate = {
            product: t.product,
            productQty: t.productQty,
            expiryDate: new Date(t.ngbExpiry.year, t.ngbExpiry.month - 1, t.ngbExpiry.day, 23, 59, 59)
        };
        this.estimateService.update(t._id, estimate).subscribe(function (res) {
            _this.toastr.success('Estimate Updated successfully.');
            _this.isEdit = false;
            _this.getEstimates();
        });
    };
    AllCreatedEstimateComponent.prototype.ngOnInit = function () {
        this.getEstimates();
        this.getItems();
    };
    AllCreatedEstimateComponent.prototype.getEstimates = function () {
        var _this = this;
        this.estimateService.getCreatedEstimates().subscribe(function (res) {
            var estimates = res['result'];
            estimates.forEach(function (t) {
                t.ngbExpiry = {
                    year: new Date(t.expiryDate).getFullYear(),
                    month: new Date(t.expiryDate).getMonth() + 1,
                    day: new Date(t.expiryDate).getDate()
                };
            });
            _this.estimates = estimates;
            _this.loading = false;
            _this.loaded = true;
        }, function (error) {
            _this.loading = false;
            _this.loaded = true;
            _this.estimates = [];
        });
    };
    AllCreatedEstimateComponent.prototype.getItems = function () {
        var _this = this;
        this.meta.getItemsList().subscribe(function (trackInfo) {
            _this.items_option = trackInfo['result'];
            console.log('ItemsList >>>>>', _this.items_option);
        });
    };
    AllCreatedEstimateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-created-estimate',
            template: __webpack_require__(/*! ./all-created-estimate.component.html */ "./src/app/layout/estimates/all-created-estimate/all-created-estimate.component.html"),
            styles: [__webpack_require__(/*! ./all-created-estimate.component.scss */ "./src/app/layout/estimates/all-created-estimate/all-created-estimate.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_estimates_service__WEBPACK_IMPORTED_MODULE_1__["EstimateService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"]])
    ], AllCreatedEstimateComponent);
    return AllCreatedEstimateComponent;
}());



/***/ }),

/***/ "./src/app/layout/estimates/create-estimate/create-estimate.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/estimates/create-estimate/create-estimate.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>Create Estimate</strong>\r\n  </div>\r\n  <form [formGroup]=\"createEstimateForm\">\r\n\r\n    <div class=\"modal-body\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6\">\r\n          <label class=\"required\">Select Product</label>\r\n          <ng-select [multiple]=\"true\" [items]=\"items_option\" placeholder=\"Type and search items\" bindLabel=\"itemname\" bindValue=\"itemname\"\r\n            formControlName=\"product\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"col-md-12\" *ngIf=\"createEstimateForm.value.product?.length\">\r\n          <br/>\r\n          <div class=\"form-group\">\r\n            <table class=\"table table-bordered\">\r\n              <tr>                   \r\n                <th>Product</th>                   \r\n                <th>Qty</th>                   \r\n           </tr>\r\n              \r\n              <tr *ngFor=\"let p of createEstimateForm.value.product;let i = index;\"> \r\n                <td>\r\n                  <input type=\"text\"  value=\"{{p}}\"  class=\"form-control price\" disabled>\r\n\r\n                </td>\r\n                <td>\r\n                  <input type=\"number\" min=\"0\" [(ngModel)]=\"qtys[i]\"  [ngModelOptions]=\"{standalone: true}\"  class=\"form-control discount\">\r\n                </td>\r\n               \r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Estimate Creation Date</label>\r\n            <div  class=\"input-group datepicker-input\">\r\n              <input disabled\r\n                class=\"form-control\"\r\n                placeholder=\"dd/mm/yyyy\"\r\n                name=\"dp1\"\r\n                formControlName=\"creationDate\"\r\n                ngbDatepicker\r\n                #d1=\"ngbDatepicker\"\r\n                 required\r\n              />\r\n              <!-- <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Estimate Expiry Date</label>\r\n            <div class=\"input-group datepicker-input\">\r\n              <input\r\n                class=\"form-control\"\r\n                placeholder=\"dd/mm/yyyy\"\r\n                name=\"dp2\"\r\n                formControlName=\"expiryDate\"\r\n                ngbDatepicker\r\n                #d2=\"ngbDatepicker\" \r\n                [minDate]=\"minDate\" \r\n                required\r\n              />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"required\">Select Vendor</label>\r\n          <ng-select [multiple]=\"true\" [items]=\"vendor_master_list\" placeholder=\"Type and search items\" bindLabel=\"vendorname\" bindValue=\"vendorname\"\r\n            formControlName=\"vendor\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label>Remarks: (If Any)</label>\r\n            <textarea class=\"form-control\" formControlName=\"remark\" ></textarea>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" (click)=\"submit()\" [disabled]=\"!createEstimateForm.valid\" class=\"btn btn-success\">Create</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/estimates/create-estimate/create-estimate.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/estimates/create-estimate/create-estimate.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9lc3RpbWF0ZXMvY3JlYXRlLWVzdGltYXRlL2NyZWF0ZS1lc3RpbWF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/estimates/create-estimate/create-estimate.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/estimates/create-estimate/create-estimate.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CreateEstimateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEstimateComponent", function() { return CreateEstimateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var src_app_shared_services_estimates_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/estimates.service */ "./src/app/shared/services/estimates.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateEstimateComponent = /** @class */ (function () {
    function CreateEstimateComponent(formBuilder, calendar, meta, maintenanceService, estimateService, toastr) {
        this.formBuilder = formBuilder;
        this.calendar = calendar;
        this.meta = meta;
        this.maintenanceService = maintenanceService;
        this.estimateService = estimateService;
        this.toastr = toastr;
        this.qtys = [];
        var current = new Date();
        this.minDate = {
            year: current.getFullYear(),
            month: current.getMonth() + 1,
            day: current.getDate()
        };
    }
    CreateEstimateComponent.prototype.ngOnInit = function () {
        this.createEstimateForm = this.formBuilder.group({
            product: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            productQty: [''],
            creationDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            expiryDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            vendor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            remark: [''],
        });
        this.createEstimateForm.controls['creationDate'].setValue(this.calendar.getToday());
        this.getItems();
        this.getList();
    };
    CreateEstimateComponent.prototype.getItems = function () {
        var _this = this;
        this.meta.getItemsList().subscribe(function (trackInfo) {
            _this.items_option = trackInfo['result'];
            console.log('ItemsList >>>>>', _this.items_option);
        });
    };
    CreateEstimateComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.qtys.length);
        if (this.createEstimateForm.valid && this.qtys.length) {
            var estimate = {
                product: this.createEstimateForm.value.product,
                productQty: this.qtys,
                creationDate: new Date(this.createEstimateForm.value.creationDate.year, this.createEstimateForm.value.creationDate.month - 1, this.createEstimateForm.value.creationDate.day),
                expiryDate: new Date(this.createEstimateForm.value.expiryDate.year, this.createEstimateForm.value.expiryDate.month - 1, this.createEstimateForm.value.expiryDate.day, 23, 59, 59),
                vendors: this.createEstimateForm.value.vendor,
                remark: this.createEstimateForm.value.remark,
                status: 'CREATED'
            };
            this.estimateService.addEstimate(estimate).subscribe(function (response) {
                _this.toastr.success('Estimate Created successfully.');
                _this.reset();
            });
        }
    };
    CreateEstimateComponent.prototype.reset = function () {
        this.createEstimateForm.reset();
        this.createEstimateForm.controls['creationDate'].setValue(this.calendar.getToday());
    };
    /* filterVendorNameData(): void {
      if (this.text_filter !== '') {
        this.filteredData = this.vendor_master_list.filter(obj =>
          this.filterKeys.some(propertyName =>
            obj[propertyName].toString().toLowerCase().includes(this.text_filter.toLowerCase())));
      } else {
        this.filteredData = this.vendor_master_list;
      }
    } */
    CreateEstimateComponent.prototype.getList = function () {
        var _this = this;
        this.maintenanceService.getVendorMasterList().subscribe(function (res) {
            console.log('>>>>res', res);
            var vList = [];
            res.result.forEach(function (vendor) {
                vList.push(vendor.name);
            });
            _this.vendor_master_list = vList;
            console.log('Vendorlist >>>>>', _this.vendor_master_list);
        }, function (err) {
            console.log('err   >>>', err);
        });
    };
    CreateEstimateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-estimate',
            template: __webpack_require__(/*! ./create-estimate.component.html */ "./src/app/layout/estimates/create-estimate/create-estimate.component.html"),
            styles: [__webpack_require__(/*! ./create-estimate.component.scss */ "./src/app/layout/estimates/create-estimate/create-estimate.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_4__["MaintenanceService"],
            src_app_shared_services_estimates_service__WEBPACK_IMPORTED_MODULE_5__["EstimateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], CreateEstimateComponent);
    return CreateEstimateComponent;
}());



/***/ }),

/***/ "./src/app/layout/estimates/estimates-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/estimates/estimates-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: EstimatesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimatesRoutingModule", function() { return EstimatesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_layout_estimates_estimates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/layout/estimates/estimates.component */ "./src/app/layout/estimates/estimates.component.ts");
/* harmony import */ var src_app_layout_estimates_create_estimate_create_estimate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layout/estimates/create-estimate/create-estimate.component */ "./src/app/layout/estimates/create-estimate/create-estimate.component.ts");
/* harmony import */ var src_app_layout_estimates_all_created_estimate_all_created_estimate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/layout/estimates/all-created-estimate/all-created-estimate.component */ "./src/app/layout/estimates/all-created-estimate/all-created-estimate.component.ts");
/* harmony import */ var src_app_layout_estimates_received_estimates_received_estimates_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/layout/estimates/received-estimates/received-estimates.component */ "./src/app/layout/estimates/received-estimates/received-estimates.component.ts");
/* harmony import */ var src_app_layout_estimates_po_again_estimates_po_again_estimates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/layout/estimates/po-again-estimates/po-again-estimates.component */ "./src/app/layout/estimates/po-again-estimates/po-again-estimates.component.ts");
/* harmony import */ var src_app_layout_estimates_submit_estimate_submit_estimate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/layout/estimates/submit-estimate/submit-estimate.component */ "./src/app/layout/estimates/submit-estimate/submit-estimate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: src_app_layout_estimates_estimates_component__WEBPACK_IMPORTED_MODULE_2__["EstimatesComponent"],
        children: [
            { path: '', redirectTo: 'create-estimate', pathMatch: 'prefix' },
            { path: 'create-estimate', component: src_app_layout_estimates_create_estimate_create_estimate_component__WEBPACK_IMPORTED_MODULE_3__["CreateEstimateComponent"] },
            { path: 'all-created-estimates', component: src_app_layout_estimates_all_created_estimate_all_created_estimate_component__WEBPACK_IMPORTED_MODULE_4__["AllCreatedEstimateComponent"] },
            { path: 'received-estimates', component: src_app_layout_estimates_received_estimates_received_estimates_component__WEBPACK_IMPORTED_MODULE_5__["ReceivedEstimatesComponent"] },
            { path: 'po-again-estimates', component: src_app_layout_estimates_po_again_estimates_po_again_estimates_component__WEBPACK_IMPORTED_MODULE_6__["PoAgainEstimatesComponent"] },
            { path: 'submit-estimate', component: src_app_layout_estimates_submit_estimate_submit_estimate_component__WEBPACK_IMPORTED_MODULE_7__["SubmitEstimateComponent"] },
        ]
    }
];
var EstimatesRoutingModule = /** @class */ (function () {
    function EstimatesRoutingModule() {
    }
    EstimatesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EstimatesRoutingModule);
    return EstimatesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/estimates/estimates.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/estimates/estimates.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/estimates/estimates.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/estimates/estimates.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9lc3RpbWF0ZXMvZXN0aW1hdGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/estimates/estimates.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/estimates/estimates.component.ts ***!
  \*********************************************************/
/*! exports provided: EstimatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimatesComponent", function() { return EstimatesComponent; });
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

var EstimatesComponent = /** @class */ (function () {
    function EstimatesComponent() {
    }
    EstimatesComponent.prototype.ngOnInit = function () {
    };
    EstimatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-estimates',
            template: __webpack_require__(/*! ./estimates.component.html */ "./src/app/layout/estimates/estimates.component.html"),
            styles: [__webpack_require__(/*! ./estimates.component.scss */ "./src/app/layout/estimates/estimates.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstimatesComponent);
    return EstimatesComponent;
}());



/***/ }),

/***/ "./src/app/layout/estimates/estimates.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/estimates/estimates.module.ts ***!
  \******************************************************/
/*! exports provided: EstimatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimatesModule", function() { return EstimatesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_layout_estimates_po_again_estimates_po_again_estimates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/layout/estimates/po-again-estimates/po-again-estimates.component */ "./src/app/layout/estimates/po-again-estimates/po-again-estimates.component.ts");
/* harmony import */ var src_app_layout_estimates_received_estimates_received_estimates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layout/estimates/received-estimates/received-estimates.component */ "./src/app/layout/estimates/received-estimates/received-estimates.component.ts");
/* harmony import */ var src_app_layout_estimates_all_created_estimate_all_created_estimate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/layout/estimates/all-created-estimate/all-created-estimate.component */ "./src/app/layout/estimates/all-created-estimate/all-created-estimate.component.ts");
/* harmony import */ var src_app_layout_estimates_create_estimate_create_estimate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/layout/estimates/create-estimate/create-estimate.component */ "./src/app/layout/estimates/create-estimate/create-estimate.component.ts");
/* harmony import */ var src_app_layout_estimates_estimates_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/layout/estimates/estimates-routing.module */ "./src/app/layout/estimates/estimates-routing.module.ts");
/* harmony import */ var src_app_layout_estimates_estimates_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/layout/estimates/estimates.component */ "./src/app/layout/estimates/estimates.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_auto_complete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-auto-complete */ "./node_modules/ng2-auto-complete/dist/index.js");
/* harmony import */ var ng2_auto_complete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_auto_complete__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var src_app_layout_estimates_submit_estimate_submit_estimate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/layout/estimates/submit-estimate/submit-estimate.component */ "./src/app/layout/estimates/submit-estimate/submit-estimate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var EstimatesModule = /** @class */ (function () {
    function EstimatesModule() {
    }
    EstimatesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [src_app_layout_estimates_create_estimate_create_estimate_component__WEBPACK_IMPORTED_MODULE_5__["CreateEstimateComponent"], src_app_layout_estimates_all_created_estimate_all_created_estimate_component__WEBPACK_IMPORTED_MODULE_4__["AllCreatedEstimateComponent"], src_app_layout_estimates_received_estimates_received_estimates_component__WEBPACK_IMPORTED_MODULE_3__["ReceivedEstimatesComponent"],
                src_app_layout_estimates_po_again_estimates_po_again_estimates_component__WEBPACK_IMPORTED_MODULE_2__["PoAgainEstimatesComponent"], src_app_layout_estimates_estimates_component__WEBPACK_IMPORTED_MODULE_7__["EstimatesComponent"], src_app_layout_estimates_submit_estimate_submit_estimate_component__WEBPACK_IMPORTED_MODULE_12__["SubmitEstimateComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_layout_estimates_estimates_routing_module__WEBPACK_IMPORTED_MODULE_6__["EstimatesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
                ng2_auto_complete__WEBPACK_IMPORTED_MODULE_10__["Ng2AutoCompleteModule"],
            ]
        })
    ], EstimatesModule);
    return EstimatesModule;
}());



/***/ }),

/***/ "./src/app/layout/estimates/po-again-estimates/po-again-estimates.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/estimates/po-again-estimates/po-again-estimates.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  po-again-estimates works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/layout/estimates/po-again-estimates/po-again-estimates.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/estimates/po-again-estimates/po-again-estimates.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9lc3RpbWF0ZXMvcG8tYWdhaW4tZXN0aW1hdGVzL3BvLWFnYWluLWVzdGltYXRlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/estimates/po-again-estimates/po-again-estimates.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/estimates/po-again-estimates/po-again-estimates.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PoAgainEstimatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoAgainEstimatesComponent", function() { return PoAgainEstimatesComponent; });
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

var PoAgainEstimatesComponent = /** @class */ (function () {
    function PoAgainEstimatesComponent() {
    }
    PoAgainEstimatesComponent.prototype.ngOnInit = function () {
    };
    PoAgainEstimatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-po-again-estimates',
            template: __webpack_require__(/*! ./po-again-estimates.component.html */ "./src/app/layout/estimates/po-again-estimates/po-again-estimates.component.html"),
            styles: [__webpack_require__(/*! ./po-again-estimates.component.scss */ "./src/app/layout/estimates/po-again-estimates/po-again-estimates.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PoAgainEstimatesComponent);
    return PoAgainEstimatesComponent;
}());



/***/ }),

/***/ "./src/app/layout/estimates/received-estimates/received-estimates.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/estimates/received-estimates/received-estimates.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <h4><i class=\"fa fa-book\"></i> Received Estimates From Vendor</h4>\r\n                <p class=\"text-muted\"></p>\r\n                <hr />\r\n              </div></div>\r\n        <!-- <form [formGroup]=\"filterForm\">\r\n          \r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Expiry Date (From:) </label>\r\n                <div class=\"input-group datepicker-input\">\r\n                  <input\r\n                    class=\"form-control\"\r\n                    placeholder=\"dd/mm/yyyy\"\r\n                    name=\"dp\"\r\n                    formControlName=\"start_date\"\r\n                    ngbDatepicker\r\n                    #d=\"ngbDatepicker\"\r\n                  />\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Expiry Date (Till)</label>\r\n                <div class=\"input-group datepicker-input\">\r\n                  <input\r\n                    class=\"form-control\"\r\n                    placeholder=\"dd/mm/yyyy\"\r\n                    name=\"dp2\"\r\n                    formControlName=\"end_date\"\r\n                    ngbDatepicker\r\n                    #d1=\"ngbDatepicker\"\r\n                  />\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Select Product</label>\r\n                <select formControlName=\"site_name\" class=\"form-control\">\r\n                    <option value=\"\">All</option>\r\n                  <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                    {{ s.branch_name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n  \r\n            \r\n            <div class=\"col-md-3\">\r\n              <label class=\"required\">Product</label>\r\n              <ng-select [items]=\"items_option\" placeholder=\"Type and search items\" bindLabel=\"itemname\" bindValue=\"itemname\"\r\n                formControlName=\"item_name\">\r\n              </ng-select>\r\n            </div>\r\n  \r\n  \r\n            <div class=\"col-md-4 wrapper-right\">\r\n              <button (click)=\"fetchReport()\" class=\"btn btn-primary\" >\r\n                <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\r\n              </button>&nbsp;\r\n              <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\r\n            </div>\r\n          </div>\r\n        </form> -->\r\n  <!--       <hr />\r\n   -->      \r\n        <table class=\"table table-hover table-striped table-bordered table-condensed\">\r\n    <thead>\r\n      <tr>\r\n        <th class=\"cell-align\">S No</th>\r\n<!--         <th class=\"cell-align\">Estimate ID</th>\r\n -->        <th class=\"cell-align\">Product Name</th>\r\n        <th class=\"cell-align\">Vendor Name</th>\r\n        <th class=\"cell-align\">Estimate Rate</th>\r\n<!--         <th class=\"cell-align\">Remark</th>\r\n -->        <th class=\"cell-align\">Estimate Date</th>\r\n        <th class=\"cell-align\">Received Date</th>\r\n        <th align=\"center\">Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngIf=\"loading\">\r\n        <td colspan=\"10\">\r\n          <div class=\"showbox\">\r\n            <div class=\"loader\">\r\n              <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n              </svg>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr *ngFor=\"let t of estimates; let i = index\">\r\n  \r\n        <!-- <td *ngIf=\"t.editing\">\r\n          <input type=\"text\">\r\n        </td> -->\r\n  \r\n        <td class=\"cell-align\">{{ i+1 }}</td>\r\n        \r\n<!--         <td  class=\"cell-align\">{{ t.estimateId}}</td>\r\n -->        \r\n        <td class=\"cell-align\">\r\n          {{t.product}}\r\n        </td>\r\n        <td class=\"cell-align\">\r\n            {{t.vendor}}\r\n          </td>\r\n\r\n          <td class=\"cell-align\">\r\n              {{t.totalPrice | currency : 'INR' : true : '1.2-2'}}\r\n            </td>\r\n        \r\n        <!-- <td class=\"cell-align\">\r\n          {{t.remark}}\r\n        </td> -->\r\n        <td class=\"cell-align\">\r\n          {{t.estimateDate | date:'longDate'}}\r\n        </td>\r\n        <td class=\"cell-align\">\r\n          {{t.receivedDate | date:'longDate'}}\r\n        </td>\r\n        <td>\r\n          <button class=\"btn btn-primary\" *ngIf=\"!estimateInstances.length\" (click)=\"getEstimateDetails(t._id)\">View Details</button>&nbsp;&nbsp;\r\n          <button class=\"btn btn-primary\" *ngIf=\"estimateInstances.length\" (click)=\"hideDetails()\">Hide Details</button>&nbsp;&nbsp;\r\n\r\n          <!--           <button  class=\"btn btn-danger\">Reject</button>\r\n -->        </td>\r\n      </tr>\r\n      <tr *ngIf=\"loaded && estimates.length === 0\">\r\n          <td align=\"center\" colspan=\"9\">No data available</td>\r\n      </tr>\r\n    </tbody>\r\n  </table></div>\r\n\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"estimateInstances.length\">\r\n      <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n          <div class=\"form-group\">\r\n              <table class=\"table table-bordered\">\r\n                <tr>   \r\n                    <th>Product</th>                   \r\n                    <th>Qty</th>  \r\n                  <th>Amount(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n             </tr>\r\n                \r\n                <tr *ngFor=\"let p of estimateInstances;let i = index;\">\r\n                    <td>\r\n                        <input type=\"text\" disabled [(ngModel)]=\"estimateInstances[i].product\"\r\n                         [ngModelOptions]=\"{standalone: true}\"\r\n                          class=\"form-control price\">\r\n  \r\n                      </td>\r\n                      <td>\r\n                          <input type=\"number\" min=\"0\" disabled \r\n                          [(ngModel)]=\"estimateInstances[i].productQty\"\r\n                          [ngModelOptions]=\"{standalone: true}\"\r\n                          class=\"form-control price\">\r\n    \r\n                        </td>\r\n                  <td>\r\n                    <input type=\"number\" min=\"0\"\r\n                    [(ngModel)]=\"estimateInstances[i].total\"\r\n                    [ngModelOptions]=\"{standalone: true}\"\r\n                     class=\"form-control total\" disabled>\r\n\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n      </div>\r\n      <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n        <button (click)=\"purchaseOrder()\" class=\"btn btn-primary\">PO</button>&nbsp;&nbsp;\r\n        <button  (click)=\"reject()\" class=\"btn btn-danger\">Reject</button>\r\n      </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/layout/estimates/received-estimates/received-estimates.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/estimates/received-estimates/received-estimates.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9lc3RpbWF0ZXMvcmVjZWl2ZWQtZXN0aW1hdGVzL3JlY2VpdmVkLWVzdGltYXRlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/estimates/received-estimates/received-estimates.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/estimates/received-estimates/received-estimates.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ReceivedEstimatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivedEstimatesComponent", function() { return ReceivedEstimatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_estimates_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/estimates.service */ "./src/app/shared/services/estimates.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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






var ReceivedEstimatesComponent = /** @class */ (function () {
    function ReceivedEstimatesComponent(estimateService, parserFormatter, router, formBuilder, toastr) {
        this.estimateService = estimateService;
        this.parserFormatter = parserFormatter;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.loading = true;
        this.loaded = false;
        this.estimateInstances = [];
        this.filterForm = this.formBuilder.group({
            site_name: [''],
            item_name: [''],
            start_date: [''],
            end_date: ['']
        });
    }
    ReceivedEstimatesComponent.prototype.hideDetails = function () {
        this.estimateInstances = [];
        this.detailId = null;
    };
    ReceivedEstimatesComponent.prototype.getEstimateDetails = function (id) {
        var _this = this;
        this.estimateService.getEstimatesProdSubmisions(id).subscribe(function (res) {
            _this.estimateInstances = res['result'];
            _this.detailId = id;
        });
    };
    ReceivedEstimatesComponent.prototype.purchaseOrder = function () {
        this.router.navigateByUrl('/inventory/add-order/' + this.detailId);
        //inventory/add-order
    };
    ReceivedEstimatesComponent.prototype.reject = function () {
        var _this = this;
        this.estimateService.rejectEstimateSubmission(this.detailId).subscribe(function (res) {
            _this.toastr.success('Estimate Rejected successfully.');
        });
    };
    ReceivedEstimatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.estimateService.getEstimatesSubmisions().subscribe(function (res) {
            var estimates = res['result'];
            _this.estimates = estimates;
            _this.loading = false;
            _this.loaded = true;
        }, function (error) {
            _this.loading = false;
            _this.loaded = true;
            _this.estimates = [];
        });
    };
    ReceivedEstimatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-received-estimates',
            template: __webpack_require__(/*! ./received-estimates.component.html */ "./src/app/layout/estimates/received-estimates/received-estimates.component.html"),
            styles: [__webpack_require__(/*! ./received-estimates.component.scss */ "./src/app/layout/estimates/received-estimates/received-estimates.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_estimates_service__WEBPACK_IMPORTED_MODULE_1__["EstimateService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ReceivedEstimatesComponent);
    return ReceivedEstimatesComponent;
}());



/***/ }),

/***/ "./src/app/layout/estimates/submit-estimate/submit-estimate.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/estimates/submit-estimate/submit-estimate.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"estimate && !estimate.isDeleted\">\r\n  <div class=\"card-header\">\r\n    <strong>Submit Estimate Response</strong>\r\n  </div>\r\n  <form [formGroup]=\"submitEstimateForm\">\r\n\r\n    <div class=\"modal-body\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n              <label class=\"required\"> Estimate ID</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"estimateId\" disabled />\r\n    \r\n            </div>\r\n        <!-- <div class=\"col-md-6\">\r\n          <label class=\"required\"> Product</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"product\" disabled />\r\n\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Product Qty</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"productQty\" disabled/>\r\n          </div>\r\n        </div> -->\r\n\r\n        <div class=\"col-md-6\">\r\n          <label class=\"required\"> Vendor</label>\r\n          <input type=\"text\" class=\"form-control\" [value]=\"vendor\" disabled/>\r\n\r\n        </div>\r\n          <!-- <div class=\"col-md-6\">\r\n              <label class=\"required\">Stock Status</label>\r\n              <ng-select [items]=\"stockOptions\" placeholder=\"Type and search items\" bindLabel=\"vendorname\" bindValue=\"vendorname\"\r\n                formControlName=\"stockStatus\">\r\n              </ng-select>\r\n              \r\n            </div> -->\r\n       \r\n        \r\n            <div class=\"col-md-12\">\r\n              <br/>\r\n              <div class=\"form-group\">\r\n                <table class=\"table table-bordered\">\r\n                  <tr>   \r\n                      <th>Product</th>                   \r\n                      <th>Qty</th>  \r\n                      <th>Availability</th>                                  \r\n                    <th>Unit</th>                   \r\n                    <th>Price(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                    <th>Dis(%)</th>\r\n                    <th>CGST(%)</th>\r\n                    <th>SGST(%)</th>\r\n                    <th>IGST(%)</th>\r\n                    <th>Amount(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n               </tr>\r\n                  \r\n                  <tr *ngFor=\"let p of submitEstimateForm.value.product;let i = index;\">\r\n                      <td>\r\n                          <input type=\"text\" disabled [(ngModel)]=\"estimateInstances[i].product\"\r\n                           [ngModelOptions]=\"{standalone: true}\"\r\n                            class=\"form-control price\">\r\n    \r\n                        </td>\r\n                        <td>\r\n                            <input type=\"number\" min=\"0\" disabled style=\"width:80px;\" \r\n                            [(ngModel)]=\"estimateInstances[i].productQty\"\r\n                            [ngModelOptions]=\"{standalone: true}\"\r\n                            class=\"form-control price\">\r\n      \r\n                          </td>\r\n                          <td>\r\n                              <ng-select [items]=\"stockOptions\" style=\"width:120px;\"\r\n                              placeholder=\"Type and search items\"\r\n                              [ngModelOptions]=\"{standalone: true}\"\r\n                              [(ngModel)]=\"estimateInstances[i].stockStatus\"\r\n                               bindLabel=\"vendorname\" bindValue=\"vendorname\"\r\n                              >\r\n                            </ng-select>\r\n\r\n                          </td>\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                          <ng-select [items]=\"unit_option\"\r\n                          placeholder=\"Please select Unit\"\r\n                          [ngModelOptions]=\"{standalone: true}\"\r\n                          [disabled]=\"estimateInstances[i].stockStatus!='Available'\"\r\n                          [(ngModel)]=\"estimateInstances[i].unit\"\r\n                          >\r\n                        </ng-select>\r\n                        <!-- <select class=\"form-control\"\r\n                         [attr.disabled]=\"estimateInstances[i].stockStatus!='Available' ? '' : null\"\r\n                         [(ngModel)]=\"estimateInstances[i].unit\"\r\n                         style=\"width:80px;\">\r\n                          <option *ngFor=\"let option of unit_option\" [value]=\"option\"> {{option}}</option>\r\n                        </select> -->\r\n                      </div>\r\n                    </td>\r\n                    \r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" style=\"width:80px;\" \r\n                      (change)=\"evaluate(i)\"\r\n                      [(ngModel)]=\"estimateInstances[i].unitRate\"\r\n                      [disabled]=\"estimateInstances[i].stockStatus!='Available'\"\r\n                      [ngModelOptions]=\"{standalone: true}\" class=\"form-control price\">\r\n\r\n                    </td>\r\n                    <td> \r\n                      <input type=\"number\" min=\"0\" style=\"width:50px;\"\r\n                      (change)=\"evaluate(i)\"\r\n                      [(ngModel)]=\"estimateInstances[i].discount\"\r\n                      [disabled]=\"estimateInstances[i].stockStatus!='Available'\"\r\n                      [ngModelOptions]=\"{standalone: true}\"   class=\"form-control discount\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" style=\"width:50px;\"\r\n                      (change)=\"evaluate(i)\"\r\n                      [disabled]=\"estimateInstances[i].stockStatus!='Available'\"\r\n                      [(ngModel)]=\"estimateInstances[i].cgst\"\r\n                      [ngModelOptions]=\"{standalone: true}\" \r\n                      class=\"form-control discount\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" style=\"width:50px;\" \r\n                      (change)=\"evaluate(i)\"\r\n                      [disabled]=\"estimateInstances[i].stockStatus!='Available'\"\r\n                      [(ngModel)]=\"estimateInstances[i].sgst\"\r\n                      [ngModelOptions]=\"{standalone: true}\" \r\n                        class=\"form-control discount\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" \r\n                      (change)=\"evaluate(i)\"\r\n                      style=\"width:50px;\" \r\n                      [disabled]=\"estimateInstances[i].stockStatus!='Available'\"\r\n                      [(ngModel)]=\"estimateInstances[i].igst\"\r\n                      [ngModelOptions]=\"{standalone: true}\"\r\n                      class=\"form-control discount\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\"\r\n                      [(ngModel)]=\"estimateInstances[i].total\"\r\n                      [ngModelOptions]=\"{standalone: true}\"\r\n                      style=\"width:80px;\" class=\"form-control total\" disabled>\r\n\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Remarks: (If Any)</label>\r\n            <textarea class=\"form-control\" formControlName=\"remark\" ></textarea>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label>Other Details</label>\r\n              <textarea class=\"form-control\" formControlName=\"otherDetails\" ></textarea>\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" (click)=\"submit()\" [disabled]=\"!submitEstimateForm.valid || !isEstimationValid()\" class=\"btn btn-success\">Save</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div *ngIf=\"!estimate || estimate.isDeleted\">Estimate Response is no longer Required, Please close the window</div>\r\n"

/***/ }),

/***/ "./src/app/layout/estimates/submit-estimate/submit-estimate.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/estimates/submit-estimate/submit-estimate.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9lc3RpbWF0ZXMvc3VibWl0LWVzdGltYXRlL3N1Ym1pdC1lc3RpbWF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/estimates/submit-estimate/submit-estimate.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/estimates/submit-estimate/submit-estimate.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SubmitEstimateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitEstimateComponent", function() { return SubmitEstimateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var src_app_shared_services_estimates_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/estimates.service */ "./src/app/shared/services/estimates.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_parameters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/parameters */ "./src/app/parameters.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var SubmitEstimateComponent = /** @class */ (function () {
    function SubmitEstimateComponent(formBuilder, calendar, meta, maintenanceService, estimateService, toastr, activatedRoute) {
        this.formBuilder = formBuilder;
        this.calendar = calendar;
        this.meta = meta;
        this.maintenanceService = maintenanceService;
        this.estimateService = estimateService;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.estimateInstances = [];
        this.unit_option = src_app_parameters__WEBPACK_IMPORTED_MODULE_8__["itemUnits"];
        this.stockOptions = ['Available', 'Not-Available'];
    }
    SubmitEstimateComponent.prototype.evaluate = function (i) {
        var ei = this.estimateInstances[i];
        var price = ei.unitRate;
        var qty = ei.productQty;
        if (price) {
            var discount = ei.discount;
            var cgst = ei.cgst;
            var sgst = ei.sgst;
            var igst = ei.igst;
            var tax = cgst + sgst + igst;
            var total = price - (price * (discount / 100)) + ((price * (tax / 100)));
            this.estimateInstances[i].total = total * qty;
        }
        else {
            this.estimateInstances[i].total = 0;
        }
    };
    SubmitEstimateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.submitEstimateForm = this.formBuilder.group({
            product: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            productQty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            estimateId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            vendor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            remark: [''],
            otherDetails: [''],
        });
        this.activatedRoute.queryParams.subscribe(function (params) {
            var estimateId = params['estimateId'];
            _this.vendor = params['vendor'];
            _this.estimateService.getSubmissionOfVendor(estimateId, _this.vendor).subscribe(function (res) {
                if (res['result'].length == 0) {
                    console.log(estimateId);
                    _this.estimateService.getEstimateById(estimateId).subscribe(function (estimate) {
                        _this.estimate = estimate['result'];
                        _this.getList();
                        console.log(estimate);
                    });
                }
            });
        });
    };
    SubmitEstimateComponent.prototype.getItems = function () {
        var _this = this;
        this.meta.getItemsList().subscribe(function (trackInfo) {
            _this.items_option = trackInfo['result'];
            console.log('ItemsList >>>>>', _this.items_option);
        });
    };
    SubmitEstimateComponent.prototype.submit = function () {
        var _this = this;
        if (this.submitEstimateForm.valid && this.isEstimationValid()) {
            var estimate = {
                product: this.submitEstimateForm.value.product,
                productQty: this.submitEstimateForm.value.productQty,
                estimateId: this.submitEstimateForm.value.estimateId,
                vendor: this.submitEstimateForm.value.vendor,
                remark: this.submitEstimateForm.value.remark,
                otherDetails: this.submitEstimateForm.value.otherDetails,
                estimateDate: this.estimate.creationDate,
                total: this.total(),
                totalPrice: this.total(),
                receivedDate: new Date()
            };
            var req = {
                estimate: estimate,
                instances: this.estimateInstances
            };
            this.estimateService.submitEstimate(req).subscribe(function (response) {
                _this.toastr.success('Response Saved successfully.');
                close();
            });
        }
    };
    SubmitEstimateComponent.prototype.reset = function () {
        this.submitEstimateForm.reset();
        this.submitEstimateForm.controls['creationDate'].setValue(this.calendar.getToday());
    };
    SubmitEstimateComponent.prototype.getList = function () {
        this.vendor_master_list = this.estimate.vendors;
        var estimateVal = {
            product: this.estimate.product,
            productQty: this.estimate.productQty,
            estimateId: this.estimate._id,
            vendor: this.vendor
        };
        this.submitEstimateForm.patchValue(estimateVal);
        for (var i = 0; i < this.estimate.product.length; i++) {
            var ei = {};
            ei['estimateId'] = this.estimate._id;
            ei['product'] = this.estimate.product[i];
            ei['productQty'] = this.estimate.productQty[i];
            ei['discount'] = 0;
            ei['total'] = 0;
            ei['cgst'] = 0;
            ei['sgst'] = 0;
            ei['igst'] = 0;
            this.estimateInstances.push(ei);
        }
    };
    SubmitEstimateComponent.prototype.total = function () {
        var total = 0;
        for (var i = 0; i < this.estimateInstances.length; i++) {
            total = total + this.estimateInstances[i].total;
        }
        return total;
    };
    SubmitEstimateComponent.prototype.isEstimationValid = function () {
        var out = true;
        var statuses = [];
        for (var i = 0; i < this.estimateInstances.length; i++) {
            var status = false;
            var ei = this.estimateInstances[i];
            console.log(ei);
            if (!ei.stockStatus) {
                status = false;
            }
            else if (ei.stockStatus == 'Available') {
                status = false;
                if (ei.unitRate && ei.total) {
                    status = true;
                }
            }
            else {
                status = true;
            }
            statuses.push(status);
        }
        for (var j = 0; j < statuses.length; j++) {
            if (!statuses[j]) {
                out = false;
                break;
            }
        }
        return out;
    };
    SubmitEstimateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'submit-create-estimate',
            template: __webpack_require__(/*! ./submit-estimate.component.html */ "./src/app/layout/estimates/submit-estimate/submit-estimate.component.html"),
            styles: [__webpack_require__(/*! ./submit-estimate.component.scss */ "./src/app/layout/estimates/submit-estimate/submit-estimate.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_4__["MaintenanceService"],
            src_app_shared_services_estimates_service__WEBPACK_IMPORTED_MODULE_5__["EstimateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], SubmitEstimateComponent);
    return SubmitEstimateComponent;
}());

function close() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sleep(1000)];
                case 1:
                    _a.sent();
                    window.location.reload();
                    return [2 /*return*/];
            }
        });
    });
}
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}


/***/ }),

/***/ "./src/app/parameters.ts":
/*!*******************************!*\
  !*** ./src/app/parameters.ts ***!
  \*******************************/
/*! exports provided: baseURL, itemUnits, GetApiurl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemUnits", function() { return itemUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetApiurl", function() { return GetApiurl; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

var baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_endpoint;
var itemUnits = [
    'Nos', 'Kgs', 'Ltr', 'Set', 'Roll'
];
// get ApiURL
function GetApiurl(path) {
    return baseURL + path;
}


/***/ })

}]);
//# sourceMappingURL=estimates-estimates-module.js.map