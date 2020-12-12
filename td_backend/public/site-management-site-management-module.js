(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["site-management-site-management-module"],{

/***/ "./src/app/layout/site-management/billtydataentry-reslover.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/site-management/billtydataentry-reslover.ts ***!
  \********************************************************************/
/*! exports provided: BilltydataentryReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BilltydataentryReslover", function() { return BilltydataentryReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sitemanagement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitemanagement.service */ "./src/app/layout/site-management/sitemanagement.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BilltydataentryReslover = /** @class */ (function () {
    function BilltydataentryReslover(sm) {
        this.sm = sm;
    }
    BilltydataentryReslover.prototype.resolve = function (route) {
        return this.sm.getBde(route.paramMap.get('id'));
    };
    BilltydataentryReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_sitemanagement_service__WEBPACK_IMPORTED_MODULE_1__["SitemanagementService"]])
    ], BilltydataentryReslover);
    return BilltydataentryReslover;
}());



/***/ }),

/***/ "./src/app/layout/site-management/component/add-billty-dataentry/add-billty-dataentry.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/add-billty-dataentry/add-billty-dataentry.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"bdeForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Add Billty Entry</div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\">\n              <ngb-tabset>\n                <ngb-tab title=\"Data Entry\">\n                  <ng-template ngbTabContent>\n                    <br>\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <h4><i class=\"fa fa-truck\"></i> Billty Data Entry</h4>\n                          <hr />\n                        </div>\n                        <div class=\"col-md-3\">\n                          <label class=\"required\">Site</label>\n                          <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n                            formControlName=\"site\" class=\"auto-entry\">\n                          </ng-select>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Lr Date</label>\n                            <div class=\"input-group datepicker-input\">\n                              <input\n                                class=\"form-control auto-entry\"\n                                placeholder=\"dd/mm/yyyy\"\n                                formControlName=\"lrdate\"\n                                name=\"dp\"\n                                ngbDatepicker\n                                #d=\"ngbDatepicker\"\n                              />\n                              <div class=\"input-group-append\">\n                                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\n                                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Invoice No</label>\n                            <input type=\"text\" formControlName=\"newinvoiceno\"  class=\"form-control manual-entry\" placeholder=\"Invoice No\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Invoice Date</label>\n                            <div class=\"input-group datepicker-input\">\n                              <input\n                                class=\"form-control manual-entry\"\n                                placeholder=\"dd/mm/yyyy\"\n                                formControlName=\"newinvoicedate\"\n                                name=\"dp\"\n                                ngbDatepicker\n                                #id=\"ngbDatepicker\"\n                              />\n                              <div class=\"input-group-append\">\n                                <button class=\"btn btn-outline-secondary calendar\" (click)=\"id.toggle()\" type=\"button\">\n                                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                          <div class=\"form-group\">\n                            <label>Gate Pass / Di Number</label>\n                            <input type=\"text\" formControlName=\"newgatepass\" class=\"form-control manual-entry\" placeholder=\"Gate Pass / Di Number\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-5\">\n                          <label class=\"required\">Consignee</label>\n                          <ng-select [items]=\"consignee_options\" placeholder=\"Type and search Consignee\" bindLabel=\"name\" bindValue=\"name\"\n                            formControlName=\"consignne\" class=\"manual-entry\">\n                          </ng-select>\n                        </div>\n                        <div class=\"col-md-5\">\n                          <div class=\"form-group\">\n                            <label>Unloading Address</label>\n                            <ng-select [items]=\"unloading_addresses\" placeholder=\"Type and search Address\"\n                            formControlName=\"unloadingaddress\" class=\"manual-entry\">\n                          </ng-select>\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                          <label class=\"required\">To Destination</label>\n                          <ng-select [items]=\"tos\" placeholder=\"Type and search Destination\" bindLabel=\"name\" bindValue=\"name\"\n                            formControlName=\"to\" class=\"manual-entry\">\n                          </ng-select>\n                        </div>\n\n                        <!-- <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Manual </label>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\" formControlName=\"mannualtodest\" >\n                                    Display All Destination?\n                                </label>\n                            </div>\n                              </div>\n                        </div> -->\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label class=\"required\">Km</label>\n                            <input type=\"text\" formControlName=\"newkm\" class=\"form-control auto-entry\" placeholder=\"KM\">\n                          </div>\n                        </div>\n\n\n                        <div class=\"col-md-3\">\n                          <label>Petrol Pump Name</label>\n                          <ng-select [items]=\"diesalaccountname_options\" placeholder=\"Type and search\" bindLabel=\"accountname\" bindValue=\"accountname\"\n                            formControlName=\"diesalaccountname\" class=\"manual-entry\">\n                          </ng-select>\n                        </div>\n\n                        <!-- <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Manual Petrol Pump </label>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\" formControlName=\"mannualpetrolpump\" >\n                                    Change Petrol Pump .?\n                                  </label>\n                            </div>\n                              </div>\n                        </div> -->\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Diesal Rate</label>\n                            <input type=\"number\" formControlName=\"drate\" class=\"form-control auto-entry\" placeholder=\"Diesal Rate\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                          <label>Grade</label>\n                          <select class=\"form-control auto-entry\" formControlName=\"grade\">\n                            <option value=\"\">None</option>\n                            <option value=\"Trade\">Trade</option>\n                            <option value=\"Non Trade\">Non Trade</option>\n                            <option value=\"Bulker\">Bulker</option>\n                          </select>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Party Rate</label>\n                            <input type=\"number\" formControlName=\"newrate\" class=\"form-control auto-entry\" placeholder=\"Rate\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Transporter Rate</label>\n                            <input type=\"text\" formControlName=\"rate\" class=\"form-control auto-entry\" placeholder=\"Rate\">\n                          </div>\n                        </div>\n\n                      </div>\n\n                      <br>\n                      <div class=\"row\">\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label  class=\"required\">Select Lr. No</label>\n                              <ng-select [items]=\"lrNos\" placeholder=\"Type and search lrNos\"\n                                  formControlName=\"tplrno\" class=\"manual-entry\">\n                              </ng-select>\n                           </div>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Manual </label>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\" formControlName=\"mannual\" >\n                                    Change Lr No.?\n\n                                </label>\n                            </div>\n                              </div>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label class=\"required\">Lr. No</label>\n                            <input type=\"text\" *ngIf=\"!lrField\" disabled formControlName=\"lrno\" class=\"form-control auto-entry\" placeholder=\"Lr.No\">\n                            <input type=\"text\" *ngIf=\"lrField\" formControlName=\"lrno\" class=\"form-control auto-entry\" placeholder=\"Lr.No\">\n                          </div>\n                        </div>\n\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Truck Expences</label>\n                            <input type=\"text\" *ngIf=\"!teField\" disabled formControlName=\"truckexpences\" class=\"form-control auto-entry\" placeholder=\"Truck Expences\">\n                            <input type=\"text\" *ngIf=\"teField\" formControlName=\"truckexpences\" class=\"form-control auto-entry\" placeholder=\"Truck Expences\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Manual Truck Expences </label>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\" formControlName=\"mannualroadexp\" >\n                                    Change Truck Expences .?\n                                  </label>\n                            </div>\n                              </div>\n                        </div>\n\n                      </div>\n\n                      <br>\n                      <div class=\"row\">\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Diesal Qty</label>\n                            <input type=\"number\" *ngIf=\"!dqField\" disabled formControlName=\"dqty\" class=\"form-control auto-entry\" placeholder=\"Diesal Qty\">\n                            <input type=\"number\" *ngIf=\"dqField\" formControlName=\"dqty\" class=\"form-control auto-entry\" placeholder=\"Diesal Qty\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Manual Diesal Qty</label>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\" formControlName=\"mannualdqty\" >\n                                    Change Diesal Qty.?\n                                </label>\n                            </div>\n                              </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label class=\"required\">Actual Wt.</label>\n                            <input type=\"text\" formControlName=\"actualweight\"  class=\"form-control manual-entry\" placeholder=\"Actual Weight\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Manual Actual Weight</label>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\" formControlName=\"mannualaweight\" >\n                                    Change Actual Weight ?\n                                </label>\n                            </div>\n                              </div>\n                        </div>\n\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label class=\"required\">Trans. Charged Wt.</label>\n                            <input type=\"text\" formControlName=\"cweight\" class=\"form-control auto-entry\" placeholder=\"Charged Weight\">\n                          </div>\n                        </div>\n\n                      </div>\n                      <div class=\"col-md-12\">\n                        <h4><i class=\"fa fa-truck\"></i> Billty Details</h4>\n                        <hr />\n                      </div>\n                      <div class=\"row\">\n\n\n                        <div class=\"col-md-3\">\n                          <label class=\"required\">Consignor</label>\n                          <ng-select [items]=\"consignor_options\" class=\"auto-entry\" placeholder=\"Type and search Consignor\" bindLabel=\"accountname\" bindValue=\"accountname\"\n                            formControlName=\"consigner\">\n                          </ng-select>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                          <div class=\"form-group\">\n                            <label>Contact Person</label>\n                            <input type=\"text\" formControlName=\"contactperson\" class=\"form-control auto-entry\" placeholder=\"Contack Person\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                          <div class=\"form-group\">\n                            <label>Phone No</label>\n                            <input type=\"text\" formControlName=\"phoneno\" class=\"form-control auto-entry\" placeholder=\"Phone No\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                          <label class=\"required\">From Destination</label>\n                          <ng-select [items]=\"froms\" class=\"auto-entry\" placeholder=\"Type and search Destination\" bindLabel=\"name\" bindValue=\"name\"\n                            formControlName=\"from\">\n                          </ng-select>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                          <label class=\"required\">Contains</label>\n                          <ng-select [items]=\"contains\" placeholder=\"Type and seach Contains\" bindLabel=\"name\" bindValue=\"name\"\n                            formControlName=\"contains\" class=\"auto-entry\">\n                          </ng-select>\n                        </div>\n                        <div class=\"col-md-3\">\n                          <label class=\"required\">Unit</label>\n                          <ng-select [items]=\"units\" placeholder=\"Type and search Destination\" bindLabel=\"name\" bindValue=\"name\"\n                            formControlName=\"unit\" class=\"auto-entry\">\n                          </ng-select>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                          <label class=\"required\">Product</label>\n                          <select class=\"form-control auto-entry\" formControlName=\"product\">\n                            <option value=\"\">Select Product</option>\n                            <option value=\"Bag\">Bag</option>\n                            <option value=\"Bulk\">Bulk</option>\n                            <option value=\"Clinker\">Clinker</option>\n                            <option value=\"Gypsum\">Gypsum</option>\n                          </select>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                          <div class=\"form-group\">\n                            <label>Packages</label>\n                            <input type=\"text\" formControlName=\"packages\" class=\"form-control auto-entry\" placeholder=\"Packages\">\n                          </div>\n                        </div>\n\n                      </div>\n\n                  </ng-template>\n                </ngb-tab>\n\n                  <ngb-tab title=\"Party Details\">\n                    <ng-template ngbTabContent>\n                      <br>\n\n                      <div class=\"col-md-12\">\n                        <h4><i class=\"fa fa-truck\"></i> Party Details</h4>\n                        <hr />\n                      </div>\n\n                      <div class=\"row\">\n                        <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                            <div class=\"row\">\n                              <div class=\"col-md-3\">\n                                <label class=\"required\">Payment Mode</label>\n                                <select class=\"form-control manual-entry\" formControlName=\"ppaymentmode\">\n                                  <option value=\"\">Select Payment Mode</option>\n                                  <option value=\"To Be Billed\">To Be Billed</option>\n                                  <option value=\"To Pay\">To Pay</option>\n                                  <option value=\"Paid\">Paid</option>\n                                </select>\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Unloading Date</label>\n                                  <div class=\"input-group datepicker-input\">\n                                    <input\n                                      class=\"form-control manual-entry\"\n                                      placeholder=\"dd/mm/yyyy\"\n                                      formControlName=\"unloadingdate\"\n                                      name=\"dp\"\n                                      ngbDatepicker\n                                      #uld=\"ngbDatepicker\"\n                                    />\n                                    <div class=\"input-group-append\">\n                                      <button class=\"btn btn-outline-secondary calendar\" (click)=\"uld.toggle()\" type=\"button\">\n                                        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                      </button>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n\n\n                              <div class=\"col-md-3\">\n                                <label class=\"required\">Calculated By</label>\n                                <select class=\"form-control manual-entry\" formControlName=\"calculatedweight\">\n                                  <option value=\"\">Select Calculated By</option>\n                                  <option value=\"Weight\">Weight</option>\n                                  <option value=\"Quantity\">Quantity</option>\n                                </select>\n                              </div>\n\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Amount</label>\n                                  <input type=\"number\" formControlName=\"newamount\" class=\"form-control auto-entry\" placeholder=\"Amount\">\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Fm No.</label>\n                                  <input type=\"text\" formControlName=\"fmno\" class=\"form-control manual-entry\" placeholder=\"FM No\">\n                                </div>\n                              </div>\n\n\n                              <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Order No</label>\n                                    <input type=\"text\" formControlName=\"ordername\" class=\"form-control manual-entry\" placeholder=\"Order no\">\n                                  </div>\n                                </div>\n\n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Loading Date</label>\n                                    <div class=\"input-group datepicker-input\">\n                                      <input\n                                        class=\"form-control manual-entry\"\n                                        placeholder=\"dd/mm/yyyy\"\n                                        formControlName=\"loadingdate\"\n                                        name=\"dp\"\n                                        ngbDatepicker\n                                        #ld=\"ngbDatepicker\"\n                                      />\n                                      <div class=\"input-group-append\">\n                                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"ld.toggle()\" type=\"button\">\n                                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                        </button>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          <hr>\n                        </div>\n                        <div class=\"col-md-12\">\n                          <h4><i class=\"fa fa-truck\"></i> Party Advance</h4>\n                          <hr />\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                              <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Advance Date</label>\n                                    <div class=\"input-group datepicker-input\">\n                                      <input\n                                        class=\"form-control manual-entry\"\n                                        placeholder=\"dd/mm/yyyy\"\n                                        formControlName=\"padate\"\n                                        name=\"dp\"\n                                        ngbDatepicker\n                                        #ad=\"ngbDatepicker\"\n                                      />\n                                      <div class=\"input-group-append\">\n                                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"ad.toggle()\" type=\"button\">\n                                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                        </button>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n\n                                <div class=\"col-md-3\">\n                                  <label>Receipt Type</label>\n                                  <ng-select [items]=\"receipttype_options\" placeholder=\"Type and search\" bindLabel=\"name\" bindValue=\"name\"\n                                    formControlName=\"papaymenttype\" class=\"manual-entry\">\n                                  </ng-select>\n                                </div>\n\n                                <div class=\"col-md-3\">\n                                  <label>Receipt Mode</label>\n                                  <ng-select [items]=\"receiptmode_options\" placeholder=\"Type and search\" bindLabel=\"accountname\" bindValue=\"accountname\"\n                                    formControlName=\"papaymentmode\" class=\"manual-entry\">\n                                  </ng-select>\n                                </div>\n\n\n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Advance Amount</label>\n                                    <input type=\"text\" formControlName=\"padvance\" class=\"form-control manual-entry\" placeholder=\"Advance Amount\">\n                                  </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Remarks</label>\n                                    <input type=\"text\" formControlName=\"paremarks\" class=\"form-control manual-entry\" placeholder=\"Remarks\">\n                                  </div>\n                                </div>\n                              </div>\n                            <hr>\n                          </div>\n                        </div>\n                        <br>\n                        <div class=\"col-md-12\">\n                          <h4><i class=\"fa fa-truck\"></i> Bill Details</h4>\n                          <hr />\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                            <div class=\"row\">\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Bill No</label>\n                                  <input type=\"text\" formControlName=\"billno\" class=\"form-control auto-entry\" placeholder=\"Bill No\">\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Bill Date</label>\n                                  <div class=\"input-group datepicker-input\">\n                                    <input\n                                      class=\"form-control auto-entry\"\n                                      placeholder=\"dd/mm/yyyy\"\n                                      formControlName=\"billdate\"\n                                      name=\"dp\"\n                                      ngbDatepicker\n                                      #bd=\"ngbDatepicker\"\n                                    />\n                                    <div class=\"input-group-append\">\n                                      <button class=\"btn btn-outline-secondary calendar\" (click)=\"bd.toggle()\" type=\"button\">\n                                        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                      </button>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Bill Remarks</label>\n                                  <input type=\"text\" formControlName=\"billremarks\" class=\"form-control auto-entry\" placeholder=\"Bill Remarks\">\n                                </div>\n                              </div>\n                            </div>\n\n                          </div>\n                        </div>\n\n\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Transporter Details\">\n                    <ng-template ngbTabContent>\n                      <br>\n                      <div class=\"row\">\n                        <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                            <div class=\"col-md-12\">\n                              <h4><i class=\"fa fa-truck\"></i> Transporter Details</h4>\n                              <hr />\n                            </div>\n\n                            <div class=\"row\">\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Sr.No</label>\n                                  <input type=\"text\" formControlName=\"srno\" class=\"form-control auto-entry\" placeholder=\"Sr.No\">\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <label class=\"required\">Vehicle type</label>\n                                <select class=\"form-control auto-entry\" formControlName=\"vehicletype\">\n                                  <option value=\"\">Select Vehicle type</option>\n                                  <option value=\"Company\">Company</option>\n                                  <option value=\"Attached\">Attached</option>\n                                </select>\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label class=\"required\">Truck No</label>\n                                  <input type=\"text\" formControlName=\"truckno\" class=\"form-control auto-entry\" placeholder=\"Truck No\">\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Broker Name</label>\n                                  <input type=\"text\" formControlName=\"brokername\" class=\"form-control manual-entry\" placeholder=\"Broker Name\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Driver Name</label>\n                                  <input type=\"text\" formControlName=\"drivername\" class=\"form-control auto-entry\" placeholder=\"Driver Name\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Id No</label>\n                                  <input type=\"text\" formControlName=\"idno\" class=\"form-control manual-entry\" placeholder=\"Id No\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Owner Name</label>\n                                  <input type=\"text\" formControlName=\"ownername\" class=\"form-control auto-entry\" placeholder=\"Owner Name\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Pan Number</label>\n                                  <input type=\"text\" formControlName=\"panno\" class=\"form-control auto-entry\" placeholder=\"Pan Number\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>SPI</label>\n                                  <input type=\"text\" formControlName=\"spi\" class=\"form-control auto-entry\" placeholder=\"SPI\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Tyre</label>\n                                  <input type=\"text\" formControlName=\"tyre\" class=\"form-control auto-entry\" placeholder=\"Tyre\">\n                                </div>\n                              </div>\n\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Amount</label>\n                                  <input type=\"text\" formControlName=\"vamount\" class=\"form-control auto-entry\" placeholder=\"Amount\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Payment Charge</label>\n                                  <input type=\"text\" formControlName=\"paymentcharge\" class=\"form-control auto-entry\" placeholder=\"Payment Charge\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Final Amount</label>\n                                  <input type=\"text\" formControlName=\"finalamount\" class=\"form-control auto-entry\" placeholder=\"Type\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Truck Km Reading</label>\n                                  <input type=\"text\" formControlName=\"tkmr\" class=\"form-control auto-entry\" placeholder=\"Truck Km Reading\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Truck Carring Capacity</label>\n                                  <input type=\"text\" formControlName=\"tcc\" class=\"form-control auto-entry\" placeholder=\"Truck Carring Capacity\">\n                                </div>\n                              </div>\n\n                            </div>\n\n                            <div class=\"col-md-12\">\n                              <h4><i class=\"fa fa-truck\"></i> Diesal Expences Details</h4>\n                              <hr />\n                            </div>\n                            <div class=\"row\">\n                              <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                                  <div class=\"row\">\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>Date</label>\n                                        <div class=\"input-group datepicker-input\">\n                                          <input\n                                            class=\"form-control manual-entry\"\n                                            placeholder=\"dd/mm/yyyy\"\n                                            formControlName=\"diesaldate\"\n                                            name=\"dp\"\n                                            ngbDatepicker\n                                            #dd=\"ngbDatepicker\"\n                                          />\n                                          <div class=\"input-group-append\">\n                                            <button class=\"btn btn-outline-secondary calendar\" (click)=\"dd.toggle()\" type=\"button\">\n                                              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                            </button>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n\n                                    <div class=\"col-md-3\">\n                                      <label >Payment Type</label>\n                                      <select class=\"form-control manual-entry\" formControlName=\"dtransactiontype\">\n                                        <option value=\"\">Select Payment Type</option>\n                                        <option value=\"Cash\">Cash</option>\n                                        <option value=\"Credit\">Credit</option>\n                                        <option value=\"Card\">Card</option>\n                                      </select>\n                                    </div>\n\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>Amount</label>\n                                        <input type=\"number\" formControlName=\"damount\" class=\"form-control auto-entry\" placeholder=\"Diesal Amount\">\n                                      </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>Slip No</label>\n                                        <input type=\"number\" formControlName=\"dslipno\" class=\"form-control manual-entry\" placeholder=\"Slip No\">\n                                      </div>\n                                    </div>\n                                  </div>\n                                <hr>\n                              </div>\n                            </div>\n\n                            <div class=\"col-md-12\">\n                              <h4><i class=\"fa fa-truck\"></i> Road Expences Details</h4>\n                              <hr />\n                            </div>\n\n                            <div class=\"row\">\n                              <!-- <div class=\"col-md-12\"> -->\n                              <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                                <div class=\"card\">\n                                  <div class=\"card-header\">\n                                    Road Expences Details\n                                    <button class=\"btn btn-primary float-right\" (click)=\"addTcmitems()\" [disabled]=\"!bdeForm.valid\"\n                                      type=\"button\">\n                                      Add Expences\n                                    </button>\n                                  </div>\n                                  <!-- /.box-header -->\n                                  <div class=\"card-body\" *ngIf=\"bdeForm.controls.transactiondetails.controls.length > 0\" style=\"width:100% !important;overflow: auto !important;\">\n                                    <table class=\"table table-bordered\" formArrayName=\"transactiondetails\">\n                                      <tr>\n                                        <th>Date</th>\n                                        <th>Transaction Type</th>\n                                        <th>Account Name</th>\n                                        <th>Amount</th>\n                                        <th>Payment Type</th>\n                                        <th>Payment Mode</th>\n                                        <th>Remarks</th>\n                                        <th>Action</th>\n                                      </tr>\n                                      <tr *ngFor=\"let school of bdeForm.controls.transactiondetails.controls; let i=index\" formGroupName=\"{{i}}\">\n                                        <td>\n                                          <input type=\"date\" formControlName=\"date\" value=\"{{getCurrentDate()}}\" style=\"width:170px !important;\"\n                                            class=\"form-control auto-entry\">\n                                        </td>\n                                        <td>\n                                          <div class=\"input-group\">\n                                            <select class=\"form-control auto-entry\" formControlName=\"accounttype\" style=\"width:150px !important;\">\n                                              <!-- <option value=\"Advance\">Advance</option> -->\n                                              <option *ngFor=\"let tt of tran_type\" value=\"{{ tt.name }}\">\n                                                {{ tt.name }}\n                                              </option>\n                                            </select>\n                                            </div>\n                                          </td>\n\n                                        <td>\n                                          <div class=\"input-group\">\n                                            <select class=\"form-control auto-entry\" formControlName=\"accountname\" style=\"width:150px !important;\">\n                                              <option *ngFor=\"let an of roadexpaccountname_options\" [value]=\"an.accountname\"> {{an.accountname}}</option>\n                                            </select>\n                                          </div>\n                                        </td>\n\n\n                                        <td style=\"width:100px !important;\">\n                                          <input type=\"number\" min=\"0\" formControlName=\"amount\"\n                                            class=\"form-control auto-entry\" style=\"width:90px !important;\">\n                                        </td>\n                                        <td>\n                                          <div class=\"input-group\">\n                                            <select class=\"form-control manual-entry\" formControlName=\"paymenttype\" style=\"width:150px !important;\">\n                                              <option value=\"\">Select type</option>\n                                              <option value=\"Bank to Bank\">Bank to Bank</option>\n                                              <option value=\"Cash\">Cash</option>\n                                              <option value=\"Cheque\">Cheque</option>\n                                              <option value=\"Credit\">Credit</option>\n                                              <option value=\"Imps\">Imps</option>\n                                              <option value=\"Internal Transfer\">Internal Transfer</option>\n                                              <option value=\"Neft\">Neft</option>\n                                              <option value=\"Rtgs\">Rtgs</option>\n                                            </select>\n                                          </div>\n                                        </td>\n                                        <td>\n                                          <!-- <input type=\"text\" formControlName=\"paymentmode\"\n                                            class=\"form-control\"> -->\n                                              <ng-select [items]=\"paymentmode_options\" placeholder=\"Type and search\" style=\"width:250px !important;\" bindLabel=\"accountname\" bindValue=\"accountname\"\n                                                formControlName=\"paymentmode\" class=\"manual-entry\">\n                                              </ng-select>\n\n\n                                          </td>\n                                        <td>\n                                          <input type=\"text\" formControlName=\"remark\"\n                                            class=\"form-control manual-entry\">\n                                        </td>\n\n                                        <td>\n                                          <button class=\"btn btn-danger float-right\" [disabled]=\"bdeForm.controls?.transactiondetails.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\n                                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                          </button>\n                                        </td>\n                                      </tr>\n                                    </table>\n                                  </div>\n                                  <div class=\"card-body\" *ngIf=\"bdeForm.controls?.transactiondetails.controls.length == 0\">\n                                    <p>Please select vendor</p>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <br>\n\n                            <br>\n\n                            <div class=\"col-md-12\">\n                              <h4><i class=\"fa fa-truck\"></i> Truck Expences</h4>\n                              <hr />\n                            </div>\n                            <div class=\"row\">\n                              <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                                  <div class=\"row\">\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>Unloading Expences</label>\n                                        <input type=\"text\" formControlName=\"unloadingexpences\" class=\"form-control manual-entry\" placeholder=\"Unloading Expences\">\n                                      </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                      <label class=\"required\">Unloading Type</label>\n                                      <select class=\"form-control manual-entry\" formControlName=\"unloadingtype\">\n                                        <option value=\"\">Select Unloading Type</option>\n                                        <option value=\"Per MT\">Per MT</option>\n                                        <option value=\"Fix\">Fix</option>\n                                      </select>\n                                    </div>\n\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>Actual Unloading Expences</label>\n                                        <input type=\"number\" formControlName=\"actualexpences\" class=\"form-control manual-entry\" placeholder=\"Actual Unloading Expences\">\n                                      </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>Total Truck Expences</label>\n                                        <input type=\"number\" formControlName=\"totaltruckexpences\" class=\"form-control auto-entry\" placeholder=\"Total Truck Expences\">\n                                      </div>\n                                    </div>\n                                  </div>\n                                <!-- </form> -->\n                                <hr>\n                              </div>\n                            </div>\n                            <br>\n                            <br>\n                            <div class=\"col-md-12\">\n                              <h4><i class=\"fa fa-truck\"></i> Pod / Bill / Unloading Details</h4>\n                              <hr />\n                            </div>\n\n                            <div class=\"row\">\n                              <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                                  <div class=\"row\">\n                                  <div class=\"col-md-3\">\n                                    <div class=\"form-group\">\n                                      <label>POD Date</label>\n                                      <div class=\"input-group datepicker-input\">\n                                        <input\n                                          class=\"form-control auto-entry\"\n                                          placeholder=\"dd/mm/yyyy\"\n                                          formControlName=\"poddate\"\n                                          name=\"dp\"\n                                          ngbDatepicker\n                                          #pod=\"ngbDatepicker\"\n                                        />\n                                        <div class=\"input-group-append\">\n                                          <button class=\"btn btn-outline-secondary calendar\" (click)=\"pod.toggle()\" type=\"button\">\n                                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                          </button>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n\n\n\n                                    <div class=\"col-md-3\">\n                                      <label>POD Pending</label>\n                                      <select class=\"form-control auto-entry\" formControlName=\"podpendings\">\n                                        <option value=\"YES\">YES</option>\n                                        <option value=\"NO\">NO</option>\n                                      </select>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                      <label>POD Ok</label>\n                                      <select class=\"form-control auto-entry\" formControlName=\"podok\">\n                                        <option value=\"NOT OK\">NOT OK</option>\n                                        <option value=\"YES\">OK</option>\n                                      </select>\n                                    </div>\n\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>POD Remarks</label>\n                                        <input type=\"text\" formControlName=\"podremarks\" class=\"form-control auto-entry\" placeholder=\"POD Remarks\">\n                                      </div>\n                                    </div>\n\n                                  </div>\n                                <hr>\n                              </div>\n                            </div>\n                          <hr>\n                        </div>\n                      </div>\n                    </ng-template>\n                  </ngb-tab>\n\n                </ngb-tabset>\n          </div>\n        </div>\n\n        </div>\n      </div>\n      <div class=\"card-footer\">\n<!--         [disabled]=\"!bdeForm.valid || process == 'saving'\"\n -->        <button class=\"btn btn-success float-right\" [disabled]=\"!bdeForm.valid || process == 'saving'\" (click)=\"save()\"  type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\"  class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/site-management/component/add-billty-dataentry/add-billty-dataentry.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/add-billty-dataentry/add-billty-dataentry.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auto-entry {\n  border: 2px solid #fcbd47 !important; }\n\n.manual-entry {\n  border: 2px solid #51cc51 !important; }\n\n::ng-deep .ng-select.manual-entry {\n  border: 2px solid #51cc51 !important; }\n\n::ng-deep .ng-select.auto-entry {\n  border: 2px solid #fcbd47 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpdGUtbWFuYWdlbWVudC9jb21wb25lbnQvYWRkLWJpbGx0eS1kYXRhZW50cnkvRDpcXHRlc3RpbmdfZm9sZGVyXFx0aGlydVxcZnJvbnRlbmRcXHRkX0Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNpdGUtbWFuYWdlbWVudFxcY29tcG9uZW50XFxhZGQtYmlsbHR5LWRhdGFlbnRyeVxcYWRkLWJpbGx0eS1kYXRhZW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBNkMsRUFBQTs7QUFHakQ7RUFDSSxvQ0FBNEMsRUFBQTs7QUFHaEQ7RUFDSSxvQ0FBNEMsRUFBQTs7QUFHaEQ7RUFDSSxvQ0FBNkMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLW1hbmFnZW1lbnQvY29tcG9uZW50L2FkZC1iaWxsdHktZGF0YWVudHJ5L2FkZC1iaWxsdHktZGF0YWVudHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dG8tZW50cnl7XG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMjUyLCAxODksIDcxKSAhaW1wb3J0YW50O1xufVxuXG4ubWFudWFsLWVudHJ5e1xuICAgIGJvcmRlcjoycHggc29saWQgcmdiKDgxLCAyMDQsIDgxKSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm5nLXNlbGVjdC5tYW51YWwtZW50cnl7XG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoODEsIDIwNCwgODEpICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubmctc2VsZWN0LmF1dG8tZW50cnl7XG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMjUyLCAxODksIDcxKSAhaW1wb3J0YW50O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/site-management/component/add-billty-dataentry/add-billty-dataentry.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/add-billty-dataentry/add-billty-dataentry.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AddBilltyDataentryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBilltyDataentryComponent", function() { return AddBilltyDataentryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sitemanagement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sitemanagement.service */ "./src/app/layout/site-management/sitemanagement.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
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







var AddBilltyDataentryComponent = /** @class */ (function () {
    function AddBilltyDataentryComponent(fb, ss, router, metaService, toastr, calendar) {
        this.fb = fb;
        this.ss = ss;
        this.router = router;
        this.metaService = metaService;
        this.toastr = toastr;
        this.calendar = calendar;
        this.siteOptions = [];
        this.loading = false;
        this.unloading_addresses = [];
        this.lrNos = [];
        this.lrField = false;
        this.teField = false;
        this.dqField = false;
        this.units = [];
        this.froms = [];
        this.tos = [];
        this.contains = [];
        this.currentDate = new Date();
        this.usertype = this.metaService.getSiteFromStorage().role;
        this.site_name = this.metaService.getSiteFromStorage().site;
    }
    AddBilltyDataentryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.bdeForm.controls['lrdate'].setValue(this.calendar.getToday());
        this.bdeForm.controls['loadingdate'].setValue(this.calendar.getToday());
        this.bdeForm.controls['diesaldate'].setValue(this.calendar.getToday());
        this.bdeForm.controls.transactiondetails.patchValue([{ 'date': this.calendar.getToday() }]);
        this.bdeForm.get('diesalaccountname').valueChanges.subscribe(function (val) {
            var date = _this.bdeForm.controls['lrdate'].value;
            var mstr = date.month;
            var dstr = date.day;
            if ((mstr + '').toString().length === 1) {
                mstr = "0" + mstr;
            }
            if ((dstr + '').toString().length === 1) {
                dstr = '0' + dstr;
            }
            var dateStr = date.year + "-" + mstr + "-" + dstr;
            _this.metaService.getRate(val, dateStr).subscribe(function (res) {
                _this.bdeForm.patchValue({ drate: res['rate'] });
            });
        });
        this.bdeForm.get('diesaldate').valueChanges.subscribe(function (date) {
            var vendor = _this.bdeForm.controls['site'].value;
            var mstr = date.month;
            var dstr = date.day;
            if ((mstr + '').toString().length === 1) {
                mstr = "0" + mstr;
            }
            if ((dstr + '').toString().length === 1) {
                dstr = "0" + dstr;
            }
            var dateStr = date.year + "-" + mstr + "-" + dstr;
            _this.metaService.getRate(vendor, dateStr).subscribe(function (res) {
                _this.bdeForm.patchValue({ drate: res['rate'] });
            });
        });
        this.bdeForm.get('to').valueChanges.subscribe(function (val) {
            var site = _this.bdeForm.controls['site'].value;
            if (site) {
                var lrno = _this.bdeForm.controls['lrno'].value;
                if (lrno) {
                    _this.performLrOperation(lrno);
                }
                _this.metaService.getDestinationKm(site, val).subscribe(function (res) {
                    _this.bdeForm.patchValue({ 'newkm': res['km'] });
                });
            }
        });
        this.bdeForm.get('newkm').valueChanges.subscribe(function (val) {
            var site = _this.bdeForm.controls['site'].value;
            var tcc = _this.bdeForm.controls['tcc'].value;
            var tyre = _this.bdeForm.controls['tyre'].value;
            var km = val;
            if (tcc && tyre && site && km) {
                _this.metaService.getDqty(tyre, tcc, site).subscribe(function (res) {
                    var tavg = res['tavg'];
                    var value = Number(km) / Number(tavg);
                    _this.bdeForm.patchValue({ 'dqty': value.toFixed(0) });
                });
            }
        });
        this.bdeForm.get('tyre').valueChanges.subscribe(function (val) {
            var site = _this.bdeForm.controls['site'].value;
            var tcc = _this.bdeForm.controls['tcc'].value;
            var tyre = val;
            var km = _this.bdeForm.controls['newkm'].value;
            if (tcc && tyre && site && km) {
                _this.metaService.getDqty(tyre, tcc, site).subscribe(function (res) {
                    var tavg = res['tavg'];
                    var value = Number(km) / Number(tavg);
                    _this.bdeForm.patchValue({ 'dqty': value.toFixed(0) });
                });
            }
        });
        this.bdeForm.get('tcc').valueChanges.subscribe(function (val) {
            var site = _this.bdeForm.controls['site'].value;
            var tyre = _this.bdeForm.controls['tyre'].value;
            var tcc = val;
            var km = _this.bdeForm.controls['newkm'].value;
            if (tcc && tyre && site && km) {
                _this.metaService.getDqty(tyre, tcc, site).subscribe(function (res) {
                    var tavg = res['tavg'];
                    var value = Number(km) / Number(tavg);
                    _this.bdeForm.patchValue({ 'dqty': value.toFixed(0) });
                });
            }
        });
        // site value changes
        this.bdeForm.get('site').valueChanges.subscribe(function (val) {
            _this.bdeForm.patchValue({ tplrno: '', unloadingtype: 'Fix', ppaymentmode: 'To Be Billed', calculatedweight: 'Weight' });
            _this.bdeForm.patchValue({ contains: 'Cement', unit: 'Bags', dtransactiontype: 'Credit', product: 'Bag' });
            _this.bdeForm.patchValue({ podpendings: 'Yes', podok: 'No' });
            // getting consignor details
            _this.metaService.getConsigner(val).subscribe(function (res) {
                _this.bdeForm.controls['consigner'].setValue(res['consigner']);
                _this.bdeForm.controls['from'].setValue(res['from']);
                _this.metaService.getRateType(val).subscribe(function (ret) {
                    _this.rateBy = ret['rateBy'];
                });
            });
            var tcc = _this.bdeForm.controls['tcc'].value;
            var tyre = _this.bdeForm.controls['tyre'].value;
            var site = val;
            var km = _this.bdeForm.controls['newkm'].value;
            if (tcc && tyre && site && km) {
                _this.metaService.getDqty(tyre, tcc, site).subscribe(function (res) {
                    var tavg = res['tavg'];
                    var value = Number(km) / Number(tavg);
                    _this.bdeForm.patchValue({ 'dqty': value.toFixed(0) });
                });
            }
            var to = _this.bdeForm.controls['to'].value;
            if (to) {
                _this.metaService.getDestinationKm(val, to).subscribe(function (res) {
                    _this.bdeForm.patchValue({ 'newkm': res['km'] });
                });
            }
            // default loading address
            _this.metaService.getConsignee(val).subscribe(function (res) {
                _this.bdeForm.controls['consignne'].setValue(res['consignee']);
                var unloadAdd = [];
                _this.unloadingAddressMappings = res['info'];
                res['info'].forEach(function (dim) {
                    unloadAdd.push(dim.unloadingaddress);
                });
                _this.unloading_addresses = unloadAdd;
            });
            _this.metaService.getprefdestinationlist().subscribe(function (siteInfo) {
                _this.tos = siteInfo['result'];
                console.log('All Destination list >>>>>', _this.tos);
            }, function (err) {
                console.log('err   >>>', err);
            });
            // // getting to destination form plant rate list
            // this.metaService.getToDestinationsFromPlantRateList(val).subscribe(res => {
            //   console.log('To destination', res['info'] );
            //   var toDestination = [];
            //   res['info'].forEach(dim => {
            //     toDestination.push(dim.destination);
            //   });
            //   this.tos = toDestination;
            // });
            _this.metaService.getLrData(val, false).subscribe(function (res) {
                var lrs = [];
                _this.truckPositions = res['result'];
                res['result'].forEach(function (tp) {
                    lrs.push(tp.lrno);
                });
                _this.lrNos = lrs;
            });
            // petrol pump to fetch
            // blocked site petrol pump
            // this.metaService.getSitePetrolPump(val).subscribe(res => {
            //   var sitePetrolpump = [];
            //   res['info'].forEach(dim => {
            //     sitePetrolpump.push(dim.vendername);
            //   });
            //   this.diesalaccountname_options = sitePetrolpump;
            // });
            _this.bdeForm.controls['diesalaccountname'].setValue(null);
            _this.metaService.getDiesalAccountNames().subscribe(function (siteInfo) {
                // console.log('>>>>diesalaccountname_options', siteInfo['result']);
                _this.diesalaccountname_options = siteInfo['result'];
            });
        });
        // consginee value changes getting its unloading address
        this.bdeForm.get('consignne').valueChanges.subscribe(function (val) {
            //
            _this.bdeForm.controls['unloadingaddress'].setValue(null);
            _this.metaService.getConsigneeByName(val).subscribe(function (res) {
                var unloadAdd = [];
                _this.unloadingAddressMappings = res['info'];
                res['info'].forEach(function (dim) {
                    unloadAdd.push(dim.unloadingaddress);
                });
                _this.unloading_addresses = unloadAdd;
            });
        });
        this.bdeForm.get('mannual').valueChanges.subscribe(function (val) {
            _this.bdeForm.controls['tplrno'].setValue(null);
            _this.bdeForm.controls['lrno'].setValue(null);
            _this.lrField = val;
            var site = _this.bdeForm.controls['site'].value;
            _this.metaService.getLrData(site, val).subscribe(function (res) {
                var lrs = [];
                _this.truckPositions = res['result'];
                res['result'].forEach(function (tp) {
                    lrs.push(tp.lrno);
                });
                _this.lrNos = lrs;
            });
        });
        this.bdeForm.get('mannualroadexp').valueChanges.subscribe(function (val) {
            _this.teField = val;
        });
        this.bdeForm.get('mannualdqty').valueChanges.subscribe(function (val) {
            _this.dqField = val;
        });
        /// tplrno changes getting inforamtion from truck position
        this.bdeForm.get('tplrno').valueChanges.subscribe(function (val) {
            _this.performLrOperation(val);
        });
        this.bdeForm.get('unloadingexpences').valueChanges.subscribe(function (val) {
            _this.podcal(_this.bdeForm.get('unloadingtype').value);
        });
        this.bdeForm.get('unloadingaddress').valueChanges.subscribe(function (val) {
            if (_this.unloadingAddressMappings) {
                _this.unloadingAddressMappings.forEach(function (mapping) {
                    if (mapping.unloadingaddress === val) {
                        _this.bdeForm.controls['contactperson'].setValue(mapping['contactperson']);
                        _this.bdeForm.controls['phoneno'].setValue(mapping['phoneno']);
                    }
                });
            }
        });
        // blocked petrol pump
        // this.bdeForm.get('mannualpetrolpump').valueChanges.subscribe(val => {
        //   this.bdeForm.controls['diesalaccountname'].setValue(null);
        //   this.metaService.getDiesalAccountNames().subscribe(siteInfo => {
        //     // console.log('>>>>diesalaccountname_options', siteInfo['result']);
        //     this.diesalaccountname_options = siteInfo['result'];
        //   });
        // });
        // check old software for getting rates from plant rate list
        // this.bdeForm.get('mannualtodest').valueChanges.subscribe(val => {
        //   this.bdeForm.controls['to'].setValue(null);
        //   // this.metaService.getprefdestinationlist().subscribe(siteInfo => {
        //   //   this.tos = siteInfo['result'];
        //   //   console.log('All Destination list >>>>>', this.tos);
        //   // }, err => {
        //   //   console.log('err   >>>', err);
        //   // });
        //   // bloked for only manual destinations
        //   // getting to destination form plant rate list
        //   // this.metaService.getToDestinationsFromPlantRateList(val).subscribe(res => {
        //   //   console.log('To destination', res['info'] );
        //   //   var toDestination = [];
        //   //   res['info'].forEach(dim => {
        //   //     toDestination.push(dim.destination);
        //   //   });
        //   //   this.tos = toDestination;
        //   // });
        // });
        this.bdeForm.get('truckexpences').valueChanges.subscribe(function (val) {
            console.log('Truck Expences ', _this.bdeForm.value.truckexpences);
            // this.bdeForm.controls.transactiondetails[0].amount.setValue(null);
            _this.bdeForm.controls.transactiondetails.patchValue([{ 'amount': 0 }]);
            _this.bdeForm.controls.transactiondetails.patchValue([{ 'amount': _this.bdeForm.value.truckexpences }]);
            _this.podcal(_this.bdeForm.get('unloadingtype').value);
            _this.partyweightratechange();
        });
        // this.bdeForm.controls.transactiondetails.valueChanges.subscribe(changes => {
        //   console.log(this.bdeForm.value.transactiondetails[0].amount)
        //   this.bdeForm.patchValue({'truckexpences':this.bdeForm.value.transactiondetails[0].amount})
        //   this.podcal(this.bdeForm.get('unloadingtype').value)
        //   this.partyweightratechange();
        // });
        this.getOptions();
        this.getSites();
        this.bdeForm.get('unloadingtype').valueChanges.subscribe(function (val) {
            _this.podcal(val);
        });
        this.bdeForm.get('rate').valueChanges.subscribe(function (val) {
            _this.transratechange();
        });
        this.bdeForm.get('actualweight').valueChanges.subscribe(function (val) {
            _this.bdeForm.controls['cweight'].setValue(null);
            _this.bdeForm.controls['cweight'].setValue(_this.bdeForm.controls['actualweight'].value);
            _this.partyweightratechange();
        });
        this.bdeForm.get('product').valueChanges.subscribe(function (val) {
            _this.bdeForm.controls['unit'].setValue(null);
            if (_this.bdeForm.controls['product'].value === "Bag") {
                _this.productUnit = "Bags";
                var xx, pack;
                xx = Number(_this.bdeForm.controls['actualweight'].value);
                pack = Number(xx) * 20;
                // blocked auto packages display
                // this.bdeForm.get('packages').setValue(Number(pack));
            }
            else {
                _this.productUnit = "Per MT";
                _this.bdeForm.controls['packages'].setValue(_this.productUnit);
            }
            _this.bdeForm.controls['unit'].setValue(_this.productUnit);
        });
        this.bdeForm.get('newrate').valueChanges.subscribe(function (val) {
            _this.partyweightratechange();
        });
        this.bdeForm.get('dqty').valueChanges.subscribe(function (val) {
            _this.diesalqtyratechange();
        });
        this.bdeForm.get('drate').valueChanges.subscribe(function (val) {
            _this.diesalqtyratechange();
        });
        this.bdeForm.get('vamount').valueChanges.subscribe(function (val) {
            _this.transratechange();
        });
        this.bdeForm.get('paymentcharge').valueChanges.subscribe(function (val) {
            _this.transratechange();
        });
    };
    AddBilltyDataentryComponent.prototype.performLrOperation = function (val) {
        var _this = this;
        if (this.truckPositions) {
            this.truckPositions.forEach(function (tp) {
                if (tp.lrno === val) {
                    _this.bdeForm.controls['lrno'].setValue(val);
                    _this.bdeForm.controls['srno'].setValue(tp['srno']);
                    _this.bdeForm.controls['truckno'].setValue(tp['truckno']);
                    _this.bdeForm.controls['tkmr'].setValue(tp['km_reading']);
                    _this.bdeForm.controls['tcc'].setValue(tp['cc']);
                }
                ;
            });
        }
        // getting information of trucks
        this.bdeForm.get('truckno').valueChanges.subscribe(function (val) {
            _this.metaService.getTruckDetails(_this.bdeForm.get('truckno').value).subscribe(function (result) {
                _this.bdeForm.controls['vehicletype'].setValue(result['vtype']);
                _this.bdeForm.controls['drivername'].setValue(result['drivername']);
                _this.bdeForm.controls['ownername'].setValue(result['ownername']);
                _this.bdeForm.controls['panno'].setValue(result['newpan']);
                _this.bdeForm.controls['spi'].setValue(result['spi']);
                _this.bdeForm.controls['tyre'].setValue(result['type']);
                _this.bdeForm.controls['actualweight'].setValue(result['newcarring']);
                _this.bdeForm.controls['cweight'].setValue(result['newcarring']);
                _this.bdeForm.controls['paymentcharge'].setValue(result['newpaymentcharge']);
                // need to bring its commission type
                // this.newCommission = result['newcommission'];
                // this.commRates = result['newrates'];
                var newCommission;
                var commRates;
                var typeoft;
                var vnewCarring;
                _this.gradE = _this.bdeForm.controls['grade'].value;
                _this.truckSpi = _this.bdeForm.controls['spi'].value;
                vnewCarring = Number(result['newcarring']);
                newCommission = result['newcommision'];
                commRates = result['newrates'];
                console.log('Carrying capacity of truck ', vnewCarring);
                console.log('Rate by  ', _this.rateBy);
                console.log('Commission Type ', newCommission);
                console.log('Commission Rates ', commRates);
                console.log('SPI ', _this.truckSpi);
                console.log('Grade ', _this.gradE);
                if (_this.rateBy === "TON") {
                }
                if (!_this.gradE) {
                }
                else if (_this.gradE = 'Trade') {
                    if (vnewCarring > 26) {
                        _this.truckSpi = 1101;
                    }
                    else if ((vnewCarring > 11) && (vnewCarring <= 26)) {
                        _this.truckSpi = 1102;
                    }
                    else if (vnewCarring <= 11) {
                        _this.truckSpi = 1105;
                    }
                }
                else if (_this.gradE = 'Non Trade') {
                    if (vnewCarring > 26) {
                        _this.truckSpi = 1103;
                    }
                    else if (vnewCarring <= 26) {
                        _this.truckSpi = 1104;
                    }
                }
                else if (_this.gradE = 'Bulker') {
                    if (vnewCarring > 26) {
                        _this.truckSpi = 1201;
                    }
                    else if (vnewCarring <= 26) {
                        _this.truckSpi = 1202;
                    }
                }
                // old formula
                //   if(vnewCarring <= 11){
                //      typeoft = "U11";
                //      this.truckSpi = typeoft.trim();
                //   } else if ((vnewCarring > 11)&&(vnewCarring <= 26)){
                //        typeoft = "U26";
                //        this.truckSpi = typeoft.trim();
                //   } else if(vnewCarring >26){
                //        typeoft = "A26";
                //        this.truckSpi = typeoft.trim();
                //   }
                // } else if (this.rateBy == "SPI") {
                //     typeoft = Number(result['spi']);
                //     this.truckSpi = (typeoft+'').trim();
                // } else {
                //     if((vnewCarring) <= 6){
                //       typeoft = "U9";
                //       this.truckSpi = typeoft.trim();
                //     } else if((vnewCarring > 6)&&(vnewCarring <= 12)){
                //       typeoft = "U26";
                //       this.truckSpi = typeoft.trim();
                //     } else {
                //       typeoft = "U31";
                //       this.truckSpi = typeoft.trim();
                //     };
                // };
                // console.log('type of truck', typeoft);
                var data = {
                    site: _this.bdeForm.controls['site'].value,
                    consignor: _this.bdeForm.controls['consigner'].value,
                    destination: _this.bdeForm.controls['to'].value,
                    spi: _this.truckSpi
                };
                console.log(' Rates Data >>>>', data);
                if (data.site && data.consignor && data.destination && data.spi) {
                    console.log('True');
                    _this.metaService.getfrieght(data).subscribe(function (res) {
                        console.log('Party Freight F', res);
                        // this.bdeForm.controls['newrate'].setValue(result['freight']);
                        _this.bdeForm.patchValue({ 'newrate': Number(res['freight']) });
                        console.log(' newcommission >>>', result['newcommision']);
                        console.log(' Freight >>>', Number(res['freight']));
                        console.log(' CommRates >>>', result['newrates']);
                        if (result['newcommision'] === 'Weight') {
                            _this.bdeForm.patchValue({ 'rate': (Number(res['freight']) - Number(result['newrates'])) + '' });
                        }
                        else if (result['newcommision'] === 'Percentage') {
                            _this.bdeForm.patchValue({ 'rate': (Number(res['freight']) - (Number(res['freight']) * (Number(result['newrates'] / 100)))) });
                        }
                        var billtyd = {
                            vehicletype: result['vtype'],
                            consignor: data.consignor,
                            site: data.site,
                            destination: data.destination
                        };
                        console.log('Road Expences >>>', billtyd);
                        _this.metaService.getRoadExpanses(billtyd).subscribe(function (namr) {
                            var currentsite = _this.bdeForm.controls['site'].value + ' CASH';
                            console.log(' Current Site ', currentsite);
                            // console.log(' Unloading expences', namr['newunloading']);
                            _this.bdeForm.controls.transactiondetails.patchValue([{ 'accounttype': 'Advance' }]);
                            _this.bdeForm.controls.transactiondetails.patchValue([{ 'accountname': 'Road Expences' }]);
                            _this.bdeForm.controls.transactiondetails.patchValue([{ 'paymenttype': 'Cash' }]);
                            _this.bdeForm.controls.transactiondetails.patchValue([{ 'paymentmode': (_this.bdeForm.controls['site'].value + ' CASH') }]);
                            // this.bdeForm.controls.transactiondetails.patchValue([{'amount': namr['newamount']}]);
                            _this.bdeForm.patchValue({ 'truckexpences': namr['newamount'] });
                            // this.bdeForm.patchValue({'unloadingexpences':namr['newunloading']});
                            _this.podcal(_this.bdeForm.get('unloadingtype').value);
                            _this.partyweightratechange();
                        });
                    });
                }
            });
        });
    };
    AddBilltyDataentryComponent.prototype.partyweightratechange = function () {
        var a, b, c;
        a = Number(this.bdeForm.controls["actualweight"].value);
        b = Number(this.bdeForm.controls["newrate"].value);
        c = Number(a) * Number(b);
        c = Math.round(c * 100) / 100;
        this.bdeForm.patchValue({ 'newamount': Number(c) });
        this.podcal(this.bdeForm.controls['unloadingtype'].value);
    };
    AddBilltyDataentryComponent.prototype.diesalqtyratechange = function () {
        var a, b, c;
        a = this.bdeForm.controls["dqty"].value;
        b = this.bdeForm.controls["drate"].value;
        c = Number(a) * Number(b);
        c = Math.round(c * 100) / 100;
        this.bdeForm.patchValue({ 'damount': Number(c) });
    };
    AddBilltyDataentryComponent.prototype.transratechange = function () {
        var a, b, c;
        a = Number(this.bdeForm.controls["rate"].value);
        b = Number(this.bdeForm.controls["cweight"].value);
        this.podcal(this.bdeForm.controls['unloadingtype'].value);
        c = Number(a) * Number(b);
        c = Math.round(c * 100) / 100;
        // this.bdeForm.controls["vamount"].value= c;
        this.bdeForm.controls['vamount'].setValue(Number(c));
        var paymentcharge = this.bdeForm.controls['paymentcharge'].value;
        var virtualtotal = Number(c) - Number(paymentcharge);
        virtualtotal = Math.round(virtualtotal * 100) / 100;
        this.bdeForm.controls['finalamount'].setValue(Number(virtualtotal));
    };
    AddBilltyDataentryComponent.prototype.podcal = function (value) {
        if (this.bdeForm.controls['product'].value === "Bag") {
            this.productUnit = "Bags";
            var xx, pack;
            xx = Number(this.bdeForm.controls['actualweight'].value);
            pack = Number(xx) * 20;
            this.bdeForm.get('packages').setValue(Number(pack));
        }
        else {
            this.productUnit = "Per MT";
            this.bdeForm.controls['packages'].setValue(this.productUnit);
        }
        var yy, xy, yx, zz;
        // xx=Number(this.bdeForm.controls['actualweight'].value);
        // pack = Number(xx)*20;
        // this.bdeForm.get('packages').setValue(Number(pack));
        if (value === "Per MT") {
            xx = Number(this.bdeForm.controls['actualweight'].value);
            yy = Number(this.bdeForm.controls["unloadingexpences"].value);
            this.bdeForm.patchValue({ 'actualexpences': (xx * yy) });
            xy = Number(this.bdeForm.controls["actualexpences"].value);
            yx = Number(this.bdeForm.controls["truckexpences"].value);
            this.bdeForm.patchValue({ 'totaltruckexpences': (xy + yx) });
            /* var bbb = this.bdeForm.get("totaltruckexpences").value;
            console.log(bbb);
            this.bdeForm.get('okokok').setValue(Number(bbb)); */
        }
        else {
            yy = Number(this.bdeForm.controls["unloadingexpences"].value);
            this.bdeForm.patchValue({ "actualexpences": yy });
            xy = Number(this.bdeForm.controls["actualexpences"].value);
            yx = Number(this.bdeForm.controls["truckexpences"].value);
            this.bdeForm.patchValue({ "totaltruckexpences": xy + yx });
            /*  var bbb = this.bdeForm.get("totaltruckexpences").value;
             document.getElementById('okokok').value= Number(bbb); */
        }
    };
    AddBilltyDataentryComponent.prototype.getAllToDestination = function () {
        var _this = this;
        this.metaService.getDto().subscribe(function (siteInfo) {
            // console.log('>>>>To Destination', siteInfo['result']);
            _this.tos = siteInfo['result'];
        });
    };
    AddBilltyDataentryComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                // this.bdeForm.controls['site'].setValue(this.siteOptions[0].branch_name);
            }
            else {
                _this.bdeForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    AddBilltyDataentryComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getConsignorNames().subscribe(function (siteInfo) {
            // console.log('>>>>consignor_options', siteInfo['result']);
            _this.consignor_options = siteInfo['result'];
        });
        this.metaService.getTransactionTypeList().subscribe(function (siteInfo) {
            // console.log('>>>>Transaction_type ', siteInfo['result']);
            _this.tran_type = siteInfo['result'];
        });
        this.metaService.getConsigneeNames().subscribe(function (siteInfo) {
            _this.consignee_options = siteInfo['result'];
        });
        this.metaService.getRoadExpAccountNames().subscribe(function (siteInfo) {
            // console.log('>>>>roadexpaccountname_options', siteInfo['result']);
            _this.roadexpaccountname_options = siteInfo['result'];
        });
        this.metaService.getReceiptTypeNames().subscribe(function (siteInfo) {
            // console.log('>>>>receipttype_options', siteInfo['result']);
            _this.receipttype_options = siteInfo['result'];
        });
        this.metaService.getReceiptModeNames().subscribe(function (siteInfo) {
            // console.log('>>>>receiptmode_options', siteInfo['result']);
            _this.paymentmode_options = siteInfo['result'];
            _this.receiptmode_options = siteInfo['result'];
        });
        this.metaService.getUnits().subscribe(function (siteInfo) {
            // console.log('>>>>Units', siteInfo['result']);
            _this.units = siteInfo['result'];
        });
        this.metaService.getDfrom().subscribe(function (siteInfo) {
            // console.log('>>>>From Destination', siteInfo['result']);
            _this.froms = siteInfo['result'];
        });
        this.metaService.getContains().subscribe(function (siteInfo) {
            // console.log('>>>>Contains', siteInfo['result']);
            _this.contains = siteInfo['result'];
        });
    };
    AddBilltyDataentryComponent.prototype.buildForm = function () {
        /* this.transForm = this.fb.group(
          {
            'truckexpences':[''],
            'unloadingexpences':[''],
            'unloadingtype':['Fix'],
            'actualexpences':[''],
            'totaltruckexpences':['']
          }); */
        this.bdeForm = this.fb.group({
            'site': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'tplrno': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'lrno': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'lrdate': [new Date()],
            'consigner': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'consignne': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'unloadingaddress': [''],
            'contactperson': [''],
            'phoneno': [''],
            'from': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'to': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mannualtodest': [''],
            'grade': ['None'],
            'substation': [''],
            'srno': [''],
            'vehicletype': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'truckno': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'brokername': [''],
            'drivername': [''],
            'idno': [''],
            'ownername': [''],
            'panno': [''],
            'spi': [''],
            'tyre': [''],
            'cweight': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'rate': [0],
            'vamount': [0],
            'paymentcharge': [0],
            'finalamount': [0],
            'tkmr': [0],
            'tcc': [0],
            'mannual': [''],
            'ppaymentmode': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'loadingdate': [''],
            'unloadingdate': [null],
            'packages': [''],
            'actualweight': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mannualaweight': [''],
            'calculatedweight': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'contains': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'unit': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'newrate': [0],
            'newamount': [0],
            'fmno': [''],
            'newkm': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'ordername': [''],
            'newinvoiceno': [''],
            'newinvoicedt': [''],
            'newgatepass': [''],
            'padate': [null],
            'papaymenttype': [''],
            'papaymentmode': [''],
            'padvance': [0],
            'paremarks': [''],
            'diesaldate': [''],
            'dtransactiontype': [''],
            'diesalaccountname': [''],
            'mannualpetrolpump': [''],
            'dqty': [0],
            'mannualdqty': [''],
            'drate': [0],
            'damount': [0],
            'dslipno': [''],
            'poddate': [null],
            'podpendings': ['YES'],
            'podok': ['NOT OK'],
            'podremarks': [''],
            'billno': [''],
            'billdate': [null],
            'billremarks': [''],
            'truckexpences': [0],
            'unlaodingexpences': [0],
            'actualexpences': [0],
            'totaltruckexpences': [0],
            'mannualroadexp': [''],
            'newinvoicedate': [null],
            'product': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'unloadingexpences': [''],
            'unloadingtype': ['Fix', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'transactiondetails': this.fb.array([])
        });
        this.addTcmitems();
    };
    AddBilltyDataentryComponent.prototype.getCurrentDate = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var d = dd + '';
        var m = mm + '';
        var td = today.toString();
        var yyyy = today.getFullYear();
        if (dd < 10) {
            d = '0' + dd;
        }
        if (mm < 10) {
            m = '0' + mm;
        }
        td = yyyy + '-' + m + '-' + d;
        return td;
    };
    AddBilltyDataentryComponent.prototype.initItems = function () {
        return this.fb.group({
            'date': [this.getCurrentDate()],
            'accounttype': [''],
            'accountname': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'amount': [0],
            'paymenttype': [''],
            'paymentmode': [''],
            'remark': [''],
        });
    };
    AddBilltyDataentryComponent.prototype.addTcmitems = function () {
        var control = this.bdeForm.controls['transactiondetails'];
        control.push(this.initItems());
    };
    AddBilltyDataentryComponent.prototype.removeItems = function (i) {
        var control = this.bdeForm.controls['transactiondetails'];
        control.removeAt(i);
    };
    AddBilltyDataentryComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var transactiondetails = this.bdeForm.controls['transactiondetails'].value;
        var index = transactiondetails.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    AddBilltyDataentryComponent.prototype.findInvalidControls = function () {
        var invalid = [];
        var controls = this.bdeForm.controls;
        for (var name_1 in controls) {
            if (controls[name_1].invalid) {
                invalid.push(name_1);
            }
        }
        return invalid;
    };
    // public save() {
    // }
    AddBilltyDataentryComponent.prototype.save = function () {
        var _this = this;
        /*     [disabled]="!bdeForm.valid || process == 'saving'"
         */
        if (this.bdeForm.valid) {
            var lrdate = void 0;
            if (this.bdeForm.controls['lrdate'].value) {
                var dt = this.bdeForm.controls['lrdate'].value.year + '-' +
                    this.bdeForm.controls['lrdate'].value.month + '-' +
                    this.bdeForm.controls['lrdate'].value.day;
                lrdate = new Date(this.bdeForm.controls['lrdate'].value.year, this.bdeForm.controls['lrdate'].value.month - 1, this.bdeForm.controls['lrdate'].value.day, 23, 59, 59);
                console.log(lrdate);
            }
            else {
                lrdate = moment().format();
                lrdate = new Date(lrdate.getFullYear(), lrdate.getMonth(), lrdate.getDay(), 23, 59, 59);
            }
            var newinvoicedate = void 0;
            if (this.bdeForm.controls['newinvoicedate'].value) {
                var dt = this.bdeForm.controls['newinvoicedate'].value.year + '-' +
                    this.bdeForm.controls['newinvoicedate'].value.month + '-' +
                    this.bdeForm.controls['newinvoicedate'].value.day;
                newinvoicedate = moment(dt, 'YYYY-MM-DD').format();
                console.log(newinvoicedate);
            }
            else {
                newinvoicedate = moment().format();
            }
            var unloadingdate = void 0;
            if (this.bdeForm.controls['unloadingdate'].value) {
                var dt = this.bdeForm.controls['unloadingdate'].value.year + '-' +
                    this.bdeForm.controls['unloadingdate'].value.month + '-' +
                    this.bdeForm.controls['unloadingdate'].value.day;
                unloadingdate = moment(dt, 'YYYY-MM-DD').format();
                console.log(unloadingdate);
            }
            else {
                unloadingdate = moment().format();
            }
            var loadingdate = void 0;
            if (this.bdeForm.controls['loadingdate'].value) {
                var dt = this.bdeForm.controls['loadingdate'].value.year + '-' +
                    this.bdeForm.controls['loadingdate'].value.month + '-' +
                    this.bdeForm.controls['loadingdate'].value.day;
                loadingdate = moment(dt, 'YYYY-MM-DD').format();
                console.log(loadingdate);
            }
            else {
                loadingdate = moment().format();
            }
            var padate = void 0;
            if (this.bdeForm.controls['padate'].value) {
                var dt = this.bdeForm.controls['padate'].value.year + '-' +
                    this.bdeForm.controls['padate'].value.month + '-' +
                    this.bdeForm.controls['padate'].value.day;
                padate = moment(dt, 'YYYY-MM-DD').format();
                console.log(padate);
            }
            else {
                padate = moment().format();
            }
            var billdate = void 0;
            if (this.bdeForm.controls['billdate'].value) {
                var dt = this.bdeForm.controls['billdate'].value.year + '-' +
                    this.bdeForm.controls['billdate'].value.month + '-' +
                    this.bdeForm.controls['billdate'].value.day;
                billdate = moment(dt, 'YYYY-MM-DD').format();
                console.log(billdate);
            }
            else {
                //billdate = moment().format();
            }
            var diesaldate = void 0;
            if (this.bdeForm.controls['diesaldate'].value) {
                var dt = this.bdeForm.controls['diesaldate'].value.year + '-' +
                    this.bdeForm.controls['diesaldate'].value.month + '-' +
                    this.bdeForm.controls['diesaldate'].value.day;
                diesaldate = moment(dt, 'YYYY-MM-DD').format();
                console.log(diesaldate);
            }
            else {
                diesaldate = moment().format();
            }
            var poddate = void 0;
            if (this.bdeForm.controls['poddate'].value) {
                var dt = this.bdeForm.controls['poddate'].value.year + '-' +
                    this.bdeForm.controls['poddate'].value.month + '-' +
                    this.bdeForm.controls['poddate'].value.day;
                poddate = moment(dt, 'YYYY-MM-DD').format();
                console.log(poddate);
            }
            else {
                poddate = moment().format();
            }
            console.log('Billty Data Entry >> Save', this.bdeForm.value);
            var saveData_1 = this.bdeForm.value;
            saveData_1.lrdate = lrdate;
            saveData_1.padate = padate;
            saveData_1.unloadingdate = unloadingdate;
            saveData_1.billdate = billdate;
            saveData_1.diesaldate = diesaldate;
            saveData_1.loadingdate = loadingdate;
            saveData_1.newinvoicedate = newinvoicedate;
            var dval = saveData_1.transactiondetails[0].date;
            var fdval = dval ? dval.year + "-" + (dval.month < 10 ? "0" + dval.month : dval.month) + "-" + (dval.day < 10 ? "0" + dval.day : dval.day) : this.getCurrentDate();
            saveData_1.transactiondetails[0].date = fdval;
            if (saveData_1.newamount > saveData_1.vamount && saveData_1.newamount > saveData_1.totaltruckexpences) {
                this.process = 'saving';
                this.ss.addBde(this.bdeForm.value).subscribe(function (miInfo) {
                    _this.process = 'done';
                    var data = {
                        site: saveData_1.site,
                        truckno: saveData_1.truckno,
                        lrno: saveData_1.lrno,
                        tkmr: saveData_1.tkmr
                    };
                    _this.metaService.updateKmReadingJobworkreminder(data).subscribe(function (kmrInfo) {
                        _this.metaService.updateTruckPositionBiltyGen(data).subscribe(function (res) {
                            _this.router.navigate(['/site-management/billty-dataentry']);
                        }, function (error) {
                            _this.process = 'done';
                            console.log(error);
                        });
                    });
                });
            }
            else {
                this.toastr.error('Party Amount must be greater than Transporter Amount and Road Expenses');
            }
        }
    };
    AddBilltyDataentryComponent.prototype.generateConsignee = function (value) {
        var _this = this;
        console.log(' generate consignee ');
        this.metaService.getConsigneeNames().subscribe(function (siteInfo) {
            console.log('>>>>consignee_options', siteInfo['result']);
            _this.consignee_options = siteInfo['result'];
        });
    };
    AddBilltyDataentryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-billty-dataentry',
            template: __webpack_require__(/*! ./add-billty-dataentry.component.html */ "./src/app/layout/site-management/component/add-billty-dataentry/add-billty-dataentry.component.html"),
            styles: [__webpack_require__(/*! ./add-billty-dataentry.component.scss */ "./src/app/layout/site-management/component/add-billty-dataentry/add-billty-dataentry.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _sitemanagement_service__WEBPACK_IMPORTED_MODULE_4__["SitemanagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"]])
    ], AddBilltyDataentryComponent);
    return AddBilltyDataentryComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-management/component/add-vehicle-master/add-vehicle-master.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/add-vehicle-master/add-vehicle-master.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"vmForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Add Vehicle Master</div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\">\n              <ngb-tabset>\n                <ngb-tab title=\"Data Entry\">\n                  <ng-template ngbTabContent>\n                    <br>\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <h4><i class=\"fa fa-truck\"></i> Vehicle Master</h4>\n                          <hr />\n                        </div>\n\n                        <div class=\"col-md-3\">\n                          <label class=\"required\" >Vehicle Type</label>\n                          <select class=\"form-control manual-entry\" formControlName=\"vtype\">\n                            <option value=\"Attached\">Attached</option>\n                            <option value=\"Company\">Company</option>\n                          </select>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                          <div class=\"form-group\">\n                            <label class=\"required\">Vehicle No</label>\n                            <input type=\"text\" formControlName=\"truckno\"  class=\"form-control manual-entry\" placeholder=\"Truck No\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <!-- <label  class=\"required\">SPI</label> -->\n                            <label>SPI</label>\n                            <input type=\"text\" formControlName=\"spi\" class=\"form-control manual-entry\" placeholder=\"SPI\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-4\">\n                          <label>Traffic Agent Name</label>\n                          <ng-select [items]=\"ta_options\" placeholder=\"Type and search Consignee\" bindLabel=\"name\" bindValue=\"name\"\n                            formControlName=\"taname\" class=\"manual-entry\">\n                          </ng-select>\n                        </div>\n\n                        <div class=\"col-md-4\">\n                          <label>Driver Name</label>\n                          <ng-select [items]=\"driver_options\" placeholder=\"Type and search Consignee\" bindLabel=\"name\" bindValue=\"name\"\n                            formControlName=\"drivername\" class=\"manual-entry\">\n                          </ng-select>\n                        </div>\n\n\n                        <div class=\"col-md-3\">\n                          <label class=\"required\">GPS</label>\n                          <select class=\"form-control manual-entry\" formControlName=\"gps\">\n                            <option value=\"No\">No</option>\n                            <option value=\"Yes\">Yes</option>\n                          </select>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                          <label class=\"required\">Status</label>\n                          <select class=\"form-control manual-entry\" formControlName=\"status\">\n                            <option value=\"Active\">Active</option>\n                            <option value=\"Not-Active\">Non-Active</option>\n                          </select>\n                        </div>\n\n\n                      </div>\n\n                  </ng-template>\n                </ngb-tab>\n\n                  <ngb-tab title=\"Owner Details\">\n                    <ng-template ngbTabContent>\n                      <br>\n\n                      <div class=\"row\">\n                        <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                            <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                <div class=\"form-group\">\n                                  <label class=\"required\">Owner Name</label>\n                                  <input type=\"text\" formControlName=\"ownername\" class=\"form-control manual-entry\" placeholder=\"Owner Name\">\n                                </div>\n                              </div>\n\n\n                              <div class=\"col-md-4\">\n                                  <div class=\"form-group\">\n                                    <label>Address</label>\n                                    <input type=\"text\" formControlName=\"newaddress\" class=\"form-control manual-entry\" placeholder=\"Address\">\n                                  </div>\n                                </div>\n\n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Pan Number</label>\n                                    <input type=\"text\" formControlName=\"newpan\" class=\"form-control manual-entry\" placeholder=\"Pan Number\">\n                                  </div>\n                                </div>\n\n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Aadhar Card No.</label>\n                                    <input type=\"text\" formControlName=\"newaadhar\" class=\"form-control manual-entry\" placeholder=\"Aadhar Card Number\">\n                                  </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Owner Mobile No.</label>\n                                    <input type=\"text\" formControlName=\"newmobile\" class=\"form-control manual-entry\" placeholder=\"Mobile No.\">\n                                  </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Contact Person</label>\n                                    <input type=\"text\" formControlName=\"newcontactp\" class=\"form-control manual-entry\" placeholder=\"Contact Person\">\n                                  </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Contact Person Mobile No</label>\n                                    <input type=\"text\" formControlName=\"newcmobile\" class=\"form-control manual-entry\" placeholder=\"Mobile No\">\n                                  </div>\n                                </div>\n\n                              </div>\n                            </div>\n                          <hr>\n                        </div>\n                        <br>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Vehicle Details\">\n                    <ng-template ngbTabContent>\n                      <br>\n                      <div class=\"row\">\n                        <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                            <div class=\"col-md-12\">\n                              <h4><i class=\"fa fa-truck\"></i> Vehicle Specifications</h4>\n                              <hr />\n                            </div>\n\n                            <div class=\"row\">\n\n                              <div class=\"col-md-4\">\n                                <label class=\"required\">Tyre</label>\n                                <ng-select [items]=\"tyre_options\" placeholder=\"Type and search Consignee\" bindLabel=\"name\" bindValue=\"name\"\n                                  formControlName=\"type\" class=\"manual-entry\">\n                                </ng-select>\n                              </div>\n\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label class=\"required\">Carrying Capacity</label>\n                                  <input type=\"text\" formControlName=\"newcarring\" class=\"form-control manual-entry\" placeholder=\"CC\">\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Engine No</label>\n                                  <input type=\"text\" formControlName=\"newengine\" class=\"form-control manual-entry\" placeholder=\"Engine No\">\n                                </div>\n                              </div>\n\n\n                              <div class=\"col-md-3\">\n                                <label class=\"required\">Engine Type</label>\n                                <select class=\"form-control manual-entry\" formControlName=\"enginetype\">\n                                  <option value=\"\">Engine Type</option>\n                                  <option value=\"BS III\">BS III</option>\n                                  <option value=\"BS IV\">BS IV</option>\n                                  <option value=\"BS V\">BS V</option>\n                                  <option value=\"BS VI\">BS VI</option>\n                                </select>\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Chasis No</label>\n                                  <input type=\"text\" formControlName=\"newchasis\" class=\"form-control manual-entry\" placeholder=\"Chasis No\">\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-12\">\n                                <h4><i class=\"fa fa-truck\"></i> Purchase and Sales Date Details</h4>\n                                <hr />\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Purchase Date</label>\n                                  <div class=\"input-group datepicker-input\">\n                                    <input\n                                      class=\"form-control manual-entry\"\n                                      placeholder=\"dd/mm/yyyy\"\n                                      formControlName=\"purchasedate\"\n                                      name=\"dp\"\n                                      ngbDatepicker\n                                      #dd=\"ngbDatepicker\"\n                                    />\n                                    <div class=\"input-group-append\">\n                                      <button class=\"btn btn-outline-secondary calendar\" (click)=\"dd.toggle()\" type=\"button\">\n                                        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                      </button>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Sales Date</label>\n                                  <div class=\"input-group datepicker-input\">\n                                    <input\n                                      class=\"form-control manual-entry\"\n                                      placeholder=\"dd/mm/yyyy\"\n                                      formControlName=\"salesdate\"\n                                      name=\"dp\"\n                                      ngbDatepicker\n                                      #dds=\"ngbDatepicker\"\n                                    />\n                                    <div class=\"input-group-append\">\n                                      <button class=\"btn btn-outline-secondary calendar\" (click)=\"dds.toggle()\" type=\"button\">\n                                        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                      </button>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n\n\n                            </div>\n\n                            <div class=\"col-md-12\">\n                              <h4><i class=\"fa fa-truck\"></i> Commission Details</h4>\n                              <hr />\n                            </div>\n                            <div class=\"row\">\n                              <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                                  <div class=\"row\">\n                                    <div class=\"col-md-3\">\n                                      <label >Commission to be Charged</label>\n                                      <select class=\"form-control manual-entry\" formControlName=\"newcommision\">\n                                        <option value=\"\">Select Commission Type</option>\n                                        <option value=\"Percentage\">Percentage</option>\n                                        <option value=\"Weight\">Weight</option>\n                                      </select>\n                                    </div>\n\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>Rates</label>\n                                        <input type=\"number\" formControlName=\"newrates\" class=\"form-control manual-entry\" placeholder=\"Rates\">\n                                      </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>Payment Charge</label>\n                                        <input type=\"number\" formControlName=\"newpaymentcharge\" class=\"form-control manual-entry\" placeholder=\"Payment Charge\">\n                                      </div>\n                                    </div>\n\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>Billty Charge</label>\n                                        <input type=\"number\" formControlName=\"newbilltycharge\" class=\"form-control manual-entry\" placeholder=\"Billty Charge\">\n                                      </div>\n                                    </div>\n\n                                  </div>\n                                <hr>\n                              </div>\n                            </div>\n                            <br>\n                          <hr>\n                        </div>\n                      </div>\n                    </ng-template>\n                  </ngb-tab>\n\n                </ngb-tabset>\n          </div>\n        </div>\n\n        </div>\n      </div>\n      <div class=\"card-footer\">\n<!--         [disabled]=\"!vmForm.valid || process == 'saving'\"\n -->        <button class=\"btn btn-success float-right\" [disabled]=\"!vmForm.valid || process == 'saving'\" (click)=\"save()\"  type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\"  class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/site-management/component/add-vehicle-master/add-vehicle-master.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/add-vehicle-master/add-vehicle-master.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auto-entry {\n  border: 2px solid #fcbd47 !important; }\n\n.manual-entry {\n  border: 2px solid #51cc51 !important; }\n\n::ng-deep .ng-select.manual-entry {\n  border: 2px solid #51cc51 !important; }\n\n::ng-deep .ng-select.auto-entry {\n  border: 2px solid #fcbd47 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpdGUtbWFuYWdlbWVudC9jb21wb25lbnQvYWRkLXZlaGljbGUtbWFzdGVyL0Q6XFx0ZXN0aW5nX2ZvbGRlclxcdGhpcnVcXGZyb250ZW5kXFx0ZF9Gcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxzaXRlLW1hbmFnZW1lbnRcXGNvbXBvbmVudFxcYWRkLXZlaGljbGUtbWFzdGVyXFxhZGQtdmVoaWNsZS1tYXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBNkMsRUFBQTs7QUFHakQ7RUFDSSxvQ0FBNEMsRUFBQTs7QUFHaEQ7RUFDSSxvQ0FBNEMsRUFBQTs7QUFHaEQ7RUFDSSxvQ0FBNkMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLW1hbmFnZW1lbnQvY29tcG9uZW50L2FkZC12ZWhpY2xlLW1hc3Rlci9hZGQtdmVoaWNsZS1tYXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0by1lbnRyeXtcclxuICAgIGJvcmRlcjoycHggc29saWQgcmdiKDI1MiwgMTg5LCA3MSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hbnVhbC1lbnRyeXtcclxuICAgIGJvcmRlcjoycHggc29saWQgcmdiKDgxLCAyMDQsIDgxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm5nLXNlbGVjdC5tYW51YWwtZW50cnl7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJnYig4MSwgMjA0LCA4MSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5uZy1zZWxlY3QuYXV0by1lbnRyeXtcclxuICAgIGJvcmRlcjoycHggc29saWQgcmdiKDI1MiwgMTg5LCA3MSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/site-management/component/add-vehicle-master/add-vehicle-master.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/add-vehicle-master/add-vehicle-master.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AddVehicleMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehicleMasterComponent", function() { return AddVehicleMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sitemanagement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sitemanagement.service */ "./src/app/layout/site-management/sitemanagement.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
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







var AddVehicleMasterComponent = /** @class */ (function () {
    function AddVehicleMasterComponent(fb, ss, router, metaService, toastr, calendar) {
        this.fb = fb;
        this.ss = ss;
        this.router = router;
        this.metaService = metaService;
        this.toastr = toastr;
        this.calendar = calendar;
        this.loading = false;
        this.currentDate = new Date();
    }
    AddVehicleMasterComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.vmForm.controls['purchasedate'].setValue(this.calendar.getToday());
        this.vmForm.controls['salesdate'].setValue(this.calendar.getToday());
        this.getOptions();
    };
    AddVehicleMasterComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getTaNames().subscribe(function (siteInfo) {
            _this.ta_options = siteInfo['result'];
        });
        this.metaService.getTyreNames().subscribe(function (siteInfo) {
            _this.tyre_options = siteInfo['result'];
        });
        this.metaService.getDriverNames().subscribe(function (siteInfo) {
            _this.driver_options = siteInfo['result'];
        });
    };
    AddVehicleMasterComponent.prototype.buildForm = function () {
        this.vmForm = this.fb.group({
            'vtype': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'truckno': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'spi': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'taname': [''],
            'drivername': [''],
            'gps': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'status': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'ownername': [''],
            'newaddress': [''],
            'newpan': [''],
            'newaadhar': [''],
            'newmobile': [''],
            'newcontactp': [''],
            'newcmobile': [''],
            'type': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'newcarring': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'newengine': [''],
            'enginetype': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'newchasis': [''],
            'purchasedate': [new Date()],
            'salesdate': [new Date()],
            'newcommision': [''],
            'newrates': [0],
            'newpaymentcharge': [0],
            'newbilltycharge': [0]
        });
    };
    AddVehicleMasterComponent.prototype.getCurrentDate = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var d = dd + '';
        var m = mm + '';
        var td = today.toString();
        var yyyy = today.getFullYear();
        if (dd < 10) {
            d = '0' + dd;
        }
        if (mm < 10) {
            m = '0' + mm;
        }
        td = yyyy + '-' + m + '-' + d;
        return td;
    };
    AddVehicleMasterComponent.prototype.initItems = function () {
    };
    AddVehicleMasterComponent.prototype.save = function () {
        var _this = this;
        if (this.vmForm.valid) {
            var purchasedate = void 0;
            if (this.vmForm.controls['purchasedate'].value) {
                var dt = this.vmForm.controls['purchasedate'].value.year + '-' +
                    this.vmForm.controls['purchasedate'].value.month + '-' +
                    this.vmForm.controls['purchasedate'].value.day;
                purchasedate = moment(dt, 'YYYY-MM-DD').format();
                console.log(purchasedate);
            }
            else {
                purchasedate = moment().format();
            }
            var salesdate = void 0;
            if (this.vmForm.controls['salesdate'].value) {
                var dt = this.vmForm.controls['salesdate'].value.year + '-' +
                    this.vmForm.controls['salesdate'].value.month + '-' +
                    this.vmForm.controls['salesdate'].value.day;
                salesdate = moment(dt, 'YYYY-MM-DD').format();
            }
            else {
                salesdate = moment().format();
            }
            this.process = 'saving';
            var data = this.vmForm.value;
            data.purchasedate = purchasedate;
            data.salesdate = salesdate;
            this.ss.addVm(this.vmForm.value).subscribe(function (mrInfo) {
                _this.process = 'done';
                _this.router.navigate(['/site-management/vehicle-master']);
            }, function (error) {
                _this.process = 'done';
                console.log(error);
            });
        }
    };
    AddVehicleMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-vehicle-master',
            template: __webpack_require__(/*! ./add-vehicle-master.component.html */ "./src/app/layout/site-management/component/add-vehicle-master/add-vehicle-master.component.html"),
            styles: [__webpack_require__(/*! ./add-vehicle-master.component.scss */ "./src/app/layout/site-management/component/add-vehicle-master/add-vehicle-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _sitemanagement_service__WEBPACK_IMPORTED_MODULE_4__["SitemanagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"]])
    ], AddVehicleMasterComponent);
    return AddVehicleMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-management/component/bill-details/bill-details.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/bill-details/bill-details.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <form [formGroup]=\"editForm\" class=\"table-overflow\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\">\r\n        <form>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <h4><i class=\"fa fa-file-text-o\"></i> Bill Details -> {{this.site_name}} #{{bill_no}}</h4>\r\n              <hr />\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <table class=\"table table-hover table-striped table-bordered table-condensed tableFixHead\">\r\n          <thead>\r\n            <tr>\r\n                <th>Bill No.</th>\r\n                <th>Lr No.</th>\r\n                <th>Lr Date</th>\r\n                <th>Pkgs</th>\r\n                <th>Wt.Kgs</th>\r\n                <th>Description</th>\r\n                <th>TBB Amount</th>\r\n                <th>L. Chrg</th>\r\n                <th>Ul Chrg</th>\r\n                <th>H-Days</th>\r\n                <th>H-Amt</th>\r\n                <th>Bill-Amt</th>\r\n                <th>Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngIf=\"loading\">\r\n              <td colspan=\"10\">\r\n                <div class=\"showbox\">\r\n                  <div class=\"loader\">\r\n                    <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                      <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                    </svg>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr *ngFor=\"let billing of billing_data; let i = index\">\r\n              <td>{{ billing.bill_no ? billing.bill_no : '--' }}</td>\r\n              <td>{{ billing.lr_no ? billing.lr_no : '--' }}</td>\r\n              <td>{{ billing.lr_date ? billing.lr_date : '--' }}</td>\r\n              <td>{{ billing.pkgs ? billing.pkgs : '--' }}</td>\r\n              <td>{{ billing.wt_kgs ? billing.wt_kgs : '--' }}</td>\r\n              <td>{{ billing.description ? billing.description : '--' }}</td>\r\n              <td class=\"cell-align\">{{ (billing.tbb_amount ? billing.tbb_amount : 0) | number : '1.2-2' }}</td>\r\n\r\n\r\n              <td *ngIf=\"!billing.editing\" class=\"cell-align\">{{ (billing.lchrg ? billing.lchrg : 0) | number : '1.2-2' }}</td>\r\n              <td *ngIf=\"billing.editing\">\r\n                <input class=\"form-control\" formControlName=\"lchrg\" type=\"number\" (keyup)=\"changeLChargeModalValue(billing)\" >\r\n              </td>\r\n\r\n              <td *ngIf=\"!billing.editing\" class=\"cell-align\">{{ (billing.ulchrg ? billing.ulchrg : 0) | number : '1.2-2' }}</td>\r\n              <td *ngIf=\"billing.editing\">\r\n                <input class=\"form-control\" formControlName=\"ulchrg\" type=\"number\" (keyup)=\"changeUlChargeModalValue(billing)\" >\r\n              </td>\r\n\r\n              <td *ngIf=\"!billing.editing\" class=\"cell-align\">{{ billing.hdays ? billing.hdays : '0' }}</td>\r\n              <td *ngIf=\"billing.editing\">\r\n                <input class=\"form-control\" formControlName=\"hdays\" type=\"number\">\r\n              </td>\r\n\r\n              <td *ngIf=\"!billing.editing\" class=\"cell-align\">{{ (billing.hamt ? billing.hamt : 0) | number : '1.2-2' }}</td>\r\n              <td *ngIf=\"billing.editing\">\r\n                <input class=\"form-control\" formControlName=\"hamt\" type=\"number\" (keyup)=\"changeHamtModalValue(billing)\" >\r\n              </td>\r\n\r\n\r\n              \r\n              <td class=\"cell-align\">{{ (billing.bill_amt ? billing.bill_amt : 0) | number : '1.2-2' }}</td>\r\n              <td>\r\n                <button class=\"btn btn-primary\" *ngIf=\"!billing.editing\" (click)=\"edit(billing)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit</button>&nbsp;\r\n                <button *ngIf=\"billing.editing\" class=\"btn btn-danger\" (click)=\"cancel(billing)\">Cancel</button>&nbsp;\r\n                <button *ngIf=\"billing.editing\" class=\"btn btn-success\" (click)=\"update(billing)\">Update</button>&nbsp;\r\n                <button class=\"btn btn-danger\" (click)=\"delete(billing_data, i)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</button>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"cell-align\" colspan=\"12\">Total</th>\r\n              <td>{{ total | number : '1.2-2' }}</td>\r\n            </tr>\r\n            <tr *ngIf=\"billing_data.length === 0\">\r\n              <td align=\"center\" colspan=\"12\">No data available</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"col-md-12\">\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"col-md-3 pull-right\">\r\n          <form>\r\n            <table class=\"table table-hover table-striped table-bordered table-condensed\">\r\n              <tr>\r\n                <td class=\"cell-align\">SGST</td>\r\n                <td class=\"cell-align\">{{ sgst | number : '1.2-2' }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"cell-align\">CGST</td>\r\n                <td class=\"cell-align\">{{ cgst | number : '1.2-2' }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"cell-align\">IGST</td>\r\n                <td class=\"cell-align\">{{ igst | number : '1.2-2' }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"cell-align\">Total Bill Amount</th>\r\n                <td class=\"cell-align\">{{ totalBillAmount | number : '1.2-2' }}</td>\r\n              </tr>\r\n            </table>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/layout/site-management/component/bill-details/bill-details.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/bill-details/bill-details.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th, td {\n  text-align: center; }\n\n.cell-align {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpdGUtbWFuYWdlbWVudC9jb21wb25lbnQvYmlsbC1kZXRhaWxzL0Q6XFx0ZXN0aW5nX2ZvbGRlclxcdGhpcnVcXGZyb250ZW5kXFx0ZF9Gcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxzaXRlLW1hbmFnZW1lbnRcXGNvbXBvbmVudFxcYmlsbC1kZXRhaWxzXFxiaWxsLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLW1hbmFnZW1lbnQvY29tcG9uZW50L2JpbGwtZGV0YWlscy9iaWxsLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCwgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2VsbC1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/site-management/component/bill-details/bill-details.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/bill-details/bill-details.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BillDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillDetailsComponent", function() { return BillDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/site.service */ "./src/app/shared/services/site.service.ts");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BillDetailsComponent = /** @class */ (function () {
    function BillDetailsComponent(site, activedRoute, toastr, fb) {
        var _this = this;
        this.site = site;
        this.activedRoute = activedRoute;
        this.toastr = toastr;
        this.fb = fb;
        this.loading = false;
        this.billing_data = [];
        this.total = 0;
        this.editing = false;
        this.grandTotal = 0; // final amount including gst
        this.subTotal = 0;
        this.cgstGstPercentage = 0;
        this.sgstGstPercentage = 0;
        this.igstGstPercentage = 0;
        this.activedRoute.params.subscribe(function (params) {
            _this.bill_no = params.billno;
            _this.site_name = params.site;
            _this.account_name = params.accountname;
        });
        this.editForm = this.fb.group({
            lchrg: [''],
            ulchrg: [''],
            hdays: [''],
            hamt: [''],
        });
    }
    BillDetailsComponent.prototype.ngOnInit = function () {
        this.fetchReport();
        // this.cgst = JSON.parse(localStorage.getItem('cgst'));
        // this.sgst = JSON.parse(localStorage.getItem('sgst'));
        // this.igst = JSON.parse(localStorage.getItem('igst'));
    };
    BillDetailsComponent.prototype.fetchReport = function () {
        var _this = this;
        this.loading = true;
        this.site.getBillNumberData(this.bill_no, this.site_name, this.account_name).subscribe(function (res) {
            _this.loading = false;
            res.forEach(function (element) {
                element.lr_date = moment(element.lr_date).format('DD/MM/YYYY');
                element.editing = false;
                _this.total += element.bill_amt;
            });
            _this.billing_data = res;
            if (_this.billing_data[0]) {
                var perSGST = _this.billing_data[0].sgst;
                var perCGST = _this.billing_data[0].cgst;
                var perIGST = _this.billing_data[0].igst;
                _this.cgstGstPercentage = perCGST;
                _this.sgstGstPercentage = perSGST;
                _this.igstGstPercentage = perIGST;
                _this.sgst = (_this.total * perSGST) / 100;
                _this.igst = (_this.total * perIGST) / 100;
                _this.cgst = (_this.total * perCGST) / 100;
                _this.totalBillAmount = _this.total + _this.sgst + _this.igst + _this.cgst;
            }
            else {
                _this.totalBillAmount = _this.total;
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    BillDetailsComponent.prototype.delete = function (data, index) {
        var _this = this;
        var obj = {
            bill_no: data[index].bill_no,
            lr_no: data[index].lr_no
        };
        var conf = confirm('Are you sure you want to delete this record ?');
        if (conf === true) {
            this.loading = true;
            this.site.deleteRecord(obj).subscribe(function (res) {
                // this.cgst = JSON.parse(localStorage.getItem('cgst'));
                // this.sgst = JSON.parse(localStorage.getItem('sgst'));
                // this.igst = JSON.parse(localStorage.getItem('igst'));
                _this.total = 0;
                _this.fetchReport();
                _this.toastr.success('Bill deleted successfully.');
                // this.loading = false;
            }, function (err) {
                _this.toastr.error('Something went wrong.');
                _this.loading = false;
            });
        }
    };
    BillDetailsComponent.prototype.edit = function (data) {
        data.editing = true;
        this.billNewAmount = data.tbb_amount;
        this.editForm.controls['lchrg'].setValue(data.lchrg);
        this.editForm.controls['ulchrg'].setValue(data.ulchrg);
        this.editForm.controls['hdays'].setValue(data.hdays);
        this.editForm.controls['hamt'].setValue(data.hamt);
    };
    BillDetailsComponent.prototype.cancel = function (data) {
        data.editing = false;
    };
    BillDetailsComponent.prototype.update = function (data) {
        var _this = this;
        var obj = {
            load: this.editForm.value.lchrg,
            unload: this.editForm.value.ulchrg,
            haltdays: this.editForm.value.hdays,
            haltamt: this.editForm.value.hamt,
        };
        var ledger_obj = {
            bill_no: data.bill_no,
            branch: this.site_name
        };
        var siteName = this.site_name;
        var consignerName = this.account_name;
        console.log('Bill no >>>>', data.bill_no);
        console.log('Lr no >>>>', data.lr_no);
        console.log('obj >>>>', obj);
        this.loading = true;
        this.site.deleteLedgerByBillNumber(ledger_obj).subscribe(function (res) {
            _this.site.getConsignorCity(consignerName).subscribe(function (res) {
                // console.log('getConsignorCity  >>>>>', res.bstate);
                var consignerState = res.bstate;
                var accountLedgers = [];
                var billingNo = data.bill_no;
                _this.grandTotal = _this.totalBillAmount;
                _this.subTotal = _this.total;
                var billDate = moment(data.bill_date, 'YYYY-MM-DD').format();
                var credit = {
                    'branch': siteName,
                    'accountname': consignerName + ' UNBILLED A/C.',
                    'avouno': billingNo,
                    'arefno': 'Bill No ' + billingNo,
                    'adoctp': 'pbill',
                    'adebtamt': '0',
                    'acrdtamt': _this.subTotal.toString(),
                    'avoudt': billDate
                };
                accountLedgers.push(credit);
                var debit = {
                    'branch': siteName,
                    'accountname': consignerName + ' BILL A/C.',
                    'avouno': billingNo,
                    'arefno': 'Bill No ' + billingNo,
                    'adoctp': 'pbill',
                    'adebtamt': _this.grandTotal.toString(),
                    'acrdtamt': '0',
                    'avoudt': billDate
                };
                accountLedgers.push(debit);
                // this.subTotal = subTotal;
                // this.grandTotal;
                if (_this.cgst) {
                    var cgstCredit = {
                        'branch': siteName,
                        'accountname': 'CGST OUTWARD @' + _this.cgst + '% ' + consignerState,
                        'avouno': billingNo,
                        'arefno': 'Bill No ' + billingNo + ' ' + consignerName,
                        'adoctp': 'pbill',
                        'adebtamt': '0',
                        'acrdtamt': _this.cgstGstPercentage.toString(),
                        'avoudt': billDate
                    };
                    accountLedgers.push(cgstCredit);
                }
                if (_this.sgst) {
                    var sgstCredit = {
                        'branch': siteName,
                        'accountname': 'SGST OUTWARD @' + _this.sgst + '% ' + consignerState,
                        'avouno': billingNo,
                        'arefno': 'Bill No ' + billingNo + ' ' + consignerName,
                        'adoctp': 'pbill',
                        'adebtamt': '0',
                        'acrdtamt': _this.sgstGstPercentage.toString(),
                        'avoudt': billDate
                    };
                    accountLedgers.push(sgstCredit);
                }
                if (_this.igst) {
                    var igstCredit = {
                        'branch': siteName,
                        'accountname': 'IGST OUTWARD @' + _this.igst + '% ' + consignerState,
                        'avouno': billingNo,
                        'arefno': 'Bill No ' + billingNo + ' ' + consignerName,
                        'adoctp': 'pbill',
                        'adebtamt': '0',
                        'acrdtamt': _this.igstGstPercentage.toString(),
                        'avoudt': billDate
                    };
                    accountLedgers.push(igstCredit);
                }
                _this.site.principleBillingPosting(accountLedgers).subscribe(function (res) {
                    _this.site.updateBillByLrNo(data.bill_no, data.lr_no, obj).subscribe(function (res) {
                        _this.loading = false;
                        data.editing = false;
                        data.lchrg = _this.editForm.value.lchrg;
                        data.ulchrg = _this.editForm.value.ulchrg;
                        data.hdays = _this.editForm.value.hdays;
                        data.hamt = _this.editForm.value.hamt;
                        data.bill_amt = _this.billNewAmount + _this.editForm.value.lchrg + _this.editForm.value.ulchrg + _this.editForm.value.hamt;
                        _this.toastr.success('Bill updated successfully.');
                    }, function (err) {
                        _this.loading = false;
                        data.editing = false;
                        _this.toastr.error('Something went wrong.');
                        console.log('>>>>>>err', err);
                    });
                }, function (err) {
                    _this.loading = false;
                    data.editing = false;
                    _this.toastr.error('Something went wrong.');
                    console.log('>>>>>>err', err);
                });
            }, function (err) {
                _this.loading = false;
                data.editing = false;
                _this.toastr.error('Something went wrong.');
                console.log('>>>>>>err', err);
            });
        }, function (err) {
            _this.loading = false;
            data.editing = false;
            _this.toastr.error('Something went wrong.');
            console.log('>>>>>>err', err);
        });
    };
    BillDetailsComponent.prototype.changeLChargeModalValue = function (data) {
        var _this = this;
        data.bill_amt = this.editForm.controls['lchrg'].value + this.editForm.controls['ulchrg'].value +
            this.editForm.controls['hamt'].value + this.billNewAmount;
        this.total = 0;
        this.billing_data.forEach(function (element) {
            _this.total += element.bill_amt;
        });
        this.cgst = (this.total * this.cgstGstPercentage) / 100;
        this.sgst = (this.total * this.sgstGstPercentage) / 100;
        this.igst = (this.total * this.igstGstPercentage) / 100;
        this.totalBillAmount = this.total + this.sgst + this.igst + this.cgst;
    };
    BillDetailsComponent.prototype.changeUlChargeModalValue = function (data) {
        var _this = this;
        data.bill_amt = this.editForm.controls['lchrg'].value + this.editForm.controls['ulchrg'].value +
            this.editForm.controls['hamt'].value + this.billNewAmount;
        this.total = 0;
        this.billing_data.forEach(function (element) {
            _this.total += element.bill_amt;
        });
        this.cgst = (this.total * this.cgstGstPercentage) / 100;
        this.sgst = (this.total * this.sgstGstPercentage) / 100;
        this.igst = (this.total * this.igstGstPercentage) / 100;
        this.totalBillAmount = this.total + this.sgst + this.igst + this.cgst;
    };
    BillDetailsComponent.prototype.changeHamtModalValue = function (data) {
        var _this = this;
        data.bill_amt = this.editForm.controls['lchrg'].value + this.editForm.controls['ulchrg'].value +
            this.editForm.controls['hamt'].value + this.billNewAmount;
        this.total = 0;
        this.billing_data.forEach(function (element) {
            _this.total += element.bill_amt;
        });
        this.cgst = (this.total * this.cgstGstPercentage) / 100;
        this.sgst = (this.total * this.sgstGstPercentage) / 100;
        this.igst = (this.total * this.igstGstPercentage) / 100;
        this.totalBillAmount = this.total + this.sgst + this.igst + this.cgst;
    };
    BillDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bill-details',
            template: __webpack_require__(/*! ./bill-details.component.html */ "./src/app/layout/site-management/component/bill-details/bill-details.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./bill-details.component.scss */ "./src/app/layout/site-management/component/bill-details/bill-details.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_1__["SiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], BillDetailsComponent);
    return BillDetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-management/component/billing/billing.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/site-management/component/billing/billing.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\">\r\n      <form>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4><i class=\"fa fa-truck\"></i> Billings</h4>\r\n            <hr />\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <!-- <ngb-pagination\r\n        [(page)]=\"pagination.currenPage\"\r\n        [pageSize]=\"pagination.pageSize\"\r\n        [collectionSize]=\"pagination.total\"\r\n        [maxSize]=\"pagination.maxSize\"\r\n        (pageChange)=\"fetchReport()\"\r\n      ></ngb-pagination>\r\n      <p><strong>Total:</strong> {{ pagination.total }}<br /><strong>Records per page:</strong> {{ pagination.pageSize }}</p> -->\r\n      <table class=\"table table-hover table-striped table-bordered table-condensed\">\r\n        <thead>\r\n          <tr>\r\n            <th>Site</th>\r\n            <th>Party Name</th>\r\n            <th>Bill No.</th>\r\n            <th>Bill Date</th>\r\n            <th>Records</th>\r\n            <th>Bill Amount</th>\r\n            <th>Actions</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"loading\">\r\n            <td colspan=\"4\">\r\n              <div class=\"showbox\">\r\n                <div class=\"loader\">\r\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let billing of billing_data\">\r\n            <td>{{ billing._id.site ? billing._id.site : '--' }}</td>\r\n            <td>{{ billing._id.accountname ? billing._id.accountname : '--' }}</td>\r\n            <td><a [routerLink]=\"['/site-management/bill-details', {billno: billing._id.billno, site: billing._id.site, accountname: billing._id.accountname}]\" [class.disabled]=\"!billing?._id.billno\">#{{ billing?._id.billno ? billing?._id.billno : '--' }}</a></td>\r\n            <td>{{ billing.billdate ? billing.billdate : '--' }}</td>\r\n            <td>{{ billing.count ? billing.count : '--' }}</td>\r\n            <td class=\"cell-align\">{{ (billing.total ? billing.total : 0) | number : '1.2-2' }}</td>\r\n            <td>\r\n              <button class=\"btn btn-danger\" (click)=\"delete(billing)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</button>\r\n            </td>\r\n          </tr>\r\n          <tr *ngIf=\"billing_data.length === 0\">\r\n            <td align=\"center\" colspan=\"3\">No data available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <!-- <ngb-pagination\r\n        [(page)]=\"pagination.currenPage\"\r\n        [pageSize]=\"pagination.pageSize\"\r\n        [collectionSize]=\"pagination.total\"\r\n        [maxSize]=\"pagination.maxSize\"\r\n        (pageChange)=\"fetchReport()\"\r\n      ></ngb-pagination> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/site-management/component/billing/billing.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/site-management/component/billing/billing.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th, td {\n  text-align: center; }\n\n.wrapper-table {\n  text-align: right; }\n\na.disabled {\n  pointer-events: none;\n  cursor: default; }\n\n.cell-align {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpdGUtbWFuYWdlbWVudC9jb21wb25lbnQvYmlsbGluZy9EOlxcdGVzdGluZ19mb2xkZXJcXHRoaXJ1XFxmcm9udGVuZFxcdGRfRnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcc2l0ZS1tYW5hZ2VtZW50XFxjb21wb25lbnRcXGJpbGxpbmdcXGJpbGxpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxvQkFBb0I7RUFDcEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NpdGUtbWFuYWdlbWVudC9jb21wb25lbnQvYmlsbGluZy9iaWxsaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgsIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndyYXBwZXItdGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbmEuZGlzYWJsZWQge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiB9XHJcblxyXG4uY2VsbC1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/site-management/component/billing/billing.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/site-management/component/billing/billing.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingComponent", function() { return BillingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/site.service */ "./src/app/shared/services/site.service.ts");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BillingComponent = /** @class */ (function () {
    function BillingComponent(toastr, site) {
        this.toastr = toastr;
        this.site = site;
        this.loading = false;
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.billing_data = [];
    }
    BillingComponent.prototype.ngOnInit = function () {
        this.fetchReport();
    };
    BillingComponent.prototype.fetchReport = function () {
        var _this = this;
        this.loading = true;
        this.site.getBillingRecords().subscribe(function (res) {
            _this.loading = false;
            res.forEach(function (element) {
                element.billdate = element.billdate === 'Invalid date' ? '--' : element.billdate;
            });
            _this.billing_data = res;
            _this.billing_data.forEach(function (element) {
                element.billdate = moment(element._id.billdate).format('DD/MM/YYYY');
            });
            console.log(_this.billing_data);
        }, function (err) {
            _this.loading = false;
        });
    };
    BillingComponent.prototype.delete = function (data) {
        var _this = this;
        console.log('Bill Data >>>>', data);
        var obj = {
            bill_no: data._id.billno,
            branch: data._id.site
        };
        var bill_obj = {
            bill_no: data._id.billno,
            site: data._id.site,
            accountname: data._id.accountname
        };
        var conf = confirm('Are you sure you want to delete this record ?');
        if (conf === true) {
            // this.loading = true;
            // this.loading = true;
            this.site.deleteLedgerByBillNumber(obj).subscribe(function (res) {
                _this.site.deleteBillByNumber(bill_obj).subscribe(function (res) {
                    _this.fetchReport();
                    _this.toastr.success('Bill deleted successfully.');
                    // this.loading = false;
                }, function (err) {
                    console.log('err >', err);
                    _this.toastr.error('Something went wrong.');
                    _this.loading = false;
                });
            }, function (err) {
                console.log('err >', err);
                _this.toastr.error('Something went wrong.');
                _this.loading = false;
            });
        }
    };
    BillingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billing',
            template: __webpack_require__(/*! ./billing.component.html */ "./src/app/layout/site-management/component/billing/billing.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./billing.component.scss */ "./src/app/layout/site-management/component/billing/billing.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_2__["SiteService"]])
    ], BillingComponent);
    return BillingComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-management/component/billty-entry/billty-entry.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/billty-entry/billty-entry.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <h3>Billty Print</h3>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <p>Notes</p>\r\n    <ul>\r\n      <li>In order to fetch lr numbers, Site name, lr from and lr to is required.</li>\r\n      <li>In order to plant print, Lr from and site name is required.</li>\r\n      <li>In order to print bcd, Lr from is required.</li>\r\n    </ul>  \r\n    <hr>\r\n    <form [formGroup]=\"billtyForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Site</label>\r\n            <select formControlName=\"site\" class=\"form-control\">\r\n              <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                {{ s.branch_name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Start Date</label>\r\n            <div class=\"input-group datepicker-input\">\r\n              <input\r\n                class=\"form-control\"\r\n                placeholder=\"dd/mm/yyyy\"\r\n                name=\"dp\"\r\n                formControlName=\"start_date\"\r\n                ngbDatepicker\r\n                #d=\"ngbDatepicker\" required\r\n              />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>End Date</label>\r\n            <div class=\"input-group datepicker-input\">\r\n              <input\r\n                class=\"form-control\"\r\n                placeholder=\"dd/mm/yyyy\"\r\n                name=\"dp2\"\r\n                formControlName=\"end_date\"\r\n                ngbDatepicker\r\n                #d1=\"ngbDatepicker\"\r\n              />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 mg-top-26\">\r\n          <button (click)=\"fetch()\" class=\"btn btn-warning\"><i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch Lr numbers</button>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <label>Lr number From</label>\r\n          <select formControlName=\"lrno_from\" class=\"form-control\">\r\n            <option *ngFor=\"let lr of lr_from\" value=\"{{ lr.lrno }}\">\r\n              {{ lr.lrno }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <label>Lr number To</label>\r\n          <select formControlName=\"lrno_to\" class=\"form-control\">\r\n            <option *ngFor=\"let lr of lr_to\" value=\"{{ lr.lrno }}\">\r\n              {{ lr.lrno }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n          <input type=\"checkbox\" (change)=\"changeStatus($event)\"> Print with Headers\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button type=\"button\" [disabled]=\"disable\" class=\"btn btn-success\" (click)=\"billtyTwo()\"> <i class=\"fa fa-print\" aria-hidden=\"true\"></i> Print BCD </button>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <button type=\"button\" [disabled]=\"disable\" class=\"btn btn-success\" (click)=\"billtyOne()\"> <i class=\"fa fa-print\" aria-hidden=\"true\"></i> Plant Print </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n    "

/***/ }),

/***/ "./src/app/layout/site-management/component/billty-entry/billty-entry.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/billty-entry/billty-entry.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mg-top-26 {\n  margin-top: 27px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpdGUtbWFuYWdlbWVudC9jb21wb25lbnQvYmlsbHR5LWVudHJ5L0Q6XFx0ZXN0aW5nX2ZvbGRlclxcdGhpcnVcXGZyb250ZW5kXFx0ZF9Gcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxzaXRlLW1hbmFnZW1lbnRcXGNvbXBvbmVudFxcYmlsbHR5LWVudHJ5XFxiaWxsdHktZW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLW1hbmFnZW1lbnQvY29tcG9uZW50L2JpbGx0eS1lbnRyeS9iaWxsdHktZW50cnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWctdG9wLTI2IHtcclxuICAgIG1hcmdpbi10b3A6IDI3cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/site-management/component/billty-entry/billty-entry.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/billty-entry/billty-entry.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BilltyEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BilltyEntryComponent", function() { return BilltyEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/site.service */ "./src/app/shared/services/site.service.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var momentTZ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
var BilltyEntryComponent = /** @class */ (function () {
    function BilltyEntryComponent(fb, toastr, router, meta, calendar, site) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.meta = meta;
        this.calendar = calendar;
        this.site = site;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].api_endpoint;
        this.filters = {
            'start_date': '',
            'end_date': '',
            'from_lrno': '',
            'to_lrno': '',
            'site_name': '',
            'flag': 0
        };
        this.loading = false;
        this.sites = [];
        this.lr_from = [];
        this.lr_to = [];
        this.disable = false;
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        this.billtyForm = this.fb.group({
            start_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_date: [''],
            lrno_from: [''],
            lrno_to: [''],
            site: ['']
        });
    }
    BilltyEntryComponent.prototype.ngOnInit = function () {
        this.billtyForm.controls['start_date'].setValue(this.calendar.getToday());
        this.billtyForm.controls['end_date'].setValue(this.calendar.getToday());
        this.getSites();
    };
    BilltyEntryComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.meta.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.sites = res;
            if (_this.usertype === 'ADMIN') {
                _this.billtyForm.controls['site'].setValue(_this.sites[0].branch_name);
                _this.fetch();
            }
            else {
                _this.billtyForm.controls['site'].setValue(_this.site_name);
                _this.fetch();
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    BilltyEntryComponent.prototype.changeStatus = function (event) {
        console.log('event >>>>', event.target.checked);
        if (event.target.checked) {
            this.filters.flag = 1;
        }
        else {
            this.filters.flag = 0;
        }
    };
    BilltyEntryComponent.prototype.billtyOne = function () {
        var _this = this;
        this.stDate = this.billtyForm.value.start_date;
        this.edDate = this.billtyForm.value.end_date;
        this.stDate = this.stDate.year + '-' + this.stDate.month + '-' + this.stDate.day;
        this.edDate = this.edDate.year + '-' + this.edDate.month + '-' + this.edDate.day;
        var sDate = moment(this.stDate, 'YYYY-MM-DD');
        var eDate = moment(this.edDate, 'YYYY-MM-DD');
        if (this.billtyForm.value.start_date) {
            this.filters.start_date = this.stDate;
        }
        else {
            this.filters.start_date = '';
        }
        if (this.billtyForm.value.end_date) {
            this.filters.end_date = this.edDate;
        }
        else {
            this.filters.end_date = '';
        }
        if (this.billtyForm.value.lrno_from) {
            this.filters.from_lrno = this.billtyForm.value.lrno_from;
        }
        else {
            this.filters.from_lrno = '';
        }
        if (this.billtyForm.value.lrno_to) {
            this.filters.to_lrno = this.billtyForm.value.lrno_to;
        }
        else {
            this.filters.to_lrno = '';
        }
        if (this.billtyForm.value.site) {
            this.filters.site_name = this.billtyForm.value.site;
        }
        else {
            this.filters.site_name = '';
        }
        var queryString = Object.keys(this.filters).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(_this.filters[key]);
        }).join('&');
        window.open(this.url + 'billty/print/one?' + queryString);
    };
    BilltyEntryComponent.prototype.billtyTwo = function () {
        var _this = this;
        if (this.billtyForm.value.lrno_from) {
            this.filters.from_lrno = this.billtyForm.value.lrno_from;
        }
        else {
            this.filters.from_lrno = '';
        }
        if (this.billtyForm.value.site) {
            this.filters.site_name = this.billtyForm.value.site;
        }
        else {
            this.filters.site_name = '';
        }
        delete this.filters.start_date;
        delete this.filters.end_date;
        delete this.filters.to_lrno;
        var queryString = Object.keys(this.filters).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(_this.filters[key]);
        }).join('&');
        window.open(this.url + 'billty/print/two?' + queryString);
    };
    BilltyEntryComponent.prototype.fetch = function () {
        var _this = this;
        if (this.billtyForm.controls['start_date'].valid) {
            var startDt = '';
            var endDt = '';
            if (this.billtyForm.controls['start_date'].value) {
                this.stDate = this.billtyForm.controls['start_date'].value.year + '-' +
                    this.billtyForm.controls['start_date'].value.month + '-' +
                    this.billtyForm.controls['start_date'].value.day;
            }
            else {
                this.stDate = '';
            }
            if (this.billtyForm.controls['end_date'].value) {
                this.edDate = this.billtyForm.controls['end_date'].value.year + '-' +
                    this.billtyForm.controls['end_date'].value.month + '-' +
                    (this.billtyForm.controls['end_date'].value.day);
            }
            else {
                this.edDate = '';
            }
            // this.stDate = this.billtyForm.value.start_date;
            // this.edDate = this.billtyForm.value.end_date;
            // this.stDate = this.stDate.year + '-' + this.stDate.month + '-' + this.stDate.day;
            // this.edDate = this.edDate.year + '-' + this.edDate.month + '-' + this.edDate.day;
            var sDate = moment(this.stDate, 'YYYY-MM-DD');
            var eDate = moment(this.edDate, 'YYYY-MM-DD');
            // this.stDate = momentTZ(this.billtyForm.value.start_date, 'YYYY-MM-DD').tz('Asia/Calcutta').format('YYYY-MM-DD');
            // this.edDate = momentTZ(this.billtyForm.value.end_date, 'YYYY-MM-DD').tz('Asia/Calcutta').format('YYYY-MM-DD');
            // const sDate = new Date(this.stDate);
            // const eDate = new Date(this.edDate);
            // sDate.setUTCHours(00,00,00,000);
            // eDate.setUTCHours(23,59,59,999);
            if (sDate <= eDate) {
                if (this.billtyForm.value.start_date) {
                    this.filters.start_date = this.stDate;
                }
                else {
                    this.filters.start_date = '';
                }
                if (this.billtyForm.value.end_date) {
                    this.filters.end_date = this.edDate;
                }
                else {
                    this.filters.end_date = '';
                }
                if (this.billtyForm.value.site) {
                    this.filters.site_name = this.billtyForm.value.site;
                }
                else {
                    this.filters.site_name = '';
                }
                this.filters.from_lrno = '';
                this.filters.to_lrno = '';
                this.site.getLrNumber(this.filters).subscribe(function (res) {
                    _this.lr_from = res.result;
                    _this.lr_to = res.result;
                    if (_this.lr_from.length > 0) {
                        _this.billtyForm.controls['lrno_from'].setValue(_this.lr_from[0].lrno);
                        _this.billtyForm.controls['lrno_to'].setValue(_this.lr_to[0].lrno);
                        _this.disable = false;
                    }
                    else {
                        _this.billtyForm.controls['lrno_from'].setValue('');
                        _this.billtyForm.controls['lrno_to'].setValue('');
                        _this.disable = true;
                    }
                }, function (err) {
                    _this.toastr.error('Something went wrong, While fetching billty records.');
                });
            }
            else {
                this.toastr.error('Start date cannot be greater then end date.');
            }
        }
        else {
            this.toastr.error('Please select start date.');
        }
    };
    BilltyEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billty-entry',
            template: __webpack_require__(/*! ./billty-entry.component.html */ "./src/app/layout/site-management/component/billty-entry/billty-entry.component.html"),
            styles: [__webpack_require__(/*! ./billty-entry.component.scss */ "./src/app/layout/site-management/component/billty-entry/billty-entry.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__["MetaService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCalendar"],
            src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_4__["SiteService"]])
    ], BilltyEntryComponent);
    return BilltyEntryComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-management/component/dashboard/dashboard.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/dashboard/dashboard.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <strong>Dashboard</strong>      \r\n    </div>\r\n  \r\n    <div class=\"animated fadeIn\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg\">\r\n          <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                  <table class=\"table tableFixHead mytable\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th>Name</th>\r\n                          <th>Expired</th>\r\n                          <th>0-20 Days</th>\r\n                          <th>21-40 Days</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n<!--   \r\n                        <tr *ngFor= \"let data of dataList.result; let i = index\">  \r\n                          <td>{{data.date ? data.date : '--'}}</td>\r\n                          <td>{{data.tyre_type ? data.tyre_type : '--'}}</td>\r\n                          <td>{{data.tyre_no ? data.tyre_no : '--'}}</td>\r\n                          <td>{{data.purchase_date ? data.purchase_date : '--'}}</td>\r\n                          <td>{{data.company_name ? data.company_name : '--'}}</td>\r\n                          <td>{{data.brand ? data.brand : '--'}}</td>\r\n                          <td>{{data.tyre_size ? data.tyre_size : '--'}}</td>\r\n                          <td>{{data.nsd ? data.nsd : '--'}}</td>\r\n                          <td>{{data.retarding ? data.retarding : '--'}}</td> -->\r\n                          \r\n  \r\n                          <!-- <td><button class=\"btn btn-primary\" (click)=\"edit(data)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit</button>&nbsp;</td>\r\n                          <td>\r\n                            <button class=\"btn btn-danger\" (click)=\"delete(data, i)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</button>\r\n                          </td> -->\r\n                        <!-- </tr> -->\r\n                      </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/layout/site-management/component/dashboard/dashboard.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/dashboard/dashboard.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLW1hbmFnZW1lbnQvY29tcG9uZW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/site-management/component/dashboard/dashboard.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/site-management/component/dashboard/dashboard.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/layout/site-management/component/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/layout/site-management/component/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-management/component/edit-billty-dataentry/edit-billty-dataentry.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/edit-billty-dataentry/edit-billty-dataentry.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"bdeForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Edit Billty Entry</div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\">\n              <ngb-tabset>\n                <ngb-tab title=\"Data Entry\">\n                  <ng-template ngbTabContent>\n                    <br>\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <h4><i class=\"fa fa-truck\"></i> Billty Data Entry</h4>\n                          <hr />\n                        </div>\n                        <div class=\"col-md-3\">\n                          <label class=\"required\">Site</label>\n                          <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n                            formControlName=\"site\" class=\"auto-entry\">\n                          </ng-select>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Lr Date</label>\n                            <div class=\"input-group datepicker-input\">\n                              <input\n                                class=\"form-control auto-entry\"\n                                placeholder=\"dd/mm/yyyy\"\n                                formControlName=\"lrdate\"\n                                name=\"dp\"\n                                ngbDatepicker\n                                #d=\"ngbDatepicker\"\n                              />\n                              <div class=\"input-group-append\">\n                                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\n                                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Invoice No</label>\n                            <input type=\"text\" formControlName=\"newinvoiceno\"  class=\"form-control manual-entry\" placeholder=\"Invoice No\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Invoice Date</label>\n                            <div class=\"input-group datepicker-input\">\n                              <input\n                                class=\"form-control manual-entry\"\n                                placeholder=\"dd/mm/yyyy\"\n                                formControlName=\"newinvoicedate\"\n                                name=\"dp\"\n                                ngbDatepicker\n                                #id=\"ngbDatepicker\"\n                              />\n                              <div class=\"input-group-append\">\n                                <button class=\"btn btn-outline-secondary calendar\" (click)=\"id.toggle()\" type=\"button\">\n                                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                          <div class=\"form-group\">\n                            <label>Gate Pass / Di Number</label>\n                            <input type=\"text\" formControlName=\"newgatepass\" class=\"form-control manual-entry\" placeholder=\"Gate Pass / Di Number\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-5\">\n                          <label class=\"required\">Consignee</label>\n                          <ng-select [items]=\"consignee_options\" placeholder=\"Type and search Consignee\" bindLabel=\"name\" bindValue=\"name\"\n                            formControlName=\"consignne\" class=\"manual-entry\">\n                          </ng-select>\n                        </div>\n                        <div class=\"col-md-5\">\n                          <div class=\"form-group\">\n                            <label>Unloading Address</label>\n<!--                             <input type=\"text\" formControlName=\"unloadingaddress\" class=\"form-control\" placeholder=\"Unloading Address\">\n -->                            <ng-select [items]=\"unloading_addresses\" placeholder=\"Type and search Address\"\n                            formControlName=\"unloadingaddress\" class=\"manual-entry\">\n                          </ng-select>\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                          <label class=\"required\">To Destination</label>\n                          <ng-select [items]=\"tos\" placeholder=\"Type and search Destination\" bindLabel=\"name\" bindValue=\"name\"\n                            formControlName=\"to\" class=\"manual-entry\">\n                          </ng-select>\n                        </div>\n\n                        <!-- <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Manual </label>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\" formControlName=\"mannualtodest\" >\n                                    Display All Destination?\n                                </label>\n                            </div>\n                              </div>\n                        </div> -->\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label class=\"required\">Km</label>\n                            <input type=\"text\" formControlName=\"newkm\" class=\"form-control auto-entry\" placeholder=\"KM\">\n                          </div>\n                        </div>\n\n\n                        <div class=\"col-md-3\">\n                          <label>Petrol Pump Name</label>\n                          <ng-select [items]=\"diesalaccountname_options\" placeholder=\"Type and search\" bindLabel=\"accountname\" bindValue=\"accountname\"\n                            formControlName=\"diesalaccountname\" class=\"manual-entry\">\n                          </ng-select>\n                        </div>\n\n                        <!-- <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Manual Petrol Pump </label>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\" formControlName=\"mannualpetrolpump\" >\n                                    Change Petrol Pump .?\n                                  </label>\n                            </div>\n                              </div>\n                        </div> -->\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Diesal Rate</label>\n                            <input type=\"number\" formControlName=\"drate\" class=\"form-control auto-entry\" placeholder=\"Diesal Rate\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                          <label>Grade</label>\n                          <select class=\"form-control auto-entry\" formControlName=\"grade\">\n                            <option value=\"\">Select Grade</option>\n                            <option value=\"\">None</option>\n                            <option value=\"Trade\">Trade</option>\n                            <option value=\"Non Trade\">Non Trade</option>\n                            <option value=\"Bulker\">Bulker</option>\n                          </select>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Party Rate</label>\n                            <input type=\"number\" formControlName=\"newrate\" class=\"form-control auto-entry\" placeholder=\"Rate\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Transporter Rate</label>\n                            <input type=\"text\" formControlName=\"rate\" class=\"form-control auto-entry\" placeholder=\"Rate\">\n                          </div>\n                        </div>\n\n                      </div>\n\n                      <br>\n                      <div class=\"row\">\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label class=\"required\">Select Lr. No</label>\n                              <ng-select [items]=\"lrNos\" placeholder=\"Type and search lrNos\"\n                                  formControlName=\"tplrno\" class=\"manual-entry\">\n                              </ng-select>\n                           </div>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Manual </label>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\" formControlName=\"mannual\" >\n                                    Change Lr No.?\n\n                                </label>\n                            </div>\n                              </div>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label  class=\"required\">Lr. No</label>\n                            <input type=\"text\" *ngIf=\"!lrField\" disabled formControlName=\"lrno\" class=\"form-control auto-entry\" placeholder=\"Lr.No\">\n                            <input type=\"text\" *ngIf=\"lrField\" formControlName=\"lrno\" class=\"form-control auto-entry\" placeholder=\"Lr.No\">\n                          </div>\n                        </div>\n\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Truck Expences</label>\n                            <input type=\"text\" *ngIf=\"!teField\" disabled formControlName=\"truckexpences\" class=\"form-control auto-entry\" placeholder=\"Truck Expences\">\n                            <input type=\"text\" *ngIf=\"teField\" formControlName=\"truckexpences\" class=\"form-control auto-entry\" placeholder=\"Truck Expences\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Manual Truck Expences </label>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\" formControlName=\"mannualroadexp\" >\n                                    Change Truck Expences .?\n                                  </label>\n                            </div>\n                              </div>\n                        </div>\n\n                      </div>\n\n                      <br>\n                      <div class=\"row\">\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Diesal Qty</label>\n                            <input type=\"number\" *ngIf=\"!dqField\" disabled formControlName=\"dqty\" class=\"form-control auto-entry\" placeholder=\"Diesal Qty\">\n                            <input type=\"number\" *ngIf=\"dqField\" formControlName=\"dqty\" class=\"form-control auto-entry\" placeholder=\"Diesal Qty\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Manual Diesal Qty</label>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\" formControlName=\"mannualdqty\" >\n                                    Change Diesal Qty.?\n                                </label>\n                            </div>\n                              </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label class=\"required\">Actual Wt.</label>\n                            <input type=\"text\" formControlName=\"actualweight\"  class=\"form-control manual-entry\" placeholder=\"Actual Weight\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label>Manual Actual Weight</label>\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\" formControlName=\"mannualaweight\" >\n                                    Change Actual Weight ?\n                                </label>\n                            </div>\n                              </div>\n                        </div>\n\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label class=\"required\">Trans. Charged Wt.</label>\n                            <input type=\"text\" formControlName=\"cweight\" class=\"form-control auto-entry\" placeholder=\"Charged Weight\">\n                          </div>\n                        </div>\n\n                      </div>\n                      <div class=\"col-md-12\">\n                        <h4><i class=\"fa fa-truck\"></i> Billty Details</h4>\n                        <hr />\n                      </div>\n                      <div class=\"row\">\n\n\n                        <div class=\"col-md-3\">\n                          <label class=\"required\">Consignor</label>\n                          <ng-select [items]=\"consignor_options\" class=\"auto-entry\" placeholder=\"Type and search Consignor\" bindLabel=\"accountname\" bindValue=\"accountname\"\n                            formControlName=\"consigner\">\n                          </ng-select>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                          <div class=\"form-group\">\n                            <label>Contact Person</label>\n                            <input type=\"text\" formControlName=\"contactperson\" class=\"form-control auto-entry\" placeholder=\"Contack Person\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                          <div class=\"form-group\">\n                            <label>Phone No</label>\n                            <input type=\"text\" formControlName=\"phoneno\" class=\"form-control auto-entry\" placeholder=\"Phone No\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                          <label class=\"required\">From Destination</label>\n                          <ng-select [items]=\"froms\" class=\"auto-entry\" placeholder=\"Type and search Destination\" bindLabel=\"name\" bindValue=\"name\"\n                            formControlName=\"from\">\n                          </ng-select>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                          <label class=\"required\">Contains</label>\n                          <ng-select [items]=\"contains\" placeholder=\"Type and seach Contains\" bindLabel=\"name\" bindValue=\"name\"\n                            formControlName=\"contains\" class=\"auto-entry\">\n                          </ng-select>\n                        </div>\n                        <div class=\"col-md-3\">\n                          <label class=\"required\">Unit</label>\n                          <ng-select [items]=\"units\" placeholder=\"Type and search Destination\" bindLabel=\"name\" bindValue=\"name\"\n                            formControlName=\"unit\" class=\"auto-entry\">\n                          </ng-select>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                          <label class=\"required\">Product</label>\n                          <select class=\"form-control auto-entry\" formControlName=\"product\">\n                            <option value=\"\">Select Product</option>\n                            <option value=\"Bag\">Bag</option>\n                            <option value=\"Bulk\">Bulk</option>\n                            <option value=\"Clinker\">Clinker</option>\n                            <option value=\"Gypsum\">Gypsum</option>\n                          </select>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                          <div class=\"form-group\">\n                            <label>Packages</label>\n                            <input type=\"text\" formControlName=\"packages\" class=\"form-control auto-entry\" placeholder=\"Packages\">\n                          </div>\n                        </div>\n\n                      </div>\n\n                  </ng-template>\n                </ngb-tab>\n\n                  <ngb-tab title=\"Party Details\">\n                    <ng-template ngbTabContent>\n                      <br>\n\n                      <div class=\"col-md-12\">\n                        <h4><i class=\"fa fa-truck\"></i> Party Details</h4>\n                        <hr />\n                      </div>\n\n                      <div class=\"row\">\n                        <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                            <div class=\"row\">\n                              <div class=\"col-md-3\">\n                                <label class=\"required\">Payment Mode</label>\n                                <select class=\"form-control manual-entry\" formControlName=\"ppaymentmode\">\n                                  <option value=\"\">Select Payment Mode</option>\n                                  <option value=\"To Be Billed\">To Be Billed</option>\n                                  <option value=\"To Pay\">To Pay</option>\n                                  <option value=\"Paid\">Paid</option>\n                                </select>\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Unloading Date</label>\n                                  <div class=\"input-group datepicker-input\">\n                                    <input\n                                      class=\"form-control manual-entry\"\n                                      placeholder=\"dd/mm/yyyy\"\n                                      formControlName=\"unloadingdate\"\n                                      name=\"dp\"\n                                      ngbDatepicker\n                                      #uld=\"ngbDatepicker\"\n                                    />\n                                    <div class=\"input-group-append\">\n                                      <button class=\"btn btn-outline-secondary calendar\" (click)=\"uld.toggle()\" type=\"button\">\n                                        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                      </button>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n\n\n                              <div class=\"col-md-3\">\n                                <label class=\"required\">Calculated By</label>\n                                <select class=\"form-control manual-entry\" formControlName=\"calculatedweight\">\n                                  <option value=\"\">Select Calculated By</option>\n                                  <option value=\"Weight\">Weight</option>\n                                  <option value=\"Quantity\">Quantity</option>\n                                </select>\n                              </div>\n\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Amount</label>\n                                  <input type=\"number\" formControlName=\"newamount\" class=\"form-control auto-entry\" placeholder=\"Amount\">\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Fm No.</label>\n                                  <input type=\"text\" formControlName=\"fmno\" class=\"form-control manual-entry\" placeholder=\"FM No\">\n                                </div>\n                              </div>\n\n\n                              <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Order No</label>\n                                    <input type=\"text\" formControlName=\"ordername\" class=\"form-control manual-entry\" placeholder=\"Order no\">\n                                  </div>\n                                </div>\n\n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Loading Date</label>\n                                    <div class=\"input-group datepicker-input\">\n                                      <input\n                                        class=\"form-control manual-entry\"\n                                        placeholder=\"dd/mm/yyyy\"\n                                        formControlName=\"loadingdate\"\n                                        name=\"dp\"\n                                        ngbDatepicker\n                                        #ld=\"ngbDatepicker\"\n                                      />\n                                      <div class=\"input-group-append\">\n                                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"ld.toggle()\" type=\"button\">\n                                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                        </button>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          <hr>\n                        </div>\n                        <div class=\"col-md-12\">\n                          <h4><i class=\"fa fa-truck\"></i> Party Advance</h4>\n                          <hr />\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                              <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Advance Date</label>\n                                    <div class=\"input-group datepicker-input\">\n                                      <input\n                                        class=\"form-control manual-entry\"\n                                        placeholder=\"dd/mm/yyyy\"\n                                        formControlName=\"padate\"\n                                        name=\"dp\"\n                                        ngbDatepicker\n                                        #ad=\"ngbDatepicker\"\n                                      />\n                                      <div class=\"input-group-append\">\n                                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"ad.toggle()\" type=\"button\">\n                                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                        </button>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n\n                                <div class=\"col-md-3\">\n                                  <label>Receipt Type</label>\n                                  <ng-select [items]=\"receipttype_options\" placeholder=\"Type and search\" bindLabel=\"name\" bindValue=\"name\"\n                                    formControlName=\"papaymenttype\" class=\"manual-entry\">\n                                  </ng-select>\n                                </div>\n\n                                <div class=\"col-md-3\">\n                                  <label>Receipt Mode</label>\n                                  <ng-select [items]=\"receiptmode_options\" placeholder=\"Type and search\" bindLabel=\"accountname\" bindValue=\"accountname\"\n                                    formControlName=\"papaymentmode\" class=\"manual-entry\">\n                                  </ng-select>\n                                </div>\n\n\n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Advance Amount</label>\n                                    <input type=\"text\" formControlName=\"padvance\" class=\"form-control manual-entry\" placeholder=\"Advance Amount\">\n                                  </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Remarks</label>\n                                    <input type=\"text\" formControlName=\"paremarks\" class=\"form-control manual-entry\" placeholder=\"Remarks\">\n                                  </div>\n                                </div>\n                              </div>\n                            <hr>\n                          </div>\n                        </div>\n                        <br>\n                        <div class=\"col-md-12\">\n                          <h4><i class=\"fa fa-truck\"></i> Bill Details</h4>\n                          <hr />\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                            <div class=\"row\">\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Bill No</label>\n                                  <input type=\"text\" formControlName=\"billno\" class=\"form-control auto-entry\" placeholder=\"Bill No\">\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Bill Date</label>\n                                  <div class=\"input-group datepicker-input\">\n                                    <input\n                                      class=\"form-control auto-entry\"\n                                      placeholder=\"dd/mm/yyyy\"\n                                      formControlName=\"billdate\"\n                                      name=\"dp\"\n                                      ngbDatepicker\n                                      #bd=\"ngbDatepicker\"\n                                    />\n                                    <div class=\"input-group-append\">\n                                      <button class=\"btn btn-outline-secondary calendar\" (click)=\"bd.toggle()\" type=\"button\">\n                                        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                      </button>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Bill Remarks</label>\n                                  <input type=\"text\" formControlName=\"billremarks\" class=\"form-control auto-entry\" placeholder=\"Bill Remarks\">\n                                </div>\n                              </div>\n                            </div>\n\n                          </div>\n                        </div>\n\n\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Transporter Details\">\n                    <ng-template ngbTabContent>\n                      <br>\n                      <div class=\"row\">\n                        <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                            <div class=\"col-md-12\">\n                              <h4><i class=\"fa fa-truck\"></i> Transporter Details</h4>\n                              <hr />\n                            </div>\n\n                            <div class=\"row\">\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Sr.No</label>\n                                  <input type=\"text\" formControlName=\"srno\" class=\"form-control auto-entry\" placeholder=\"Sr.No\">\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <label class=\"required\">Vehicle type</label>\n                                <select class=\"form-control auto-entry\" formControlName=\"vehicletype\">\n                                  <option value=\"\">Select Vehicle type</option>\n                                  <option value=\"Company\">Company</option>\n                                  <option value=\"Attached\">Attached</option>\n                                </select>\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label class=\"required\">Truck No</label>\n                                  <input type=\"text\" formControlName=\"truckno\" class=\"form-control auto-entry\" placeholder=\"Truck No\">\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Broker Name</label>\n                                  <input type=\"text\" formControlName=\"brokername\" class=\"form-control manual-entry\" placeholder=\"Broker Name\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Driver Name</label>\n                                  <input type=\"text\" formControlName=\"drivername\" class=\"form-control auto-entry\" placeholder=\"Driver Name\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Id No</label>\n                                  <input type=\"text\" formControlName=\"idno\" class=\"form-control manual-entry\" placeholder=\"Id No\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Owner Name</label>\n                                  <input type=\"text\" formControlName=\"ownername\" class=\"form-control auto-entry\" placeholder=\"Owner Name\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Pan Number</label>\n                                  <input type=\"text\" formControlName=\"panno\" class=\"form-control auto-entry\" placeholder=\"Pan Number\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>SPI</label>\n                                  <input type=\"text\" formControlName=\"spi\" class=\"form-control auto-entry\" placeholder=\"SPI\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Tyre</label>\n                                  <input type=\"text\" formControlName=\"tyre\" class=\"form-control auto-entry\" placeholder=\"Tyre\">\n                                </div>\n                              </div>\n\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Amount</label>\n                                  <input type=\"text\" formControlName=\"vamount\" class=\"form-control auto-entry\" placeholder=\"Amount\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Payment Charge</label>\n                                  <input type=\"text\" formControlName=\"paymentcharge\" class=\"form-control auto-entry\" placeholder=\"Payment Charge\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Final Amount</label>\n                                  <input type=\"text\" formControlName=\"finalamount\" class=\"form-control auto-entry\" placeholder=\"Type\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Truck Km Reading</label>\n                                  <input type=\"text\" formControlName=\"tkmr\" class=\"form-control auto-entry\" placeholder=\"Truck Km Reading\">\n                                </div>\n                              </div>\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Truck Carring Capacity</label>\n                                  <input type=\"text\" formControlName=\"tcc\" class=\"form-control auto-entry\" placeholder=\"Truck Carring Capacity\">\n                                </div>\n                              </div>\n\n                            </div>\n\n                            <div class=\"col-md-12\">\n                              <h4><i class=\"fa fa-truck\"></i> Diesal Expences Details</h4>\n                              <hr />\n                            </div>\n                            <div class=\"row\">\n                              <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                                  <div class=\"row\">\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>Date</label>\n                                        <div class=\"input-group datepicker-input\">\n                                          <input\n                                            class=\"form-control manual-entry\"\n                                            placeholder=\"dd/mm/yyyy\"\n                                            formControlName=\"diesaldate\"\n                                            name=\"dp\"\n                                            ngbDatepicker\n                                            #dd=\"ngbDatepicker\"\n                                          />\n                                          <div class=\"input-group-append\">\n                                            <button class=\"btn btn-outline-secondary calendar\" (click)=\"dd.toggle()\" type=\"button\">\n                                              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                            </button>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n\n                                    <div class=\"col-md-3\">\n                                      <label >Payment Type</label>\n                                      <select class=\"form-control manual-entry\" formControlName=\"dtransactiontype\">\n                                        <option value=\"\">Select Payment Type</option>\n                                        <option value=\"Cash\">Cash</option>\n                                        <option value=\"Credit\">Credit</option>\n                                        <option value=\"Card\">Card</option>\n                                      </select>\n                                    </div>\n\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>Amount</label>\n                                        <input type=\"number\" formControlName=\"damount\" class=\"form-control auto-entry\" placeholder=\"Diesal Amount\">\n                                      </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>Slip No</label>\n                                        <input type=\"number\" formControlName=\"dslipno\" class=\"form-control manual-entry\" placeholder=\"Slip No\">\n                                      </div>\n                                    </div>\n                                  </div>\n                                <hr>\n                              </div>\n                            </div>\n\n                            <div class=\"col-md-12\">\n                              <h4><i class=\"fa fa-truck\"></i> Road Expences Details</h4>\n                              <hr />\n                            </div>\n\n                            <div class=\"row\">\n                              <!-- <div class=\"col-md-12\"> -->\n                              <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                                <div class=\"card\">\n                                  <div class=\"card-header\">\n                                    Road Expences Details\n                                    <button class=\"btn btn-primary float-right\" (click)=\"addTcmitems()\" [disabled]=\"!bdeForm.valid\"\n                                      type=\"button\">\n                                      Add Expences\n                                    </button>\n                                  </div>\n                                  <!-- /.box-header -->\n                                  <div class=\"card-body\" *ngIf=\"bdeForm.controls.transactiondetails.controls.length > 0\" style=\"width:100% !important;overflow: auto !important;\">\n                                    <table class=\"table table-bordered\" formArrayName=\"transactiondetails\">\n                                      <tr>\n                                        <th>Date</th>\n                                        <th>Transaction Type</th>\n                                        <th>Account Name</th>\n                                        <th>Amount</th>\n                                        <th>Payment Type</th>\n                                        <th>Payment Mode</th>\n                                        <th>Remarks</th>\n                                        <th>Action</th>\n                                      </tr>\n                                      <tr *ngFor=\"let school of bdeForm.controls.transactiondetails.controls; let i=index\" formGroupName=\"{{i}}\">\n                                        <td>\n                                          <input type=\"date\" formControlName=\"date\" style=\"width:170px !important;\"\n                                            class=\"form-control auto-entry\">\n                                        </td>\n                                        <td>\n                                          <div class=\"input-group\">\n                                            <select class=\"form-control auto-entry\" formControlName=\"accounttype\" style=\"width:150px !important;\">\n                                              <!-- <option value=\"Advance\">Advance</option> -->\n                                              <option *ngFor=\"let tt of tran_type\" value=\"{{ tt.name }}\">\n                                                {{ tt.name }}\n                                              </option>\n                                            </select>\n                                            </div>\n                                          </td>\n\n                                        <td>\n                                          <div class=\"input-group\">\n                                            <select class=\"form-control auto-entry\" formControlName=\"accountname\" style=\"width:150px !important;\">\n                                              <option *ngFor=\"let an of roadexpaccountname_options\" [value]=\"an.accountname\"> {{an.accountname}}</option>\n                                            </select>\n                                          </div>\n                                        </td>\n\n\n                                        <td style=\"width:100px !important;\">\n                                          <input type=\"number\" min=\"0\" formControlName=\"amount\"\n                                            class=\"form-control auto-entry\" style=\"width:90px !important;\">\n                                        </td>\n                                        <td>\n                                          <div class=\"input-group\">\n                                            <select class=\"form-control manual-entry\" formControlName=\"paymenttype\" style=\"width:150px !important;\">\n                                              <option value=\"\">Select type</option>\n                                              <option value=\"Bank to Bank\">Bank to Bank</option>\n                                              <option value=\"Cash\">Cash</option>\n                                              <option value=\"Cheque\">Cheque</option>\n                                              <option value=\"Credit\">Credit</option>\n                                              <option value=\"Imps\">Imps</option>\n                                              <option value=\"Internal Transfer\">Internal Transfer</option>\n                                              <option value=\"Neft\">Neft</option>\n                                              <option value=\"Rtgs\">Rtgs</option>\n                                            </select>\n                                          </div>\n                                        </td>\n                                        <td>\n                                          <!-- <input type=\"text\" formControlName=\"paymentmode\"\n                                            class=\"form-control\"> -->\n                                              <ng-select [items]=\"paymentmode_options\" placeholder=\"Type and search\" style=\"width:250px !important;\" bindLabel=\"accountname\" bindValue=\"accountname\"\n                                                formControlName=\"paymentmode\" class=\"manual-entry\">\n                                              </ng-select>\n\n\n                                          </td>\n                                        <td>\n                                          <input type=\"text\" formControlName=\"remark\"\n                                            class=\"form-control manual-entry\">\n                                        </td>\n\n                                        <td>\n                                          <button class=\"btn btn-danger float-right\" [disabled]=\"bdeForm.controls?.transactiondetails.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\n                                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                          </button>\n                                        </td>\n                                      </tr>\n                                    </table>\n                                  </div>\n                                  <div class=\"card-body\" *ngIf=\"bdeForm.controls?.transactiondetails.controls.length == 0\">\n                                    <p>Please select vendor</p>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <br>\n\n                            <br>\n\n                            <div class=\"col-md-12\">\n                              <h4><i class=\"fa fa-truck\"></i> Truck Expences</h4>\n                              <hr />\n                            </div>\n                            <div class=\"row\">\n                              <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                                  <div class=\"row\">\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>Unloading Expences</label>\n                                        <input type=\"text\" formControlName=\"unloadingexpences\" class=\"form-control manual-entry\" placeholder=\"Unloading Expences\">\n                                      </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                      <label class=\"required\">Unloading Type</label>\n                                      <select class=\"form-control manual-entry\" formControlName=\"unloadingtype\">\n                                        <option value=\"\">Select Unloading Type</option>\n                                        <option value=\"Per MT\">Per MT</option>\n                                        <option value=\"Fix\">Fix</option>\n                                      </select>\n                                    </div>\n\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>Actual Unloading Expences</label>\n                                        <input type=\"number\" formControlName=\"actualexpences\" class=\"form-control manual-entry\" placeholder=\"Actual Unloading Expences\">\n                                      </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>Total Truck Expences</label>\n                                        <input type=\"number\" formControlName=\"totaltruckexpences\" class=\"form-control auto-entry\" placeholder=\"Total Truck Expences\">\n                                      </div>\n                                    </div>\n                                  </div>\n                                <!-- </form> -->\n                                <hr>\n                              </div>\n                            </div>\n                            <br>\n                            <br>\n                            <div class=\"col-md-12\">\n                              <h4><i class=\"fa fa-truck\"></i> Pod / Bill / Unloading Details</h4>\n                              <hr />\n                            </div>\n\n                            <div class=\"row\">\n                              <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                                  <div class=\"row\">\n                                  <div class=\"col-md-3\">\n                                    <div class=\"form-group\">\n                                      <label>POD Date</label>\n                                      <div class=\"input-group datepicker-input\">\n                                        <input\n                                          class=\"form-control auto-entry\"\n                                          placeholder=\"dd/mm/yyyy\"\n                                          formControlName=\"poddate\"\n                                          name=\"dp\"\n                                          ngbDatepicker\n                                          #pod=\"ngbDatepicker\"\n                                        />\n                                        <div class=\"input-group-append\">\n                                          <button class=\"btn btn-outline-secondary calendar\" (click)=\"pod.toggle()\" type=\"button\">\n                                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                          </button>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n\n\n\n                                    <div class=\"col-md-3\">\n                                      <label>POD Pending</label>\n                                      <select class=\"form-control auto-entry\" formControlName=\"podpendings\">\n                                        <option value=\"YES\">YES</option>\n                                        <option value=\"NO\">NO</option>\n                                      </select>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                      <label>POD Ok</label>\n                                      <select class=\"form-control auto-entry\" formControlName=\"podok\">\n                                        <option value=\"YES\">OK</option>\n                                        <option value=\"NO\">NOT OK</option>\n                                      </select>\n                                    </div>\n\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>POD Remarks</label>\n                                        <input type=\"text\" formControlName=\"podremarks\" class=\"form-control auto-entry\" placeholder=\"POD Remarks\">\n                                      </div>\n                                    </div>\n\n                                  </div>\n                                <hr>\n                              </div>\n                            </div>\n                          <hr>\n                        </div>\n                      </div>\n                    </ng-template>\n                  </ngb-tab>\n\n                </ngb-tabset>\n          </div>\n        </div>\n\n        </div>\n      </div>\n      <div class=\"card-footer\">\n         <button class=\"btn btn-success float-right\" [disabled]=\"!bdeForm.valid || process == 'saving'\" (click)=\"saveupdate()\"  type=\"button\">\n          Update <i *ngIf=\"process == 'saving'\"  class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/site-management/component/edit-billty-dataentry/edit-billty-dataentry.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/edit-billty-dataentry/edit-billty-dataentry.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auto-entry {\n  border: 2px solid #fcbd47 !important; }\n\n.manual-entry {\n  border: 2px solid #51cc51 !important; }\n\n::ng-deep .ng-select.manual-entry {\n  border: 2px solid #51cc51 !important; }\n\n::ng-deep .ng-select.auto-entry {\n  border: 2px solid #fcbd47 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpdGUtbWFuYWdlbWVudC9jb21wb25lbnQvZWRpdC1iaWxsdHktZGF0YWVudHJ5L0Q6XFx0ZXN0aW5nX2ZvbGRlclxcdGhpcnVcXGZyb250ZW5kXFx0ZF9Gcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxzaXRlLW1hbmFnZW1lbnRcXGNvbXBvbmVudFxcZWRpdC1iaWxsdHktZGF0YWVudHJ5XFxlZGl0LWJpbGx0eS1kYXRhZW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBNkMsRUFBQTs7QUFHL0M7RUFDRSxvQ0FBNEMsRUFBQTs7QUFHOUM7RUFDRSxvQ0FBNEMsRUFBQTs7QUFHOUM7RUFDRSxvQ0FBNkMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLW1hbmFnZW1lbnQvY29tcG9uZW50L2VkaXQtYmlsbHR5LWRhdGFlbnRyeS9lZGl0LWJpbGx0eS1kYXRhZW50cnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0by1lbnRyeXtcclxuICBib3JkZXI6MnB4IHNvbGlkIHJnYigyNTIsIDE4OSwgNzEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYW51YWwtZW50cnl7XHJcbiAgYm9yZGVyOjJweCBzb2xpZCByZ2IoODEsIDIwNCwgODEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmctc2VsZWN0Lm1hbnVhbC1lbnRyeXtcclxuICBib3JkZXI6MnB4IHNvbGlkIHJnYig4MSwgMjA0LCA4MSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5uZy1zZWxlY3QuYXV0by1lbnRyeXtcclxuICBib3JkZXI6MnB4IHNvbGlkIHJnYigyNTIsIDE4OSwgNzEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/site-management/component/edit-billty-dataentry/edit-billty-dataentry.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/edit-billty-dataentry/edit-billty-dataentry.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: EditBilltyDataentryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBilltyDataentryComponent", function() { return EditBilltyDataentryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sitemanagement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sitemanagement.service */ "./src/app/layout/site-management/sitemanagement.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
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







var EditBilltyDataentryComponent = /** @class */ (function () {
    function EditBilltyDataentryComponent(fb, ss, router, metaService, toastr, aroute, calendar) {
        this.fb = fb;
        this.ss = ss;
        this.router = router;
        this.metaService = metaService;
        this.toastr = toastr;
        this.aroute = aroute;
        this.calendar = calendar;
        this.siteOptions = [];
        this.loading = false;
        this.unloading_addresses = [];
        this.lrNos = [];
        this.lrField = false;
        this.teField = false;
        this.dqField = false;
        this.units = [];
        this.froms = [];
        this.tos = [];
        this.contains = [];
        this.currentDate = new Date();
        this.usertype = this.metaService.getSiteFromStorage().role;
        this.site_name = this.metaService.getSiteFromStorage().site;
    }
    EditBilltyDataentryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bdeDetails = this.aroute.snapshot.data['bde_details'];
        this.buildForm();
        // this.bdeForm.controls['lrdate'].setValue(this.calendar.getToday());
        // this.bdeForm.controls['loadingdate'].setValue(this.calendar.getToday());
        // this.bdeForm.controls['diesaldate'].setValue(this.calendar.getToday());
        // this.bdeForm.controls.transactiondetails.patchValue([{'date': this.calendar.getToday()}]);
        this.bdeForm.get('diesalaccountname').valueChanges.subscribe(function (val) {
            var date = _this.bdeForm.controls['lrdate'].value;
            var mstr = date.month;
            var dstr = date.day;
            if ((mstr + '').toString().length === 1) {
                mstr = "0" + mstr;
            }
            if ((dstr + '').toString().length === 1) {
                dstr = '0' + dstr;
            }
            var dateStr = date.year + "-" + mstr + "-" + dstr;
            _this.metaService.getRate(val, dateStr).subscribe(function (res) {
                _this.bdeForm.patchValue({ drate: res['rate'] });
            });
        });
        this.bdeForm.get('diesaldate').valueChanges.subscribe(function (date) {
            var vendor = _this.bdeForm.controls['site'].value;
            var mstr = date.month;
            var dstr = date.day;
            if ((mstr + '').toString().length === 1) {
                mstr = "0" + mstr;
            }
            if ((dstr + '').toString().length === 1) {
                dstr = "0" + dstr;
            }
            var dateStr = date.year + "-" + mstr + "-" + dstr;
            console.log('Date STr >>>>', dateStr);
            _this.metaService.getRate(vendor, dateStr).subscribe(function (res) {
                _this.bdeForm.patchValue({ drate: res['rate'] });
            });
        });
        this.bdeForm.get('to').valueChanges.subscribe(function (val) {
            var site = _this.bdeForm.controls['site'].value;
            if (site) {
                var lrno = _this.bdeForm.controls['lrno'].value;
                if (lrno) {
                    _this.performLrOperation(lrno);
                }
                _this.metaService.getDestinationKm(site, val).subscribe(function (res) {
                    _this.bdeForm.patchValue({ 'newkm': res['km'] });
                });
            }
        });
        this.bdeForm.get('newkm').valueChanges.subscribe(function (val) {
            var site = _this.bdeForm.controls['site'].value;
            var tcc = _this.bdeForm.controls['tcc'].value;
            var tyre = _this.bdeForm.controls['tyre'].value;
            var km = val;
            if (tcc && tyre && site && km) {
                _this.metaService.getDqty(tyre, tcc, site).subscribe(function (res) {
                    var tavg = res['tavg'];
                    var value = Number(km) / Number(tavg);
                    _this.bdeForm.patchValue({ 'dqty': value.toFixed(0) });
                });
            }
        });
        this.bdeForm.get('tyre').valueChanges.subscribe(function (val) {
            var site = _this.bdeForm.controls['site'].value;
            var tcc = _this.bdeForm.controls['tcc'].value;
            var tyre = val;
            var km = _this.bdeForm.controls['newkm'].value;
            if (tcc && tyre && site && km) {
                _this.metaService.getDqty(tyre, tcc, site).subscribe(function (res) {
                    var tavg = res['tavg'];
                    var value = Number(km) / Number(tavg);
                    _this.bdeForm.patchValue({ 'dqty': value.toFixed(0) });
                });
            }
        });
        this.bdeForm.get('tcc').valueChanges.subscribe(function (val) {
            var site = _this.bdeForm.controls['site'].value;
            var tyre = _this.bdeForm.controls['tyre'].value;
            var tcc = val;
            var km = _this.bdeForm.controls['newkm'].value;
            if (tcc && tyre && site && km) {
                _this.metaService.getDqty(tyre, tcc, site).subscribe(function (res) {
                    var tavg = res['tavg'];
                    var value = Number(km) / Number(tavg);
                    _this.bdeForm.patchValue({ 'dqty': value.toFixed(0) });
                });
            }
        });
        // site value changes
        this.bdeForm.get('site').valueChanges.subscribe(function (val) {
            _this.bdeForm.patchValue({ tplrno: '', unloadingtype: 'Fix', ppaymentmode: 'To Be Billed', calculatedweight: 'Weight' });
            _this.bdeForm.patchValue({ contains: 'Cement', unit: 'Bags', dtransactiontype: 'Credit', product: 'Bag' });
            _this.bdeForm.patchValue({ podpendings: 'Yes', podok: 'No' });
            // getting consignor details
            _this.metaService.getConsigner(val).subscribe(function (res) {
                _this.bdeForm.controls['consigner'].setValue(res['consigner']);
                _this.bdeForm.controls['from'].setValue(res['from']);
                _this.metaService.getRateType(val).subscribe(function (ret) {
                    _this.rateBy = ret['rateBy'];
                });
            });
            var tcc = _this.bdeForm.controls['tcc'].value;
            var tyre = _this.bdeForm.controls['tyre'].value;
            var site = val;
            var km = _this.bdeForm.controls['newkm'].value;
            if (tcc && tyre && site && km) {
                _this.metaService.getDqty(tyre, tcc, site).subscribe(function (res) {
                    var tavg = res['tavg'];
                    var value = Number(km) / Number(tavg);
                    _this.bdeForm.patchValue({ 'dqty': value.toFixed(0) });
                });
            }
            var to = _this.bdeForm.controls['to'].value;
            if (to) {
                _this.metaService.getDestinationKm(val, to).subscribe(function (res) {
                    _this.bdeForm.patchValue({ 'newkm': res['km'] });
                });
            }
            // default loading address
            _this.metaService.getConsignee(val).subscribe(function (res) {
                _this.bdeForm.controls['consignne'].setValue(res['consignee']);
                var unloadAdd = [];
                _this.unloadingAddressMappings = res['info'];
                res['info'].forEach(function (dim) {
                    unloadAdd.push(dim.unloadingaddress);
                });
                _this.unloading_addresses = unloadAdd;
            });
            // // getting to destination form plant rate list
            // this.metaService.getToDestinationsFromPlantRateList(val).subscribe(res => {
            //   console.log('To destination', res['info'] );
            //   var toDestination = [];
            //   res['info'].forEach(dim => {
            //     toDestination.push(dim.destination);
            //   });
            //   this.tos = toDestination;
            // });
            _this.metaService.getprefdestinationlist().subscribe(function (siteInfo) {
                _this.tos = siteInfo['result'];
                console.log('All Destination list >>>>>', _this.tos);
            }, function (err) {
                console.log('err   >>>', err);
            });
            _this.metaService.getLrData(val, false).subscribe(function (res) {
                var lrs = [];
                _this.truckPositions = res['result'];
                res['result'].forEach(function (tp) {
                    lrs.push(tp.lrno);
                });
                _this.lrNos = lrs;
            });
            // // petrol pump to fetch
            // this.metaService.getSitePetrolPump(val).subscribe(res => {
            //   var sitePetrolpump = [];
            //   res['info'].forEach(dim => {
            //     sitePetrolpump.push(dim.vendername);
            //   });
            //   this.diesalaccountname_options = sitePetrolpump;
            // });
            _this.bdeForm.controls['diesalaccountname'].setValue(null);
            _this.metaService.getDiesalAccountNames().subscribe(function (siteInfo) {
                // console.log('>>>>diesalaccountname_options', siteInfo['result']);
                _this.diesalaccountname_options = siteInfo['result'];
            });
        });
        // consginee value changes getting its unloading address
        this.bdeForm.get('consignne').valueChanges.subscribe(function (val) {
            //
            _this.bdeForm.controls['unloadingaddress'].setValue(null);
            _this.metaService.getConsigneeByName(val).subscribe(function (res) {
                var unloadAdd = [];
                _this.unloadingAddressMappings = res['info'];
                res['info'].forEach(function (dim) {
                    unloadAdd.push(dim.unloadingaddress);
                });
                _this.unloading_addresses = unloadAdd;
            });
        });
        this.bdeForm.get('mannual').valueChanges.subscribe(function (val) {
            _this.bdeForm.controls['tplrno'].setValue(null);
            _this.bdeForm.controls['lrno'].setValue(null);
            _this.lrField = val;
            var site = _this.bdeForm.controls['site'].value;
            _this.metaService.getLrData(site, val).subscribe(function (res) {
                var lrs = [];
                _this.truckPositions = res['result'];
                res['result'].forEach(function (tp) {
                    lrs.push(tp.lrno);
                });
                _this.lrNos = lrs;
            });
        });
        this.bdeForm.get('mannualroadexp').valueChanges.subscribe(function (val) {
            _this.teField = val;
        });
        this.bdeForm.get('mannualdqty').valueChanges.subscribe(function (val) {
            _this.dqField = val;
        });
        /// tplrno changes getting inforamtion from truck position
        this.bdeForm.get('tplrno').valueChanges.subscribe(function (val) {
            _this.performLrOperation(val);
        });
        this.bdeForm.get('unloadingexpences').valueChanges.subscribe(function (val) {
            _this.podcal(_this.bdeForm.get('unloadingtype').value);
        });
        this.bdeForm.get('unloadingaddress').valueChanges.subscribe(function (val) {
            if (_this.unloadingAddressMappings) {
                _this.unloadingAddressMappings.forEach(function (mapping) {
                    if (mapping.unloadingaddress === val) {
                        _this.bdeForm.controls['contactperson'].setValue(mapping['contactperson']);
                        _this.bdeForm.controls['phoneno'].setValue(mapping['phoneno']);
                    }
                });
            }
        });
        // this.bdeForm.get('mannualpetrolpump').valueChanges.subscribe(val => {
        //   this.bdeForm.controls['diesalaccountname'].setValue(null);
        //   this.metaService.getDiesalAccountNames().subscribe(siteInfo => {
        //     // console.log('>>>>diesalaccountname_options', siteInfo['result']);
        //     this.diesalaccountname_options = siteInfo['result'];
        //   });
        // });
        // this.bdeForm.get('mannualtodest').valueChanges.subscribe(val => {
        //   this.bdeForm.controls['to'].setValue(null);
        //   this.metaService.getprefdestinationlist().subscribe(siteInfo => {
        //     this.tos = siteInfo['result'];
        //     console.log('All Destination list >>>>>', this.tos);
        //   }, err => {
        //     console.log('err   >>>', err);
        //   });
        // });
        this.bdeForm.get('truckexpences').valueChanges.subscribe(function (val) {
            console.log('Truck Expences ', _this.bdeForm.value.truckexpences);
            // this.bdeForm.controls.transactiondetails[0].amount.setValue(null);
            _this.bdeForm.controls.transactiondetails.patchValue([{ 'amount': 0 }]);
            _this.bdeForm.controls.transactiondetails.patchValue([{ 'amount': _this.bdeForm.value.truckexpences }]);
            _this.podcal(_this.bdeForm.get('unloadingtype').value);
            _this.partyweightratechange();
        });
        // this.bdeForm.controls.transactiondetails.valueChanges.subscribe(changes => {
        //   console.log(this.bdeForm.value.transactiondetails[0].amount)
        //   this.bdeForm.patchValue({'truckexpences':this.bdeForm.value.transactiondetails[0].amount})
        //   this.podcal(this.bdeForm.get('unloadingtype').value)
        //   this.partyweightratechange();
        // });
        this.getOptions();
        this.getSites();
        this.bdeForm.get('unloadingtype').valueChanges.subscribe(function (val) {
            _this.podcal(val);
        });
        this.bdeForm.get('rate').valueChanges.subscribe(function (val) {
            _this.transratechange();
        });
        this.bdeForm.get('actualweight').valueChanges.subscribe(function (val) {
            _this.bdeForm.controls['cweight'].setValue(null);
            _this.bdeForm.controls['cweight'].setValue(_this.bdeForm.controls['actualweight'].value);
            _this.partyweightratechange();
        });
        this.bdeForm.get('product').valueChanges.subscribe(function (val) {
            _this.bdeForm.controls['unit'].setValue(null);
            if (_this.bdeForm.controls['product'].value === "Bag") {
                _this.productUnit = "Bags";
                var xx, pack;
                xx = Number(_this.bdeForm.controls['actualweight'].value);
                pack = Number(xx) * 20;
                _this.bdeForm.get('packages').setValue(Number(pack));
            }
            else {
                _this.productUnit = "Per MT";
                _this.bdeForm.controls['packages'].setValue(_this.productUnit);
            }
            _this.bdeForm.controls['unit'].setValue(_this.productUnit);
        });
        this.bdeForm.get('newrate').valueChanges.subscribe(function (val) {
            _this.partyweightratechange();
        });
        this.bdeForm.get('dqty').valueChanges.subscribe(function (val) {
            _this.diesalqtyratechange();
        });
        this.bdeForm.get('drate').valueChanges.subscribe(function (val) {
            _this.diesalqtyratechange();
        });
        this.bdeForm.get('vamount').valueChanges.subscribe(function (val) {
            _this.transratechange();
        });
        this.bdeForm.get('paymentcharge').valueChanges.subscribe(function (val) {
            _this.transratechange();
        });
    };
    EditBilltyDataentryComponent.prototype.buildForm = function () {
        var _this = this;
        this.bdeForm = this.fb.group(
        // {
        //   'site': [this.bdeDetails.site, [Validators.required]],
        //   'multidest': this.fb.array([
        //   ]),
        // }
        {
            'site': [this.bdeDetails.site, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'tplrno': [this.bdeDetails.tplrno, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'lrno': [this.bdeDetails.lrno, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'lrdate': [{ year: new Date(this.bdeDetails.lrdate).getFullYear(), month: new Date(this.bdeDetails.lrdate).getMonth() + 1, day: new Date(this.bdeDetails.lrdate).getDate() }],
            'consigner': [this.bdeDetails.consigner, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'consignne': [this.bdeDetails.consignne, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'unloadingaddress': [this.bdeDetails.unloadingaddress],
            'contactperson': [this.bdeDetails.contactperson],
            'phoneno': [this.bdeDetails.phoneno],
            'from': [this.bdeDetails.from, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'to': [this.bdeDetails.to, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mannualtodest': [this.bdeDetails.mannualtodest],
            'grade': [this.bdeDetails.grade],
            'substation': [this.bdeDetails.substation],
            'srno': [this.bdeDetails.srno],
            'vehicletype': [this.bdeDetails.vehicletype, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'truckno': [this.bdeDetails.truckno, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'brokername': [this.bdeDetails.brokername],
            'drivername': [this.bdeDetails.drivername],
            'idno': [this.bdeDetails.idno],
            'ownername': [this.bdeDetails.ownername],
            'panno': [this.bdeDetails.panno],
            'spi': [this.bdeDetails.spi],
            'tyre': [this.bdeDetails.tyre],
            'cweight': [this.bdeDetails.cweight, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'rate': [this.bdeDetails.rate],
            'vamount': [this.bdeDetails.vamount],
            'paymentcharge': [this.bdeDetails.paymentcharge],
            'finalamount': [this.bdeDetails.finalamount],
            'tkmr': [this.bdeDetails.tkmr],
            'tcc': [this.bdeDetails.tcc],
            'mannual': [this.bdeDetails.mannual],
            'ppaymentmode': [this.bdeDetails.ppaymentmode, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'loadingdate': [this.bdeDetails.loadingdate],
            'unloadingdate': [this.bdeDetails.unloadingdate ? { year: new Date(this.bdeDetails.unloadingdate).getFullYear(), month: new Date(this.bdeDetails.unloadingdate).getMonth() + 1, day: new Date(this.bdeDetails.unloadingdate).getDate() } : ''],
            'packages': [this.bdeDetails.packages],
            'actualweight': [this.bdeDetails.actualweight, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mannualaweight': [this.bdeDetails.mannualaweight],
            'calculatedweight': [this.bdeDetails.calculatedweight, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'contains': [this.bdeDetails.contains, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'unit': [this.bdeDetails.unit, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'product': [this.bdeDetails.product, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'newrate': [this.bdeDetails.newrate],
            'newamount': [this.bdeDetails.newamount],
            'fmno': [this.bdeDetails.fmno],
            'newkm': [this.bdeDetails.newkm, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'ordername': [this.bdeDetails.ordername],
            'newinvoiceno': [this.bdeDetails.newinvoiceno],
            'newinvoicedt': [this.bdeDetails.newinvoicedt],
            'newgatepass': [this.bdeDetails.newgatepass],
            'padate': [this.bdeDetails.padate ? { year: new Date(this.bdeDetails.padate).getFullYear(), month: new Date(this.bdeDetails.padate).getMonth() + 1, day: new Date(this.bdeDetails.padate).getDate() } : ''],
            'papaymenttype': [this.bdeDetails.papaymenttype],
            'papaymentmode': [this.bdeDetails.papaymentmode],
            'padvance': [this.bdeDetails.padvance],
            'paremarks': [this.bdeDetails.paremarks],
            'diesaldate': [this.bdeDetails.diesaldate ? { year: new Date(this.bdeDetails.diesaldate).getFullYear(), month: new Date(this.bdeDetails.diesaldate).getMonth() + 1, day: new Date(this.bdeDetails.diesaldate).getDate() } : ''],
            'dtransactiontype': [this.bdeDetails.dtransactiontype],
            'diesalaccountname': [this.bdeDetails.diesalaccountname],
            'mannualpetrolpump': [this.bdeDetails.mannualpetrolpump],
            'dqty': [this.bdeDetails.dqty],
            'mannualdqty': [this.bdeDetails.mannualdqty],
            'drate': [this.bdeDetails.drate],
            'damount': [this.bdeDetails.damount],
            'dslipno': [this.bdeDetails.dslipno],
            'poddate': [this.bdeDetails.poddate ? { year: new Date(this.bdeDetails.poddate).getFullYear(), month: new Date(this.bdeDetails.poddate).getMonth() + 1, day: new Date(this.bdeDetails.poddate).getDate() } : ''],
            'podpendings': [this.bdeDetails.podpendings],
            'podok': [this.bdeDetails.podok],
            'podremarks': [this.bdeDetails.podremarks],
            'billno': [this.bdeDetails.billno],
            'billdate': [null],
            'billremarks': [this.bdeDetails.billremarks],
            'truckexpences': [this.bdeDetails.truckexpences],
            'unlaodingexpences': [this.bdeDetails.unlaodingexpences],
            'actualexpences': [this.bdeDetails.actualexpences],
            'totaltruckexpences': [this.bdeDetails.totaltruckexpences],
            'mannualroadexp': [this.bdeDetails.mannualroadexp],
            'newinvoicedate': [null],
            'unloadingexpences': [this.bdeDetails.unlaodingexpences],
            'unloadingtype': [this.bdeDetails.unloadingtype, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'transactiondetails': this.fb.array([])
        });
        // this.addMaterialreceiptItems()
        this.bdeDetails.transactiondetails.forEach(function (element) {
            var control = _this.bdeForm.controls['transactiondetails'];
            control.push(_this.initItemsData(element));
        });
    };
    EditBilltyDataentryComponent.prototype.initItemsData = function (data) {
        console.log('inititemsdata', data.date);
        return this.fb.group({
            'date': [data.date],
            'accounttype': [data.accounttype],
            'accountname': [data.accountname, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'amount': [data.amount],
            'paymenttype': [data.paymenttype],
            'paymentmode': [data.paymentmode],
            'remark': [data.remark]
        });
    };
    EditBilltyDataentryComponent.prototype.getCurrentDate = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var d = dd + '';
        var m = mm + '';
        var td = today.toString();
        var yyyy = today.getFullYear();
        if (dd < 10) {
            d = '0' + dd;
        }
        if (mm < 10) {
            m = '0' + mm;
        }
        td = yyyy + '-' + m + '-' + d;
        return td;
    };
    EditBilltyDataentryComponent.prototype.initItems = function () {
        return this.fb.group({
            'date': [this.getCurrentDate()],
            'accounttype': [''],
            'accountname': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'amount': [0],
            'paymenttype': [''],
            'paymentmode': [''],
            'remark': [''],
        });
    };
    EditBilltyDataentryComponent.prototype.addTcmitems = function () {
        var control = this.bdeForm.controls['transactiondetails'];
        control.push(this.initItems());
    };
    EditBilltyDataentryComponent.prototype.removeItems = function (i) {
        var control = this.bdeForm.controls['transactiondetails'];
        control.removeAt(i);
    };
    EditBilltyDataentryComponent.prototype.saveupdate = function () {
        var _this = this;
        /*     [disabled]="!bdeForm.valid || process == 'saving'"
         */
        if (this.bdeForm.valid) {
            var lrdate = void 0;
            if (this.bdeForm.controls['lrdate'].value) {
                var dt = this.bdeForm.controls['lrdate'].value.year + '-' +
                    this.bdeForm.controls['lrdate'].value.month + '-' +
                    this.bdeForm.controls['lrdate'].value.day;
                lrdate = new Date(this.bdeForm.controls['lrdate'].value.year, this.bdeForm.controls['lrdate'].value.month - 1, this.bdeForm.controls['lrdate'].value.day, 23, 59, 59);
                // console.log(lrdate);
            }
            else {
                lrdate = moment().format();
                lrdate = new Date(lrdate.getFullYear(), lrdate.getMonth(), lrdate.getDay(), 23, 59, 59);
            }
            var newinvoicedate = void 0;
            if (this.bdeForm.controls['newinvoicedate'].value) {
                var dt = this.bdeForm.controls['newinvoicedate'].value.year + '-' +
                    this.bdeForm.controls['newinvoicedate'].value.month + '-' +
                    this.bdeForm.controls['newinvoicedate'].value.day;
                newinvoicedate = moment(dt, 'YYYY-MM-DD').format();
                // console.log(newinvoicedate);
            }
            else {
                newinvoicedate = moment().format();
            }
            var unloadingdate = void 0;
            if (this.bdeForm.controls['unloadingdate'].value) {
                var dt = this.bdeForm.controls['unloadingdate'].value.year + '-' +
                    this.bdeForm.controls['unloadingdate'].value.month + '-' +
                    this.bdeForm.controls['unloadingdate'].value.day;
                unloadingdate = moment(dt, 'YYYY-MM-DD').format();
                // console.log(unloadingdate);
            }
            else {
                unloadingdate = moment().format();
            }
            var loadingdate = void 0;
            if (this.bdeForm.controls['loadingdate'].value) {
                var dt = this.bdeForm.controls['loadingdate'].value.year + '-' +
                    this.bdeForm.controls['loadingdate'].value.month + '-' +
                    this.bdeForm.controls['loadingdate'].value.day;
                loadingdate = moment(dt, 'YYYY-MM-DD').format();
                // console.log(loadingdate);
            }
            else {
                loadingdate = moment().format();
            }
            var padate = void 0;
            if (this.bdeForm.controls['padate'].value) {
                var dt = this.bdeForm.controls['padate'].value.year + '-' +
                    this.bdeForm.controls['padate'].value.month + '-' +
                    this.bdeForm.controls['padate'].value.day;
                padate = moment(dt, 'YYYY-MM-DD').format();
                // console.log(padate);
            }
            else {
                padate = moment().format();
            }
            var billdate = void 0;
            if (this.bdeForm.controls['billdate'].value) {
                var dt = this.bdeForm.controls['billdate'].value.year + '-' +
                    this.bdeForm.controls['billdate'].value.month + '-' +
                    this.bdeForm.controls['billdate'].value.day;
                billdate = moment(dt, 'YYYY-MM-DD').format();
                // console.log(billdate);
            }
            else {
                //billdate = moment().format();
            }
            var diesaldate = void 0;
            if (this.bdeForm.controls['diesaldate'].value) {
                var dt = this.bdeForm.controls['diesaldate'].value.year + '-' +
                    this.bdeForm.controls['diesaldate'].value.month + '-' +
                    this.bdeForm.controls['diesaldate'].value.day;
                diesaldate = moment(dt, 'YYYY-MM-DD').format();
                // console.log(diesaldate);
            }
            else {
                diesaldate = moment().format();
            }
            var poddate = void 0;
            if (this.bdeForm.controls['poddate'].value) {
                var dt = this.bdeForm.controls['poddate'].value.year + '-' +
                    this.bdeForm.controls['poddate'].value.month + '-' +
                    this.bdeForm.controls['poddate'].value.day;
                poddate = moment(dt, 'YYYY-MM-DD').format();
                // console.log(poddate);
            }
            else {
                poddate = moment().format();
            }
            console.log('Billty Data Entry >> Save', this.bdeForm.value);
            var saveData_1 = this.bdeForm.value;
            saveData_1.lrdate = lrdate;
            saveData_1.padate = padate;
            saveData_1.unloadingdate = unloadingdate;
            saveData_1.billdate = billdate;
            // saveData.diesaldate = diesaldate;
            saveData_1.diesaldate = lrdate;
            saveData_1.loadingdate = loadingdate;
            saveData_1.newinvoicedate = newinvoicedate;
            // let dval = saveData.transactiondetails[0].date;
            var dval = lrdate;
            // console.log ('transaction details date dval  >>', dval);
            var fdval = dval ? dval.year + "-" + (dval.month < 10 ? "0" + dval.month : dval.month) + "-" + (dval.day < 10 ? "0" + dval.day : dval.day) : this.getCurrentDate();
            saveData_1.transactiondetails[0].date = fdval;
            // saveData.transactiondetails[0].date = lrdate;
            if (saveData_1.newamount > saveData_1.vamount && saveData_1.newamount > saveData_1.totaltruckexpences) {
                this.process = 'saving';
                this.ss.updatBde(this.bdeDetails['_id'], this.bdeForm.value).subscribe(function (mrInfo) {
                    _this.process = 'done';
                    var data = {
                        site: saveData_1.site,
                        truckno: saveData_1.truckno,
                        lrno: saveData_1.lrno,
                        tkmr: saveData_1.tkmr
                    };
                    _this.metaService.updateKmReadingJobworkreminder(data).subscribe(function (kmrInfo) {
                        _this.metaService.updateTruckPositionBiltyGen(data).subscribe(function (res) {
                            _this.router.navigate(['/site-management/billty-dataentry']);
                        }, function (error) {
                            _this.process = 'done';
                            console.log(error);
                        });
                    });
                });
            }
            else {
                this.toastr.error('Party Amount must be greater than Transporter Amount and Road Expenses');
            }
        }
    };
    // public saveSpro() {
    //   this.process = 'saving';
    //   this.as.updatSpro(this.bdeDetails['_id'], this.sdkForm.value).subscribe(mrInfo => {
    //     this.process = 'done';
    //     this.router.navigate(['/admin-privileges/site-profile']);
    //   }, error => { this.process = 'done'; console.log(error);
    // });
    // }
    EditBilltyDataentryComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                // this.bdeForm.controls['site'].setValue(this.siteOptions[0].branch_name);
            }
            else {
                _this.bdeForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    EditBilltyDataentryComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getConsignorNames().subscribe(function (siteInfo) {
            // console.log('>>>>consignor_options', siteInfo['result']);
            _this.consignor_options = siteInfo['result'];
        });
        this.metaService.getTransactionTypeList().subscribe(function (siteInfo) {
            // console.log('>>>>Transaction_type ', siteInfo['result']);
            _this.tran_type = siteInfo['result'];
        });
        this.metaService.getConsigneeNames().subscribe(function (siteInfo) {
            // console.log('>>>>consignee_options', siteInfo['result']);
            _this.consignee_options = siteInfo['result'];
        });
        this.metaService.getRoadExpAccountNames().subscribe(function (siteInfo) {
            // console.log('>>>>roadexpaccountname_options', siteInfo['result']);
            _this.roadexpaccountname_options = siteInfo['result'];
        });
        this.metaService.getReceiptTypeNames().subscribe(function (siteInfo) {
            // console.log('>>>>receipttype_options', siteInfo['result']);
            _this.receipttype_options = siteInfo['result'];
        });
        this.metaService.getReceiptModeNames().subscribe(function (siteInfo) {
            // console.log('>>>>receiptmode_options', siteInfo['result']);
            _this.paymentmode_options = siteInfo['result'];
            _this.receiptmode_options = siteInfo['result'];
        });
        this.metaService.getUnits().subscribe(function (siteInfo) {
            // console.log('>>>>Units', siteInfo['result']);
            _this.units = siteInfo['result'];
        });
        this.metaService.getDfrom().subscribe(function (siteInfo) {
            // console.log('>>>>From Destination', siteInfo['result']);
            _this.froms = siteInfo['result'];
        });
        this.metaService.getContains().subscribe(function (siteInfo) {
            // console.log('>>>>Contains', siteInfo['result']);
            _this.contains = siteInfo['result'];
        });
    };
    EditBilltyDataentryComponent.prototype.performLrOperation = function (val) {
        var _this = this;
        if (this.truckPositions) {
            this.truckPositions.forEach(function (tp) {
                if (tp.lrno === val) {
                    _this.bdeForm.controls['lrno'].setValue(val);
                    _this.bdeForm.controls['srno'].setValue(tp['srno']);
                    _this.bdeForm.controls['truckno'].setValue(tp['truckno']);
                    _this.bdeForm.controls['tkmr'].setValue(tp['km_reading']);
                    _this.bdeForm.controls['tcc'].setValue(tp['cc']);
                }
                ;
            });
        }
        // getting information of trucks
        this.bdeForm.get('truckno').valueChanges.subscribe(function (val) {
            _this.metaService.getTruckDetails(_this.bdeForm.get('truckno').value).subscribe(function (result) {
                _this.bdeForm.controls['vehicletype'].setValue(result['vtype']);
                _this.bdeForm.controls['drivername'].setValue(result['drivername']);
                _this.bdeForm.controls['ownername'].setValue(result['ownername']);
                _this.bdeForm.controls['panno'].setValue(result['newpan']);
                _this.bdeForm.controls['spi'].setValue(result['spi']);
                _this.bdeForm.controls['tyre'].setValue(result['type']);
                _this.bdeForm.controls['actualweight'].setValue(result['newcarring']);
                _this.bdeForm.controls['cweight'].setValue(result['newcarring']);
                _this.bdeForm.controls['paymentcharge'].setValue(result['newpaymentcharge']);
                // need to bring its commission type
                // this.newCommission = result['newcommission'];
                // this.commRates = result['newrates'];
                var newCommission;
                var commRates;
                var typeoft;
                var vnewCarring;
                _this.gradE = _this.bdeForm.controls['grade'].value;
                _this.truckSpi = _this.bdeForm.controls['spi'].value;
                vnewCarring = Number(result['newcarring']);
                newCommission = result['newcommision'];
                commRates = result['newrates'];
                console.log('Carrying capacity of truck ', vnewCarring);
                console.log('Rate by  ', _this.rateBy);
                console.log('Commission Type ', newCommission);
                console.log('Commission Rates ', commRates);
                console.log('SPI ', _this.truckSpi);
                console.log('Grade ', _this.gradE);
                if (_this.rateBy === "TON") {
                }
                if (!_this.gradE) {
                }
                else if (_this.gradE = 'Trade') {
                    if (vnewCarring > 26) {
                        _this.truckSpi = 1101;
                    }
                    else if ((vnewCarring > 11) && (vnewCarring <= 26)) {
                        _this.truckSpi = 1102;
                    }
                    else if (vnewCarring <= 11) {
                        _this.truckSpi = 1105;
                    }
                }
                else if (_this.gradE = 'Non Trade') {
                    if (vnewCarring > 26) {
                        _this.truckSpi = 1103;
                    }
                    else if (vnewCarring <= 26) {
                        _this.truckSpi = 1104;
                    }
                }
                else if (_this.gradE = 'Bulker') {
                    if (vnewCarring > 26) {
                        _this.truckSpi = 1201;
                    }
                    else if (vnewCarring <= 26) {
                        _this.truckSpi = 1202;
                    }
                }
                // old formula
                //   if(vnewCarring <= 11){
                //      typeoft = "U11";
                //      this.truckSpi = typeoft.trim();
                //   } else if ((vnewCarring > 11)&&(vnewCarring <= 26)){
                //        typeoft = "U26";
                //        this.truckSpi = typeoft.trim();
                //   } else if(vnewCarring >26){
                //        typeoft = "A26";
                //        this.truckSpi = typeoft.trim();
                //   }
                // } else if (this.rateBy == "SPI") {
                //     typeoft = Number(result['spi']);
                //     this.truckSpi = (typeoft+'').trim();
                // } else {
                //     if((vnewCarring) <= 6){
                //       typeoft = "U9";
                //       this.truckSpi = typeoft.trim();
                //     } else if((vnewCarring > 6)&&(vnewCarring <= 12)){
                //       typeoft = "U26";
                //       this.truckSpi = typeoft.trim();
                //     } else {
                //       typeoft = "U31";
                //       this.truckSpi = typeoft.trim();
                //     };
                // };
                // console.log('type of truck', typeoft);
                var data = {
                    site: _this.bdeForm.controls['site'].value,
                    consignor: _this.bdeForm.controls['consigner'].value,
                    destination: _this.bdeForm.controls['to'].value,
                    spi: _this.truckSpi
                };
                console.log(' Rates Data >>>>', data);
                if (data.site && data.consignor && data.destination && data.spi) {
                    console.log('True');
                    _this.metaService.getfrieght(data).subscribe(function (res) {
                        console.log('Party Freight F', res);
                        // this.bdeForm.controls['newrate'].setValue(result['freight']);
                        _this.bdeForm.patchValue({ 'newrate': Number(res['freight']) });
                        console.log(' newcommission >>>', result['newcommision']);
                        console.log(' Freight >>>', Number(res['freight']));
                        console.log(' CommRates >>>', result['newrates']);
                        if (result['newcommision'] === 'Weight') {
                            _this.bdeForm.patchValue({ 'rate': (Number(res['freight']) - Number(result['newrates'])) + '' });
                        }
                        else if (result['newcommision'] === 'Percentage') {
                            _this.bdeForm.patchValue({ 'rate': (Number(res['freight']) - (Number(res['freight']) * (Number(result['newrates'] / 100)))) });
                        }
                        var billtyd = {
                            vehicletype: result['vtype'],
                            consignor: data.consignor,
                            site: data.site,
                            destination: data.destination
                        };
                        console.log('Road Expences >>>', billtyd);
                        _this.metaService.getRoadExpanses(billtyd).subscribe(function (namr) {
                            var currentsite = _this.bdeForm.controls['site'].value + ' CASH';
                            console.log(' Current Site ', currentsite);
                            // console.log(' Unloading expences', namr['newunloading']);
                            _this.bdeForm.controls.transactiondetails.patchValue([{ 'accounttype': 'Advance' }]);
                            _this.bdeForm.controls.transactiondetails.patchValue([{ 'accountname': 'Road Expences' }]);
                            _this.bdeForm.controls.transactiondetails.patchValue([{ 'paymenttype': 'Cash' }]);
                            _this.bdeForm.controls.transactiondetails.patchValue([{ 'paymentmode': (_this.bdeForm.controls['site'].value + ' CASH') }]);
                            // this.bdeForm.controls.transactiondetails.patchValue([{'amount': namr['newamount']}]);
                            _this.bdeForm.patchValue({ 'truckexpences': namr['newamount'] });
                            // this.bdeForm.patchValue({'unloadingexpences':namr['newunloading']});
                            _this.podcal(_this.bdeForm.get('unloadingtype').value);
                            _this.partyweightratechange();
                        });
                    });
                }
            });
        });
    };
    EditBilltyDataentryComponent.prototype.partyweightratechange = function () {
        var a, b, c;
        a = Number(this.bdeForm.controls["actualweight"].value);
        b = Number(this.bdeForm.controls["newrate"].value);
        c = Number(a) * Number(b);
        c = Math.round(c * 100) / 100;
        this.bdeForm.patchValue({ 'newamount': Number(c) });
        this.podcal(this.bdeForm.controls['unloadingtype'].value);
    };
    EditBilltyDataentryComponent.prototype.diesalqtyratechange = function () {
        var a, b, c;
        a = this.bdeForm.controls["dqty"].value;
        b = this.bdeForm.controls["drate"].value;
        c = Number(a) * Number(b);
        c = Math.round(c * 100) / 100;
        this.bdeForm.patchValue({ 'damount': Number(c) });
    };
    EditBilltyDataentryComponent.prototype.transratechange = function () {
        var a, b, c;
        a = Number(this.bdeForm.controls["rate"].value);
        b = Number(this.bdeForm.controls["cweight"].value);
        this.podcal(this.bdeForm.controls['unloadingtype'].value);
        c = Number(a) * Number(b);
        c = Math.round(c * 100) / 100;
        // this.bdeForm.controls["vamount"].value= c;
        this.bdeForm.controls['vamount'].setValue(Number(c));
        var paymentcharge = this.bdeForm.controls['paymentcharge'].value;
        var virtualtotal = Number(c) - Number(paymentcharge);
        virtualtotal = Math.round(virtualtotal * 100) / 100;
        this.bdeForm.controls['finalamount'].setValue(Number(virtualtotal));
    };
    EditBilltyDataentryComponent.prototype.podcal = function (value) {
        if (this.bdeForm.controls['product'].value === "Bag") {
            this.productUnit = "Bags";
            var xx, pack;
            xx = Number(this.bdeForm.controls['actualweight'].value);
            pack = Number(xx) * 20;
            this.bdeForm.get('packages').setValue(Number(pack));
        }
        else {
            this.productUnit = "Per MT";
            this.bdeForm.controls['packages'].setValue(this.productUnit);
        }
        var yy, xy, yx, zz;
        // xx=Number(this.bdeForm.controls['actualweight'].value);
        // pack = Number(xx)*20;
        // this.bdeForm.get('packages').setValue(Number(pack));
        if (value === "Per MT") {
            xx = Number(this.bdeForm.controls['actualweight'].value);
            yy = Number(this.bdeForm.controls["unloadingexpences"].value);
            this.bdeForm.patchValue({ 'actualexpences': (xx * yy) });
            xy = Number(this.bdeForm.controls["actualexpences"].value);
            yx = Number(this.bdeForm.controls["truckexpences"].value);
            this.bdeForm.patchValue({ 'totaltruckexpences': (xy + yx) });
            /* var bbb = this.bdeForm.get("totaltruckexpences").value;
            console.log(bbb);
            this.bdeForm.get('okokok').setValue(Number(bbb)); */
        }
        else {
            yy = Number(this.bdeForm.controls["unloadingexpences"].value);
            this.bdeForm.patchValue({ "actualexpences": yy });
            xy = Number(this.bdeForm.controls["actualexpences"].value);
            yx = Number(this.bdeForm.controls["truckexpences"].value);
            this.bdeForm.patchValue({ "totaltruckexpences": xy + yx });
            /*  var bbb = this.bdeForm.get("totaltruckexpences").value;
             document.getElementById('okokok').value= Number(bbb); */
        }
    };
    EditBilltyDataentryComponent.prototype.getAllToDestination = function () {
        var _this = this;
        this.metaService.getDto().subscribe(function (siteInfo) {
            // console.log('>>>>To Destination', siteInfo['result']);
            _this.tos = siteInfo['result'];
        });
    };
    EditBilltyDataentryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-billty-dataentry',
            template: __webpack_require__(/*! ./edit-billty-dataentry.component.html */ "./src/app/layout/site-management/component/edit-billty-dataentry/edit-billty-dataentry.component.html"),
            styles: [__webpack_require__(/*! ./edit-billty-dataentry.component.scss */ "./src/app/layout/site-management/component/edit-billty-dataentry/edit-billty-dataentry.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _sitemanagement_service__WEBPACK_IMPORTED_MODULE_4__["SitemanagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"]])
    ], EditBilltyDataentryComponent);
    return EditBilltyDataentryComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-management/component/edit-vehicle-master/edit-vehicle-master.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/edit-vehicle-master/edit-vehicle-master.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"vmForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Edit Vehicle Master</div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\">\n              <ngb-tabset>\n                <ngb-tab title=\"Data Entry\">\n                  <ng-template ngbTabContent>\n                    <br>\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <h4><i class=\"fa fa-truck\"></i> Vehicle Master</h4>\n                          <hr />\n                        </div>\n\n                        <div class=\"col-md-3\">\n                          <label class=\"required\" >Vehicle Type</label>\n                          <select class=\"form-control manual-entry\" formControlName=\"vtype\">\n                            <option value=\"Attached\">Attached</option>\n                            <option value=\"Company\">Company</option>\n                          </select>\n                        </div>\n                       \n                        <div class=\"col-md-3\">\n                          <div class=\"form-group\">\n                            <label class=\"required\">Vehicle No</label>\n                            <input type=\"text\" formControlName=\"truckno\"  class=\"form-control manual-entry\" placeholder=\"Truck No\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                            <label  class=\"required\">SPI</label>\n                            <input type=\"text\" formControlName=\"spi\" class=\"form-control manual-entry\" placeholder=\"SPI\">\n                          </div>\n                        </div>\n\n                        <div class=\"col-md-4\">\n                          <label>Traffic Agent Name</label>\n                          <ng-select [items]=\"ta_options\" placeholder=\"Type and search Consignee\" bindLabel=\"name\" bindValue=\"name\"\n                            formControlName=\"taname\" class=\"manual-entry\">\n                          </ng-select>\n                        </div>\n\n                        <div class=\"col-md-4\">\n                          <label>Driver Name</label>\n                          <ng-select [items]=\"driver_options\" placeholder=\"Type and search Consignee\" bindLabel=\"name\" bindValue=\"name\"\n                            formControlName=\"drivername\" class=\"manual-entry\">\n                          </ng-select>\n                        </div>\n\n\n                        <div class=\"col-md-3\">\n                          <label class=\"required\">GPS</label>\n                          <select class=\"form-control manual-entry\" formControlName=\"gps\">\n                            <option value=\"No\">No</option>\n                            <option value=\"Yes\">Yes</option>\n                          </select>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                          <label class=\"required\">Status</label>\n                          <select class=\"form-control manual-entry\" formControlName=\"status\">\n                            <option value=\"Active\">Active</option>\n                            <option value=\"Not-Active\">Non-Active</option>\n                          </select>\n                        </div>\n\n\n                      </div>\n\n                  </ng-template>\n                </ngb-tab>\n                  \n                  <ngb-tab title=\"Owner Details\">\n                    <ng-template ngbTabContent>\n                      <br>\n\n                      <div class=\"row\">\n                        <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                            <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                <div class=\"form-group\">\n                                  <label class=\"required\">Owner Name</label>\n                                  <input type=\"text\" formControlName=\"ownername\" class=\"form-control manual-entry\" placeholder=\"Owner Name\">\n                                </div>\n                              </div>\n\n\n                              <div class=\"col-md-4\">\n                                  <div class=\"form-group\">\n                                    <label>Address</label>\n                                    <input type=\"text\" formControlName=\"newaddress\" class=\"form-control manual-entry\" placeholder=\"Address\">\n                                  </div>\n                                </div>\n  \n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Pan Number</label>\n                                    <input type=\"text\" formControlName=\"newpan\" class=\"form-control manual-entry\" placeholder=\"Pan Number\">\n                                  </div>\n                                </div>\n\n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Aadhar Card No.</label>\n                                    <input type=\"text\" formControlName=\"newaadhar\" class=\"form-control manual-entry\" placeholder=\"Aadhar Card Number\">\n                                  </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Owner Mobile No.</label>\n                                    <input type=\"text\" formControlName=\"newmobile\" class=\"form-control manual-entry\" placeholder=\"Mobile No.\">\n                                  </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Contact Person</label>\n                                    <input type=\"text\" formControlName=\"newcontactp\" class=\"form-control manual-entry\" placeholder=\"Contact Person\">\n                                  </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                  <div class=\"form-group\">\n                                    <label>Contact Person Mobile No</label>\n                                    <input type=\"text\" formControlName=\"newcmobile\" class=\"form-control manual-entry\" placeholder=\"Mobile No\">\n                                  </div>\n                                </div>\n\n                              </div> \n                            </div>\n                          <hr>\n                        </div>\n                        <br>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Vehicle Details\">\n                    <ng-template ngbTabContent>\n                      <br>\n                      <div class=\"row\">\n                        <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                            <div class=\"col-md-12\">\n                              <h4><i class=\"fa fa-truck\"></i> Vehicle Specifications</h4>\n                              <hr />\n                            </div>\n    \n                            <div class=\"row\">\n\n                              <div class=\"col-md-4\">\n                                <label class=\"required\">Tyre</label>\n                                <ng-select [items]=\"tyre_options\" placeholder=\"Type and search Consignee\" bindLabel=\"name\" bindValue=\"name\"\n                                  formControlName=\"type\" class=\"manual-entry\">\n                                </ng-select>\n                              </div>\n              \n                 \n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label class=\"required\">Carrying Capacity</label>\n                                  <input type=\"text\" formControlName=\"newcarring\" class=\"form-control manual-entry\" placeholder=\"CC\">\n                                </div>\n                              </div>\n        \n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Engine No</label>\n                                  <input type=\"text\" formControlName=\"newengine\" class=\"form-control manual-entry\" placeholder=\"Engine No\">\n                                </div>\n                              </div>\n\n\n                              <div class=\"col-md-3\">\n                                <label class=\"required\">Engine Type</label>\n                                <select class=\"form-control manual-entry\" formControlName=\"enginetype\">\n                                  <option value=\"\">Engine Type</option>\n                                  <option value=\"BS III\">BS III</option>\n                                  <option value=\"BS IV\">BS IV</option>\n                                  <option value=\"BS V\">BS V</option>\n                                  <option value=\"BS VI\">BS VI</option>\n                                </select>\n                              </div>\n      \n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Chasis No</label>\n                                  <input type=\"text\" formControlName=\"newchasis\" class=\"form-control manual-entry\" placeholder=\"Chasis No\">\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-12\">\n                                <h4><i class=\"fa fa-truck\"></i> Purchase and Sales Date Details</h4>\n                                <hr />\n                              </div>\n  \n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Purchase Date</label>\n                                  <div class=\"input-group datepicker-input\">\n                                    <input\n                                      class=\"form-control manual-entry\"\n                                      placeholder=\"dd/mm/yyyy\"\n                                      formControlName=\"purchasedate\"\n                                      name=\"dp\"\n                                      ngbDatepicker\n                                      #dd=\"ngbDatepicker\"\n                                    />\n                                    <div class=\"input-group-append\">\n                                      <button class=\"btn btn-outline-secondary calendar\" (click)=\"dd.toggle()\" type=\"button\">\n                                        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                      </button>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n\n                              <div class=\"col-md-3\">\n                                <div class=\"form-group\">\n                                  <label>Sales Date</label>\n                                  <div class=\"input-group datepicker-input\">\n                                    <input\n                                      class=\"form-control manual-entry\"\n                                      placeholder=\"dd/mm/yyyy\"\n                                      formControlName=\"salesdate\"\n                                      name=\"dp\"\n                                      ngbDatepicker\n                                      #dds=\"ngbDatepicker\"\n                                    />\n                                    <div class=\"input-group-append\">\n                                      <button class=\"btn btn-outline-secondary calendar\" (click)=\"dds.toggle()\" type=\"button\">\n                                        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                      </button>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n\n\n                            </div>\n\n                            <div class=\"col-md-12\">\n                              <h4><i class=\"fa fa-truck\"></i> Commission Details</h4>\n                              <hr />\n                            </div>\n                            <div class=\"row\">\n                              <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n                                  <div class=\"row\">\n                                    <div class=\"col-md-3\">\n                                      <label >Commission to be Charged</label>\n                                      <select class=\"form-control manual-entry\" formControlName=\"newcommision\">\n                                        <option value=\"\">Select Commission Type</option>\n                                        <option value=\"Percentage\">Percentage</option>\n                                        <option value=\"Weight\">Weight</option>\n                                      </select>\n                                    </div>\n      \n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>Rates</label>\n                                        <input type=\"number\" formControlName=\"newrates\" class=\"form-control manual-entry\" placeholder=\"Rates\">\n                                      </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>Payment Charge</label>\n                                        <input type=\"number\" formControlName=\"newpaymentcharge\" class=\"form-control manual-entry\" placeholder=\"Payment Charge\">\n                                      </div>\n                                    </div>\n\n                                    <div class=\"col-md-3\">\n                                      <div class=\"form-group\">\n                                        <label>Billty Charge</label>\n                                        <input type=\"number\" formControlName=\"newbilltycharge\" class=\"form-control manual-entry\" placeholder=\"Billty Charge\">\n                                      </div>\n                                    </div>\n\n                                  </div>\n                                <hr>\n                              </div>\n                            </div>\n                            <br>\n                          <hr>\n                        </div>\n                      </div>\n                    </ng-template>\n                  </ngb-tab>\n        \n                </ngb-tabset>\n          </div>\n        </div>\n \n        </div>\n      </div>\n      <div class=\"card-footer\">\n<!--         [disabled]=\"!vmForm.valid || process == 'saving'\"\n -->        <button class=\"btn btn-success float-right\" [disabled]=\"!vmForm.valid || process == 'saving'\" (click)=\"saveitems()\"  type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\"  class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/layout/site-management/component/edit-vehicle-master/edit-vehicle-master.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/edit-vehicle-master/edit-vehicle-master.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLW1hbmFnZW1lbnQvY29tcG9uZW50L2VkaXQtdmVoaWNsZS1tYXN0ZXIvZWRpdC12ZWhpY2xlLW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/site-management/component/edit-vehicle-master/edit-vehicle-master.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/edit-vehicle-master/edit-vehicle-master.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EditVehicleMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVehicleMasterComponent", function() { return EditVehicleMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sitemanagement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sitemanagement.service */ "./src/app/layout/site-management/sitemanagement.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
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







var EditVehicleMasterComponent = /** @class */ (function () {
    function EditVehicleMasterComponent(fb, ss, router, metaService, toastr, calendar, aroute) {
        this.fb = fb;
        this.ss = ss;
        this.router = router;
        this.metaService = metaService;
        this.toastr = toastr;
        this.calendar = calendar;
        this.aroute = aroute;
        this.loading = false;
        this.currentDate = new Date();
        var current = new Date();
        this.minDate = {
            year: current.getFullYear(),
            month: current.getMonth() + 1,
            day: current.getDate()
        };
    }
    EditVehicleMasterComponent.prototype.ngOnInit = function () {
        this.vmDetails = this.aroute.snapshot.data['vm_details'];
        this.bsConfig = Object.assign({}, { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
        console.log(this.vmDetails);
        this.buildForm();
        this.getOptions();
    };
    EditVehicleMasterComponent.prototype.buildForm = function () {
        this.vmForm = this.fb.group({
            'vtype': [this.vmDetails.vtype, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'truckno': [this.vmDetails.truckno, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'spi': [this.vmDetails.spi, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'taname': [this.vmDetails.taname],
            'drivername': [this.vmDetails.drivername],
            'gps': [this.vmDetails.gps, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'status': [this.vmDetails.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'ownername': [this.vmDetails.ownername],
            'newaddress': [this.vmDetails.newaddress],
            'newpan': [this.vmDetails.newpan],
            'newaadhar': [this.vmDetails.newaadhar],
            'newmobile': [this.vmDetails.newmobile],
            'newcontactp': [this.vmDetails.newcontactp],
            'newcmobile': [this.vmDetails.newcmobile],
            'type': [this.vmDetails.type, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'newcarring': [this.vmDetails.newcarring, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'newengine': [this.vmDetails.newengine],
            'enginetype': [this.vmDetails.enginetype, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'newchasis': [this.vmDetails.newchasis],
            'newcommision': [this.vmDetails.newcommision],
            'newrates': [this.vmDetails.newrates],
            'newpaymentcharge': [this.vmDetails.newpaymentcharge],
            'newbilltycharge': [this.vmDetails.newbilltycharge],
            'purchasedate': [{ year: new Date(this.vmDetails.purchasedate).getFullYear(),
                    month: new Date(this.vmDetails.purchasedate).getMonth() + 1,
                    day: new Date(this.vmDetails.purchasedate).getDate() }],
            'salesdate': [{ year: new Date(this.vmDetails.salesdate).getFullYear(),
                    month: new Date(this.vmDetails.salesdate).getMonth() + 1,
                    day: new Date(this.vmDetails.salesdate).getDate() }]
        });
    };
    EditVehicleMasterComponent.prototype.saveitems = function () {
        var _this = this;
        var purchasedate;
        if (this.vmForm.controls['purchasedate'].value) {
            var dt = this.vmForm.controls['purchasedate'].value.year + '-' +
                this.vmForm.controls['purchasedate'].value.month + '-' +
                this.vmForm.controls['purchasedate'].value.day;
            purchasedate = moment(dt, 'YYYY-MM-DD').format();
            console.log(purchasedate);
        }
        else {
            purchasedate = moment().format();
        }
        var salesdate;
        if (this.vmForm.controls['salesdate'].value) {
            var dt = this.vmForm.controls['salesdate'].value.year + '-' +
                this.vmForm.controls['salesdate'].value.month + '-' +
                this.vmForm.controls['salesdate'].value.day;
            salesdate = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            salesdate = moment().format();
        }
        this.process = 'saving';
        var data = this.vmForm.value;
        data.purchasedate = purchasedate;
        data.salesdate = salesdate;
        this.ss.updatVm(this.vmDetails['_id'], this.vmForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/site-management/vehicle-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditVehicleMasterComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getTaNames().subscribe(function (siteInfo) {
            _this.ta_options = siteInfo['result'];
        });
        this.metaService.getTyreNames().subscribe(function (siteInfo) {
            _this.tyre_options = siteInfo['result'];
        });
        this.metaService.getDriverNames().subscribe(function (siteInfo) {
            _this.driver_options = siteInfo['result'];
        });
    };
    EditVehicleMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-vehicle-master',
            template: __webpack_require__(/*! ./edit-vehicle-master.component.html */ "./src/app/layout/site-management/component/edit-vehicle-master/edit-vehicle-master.component.html"),
            styles: [__webpack_require__(/*! ./edit-vehicle-master.component.scss */ "./src/app/layout/site-management/component/edit-vehicle-master/edit-vehicle-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _sitemanagement_service__WEBPACK_IMPORTED_MODULE_4__["SitemanagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditVehicleMasterComponent);
    return EditVehicleMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-management/component/extra-return-expences/extra-return-expences.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/extra-return-expences/extra-return-expences.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>Extra Return Expences</strong>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n      <div class=\" form-group row\">\r\n        <div class=\"col-sm\">\r\n          <label for=\"city\">Site</label>\r\n          <select id=\"select1\" name=\"select1\" required class=\"form-control\">\r\n            <option value=\"0\">Please select</option>\r\n            <option value=\"1\">Nagpur</option>\r\n            <option value=\"2\">Awarpur</option>\r\n            <option value=\"3\">Bela Coal MP</option>\r\n            <option value=\"4\">Bela MP</option>\r\n            <option value=\"5\">Maihar MP</option>\r\n            <option value=\"6\">MCW Gadchandur</option>\r\n            <option value=\"7\">NWC Plant</option>\r\n            <option value=\"8\">Reliance Hazira</option>\r\n            <option value=\"9\">Rewa Hub MP</option>\r\n            <option value=\"10\">Sidhi MP</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"col-sm\">\r\n          <label for=\"postal-code\">Voucher No</label>\r\n          <input type=\"text\" class=\"form-control\">\r\n        </div>\r\n        \r\n        <div class=\"col-sm\">\r\n            <label for=\"postal-code\">Date</label>\r\n            <input type=\"date\" class=\"form-control\" id=\"postal-code\">\r\n          </div>\r\n          <div class=\"col-sm\">\r\n            <label for=\"postal-code\">Lr.No</label>\r\n            <input type=\"text\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"col-sm\">\r\n            <label for=\"postal-code\">Truck No</label>\r\n            <input type=\"text\" class=\"form-control\">\r\n          </div>\r\n      </div>\r\n      <!--/.row1-->\r\n      \r\n      <div class=\" form-group row\">\r\n        \r\n        \r\n          <div class=\"col-sm\">\r\n              <label for=\"postal-code\">Driver Name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"postal-code\">\r\n            </div>\r\n            <div class=\"col-sm\">\r\n              <label for=\"city\">Payment Type</label>\r\n              <select id=\"select1\" name=\"select1\" required class=\"form-control\">\r\n                <option value=\"0\">Please select</option>\r\n                <option value=\"1\">Nagpur</option>\r\n                <option value=\"2\">Awarpur</option>\r\n                <option value=\"3\">Bela Coal MP</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-sm\">\r\n              <label for=\"city\">Payment Mode</label>\r\n              <select id=\"select1\" name=\"select1\" required class=\"form-control\">\r\n                <option value=\"0\">Please select</option>\r\n                <option value=\"1\">Nagpur</option>\r\n                <option value=\"2\">Awarpur</option>\r\n                <option value=\"3\">Bela Coal MP</option>\r\n              </select>\r\n            </div>\r\n          \r\n        </div>\r\n\r\n      <!--/.row2-->\r\n      <div class=\" form-group row\">\r\n        \r\n        \r\n        <div class=\"col-sm-2\">\r\n          <label for=\"city\">Account Name</label>\r\n          <select id=\"select1\" name=\"select1\" required class=\"form-control\">\r\n            <option value=\"0\">Please select</option>\r\n            <option value=\"1\">Nagpur</option>\r\n            <option value=\"2\">Awarpur</option>\r\n            <option value=\"3\">Bela Coal MP</option>\r\n          </select>\r\n        </div>\r\n        \r\n      <div class=\"col-sm\">\r\n        <label for=\"postal-code\">Amount</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"postal-code\">\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <label for=\"city\">Billing</label>\r\n        <select id=\"select1\" name=\"select1\" required class=\"form-control\">\r\n          <option value=\"0\">Please select</option>\r\n          <option value=\"1\">Yes</option>\r\n          <option value=\"2\">No</option>\r\n          \r\n        </select>\r\n      </div>\r\n      <div class=\"col-sm\">\r\n        <label for=\"postal-code\">Bill Amount</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"postal-code\">\r\n      </div>\r\n      <div class=\"col-sm-1 mt-4\">\r\n        <a class=\"badge\" href=\"#\"><i class=\"fa fa-plus-square\"></i></a>\r\n     \r\n      \r\n        <a class=\"badge\" href=\"#\"><i class=\"fa fa-minus-square\"></i></a>\r\n      </div>\r\n        \r\n        </div>\r\n\r\n      \r\n\r\n    </form>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <button type=\"submit\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-success\">\r\n      <i class=\"fa fa-dot-circle-o\"></i> Save</button>\r\n    <button type=\"reset\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-warning\">\r\n      <i class=\"fa fa-star\"></i> Refresh</button>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n    <div class=\"animated fadeIn\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <i class=\"fa fa-align-justify\"></i> Prepared By Administrator\r\n            </div>\r\n            <div class=\"card-body\">\r\n                \r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Site</th>\r\n                    <th>Date</th>\r\n                    <th>Lr No</th>\r\n                    <th>Truck No</th>\r\n                    <th>Delete</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>Samppa Nori</td>\r\n                    <td>2012/01/01</td>\r\n                    <td>Member</td>\r\n                    <td>Member</td>\r\n                    \r\n                    \r\n                      <td>\r\n                          <a class=\"badge badge-danger\" href=\"#\"><i class=\"fa fa-trash\"></i></a>\r\n                        </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Samppa Nori</td>\r\n                    <td>2012/01/01</td>\r\n                    <td>Member</td>\r\n                    <td>Member</td>\r\n                    \r\n                    \r\n                      <td>\r\n                          <a class=\"badge badge-danger\" href=\"#\"><i class=\"fa fa-trash\"></i></a>\r\n                        </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Samppa Nori</td>\r\n                    <td>2012/01/01</td>\r\n                    <td>Member</td>\r\n                    <td>Member</td>\r\n                    \r\n                    \r\n                      <td>\r\n                          <a class=\"badge badge-danger\" href=\"#\"><i class=\"fa fa-trash\"></i></a>\r\n                        </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Samppa Nori</td>\r\n                    <td>2012/01/01</td>\r\n                    <td>Member</td>\r\n                    <td>Member</td>\r\n                    \r\n                    \r\n                      <td>\r\n                          <a class=\"badge badge-danger\" href=\"#\"><i class=\"fa fa-trash\"></i></a>\r\n                        </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <ul class=\"pagination\">\r\n                <li class=\"page-item\">\r\n                  <a class=\"page-link\" href=\"#\">Prev</a>\r\n                </li>\r\n                <li class=\"page-item active\">\r\n                  <a class=\"page-link\" href=\"#\">1</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                  <a class=\"page-link\" href=\"#\">2</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                  <a class=\"page-link\" href=\"#\">3</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                  <a class=\"page-link\" href=\"#\">4</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                  <a class=\"page-link\" href=\"#\">Next</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    \r\n      </div>"

/***/ }),

/***/ "./src/app/layout/site-management/component/extra-return-expences/extra-return-expences.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/extra-return-expences/extra-return-expences.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLW1hbmFnZW1lbnQvY29tcG9uZW50L2V4dHJhLXJldHVybi1leHBlbmNlcy9leHRyYS1yZXR1cm4tZXhwZW5jZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/site-management/component/extra-return-expences/extra-return-expences.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/extra-return-expences/extra-return-expences.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ExtraReturnExpencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraReturnExpencesComponent", function() { return ExtraReturnExpencesComponent; });
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

var ExtraReturnExpencesComponent = /** @class */ (function () {
    function ExtraReturnExpencesComponent() {
    }
    ExtraReturnExpencesComponent.prototype.ngOnInit = function () {
    };
    ExtraReturnExpencesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extra-return-expences',
            template: __webpack_require__(/*! ./extra-return-expences.component.html */ "./src/app/layout/site-management/component/extra-return-expences/extra-return-expences.component.html"),
            styles: [__webpack_require__(/*! ./extra-return-expences.component.scss */ "./src/app/layout/site-management/component/extra-return-expences/extra-return-expences.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExtraReturnExpencesComponent);
    return ExtraReturnExpencesComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-management/component/list-billty-dataentry/list-billty-dataentry.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/list-billty-dataentry/list-billty-dataentry.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Billty Entry'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete Billt Entry</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete this Billty Entry?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/site-management/component/list-billty-dataentry/list-billty-dataentry.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/list-billty-dataentry/list-billty-dataentry.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLW1hbmFnZW1lbnQvY29tcG9uZW50L2xpc3QtYmlsbHR5LWRhdGFlbnRyeS9saXN0LWJpbGx0eS1kYXRhZW50cnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/site-management/component/list-billty-dataentry/list-billty-dataentry.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/list-billty-dataentry/list-billty-dataentry.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ListBilltyDataentryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBilltyDataentryComponent", function() { return ListBilltyDataentryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _sitemanagement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sitemanagement.service */ "./src/app/layout/site-management/sitemanagement.service.ts");
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





var ListBilltyDataentryComponent = /** @class */ (function () {
    function ListBilltyDataentryComponent(router, meta, ss) {
        this.router = router;
        this.meta = meta;
        this.ss = ss;
        this.addButtonInfo = { text: 'Add Billty Entry', url: '/site-management/add-billty-dataentry' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('site-management/billty-dataentry');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Site/lrno/TruckNo/To Destination/Consignee' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Site', name: 'site', sort: false },
                { title: 'Lr no', name: 'lrno', sort: false },
                { title: 'Lr Date', name: 'lrdate', dateFormat: 'fullDate', sort: true },
                { title: 'TruckNo', name: 'truckno', sort: false },
                { title: 'CC', name: 'tcc', sort: false },
                { title: 'Destination', name: 'to', sort: false },
                { title: 'Consignee', name: 'consignne', sort: false },
                { title: 'SPI', name: 'spi', sort: false },
                { title: 'CRate', name: 'newrate', sort: true },
                { title: 'TRate', name: 'rate', sort: true },
                { title: 'Grade ', name: 'grade', sort: true },
                { title: 'Pump', name: 'diesalaccountname', sort: true },
                { title: 'Diesal Rate', name: 'drate', sort: true },
                // { title: 'User', name: 'user', sort: false },
                { title: 'Actions', links: ['Edit', 'Delete'] }
                // { title: 'Actions', links: ['Delete'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Site', name: 'site', sort: false },
                { title: 'Lr no', name: 'lrno', sort: false },
                { title: 'Lr Date', name: 'lrdate', dateFormat: 'fullDate', sort: true },
                { title: 'TruckNo', name: 'truckno', sort: false },
                { title: 'CC', name: 'tcc', sort: false },
                { title: 'Destination', name: 'to', sort: false },
                { title: 'Consignee', name: 'consignne', sort: false },
                { title: 'CRate', name: 'newrate', sort: true },
                { title: 'TRate', name: 'rate', sort: true },
                { title: 'Pump', name: 'diesalaccountname', sort: true },
                { title: 'Diesal Rate', name: 'drate', sort: true },
            ];
        }
    }
    ListBilltyDataentryComponent.prototype.ngOnInit = function () {
    };
    ListBilltyDataentryComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        // console.log('list material', data);
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/site-management/billty-dataentry/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (event.data.action === 'View') {
            this.router.navigate(["/site-management/billty-dataentry/" + this.dataRow['row']['_id'] + "/view"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListBilltyDataentryComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListBilltyDataentryComponent.prototype.deleteProject = function (index) {
        var _this = this;
        var data = {
            site: this.dataRow['row']['truckno'],
            truckno: this.dataRow['row']['site'],
            lrno: this.dataRow['row']['lrno']
        };
        this.ss.deleteBde(index).subscribe(function (ng2TableData) {
            _this.ss.updateTruckPositionBiltyGen(data).subscribe(function (res) {
                _this.process = 'done';
                $('#deleteModal').modal('hide');
                _this.refreshRedTable = { mode: 'delete', id: index };
            });
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) { console.log(error); });
    };
    ListBilltyDataentryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-billty-dataentry',
            template: __webpack_require__(/*! ./list-billty-dataentry.component.html */ "./src/app/layout/site-management/component/list-billty-dataentry/list-billty-dataentry.component.html"),
            styles: [__webpack_require__(/*! ./list-billty-dataentry.component.scss */ "./src/app/layout/site-management/component/list-billty-dataentry/list-billty-dataentry.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _sitemanagement_service__WEBPACK_IMPORTED_MODULE_3__["SitemanagementService"]])
    ], ListBilltyDataentryComponent);
    return ListBilltyDataentryComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-management/component/list-vehicle-master/list-vehicle-master.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/list-vehicle-master/list-vehicle-master.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Vehicle Master'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/site-management/component/list-vehicle-master/list-vehicle-master.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/list-vehicle-master/list-vehicle-master.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLW1hbmFnZW1lbnQvY29tcG9uZW50L2xpc3QtdmVoaWNsZS1tYXN0ZXIvbGlzdC12ZWhpY2xlLW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/site-management/component/list-vehicle-master/list-vehicle-master.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/list-vehicle-master/list-vehicle-master.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ListVehicleMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVehicleMasterComponent", function() { return ListVehicleMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _sitemanagement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sitemanagement.service */ "./src/app/layout/site-management/sitemanagement.service.ts");
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





var ListVehicleMasterComponent = /** @class */ (function () {
    function ListVehicleMasterComponent(router, meta, as) {
        this.router = router;
        this.meta = meta;
        this.as = as;
        this.addButtonInfo = { text: 'Add Vehicle Master', url: '/site-management/add-vehicle-master' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('site-management/vehicle-master');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Truck No, Owner Name' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'TruckNo', name: 'truckno', sort: true },
                { title: 'Type', name: 'vtype', sort: true },
                { title: 'Owner Name', name: 'ownername', sort: true },
                { title: 'Tyre', name: 'type', sort: true },
                { title: 'CC', name: 'newcarring', sort: true },
                { title: 'SPI', name: 'spi', sort: true },
                { title: 'Commission', name: 'newcommision', sort: true },
                { title: 'Rates', name: 'newrates', sort: true },
                { title: 'Engine Type', name: 'enginetype', sort: true },
                { title: 'Actions', links: ['Edit', 'Delete'] }
            ];
        }
        else {
            this.columns = [
                { title: 'TruckNo', name: 'truckno', sort: true },
                { title: 'Type', name: 'vtype', sort: true },
                { title: 'Owner Name', name: 'ownername', sort: true },
                { title: 'Tyre', name: 'type', sort: true },
                { title: 'SPI', name: 'spi', sort: true },
                { title: 'CC', name: 'newcarring', sort: true },
                { title: 'Engine Type', name: 'enginetype', sort: true },
                { title: 'Actions', links: ['Edit'] }
            ];
        }
    }
    ListVehicleMasterComponent.prototype.ngOnInit = function () {
    };
    ListVehicleMasterComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/site-management/vehicle-master/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListVehicleMasterComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListVehicleMasterComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.as.deleteVm(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) {
            console.log(error);
        });
    };
    ListVehicleMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-vehicle-master',
            template: __webpack_require__(/*! ./list-vehicle-master.component.html */ "./src/app/layout/site-management/component/list-vehicle-master/list-vehicle-master.component.html"),
            styles: [__webpack_require__(/*! ./list-vehicle-master.component.scss */ "./src/app/layout/site-management/component/list-vehicle-master/list-vehicle-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _sitemanagement_service__WEBPACK_IMPORTED_MODULE_3__["SitemanagementService"]])
    ], ListVehicleMasterComponent);
    return ListVehicleMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-management/component/plant-truck-position/billty-selection/billty-selection.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/plant-truck-position/billty-selection/billty-selection.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">List of billties</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form>\r\n    <div class=\"form-group\" style=\"max-height: 400px;overflow: scroll;\">\r\n      <table id=\"table_one\" class=\"table mytable\">\r\n        <thead>\r\n          <tr>\r\n            <th>Select</th>\r\n            <th>Lr No</th>\r\n            <th >Truck No</th>\r\n            <th>Lr Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let billty of billties; let i = index\" (click)=\"onCheckedBillties(billty, i)\" style=\"cursor: pointer;\">\r\n            \r\n            <td *ngIf=\"billty.checked\"><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i></td>\r\n            <td *ngIf=\"!billty.checked\"><i class=\"fa fa-square-o\" aria-hidden=\"true\"></i></td>\r\n            <td>{{billty.lrno ? billty.lrno : '--'}}</td>\r\n            <td>{{billty.truckno ? billty.truckno : '--'}}</td>\r\n            <td>{{billty.lrdate ? billty.lrdate : '--'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"4\" *ngIf=\"loading\">\r\n              <div class=\"showbox\">\r\n                <div class=\"loader\">\r\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngIf=\"billties.length === 0\">\r\n            <td colspan=\"4\" align=\"center\">No data available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    \r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"updateBillties()\">Save</button>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/site-management/component/plant-truck-position/billty-selection/billty-selection.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/plant-truck-position/billty-selection/billty-selection.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLW1hbmFnZW1lbnQvY29tcG9uZW50L3BsYW50LXRydWNrLXBvc2l0aW9uL2JpbGx0eS1zZWxlY3Rpb24vYmlsbHR5LXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/site-management/component/plant-truck-position/billty-selection/billty-selection.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/plant-truck-position/billty-selection/billty-selection.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: BilltySelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BilltySelectionComponent", function() { return BilltySelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/site.service */ "./src/app/shared/services/site.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BilltySelectionComponent = /** @class */ (function () {
    function BilltySelectionComponent(activeModal, site, toastr) {
        this.activeModal = activeModal;
        this.site = site;
        this.toastr = toastr;
        this.billties = [];
        this.obj = {
            lrno: 0,
            srno: 0
        };
        this.loading = false;
    }
    BilltySelectionComponent.prototype.ngOnInit = function () {
        this.getBillties(this.truckDetails.truckno);
    };
    BilltySelectionComponent.prototype.getBillties = function (truckno) {
        var _this = this;
        this.loading = true;
        this.site.getBilltyList(truckno).subscribe(function (res) {
            _this.loading = false;
            res.results.forEach(function (element) {
                element.checked = false;
                element.lrdate = moment(element.lrdate).format('DD/MM/YYYY');
            });
            _this.billties = res.results;
        }, function (err) {
            _this.loading = false;
            console.log('>>>>>>>>>err', err);
            _this.toastr.error('Something went wrong.');
        });
    };
    BilltySelectionComponent.prototype.onCheckedBillties = function (data, index) {
        var _this = this;
        this.billties.forEach(function (v, i) {
            if (index === i) {
                v.checked = true;
                _this.obj.lrno = v.lrno;
                _this.obj.srno = _this.truckDetails.srno;
            }
            else {
                v.checked = false;
            }
        });
    };
    BilltySelectionComponent.prototype.updateBillties = function () {
        var _this = this;
        console.log('>>>>>>>save', this.obj);
        this.site.updateBillties(this.obj).subscribe(function (res) {
            _this.toastr.success('Billties updated successfully.');
            _this.truckDetails.billtytime = moment(res.date).format('DD/MM/YYYY');
            // setTimeout(function () {
            //   this.getTruckData();
            // }, 2000);
            _this.activeModal.close();
        }, function (err) {
            _this.activeModal.dismiss();
            _this.toastr.error('Something went wrong.');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BilltySelectionComponent.prototype, "truckDetails", void 0);
    BilltySelectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billty-selection',
            template: __webpack_require__(/*! ./billty-selection.component.html */ "./src/app/layout/site-management/component/plant-truck-position/billty-selection/billty-selection.component.html"),
            styles: [__webpack_require__(/*! ./billty-selection.component.scss */ "./src/app/layout/site-management/component/plant-truck-position/billty-selection/billty-selection.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_2__["SiteService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], BilltySelectionComponent);
    return BilltySelectionComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-management/component/plant-truck-position/plant-truck-position.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/plant-truck-position/plant-truck-position.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>\r\n      <i class=\"fa fa-compass\"></i> Plants Truck Position\r\n    </strong>\r\n\r\n    <!-- <div class=\"col-md-2 pull-right\">\r\n      <button type=\"submit\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-success\" (click)=\"addData()\">\r\n        <i class=\"fa fa-floppy-o\"></i> ADD</button>\r\n    </div> -->\r\n  </div>\r\n  <form [formGroup]=\"addForm\" (ngSubmit)=\"addData()\" novalidate>\r\n    <div class=\"card-body\">\r\n      <p>Notes</p>\r\n      <ul>\r\n        <li>In order to fetch truck position list, Site name is required.</li>\r\n        <li>In order to add plant truck position, Site name, truck number and destination is required.</li>\r\n      </ul>\r\n      <hr>\r\n      <div class=\" form-group row\">\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"required\">Site</label>\r\n            <select formControlName=\"site\" class=\"form-control auto-entry\" required>\r\n              <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                {{ s.branch_name }}\r\n              </option>\r\n            </select>\r\n            <span class=\"text-danger\" *ngIf=\"addForm.controls['site'].hasError('required') && addForm.controls['site'].touched\">This field is required</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"required\">Lr. No</label>\r\n            <input type=\"text\" formControlName=\"lrno\" class=\"form-control auto-entry\" placeholder=\"Lr.No\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"required\">Truck No.</label>\r\n            <input  class=\"form-control manual-entry\" ng2-auto-complete\r\n            formControlName=\"truck_no\"\r\n            [source]=\"truckPosition.bind(this)\" list-formatter=\"truckno\" (valueChanged)=\"getDocumentStatus()\" />\r\n            <span class=\"text-danger\" *ngIf=\"submitted || addForm.controls['truck_no'].hasError('required') && addForm.controls['truck_no'].touched\">This field is required</span>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Current Destination*</label>\r\n            <input  class=\"form-control manual-entry\" ng2-auto-complete\r\n            formControlName=\"destination\"\r\n            [source]=\"observableSource.bind(this)\" list-formatter=\"name\" />\r\n            <span class=\"text-danger\" *ngIf=\"submitted || addForm.controls['destination'].hasError('required') && addForm.controls['destination'].touched\">This field is required</span>\r\n          </div>\r\n        </div> -->\r\n\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <label class=\"required\">Current Destination</label>\r\n            <input type=\"text\" class=\"form-control auto-entry\" formControlName=\"destination\" />\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-6\">\r\n          <label>Preferred Destination</label>\r\n          <ng-select [multiple]=\"true\" [items]=\"destination_option\" placeholder=\"Type and search Destination\" bindLabel=\"name\" bindValue=\"name\"\r\n            formControlName=\"prefdestination\" class=\"manual-entry\">\r\n          </ng-select>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Manual </label>\r\n            <div class=\"checkbox\">\r\n                <label>\r\n                    <input type=\"checkbox\" formControlName=\"mannualtodest\" >\r\n                    Display All Destination?\r\n                </label>\r\n            </div>\r\n              </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label class=\"required\" >Product</label>\r\n            <ng-select [items]=\"products\" placeholder=\"Type and search Product\" bindLabel=\"name\" bindValue=\"name\"\r\n            formControlName=\"product\">\r\n          </ng-select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <label>Last KM Reading</label>\r\n            <input type=\"text\" class=\"form-control auto-entry\" formControlName=\"lastkm_reading\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <label>Last Destination Km</label>\r\n            <input type=\"text\" class=\"form-control auto-entry\" formControlName=\"lastdestinationkm\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <label>Google Km</label>\r\n            <input type=\"text\" class=\"form-control auto-entry\" formControlName=\"googlekm\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <label>Current KM Reading</label>\r\n            <input type=\"text\" class=\"form-control manual-entry\" formControlName=\"km_reading\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <label>Excess KM</label>\r\n            <input type=\"text\" class=\"form-control auto-entry\" formControlName=\"excesskm\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Remarks</label>\r\n            <input type=\"text\" class=\"form-control manual-entry\" formControlName=\"remarks\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-9\">\r\n            <table class=\"table table-bordered\">\r\n              <tr>\r\n                <td *ngFor= \"let data of dataList; let i = index\" >{{data.name ? data.name : '--'}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td *ngFor=\"let data of dataList; let i = index\"\r\n                    [ngClass]=\"{'expired': data.expired, 'twenty_days': data['20_days'], 'forty_days': data['40_days']}\">\r\n                  </td>\r\n              </tr>\r\n            </table>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <button type=\"button\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-info\" (click)=\"fetchData()\">\r\n          <i class=\"fa fa-download\"></i> Fetch</button>\r\n      <button type=\"submit\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-success\">\r\n        <i class=\"fa fa-floppy-o\"></i> Save</button>\r\n      <button type=\"button\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-warning\" (click)=\"resetFilters()\">\r\n              <i class=\"fa fa-refresh\"></i> Refresh</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<br>\r\n<ngb-pagination\r\n[(page)]=\"pagination.currenPage\"\r\n[pageSize]=\"pagination.pageSize\"\r\n[collectionSize]=\"pagination.total\"\r\n[maxSize]=\"pagination.maxSize\"\r\n(pageChange)=\"getTruckData()\"\r\n></ngb-pagination>\r\n\r\n<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-compass\"></i> Plants Truck Position List\r\n        </div>\r\n        <div class=\"card-body\">\r\n\r\n          <div class=\"clearfix\"></div>\r\n          <br>\r\n          <form [formGroup]=\"editForm\">\r\n            <table id=\"table_one\" class=\"table mytable\">\r\n              <thead>\r\n                <tr>\r\n                  <th class=\"text-center\">Date</th>\r\n                  <th class=\"text-center\">Lrno.</th>\r\n                  <th class=\"text-center\">Srno.</th>\r\n                  <th class=\"text-center\">Truck No.</th>\r\n                  <th class=\"text-center\">CC</th>\r\n                  <th class=\"text-center\">Destination</th>\r\n                  <th class=\"text-center\">Time In</th>\r\n                  <th class=\"text-center\">Placed Time</th>\r\n                  <th class=\"text-center\">Billty Time</th>\r\n                  <th class=\"text-center\">Actions</th>\r\n                  <!-- <th class=\"text-center\">Delete</th> -->\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let detail of truckDetails; let i = index\">\r\n                  <td class=\"text-center\">{{detail.pdate ? detail.pdate : '--'}}</td>\r\n                  <td class=\"text-center\">{{detail.lrno ? detail.lrno : '--'}}</td>\r\n                  <td class=\"text-center\">{{detail.srno ? detail.srno : '--'}}</td>\r\n                  <td class=\"text-center\">{{detail.truckno ? detail.truckno : '--'}}</td>\r\n                  <td class=\"text-center\">{{detail.cc ? detail.cc : '0'}}</td>\r\n                  <td class=\"text-center\">{{detail.destination ? detail.destination : '--'}}</td>\r\n                  <td class=\"text-center\">{{detail.timein ? detail.timein : '--'}}</td>\r\n\r\n                  <td class=\"text-center\">\r\n                    {{detail.placedtime ? detail.placedtime : '--'}}\r\n                  </td>\r\n                  <td class=\"text-center\" *ngIf=\"detail.updated\">\r\n                    <ngb-timepicker formControlName=\"place_time\"></ngb-timepicker>\r\n                  </td>\r\n\r\n                  <td class=\"text-center\" *ngIf=\"detail.billtytime\">{{detail.billtytime}}</td>\r\n                  <td class=\"text-center\" *ngIf=\"!detail.billtytime\"><button class=\"btn btn-warning\" (click)=\"openBiltyModal(detail)\">Add Billty</button></td>\r\n\r\n                  <td class=\"text-center\">\r\n                    <p>\r\n                      <button *ngIf=\"!detail.placedtime\" class=\"btn btn-primary\" (click)=\"updatePlacedTime(detail)\">Update Placed Time</button>&nbsp;\r\n                      <button *ngIf=\"detail.status === 'Active'\" class=\"btn btn-danger\" (click)=\"cancelEntry(detail)\">Cancel</button>&nbsp;\r\n                    </p>\r\n                    <p *ngIf=\"detail.placedtime\"> -- </p>\r\n\r\n                    <!-- <button class=\"btn btn-success\" (click)=\"update(detail)\">Update</button> -->\r\n                  </td>\r\n                  <!-- <td>\r\n                    <button class=\"btn btn-danger\" (click)=\"delete(detail, i)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</button>\r\n                  </td> -->\r\n                </tr>\r\n                <tr *ngIf=\"truckDetails.length === 0\">\r\n                  <td class=\"text-center\" colspan=\"8\">No data available</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n        </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/site-management/component/plant-truck-position/plant-truck-position.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/plant-truck-position/plant-truck-position.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expired {\n  background-color: red; }\n\n.twenty_days {\n  background-color: yellow; }\n\n.forty_days {\n  background-color: green; }\n\n.auto-entry {\n  border: 2px solid #fcbd47 !important; }\n\n.manual-entry {\n  border: 2px solid #51cc51 !important; }\n\n::ng-deep .ng-select.manual-entry {\n  border: 2px solid #51cc51 !important; }\n\n::ng-deep .ng-select.auto-entry {\n  border: 2px solid #fcbd47 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpdGUtbWFuYWdlbWVudC9jb21wb25lbnQvcGxhbnQtdHJ1Y2stcG9zaXRpb24vRDpcXHRlc3RpbmdfZm9sZGVyXFx0aGlydVxcZnJvbnRlbmRcXHRkX0Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNpdGUtbWFuYWdlbWVudFxcY29tcG9uZW50XFxwbGFudC10cnVjay1wb3NpdGlvblxccGxhbnQtdHJ1Y2stcG9zaXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSx3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxvQ0FBNkMsRUFBQTs7QUFHakQ7RUFDSSxvQ0FBNEMsRUFBQTs7QUFHaEQ7RUFDSSxvQ0FBNEMsRUFBQTs7QUFHaEQ7RUFDSSxvQ0FBNkMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLW1hbmFnZW1lbnQvY29tcG9uZW50L3BsYW50LXRydWNrLXBvc2l0aW9uL3BsYW50LXRydWNrLXBvc2l0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGlyZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4udHdlbnR5X2RheXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59XHJcblxyXG4uZm9ydHlfZGF5cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmF1dG8tZW50cnl7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJnYigyNTIsIDE4OSwgNzEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYW51YWwtZW50cnl7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJnYig4MSwgMjA0LCA4MSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5uZy1zZWxlY3QubWFudWFsLWVudHJ5e1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoODEsIDIwNCwgODEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmctc2VsZWN0LmF1dG8tZW50cnl7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJnYigyNTIsIDE4OSwgNzEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/site-management/component/plant-truck-position/plant-truck-position.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/plant-truck-position/plant-truck-position.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PlantTruckPositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantTruckPositionComponent", function() { return PlantTruckPositionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/site.service */ "./src/app/shared/services/site.service.ts");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _billty_selection_billty_selection_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./billty-selection/billty-selection.component */ "./src/app/layout/site-management/component/plant-truck-position/billty-selection/billty-selection.component.ts");
/* harmony import */ var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var PlantTruckPositionComponent = /** @class */ (function () {
    function PlantTruckPositionComponent(fb, toastr, site, reportService, meta, ds, router, modalService) {
        var _this = this;
        this.fb = fb;
        this.toastr = toastr;
        this.site = site;
        this.reportService = reportService;
        this.meta = meta;
        this.ds = ds;
        this.router = router;
        this.modalService = modalService;
        this.loading = false;
        this.loaded = false;
        // submitted = false;
        this.sites = [];
        this.dataList = [];
        this.truckDetails = [];
        this.destinations = [];
        this.destination_option = [];
        this.products = [];
        this.filters = {
            page: 0,
            site_name: ''
        };
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.billties = [];
        this.submitted = false;
        // Search query for destination list
        this.observableSource = function (keyword) {
            if (keyword) {
                return _this.site.getDestinationList(keyword)
                    .map(function (res) {
                    return res;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"].of([]);
            }
        };
        // Search query for truck no list
        this.truckPosition = function (keyword) {
            if (keyword) {
                return _this.site.getTruckPositionList(keyword)
                    .map(function (res) {
                    return res;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"].of([]);
            }
        };
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        this.addForm = this.fb.group({
            site: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lrno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            truck_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            destination: [''],
            prefdestination: [''],
            lastkm_reading: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastdestinationkm: [0],
            mannualtodest: [''],
            km_reading: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            excesskm: [0],
            product: [''],
            googlekm: [0],
            remarks: ['']
        });
        this.editForm = this.fb.group({
            place_time: ['']
        });
    }
    PlantTruckPositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSites();
        // this.getPrefdestination();
        this.addForm.get('site').valueChanges.subscribe(function (site) {
            _this.reportService.getMaxLrno(site).subscribe(function (res) {
                _this.addForm.patchValue(res);
            });
            // getting to destination form plant rate list
            _this.meta.getToDestinationsFromPlantRateList(site).subscribe(function (res) {
                // console.log('To destination', res['info'] );
                var toDestination = [];
                res['info'].forEach(function (dim) {
                    toDestination.push(dim.destination);
                });
                _this.destination_option = toDestination;
            });
            if (site != null) {
                _this.meta.getTruckPositionParking(site).subscribe(function (res) {
                    _this.addForm.controls['destination'].setValue(null);
                    // console.log(' parking destination', res['destination']);
                    _this.addForm.controls['destination'].setValue(res['destination']);
                });
            }
        });
        this.addForm.get('mannualtodest').valueChanges.subscribe(function (val) {
            _this.addForm.controls['prefdestination'].setValue(null);
            _this.meta.getprefdestinationlist().subscribe(function (siteInfo) {
                _this.destination_option = siteInfo['result'];
                console.log('All Destination list >>>>>', siteInfo['result']);
            }, function (err) {
                console.log('err   >>>', err);
            });
        });
        this.addForm.get('truck_no').valueChanges.subscribe(function (truck_no) {
            _this.reportService.getTruckDestinationDetails(truck_no).subscribe(function (res) {
                var tkmr = res['result']['tkmr'];
                var newkm = res['result']['newkm'];
                var destValue = {
                    lastkm_reading: tkmr ? tkmr : 0,
                    lastdestinationkm: newkm ? newkm : 0
                };
                _this.addForm.patchValue(destValue);
            });
        });
        this.addForm.get('lastkm_reading').valueChanges.subscribe(function (val) {
            _this.addForm.controls['km_reading'].setValue(null);
            var lkmr, ckmr, ldkm;
            lkmr = Number(_this.addForm.controls['lastkm_reading'].value);
            ldkm = Number(_this.addForm.controls['lastdestinationkm'].value);
            ckmr = Number(lkmr) + Number(ldkm);
            _this.addForm.get('km_reading').setValue(Number(ckmr));
        });
        this.addForm.get('lastdestinationkm').valueChanges.subscribe(function (val) {
            _this.addForm.controls['km_reading'].setValue(null);
            var lkmr, ckmr, ldkm;
            lkmr = Number(_this.addForm.controls['lastkm_reading'].value);
            ldkm = Number(_this.addForm.controls['lastdestinationkm'].value);
            ckmr = Number(lkmr) + Number(ldkm);
            _this.addForm.get('km_reading').setValue(Number(ckmr));
        });
        this.addForm.get('km_reading').valueChanges.subscribe(function (val) {
            _this.addForm.controls['excesskm'].setValue(null);
            var lkmr, ckmr, exkm, ldkm;
            lkmr = Number(_this.addForm.controls['lastkm_reading'].value);
            ckmr = Number(_this.addForm.controls['km_reading'].value);
            ldkm = Number(_this.addForm.controls['lastdestinationkm'].value);
            exkm = Number(ckmr) - Number(lkmr) - Number(ldkm);
            _this.addForm.get('excesskm').setValue(Number(exkm));
        });
        this.getOptions();
    };
    PlantTruckPositionComponent.prototype.getOptions = function () {
        // this.ds.getProductList().subscribe( (res: any) => {
        //   // console.log('results  >>>', res);
        //   this.products = res;
        // });
        var _this = this;
        this.ds.getProductList().subscribe(function (trackInfo) {
            _this.products = trackInfo['result'];
        });
    };
    PlantTruckPositionComponent.prototype.getPrefdestination = function () {
        var _this = this;
        this.meta.getprefdestinationlist().subscribe(function (res) {
            console.log('>>>>res', res);
            var vList = [];
            res.result.forEach(function (prefdestination) {
                vList.push(prefdestination.name);
            });
            _this.destination_option = vList;
            console.log('Pref Destination list >>>>>', _this.destination_option);
        }, function (err) {
            console.log('err   >>>', err);
        });
    };
    PlantTruckPositionComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.meta.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.sites = res;
            if (_this.usertype === 'ADMIN') {
                _this.addForm.controls['site'].setValue(_this.sites[0].branch_name);
            }
            else {
                _this.addForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    PlantTruckPositionComponent.prototype.getDocumentStatus = function () {
        var _this = this;
        this.loading = true;
        this.loaded = false;
        this.dataList = [];
        this.site.getDocumentStatus({ truckno: this.addForm.value.truck_no.truckno }).subscribe(function (res) {
            _this.loading = false;
            _this.dataList = res;
        }, function (err) {
            _this.loading = false;
            console.log('error', err);
        });
        this.generateTruckLastBilltyDetails();
    };
    PlantTruckPositionComponent.prototype.onDestChange = function () {
        this.meta.getToDestinations(this.addForm.value.destination).subscribe(function (res) {
            console.log('>>>>>>>>Successs', res);
        }, function (err) {
            console.log('>>>>>>>>err', err);
        });
    };
    PlantTruckPositionComponent.prototype.generateTruckLastBilltyDetails = function () {
        var _this = this;
        var truck_no = this.addForm.controls.truck_no.value;
        var site = this.addForm.controls.site.value;
        if (truck_no) {
            var matchCond = { truckno: truck_no };
            console.log('mathCond >>', matchCond);
            this.meta.getTruckLastBilltyDetails(matchCond).subscribe(function (mrInfo) {
                _this.addForm.controls.lastkm_reading.setValue(mrInfo['tkmr']);
                _this.addForm.controls.lastdestinationkm.setValue(mrInfo['newkm']);
            }, function (error) {
                console.log(error);
            });
        }
    };
    PlantTruckPositionComponent.prototype.fetchData = function () {
        if (this.addForm.controls['site'].valid) {
            this.getTruckData();
        }
        else {
            this.toastr.error('Please select site name to get data.');
        }
    };
    PlantTruckPositionComponent.prototype.getTruckData = function () {
        var _this = this;
        this.filters.page = this.pagination.currenPage;
        if (this.addForm.value.site) {
            this.filters.site_name = this.addForm.value.site;
        }
        this.loading = true;
        this.site.getTruckPosition(this.filters).subscribe(function (res) {
            console.log('>>>>>>truckData', res);
            _this.loading = false;
            res.results.forEach(function (element) {
                element.updated = false;
                element.show = false;
                element.pdate = moment(element.pdate, 'YYYY-MM-DD').format('DD/MM/YYYY');
                if (element.placedtime) {
                    element.placedtime = moment_timezone__WEBPACK_IMPORTED_MODULE_10__(element.placedtime).tz('Asia/Calcutta').format('DD/MM/YYYY HH:mm:ss');
                }
                if (element.billtytime) {
                    element.billtytime = moment(element.billtytime).format('DD/MM/YYYY');
                }
            });
            _this.truckDetails = res.results;
            _this.pagination.total = res.total;
            _this.getDocumentStatus();
        }, function (err) {
            _this.loading = false;
            _this.toastr.error('Something went wrong.');
            console.log('>>>>>>truckDataerr', err);
        });
    };
    PlantTruckPositionComponent.prototype.delete = function (data, index) {
        var _this = this;
        console.log('data >>>>>', data);
        var obj = {
            sr_no: data.srno,
        };
        var conf = confirm('Are you sure you want to delete this record ?');
        if (conf === true) {
            // this.loading = true;
            console.log('data  >>>>', obj);
            this.site.deleteTruckPosition(obj).subscribe(function (res) {
                _this.truckDetails.splice(index, 1);
                _this.toastr.success('Truck deleted successfully.');
                // this.loading = false;
            }, function (err) {
                _this.toastr.error('Something went wrong.');
                // this.loading = false;
            });
        }
    };
    PlantTruckPositionComponent.prototype.addData = function () {
        var _this = this;
        this.submitted = true;
        if (this.addForm.valid) {
            this.submitted = false;
            var obj = {
                site: this.addForm.value.site,
                lrno: this.addForm.value.lrno,
                truckno: this.addForm.value.truck_no.truckno,
                destination: this.addForm.value.destination,
                prefdestination: this.addForm.value.prefdestination,
                product: this.addForm.value.product,
                lastkm_reading: this.addForm.value.lastkm_reading,
                lastdestinationkm: this.addForm.value.lastdestinationkm,
                googlekm: this.addForm.value.googlekm,
                km_reading: this.addForm.value.km_reading,
                excesskm: this.addForm.value.excesskm,
                remarks: this.addForm.value.remarks
            };
            this.loading = true;
            this.site.addTruckPosition(obj).subscribe(function (res) {
                _this.loading = false;
                _this.toastr.success('Truck details added successfully.');
                _this.getTruckData();
                _this.addForm.reset();
                if (_this.usertype === 'ADMIN') {
                    _this.addForm.controls['site'].setValue(_this.sites[0].branch_name);
                }
                else {
                    _this.addForm.controls['site'].setValue(_this.site_name);
                }
            }, function (err) {
                _this.loading = false;
                _this.toastr.error('Something went wrong.');
            });
        }
    };
    PlantTruckPositionComponent.prototype.resetFilters = function () {
        this.addForm.reset();
        if (this.usertype === 'ADMIN') {
            this.addForm.controls['site'].setValue(this.sites[0].branch_name);
        }
        else {
            this.addForm.controls['site'].setValue(this.site_name);
        }
        this.getTruckData();
    };
    PlantTruckPositionComponent.prototype.edit = function (data) {
        data.editing = true;
        data.updated = true;
        data.show = !data.show;
        console.log('>>>>>>>>data', data);
        var val;
        var time = data.placedtime.split(':');
        var obj = {
            hour: parseInt(time[0]),
            minute: parseInt(time[1]),
            second: parseInt(time[2]),
        };
        val = obj;
        this.editForm.controls['place_time'].setValue(val);
    };
    PlantTruckPositionComponent.prototype.cancel = function (data) {
        data.editing = false;
        data.updated = false;
        data.show = false;
    };
    PlantTruckPositionComponent.prototype.update = function (data) {
        var _this = this;
        // For pass time with '0'
        var time = this.editForm.value.place_time;
        time.hour = time.hour < 10 ? '0' + time.hour.toString() : time.hour;
        time.minute = time.minute < 10 ? '0' + time.minute.toString() : time.minute;
        time.second = time.second < 10 ? '0' + time.second.toString() : time.second;
        var finalTime = time.hour + ':' + time.minute + ':' + time.second;
        var obj = {
            placed_time: finalTime,
            sr_no: data.srno
        };
        this.loading = true;
        this.site.updateTruckPosition(obj).subscribe(function (res) {
            _this.loading = false;
            data.editing = false;
            data.updated = false;
            _this.toastr.success('Truck details updated successfully.');
            // Set value for table
            var formVal = _this.editForm.value.place_time;
            formVal = formVal.hour.toString() + ':' + formVal.minute.toString() + ':' + formVal.minute.toString();
            data.placedtime = formVal;
        }, function (err) {
            _this.loading = false;
            _this.toastr.error('Something went wrong.');
            console.log('>>>>>>>>err', err);
        });
    };
    PlantTruckPositionComponent.prototype.openBiltyModal = function (detail) {
        this.selectedRow = detail;
        var modalRef = this.modalService.open(_billty_selection_billty_selection_component__WEBPACK_IMPORTED_MODULE_11__["BilltySelectionComponent"]);
        modalRef.componentInstance.truckDetails = detail;
    };
    PlantTruckPositionComponent.prototype.cancelModal = function () {
        if (this.modalRef) {
            this.modalRef.dismiss();
            this.modalRef = null;
        }
    };
    PlantTruckPositionComponent.prototype.updatePlacedTime = function (detail) {
        var _this = this;
        this.site.updatePlacedtime({ srno: detail.srno }).subscribe(function (res) {
            _this.toastr.success('Updated placed time!');
            detail.placedtime = res.time;
        }, function (err) {
            _this.toastr.error('Something went wrong.');
        });
    };
    PlantTruckPositionComponent.prototype.cancelEntry = function (detail) {
        var _this = this;
        if (confirm('Are you sure you want to do this?')) {
            this.site.cancelPositionEntry({ id: detail.id }).subscribe(function (res) {
                _this.toastr.success('Updated placed time!');
                detail.status = 'cancelled';
                _this.getTruckData();
            }, function (err) {
                _this.toastr.error('Something went wrong.');
            });
        }
    };
    PlantTruckPositionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plant-truck-position',
            template: __webpack_require__(/*! ./plant-truck-position.component.html */ "./src/app/layout/site-management/component/plant-truck-position/plant-truck-position.component.html"),
            styles: [__webpack_require__(/*! ./plant-truck-position.component.scss */ "./src/app/layout/site-management/component/plant-truck-position/plant-truck-position.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_6__["SiteService"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__["MetaService"],
            src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_12__["DashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]])
    ], PlantTruckPositionComponent);
    return PlantTruckPositionComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-management/component/pod/pod.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/site-management/component/pod/pod.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>Pod Acknowledgement</strong>\r\n  </div>\r\n<div class=\"card-body\">\r\n  <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n    <div class=\" form-group row\">\r\n      <div class=\"col-sm\">\r\n        <label for=\"city\">*Site</label>\r\n        <select id=\"select1\" name=\"select1\" required class=\"form-control\">\r\n          <option value=\"0\">Please select</option>\r\n          <option value=\"1\">Nagpur</option>\r\n          <option value=\"2\">Awarpur</option>\r\n          <option value=\"3\">Bela Coal MP</option>\r\n          <option value=\"4\">Bela MP</option>\r\n          <option value=\"5\">Maihar MP</option>\r\n          <option value=\"6\">MCW Gadchandur</option>\r\n          <option value=\"7\">NWC Plant</option>\r\n          <option value=\"8\">Reliance Hazira</option>\r\n          <option value=\"9\">Rewa Hub MP</option>\r\n          <option value=\"10\">Sidhi MP</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"col-sm\">\r\n        <label for=\"postal-code\">Pod Date</label>\r\n        <input type=\"date\" class=\"form-control\" id=\"postal-code\">\r\n      </div>\r\n    \r\n    <div class=\"col-sm\">\r\n      <label for=\"postal-code\">Lr No</label>\r\n      <input type=\"text\" class=\"form-control\">\r\n    </div>\r\n\r\n</div>\r\n<!--/.row1-->\r\n<div class=\" form-group row\">\r\n  <div class=\"col-sm\">\r\n    <label for=\"postal-code\">Truck No</label>\r\n    <input type=\"text\" class=\"form-control\">\r\n  </div>\r\n\r\n  <div class=\"col-sm\">\r\n    <label for=\"city\">Pod Pending</label>\r\n    <select id=\"select1\" name=\"select1\" required class=\"form-control\">\r\n      <option value=\"0\">Please select</option>\r\n      <option value=\"1\">Yes</option>\r\n      <option value=\"2\">No</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"col-sm\">\r\n    <label for=\"city\">Pod OK</label>\r\n    <select id=\"select1\" name=\"select1\" required class=\"form-control\">\r\n      <option value=\"0\">Please select</option>\r\n      <option value=\"1\">Ok</option>\r\n      <option value=\"2\">Not Ok</option>\r\n\r\n    </select>\r\n  </div>\r\n\r\n</div>\r\n<div class=\" form-group row\">\r\n\r\n\r\n  <div class=\"col-sm-4\">\r\n    <label for=\"postal-code\">Remarks</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"postal-code\">\r\n  </div>\r\n\r\n</div>\r\n</form>\r\n</div>\r\n  <div class=\"card-footer\">\r\n    <button type=\"submit\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-success\">\r\n      <i class=\"fa fa-dot-circle-o\"></i> Save</button>\r\n    <button type=\"reset\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-warning\">\r\n      <i class=\"fa fa-star\"></i> Refresh</button>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n    <div class=\"animated fadeIn\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <i class=\"fa fa-align-justify\"></i> Prepared By Administrator\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                                  \r\n                  <div class=\"col-md-8\">\r\n                    <ul class=\"pagination\">\r\n                      <li class=\"page-item\">\r\n                        <a class=\"page-link\" href=\"#\">Copy</a>\r\n                      </li>\r\n                      <li class=\"page-item \">\r\n                        <a class=\"page-link\" href=\"#\">Excel</a>\r\n                      </li>\r\n                      <li class=\"page-item\">\r\n                        <a class=\"page-link\" href=\"#\">PDF</a>\r\n                      </li>\r\n                      <li class=\"page-item\">\r\n                        <a class=\"page-link\" href=\"#\">Column Visibility</a>\r\n                      </li>\r\n                \r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                      <div class=\"input-group\">\r\n                        <!-- <span class=\"input-group-addon\">\r\n                          <i class=\"fa fa-search\"></i>\r\n                        </span> -->\r\n                        <input type=\"text\" class=\"form-control\"  placeholder=\"Search by name\" />\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Site</th>\r\n                    <th>Date</th>\r\n                    <th>LR NO</th>\r\n                    <th>Truck No</th>\r\n                    <th>Pending</th>\r\n                    <th>OK</th>\r\n                    <th>Edit</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>Samppa Nori</td>\r\n                    <td>2012/01/01</td>\r\n                    <td>123</td>\r\n                    <td>Mh123456</td>\r\n                    <td>yes</td>\r\n                    <td>pod pending</td>\r\n                    <td>\r\n                      <a class=\"badge badge-success\" href=\"#\">\r\n                        <i class=\"fa fa-pencil\"></i>\r\n                      </a>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                      <td>Samppa Nori</td>\r\n                      <td>2012/01/01</td>\r\n                      <td>123</td>\r\n                      <td>Mh123456</td>\r\n                      <td>yes</td>\r\n                      <td>pod pending</td>\r\n                      <td>\r\n                        <a class=\"badge badge-success\" href=\"#\">\r\n                          <i class=\"fa fa-pencil\"></i>\r\n                        </a>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Samppa Nori</td>\r\n                        <td>2012/01/01</td>\r\n                        <td>123</td>\r\n                        <td>Mh123456</td>\r\n                        <td>yes</td>\r\n                        <td>pod pending</td>\r\n                        <td>\r\n                          <a class=\"badge badge-success\" href=\"#\">\r\n                            <i class=\"fa fa-pencil\"></i>\r\n                          </a>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <td>Samppa Nori</td>\r\n                          <td>2012/01/01</td>\r\n                          <td>123</td>\r\n                          <td>Mh123456</td>\r\n                          <td>yes</td>\r\n                          <td>pod pending</td>\r\n                          <td>\r\n                            <a class=\"badge badge-success\" href=\"#\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                            </a>\r\n                          </td>\r\n                        </tr>\r\n                </tbody>\r\n              </table>\r\n              <ul class=\"pagination\">\r\n                <li class=\"page-item\">\r\n                  <a class=\"page-link\" href=\"#\">Prev</a>\r\n                </li>\r\n                <li class=\"page-item active\">\r\n                  <a class=\"page-link\" href=\"#\">1</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                  <a class=\"page-link\" href=\"#\">2</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                  <a class=\"page-link\" href=\"#\">3</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                  <a class=\"page-link\" href=\"#\">4</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                  <a class=\"page-link\" href=\"#\">Next</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    \r\n      </div>"

/***/ }),

/***/ "./src/app/layout/site-management/component/pod/pod.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/site-management/component/pod/pod.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLW1hbmFnZW1lbnQvY29tcG9uZW50L3BvZC9wb2QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/site-management/component/pod/pod.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/site-management/component/pod/pod.component.ts ***!
  \***********************************************************************/
/*! exports provided: PodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodComponent", function() { return PodComponent; });
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

var PodComponent = /** @class */ (function () {
    function PodComponent() {
    }
    PodComponent.prototype.ngOnInit = function () {
    };
    PodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pod',
            template: __webpack_require__(/*! ./pod.component.html */ "./src/app/layout/site-management/component/pod/pod.component.html"),
            styles: [__webpack_require__(/*! ./pod.component.scss */ "./src/app/layout/site-management/component/pod/pod.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PodComponent);
    return PodComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-management/component/principal-billing-reports/principal-billing-reports.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/principal-billing-reports/principal-billing-reports.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\">\r\n      <form [formGroup]=\"filterForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4><i class=\"fa fa-truck\"></i> Principle Billing Reports</h4>\r\n            <hr />\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Site</label>\r\n              <!-- <select formControlName=\"site\" class=\"form-control\">\r\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                  {{ s.branch_name }}\r\n                </option>\r\n              </select> -->\r\n\r\n              <input\r\n                class=\"form-control\"\r\n                ng2-auto-complete\r\n                formControlName=\"site\"\r\n                [source]=\"searchSite.bind(this)\"\r\n                list-formatter=\"name\"\r\n              />\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Party Name</label>\r\n              <!-- <select formControlName=\"consigner\" class=\"form-control\">\r\n                <option value=\"\">Select Party Name</option>\r\n                <option *ngFor=\"let p of parties\" value=\"{{ p.accountname }}\">\r\n                  {{ p.accountname }}\r\n                </option>\r\n              </select> -->\r\n\r\n              <input\r\n                class=\"form-control\"\r\n                ng2-auto-complete\r\n                formControlName=\"consigner\"\r\n                [source]=\"searchPartyName.bind(this)\"\r\n                list-formatter=\"accountname\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n              <label>From Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  formControlName=\"from_date\"\r\n                  name=\"dp1\"\r\n                  ngbDatepicker\r\n                  #d1=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n          <!-- <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n              <label>To Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  formControlName=\"to_date\"\r\n                  name=\"dp2\"\r\n                  ngbDatepicker\r\n                  #d2=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n                <label>Select Bill No</label>\r\n                <input type=\"text\" formControlName=\"bill_no\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n  \r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n              <label>Invoice No.</label>\r\n              <input type=\"text\" formControlName=\"mcu_invoice_number\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <button (click)=\"printManikghar()\" class=\"btn btn-success\"><i class=\"fa fa-print\" aria-hidden=\"true\"></i> Print Manikghar</button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n              <label>Invoice No.</label>\r\n              <input type=\"text\" formControlName=\"acc_invoice_number\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <button (click)=\"printACC()\" class=\"btn btn-success\"><i class=\"fa fa-print\" aria-hidden=\"true\"></i> Print ACC</button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n              <label>Invoice No.</label>\r\n              <input type=\"text\" formControlName=\"utcl_invoice_number\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <button (click)=\"printUTCL()\" class=\"btn btn-success\"><i class=\"fa fa-print\" aria-hidden=\"true\"></i> Print UTCL</button>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/site-management/component/principal-billing-reports/principal-billing-reports.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/principal-billing-reports/principal-billing-reports.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLW1hbmFnZW1lbnQvY29tcG9uZW50L3ByaW5jaXBhbC1iaWxsaW5nLXJlcG9ydHMvcHJpbmNpcGFsLWJpbGxpbmctcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/site-management/component/principal-billing-reports/principal-billing-reports.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/principal-billing-reports/principal-billing-reports.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: PrincipalBillingReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalBillingReportsComponent", function() { return PrincipalBillingReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PrincipalBillingReportsComponent = /** @class */ (function () {
    function PrincipalBillingReportsComponent(api, formBuilder, toastr, metaService) {
        var _this = this;
        this.api = api;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.metaService = metaService;
        this.searchSite = function (keyword) {
            if (keyword) {
                return _this.metaService.getSearchSite(keyword).map(function (res) {
                    return res;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].of([]);
            }
        };
        // Search query for tyre no list
        this.searchPartyName = function (keyword) {
            if (keyword) {
                return _this.metaService.getSearchPartyNames(keyword).map(function (res) {
                    return res;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].of([]);
            }
        };
    }
    PrincipalBillingReportsComponent.prototype.ngOnInit = function () {
        // Filter form control
        this.filterForm = this.formBuilder.group({
            site: [''],
            bill_date: [''],
            consigner: [''],
            from_date: [''],
            to_date: [''],
            bill_no: [''],
            mcu_invoice_number: [''],
            acc_invoice_number: [''],
            utcl_invoice_number: ['']
        });
        this.filterForm.controls['mcu_invoice_number'].setValue('MCU-I-');
    };
    PrincipalBillingReportsComponent.prototype.objectToQuery = function (params) {
        var queryString = Object.keys(params).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');
        return queryString;
    };
    PrincipalBillingReportsComponent.prototype.printManikghar = function () {
        var param = {
            bill_no: this.filterForm.value.bill_no,
            site_name: this.filterForm.value.site,
            account_name: this.filterForm.value.consigner,
            invoice_no: this.filterForm.value.mcu_invoice_number
        };
        var url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].api_endpoint + 'billing/manikgarh_report_bill?' + this.objectToQuery(param);
        var win = window.open(url, '_blank');
        win.focus();
    };
    PrincipalBillingReportsComponent.prototype.printACC = function () {
        var param = {
            bill_no: this.filterForm.value.bill_no,
            site_name: this.filterForm.value.site,
            account_name: this.filterForm.value.consigner,
            invoice_no: 'ACC0' + this.filterForm.value.acc_invoice_number + '/2019-20'
        };
        var url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].api_endpoint + 'billing/acc_report_bill?' + this.objectToQuery(param);
        var win = window.open(url, '_blank');
        win.focus();
    };
    PrincipalBillingReportsComponent.prototype.printUTCL = function () {
        var param = {
            bill_no: this.filterForm.value.bill_no,
            site_name: this.filterForm.value.site,
            account_name: this.filterForm.value.consigner,
            invoice_no: 'NCW' + this.filterForm.value.utcl_invoice_number
        };
        var url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].api_endpoint + 'billing/utcl_report_bill?' + this.objectToQuery(param);
        var win = window.open(url, '_blank');
        win.focus();
    };
    PrincipalBillingReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-principal-billing-reports',
            template: __webpack_require__(/*! ./principal-billing-reports.component.html */ "./src/app/layout/site-management/component/principal-billing-reports/principal-billing-reports.component.html"),
            styles: [__webpack_require__(/*! ./principal-billing-reports.component.scss */ "./src/app/layout/site-management/component/principal-billing-reports/principal-billing-reports.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"]])
    ], PrincipalBillingReportsComponent);
    return PrincipalBillingReportsComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-management/component/principle-billing/principle-billing.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/principle-billing/principle-billing.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\">\r\n      <form [formGroup]=\"filterForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4><i class=\"fa fa-truck\"></i> Principle Billings</h4>\r\n            <hr />\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Site</label>\r\n              <!-- <select formControlName=\"site\" class=\"form-control\">\r\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                  {{ s.branch_name }}\r\n                </option>\r\n              </select> -->\r\n\r\n              <input\r\n                class=\"form-control\"\r\n                ng2-auto-complete\r\n                formControlName=\"site\"\r\n                [source]=\"searchSite.bind(this)\"\r\n                list-formatter=\"name\"\r\n              />\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Party Name</label>\r\n              <!-- <select formControlName=\"consigner\" class=\"form-control\">\r\n                <option value=\"\">Select Party Name</option>\r\n                <option *ngFor=\"let p of parties\" value=\"{{ p.accountname }}\">\r\n                  {{ p.accountname }}\r\n                </option>\r\n              </select> -->\r\n\r\n              <input\r\n                class=\"form-control\"\r\n                ng2-auto-complete\r\n                formControlName=\"consigner\"\r\n                [source]=\"searchPartyName.bind(this)\"\r\n                list-formatter=\"accountname\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>From Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  formControlName=\"from_date\"\r\n                  name=\"dp1\"\r\n                  ngbDatepicker\r\n                  #d1=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>To Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  formControlName=\"to_date\"\r\n                  name=\"dp2\"\r\n                  ngbDatepicker\r\n                  #d2=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-1 pull-right\">\r\n            <label>Search</label>\r\n            <button (click)=\"onFilterChange()\" class=\"btn btn-primary\"><i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <hr />\r\n      <h3>Create New Bill</h3>\r\n      <hr />\r\n      <form [formGroup]=\"createBillForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">\r\n            <fieldset class=\"form-group\">\r\n              <label>Billing No</label>\r\n              <input id=\"truck_no\" formControlName=\"billing_no\" placeholder=\"Bill No.\" type=\"text\" class=\"form-control\" />\r\n            </fieldset>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Bill Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  formControlName=\"bill_date\"\r\n                  name=\"dp\"\r\n                  ngbDatepicker\r\n                  #d=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <fieldset class=\"form-group\">\r\n              <label>Billing Name</label>\r\n              <input id=\"truck_no\" formControlName=\"billing_name\" placeholder=\"Type billing name...\" type=\"text\" class=\"form-control\" />\r\n            </fieldset>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <fieldset class=\"form-group\">\r\n              <label>Billing Address</label>\r\n              <input id=\"truck_no\" formControlName=\"billing_address\" placeholder=\"Type billing address...\" type=\"text\" class=\"form-control\" />\r\n            </fieldset>\r\n          </div>\r\n          <div class=\"col-md-1 pull-right\">\r\n            <button class=\"btn btn-primary\" (click)=\"save()\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> Save</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <br>\r\n      <!-- <ngb-pagination\r\n        [(page)]=\"pagination.currenPage\"\r\n        [pageSize]=\"pagination.pageSize\"\r\n        [collectionSize]=\"pagination.total\"\r\n        [maxSize]=\"pagination.maxSize\"\r\n        (pageChange)=\"fetchReport()\"\r\n      ></ngb-pagination>\r\n      <p><strong>Total:</strong> {{ pagination.total }}<br /><strong>Records per page:</strong> {{ pagination.pageSize }}</p> -->\r\n      <table class=\"table table-hover table-striped table-bordered table-condensed tableFixHead\">\r\n        <thead>\r\n          <tr>\r\n            <th><input type=\"checkbox\" (change)=\"changeStatus($event)\"> &nbsp;Select</th>\r\n            <th>Lr No.</th>\r\n            <th>Lr Date</th>\r\n            <th>Destination</th>\r\n            <th>Pkgs</th>\r\n            <th>Wt.Kgs</th>\r\n            <th>Description</th>\r\n            <th>TBB Amount</th>\r\n            <th>L. Chrg</th>\r\n            <th>Ul Chrg</th>\r\n            <th>H-Amt</th>\r\n            <th>H-Days</th>\r\n            <th>Bill-Amt</th>\r\n            <th>Actions</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"loading\">\r\n            <td colspan=\"14\">\r\n              <div class=\"showbox\">\r\n                <div class=\"loader\">\r\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let billing of billing_data; let i = index\">\r\n            <td (click)=\"onSelectRecord(billing)\" class=\"clickable\">\r\n              <span class=\"selection-circle\"\r\n                ><i\r\n                  class=\"fa\"\r\n                  aria-hidden=\"true\"\r\n                  [ngClass]=\"{ 'fa-circle-thin': !billing.selected, 'fa-check-circle': billing.selected }\"\r\n                ></i\r\n              ></span>\r\n            </td>\r\n            <td>{{ billing.lrno ? billing.lrno : '--' }}</td>\r\n            <td>{{ billing.lrdate ? billing.lrdate : '--' }}</td>\r\n            <td>{{ billing.to ? billing.to : '--' }}</td>\r\n            <td>{{ billing.packages ? billing.packages : '--' }}</td>\r\n            <td>{{ billing.actualweight ? billing.actualweight : '--' }}</td>\r\n            <td>{{ billing.contains ? billing.contains : '--' }}</td>\r\n            <td class=\"cell-align\">{{ (billing.newamount ? billing.newamount : 0) | number: '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (billing_data[i].l_chrge ? billing_data[i].l_chrge : 0) | number: '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (billing_data[i].ul_chrge ? billing_data[i].ul_chrge : 0) | number: '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (billing_data[i].h_amt ? billing_data[i].h_amt : 0) | number: '1.2-2' }}</td>\r\n            <td>{{ billing_data[i].h_days ? billing_data[i].h_days : '0' }}</td>\r\n            <td class=\"cell-align\">{{ (billing_data[i].total ? billing_data[i].total : 0) | number: '1.2-2' }}</td>\r\n            <td>\r\n              <button class=\"btn btn-primary\" (click)=\"edit(editModal, i)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit</button\r\n              >&nbsp;\r\n              <!-- <button class=\"btn btn-danger\" (click)=\"delete()\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</button> -->\r\n            </td>\r\n          </tr>\r\n          <tr *ngIf=\"billing_data.length > 0\">\r\n            <th class=\"cell-align\" colspan=\"13\">Total</th>\r\n            <td class=\"cell-align\">{{ subTotal | number: '1.2-2' }}</td>\r\n          </tr>\r\n          <tr *ngIf=\"billing_data.length === 0\">\r\n            <td align=\"center\" colspan=\"14\">No data available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"col-md-3\">\r\n          <button class=\"btn btn-primary mg-left-10\" (click)=\"save()\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> Save</button>\r\n        </div>\r\n        <div class=\"col-md-6 pull-right\">\r\n          <form [formGroup]=\"gstForm\">\r\n            <table class=\"table table-hover table-striped table-bordered table-condensed\">\r\n              <tr>\r\n                <th>Add %</th>\r\n                <td><input type=\"number\" (keyup)=\"cgstChange()\" formControlName=\"cgst\" placeholder=\"Add CGST\" /></td>\r\n                <th class=\"cell-align\">CGST ({{ cgst ? cgst : 0 }} %)</th>\r\n                <td class=\"cell-align\">{{ cgstGstPercentage | number: '1.2-2' }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Add %</th>\r\n                <td><input type=\"number\" (keyup)=\"sgstChange()\" formControlName=\"sgst\" placeholder=\"Add SGST\" /></td>\r\n                <th class=\"cell-align\">SGST ({{ sgst ? sgst : 0 }} %)</th>\r\n                <td class=\"cell-align\">{{ sgstGstPercentage | number: '1.2-2' }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Add %</th>\r\n                <td><input type=\"number\" (keyup)=\"igstChange()\" formControlName=\"igst\" placeholder=\"Add IGST\" /></td>\r\n                <th class=\"cell-align\">IGST ({{ igst ? igst : 0 }} %)</th>\r\n                <td class=\"cell-align\">{{ igstGstPercentage | number: '1.2-2' }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"cell-align\" colspan=\"3\">Total Bill Amount</th>\r\n                <td class=\"cell-align\">{{ grandTotal | number: '1.2-2' }}</td>\r\n              </tr>\r\n            </table>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- <ngb-pagination\r\n        [(page)]=\"pagination.currenPage\"\r\n        [pageSize]=\"pagination.pageSize\"\r\n        [collectionSize]=\"pagination.total\"\r\n        [maxSize]=\"pagination.maxSize\"\r\n        (pageChange)=\"fetchReport()\"\r\n      ></ngb-pagination> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Edit template -->\r\n<ng-template #editModal let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Edit Principle Billing</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <form [formGroup]=\"editForm\">\r\n    <div class=\"modal-body\">\r\n      <fieldset class=\"form-group\">\r\n        <label>L. Charge</label>\r\n        <input\r\n          formControlName=\"l_chrge\"\r\n          (keyup)=\"changeLChargeModalValue()\"\r\n          type=\"number\"\r\n          form\r\n          class=\"form-control\"\r\n          placeholder=\"Enter value\"\r\n        />\r\n      </fieldset>\r\n\r\n      <fieldset class=\"form-group\">\r\n        <label>Ul. Charge</label>\r\n        <input\r\n          formControlName=\"ul_chrge\"\r\n          (keyup)=\"changeUlChargeModalValue()\"\r\n          type=\"number\"\r\n          class=\"form-control\"\r\n          placeholder=\"Enter value\"\r\n        />\r\n      </fieldset>\r\n\r\n      <fieldset class=\"form-group\">\r\n        <label>H-Days</label>\r\n        <input formControlName=\"h_days\" type=\"number\" class=\"form-control\" placeholder=\"Enter days\" />\r\n      </fieldset>\r\n\r\n      <fieldset class=\"form-group\">\r\n        <label>H-Amt</label>\r\n        <input formControlName=\"h_amt\" (keyup)=\"changeHamtModalValue()\" type=\"number\" class=\"form-control\" placeholder=\"Enter value\" />\r\n      </fieldset>\r\n      <fieldset class=\"form-group\">\r\n        <label>Bill Amount: {{ obj.total }}</label>\r\n      </fieldset>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button (click)=\"modal.close(editForm.value)\" class=\"btn btn-outline-dark\">\r\n        <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> Save\r\n      </button>\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/layout/site-management/component/principle-billing/principle-billing.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/principle-billing/principle-billing.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th, td {\n  text-align: center; }\n\n.mg-left-10 {\n  margin-left: -31px; }\n\n.cell-align {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpdGUtbWFuYWdlbWVudC9jb21wb25lbnQvcHJpbmNpcGxlLWJpbGxpbmcvRDpcXHRlc3RpbmdfZm9sZGVyXFx0aGlydVxcZnJvbnRlbmRcXHRkX0Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNpdGUtbWFuYWdlbWVudFxcY29tcG9uZW50XFxwcmluY2lwbGUtYmlsbGluZ1xccHJpbmNpcGxlLWJpbGxpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLW1hbmFnZW1lbnQvY29tcG9uZW50L3ByaW5jaXBsZS1iaWxsaW5nL3ByaW5jaXBsZS1iaWxsaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgsIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1nLWxlZnQtMTAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zMXB4O1xyXG59XHJcblxyXG4uY2VsbC1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/site-management/component/principle-billing/principle-billing.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/site-management/component/principle-billing/principle-billing.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PrincipleBillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipleBillingComponent", function() { return PrincipleBillingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/site.service */ "./src/app/shared/services/site.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PrincipleBillingComponent = /** @class */ (function () {
    function PrincipleBillingComponent(api, formBuilder, toastr, site, meta, modalService, router, metaService, calendar) {
        var _this = this;
        this.api = api;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.site = site;
        this.meta = meta;
        this.modalService = modalService;
        this.router = router;
        this.metaService = metaService;
        this.calendar = calendar;
        this.loading = false;
        this.filters = {
            site: '',
            // bill_date: '',
            consigner: '',
            start_date: '',
            end_date: '',
            page: 0
        };
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.sites = [];
        this.parties = [];
        this.billing_data = [];
        this.cgstGstPercentage = 0;
        this.sgstGstPercentage = 0;
        this.igstGstPercentage = 0;
        this.grandTotal = 0; // final amount including gst
        this.subTotal = 0; //
        // used for modal total
        this.obj = {
            total: 0
        };
        // Search query for tyre no list
        this.searchPartyName = function (keyword) {
            if (keyword) {
                return _this.metaService.getSearchPartyNames(keyword).map(function (res) {
                    return res;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"].of([]);
            }
        };
        this.searchSite = function (keyword) {
            if (keyword) {
                return _this.metaService.getSearchSite(keyword).map(function (res) {
                    return res;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"].of([]);
            }
        };
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        // Filter form control
        this.filterForm = this.formBuilder.group({
            site: [''],
            bill_date: [''],
            consigner: [''],
            from_date: [''],
            to_date: ['']
        });
        // Create or Save form control
        this.createBillForm = this.formBuilder.group({
            billing_no: [''],
            bill_date: [''],
            billing_name: [''],
            billing_address: ['']
        });
        //// Edit modal form controls
        this.editForm = this.formBuilder.group({
            l_chrge: [0],
            ul_chrge: [0],
            h_days: [0],
            h_amt: [0],
        });
        // GSt form controls
        this.gstForm = this.formBuilder.group({
            sgst: [0],
            cgst: [0],
            igst: [0]
        });
    }
    PrincipleBillingComponent.prototype.ngOnInit = function () {
        this.createBillForm.controls['bill_date'].setValue(this.calendar.getToday());
        // this.getSites();
        // this.getPartyName();
        // this.getBillNo();
        this.calculateTotalBillAmount();
    };
    PrincipleBillingComponent.prototype.sgstChange = function () {
        this.sgst = this.gstForm.controls['sgst'].value;
        this.calculateSgstPercentage(this.sgst, this.subTotal);
    };
    PrincipleBillingComponent.prototype.cgstChange = function () {
        this.cgst = this.gstForm.controls['cgst'].value;
        this.calculateCgstPercentage(this.cgst, this.subTotal);
    };
    PrincipleBillingComponent.prototype.igstChange = function () {
        this.igst = this.gstForm.controls['igst'].value;
        this.calculateIgstPercentage(this.igst, this.subTotal);
    };
    PrincipleBillingComponent.prototype.calculateSgstPercentage = function (percentage, totalValue) {
        this.sgstGstPercentage = (totalValue * percentage) / 100;
        this.calculateTotalBillAmount();
    };
    PrincipleBillingComponent.prototype.calculateCgstPercentage = function (percentage, totalValue) {
        this.cgstGstPercentage = (totalValue * percentage) / 100;
        this.calculateTotalBillAmount();
    };
    PrincipleBillingComponent.prototype.calculateIgstPercentage = function (percentage, totalValue) {
        this.igstGstPercentage = (totalValue * percentage) / 100;
        this.calculateTotalBillAmount();
    };
    // Final total bill amount with gst%
    PrincipleBillingComponent.prototype.calculateTotalBillAmount = function () {
        var subTotal = 0;
        this.billing_data.forEach(function (d) {
            if (d.selected) {
                subTotal += d.total;
            }
        });
        this.subTotal = subTotal;
        this.grandTotal = this.subTotal + this.sgstGstPercentage + this.igstGstPercentage + this.cgstGstPercentage;
    };
    PrincipleBillingComponent.prototype.onFilterChange = function () {
        this.fetchReport();
    };
    PrincipleBillingComponent.prototype.onSelectRecord = function (b) {
        console.log('b >>', b);
        b.selected = !b.selected;
        this.calculateTotalBillAmountWithGST();
    };
    PrincipleBillingComponent.prototype.calculateTotalBillAmountWithGST = function () {
        var subTotal = 0;
        this.billing_data.forEach(function (d) {
            if (d.selected) {
                subTotal += d.total;
            }
        });
        this.subTotal = subTotal;
        if (this.sgst) {
            this.sgstGstPercentage = (this.subTotal * this.sgst) / 100;
        }
        if (this.cgst) {
            this.cgstGstPercentage = (this.subTotal * this.cgst) / 100;
        }
        if (this.igst) {
            this.igstGstPercentage = (this.subTotal * this.igst) / 100;
        }
        this.grandTotal = this.subTotal + this.sgstGstPercentage + this.igstGstPercentage + this.cgstGstPercentage;
    };
    PrincipleBillingComponent.prototype.fetchReport = function () {
        var _this = this;
        this.loading = true;
        this.filters.page = this.pagination.currenPage;
        var billDate = '';
        var fromDate = '';
        var toDate = '';
        // if (this.filterForm.controls['bill_date'].value) {
        //   billDate = this.filterForm.controls['bill_date'].value.year + '-' +
        //     this.filterForm.controls['bill_date'].value.month + '-' +
        //     this.filterForm.controls['bill_date'].value.day;
        // } else {
        //     billDate = '';
        // }
        if (this.filterForm.controls['from_date'].value) {
            fromDate = this.filterForm.controls['from_date'].value.year + '-' +
                this.filterForm.controls['from_date'].value.month + '-' +
                this.filterForm.controls['from_date'].value.day;
        }
        else {
            fromDate = '';
        }
        if (this.filterForm.controls['to_date'].value) {
            toDate = this.filterForm.controls['to_date'].value.year + '-' +
                this.filterForm.controls['to_date'].value.month + '-' +
                this.filterForm.controls['to_date'].value.day;
        }
        else {
            toDate = '';
        }
        var siteRow = this.filterForm.controls['site'].value;
        var siteName = siteRow.name ? siteRow.name : '';
        if (siteName) {
            this.filters.site = siteName;
        }
        else {
            this.filters.site = '';
        }
        var consignerNameRow = this.filterForm.controls['consigner'].value;
        var consignerName = consignerNameRow.accountname ? consignerNameRow.accountname : '';
        if (consignerName) {
            this.filters.consigner = consignerName;
        }
        else {
            this.filters.consigner = '';
        }
        // this.filters.bill_date = billDate;
        this.filters.start_date = fromDate;
        this.filters.end_date = toDate;
        this.site.getRecords(this.filters).subscribe(function (res) {
            _this.loading = false;
            res.forEach(function (element) {
                element.selected = false;
                element.lrdate = !element.lrdate ? '--' : moment(element.lrdate).format('YYYY-MM-DD');
                element.total = Number(element.newamount);
                _this.subTotal += element.newamount;
            });
            _this.billing_data = res;
            _this.calculateTotalBillAmount();
            _this.getBillNo();
            // this.pagination.total = res.total;
        }, function (err) {
            _this.loading = false;
        });
    };
    PrincipleBillingComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.meta.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.sites = res;
            if (_this.usertype === 'ADMIN') {
                _this.filterForm.controls['site'].setValue(_this.sites[0].branch_name);
            }
            else {
                _this.filterForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    PrincipleBillingComponent.prototype.getBillNo = function () {
        var _this = this;
        this.loading = true;
        var siteRow = this.filterForm.controls['site'].value;
        var siteName = siteRow.name ? siteRow.name : '';
        var consignerNameRow = this.filterForm.controls['consigner'].value;
        var consignerName = consignerNameRow.accountname ? consignerNameRow.accountname : '';
        this.site.getBillNo(siteName, consignerName).subscribe(function (res) {
            _this.loading = false;
            var val = res.max_billno;
            if (val) {
                _this.createBillForm.controls['billing_no'].setValue(val);
            }
            else {
                var newValue = 1;
                _this.createBillForm.controls['billing_no'].setValue(newValue.toString());
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    PrincipleBillingComponent.prototype.getPartyName = function () {
        var _this = this;
        this.loading = true;
        this.meta.getPartyNames().subscribe(function (res) {
            _this.loading = false;
            _this.parties = res;
        }, function (err) {
            _this.loading = false;
        });
    };
    PrincipleBillingComponent.prototype.edit = function (content, index) {
        var _this = this;
        this.billNewAmount = this.billing_data[index].newamount;
        this.obj.total = this.billNewAmount;
        var modalRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
        // Modal result
        modalRef.result.then(function (res) {
            _this.billing_data[index].l_chrge = res.l_chrge;
            _this.billing_data[index].ul_chrge = res.ul_chrge;
            _this.billing_data[index].h_days = res.h_days;
            _this.billing_data[index].h_amt = res.h_amt;
            _this.billing_data[index].total = _this.billing_data[index].newamount + res.l_chrge + res.ul_chrge + res.h_amt;
            _this.calculateTotalBillAmount();
            _this.toastr.success('Bill detail updated successfully.');
        }, function (reason) {
            console.log('>>>>>>>>>>>>>', reason);
        });
    };
    PrincipleBillingComponent.prototype.changeLChargeModalValue = function () {
        // Total of load, unload and hamount = total bill amount for modal
        this.obj.total = this.editForm.controls['l_chrge'].value + this.editForm.controls['ul_chrge'].value +
            this.editForm.controls['h_amt'].value + this.billNewAmount;
        this.calculateTotalBillAmount();
    };
    PrincipleBillingComponent.prototype.changeUlChargeModalValue = function () {
        // Total of load, unload and hamount = total bill amount for modal
        this.obj.total = this.editForm.controls['l_chrge'].value + this.editForm.controls['ul_chrge'].value +
            this.editForm.controls['h_amt'].value + this.billNewAmount;
        this.calculateTotalBillAmount();
    };
    PrincipleBillingComponent.prototype.changeHamtModalValue = function () {
        // Total of load, unload and hamount = total bill amount for modal
        this.obj.total = this.editForm.controls['l_chrge'].value + this.editForm.controls['ul_chrge'].value +
            this.editForm.controls['h_amt'].value + this.billNewAmount;
        this.calculateTotalBillAmount();
    };
    PrincipleBillingComponent.prototype.save = function () {
        var _this = this;
        var billDate;
        if (this.createBillForm.controls['bill_date'].value) {
            var dt = this.createBillForm.controls['bill_date'].value.year + '-' +
                this.createBillForm.controls['bill_date'].value.month + '-' +
                this.createBillForm.controls['bill_date'].value.day;
            billDate = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            billDate = moment().format();
        }
        var siteRow = this.filterForm.controls['site'].value;
        var siteName = siteRow.name ? siteRow.name : '';
        var consignerNameRow = this.filterForm.controls['consigner'].value;
        var consignerName = consignerNameRow.accountname ? consignerNameRow.accountname : '';
        this.billing_data.forEach(function (element) {
            if (element.selected) {
                element.billno = _this.createBillForm.controls['billing_no'].value.toString();
                element.billdate = billDate;
                element.site = siteName;
                element.accountname = consignerName;
                element.billname = _this.createBillForm.controls['billing_name'].value;
                element.billadr = _this.createBillForm.controls['billing_address'].value;
                element.description = element.contains;
                element.weightkg = element.actualweight;
                element.tbbamount = element.newamount;
                element.load = element.l_chrge ? element.l_chrge : 0;
                element.unload = element.ul_chrge ? element.ul_chrge : 0;
                element.haltamt = element.h_amt ? element.h_amt : 0;
                element.haltdays = element.h_days ? element.h_days : 0;
                element.bill_subTotal = _this.subTotal ? _this.subTotal : 0;
                element.bill_cgst = _this.gstForm.controls['cgst'].value;
                element.bill_sgst = _this.gstForm.controls['sgst'].value;
                element.bill_igst = _this.gstForm.controls['igst'].value;
                element.bill_total = _this.grandTotal ? _this.grandTotal : 0;
                // element.total_bill_amount = this.totalBillAmount;
                delete element._id;
            }
        });
        localStorage.setItem('cgst', this.cgstGstPercentage);
        localStorage.setItem('sgst', this.sgstGstPercentage);
        localStorage.setItem('igst', this.igstGstPercentage);
        this.loading = true;
        var final_data = JSON.parse(JSON.stringify(this.billing_data));
        for (var i = final_data.length - 1; i >= 0; i--) {
            if (!final_data[i].selected) {
                final_data.splice(i, 1);
            }
        }
        // final_data.forEach(element => {
        //   element.lrno = Number(element.lrno);
        // });
        // console.log(final_data);
        // return;
        this.site.getConsignorCity(consignerName).subscribe(function (res) {
            // console.log('getConsignorCity  >>>>>', res.bstate);
            var consignerState = res.bstate;
            var accountLedgers = [];
            var billingNo = _this.createBillForm.controls['billing_no'].value;
            var date = new Date();
            var todayDate = moment(date).format('YYYY-MM-DD');
            var credit = {
                'branch': siteName,
                'accountname': consignerName + ' UNBILLED A/C.',
                'avouno': billingNo,
                'arefno': 'Bill No ' + billingNo,
                'adoctp': 'pbill',
                'adebtamt': '0',
                'acrdtamt': _this.subTotal.toString(),
                'avoudt': billDate
            };
            accountLedgers.push(credit);
            var debit = {
                'branch': siteName,
                'accountname': consignerName + ' BILL A/C.',
                'avouno': billingNo,
                'arefno': 'Bill No ' + billingNo,
                'adoctp': 'pbill',
                'adebtamt': _this.grandTotal.toString(),
                'acrdtamt': '0',
                'avoudt': billDate
            };
            accountLedgers.push(debit);
            // this.subTotal = subTotal;
            // this.grandTotal;
            if (_this.cgst) {
                var cgstCredit = {
                    'branch': siteName,
                    'accountname': 'CGST OUTWARD @' + _this.cgst + '% ' + consignerState,
                    'avouno': billingNo,
                    'arefno': 'Bill No ' + billingNo + ' ' + consignerName,
                    'adoctp': 'pbill',
                    'adebtamt': '0',
                    'acrdtamt': _this.cgstGstPercentage.toString(),
                    'avoudt': billDate
                };
                accountLedgers.push(cgstCredit);
            }
            if (_this.sgst) {
                var sgstCredit = {
                    'branch': siteName,
                    'accountname': 'SGST OUTWARD @' + _this.sgst + '% ' + consignerState,
                    'avouno': billingNo,
                    'arefno': 'Bill No ' + billingNo + ' ' + consignerName,
                    'adoctp': 'pbill',
                    'adebtamt': '0',
                    'acrdtamt': _this.sgstGstPercentage.toString(),
                    'avoudt': billDate
                };
                accountLedgers.push(sgstCredit);
            }
            if (_this.igst) {
                var igstCredit = {
                    'branch': siteName,
                    'accountname': 'IGST OUTWARD @' + _this.igst + '% ' + consignerState,
                    'avouno': billingNo,
                    'arefno': 'Bill No ' + billingNo + ' ' + consignerName,
                    'adoctp': 'pbill',
                    'adebtamt': '0',
                    'acrdtamt': _this.igstGstPercentage.toString(),
                    'avoudt': billDate
                };
                accountLedgers.push(igstCredit);
            }
            _this.site.principleBillingPosting(accountLedgers).subscribe(function (res) {
                _this.site.saveRecord(final_data).subscribe(function (res) {
                    _this.toastr.success('Billing data saved successfully.');
                    _this.router.navigate(['/site-management/billing']);
                    _this.loading = false;
                }, function (err) {
                    console.log('>>>>>>>>>err', err);
                    _this.toastr.error('Something went wrong.');
                    _this.loading = false;
                });
            }, function (err) {
                console.log('>>>>>>>>>err', err);
                _this.toastr.error('Something went wrong.');
                _this.loading = false;
            });
        }, function (err) {
            console.log('>>>>>>>>>err', err);
            _this.toastr.error('Something went wrong.');
            _this.loading = false;
        });
    };
    PrincipleBillingComponent.prototype.changeStatus = function (event) {
        if (event.target.checked) {
            this.billing_data.forEach(function (element) {
                element.selected = true;
            });
            this.calculateTotalBillAmount();
        }
        else {
            console.log('event >>>>', event.target.checked);
            this.billing_data.forEach(function (element) {
                element.selected = false;
            });
            this.calculateTotalBillAmount();
        }
    };
    PrincipleBillingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-principle-billing',
            template: __webpack_require__(/*! ./principle-billing.component.html */ "./src/app/layout/site-management/component/principle-billing/principle-billing.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./principle-billing.component.scss */ "./src/app/layout/site-management/component/principle-billing/principle-billing.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_6__["SiteService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__["MetaService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__["MetaService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCalendar"]])
    ], PrincipleBillingComponent);
    return PrincipleBillingComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-management/site-management.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/site-management/site-management.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/site-management/site-management.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/site-management/site-management.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLW1hbmFnZW1lbnQvc2l0ZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/site-management/site-management.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/site-management/site-management.component.ts ***!
  \*********************************************************************/
/*! exports provided: SiteManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteManagementComponent", function() { return SiteManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiteManagementComponent = /** @class */ (function () {
    function SiteManagementComponent() {
    }
    SiteManagementComponent.prototype.ngOnInit = function () { };
    SiteManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-management',
            template: __webpack_require__(/*! ./site-management.component.html */ "./src/app/layout/site-management/site-management.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./site-management.component.scss */ "./src/app/layout/site-management/site-management.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteManagementComponent);
    return SiteManagementComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-management/site-management.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/site-management/site-management.module.ts ***!
  \******************************************************************/
/*! exports provided: SiteManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteManagementModule", function() { return SiteManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _sitemanagement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sitemanagement.service */ "./src/app/layout/site-management/sitemanagement.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _site_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site-management.component */ "./src/app/layout/site-management/site-management.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ng2_auto_complete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-auto-complete */ "./node_modules/ng2-auto-complete/dist/index.js");
/* harmony import */ var ng2_auto_complete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_auto_complete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _site_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./site-routing.module */ "./src/app/layout/site-management/site-routing.module.ts");
/* harmony import */ var _component_principle_billing_principle_billing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/principle-billing/principle-billing.component */ "./src/app/layout/site-management/component/principle-billing/principle-billing.component.ts");
/* harmony import */ var _component_billing_billing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/billing/billing.component */ "./src/app/layout/site-management/component/billing/billing.component.ts");
/* harmony import */ var _component_bill_details_bill_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/bill-details/bill-details.component */ "./src/app/layout/site-management/component/bill-details/bill-details.component.ts");
/* harmony import */ var _component_billty_entry_billty_entry_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/billty-entry/billty-entry.component */ "./src/app/layout/site-management/component/billty-entry/billty-entry.component.ts");
/* harmony import */ var _component_pod_pod_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/pod/pod.component */ "./src/app/layout/site-management/component/pod/pod.component.ts");
/* harmony import */ var _component_extra_return_expences_extra_return_expences_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/extra-return-expences/extra-return-expences.component */ "./src/app/layout/site-management/component/extra-return-expences/extra-return-expences.component.ts");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _component_plant_truck_position_plant_truck_position_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/plant-truck-position/plant-truck-position.component */ "./src/app/layout/site-management/component/plant-truck-position/plant-truck-position.component.ts");
/* harmony import */ var _component_plant_truck_position_billty_selection_billty_selection_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/plant-truck-position/billty-selection/billty-selection.component */ "./src/app/layout/site-management/component/plant-truck-position/billty-selection/billty-selection.component.ts");
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ "./src/app/layout/site-management/component/dashboard/dashboard.component.ts");
/* harmony import */ var _component_principal_billing_reports_principal_billing_reports_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/principal-billing-reports/principal-billing-reports.component */ "./src/app/layout/site-management/component/principal-billing-reports/principal-billing-reports.component.ts");
/* harmony import */ var _component_add_billty_dataentry_add_billty_dataentry_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/add-billty-dataentry/add-billty-dataentry.component */ "./src/app/layout/site-management/component/add-billty-dataentry/add-billty-dataentry.component.ts");
/* harmony import */ var _component_edit_billty_dataentry_edit_billty_dataentry_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/edit-billty-dataentry/edit-billty-dataentry.component */ "./src/app/layout/site-management/component/edit-billty-dataentry/edit-billty-dataentry.component.ts");
/* harmony import */ var _component_list_billty_dataentry_list_billty_dataentry_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/list-billty-dataentry/list-billty-dataentry.component */ "./src/app/layout/site-management/component/list-billty-dataentry/list-billty-dataentry.component.ts");
/* harmony import */ var _billtydataentry_reslover__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./billtydataentry-reslover */ "./src/app/layout/site-management/billtydataentry-reslover.ts");
/* harmony import */ var _component_list_vehicle_master_list_vehicle_master_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./component/list-vehicle-master/list-vehicle-master.component */ "./src/app/layout/site-management/component/list-vehicle-master/list-vehicle-master.component.ts");
/* harmony import */ var _component_edit_vehicle_master_edit_vehicle_master_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/edit-vehicle-master/edit-vehicle-master.component */ "./src/app/layout/site-management/component/edit-vehicle-master/edit-vehicle-master.component.ts");
/* harmony import */ var _component_add_vehicle_master_add_vehicle_master_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./component/add-vehicle-master/add-vehicle-master.component */ "./src/app/layout/site-management/component/add-vehicle-master/add-vehicle-master.component.ts");
/* harmony import */ var _vehiclemaster_reslover__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./vehiclemaster-reslover */ "./src/app/layout/site-management/vehiclemaster-reslover.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















// billty dataentry








var SiteManagementModule = /** @class */ (function () {
    function SiteManagementModule() {
    }
    SiteManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _site_management_component__WEBPACK_IMPORTED_MODULE_4__["SiteManagementComponent"],
                _component_principle_billing_principle_billing_component__WEBPACK_IMPORTED_MODULE_10__["PrincipleBillingComponent"],
                _component_billing_billing_component__WEBPACK_IMPORTED_MODULE_11__["BillingComponent"],
                _component_bill_details_bill_details_component__WEBPACK_IMPORTED_MODULE_12__["BillDetailsComponent"],
                _component_billty_entry_billty_entry_component__WEBPACK_IMPORTED_MODULE_13__["BilltyEntryComponent"],
                _component_pod_pod_component__WEBPACK_IMPORTED_MODULE_14__["PodComponent"],
                _component_extra_return_expences_extra_return_expences_component__WEBPACK_IMPORTED_MODULE_15__["ExtraReturnExpencesComponent"],
                _component_plant_truck_position_plant_truck_position_component__WEBPACK_IMPORTED_MODULE_17__["PlantTruckPositionComponent"],
                _component_plant_truck_position_billty_selection_billty_selection_component__WEBPACK_IMPORTED_MODULE_18__["BilltySelectionComponent"],
                _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
                _component_principal_billing_reports_principal_billing_reports_component__WEBPACK_IMPORTED_MODULE_20__["PrincipalBillingReportsComponent"],
                _component_add_billty_dataentry_add_billty_dataentry_component__WEBPACK_IMPORTED_MODULE_21__["AddBilltyDataentryComponent"],
                _component_edit_billty_dataentry_edit_billty_dataentry_component__WEBPACK_IMPORTED_MODULE_22__["EditBilltyDataentryComponent"],
                _component_list_billty_dataentry_list_billty_dataentry_component__WEBPACK_IMPORTED_MODULE_23__["ListBilltyDataentryComponent"],
                _component_list_vehicle_master_list_vehicle_master_component__WEBPACK_IMPORTED_MODULE_25__["ListVehicleMasterComponent"],
                _component_edit_vehicle_master_edit_vehicle_master_component__WEBPACK_IMPORTED_MODULE_26__["EditVehicleMasterComponent"],
                _component_add_vehicle_master_add_vehicle_master_component__WEBPACK_IMPORTED_MODULE_27__["AddVehicleMasterComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _site_routing_module__WEBPACK_IMPORTED_MODULE_9__["SiteRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                ng2_auto_complete__WEBPACK_IMPORTED_MODULE_7__["Ng2AutoCompleteModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_16__["CollapseModule"].forRoot()
            ],
            providers: [
                _sitemanagement_service__WEBPACK_IMPORTED_MODULE_2__["SitemanagementService"],
                _billtydataentry_reslover__WEBPACK_IMPORTED_MODULE_24__["BilltydataentryReslover"],
                _vehiclemaster_reslover__WEBPACK_IMPORTED_MODULE_28__["VehiclemasterReslover"]
            ],
            entryComponents: [_component_plant_truck_position_billty_selection_billty_selection_component__WEBPACK_IMPORTED_MODULE_18__["BilltySelectionComponent"]]
        })
    ], SiteManagementModule);
    return SiteManagementModule;
}());



/***/ }),

/***/ "./src/app/layout/site-management/site-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/site-management/site-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SiteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteRoutingModule", function() { return SiteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _site_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site-management.component */ "./src/app/layout/site-management/site-management.component.ts");
/* harmony import */ var _component_principle_billing_principle_billing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/principle-billing/principle-billing.component */ "./src/app/layout/site-management/component/principle-billing/principle-billing.component.ts");
/* harmony import */ var _component_billing_billing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/billing/billing.component */ "./src/app/layout/site-management/component/billing/billing.component.ts");
/* harmony import */ var _component_bill_details_bill_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/bill-details/bill-details.component */ "./src/app/layout/site-management/component/bill-details/bill-details.component.ts");
/* harmony import */ var _component_billty_entry_billty_entry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/billty-entry/billty-entry.component */ "./src/app/layout/site-management/component/billty-entry/billty-entry.component.ts");
/* harmony import */ var _component_extra_return_expences_extra_return_expences_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/extra-return-expences/extra-return-expences.component */ "./src/app/layout/site-management/component/extra-return-expences/extra-return-expences.component.ts");
/* harmony import */ var _component_pod_pod_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/pod/pod.component */ "./src/app/layout/site-management/component/pod/pod.component.ts");
/* harmony import */ var _component_plant_truck_position_plant_truck_position_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/plant-truck-position/plant-truck-position.component */ "./src/app/layout/site-management/component/plant-truck-position/plant-truck-position.component.ts");
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ "./src/app/layout/site-management/component/dashboard/dashboard.component.ts");
/* harmony import */ var _component_principal_billing_reports_principal_billing_reports_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/principal-billing-reports/principal-billing-reports.component */ "./src/app/layout/site-management/component/principal-billing-reports/principal-billing-reports.component.ts");
/* harmony import */ var _component_add_billty_dataentry_add_billty_dataentry_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/add-billty-dataentry/add-billty-dataentry.component */ "./src/app/layout/site-management/component/add-billty-dataentry/add-billty-dataentry.component.ts");
/* harmony import */ var _component_list_billty_dataentry_list_billty_dataentry_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/list-billty-dataentry/list-billty-dataentry.component */ "./src/app/layout/site-management/component/list-billty-dataentry/list-billty-dataentry.component.ts");
/* harmony import */ var _component_edit_billty_dataentry_edit_billty_dataentry_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/edit-billty-dataentry/edit-billty-dataentry.component */ "./src/app/layout/site-management/component/edit-billty-dataentry/edit-billty-dataentry.component.ts");
/* harmony import */ var _billtydataentry_reslover__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./billtydataentry-reslover */ "./src/app/layout/site-management/billtydataentry-reslover.ts");
/* harmony import */ var _component_add_vehicle_master_add_vehicle_master_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/add-vehicle-master/add-vehicle-master.component */ "./src/app/layout/site-management/component/add-vehicle-master/add-vehicle-master.component.ts");
/* harmony import */ var _component_list_vehicle_master_list_vehicle_master_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/list-vehicle-master/list-vehicle-master.component */ "./src/app/layout/site-management/component/list-vehicle-master/list-vehicle-master.component.ts");
/* harmony import */ var _component_edit_vehicle_master_edit_vehicle_master_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/edit-vehicle-master/edit-vehicle-master.component */ "./src/app/layout/site-management/component/edit-vehicle-master/edit-vehicle-master.component.ts");
/* harmony import */ var _vehiclemaster_reslover__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./vehiclemaster-reslover */ "./src/app/layout/site-management/vehiclemaster-reslover.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// Billty DataEntry




// Vehicle Master




var routes = [
    {
        path: '',
        component: _site_management_component__WEBPACK_IMPORTED_MODULE_2__["SiteManagementComponent"],
        children: [
            { path: '', redirectTo: 'principle-billing', pathMatch: 'prefix' },
            { path: 'principle-billing', component: _component_principle_billing_principle_billing_component__WEBPACK_IMPORTED_MODULE_3__["PrincipleBillingComponent"] },
            { path: 'principle-billing-repots', component: _component_principal_billing_reports_principal_billing_reports_component__WEBPACK_IMPORTED_MODULE_11__["PrincipalBillingReportsComponent"] },
            { path: 'billing', component: _component_billing_billing_component__WEBPACK_IMPORTED_MODULE_4__["BillingComponent"] },
            { path: 'bill-details', component: _component_bill_details_bill_details_component__WEBPACK_IMPORTED_MODULE_5__["BillDetailsComponent"] },
            { path: 'billty-entry', component: _component_billty_entry_billty_entry_component__WEBPACK_IMPORTED_MODULE_6__["BilltyEntryComponent"] },
            { path: 'extra-return-expences', component: _component_extra_return_expences_extra_return_expences_component__WEBPACK_IMPORTED_MODULE_7__["ExtraReturnExpencesComponent"] },
            { path: 'pod', component: _component_pod_pod_component__WEBPACK_IMPORTED_MODULE_8__["PodComponent"] },
            { path: 'plant-truck-postion', component: _component_plant_truck_position_plant_truck_position_component__WEBPACK_IMPORTED_MODULE_9__["PlantTruckPositionComponent"] },
            { path: 'dashboard', component: _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"] },
            // Billty Data Entry
            { path: 'billty-dataentry', component: _component_list_billty_dataentry_list_billty_dataentry_component__WEBPACK_IMPORTED_MODULE_13__["ListBilltyDataentryComponent"] },
            { path: 'billty-dataentry/:id/edit', component: _component_edit_billty_dataentry_edit_billty_dataentry_component__WEBPACK_IMPORTED_MODULE_14__["EditBilltyDataentryComponent"], resolve: { bde_details: _billtydataentry_reslover__WEBPACK_IMPORTED_MODULE_15__["BilltydataentryReslover"] } },
            { path: 'add-billty-dataentry', component: _component_add_billty_dataentry_add_billty_dataentry_component__WEBPACK_IMPORTED_MODULE_12__["AddBilltyDataentryComponent"] },
            // VehicleMaster
            { path: 'vehicle-master', component: _component_list_vehicle_master_list_vehicle_master_component__WEBPACK_IMPORTED_MODULE_17__["ListVehicleMasterComponent"] },
            { path: 'vehicle-master/:id/edit', component: _component_edit_vehicle_master_edit_vehicle_master_component__WEBPACK_IMPORTED_MODULE_18__["EditVehicleMasterComponent"], resolve: { vm_details: _vehiclemaster_reslover__WEBPACK_IMPORTED_MODULE_19__["VehiclemasterReslover"] } },
            { path: 'add-vehicle-master', component: _component_add_vehicle_master_add_vehicle_master_component__WEBPACK_IMPORTED_MODULE_16__["AddVehicleMasterComponent"] },
        ]
    }
];
var SiteRoutingModule = /** @class */ (function () {
    function SiteRoutingModule() {
    }
    SiteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SiteRoutingModule);
    return SiteRoutingModule;
}());

// ng g component layout/admin-privileges/components/PlantsRateList BilltyModule


/***/ }),

/***/ "./src/app/layout/site-management/sitemanagement.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/site-management/sitemanagement.service.ts ***!
  \******************************************************************/
/*! exports provided: SitemanagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitemanagementService", function() { return SitemanagementService; });
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


var SitemanagementService = /** @class */ (function () {
    function SitemanagementService(api) {
        this.api = api;
    }
    // billty-dataentry
    SitemanagementService.prototype.addBde = function (data) {
        return this.api.post('site-management/billty-dataentry', data);
    };
    SitemanagementService.prototype.getBde = function (id) {
        return this.api.get('site-management/billty-dataentry/' + id);
    };
    SitemanagementService.prototype.updatBde = function (id, data) {
        return this.api.put('site-management/billty-dataentry?id=' + id, data);
    };
    SitemanagementService.prototype.deleteBde = function (id) {
        return this.api.delete("site-management/billty-dataentry/" + id);
    };
    SitemanagementService.prototype.updateTruckPositionBiltyGen = function (data) {
        return this.api.put('reports/update_false_truck_positions_bilty_gen/', data);
    };
    SitemanagementService.prototype.getLrNumberDetails = function (id) {
        return this.api.post('site-management/billty-dataentry/generate_lr_number', { site: id });
    };
    // vehicle-master
    SitemanagementService.prototype.addVm = function (data) {
        return this.api.post('site-management/vehicle-master', data);
    };
    SitemanagementService.prototype.getVm = function (id) {
        return this.api.get('site-management/vehicle-master/' + id);
    };
    SitemanagementService.prototype.updatVm = function (id, data) {
        return this.api.put('site-management/vehicle-master?id=' + id, data);
    };
    SitemanagementService.prototype.deleteVm = function (id) {
        return this.api.delete("site-management/vehicle-master/" + id);
    };
    SitemanagementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], SitemanagementService);
    return SitemanagementService;
}());



/***/ }),

/***/ "./src/app/layout/site-management/vehiclemaster-reslover.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/site-management/vehiclemaster-reslover.ts ***!
  \******************************************************************/
/*! exports provided: VehiclemasterReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclemasterReslover", function() { return VehiclemasterReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sitemanagement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitemanagement.service */ "./src/app/layout/site-management/sitemanagement.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehiclemasterReslover = /** @class */ (function () {
    function VehiclemasterReslover(sm) {
        this.sm = sm;
    }
    VehiclemasterReslover.prototype.resolve = function (route) {
        return this.sm.getVm(route.paramMap.get('id'));
    };
    VehiclemasterReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_sitemanagement_service__WEBPACK_IMPORTED_MODULE_1__["SitemanagementService"]])
    ], VehiclemasterReslover);
    return VehiclemasterReslover;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    api_endpoint: 'http://harijstc.in/api/'
    // api_endpoint: 'http://ec2-15-207-108-55.ap-south-1.compute.amazonaws.com:3000/api/'
    // api_endpoint: 'http://harijstc.in/api/'
    // api_endpoint: 'http://localhost:3000/api/'
};


/***/ })

}]);
//# sourceMappingURL=site-management-site-management-module.js.map