(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-inventory-module"],{

/***/ "./src/app/layout/inventory/add-item-master/add-item-master.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/inventory/add-item-master/add-item-master.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"itemsForm\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Add Item Master</div>\r\n      <div class=\"card-body\">\r\n\r\n        <div class=\"form-group row\">\r\n        <div class=\"mt-3\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"required\" >Product Type</label>\r\n                <ng-select [items]=\"producttypes\" placeholder=\"Type and search Product Type\" bindLabel=\"name\" bindValue=\"name\"\r\n                formControlName=\"type\">\r\n              </ng-select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <label class=\"required\">Name</label>\r\n              <input type=\"text\" formControlName=\"name\" class=\"form-control\"\r\n                placeholder=\"Item Name\">\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <label class=\"\">Description</label>\r\n              <input type=\"text\" formControlName=\"pdescription\" class=\"form-control\"\r\n                placeholder=\"Product Descriptin\">\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"required\" >Item Category</label>\r\n                <ng-select [items]=\"itemcategorys\" placeholder=\"Type and search Item Category\" bindLabel=\"name\" bindValue=\"name\"\r\n                formControlName=\"itemcategory\">\r\n              </ng-select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"required\" >Item Type</label>\r\n                <ng-select [items]=\"itemtypes\" placeholder=\"Type and search Item Type\" bindLabel=\"name\" bindValue=\"name\"\r\n                formControlName=\"itemtype\">\r\n              </ng-select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"required\" >Unit</label>\r\n                <ng-select [items]=\"units\" placeholder=\"Type and search Unit\" bindLabel=\"name\" bindValue=\"name\"\r\n                formControlName=\"unit\">\r\n              </ng-select>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"required\" >Godown</label>\r\n                <ng-select [items]=\"godowns\" placeholder=\"Type and search Godown\" bindLabel=\"name\" bindValue=\"name\"\r\n                formControlName=\"godown\">\r\n              </ng-select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <label class=\"\">Opening Quantity</label>\r\n              <input type=\"text\" formControlName=\"oq\" class=\"form-control\"\r\n                placeholder=\"Opening Qty\">\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <label class=\"\">Rate</label>\r\n              <input type=\"text\" formControlName=\"rate\" class=\"form-control\"\r\n                placeholder=\"Rate\">\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <label class=\"\">Value</label>\r\n              <input type=\"text\" formControlName=\"value\" class=\"form-control\"\r\n                placeholder=\"Value\">\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"required\" >HSN Code</label>\r\n                <ng-select [items]=\"HSNcodes\" placeholder=\"Type and search HSN Code\" bindLabel=\"name\" bindValue=\"name\"\r\n                formControlName=\"hsncode\">\r\n              </ng-select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <label class=\"\">GST</label>\r\n              <input type=\"text\" formControlName=\"gst\" class=\"form-control\"\r\n                placeholder=\"GST\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button class=\"btn btn-success float-right\" (click)=\"saveitems()\" [disabled]=\"!itemsForm.valid || process == 'saving'\" type=\"button\">\r\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/inventory/add-item-master/add-item-master.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/inventory/add-item-master/add-item-master.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbnZlbnRvcnkvYWRkLWl0ZW0tbWFzdGVyL2FkZC1pdGVtLW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/inventory/add-item-master/add-item-master.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/inventory/add-item-master/add-item-master.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddItemMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemMasterComponent", function() { return AddItemMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddItemMasterComponent = /** @class */ (function () {
    function AddItemMasterComponent(fb, metaService, ms, is, ds, router) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.is = is;
        this.ds = ds;
        this.router = router;
        this.itemcategorys = [];
        this.units = [];
        this.godowns = [];
        this.HSNcodes = [];
        this.producttypes = [];
        this.itemtypes = [];
    }
    AddItemMasterComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getOptions();
    };
    AddItemMasterComponent.prototype.buildForm = function () {
        this.itemsForm = this.fb.group({
            'type': [''],
            'name': [''],
            'itemcategory': [''],
            'unit': [''],
            'gst': [''],
            'hsncode': [''],
            'srate': [''],
            'prate': [''],
            'sdescritption': [''],
            'pdescription': [''],
            'oq': [''],
            'rate': [''],
            'value': [''],
            'godown': [''],
            'itemtype': ['']
        });
    };
    AddItemMasterComponent.prototype.saveitems = function () {
        var _this = this;
        this.process = 'saving';
        console.log(this.itemsForm.value);
        this.is.crateItemMaster(this.itemsForm.value).subscribe(function (ordersInfo) {
            _this.process = 'done';
            _this.router.navigate(['/inventory/items-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddItemMasterComponent.prototype.getOptions = function () {
        var _this = this;
        this.ds.getProducttypeList().subscribe(function (trackInfo) {
            _this.producttypes = trackInfo['result'];
        });
        this.ds.getItemtypeList().subscribe(function (trackInfo) {
            _this.itemtypes = trackInfo['result'];
        });
        this.ds.getUnitList().subscribe(function (trackInfo) {
            _this.units = trackInfo['result'];
        });
        this.ds.getItemCategoryList().subscribe(function (trackInfo) {
            _this.itemcategorys = trackInfo['result'];
        });
        this.ds.getGodownList().subscribe(function (trackInfo) {
            _this.godowns = trackInfo['result'];
        });
        this.ds.getHSNcodeList().subscribe(function (trackInfo) {
            _this.HSNcodes = trackInfo['result'];
        });
    };
    AddItemMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-item-master',
            template: __webpack_require__(/*! ./add-item-master.component.html */ "./src/app/layout/inventory/add-item-master/add-item-master.component.html"),
            styles: [__webpack_require__(/*! ./add-item-master.component.scss */ "./src/app/layout/inventory/add-item-master/add-item-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_4__["InventoryService"],
            src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AddItemMasterComponent);
    return AddItemMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/add-material-issue/add-material-issue.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/inventory/add-material-issue/add-material-issue.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"miForm\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Add Material Issue</div>\r\n      <div class=\"card-body\">\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Site</label>\r\n            <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\r\n              formControlName=\"site\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">MI type</label>\r\n            <select class=\"form-control\" formControlName=\"mi_type\" (change)=\"generateMiNumber()\">\r\n              <option value=\"\">Select MI type</option>\r\n              <option value=\"Issue\">Issue</option>\r\n              <option value=\"Issue Return\">Issue Return</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-2\">\r\n            <label class=\"required\">Issue no</label>\r\n            <input disabled type=\"text\" formControlName=\"mi_number\" class=\"form-control\">\r\n          </div>\r\n\r\n          <!-- <div class=\"col-lg-2 col-md-2\">\r\n            <label class=\"required\">Issue date</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" #mi=\"bsDatepicker\" [bsConfig]=\"{ containerClass: 'theme-blue', 'dateInputFormat': 'DD-MM-YYYY', 'showWeekNumbers': false, 'minDate': currentDate }\" bsDatepicker formControlName=\"mi_date\"\r\n                class=\"form-control\">\r\n              <div class=\"input-group-prepend\" (click)=\"mi.toggle()\">\r\n                <span class=\"input-group-text\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n\r\n          <div class=\"col-lg-2 col-md-2\">\r\n            <label class=\"required\">Issue date</label>\r\n            <div class=\"input-group datepicker-input\">\r\n              <input\r\n                class=\"form-control\"\r\n                placeholder=\"dd-mm-yyyy\"\r\n                name=\"dp2\"\r\n                formControlName=\"mi_date\"\r\n                ngbDatepicker\r\n                #d2=\"ngbDatepicker\"\r\n              />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-2 col-md-2\">\r\n            <label>KM Reading</label>\r\n            <input type=\"text\" formControlName=\"mcreading\" class=\"form-control\" placeholder=\"KM Reading\">\r\n          </div>\r\n\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Issued By</label>\r\n            <select class=\"form-control\" formControlName=\"issuedby\">\r\n              <option value=\"\">Select Issued By</option>\r\n              <option *ngFor=\"let i of issuedby_option\" [value]=\"i.issuedby\"> {{i.issuedby}}</option>\r\n            </select>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Issued For</label>\r\n            <select class=\"form-control\" formControlName=\"issuedfor\">\r\n              <option value=\"\">Select Issued For</option>\r\n              <option value=\"Maintenance\">Maintenance</option>\r\n              <option value=\"Tyre\">Tyre</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Department</label>\r\n            <ng-select [items]=\"dept_option\" placeholder=\"Type and search Department\" bindLabel=\"name\" bindValue=\"name\"\r\n              formControlName=\"department\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Material Issue items\r\n                <button class=\"btn btn-primary float-right\" (click)=\"addMiitems()\" [disabled]=\"!miForm.valid\"\r\n                  type=\"button\">\r\n                  Add Item\r\n                </button>\r\n              </div>\r\n              <!-- /.box-header -->\r\n              <div class=\"card-body\" *ngIf=\"miForm.controls.materiali_items.controls.length > 0\">\r\n                <table class=\"table table-bordered\" formArrayName=\"materiali_items\">\r\n                  <tr>\r\n                    <th>Item</th>\r\n                    <th>Unit</th>\r\n                    <th>Godown</th>\r\n                    <th>Qty</th>\r\n                    <th>Price(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                    <th>Amount(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                    <th>Refund</th>\r\n                    <th>Material Type</th>\r\n                    <th>RefQty</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                  <tr *ngFor=\"let school of miForm.controls.materiali_items.controls; let i=index\" formGroupName=\"{{i}}\">\r\n                    <td>\r\n                      <div class=\"input-group ngs\">\r\n                        <div class=\"col-md-12\">\r\n                          <ng-select [items]=\"materiali_items\" appendTo=\".card-body\" class=\"form-control\" style=\"width:250px !important;\" placeholder=\"Type and search items\" bindLabel=\"name\" bindValue=\"_id\"\r\n                          formControlName=\"item_id\">\r\n                        </ng-select>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"unit\">\r\n                          <option value=\"\">Select units</option>\r\n                          <option *ngFor=\"let option of unit_option\" [value]=\"option\"> {{option}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </td>\r\n\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"godown\">\r\n                          <option value=\"\">Select godown</option>\r\n                          <option *ngFor=\"let g of materiali_godowns\" [value]=\"g.godown\"> {{g.godown}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </td>\r\n\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\"  formControlName=\"qty\"\r\n                        class=\"form-control qty\">\r\n                    </td>\r\n\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"price\" class=\"form-control price\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"total\" class=\"form-control total\">\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"refund\">\r\n                          <option value=\"\">Refund</option>\r\n                          <option value=\"No\">No</option>\r\n                          <option value=\"Yes\">Yes</option>\r\n                        </select>\r\n                        </div>\r\n                    </td>\r\n\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"mat_type\">\r\n                          <option value=\"\">Material Type</option>\r\n                          <option value=\"Job\">Job</option>\r\n                          <option value=\"Scrap\">Scrap</option>\r\n                        </select>\r\n                        </div>\r\n                    </td>\r\n\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"ref_qty\"  class=\"form-control refqty\">\r\n                    </td>\r\n                    <td>\r\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"miForm.controls?.materiali_items.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\r\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <div class=\"card-body\" *ngIf=\"miForm.controls?.materiali_items.controls.length == 0\">\r\n                <p>Please select vendor</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-3\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-lg-6 col-md-6\">\r\n              <label class=\"\">Narration</label>\r\n              <input type=\"text\" formControlName=\"narration\" class=\"form-control\" placeholder=\"Please enter narration\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"\">Net Amt</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"net_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"\">Rounded off</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"rounded_off\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label>Round of Type</label>\r\n              <select class=\"form-control\" formControlName=\"round_off_type\">\r\n                <option>Please select site</option>\r\n                <option value=\"plus\">Plus</option>\r\n                <option value=\"minus\">Minus</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"\">Total</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"total_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!miForm.valid || process == 'saving'\" type=\"button\">\r\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/inventory/add-material-issue/add-material-issue.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/inventory/add-material-issue/add-material-issue.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  overflow-x: scroll;\n  width: 100%;\n  display: block; }\n  table select {\n    width: 150px; }\n  table .unit {\n    width: 70px; }\n  table .qty {\n    width: 70px; }\n  table .price {\n    width: 70px; }\n  table .refund {\n    width: 70px; }\n  table .mat_type {\n    width: 70px; }\n  table .ref_qty {\n    width: 120px; }\n  table .godown {\n    width: 70px; }\n  table .total {\n    width: 120px; }\n  ::ng-deep .ng-dropdown-panel {\n  margin-top: 40px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2ludmVudG9yeS9hZGQtbWF0ZXJpYWwtaXNzdWUvRDpcXHRlc3RpbmdfZm9sZGVyXFx0aGlydVxcZnJvbnRlbmRcXHRkX2Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXGludmVudG9yeVxcYWRkLW1hdGVyaWFsLWlzc3VlXFxhZGQtbWF0ZXJpYWwtaXNzdWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWMsRUFBQTtFQUhsQjtJQUtRLFlBQ0osRUFBQTtFQU5KO0lBUVEsV0FDSixFQUFBO0VBVEo7SUFXUSxXQUNKLEVBQUE7RUFaSjtJQWNRLFdBQ0osRUFBQTtFQWZKO0lBaUJRLFdBQ0osRUFBQTtFQWxCSjtJQW9CUSxXQUNKLEVBQUE7RUFyQko7SUF1QlEsWUFDSixFQUFBO0VBeEJKO0lBMEJRLFdBQ0osRUFBQTtFQTNCSjtJQTZCUSxZQUNKLEVBQUE7RUFJRjtFQUNJLDJCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2ludmVudG9yeS9hZGQtbWF0ZXJpYWwtaXNzdWUvYWRkLW1hdGVyaWFsLWlzc3VlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4XHJcbiAgICB9XHJcbiAgICAudW5pdCB7XHJcbiAgICAgICAgd2lkdGg6IDcwcHhcclxuICAgIH1cclxuICAgIC5xdHkge1xyXG4gICAgICAgIHdpZHRoOiA3MHB4XHJcbiAgICB9XHJcbiAgICAucHJpY2V7XHJcbiAgICAgICAgd2lkdGg6IDcwcHhcclxuICAgIH1cclxuICAgIC5yZWZ1bmR7XHJcbiAgICAgICAgd2lkdGg6IDcwcHhcclxuICAgIH1cclxuICAgIC5tYXRfdHlwZXtcclxuICAgICAgICB3aWR0aDogNzBweFxyXG4gICAgfVxyXG4gICAgLnJlZl9xdHkge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweFxyXG4gICAgfVxyXG4gICAgLmdvZG93bntcclxuICAgICAgICB3aWR0aDogNzBweFxyXG4gICAgfVxyXG4gICAgLnRvdGFse1xyXG4gICAgICAgIHdpZHRoOiAxMjBweFxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwge1xyXG4gICAgICBtYXJnaW4tdG9wIDogNDBweCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/layout/inventory/add-material-issue/add-material-issue.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/inventory/add-material-issue/add-material-issue.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AddMaterialIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMaterialIssueComponent", function() { return AddMaterialIssueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddMaterialIssueComponent = /** @class */ (function () {
    function AddMaterialIssueComponent(fb, metaService, ms, is, ds, router) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.is = is;
        this.ds = ds;
        this.router = router;
        this.unit_option = _parameters__WEBPACK_IMPORTED_MODULE_4__["itemUnits"];
        this.currentDate = new Date();
        this.loading = false;
        this.usertype = this.metaService.getSiteFromStorage().role;
        this.site_name = this.metaService.getSiteFromStorage().site;
        var current = new Date();
        this.minDate = {
            year: current.getFullYear(),
            month: current.getMonth() + 1,
            day: current.getDate()
        };
    }
    AddMaterialIssueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bsConfig = Object.assign({}, { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
        this.buildForm();
        this.miForm.controls.materiali_items.valueChanges.subscribe(function (changes) {
            _this.updateValues();
        });
        this.getOptions();
        this.getSites();
    };
    AddMaterialIssueComponent.prototype.buildForm = function () {
        this.miForm = this.fb.group({
            'site': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mi_type': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mi_number': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mi_date': [{ year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() }],
            'issuedby': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'issuedfor': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mcreading': '',
            'department': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'materiali_items': this.fb.array([]),
            'narration': [''],
            'net_amount': [''],
            'rounded_off': [''],
            'round_off_type': [''],
            'total_amount': ['']
        });
        this.addMiitems();
    };
    AddMaterialIssueComponent.prototype.initItems = function () {
        return this.fb.group({
            'name': [''],
            'item_id': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'unit': [''],
            'qty': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'price': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'refund': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mat_type': [''],
            'ref_qty': [0],
            'total': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'godown': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    AddMaterialIssueComponent.prototype.addMiitems = function () {
        var control = this.miForm.controls['materiali_items'];
        control.push(this.initItems());
    };
    AddMaterialIssueComponent.prototype.removeItems = function (i) {
        var control = this.miForm.controls['materiali_items'];
        control.removeAt(i);
    };
    AddMaterialIssueComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var materiali_items = this.miForm.controls['materiali_items'].value;
        var index = materiali_items.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    AddMaterialIssueComponent.prototype.save = function () {
        var _this = this;
        var mi_date;
        if (this.miForm.controls['mi_date'].value) {
            var dt = this.miForm.controls['mi_date'].value.year + '-' +
                this.miForm.controls['mi_date'].value.month + '-' +
                this.miForm.controls['mi_date'].value.day;
            mi_date = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            mi_date = moment().format();
        }
        this.process = 'saving';
        var data = this.miForm.value;
        data.mi_date = mi_date;
        console.log('ISsue >> Save', this.miForm.value);
        this.is.addMi(this.miForm.value).subscribe(function (miInfo) {
            _this.process = 'done';
            _this.router.navigate(['/inventory/material-issue']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddMaterialIssueComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                _this.miForm.controls['site'].setValue(_this.siteOptions[0].branch_name);
            }
            else {
                _this.miForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    AddMaterialIssueComponent.prototype.getOptions = function () {
        var _this = this;
        // this.metaService.getSites().subscribe(siteInfo => {
        //   this.siteOptions = siteInfo;
        // });
        this.metaService.getDeptList().subscribe(function (trackInfo) {
            _this.dept_option = trackInfo['result'];
        });
        this.metaService.getIssuedbyList().subscribe(function (trackInfo) {
            _this.issuedby_option = trackInfo['result'];
        });
        this.ms.getItemMaster().subscribe(function (trackInfo) {
            _this.materiali_items = trackInfo['records'];
        });
        this.ds.getGodownList().subscribe(function (res) {
            _this.materiali_godowns = res;
        });
    };
    AddMaterialIssueComponent.prototype.updateValues = function () {
        var net_price = 0;
        var control = this.miForm.controls['materiali_items'];
        var _loop_1 = function () {
            var values = control.controls[intial_val].value;
            var item_mater_data = this_1.materiali_items.find(function (item) { return item['_id'] == values['item_id']; });
            var qty = values['qty'] ? values['qty'] : item_mater_data ? 1 : 0;
            var price = values['price'] ? values['price'] : item_mater_data ? parseFloat(item_mater_data['rate']) : 0;
            var original_price = qty * price;
            var total = original_price;
            var unit = values['unit'] ? values['unit'] : item_mater_data ? item_mater_data.unit : '';
            // Tax calculation ends here
            control.controls[intial_val].patchValue({
                unit: unit,
                price: price,
                name: item_mater_data ? item_mater_data.name : '',
                qty: qty,
                total: total.toFixed(5)
            }, { emitEvent: false });
            net_price += total;
        };
        var this_1 = this;
        for (var intial_val = 0; intial_val < control.length; intial_val++) {
            _loop_1();
        }
        this.miForm.patchValue({
            'net_amount': net_price,
            'rounded_off': net_price,
            'total_amount': net_price
        }, { emitEvent: false });
    };
    // public generateMiNumber() {
    //   const mi_type = this.miForm.controls.mi_type.value;
    //   this.is.getMiNumberDetails(mi_type).subscribe(miInfo => {
    //     this.miForm.controls.mi_number.setValue(miInfo['count'] + 1);
    //   }, error => { console.log(error);
    //    });
    // }
    AddMaterialIssueComponent.prototype.generateMiNumber = function () {
        var _this = this;
        var mi_type = this.miForm.controls.mi_type.value;
        var site = this.miForm.controls.site.value;
        if (site && mi_type) {
            var matchCond = { site: site, mi_type: mi_type };
            console.log('mathCond >>', matchCond);
            this.is.getMiNumberDetails(matchCond).subscribe(function (mrInfo) {
                _this.miForm.controls.mi_number.setValue(mrInfo['count'] + 1);
            }, function (error) {
                console.log(error);
            });
        }
    };
    AddMaterialIssueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-material-issue',
            template: __webpack_require__(/*! ./add-material-issue.component.html */ "./src/app/layout/inventory/add-material-issue/add-material-issue.component.html"),
            styles: [__webpack_require__(/*! ./add-material-issue.component.scss */ "./src/app/layout/inventory/add-material-issue/add-material-issue.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_5__["InventoryService"],
            src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AddMaterialIssueComponent);
    return AddMaterialIssueComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/add-material-receipt/add-material-receipt.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/inventory/add-material-receipt/add-material-receipt.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"mrForm\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Add Material Receipt</div>\r\n      <div class=\"card-body\">\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Site</label>\r\n            <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\r\n              formControlName=\"site\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">MR type</label>\r\n            <select class=\"form-control\" formControlName=\"mr_type\" (change)=\"generateMrNumber()\">\r\n              <option value=\"\">Select MR type</option>\r\n              <option value=\"Material Receipt\">Material Receipt</option>\r\n              <option value=\"Material Return\">Material Return</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">MR no</label>\r\n            <input disabled type=\"text\" formControlName=\"mr_number\" class=\"form-control\" placeholder=\"\">\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">MR date</label>\r\n            <div class=\"input-group datepicker-input\">\r\n              <input\r\n                class=\"form-control\"\r\n                placeholder=\"dd-mm-yyyy\"\r\n                name=\"dp2\"\r\n                formControlName=\"mr_date\"\r\n                ngbDatepicker\r\n                #d2=\"ngbDatepicker\"\r\n              />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Receipt type</label>\r\n            <select class=\"form-control\" formControlName=\"rec_type\">\r\n              <option value=\"\">Select Receipt type</option>\r\n              <option value=\"Direct\">Direct</option>\r\n              <option value=\"Job Order\">Job Order</option>\r\n              <option value=\"Purchase Order\">Purchase Order</option>\r\n              <option value=\"Scrap\">Scrap</option>\r\n              <option value=\"Stock Transfer\">Stock Transfer</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Godown</label>\r\n            <select class=\"form-control\" formControlName=\"godown\">\r\n              <option value=\"\">Select Godown</option>\r\n              <option *ngFor=\"let g of godowns\" value=\"{{ g.godown }}\">\r\n                {{ g.godown }}\r\n            </select>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Vendor</label>\r\n            <ng-select [items]=\"vendor_option\" placeholder=\"Type and search vendor\" bindLabel=\"name\" bindValue=\"name\"\r\n              formControlName=\"vendor\">\r\n            </ng-select>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Department</label>\r\n            <ng-select [items]=\"dept_option\" placeholder=\"Type and search Department\" bindLabel=\"name\" bindValue=\"name\"\r\n              formControlName=\"department\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"\">Invoice No</label>\r\n            <input type=\"text\" formControlName=\"invno\" class=\"form-control\" placeholder=\"Invoice No\">\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <label>Invoice date</label>\r\n            <div class=\"input-group datepicker-input\">\r\n              <input\r\n                class=\"form-control\"\r\n                placeholder=\"dd-mm-yyyy\"\r\n                name=\"dp3\"\r\n                formControlName=\"invdate\"\r\n                ngbDatepicker\r\n                #d3=\"ngbDatepicker\"\r\n              />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d3.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"\">Po No. / Job No.</label>\r\n            <input type=\"text\" formControlName=\"pjno\" class=\"form-control\" placeholder=\"Po.No / Job No.\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Material Receipts items\r\n                <button class=\"btn btn-primary float-right\" (click)=\"addMrItems()\" [disabled]=\"!mrForm.valid\"\r\n                  type=\"button\">\r\n                  Add Item\r\n                </button>\r\n              </div>\r\n              <!-- /.box-header -->\r\n              <div class=\"card-body\" *ngIf=\"mrForm.controls.materialr_items.controls.length > 0\">\r\n                <table class=\"table table-bordered\" formArrayName=\"materialr_items\">\r\n                  <tr>\r\n                    <th>Item</th>\r\n                    <th>Unit</th>\r\n                    <th>Qty</th>\r\n                    <th>Price(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                    <th>Dis(%)</th>\r\n                    <th>CGST(%)</th>\r\n                    <th>SGST(%)</th>\r\n                    <th>IGST(%)</th>\r\n                    <th>Amount(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n\r\n\r\n                  <tr *ngFor=\"let school of mrForm.controls.materialr_items.controls; let i=index\" formGroupName=\"{{i}}\">\r\n                    <!-- <td>\r\n                      <div class=\"input-group ngs\">\r\n                        <div class=\"col-md-12\">\r\n                          <ng-select [items]=\"materialr_items\" appendTo=\".card-body\" class=\"form-control\" style=\"width:250px !important;\" placeholder=\"Type and search items\" bindLabel=\"name\" bindValue=\"_id\"\r\n                          formControlName=\"item_id\">\r\n                        </ng-select>\r\n                        </div>\r\n                      </div>\r\n                    </td> -->\r\n                    <td>\r\n                      <div class=\"input-group ngs\">\r\n                        <div class=\"col-md-12\">\r\n                          <ng-select [items]=\"materialr_items\" appendTo=\".card-body\" class=\"form-control\" style=\"width:250px !important;\" placeholder=\"Type and search items\" bindLabel=\"name\" bindValue=\"_id\"\r\n                          formControlName=\"item_id\">\r\n                        </ng-select>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"unit\">\r\n                          <option value=\"\">Please select units</option>\r\n                          <option *ngFor=\"let option of unit_option\" [value]=\"option\"> {{option}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\"  formControlName=\"qty\"\r\n                        class=\"form-control qty\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"price\" class=\"form-control price\">\r\n\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"discount\"  class=\"form-control discount\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\"  formControlName=\"cgst\" class=\"form-control discount\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"sgst\"  class=\"form-control discount\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\"  formControlName=\"igst\" class=\"form-control discount\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"total\" class=\"form-control total\">\r\n\r\n                    </td>\r\n                    <td>\r\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"mrForm.controls?.materialr_items.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\r\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <div class=\"card-body\" *ngIf=\"mrForm.controls?.materialr_items.controls.length == 0\">\r\n                <p>Please select vendor</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mt-3\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-lg-6 col-md-6\">\r\n              <label class=\"\">Narration</label>\r\n              <input type=\"text\" formControlName=\"narration\" class=\"form-control\" placeholder=\"Please enter narration\">\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"\">Gross Amt</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"gross_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"\">CGST Amt</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"cgst_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"\">SGST Amt</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"sgst_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"\">IGST Amt</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"igst_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"\">Net Amt</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"net_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"\">Rounded off</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"rounded_off\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"required\">Round of Type</label>\r\n              <select class=\"form-control\" formControlName=\"round_off_type\">\r\n                <option>Please select site</option>\r\n                <option value=\"plus\">Plus</option>\r\n                <option value=\"minus\">Minus</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"\">Total</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"total_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!mrForm.valid || process == 'saving'\" type=\"button\">\r\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/inventory/add-material-receipt/add-material-receipt.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/inventory/add-material-receipt/add-material-receipt.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  overflow-x: scroll;\n  width: 100%;\n  display: block; }\n  table select {\n    width: 150px; }\n  table .unit {\n    width: 70px; }\n  table .qty {\n    width: 70px; }\n  table .price {\n    width: 120px; }\n  table .discount {\n    width: 70px; }\n  table .total {\n    width: 170px; }\n  ::ng-deep .ng-dropdown-panel {\n  margin-top: 40px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2ludmVudG9yeS9hZGQtbWF0ZXJpYWwtcmVjZWlwdC9EOlxcdGVzdGluZ19mb2xkZXJcXHRoaXJ1XFxmcm9udGVuZFxcdGRfZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcaW52ZW50b3J5XFxhZGQtbWF0ZXJpYWwtcmVjZWlwdFxcYWRkLW1hdGVyaWFsLXJlY2VpcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWMsRUFBQTtFQUhsQjtJQUtRLFlBQ0osRUFBQTtFQU5KO0lBUVEsV0FDSixFQUFBO0VBVEo7SUFXUSxXQUNKLEVBQUE7RUFaSjtJQWNRLFlBQ0osRUFBQTtFQWZKO0lBaUJRLFdBQ0osRUFBQTtFQWxCSjtJQW9CUSxZQUNKLEVBQUE7RUFJRjtFQUNJLDJCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2ludmVudG9yeS9hZGQtbWF0ZXJpYWwtcmVjZWlwdC9hZGQtbWF0ZXJpYWwtcmVjZWlwdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweFxyXG4gICAgfVxyXG4gICAgLnVuaXQge1xyXG4gICAgICAgIHdpZHRoOiA3MHB4XHJcbiAgICB9XHJcbiAgICAucXR5IHtcclxuICAgICAgICB3aWR0aDogNzBweFxyXG4gICAgfVxyXG4gICAgLnByaWNle1xyXG4gICAgICAgIHdpZHRoOiAxMjBweFxyXG4gICAgfVxyXG4gICAgLmRpc2NvdW50e1xyXG4gICAgICAgIHdpZHRoOiA3MHB4XHJcbiAgICB9XHJcbiAgICAudG90YWx7XHJcbiAgICAgICAgd2lkdGg6IDE3MHB4XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICAgIG1hcmdpbi10b3AgOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/inventory/add-material-receipt/add-material-receipt.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/inventory/add-material-receipt/add-material-receipt.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddMaterialReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMaterialReceiptComponent", function() { return AddMaterialReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddMaterialReceiptComponent = /** @class */ (function () {
    function AddMaterialReceiptComponent(fb, metaService, ms, is, ds, router) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.is = is;
        this.ds = ds;
        this.router = router;
        this.loading = false;
        this.unit_option = _parameters__WEBPACK_IMPORTED_MODULE_4__["itemUnits"];
        this.godowns = [];
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
    AddMaterialReceiptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bsConfig = Object.assign({}, { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
        this.buildForm();
        this.mrForm.controls.materialr_items.valueChanges.subscribe(function (changes) {
            _this.updateValues();
        });
        this.getOptions();
        this.getSites();
    };
    AddMaterialReceiptComponent.prototype.buildForm = function () {
        this.mrForm = this.fb.group({
            'site': [''],
            'mr_type': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mr_number': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mr_date': [{ year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() }],
            'vendor': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'department': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'godown': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'rec_type': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'invno': '',
            'invdate': [''],
            'pjno': '',
            'materialr_items': this.fb.array([]),
            'narration': [''],
            'gross_amount': [''],
            'cgst_amount': [''],
            'sgst_amount': [''],
            'igst_amount': [''],
            'net_amount': [''],
            'rounded_off': [''],
            'round_off_type': [''],
            'total_amount': ['']
        });
        this.addMrItems();
    };
    AddMaterialReceiptComponent.prototype.initItems = function () {
        return this.fb.group({
            'name': [''],
            'item_id': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'unit': [''],
            'qty': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'price': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'discount': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'discounted_price': [0],
            'cgst': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'sgst': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'igst': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'total': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    AddMaterialReceiptComponent.prototype.addMrItems = function () {
        var control = this.mrForm.controls['materialr_items'];
        control.push(this.initItems());
    };
    AddMaterialReceiptComponent.prototype.removeItems = function (i) {
        var control = this.mrForm.controls['materialr_items'];
        control.removeAt(i);
    };
    AddMaterialReceiptComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var materialr_items = this.mrForm.controls['materialr_items'].value;
        var index = materialr_items.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    AddMaterialReceiptComponent.prototype.save = function () {
        var _this = this;
        var mr_date;
        if (this.mrForm.controls['mr_date'].value) {
            var dt = this.mrForm.controls['mr_date'].value.year + '-' +
                this.mrForm.controls['mr_date'].value.month + '-' +
                this.mrForm.controls['mr_date'].value.day;
            mr_date = moment(dt, 'YYYY-MM-DD').format();
            console.log(mr_date);
        }
        else {
            mr_date = moment().format();
        }
        var invdate;
        if (this.mrForm.controls['invdate'].value) {
            var dt = this.mrForm.controls['invdate'].value.year + '-' +
                this.mrForm.controls['invdate'].value.month + '-' +
                this.mrForm.controls['invdate'].value.day;
            invdate = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            invdate = moment().format();
        }
        this.process = 'saving';
        var data = this.mrForm.value;
        data.mr_date = mr_date;
        data.invdate = invdate;
        this.is.addMr(this.mrForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/inventory/material-receipt']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddMaterialReceiptComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                _this.mrForm.controls['site'].setValue(_this.siteOptions[0].branch_name);
            }
            else {
                _this.mrForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    AddMaterialReceiptComponent.prototype.getOptions = function () {
        // this.metaService.getSites().subscribe(siteInfo => {
        //   this.siteOptions = siteInfo;
        // });
        var _this = this;
        this.ms.getVendorMasterList().subscribe(function (siteInfo) {
            _this.vendor_option = siteInfo['result'];
            console.log('>>>>Vendor List', siteInfo['result']);
        });
        this.metaService.getDeptList().subscribe(function (trackInfo) {
            _this.dept_option = trackInfo['result'];
        });
        this.ds.getGodownList().subscribe(function (res) {
            _this.godowns = res;
        });
        this.ms.getItemMaster().subscribe(function (trackInfo) {
            _this.materialr_items = trackInfo['records'];
        });
    };
    AddMaterialReceiptComponent.prototype.updateValues = function () {
        var gross_price = 0;
        var cgst_price = 0;
        var sgst_price = 0;
        var igst_price = 0;
        var net_price = 0;
        var control = this.mrForm.controls['materialr_items'];
        var _loop_1 = function () {
            var values = control.controls[intial_val].value;
            var item_mater_data = this_1.materialr_items.find(function (item) { return item['_id'] == values['item_id']; });
            var qty = values['qty'] ? values['qty'] : item_mater_data ? 1 : 0;
            // const price = values['price'] ? values['price'] : item_mater_data ? parseFloat(item_mater_data['rate']) : 0;
            var price = values['price'] ? values['price'] : item_mater_data ? 0 : 0;
            var original_price = qty * price;
            var dis_difference = parseFloat(values['discount']) / 100;
            var discounted_amount = original_price * dis_difference;
            // gross amount
            var discounted_price = original_price - discounted_amount;
            // individual tax calculation
            var cgst_perc = values['cgst'];
            var cgst_amount = parseFloat(cgst_perc) / 100;
            var cgsttaxamount = discounted_price * cgst_amount;
            var sgst_perc = values['sgst'];
            var sgst_amount = parseFloat(sgst_perc) / 100;
            var sgsttaxamount = discounted_price * sgst_amount;
            var igst_perc = values['igst'];
            var igst_amount = parseFloat(igst_perc) / 100;
            var igsttaxamount = discounted_price * igst_amount;
            // Tax calculation starts here
            var total_taxes = values['cgst'] + values['sgst'] + values['igst'];
            var tax_difference = parseFloat(total_taxes) / 100;
            var tax_axmount = discounted_price * tax_difference;
            var total = discounted_price + tax_axmount;
            var unit = values['unit'] ? values['unit'] : item_mater_data ? item_mater_data.unit : '';
            // Tax calculation ends here
            control.controls[intial_val].patchValue({
                unit: unit,
                price: price,
                name: item_mater_data ? item_mater_data.name : '',
                qty: qty,
                discounted_price: discounted_price,
                total: total.toFixed(5)
            }, { emitEvent: false });
            gross_price += discounted_price;
            cgst_price += cgsttaxamount;
            sgst_price += sgsttaxamount;
            igst_price += igsttaxamount;
            net_price += total;
        };
        var this_1 = this;
        for (var intial_val = 0; intial_val < control.length; intial_val++) {
            _loop_1();
        }
        this.mrForm.patchValue({
            'gross_amount': gross_price,
            'cgst_amount': cgst_price,
            'sgst_amount': sgst_price,
            'igst_amount': igst_price,
            'net_amount': net_price,
            'rounded_off': net_price,
            'total_amount': net_price
        }, { emitEvent: false });
    };
    AddMaterialReceiptComponent.prototype.generateMrNumber = function () {
        var _this = this;
        var mr_type = this.mrForm.controls.mr_type.value;
        var site = this.mrForm.controls.site.value;
        if (site && mr_type) {
            var matchCond = { site: site, mr_type: mr_type };
            console.log('mathCond >>', matchCond);
            this.is.getMrNumberDetails(matchCond).subscribe(function (mrInfo) {
                _this.mrForm.controls.mr_number.setValue(mrInfo['count'] + 1);
            }, function (error) {
                console.log(error);
            });
        }
    };
    AddMaterialReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-material-receipt',
            template: __webpack_require__(/*! ./add-material-receipt.component.html */ "./src/app/layout/inventory/add-material-receipt/add-material-receipt.component.html"),
            styles: [__webpack_require__(/*! ./add-material-receipt.component.scss */ "./src/app/layout/inventory/add-material-receipt/add-material-receipt.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_5__["InventoryService"],
            src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AddMaterialReceiptComponent);
    return AddMaterialReceiptComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/add-order/add-order.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/inventory/add-order/add-order.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"orderForm\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Add Order</div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"form-group row\">\r\n\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Site</label>\r\n            <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\r\n              formControlName=\"site\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Order type</label>\r\n            <select class=\"form-control\" formControlName=\"order_type\" (change)=\"generateOrderNumber()\">\r\n              <option value=\"\">Please select order type</option>\r\n              <option value=\"Job order\">Job order</option>\r\n              <option value=\"Purchase order\">Purchase order</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"col-lg-2 col-md-2\">\r\n            <label class=\"required\">Order no</label>\r\n            <input disabled type=\"text\" formControlName=\"order_number\" class=\"form-control\" placeholder=\"order no\">\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-2\">\r\n            <label class=\"required\">Order date</label>\r\n            <div class=\"input-group datepicker-input\">\r\n              <input\r\n                class=\"form-control\"\r\n                placeholder=\"dd-mm-yyyy\"\r\n                name=\"dp2\"\r\n                formControlName=\"order_date\"\r\n                ngbDatepicker\r\n                #d2=\"ngbDatepicker\"\r\n              />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"required\">Delivery date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd-mm-yyyy\"\r\n                  name=\"dp1\"\r\n                  formControlName=\"delivery_date\"\r\n                  ngbDatepicker\r\n                  #d1=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n\r\n\r\n\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Vendor</label>\r\n            <ng-select [items]=\"vendor_option\" placeholder=\"Type and search vendor\" bindLabel=\"name\" bindValue=\"name\"\r\n              formControlName=\"vendor\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-lg-2 col-md-2\">\r\n            <label class=\"required\">Job type</label>\r\n            <select class=\"form-control\" formControlName=\"job_type\">\r\n              <option value=\"\">Please select job type</option>\r\n              <option value=\"Direct\">Direct</option>\r\n              <option value=\"Job order\">Job order</option>\r\n              <option value=\"Estimate\">Estimate</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Department</label>\r\n            <ng-select [items]=\"dept_option\" placeholder=\"Type and search Department\" bindLabel=\"name\" bindValue=\"name\"\r\n              formControlName=\"department\">\r\n            </ng-select>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Order line items\r\n                <button class=\"btn btn-primary float-right\" (click)=\"addOrderItems()\" [disabled]=\"!orderForm.valid\"\r\n                  type=\"button\">\r\n                  Add Item\r\n                </button>\r\n              </div>\r\n              <!-- /.box-header -->\r\n              <div class=\"card-body\" *ngIf=\"orderForm.controls.order_items.controls.length > 0\">\r\n                <table class=\"table table-bordered\" formArrayName=\"order_items\">\r\n                  <tr>\r\n                    <th>Item</th>\r\n                    <th>Unit</th>\r\n                    <th>Qty</th>\r\n                    <th>Price(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                    <th>Dis(%)</th>\r\n                    <th>CGST(%)</th>\r\n                    <th>SGST(%)</th>\r\n                    <th>IGST(%)</th>\r\n                    <th>Amount(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                  <tr *ngFor=\"let school of orderForm.controls.order_items.controls; let i=index\" formGroupName=\"{{i}}\">\r\n                    <td>\r\n                      <div class=\"input-group ngs\">\r\n                        <div class=\"col-md-12\">\r\n                          <ng-select [items]=\"order_items\" appendTo=\".card-body\" class=\"form-control\" style=\"width:250px !important;\" placeholder=\"Type and search items\" bindLabel=\"name\" bindValue=\"_id\"\r\n                          formControlName=\"item_id\">\r\n                        </ng-select>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"unit\">\r\n                          <option value=\"\">Please select units</option>\r\n                          <option *ngFor=\"let option of unit_option\" [value]=\"option\"> {{option}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"qty\" class=\"form-control qty\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"price\" class=\"form-control price\">\r\n\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"discount\" class=\"form-control discount\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"cgst\" class=\"form-control discount\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"sgst\" class=\"form-control discount\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"igst\" class=\"form-control discount\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"total\" class=\"form-control total\">\r\n\r\n                    </td>\r\n                    <td>\r\n                      <button class=\"btn btn-danger float-right\"\r\n                        [disabled]=\"orderForm.controls?.order_items.controls.length == 1\" (click)=\"removeItems(i)\"\r\n                        type=\"button\">\r\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <div class=\"card-body\" *ngIf=\"orderForm.controls?.order_items.controls.length == 0\">\r\n                <p>Please select vendor</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mt-3\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-lg-6 col-md-6\">\r\n              <label class=\"\">Narration</label>\r\n              <input type=\"text\" formControlName=\"narration\" class=\"form-control\" placeholder=\"Please enter narration\">\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6\">\r\n              <label class=\"\">Terms And Conditions</label>\r\n              <input type=\"text\" formControlName=\"terms_and_conditions\" class=\"form-control\"\r\n                placeholder=\"Please enter terms and conditions\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"\">Net Amt</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"net_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"\">Rounded off</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"rounded_off\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"required\">Round of Type</label>\r\n              <select class=\"form-control\" formControlName=\"round_off_type\">\r\n                <option>Please select site</option>\r\n                <option value=\"plus\">Plus</option>\r\n                <option value=\"minus\">Minus</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"\">Total</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"total_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button class=\"btn btn-success float-right\" (click)=\"saveOrders()\" [disabled]=\"!orderForm.valid || process == 'saving'\" type=\"button\">\r\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/inventory/add-order/add-order.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/inventory/add-order/add-order.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  overflow-x: scroll;\n  width: 100%;\n  display: block; }\n  table select {\n    width: 150px; }\n  table .qty {\n    width: 70px; }\n  table .price {\n    width: 120px; }\n  table .discount {\n    width: 70px; }\n  table .total {\n    width: 170px; }\n  ::ng-deep .ng-dropdown-panel {\n  margin-top: 40px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2ludmVudG9yeS9hZGQtb3JkZXIvRDpcXHRlc3RpbmdfZm9sZGVyXFx0aGlydVxcZnJvbnRlbmRcXHRkX2Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXGludmVudG9yeVxcYWRkLW9yZGVyXFxhZGQtb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWMsRUFBQTtFQUhsQjtJQUtRLFlBQ0osRUFBQTtFQU5KO0lBUVEsV0FDSixFQUFBO0VBVEo7SUFXUSxZQUNKLEVBQUE7RUFaSjtJQWNRLFdBQ0osRUFBQTtFQWZKO0lBaUJRLFlBQ0osRUFBQTtFQUVGO0VBQ0UsMkJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaW52ZW50b3J5L2FkZC1vcmRlci9hZGQtb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgc2VsZWN0IHtcclxuICAgICAgICB3aWR0aDogMTUwcHhcclxuICAgIH1cclxuICAgIC5xdHkge1xyXG4gICAgICAgIHdpZHRoOiA3MHB4XHJcbiAgICB9XHJcbiAgICAucHJpY2V7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4XHJcbiAgICB9XHJcbiAgICAuZGlzY291bnR7XHJcbiAgICAgICAgd2lkdGg6IDcwcHhcclxuICAgIH1cclxuICAgIC50b3RhbHtcclxuICAgICAgICB3aWR0aDogMTcwcHhcclxuICAgIH1cclxuICB9XHJcbiAgOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBtYXJnaW4tdG9wIDogNDBweCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/inventory/add-order/add-order.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/inventory/add-order/add-order.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrderComponent", function() { return AddOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_estimates_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/estimates.service */ "./src/app/shared/services/estimates.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddOrderComponent = /** @class */ (function () {
    function AddOrderComponent(fb, metaService, ms, es, is, router, aroute) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.es = es;
        this.is = is;
        this.router = router;
        this.aroute = aroute;
        this.unit_option = _parameters__WEBPACK_IMPORTED_MODULE_4__["itemUnits"];
        this.currentDate = new Date();
        this.selectedValues = [];
        this.loading = false;
        this.usertype = this.metaService.getSiteFromStorage().role;
        this.site_name = this.metaService.getSiteFromStorage().site;
        var current = new Date();
        this.minDate = {
            year: current.getFullYear(),
            month: current.getMonth() + 1,
            day: current.getDate()
        };
    }
    AddOrderComponent.prototype.id = function (product) {
        for (var i = 0; i < this.order_items.length; i++) {
            if (product == this.order_items[i].name) {
                return this.order_items._id;
            }
        }
    };
    AddOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bsConfig = Object.assign({}, { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
        this.buildForm();
        this.orderForm.controls.order_items.valueChanges.subscribe(function (changes) {
            _this.updateValues();
        });
        this.getOptions();
        this.getSites();
        this.aroute.params.subscribe(function (param) {
            var id = param['estimateId'];
            _this.estimateId = id;
            _this.es.getEstimatesSubmisionById(id).subscribe(function (res) {
                var value = {
                    'order_type': 'Purchase order',
                    'vendor': res['result'].vendor,
                    'job_type': 'Estimate'
                };
                _this.orderForm.patchValue(value);
            });
            _this.es.getEstimatesProdSubmisions(id).subscribe(function (res) {
                var estimates = res['result'];
                var values = [];
                for (var i = 0; i < estimates.length; i++) {
                    var ei = estimates[i];
                    var value = {
                        'item_id': ei.product,
                        'unit': ei.unit,
                        'qty': ei.productQty,
                        'price': ei.unitRate,
                        'discount': ei.discount,
                        'cgst': ei.cgst,
                        'sgst': ei.sgst,
                        'igst': ei.igst,
                        'total': ei.total
                    };
                    _this.selectedValues.push(value);
                    values.push(value);
                    if (i > 0) {
                        _this.addOrderItems();
                    }
                }
                var control = _this.orderForm.controls['order_items'];
                control.patchValue(values);
                var _loop_1 = function () {
                    var invalue = i;
                    _this.ms.getItemMaster().subscribe(function (trackInfo) {
                        _this.order_items = trackInfo['records'];
                        for (var ii = 0; ii < _this.order_items.length; ii++) {
                            if (_this.selectedValues[invalue].item_id == _this.order_items[ii].name) {
                                var val = {
                                    'item_id': _this.order_items[ii]._id
                                };
                                values[invalue].item_id = _this.order_items[ii]._id;
                                console.log(val);
                                control.at(invalue).patchValue(val);
                            }
                        }
                    });
                };
                for (var i = 0; i < values.length; i++) {
                    _loop_1();
                }
            });
        });
    };
    AddOrderComponent.prototype.buildForm = function () {
        this.orderForm = this.fb.group({
            'order_date': [{ year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() }],
            'delivery_date': [''],
            'site': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'order_type': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'order_number': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'vendor': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'job_type': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'department': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'order_items': this.fb.array([]),
            'narration': [''],
            'terms_and_conditions': [''],
            'net_amount': [''],
            'rounded_off': [''],
            'round_off_type': [''],
            'total_amount': ['']
        });
        this.addOrderItems();
    };
    AddOrderComponent.prototype.initItems = function () {
        return this.fb.group({
            'name': [''],
            'item_id': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'unit': [''],
            'qty': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'price': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'discount': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'discounted_price': [0],
            'cgst': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'sgst': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'igst': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'total': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    AddOrderComponent.prototype.addOrderItems = function () {
        var control = this.orderForm.controls['order_items'];
        control.push(this.initItems());
    };
    AddOrderComponent.prototype.removeItems = function (i) {
        var control = this.orderForm.controls['order_items'];
        control.removeAt(i);
    };
    AddOrderComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var order_items = this.orderForm.controls['order_items'].value;
        var index = order_items.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    AddOrderComponent.prototype.saveOrders = function () {
        var _this = this;
        var order_date;
        if (this.orderForm.controls['order_date'].value) {
            var dt = this.orderForm.controls['order_date'].value.year + '-' +
                this.orderForm.controls['order_date'].value.month + '-' +
                this.orderForm.controls['order_date'].value.day;
            order_date = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            order_date = moment().format();
        }
        var delivery_date;
        if (this.orderForm.controls['delivery_date'].value) {
            var dt = this.orderForm.controls['delivery_date'].value.year + '-' +
                this.orderForm.controls['delivery_date'].value.month + '-' +
                this.orderForm.controls['delivery_date'].value.day;
            delivery_date = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            delivery_date = moment().format();
        }
        this.process = 'saving';
        var data = this.orderForm.value;
        data.order_date = order_date;
        data.delivery_date = delivery_date;
        this.is.crateOrder(this.orderForm.value).subscribe(function (ordersInfo) {
            _this.process = 'done';
            _this.es.updateEstimateSubmission(_this.estimateId).subscribe(function (res) {
            });
            _this.router.navigate(['/inventory/orders']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddOrderComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                _this.orderForm.controls['site'].setValue(_this.siteOptions[0].branch_name);
            }
            else {
                _this.orderForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    AddOrderComponent.prototype.getOptions = function () {
        var _this = this;
        // this.metaService.getSites().subscribe(siteInfo => {
        //   this.siteOptions = siteInfo;
        // });
        this.ms.getVendorMasterList().subscribe(function (siteInfo) {
            _this.vendor_option = siteInfo['result'];
        });
        this.metaService.getDeptList().subscribe(function (trackInfo) {
            _this.dept_option = trackInfo['result'];
        });
        this.ms.getItemMaster().subscribe(function (trackInfo) {
            _this.order_items = trackInfo['records'];
        });
    };
    AddOrderComponent.prototype.updateValues = function () {
        var net_price = 0;
        var control = this.orderForm.controls['order_items'];
        var _loop_2 = function () {
            var values = control.controls[intial_val].value;
            var item_mater_data = this_1.order_items ? this_1.order_items.find(function (item) { return item['_id'] == values['item_id']; }) : '';
            var qty = values['qty'] ? values['qty'] : item_mater_data ? 1 : 0;
            var price = values['price'] ? values['price'] : item_mater_data ? parseFloat(item_mater_data['rate']) : 0;
            var original_price = qty * price;
            var dis_difference = parseFloat(values['discount']) / 100;
            var discounted_amount = original_price * dis_difference;
            var discounted_price = original_price - discounted_amount;
            // Tax calculation starts here
            var total_taxes = values['cgst'] + values['sgst'] + values['igst'];
            var tax_difference = parseFloat(total_taxes) / 100;
            var tax_axmount = discounted_price * tax_difference;
            var total = discounted_price + tax_axmount;
            var unit = values['unit'] ? values['unit'] : item_mater_data ? item_mater_data.unit : '';
            // Tax calculation ends here
            control.controls[intial_val].patchValue({
                unit: unit,
                price: price,
                name: item_mater_data ? item_mater_data.name : '',
                qty: qty,
                discounted_price: discounted_price,
                total: total.toFixed(5)
            }, { emitEvent: false });
            net_price += total;
        };
        var this_1 = this;
        for (var intial_val = 0; intial_val < control.length; intial_val++) {
            _loop_2();
        }
        this.orderForm.patchValue({
            'net_amount': net_price,
            'rounded_off': net_price,
            'total_amount': net_price
        }, { emitEvent: false });
    };
    // public generateOrderNumber() {
    //   const order_type = this.orderForm.controls.order_type.value;
    //   this.is.getOrderNumberDetails(order_type).subscribe(vorderInfo => {
    //     this.orderForm.controls.order_number.setValue(vorderInfo['count'] + 1);
    //   }, error => { console.log(error);
    //   });
    // }
    AddOrderComponent.prototype.generateOrderNumber = function () {
        var _this = this;
        var order_type = this.orderForm.controls.order_type.value;
        var site = this.orderForm.controls.site.value;
        if (site && order_type) {
            var matchCond = { site: site, order_type: order_type };
            console.log('mathCond >>', matchCond);
            this.is.getOrderNumberDetails(matchCond).subscribe(function (mrInfo) {
                _this.orderForm.controls.order_number.setValue(mrInfo['count'] + 1);
            }, function (error) {
                console.log(error);
            });
        }
    };
    AddOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-order',
            template: __webpack_require__(/*! ./add-order.component.html */ "./src/app/layout/inventory/add-order/add-order.component.html"),
            styles: [__webpack_require__(/*! ./add-order.component.scss */ "./src/app/layout/inventory/add-order/add-order.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            src_app_shared_services_estimates_service__WEBPACK_IMPORTED_MODULE_7__["EstimateService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_5__["InventoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], AddOrderComponent);
    return AddOrderComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/add-scrap-sale/add-scrap-sale.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/inventory/add-scrap-sale/add-scrap-sale.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"ssForm\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Add Scrap Sale</div>\r\n      <div class=\"card-body\">\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Site</label>\r\n            <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\r\n              formControlName=\"site\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Sale type</label>\r\n            <select class=\"form-control\" formControlName=\"ss_type\" (change)=\"generateSsNumber()\">\r\n              <option value=\"\">Select Sale type</option>\r\n              <option value=\"Scrap Sale\">Scrap Sale</option>\r\n              <option value=\"Truck Issue\">Truck Issue</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Scrap Sale no</label>\r\n            <input disabled type=\"text\" formControlName=\"ss_number\" class=\"form-control\">\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Scrap Sale date</label>\r\n            <div class=\"input-group datepicker-input\">\r\n              <input\r\n                class=\"form-control\"\r\n                placeholder=\"dd-mm-yyyy\"\r\n                name=\"dp2\"\r\n                formControlName=\"ss_date\"\r\n                ngbDatepicker\r\n                #d2=\"ngbDatepicker\"\r\n              />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Issued By</label>\r\n            <select class=\"form-control\" formControlName=\"issuedby\">\r\n              <option value=\"\">Select Issued By</option>\r\n              <option *ngFor=\"let i of issuedby_option\" [value]=\"i.issuedby\"> {{i.issuedby}}</option>\r\n            </select>\r\n          </div>\r\n\r\n        <!-- </div>\r\n\r\n        <div class=\"form-group row\"> -->\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Department</label>\r\n            <ng-select [items]=\"dept_option\" placeholder=\"Type and search Department\" bindLabel=\"name\" bindValue=\"name\"\r\n              formControlName=\"department\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <label class=\"required\">Vendor</label>\r\n            <ng-select [items]=\"vendor_option\" placeholder=\"Type and search vendor\" bindLabel=\"name\" bindValue=\"name\"\r\n              formControlName=\"vendor\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Scrap Sale items\r\n                <button class=\"btn btn-primary float-right\" (click)=\"addSsitems()\" [disabled]=\"!ssForm.valid\"\r\n                  type=\"button\">\r\n                  Add Item\r\n                </button>\r\n              </div>\r\n              <!-- /.box-header -->\r\n              <div class=\"card-body\" *ngIf=\"ssForm.controls.scraps_items.controls.length > 0\">\r\n                <table class=\"table table-bordered\" formArrayName=\"scraps_items\">\r\n                  <tr>\r\n                    <th>Item</th>\r\n                    <th>Unit</th>\r\n                    <th>Qty</th>\r\n                    <th>Price(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                    <th>Godown</th>\r\n                    <th>Amount(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                  <tr *ngFor=\"let school of ssForm.controls.scraps_items.controls; let i=index\" formGroupName=\"{{i}}\">\r\n                    <!-- <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"item_id\">\r\n                          <option value=\"\">Select item</option>\r\n                          <option *ngFor=\"let option of scraps_items\" [value]=\"option._id\"> {{option.name}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </td> -->\r\n                    <td>\r\n                      <div class=\"input-group ngs\">\r\n                        <div class=\"col-md-12\">\r\n                          <ng-select [items]=\"scraps_items\" appendTo=\".card-body\" class=\"form-control\" style=\"width:250px !important;\" placeholder=\"Type and search items\" bindLabel=\"name\" bindValue=\"_id\"\r\n                          formControlName=\"item_id\">\r\n                        </ng-select>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"unit\">\r\n                          <option value=\"\">Select units</option>\r\n                          <option *ngFor=\"let option of unit_option\" [value]=\"option\"> {{option}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\"  formControlName=\"qty\"\r\n                        class=\"form-control qty\">\r\n                    </td>\r\n\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"price\" class=\"form-control price\">\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"godown\">\r\n                          <option value=\"\">Select godown</option>\r\n                          <option *ngFor=\"let g of scraps_godowns\" [value]=\"g.godown\"> {{g.godown}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"total\" class=\"form-control total\">\r\n                    </td>\r\n                    <td>\r\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"ssForm.controls?.scraps_items.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\r\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <div class=\"card-body\" *ngIf=\"ssForm.controls?.scraps_items.controls.length == 0\">\r\n                <p>Please select vendor</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-3\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-lg-6 col-md-6\">\r\n              <label class=\"\">Narration</label>\r\n              <input type=\"text\" formControlName=\"narration\" class=\"form-control\" placeholder=\"Please enter narration\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"\">Net Amt</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"net_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"\">Rounded off</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"rounded_off\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label>Round of Type</label>\r\n              <select class=\"form-control\" formControlName=\"round_off_type\">\r\n                <option>Please select site</option>\r\n                <option value=\"plus\">Plus</option>\r\n                <option value=\"minus\">Minus</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"\">Total</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"total_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!ssForm.valid || process == 'saving'\" type=\"button\">\r\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/inventory/add-scrap-sale/add-scrap-sale.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/inventory/add-scrap-sale/add-scrap-sale.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  overflow-x: scroll;\n  width: 100%;\n  display: block; }\n  table select {\n    width: 150px; }\n  table .unit {\n    width: 70px; }\n  table .qty {\n    width: 70px; }\n  table .price {\n    width: 120px; }\n  table .godown {\n    width: 70px; }\n  table .total {\n    width: 170px; }\n  ::ng-deep .ng-dropdown-panel {\n  margin-top: 40px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2ludmVudG9yeS9hZGQtc2NyYXAtc2FsZS9EOlxcdGVzdGluZ19mb2xkZXJcXHRoaXJ1XFxmcm9udGVuZFxcdGRfZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcaW52ZW50b3J5XFxhZGQtc2NyYXAtc2FsZVxcYWRkLXNjcmFwLXNhbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWMsRUFBQTtFQUhsQjtJQUtRLFlBQ0osRUFBQTtFQU5KO0lBUVEsV0FDSixFQUFBO0VBVEo7SUFXUSxXQUNKLEVBQUE7RUFaSjtJQWNRLFlBQ0osRUFBQTtFQWZKO0lBaUJRLFdBQ0osRUFBQTtFQWxCSjtJQW9CUSxZQUNKLEVBQUE7RUFFRjtFQUNFLDJCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2ludmVudG9yeS9hZGQtc2NyYXAtc2FsZS9hZGQtc2NyYXAtc2FsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweFxyXG4gICAgfVxyXG4gICAgLnVuaXQge1xyXG4gICAgICAgIHdpZHRoOiA3MHB4XHJcbiAgICB9XHJcbiAgICAucXR5IHtcclxuICAgICAgICB3aWR0aDogNzBweFxyXG4gICAgfVxyXG4gICAgLnByaWNle1xyXG4gICAgICAgIHdpZHRoOiAxMjBweFxyXG4gICAgfVxyXG4gICAgLmdvZG93bntcclxuICAgICAgICB3aWR0aDogNzBweFxyXG4gICAgfVxyXG4gICAgLnRvdGFse1xyXG4gICAgICAgIHdpZHRoOiAxNzBweFxyXG4gICAgfVxyXG4gIH1cclxuICA6Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgIG1hcmdpbi10b3AgOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/inventory/add-scrap-sale/add-scrap-sale.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/inventory/add-scrap-sale/add-scrap-sale.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddScrapSaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddScrapSaleComponent", function() { return AddScrapSaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddScrapSaleComponent = /** @class */ (function () {
    function AddScrapSaleComponent(fb, metaService, ms, is, ds, router) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.is = is;
        this.ds = ds;
        this.router = router;
        this.unit_option = _parameters__WEBPACK_IMPORTED_MODULE_4__["itemUnits"];
        this.currentDate = new Date();
        this.loading = false;
        this.usertype = this.metaService.getSiteFromStorage().role;
        this.site_name = this.metaService.getSiteFromStorage().site;
        var current = new Date();
        this.minDate = {
            year: current.getFullYear(),
            month: current.getMonth() + 1,
            day: current.getDate()
        };
    }
    AddScrapSaleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bsConfig = Object.assign({}, { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
        this.buildForm();
        this.ssForm.controls.scraps_items.valueChanges.subscribe(function (changes) {
            _this.updateValues();
        });
        this.getOptions();
        this.getSites();
    };
    AddScrapSaleComponent.prototype.buildForm = function () {
        this.ssForm = this.fb.group({
            'site': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'ss_type': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'ss_number': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'ss_date': [{ year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() }],
            'issuedby': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'vendor': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'department': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'scraps_items': this.fb.array([]),
            'narration': [''],
            'net_amount': [''],
            'rounded_off': [''],
            'round_off_type': [''],
            'total_amount': ['']
        });
        this.addSsitems();
    };
    AddScrapSaleComponent.prototype.initItems = function () {
        return this.fb.group({
            'name': [''],
            'item_id': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'unit': [''],
            'qty': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'price': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'godown': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'total': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    AddScrapSaleComponent.prototype.addSsitems = function () {
        var control = this.ssForm.controls['scraps_items'];
        control.push(this.initItems());
    };
    AddScrapSaleComponent.prototype.removeItems = function (i) {
        var control = this.ssForm.controls['scraps_items'];
        control.removeAt(i);
    };
    AddScrapSaleComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var scraps_items = this.ssForm.controls['scraps_items'].value;
        var index = scraps_items.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    AddScrapSaleComponent.prototype.save = function () {
        var _this = this;
        var ss_date;
        if (this.ssForm.controls['ss_date'].value) {
            var dt = this.ssForm.controls['ss_date'].value.year + '-' +
                this.ssForm.controls['ss_date'].value.month + '-' +
                this.ssForm.controls['ss_date'].value.day;
            ss_date = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            ss_date = moment().format();
        }
        this.process = 'saving';
        var data = this.ssForm.value;
        data.ss_date = ss_date;
        console.log('Scrap Sale >> Save', this.ssForm.value);
        this.is.addSs(this.ssForm.value).subscribe(function (ssInfo) {
            _this.process = 'done';
            _this.router.navigate(['/inventory/scrap-sale']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddScrapSaleComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                _this.ssForm.controls['site'].setValue(_this.siteOptions[0].branch_name);
            }
            else {
                _this.ssForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    AddScrapSaleComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getSites().subscribe(function (siteInfo) {
            _this.siteOptions = siteInfo;
        });
        this.metaService.getDeptList().subscribe(function (trackInfo) {
            _this.dept_option = trackInfo['result'];
        });
        this.ms.getVendorMasterList().subscribe(function (siteInfo) {
            _this.vendor_option = siteInfo['result'];
        });
        this.metaService.getIssuedbyList().subscribe(function (trackInfo) {
            _this.issuedby_option = trackInfo['result'];
        });
        this.ms.getItemMaster().subscribe(function (trackInfo) {
            _this.scraps_items = trackInfo['records'];
        });
        // this.ms.getScrapLedgerItemsList().subscribe(trackInfo => {
        //   this.scraps_items = trackInfo['records'];
        //   console.log('Scrap ItemsList >>>>>', this.scraps_items);
        // });
        this.ds.getGodownList().subscribe(function (res) {
            _this.scraps_godowns = res;
        });
    };
    AddScrapSaleComponent.prototype.updateValues = function () {
        var net_price = 0;
        var control = this.ssForm.controls['scraps_items'];
        var _loop_1 = function () {
            var values = control.controls[intial_val].value;
            var item_mater_data = this_1.scraps_items.find(function (item) { return item['_id'] == values['item_id']; });
            var qty = values['qty'] ? values['qty'] : item_mater_data ? 0 : 0;
            // const price = values['price'] ? values['price'] : item_mater_data ? parseFloat(item_mater_data['rate']) : 0;
            var price = values['price'] ? values['price'] : item_mater_data ? 0 : 0;
            var original_price = qty * price;
            var total = original_price;
            var unit = values['unit'] ? values['unit'] : item_mater_data ? item_mater_data.unit : '';
            // Tax calculation ends here
            control.controls[intial_val].patchValue({
                unit: unit,
                price: price,
                name: item_mater_data ? item_mater_data.name : '',
                qty: qty,
                total: total.toFixed(5)
            }, { emitEvent: false });
            net_price += total;
        };
        var this_1 = this;
        for (var intial_val = 0; intial_val < control.length; intial_val++) {
            _loop_1();
        }
        this.ssForm.patchValue({
            'net_amount': net_price,
            'rounded_off': net_price,
            'total_amount': net_price
        }, { emitEvent: false });
    };
    // public generateSsNumber() {
    //   const ss_type = this.ssForm.controls.ss_type.value;
    //   this.is.getSsNumberDetails(ss_type).subscribe(ssInfo => {
    //     this.ssForm.controls.ss_number.setValue(ssInfo['count'] + 1);
    //   }, error => { console.log(error);
    //    });
    // }
    AddScrapSaleComponent.prototype.generateSsNumber = function () {
        var _this = this;
        var ss_type = this.ssForm.controls.ss_type.value;
        var site = this.ssForm.controls.site.value;
        if (site && ss_type) {
            var matchCond = { site: site, ss_type: ss_type };
            console.log('mathCond >>', matchCond);
            this.is.getSsNumberDetails(matchCond).subscribe(function (ssInfo) {
                _this.ssForm.controls.ss_number.setValue(ssInfo['count'] + 1);
            }, function (error) {
                console.log(error);
            });
        }
    };
    AddScrapSaleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-scrap-sale',
            template: __webpack_require__(/*! ./add-scrap-sale.component.html */ "./src/app/layout/inventory/add-scrap-sale/add-scrap-sale.component.html"),
            styles: [__webpack_require__(/*! ./add-scrap-sale.component.scss */ "./src/app/layout/inventory/add-scrap-sale/add-scrap-sale.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_5__["InventoryService"],
            src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AddScrapSaleComponent);
    return AddScrapSaleComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/edit-item-master/edit-item-master.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/inventory/edit-item-master/edit-item-master.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"itemsForm\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Edit Item Master</div>\r\n      <div class=\"card-body\">\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"mt-3\">\r\n            <div class=\"form-group row\">\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"required\" >Product Type</label>\r\n                <ng-select [items]=\"producttypes\" placeholder=\"Type and search Product Type\" bindLabel=\"name\" bindValue=\"name\"\r\n                formControlName=\"type\">\r\n              </ng-select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <label class=\"required\">Name</label>\r\n              <input type=\"text\" formControlName=\"name\" class=\"form-control\"\r\n                placeholder=\"Item Name\">\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <label class=\"\">Description</label>\r\n              <input type=\"text\" formControlName=\"pdescription\" class=\"form-control\"\r\n                placeholder=\"Product Descriptin\">\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"required\" >Item Category</label>\r\n                <ng-select [items]=\"itemcategorys\" placeholder=\"Type and search Item Category\" bindLabel=\"name\" bindValue=\"name\"\r\n                formControlName=\"itemcategory\">\r\n              </ng-select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"required\" >Item Type</label>\r\n                <ng-select [items]=\"itemtypes\" placeholder=\"Type and search Item Type\" bindLabel=\"name\" bindValue=\"name\"\r\n                formControlName=\"itemtype\">\r\n              </ng-select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"required\" >Unit</label>\r\n                <ng-select [items]=\"units\" placeholder=\"Type and search Unit\" bindLabel=\"name\" bindValue=\"name\"\r\n                formControlName=\"unit\">\r\n              </ng-select>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"required\" >Godown</label>\r\n                <ng-select [items]=\"godowns\" placeholder=\"Type and search Godown\" bindLabel=\"name\" bindValue=\"name\"\r\n                formControlName=\"godown\">\r\n              </ng-select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <label class=\"\">Opening Quantity</label>\r\n              <input type=\"text\" formControlName=\"oq\" class=\"form-control\"\r\n                placeholder=\"Opening Qty\">\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <label class=\"\">Rate</label>\r\n              <input type=\"text\" formControlName=\"rate\" class=\"form-control\"\r\n                placeholder=\"Rate\">\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <label class=\"\">Value</label>\r\n              <input type=\"text\" formControlName=\"value\" class=\"form-control\"\r\n                placeholder=\"Value\">\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"required\" >HSN Code</label>\r\n                <ng-select [items]=\"HSNcodes\" placeholder=\"Type and search HSN Code\" bindLabel=\"name\" bindValue=\"name\"\r\n                formControlName=\"hsncode\">\r\n              </ng-select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <label class=\"\">GST</label>\r\n              <input type=\"text\" formControlName=\"gst\" class=\"form-control\"\r\n                placeholder=\"GST\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n       </div>\r\n      </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button class=\"btn btn-success float-right\" (click)=\"saveitems()\" [disabled]=\"!itemsForm.valid || process == 'saving'\" type=\"button\">\r\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/inventory/edit-item-master/edit-item-master.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/inventory/edit-item-master/edit-item-master.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbnZlbnRvcnkvZWRpdC1pdGVtLW1hc3Rlci9lZGl0LWl0ZW0tbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/inventory/edit-item-master/edit-item-master.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/inventory/edit-item-master/edit-item-master.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditItemMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemMasterComponent", function() { return EditItemMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
/* harmony import */ var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditItemMasterComponent = /** @class */ (function () {
    function EditItemMasterComponent(fb, metaService, ms, is, ds, router, aroute) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.is = is;
        this.ds = ds;
        this.router = router;
        this.aroute = aroute;
        this.itemcategorys = [];
        this.units = [];
        this.godowns = [];
        this.HSNcodes = [];
        this.producttypes = [];
        this.itemtypes = [];
    }
    EditItemMasterComponent.prototype.ngOnInit = function () {
        this.itemsDetails = this.aroute.snapshot.data['items_details'];
        console.log(this.itemsDetails);
        this.buildForm();
        this.getOptions();
    };
    EditItemMasterComponent.prototype.buildForm = function () {
        this.itemsForm = this.fb.group({
            'type': [this.itemsDetails.type],
            'name': [this.itemsDetails.name],
            'pdescription': [this.itemsDetails.pdescription],
            'itemcategory': [this.itemsDetails.itemcategory, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'itemtype': [this.itemsDetails.itemtype, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'unit': [this.itemsDetails.unit, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'godown': [this.itemsDetails.godown, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'oq': [this.itemsDetails.oq],
            'rate': [this.itemsDetails.rate],
            'value': [this.itemsDetails.value],
            'hsncode': [this.itemsDetails.hsncode],
            'gst': [this.itemsDetails.gst]
        });
    };
    EditItemMasterComponent.prototype.saveitems = function () {
        var _this = this;
        this.process = 'saving';
        this.is.updatItemMaster(this.itemsDetails['_id'], this.itemsForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/inventory/items-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditItemMasterComponent.prototype.getOptions = function () {
        var _this = this;
        this.ds.getProducttypeList().subscribe(function (trackInfo) {
            _this.producttypes = trackInfo['result'];
        });
        this.ds.getItemtypeList().subscribe(function (trackInfo) {
            _this.itemtypes = trackInfo['result'];
        });
        this.ds.getUnitList().subscribe(function (trackInfo) {
            _this.units = trackInfo['result'];
        });
        this.ds.getItemCategoryList().subscribe(function (trackInfo) {
            _this.itemcategorys = trackInfo['result'];
        });
        this.ds.getGodownList().subscribe(function (trackInfo) {
            _this.godowns = trackInfo['result'];
        });
        this.ds.getHSNcodeList().subscribe(function (trackInfo) {
            _this.HSNcodes = trackInfo['result'];
        });
    };
    EditItemMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-item-master',
            template: __webpack_require__(/*! ./edit-item-master.component.html */ "./src/app/layout/inventory/edit-item-master/edit-item-master.component.html"),
            styles: [__webpack_require__(/*! ./edit-item-master.component.scss */ "./src/app/layout/inventory/edit-item-master/edit-item-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_4__["InventoryService"],
            src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], EditItemMasterComponent);
    return EditItemMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/edit-material-issue/edit-material-issue.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/inventory/edit-material-issue/edit-material-issue.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"miForm\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Edit Material Issue</div>\r\n      <div class=\"card-body\">\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Site</label>\r\n            <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\r\n              formControlName=\"site\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">MI type</label>\r\n            <select class=\"form-control\" formControlName=\"mi_type\" (change)=\"generateMiNumber()\">\r\n              <option value=\"\">Select MI type</option>\r\n              <option value=\"Issue\">Issue</option>\r\n              <option value=\"Issue Return\">Issue Return</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-lg-2 col-md-2\">\r\n            <label class=\"required\">Issue no</label>\r\n            <input disabled type=\"text\" formControlName=\"mi_number\" class=\"form-control\">\r\n          </div>\r\n\r\n          <div class=\"col-lg-2 col-md-2\">\r\n            <label class=\"required\">Issue date</label>\r\n            <div class=\"input-group datepicker-input\">\r\n              <input\r\n                class=\"form-control\"\r\n                placeholder=\"dd-mm-yyyy\"\r\n                name=\"dp2\"\r\n                formControlName=\"mi_date\"\r\n                ngbDatepicker\r\n                #d2=\"ngbDatepicker\"\r\n              />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-lg-2 col-md-2\">\r\n            <label>KM Reading</label>\r\n            <input type=\"text\" formControlName=\"mcreading\" class=\"form-control\" placeholder=\"KM Reading\">\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Issued By</label>\r\n            <select class=\"form-control\" formControlName=\"issuedby\">\r\n              <option value=\"\">Select Issued By</option>\r\n              <option *ngFor=\"let i of issuedby_option\" [value]=\"i.issuedby\"> {{i.issuedby}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Issued For</label>\r\n            <select class=\"form-control\" formControlName=\"issuedfor\">\r\n              <option value=\"\">Select Issued For</option>\r\n              <option value=\"Maintenance\">Maintenance</option>\r\n              <option value=\"Tyre\">Tyre</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Department</label>\r\n            <ng-select [items]=\"dept_option\" placeholder=\"Type and search Department\" bindLabel=\"name\" bindValue=\"name\"\r\n              formControlName=\"department\">\r\n            </ng-select>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Material Issue items\r\n                <button class=\"btn btn-primary float-right\" (click)=\"addMiItems()\" [disabled]=\"!miForm.valid\"\r\n                  type=\"button\">\r\n                  Add Item\r\n                </button>\r\n              </div>\r\n              <!-- /.box-header -->\r\n              <div class=\"card-body\" *ngIf=\"miForm.controls.materiali_items.controls.length > 0\">\r\n                <table class=\"table table-bordered\" formArrayName=\"materiali_items\">\r\n                  <tr>\r\n                    <th>Item</th>\r\n                    <th>Unit</th>\r\n                    <th>Godown</th>\r\n                    <th>Qty</th>\r\n                    <th>Price(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                    <th>Amount(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                    <th>Refund</th>\r\n                    <th>Material Type</th>\r\n                    <th>RefQty</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                  <tr *ngFor=\"let school of miForm.controls.materiali_items.controls; let i=index\" formGroupName=\"{{i}}\">\r\n                    <td>\r\n                      <div class=\"input-group ngs\">\r\n                        <div class=\"col-md-12\">\r\n                          <ng-select [items]=\"materiali_items\" appendTo=\".card-body\" class=\"form-control\" style=\"width:250px !important;\" placeholder=\"Type and search items\" bindLabel=\"name\" bindValue=\"_id\"\r\n                          formControlName=\"item_id\">\r\n                        </ng-select>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"unit\">\r\n                          <option value=\"\">Select units</option>\r\n                          <option *ngFor=\"let option of unit_option\" [value]=\"option\"> {{option}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"godown\">\r\n                          <option value=\"\">Select godown</option>\r\n                          <option *ngFor=\"let g of materiali_godowns\" [value]=\"g.godown\"> {{g.godown}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\"  formControlName=\"qty\"\r\n                        class=\"form-control qty\">\r\n                    </td>\r\n\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"price\" class=\"form-control price\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"total\" class=\"form-control total\">\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"refund\">\r\n                          <option value=\"No\">No</option>\r\n                          <option value=\"Yes\">Yes</option>\r\n                        </select>\r\n                        </div>\r\n                    </td>\r\n\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"mat_type\">\r\n                          <option value=\"\">Material Type</option>\r\n                          <option value=\"Job\">Job</option>\r\n                          <option value=\"Scrap\">Scrap</option>\r\n                        </select>\r\n                        </div>\r\n                    </td>\r\n\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"ref_qty\"  class=\"form-control refqty\">\r\n                    </td>\r\n                    <td>\r\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"miForm.controls?.materiali_items.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\r\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <!-- <div class=\"card-body\" *ngIf=\"miForm.controls?.materiali_items.controls.length == 0\">\r\n                <p>Please select vendor</p>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mt-3\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-lg-6 col-md-6\">\r\n              <label class=\"\">Narration</label>\r\n              <input type=\"text\" formControlName=\"narration\" class=\"form-control\" placeholder=\"Please enter narration\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"\">Net Amt</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"net_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"\">Rounded off</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"rounded_off\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"required\">Round of Type</label>\r\n              <select class=\"form-control\" formControlName=\"round_off_type\">\r\n                <option>Please select site</option>\r\n                <option value=\"plus\">Plus</option>\r\n                <option value=\"minus\">Minus</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"\">Total</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"total_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button class=\"btn btn-success float-right\" (click)=\"saveMi()\" [disabled]=\"!miForm.valid || process == 'saving'\" type=\"button\">\r\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/inventory/edit-material-issue/edit-material-issue.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/inventory/edit-material-issue/edit-material-issue.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  overflow-x: scroll;\n  width: 100%;\n  display: block; }\n  table select {\n    width: 150px; }\n  table .unit {\n    width: 70px; }\n  table .qty {\n    width: 70px; }\n  table .price {\n    width: 70px; }\n  table .refund {\n    width: 70px; }\n  table .mat_type {\n    width: 70px; }\n  table .ref_qty {\n    width: 120px; }\n  table .godown {\n    width: 70px; }\n  table .total {\n    width: 120px; }\n  ::ng-deep .ng-dropdown-panel {\n  margin-top: 40px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2ludmVudG9yeS9lZGl0LW1hdGVyaWFsLWlzc3VlL0Q6XFx0ZXN0aW5nX2ZvbGRlclxcdGhpcnVcXGZyb250ZW5kXFx0ZF9mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxpbnZlbnRvcnlcXGVkaXQtbWF0ZXJpYWwtaXNzdWVcXGVkaXQtbWF0ZXJpYWwtaXNzdWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWMsRUFBQTtFQUhsQjtJQUtRLFlBQ0osRUFBQTtFQU5KO0lBUVEsV0FDSixFQUFBO0VBVEo7SUFXUSxXQUNKLEVBQUE7RUFaSjtJQWNRLFdBQ0osRUFBQTtFQWZKO0lBaUJRLFdBQ0osRUFBQTtFQWxCSjtJQW9CUSxXQUNKLEVBQUE7RUFyQko7SUF1QlEsWUFDSixFQUFBO0VBeEJKO0lBMEJRLFdBQ0osRUFBQTtFQTNCSjtJQTZCUSxZQUNKLEVBQUE7RUFJRjtFQUNJLDJCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2ludmVudG9yeS9lZGl0LW1hdGVyaWFsLWlzc3VlL2VkaXQtbWF0ZXJpYWwtaXNzdWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgc2VsZWN0IHtcclxuICAgICAgICB3aWR0aDogMTUwcHhcclxuICAgIH1cclxuICAgIC51bml0IHtcclxuICAgICAgICB3aWR0aDogNzBweFxyXG4gICAgfVxyXG4gICAgLnF0eSB7XHJcbiAgICAgICAgd2lkdGg6IDcwcHhcclxuICAgIH1cclxuICAgIC5wcmljZXtcclxuICAgICAgICB3aWR0aDogNzBweFxyXG4gICAgfVxyXG4gICAgLnJlZnVuZHtcclxuICAgICAgICB3aWR0aDogNzBweFxyXG4gICAgfVxyXG4gICAgLm1hdF90eXBle1xyXG4gICAgICAgIHdpZHRoOiA3MHB4XHJcbiAgICB9XHJcbiAgICAucmVmX3F0eSB7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4XHJcbiAgICB9XHJcbiAgICAuZ29kb3due1xyXG4gICAgICAgIHdpZHRoOiA3MHB4XHJcbiAgICB9XHJcbiAgICAudG90YWx7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICAgIG1hcmdpbi10b3AgOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/inventory/edit-material-issue/edit-material-issue.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/inventory/edit-material-issue/edit-material-issue.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EditMaterialIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMaterialIssueComponent", function() { return EditMaterialIssueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditMaterialIssueComponent = /** @class */ (function () {
    function EditMaterialIssueComponent(fb, metaService, ms, is, ds, aroute, router) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.is = is;
        this.ds = ds;
        this.aroute = aroute;
        this.router = router;
        this.unit_option = _parameters__WEBPACK_IMPORTED_MODULE_4__["itemUnits"];
        this.currentDate = new Date();
        this.loading = false;
        this.usertype = this.metaService.getSiteFromStorage().role;
        this.site_name = this.metaService.getSiteFromStorage().site;
        var current = new Date();
        this.minDate = {
            year: current.getFullYear(),
            month: current.getMonth() + 1,
            day: current.getDate()
        };
    }
    EditMaterialIssueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.miDetails = this.aroute.snapshot.data['mi_details'];
        this.bsConfig = Object.assign({}, { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
        this.buildForm();
        this.miForm.controls.materiali_items.valueChanges.subscribe(function (changes) {
            _this.updateValues();
        });
        this.getOptions();
        // this.getSites();
    };
    EditMaterialIssueComponent.prototype.buildForm = function () {
        var _this = this;
        this.miForm = this.fb.group({
            'mi_date': [{ year: new Date(this.miDetails.mi_date).getFullYear(), month: new Date(this.miDetails.mi_date).getMonth() + 1, day: new Date(this.miDetails.mi_date).getDate() }],
            'site': [this.miDetails.site],
            'mi_type': [this.miDetails.mi_type, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mi_number': [this.miDetails.mi_number, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'issuedby': [this.miDetails.issuedby, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'issuedfor': [this.miDetails.issuedfor, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'department': [this.miDetails.department, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mcreading': [this.miDetails.mcreading],
            'materiali_items': this.fb.array([]),
            'narration': [this.miDetails.narration],
            'net_amount': [this.miDetails.net_amount],
            'rounded_off': [this.miDetails.rounded_off],
            'round_off_type': [this.miDetails.round_off_type],
            'total_amount': [this.miDetails.total_amount]
        });
        // this.addMaterialreceiptItems()
        this.miDetails.materiali_items.forEach(function (element) {
            var control = _this.miForm.controls['materiali_items'];
            control.push(_this.initItemsData(element));
        });
    };
    EditMaterialIssueComponent.prototype.initItemsData = function (data) {
        return this.fb.group({
            'name': [data.name],
            'item_id': [data.item_id, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'unit': [data.unit],
            'qty': [data.qty, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'price': [data.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'refund': [data.refund, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mat_type': [data.mat_type],
            'ref_qty': [data.ref_qty],
            'total': [data.total, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'godown': [data.godown, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    EditMaterialIssueComponent.prototype.initItems = function () {
        return this.fb.group({
            'name': [''],
            'item_id': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'unit': [''],
            'qty': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'price': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'refund': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mat_type': [''],
            'ref_qty': [0],
            'total': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'godown': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    EditMaterialIssueComponent.prototype.addMiItems = function () {
        var control = this.miForm.controls['materiali_items'];
        control.push(this.initItems());
    };
    EditMaterialIssueComponent.prototype.removeItems = function (i) {
        var control = this.miForm.controls['materiali_items'];
        control.removeAt(i);
    };
    EditMaterialIssueComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var materiali_items = this.miForm.controls['materiali_items'].value;
        var index = materiali_items.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    EditMaterialIssueComponent.prototype.saveMi = function () {
        var _this = this;
        var mi_date;
        if (this.miForm.controls['mi_date'].value) {
            var dt = this.miForm.controls['mi_date'].value.year + '-' +
                this.miForm.controls['mi_date'].value.month + '-' +
                this.miForm.controls['mi_date'].value.day;
            mi_date = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            mi_date = moment().format();
        }
        this.process = 'saving';
        var data = this.miForm.value;
        data.mi_date = mi_date;
        console.log('Edit Issue Saving', this.miDetails);
        this.is.updatMi(this.miDetails['_id'], this.miForm.value).subscribe(function (miInfo) {
            _this.process = 'done';
            _this.router.navigate(['/inventory/material-issue']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditMaterialIssueComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                _this.miForm.controls['site'].setValue(_this.siteOptions[0].branch_name);
            }
            else {
                _this.miForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    EditMaterialIssueComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getDeptList().subscribe(function (trackInfo) {
            _this.dept_option = trackInfo['result'];
        });
        // this.metaService.getSites().subscribe(siteInfo => {
        //   this.siteOptions = siteInfo;
        // });
        this.metaService.getIssuedbyList().subscribe(function (trackInfo) {
            _this.issuedby_option = trackInfo['result'];
        });
        this.ms.getItemMaster().subscribe(function (trackInfo) {
            _this.materiali_items = trackInfo['records'];
        });
        this.ds.getGodownList().subscribe(function (res) {
            _this.materiali_godowns = res;
        });
    };
    EditMaterialIssueComponent.prototype.updateValues = function () {
        var net_price = 0;
        var control = this.miForm.controls['materiali_items'];
        var _loop_1 = function () {
            var values = control.controls[intial_val].value;
            var item_mater_data = this_1.materiali_items.find(function (item) { return item['_id'] == values['item_id']; });
            var qty = values['qty'] ? values['qty'] : item_mater_data ? 1 : 0;
            var unit = values['unit'] ? values['unit'] : item_mater_data ? item_mater_data.unit : '';
            var price = values['price'] ? values['price'] : item_mater_data ? parseFloat(item_mater_data['rate']) : 0;
            var original_price = qty * price;
            var total = original_price;
            // Tax calculation ends here
            control.controls[intial_val].patchValue({
                unit: unit,
                price: price,
                name: item_mater_data ? item_mater_data.name : '',
                qty: qty,
                total: total.toFixed(5)
            }, { emitEvent: false });
            net_price += total;
        };
        var this_1 = this;
        for (var intial_val = 0; intial_val < control.length; intial_val++) {
            _loop_1();
        }
        this.miForm.patchValue({
            'net_amount': net_price,
            'rounded_off': net_price,
            'total_amount': net_price
        }, { emitEvent: false });
    };
    // public generateMiNumber() {
    //   const mi_type = this.miForm.controls.mi_type.value;
    //   this.is.getMiNumberDetails(mi_type).subscribe(miInfo => {
    //     this.miForm.controls.mi_number.setValue(miInfo['count'] + 1);
    //   }, error => { console.log(error); });
    // }
    EditMaterialIssueComponent.prototype.generateMiNumber = function () {
        var _this = this;
        var mi_type = this.miForm.controls.mi_type.value;
        var site = this.miForm.controls.site.value;
        if (site && mi_type) {
            var matchCond = { site: site, mi_type: mi_type };
            console.log('mathCond >>', matchCond);
            this.is.getMiNumberDetails(matchCond).subscribe(function (mrInfo) {
                _this.miForm.controls.mi_number.setValue(mrInfo['count'] + 1);
            }, function (error) {
                console.log(error);
            });
        }
    };
    EditMaterialIssueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-material-issue',
            template: __webpack_require__(/*! ./edit-material-issue.component.html */ "./src/app/layout/inventory/edit-material-issue/edit-material-issue.component.html"),
            styles: [__webpack_require__(/*! ./edit-material-issue.component.scss */ "./src/app/layout/inventory/edit-material-issue/edit-material-issue.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_5__["InventoryService"],
            src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], EditMaterialIssueComponent);
    return EditMaterialIssueComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/edit-material-receipt/edit-material-receipt.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/inventory/edit-material-receipt/edit-material-receipt.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"mrForm\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Edit Material Receipt</div>\r\n      <div class=\"card-body\">\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Site</label>\r\n            <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\r\n              formControlName=\"site\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">MR type</label>\r\n            <select class=\"form-control\" formControlName=\"mr_type\" (change)=\"generateMrNumber()\">\r\n              <option value=\"\">Select MR type</option>\r\n              <option value=\"Material Receipt\">Material Receipt</option>\r\n              <option value=\"Material Return\">Material Return</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">MR no</label>\r\n            <input disabled type=\"text\" formControlName=\"mr_number\" class=\"form-control\" placeholder=\"\">\r\n          </div>\r\n\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">MR date</label>\r\n            <div class=\"input-group datepicker-input\">\r\n              <input\r\n                class=\"form-control\"\r\n                placeholder=\"dd-mm-yyyy\"\r\n                name=\"dp2\"\r\n                formControlName=\"mr_date\"\r\n                ngbDatepicker\r\n                #d2=\"ngbDatepicker\"\r\n              />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- <div class=\"col-md-3\">\r\n            <label class=\"required\">MR date</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" #mr=\"bsDatepicker\" [bsConfig]=\"{ containerClass: 'theme-blue', 'dateInputFormat': 'DD-MM-YYYY', 'showWeekNumbers': false, 'minDate': currentDate }\" bsDatepicker formControlName=\"mr_date\"\r\n                class=\"form-control\">\r\n              <div class=\"input-group-prepend\" (click)=\"mr.toggle()\">\r\n                <span class=\"input-group-text\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n\r\n\r\n          <!-- <div class=\"col-md-3\">\r\n            <label class=\"required\">MR date</label>\r\n            <div class=\"input-group datepicker-input\">\r\n              <input\r\n                class=\"form-control\"\r\n                placeholder=\"dd-mm-yyyy\"\r\n                name=\"dp2\"\r\n                formControlName=\"mr_date\"\r\n                ngbDatepicker\r\n                #d2=\"ngbDatepicker\"\r\n              />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Receipt type</label>\r\n            <select class=\"form-control\" formControlName=\"rec_type\">\r\n              <option value=\"\">Select Receipt type</option>\r\n              <option value=\"Direct\">Direct</option>\r\n              <option value=\"Job Order\">Job Order</option>\r\n              <option value=\"Purchase Order\">Purchase Order</option>\r\n              <option value=\"Scrap\">Scrap</option>\r\n              <option value=\"Stock Transfer\">Stock Transfer</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Godown</label>\r\n            <select class=\"form-control\" formControlName=\"godown\">\r\n              <option value=\"\">Select Godown</option>\r\n              <option *ngFor=\"let g of godowns\" value=\"{{ g.godown }}\">\r\n                {{ g.godown }}\r\n            </select>\r\n          </div>\r\n\r\n        <!-- </div>\r\n        <div class=\"form-group row\"> -->\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Vendor</label>\r\n            <ng-select [items]=\"vendor_option\" placeholder=\"Type and search vendor\" bindLabel=\"name\" bindValue=\"name\"\r\n              formControlName=\"vendor\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Department</label>\r\n            <ng-select [items]=\"dept_option\" placeholder=\"Type and search Department\" bindLabel=\"name\" bindValue=\"name\"\r\n              formControlName=\"department\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"\">Invoice No</label>\r\n            <input type=\"text\" formControlName=\"invno\" class=\"form-control\" placeholder=\"Invoice No\">\r\n          </div>\r\n\r\n          <!-- <div class=\"col-md-3\">\r\n            <label>Invoice date</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" #id=\"bsDatepicker\" [bsConfig]=\"{ containerClass: 'theme-blue', 'dateInputFormat': 'DD-MM-YYYY', 'showWeekNumbers': false, 'minDate': currentDate }\" bsDatepicker formControlName=\"invdate\"\r\n                class=\"form-control\">\r\n              <div class=\"input-group-prepend\" (click)=\"id.toggle()\">\r\n                <span class=\"input-group-text\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n\r\n          <div class=\"col-md-3\">\r\n            <label>Invoice date</label>\r\n            <div class=\"input-group datepicker-input\">\r\n              <input\r\n                class=\"form-control\"\r\n                placeholder=\"dd-mm-yyyy\"\r\n                name=\"dp3\"\r\n                formControlName=\"invdate\"\r\n                ngbDatepicker\r\n                #d3=\"ngbDatepicker\"\r\n              />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d3.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"\">Po No. / Job No.</label>\r\n            <input type=\"text\" formControlName=\"pjno\" class=\"form-control\" placeholder=\"Po.No / Job No.\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Material Receipt items\r\n                <button class=\"btn btn-primary float-right\" (click)=\"addMrItems()\" [disabled]=\"!mrForm.valid\"\r\n                  type=\"button\">\r\n                  Add Item\r\n                </button>\r\n              </div>\r\n              <!-- /.box-header -->\r\n              <div class=\"card-body\" *ngIf=\"mrForm.controls.materialr_items.controls.length > 0\">\r\n                <table class=\"table table-bordered\" formArrayName=\"materialr_items\">\r\n                  <tr>\r\n                    <th>Item</th>\r\n                    <th>Unit</th>\r\n                    <th>Qty</th>\r\n                    <th>Price(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                    <th>Dis(%)</th>\r\n                    <th>CGST(%)</th>\r\n                    <th>SGST(%)</th>\r\n                    <th>IGST(%)</th>\r\n                    <th>Amount(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                  <tr *ngFor=\"let school of mrForm.controls.materialr_items.controls; let i=index\" formGroupName=\"{{i}}\">\r\n                    <td>\r\n                      <div class=\"input-group ngs\">\r\n                        <div class=\"col-md-12\">\r\n                          <ng-select [items]=\"materialr_items\" appendTo=\".card-body\" class=\"form-control\" style=\"width:250px !important;\" placeholder=\"Type and search items\" bindLabel=\"name\" bindValue=\"_id\"\r\n                          formControlName=\"item_id\">\r\n                        </ng-select>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"unit\">\r\n                          <option value=\"\">Please select units</option>\r\n                          <option *ngFor=\"let option of unit_option\" [value]=\"option\"> {{option}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\"  formControlName=\"qty\"\r\n                        class=\"form-control qty\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"price\" class=\"form-control price\">\r\n\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"discount\"  class=\"form-control discount\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\"  formControlName=\"cgst\" class=\"form-control discount\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"sgst\"  class=\"form-control discount\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\"  formControlName=\"igst\" class=\"form-control discount\">\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"total\" class=\"form-control total\">\r\n\r\n                    </td>\r\n                    <td>\r\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"mrForm.controls?.materialr_items.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\r\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <div class=\"card-body\" *ngIf=\"mrForm.controls?.materialr_items.controls.length == 0\">\r\n                <p>Please select vendor</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-3\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-lg-6 col-md-6\">\r\n              <label class=\"\">Narration</label>\r\n              <input type=\"text\" formControlName=\"narration\" class=\"form-control\" placeholder=\"Please enter narration\">\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"\">Gross Amt</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"gross_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"\">CGST Amt</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"cgst_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"\">SGST Amt</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"sgst_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"\">IGST Amt</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"igst_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"\">Net Amt</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"net_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"\">Rounded off</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"rounded_off\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"required\">Round of Type</label>\r\n              <select class=\"form-control\" formControlName=\"round_off_type\">\r\n                <option>Please select site</option>\r\n                <option value=\"plus\">Plus</option>\r\n                <option value=\"minus\">Minus</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"\">Total</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"total_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button class=\"btn btn-success float-right\" (click)=\"saveMr()\" [disabled]=\"!mrForm.valid || process == 'saving'\" type=\"button\">\r\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/inventory/edit-material-receipt/edit-material-receipt.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/inventory/edit-material-receipt/edit-material-receipt.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  overflow-x: scroll;\n  width: 100%;\n  display: block; }\n  table select {\n    width: 150px; }\n  table .unit {\n    width: 70px; }\n  table .qty {\n    width: 70px; }\n  table .price {\n    width: 120px; }\n  table .discount {\n    width: 70px; }\n  table .total {\n    width: 170px; }\n  ::ng-deep .ng-dropdown-panel {\n  margin-top: 40px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2ludmVudG9yeS9lZGl0LW1hdGVyaWFsLXJlY2VpcHQvRDpcXHRlc3RpbmdfZm9sZGVyXFx0aGlydVxcZnJvbnRlbmRcXHRkX2Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXGludmVudG9yeVxcZWRpdC1tYXRlcmlhbC1yZWNlaXB0XFxlZGl0LW1hdGVyaWFsLXJlY2VpcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWMsRUFBQTtFQUhsQjtJQUtRLFlBQ0osRUFBQTtFQU5KO0lBUVEsV0FDSixFQUFBO0VBVEo7SUFXUSxXQUNKLEVBQUE7RUFaSjtJQWNRLFlBQ0osRUFBQTtFQWZKO0lBaUJRLFdBQ0osRUFBQTtFQWxCSjtJQW9CUSxZQUNKLEVBQUE7RUFJRjtFQUNJLDJCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2ludmVudG9yeS9lZGl0LW1hdGVyaWFsLXJlY2VpcHQvZWRpdC1tYXRlcmlhbC1yZWNlaXB0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4XHJcbiAgICB9XHJcbiAgICAudW5pdCB7XHJcbiAgICAgICAgd2lkdGg6IDcwcHhcclxuICAgIH1cclxuICAgIC5xdHkge1xyXG4gICAgICAgIHdpZHRoOiA3MHB4XHJcbiAgICB9XHJcbiAgICAucHJpY2V7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4XHJcbiAgICB9XHJcbiAgICAuZGlzY291bnR7XHJcbiAgICAgICAgd2lkdGg6IDcwcHhcclxuICAgIH1cclxuICAgIC50b3RhbHtcclxuICAgICAgICB3aWR0aDogMTcwcHhcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICA6Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgICAgbWFyZ2luLXRvcCA6IDQwcHggIWltcG9ydGFudDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/layout/inventory/edit-material-receipt/edit-material-receipt.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/inventory/edit-material-receipt/edit-material-receipt.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditMaterialReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMaterialReceiptComponent", function() { return EditMaterialReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditMaterialReceiptComponent = /** @class */ (function () {
    function EditMaterialReceiptComponent(fb, metaService, ms, is, ds, router, aroute) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.is = is;
        this.ds = ds;
        this.router = router;
        this.aroute = aroute;
        this.unit_option = _parameters__WEBPACK_IMPORTED_MODULE_4__["itemUnits"];
        this.godowns = [];
        this.currentDate = new Date();
        this.loading = false;
        this.usertype = this.metaService.getSiteFromStorage().role;
        this.site_name = this.metaService.getSiteFromStorage().site;
        var current = new Date();
        this.minDate = {
            year: current.getFullYear(),
            month: current.getMonth() + 1,
            day: current.getDate()
        };
    }
    EditMaterialReceiptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mrDetails = this.aroute.snapshot.data['mr_details'];
        this.bsConfig = Object.assign({}, { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
        this.buildForm();
        this.mrForm.controls.materialr_items.valueChanges.subscribe(function (changes) {
            _this.updateValues();
        });
        this.getOptions();
        this.getSites();
    };
    EditMaterialReceiptComponent.prototype.buildForm = function () {
        var _this = this;
        this.mrForm = this.fb.group({
            'mr_date': [{ year: new Date(this.mrDetails.mr_date).getFullYear(), month: new Date(this.mrDetails.mr_date).getMonth() + 1, day: new Date(this.mrDetails.mr_date).getDate() }],
            'site': [this.mrDetails.site],
            'mr_type': [this.mrDetails.mr_type, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mr_number': [this.mrDetails.mr_number, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'vendor': [this.mrDetails.vendor, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'department': [this.mrDetails.department, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'rec_type': [this.mrDetails.rec_type, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'godown': [this.mrDetails.godown, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'invno': [this.mrDetails.invno],
            'invdate': [this.mrDetails.invdate ? { year: new Date(this.mrDetails.invdate).getFullYear(), month: new Date(this.mrDetails.invdate).getMonth() + 1, day: new Date(this.mrDetails.invdate).getDate() } : ''],
            'pjno': [this.mrDetails.pjno],
            'materialr_items': this.fb.array([]),
            'narration': [this.mrDetails.narration],
            'gross_amount': [this.mrDetails.gross_amount],
            'cgst_amount': [this.mrDetails.cgst_amount],
            'sgst_amount': [this.mrDetails.sgst_amount],
            'igst_amount': [this.mrDetails.igst_amount],
            'net_amount': [this.mrDetails.net_amount],
            'rounded_off': [this.mrDetails.rounded_off],
            'round_off_type': [this.mrDetails.round_off_type],
            'total_amount': [this.mrDetails.total_amount]
        });
        // this.addMaterialreceiptItems()
        this.mrDetails.materialr_items.forEach(function (element) {
            var control = _this.mrForm.controls['materialr_items'];
            control.push(_this.initItemsData(element));
        });
    };
    EditMaterialReceiptComponent.prototype.initItemsData = function (data) {
        return this.fb.group({
            'name': [data.name],
            'item_id': [data.item_id, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'unit': [data.unit],
            'qty': [data.qty, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'price': [data.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'discount': [data.discount ? data.discount : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'discounted_price': [0],
            'cgst': [data.cgst, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'sgst': [data.sgst, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'igst': [data.igst, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'total': [data.total, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    EditMaterialReceiptComponent.prototype.initItems = function () {
        return this.fb.group({
            'name': [''],
            'item_id': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'unit': [''],
            'qty': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'price': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'discount': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'discounted_price': [0],
            'cgst': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'sgst': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'igst': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'total': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    EditMaterialReceiptComponent.prototype.addMrItems = function () {
        var control = this.mrForm.controls['materialr_items'];
        control.push(this.initItems());
    };
    EditMaterialReceiptComponent.prototype.removeItems = function (i) {
        var control = this.mrForm.controls['materialr_items'];
        control.removeAt(i);
    };
    EditMaterialReceiptComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var materialr_items = this.mrForm.controls['materialr_items'].value;
        var index = materialr_items.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    EditMaterialReceiptComponent.prototype.saveMr = function () {
        var _this = this;
        var mr_date;
        if (this.mrForm.controls['mr_date'].value) {
            var dt = this.mrForm.controls['mr_date'].value.year + '-' +
                this.mrForm.controls['mr_date'].value.month + '-' +
                this.mrForm.controls['mr_date'].value.day;
            mr_date = moment(dt, 'YYYY-MM-DD').format();
            console.log(mr_date);
        }
        else {
            mr_date = moment().format();
        }
        var invdate;
        if (this.mrForm.controls['invdate'].value) {
            var dt = this.mrForm.controls['invdate'].value.year + '-' +
                this.mrForm.controls['invdate'].value.month + '-' +
                this.mrForm.controls['invdate'].value.day;
            invdate = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            invdate = moment().format();
        }
        this.process = 'saving';
        var data = this.mrForm.value;
        data.mr_date = mr_date;
        data.invdate = invdate;
        this.is.updatMr(this.mrDetails['_id'], this.mrForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/inventory/material-receipt']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditMaterialReceiptComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                _this.mrForm.controls['site'].setValue(_this.siteOptions[0].branch_name);
            }
            else {
                _this.mrForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    EditMaterialReceiptComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getSites().subscribe(function (siteInfo) {
            _this.siteOptions = siteInfo;
        });
        this.ms.getVendorMasterList().subscribe(function (siteInfo) {
            _this.vendor_option = siteInfo['result'];
        });
        this.ds.getGodownList().subscribe(function (res) {
            _this.godowns = res;
        });
        this.metaService.getDeptList().subscribe(function (trackInfo) {
            _this.dept_option = trackInfo['result'];
        });
        this.ms.getItemMaster().subscribe(function (trackInfo) {
            _this.materialr_items = trackInfo['records'];
        });
    };
    EditMaterialReceiptComponent.prototype.updateValues = function () {
        var gross_price = 0;
        var cgst_price = 0;
        var sgst_price = 0;
        var igst_price = 0;
        var net_price = 0;
        var control = this.mrForm.controls['materialr_items'];
        var _loop_1 = function () {
            var values = control.controls[intial_val].value;
            var item_mater_data = this_1.materialr_items.find(function (item) { return item['_id'] == values['item_id']; });
            // let qty = values['qty'] ? values['qty'] : item_mater_data ? 1 : 0;
            var qty = values['qty'] ? values['qty'] : item_mater_data ? 0 : 0;
            var unit = values['unit'] ? values['unit'] : item_mater_data ? item_mater_data.unit : '';
            // let price = values['price'] ? values['price'] : item_mater_data ? parseFloat(item_mater_data['rate']) : 0;
            var price = values['price'] ? values['price'] : item_mater_data ? 0 : 0;
            var original_price = qty * price;
            var dis_difference = parseFloat(values['discount']) / 100;
            var discounted_amount = original_price * dis_difference;
            // gross amount
            var discounted_price = original_price - discounted_amount;
            // Tax calculation starts here
            // // individual tax calculation
            var cgst_perc = values['cgst'];
            var cgst_axmount = parseFloat(cgst_perc) / 100;
            var cgsttaxamount = discounted_price * cgst_axmount;
            var sgst_perc = values['sgst'];
            var sgst_axmount = parseFloat(sgst_perc) / 100;
            var sgsttaxamount = discounted_price * sgst_axmount;
            var igst_perc = values['igst'];
            var igst_axmount = parseFloat(igst_perc) / 100;
            var igsttaxamount = discounted_price * igst_axmount;
            // const total = discounted_price + tax_axmount;
            var total = discounted_price + cgsttaxamount + sgsttaxamount + igsttaxamount;
            // Tax calculation ends here
            control.controls[intial_val].patchValue({
                unit: unit,
                price: price,
                name: item_mater_data ? item_mater_data.name : '',
                qty: qty,
                discounted_price: discounted_price,
                total: total.toFixed(5)
            }, { emitEvent: false });
            gross_price += discounted_price;
            cgst_price += cgsttaxamount;
            sgst_price += sgsttaxamount;
            igst_price += igsttaxamount;
            net_price += total;
        };
        var this_1 = this;
        for (var intial_val = 0; intial_val < control.length; intial_val++) {
            _loop_1();
        }
        this.mrForm.patchValue({
            'gross_amount': gross_price,
            'cgst_amount': cgst_price,
            'sgst_amount': sgst_price,
            'igst_amount': igst_price,
            'net_amount': net_price,
            'rounded_off': net_price,
            'total_amount': net_price
        }, { emitEvent: false });
    };
    EditMaterialReceiptComponent.prototype.generateMrNumber = function () {
        var _this = this;
        var mr_type = this.mrForm.controls.mr_type.value;
        var site = this.mrForm.controls.site.value;
        if (site && mr_type) {
            var matchCond = { site: site, mr_type: mr_type };
            console.log('mathCond >>', matchCond);
            this.is.getMrNumberDetails(matchCond).subscribe(function (mrInfo) {
                _this.mrForm.controls.mr_number.setValue(mrInfo['count'] + 1);
            }, function (error) {
                console.log(error);
            });
        }
    };
    EditMaterialReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-material-receipt',
            template: __webpack_require__(/*! ./edit-material-receipt.component.html */ "./src/app/layout/inventory/edit-material-receipt/edit-material-receipt.component.html"),
            styles: [__webpack_require__(/*! ./edit-material-receipt.component.scss */ "./src/app/layout/inventory/edit-material-receipt/edit-material-receipt.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_5__["InventoryService"],
            src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], EditMaterialReceiptComponent);
    return EditMaterialReceiptComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/edit-order/edit-order.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/inventory/edit-order/edit-order.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form [formGroup]=\"orderForm\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">Edit Order</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"required\">Site</label>\r\n              <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\r\n                formControlName=\"site\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"required\">Order type</label>\r\n              <select class=\"form-control\" formControlName=\"order_type\" (change)=\"generateOrderNumber()\">\r\n                <option value=\"\">Please select order type</option>\r\n                <option value=\"Job order\">Job order</option>\r\n                <option value=\"Purchase order\">Purchase order</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"required\">Order no</label>\r\n              <input disabled type=\"text\" formControlName=\"order_number\" class=\"form-control\" placeholder=\"Please enter order no\">\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"required\">Order date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd-mm-yyyy\"\r\n                  name=\"dp2\"\r\n                  formControlName=\"order_date\"\r\n                  ngbDatepicker\r\n                  #d2=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-lg-2 col-md-2\">\r\n              <label>Delivery date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd-mm-yyyy\"\r\n                  name=\"dp1\"\r\n                  formControlName=\"delivery_date\"\r\n                  ngbDatepicker\r\n                  #d1=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n\r\n\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"required\">Vendor</label>\r\n              <ng-select [items]=\"vendor_option\" placeholder=\"Type and search vendor\" bindLabel=\"name\" bindValue=\"name\"\r\n                formControlName=\"vendor\">\r\n              </ng-select>\r\n            </div>\r\n              <div class=\"col-lg-2 col-md-2\">\r\n              <label class=\"required\">Job type</label>\r\n              <select class=\"form-control\" formControlName=\"job_type\">\r\n                <option value=\"\">Please select job type</option>\r\n                <option value=\"Direct\">Direct</option>\r\n                <option value=\"Job order\">Job order</option>\r\n                <option value=\"Estimate\">Estimate</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"required\">Department</label>\r\n              <ng-select [items]=\"dept_option\" placeholder=\"Type and search Department\" bindLabel=\"name\" bindValue=\"name\"\r\n                formControlName=\"department\">\r\n              </ng-select>\r\n            </div>\r\n              </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  Order line items\r\n                  <button class=\"btn btn-primary float-right\" (click)=\"addOrderItems()\" [disabled]=\"!orderForm.valid\"\r\n                    type=\"button\">\r\n                    Add Item\r\n                  </button>\r\n                </div>\r\n                <!-- /.box-header -->\r\n                <div class=\"card-body\" *ngIf=\"orderForm.controls.order_items.controls.length > 0\">\r\n                  <table class=\"table table-bordered\" formArrayName=\"order_items\">\r\n                    <tr>\r\n                      <th>Item</th>\r\n                      <th>Unit</th>\r\n                      <th>Qty</th>\r\n                      <th>Price(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                      <th>Dis(%)</th>\r\n                      <th>CGST(%)</th>\r\n                      <th>SGST(%)</th>\r\n                      <th>IGST(%)</th>\r\n                      <th>Amount(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                      <th>Action</th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let school of orderForm.controls.order_items.controls; let i=index\" formGroupName=\"{{i}}\">\r\n                      <td>\r\n                        <div class=\"input-group ngs\">\r\n                          <div class=\"col-md-12\">\r\n                            <ng-select [items]=\"order_items\" appendTo=\".card-body\" class=\"form-control\" style=\"width:250px !important;\" placeholder=\"Type and search items\" bindLabel=\"name\" bindValue=\"_id\"\r\n                            formControlName=\"item_id\">\r\n                          </ng-select>\r\n                          </div>\r\n                        </div>\r\n                      </td>\r\n                        <td>\r\n                        <div class=\"input-group\">\r\n                          <select class=\"form-control\" formControlName=\"unit\">\r\n                            <option value=\"\">Please select units</option>\r\n                            <option *ngFor=\"let option of unit_option\" [value]=\"option\"> {{option}}</option>\r\n                          </select>\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <input type=\"number\" min=\"0\"  formControlName=\"qty\"\r\n                          class=\"form-control qty\">\r\n                      </td>\r\n                      <td>\r\n                        <input type=\"number\" min=\"0\" formControlName=\"price\" class=\"form-control price\">\r\n\r\n                      </td>\r\n                      <td>\r\n                        <input type=\"number\" min=\"0\" formControlName=\"discount\"  class=\"form-control discount\">\r\n                      </td>\r\n                      <td>\r\n                        <input type=\"number\" min=\"0\"  formControlName=\"cgst\" class=\"form-control discount\">\r\n                      </td>\r\n                      <td>\r\n                        <input type=\"number\" min=\"0\" formControlName=\"sgst\"  class=\"form-control discount\">\r\n                      </td>\r\n                      <td>\r\n                        <input type=\"number\" min=\"0\"  formControlName=\"igst\" class=\"form-control discount\">\r\n                      </td>\r\n                      <td>\r\n                        <input type=\"number\" min=\"0\" formControlName=\"total\" class=\"form-control total\">\r\n\r\n                      </td>\r\n                      <td>\r\n                        <button class=\"btn btn-danger float-right\" [disabled]=\"orderForm.controls?.order_items.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\r\n                          <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n                <div class=\"card-body\" *ngIf=\"orderForm.controls?.order_items.controls.length == 0\">\r\n                  <p>Please select vendor</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3\">\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-lg-6 col-md-6\">\r\n                <label class=\"\">Narration</label>\r\n                <input type=\"text\" formControlName=\"narration\" class=\"form-control\" placeholder=\"Please enter narration\">\r\n              </div>\r\n              <div class=\"col-lg-6 col-md-6\">\r\n                <label class=\"\">Terms And Conditions</label>\r\n                <input type=\"text\" formControlName=\"terms_and_conditions\" class=\"form-control\"\r\n                  placeholder=\"Please enter terms and conditions\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-lg-3 col-md-3\">\r\n                <label class=\"\">Net Amt</label>\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                  </div>\r\n                  <input type=\"number\" min=\"0\" formControlName=\"net_amount\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-3 col-md-3\">\r\n                <label class=\"\">Rounded off</label>\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                  </div>\r\n                  <input type=\"number\" min=\"0\" formControlName=\"rounded_off\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-3 col-md-3\">\r\n                <label class=\"required\">Round of Type</label>\r\n                <select class=\"form-control\" formControlName=\"round_off_type\">\r\n                  <option>Please select site</option>\r\n                  <option value=\"plus\">Plus</option>\r\n                  <option value=\"minus\">Minus</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-lg-3 col-md-3\">\r\n                <label class=\"\">Total</label>\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                  </div>\r\n                  <input type=\"number\" min=\"0\" formControlName=\"total_amount\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button class=\"btn btn-success float-right\" (click)=\"saveOrders()\" [disabled]=\"!orderForm.valid || process == 'saving'\" type=\"button\">\r\n            Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/layout/inventory/edit-order/edit-order.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/inventory/edit-order/edit-order.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  overflow-x: scroll;\n  width: 100%;\n  display: block; }\n  table select {\n    width: 150px; }\n  table .qty {\n    width: 70px; }\n  table .price {\n    width: 120px; }\n  table .discount {\n    width: 70px; }\n  table .total {\n    width: 170px; }\n  ::ng-deep .ng-dropdown-panel {\n  margin-top: 40px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2ludmVudG9yeS9lZGl0LW9yZGVyL0Q6XFx0ZXN0aW5nX2ZvbGRlclxcdGhpcnVcXGZyb250ZW5kXFx0ZF9mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxpbnZlbnRvcnlcXGVkaXQtb3JkZXJcXGVkaXQtb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWMsRUFBQTtFQUhsQjtJQUtRLFlBQ0osRUFBQTtFQU5KO0lBUVEsV0FDSixFQUFBO0VBVEo7SUFXUSxZQUNKLEVBQUE7RUFaSjtJQWNRLFdBQ0osRUFBQTtFQWZKO0lBaUJRLFlBQ0osRUFBQTtFQUVGO0VBQ0UsMkJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaW52ZW50b3J5L2VkaXQtb3JkZXIvZWRpdC1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweFxyXG4gICAgfVxyXG4gICAgLnF0eSB7XHJcbiAgICAgICAgd2lkdGg6IDcwcHhcclxuICAgIH1cclxuICAgIC5wcmljZXtcclxuICAgICAgICB3aWR0aDogMTIwcHhcclxuICAgIH1cclxuICAgIC5kaXNjb3VudHtcclxuICAgICAgICB3aWR0aDogNzBweFxyXG4gICAgfVxyXG4gICAgLnRvdGFse1xyXG4gICAgICAgIHdpZHRoOiAxNzBweFxyXG4gICAgfVxyXG4gIH1cclxuICA6Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgIG1hcmdpbi10b3AgOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/inventory/edit-order/edit-order.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/inventory/edit-order/edit-order.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOrderComponent", function() { return EditOrderComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditOrderComponent = /** @class */ (function () {
    function EditOrderComponent(fb, metaService, ms, is, router, aroute) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.is = is;
        this.router = router;
        this.aroute = aroute;
        this.unit_option = _parameters__WEBPACK_IMPORTED_MODULE_3__["itemUnits"];
        this.currentDate = new Date();
        this.loading = false;
        this.usertype = this.metaService.getSiteFromStorage().role;
        this.site_name = this.metaService.getSiteFromStorage().site;
    }
    EditOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderDetails = this.aroute.snapshot.data['order_details'];
        this.bsConfig = Object.assign({}, { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
        this.buildForm();
        this.orderForm.controls.order_items.valueChanges.subscribe(function (changes) {
            _this.updateValues();
        });
        this.getOptions();
        this.getSites();
    };
    EditOrderComponent.prototype.buildForm = function () {
        var _this = this;
        this.orderForm = this.fb.group({
            'order_date': [{ year: new Date(this.orderDetails.order_date).getFullYear(), month: new Date(this.orderDetails.order_date).getMonth() + 1, day: new Date(this.orderDetails.order_date).getDate() }],
            'delivery_date': [{ year: new Date(this.orderDetails.delivery_date).getFullYear(), month: new Date(this.orderDetails.delivery_date).getMonth() + 1, day: new Date(this.orderDetails.delivery_date).getDate() }],
            'site': [this.orderDetails.site],
            'order_type': [this.orderDetails.order_type, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'order_number': [this.orderDetails.order_number, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'vendor': [this.orderDetails.vendor, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'job_type': [this.orderDetails.job_type, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'department': [this.orderDetails.department, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'order_items': this.fb.array([]),
            'narration': [this.orderDetails.narration],
            'terms_and_conditions': [this.orderDetails.terms_and_conditions],
            'net_amount': [this.orderDetails.net_amount],
            'rounded_off': [this.orderDetails.rounded_off],
            'round_off_type': [this.orderDetails.round_off_type],
            'total_amount': [this.orderDetails.total_amount]
        });
        //this.addOrderItems()
        this.orderDetails.order_items.forEach(function (element) {
            var control = _this.orderForm.controls['order_items'];
            control.push(_this.initItemsData(element));
        });
    };
    EditOrderComponent.prototype.initItemsData = function (data) {
        return this.fb.group({
            'name': [data.name],
            'item_id': [data.item_id, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'unit': [data.unit],
            'qty': [data.qty, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'price': [data.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'discount': [data.discount ? data.discount : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'discounted_price': [0],
            'cgst': [data.cgst, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'sgst': [data.sgst, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'igst': [data.igst, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'total': [data.total, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    };
    EditOrderComponent.prototype.initItems = function () {
        return this.fb.group({
            'name': [''],
            'item_id': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'unit': [''],
            'qty': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'price': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'discount': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'discounted_price': [0],
            'cgst': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'sgst': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'igst': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            'total': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    };
    EditOrderComponent.prototype.addOrderItems = function () {
        var control = this.orderForm.controls['order_items'];
        control.push(this.initItems());
    };
    EditOrderComponent.prototype.removeItems = function (i) {
        var control = this.orderForm.controls['order_items'];
        control.removeAt(i);
    };
    EditOrderComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var order_items = this.orderForm.controls['order_items'].value;
        var index = order_items.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    EditOrderComponent.prototype.saveOrders = function () {
        var _this = this;
        var order_date;
        if (this.orderForm.controls['order_date'].value) {
            var dt = this.orderForm.controls['order_date'].value.year + '-' +
                this.orderForm.controls['order_date'].value.month + '-' +
                this.orderForm.controls['order_date'].value.day;
            order_date = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            order_date = moment().format();
        }
        var delivery_date;
        if (this.orderForm.controls['delivery_date'].value) {
            var dt = this.orderForm.controls['delivery_date'].value.year + '-' +
                this.orderForm.controls['delivery_date'].value.month + '-' +
                this.orderForm.controls['delivery_date'].value.day;
            delivery_date = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            delivery_date = moment().format();
        }
        this.process = 'saving';
        var data = this.orderForm.value;
        data.order_date = order_date;
        data.delivery_date = delivery_date;
        this.is.updatOrder(this.orderDetails['_id'], this.orderForm.value).subscribe(function (ordersInfo) {
            _this.process = 'done';
            _this.router.navigate(['/inventory/orders']);
        }, function (error) { _this.process = 'done'; console.log(error); });
    };
    EditOrderComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                _this.orderForm.controls['site'].setValue(_this.siteOptions[0].branch_name);
            }
            else {
                _this.orderForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    EditOrderComponent.prototype.getOptions = function () {
        var _this = this;
        // this.metaService.getSites().subscribe(siteInfo => {
        //   this.siteOptions = siteInfo
        // })
        this.ms.getVendorMasterList().subscribe(function (siteInfo) {
            _this.vendor_option = siteInfo['result'];
        });
        this.metaService.getDeptList().subscribe(function (trackInfo) {
            _this.dept_option = trackInfo['result'];
        });
        this.ms.getItemMaster().subscribe(function (trackInfo) {
            _this.order_items = trackInfo['records'];
        });
    };
    EditOrderComponent.prototype.updateValues = function () {
        var net_price = 0;
        var control = this.orderForm.controls['order_items'];
        var _loop_1 = function () {
            var values = control.controls[intial_val].value;
            var item_mater_data = this_1.order_items.find(function (item) { return item['_id'] == values['item_id']; });
            var qty = values['qty'] ? values['qty'] : item_mater_data ? 1 : 0;
            var unit = values['unit'] ? values['unit'] : item_mater_data ? item_mater_data.unit : '';
            var price = values['price'] ? values['price'] : item_mater_data ? parseFloat(item_mater_data['rate']) : 0;
            var original_price = qty * price;
            var dis_difference = parseFloat(values['discount']) / 100;
            var discounted_amount = original_price * dis_difference;
            var discounted_price = original_price - discounted_amount;
            // Tax calculation starts here
            var total_taxes = values['cgst'] + values['sgst'] + values['igst'];
            var tax_difference = parseFloat(total_taxes) / 100;
            var tax_axmount = discounted_price * tax_difference;
            var total = discounted_price + tax_axmount;
            // Tax calculation ends here
            control.controls[intial_val].patchValue({
                unit: unit,
                price: price,
                name: item_mater_data ? item_mater_data.name : '',
                qty: qty,
                discounted_price: discounted_price,
                total: total.toFixed(5)
            }, { emitEvent: false });
            net_price += total;
        };
        var this_1 = this;
        for (var intial_val = 0; intial_val < control.length; intial_val++) {
            _loop_1();
        }
        this.orderForm.patchValue({
            'net_amount': net_price,
            'rounded_off': net_price,
            'total_amount': net_price
        }, { emitEvent: false });
    };
    // public generateOrderNumber() {
    //   const order_type = this.orderForm.controls.order_type.value;
    //   this.is.getOrderNumberDetails(order_type).subscribe(orderInfo => {
    //     this.orderForm.controls.order_number.setValue(orderInfo['count'] + 1);
    //   }, error => { console.log(error);
    //    });
    // }
    EditOrderComponent.prototype.generateOrderNumber = function () {
        var _this = this;
        var order_type = this.orderForm.controls.order_type.value;
        var site = this.orderForm.controls.site.value;
        if (site && order_type) {
            var matchCond = { site: site, order_type: order_type };
            console.log('mathCond >>', matchCond);
            this.is.getOrderNumberDetails(matchCond).subscribe(function (mrInfo) {
                _this.orderForm.controls.order_number.setValue(mrInfo['count'] + 1);
            }, function (error) {
                console.log(error);
            });
        }
    };
    EditOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-edit-order',
            template: __webpack_require__(/*! ./edit-order.component.html */ "./src/app/layout/inventory/edit-order/edit-order.component.html"),
            styles: [__webpack_require__(/*! ./edit-order.component.scss */ "./src/app/layout/inventory/edit-order/edit-order.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_4__["InventoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EditOrderComponent);
    return EditOrderComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/edit-scrap-sale/edit-scrap-sale.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/inventory/edit-scrap-sale/edit-scrap-sale.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"ssForm\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Edit Scrap Sale</div>\r\n      <div class=\"card-body\">\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Site</label>\r\n            <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\r\n              formControlName=\"site\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Sale type</label>\r\n            <select class=\"form-control\" formControlName=\"ss_type\" (change)=\"generateSsNumber()\">\r\n              <option value=\"\">Select Sale type</option>\r\n              <option value=\"Scrap Sale\">Scrap Sale</option>\r\n              <option value=\"Truck Issue\">Truck Issue</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Scrap Sale no</label>\r\n            <input disabled type=\"text\" formControlName=\"ss_number\" class=\"form-control\">\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Scrap Sale date</label>\r\n            <div class=\"input-group datepicker-input\">\r\n              <input\r\n                class=\"form-control\"\r\n                placeholder=\"dd-mm-yyyy\"\r\n                name=\"dp2\"\r\n                formControlName=\"ss_date\"\r\n                ngbDatepicker\r\n                #d2=\"ngbDatepicker\"\r\n              />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Issued By</label>\r\n            <select class=\"form-control\" formControlName=\"issuedby\">\r\n              <option value=\"\">Select Issued By</option>\r\n              <option *ngFor=\"let i of issuedby_option\" [value]=\"i.issuedby\"> {{i.issuedby}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Department</label>\r\n            <ng-select [items]=\"dept_option\" placeholder=\"Type and search Department\" bindLabel=\"name\" bindValue=\"name\"\r\n              formControlName=\"department\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <label class=\"required\">Vendor</label>\r\n            <ng-select [items]=\"vendor_option\" placeholder=\"Type and search vendor\" bindLabel=\"name\" bindValue=\"name\"\r\n              formControlName=\"vendor\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Material Issue items\r\n                <button class=\"btn btn-primary float-right\" (click)=\"addSsItems()\" [disabled]=\"!ssForm.valid\"\r\n                  type=\"button\">\r\n                  Add Item\r\n                </button>\r\n              </div>\r\n              <!-- /.box-header -->\r\n              <div class=\"card-body\" *ngIf=\"ssForm.controls.scraps_items.controls.length > 0\">\r\n                <table class=\"table table-bordered\" formArrayName=\"scraps_items\">\r\n                  <tr>\r\n                    <th>Item</th>\r\n                    <th>Unit</th>\r\n                    <th>Qty</th>\r\n                    <th>Price(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                    <th>Godown</th>\r\n                    <th>Amount(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                  <tr *ngFor=\"let school of ssForm.controls.scraps_items.controls; let i=index\" formGroupName=\"{{i}}\">\r\n                    <td>\r\n                      <div class=\"input-group ngs\">\r\n                        <div class=\"col-md-12\">\r\n                          <ng-select [items]=\"scraps_items\" appendTo=\".card-body\" class=\"form-control\" style=\"width:250px !important;\" placeholder=\"Type and search items\" bindLabel=\"name\" bindValue=\"_id\"\r\n                          formControlName=\"item_id\">\r\n                        </ng-select>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"unit\">\r\n                          <option value=\"\">Select units</option>\r\n                          <option *ngFor=\"let option of unit_option\" [value]=\"option\"> {{option}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\"  formControlName=\"qty\"\r\n                        class=\"form-control qty\">\r\n                    </td>\r\n\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"price\" class=\"form-control price\">\r\n                    </td>\r\n\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"godown\">\r\n                          <option value=\"\">Select godown</option>\r\n                          <option *ngFor=\"let g of scraps_godowns\" [value]=\"g.godown\"> {{g.godown}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"total\" class=\"form-control total\">\r\n                    </td>\r\n                    <td>\r\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"ssForm.controls?.scraps_items.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\r\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <div class=\"card-body\" *ngIf=\"ssForm.controls?.scraps_items.controls.length == 0\">\r\n                <p>Please select vendor</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mt-3\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-lg-6 col-md-6\">\r\n              <label class=\"\">Narration</label>\r\n              <input type=\"text\" formControlName=\"narration\" class=\"form-control\" placeholder=\"Please enter narration\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"\">Net Amt</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"net_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"\">Rounded off</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"rounded_off\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"required\">Round of Type</label>\r\n              <select class=\"form-control\" formControlName=\"round_off_type\">\r\n                <option>Please select site</option>\r\n                <option value=\"plus\">Plus</option>\r\n                <option value=\"minus\">Minus</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3\">\r\n              <label class=\"\">Total</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n                <input type=\"number\" min=\"0\" formControlName=\"total_amount\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button class=\"btn btn-success float-right\" (click)=\"saveSs()\" [disabled]=\"!ssForm.valid || process == 'saving'\" type=\"button\">\r\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/inventory/edit-scrap-sale/edit-scrap-sale.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/inventory/edit-scrap-sale/edit-scrap-sale.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .ng-dropdown-panel {\n  margin-top: 40px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2ludmVudG9yeS9lZGl0LXNjcmFwLXNhbGUvRDpcXHRlc3RpbmdfZm9sZGVyXFx0aGlydVxcZnJvbnRlbmRcXHRkX2Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXGludmVudG9yeVxcZWRpdC1zY3JhcC1zYWxlXFxlZGl0LXNjcmFwLXNhbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbnZlbnRvcnkvZWRpdC1zY3JhcC1zYWxlL2VkaXQtc2NyYXAtc2FsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwge1xyXG4gICAgbWFyZ2luLXRvcCA6IDQwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/inventory/edit-scrap-sale/edit-scrap-sale.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/inventory/edit-scrap-sale/edit-scrap-sale.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditScrapSaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditScrapSaleComponent", function() { return EditScrapSaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditScrapSaleComponent = /** @class */ (function () {
    function EditScrapSaleComponent(fb, metaService, ms, is, ds, aroute, router) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.is = is;
        this.ds = ds;
        this.aroute = aroute;
        this.router = router;
        this.unit_option = _parameters__WEBPACK_IMPORTED_MODULE_4__["itemUnits"];
        this.currentDate = new Date();
        this.loading = false;
        this.usertype = this.metaService.getSiteFromStorage().role;
        this.site_name = this.metaService.getSiteFromStorage().site;
        var current = new Date();
        this.minDate = {
            year: current.getFullYear(),
            month: current.getMonth() + 1,
            day: current.getDate()
        };
    }
    EditScrapSaleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ssDetails = this.aroute.snapshot.data['ss_details'];
        this.bsConfig = Object.assign({}, { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
        this.buildForm();
        this.ssForm.controls.scraps_items.valueChanges.subscribe(function (changes) {
            _this.updateValues();
        });
        this.getOptions();
        this.getSites();
    };
    EditScrapSaleComponent.prototype.buildForm = function () {
        var _this = this;
        this.ssForm = this.fb.group({
            'site': [this.ssDetails.site],
            'ss_type': [this.ssDetails.ss_type],
            'ss_number': [this.ssDetails.ss_number, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'ss_date': [{ year: new Date(this.ssDetails.ss_date).getFullYear(), month: new Date(this.ssDetails.ss_date).getMonth() + 1, day: new Date(this.ssDetails.ss_date).getDate() }],
            'issuedby': [this.ssDetails.issuedby, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'department': [this.ssDetails.department, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'vendor': [this.ssDetails.vendor, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'scraps_items': this.fb.array([]),
            'narration': [this.ssDetails.narration],
            'net_amount': [this.ssDetails.net_amount],
            'rounded_off': [this.ssDetails.rounded_off],
            'round_off_type': [this.ssDetails.round_off_type],
            'total_amount': [this.ssDetails.total_amount]
        });
        // this.addMaterialreceiptItems()
        this.ssDetails.scraps_items.forEach(function (element) {
            var control = _this.ssForm.controls['scraps_items'];
            control.push(_this.initItemsData(element));
        });
    };
    EditScrapSaleComponent.prototype.initItemsData = function (data) {
        return this.fb.group({
            'name': [data.name],
            'item_id': [data.item_id, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'unit': [data.unit],
            'qty': [data.qty, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'price': [data.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'total': [data.total, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'godown': [data.godown, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    EditScrapSaleComponent.prototype.initItems = function () {
        return this.fb.group({
            'name': [''],
            'item_id': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'unit': [''],
            'qty': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'price': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'total': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'godown': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    EditScrapSaleComponent.prototype.addSsItems = function () {
        var control = this.ssForm.controls['scraps_items'];
        control.push(this.initItems());
    };
    EditScrapSaleComponent.prototype.removeItems = function (i) {
        var control = this.ssForm.controls['scraps_items'];
        control.removeAt(i);
    };
    EditScrapSaleComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var scraps_items = this.ssForm.controls['scraps_items'].value;
        var index = scraps_items.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    EditScrapSaleComponent.prototype.saveSs = function () {
        var _this = this;
        var ss_date;
        if (this.ssForm.controls['ss_date'].value) {
            var dt = this.ssForm.controls['ss_date'].value.year + '-' +
                this.ssForm.controls['ss_date'].value.month + '-' +
                this.ssForm.controls['ss_date'].value.day;
            ss_date = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            ss_date = moment().format();
        }
        this.process = 'saving';
        var data = this.ssForm.value;
        data.ss_date = ss_date;
        console.log('Edit Issue Saving', this.ssDetails);
        this.is.updatSs(this.ssDetails['_id'], this.ssForm.value).subscribe(function (miInfo) {
            _this.process = 'done';
            _this.router.navigate(['/inventory/scrap-sale']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditScrapSaleComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                _this.ssForm.controls['site'].setValue(_this.siteOptions[0].branch_name);
            }
            else {
                _this.ssForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    EditScrapSaleComponent.prototype.getOptions = function () {
        var _this = this;
        // this.metaService.getSites().subscribe(siteInfo => {
        //   this.siteOptions = siteInfo;
        // });
        this.metaService.getDeptList().subscribe(function (trackInfo) {
            _this.dept_option = trackInfo['result'];
        });
        this.metaService.getIssuedbyList().subscribe(function (trackInfo) {
            _this.issuedby_option = trackInfo['result'];
        });
        this.ms.getVendorMasterList().subscribe(function (siteInfo) {
            _this.vendor_option = siteInfo['result'];
        });
        this.ms.getItemMaster().subscribe(function (trackInfo) {
            _this.scraps_items = trackInfo['records'];
        });
        this.ds.getGodownList().subscribe(function (res) {
            _this.scraps_godowns = res;
        });
    };
    EditScrapSaleComponent.prototype.updateValues = function () {
        var net_price = 0;
        var control = this.ssForm.controls['scraps_items'];
        var _loop_1 = function () {
            var values = control.controls[intial_val].value;
            var item_mater_data = this_1.scraps_items.find(function (item) { return item['_id'] == values['item_id']; });
            // let qty = values['qty'] ? values['qty'] : item_mater_data ? 1 : 0;
            var qty = values['qty'] ? values['qty'] : item_mater_data ? 0 : 0;
            var unit = values['unit'] ? values['unit'] : item_mater_data ? item_mater_data.unit : '';
            // let price = values['price'] ? values['price'] : item_mater_data ? parseFloat(item_mater_data['rate']) : 0;
            var price = values['price'] ? values['price'] : item_mater_data ? 0 : 0;
            var original_price = qty * price;
            var total = original_price;
            // Tax calculation ends here
            control.controls[intial_val].patchValue({
                unit: unit,
                price: price,
                name: item_mater_data ? item_mater_data.name : '',
                qty: qty,
                total: total.toFixed(5)
            }, { emitEvent: false });
            net_price += total;
        };
        var this_1 = this;
        for (var intial_val = 0; intial_val < control.length; intial_val++) {
            _loop_1();
        }
        this.ssForm.patchValue({
            'net_amount': net_price,
            'rounded_off': net_price,
            'total_amount': net_price
        }, { emitEvent: false });
    };
    EditScrapSaleComponent.prototype.generateSsNumber = function () {
        var _this = this;
        var ss_type = this.ssForm.controls.ss_type.value;
        var site = this.ssForm.controls.site.value;
        if (site && ss_type) {
            var matchCond = { site: site, ss_type: ss_type };
            console.log('mathCond >>', matchCond);
            this.is.getSsNumberDetails(matchCond).subscribe(function (ssInfo) {
                _this.ssForm.controls.ss_number.setValue(ssInfo['count'] + 1);
            }, function (error) {
                console.log(error);
            });
        }
    };
    EditScrapSaleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-scrap-sale',
            template: __webpack_require__(/*! ./edit-scrap-sale.component.html */ "./src/app/layout/inventory/edit-scrap-sale/edit-scrap-sale.component.html"),
            styles: [__webpack_require__(/*! ./edit-scrap-sale.component.scss */ "./src/app/layout/inventory/edit-scrap-sale/edit-scrap-sale.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_5__["InventoryService"],
            src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], EditScrapSaleComponent);
    return EditScrapSaleComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/inventory-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/inventory/inventory-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: InventoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryRoutingModule", function() { return InventoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/layout/inventory/inventory/inventory.component.ts");
/* harmony import */ var _add_item_master_add_item_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-item-master/add-item-master.component */ "./src/app/layout/inventory/add-item-master/add-item-master.component.ts");
/* harmony import */ var _edit_item_master_edit_item_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-item-master/edit-item-master.component */ "./src/app/layout/inventory/edit-item-master/edit-item-master.component.ts");
/* harmony import */ var _view_item_master_view_item_master_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-item-master/view-item-master.component */ "./src/app/layout/inventory/view-item-master/view-item-master.component.ts");
/* harmony import */ var _list_item_master_list_item_master_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-item-master/list-item-master.component */ "./src/app/layout/inventory/list-item-master/list-item-master.component.ts");
/* harmony import */ var _itemmaster_reslover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./itemmaster-reslover */ "./src/app/layout/inventory/itemmaster-reslover.ts");
/* harmony import */ var _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-order/add-order.component */ "./src/app/layout/inventory/add-order/add-order.component.ts");
/* harmony import */ var _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-order/edit-order.component */ "./src/app/layout/inventory/edit-order/edit-order.component.ts");
/* harmony import */ var _view_order_view_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-order/view-order.component */ "./src/app/layout/inventory/view-order/view-order.component.ts");
/* harmony import */ var _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list-order/list-order.component */ "./src/app/layout/inventory/list-order/list-order.component.ts");
/* harmony import */ var _order_reslover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./order-reslover */ "./src/app/layout/inventory/order-reslover.ts");
/* harmony import */ var _add_material_receipt_add_material_receipt_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-material-receipt/add-material-receipt.component */ "./src/app/layout/inventory/add-material-receipt/add-material-receipt.component.ts");
/* harmony import */ var _edit_material_receipt_edit_material_receipt_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-material-receipt/edit-material-receipt.component */ "./src/app/layout/inventory/edit-material-receipt/edit-material-receipt.component.ts");
/* harmony import */ var _view_material_receipt_view_material_receipt_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-material-receipt/view-material-receipt.component */ "./src/app/layout/inventory/view-material-receipt/view-material-receipt.component.ts");
/* harmony import */ var _list_material_receipt_list_material_receipt_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./list-material-receipt/list-material-receipt.component */ "./src/app/layout/inventory/list-material-receipt/list-material-receipt.component.ts");
/* harmony import */ var _materialreceipt_reslover__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./materialreceipt-reslover */ "./src/app/layout/inventory/materialreceipt-reslover.ts");
/* harmony import */ var _add_material_issue_add_material_issue_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-material-issue/add-material-issue.component */ "./src/app/layout/inventory/add-material-issue/add-material-issue.component.ts");
/* harmony import */ var _edit_material_issue_edit_material_issue_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./edit-material-issue/edit-material-issue.component */ "./src/app/layout/inventory/edit-material-issue/edit-material-issue.component.ts");
/* harmony import */ var _view_material_issue_view_material_issue_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./view-material-issue/view-material-issue.component */ "./src/app/layout/inventory/view-material-issue/view-material-issue.component.ts");
/* harmony import */ var _list_material_issue_list_material_issue_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./list-material-issue/list-material-issue.component */ "./src/app/layout/inventory/list-material-issue/list-material-issue.component.ts");
/* harmony import */ var _materialissue_reslover__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./materialissue-reslover */ "./src/app/layout/inventory/materialissue-reslover.ts");
/* harmony import */ var _add_scrap_sale_add_scrap_sale_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-scrap-sale/add-scrap-sale.component */ "./src/app/layout/inventory/add-scrap-sale/add-scrap-sale.component.ts");
/* harmony import */ var _edit_scrap_sale_edit_scrap_sale_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit-scrap-sale/edit-scrap-sale.component */ "./src/app/layout/inventory/edit-scrap-sale/edit-scrap-sale.component.ts");
/* harmony import */ var _view_scrap_sale_view_scrap_sale_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./view-scrap-sale/view-scrap-sale.component */ "./src/app/layout/inventory/view-scrap-sale/view-scrap-sale.component.ts");
/* harmony import */ var _list_scrap_sale_list_scrap_sale_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./list-scrap-sale/list-scrap-sale.component */ "./src/app/layout/inventory/list-scrap-sale/list-scrap-sale.component.ts");
/* harmony import */ var _scrapsale_reslover__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./scrapsale-reslover */ "./src/app/layout/inventory/scrapsale-reslover.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// item-master





// orders





// materialreceipt





// materialissue





// scrapsale





var routes = [{
        path: '',
        component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_2__["InventoryComponent"],
        children: [
            // item master
            { path: 'items-master', component: _list_item_master_list_item_master_component__WEBPACK_IMPORTED_MODULE_6__["ListItemMasterComponent"] },
            { path: 'items-master/:id/view', component: _view_item_master_view_item_master_component__WEBPACK_IMPORTED_MODULE_5__["ViewItemMasterComponent"], resolve: { items_details: _itemmaster_reslover__WEBPACK_IMPORTED_MODULE_7__["ItemmasterReslover"] } },
            { path: 'items-master/:id/edit', component: _edit_item_master_edit_item_master_component__WEBPACK_IMPORTED_MODULE_4__["EditItemMasterComponent"], resolve: { items_details: _itemmaster_reslover__WEBPACK_IMPORTED_MODULE_7__["ItemmasterReslover"] } },
            { path: 'add-item-master', component: _add_item_master_add_item_master_component__WEBPACK_IMPORTED_MODULE_3__["AddItemMasterComponent"] },
            // orders
            { path: 'orders', component: _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_11__["ListOrderComponent"] },
            { path: 'orders/:id/view', component: _view_order_view_order_component__WEBPACK_IMPORTED_MODULE_10__["ViewOrderComponent"], resolve: { order_details: _order_reslover__WEBPACK_IMPORTED_MODULE_12__["OrderReslover"] } },
            { path: 'orders/:id/edit', component: _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_9__["EditOrderComponent"], resolve: { order_details: _order_reslover__WEBPACK_IMPORTED_MODULE_12__["OrderReslover"] } },
            { path: 'add-order', component: _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_8__["AddOrderComponent"] },
            { path: 'add-order/:estimateId', component: _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_8__["AddOrderComponent"] },
            // material receipts
            { path: 'material-receipt', component: _list_material_receipt_list_material_receipt_component__WEBPACK_IMPORTED_MODULE_16__["ListMaterialReceiptComponent"] },
            { path: 'material-receipt/:id/view', component: _view_material_receipt_view_material_receipt_component__WEBPACK_IMPORTED_MODULE_15__["ViewMaterialReceiptComponent"], resolve: { mr_details: _materialreceipt_reslover__WEBPACK_IMPORTED_MODULE_17__["MaterialreceiptReslover"] } },
            { path: 'material-receipt/:id/edit', component: _edit_material_receipt_edit_material_receipt_component__WEBPACK_IMPORTED_MODULE_14__["EditMaterialReceiptComponent"], resolve: { mr_details: _materialreceipt_reslover__WEBPACK_IMPORTED_MODULE_17__["MaterialreceiptReslover"] } },
            { path: 'add-material-receipt', component: _add_material_receipt_add_material_receipt_component__WEBPACK_IMPORTED_MODULE_13__["AddMaterialReceiptComponent"] },
            // material issue
            { path: 'material-issue', component: _list_material_issue_list_material_issue_component__WEBPACK_IMPORTED_MODULE_21__["ListMaterialIssueComponent"] },
            { path: 'material-issue/:id/view', component: _view_material_issue_view_material_issue_component__WEBPACK_IMPORTED_MODULE_20__["ViewMaterialIssueComponent"], resolve: { mi_details: _materialissue_reslover__WEBPACK_IMPORTED_MODULE_22__["MaterialissueReslover"] } },
            { path: 'material-issue/:id/edit', component: _edit_material_issue_edit_material_issue_component__WEBPACK_IMPORTED_MODULE_19__["EditMaterialIssueComponent"], resolve: { mi_details: _materialissue_reslover__WEBPACK_IMPORTED_MODULE_22__["MaterialissueReslover"] } },
            { path: 'add-material-issue', component: _add_material_issue_add_material_issue_component__WEBPACK_IMPORTED_MODULE_18__["AddMaterialIssueComponent"] },
            // scrap sale
            { path: 'scrap-sale', component: _list_scrap_sale_list_scrap_sale_component__WEBPACK_IMPORTED_MODULE_26__["ListScrapSaleComponent"] },
            { path: 'scrap-sale/:id/view', component: _view_scrap_sale_view_scrap_sale_component__WEBPACK_IMPORTED_MODULE_25__["ViewScrapSaleComponent"], resolve: { ss_details: _scrapsale_reslover__WEBPACK_IMPORTED_MODULE_27__["ScrapsaleReslover"] } },
            { path: 'scrap-sale/:id/edit', component: _edit_scrap_sale_edit_scrap_sale_component__WEBPACK_IMPORTED_MODULE_24__["EditScrapSaleComponent"], resolve: { ss_details: _scrapsale_reslover__WEBPACK_IMPORTED_MODULE_27__["ScrapsaleReslover"] } },
            { path: 'add-scrap-sale', component: _add_scrap_sale_add_scrap_sale_component__WEBPACK_IMPORTED_MODULE_23__["AddScrapSaleComponent"] }
        ]
    }];
var InventoryRoutingModule = /** @class */ (function () {
    function InventoryRoutingModule() {
    }
    InventoryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InventoryRoutingModule);
    return InventoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/inventory/inventory.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/inventory/inventory.module.ts ***!
  \******************************************************/
/*! exports provided: InventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryModule", function() { return InventoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory-routing.module */ "./src/app/layout/inventory/inventory-routing.module.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/layout/inventory/inventory/inventory.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-order/add-order.component */ "./src/app/layout/inventory/add-order/add-order.component.ts");
/* harmony import */ var _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-order/edit-order.component */ "./src/app/layout/inventory/edit-order/edit-order.component.ts");
/* harmony import */ var _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-order/list-order.component */ "./src/app/layout/inventory/list-order/list-order.component.ts");
/* harmony import */ var _view_order_view_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-order/view-order.component */ "./src/app/layout/inventory/view-order/view-order.component.ts");
/* harmony import */ var _order_reslover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order-reslover */ "./src/app/layout/inventory/order-reslover.ts");
/* harmony import */ var _add_material_receipt_add_material_receipt_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-material-receipt/add-material-receipt.component */ "./src/app/layout/inventory/add-material-receipt/add-material-receipt.component.ts");
/* harmony import */ var _edit_material_receipt_edit_material_receipt_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-material-receipt/edit-material-receipt.component */ "./src/app/layout/inventory/edit-material-receipt/edit-material-receipt.component.ts");
/* harmony import */ var _list_material_receipt_list_material_receipt_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./list-material-receipt/list-material-receipt.component */ "./src/app/layout/inventory/list-material-receipt/list-material-receipt.component.ts");
/* harmony import */ var _view_material_receipt_view_material_receipt_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-material-receipt/view-material-receipt.component */ "./src/app/layout/inventory/view-material-receipt/view-material-receipt.component.ts");
/* harmony import */ var _materialreceipt_reslover__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./materialreceipt-reslover */ "./src/app/layout/inventory/materialreceipt-reslover.ts");
/* harmony import */ var _add_material_issue_add_material_issue_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-material-issue/add-material-issue.component */ "./src/app/layout/inventory/add-material-issue/add-material-issue.component.ts");
/* harmony import */ var _edit_material_issue_edit_material_issue_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./edit-material-issue/edit-material-issue.component */ "./src/app/layout/inventory/edit-material-issue/edit-material-issue.component.ts");
/* harmony import */ var _view_material_issue_view_material_issue_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./view-material-issue/view-material-issue.component */ "./src/app/layout/inventory/view-material-issue/view-material-issue.component.ts");
/* harmony import */ var _list_material_issue_list_material_issue_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./list-material-issue/list-material-issue.component */ "./src/app/layout/inventory/list-material-issue/list-material-issue.component.ts");
/* harmony import */ var _materialissue_reslover__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./materialissue-reslover */ "./src/app/layout/inventory/materialissue-reslover.ts");
/* harmony import */ var _list_item_master_list_item_master_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./list-item-master/list-item-master.component */ "./src/app/layout/inventory/list-item-master/list-item-master.component.ts");
/* harmony import */ var _view_item_master_view_item_master_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./view-item-master/view-item-master.component */ "./src/app/layout/inventory/view-item-master/view-item-master.component.ts");
/* harmony import */ var _edit_item_master_edit_item_master_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit-item-master/edit-item-master.component */ "./src/app/layout/inventory/edit-item-master/edit-item-master.component.ts");
/* harmony import */ var _add_item_master_add_item_master_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./add-item-master/add-item-master.component */ "./src/app/layout/inventory/add-item-master/add-item-master.component.ts");
/* harmony import */ var _itemmaster_reslover__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./itemmaster-reslover */ "./src/app/layout/inventory/itemmaster-reslover.ts");
/* harmony import */ var _add_scrap_sale_add_scrap_sale_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./add-scrap-sale/add-scrap-sale.component */ "./src/app/layout/inventory/add-scrap-sale/add-scrap-sale.component.ts");
/* harmony import */ var _edit_scrap_sale_edit_scrap_sale_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./edit-scrap-sale/edit-scrap-sale.component */ "./src/app/layout/inventory/edit-scrap-sale/edit-scrap-sale.component.ts");
/* harmony import */ var _list_scrap_sale_list_scrap_sale_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./list-scrap-sale/list-scrap-sale.component */ "./src/app/layout/inventory/list-scrap-sale/list-scrap-sale.component.ts");
/* harmony import */ var _view_scrap_sale_view_scrap_sale_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./view-scrap-sale/view-scrap-sale.component */ "./src/app/layout/inventory/view-scrap-sale/view-scrap-sale.component.ts");
/* harmony import */ var _scrapsale_reslover__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./scrapsale-reslover */ "./src/app/layout/inventory/scrapsale-reslover.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// orders





// material receipt





// material issue





// item-master





// scrap-sale





var InventoryModule = /** @class */ (function () {
    function InventoryModule() {
    }
    InventoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_3__["InventoryComponent"],
                _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_7__["AddOrderComponent"],
                _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_9__["ListOrderComponent"],
                _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_8__["EditOrderComponent"],
                _view_order_view_order_component__WEBPACK_IMPORTED_MODULE_10__["ViewOrderComponent"],
                _add_material_receipt_add_material_receipt_component__WEBPACK_IMPORTED_MODULE_12__["AddMaterialReceiptComponent"],
                _edit_material_receipt_edit_material_receipt_component__WEBPACK_IMPORTED_MODULE_13__["EditMaterialReceiptComponent"],
                _list_material_receipt_list_material_receipt_component__WEBPACK_IMPORTED_MODULE_14__["ListMaterialReceiptComponent"],
                _view_material_receipt_view_material_receipt_component__WEBPACK_IMPORTED_MODULE_15__["ViewMaterialReceiptComponent"],
                _list_item_master_list_item_master_component__WEBPACK_IMPORTED_MODULE_22__["ListItemMasterComponent"],
                _view_item_master_view_item_master_component__WEBPACK_IMPORTED_MODULE_23__["ViewItemMasterComponent"],
                _edit_item_master_edit_item_master_component__WEBPACK_IMPORTED_MODULE_24__["EditItemMasterComponent"],
                _add_item_master_add_item_master_component__WEBPACK_IMPORTED_MODULE_25__["AddItemMasterComponent"],
                _add_scrap_sale_add_scrap_sale_component__WEBPACK_IMPORTED_MODULE_27__["AddScrapSaleComponent"],
                _edit_scrap_sale_edit_scrap_sale_component__WEBPACK_IMPORTED_MODULE_28__["EditScrapSaleComponent"],
                _list_scrap_sale_list_scrap_sale_component__WEBPACK_IMPORTED_MODULE_29__["ListScrapSaleComponent"],
                _view_scrap_sale_view_scrap_sale_component__WEBPACK_IMPORTED_MODULE_30__["ViewScrapSaleComponent"],
                _add_material_issue_add_material_issue_component__WEBPACK_IMPORTED_MODULE_17__["AddMaterialIssueComponent"],
                _edit_material_issue_edit_material_issue_component__WEBPACK_IMPORTED_MODULE_18__["EditMaterialIssueComponent"],
                _view_material_issue_view_material_issue_component__WEBPACK_IMPORTED_MODULE_19__["ViewMaterialIssueComponent"],
                _list_material_issue_list_material_issue_component__WEBPACK_IMPORTED_MODULE_20__["ListMaterialIssueComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                _inventory_routing_module__WEBPACK_IMPORTED_MODULE_2__["InventoryRoutingModule"]
            ],
            providers: [
                _inventory_service__WEBPACK_IMPORTED_MODULE_5__["InventoryService"],
                _order_reslover__WEBPACK_IMPORTED_MODULE_11__["OrderReslover"],
                _itemmaster_reslover__WEBPACK_IMPORTED_MODULE_26__["ItemmasterReslover"],
                _materialreceipt_reslover__WEBPACK_IMPORTED_MODULE_16__["MaterialreceiptReslover"],
                _materialissue_reslover__WEBPACK_IMPORTED_MODULE_21__["MaterialissueReslover"],
                _scrapsale_reslover__WEBPACK_IMPORTED_MODULE_31__["ScrapsaleReslover"]
            ]
        })
    ], InventoryModule);
    return InventoryModule;
}());



/***/ }),

/***/ "./src/app/layout/inventory/inventory.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/inventory/inventory.service.ts ***!
  \*******************************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
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


var InventoryService = /** @class */ (function () {
    function InventoryService(api) {
        this.api = api;
    }
    // item-master
    InventoryService.prototype.crateItemMaster = function (data) {
        return this.api.post('inventory/items-master', data);
    };
    InventoryService.prototype.getItemMaster = function (id) {
        return this.api.get('inventory/items-master/' + id);
    };
    InventoryService.prototype.updatItemMaster = function (id, data) {
        return this.api.put('inventory/items-master?id=' + id, data);
    };
    InventoryService.prototype.deleteItemMaster = function (id) {
        return this.api.delete("inventory/items-master/" + id);
    };
    // department-master
    InventoryService.prototype.crateDepartmentMaster = function (data) {
        return this.api.post('inventory/department-master', data);
    };
    InventoryService.prototype.getDepartmentMaster = function (id) {
        return this.api.get('inventory/department-master/' + id);
    };
    InventoryService.prototype.updatDepartmentMaster = function (id, data) {
        return this.api.put('inventory/department-master?id=' + id, data);
    };
    InventoryService.prototype.deleteDepartmentMaster = function (id) {
        return this.api.delete("inventory/department-master/" + id);
    };
    // orders
    InventoryService.prototype.crateOrder = function (data) {
        return this.api.post('inventory/orders', data);
    };
    InventoryService.prototype.getOrder = function (id) {
        return this.api.get('inventory/orders/' + id);
    };
    InventoryService.prototype.getOrderNumberDetails = function (data) {
        return this.api.post('inventory/orders/generate_order_number', data);
    };
    InventoryService.prototype.updatOrder = function (id, data) {
        return this.api.put('inventory/orders?id=' + id, data);
    };
    InventoryService.prototype.deleteOrder = function (id) {
        return this.api.delete("inventory/orders/" + id);
    };
    // Material Receipts
    InventoryService.prototype.addMr = function (data) {
        return this.api.post('inventory/material-receipt', data);
    };
    InventoryService.prototype.getMr = function (id) {
        return this.api.get('inventory/material-receipt/' + id);
    };
    InventoryService.prototype.getMrNumberDetails = function (data) {
        return this.api.post('inventory/material-receipt/generate_mr_number', data);
    };
    InventoryService.prototype.updatMr = function (id, data) {
        return this.api.put('inventory/material-receipt?id=' + id, data);
    };
    InventoryService.prototype.deleteMr = function (id) {
        return this.api.delete("inventory/material-receipt/" + id);
    };
    // Material Issue
    InventoryService.prototype.addMi = function (data) {
        return this.api.post('inventory/material-issue', data);
    };
    InventoryService.prototype.getMi = function (id) {
        return this.api.get('inventory/material-issue/' + id);
    };
    InventoryService.prototype.getMiNumberDetails = function (data) {
        return this.api.post('inventory/material-issue/generate_mi_number', data);
    };
    InventoryService.prototype.updatMi = function (id, data) {
        return this.api.put('inventory/material-issue?id=' + id, data);
    };
    InventoryService.prototype.deleteMi = function (id) {
        return this.api.delete("inventory/material-issue/" + id);
    };
    // Scrap Sale
    InventoryService.prototype.addSs = function (data) {
        return this.api.post('inventory/scrap-sale', data);
    };
    InventoryService.prototype.getSs = function (id) {
        return this.api.get('inventory/scrap-sale/' + id);
    };
    InventoryService.prototype.getSsNumberDetails = function (data) {
        return this.api.post('inventory/scrap-sale/generate_ss_number', data);
    };
    InventoryService.prototype.updatSs = function (id, data) {
        return this.api.put('inventory/scrap-sale?id=' + id, data);
    };
    InventoryService.prototype.deleteSs = function (id) {
        return this.api.delete("inventory/scrap-sale/" + id);
    };
    InventoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], InventoryService);
    return InventoryService;
}());



/***/ }),

/***/ "./src/app/layout/inventory/inventory/inventory.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/inventory/inventory/inventory.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/inventory/inventory/inventory.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/inventory/inventory/inventory.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbnZlbnRvcnkvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/inventory/inventory/inventory.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/inventory/inventory/inventory.component.ts ***!
  \*******************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
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

var InventoryComponent = /** @class */ (function () {
    function InventoryComponent() {
    }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/layout/inventory/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.scss */ "./src/app/layout/inventory/inventory/inventory.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/itemmaster-reslover.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/inventory/itemmaster-reslover.ts ***!
  \*********************************************************/
/*! exports provided: ItemmasterReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemmasterReslover", function() { return ItemmasterReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemmasterReslover = /** @class */ (function () {
    function ItemmasterReslover(is) {
        this.is = is;
    }
    ItemmasterReslover.prototype.resolve = function (route) {
        return this.is.getItemMaster(route.paramMap.get('id'));
    };
    ItemmasterReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_inventory_service__WEBPACK_IMPORTED_MODULE_1__["InventoryService"]])
    ], ItemmasterReslover);
    return ItemmasterReslover;
}());



/***/ }),

/***/ "./src/app/layout/inventory/list-item-master/list-item-master.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/inventory/list-item-master/list-item-master.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Item Master'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\r\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\r\n  </app-smart-table>\r\n</div>\r\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\r\n  <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Delete Item Master</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <p>Are you sure you want to delete this Item?</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\r\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\r\n                <span *ngIf=\"process !='processing'\">Delete</span>\r\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\r\n              </button>\r\n          </div>\r\n      </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/inventory/list-item-master/list-item-master.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/inventory/list-item-master/list-item-master.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbnZlbnRvcnkvbGlzdC1pdGVtLW1hc3Rlci9saXN0LWl0ZW0tbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/inventory/list-item-master/list-item-master.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/inventory/list-item-master/list-item-master.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ListItemMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemMasterComponent", function() { return ListItemMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
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





var ListItemMasterComponent = /** @class */ (function () {
    function ListItemMasterComponent(router, meta, is) {
        this.router = router;
        this.meta = meta;
        this.is = is;
        this.addButtonInfo = { text: 'Add Item-Master', url: '/inventory/add-item-master' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('inventory/items-master');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Item Name' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Name', name: 'name', sort: true },
                { title: 'Type', name: 'type', sort: false },
                { title: 'Units', name: 'unit', sort: false },
                { title: 'ItemType', name: 'itemtype', sort: false },
                { title: 'Rate(₹)', name: 'rate', sort: false },
                { title: 'Actions', links: ['Edit', 'Delete', 'View'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Name', name: 'name', sort: true },
                { title: 'Type', name: 'type', sort: false },
                { title: 'Units', name: 'unit', sort: false },
                { title: 'ItemType', name: 'itemtype', sort: false },
                { title: 'Rate(₹)', name: 'rate', sort: false },
                { title: 'Actions', links: ['View'] }
            ];
        }
    }
    ListItemMasterComponent.prototype.ngOnInit = function () {
    };
    ListItemMasterComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/inventory/items-master/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (event.data.action === 'View') {
            this.router.navigate(["/inventory/items-master/" + this.dataRow['row']['_id'] + "/view"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListItemMasterComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListItemMasterComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.is.deleteItemMaster(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) {
            console.log(error);
        });
    };
    ListItemMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-item-master',
            template: __webpack_require__(/*! ./list-item-master.component.html */ "./src/app/layout/inventory/list-item-master/list-item-master.component.html"),
            styles: [__webpack_require__(/*! ./list-item-master.component.scss */ "./src/app/layout/inventory/list-item-master/list-item-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"]])
    ], ListItemMasterComponent);
    return ListItemMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/list-material-issue/list-material-issue.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/inventory/list-material-issue/list-material-issue.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Material Issue'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\r\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\r\n  </app-smart-table>\r\n</div>\r\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\r\n  <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Delete Material Issue</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <p>Are you sure you want to delete this material Issue?</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\r\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\r\n                <span *ngIf=\"process !='processing'\">Delete</span>\r\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\r\n              </button>\r\n          </div>\r\n      </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/inventory/list-material-issue/list-material-issue.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/inventory/list-material-issue/list-material-issue.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbnZlbnRvcnkvbGlzdC1tYXRlcmlhbC1pc3N1ZS9saXN0LW1hdGVyaWFsLWlzc3VlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/inventory/list-material-issue/list-material-issue.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/inventory/list-material-issue/list-material-issue.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ListMaterialIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMaterialIssueComponent", function() { return ListMaterialIssueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
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





var ListMaterialIssueComponent = /** @class */ (function () {
    function ListMaterialIssueComponent(router, meta, is) {
        this.router = router;
        this.meta = meta;
        this.is = is;
        this.addButtonInfo = { text: 'Add Material Issue', url: '/inventory/add-material-issue' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('inventory/material-issue');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Site/MI Type/Department' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Site', name: 'site', sort: false },
                { title: 'MI no', name: 'mi_number', sort: false },
                { title: 'Mi type', name: 'mi_type', sort: false },
                { title: 'Department', name: 'department', sort: false },
                { title: 'Mi date', name: 'mi_date', dateFormat: 'fullDate', sort: false },
                { title: 'Total(₹)', name: 'total_amount', sort: false },
                { title: 'User', name: 'user', sort: false },
                { title: 'Actions', links: ['Edit', 'Delete', 'View'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Site', name: 'site', sort: false },
                { title: 'MI no', name: 'mi_number', sort: false },
                { title: 'Mi type', name: 'mi_type', sort: false },
                { title: 'Department', name: 'department', sort: false },
                { title: 'Mi date', name: 'mi_date', dateFormat: 'fullDate', sort: false },
                { title: 'Total(₹)', name: 'total_amount', sort: false },
                { title: 'User', name: 'user', sort: false },
                { title: 'Actions', links: ['View'] }
            ];
        }
    }
    ListMaterialIssueComponent.prototype.ngOnInit = function () {
    };
    ListMaterialIssueComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        // console.log('list material', data);
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/inventory/material-issue/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (event.data.action === 'View') {
            this.router.navigate(["/inventory/material-issue/" + this.dataRow['row']['_id'] + "/view"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListMaterialIssueComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListMaterialIssueComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.is.deleteMi(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) { console.log(error); });
    };
    ListMaterialIssueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-material-issue',
            template: __webpack_require__(/*! ./list-material-issue.component.html */ "./src/app/layout/inventory/list-material-issue/list-material-issue.component.html"),
            styles: [__webpack_require__(/*! ./list-material-issue.component.scss */ "./src/app/layout/inventory/list-material-issue/list-material-issue.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"]])
    ], ListMaterialIssueComponent);
    return ListMaterialIssueComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/list-material-receipt/list-material-receipt.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/inventory/list-material-receipt/list-material-receipt.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Material Receipt'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\r\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\r\n  </app-smart-table>\r\n</div>\r\n\r\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\r\n  <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Delete Material Receipt</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <p>Are you sure you want to delete this material receipt?</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\r\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\r\n                <span *ngIf=\"process !='processing'\">Delete</span>\r\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\r\n              </button>\r\n          </div>\r\n      </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/inventory/list-material-receipt/list-material-receipt.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/inventory/list-material-receipt/list-material-receipt.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbnZlbnRvcnkvbGlzdC1tYXRlcmlhbC1yZWNlaXB0L2xpc3QtbWF0ZXJpYWwtcmVjZWlwdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/inventory/list-material-receipt/list-material-receipt.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/inventory/list-material-receipt/list-material-receipt.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ListMaterialReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMaterialReceiptComponent", function() { return ListMaterialReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
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





var ListMaterialReceiptComponent = /** @class */ (function () {
    function ListMaterialReceiptComponent(router, meta, is) {
        this.router = router;
        this.meta = meta;
        this.is = is;
        this.addButtonInfo = { text: 'Add Material Receipts', url: '/inventory/add-material-receipt' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('inventory/material-receipt');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Site/MrNo/Vendor/Department' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Site', name: 'site', sort: false },
                { title: 'Mr no', name: 'mr_number', sort: false },
                { title: 'Mr type', name: 'mr_type', sort: false },
                { title: 'Rec type', name: 'rec_type', sort: false },
                { title: 'Vendor', name: 'vendor', sort: false },
                { title: 'Department', name: 'department', sort: false },
                { title: 'Mr date', name: 'mr_date', dateFormat: 'fullDate', sort: false },
                { title: 'Total(₹)', name: 'total_amount', sort: false },
                { title: 'User', name: 'user', sort: false },
                { title: 'Actions', links: ['Edit', 'Delete', 'View'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Site', name: 'site', sort: false },
                { title: 'Mr no', name: 'mr_number', sort: false },
                { title: 'Mr type', name: 'mr_type', sort: false },
                { title: 'Rec type', name: 'rec_type', sort: false },
                { title: 'Vendor', name: 'vendor', sort: false },
                { title: 'Department', name: 'department', sort: false },
                { title: 'Mr date', name: 'mr_date', dateFormat: 'fullDate', sort: false },
                { title: 'Total(₹)', name: 'total_amount', sort: false },
                { title: 'Actions', links: ['View'] }
            ];
        }
    }
    ListMaterialReceiptComponent.prototype.ngOnInit = function () {
    };
    ListMaterialReceiptComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        // console.log('list material', data);
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/inventory/material-receipt/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (event.data.action === 'View') {
            this.router.navigate(["/inventory/material-receipt/" + this.dataRow['row']['_id'] + "/view"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListMaterialReceiptComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListMaterialReceiptComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.is.deleteMr(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) { console.log(error); });
    };
    ListMaterialReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-material-receipt',
            template: __webpack_require__(/*! ./list-material-receipt.component.html */ "./src/app/layout/inventory/list-material-receipt/list-material-receipt.component.html"),
            styles: [__webpack_require__(/*! ./list-material-receipt.component.scss */ "./src/app/layout/inventory/list-material-receipt/list-material-receipt.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"]])
    ], ListMaterialReceiptComponent);
    return ListMaterialReceiptComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/list-order/list-order.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/inventory/list-order/list-order.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-smart-table [commonFilter]=\"commonFilter\"  [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Orders'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\r\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\r\n  </app-smart-table>\r\n</div>\r\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\r\n  <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Delete Order</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <p>Are you sure you want to delete this order?</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\r\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\r\n                <span *ngIf=\"process !='processing'\">Delete</span>\r\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\r\n              </button>\r\n          </div>\r\n      </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/inventory/list-order/list-order.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/inventory/list-order/list-order.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbnZlbnRvcnkvbGlzdC1vcmRlci9saXN0LW9yZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/inventory/list-order/list-order.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/inventory/list-order/list-order.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOrderComponent", function() { return ListOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
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





var ListOrderComponent = /** @class */ (function () {
    function ListOrderComponent(router, meta, is) {
        this.router = router;
        this.meta = meta;
        this.is = is;
        this.addButtonInfo = { text: 'Add orders', url: '/inventory/add-order' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('inventory/orders');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Site/Vendor/Department' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Site', name: 'site', sort: false },
                { title: 'Order no', name: 'order_number', sort: false },
                { title: 'Order type', name: 'order_type', sort: false },
                { title: 'Vendor', name: 'vendor', sort: false },
                { title: 'Department', name: 'department', sort: false },
                { title: 'Order date', name: 'order_date', dateFormat: 'fullDate', sort: false },
                { title: 'Total(₹)', name: 'total_amount', sort: false },
                { title: 'User', name: 'user', sort: false },
                { title: 'Actions', links: ['Edit', 'Delete', 'View'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Site', name: 'site', sort: false },
                { title: 'Order no', name: 'order_number', sort: false },
                { title: 'Order type', name: 'order_type', sort: false },
                { title: 'Vendor', name: 'vendor', sort: false },
                { title: 'Department', name: 'department', sort: false },
                { title: 'Order date', name: 'order_date', dateFormat: 'fullDate', sort: false },
                { title: 'Total(₹)', name: 'total_amount', sort: false },
                { title: 'User', name: 'user', sort: false },
                { title: 'Actions', links: ['View'] }
            ];
        }
    }
    ListOrderComponent.prototype.ngOnInit = function () {
    };
    ListOrderComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/inventory/orders/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (event.data.action === 'View') {
            this.router.navigate(["/inventory/orders/" + this.dataRow['row']['_id'] + "/view"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListOrderComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListOrderComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.is.deleteOrder(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) { console.log(error); });
    };
    ListOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-order',
            template: __webpack_require__(/*! ./list-order.component.html */ "./src/app/layout/inventory/list-order/list-order.component.html"),
            styles: [__webpack_require__(/*! ./list-order.component.scss */ "./src/app/layout/inventory/list-order/list-order.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"]])
    ], ListOrderComponent);
    return ListOrderComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/list-scrap-sale/list-scrap-sale.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/inventory/list-scrap-sale/list-scrap-sale.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Scrap Sale'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\r\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\r\n  </app-smart-table>\r\n</div>\r\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\r\n  <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Delete Scrap Sale</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <p>Are you sure you want to delete this Scrap Sale?</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\r\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\r\n                <span *ngIf=\"process !='processing'\">Delete</span>\r\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\r\n              </button>\r\n          </div>\r\n      </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/inventory/list-scrap-sale/list-scrap-sale.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/inventory/list-scrap-sale/list-scrap-sale.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbnZlbnRvcnkvbGlzdC1zY3JhcC1zYWxlL2xpc3Qtc2NyYXAtc2FsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/inventory/list-scrap-sale/list-scrap-sale.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/inventory/list-scrap-sale/list-scrap-sale.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListScrapSaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListScrapSaleComponent", function() { return ListScrapSaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
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





var ListScrapSaleComponent = /** @class */ (function () {
    function ListScrapSaleComponent(router, meta, is) {
        this.router = router;
        this.meta = meta;
        this.is = is;
        this.addButtonInfo = { text: 'Add Scrap Sale', url: '/inventory/add-scrap-sale' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('inventory/scrap-sale');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by vendor/department' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Site', name: 'site', sort: false },
                { title: 'Ss no', name: 'ss_number', sort: false },
                { title: 'Ss date', name: 'ss_date', dateFormat: 'fullDate', sort: false },
                { title: 'Vendor', name: 'vendor', sort: false },
                { title: 'Department', name: 'department', sort: false },
                { title: 'Total(₹)', name: 'total_amount', sort: false },
                { title: 'User', name: 'user', sort: false },
                { title: 'Actions', links: ['Edit', 'Delete', 'View'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Site', name: 'site', sort: false },
                { title: 'Ss no', name: 'ss_number', sort: false },
                { title: 'Ss date', name: 'ss_date', dateFormat: 'fullDate', sort: false },
                { title: 'Vendor', name: 'vendor', sort: false },
                { title: 'Department', name: 'department', sort: false },
                { title: 'Total(₹)', name: 'total_amount', sort: false },
                { title: 'User', name: 'user', sort: false },
                { title: 'Actions', links: ['View'] }
            ];
        }
    }
    ListScrapSaleComponent.prototype.ngOnInit = function () {
    };
    ListScrapSaleComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        // console.log('list material', data);
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/inventory/scrap-sale/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (event.data.action === 'View') {
            this.router.navigate(["/inventory/scrap-sale/" + this.dataRow['row']['_id'] + "/view"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListScrapSaleComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListScrapSaleComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.is.deleteSs(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) { console.log(error); });
    };
    ListScrapSaleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-scrap-sale',
            template: __webpack_require__(/*! ./list-scrap-sale.component.html */ "./src/app/layout/inventory/list-scrap-sale/list-scrap-sale.component.html"),
            styles: [__webpack_require__(/*! ./list-scrap-sale.component.scss */ "./src/app/layout/inventory/list-scrap-sale/list-scrap-sale.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"]])
    ], ListScrapSaleComponent);
    return ListScrapSaleComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/materialissue-reslover.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/inventory/materialissue-reslover.ts ***!
  \************************************************************/
/*! exports provided: MaterialissueReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialissueReslover", function() { return MaterialissueReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialissueReslover = /** @class */ (function () {
    function MaterialissueReslover(is) {
        this.is = is;
    }
    MaterialissueReslover.prototype.resolve = function (route) {
        return this.is.getMi(route.paramMap.get('id'));
    };
    MaterialissueReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_inventory_service__WEBPACK_IMPORTED_MODULE_1__["InventoryService"]])
    ], MaterialissueReslover);
    return MaterialissueReslover;
}());



/***/ }),

/***/ "./src/app/layout/inventory/materialreceipt-reslover.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/inventory/materialreceipt-reslover.ts ***!
  \**************************************************************/
/*! exports provided: MaterialreceiptReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialreceiptReslover", function() { return MaterialreceiptReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialreceiptReslover = /** @class */ (function () {
    function MaterialreceiptReslover(is) {
        this.is = is;
    }
    MaterialreceiptReslover.prototype.resolve = function (route) {
        return this.is.getMr(route.paramMap.get('id'));
    };
    MaterialreceiptReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_inventory_service__WEBPACK_IMPORTED_MODULE_1__["InventoryService"]])
    ], MaterialreceiptReslover);
    return MaterialreceiptReslover;
}());



/***/ }),

/***/ "./src/app/layout/inventory/order-reslover.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/inventory/order-reslover.ts ***!
  \****************************************************/
/*! exports provided: OrderReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderReslover", function() { return OrderReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderReslover = /** @class */ (function () {
    function OrderReslover(is) {
        this.is = is;
    }
    OrderReslover.prototype.resolve = function (route) {
        return this.is.getOrder(route.paramMap.get('id'));
    };
    OrderReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_inventory_service__WEBPACK_IMPORTED_MODULE_1__["InventoryService"]])
    ], OrderReslover);
    return OrderReslover;
}());



/***/ }),

/***/ "./src/app/layout/inventory/scrapsale-reslover.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/inventory/scrapsale-reslover.ts ***!
  \********************************************************/
/*! exports provided: ScrapsaleReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrapsaleReslover", function() { return ScrapsaleReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory.service */ "./src/app/layout/inventory/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrapsaleReslover = /** @class */ (function () {
    function ScrapsaleReslover(is) {
        this.is = is;
    }
    ScrapsaleReslover.prototype.resolve = function (route) {
        return this.is.getSs(route.paramMap.get('id'));
    };
    ScrapsaleReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_inventory_service__WEBPACK_IMPORTED_MODULE_1__["InventoryService"]])
    ], ScrapsaleReslover);
    return ScrapsaleReslover;
}());



/***/ }),

/***/ "./src/app/layout/inventory/view-item-master/view-item-master.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/inventory/view-item-master/view-item-master.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      View Item Master`\r\n      <button class=\"btn btn-primary float-right\" (click)=\"gotoEdit()\"  type=\"button\">\r\n        <i class=\"fa fa-edit\" aria-hidden=\"true\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n\r\n      <div class=\"form-group row\">\r\n       <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-md-4\">Type</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{itemsDetails?.type}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Name</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{itemsDetails?.name}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-3\">Description</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{itemsDetails?.pdescription}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Item Category</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{itemsDetails?.itemcategory}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"form-group row\">\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-md-4\">Item Type</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{itemsDetails?.itemtype}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Unit</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{itemsDetails?.unit}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Godown</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{itemsDetails?.godown}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Opening Quantity</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{itemsDetails?.oq}}</label>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-md-3\">Rate</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{itemsDetails?.prate}}</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Value</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{itemsDetails?.value}}</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">HSN Code</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{itemsDetails?.hsncode}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">GST</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{itemsDetails?.gst}}</label>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/inventory/view-item-master/view-item-master.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/inventory/view-item-master/view-item-master.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbnZlbnRvcnkvdmlldy1pdGVtLW1hc3Rlci92aWV3LWl0ZW0tbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/inventory/view-item-master/view-item-master.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/inventory/view-item-master/view-item-master.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewItemMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewItemMasterComponent", function() { return ViewItemMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewItemMasterComponent = /** @class */ (function () {
    function ViewItemMasterComponent(aroute, router) {
        this.aroute = aroute;
        this.router = router;
    }
    ViewItemMasterComponent.prototype.ngOnInit = function () {
        this.itemsDetails = this.aroute.snapshot.data['items_details'];
    };
    ViewItemMasterComponent.prototype.gotoEdit = function () {
        this.router.navigate(["/inventory/items-master/" + this.itemsDetails['_id'] + "/edit"]);
    };
    ViewItemMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-item-master',
            template: __webpack_require__(/*! ./view-item-master.component.html */ "./src/app/layout/inventory/view-item-master/view-item-master.component.html"),
            styles: [__webpack_require__(/*! ./view-item-master.component.scss */ "./src/app/layout/inventory/view-item-master/view-item-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewItemMasterComponent);
    return ViewItemMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/view-material-issue/view-material-issue.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/inventory/view-material-issue/view-material-issue.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      View Material Issue`\r\n      <button class=\"btn btn-primary float-right\" (click)=\"gotoEdit()\"  type=\"button\">\r\n        <i class=\"fa fa-edit\" aria-hidden=\"true\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"form-group row\">\r\n       <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Site</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{miDetails?.site}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">MI type</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{miDetails?.mi_type}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Mi no</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{miDetails?.mi_number}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Mi date</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{miDetails?.mi_date | date}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"form-group row\">\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Issued From</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{miDetails?.issuedfrom}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Issued By</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{miDetails?.issuedby}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">MC Reading</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{miDetails?.mcreading}}</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Department</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{miDetails?.department}}</label>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">Material Issue items</div>\r\n            <div class=\"card-body\">\r\n              <table class=\"table table-bordered\">\r\n                <tr>\r\n                  <th>Item</th>\r\n                  <th>Unit</th>\r\n                  <th>Qty</th>\r\n                  <th>Price(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                  <th>Refund</th>\r\n                  <th>Material Type</th>\r\n                  <th>RefQty</th>\r\n                  <th>Godown</th>\r\n                  <th>Amount(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n              </tr>\r\n                <tr *ngFor=\"let items of miDetails.materiali_items; let i=index\">\r\n                  <td>{{items?.name}}</td>\r\n                  <td>{{items?.unit}}</td>\r\n                  <td>{{items?.qty}}</td>\r\n                  <td>{{items?.price}}</td>\r\n                  <td>{{items?.refund}}</td>\r\n                  <td>{{items?.mat_type}}</td>\r\n                  <td>{{items?.ref_qty}}</td>\r\n                  <td>{{items?.godown}}</td>\r\n                  <td>{{items?.total}}</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row mt-3\">\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Narration</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{miDetails?.narration}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Net Amt(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{miDetails?.net_amount}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Rounded off(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{miDetails?.rounded_off}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Round of Type</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{miDetails?.round_off_type}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Total(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{miDetails?.total_amount}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/inventory/view-material-issue/view-material-issue.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/inventory/view-material-issue/view-material-issue.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbnZlbnRvcnkvdmlldy1tYXRlcmlhbC1pc3N1ZS92aWV3LW1hdGVyaWFsLWlzc3VlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/inventory/view-material-issue/view-material-issue.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/inventory/view-material-issue/view-material-issue.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ViewMaterialIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMaterialIssueComponent", function() { return ViewMaterialIssueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewMaterialIssueComponent = /** @class */ (function () {
    function ViewMaterialIssueComponent(aroute, router) {
        this.aroute = aroute;
        this.router = router;
    }
    ViewMaterialIssueComponent.prototype.ngOnInit = function () {
        this.miDetails = this.aroute.snapshot.data['mi_details'];
    };
    ViewMaterialIssueComponent.prototype.gotoEdit = function () {
        this.router.navigate(["/inventory/material-issue/" + this.miDetails['_id'] + "/edit"]);
    };
    ViewMaterialIssueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-material-issue',
            template: __webpack_require__(/*! ./view-material-issue.component.html */ "./src/app/layout/inventory/view-material-issue/view-material-issue.component.html"),
            styles: [__webpack_require__(/*! ./view-material-issue.component.scss */ "./src/app/layout/inventory/view-material-issue/view-material-issue.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewMaterialIssueComponent);
    return ViewMaterialIssueComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/view-material-receipt/view-material-receipt.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/inventory/view-material-receipt/view-material-receipt.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      View Material Receipt`\r\n      <button class=\"btn btn-primary float-right\" (click)=\"gotoEdit()\"  type=\"button\">\r\n        <i class=\"fa fa-edit\" aria-hidden=\"true\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"form-group row\">\r\n       <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Site</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{mrDetails?.site}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">MR type</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{mrDetails?.mr_type}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Mr no</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{mrDetails?.mr_number}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Mr date</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{mrDetails?.mr_date | date}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"form-group row\">\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Vendor</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{mrDetails?.vendor}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Department</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{mrDetails?.department}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Invoice No</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{mrDetails?.invno}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Invoice Date</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{mrDetails?.invdate}}</label>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Godown</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{mrDetails?.godown}}</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Receipt type</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{mrDetails?.rec_type}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Po No. / Job No.</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{mrDetails?.pjno}}</label>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">Material Receipt items</div>\r\n            <div class=\"card-body\">\r\n              <table class=\"table table-bordered\">\r\n                <tr>\r\n                  <th>Item</th>\r\n                  <th>Unit</th>\r\n                  <th>Qty</th>\r\n                  <th>Price(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                  <th>Dis(%)</th>\r\n                  <th>CGST(%)</th>\r\n                  <th>SGST(%)</th>\r\n                  <th>IGST(%)</th>\r\n                  <th>Amount(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                </tr>\r\n                <tr *ngFor=\"let items of mrDetails.materialr_items; let i=index\">\r\n                  <td>{{items?.name}}</td>\r\n                  <td>{{items?.unit}}</td>\r\n                  <td>{{items?.qty}}</td>\r\n                  <td>{{items?.price}}</td>\r\n                  <td>{{items?.discount}}</td>\r\n                  <td>{{items?.cgst}}</td>\r\n                  <td>{{items?.sgst}}</td>\r\n                  <td>{{items?.igst}}</td>\r\n                  <td>{{items?.total}}</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row mt-3\">\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Narration</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{mrDetails?.narration}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Net Amt(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{mrDetails?.net_amount}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Rounded off(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{mrDetails?.rounded_off}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Round of Type</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{mrDetails?.round_off_type}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Total(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{mrDetails?.total_amount}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/inventory/view-material-receipt/view-material-receipt.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/inventory/view-material-receipt/view-material-receipt.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbnZlbnRvcnkvdmlldy1tYXRlcmlhbC1yZWNlaXB0L3ZpZXctbWF0ZXJpYWwtcmVjZWlwdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/inventory/view-material-receipt/view-material-receipt.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/inventory/view-material-receipt/view-material-receipt.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ViewMaterialReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMaterialReceiptComponent", function() { return ViewMaterialReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewMaterialReceiptComponent = /** @class */ (function () {
    function ViewMaterialReceiptComponent(aroute, router) {
        this.aroute = aroute;
        this.router = router;
    }
    ViewMaterialReceiptComponent.prototype.ngOnInit = function () {
        this.mrDetails = this.aroute.snapshot.data['mr_details'];
    };
    ViewMaterialReceiptComponent.prototype.gotoEdit = function () {
        this.router.navigate(["/inventory/material-receipt/" + this.mrDetails['_id'] + "/edit"]);
    };
    ViewMaterialReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-material-receipt',
            template: __webpack_require__(/*! ./view-material-receipt.component.html */ "./src/app/layout/inventory/view-material-receipt/view-material-receipt.component.html"),
            styles: [__webpack_require__(/*! ./view-material-receipt.component.scss */ "./src/app/layout/inventory/view-material-receipt/view-material-receipt.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewMaterialReceiptComponent);
    return ViewMaterialReceiptComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/view-order/view-order.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/inventory/view-order/view-order.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      View Order\r\n      <button class=\"btn btn-primary float-right\" (click)=\"gotoEdit()\"  type=\"button\">\r\n        <i class=\"fa fa-edit\" aria-hidden=\"true\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-lg-4 col-md-4\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Site</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{orderDetails?.site}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Order type</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{orderDetails?.order_type}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Order no</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{orderDetails?.order_number}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-lg-4 col-md-4\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Order date</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{orderDetails?.order_date | date}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Delivery date</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{orderDetails?.delivery_date| date}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Vendor</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{orderDetails?.vendor}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-lg-4 col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Job type</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{orderDetails?.job_type}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Department</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{orderDetails?.department}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">Order line items</div>\r\n            <div class=\"card-body\">\r\n              <table class=\"table table-bordered\">\r\n                <tr>\r\n                  <th>Item</th>\r\n                  <th>Unit</th>\r\n                  <th>Qty</th>\r\n                  <th>Price(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                  <th>Dis(%)</th>\r\n                  <th>CGST(%)</th>\r\n                  <th>SGST(%)</th>\r\n                  <th>IGST(%)</th>\r\n                  <th>Amount(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                </tr>\r\n                <tr *ngFor=\"let items of orderDetails.order_items; let i=index\">\r\n                  <td>{{items?.name}}</td>\r\n                  <td>{{items?.unit}}</td>\r\n                  <td>{{items?.qty}}</td>\r\n                  <td>{{items?.price}}</td>\r\n                  <td>{{items?.discount}}</td>\r\n                  <td>{{items?.cgst}}</td>\r\n                  <td>{{items?.sgst}}</td>\r\n                  <td>{{items?.igst}}</td>\r\n                  <td>{{items?.total}}</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row mt-3\">\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Narration</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{orderDetails?.narration}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Terms And Conditions</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{orderDetails?.terms_and_conditions}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Net Amt(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{orderDetails?.net_amount}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Rounded off(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{orderDetails?.rounded_off}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Round of Type</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{orderDetails?.round_off_type}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Total(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{orderDetails?.total_amount}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/inventory/view-order/view-order.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/inventory/view-order/view-order.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbnZlbnRvcnkvdmlldy1vcmRlci92aWV3LW9yZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/inventory/view-order/view-order.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/inventory/view-order/view-order.component.ts ***!
  \*********************************************************************/
/*! exports provided: ViewOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOrderComponent", function() { return ViewOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewOrderComponent = /** @class */ (function () {
    function ViewOrderComponent(aroute, router) {
        this.aroute = aroute;
        this.router = router;
    }
    ViewOrderComponent.prototype.ngOnInit = function () {
        this.orderDetails = this.aroute.snapshot.data['order_details'];
    };
    ViewOrderComponent.prototype.gotoEdit = function () {
        this.router.navigate(["/inventory/orders/" + this.orderDetails['_id'] + "/edit"]);
    };
    ViewOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-order',
            template: __webpack_require__(/*! ./view-order.component.html */ "./src/app/layout/inventory/view-order/view-order.component.html"),
            styles: [__webpack_require__(/*! ./view-order.component.scss */ "./src/app/layout/inventory/view-order/view-order.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewOrderComponent);
    return ViewOrderComponent;
}());



/***/ }),

/***/ "./src/app/layout/inventory/view-scrap-sale/view-scrap-sale.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/inventory/view-scrap-sale/view-scrap-sale.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  view-scrap-sale works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/layout/inventory/view-scrap-sale/view-scrap-sale.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/inventory/view-scrap-sale/view-scrap-sale.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbnZlbnRvcnkvdmlldy1zY3JhcC1zYWxlL3ZpZXctc2NyYXAtc2FsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/inventory/view-scrap-sale/view-scrap-sale.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/inventory/view-scrap-sale/view-scrap-sale.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ViewScrapSaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewScrapSaleComponent", function() { return ViewScrapSaleComponent; });
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

var ViewScrapSaleComponent = /** @class */ (function () {
    function ViewScrapSaleComponent() {
    }
    ViewScrapSaleComponent.prototype.ngOnInit = function () {
    };
    ViewScrapSaleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-scrap-sale',
            template: __webpack_require__(/*! ./view-scrap-sale.component.html */ "./src/app/layout/inventory/view-scrap-sale/view-scrap-sale.component.html"),
            styles: [__webpack_require__(/*! ./view-scrap-sale.component.scss */ "./src/app/layout/inventory/view-scrap-sale/view-scrap-sale.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewScrapSaleComponent);
    return ViewScrapSaleComponent;
}());



/***/ })

}]);
//# sourceMappingURL=inventory-inventory-module.js.map