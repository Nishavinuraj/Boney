(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tyre-management-tyre-management-module"],{

/***/ "./src/app/layout/tyre-management/components/add-observation-and-recommendation/add-observation-and-recommendation.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/add-observation-and-recommendation/add-observation-and-recommendation.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"oarForm\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Add Observation and Recommendation Master</div>\r\n      <div class=\"card-body\">\r\n        <div class=\"form-group row\">\r\n        <div class=\"mt-3\">\r\n          <div class=\"form-group row\">\r\n\r\n            <div class=\"col-lg-12 col-md-8\">\r\n\r\n              <label class=\"required\">Type</label>\r\n              <select class=\"form-control\" formControlName=\"orname\" >\r\n                <option value=\"\">Please Select</option>\r\n                <option value=\"Observation\">Observation</option>\r\n                <option value=\"Recommendation\">Recommendation</option>\r\n              </select>\r\n            </div>\r\n  \r\n            <div class=\"col-lg-12 col-md-8\">\r\n\r\n                <label>Description</label>\r\n                <input type=\"text\" formControlName=\"desc\" class=\"form-control\" placeholder=\"Description\">\r\n              </div>\r\n    \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button class=\"btn btn-success float-right\" (click)=\"saveitems()\" [disabled]=\"!oarForm.valid || process == 'saving'\" type=\"button\">\r\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/add-observation-and-recommendation/add-observation-and-recommendation.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/add-observation-and-recommendation/add-observation-and-recommendation.component.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90eXJlLW1hbmFnZW1lbnQvY29tcG9uZW50cy9hZGQtb2JzZXJ2YXRpb24tYW5kLXJlY29tbWVuZGF0aW9uL2FkZC1vYnNlcnZhdGlvbi1hbmQtcmVjb21tZW5kYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/add-observation-and-recommendation/add-observation-and-recommendation.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/add-observation-and-recommendation/add-observation-and-recommendation.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: AddObservationAndRecommendationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddObservationAndRecommendationComponent", function() { return AddObservationAndRecommendationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tyremanagement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tyremanagement.service */ "./src/app/layout/tyre-management/tyremanagement.service.ts");
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




var AddObservationAndRecommendationComponent = /** @class */ (function () {
    function AddObservationAndRecommendationComponent(fb, tm, router) {
        this.fb = fb;
        this.tm = tm;
        this.router = router;
    }
    AddObservationAndRecommendationComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getOptions();
    };
    AddObservationAndRecommendationComponent.prototype.buildForm = function () {
        this.oarForm = this.fb.group({
            'orname': [''],
            'desc': ['']
        });
    };
    AddObservationAndRecommendationComponent.prototype.saveitems = function () {
        var _this = this;
        this.process = 'saving';
        console.log(this.oarForm.value);
        this.tm.addOar(this.oarForm.value).subscribe(function (ordersInfo) {
            _this.process = 'done';
            _this.router.navigate(['/tyre-management/observation-and-recommendation']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddObservationAndRecommendationComponent.prototype.getOptions = function () {
    };
    AddObservationAndRecommendationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-observation-and-recommendation',
            template: __webpack_require__(/*! ./add-observation-and-recommendation.component.html */ "./src/app/layout/tyre-management/components/add-observation-and-recommendation/add-observation-and-recommendation.component.html"),
            styles: [__webpack_require__(/*! ./add-observation-and-recommendation.component.scss */ "./src/app/layout/tyre-management/components/add-observation-and-recommendation/add-observation-and-recommendation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _tyremanagement_service__WEBPACK_IMPORTED_MODULE_2__["TyremanagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddObservationAndRecommendationComponent);
    return AddObservationAndRecommendationComponent;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/components/add-truck-inspection/add-truck-inspection.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/add-truck-inspection/add-truck-inspection.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <div class=\"row\">\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\">\n      <form [formGroup]=\"filterForm\" novalidate>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h4><i class=\"fa fa-truck\"></i> Truck Inspection</h4>\n            <hr />\n          </div>\n          <div class=\"col-md-2\">\n            <label class=\"required\">Truck No</label>\n            <ng-select [items]=\"truckno_option\" placeholder=\"Type and search Truck No\" bindLabel=\"truckno\" bindValue=\"truckno\"\n              formControlName=\"truck_no\">\n            </ng-select>\n          </div>\n\n          <div class=\"col-md-2\">\n            <label class=\"required\">Entry Type</label>\n            <select class=\"form-control\" formControlName=\"type\" >\n              <option *ngFor=\"let t of types\">{{t.name}}</option>\n            </select>\n          </div>\n\n          <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <label class=\"required\">Date</label>\n              <div class=\"input-group datepicker-input\">\n                <input class=\"form-control\" placeholder=\"dd/mm/yyyy\" name=\"dp\" formControlName=\"idate\" ngbDatepicker #d=\"ngbDatepicker\" />\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-2\">\n            <label>Km Reading</label>\n            <input type=\"number\" class=\"form-control\" formControlName=\"km_reading\">\n          </div>\n\n          <div class=\"col-md-3 col-xs-12 col-sm-12 col-lg-3\">\n            <button [disabled]=\"loading\" (click)=\"fetch()\" class=\"btn btn-warning mg-top-26\"><i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch</button>\n          </div>\n        </div>\n      </form>\n\n      <!-- <ngb-pagination\n        [(page)]=\"pagination.currenPage\"\n        [pageSize]=\"pagination.pageSize\"\n        [collectionSize]=\"pagination.total\"\n        [maxSize]=\"pagination.maxSize\"\n        (pageChange)=\"fetchReport()\"\n      ></ngb-pagination> -->\n      <!-- <p>\n        <strong>Total:</strong> {{ pagination.total }}, <strong>Records per page:</strong> {{ pagination.pageSize }},\n        <strong>Showing:</strong> {{ (pagination.currenPage - 1) * pagination.pageSize }} -\n        {{ (pagination.currenPage - 1) * pagination.pageSize + 50 }}\n      </p> -->\n\n      <div *ngIf=\"activeTab === 'New'\" >\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"addInspection(addForm.valid)\" novalidate>\n          <label>Selected Truck No:</label>\n          <p><strong>{{truckNo}}</strong></p>\n          <div class=\"table-scroll\">\n            <div class=\"table-scroll-inner\" formArrayName=\"items\" *ngFor=\"let item of addForm.get('items').controls; let i = index\">\n              <div [formGroupName]=\"i\">\n                \n                <!-- <div class=\"row\">\n\n                  <div class=\"col-md-1\">                      \n                    <label>Position No.</label>\n                    <input class=\"form-control\" type=\"number\" formControlName=\"pno\" [attr.disabled]=\"true\"> \n                  </div>\n\n                  <div class=\"col-md-2\">                      \n                    <label>Position Name</label>\n                    <input class=\"form-control\" type=\"text\" formControlName=\"positionname\" [attr.disabled]=\"true\"> \n                  </div>\n\n                  <div class=\"col-md-2\">                      \n                    <label>Tyre no.</label>\n                    <input class=\"form-control\" type=\"text\" formControlName=\"tyre_no\" [attr.disabled]=\"true\"> \n                  </div>\n     \n                  <div class=\"col-md-2\">                      \n                    <label>Fitment Date</label>\n                    <input class=\"form-control\" type=\"text\" formControlName=\"date_of_fitment\" [attr.disabled]=\"true\"> \n                  </div>\n                \n                  <div class=\"col-md-2\">                      \n                    <label>Fitment Km</label>\n                    <input class=\"form-control\" type=\"Number\" formControlName=\"fitment_km\" [attr.disabled]=\"true\"> \n                  </div>\n                \n                  <div class=\"col-md-1\">                      \n                    <label>NSD</label>\n                    <input class=\"form-control\" type=\"number\" formControlName=\"nsd\" [attr.disabled]=\"true\"> \n                  </div>\n\n                  <div class=\"col-md-1\">                      \n                    <label>RTD</label>\n                    <input class=\"form-control\" type=\"number\" formControlName=\"rtd\" required>\n                    <span class=\"text-danger\" *ngIf=\"(multipleFormControls[i].controls['rtd'].dirty || submitted) && multipleFormControls[i].controls['rtd'].hasError('required')\">Field is required</span>\n                  </div>\n      \n                  <div class=\"col-md-3\">\n                    <button [disabled]=\"loading\" class=\"btn btn-success mg-top-26\" type=\"button\" (click)=\"addItem(i)\">+</button>&nbsp;&nbsp;\n                    <button [disabled]=\"loading\" class=\"btn btn-danger mg-top-26\" type=\"button\" (click)=\"removeItem(i)\">-</button>\n                  </div>\n                  <hr>\n                </div> -->\n\n                <table class=\"table\">\n                  <tbody>\n                    <tr>\n                      <td>\n                        <label>Position No</label>\n                        <input class=\"form-control\" type=\"text\" formControlName=\"pno\" [attr.disabled]=\"true\">\n                      </td>\n\n                      <td>\n                        <label>Position Name</label>\n                        <input class=\"form-control\" type=\"text\" formControlName=\"positionname\" [attr.disabled]=\"true\">\n                      </td>\n\n                      <td>\n                        <label>Tyre No</label>\n                        <input class=\"form-control\" type=\"text\" formControlName=\"tyre_no\" [attr.disabled]=\"true\">\n                      </td>\n\n                      <td>\n                        <label>Fitment Date</label>\n                        <input class=\"form-control\" type=\"date\" formControlName=\"date_of_fitment\" [attr.disabled]=\"true\">\n                      </td>\n\n                      <td>\n                        <label>Fitment Km</label>\n                        <input class=\"form-control\" type=\"Number\" formControlName=\"fitment_km\" [attr.disabled]=\"true\">\n                      </td>\n\n                      <td>\n                        <label>Nsd</label>\n                        <input class=\"form-control\" type=\"text\" formControlName=\"nsd\" [attr.disabled]=\"true\">\n                      </td>\n\n                      <td>\n                        <label>Rtd</label>\n                        <input class=\"form-control\" type=\"text\" formControlName=\"rtd\" required>\n                        <span class=\"text-danger\" *ngIf=\"(multipleFormControls[i].controls['rtd'].dirty || submitted) && multipleFormControls[i].controls['rtd'].hasError('required')\">Field is required</span>\n                      </td>\n\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Add Observations</label>\n              <ng-select [multiple]=\"true\" [items]=\"observations\" placeholder=\"Type and search observations\"\n                formControlName=\"observations\">\n              </ng-select>\n            </div>\n            <div class=\"col-md-6\">\n              <label >Add Recommendations</label>\n              <ng-select [multiple]=\"true\" [items]=\"recommendations\" placeholder=\"Type and search recommendations\"\n                formControlName=\"recommendations\">\n              </ng-select>\n            </div>\n            <div class=\"col-md-6\">                      \n              <label>Remarks</label>\n              <textarea class=\"form-control\" formControlName=\"remarks\" ></textarea>\n            </div>\n          </div>\n          <br>\n          <div >\n            <button class=\"btn btn-success\" type=\"submit\">Save</button>\n          </div>\n\n        </form>\n      </div>\n\n      <form *ngIf=\"activeTab === 'Inspection'\" [formGroup]=\"editForm\" class=\"table-overflow\" novalidate>\n       \n        <div class=\"table-scroll\">\n          <div class=\"table-scroll-inner\" formArrayName=\"inspArr\" *ngFor=\"let inspItem of editForm.get('inspArr').controls; let k = index\">\n          <div [formGroupName]=\"k\">\n\n              <!-- <div class=\"row\">\n\n                <div class=\"col-md-1\">\n                  <label>Pos. No.</label>\n                    <input type=\"number\" class=\"form-control\" formControlName=\"pno\" [attr.disabled]=\"true\">\n                </div>\n\n                <div class=\"col-md-2\">\n                  <label>Position Name</label>\n                  <input type=\"text\" class=\"form-control\" formControlName=\"positionname\" [attr.disabled]=\"true\">\n                </div>\n    \n                <div class=\"col-md-2\">                      \n                    <label>Tyre no.</label>\n                    <input class=\"form-control\" type=\"text\" formControlName=\"tyre_no\" [attr.disabled]=\"true\"> \n                  </div>\n     \n                  <div class=\"col-md-2\">                      \n                    <label>Fitment Date</label>\n                    <input class=\"form-control\" type=\"text\" formControlName=\"date_of_fitment\" [attr.disabled]=\"true\"> \n                  </div>\n                \n                  <div class=\"col-md-2\">                      \n                    <label>Fitment Km</label>\n                    <input class=\"form-control\" type=\"Number\" formControlName=\"fitment_km\" [attr.disabled]=\"true\"> \n                  </div>\n              \n                <div class=\"col-md-2\">                      \n                  <label>NSD</label>\n                  <input class=\"form-control\" type=\"text\" formControlName=\"nsd\" [attr.disabled]=\"true\"> \n                </div>\n\n                <div class=\"col-md-2\">                      \n                  <label>RTD</label>\n                  <input class=\"form-control\" type=\"text\" formControlName=\"rtd\" >\n                </div>\n    \n                <div class=\"col-md-1\">\n                  <button (click)=\"delete(k)\" class=\"btn btn-danger mg-top-26\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button>\n                </div>\n\n                <hr>\n              </div> -->\n\n              <table class=\"table\">\n                <tbody>\n                  <tr>\n                    <td>\n                      <label>Position No</label>\n                      <input type=\"number\" class=\"form-control\" formControlName=\"pno\" [attr.disabled]=\"true\">\n                    </td>\n\n                    <td>\n                      <label>Position Name</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"positionname\" [attr.disabled]=\"true\">\n                    </td>\n\n                    <td>\n                        <label>Tyre No</label>\n                        <input class=\"form-control\" type=\"text\" formControlName=\"tyre_no\" [attr.disabled]=\"true\">\n                      </td>\n\n                      <td>\n                        <label>Fitment Date</label>\n                        <input class=\"form-control\" type=\"date\" formControlName=\"date_of_fitment\" [attr.disabled]=\"true\">\n                      </td>\n\n                      <td>\n                        <label>Fitment Km</label>\n                        <input class=\"form-control\" type=\"Number\" formControlName=\"fitment_km\" [attr.disabled]=\"true\">\n                      </td>\n\n                    <td>\n                      <label>Nsd</label>\n                      <input class=\"form-control\" type=\"text\" formControlName=\"nsd\" [attr.disabled]=\"true\">\n                    </td>\n\n                    <td>\n                      <label>Rtd</label>\n                      <input class=\"form-control\" type=\"text\" formControlName=\"rtd\">\n                    </td>\n\n                    <td>\n                      <label>Actions</label>\n                      <br>\n                      <button (click)=\"delete(k)\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button>\n                    </td>\n\n                  </tr>\n                </tbody>\n              </table>\n            </div> \n          </div>\n        </div>\n\n        <span *ngIf=\"inspectionReport\">\n          <span class=\"row\">\n            <span class=\"col-md-3\">\n              <label>Remarks</label>\n              <textarea class=\"form-control\" formControlName=\"remarks\"></textarea>\n            </span>\n          </span>\n          <br>\n          <span>\n            <button [disabled]=\"loading\" class=\"btn btn-success\" (click)=\"update()\">Update</button>\n          </span>\n        </span>\n\n      </form>\n      <!-- <ngb-pagination\n        [(page)]=\"pagination.currenPage\"\n        [pageSize]=\"pagination.pageSize\"\n        [collectionSize]=\"pagination.total\"\n        [maxSize]=\"pagination.maxSize\"\n        (pageChange)=\"fetchReport()\"\n      ></ngb-pagination> -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/add-truck-inspection/add-truck-inspection.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/add-truck-inspection/add-truck-inspection.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mg-top-26 {\n  margin-top: 26px; }\n\n.mg-left-12 {\n  margin-left: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3R5cmUtbWFuYWdlbWVudC9jb21wb25lbnRzL2FkZC10cnVjay1pbnNwZWN0aW9uL0Y6XFx0ZXN0aW5nX2RlbGV0ZV9mb2xkZXJcXFRSVUNLX0RFTU9fb2xkR2FuZXNoXFxmcm9udGVuZFxcdGRfZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcdHlyZS1tYW5hZ2VtZW50XFxjb21wb25lbnRzXFxhZGQtdHJ1Y2staW5zcGVjdGlvblxcYWRkLXRydWNrLWluc3BlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFDSixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3R5cmUtbWFuYWdlbWVudC9jb21wb25lbnRzL2FkZC10cnVjay1pbnNwZWN0aW9uL2FkZC10cnVjay1pbnNwZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1nLXRvcC0yNiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xyXG59XHJcblxyXG4ubWctbGVmdC0xMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/add-truck-inspection/add-truck-inspection.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/add-truck-inspection/add-truck-inspection.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AddTruckInspectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTruckInspectionComponent", function() { return AddTruckInspectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_truck_tyre_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/truck-tyre-master.service */ "./src/app/shared/services/truck-tyre-master.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/site.service */ "./src/app/shared/services/site.service.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tyremanagement_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tyremanagement.service */ "./src/app/layout/tyre-management/tyremanagement.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddTruckInspectionComponent = /** @class */ (function () {
    function AddTruckInspectionComponent(fb, truckTyreMasterService, toastr, tm, meta, site, router) {
        this.fb = fb;
        this.truckTyreMasterService = truckTyreMasterService;
        this.toastr = toastr;
        this.tm = tm;
        this.meta = meta;
        this.site = site;
        this.router = router;
        this.truckno_option = [];
        this.filters = {
            idate: '',
            truck_no: '',
            type: '',
            km_reading: ''
        };
        this.tyres = [];
        this.loading = false;
        this.loaded = true;
        this.submitted = false;
        this.observations = [];
        this.recommendations = [];
        this.filterSubmitted = false;
        this.types = [{ name: 'New' }];
        this.activeTab = 'Inspection';
        this.positions = [];
        this.show = false;
        this.inspectons = [];
    }
    AddTruckInspectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tm.getAllOar().subscribe(function (result) {
            result['records'].forEach(function (record) {
                if (record['orname'] == 'Observation') {
                    _this.observations.push(record.desc);
                }
                if (record['orname'] == 'Recommendation') {
                    _this.recommendations.push(record.desc);
                }
            });
        });
        this.filterForm = this.fb.group({
            idate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            truck_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            km_reading: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.filterForm.patchValue({ type: 'New' });
        this.meta.getCompanyTruckList().subscribe(function (siteInfo) {
            _this.truckno_option = siteInfo['result'];
            console.log('>>>>Vendor List', siteInfo['result']);
        });
        this.addForm = this.fb.group({
            remarks: [''],
            items: this.fb.array([this.createItem()]),
            observations: [''],
            recommendations: ['']
        });
        this.editForm = this.fb.group({
            remarks: [''],
            inspArr: this.fb.array([])
        });
        this.items = this.addForm.get('items');
        this.inspArr = this.addForm.get('inspArr');
    };
    // For add inspection
    AddTruckInspectionComponent.prototype.createItem = function () {
        return this.fb.group({
            pno: [''],
            positionname: [''],
            tyre_no: [''],
            date_of_fitment: [''],
            fitment_km: [''],
            nsd: [''],
            rtd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    // For Edit inspection
    AddTruckInspectionComponent.prototype.createInspArr = function () {
        return this.fb.group({
            pno: [''],
            positionname: [''],
            tyre_no: [''],
            date_of_fitment: [''],
            fitment_km: [''],
            nsd: [''],
            rtd: ['']
        });
    };
    Object.defineProperty(AddTruckInspectionComponent.prototype, "multipleFormControls", {
        // get Formarray controls for add inspection
        get: function () {
            return this.addForm.get('items')['controls'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTruckInspectionComponent.prototype, "multipleEditControls", {
        // get Formarray controls for edit inspection
        get: function () {
            return this.editForm.get('inspArr')['controls'];
        },
        enumerable: true,
        configurable: true
    });
    // Set default value in form array for add inspection form
    AddTruckInspectionComponent.prototype.addExistingPositions = function (e) {
        return this.fb.group({
            pno: [e.pno, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            positionname: [e.positionname, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date_of_fitment: [e.date_of_fitment],
            fitment_km: [e.fitment_km],
            tyre_no: [e.tyre_no],
            nsd: [e.nsd],
            rtd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    // Set default value in form array for edit inspection form
    AddTruckInspectionComponent.prototype.addExisitingInsp = function (e) {
        // console.log(">>>>xyxecw", e);
        return this.fb.group({
            pno: [e.pno],
            positionname: [e.positionname],
            tyre_no: [e.tyre_no],
            date_of_fitment: [e.date_of_fitment],
            fitment_km: [e.fitment_km],
            nsd: [e.nsd],
            rtd: [e.rtd]
        });
    };
    AddTruckInspectionComponent.prototype.fetch = function () {
        var _this = this;
        this.filterSubmitted = true;
        this.truck_no = this.filterForm.value.truck_no;
        this.i_date = this.filterForm.value.idate;
        this.km_reading = this.filterForm.value.km_reading;
        if (this.filterForm.value.type === 'New') {
            // Remove default formarray from addform
            var control = this.addForm.controls['items'];
            for (var i = control.length - 1; i >= 0; i--) {
                control.removeAt(i);
            }
            this.activeTab = 'New';
            this.truckNo = this.filterForm.value.truck_no;
            var obj = {
                truck_no: this.filterForm.value.truck_no
            };
            this.loading = true;
            this.loaded = false;
            this.truckTyreMasterService.getTyrePosition(obj).subscribe(function (res) {
                _this.loading = false;
                _this.loaded = true;
                res.results.forEach(function (element) {
                    // Push res value to form array
                    _this.multipleFormControls.push(_this.addExistingPositions(element));
                });
                _this.positions = res.results;
            }, function (err) {
                _this.loading = false;
                _this.loaded = true;
                console.log('>>>>>>>>>err', err);
            });
        }
        else {
            // Remove default formarray from editForm
            var control = this.editForm.controls['inspArr'];
            for (var i = control.length - 1; i >= 0; i--) {
                control.removeAt(i);
            }
            this.activeTab = 'Inspection';
            var idate = this.filterForm.value.idate;
            idate = idate.year + '-' + idate.month + '-' + idate.day;
            if (this.filterForm.value.idate) {
                this.filters.idate = idate;
            }
            else {
                this.filters.idate = '';
            }
            if (this.filterForm.value.truck_no) {
                this.filters.truck_no = this.filterForm.value.truck_no;
            }
            else {
                this.filters.truck_no = '';
            }
            if (this.filterForm.value.type) {
                this.filters.type = this.filterForm.value.type;
            }
            else {
                this.filters.type = '';
            }
            if (this.filterForm.value.km_reading) {
                this.filters.km_reading = this.filterForm.value.km_reading;
            }
            else {
                this.filters.km_reading = '';
            }
            this.loading = true;
            this.loaded = false;
            this.inspectionReport = [];
            this.truckTyreMasterService.getTruckInspectionList(this.filters).subscribe(function (res) {
                _this.loading = false;
                _this.loaded = true;
                res.results.inspections.forEach(function (element) {
                    console.log(' Element Date ', element.date_of_fitment);
                    // set date
                    // element.date_of_fitment = momentTZ(element.date_of_fitment).tz('Asia/Calcutta').format('DD/MM/YYYY');
                    // const splitedDate = element.date_of_fitment.split('/');
                    // const dateObj = {
                    //   day: parseInt(splitedDate[0]),
                    //   month: parseInt(splitedDate[1]),
                    //   year: parseInt(splitedDate[2])
                    // };
                    // element.date_of_fitment = dateObj;
                    // Push res value to form array
                    _this.multipleEditControls.push(_this.addExisitingInsp(element));
                });
                _this.editForm.controls['remarks'].setValue(res.results.remarks);
                _this.inspectionReport = res.results;
            }, function (err) {
                _this.loading = false;
                _this.loaded = true;
                console.log('>>>>>>>>>err', err);
            });
        }
        this.tm.getAllOar().subscribe(function (result) {
            result['records'].forEach(function (record) {
                if (record['orname'] == 'Observation') {
                    _this.observations.push(record.desc);
                }
                if (record['orname'] == 'Recommendation') {
                    _this.recommendations.push(record.desc);
                }
            });
        });
    };
    // Multiple form add in addForm
    AddTruckInspectionComponent.prototype.addItem = function () {
        this.items = this.addForm.get('items');
        this.items.push(this.createItem());
    };
    // Remove multiple form
    AddTruckInspectionComponent.prototype.removeItem = function (index) {
        if (index === 0) {
            this.toastr.error('Cannot remove this form.');
        }
        else {
            this.items.removeAt(index);
        }
    };
    AddTruckInspectionComponent.prototype.addInspection = function (isValid) {
        var _this = this;
        console.log(' Save is working >>>>');
        this.submitted = true;
        //if (isValid) {
        // km_reading: this.addForm.value.km_reading
        var inValues = [];
        console.log(' isValid is working >>>>');
        this.multipleFormControls.forEach(function (control) {
            inValues.push(control.value);
        });
        this.addForm.controls['items'].patchValue(inValues);
        var val = this.addForm.controls['items'].value;
        this.truckNo = this.filterForm.value.truck_no;
        var obj = {
            idate: new Date(this.i_date.year, this.i_date.month - 1, this.i_date.day, 23, 59, 59),
            km_reading: this.km_reading,
            truck_no: this.truck_no,
            inspections: val,
            remarks: this.addForm.value.remarks,
            observations: this.addForm.value.observations,
            recommendations: this.addForm.value.recommendations
        };
        this.loading = true;
        this.loaded = false;
        this.truckTyreMasterService.addTruckInspection(obj).subscribe(function (res) {
            // this.loading = false;
            // this.loaded = true;
            // this.activeTab = 'Inspection';
            // this.filterForm.controls['type'].setValue(this.activeTab);
            // this.fetch();
            _this.router.navigate(['/'])
                .then(function () { _this.router.navigate(['/tyre-management/truck-inspection']); });
            _this.toastr.success('Truck Inspection added successfully.');
        }, function (err) {
            // this.loading = false;
            // this.loaded = true;
            // this.activeTab = 'New';
            // this.filterForm.controls['type'].setValue(this.activeTab);
            _this.toastr.error('Something went wrong.');
        });
        // this.addForm.reset();
        // this.filterForm.reset();
        //}
    };
    AddTruckInspectionComponent.prototype.update = function () {
        var _this = this;
        var val = [];
        this.multipleEditControls.forEach(function (element) {
            var d = element.value.date_of_fitment;
            element.value.date_of_fitment = moment(d.year + '-' + d.month + '-' + d.day, 'YYYY-MM-DD').format('YYYY-MM-DD');
            val.push(element.value);
        });
        var obj = {
            idate: new Date(this.i_date.year, this.i_date.month - 1, this.i_date.day, 23, 59, 59),
            km_reading: this.km_reading,
            truck_no: this.truck_no,
            remarks: this.editForm.value.remarks,
            inspections: val
        };
        console.log(obj);
        this.loading = true;
        this.loaded = false;
        this.truckTyreMasterService.updateTruckInspection(obj).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            _this.fetch();
            _this.show = false;
            _this.toastr.success('Truck Inspection updated successfully.');
        }, function (err) {
            _this.loading = false;
            _this.loaded = true;
            console.log('>>>>>>>>>err', err);
            _this.toastr.error('Something went wrong.');
        });
    };
    AddTruckInspectionComponent.prototype.delete = function (i) {
        // console.log(">>>>>>>insp", this.inspectionReport);
        var _this = this;
        var conf = confirm('Are you sure you want to delete this record ?');
        if (conf === true) {
            var obj = {
                insp_id: this.inspectionReport.inspections[i]._id
            };
            // console.log(">>>>>obj", obj);
            this.loading = true;
            this.loaded = false;
            this.truckTyreMasterService.deleteTruckInspection(this.inspectionReport._id, obj).subscribe(function (res) {
                _this.loading = false;
                _this.loaded = true;
                var control = _this.editForm.controls['inspArr'];
                control.removeAt(i);
                _this.toastr.success('Truck Inspection deleted successfully.');
            }, function (err) {
                _this.loading = false;
                _this.loaded = true;
                console.log('>>>>>>>>>err', err);
                _this.toastr.error('Something went wrong.');
            });
        }
    };
    AddTruckInspectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-truck-inspection',
            template: __webpack_require__(/*! ./add-truck-inspection.component.html */ "./src/app/layout/tyre-management/components/add-truck-inspection/add-truck-inspection.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./add-truck-inspection.component.scss */ "./src/app/layout/tyre-management/components/add-truck-inspection/add-truck-inspection.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_truck_tyre_master_service__WEBPACK_IMPORTED_MODULE_2__["TruckTyreMasterService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _tyremanagement_service__WEBPACK_IMPORTED_MODULE_8__["TyremanagementService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_6__["MetaService"],
            src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_5__["SiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AddTruckInspectionComponent);
    return AddTruckInspectionComponent;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/components/add-tyre-company-master/add-tyre-company-master.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/add-tyre-company-master/add-tyre-company-master.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"tcmForm\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Add Tyre Company Master</div>\r\n      <div class=\"card-body\">\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-lg-2 col-md-2\">\r\n            <label>Company Name</label>\r\n            <input type=\"text\" formControlName=\"coname\" class=\"form-control\" placeholder=\"Company Name\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Tyre Company Master items\r\n                <button class=\"btn btn-primary float-right\" (click)=\"addTcmitems()\" [disabled]=\"!tcmForm.valid\"\r\n                  type=\"button\">\r\n                  Add Item\r\n                </button>\r\n              </div>\r\n              <!-- /.box-header -->\r\n              <div class=\"card-body\" *ngIf=\"tcmForm.controls.tcm_items.controls.length > 0\">\r\n                <table class=\"table table-bordered\" formArrayName=\"tcm_items\">\r\n                  <tr>\r\n                    <th>Brand</th>\r\n                    <th>Tyre Size</th>\r\n                    <th>Tyre Type</th>\r\n                    <th>NSD</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                  <tr *ngFor=\"let school of tcmForm.controls.tcm_items.controls; let i=index\" formGroupName=\"{{i}}\">\r\n                    <td>\r\n                      <input type=\"text\" formControlName=\"brand\"\r\n                        class=\"form-control brand\">\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"tyre_size\">\r\n                          <option value=\"\">Tyre Size</option>\r\n                          <option value=\"1000 x 20\">1000 x 20</option>\r\n                          <option value=\"8.25 x 20\">8.25 x 20</option>\r\n                          <option value=\"11.00 x 20\">11.00 x 20</option>\r\n                        </select>\r\n                        </div>\r\n                    </td>                    \r\n\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"tyre_type\">\r\n                          <option value=\"\">Tyre Sype</option>\r\n                          <option value=\"New Nylon\">New Nylon</option>\r\n                          <option value=\"New Radial\">New Radial</option>\r\n                          <option value=\"Retread Nylon\">Retread Nylon</option>\r\n                          <option value=\"Retread Radial\">Retread Radial</option>\r\n                          <option value=\"Khol\">Khol</option>\r\n                        </select>\r\n                        </div>\r\n                    </td>                    \r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"nsd\"\r\n                        class=\"form-control nsd\">\r\n                    </td>\r\n                    <td>\r\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"tcmForm.controls?.tcm_items.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\r\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <div class=\"card-body\" *ngIf=\"tcmForm.controls?.tcm_items.controls.length == 0\">\r\n                <p>Please select vendor</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!tcmForm.valid || process == 'saving'\" type=\"button\">\r\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/add-tyre-company-master/add-tyre-company-master.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/add-tyre-company-master/add-tyre-company-master.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90eXJlLW1hbmFnZW1lbnQvY29tcG9uZW50cy9hZGQtdHlyZS1jb21wYW55LW1hc3Rlci9hZGQtdHlyZS1jb21wYW55LW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/add-tyre-company-master/add-tyre-company-master.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/add-tyre-company-master/add-tyre-company-master.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AddTyreCompanyMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTyreCompanyMasterComponent", function() { return AddTyreCompanyMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tyremanagement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tyremanagement.service */ "./src/app/layout/tyre-management/tyremanagement.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddTyreCompanyMasterComponent = /** @class */ (function () {
    function AddTyreCompanyMasterComponent(fb, ts, router) {
        this.fb = fb;
        this.ts = ts;
        this.router = router;
    }
    AddTyreCompanyMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.tcmForm.controls.tcm_items.valueChanges.subscribe(function (changes) {
            _this.updateValues();
        });
    };
    AddTyreCompanyMasterComponent.prototype.buildForm = function () {
        this.tcmForm = this.fb.group({
            'coname': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'tcm_items': this.fb.array([])
        });
        this.addTcmitems();
    };
    AddTyreCompanyMasterComponent.prototype.initItems = function () {
        return this.fb.group({
            'brand': [''],
            'tyre_size': [''],
            'tyre_type': [''],
            'nsd': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    AddTyreCompanyMasterComponent.prototype.addTcmitems = function () {
        var control = this.tcmForm.controls['tcm_items'];
        control.push(this.initItems());
    };
    AddTyreCompanyMasterComponent.prototype.removeItems = function (i) {
        var control = this.tcmForm.controls['tcm_items'];
        control.removeAt(i);
    };
    AddTyreCompanyMasterComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var tcm_items = this.tcmForm.controls['tcm_items'].value;
        var index = tcm_items.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    AddTyreCompanyMasterComponent.prototype.save = function () {
        var _this = this;
        this.process = 'saving';
        console.log('Tyre Company Master >> Save', this.tcmForm.value);
        this.ts.addTcm(this.tcmForm.value).subscribe(function (miInfo) {
            _this.process = 'done';
            _this.router.navigate(['/tyre-management/tyre-company-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddTyreCompanyMasterComponent.prototype.updateValues = function () {
    };
    AddTyreCompanyMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-tyre-company-master',
            template: __webpack_require__(/*! ./add-tyre-company-master.component.html */ "./src/app/layout/tyre-management/components/add-tyre-company-master/add-tyre-company-master.component.html"),
            styles: [__webpack_require__(/*! ./add-tyre-company-master.component.scss */ "./src/app/layout/tyre-management/components/add-tyre-company-master/add-tyre-company-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _tyremanagement_service__WEBPACK_IMPORTED_MODULE_3__["TyremanagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddTyreCompanyMasterComponent);
    return AddTyreCompanyMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/components/add-tyre-master/add-tyre-master.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/add-tyre-master/add-tyre-master.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"tmForm\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Add Tyre Master</div>\r\n      <div class=\"card-body\">\r\n        <div class=\"form-group row\">\r\n        <div class=\"mt-3\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"required\">Tyre No</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"tyre_no\" />\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <label class=\"required\">Purchase Type</label>\r\n              <select class=\"form-control\" formControlName=\"purchase_type\" >\r\n                <option value=\"\">Please Select</option>\r\n                <option value=\"New Vehicle\">New Vehicle</option>\r\n                <option value=\"Dealer Purchased\">Dealer Purchased</option>\r\n                <option value=\"Retread\">Retread</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <label>Bill Date</label>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" #bd=\"bsDatepicker\" [bsConfig]=\"{ containerClass: 'theme-blue', 'dateInputFormat': 'DD-MM-YYYY', 'showWeekNumbers': false, 'minDate': currentDate }\" bsDatepicker formControlName=\"bill_date\"\r\n                  class=\"form-control\">\r\n                <div class=\"input-group-prepend\" (click)=\"bd.toggle()\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n    \r\n            <div class=\"col-md-3\">\r\n              <label class=\"required\">Vendor</label>\r\n              <ng-select [items]=\"vendor_option\" placeholder=\"Type and search vendor\" bindLabel=\"name\" bindValue=\"name\"\r\n                formControlName=\"dealer_name\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Price</label>\r\n                <input type=\"number\" class=\"form-control\" formControlName=\"price\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <label class=\"required\">Tyre Type</label>\r\n              <select class=\"form-control\" formControlName=\"tyre_type\" >\r\n                <option value=\"\">Please Select</option>\r\n                <option value=\"New Nylon\">New Nylon</option>\r\n                <option value=\"New Radial\">New Radial</option>\r\n                <option value=\"Retread Nylon\">Retread Nylon</option>\r\n                <option value=\"Retread Radial\">Retread Radial</option>\r\n                <option value=\"Khol\">Khol</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <label class=\"required\">Tyre Size</label>\r\n              <select class=\"form-control\" formControlName=\"tyre_size\" >\r\n                <option value=\"\">Tyre Size</option>\r\n                <option value=\"1000 x 20\">1000 x 20</option>\r\n                <option value=\"8.25 x 20\">8.25 x 20</option>\r\n                <option value=\"11.00 x 20\">11.00 x 20</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <label class=\"required\">Date of Fitment</label>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" #dof=\"bsDatepicker\" [bsConfig]=\"{ containerClass: 'theme-blue', 'dateInputFormat': 'DD-MM-YYYY', 'showWeekNumbers': false, 'minDate': currentDate }\" bsDatepicker formControlName=\"date_of_fitment\"\r\n                  class=\"form-control\">\r\n                <div class=\"input-group-prepend\" (click)=\"dof.toggle()\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n           <!-- <div class=\"col-md-3\"> -->\r\n            <!-- <div class=\"col-md-3\">\r\n              <label class=\"required\">Date of Fitment</label>\r\n              <div class=\"form-inline\">\r\n                <div class=\"form-group\">\r\n                  <input\r\n                    class=\"form-control\"\r\n                    placeholder=\"dd/mm/yyyy\"\r\n                    name=\"dp\"\r\n                    formControlName=\"date_of_fitment\"\r\n                    ngbDatepicker\r\n                    #d2=\"ngbDatepicker\"\r\n                  />\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Fitment Km</label>\r\n                <input type=\"number\" class=\"form-control\" formControlName=\"fitment_km\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <label class=\"required\">Truck No</label>\r\n              <ng-select [items]=\"truckno_option\" placeholder=\"Type and search Truck No\" bindLabel=\"truckno\" bindValue=\"truckno\"\r\n                formControlName=\"vehicle_no\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <label class=\"required\">Tyre Position</label>\r\n              <ng-select [items]=\"tyrepositions_option\" placeholder=\"Tyre Position\" bindLabel=\"positionname\" bindValue=\"positionname\"\r\n                formControlName=\"tyreposition\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <label class=\"required\">Company Name</label>\r\n              <ng-select  [items]=\"companyname_option\" placeholder=\"Company Name\" bindLabel=\"coname\" bindValue=\"coname\"\r\n                formControlName=\"company_name\"  >\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <label class=\"required\">Brand</label>\r\n              <ng-select [items]=\"brand_option\" placeholder=\"Brand\" bindLabel=\"brand\" bindValue=\"brand\"\r\n                formControlName=\"brand\">\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label class=\"required\">NSD</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"nsd\" disabled/>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>RTD</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"rtd\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <label class=\"required\">Tyre Status</label>\r\n              <select class=\"form-control\" formControlName=\"tyrestatus\" >\r\n                <option value=\"\">Please Select</option>\r\n                <option value=\"Vehicle Running\">Vehicle Running</option>\r\n                <option value=\"Scrap\">Scrap</option>\r\n                <option value=\"Remold\">Remold</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <label>Remold / Scrap Date</label>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" #rs=\"bsDatepicker\" [bsConfig]=\"{ containerClass: 'theme-blue', 'dateInputFormat': 'DD-MM-YYYY', 'showWeekNumbers': false, 'minDate': currentDate }\" bsDatepicker formControlName=\"rs_date\"\r\n                  class=\"form-control\">\r\n                <div class=\"input-group-prepend\" (click)=\"rs.toggle()\">\r\n                  <span class=\"input-group-text\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Tyre Remove KM </label>\r\n                <input type=\"number\" class=\"form-control\" formControlName=\"removekm\" />\r\n              </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button class=\"btn btn-success float-right\" (click)=\"saveitems()\" [disabled]=\"!tmForm.valid || process == 'saving'\" type=\"button\">\r\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/add-tyre-master/add-tyre-master.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/add-tyre-master/add-tyre-master.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90eXJlLW1hbmFnZW1lbnQvY29tcG9uZW50cy9hZGQtdHlyZS1tYXN0ZXIvYWRkLXR5cmUtbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/add-tyre-master/add-tyre-master.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/add-tyre-master/add-tyre-master.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AddTyreMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTyreMasterComponent", function() { return AddTyreMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tyremanagement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tyremanagement.service */ "./src/app/layout/tyre-management/tyremanagement.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddTyreMasterComponent = /** @class */ (function () {
    function AddTyreMasterComponent(fb, ts, router, toastr, meta, modalService) {
        this.fb = fb;
        this.ts = ts;
        this.router = router;
        this.toastr = toastr;
        this.meta = meta;
        this.modalService = modalService;
        this.tyrepositions_option = [];
        this.vendor_option = [];
        this.truckno_option = [];
        this.companyname_option = [];
        this.brand_option = [];
        this.currentDate = new Date();
    }
    AddTyreMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.getOptions();
        this.tmForm.get('company_name').valueChanges.subscribe(function (val) {
            _this.tmForm.patchValue({ brand: '' });
            _this.generateBrand(val);
        });
        this.tmForm.valueChanges.subscribe(function (value) {
            if (value.tyre_type && value.tyre_size && value.brand && _this.currCompanyTcm) {
                _this.currCompanyTcm.tcm_items.forEach(function (tcm) {
                    if (tcm.brand == value.brand && tcm.tyre_size == value.tyre_size && tcm.tyre_type == value.tyre_type) {
                        _this.tmForm.patchValue({ nsd: tcm.nsd }, { emitEvent: false });
                    }
                });
            }
            else {
                _this.tmForm.patchValue({ nsd: '0' }, { emitEvent: false });
            }
        });
    };
    AddTyreMasterComponent.prototype.buildForm = function () {
        this.tmForm = this.fb.group({
            tyre_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            purchase_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            bill_no: [''],
            bill_date: [''],
            dealer_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            company_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            brand: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            tyre_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            nsd: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            rtd: [''],
            date_of_fitment: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            fitment_km: [''],
            tyre_size: [''],
            vehicle_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            tyrestatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            tyreposition: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            rs_date: [''],
            removekm: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    AddTyreMasterComponent.prototype.saveitems = function () {
        var _this = this;
        var bill_date;
        if (this.tmForm.controls['bill_date'].value) {
            var dt = this.tmForm.controls['bill_date'].value.year + '-' +
                this.tmForm.controls['bill_date'].value.month + '-' +
                this.tmForm.controls['bill_date'].value.day;
            bill_date = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            bill_date = moment().format();
        }
        var date_of_fitment;
        if (this.tmForm.controls['date_of_fitment'].value) {
            var dt = this.tmForm.controls['date_of_fitment'].value.year + '-' +
                this.tmForm.controls['date_of_fitment'].value.month + '-' +
                this.tmForm.controls['date_of_fitment'].value.day;
            date_of_fitment = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            date_of_fitment = moment().format();
        }
        var rs_date;
        if (this.tmForm.controls['rs_date'].value) {
            var dt = this.tmForm.controls['rs_date'].value.year + '-' +
                this.tmForm.controls['rs_date'].value.month + '-' +
                this.tmForm.controls['rs_date'].value.day;
            rs_date = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            rs_date = moment().format();
        }
        this.process = 'saving';
        console.log(this.tmForm.value);
        this.ts.addTm(this.tmForm.value).subscribe(function (ordersInfo) {
            _this.process = 'done';
            _this.router.navigate(['/tyre-management/tyre-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddTyreMasterComponent.prototype.getOptions = function () {
        var _this = this;
        this.ts.getVendorMasterList().subscribe(function (siteInfo) {
            _this.vendor_option = siteInfo['result'];
            console.log('>>>>Vendor List', siteInfo['result']);
        });
        this.meta.getCompanyTruckList().subscribe(function (siteInfo) {
            _this.truckno_option = siteInfo['result'];
            console.log('>>>>Vendor List', siteInfo['result']);
        });
        this.meta.getTyrePositionList().subscribe(function (siteInfo) {
            _this.tyrepositions_option = siteInfo['result'];
            console.log('>>>>Tyre Positions', siteInfo['result']);
        });
        this.meta.getCompanyNamesList().subscribe(function (siteInfo) {
            _this.companyname_option = siteInfo['result'];
            console.log('>>>>Company Name', siteInfo['result']);
        });
        this.meta.getBrandsList().subscribe(function (siteInfo) {
            console.log('>>>>Brand', siteInfo['result']);
        });
    };
    AddTyreMasterComponent.prototype.generateBrand = function (value) {
        var _this = this;
        console.log(' generate brand ');
        this.ts.getCompanyTcm(value).subscribe(function (res) {
            _this.currCompanyTcm = res;
            _this.brand_option = [];
            _this.currCompanyTcm.tcm_items.forEach(function (tcm) {
                if (_this.brand_option.map(function (e) { return e.brand; }).indexOf(tcm.brand) == -1) {
                    _this.brand_option.push(tcm);
                }
            });
            /*       this.brand_option = this.currCompanyTcm.tcm_items;
             */ 
        }, function (error) {
        });
    };
    AddTyreMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-tyre-master',
            template: __webpack_require__(/*! ./add-tyre-master.component.html */ "./src/app/layout/tyre-management/components/add-tyre-master/add-tyre-master.component.html"),
            styles: [__webpack_require__(/*! ./add-tyre-master.component.scss */ "./src/app/layout/tyre-management/components/add-tyre-master/add-tyre-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _tyremanagement_service__WEBPACK_IMPORTED_MODULE_3__["TyremanagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__["MetaService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], AddTyreMasterComponent);
    return AddTyreMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/components/edit-observation-and-recommendation/edit-observation-and-recommendation.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/edit-observation-and-recommendation/edit-observation-and-recommendation.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"oarForm\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Edit Observation and Recommendation Master</div>\r\n      <div class=\"card-body\">\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"mt-3\">\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-lg-12 col-md-8\">\r\n                <label class=\"required\">Type</label>\r\n                <select class=\"form-control\" formControlName=\"orname\" >\r\n                  <option value=\"\">Please Select</option>\r\n                  <option value=\"Observation\">Observation</option>\r\n                  <option value=\"Recommendation\">Recommendation</option>\r\n                </select>\r\n              </div>\r\n    \r\n              <div class=\"col-lg-12 col-md-8\">\r\n                    <label>Description</label>\r\n                  <input type=\"text\" formControlName=\"desc\" class=\"form-control\" placeholder=\"Description\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n       </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button class=\"btn btn-success float-right\" (click)=\"saveitems()\" [disabled]=\"!oarForm.valid || process == 'saving'\" type=\"button\">\r\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/edit-observation-and-recommendation/edit-observation-and-recommendation.component.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/edit-observation-and-recommendation/edit-observation-and-recommendation.component.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90eXJlLW1hbmFnZW1lbnQvY29tcG9uZW50cy9lZGl0LW9ic2VydmF0aW9uLWFuZC1yZWNvbW1lbmRhdGlvbi9lZGl0LW9ic2VydmF0aW9uLWFuZC1yZWNvbW1lbmRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/edit-observation-and-recommendation/edit-observation-and-recommendation.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/edit-observation-and-recommendation/edit-observation-and-recommendation.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: EditObservationAndRecommendationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditObservationAndRecommendationComponent", function() { return EditObservationAndRecommendationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tyremanagement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tyremanagement.service */ "./src/app/layout/tyre-management/tyremanagement.service.ts");
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




var EditObservationAndRecommendationComponent = /** @class */ (function () {
    function EditObservationAndRecommendationComponent(fb, tm, router, aroute) {
        this.fb = fb;
        this.tm = tm;
        this.router = router;
        this.aroute = aroute;
    }
    EditObservationAndRecommendationComponent.prototype.ngOnInit = function () {
        this.itemsDetails = this.aroute.snapshot.data['oar_details'];
        console.log(this.itemsDetails);
        this.buildForm();
        this.getOptions();
    };
    EditObservationAndRecommendationComponent.prototype.buildForm = function () {
        this.oarForm = this.fb.group({
            'orname': [this.itemsDetails.orname],
            'desc': [this.itemsDetails.desc]
        });
    };
    EditObservationAndRecommendationComponent.prototype.saveitems = function () {
        var _this = this;
        this.process = 'saving';
        this.tm.updatOar(this.itemsDetails['_id'], this.oarForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/tyre-management/observation-and-recommendation']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditObservationAndRecommendationComponent.prototype.getOptions = function () {
    };
    EditObservationAndRecommendationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-observation-and-recommendation',
            template: __webpack_require__(/*! ./edit-observation-and-recommendation.component.html */ "./src/app/layout/tyre-management/components/edit-observation-and-recommendation/edit-observation-and-recommendation.component.html"),
            styles: [__webpack_require__(/*! ./edit-observation-and-recommendation.component.scss */ "./src/app/layout/tyre-management/components/edit-observation-and-recommendation/edit-observation-and-recommendation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _tyremanagement_service__WEBPACK_IMPORTED_MODULE_2__["TyremanagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditObservationAndRecommendationComponent);
    return EditObservationAndRecommendationComponent;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/components/edit-truck-inspection/edit-truck-inspection.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/edit-truck-inspection/edit-truck-inspection.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-truck-inspection works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/edit-truck-inspection/edit-truck-inspection.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/edit-truck-inspection/edit-truck-inspection.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90eXJlLW1hbmFnZW1lbnQvY29tcG9uZW50cy9lZGl0LXRydWNrLWluc3BlY3Rpb24vZWRpdC10cnVjay1pbnNwZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/edit-truck-inspection/edit-truck-inspection.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/edit-truck-inspection/edit-truck-inspection.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: EditTruckInspectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTruckInspectionComponent", function() { return EditTruckInspectionComponent; });
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

var EditTruckInspectionComponent = /** @class */ (function () {
    function EditTruckInspectionComponent() {
    }
    EditTruckInspectionComponent.prototype.ngOnInit = function () {
    };
    EditTruckInspectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-truck-inspection',
            template: __webpack_require__(/*! ./edit-truck-inspection.component.html */ "./src/app/layout/tyre-management/components/edit-truck-inspection/edit-truck-inspection.component.html"),
            styles: [__webpack_require__(/*! ./edit-truck-inspection.component.scss */ "./src/app/layout/tyre-management/components/edit-truck-inspection/edit-truck-inspection.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditTruckInspectionComponent);
    return EditTruckInspectionComponent;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/components/edit-tyre-company-master/edit-tyre-company-master.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/edit-tyre-company-master/edit-tyre-company-master.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"tcmForm\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Edit Tyre Company Master</div>\r\n      <div class=\"card-body\">\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-lg-2 col-md-2\">\r\n            <label>Company Name</label>\r\n            <input type=\"text\" formControlName=\"coname\" class=\"form-control\" placeholder=\"Company Name\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Tyre Company Master items\r\n                <button class=\"btn btn-primary float-right\" (click)=\"addTcmItems()\" [disabled]=\"!tcmForm.valid\"\r\n                  type=\"button\">\r\n                  Add Item\r\n                </button>\r\n              </div>\r\n              <!-- /.box-header -->\r\n              <div class=\"card-body\" *ngIf=\"tcmForm.controls.tcm_items.controls.length > 0\">\r\n                <table class=\"table table-bordered\" formArrayName=\"tcm_items\">\r\n                  <tr>\r\n                    <th>Brand</th>\r\n                    <th>Tyre Size</th>\r\n                    <th>Tyre Type</th>\r\n                    <th>NSD</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                  <tr *ngFor=\"let school of tcmForm.controls.tcm_items.controls; let i=index\" formGroupName=\"{{i}}\">\r\n                    <td>\r\n                      <input type=\"text\" formControlName=\"brand\"\r\n                        class=\"form-control brand\">\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"tyre_size\">\r\n                          <option value=\"\">Tyre Size</option>\r\n                          <option value=\"1000 x 20\">1000 x 20</option>\r\n                          <option value=\"8.25 x 20\">8.25 x 20</option>\r\n                          <option value=\"11.00 x 20\">11.00 x 20</option>\r\n                        </select>\r\n                        </div>\r\n                    </td>                    \r\n\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"tyre_type\">\r\n                          <option value=\"\">Tyre Sype</option>\r\n                          <option value=\"New Nylon\">New Nylon</option>\r\n                          <option value=\"New Radial\">New Radial</option>\r\n                          <option value=\"Retread Nylon\">Retread Nylon</option>\r\n                          <option value=\"Retread Radial\">Retread Radial</option>\r\n                          <option value=\"Khol\">Khol</option>\r\n                        </select>\r\n                        </div>\r\n                    </td>                    \r\n\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"nsd\"\r\n                        class=\"form-control nsd\">\r\n                    </td>\r\n                    <td>\r\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"tcmForm.controls?.tcm_items.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\r\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <div class=\"card-body\" *ngIf=\"tcmForm.controls?.tcm_items.controls.length == 0\">\r\n                <p>Please select vendor</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button class=\"btn btn-success float-right\" (click)=\"saveTcm()\" [disabled]=\"!tcmForm.valid || process == 'saving'\" type=\"button\">\r\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  \r\n  </form>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/edit-tyre-company-master/edit-tyre-company-master.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/edit-tyre-company-master/edit-tyre-company-master.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90eXJlLW1hbmFnZW1lbnQvY29tcG9uZW50cy9lZGl0LXR5cmUtY29tcGFueS1tYXN0ZXIvZWRpdC10eXJlLWNvbXBhbnktbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/edit-tyre-company-master/edit-tyre-company-master.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/edit-tyre-company-master/edit-tyre-company-master.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: EditTyreCompanyMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTyreCompanyMasterComponent", function() { return EditTyreCompanyMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tyremanagement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tyremanagement.service */ "./src/app/layout/tyre-management/tyremanagement.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditTyreCompanyMasterComponent = /** @class */ (function () {
    function EditTyreCompanyMasterComponent(fb, ts, aroute, router) {
        this.fb = fb;
        this.ts = ts;
        this.aroute = aroute;
        this.router = router;
    }
    EditTyreCompanyMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tcmDetails = this.aroute.snapshot.data['tcm_details'];
        this.buildForm();
        this.tcmForm.controls.tcm_items.valueChanges.subscribe(function (changes) {
            _this.updateValues();
        });
        this.getOptions();
    };
    EditTyreCompanyMasterComponent.prototype.buildForm = function () {
        var _this = this;
        this.tcmForm = this.fb.group({
            'coname': [this.tcmDetails.coname, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'tcm_items': this.fb.array([])
        });
        // this.addMaterialreceiptItems()
        this.tcmDetails.tcm_items.forEach(function (element) {
            var control = _this.tcmForm.controls['tcm_items'];
            control.push(_this.initItemsData(element));
        });
    };
    EditTyreCompanyMasterComponent.prototype.initItemsData = function (data) {
        return this.fb.group({
            'brand': [data.brand, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'tyre_size': [data.tyre_size, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'tyre_type': [data.tyre_type, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'nsd': [data.nsd, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    EditTyreCompanyMasterComponent.prototype.initItems = function () {
        return this.fb.group({
            'brand': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'tyre_size': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'tyre_type': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'nsd': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    EditTyreCompanyMasterComponent.prototype.addTcmItems = function () {
        var control = this.tcmForm.controls['tcm_items'];
        control.push(this.initItems());
    };
    EditTyreCompanyMasterComponent.prototype.removeItems = function (i) {
        var control = this.tcmForm.controls['tcm_items'];
        control.removeAt(i);
    };
    EditTyreCompanyMasterComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var tcm_items = this.tcmForm.controls['tcm_items'].value;
        var index = tcm_items.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    EditTyreCompanyMasterComponent.prototype.saveTcm = function () {
        var _this = this;
        this.process = 'saving';
        console.log('Edit Issue Saving', this.tcmDetails);
        this.ts.updatTcm(this.tcmDetails['_id'], this.tcmForm.value).subscribe(function (miInfo) {
            _this.process = 'done';
            _this.router.navigate(['/tyre-management/tyre-company-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditTyreCompanyMasterComponent.prototype.getOptions = function () {
    };
    EditTyreCompanyMasterComponent.prototype.updateValues = function () {
    };
    EditTyreCompanyMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-tyre-company-master',
            template: __webpack_require__(/*! ./edit-tyre-company-master.component.html */ "./src/app/layout/tyre-management/components/edit-tyre-company-master/edit-tyre-company-master.component.html"),
            styles: [__webpack_require__(/*! ./edit-tyre-company-master.component.scss */ "./src/app/layout/tyre-management/components/edit-tyre-company-master/edit-tyre-company-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _tyremanagement_service__WEBPACK_IMPORTED_MODULE_3__["TyremanagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditTyreCompanyMasterComponent);
    return EditTyreCompanyMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/components/edit-tyre-master/edit-tyre-master.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/edit-tyre-master/edit-tyre-master.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"tmForm\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Edit Tyre Master</div>\r\n      <div class=\"card-body\">\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"mt-3\">\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"required\">Tyre No</label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"tyre_no\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-3\">\r\n                <label class=\"required\">Purchase Type</label>\r\n                <select class=\"form-control\" formControlName=\"purchase_type\" >\r\n                  <option value=\"\">Please Select</option>\r\n                  <option value=\"New Vehicle\">New Vehicle</option>\r\n                  <option value=\"Dealer Purchased\">Dealer Purchased</option>\r\n                  <option value=\"Retread\">Retread</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <label>Bill Date</label>\r\n                <div class=\"input-group\">\r\n                  <input type=\"text\" #bd=\"bsDatepicker\" [bsConfig]=\"{ containerClass: 'theme-blue', 'dateInputFormat': 'DD-MM-YYYY', 'showWeekNumbers': false, 'minDate': currentDate }\" bsDatepicker formControlName=\"bill_date\"\r\n                    class=\"form-control\">\r\n                  <div class=\"input-group-prepend\" (click)=\"bd.toggle()\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n      \r\n              <div class=\"col-md-3\">\r\n                <label class=\"required\">Vendor</label>\r\n                <ng-select [items]=\"vendor_option\" placeholder=\"Type and search vendor\" bindLabel=\"name\" bindValue=\"name\"\r\n                  formControlName=\"dealer_name\">\r\n                </ng-select>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label>Price</label>\r\n                  <input type=\"number\" class=\"form-control\" formControlName=\"price\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <label class=\"required\">Tyre Type</label>\r\n                <select class=\"form-control\" formControlName=\"tyre_type\" >\r\n                  <option value=\"\">Please Select</option>\r\n                  <option value=\"New Nylon\">New Nylon</option>\r\n                  <option value=\"New Radial\">New Radial</option>\r\n                  <option value=\"Retread Nylon\">Retread Nylon</option>\r\n                  <option value=\"Retread Radial\">Retread Radial</option>\r\n                  <option value=\"Khol\">Khol</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <label class=\"required\">Tyre Size</label>\r\n                <select class=\"form-control\" formControlName=\"tyre_size\" >\r\n                  <option value=\"\">Tyre Size</option>\r\n                  <option value=\"1000 x 20\">1000 x 20</option>\r\n                  <option value=\"8.25 x 20\">8.25 x 20</option>\r\n                  <option value=\"11.00 x 20\">11.00 x 20</option>\r\n                </select>\r\n              </div>\r\n\r\n              <div class=\"col-md-3\">\r\n                <label class=\"required\">Date of Fitment</label>\r\n                <div class=\"input-group\">\r\n                  <input type=\"text\" #dof=\"bsDatepicker\" [bsConfig]=\"{ containerClass: 'theme-blue', 'dateInputFormat': 'DD-MM-YYYY', 'showWeekNumbers': false, 'minDate': currentDate }\" bsDatepicker formControlName=\"date_of_fitment\"\r\n                    class=\"form-control\">\r\n                  <div class=\"input-group-prepend\" (click)=\"dof.toggle()\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- <div class=\"col-md-3\">\r\n                <label class=\"required\">Date of Fitment</label>\r\n                <div class=\"form-inline\">\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      class=\"form-control\"\r\n                      placeholder=\"dd/mm/yyyy\"\r\n                      name=\"dp\"\r\n                      formControlName=\"date_of_fitment\"\r\n                      ngbDatepicker\r\n                      #d2=\"ngbDatepicker\"\r\n                    />\r\n                    <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label>Fitment Km</label>\r\n                  <input type=\"number\" class=\"form-control\" formControlName=\"fitment_km\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <label class=\"required\">Truck No</label>\r\n                <ng-select [items]=\"truckno_option\" placeholder=\"Type and search truck\" bindLabel=\"truckno\" bindValue=\"truckno\"\r\n                  formControlName=\"vehicle_no\">\r\n                </ng-select>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <label class=\"required\">Tyre Position</label>\r\n                <ng-select [items]=\"tyrepositions_option\" placeholder=\"Type and search truck\" bindLabel=\"positionname\" bindValue=\"positionname\"\r\n                  formControlName=\"tyreposition\">\r\n                </ng-select>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <label class=\"required\">Company Name</label>\r\n                <ng-select [items]=\"companyname_option\" placeholder=\"Type and search truck\" bindLabel=\"coname\" bindValue=\"coname\"\r\n                  formControlName=\"company_name\">\r\n                </ng-select>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <label class=\"required\">Brand</label>\r\n                <ng-select [items]=\"brand_option\" placeholder=\"Type and search truck\" bindLabel=\"name\" bindValue=\"name\"\r\n                  formControlName=\"brand\">\r\n                </ng-select>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"required\">NSD</label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"nsd\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label>RTD</label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"rtd\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <label class=\"required\">Tyre Status</label>\r\n                <select class=\"form-control\" formControlName=\"tyrestatus\" >\r\n                  <option value=\"\">Please Select</option>\r\n                  <option value=\"Vehicle Running\">Vehicle Running</option>\r\n                  <option value=\"Scrap\">Scrap</option>\r\n                  <option value=\"Remold\">Remold</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <label>Remold / Scrap Date</label>\r\n                <div class=\"input-group\">\r\n                  <input type=\"text\" #rs=\"bsDatepicker\" [bsConfig]=\"{ containerClass: 'theme-blue', 'dateInputFormat': 'DD-MM-YYYY', 'showWeekNumbers': false, 'minDate': currentDate }\" bsDatepicker formControlName=\"rs_date\"\r\n                    class=\"form-control\">\r\n                  <div class=\"input-group-prepend\" (click)=\"rs.toggle()\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label>Tyre Remove KM </label>\r\n                  <input type=\"number\" class=\"form-control\" formControlName=\"removekm\" />\r\n                </div>\r\n                </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n       </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button class=\"btn btn-success float-right\" (click)=\"saveitems()\" [disabled]=\"!tmForm.valid || process == 'saving'\" type=\"button\">\r\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/edit-tyre-master/edit-tyre-master.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/edit-tyre-master/edit-tyre-master.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90eXJlLW1hbmFnZW1lbnQvY29tcG9uZW50cy9lZGl0LXR5cmUtbWFzdGVyL2VkaXQtdHlyZS1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/edit-tyre-master/edit-tyre-master.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/edit-tyre-master/edit-tyre-master.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EditTyreMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTyreMasterComponent", function() { return EditTyreMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tyremanagement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tyremanagement.service */ "./src/app/layout/tyre-management/tyremanagement.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditTyreMasterComponent = /** @class */ (function () {
    function EditTyreMasterComponent(fb, ts, router, toastr, meta, modalService, aroute) {
        this.fb = fb;
        this.ts = ts;
        this.router = router;
        this.toastr = toastr;
        this.meta = meta;
        this.modalService = modalService;
        this.aroute = aroute;
        this.tyrepositions_option = [];
        this.vendor_option = [];
        this.truckno_option = [];
        this.companyname_option = [];
        this.brand_option = [];
        this.currentDate = new Date();
    }
    EditTyreMasterComponent.prototype.ngOnInit = function () {
        this.tmDetails = this.aroute.snapshot.data['tm_details'];
        console.log(this.tmDetails);
        this.buildForm();
        this.getOptions();
    };
    EditTyreMasterComponent.prototype.buildForm = function () {
        this.tmForm = this.fb.group({
            'tyre_no': [this.tmDetails.tyre_no, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'purchase_type': [this.tmDetails.purchase_type, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'bill_no': [this.tmDetails.bill_no],
            'bill_date': [this.tmDetails.bill_date ? new Date(this.tmDetails.bill_date) : ''],
            'dealer_name': [this.tmDetails.dealer_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'price': [this.tmDetails.price],
            'company_name': [this.tmDetails.company_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'brand': [this.tmDetails.brand, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'tyre_type': [this.tmDetails.tyre_type, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'nsd': [this.tmDetails.nsd],
            'rtd': [this.tmDetails.rtd],
            'date_of_fitment': [new Date(this.tmDetails.date_of_fitment)],
            'fitment_km': [this.tmDetails.fitment_km],
            'tyre_size': [this.tmDetails.tyre_size, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'vehicle_no': [this.tmDetails.vehicle_no, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'tyrestatus': [this.tmDetails.tyrestatus, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'tyreposition': [this.tmDetails.tyreposition, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'rs_date': [this.tmDetails.rs_date ? new Date(this.tmDetails.rs_date) : ''],
            'removekm': [this.tmDetails.removekm]
        });
    };
    EditTyreMasterComponent.prototype.saveitems = function () {
        var _this = this;
        var bill_date;
        if (this.tmForm.controls['bill_date'].value) {
            var dt = this.tmForm.controls['bill_date'].value.year + '-' +
                this.tmForm.controls['bill_date'].value.month + '-' +
                this.tmForm.controls['bill_date'].value.day;
            bill_date = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            bill_date = moment().format();
        }
        var date_of_fitment;
        if (this.tmForm.controls['date_of_fitment'].value) {
            var dt = this.tmForm.controls['date_of_fitment'].value.year + '-' +
                this.tmForm.controls['date_of_fitment'].value.month + '-' +
                this.tmForm.controls['date_of_fitment'].value.day;
            date_of_fitment = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            date_of_fitment = moment().format();
        }
        var rs_date;
        if (this.tmForm.controls['rs_date'].value) {
            var dt = this.tmForm.controls['rs_date'].value.year + '-' +
                this.tmForm.controls['rs_date'].value.month + '-' +
                this.tmForm.controls['rs_date'].value.day;
            rs_date = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            rs_date = moment().format();
        }
        this.process = 'saving';
        this.ts.updatTm(this.tmDetails['_id'], this.tmForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/tyre-management/tyre-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditTyreMasterComponent.prototype.getOptions = function () {
        var _this = this;
        this.ts.getVendorMasterList().subscribe(function (siteInfo) {
            _this.vendor_option = siteInfo['result'];
            console.log('>>>>Vendor List', siteInfo['result']);
        });
        this.meta.getCompanyTruckList().subscribe(function (siteInfo) {
            _this.truckno_option = siteInfo['result'];
            console.log('>>>>Vendor List', siteInfo['result']);
        });
        this.meta.getTyrePositionList().subscribe(function (siteInfo) {
            _this.tyrepositions_option = siteInfo['result'];
            console.log('>>>>Tyre Positions', siteInfo['result']);
        });
        this.meta.getCompanyNamesList().subscribe(function (siteInfo) {
            _this.companyname_option = siteInfo['result'];
            console.log('>>>>Company Name', siteInfo['result']);
        });
        this.meta.getBrandsList().subscribe(function (siteInfo) {
            _this.brand_option = siteInfo['result'];
            console.log('>>>>Brand', siteInfo['result']);
        });
    };
    EditTyreMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-tyre-master',
            template: __webpack_require__(/*! ./edit-tyre-master.component.html */ "./src/app/layout/tyre-management/components/edit-tyre-master/edit-tyre-master.component.html"),
            styles: [__webpack_require__(/*! ./edit-tyre-master.component.scss */ "./src/app/layout/tyre-management/components/edit-tyre-master/edit-tyre-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _tyremanagement_service__WEBPACK_IMPORTED_MODULE_3__["TyremanagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__["MetaService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditTyreMasterComponent);
    return EditTyreMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/components/list-observation-and-recommendation/list-observation-and-recommendation.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/list-observation-and-recommendation/list-observation-and-recommendation.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Observation and Recommendation Master'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\r\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\r\n  </app-smart-table>\r\n</div>\r\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\r\n  <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Delete Observation and Recommendation Master</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <p>Are you sure you want to delete this Data?</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\r\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\r\n                <span *ngIf=\"process !='processing'\">Delete</span>\r\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\r\n              </button>\r\n          </div>\r\n      </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/list-observation-and-recommendation/list-observation-and-recommendation.component.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/list-observation-and-recommendation/list-observation-and-recommendation.component.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90eXJlLW1hbmFnZW1lbnQvY29tcG9uZW50cy9saXN0LW9ic2VydmF0aW9uLWFuZC1yZWNvbW1lbmRhdGlvbi9saXN0LW9ic2VydmF0aW9uLWFuZC1yZWNvbW1lbmRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/list-observation-and-recommendation/list-observation-and-recommendation.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/list-observation-and-recommendation/list-observation-and-recommendation.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: ListObservationAndRecommendationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListObservationAndRecommendationComponent", function() { return ListObservationAndRecommendationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _tyremanagement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tyremanagement.service */ "./src/app/layout/tyre-management/tyremanagement.service.ts");
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





var ListObservationAndRecommendationComponent = /** @class */ (function () {
    function ListObservationAndRecommendationComponent(router, meta, tm) {
        this.router = router;
        this.meta = meta;
        this.tm = tm;
        this.addButtonInfo = { text: 'Add Observation and Recommendation Master',
            url: '/tyre-management/add-observation-and-recommendation' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('tyre-management/observation-and-recommendation');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Name' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Type', name: 'orname', sort: true },
                { title: 'Description', name: 'desc', sort: false },
                { title: 'Actions', links: ['Edit', 'Delete'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Type', name: 'orname', sort: true },
                { title: 'Description', name: 'desc', sort: false },
                { title: 'Actions', links: ['Edit', 'Delete'] }
            ];
        }
    }
    ListObservationAndRecommendationComponent.prototype.ngOnInit = function () {
    };
    ListObservationAndRecommendationComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/tyre-management/observation-and-recommendation/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListObservationAndRecommendationComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListObservationAndRecommendationComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.tm.deleteOar(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) {
            console.log(error);
        });
    };
    ListObservationAndRecommendationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-observation-and-recommendation',
            template: __webpack_require__(/*! ./list-observation-and-recommendation.component.html */ "./src/app/layout/tyre-management/components/list-observation-and-recommendation/list-observation-and-recommendation.component.html"),
            styles: [__webpack_require__(/*! ./list-observation-and-recommendation.component.scss */ "./src/app/layout/tyre-management/components/list-observation-and-recommendation/list-observation-and-recommendation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _tyremanagement_service__WEBPACK_IMPORTED_MODULE_3__["TyremanagementService"]])
    ], ListObservationAndRecommendationComponent);
    return ListObservationAndRecommendationComponent;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/components/list-truck-inspection/list-truck-inspection.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/list-truck-inspection/list-truck-inspection.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Truck Inspection'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete Truck Inspection</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete this Truck Inspection?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/list-truck-inspection/list-truck-inspection.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/list-truck-inspection/list-truck-inspection.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90eXJlLW1hbmFnZW1lbnQvY29tcG9uZW50cy9saXN0LXRydWNrLWluc3BlY3Rpb24vbGlzdC10cnVjay1pbnNwZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/list-truck-inspection/list-truck-inspection.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/list-truck-inspection/list-truck-inspection.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ListTruckInspectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTruckInspectionComponent", function() { return ListTruckInspectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _tyremanagement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tyremanagement.service */ "./src/app/layout/tyre-management/tyremanagement.service.ts");
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





var ListTruckInspectionComponent = /** @class */ (function () {
    function ListTruckInspectionComponent(router, ts, meta) {
        this.router = router;
        this.ts = ts;
        this.meta = meta;
        this.addButtonInfo = { text: 'Add Truck Inspection', url: '/tyre-management/add-truck-inspection' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('tyre-management/truck_inspection');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Truckno ' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        // if (this.usertype === 'ADMIN') {
        // } else {
        // }
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Date', name: 'idate', sort: false },
                { title: 'Truck No', name: 'truck_no', sort: true },
                { title: 'Km Reading', name: 'km_reading', sort: false },
                { title: 'User', name: 'user', sort: false },
                { title: 'Actions', links: ['Edit', 'Delete', 'View'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Date', name: 'idate', sort: false },
                { title: 'Truck No', name: 'truck_no', sort: true },
                { title: 'Km Reading', name: 'km_reading', sort: false },
                { title: 'User', name: 'user', sort: false },
                { title: 'Actions', links: ['Edit', 'View'] }
            ];
        }
    }
    ListTruckInspectionComponent.prototype.ngOnInit = function () {
    };
    ListTruckInspectionComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/tyre-management/truck_inspection/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (event.data.action === 'View') {
            this.router.navigate(['/tyre-management/truck-inspection/' + this.dataRow['row']['_id'] + '/view']);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListTruckInspectionComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListTruckInspectionComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.ts.deleteTi(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) {
            console.log(error);
        });
    };
    ListTruckInspectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-truck-inspection',
            template: __webpack_require__(/*! ./list-truck-inspection.component.html */ "./src/app/layout/tyre-management/components/list-truck-inspection/list-truck-inspection.component.html"),
            styles: [__webpack_require__(/*! ./list-truck-inspection.component.scss */ "./src/app/layout/tyre-management/components/list-truck-inspection/list-truck-inspection.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _tyremanagement_service__WEBPACK_IMPORTED_MODULE_3__["TyremanagementService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"]])
    ], ListTruckInspectionComponent);
    return ListTruckInspectionComponent;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/components/list-tyre-company-master/list-tyre-company-master.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/list-tyre-company-master/list-tyre-company-master.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'TYRE COMPANY MASTER'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\r\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\r\n  </app-smart-table>\r\n</div>\r\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\r\n  <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Delete Tyre Company Master</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <p>Are you sure you want to delete this Tyre Company Master?</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\r\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\r\n                <span *ngIf=\"process !='processing'\">Delete</span>\r\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\r\n              </button>\r\n          </div>\r\n      </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/list-tyre-company-master/list-tyre-company-master.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/list-tyre-company-master/list-tyre-company-master.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90eXJlLW1hbmFnZW1lbnQvY29tcG9uZW50cy9saXN0LXR5cmUtY29tcGFueS1tYXN0ZXIvbGlzdC10eXJlLWNvbXBhbnktbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/list-tyre-company-master/list-tyre-company-master.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/list-tyre-company-master/list-tyre-company-master.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ListTyreCompanyMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTyreCompanyMasterComponent", function() { return ListTyreCompanyMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _tyremanagement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tyremanagement.service */ "./src/app/layout/tyre-management/tyremanagement.service.ts");
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





var ListTyreCompanyMasterComponent = /** @class */ (function () {
    function ListTyreCompanyMasterComponent(router, meta, ts) {
        this.router = router;
        this.meta = meta;
        this.ts = ts;
        this.addButtonInfo = { text: 'Add Tyre Company Master', url: '/tyre-management/add-tyre-company-master' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('tyre-management/tyre-company-master');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Company Name' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Name', name: 'coname', sort: false },
                { title: 'Actions', links: ['Edit', 'Delete'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Name', name: 'coname', sort: false },
                { title: 'Actions', links: ['Edit'] }
            ];
        }
    }
    ListTyreCompanyMasterComponent.prototype.ngOnInit = function () {
    };
    ListTyreCompanyMasterComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        // console.log('list material', data);
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/tyre-management/tyre-company-master/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListTyreCompanyMasterComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListTyreCompanyMasterComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.ts.deleteTcm(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) { console.log(error); });
    };
    ListTyreCompanyMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-tyre-company-master',
            template: __webpack_require__(/*! ./list-tyre-company-master.component.html */ "./src/app/layout/tyre-management/components/list-tyre-company-master/list-tyre-company-master.component.html"),
            styles: [__webpack_require__(/*! ./list-tyre-company-master.component.scss */ "./src/app/layout/tyre-management/components/list-tyre-company-master/list-tyre-company-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _tyremanagement_service__WEBPACK_IMPORTED_MODULE_3__["TyremanagementService"]])
    ], ListTyreCompanyMasterComponent);
    return ListTyreCompanyMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/components/list-tyre-master/list-tyre-master.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/list-tyre-master/list-tyre-master.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Tyre Master'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\r\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\r\n  </app-smart-table>\r\n</div>\r\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\r\n  <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Delete Tyre Master</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <p>Are you sure you want to delete this Tyre?</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\r\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\r\n                <span *ngIf=\"process !='processing'\">Delete</span>\r\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\r\n              </button>\r\n          </div>\r\n      </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/list-tyre-master/list-tyre-master.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/list-tyre-master/list-tyre-master.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90eXJlLW1hbmFnZW1lbnQvY29tcG9uZW50cy9saXN0LXR5cmUtbWFzdGVyL2xpc3QtdHlyZS1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/list-tyre-master/list-tyre-master.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/list-tyre-master/list-tyre-master.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ListTyreMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTyreMasterComponent", function() { return ListTyreMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _tyremanagement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tyremanagement.service */ "./src/app/layout/tyre-management/tyremanagement.service.ts");
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





var ListTyreMasterComponent = /** @class */ (function () {
    function ListTyreMasterComponent(router, ts, meta) {
        this.router = router;
        this.ts = ts;
        this.meta = meta;
        this.addButtonInfo = { text: 'Add Tyre-Master', url: '/tyre-management/add-tyre-master' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('tyre-management/tyre-master');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Tyre No / Purchase Type / Tyre Position / Tyre Size / Vehicle No ' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        // if (this.usertype === 'ADMIN') {
        // } else {
        // }
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Tyre No', name: 'tyre_no', sort: true },
                { title: 'Purchase Type', name: 'purchase_type', sort: false },
                { title: 'NSD', name: 'nsd', sort: false },
                { title: 'Fitment Date', name: 'date_of_fitment', sort: false },
                { title: 'Fitment Km', name: 'fitment_km', sort: false },
                { title: 'Tyre Position', name: 'tyreposition', sort: false },
                { title: 'Tyre Size', name: 'tyre_size', sort: false },
                { title: 'Vehicle No', name: 'vehicle_no', sort: false },
                { title: 'Status', name: 'tyrestatus', sort: false },
                { title: 'User', name: 'user', sort: false },
                { title: 'Actions', links: ['Edit', 'Delete'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Tyre No', name: 'tyre_no', sort: true },
                { title: 'Purchase Type', name: 'purchase_type', sort: false },
                { title: 'NSD', name: 'nsd', sort: false },
                { title: 'Fitment Date', name: 'date_of_fitment', sort: false },
                { title: 'Fitment Km', name: 'fitment_km', sort: false },
                { title: 'Tyre Position', name: 'tyreposition', sort: false },
                { title: 'Tyre Size', name: 'tyre_size', sort: false },
                { title: 'Vehicle No', name: 'vehicle_no', sort: false },
                { title: 'Status', name: 'tyrestatus', sort: false },
                { title: 'User', name: 'user', sort: false },
                { title: 'Actions', links: ['Edit'] }
            ];
        }
    }
    ListTyreMasterComponent.prototype.ngOnInit = function () {
    };
    ListTyreMasterComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        // console.log('list material', data);
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/tyre-management/tyre-master/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListTyreMasterComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListTyreMasterComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.ts.deleteTm(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) {
            console.log(error);
        });
    };
    ListTyreMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-tyre-master',
            template: __webpack_require__(/*! ./list-tyre-master.component.html */ "./src/app/layout/tyre-management/components/list-tyre-master/list-tyre-master.component.html"),
            styles: [__webpack_require__(/*! ./list-tyre-master.component.scss */ "./src/app/layout/tyre-management/components/list-tyre-master/list-tyre-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _tyremanagement_service__WEBPACK_IMPORTED_MODULE_3__["TyremanagementService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"]])
    ], ListTyreMasterComponent);
    return ListTyreMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/components/truck-inspection/truck-inspection.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/truck-inspection/truck-inspection.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\">\r\n      <form [formGroup]=\"filterForm\" novalidate>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4><i class=\"fa fa-truck\"></i> Truck Inspection</h4>\r\n            <hr />\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <label class=\"required\">Truck No</label>\r\n            <ng-select [items]=\"truckno_option\" placeholder=\"Type and search Truck No\" bindLabel=\"truckno\" bindValue=\"truckno\"\r\n              formControlName=\"truck_no\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-2\">\r\n            <label class=\"required\">Entry Type</label>\r\n            <select class=\"form-control\" formControlName=\"type\" >\r\n              <option *ngFor=\"let t of types\">{{t.name}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n              <label class=\"required\">Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input class=\"form-control\" placeholder=\"dd/mm/yyyy\" name=\"dp\" formControlName=\"idate\" ngbDatepicker #d=\"ngbDatepicker\" />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-2\">\r\n            <label>Km Reading</label>\r\n            <input type=\"number\" class=\"form-control\" formControlName=\"km_reading\">\r\n          </div>\r\n\r\n          <div class=\"col-md-3 col-xs-12 col-sm-12 col-lg-3\">\r\n            <button [disabled]=\"loading\" (click)=\"fetch()\" class=\"btn btn-warning mg-top-26\"><i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n      <!-- <ngb-pagination\r\n        [(page)]=\"pagination.currenPage\"\r\n        [pageSize]=\"pagination.pageSize\"\r\n        [collectionSize]=\"pagination.total\"\r\n        [maxSize]=\"pagination.maxSize\"\r\n        (pageChange)=\"fetchReport()\"\r\n      ></ngb-pagination> -->\r\n      <!-- <p>\r\n        <strong>Total:</strong> {{ pagination.total }}, <strong>Records per page:</strong> {{ pagination.pageSize }},\r\n        <strong>Showing:</strong> {{ (pagination.currenPage - 1) * pagination.pageSize }} -\r\n        {{ (pagination.currenPage - 1) * pagination.pageSize + 50 }}\r\n      </p> -->\r\n\r\n      <div *ngIf=\"activeTab === 'New'\" >\r\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"addInspection(addForm.valid)\" novalidate>\r\n          <label>Selected Truck No:</label>\r\n          <p><strong>{{truckNo}}</strong></p>\r\n          <div class=\"table-scroll\">\r\n            <div class=\"table-scroll-inner\" formArrayName=\"items\" *ngFor=\"let item of addForm.get('items').controls; let i = index\">\r\n              <div [formGroupName]=\"i\">\r\n                \r\n                <!-- <div class=\"row\">\r\n\r\n                  <div class=\"col-md-1\">                      \r\n                    <label>Position No.</label>\r\n                    <input class=\"form-control\" type=\"number\" formControlName=\"pno\" [attr.disabled]=\"true\"> \r\n                  </div>\r\n\r\n                  <div class=\"col-md-2\">                      \r\n                    <label>Position Name</label>\r\n                    <input class=\"form-control\" type=\"text\" formControlName=\"positionname\" [attr.disabled]=\"true\"> \r\n                  </div>\r\n\r\n                  <div class=\"col-md-2\">                      \r\n                    <label>Tyre no.</label>\r\n                    <input class=\"form-control\" type=\"text\" formControlName=\"tyre_no\" [attr.disabled]=\"true\"> \r\n                  </div>\r\n     \r\n                  <div class=\"col-md-2\">                      \r\n                    <label>Fitment Date</label>\r\n                    <input class=\"form-control\" type=\"text\" formControlName=\"date_of_fitment\" [attr.disabled]=\"true\"> \r\n                  </div>\r\n                \r\n                  <div class=\"col-md-2\">                      \r\n                    <label>Fitment Km</label>\r\n                    <input class=\"form-control\" type=\"Number\" formControlName=\"fitment_km\" [attr.disabled]=\"true\"> \r\n                  </div>\r\n                \r\n                  <div class=\"col-md-1\">                      \r\n                    <label>NSD</label>\r\n                    <input class=\"form-control\" type=\"number\" formControlName=\"nsd\" [attr.disabled]=\"true\"> \r\n                  </div>\r\n\r\n                  <div class=\"col-md-1\">                      \r\n                    <label>RTD</label>\r\n                    <input class=\"form-control\" type=\"number\" formControlName=\"rtd\" required>\r\n                    <span class=\"text-danger\" *ngIf=\"(multipleFormControls[i].controls['rtd'].dirty || submitted) && multipleFormControls[i].controls['rtd'].hasError('required')\">Field is required</span>\r\n                  </div>\r\n      \r\n                  <div class=\"col-md-3\">\r\n                    <button [disabled]=\"loading\" class=\"btn btn-success mg-top-26\" type=\"button\" (click)=\"addItem(i)\">+</button>&nbsp;&nbsp;\r\n                    <button [disabled]=\"loading\" class=\"btn btn-danger mg-top-26\" type=\"button\" (click)=\"removeItem(i)\">-</button>\r\n                  </div>\r\n                  <hr>\r\n                </div> -->\r\n\r\n                <table class=\"table\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>\r\n                        <label>Position No</label>\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"pno\" [attr.disabled]=\"true\">\r\n                      </td>\r\n\r\n                      <td>\r\n                        <label>Position Name</label>\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"positionname\" [attr.disabled]=\"true\">\r\n                      </td>\r\n\r\n                      <td>\r\n                        <label>Tyre No</label>\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"tyre_no\" [attr.disabled]=\"true\">\r\n                      </td>\r\n\r\n                      <td>\r\n                        <label>Fitment Date</label>\r\n                        <input class=\"form-control\" type=\"date\" formControlName=\"date_of_fitment\" [attr.disabled]=\"true\">\r\n                      </td>\r\n\r\n                      <td>\r\n                        <label>Fitment Km</label>\r\n                        <input class=\"form-control\" type=\"Number\" formControlName=\"fitment_km\" [attr.disabled]=\"true\">\r\n                      </td>\r\n\r\n                      <td>\r\n                        <label>Nsd</label>\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"nsd\" [attr.disabled]=\"true\">\r\n                      </td>\r\n\r\n                      <td>\r\n                        <label>Rtd</label>\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"rtd\" required>\r\n                        <span class=\"text-danger\" *ngIf=\"(multipleFormControls[i].controls['rtd'].dirty || submitted) && multipleFormControls[i].controls['rtd'].hasError('required')\">Field is required</span>\r\n                      </td>\r\n\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <label>Add Observations</label>\r\n            <ng-select [multiple]=\"true\" [items]=\"observations\" placeholder=\"Type and search observations\"\r\n              formControlName=\"observations\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <label >Add Recommendations</label>\r\n            <ng-select [multiple]=\"true\" [items]=\"recommendations\" placeholder=\"Type and search recommendations\"\r\n              formControlName=\"recommendations\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"col-md-6\">                      \r\n            <label>Remarks</label>\r\n            <textarea class=\"form-control\" formControlName=\"remarks\" ></textarea>\r\n          </div>\r\n        </div>\r\n          \r\n          <br>\r\n          <div >\r\n            <button class=\"btn btn-success\" type=\"submit\">Save</button>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n\r\n      <form *ngIf=\"activeTab === 'Inspection'\" [formGroup]=\"editForm\" class=\"table-overflow\" novalidate>\r\n       \r\n        <div class=\"table-scroll\">\r\n          <div class=\"table-scroll-inner\" formArrayName=\"inspArr\" *ngFor=\"let inspItem of editForm.get('inspArr').controls; let k = index\">\r\n          <div [formGroupName]=\"k\">\r\n\r\n              <!-- <div class=\"row\">\r\n\r\n                <div class=\"col-md-1\">\r\n                  <label>Pos. No.</label>\r\n                    <input type=\"number\" class=\"form-control\" formControlName=\"pno\" [attr.disabled]=\"true\">\r\n                </div>\r\n\r\n                <div class=\"col-md-2\">\r\n                  <label>Position Name</label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"positionname\" [attr.disabled]=\"true\">\r\n                </div>\r\n    \r\n                <div class=\"col-md-2\">                      \r\n                    <label>Tyre no.</label>\r\n                    <input class=\"form-control\" type=\"text\" formControlName=\"tyre_no\" [attr.disabled]=\"true\"> \r\n                  </div>\r\n     \r\n                  <div class=\"col-md-2\">                      \r\n                    <label>Fitment Date</label>\r\n                    <input class=\"form-control\" type=\"text\" formControlName=\"date_of_fitment\" [attr.disabled]=\"true\"> \r\n                  </div>\r\n                \r\n                  <div class=\"col-md-2\">                      \r\n                    <label>Fitment Km</label>\r\n                    <input class=\"form-control\" type=\"Number\" formControlName=\"fitment_km\" [attr.disabled]=\"true\"> \r\n                  </div>\r\n              \r\n                <div class=\"col-md-2\">                      \r\n                  <label>NSD</label>\r\n                  <input class=\"form-control\" type=\"text\" formControlName=\"nsd\" [attr.disabled]=\"true\"> \r\n                </div>\r\n\r\n                <div class=\"col-md-2\">                      \r\n                  <label>RTD</label>\r\n                  <input class=\"form-control\" type=\"text\" formControlName=\"rtd\" >\r\n                </div>\r\n    \r\n                <div class=\"col-md-1\">\r\n                  <button (click)=\"delete(k)\" class=\"btn btn-danger mg-top-26\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button>\r\n                </div>\r\n\r\n                <hr>\r\n              </div> -->\r\n\r\n              <table class=\"table\">\r\n                <tbody>\r\n                  <tr>\r\n                    <td>\r\n                      <label>Position No</label>\r\n                      <input type=\"number\" class=\"form-control\" formControlName=\"pno\" [attr.disabled]=\"true\">\r\n                    </td>\r\n\r\n                    <td>\r\n                      <label>Position Name</label>\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"positionname\" [attr.disabled]=\"true\">\r\n                    </td>\r\n\r\n                    <td>\r\n                        <label>Tyre No</label>\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"tyre_no\" [attr.disabled]=\"true\">\r\n                      </td>\r\n\r\n                      <td>\r\n                        <label>Fitment Date</label>\r\n                        <input class=\"form-control\" type=\"date\" formControlName=\"date_of_fitment\" [attr.disabled]=\"true\">\r\n                      </td>\r\n\r\n                      <td>\r\n                        <label>Fitment Km</label>\r\n                        <input class=\"form-control\" type=\"Number\" formControlName=\"fitment_km\" [attr.disabled]=\"true\">\r\n                      </td>\r\n\r\n                    <td>\r\n                      <label>Nsd</label>\r\n                      <input class=\"form-control\" type=\"text\" formControlName=\"nsd\" [attr.disabled]=\"true\">\r\n                    </td>\r\n\r\n                    <td>\r\n                      <label>Rtd</label>\r\n                      <input class=\"form-control\" type=\"text\" formControlName=\"rtd\">\r\n                    </td>\r\n\r\n                    <td>\r\n                      <label>Actions</label>\r\n                      <br>\r\n                      <button (click)=\"delete(k)\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></button>\r\n                    </td>\r\n\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div> \r\n          </div>\r\n        </div>\r\n        \r\n        \r\n\r\n        <span *ngIf=\"inspectionReport\">\r\n          <span class=\"row\">\r\n            <span class=\"col-md-3\">\r\n              <label>Remarks</label>\r\n              <textarea class=\"form-control\" formControlName=\"remarks\"></textarea>\r\n            </span>\r\n          </span>\r\n          <br>\r\n          <span>\r\n            <button [disabled]=\"loading\" class=\"btn btn-success\" (click)=\"update()\">Update</button>\r\n          </span>\r\n        </span>\r\n\r\n      </form>\r\n      \r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/truck-inspection/truck-inspection.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/truck-inspection/truck-inspection.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mg-top-26 {\n  margin-top: 26px; }\n\n.mg-left-12 {\n  margin-left: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3R5cmUtbWFuYWdlbWVudC9jb21wb25lbnRzL3RydWNrLWluc3BlY3Rpb24vRjpcXHRlc3RpbmdfZGVsZXRlX2ZvbGRlclxcVFJVQ0tfREVNT19vbGRHYW5lc2hcXGZyb250ZW5kXFx0ZF9mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFx0eXJlLW1hbmFnZW1lbnRcXGNvbXBvbmVudHNcXHRydWNrLWluc3BlY3Rpb25cXHRydWNrLWluc3BlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFDSixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3R5cmUtbWFuYWdlbWVudC9jb21wb25lbnRzL3RydWNrLWluc3BlY3Rpb24vdHJ1Y2staW5zcGVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZy10b3AtMjYge1xyXG4gICAgbWFyZ2luLXRvcDogMjZweDtcclxufVxyXG5cclxuLm1nLWxlZnQtMTIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHhcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/truck-inspection/truck-inspection.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/truck-inspection/truck-inspection.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: TruckInspectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckInspectionComponent", function() { return TruckInspectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_truck_tyre_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/truck-tyre-master.service */ "./src/app/shared/services/truck-tyre-master.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/site.service */ "./src/app/shared/services/site.service.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tyremanagement_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tyremanagement.service */ "./src/app/layout/tyre-management/tyremanagement.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TruckInspectionComponent = /** @class */ (function () {
    function TruckInspectionComponent(fb, truckTyreMasterService, toastr, meta, tm, site, router) {
        this.fb = fb;
        this.truckTyreMasterService = truckTyreMasterService;
        this.toastr = toastr;
        this.meta = meta;
        this.tm = tm;
        this.site = site;
        this.router = router;
        this.truckno_option = [];
        this.filters = {
            idate: '',
            truck_no: '',
            type: '',
            km_reading: ''
        };
        this.observations = [];
        this.recommendations = [];
        this.tyres = [];
        this.loading = false;
        this.loaded = true;
        this.submitted = false;
        this.filterSubmitted = false;
        this.types = [{ name: 'New' }];
        this.activeTab = 'Inspection';
        this.positions = [];
        this.show = false;
        this.inspectons = [];
    }
    TruckInspectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tm.getAllOar().subscribe(function (result) {
            result['records'].forEach(function (record) {
                if (record['orname'] == 'Observation') {
                    _this.observations.push(record.desc);
                }
                if (record['orname'] == 'Recommendation') {
                    _this.recommendations.push(record.desc);
                }
            });
        });
        this.filterForm = this.fb.group({
            idate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            truck_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            km_reading: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.filterForm.patchValue({ type: 'New' });
        this.meta.getCompanyTruckList().subscribe(function (siteInfo) {
            _this.truckno_option = siteInfo['result'];
            console.log('>>>>Vendor List', siteInfo['result']);
        });
        this.addForm = this.fb.group({
            remarks: [''],
            items: this.fb.array([this.createItem()]),
            observations: [''],
            recommendations: ['']
        });
        this.editForm = this.fb.group({
            remarks: [''],
            inspArr: this.fb.array([])
        });
        this.items = this.addForm.get('items');
        this.inspArr = this.addForm.get('inspArr');
    };
    // For add inspection
    TruckInspectionComponent.prototype.createItem = function () {
        return this.fb.group({
            pno: [''],
            positionname: [''],
            tyre_no: [''],
            date_of_fitment: [''],
            fitment_km: [''],
            nsd: [''],
            rtd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    // For Edit inspection
    TruckInspectionComponent.prototype.createInspArr = function () {
        return this.fb.group({
            pno: [''],
            positionname: [''],
            tyre_no: [''],
            date_of_fitment: [''],
            fitment_km: [''],
            nsd: [''],
            rtd: ['']
        });
    };
    Object.defineProperty(TruckInspectionComponent.prototype, "multipleFormControls", {
        // get Formarray controls for add inspection
        get: function () {
            return this.addForm.get('items')['controls'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TruckInspectionComponent.prototype, "multipleEditControls", {
        // get Formarray controls for edit inspection
        get: function () {
            return this.editForm.get('inspArr')['controls'];
        },
        enumerable: true,
        configurable: true
    });
    // Set default value in form array for add inspection form
    TruckInspectionComponent.prototype.addExistingPositions = function (e) {
        return this.fb.group({
            pno: [e.pno, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            positionname: [e.positionname, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date_of_fitment: [e.date_of_fitment],
            fitment_km: [e.fitment_km],
            tyre_no: [e.tyre_no],
            nsd: [e.nsd],
            rtd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    // Set default value in form array for edit inspection form
    TruckInspectionComponent.prototype.addExisitingInsp = function (e) {
        // console.log(">>>>xyxecw", e);
        return this.fb.group({
            pno: [e.pno],
            positionname: [e.positionname],
            tyre_no: [e.tyre_no],
            date_of_fitment: [e.date_of_fitment],
            fitment_km: [e.fitment_km],
            nsd: [e.nsd],
            rtd: [e.rtd]
        });
    };
    TruckInspectionComponent.prototype.fetch = function () {
        var _this = this;
        this.filterSubmitted = true;
        this.truck_no = this.filterForm.value.truck_no;
        this.i_date = this.filterForm.value.idate;
        this.km_reading = this.filterForm.value.km_reading;
        if (this.filterForm.value.type === 'New') {
            // Remove default formarray from addform
            var control = this.addForm.controls['items'];
            for (var i = control.length - 1; i >= 0; i--) {
                control.removeAt(i);
            }
            this.activeTab = 'New';
            this.truckNo = this.filterForm.value.truck_no;
            var obj = {
                truck_no: this.filterForm.value.truck_no
            };
            this.loading = true;
            this.loaded = false;
            this.truckTyreMasterService.getTyrePosition(obj).subscribe(function (res) {
                _this.loading = false;
                _this.loaded = true;
                res.results.forEach(function (element) {
                    // Push res value to form array
                    _this.multipleFormControls.push(_this.addExistingPositions(element));
                });
                _this.positions = res.results;
            }, function (err) {
                _this.loading = false;
                _this.loaded = true;
                console.log('>>>>>>>>>err', err);
            });
        }
        else {
            // Remove default formarray from editForm
            var control = this.editForm.controls['inspArr'];
            for (var i = control.length - 1; i >= 0; i--) {
                control.removeAt(i);
            }
            this.activeTab = 'Inspection';
            var idate = this.filterForm.value.idate;
            idate = idate.year + '-' + idate.month + '-' + idate.day;
            if (this.filterForm.value.idate) {
                this.filters.idate = idate;
            }
            else {
                this.filters.idate = '';
            }
            if (this.filterForm.value.truck_no) {
                this.filters.truck_no = this.filterForm.value.truck_no;
            }
            else {
                this.filters.truck_no = '';
            }
            if (this.filterForm.value.type) {
                this.filters.type = this.filterForm.value.type;
            }
            else {
                this.filters.type = '';
            }
            if (this.filterForm.value.km_reading) {
                this.filters.km_reading = this.filterForm.value.km_reading;
            }
            else {
                this.filters.km_reading = '';
            }
            this.loading = true;
            this.loaded = false;
            this.inspectionReport = [];
            this.truckTyreMasterService.getTruckInspectionList(this.filters).subscribe(function (res) {
                _this.loading = false;
                _this.loaded = true;
                res.results.inspections.forEach(function (element) {
                    console.log(' Element Date ', element.date_of_fitment);
                    // set date
                    // element.date_of_fitment = momentTZ(element.date_of_fitment).tz('Asia/Calcutta').format('DD/MM/YYYY');
                    // const splitedDate = element.date_of_fitment.split('/');
                    // const dateObj = {
                    //   day: parseInt(splitedDate[0]),
                    //   month: parseInt(splitedDate[1]),
                    //   year: parseInt(splitedDate[2])
                    // };
                    // element.date_of_fitment = dateObj;
                    // Push res value to form array
                    _this.multipleEditControls.push(_this.addExisitingInsp(element));
                });
                _this.editForm.controls['remarks'].setValue(res.results.remarks);
                _this.inspectionReport = res.results;
            }, function (err) {
                _this.loading = false;
                _this.loaded = true;
                console.log('>>>>>>>>>err', err);
            });
        }
        this.tm.getAllOar().subscribe(function (result) {
            result['records'].forEach(function (record) {
                if (record['orname'] == 'Observation') {
                    _this.observations.push(record.desc);
                }
                if (record['orname'] == 'Recommendation') {
                    _this.recommendations.push(record.desc);
                }
            });
        });
    };
    // Multiple form add in addForm
    TruckInspectionComponent.prototype.addItem = function () {
        this.items = this.addForm.get('items');
        this.items.push(this.createItem());
    };
    // Remove multiple form
    TruckInspectionComponent.prototype.removeItem = function (index) {
        if (index === 0) {
            this.toastr.error('Cannot remove this form.');
        }
        else {
            this.items.removeAt(index);
        }
    };
    TruckInspectionComponent.prototype.addInspection = function (isValid) {
        var _this = this;
        console.log(' Save is working >>>>');
        this.submitted = true;
        //if (isValid) {
        // km_reading: this.addForm.value.km_reading
        var inValues = [];
        console.log(' isValid is working >>>>');
        this.multipleFormControls.forEach(function (control) {
            inValues.push(control.value);
        });
        this.addForm.controls['items'].patchValue(inValues);
        var val = this.addForm.controls['items'].value;
        this.truckNo = this.filterForm.value.truck_no;
        var obj = {
            idate: new Date(this.i_date.year, this.i_date.month - 1, this.i_date.day, 23, 59, 59),
            km_reading: this.km_reading,
            truck_no: this.truck_no,
            inspections: val,
            remarks: this.addForm.value.remarks,
            observations: this.addForm.value.observations,
            recommendations: this.addForm.value.recommendations
        };
        this.loading = true;
        this.loaded = false;
        this.truckTyreMasterService.addTruckInspection(obj).subscribe(function (res) {
            // this.loading = false;
            // this.loaded = true;
            // this.activeTab = 'Inspection';
            // this.filterForm.controls['type'].setValue(this.activeTab);
            // this.fetch();
            _this.router.navigate(['/'])
                .then(function () { _this.router.navigate(['/tyre-management/truck-inspection']); });
            _this.toastr.success('Truck Inspection added successfully.');
        }, function (err) {
            // this.loading = false;
            // this.loaded = true;
            // this.activeTab = 'New';
            // this.filterForm.controls['type'].setValue(this.activeTab);
            _this.toastr.error('Something went wrong.');
        });
        // this.addForm.reset();
        // this.filterForm.reset();
        //}
    };
    TruckInspectionComponent.prototype.update = function () {
        var _this = this;
        var val = [];
        this.multipleEditControls.forEach(function (element) {
            var d = element.value.date_of_fitment;
            element.value.date_of_fitment = moment(d.year + '-' + d.month + '-' + d.day, 'YYYY-MM-DD').format('YYYY-MM-DD');
            val.push(element.value);
        });
        var obj = {
            idate: new Date(this.i_date.year, this.i_date.month - 1, this.i_date.day, 23, 59, 59),
            km_reading: this.km_reading,
            truck_no: this.truck_no,
            remarks: this.editForm.value.remarks,
            inspections: val
        };
        console.log(obj);
        this.loading = true;
        this.loaded = false;
        this.truckTyreMasterService.updateTruckInspection(obj).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            _this.fetch();
            _this.show = false;
            _this.toastr.success('Truck Inspection updated successfully.');
        }, function (err) {
            _this.loading = false;
            _this.loaded = true;
            console.log('>>>>>>>>>err', err);
            _this.toastr.error('Something went wrong.');
        });
    };
    TruckInspectionComponent.prototype.delete = function (i) {
        // console.log(">>>>>>>insp", this.inspectionReport);
        var _this = this;
        var conf = confirm('Are you sure you want to delete this record ?');
        if (conf === true) {
            var obj = {
                insp_id: this.inspectionReport.inspections[i]._id
            };
            // console.log(">>>>>obj", obj);
            this.loading = true;
            this.loaded = false;
            this.truckTyreMasterService.deleteTruckInspection(this.inspectionReport._id, obj).subscribe(function (res) {
                _this.loading = false;
                _this.loaded = true;
                var control = _this.editForm.controls['inspArr'];
                control.removeAt(i);
                _this.toastr.success('Truck Inspection deleted successfully.');
            }, function (err) {
                _this.loading = false;
                _this.loaded = true;
                console.log('>>>>>>>>>err', err);
                _this.toastr.error('Something went wrong.');
            });
        }
    };
    TruckInspectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truck-inspection',
            template: __webpack_require__(/*! ./truck-inspection.component.html */ "./src/app/layout/tyre-management/components/truck-inspection/truck-inspection.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./truck-inspection.component.scss */ "./src/app/layout/tyre-management/components/truck-inspection/truck-inspection.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_truck_tyre_master_service__WEBPACK_IMPORTED_MODULE_2__["TruckTyreMasterService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_6__["MetaService"],
            _tyremanagement_service__WEBPACK_IMPORTED_MODULE_8__["TyremanagementService"],
            src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_5__["SiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], TruckInspectionComponent);
    return TruckInspectionComponent;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/components/view-truck-inspection/view-truck-inspection.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/view-truck-inspection/view-truck-inspection.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Truck Observation And Recommendation\n      <button class=\"btn btn-primary float-right\" (click)=\"gotoEdit()\"  type=\"button\">\n        <i class=\"fa fa-edit\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-group row\">\n       <div class=\"col-lg-3 col-md-3\">\n          <div class=\"form-group row\">\n            <label class=\"col-lg-4 col-md-4\">TruckNo</label>\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{tiDetails?.truck_no}}</label>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-3\">\n          <div class=\"form-group row\">\n            <label class=\"col-lg-4 col-md-4\">Date</label>\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{tiDetails?.idate | date}}</label>\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"form-group row\">\n        <div class=\"col-lg-3 col-md-3\">\n          <div class=\"form-group row\">\n            <label class=\"col-lg-4 col-md-4\">Km Reading</label>\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{tiDetails?.km_reading}}</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-header\">Material Receipt items</div>\n            <div class=\"card-body\">\n              <div style=\"width: 100%; display: table;\">\n                <div style=\"display: table-row\">\n                    <div style=\"width: 50%; display: table-cell;\"> \n                      <table class=\"table table-bordered\">\n                        <tr>\n                          <th>Observations</th>\n                        </tr>\n                        <tr *ngFor=\"let o of tiDetails.observations\"> \n                          <td>\n                              {{o}}\n                          </td>\n                        </tr>\n                      </table>\n                    \n                    </div>\n                    <div style=\"width: 50%; display: table-cell;\"> \n                      <table class=\"table table-bordered\">\n                        <tr>\n                          <th>Recommendations</th>\n                        </tr>\n                        <tr *ngFor=\"let r of tiDetails.recommendations\"> \n                          <td>\n                            {{r}}\n                          </td>\n                        </tr>\n                      </table>     \n                    </div>\n                </div>\n            </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"form-group row mt-3\">\n        <div class=\"col-lg-6 col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-lg-4 col-md-4\">Narration</label>\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{tiDetails?.narration}}</label>\n          </div>\n        </div>\n      </div> -->\n      <!-- <div class=\"form-group row\">\n        <div class=\"col-lg-6 col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-lg-4 col-md-4\">Net Amt(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</label>\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{tiDetails?.net_amount}}</label>\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-lg-4 col-md-4\">Rounded off(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</label>\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{tiDetails?.rounded_off}}</label>\n          </div>\n        </div>\n      </div> -->\n      <!-- <div class=\"form-group row\">\n\n        <div class=\"col-lg-6 col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-lg-4 col-md-4\">Round of Type</label>\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{tiDetails?.round_off_type}}</label>\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-lg-4 col-md-4\">Total(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</label>\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{tiDetails?.total_amount}}</label>\n          </div>\n        </div>\n      </div> -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/view-truck-inspection/view-truck-inspection.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/view-truck-inspection/view-truck-inspection.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tbody {\n  display: block;\n  height: 300px;\n  overflow: auto; }\n\nthead, tbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  /* even columns width , fix width of table too*/ }\n\nthead {\n  width: 100%;\n  overflow: auto;\n  /* scrollbar is average 1em/16px width, remove it from thead width */ }\n\ntable {\n  width: 100%;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3R5cmUtbWFuYWdlbWVudC9jb21wb25lbnRzL3ZpZXctdHJ1Y2staW5zcGVjdGlvbi9GOlxcdGVzdGluZ19kZWxldGVfZm9sZGVyXFxUUlVDS19ERU1PX29sZEdhbmVzaFxcZnJvbnRlbmRcXHRkX2Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHR5cmUtbWFuYWdlbWVudFxcY29tcG9uZW50c1xcdmlldy10cnVjay1pbnNwZWN0aW9uXFx2aWV3LXRydWNrLWluc3BlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLGNBQWEsRUFBQTs7QUFFakI7RUFDSSxjQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFrQjtFQUFDLCtDQUFBLEVBQWdEOztBQUV2RTtFQUNJLFdBQVc7RUFDWCxjQUFhO0VBQ2Isb0VBQUEsRUFBcUU7O0FBRXpFO0VBQ0ksV0FBVztFQUNYLGNBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90eXJlLW1hbmFnZW1lbnQvY29tcG9uZW50cy92aWV3LXRydWNrLWluc3BlY3Rpb24vdmlldy10cnVjay1pbnNwZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG50Ym9keSB7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBoZWlnaHQ6MzAwcHg7XG4gICAgb3ZlcmZsb3c6YXV0bztcbn1cbnRoZWFkLCB0Ym9keSB0ciB7XG4gICAgZGlzcGxheTp0YWJsZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7LyogZXZlbiBjb2x1bW5zIHdpZHRoICwgZml4IHdpZHRoIG9mIHRhYmxlIHRvbyovXG59XG50aGVhZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6YXV0bztcbiAgICAvKiBzY3JvbGxiYXIgaXMgYXZlcmFnZSAxZW0vMTZweCB3aWR0aCwgcmVtb3ZlIGl0IGZyb20gdGhlYWQgd2lkdGggKi9cbn1cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzphdXRvO1xuXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/view-truck-inspection/view-truck-inspection.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/view-truck-inspection/view-truck-inspection.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ViewTruckInspectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTruckInspectionComponent", function() { return ViewTruckInspectionComponent; });
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


var ViewTruckInspectionComponent = /** @class */ (function () {
    function ViewTruckInspectionComponent(aroute, router) {
        this.aroute = aroute;
        this.router = router;
    }
    ViewTruckInspectionComponent.prototype.ngOnInit = function () {
        this.tiDetails = this.aroute.snapshot.data['ti_details'];
    };
    ViewTruckInspectionComponent.prototype.gotoEdit = function () {
        this.router.navigate(["/tyre-management/truck_inspection/" + this.tiDetails['_id'] + "/edit"]);
    };
    ViewTruckInspectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-truck-inspection',
            template: __webpack_require__(/*! ./view-truck-inspection.component.html */ "./src/app/layout/tyre-management/components/view-truck-inspection/view-truck-inspection.component.html"),
            styles: [__webpack_require__(/*! ./view-truck-inspection.component.scss */ "./src/app/layout/tyre-management/components/view-truck-inspection/view-truck-inspection.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewTruckInspectionComponent);
    return ViewTruckInspectionComponent;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/components/view-tyre-company-master/view-tyre-company-master.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/view-tyre-company-master/view-tyre-company-master.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  view-tyre-company-master works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/view-tyre-company-master/view-tyre-company-master.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/view-tyre-company-master/view-tyre-company-master.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90eXJlLW1hbmFnZW1lbnQvY29tcG9uZW50cy92aWV3LXR5cmUtY29tcGFueS1tYXN0ZXIvdmlldy10eXJlLWNvbXBhbnktbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/tyre-management/components/view-tyre-company-master/view-tyre-company-master.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/layout/tyre-management/components/view-tyre-company-master/view-tyre-company-master.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ViewTyreCompanyMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTyreCompanyMasterComponent", function() { return ViewTyreCompanyMasterComponent; });
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

var ViewTyreCompanyMasterComponent = /** @class */ (function () {
    function ViewTyreCompanyMasterComponent() {
    }
    ViewTyreCompanyMasterComponent.prototype.ngOnInit = function () {
    };
    ViewTyreCompanyMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-tyre-company-master',
            template: __webpack_require__(/*! ./view-tyre-company-master.component.html */ "./src/app/layout/tyre-management/components/view-tyre-company-master/view-tyre-company-master.component.html"),
            styles: [__webpack_require__(/*! ./view-tyre-company-master.component.scss */ "./src/app/layout/tyre-management/components/view-tyre-company-master/view-tyre-company-master.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewTyreCompanyMasterComponent);
    return ViewTyreCompanyMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/observationandrecommendation-reslover.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/tyre-management/observationandrecommendation-reslover.ts ***!
  \*********************************************************************************/
/*! exports provided: ObservationandrecommendationReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservationandrecommendationReslover", function() { return ObservationandrecommendationReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tyremanagement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tyremanagement.service */ "./src/app/layout/tyre-management/tyremanagement.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObservationandrecommendationReslover = /** @class */ (function () {
    function ObservationandrecommendationReslover(tm) {
        this.tm = tm;
    }
    ObservationandrecommendationReslover.prototype.resolve = function (route) {
        return this.tm.getOar(route.paramMap.get('id'));
    };
    ObservationandrecommendationReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_tyremanagement_service__WEBPACK_IMPORTED_MODULE_1__["TyremanagementService"]])
    ], ObservationandrecommendationReslover);
    return ObservationandrecommendationReslover;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/truckinspection-reslover.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/tyre-management/truckinspection-reslover.ts ***!
  \********************************************************************/
/*! exports provided: TruckinspectionReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckinspectionReslover", function() { return TruckinspectionReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tyremanagement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tyremanagement.service */ "./src/app/layout/tyre-management/tyremanagement.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TruckinspectionReslover = /** @class */ (function () {
    function TruckinspectionReslover(tm) {
        this.tm = tm;
    }
    TruckinspectionReslover.prototype.resolve = function (route) {
        return this.tm.getTi(route.paramMap.get('id'));
    };
    TruckinspectionReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_tyremanagement_service__WEBPACK_IMPORTED_MODULE_1__["TyremanagementService"]])
    ], TruckinspectionReslover);
    return TruckinspectionReslover;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/tyre-management.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/tyre-management/tyre-management.module.ts ***!
  \******************************************************************/
/*! exports provided: TyreManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TyreManagementModule", function() { return TyreManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tyre_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tyre.component */ "./src/app/layout/tyre-management/tyre.component.ts");
/* harmony import */ var _tyre_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tyre-routing.module */ "./src/app/layout/tyre-management/tyre-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _tyremanagement_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tyremanagement.service */ "./src/app/layout/tyre-management/tyremanagement.service.ts");
/* harmony import */ var ng2_auto_complete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-auto-complete */ "./node_modules/ng2-auto-complete/dist/index.js");
/* harmony import */ var ng2_auto_complete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_auto_complete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_add_truck_inspection_add_truck_inspection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-truck-inspection/add-truck-inspection.component */ "./src/app/layout/tyre-management/components/add-truck-inspection/add-truck-inspection.component.ts");
/* harmony import */ var _components_edit_truck_inspection_edit_truck_inspection_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/edit-truck-inspection/edit-truck-inspection.component */ "./src/app/layout/tyre-management/components/edit-truck-inspection/edit-truck-inspection.component.ts");
/* harmony import */ var _components_list_truck_inspection_list_truck_inspection_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/list-truck-inspection/list-truck-inspection.component */ "./src/app/layout/tyre-management/components/list-truck-inspection/list-truck-inspection.component.ts");
/* harmony import */ var _components_view_truck_inspection_view_truck_inspection_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/view-truck-inspection/view-truck-inspection.component */ "./src/app/layout/tyre-management/components/view-truck-inspection/view-truck-inspection.component.ts");
/* harmony import */ var _truckinspection_reslover__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./truckinspection-reslover */ "./src/app/layout/tyre-management/truckinspection-reslover.ts");
/* harmony import */ var _components_add_tyre_company_master_add_tyre_company_master_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/add-tyre-company-master/add-tyre-company-master.component */ "./src/app/layout/tyre-management/components/add-tyre-company-master/add-tyre-company-master.component.ts");
/* harmony import */ var _components_edit_tyre_company_master_edit_tyre_company_master_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/edit-tyre-company-master/edit-tyre-company-master.component */ "./src/app/layout/tyre-management/components/edit-tyre-company-master/edit-tyre-company-master.component.ts");
/* harmony import */ var _components_list_tyre_company_master_list_tyre_company_master_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/list-tyre-company-master/list-tyre-company-master.component */ "./src/app/layout/tyre-management/components/list-tyre-company-master/list-tyre-company-master.component.ts");
/* harmony import */ var _components_view_tyre_company_master_view_tyre_company_master_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/view-tyre-company-master/view-tyre-company-master.component */ "./src/app/layout/tyre-management/components/view-tyre-company-master/view-tyre-company-master.component.ts");
/* harmony import */ var _tyrecompanymaster_reslover__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tyrecompanymaster-reslover */ "./src/app/layout/tyre-management/tyrecompanymaster-reslover.ts");
/* harmony import */ var _components_add_observation_and_recommendation_add_observation_and_recommendation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/add-observation-and-recommendation/add-observation-and-recommendation.component */ "./src/app/layout/tyre-management/components/add-observation-and-recommendation/add-observation-and-recommendation.component.ts");
/* harmony import */ var _components_edit_observation_and_recommendation_edit_observation_and_recommendation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/edit-observation-and-recommendation/edit-observation-and-recommendation.component */ "./src/app/layout/tyre-management/components/edit-observation-and-recommendation/edit-observation-and-recommendation.component.ts");
/* harmony import */ var _components_list_observation_and_recommendation_list_observation_and_recommendation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/list-observation-and-recommendation/list-observation-and-recommendation.component */ "./src/app/layout/tyre-management/components/list-observation-and-recommendation/list-observation-and-recommendation.component.ts");
/* harmony import */ var _observationandrecommendation_reslover__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./observationandrecommendation-reslover */ "./src/app/layout/tyre-management/observationandrecommendation-reslover.ts");
/* harmony import */ var _components_add_tyre_master_add_tyre_master_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/add-tyre-master/add-tyre-master.component */ "./src/app/layout/tyre-management/components/add-tyre-master/add-tyre-master.component.ts");
/* harmony import */ var _components_edit_tyre_master_edit_tyre_master_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/edit-tyre-master/edit-tyre-master.component */ "./src/app/layout/tyre-management/components/edit-tyre-master/edit-tyre-master.component.ts");
/* harmony import */ var _components_list_tyre_master_list_tyre_master_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/list-tyre-master/list-tyre-master.component */ "./src/app/layout/tyre-management/components/list-tyre-master/list-tyre-master.component.ts");
/* harmony import */ var _tyremaster_reslover__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./tyremaster-reslover */ "./src/app/layout/tyre-management/tyremaster-reslover.ts");
/* harmony import */ var _components_truck_inspection_truck_inspection_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/truck-inspection/truck-inspection.component */ "./src/app/layout/tyre-management/components/truck-inspection/truck-inspection.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// truck inspection





// tyre company master





// observation and recommendation




// tyre master





var TyreManagementModule = /** @class */ (function () {
    function TyreManagementModule() {
    }
    TyreManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _tyre_component__WEBPACK_IMPORTED_MODULE_2__["TyreComponent"],
                _components_add_truck_inspection_add_truck_inspection_component__WEBPACK_IMPORTED_MODULE_10__["AddTruckInspectionComponent"],
                _components_edit_truck_inspection_edit_truck_inspection_component__WEBPACK_IMPORTED_MODULE_11__["EditTruckInspectionComponent"],
                _components_list_truck_inspection_list_truck_inspection_component__WEBPACK_IMPORTED_MODULE_12__["ListTruckInspectionComponent"],
                _components_truck_inspection_truck_inspection_component__WEBPACK_IMPORTED_MODULE_28__["TruckInspectionComponent"],
                // tyre company master
                _components_add_tyre_company_master_add_tyre_company_master_component__WEBPACK_IMPORTED_MODULE_15__["AddTyreCompanyMasterComponent"],
                _components_edit_tyre_company_master_edit_tyre_company_master_component__WEBPACK_IMPORTED_MODULE_16__["EditTyreCompanyMasterComponent"],
                _components_list_tyre_company_master_list_tyre_company_master_component__WEBPACK_IMPORTED_MODULE_17__["ListTyreCompanyMasterComponent"],
                _components_view_tyre_company_master_view_tyre_company_master_component__WEBPACK_IMPORTED_MODULE_18__["ViewTyreCompanyMasterComponent"],
                // Observation and Recommendation
                _components_add_observation_and_recommendation_add_observation_and_recommendation_component__WEBPACK_IMPORTED_MODULE_20__["AddObservationAndRecommendationComponent"],
                _components_edit_observation_and_recommendation_edit_observation_and_recommendation_component__WEBPACK_IMPORTED_MODULE_21__["EditObservationAndRecommendationComponent"],
                _components_list_observation_and_recommendation_list_observation_and_recommendation_component__WEBPACK_IMPORTED_MODULE_22__["ListObservationAndRecommendationComponent"],
                // tyre master
                _components_add_tyre_master_add_tyre_master_component__WEBPACK_IMPORTED_MODULE_24__["AddTyreMasterComponent"],
                _components_edit_tyre_master_edit_tyre_master_component__WEBPACK_IMPORTED_MODULE_25__["EditTyreMasterComponent"],
                _components_list_tyre_master_list_tyre_master_component__WEBPACK_IMPORTED_MODULE_26__["ListTyreMasterComponent"],
                _components_view_truck_inspection_view_truck_inspection_component__WEBPACK_IMPORTED_MODULE_13__["ViewTruckInspectionComponent"]
            ],
            imports: [
                _tyre_routing_module__WEBPACK_IMPORTED_MODULE_3__["TyreRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                ng2_auto_complete__WEBPACK_IMPORTED_MODULE_9__["Ng2AutoCompleteModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            ],
            providers: [
                _tyremanagement_service__WEBPACK_IMPORTED_MODULE_8__["TyremanagementService"],
                _tyrecompanymaster_reslover__WEBPACK_IMPORTED_MODULE_19__["TyrecompanymasterReslover"],
                _tyremaster_reslover__WEBPACK_IMPORTED_MODULE_27__["TyremasterReslover"],
                _truckinspection_reslover__WEBPACK_IMPORTED_MODULE_14__["TruckinspectionReslover"],
                _observationandrecommendation_reslover__WEBPACK_IMPORTED_MODULE_23__["ObservationandrecommendationReslover"]
            ]
        })
    ], TyreManagementModule);
    return TyreManagementModule;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/tyre-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/tyre-management/tyre-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TyreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TyreRoutingModule", function() { return TyreRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tyre_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tyre.component */ "./src/app/layout/tyre-management/tyre.component.ts");
/* harmony import */ var _components_add_truck_inspection_add_truck_inspection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-truck-inspection/add-truck-inspection.component */ "./src/app/layout/tyre-management/components/add-truck-inspection/add-truck-inspection.component.ts");
/* harmony import */ var _components_list_truck_inspection_list_truck_inspection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/list-truck-inspection/list-truck-inspection.component */ "./src/app/layout/tyre-management/components/list-truck-inspection/list-truck-inspection.component.ts");
/* harmony import */ var _components_view_truck_inspection_view_truck_inspection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/view-truck-inspection/view-truck-inspection.component */ "./src/app/layout/tyre-management/components/view-truck-inspection/view-truck-inspection.component.ts");
/* harmony import */ var _components_edit_truck_inspection_edit_truck_inspection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/edit-truck-inspection/edit-truck-inspection.component */ "./src/app/layout/tyre-management/components/edit-truck-inspection/edit-truck-inspection.component.ts");
/* harmony import */ var _truckinspection_reslover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./truckinspection-reslover */ "./src/app/layout/tyre-management/truckinspection-reslover.ts");
/* harmony import */ var _components_add_tyre_master_add_tyre_master_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-tyre-master/add-tyre-master.component */ "./src/app/layout/tyre-management/components/add-tyre-master/add-tyre-master.component.ts");
/* harmony import */ var _components_list_tyre_master_list_tyre_master_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/list-tyre-master/list-tyre-master.component */ "./src/app/layout/tyre-management/components/list-tyre-master/list-tyre-master.component.ts");
/* harmony import */ var _components_edit_tyre_master_edit_tyre_master_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/edit-tyre-master/edit-tyre-master.component */ "./src/app/layout/tyre-management/components/edit-tyre-master/edit-tyre-master.component.ts");
/* harmony import */ var _tyremaster_reslover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tyremaster-reslover */ "./src/app/layout/tyre-management/tyremaster-reslover.ts");
/* harmony import */ var _components_add_tyre_company_master_add_tyre_company_master_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/add-tyre-company-master/add-tyre-company-master.component */ "./src/app/layout/tyre-management/components/add-tyre-company-master/add-tyre-company-master.component.ts");
/* harmony import */ var _components_list_tyre_company_master_list_tyre_company_master_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/list-tyre-company-master/list-tyre-company-master.component */ "./src/app/layout/tyre-management/components/list-tyre-company-master/list-tyre-company-master.component.ts");
/* harmony import */ var _components_view_tyre_company_master_view_tyre_company_master_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/view-tyre-company-master/view-tyre-company-master.component */ "./src/app/layout/tyre-management/components/view-tyre-company-master/view-tyre-company-master.component.ts");
/* harmony import */ var _components_edit_tyre_company_master_edit_tyre_company_master_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/edit-tyre-company-master/edit-tyre-company-master.component */ "./src/app/layout/tyre-management/components/edit-tyre-company-master/edit-tyre-company-master.component.ts");
/* harmony import */ var _tyrecompanymaster_reslover__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tyrecompanymaster-reslover */ "./src/app/layout/tyre-management/tyrecompanymaster-reslover.ts");
/* harmony import */ var _components_list_observation_and_recommendation_list_observation_and_recommendation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/list-observation-and-recommendation/list-observation-and-recommendation.component */ "./src/app/layout/tyre-management/components/list-observation-and-recommendation/list-observation-and-recommendation.component.ts");
/* harmony import */ var _components_add_observation_and_recommendation_add_observation_and_recommendation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/add-observation-and-recommendation/add-observation-and-recommendation.component */ "./src/app/layout/tyre-management/components/add-observation-and-recommendation/add-observation-and-recommendation.component.ts");
/* harmony import */ var _components_edit_observation_and_recommendation_edit_observation_and_recommendation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/edit-observation-and-recommendation/edit-observation-and-recommendation.component */ "./src/app/layout/tyre-management/components/edit-observation-and-recommendation/edit-observation-and-recommendation.component.ts");
/* harmony import */ var _observationandrecommendation_reslover__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./observationandrecommendation-reslover */ "./src/app/layout/tyre-management/observationandrecommendation-reslover.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// truck inspection
// import { TruckInspectionComponent } from './components/truck-inspection/truck-inspection.component';





// truck tyre master




// tyre-company-master





// observation and recommendation




var routes = [
    {
        path: '',
        component: _tyre_component__WEBPACK_IMPORTED_MODULE_2__["TyreComponent"],
        children: [
            { path: '', redirectTo: 'tyre-management', pathMatch: 'prefix' },
            // truck inspection
            // {path: 'truck-inspection', component: TruckInspectionComponent},
            { path: 'truck-inspection', component: _components_list_truck_inspection_list_truck_inspection_component__WEBPACK_IMPORTED_MODULE_4__["ListTruckInspectionComponent"] },
            { path: 'truck-inspection/:id/edit', component: _components_edit_truck_inspection_edit_truck_inspection_component__WEBPACK_IMPORTED_MODULE_6__["EditTruckInspectionComponent"], resolve: { ti_details: _truckinspection_reslover__WEBPACK_IMPORTED_MODULE_7__["TruckinspectionReslover"] } },
            { path: 'truck-inspection/:id/view', component: _components_view_truck_inspection_view_truck_inspection_component__WEBPACK_IMPORTED_MODULE_5__["ViewTruckInspectionComponent"], resolve: { ti_details: _truckinspection_reslover__WEBPACK_IMPORTED_MODULE_7__["TruckinspectionReslover"] } },
            { path: 'add-truck-inspection', component: _components_add_truck_inspection_add_truck_inspection_component__WEBPACK_IMPORTED_MODULE_3__["AddTruckInspectionComponent"] },
            // tyre Master
            { path: 'tyre-master', component: _components_list_tyre_master_list_tyre_master_component__WEBPACK_IMPORTED_MODULE_9__["ListTyreMasterComponent"] },
            { path: 'tyre-master/:id/edit', component: _components_edit_tyre_master_edit_tyre_master_component__WEBPACK_IMPORTED_MODULE_10__["EditTyreMasterComponent"], resolve: { tm_details: _tyremaster_reslover__WEBPACK_IMPORTED_MODULE_11__["TyremasterReslover"] } },
            { path: 'add-tyre-master', component: _components_add_tyre_master_add_tyre_master_component__WEBPACK_IMPORTED_MODULE_8__["AddTyreMasterComponent"] },
            // tyre company Master
            { path: 'tyre-company-master', component: _components_list_tyre_company_master_list_tyre_company_master_component__WEBPACK_IMPORTED_MODULE_13__["ListTyreCompanyMasterComponent"] },
            { path: 'tyre-company-master/:id/view', component: _components_view_tyre_company_master_view_tyre_company_master_component__WEBPACK_IMPORTED_MODULE_14__["ViewTyreCompanyMasterComponent"], resolve: { tcm_details: _tyrecompanymaster_reslover__WEBPACK_IMPORTED_MODULE_16__["TyrecompanymasterReslover"] } },
            { path: 'tyre-company-master/:id/edit', component: _components_edit_tyre_company_master_edit_tyre_company_master_component__WEBPACK_IMPORTED_MODULE_15__["EditTyreCompanyMasterComponent"], resolve: { tcm_details: _tyrecompanymaster_reslover__WEBPACK_IMPORTED_MODULE_16__["TyrecompanymasterReslover"] } },
            { path: 'add-tyre-company-master', component: _components_add_tyre_company_master_add_tyre_company_master_component__WEBPACK_IMPORTED_MODULE_12__["AddTyreCompanyMasterComponent"] },
            // Observation and Recommendation Master
            { path: 'observation-and-recommendation', component: _components_list_observation_and_recommendation_list_observation_and_recommendation_component__WEBPACK_IMPORTED_MODULE_17__["ListObservationAndRecommendationComponent"] },
            { path: 'observation-and-recommendation/:id/edit', component: _components_edit_observation_and_recommendation_edit_observation_and_recommendation_component__WEBPACK_IMPORTED_MODULE_19__["EditObservationAndRecommendationComponent"], resolve: { oar_details: _observationandrecommendation_reslover__WEBPACK_IMPORTED_MODULE_20__["ObservationandrecommendationReslover"] } },
            { path: 'add-observation-and-recommendation', component: _components_add_observation_and_recommendation_add_observation_and_recommendation_component__WEBPACK_IMPORTED_MODULE_18__["AddObservationAndRecommendationComponent"] }
        ]
    }
];
var TyreRoutingModule = /** @class */ (function () {
    function TyreRoutingModule() {
    }
    TyreRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TyreRoutingModule);
    return TyreRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/tyre.component.html":
/*!************************************************************!*\
  !*** ./src/app/layout/tyre-management/tyre.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/tyre-management/tyre.component.scss":
/*!************************************************************!*\
  !*** ./src/app/layout/tyre-management/tyre.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90eXJlLW1hbmFnZW1lbnQvdHlyZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/tyre-management/tyre.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/tyre-management/tyre.component.ts ***!
  \**********************************************************/
/*! exports provided: TyreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TyreComponent", function() { return TyreComponent; });
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

var TyreComponent = /** @class */ (function () {
    function TyreComponent() {
    }
    TyreComponent.prototype.ngOnInit = function () {
    };
    TyreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tyre',
            template: __webpack_require__(/*! ./tyre.component.html */ "./src/app/layout/tyre-management/tyre.component.html"),
            styles: [__webpack_require__(/*! ./tyre.component.scss */ "./src/app/layout/tyre-management/tyre.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TyreComponent);
    return TyreComponent;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/tyrecompanymaster-reslover.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/tyre-management/tyrecompanymaster-reslover.ts ***!
  \**********************************************************************/
/*! exports provided: TyrecompanymasterReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TyrecompanymasterReslover", function() { return TyrecompanymasterReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tyremanagement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tyremanagement.service */ "./src/app/layout/tyre-management/tyremanagement.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TyrecompanymasterReslover = /** @class */ (function () {
    function TyrecompanymasterReslover(ts) {
        this.ts = ts;
    }
    TyrecompanymasterReslover.prototype.resolve = function (route) {
        return this.ts.getTcm(route.paramMap.get('id'));
    };
    TyrecompanymasterReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_tyremanagement_service__WEBPACK_IMPORTED_MODULE_1__["TyremanagementService"]])
    ], TyrecompanymasterReslover);
    return TyrecompanymasterReslover;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/tyremanagement.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/tyre-management/tyremanagement.service.ts ***!
  \******************************************************************/
/*! exports provided: TyremanagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TyremanagementService", function() { return TyremanagementService; });
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


var TyremanagementService = /** @class */ (function () {
    function TyremanagementService(api) {
        this.api = api;
    }
    // Tyre-master
    TyremanagementService.prototype.addTm = function (data) {
        return this.api.post('tyre-management/tyre-master', data);
    };
    TyremanagementService.prototype.getTm = function (id) {
        return this.api.get('tyre-management/tyre-master/' + id);
    };
    TyremanagementService.prototype.updatTm = function (id, data) {
        return this.api.put('tyre-management/tyre-master?id=' + id, data);
    };
    TyremanagementService.prototype.deleteTm = function (id) {
        return this.api.delete("tyre-management/tyre-master/" + id);
    };
    TyremanagementService.prototype.getCompanyTcm = function (name) {
        return this.api.get('tyre-management/tyre-company-master/company/' + name);
    };
    TyremanagementService.prototype.getVendorMasterList = function () {
        return this.api.get('vendor_master/list');
    };
    // Tyre-company-master
    TyremanagementService.prototype.addTcm = function (data) {
        return this.api.post('tyre-management/tyre-company-master', data);
    };
    TyremanagementService.prototype.getTcm = function (id) {
        return this.api.get('tyre-management/tyre-company-master/' + id);
    };
    TyremanagementService.prototype.updatTcm = function (id, data) {
        return this.api.put('tyre-management/tyre-company-master?id=' + id, data);
    };
    TyremanagementService.prototype.deleteTcm = function (id) {
        return this.api.delete("tyre-management/tyre-company-master/" + id);
    };
    // Observation and Recommendation
    TyremanagementService.prototype.addOar = function (data) {
        return this.api.post('tyre-management/observation-and-recommendation', data);
    };
    TyremanagementService.prototype.getOar = function (id) {
        return this.api.get('tyre-management/observation-and-recommendation/' + id);
    };
    TyremanagementService.prototype.getAllOar = function () {
        return this.api.get('tyre-management/observation-and-recommendation/all');
    };
    TyremanagementService.prototype.updatOar = function (id, data) {
        return this.api.put('tyre-management/observation-and-recommendation?id=' + id, data);
    };
    TyremanagementService.prototype.deleteOar = function (id) {
        return this.api.delete("tyre-management/observation-and-recommendation/" + id);
    };
    // Truck inspection
    TyremanagementService.prototype.addTi = function (data) {
        return this.api.post('tyre-management/truck_inspection', data);
    };
    TyremanagementService.prototype.getTi = function (id) {
        return this.api.get('tyre-management/truck_inspection/' + id);
    };
    TyremanagementService.prototype.updatTi = function (id, data) {
        return this.api.put('tyre-management/truck_inspection?id=' + id, data);
    };
    TyremanagementService.prototype.deleteTi = function (id) {
        return this.api.delete("tyre-management/truck_inspection/" + id);
    };
    TyremanagementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], TyremanagementService);
    return TyremanagementService;
}());



/***/ }),

/***/ "./src/app/layout/tyre-management/tyremaster-reslover.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/tyre-management/tyremaster-reslover.ts ***!
  \***************************************************************/
/*! exports provided: TyremasterReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TyremasterReslover", function() { return TyremasterReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tyremanagement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tyremanagement.service */ "./src/app/layout/tyre-management/tyremanagement.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TyremasterReslover = /** @class */ (function () {
    function TyremasterReslover(ts) {
        this.ts = ts;
    }
    TyremasterReslover.prototype.resolve = function (route) {
        return this.ts.getTm(route.paramMap.get('id'));
    };
    TyremasterReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_tyremanagement_service__WEBPACK_IMPORTED_MODULE_1__["TyremanagementService"]])
    ], TyremasterReslover);
    return TyremasterReslover;
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

/***/ "./src/app/shared/services/truck-tyre-master.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/truck-tyre-master.service.ts ***!
  \**************************************************************/
/*! exports provided: TruckTyreMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckTyreMasterService", function() { return TruckTyreMasterService; });
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


var TruckTyreMasterService = /** @class */ (function () {
    function TruckTyreMasterService(api) {
        this.api = api;
    }
    TruckTyreMasterService.prototype.getList = function () {
        return this.api.get('truck_tyre_master/list');
    };
    TruckTyreMasterService.prototype.getSearchList = function (query) {
        return this.api.get('truck_tyre_master/search?tyre_no=' + query);
    };
    TruckTyreMasterService.prototype.getBrandList = function (query) {
        return this.api.get('truck_tyre_master/list_brand?q=' + query);
    };
    TruckTyreMasterService.prototype.getCompanyList = function (query) {
        return this.api.get('truck_tyre_master/list_company?q=' + query);
    };
    TruckTyreMasterService.prototype.getTyreList = function (query) {
        return this.api.get('truck_tyre_master/list_tyres?q=' + query);
    };
    TruckTyreMasterService.prototype.createRecord = function (data) {
        return this.api.post('truck_tyre_master/create', data);
    };
    TruckTyreMasterService.prototype.updatRecord = function (id, data) {
        return this.api.put('truck_tyre_master/update?id=' + id, data);
    };
    TruckTyreMasterService.prototype.deleteRecord = function (k) {
        return this.api.delete('truck_tyre_master/delete', { params: k });
    };
    TruckTyreMasterService.prototype.getDestinationList = function (query) {
        return this.api.get('meta/to_destinations?q=' + query);
    };
    TruckTyreMasterService.prototype.getTruckInspectionList = function (fiters) {
        return this.api.get('tyre-management/truck_inspection/list', fiters);
    };
    TruckTyreMasterService.prototype.addTruckInspection = function (data) {
        return this.api.post('tyre-management/truck_inspection/create', data);
    };
    TruckTyreMasterService.prototype.updateTruckInspection = function (data) {
        return this.api.put('tyre-management/truck_inspection/update_inspection', data);
    };
    // Delete by $pull so it is put req.
    TruckTyreMasterService.prototype.deleteTruckInspection = function (id, obj) {
        return this.api.put('tyre-management/truck_inspection/delete?id=' + id, obj);
    };
    TruckTyreMasterService.prototype.getTyreNo = function (query) {
        return this.api.get('meta/tyre_no', { q: query });
    };
    TruckTyreMasterService.prototype.getNsdFromTyreNo = function (tyre_no) {
        return this.api.get('truck_inspection/get_tyre', tyre_no);
    };
    TruckTyreMasterService.prototype.getTyrePosition = function (obj) {
        return this.api.get('tyre-management/truck_inspection/list_tyre', obj);
    };
    TruckTyreMasterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], TruckTyreMasterService);
    return TruckTyreMasterService;
}());



/***/ })

}]);
//# sourceMappingURL=tyre-management-tyre-management-module.js.map