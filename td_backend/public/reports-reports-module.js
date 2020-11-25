(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"],{

/***/ "./src/app/layout/reports/components/accounts-items-ledger-report/accounts-items-ledger-report.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/accounts-items-ledger-report/accounts-items-ledger-report.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n      <form [formGroup]=\"filterForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4><i class=\"fa fa-book\"></i> Accounts Items Ledger Report</h4>\r\n            <p class=\"text-muted\">Note: Account selection is mandatory in order to get the data.</p>\r\n            <hr />\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Start Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp\"\r\n                  formControlName=\"start_date\"\r\n                  ngbDatepicker\r\n                  #d=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>End Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp2\"\r\n                  formControlName=\"end_date\"\r\n                  ngbDatepicker\r\n                  #d1=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Select Sites</label>\r\n              <select formControlName=\"site_name\" class=\"form-control\">\r\n                  <option value=\"\">All</option>\r\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                  {{ s.branch_name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Select Account</label>\r\n              <input\r\n                    id=\"truck_no\"\r\n                    formControlName=\"account_name\"\r\n                    placeholder=\"Type Account Name...\"\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    [ngbTypeahead]=\"search\"\r\n                  />\r\n            </div>\r\n          </div> -->\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Accounts Name</label>\r\n            <ng-select [items]=\"accounts_option\" placeholder=\"Type and search items\" bindLabel=\"accountname\" bindValue=\"accountname\"\r\n              formControlName=\"account_name\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 wrapper-right\">\r\n            <button (click)=\"fetchReport()\" class=\"btn btn-primary\" >\r\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\r\n            </button>&nbsp;\r\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <hr />\r\n      <!-- <ngb-pagination\r\n          [(page)]=\"pagination.currenPage\"\r\n          [pageSize]=\"pagination.pageSize\"\r\n          [collectionSize]=\"pagination.total\"\r\n          [maxSize]=\"pagination.maxSize\"\r\n          (pageChange)=\"fetchReport()\"\r\n        ></ngb-pagination>\r\n        <p><strong>Total:</strong> {{ pagination.total }}<br /><strong>Records per page:</strong> {{ pagination.pageSize }}</p> -->\r\n      <p><b>{{filterForm.controls['account_name'].value}}</b><br><b>Opening Balance:</b> {{ accounts_data.opening_balance.opening_balance | number : '1.2-2' }} {{ accounts_data.opening_balance.type }}</p>\r\n      <table class=\"table table-hover table-striped table-bordered table-condensed\">\r\n        <thead>\r\n          <tr>\r\n            <th>Date</th>\r\n            <th>Particular</th>\r\n            <th>Dr.</th>\r\n            <th>Cr.</th>\r\n            <th>Closing</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngIf=\"loading\">\r\n            <td colspan=\"5\">\r\n              <div class=\"showbox\">\r\n                <div class=\"loader\">\r\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let report of accounts_data?.results\">\r\n            <td>{{ report.date ? report.date : '--' }}</td>\r\n            <td>{{ report.particular ? report.particular : 'N/A' }}</td>\r\n            <td class=\"cell-align\">{{ (report.dr ? report.dr : 0 ) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.cr ? report.cr : 0)  | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.closing ? report.closing : 0)  | number : '1.2-2' }}</td>\r\n          </tr>\r\n          \r\n          <tr *ngIf=\"loaded && accounts_data.results.length === 0\">\r\n            <td align=\"center\" colspan=\"6\">No data available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <p><b>Closing Balance:</b> {{ accounts_data.closing_balance | number : '1.2-2' }} {{ accounts_data.account_type }}</p>\r\n      <!-- <ngb-pagination\r\n          [(page)]=\"pagination.currenPage\"\r\n          [pageSize]=\"pagination.pageSize\"\r\n          [collectionSize]=\"pagination.total\"\r\n          [maxSize]=\"pagination.maxSize\"\r\n          (pageChange)=\"fetchReport()\"\r\n        ></ngb-pagination> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/reports/components/accounts-items-ledger-report/accounts-items-ledger-report.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/accounts-items-ledger-report/accounts-items-ledger-report.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZXBvcnRzL2NvbXBvbmVudHMvYWNjb3VudHMtaXRlbXMtbGVkZ2VyLXJlcG9ydC9hY2NvdW50cy1pdGVtcy1sZWRnZXItcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/reports/components/accounts-items-ledger-report/accounts-items-ledger-report.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/accounts-items-ledger-report/accounts-items-ledger-report.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: AccountsItemsLedgerReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsItemsLedgerReportComponent", function() { return AccountsItemsLedgerReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
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






var AccountsItemsLedgerReportComponent = /** @class */ (function () {
    function AccountsItemsLedgerReportComponent(api, meta, formBuilder, reportService, toastr) {
        this.api = api;
        this.meta = meta;
        this.formBuilder = formBuilder;
        this.reportService = reportService;
        this.toastr = toastr;
        this.loading = false;
        this.loaded = true;
        this.filters = {
            site_name: '',
            account_name: '',
            start_date: '',
            end_date: '',
            page: 0
        };
        this.accounts_data = { results: [], closing_balance: 0, opening_balance: { opening_balance: 0, type: '' }, account_type: '' };
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        this.filterForm = this.formBuilder.group({
            site_name: [''],
            account_name: [''],
            start_date: [''],
            end_date: ['']
        });
    }
    AccountsItemsLedgerReportComponent.prototype.ngOnInit = function () {
        this.getAccounts();
        this.getSites();
        // this.fetchReport();
    };
    AccountsItemsLedgerReportComponent.prototype.getSites = function () {
        var _this = this;
        this.meta.getSites().subscribe(function (res) {
            _this.sites = res;
            if (_this.usertype === 'ADMIN') {
                _this.filterForm.controls['site_name'].setValue('');
            }
            else {
                _this.filterForm.controls['site_name'].setValue('');
            }
        }, function (err) {
        });
    };
    AccountsItemsLedgerReportComponent.prototype.getAccounts = function () {
        var _this = this;
        this.meta.getAccountsItemsLedgerList().subscribe(function (trackInfo) {
            _this.accounts_option = trackInfo['result'];
            console.log('AccountsList >>>>>', _this.accounts_option);
        });
    };
    AccountsItemsLedgerReportComponent.prototype.resetFilters = function () {
        this.filterForm.get('account_name').setValue('');
        this.filterForm.get('start_date').setValue('');
        this.filterForm.get('end_date').setValue('');
        this.filters = {
            site_name: '',
            account_name: '',
            start_date: '',
            end_date: '',
            page: 0
        };
        this.fetchReport();
    };
    AccountsItemsLedgerReportComponent.prototype.fetchReport = function () {
        var _this = this;
        var startDt = '';
        var endDt = '';
        // if (!this.filterForm.controls['account_name'].value) {
        //     this.toastr.error('Please enter account name.', 'No Account Selected.');
        //     return;
        // }
        if (this.filterForm.controls['start_date'].value) {
            startDt = this.filterForm.controls['start_date'].value.year + '-' +
                this.filterForm.controls['start_date'].value.month + '-' +
                this.filterForm.controls['start_date'].value.day;
        }
        else {
            startDt = '';
        }
        if (this.filterForm.controls['end_date'].value) {
            endDt = this.filterForm.controls['end_date'].value.year + '-' +
                this.filterForm.controls['end_date'].value.month + '-' +
                (this.filterForm.controls['end_date'].value.day);
        }
        else {
            endDt = '';
        }
        this.filters.page = this.pagination.currenPage;
        if (this.filterForm.controls['site_name'].value) {
            this.filters.site_name = this.filterForm.controls['site_name'].value;
        }
        else {
            this.filters.site_name = '';
        }
        if (this.filterForm.controls['account_name'].value) {
            this.filters.account_name = this.filterForm.controls['account_name'].value;
        }
        else {
            this.filters.account_name = '';
        }
        this.filters.start_date = startDt;
        this.filters.end_date = endDt;
        this.loading = true;
        this.loaded = false;
        // this.accounts_data = [];
        this.reportService.getAccountItemsLedgerReports(this.filters).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            console.log(_this.filters);
            console.log(res);
            _this.accounts_data = res;
            // this.pagination.total = res.total;
        }, function (err) {
            _this.loading = false;
            _this.loaded = true;
        });
    };
    AccountsItemsLedgerReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accounts-items-ledger-report',
            template: __webpack_require__(/*! ./accounts-items-ledger-report.component.html */ "./src/app/layout/reports/components/accounts-items-ledger-report/accounts-items-ledger-report.component.html"),
            styles: [__webpack_require__(/*! ./accounts-items-ledger-report.component.scss */ "./src/app/layout/reports/components/accounts-items-ledger-report/accounts-items-ledger-report.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__["MetaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], AccountsItemsLedgerReportComponent);
    return AccountsItemsLedgerReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/components/accounts-ledger-report/accounts-ledger-report.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/accounts-ledger-report/accounts-ledger-report.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n      <form [formGroup]=\"filterForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4><i class=\"fa fa-book\"></i> Accounts Ledger</h4>\r\n            <p class=\"text-muted\">Note: Account selection is mandatory in order to get the data.</p>\r\n            <hr />\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n              <label>Start Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp\"\r\n                  formControlName=\"start_date\"\r\n                  ngbDatepicker\r\n                  #d=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n              <label>End Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp2\"\r\n                  formControlName=\"end_date\"\r\n                  ngbDatepicker\r\n                  #d1=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Select Sites</label>\r\n              <select formControlName=\"site_name\" class=\"form-control\">\r\n                  <option value=\"\">All</option>\r\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                  {{ s.branch_name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Select Account</label>\r\n              <input\r\n                    id=\"truck_no\"\r\n                    formControlName=\"account_name\"\r\n                    placeholder=\"Type Account Name...\"\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    [ngbTypeahead]=\"search\"\r\n                  />\r\n            </div>\r\n          </div> -->\r\n\r\n          <div class=\"col-md-4\">\r\n            <label class=\"required\">Accounts Name</label>\r\n            <ng-select [items]=\"accounts_option\" placeholder=\"Type and search items\" bindLabel=\"accountname\" bindValue=\"accountname\"\r\n              formControlName=\"account_name\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 wrapper-right\">\r\n            <button (click)=\"fetchReport()\" class=\"btn btn-primary\" >\r\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\r\n            </button>&nbsp;\r\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <hr />\r\n      <!-- <ngb-pagination\r\n          [(page)]=\"pagination.currenPage\"\r\n          [pageSize]=\"pagination.pageSize\"\r\n          [collectionSize]=\"pagination.total\"\r\n          [maxSize]=\"pagination.maxSize\"\r\n          (pageChange)=\"fetchReport()\"\r\n        ></ngb-pagination>\r\n        <p><strong>Total:</strong> {{ pagination.total }}<br /><strong>Records per page:</strong> {{ pagination.pageSize }}</p> -->\r\n      <p><b>{{filterForm.controls['account_name'].value}}</b><br><b>Opening Balance:</b> {{ accounts_data.opening_balance.opening_balance | number : '1.2-2' }} {{ accounts_data.opening_balance.account_type }}</p>\r\n      <table class=\"table table-hover table-striped table-bordered table-condensed\">\r\n        <thead>\r\n          <tr>\r\n            <th>Date</th>\r\n            <th>Particular</th>\r\n            <th>Dr.</th>\r\n            <th>Cr.</th>\r\n            <th>Closing</th>\r\n            <th>DrCr</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngIf=\"loading\">\r\n            <td colspan=\"5\">\r\n              <div class=\"showbox\">\r\n                <div class=\"loader\">\r\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let report of accounts_data?.results\">\r\n            <td>{{ report.date ? report.date : '--' }}</td>\r\n            <td>{{ report.particular ? report.particular : 'N/A' }}</td>\r\n            <td class=\"cell-align\">{{ (report.dr ? report.dr : 0 ) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.cr ? report.cr : 0)  | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.closing ? report.closing : 0)  | number : '1.2-2' }}</td>\r\n            <td>{{ report.drcr ? report.drcr : 'N/A' }}</td>\r\n          </tr>\r\n\r\n          <tr *ngIf=\"loaded && accounts_data.results.length === 0\">\r\n            <td align=\"center\" colspan=\"6\">No data available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <p><b>Closing Balance:</b> {{ accounts_data.closing_balance | number : '1.2-2' }} {{ accounts_data.account_type }}</p>\r\n      <!-- <ngb-pagination\r\n          [(page)]=\"pagination.currenPage\"\r\n          [pageSize]=\"pagination.pageSize\"\r\n          [collectionSize]=\"pagination.total\"\r\n          [maxSize]=\"pagination.maxSize\"\r\n          (pageChange)=\"fetchReport()\"\r\n        ></ngb-pagination> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/reports/components/accounts-ledger-report/accounts-ledger-report.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/accounts-ledger-report/accounts-ledger-report.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".min-height {\n  min-height: 70vh; }\n\n.cell-align {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydHMvY29tcG9uZW50cy9hY2NvdW50cy1sZWRnZXItcmVwb3J0L0Y6XFx0ZXN0aW5nX2RlbGV0ZV9mb2xkZXJcXFRSVUNLX0RFTU9fb2xkR2FuZXNoXFxmcm9udGVuZFxcdGRfZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccmVwb3J0c1xcY29tcG9uZW50c1xcYWNjb3VudHMtbGVkZ2VyLXJlcG9ydFxcYWNjb3VudHMtbGVkZ2VyLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFhLGdCQUFnQixFQUFBOztBQUU3QjtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3JlcG9ydHMvY29tcG9uZW50cy9hY2NvdW50cy1sZWRnZXItcmVwb3J0L2FjY291bnRzLWxlZGdlci1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWluLWhlaWdodCB7bWluLWhlaWdodDogNzB2aH1cclxuXHJcbi5jZWxsLWFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/reports/components/accounts-ledger-report/accounts-ledger-report.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/accounts-ledger-report/accounts-ledger-report.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AccountsLedgerReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsLedgerReportComponent", function() { return AccountsLedgerReportComponent; });
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
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







var AccountsLedgerReportComponent = /** @class */ (function () {
    function AccountsLedgerReportComponent(api, meta, formBuilder, reportService, toastr) {
        this.api = api;
        this.meta = meta;
        this.formBuilder = formBuilder;
        this.reportService = reportService;
        this.toastr = toastr;
        this.loading = false;
        this.loaded = true;
        this.filters = {
            site_name: '',
            account_name: '',
            start_date: '',
            end_date: '',
            page: 0
        };
        this.accounts_data = { results: [], closing_balance: 0, opening_balance: { opening_balance: 0, account_type: '' }, account_type: '' };
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        this.filterForm = this.formBuilder.group({
            site_name: [''],
            account_name: [''],
            start_date: [''],
            end_date: ['']
        });
    }
    AccountsLedgerReportComponent.prototype.ngOnInit = function () {
        this.getAccounts();
        this.getSites();
        // this.fetchReport();
    };
    AccountsLedgerReportComponent.prototype.getSites = function () {
        var _this = this;
        this.meta.getSites().subscribe(function (res) {
            _this.sites = res;
            if (_this.usertype === 'ADMIN') {
                _this.filterForm.controls['site_name'].setValue('');
            }
            else {
                _this.filterForm.controls['site_name'].setValue('');
            }
        }, function (err) {
        });
    };
    AccountsLedgerReportComponent.prototype.getAccounts = function () {
        var _this = this;
        this.meta.getAccountsLedgerList().subscribe(function (trackInfo) {
            _this.accounts_option = trackInfo['result'];
            console.log('AccountsListt >>>>>', _this.accounts_option);
        });
    };
    // getAccounts() {
    //     this.meta.getAccounts().subscribe((res: any) => {
    //         res.forEach(r => {
    //             if (r.accountname) {
    //                 this.accounts.push(r.accountname);
    //             }
    //         });
    //         console.log(this.accounts);
    //     }, err => {
    //     });
    // }
    // search = (text$: Observable<string>) =>
    //     text$.pipe(
    //         debounceTime(200),
    //         distinctUntilChanged(),
    //         map(term => (term.length < 2 ? [] : this.accounts.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)))
    // )
    AccountsLedgerReportComponent.prototype.resetFilters = function () {
        this.filterForm.get('account_name').setValue('');
        this.filterForm.get('site_name').setValue('');
        this.filterForm.get('start_date').setValue('');
        this.filterForm.get('end_date').setValue('');
        this.filters = {
            site_name: '',
            account_name: '',
            start_date: '',
            end_date: '',
            page: 0
        };
        // this.fetchReport();
    };
    AccountsLedgerReportComponent.prototype.fetchReport = function () {
        var _this = this;
        var startDt = '';
        var endDt = '';
        if (this.filterForm.controls['start_date'].value) {
            startDt = this.filterForm.controls['start_date'].value.year + '-' +
                this.filterForm.controls['start_date'].value.month + '-' +
                this.filterForm.controls['start_date'].value.day;
        }
        else {
            startDt = '';
        }
        if (this.filterForm.controls['end_date'].value) {
            endDt = this.filterForm.controls['end_date'].value.year + '-' +
                this.filterForm.controls['end_date'].value.month + '-' +
                (this.filterForm.controls['end_date'].value.day);
        }
        else {
            endDt = '';
        }
        this.filters.page = this.pagination.currenPage;
        if (this.filterForm.controls['site_name'].value) {
            this.filters.site_name = this.filterForm.controls['site_name'].value;
        }
        else {
            this.filters.site_name = '';
        }
        if (this.filterForm.controls['account_name'].value) {
            this.filters.account_name = this.filterForm.controls['account_name'].value;
        }
        else {
            this.filters.account_name = '';
        }
        this.filters.start_date = startDt;
        this.filters.end_date = endDt;
        this.loading = true;
        this.loaded = false;
        // this.accounts_data = [];
        this.reportService.getAccountReports(this.filters).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            console.log(_this.filters);
            console.log(res);
            _this.accounts_data = res;
            // this.pagination.total = res.total;
        }, function (err) {
            _this.loading = false;
            _this.loaded = true;
        });
    };
    AccountsLedgerReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accounts-ledger-report',
            template: __webpack_require__(/*! ./accounts-ledger-report.component.html */ "./src/app/layout/reports/components/accounts-ledger-report/accounts-ledger-report.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_0__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./accounts-ledger-report.component.scss */ "./src/app/layout/reports/components/accounts-ledger-report/accounts-ledger-report.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], AccountsLedgerReportComponent);
    return AccountsLedgerReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/components/balance-scrap-report/balance-scrap-report.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/balance-scrap-report/balance-scrap-report.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <div class=\"row\">\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n      <form [formGroup]=\"filterForm\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h4><i class=\"fa fa-book\"></i> Balance Scrap Stock</h4>\n            <hr />\n          </div>\n          \n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Start Date</label>\n              <div class=\"input-group datepicker-input\">\n                <input\n                  class=\"form-control\"\n                  placeholder=\"dd/mm/yyyy\"\n                  name=\"dp\"\n                  formControlName=\"start_date\"\n                  ngbDatepicker\n                  #d=\"ngbDatepicker\"\n                />\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>End Date</label>\n              <div class=\"input-group datepicker-input\">\n                <input\n                  class=\"form-control\"\n                  placeholder=\"dd/mm/yyyy\"\n                  name=\"dp2\"\n                  formControlName=\"end_date\"\n                  ngbDatepicker\n                  #d1=\"ngbDatepicker\"\n                />\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Select Sites</label>\n              <select formControlName=\"site_name\" class=\"form-control\">\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\n                  {{ s.branch_name }}\n                </option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"col-md-3\">\n            <label class=\"required\">Item Name</label>\n            <ng-select [items]=\"items_option\" placeholder=\"Type and search items\" bindLabel=\"itemname\" bindValue=\"itemname\"\n              formControlName=\"item_name\">\n            </ng-select>\n          </div>\n\n\n          <div class=\"col-md-4 wrapper-right\">\n            <button (click)=\"fetchReport()\" class=\"btn btn-primary\">\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\n            </button>&nbsp;\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\n          </div>\n        </div>\n      </form>\n      <hr />\n\n      <!-- <ngb-pagination\n          [(page)]=\"pagination.currenPage\"\n          [pageSize]=\"pagination.pageSize\"\n          [collectionSize]=\"pagination.total\"\n          [maxSize]=\"pagination.maxSize\"\n          (pageChange)=\"fetchReport()\"\n        ></ngb-pagination>-->\n        <p><b></b><br><b></b></p>\n      <table class=\"table table-hover table-striped table-bordered table-condensed\">\n        <thead>\n          <tr>\n            <th>Item name</th>\n            <th>Closing Stock.</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngIf=\"loading\">\n            <td colspan=\"5\">\n              <div class=\"showbox\">\n                <div class=\"loader\">\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n                  </svg>\n                </div>\n              </div>\n            </td>\n          </tr>\n\n          <tr *ngFor=\"let m of monthlyData\">\n            <td>{{ m.item_name ? m.item_name : '--' }}</td>\n            <td class=\"cell-align\">{{ (m.dr ? m.dr : 0 ) | number : '1.2-2' }}</td>\n          </tr>\n          <!-- <tr *ngIf=\"monthlyData.length > 0\">\n              <td align=\"right\" colspan=\"2\">Total</td>\n              <td align=\"right\">{{totalDr | number : '1.2-2'}}</td>\n              <td align=\"right\">{{totalCr | number : '1.2-2'}}</td>\n          </tr> -->\n          <tr *ngIf=\" loaded && monthlyData.length === 0\">\n            <td align=\"center\" colspan=\"4\">No data available</td>\n          </tr>\n        </tbody>\n      </table>\n      <!-- <ngb-pagination\n          [(page)]=\"pagination.currenPage\"\n          [pageSize]=\"pagination.pageSize\"\n          [collectionSize]=\"pagination.total\"\n          [maxSize]=\"pagination.maxSize\"\n          (pageChange)=\"fetchReport()\"\n        ></ngb-pagination> -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/reports/components/balance-scrap-report/balance-scrap-report.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/balance-scrap-report/balance-scrap-report.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZXBvcnRzL2NvbXBvbmVudHMvYmFsYW5jZS1zY3JhcC1yZXBvcnQvYmFsYW5jZS1zY3JhcC1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/reports/components/balance-scrap-report/balance-scrap-report.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/balance-scrap-report/balance-scrap-report.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: BalanceScrapReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceScrapReportComponent", function() { return BalanceScrapReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/inventory.service */ "./src/app/shared/services/inventory.service.ts");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BalanceScrapReportComponent = /** @class */ (function () {
    function BalanceScrapReportComponent(formBuilder, toastr, inventoryService, meta) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.inventoryService = inventoryService;
        this.meta = meta;
        this.monthlyData = [];
        this.loading = false;
        this.filters = {
            site_name: '',
            start_date: '',
            end_date: '',
            item_name: '',
            page: 0
        };
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.totalDr = 0;
        this.totalCr = 0;
        this.loaded = true;
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        this.filterForm = this.formBuilder.group({
            site_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            start_date: [''],
            end_date: [''],
            item_name: ['']
        });
    }
    BalanceScrapReportComponent.prototype.ngOnInit = function () {
        this.getSites();
        this.getItems();
    };
    BalanceScrapReportComponent.prototype.getItems = function () {
        var _this = this;
        this.meta.getScrapLedgerItemsList().subscribe(function (trackInfo) {
            _this.items_option = trackInfo['result'];
            console.log('ItemsList >>>>>', _this.items_option);
        });
    };
    BalanceScrapReportComponent.prototype.getSites = function () {
        var _this = this;
        this.meta.getSites().subscribe(function (res) {
            _this.sites = res;
            if (_this.usertype === 'ADMIN') {
                _this.filterForm.controls['site_name'].setValue('');
            }
            else {
                _this.filterForm.controls['site_name'].setValue(_this.site_name);
            }
        }, function (err) {
        });
    };
    BalanceScrapReportComponent.prototype.resetFilters = function () {
        this.filterForm.get('start_date').setValue('');
        this.filterForm.get('end_date').setValue('');
        this.filters = {
            site_name: '',
            start_date: '',
            end_date: '',
            item_name: '',
            page: 0
        };
        this.fetchReport();
    };
    BalanceScrapReportComponent.prototype.fetchReport = function () {
        var _this = this;
        var startDt = '';
        var endDt = '';
        if (this.filterForm.controls['site_name'].value) {
            this.filters.site_name = this.filterForm.controls['site_name'].value;
        }
        else {
            this.filters.site_name = '';
        }
        if (this.filterForm.controls['start_date'].value) {
            startDt = this.filterForm.controls['start_date'].value.year + '-' +
                this.filterForm.controls['start_date'].value.month + '-' +
                this.filterForm.controls['start_date'].value.day;
        }
        else {
            startDt = '';
        }
        if (this.filterForm.controls['end_date'].value) {
            endDt = this.filterForm.controls['end_date'].value.year + '-' +
                this.filterForm.controls['end_date'].value.month + '-' +
                (this.filterForm.controls['end_date'].value.day);
        }
        else {
            endDt = '';
        }
        if (this.filterForm.controls['item_name'].value) {
            this.filters.item_name = this.filterForm.controls['item_name'].value;
        }
        else {
            this.filters.item_name = '';
        }
        this.filters.page = this.pagination.currenPage;
        this.filters.start_date = startDt;
        this.filters.end_date = endDt;
        this.loading = true;
        this.loaded = false;
        this.monthlyData = [];
        this.inventoryService.getBalanceScrapStock(this.filters).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            res.result.forEach(function (element) {
                _this.totalDr = _this.totalDr + element.dr;
                _this.totalCr = _this.totalCr + element.cr;
            });
            _this.monthlyData = res.result;
            // this.pagination.total = res.total;
        }, function (err) {
            _this.loaded = true;
            _this.loading = false;
        });
    };
    BalanceScrapReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-balance-scrap-report',
            template: __webpack_require__(/*! ./balance-scrap-report.component.html */ "./src/app/layout/reports/components/balance-scrap-report/balance-scrap-report.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./balance-scrap-report.component.scss */ "./src/app/layout/reports/components/balance-scrap-report/balance-scrap-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_shared_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__["MetaService"]])
    ], BalanceScrapReportComponent);
    return BalanceScrapReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/components/balance-stock-report/balance-stock-report.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/balance-stock-report/balance-stock-report.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n      <form [formGroup]=\"filterForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4><i class=\"fa fa-book\"></i> Balance Stock</h4>\r\n            <hr />\r\n          </div>\r\n          \r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Start Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp\"\r\n                  formControlName=\"start_date\"\r\n                  ngbDatepicker\r\n                  #d=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>End Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp2\"\r\n                  formControlName=\"end_date\"\r\n                  ngbDatepicker\r\n                  #d1=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Select Sites</label>\r\n              <select formControlName=\"site_name\" class=\"form-control\">\r\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                  {{ s.branch_name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <label class=\"required\">Item Name</label>\r\n            <ng-select [items]=\"items_option\" placeholder=\"Type and search items\" bindLabel=\"itemname\" bindValue=\"itemname\"\r\n              formControlName=\"item_name\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 wrapper-right\">\r\n            <button (click)=\"fetchReport()\" class=\"btn btn-primary\">\r\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\r\n            </button>&nbsp;\r\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <hr />\r\n\r\n      <!-- <ngb-pagination\r\n          [(page)]=\"pagination.currenPage\"\r\n          [pageSize]=\"pagination.pageSize\"\r\n          [collectionSize]=\"pagination.total\"\r\n          [maxSize]=\"pagination.maxSize\"\r\n          (pageChange)=\"fetchReport()\"\r\n        ></ngb-pagination>-->\r\n        <p><b></b><br><b></b></p>\r\n      <table class=\"table table-hover table-striped table-bordered table-condensed\">\r\n        <thead>\r\n          <tr>\r\n            <th>Item name</th>\r\n            <th>Closing Stock.</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"loading\">\r\n            <td colspan=\"5\">\r\n              <div class=\"showbox\">\r\n                <div class=\"loader\">\r\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr *ngFor=\"let m of monthlyData\">\r\n            <td>{{ m.item_name ? m.item_name : '--' }}</td>\r\n            <td class=\"cell-align\">{{ (m.dr ? m.dr : 0 ) | number : '1.2-2' }}</td>\r\n          </tr>\r\n          <!-- <tr *ngIf=\"monthlyData.length > 0\">\r\n              <td align=\"right\" colspan=\"2\">Total</td>\r\n              <td align=\"right\">{{totalDr | number : '1.2-2'}}</td>\r\n              <td align=\"right\">{{totalCr | number : '1.2-2'}}</td>\r\n          </tr> -->\r\n          <tr *ngIf=\" loaded && monthlyData.length === 0\">\r\n            <td align=\"center\" colspan=\"4\">No data available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <!-- <ngb-pagination\r\n          [(page)]=\"pagination.currenPage\"\r\n          [pageSize]=\"pagination.pageSize\"\r\n          [collectionSize]=\"pagination.total\"\r\n          [maxSize]=\"pagination.maxSize\"\r\n          (pageChange)=\"fetchReport()\"\r\n        ></ngb-pagination> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/reports/components/balance-stock-report/balance-stock-report.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/balance-stock-report/balance-stock-report.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZXBvcnRzL2NvbXBvbmVudHMvYmFsYW5jZS1zdG9jay1yZXBvcnQvYmFsYW5jZS1zdG9jay1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/reports/components/balance-stock-report/balance-stock-report.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/balance-stock-report/balance-stock-report.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: BalanceStockReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceStockReportComponent", function() { return BalanceStockReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/inventory.service */ "./src/app/shared/services/inventory.service.ts");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BalanceStockReportComponent = /** @class */ (function () {
    function BalanceStockReportComponent(formBuilder, toastr, inventoryService, meta) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.inventoryService = inventoryService;
        this.meta = meta;
        this.monthlyData = [];
        this.loading = false;
        this.filters = {
            site_name: '',
            start_date: '',
            end_date: '',
            item_name: '',
            page: 0
        };
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.totalDr = 0;
        this.totalCr = 0;
        this.loaded = true;
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        this.filterForm = this.formBuilder.group({
            site_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            start_date: [''],
            end_date: [''],
            item_name: ['']
        });
    }
    BalanceStockReportComponent.prototype.ngOnInit = function () {
        this.getSites();
        this.getItems();
    };
    BalanceStockReportComponent.prototype.getItems = function () {
        var _this = this;
        this.meta.getItemsList().subscribe(function (trackInfo) {
            _this.items_option = trackInfo['result'];
            console.log('ItemsList >>>>>', _this.items_option);
        });
    };
    BalanceStockReportComponent.prototype.getSites = function () {
        var _this = this;
        this.meta.getSites().subscribe(function (res) {
            _this.sites = res;
            if (_this.usertype === 'ADMIN') {
                _this.filterForm.controls['site_name'].setValue('');
            }
            else {
                _this.filterForm.controls['site_name'].setValue(_this.site_name);
            }
        }, function (err) {
        });
    };
    BalanceStockReportComponent.prototype.resetFilters = function () {
        this.filterForm.get('start_date').setValue('');
        this.filterForm.get('end_date').setValue('');
        this.filters = {
            site_name: '',
            start_date: '',
            end_date: '',
            item_name: '',
            page: 0
        };
        this.fetchReport();
    };
    BalanceStockReportComponent.prototype.fetchReport = function () {
        var _this = this;
        var startDt = '';
        var endDt = '';
        if (this.filterForm.controls['site_name'].value) {
            this.filters.site_name = this.filterForm.controls['site_name'].value;
        }
        else {
            this.filters.site_name = '';
        }
        if (this.filterForm.controls['start_date'].value) {
            startDt = this.filterForm.controls['start_date'].value.year + '-' +
                this.filterForm.controls['start_date'].value.month + '-' +
                this.filterForm.controls['start_date'].value.day;
        }
        else {
            startDt = '';
        }
        if (this.filterForm.controls['end_date'].value) {
            endDt = this.filterForm.controls['end_date'].value.year + '-' +
                this.filterForm.controls['end_date'].value.month + '-' +
                (this.filterForm.controls['end_date'].value.day);
        }
        else {
            endDt = '';
        }
        if (this.filterForm.controls['item_name'].value) {
            this.filters.item_name = this.filterForm.controls['item_name'].value;
        }
        else {
            this.filters.item_name = '';
        }
        this.filters.page = this.pagination.currenPage;
        this.filters.start_date = startDt;
        this.filters.end_date = endDt;
        this.loading = true;
        this.loaded = false;
        this.monthlyData = [];
        this.inventoryService.getBalanceStock(this.filters).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            res.result.forEach(function (element) {
                _this.totalDr = _this.totalDr + element.dr;
                _this.totalCr = _this.totalCr + element.cr;
            });
            _this.monthlyData = res.result;
            // this.pagination.total = res.total;
        }, function (err) {
            _this.loaded = true;
            _this.loading = false;
        });
    };
    BalanceStockReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-balance-stock-report',
            template: __webpack_require__(/*! ./balance-stock-report.component.html */ "./src/app/layout/reports/components/balance-stock-report/balance-stock-report.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./balance-stock-report.component.scss */ "./src/app/layout/reports/components/balance-stock-report/balance-stock-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_shared_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__["MetaService"]])
    ], BalanceStockReportComponent);
    return BalanceStockReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/components/dealer-wise-purchase/dealer-wise-purchase.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/dealer-wise-purchase/dealer-wise-purchase.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n      <form [formGroup]=\"filterForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4><i class=\"fa fa-book\"></i> Dealer Wise Purchase</h4>\r\n            <hr />\r\n          </div>\r\n          \r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Start Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp\"\r\n                  formControlName=\"start_date\"\r\n                  ngbDatepicker\r\n                  #d=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>End Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp2\"\r\n                  formControlName=\"end_date\"\r\n                  ngbDatepicker\r\n                  #d1=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label class=\"required\">Vendor Name</label>\r\n              <ng-select [items]=\"vendor_option\" placeholder=\"Type and search vendor\" bindLabel=\"name\" bindValue=\"name\"\r\n                formControlName=\"vendor\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label class=\"required\">Item Name</label>\r\n              <ng-select [items]=\"item_option\" placeholder=\"Type and search Item\" bindLabel=\"name\" bindValue=\"name\"\r\n                formControlName=\"item_name\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n\r\n  \r\n\r\n          <div class=\"col-md-4 wrapper-right\">\r\n            <button (click)=\"fetchReport()\" class=\"btn btn-primary\">\r\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\r\n            </button>&nbsp;\r\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <hr />\r\n\r\n        <p><b></b><br><b></b></p>\r\n      <table class=\"table table-hover table-striped table-bordered table-condensed\">\r\n        <thead>\r\n          <tr>\r\n            <th>Date</th>\r\n            <th>Vendor name</th>\r\n            <th>Item name</th>\r\n            <th>Qty</th>\r\n            <th>Rate</th>\r\n            <th>Amount</th>\r\n          </tr>\r\n        </thead>\r\n        \r\n        <tbody>\r\n          <tr *ngIf=\"loading\">\r\n            <td colspan=\"5\">\r\n              <div class=\"showbox\">\r\n                <div class=\"loader\">\r\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr *ngFor=\"let report of reportData\">\r\n            <td>{{ report.mr_date ? report.mr_date : '--' }}</td>\r\n            <td>{{ report.vendor ? report.vendor : '--' }}</td>\r\n            <td>{{ report.name ? report.name : '--' }}</td>\r\n            <td class=\"cell-align\">{{ (report.qty ? report.qty : 0 ) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.price ? report.price : 0)  | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.amount ? report.amount : 0)  | number : '1.2-2' }}</td>\r\n\r\n          </tr>\r\n          <tr *ngIf=\" loaded && reportData.length === 0\">\r\n            <td align=\"center\" colspan=\"4\">No data available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/reports/components/dealer-wise-purchase/dealer-wise-purchase.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/dealer-wise-purchase/dealer-wise-purchase.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZXBvcnRzL2NvbXBvbmVudHMvZGVhbGVyLXdpc2UtcHVyY2hhc2UvZGVhbGVyLXdpc2UtcHVyY2hhc2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/reports/components/dealer-wise-purchase/dealer-wise-purchase.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/dealer-wise-purchase/dealer-wise-purchase.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DealerWisePurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerWisePurchaseComponent", function() { return DealerWisePurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/inventory.service */ "./src/app/shared/services/inventory.service.ts");
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




// import { routerTransition } from 'src/app/router.animations';

var DealerWisePurchaseComponent = /** @class */ (function () {
    function DealerWisePurchaseComponent(formBuilder, toastr, is, meta) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.is = is;
        this.meta = meta;
        this.reportData = [];
        this.loading = false;
        this.filters = {
            vendor: '',
            item_name: '',
            start_date: '',
            end_date: '',
            page: 0
        };
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.totalDr = 0;
        this.totalCr = 0;
        this.loaded = true;
        this.filterForm = this.formBuilder.group({
            vendor: [''],
            item_name: [''],
            start_date: [''],
            end_date: ['']
        });
    }
    DealerWisePurchaseComponent.prototype.ngOnInit = function () {
        this.getOptions();
    };
    DealerWisePurchaseComponent.prototype.getOptions = function () {
        var _this = this;
        this.meta.getmrItemList().subscribe(function (siteInfo) {
            _this.item_option = siteInfo['result'];
            console.log('>>>>Item List', siteInfo['result']);
        });
        this.meta.getmrVendorList().subscribe(function (siteInfo) {
            _this.vendor_option = siteInfo['result'];
            console.log('>>>>Vendor List', siteInfo['result']);
        });
    };
    DealerWisePurchaseComponent.prototype.resetFilters = function () {
        this.filterForm.get('start_date').setValue('');
        this.filterForm.get('end_date').setValue('');
        this.filters = {
            vendor: '',
            item_name: '',
            start_date: '',
            end_date: '',
            page: 0
        };
        this.fetchReport();
    };
    DealerWisePurchaseComponent.prototype.fetchReport = function () {
        var _this = this;
        var startDt = '';
        var endDt = '';
        if (this.filterForm.controls['vendor'].value) {
            this.filters.vendor = this.filterForm.controls['vendor'].value;
        }
        else {
            this.filters.vendor = '';
        }
        if (this.filterForm.controls['item_name'].value) {
            this.filters.item_name = this.filterForm.controls['item_name'].value;
        }
        else {
            this.filters.item_name = '';
        }
        if (this.filterForm.controls['start_date'].value) {
            startDt = this.filterForm.controls['start_date'].value.year + '-' +
                this.filterForm.controls['start_date'].value.month + '-' +
                this.filterForm.controls['start_date'].value.day;
        }
        else {
            startDt = '';
        }
        if (this.filterForm.controls['end_date'].value) {
            endDt = this.filterForm.controls['end_date'].value.year + '-' +
                this.filterForm.controls['end_date'].value.month + '-' +
                (this.filterForm.controls['end_date'].value.day);
        }
        else {
            endDt = '';
        }
        this.filters.page = this.pagination.currenPage;
        this.filters.start_date = startDt;
        this.filters.end_date = endDt;
        this.loading = true;
        this.loaded = false;
        this.reportData = [];
        this.is.getDealerWisePurchase(this.filters).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            _this.reportData = res.result;
        }, function (err) {
            _this.loaded = true;
            _this.loading = false;
        });
    };
    DealerWisePurchaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dealer-wise-purchase',
            template: __webpack_require__(/*! ./dealer-wise-purchase.component.html */ "./src/app/layout/reports/components/dealer-wise-purchase/dealer-wise-purchase.component.html"),
            styles: [__webpack_require__(/*! ./dealer-wise-purchase.component.scss */ "./src/app/layout/reports/components/dealer-wise-purchase/dealer-wise-purchase.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_shared_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"]])
    ], DealerWisePurchaseComponent);
    return DealerWisePurchaseComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/components/dispatch-summary-site-wise/dispatch-summary-site-wise.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/dispatch-summary-site-wise/dispatch-summary-site-wise.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <a routerLink=\"/reports/dispatch_summary\" [routerLinkActive]=\"['router-link-active']\">\r\n            <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> &nbsp;\r\n          </a>\r\n          <span>\r\n            <i class=\"fa fa-industry\"></i> {{ sitename }}\r\n          </span>\r\n\r\n          <button  style=\"margin-right: 10px\" class=\"btn btn-sm btn-success pull-right\" (click)=\"ExportAsExcel()\">\r\n              <i class=\"fa fa fa-file-excel-o\"></i> Save As EXCEL</button>\r\n\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form [formGroup]=\"form\">\r\n\r\n            <div class=\"btn-group btn-group-toggle pull-right\" (change)=\"onReportParameterChange(form.value['filters'])\"\r\n              ngbRadioGroup name=\"radioBasic\" formControlName=\"filters\">\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"date\"> Date Wise\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"month\"> Month Wise\r\n              </label>\r\n            </div>\r\n          </form>\r\n          <div class=\"clearfix\"></div>\r\n          <br>\r\n          <table id=\"dailytable\" class=\"table mytable tableFixHead\" *ngIf=\"active_report == 'date'\">\r\n            <thead>\r\n              <tr>\r\n                <th>Date</th>\r\n                <th>D.I No.</th>\r\n                <th>Lr no.</th>\r\n                <th>From</th>\r\n                <th>Destination</th>\r\n                <th>Consignee Name</th>\r\n                <th>Truck no</th>\r\n                <th>Owner name</th>\r\n                <th class=\"cell-align\">KM</th>\r\n                <th class=\"cell-align\">Qty</th>\r\n                <th class=\"cell-align\">C.Rate</th>\r\n                <th class=\"cell-align\">C.Freight</th>\r\n                <th class=\"cell-align\">P.Rate</th>\r\n                <th class=\"cell-align\">P.Freight</th>\r\n                <th class=\"cell-align\">Comm</th>\r\n                <th class=\"cell-align\">GPS</th>\r\n                <th class=\"cell-align\">D.Qty</th>\r\n                <th class=\"cell-align\">D.Amt</th>\r\n                <th class=\"cell-align\">JST Adv</th>\r\n                <th class=\"cell-align\">Party Adv.</th>\r\n                <th class=\"cell-align\">Ex. Diesal</th>\r\n                <th class=\"cell-align\">Ex.Exp</th>\r\n                <th class=\"cell-align\">Profit</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let report of report_data\">\r\n                <td>{{ report.LR_Date | date: 'dd/MM/yyyy'}}</td>\r\n                <td class=\"cell-align\">{{ report.G_I_No }}</td>\r\n                <td>{{ report.LrNo}}</td>\r\n                <td>{{ report.From}}</td>\r\n                <td>{{ report.Destination}}</td>\r\n                <td>{{ report.Consignne }}</td>\r\n                <td>{{ report.Truckno }}</td>\r\n                <td>{{ report.Ownername ? report.Ownername : '-' }}</td>\r\n                <td class=\"cell-align\">{{ report.km }}</td>\r\n                <td class=\"cell-align\">{{ report.C_WT}}</td>\r\n                <td class=\"cell-align\">{{ report.C_Rate ? report.C_Rate : 0 }}</td>\r\n                <td class=\"cell-align\">{{ report.C_Freight ? report.C_Freight : 0 }}</td>\r\n                <td class=\"cell-align\">{{ report.P_Rate ? report.P_Rate : 0 }}</td>\r\n                <td class=\"cell-align\">{{ report.P_Freight ? report.P_Freight : 0 }}</td>\r\n                <td class=\"cell-align\">{{ report.Commision ? report.Commision : 0 | number : '1.2-2' }}</td>\r\n                <td class=\"cell-align\">{{ report.gps ? 'yes' : 'no' }}</td>\r\n                <td class=\"cell-align\">{{ report.D_Qty ? report.D_Qty : 0 | number : '1.2-2' }}</td>\r\n                <td class=\"cell-align\">{{ report.D_Amt ? report.D_Amt : 0 }}</td>\r\n                <td class=\"cell-align\">{{ report.JSTC_Adv? report.JSTC_Adv : 0 | number : '1.2-2'  }}</td>\r\n                <td class=\"cell-align\">{{ report.Party_Adv? report.Party_Adv : 0 | number : '1.2-2'}}</td>\r\n                <td class=\"cell-align\">{{ 0 }}</td>\r\n                <td class=\"cell-align\">{{ 0 }}</td>\r\n                <td class=\"cell-align\">{{ report.Profit ? report.Profit : 0 | number : '1.2-2' }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table class=\"table mytable tableFixHead\" *ngIf=\"active_report == 'month'\">\r\n            <thead>\r\n              <tr>\r\n                <th>Month</th>\r\n                <th class=\"cell-align\">Dispatch</th>\r\n                <th class=\"cell-align\">Tons</th>\r\n                <th class=\"cell-align\">OT</th>\r\n                <th class=\"cell-align\">AT</th>\r\n                <th class=\"cell-align\">CTons</th>\r\n                <th class=\"cell-align\">ATons</th>\r\n                <th class=\"cell-align\">C.Ratio</th>\r\n                <th class=\"cell-align\">ARAtio</th>\r\n                <th class=\"cell-align\">O.Comm</th>\r\n                <th class=\"cell-align\">A.Comm</th>\r\n                <th class=\"cell-align\">Net Profit</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let report of report_data_monthly\">\r\n                <td>{{ report.month}}</td>\r\n                <td class=\"cell-align\">{{ report.trips}}</td>\r\n                <td class=\"cell-align\">{{ report.tons.toFixed(2)}}</td>\r\n                <td class=\"cell-align\">{{ report.OT}}</td>\r\n                <td class=\"cell-align\">{{ report.AT }}</td>\r\n                <td class=\"cell-align\">{{ report.CTons.toFixed(2)}}</td>\r\n                <td class=\"cell-align\">{{ report.ATons.toFixed(2) }}</td>\r\n                <td class=\"cell-align\">{{ report.o_ratio.toFixed(2)}}%</td>\r\n                <td class=\"cell-align\">{{ report.a_ratio | number : '1.2-2' }}%</td>\r\n                <td class=\"cell-align\">{{ report.Co_profit.toFixed(2) }}</td>\r\n                <td class=\"cell-align\">{{ report.A_profit.toFixed(2) }}</td>\r\n                <td class=\"cell-align\">{{ report.net_profit.toFixed(2) }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/layout/reports/components/dispatch-summary-site-wise/dispatch-summary-site-wise.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/dispatch-summary-site-wise/dispatch-summary-site-wise.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cell-align {\n  text-align: right; }\n\n.truck-selection {\n  cursor: pointer;\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydHMvY29tcG9uZW50cy9kaXNwYXRjaC1zdW1tYXJ5LXNpdGUtd2lzZS9GOlxcdGVzdGluZ19kZWxldGVfZm9sZGVyXFxUUlVDS19ERU1PX29sZEdhbmVzaFxcZnJvbnRlbmRcXHRkX2Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHJlcG9ydHNcXGNvbXBvbmVudHNcXGRpc3BhdGNoLXN1bW1hcnktc2l0ZS13aXNlXFxkaXNwYXRjaC1zdW1tYXJ5LXNpdGUtd2lzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWU7RUFDZiwwQkFDRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3JlcG9ydHMvY29tcG9uZW50cy9kaXNwYXRjaC1zdW1tYXJ5LXNpdGUtd2lzZS9kaXNwYXRjaC1zdW1tYXJ5LXNpdGUtd2lzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5teXRhYmxlIHtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBvdmVyZmxvdy14OiBhdXRvO1xyXG4vLyAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbi8vIH1cclxuXHJcblxyXG4uY2VsbC1hbGlnbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50cnVjay1zZWxlY3Rpb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZVxyXG59XHJcblxyXG4vLyB0YWJsZSB7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuXHJcbi8vIHRoZWFkLCB0Ym9keSwgdHIsIHRkLCB0aCB7IGRpc3BsYXk6IGJsb2NrOyB9XHJcblxyXG4vLyB0cjphZnRlciB7XHJcbi8vICAgY29udGVudDogJyAnO1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuLy8gICBjbGVhcjogYm90aDtcclxuLy8gfVxyXG5cclxuLy8gdGhlYWQgdGgge1xyXG4vLyAgIGhlaWdodDogMzBweDtcclxuXHJcbi8vICAgLyp0ZXh0LWFsaWduOiBsZWZ0OyovXHJcbi8vIH1cclxuXHJcbi8vIHRib2R5IHtcclxuLy8gICBoZWlnaHQ6IDEyMHB4O1xyXG4vLyAgIG92ZXJmbG93LXk6IGF1dG87XHJcbi8vIH1cclxuXHJcbi8vIHRoZWFkIHtcclxuLy8gICAvKiBmYWxsYmFjayAqL1xyXG4vLyB9XHJcblxyXG5cclxuLy8gdGJvZHkgdGQsIHRoZWFkIHRoIHtcclxuLy8gICB3aWR0aDogMTkuMiU7XHJcbi8vICAgZmxvYXQ6IGxlZnQ7XHJcbi8vIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/reports/components/dispatch-summary-site-wise/dispatch-summary-site-wise.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/dispatch-summary-site-wise/dispatch-summary-site-wise.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: DispatchSummarySiteWiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchSummarySiteWiseComponent", function() { return DispatchSummarySiteWiseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DispatchSummarySiteWiseComponent = /** @class */ (function () {
    function DispatchSummarySiteWiseComponent(route, api, reportService, formBuilder, excelService) {
        this.route = route;
        this.api = api;
        this.reportService = reportService;
        this.formBuilder = formBuilder;
        this.excelService = excelService;
        this.filters = { site: '', start_date: '', end_date: '' };
        this.mFilters = { site: '', year: '' };
        this.report_data = [];
        this.report_data_monthly = [];
        this.active_report = 'date';
        this.startDt = '';
        this.endDt = '';
    }
    DispatchSummarySiteWiseComponent.prototype.ngOnInit = function () {
        // console.log(this.route.snapshot.paramMap.get('site'));
        // console.log(this.route.snapshot.paramMap.get('start_date'));
        // console.log(this.route.snapshot.paramMap.get('end_date'));
        // this.summary = this.route.snapshot.paramMap.get('site');
        //  this.summary = JSON.parse(this.route.snapshot.paramMap.get('site'));
        //  console.log(this.summary);
        this.sitename = this.route.snapshot.paramMap.get('site');
        this.startDt = this.route.snapshot.paramMap.get('start_date');
        this.endDt = this.route.snapshot.paramMap.get('end_date');
        // this.filters.site = this.route.snapshot.paramMap.get('site');
        // this.filters.start_date = this.startDt ;
        // this.filters.site = this.endDt;
        // this.form = new FormGroup({
        //   filters: new FormControl('filters'),
        //   start_date: new FormControl('start_date'),
        //   end_date: new FormControl('end_date'),
        // });
        this.form = this.formBuilder.group({
            'filters': ['date'],
        });
        // if (this.form.get('start_date') != null) {
        //   this.form.get('start_date').setValue(this.startDt);
        // }
        // if (this.form.get('end_date') != null) {
        //   this.form.get('end_date').setValue(this.endDt);
        // }
        this.fetchhData();
        this.fetchMonthWiseData();
    };
    DispatchSummarySiteWiseComponent.prototype.onReportParameterChange = function (val) {
        console.log(val);
        this.active_report = val;
    };
    DispatchSummarySiteWiseComponent.prototype.fetchhData = function () {
        /// dispatch_summary_site_wise
        var _this = this;
        this.filters.site = this.route.snapshot.paramMap.get('site');
        this.filters.start_date = this.route.snapshot.paramMap.get('start_date');
        this.filters.end_date = this.route.snapshot.paramMap.get('end_date');
        // console.log(this.filters);
        this.reportService.getDispatchSummarySiteWise(this.filters).subscribe(function (res) {
            console.log('dailyreport');
            console.log(res);
            _this.report_data = res;
        }, function (err) {
        });
    };
    DispatchSummarySiteWiseComponent.prototype.fetchMonthWiseData = function () {
        var _this = this;
        this.mFilters.site = this.route.snapshot.paramMap.get('site');
        this.mFilters.year = '2020';
        // console.log('monthly report filter');
        // console.log(this.mFilters);
        this.reportService.getDispatchSummarySiteWiseMonthly(this.mFilters).subscribe(function (res) {
            // console.log('monthly report');
            // console.log(res);
            _this.report_data_monthly = res;
        }, function (err) {
        });
    };
    DispatchSummarySiteWiseComponent.prototype.ExportAsExcel = function () {
        if (this.active_report === 'date') {
            this.excelService.exportAsExcelFile(this.report_data, this.sitename + '_dispatch_summary');
        }
        else {
            this.excelService.exportAsExcelFile(this.report_data_monthly, this.sitename + '_dispatch_summary');
        }
    };
    DispatchSummarySiteWiseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dispatch-summary-site-wise',
            template: __webpack_require__(/*! ./dispatch-summary-site-wise.component.html */ "./src/app/layout/reports/components/dispatch-summary-site-wise/dispatch-summary-site-wise.component.html"),
            styles: [__webpack_require__(/*! ./dispatch-summary-site-wise.component.scss */ "./src/app/layout/reports/components/dispatch-summary-site-wise/dispatch-summary-site-wise.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"]])
    ], DispatchSummarySiteWiseComponent);
    return DispatchSummarySiteWiseComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/components/dispatch-summary/dispatch-summary.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/reports/components/dispatch-summary/dispatch-summary.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\"  *ngIf=\"activeTab == 'main_report'\">\r\n  <div class=\"card-header\">\r\n    <strong>Dispatch Summary</strong>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <form [formGroup]=\"filterForm\">\r\n      <div class=\" form-group row\">\r\n\r\n        <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Start Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp\"\r\n                  formControlName=\"start_date\"\r\n                  ngbDatepicker\r\n                  #d=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>End Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp2\"\r\n                  formControlName=\"end_date\"\r\n                  ngbDatepicker\r\n                  #d1=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <button type=\"submit\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-success\" (click)=\"fetchReport()\">\r\n      <i class=\"fa fa-get-pocket\"></i> Fetch</button>\r\n    <button type=\"reset\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-warning\" (click)=\"resetFilters()\">\r\n      <i class=\"fa fa-refresh\"></i> Refresh</button>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"animated fadeIn\">\r\n  <div class=\"row\" *ngIf=\"activeTab == 'main_report'\">\r\n    <div class=\"col-lg\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Prepared By Administrator\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <ul class=\"pagination\">\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">Prev</a>\r\n            </li>\r\n            <li class=\"page-item active\">\r\n              <a class=\"page-link\" href=\"#\">1</a>\r\n            </li>\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">Next</a>\r\n            </li>\r\n          </ul>\r\n\r\n          <table class=\"table tableFixHead mytable\">\r\n            <thead>\r\n              <tr>\r\n                  <th>Site</th>\r\n                  <th class=\"cell-align\">Dispatch</th>\r\n                  <th class=\"cell-align\">Tons</th>\r\n                  <th class=\"cell-align\">O. Trips</th>\r\n                  <th class=\"cell-align\">A. Trips</th>\r\n                  <th class=\"cell-align\">O. Tons</th>\r\n                  <th class=\"cell-align\">A. Ton</th>\r\n                  <th class=\"cell-align\">O.Ratio</th>\r\n                  <th class=\"cell-align\">A.Ratio</th>\r\n                  <th class=\"cell-align\">O.Comm</th>\r\n                  <th class=\"cell-align\">A.Comm</th>\r\n                  <th class=\"cell-align\">Net Profit</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let summary of dispatch_summary_data?.result\">\r\n                <td (click)=\"onSiteSelect(summary)\" class=\"truck-selection\"><i class=\"fa fa-industry\" aria-hidden=\"true\"></i> {{ summary._id ? summary._id : '--' }}</td>\r\n                <td class=\"cell-align\">{{ summary.trip ? summary.trip : '--'}}</td>\r\n                <td class=\"cell-align\">{{ (summary.ton ? summary.ton : 0) | number: '1.2-2'}}</td>\r\n                <td class=\"cell-align\">{{ summary.Co_Trips ? summary.Co_Trips : '--'}}</td>\r\n                <td class=\"cell-align\">{{ summary.A_Trips ? summary.A_Trips : '--'}}</td>\r\n                <td class=\"cell-align\">{{ (summary.Co_Tons ? summary.Co_Tons : 0) | number: '1.2-2'}}</td>\r\n                <td class=\"cell-align\">{{ (summary.A_Tons ? summary.A_Tons : 0) | number: '1.2-2'}}</td>\r\n                <td class=\"cell-align\">{{ (summary.o_ratio ? summary.o_ratio : 0) | number: '1.2-2' }}%</td>\r\n                <td class=\"cell-align\">{{ (summary.A_ratio ? summary.A_ratio : 0) | number: '1.2-2' }}%</td>\r\n                <td class=\"cell-align\">{{ (summary.Co_profit ? summary.Co_profit : 0) | number: '1.2-2'}}</td>\r\n                <td class=\"cell-align\">{{ (summary.A_profit ? summary.A_profit : 0) | number: '1.2-2' }}</td>\r\n                <td class=\"cell-align\">{{ (summary.net_profit ? summary.net_profit : 0) | number: '1.2-2' }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <ul class=\"pagination\">\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">Prev</a>\r\n            </li>\r\n            <li class=\"page-item active\">\r\n              <a class=\"page-link\" href=\"#\">1</a>\r\n            </li>\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">Next</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\" *ngIf=\"activeTab == 'secondary_report'\">\r\n        <p><a class=\"btn btn-info\" href=\"javascript:void(0)\" (click)=\"activeTab = 'main_report'\"><i class=\"fa fa-chevron-circle-left\" aria-hidden=\"true\"></i> Back</a></p>\r\n          <h4>Site Wise Dispatch Summary <br><i class=\"fa fa-truck\"></i> Truck: {{selected_site_name}}</h4>\r\n        <table class=\"table table-hover table-striped table-bordered table-condensed\">\r\n          <thead>\r\n            <tr>\r\n              <th>Month</th>\r\n              <th>Trips</th>\r\n              <th>Target</th>\r\n              <th>Achieved</th>\r\n              <th>Income</th>\r\n              <th>Expenses</th>\r\n              <th>Profit</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngIf=\"loading\">\r\n              <td colspan=\"10\">\r\n                <div class=\"showbox\">\r\n                  <div class=\"loader\">\r\n                    <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                      <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                    </svg>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/layout/reports/components/dispatch-summary/dispatch-summary.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/reports/components/dispatch-summary/dispatch-summary.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cell-align {\n  text-align: right; }\n\n.truck-selection {\n  cursor: pointer;\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydHMvY29tcG9uZW50cy9kaXNwYXRjaC1zdW1tYXJ5L0Y6XFx0ZXN0aW5nX2RlbGV0ZV9mb2xkZXJcXFRSVUNLX0RFTU9fb2xkR2FuZXNoXFxmcm9udGVuZFxcdGRfZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccmVwb3J0c1xcY29tcG9uZW50c1xcZGlzcGF0Y2gtc3VtbWFyeVxcZGlzcGF0Y2gtc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWU7RUFDZiwwQkFDRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3JlcG9ydHMvY29tcG9uZW50cy9kaXNwYXRjaC1zdW1tYXJ5L2Rpc3BhdGNoLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0YWJsZSB7XHJcbi8vICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgb3ZlcmZsb3cteDogYXV0bztcclxuLy8gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4vLyB9XHJcblxyXG4uY2VsbC1hbGlnbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50cnVjay1zZWxlY3Rpb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/reports/components/dispatch-summary/dispatch-summary.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/reports/components/dispatch-summary/dispatch-summary.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DispatchSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchSummaryComponent", function() { return DispatchSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DispatchSummaryComponent = /** @class */ (function () {
    function DispatchSummaryComponent(api, formBuilder, toastr, reportService, myRouter) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.reportService = reportService;
        this.myRouter = myRouter;
        this.activeTab = 'main_report';
        this.loading = false;
        this.filters = { start_date: '', end_date: '', page: 0 };
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.dispatch_summary_data = { result: [] };
        this.filterForm = this.formBuilder.group({
            start_date: [0],
            end_date: [0]
        });
    }
    DispatchSummaryComponent.prototype.ngOnInit = function () {
        this.fetchReport();
    };
    DispatchSummaryComponent.prototype.onSiteSelect = function (t) {
        // console.log(t);
        var startDt = '';
        var endDt = '';
        if (this.filterForm.controls['start_date'].value) {
            startDt = this.filterForm.controls['start_date'].value.year + '-' +
                this.filterForm.controls['start_date'].value.month + '-' +
                this.filterForm.controls['start_date'].value.day;
        }
        else {
            startDt = this.getTodaysDate();
            // this.filterForm.controls['start_date'].setValue(startDt);
        }
        if (this.filterForm.controls['end_date'].value) {
            endDt = this.filterForm.controls['end_date'].value.year + '-' +
                this.filterForm.controls['end_date'].value.month + '-' +
                (this.filterForm.controls['end_date'].value.day);
        }
        else {
            endDt = this.getTodaysDate();
            // this.filterForm.controls['end_date'].setValue(endDt);
        }
        this.myRouter.navigate(['/reports/dispatch-summary-site-wise', { site: t._id, start_date: startDt, end_date: endDt,
                year: this.filterForm.controls['start_date'].value.year }]);
    };
    DispatchSummaryComponent.prototype.resetFilters = function () {
    };
    DispatchSummaryComponent.prototype.getTodaysDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    };
    DispatchSummaryComponent.prototype.getTommrowsDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 1);
    };
    DispatchSummaryComponent.prototype.fetchReport = function () {
        var _this = this;
        var startDt = '';
        var endDt = '';
        if (this.filterForm.controls['start_date'].value) {
            startDt = this.filterForm.controls['start_date'].value.year + '-' +
                this.filterForm.controls['start_date'].value.month + '-' +
                this.filterForm.controls['start_date'].value.day;
        }
        else {
            startDt = this.getTodaysDate();
            // this.filterForm.controls['start_date'].setValue(startDt);
        }
        if (this.filterForm.controls['end_date'].value) {
            endDt = this.filterForm.controls['end_date'].value.year + '-' +
                this.filterForm.controls['end_date'].value.month + '-' +
                (this.filterForm.controls['end_date'].value.day);
        }
        else {
            // endDt = this.getTommrowsDate();
            endDt = this.getTodaysDate();
            // this.filterForm.controls['end_date'].setValue(endDt);
        }
        console.log('startDt >>>>>>>>>.', startDt);
        console.log('endDt >>>>>>>>>>>', endDt);
        this.loading = true;
        this.filters.page = this.pagination.currenPage;
        this.filters.start_date = startDt;
        this.filters.end_date = endDt;
        // console.log('filters');
        // console.log(this.filters);
        this.reportService.getDispatchSummary(this.filters).subscribe(function (res) {
            _this.loading = false;
            _this.dispatch_summary_data = res;
            console.log(res);
        }, function (err) {
            _this.loading = false;
        });
        // console.log('start date ');
        // console.log(this.filterForm.controls['start_date'].value);
        // console.log('end date ');
        // console.log(this.filterForm.controls['end_date'].value);
        // this.filterForm.controls['start_date'].value
    };
    DispatchSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dispatch-summary',
            template: __webpack_require__(/*! ./dispatch-summary.component.html */ "./src/app/layout/reports/components/dispatch-summary/dispatch-summary.component.html"),
            styles: [__webpack_require__(/*! ./dispatch-summary.component.scss */ "./src/app/layout/reports/components/dispatch-summary/dispatch-summary.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], DispatchSummaryComponent);
    return DispatchSummaryComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/components/items-ledger-report/items-ledger-report.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/items-ledger-report/items-ledger-report.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n      <form [formGroup]=\"filterForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4><i class=\"fa fa-book\"></i> Items Ledger Report</h4>\r\n            <p class=\"text-muted\">Note: Items selection is mandatory in order to get the data.</p>\r\n            <hr />\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n              <label>Start Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp\"\r\n                  formControlName=\"start_date\"\r\n                  ngbDatepicker\r\n                  #d=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n              <label>End Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp2\"\r\n                  formControlName=\"end_date\"\r\n                  ngbDatepicker\r\n                  #d1=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Select Sites</label>\r\n              <select formControlName=\"site_name\" class=\"form-control\">\r\n                  <!-- <option value=\"\">All</option> -->\r\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                  {{ s.branch_name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <label class=\"required\">Item Name</label>\r\n            <ng-select [items]=\"items_option\" placeholder=\"Type and search items\" bindLabel=\"itemname\" bindValue=\"itemname\"\r\n              formControlName=\"item_name\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"col-md-4 wrapper-right\">\r\n            <button (click)=\"fetchReport()\" class=\"btn btn-primary\" >\r\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\r\n            </button>&nbsp;\r\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <hr />\r\n\r\n      <!-- <ngb-pagination\r\n          [(page)]=\"pagination.currenPage\"\r\n          [pageSize]=\"pagination.pageSize\"\r\n          [collectionSize]=\"pagination.total\"\r\n          [maxSize]=\"pagination.maxSize\"\r\n          (pageChange)=\"fetchReport()\"\r\n        ></ngb-pagination>\r\n        <p><strong>Total:</strong> {{ pagination.total }}<br /><strong>Records per page:</strong> {{ pagination.pageSize }}</p> -->\r\n\r\n      <p><b>{{filterForm.controls['item_name'].value}}</b><br><b>Opening Balance:</b> {{ items_data.opening_balance.opening_balance | number : '1.2-2' }} {{ items_data.opening_balance.type }}</p>\r\n      <table class=\"table table-hover table-striped table-bordered table-condensed\">\r\n        <thead>\r\n          <tr>\r\n            <th>Date</th>\r\n            <th>Particular</th>\r\n            <th>Dr.</th>\r\n            <th>Cr.</th>\r\n            <th>Closing</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"loading\">\r\n            <td colspan=\"5\">\r\n              <div class=\"showbox\">\r\n                <div class=\"loader\">\r\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let report of items_data?.results\">\r\n            <td>{{ report.date ? report.date : '--' }}</td>\r\n            <td>{{ report.particular ? report.particular : 'N/A' }}</td>\r\n            <td class=\"cell-align\">{{ (report.dr ? report.dr : 0 ) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.cr ? report.cr : 0)  | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.closing ? report.closing : 0)  | number : '1.2-2' }}</td>\r\n          </tr>\r\n          <tr *ngIf=\"loaded && items_data.results.length === 0\">\r\n            <td align=\"center\" colspan=\"6\">No data available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <p><b>Closing Balance:</b> {{ items_data.closing_balance | number : '1.2-2' }} {{ items_data.account_type }}</p>\r\n      <!-- <ngb-pagination\r\n          [(page)]=\"pagination.currenPage\"\r\n          [pageSize]=\"pagination.pageSize\"\r\n          [collectionSize]=\"pagination.total\"\r\n          [maxSize]=\"pagination.maxSize\"\r\n          (pageChange)=\"fetchReport()\"\r\n        ></ngb-pagination> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/reports/components/items-ledger-report/items-ledger-report.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/items-ledger-report/items-ledger-report.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZXBvcnRzL2NvbXBvbmVudHMvaXRlbXMtbGVkZ2VyLXJlcG9ydC9pdGVtcy1sZWRnZXItcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/reports/components/items-ledger-report/items-ledger-report.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/items-ledger-report/items-ledger-report.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ItemsLedgerReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsLedgerReportComponent", function() { return ItemsLedgerReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
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







var ItemsLedgerReportComponent = /** @class */ (function () {
    function ItemsLedgerReportComponent(api, meta, formBuilder, reportService, toastr) {
        this.api = api;
        this.meta = meta;
        this.formBuilder = formBuilder;
        this.reportService = reportService;
        this.toastr = toastr;
        this.loading = false;
        this.loaded = true;
        this.filters = {
            site_name: '',
            item_name: '',
            start_date: '',
            end_date: '',
            page: 0
        };
        this.items_data = { results: [], closing_balance: 0, opening_balance: { opening_balance: 0, type: '' }, account_type: '' };
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        this.filterForm = this.formBuilder.group({
            site_name: [''],
            item_name: [''],
            start_date: [''],
            end_date: ['']
        });
    }
    ItemsLedgerReportComponent.prototype.ngOnInit = function () {
        this.getOptions();
        //   this.fetchReport();
    };
    ItemsLedgerReportComponent.prototype.getOptions = function () {
        this.getSites();
        this.getItems();
    };
    ItemsLedgerReportComponent.prototype.getItems = function () {
        var _this = this;
        this.meta.getItemsList().subscribe(function (trackInfo) {
            _this.items_option = trackInfo['result'];
            console.log('ItemsList >>>>>', _this.items_option);
        });
    };
    ItemsLedgerReportComponent.prototype.getSites = function () {
        var _this = this;
        this.meta.getSites().subscribe(function (res) {
            _this.sites = res;
            if (_this.usertype === 'ADMIN') {
                _this.filterForm.controls['site_name'].setValue('');
            }
            else {
                // this.filterForm.controls['site_name'].setValue('');
                _this.filterForm.controls['site_name'].setValue(_this.site_name);
            }
        }, function (err) {
        });
    };
    ItemsLedgerReportComponent.prototype.resetFilters = function () {
        this.filterForm.get('item_name').setValue('');
        this.filterForm.get('start_date').setValue('');
        this.filterForm.get('end_date').setValue('');
        this.filters = {
            site_name: '',
            item_name: '',
            start_date: '',
            end_date: '',
            page: 0
        };
        //   this.fetchReport();
    };
    ItemsLedgerReportComponent.prototype.getYesterdaysDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 1);
    };
    ItemsLedgerReportComponent.prototype.getTodaysDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    };
    ItemsLedgerReportComponent.prototype.getTommrowsDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 1);
    };
    ItemsLedgerReportComponent.prototype.fetchReport = function () {
        var _this = this;
        var startDt = '';
        var endDt = '';
        if (this.filterForm.controls['start_date'].value) {
            startDt = this.filterForm.controls['start_date'].value.year + '-' +
                this.filterForm.controls['start_date'].value.month + '-' +
                this.filterForm.controls['start_date'].value.day;
        }
        else {
            startDt = '';
        }
        if (this.filterForm.controls['end_date'].value) {
            endDt = this.filterForm.controls['end_date'].value.year + '-' +
                this.filterForm.controls['end_date'].value.month + '-' +
                (this.filterForm.controls['end_date'].value.day);
        }
        else {
            endDt = '';
        }
        console.log('startDt >>>>>>>>>.', startDt);
        console.log('endDt >>>>>>>>>>>', endDt);
        this.filters.page = this.pagination.currenPage;
        if (this.filterForm.controls['site_name'].value) {
            this.filters.site_name = this.filterForm.controls['site_name'].value;
        }
        else {
            this.filters.site_name = '';
        }
        if (this.filterForm.controls['item_name'].value) {
            this.filters.item_name = this.filterForm.controls['item_name'].value;
        }
        else {
            this.filters.item_name = '';
        }
        this.filters.start_date = startDt;
        this.filters.end_date = endDt;
        this.loading = true;
        this.loaded = false;
        // this.items_data = [];
        console.log('Filters', this.filters);
        this.reportService.getItemReports(this.filters).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            console.log(_this.filters);
            console.log(res);
            _this.items_data = res;
            // this.pagination.total = res.total;
        }, function (err) {
            _this.loading = false;
            _this.loaded = true;
        });
    };
    ItemsLedgerReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items-ledger-report',
            template: __webpack_require__(/*! ./items-ledger-report.component.html */ "./src/app/layout/reports/components/items-ledger-report/items-ledger-report.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./items-ledger-report.component.scss */ "./src/app/layout/reports/components/items-ledger-report/items-ledger-report.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], ItemsLedgerReportComponent);
    return ItemsLedgerReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/components/mileage-report/mileage-report.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/reports/components/mileage-report/mileage-report.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n      <form [formGroup]=\"filterForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4><i class=\"fa fa-book\"></i> Mileage Report</h4>\r\n            <hr />\r\n          </div>\r\n          \r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label class=\"required\">Truck No</label>\r\n              <ng-select [items]=\"truck_option\" placeholder=\"Type and search Truck No\" bindLabel=\"truckno\" bindValue=\"truckno\"\r\n                formControlName=\"truck_no\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 wrapper-right\">\r\n            <button (click)=\"fetchReport()\" class=\"btn btn-primary\">\r\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\r\n            </button>&nbsp;\r\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <hr />\r\n\r\n        <p><b></b><br><b></b></p>\r\n      <!-- <table class=\"table table-hover table-striped table-bordered table-condensed\"> -->\r\n        <table class=\"table mytable tableFixHead\">\r\n        <thead>\r\n          <tr>\r\n            <th>SNo</th>\r\n            <th>TyreNo</th>\r\n            <th>Type</th>\r\n            <th>Company Name</th>\r\n            <th>Brand</th>\r\n            <th>Tyre Position</th>\r\n            <th>NSD</th>\r\n            <th>RTD</th>\r\n            <th>Used NSD</th>\r\n            <th>Distance covered</th>\r\n            <th>Per mm Wear</th>\r\n            <th>Used %</th>\r\n            <th>Cost Per Km</th>\r\n            <th>Estimate Projection</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"loading\">\r\n            <td colspan=\"5\">\r\n              <div class=\"showbox\">\r\n                <div class=\"loader\">\r\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr *ngFor=\"let m of monthlyData\">\r\n            <td>{{ m.pno ? m.pno : '--' }}</td>\r\n            <td>{{ m.tyreno ? m.tyreno : '--' }}</td>\r\n            <td>{{ m.tyretype ? m.tyretype : '--' }}</td>\r\n            <td>{{ m.coname ? m.coname : '--' }}</td>\r\n            <td>{{ m.brand ? m.brand : '--' }}</td>\r\n            <td>{{ m.tp ? m.tp : '--' }}</td>\r\n            <td>{{ m.nsd ? m.nsd : '--' }}</td>\r\n            <td>{{ m.rtd ? m.rtd : '--' }}</td>\r\n            <td>{{ m.usednsd ? m.usednsd : '--' }}</td>\r\n            <td>{{ m.dc ? m.dc : '--' }}</td>\r\n            <td>{{ m.pmmw ? m.pmmw : '--' }}</td>\r\n            <td>{{ m.usedperc ? m.usedperc : '--' }}</td>\r\n            <td>{{ m.cpkm ? m.cpkm : '--' }}</td>\r\n            <td>{{ m.ep ? m.ep : '--' }}</td>\r\n          </tr>\r\n          <tr *ngIf=\" loaded && monthlyData.length === 0\">\r\n            <td align=\"center\" colspan=\"4\">No data available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/reports/components/mileage-report/mileage-report.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/reports/components/mileage-report/mileage-report.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZXBvcnRzL2NvbXBvbmVudHMvbWlsZWFnZS1yZXBvcnQvbWlsZWFnZS1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/reports/components/mileage-report/mileage-report.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/reports/components/mileage-report/mileage-report.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MileageReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MileageReportComponent", function() { return MileageReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/inventory.service */ "./src/app/shared/services/inventory.service.ts");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MileageReportComponent = /** @class */ (function () {
    function MileageReportComponent(formBuilder, toastr, is, meta) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.is = is;
        this.meta = meta;
        this.monthlyData = [];
        this.loading = false;
        this.filters = {
            truck_no: '',
            page: 0
        };
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.loaded = true;
        this.filterForm = this.formBuilder.group({
            truck_no: [''],
        });
    }
    MileageReportComponent.prototype.ngOnInit = function () {
        this.getOptions();
    };
    MileageReportComponent.prototype.getOptions = function () {
        var _this = this;
        this.meta.getCompanyTruckList().subscribe(function (siteInfo) {
            _this.truck_option = siteInfo['result'];
            console.log('>>>>Company Truck List', siteInfo['result']);
        });
    };
    MileageReportComponent.prototype.resetFilters = function () {
        this.filterForm.get('start_date').setValue('');
        this.filterForm.get('end_date').setValue('');
        this.filters = {
            truck_no: '',
            page: 0
        };
        this.fetchReport();
    };
    MileageReportComponent.prototype.fetchReport = function () {
        var _this = this;
        if (this.filterForm.controls['truck_no'].value) {
            this.filters.truck_no = this.filterForm.controls['truck_no'].value;
        }
        else {
            this.filters.truck_no = '';
        }
        this.filters.page = this.pagination.currenPage;
        this.loading = true;
        this.loaded = false;
        this.monthlyData = [];
        this.is.getMilageReport(this.filters).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            //   res.result.forEach(element => {
            //       this.totalDr = this.totalDr + element.dr;
            //       this.totalCr = this.totalCr + element.cr;
            //   });
            _this.monthlyData = res.result;
            // this.pagination.total = res.total;
        }, function (err) {
            _this.loaded = true;
            _this.loading = false;
        });
    };
    MileageReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mileage-report',
            template: __webpack_require__(/*! ./mileage-report.component.html */ "./src/app/layout/reports/components/mileage-report/mileage-report.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./mileage-report.component.scss */ "./src/app/layout/reports/components/mileage-report/mileage-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_shared_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__["MetaService"]])
    ], MileageReportComponent);
    return MileageReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/components/order-ledger-report/order-ledger-report.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/order-ledger-report/order-ledger-report.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n      <form [formGroup]=\"filterForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4><i class=\"fa fa-book\"></i> Orders Ledger Report</h4>\r\n            <p class=\"text-muted\">Note: Items selection is mandatory in order to get the data.</p>\r\n            <hr />\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n              <label>Start Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp\"\r\n                  formControlName=\"start_date\"\r\n                  ngbDatepicker\r\n                  #d=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n              <label>End Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp2\"\r\n                  formControlName=\"end_date\"\r\n                  ngbDatepicker\r\n                  #d1=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Select Sites</label>\r\n              <select formControlName=\"site_name\" class=\"form-control\">\r\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                  {{ s.branch_name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <label class=\"required\">Item Name</label>\r\n            <ng-select [items]=\"items_option\" placeholder=\"Type and search items\" bindLabel=\"itemname\" bindValue=\"itemname\"\r\n              formControlName=\"item_name\">\r\n            </ng-select>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-md-4 wrapper-right\">\r\n            <button (click)=\"fetchReport()\" class=\"btn btn-primary\" >\r\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\r\n            </button>&nbsp;\r\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <hr />\r\n        \r\n      <p><b>{{filterForm.controls['item_name'].value}}</b><br><b>Opening Balance:</b> {{ items_data.opening_balance.opening_balance | number : '1.2-2' }} {{ items_data.opening_balance.type }}</p>\r\n      <table class=\"table table-hover table-striped table-bordered table-condensed\">\r\n        <thead>\r\n          <tr>\r\n            <th>Date</th>\r\n            <th>Particular</th>\r\n            <th>Dr.</th>\r\n            <th>Cr.</th>\r\n            <th>Closing</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"loading\">\r\n            <td colspan=\"5\">\r\n              <div class=\"showbox\">\r\n                <div class=\"loader\">\r\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let report of items_data?.results\">\r\n            <td>{{ report.date ? report.date : '--' }}</td>\r\n            <td>{{ report.particular ? report.particular : 'N/A' }}</td>\r\n            <td class=\"cell-align\">{{ (report.dr ? report.dr : 0 ) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.cr ? report.cr : 0)  | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.closing ? report.closing : 0)  | number : '1.2-2' }}</td>\r\n          </tr>\r\n          <tr *ngIf=\"loaded && items_data.results.length === 0\">\r\n            <td align=\"center\" colspan=\"6\">No data available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <p><b>Closing Balance:</b> {{ items_data.closing_balance | number : '1.2-2' }} {{ items_data.account_type }}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/reports/components/order-ledger-report/order-ledger-report.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/order-ledger-report/order-ledger-report.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZXBvcnRzL2NvbXBvbmVudHMvb3JkZXItbGVkZ2VyLXJlcG9ydC9vcmRlci1sZWRnZXItcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/reports/components/order-ledger-report/order-ledger-report.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/order-ledger-report/order-ledger-report.component.ts ***!
  \************************************************************************************************/
/*! exports provided: OrderLedgerReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderLedgerReportComponent", function() { return OrderLedgerReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
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






var OrderLedgerReportComponent = /** @class */ (function () {
    function OrderLedgerReportComponent(api, meta, formBuilder, reportService, toastr) {
        this.api = api;
        this.meta = meta;
        this.formBuilder = formBuilder;
        this.reportService = reportService;
        this.toastr = toastr;
        this.loading = false;
        this.loaded = true;
        this.filters = {
            site_name: '',
            item_name: '',
            start_date: '',
            end_date: '',
            page: 0
        };
        this.items_data = { results: [], closing_balance: 0, opening_balance: { opening_balance: 0, type: '' }, account_type: '' };
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        this.filterForm = this.formBuilder.group({
            site_name: [''],
            item_name: [''],
            start_date: [''],
            end_date: ['']
        });
    }
    OrderLedgerReportComponent.prototype.ngOnInit = function () {
        this.getOptions();
        //   this.fetchReport();
    };
    OrderLedgerReportComponent.prototype.getOptions = function () {
        this.getSites();
        this.getItems();
    };
    OrderLedgerReportComponent.prototype.getItems = function () {
        var _this = this;
        this.meta.getScrapLedgerItemsList().subscribe(function (trackInfo) {
            _this.items_option = trackInfo['result'];
            console.log('ItemsList >>>>>', _this.items_option);
        });
    };
    OrderLedgerReportComponent.prototype.getSites = function () {
        var _this = this;
        this.meta.getSites().subscribe(function (res) {
            _this.sites = res;
            if (_this.usertype === 'ADMIN') {
                _this.filterForm.controls['site_name'].setValue('');
            }
            else {
                _this.filterForm.controls['site_name'].setValue(_this.site_name);
            }
        }, function (err) {
        });
    };
    OrderLedgerReportComponent.prototype.resetFilters = function () {
        this.filterForm.get('item_name').setValue('');
        this.filterForm.get('start_date').setValue('');
        this.filterForm.get('end_date').setValue('');
        this.filters = {
            site_name: '',
            item_name: '',
            start_date: '',
            end_date: '',
            page: 0
        };
        //   this.fetchReport();
    };
    OrderLedgerReportComponent.prototype.getYesterdaysDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 1);
    };
    OrderLedgerReportComponent.prototype.getTodaysDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    };
    OrderLedgerReportComponent.prototype.getTommrowsDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 1);
    };
    OrderLedgerReportComponent.prototype.fetchReport = function () {
        var _this = this;
        var startDt = '';
        var endDt = '';
        if (this.filterForm.controls['start_date'].value) {
            startDt = this.filterForm.controls['start_date'].value.year + '-' +
                this.filterForm.controls['start_date'].value.month + '-' +
                this.filterForm.controls['start_date'].value.day;
        }
        else {
            startDt = '';
        }
        if (this.filterForm.controls['end_date'].value) {
            endDt = this.filterForm.controls['end_date'].value.year + '-' +
                this.filterForm.controls['end_date'].value.month + '-' +
                (this.filterForm.controls['end_date'].value.day);
        }
        else {
            endDt = '';
        }
        console.log('startDt >>>>>>>>>.', startDt);
        console.log('endDt >>>>>>>>>>>', endDt);
        this.filters.page = this.pagination.currenPage;
        if (this.filterForm.controls['site_name'].value) {
            this.filters.site_name = this.filterForm.controls['site_name'].value;
        }
        else {
            this.filters.site_name = '';
        }
        if (this.filterForm.controls['item_name'].value) {
            this.filters.item_name = this.filterForm.controls['item_name'].value;
        }
        else {
            this.filters.item_name = '';
        }
        this.filters.start_date = startDt;
        this.filters.end_date = endDt;
        this.loading = true;
        this.loaded = false;
        // this.items_data = [];
        console.log('Filters', this.filters);
        this.reportService.getOrderReports(this.filters).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            console.log(_this.filters);
            console.log(res);
            _this.items_data = res;
            // this.pagination.total = res.total;
        }, function (err) {
            _this.loading = false;
            _this.loaded = true;
        });
    };
    OrderLedgerReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-ledger-report',
            template: __webpack_require__(/*! ./order-ledger-report.component.html */ "./src/app/layout/reports/components/order-ledger-report/order-ledger-report.component.html"),
            styles: [__webpack_require__(/*! ./order-ledger-report.component.scss */ "./src/app/layout/reports/components/order-ledger-report/order-ledger-report.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__["MetaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], OrderLedgerReportComponent);
    return OrderLedgerReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/components/own-fleet-report-admin/own-fleet-report-admin.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/own-fleet-report-admin/own-fleet-report-admin.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>\r\n      <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\">\r\n        <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> &nbsp;\r\n      </a>\r\n      <i class=\"fa fa-truck\"></i> Own Fleet Performance Report\r\n      <div class=\"pull-right\">\r\n        <i class=\"fa fa-industry\"></i> {{ sitename }}\r\n      </div>\r\n    </strong>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <form [formGroup]=\"filterForm\">\r\n      <div class=\" form-group row\">\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Start Date</label>\r\n            <div class=\"input-group datepicker-input\">\r\n              <input class=\"form-control\" placeholder=\"dd/mm/yyyy\" name=\"dp\" formControlName=\"start_date\" ngbDatepicker\r\n                #d=\"ngbDatepicker\" />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>End Date</label>\r\n            <div class=\"input-group datepicker-input\">\r\n              <input class=\"form-control\" placeholder=\"dd/mm/yyyy\" name=\"dp2\" formControlName=\"end_date\" ngbDatepicker\r\n                #d1=\"ngbDatepicker\" />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <button type=\"submit\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-success\" (click)=\"fetchReport()\">\r\n      <i class=\"fa fa-get-pocket\"></i> Fetch</button>\r\n    <button type=\"reset\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-warning\" (click)=\"resetFilters()\">\r\n      <i class=\"fa fa-refresh\"></i> Refresh</button>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-truck\"></i> Own Fleet Performance Report\r\n          <button style=\"margin-right: 10px\" class=\"btn btn-sm btn-success pull-right\" (click)=\"ExportAsExcel()\">\r\n            <i class=\"fa fa fa-file-excel-o\"></i> Save As EXCEL</button>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form [formGroup]=\"form\">\r\n\r\n            <div class=\"btn-group btn-group-toggle pull-right\" (change)=\"onReportParameterChange(form.value['filters'])\"\r\n              ngbRadioGroup name=\"radioBasic\" formControlName=\"filters\">\r\n\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"date\"> Date Wise\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                <input ngbButton type=\"radio\" value=\"month\"> Month Wise\r\n              </label>\r\n            </div>\r\n          </form>\r\n          <div class=\"clearfix\"></div>\r\n          <br>\r\n          <table id=\"table_one\" class=\"table mytable tableFixHead\" *ngIf=\"active_report == 'date'\">\r\n            <thead>\r\n              <tr>\r\n                <th>Date</th>\r\n                <th>D.I No.</th>\r\n                <th>Lr no.</th>\r\n                <th>From</th>\r\n                <th>Destination</th>\r\n                <th>Consignee Name</th>\r\n                <th class=\"cell-align\">Truck no</th>\r\n                <th class=\"cell-align\">KM</th>\r\n                <th class=\"cell-align\">Qty</th>\r\n                <th class=\"cell-align\">C.Rate</th>\r\n                <th class=\"cell-align\">C.Freight</th>\r\n                <th class=\"cell-align\">P.Rate</th>\r\n                <th class=\"cell-align\">P.Freight</th>\r\n                <th class=\"cell-align\">Comm</th>\r\n                <th class=\"cell-align\">GPS</th>\r\n                <th class=\"cell-align\">D.Qty</th>\r\n                <th class=\"cell-align\">D.Amt</th>\r\n                <th class=\"cell-align\">JST Adv</th>\r\n                <th class=\"cell-align\">Party Adv.</th>\r\n                <th class=\"cell-align\">Ex. Diesal</th>\r\n                <th class=\"cell-align\">Ex.Exp</th>\r\n                <th class=\"cell-align\">Profit</th>\r\n                <th class=\"cell-align\">Salary</th>\r\n                <th class=\"cell-align\">Extra Amt</th>\r\n                <th class=\"cell-align\">Tyre</th>\r\n                <th class=\"cell-align\">Doc</th>\r\n                <th class=\"cell-align\">Net Bal</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let report of report_data\">\r\n                <td>{{ report.lrdate | date: 'dd/MM/yyyy'}}</td>\r\n                <td class=\"cell-align\">{{ report.newgatepass ? report.newgatepass : '-' }}</td>\r\n                <td>{{ report.lrno}}</td>\r\n                <td>{{ report.from}}</td>\r\n                <td>{{ report.to}}</td>\r\n                <td>{{ report.consignne }}</td>\r\n                <td class=\"cell-align\">{{ report.truckno }}</td>\r\n                <td class=\"cell-align\">{{ report.km }}</td>\r\n                <td class=\"cell-align\">{{ report.cweight}}</td>\r\n                <td class=\"cell-align\">{{ report.newrate ? report.newrate : 0 | number : '1.2-2' }}</td>\r\n                <td class=\"cell-align\">{{ report.newamount ? report.newamount : 0 | number : '1.2-2' }}</td>\r\n                <td class=\"cell-align\">{{ report.rate ? report.rate : 0 | number : '1.2-2' }}</td>\r\n                <td class=\"cell-align\">{{ report.vamount ? report.vamount : 0 | number : '1.2-2'}}</td>\r\n                <td class=\"cell-align\">{{ report.newamount - report.vamount }}</td>\r\n                <td class=\"cell-align\">{{ 0 }}</td>\r\n                <td class=\"cell-align\">{{ report.dqty ? report.dqty : 0 | number : '1.2-2' }}</td>\r\n                <td class=\"cell-align\">{{ report.damount }}</td>\r\n                <td class=\"cell-align\">{{ report.totaltruckexpences? report.totaltruckexpences : 0 | number : '1.2-2'  }}</td>\r\n                <td class=\"cell-align\">{{ report.padvance ? report.padvance : 0}}</td>\r\n                <td class=\"cell-align\">{{ 0 }}</td>\r\n                <td class=\"cell-align\">{{ 0 }}</td>\r\n                <td class=\"cell-align\">{{ (report.vamount - report.damount - report.totaltruckexpences).toFixed(2) }}</td>\r\n                <td class=\"cell-align\">{{ 0 }}</td>\r\n                <td class=\"cell-align\">{{ 0 }}</td>\r\n                <td class=\"cell-align\">{{ 0 }}</td>\r\n                <td class=\"cell-align\">{{ 0 }}</td>\r\n                <td class=\"cell-align\">{{ (report.vamount - report.damount - report.totaltruckexpences).toFixed(2) }}\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n          <table class=\"table tableFixHead mytable\" *ngIf=\"active_report == 'month'\">\r\n            <thead>\r\n              <tr>\r\n                <th>Month</th>\r\n                <th>Trips</th>\r\n                <th class=\"cell-align\">Tons</th>\r\n                <th class=\"cell-align\">Jstc</th>\r\n                <th class=\"cell-align\">Other</th>\r\n                <th class=\"cell-align\">Party</th>\r\n                <th class=\"cell-align\">Dqty</th>\r\n                <th class=\"cell-align\">Damt</th>\r\n                <th class=\"cell-align\">Comm</th>\r\n\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let report of report_data_monthly\">\r\n                <td> {{ report.month }}</td>\r\n                <td class=\"cell-align\">{{ report.trips}}</td>\r\n                <td class=\"cell-align\">{{ report.tons.toFixed(2)}}</td>\r\n                <td class=\"cell-align\">{{ report.JSTC}}</td>\r\n                <td class=\"cell-align\">{{ report.other}}</td>\r\n                <td class=\"cell-align\">{{ report.party.toFixed(2)}}</td>\r\n                <td class=\"cell-align\">{{ report.dqty.toFixed(2)}}</td>\r\n                <td class=\"cell-align\">{{ report.damt.toFixed(2) }}</td>\r\n                <td class=\"cell-align\">{{ 0 }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/layout/reports/components/own-fleet-report-admin/own-fleet-report-admin.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/own-fleet-report-admin/own-fleet-report-admin.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mytable {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap; }\n\n.cell-align {\n  text-align: right; }\n\n.truck-selection {\n  cursor: pointer;\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydHMvY29tcG9uZW50cy9vd24tZmxlZXQtcmVwb3J0LWFkbWluL0Y6XFx0ZXN0aW5nX2RlbGV0ZV9mb2xkZXJcXFRSVUNLX0RFTU9fb2xkR2FuZXNoXFxmcm9udGVuZFxcdGRfZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccmVwb3J0c1xcY29tcG9uZW50c1xcb3duLWZsZWV0LXJlcG9ydC1hZG1pblxcb3duLWZsZWV0LXJlcG9ydC1hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZUFBZTtFQUNmLDBCQUNGLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcmVwb3J0cy9jb21wb25lbnRzL293bi1mbGVldC1yZXBvcnQtYWRtaW4vb3duLWZsZWV0LXJlcG9ydC1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teXRhYmxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcblxyXG4uY2VsbC1hbGlnbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50cnVjay1zZWxlY3Rpb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/reports/components/own-fleet-report-admin/own-fleet-report-admin.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/own-fleet-report-admin/own-fleet-report-admin.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: OwnFleetReportAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnFleetReportAdminComponent", function() { return OwnFleetReportAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OwnFleetReportAdminComponent = /** @class */ (function () {
    function OwnFleetReportAdminComponent(route, api, reportService, formBuilder, excelService) {
        this.route = route;
        this.api = api;
        this.reportService = reportService;
        this.formBuilder = formBuilder;
        this.excelService = excelService;
        this.filters = { site: '', start_date: '', end_date: '' };
        this.active_report = 'date';
        this.report_data = [];
        this.report_data_monthly = [];
        this.dateFilters = { start_date: '', end_date: '' };
        this.filterForm = this.formBuilder.group({
            start_date: [0],
            end_date: [0]
        });
    }
    OwnFleetReportAdminComponent.prototype.ngOnInit = function () {
        this.sitename = this.route.snapshot.paramMap.get('site');
        this.form = this.formBuilder.group({
            'filters': ['date'],
        });
        this.fetchData();
        this.fetchMonthlyData();
    };
    OwnFleetReportAdminComponent.prototype.onReportParameterChange = function (val) {
        this.active_report = val;
    };
    OwnFleetReportAdminComponent.prototype.fetchData = function () {
        var _this = this;
        this.filters.site = this.route.snapshot.paramMap.get('site');
        var startDt = '';
        var endDt = '';
        if (this.filterForm.controls['start_date'].value) {
            startDt = this.filterForm.controls['start_date'].value.year + '-' +
                this.filterForm.controls['start_date'].value.month + '-' +
                this.filterForm.controls['start_date'].value.day;
        }
        else {
            startDt = this.route.snapshot.paramMap.get('start_date');
            // this.filterForm.controls['start_date'].setValue(startDt);
        }
        if (this.filterForm.controls['end_date'].value) {
            endDt = this.filterForm.controls['end_date'].value.year + '-' +
                this.filterForm.controls['end_date'].value.month + '-' +
                (this.filterForm.controls['end_date'].value.day);
        }
        else {
            endDt = this.route.snapshot.paramMap.get('end_date');
            // this.filterForm.controls['end_date'].setValue(endDt);
        }
        this.filters.start_date = startDt;
        this.filters.end_date = endDt;
        this.reportService.getOwnFleetReportBySite(this.filters).subscribe(function (res) {
            console.log(res);
            _this.report_data = res;
        }, function (err) {
        });
    };
    OwnFleetReportAdminComponent.prototype.fetchReport = function () {
        this.fetchData();
    };
    OwnFleetReportAdminComponent.prototype.resetFilters = function () {
    };
    OwnFleetReportAdminComponent.prototype.fetchMonthlyData = function () {
        var _this = this;
        this.filters.site = this.route.snapshot.paramMap.get('site');
        this.reportService.getOwnFleetReportBySiteMonthly(this.filters).subscribe(function (res) {
            console.log(res);
            _this.report_data_monthly = res;
        });
    };
    OwnFleetReportAdminComponent.prototype.ExportAsExcel = function () {
        if (this.active_report === 'date') {
            this.excelService.exportAsExcelFile(this.report_data, this.sitename + '_fleet_report');
        }
        else {
            this.excelService.exportAsExcelFile(this.report_data_monthly, this.sitename + '_fleet_report');
        }
    };
    OwnFleetReportAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-own-fleet-report-admin',
            template: __webpack_require__(/*! ./own-fleet-report-admin.component.html */ "./src/app/layout/reports/components/own-fleet-report-admin/own-fleet-report-admin.component.html"),
            styles: [__webpack_require__(/*! ./own-fleet-report-admin.component.scss */ "./src/app/layout/reports/components/own-fleet-report-admin/own-fleet-report-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"]])
    ], OwnFleetReportAdminComponent);
    return OwnFleetReportAdminComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/components/own-fleet-report/own-fleet-report.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/reports/components/own-fleet-report/own-fleet-report.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <!-- <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\"> -->\r\n      <!-- <div class=\"card-body table-responsive\"\r\n      infiniteScroll\r\n      [infiniteScrollDistance]=\"2\"\r\n      [infiniteScrollThrottle]=\"1000\"\r\n      (scrolled)=\"fetchReport()\"\r\n      > -->\r\n    <!-- </div> -->\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\" *ngIf=\"activeTab == 'main_report'\">\r\n        <form [formGroup]=\"filterForm\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <h4><i class=\"fa fa-truck\"></i> Own Fleet Performance Report</h4>\r\n                <hr />\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label>Year</label>\r\n                  <select formControlName=\"year\" class=\"form-control\">\r\n                    <option value=\"0\">Select Year</option>\r\n                    <option *ngFor=\"let y of years\" value=\"{{ y.year }}\">\r\n                      {{ y.year }}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label>Tyre</label>\r\n                  <select formControlName=\"tyre\" class=\"form-control\">\r\n                    <option value=\"0\">Select Tyre</option>\r\n                    <option *ngFor=\"let t of tyres\" value=\"{{ t.name }}\">\r\n                      {{ t.name }}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <fieldset class=\"form-group\">\r\n                  <label>Truck No.</label>\r\n                  <input\r\n                    id=\"truck_no\"\r\n                    formControlName=\"truck_no\"\r\n                    placeholder=\"Type truck number...\"\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    [ngbTypeahead]=\"search\"\r\n                  />\r\n                </fieldset>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label>Traffic Agent</label>\r\n                  <select formControlName=\"traffic_agent\" class=\"form-control\">\r\n                    <option value=\"0\">Select Agent</option>\r\n                    <option *ngFor=\"let a of agents\" value=\"{{ a.name }}\">\r\n                      {{ a.name }}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <button (click)=\"fetchReport()\" class=\"btn btn-primary\"><i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch </button>&nbsp;\r\n                <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n      <hr />\r\n      <ngb-pagination\r\n        [(page)]=\"pagination.currenPage\"\r\n        [pageSize]=\"pagination.pageSize\"\r\n        [collectionSize]=\"pagination.total\"\r\n        [maxSize]=\"pagination.maxSize\"\r\n        (pageChange)=\"fetchReport()\"\r\n      ></ngb-pagination>\r\n      <p>\r\n        <strong>Total:</strong> {{ pagination.total }}, <strong>Records per page:</strong> {{ pagination.pageSize }},\r\n        <strong>Showing:</strong> {{ (pagination.currenPage - 1) * pagination.pageSize }} -\r\n        {{ (pagination.currenPage - 1) * pagination.pageSize + 50 }}\r\n      </p>\r\n      <table class=\"table table-hover table-striped table-bordered table-condensed tableFixHead\">\r\n        <thead>\r\n          <tr>\r\n            <th>Truck No.</th>\r\n            <th>Trips</th>\r\n            <th>M.Ton</th>\r\n            <th>Amount</th>\r\n            <th>D.Qty</th>\r\n            <th>D.Amt</th>\r\n            <th>Expenses</th>\r\n            <th>Profit</th>\r\n            <th>Maintenance</th>\r\n            <th>Net Bal</th>\r\n            <th>Traffic Agent</th>\r\n            <th>Tyre</th>\r\n            <th>CC</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"loading\">\r\n            <td colspan=\"13\">\r\n              <div class=\"showbox\">\r\n                <div class=\"loader\">\r\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let report of report_data\">\r\n            <td (click)=\"onTruckSelect(report)\" class=\"truck-selection\"><i class=\"fa fa-truck\" aria-hidden=\"true\"></i> {{ report.truckno }}</td>\r\n            <td>{{ report.trips ? report.trips : 0 }}</td>\r\n            <td class=\"cell-align\">{{ (report.mton ? report.mton : 0)  | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.finalamount ? report.finalamount : 0) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.dqty ? report.dqty : 0) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.damt ? report.damt : 0) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.amount ? report.amount : 0) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.profit ? report.profit : 0) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.maintanence ? report.maintanence : 0) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.net_bal ? report.net_bal : 0) | number : '1.2-2' }}</td>\r\n            <td>{{ report.taname ? report.taname : '--' }}</td>\r\n            <td>{{ report.tyre ? report.tyre : '--' }}</td>\r\n            <td>{{ report.tcc ? report.tcc : '--' }}</td>\r\n          </tr>\r\n          <tr *ngIf=\"report_data.length === 0\">\r\n            <td align=\"center\" colspan=\"10\">No data available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <ngb-pagination\r\n        [(page)]=\"pagination.currenPage\"\r\n        [pageSize]=\"pagination.pageSize\"\r\n        [collectionSize]=\"pagination.total\"\r\n        [maxSize]=\"pagination.maxSize\"\r\n        (pageChange)=\"fetchReport()\"\r\n      ></ngb-pagination>\r\n    </div>\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\" *ngIf=\"activeTab == 'secondary_report'\">\r\n      <p><a class=\"btn btn-info\" href=\"javascript:void(0)\" (click)=\"activeTab = 'main_report'\"><i class=\"fa fa-chevron-circle-left\" aria-hidden=\"true\"></i> Back</a></p>\r\n        <h4>Own Fleet Performance Report <br><i class=\"fa fa-truck\"></i> Truck: {{selected_truck_number}}</h4>\r\n      <table class=\"table table-hover table-striped table-bordered table-condensed\">\r\n        <thead>\r\n          <tr>\r\n            <th>Month</th>\r\n            <th>Trips</th>\r\n            <th>Mtons</th>\r\n            <th>Target</th>\r\n            <th>Achieved</th>\r\n            <th>Income</th>\r\n            <th>Dqty</th>\r\n            <th>DAmount</th>\r\n            <th>Expenses</th>\r\n            <th>Profit</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"loading\">\r\n            <td colspan=\"10\">\r\n              <div class=\"showbox\">\r\n                <div class=\"loader\">\r\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let report of secondary_report_data\">\r\n            <td>{{ report.name ? report.name : '--' }}</td>\r\n            <td>{{ report.trips ? report.trips : 0 }}</td>\r\n            <td>{{ report.cweight ? report.cweight : 0 }}</td>\r\n            <td>{{ report.target ? report.target : '--'}}</td>\r\n            <td class=\"cell-align\">{{ (report.achieved ? report.achieved : 0) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.income ? report.income : 0) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.dqty ? report.dqty : 0) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.damount ? report.damount : 0) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.expenses ? report.expenses : 0) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.profit ? report.profit : 0) | number : '1.2-2' }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/reports/components/own-fleet-report/own-fleet-report.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/reports/components/own-fleet-report/own-fleet-report.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mg-top-25 {\n  margin-top: 25px;\n  margin-bottom: 10px; }\n\n@media only screen and (max-width: 600px) {\n  .mg-top-25 {\n    margin-top: 0px; }\n  .wrapper-right {\n    text-align: right; } }\n\n.truck-selection {\n  cursor: pointer;\n  text-decoration: underline; }\n\n.cell-align {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydHMvY29tcG9uZW50cy9vd24tZmxlZXQtcmVwb3J0L0Y6XFx0ZXN0aW5nX2RlbGV0ZV9mb2xkZXJcXFRSVUNLX0RFTU9fb2xkR2FuZXNoXFxmcm9udGVuZFxcdGRfZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccmVwb3J0c1xcY29tcG9uZW50c1xcb3duLWZsZWV0LXJlcG9ydFxcb3duLWZsZWV0LXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSTtJQUNJLGVBQWUsRUFBQTtFQUVuQjtJQUNJLGlCQUFnQixFQUFBLEVBQ25COztBQUdMO0VBQ0ksZUFBZTtFQUNmLDBCQUNKLEVBQUE7O0FBRUE7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZXBvcnRzL2NvbXBvbmVudHMvb3duLWZsZWV0LXJlcG9ydC9vd24tZmxlZXQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1nLXRvcC0yNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm1nLXRvcC0yNSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgLndyYXBwZXItcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLnRydWNrLXNlbGVjdGlvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZVxyXG59XHJcblxyXG4uY2VsbC1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/reports/components/own-fleet-report/own-fleet-report.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/reports/components/own-fleet-report/own-fleet-report.component.ts ***!
  \******************************************************************************************/
/*! exports provided: OwnFleetReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnFleetReportComponent", function() { return OwnFleetReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
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









var OwnFleetReportComponent = /** @class */ (function () {
    function OwnFleetReportComponent(api, formBuilder, toastr, reportService, dashboardService, meta) {
        var _this = this;
        this.api = api;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.reportService = reportService;
        this.dashboardService = dashboardService;
        this.meta = meta;
        this.activeTab = 'main_report';
        this.years = [];
        this.tyres = [];
        this.agents = [];
        this.report_data = [];
        this.trucks = [];
        this.loading = false;
        this.filters = { year: '', tyre: '', truck_no: '', traffic_agent: '', page: 0 };
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.secondary_report_data = [];
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return (term.length < 2 ? [] : _this.trucks.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10)); }));
        };
        for (var i = 2020; i >= 2019; i--) {
            this.years.push({ year: i });
        }
        this.filterForm = this.formBuilder.group({
            year: [0],
            tyre: [0],
            truck_no: [],
            traffic_agent: [0]
        });
    }
    OwnFleetReportComponent.prototype.ngOnInit = function () {
        this.getTyres();
        this.getAgentList();
        this.getTrucksList();
        this.fetchReport();
    };
    OwnFleetReportComponent.prototype.getTyres = function () {
        var _this = this;
        this.dashboardService.getTyreList().subscribe(function (res) {
            _this.tyres = res;
        }, function (err) { });
    };
    OwnFleetReportComponent.prototype.getAgentList = function () {
        var _this = this;
        this.meta.getTrafficAgents().subscribe(function (res) {
            _this.agents = res;
        }, function (err) { });
    };
    OwnFleetReportComponent.prototype.getTrucksList = function () {
        var _this = this;
        this.dashboardService.getTruckList().subscribe(function (res) {
            var d = [];
            res.forEach(function (r) {
                d.push(r.truckno);
            });
            _this.trucks = d;
        }, function (err) { });
    };
    OwnFleetReportComponent.prototype.resetFilters = function () {
        this.filterForm.get('year').setValue(0);
        this.filterForm.get('tyre').setValue(0);
        this.filterForm.get('truck_no').setValue('');
        this.filterForm.get('traffic_agent').setValue(0);
        this.filters = { year: '', tyre: '', truck_no: '', traffic_agent: '', page: 0 };
        this.fetchReport();
    };
    OwnFleetReportComponent.prototype.onFilterChange = function () {
        this.fetchReport();
    };
    OwnFleetReportComponent.prototype.fetchReport = function () {
        var _this = this;
        this.loading = true;
        this.filters.page = this.pagination.currenPage;
        if (this.filterForm.controls['year'].value && this.filterForm.controls['year'].value !== '0') {
            this.filters.year = this.filterForm.controls['year'].value;
        }
        else {
            this.filters.year = '';
        }
        if (this.filterForm.controls['tyre'].value && this.filterForm.controls['tyre'].value !== '0') {
            this.filters.tyre = this.filterForm.controls['tyre'].value;
        }
        else {
            this.filters.tyre = '';
        }
        if (this.filterForm.controls['truck_no'].value) {
            this.filters.truck_no = this.filterForm.controls['truck_no'].value;
        }
        else {
            this.filters.truck_no = '';
        }
        if (this.filterForm.controls['traffic_agent'].value && this.filterForm.controls['traffic_agent'].value !== '0') {
            this.filters.traffic_agent = this.filterForm.controls['traffic_agent'].value;
        }
        else {
            this.filters.traffic_agent = '';
        }
        this.reportService.getOwnFleetReport(this.filters).subscribe(function (res) {
            _this.loading = false;
            console.log(res);
            res.results.forEach(function (element) {
                element.net_bal = element.profit - element.maint;
            });
            _this.report_data = res.results;
            _this.pagination.total = res.total;
        }, function (err) {
            _this.loading = false;
        });
    };
    OwnFleetReportComponent.prototype.onTruckSelect = function (t) {
        this.selected_truck_number = t.truckno;
        this.activeTab = 'secondary_report';
        this.fetchSecondaryReport();
    };
    OwnFleetReportComponent.prototype.fetchSecondaryReport = function () {
        var _this = this;
        this.reportService.getOwnFleetTruckReport(this.selected_truck_number).subscribe(function (res) {
            _this.loading = false;
            _this.secondary_report_data = res.months;
        }, function (err) {
            _this.loading = false;
        });
    };
    OwnFleetReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-own-fleet-report',
            template: __webpack_require__(/*! ./own-fleet-report.component.html */ "./src/app/layout/reports/components/own-fleet-report/own-fleet-report.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./own-fleet-report.component.scss */ "./src/app/layout/reports/components/own-fleet-report/own-fleet-report.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__["ReportsService"],
            src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_8__["MetaService"]])
    ], OwnFleetReportComponent);
    return OwnFleetReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/components/plant-rate-list-temp/plant-rate-list-temp.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/plant-rate-list-temp/plant-rate-list-temp.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>Plants Rate List</strong>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <form [formGroup]=\"filterForm\">\r\n      <div class=\" form-group row\">\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>*Site</label>\r\n            <select formControlName=\"site\" class=\"form-control\" required>\r\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                  {{ s.branch_name }}\r\n                </option>\r\n              </select>\r\n            <!-- <div class=\"input-group datepicker-input\">\r\n                      <input\r\n                        class=\"form-control\"\r\n                        placeholder=\"dd/mm/yyyy\"\r\n                        name=\"dp\"\r\n                        formControlName=\"start_date\"\r\n                        ngbDatepicker\r\n                        #d=\"ngbDatepicker\"\r\n                      />\r\n                      <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <!-- <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\" [formGroup]=\"filterForm\">\r\n      <div class=\" form-group row\">\r\n        <div class=\"col-sm-3\">\r\n          <label for=\"city\">*Site</label>\r\n          <select id=\"select1\" name=\"site\" required class=\"form-control\">\r\n            <option value=\"0\">Please select</option>\r\n            <option *ngFor=\"let s of all_site?.results\" value=\"{{ s._id }}\">\r\n              {{ s._id }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form> -->\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <button type=\"submit\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-success\" (click)=\"getDestinationBySite()\">\r\n      <i class=\"fa fa-get-pocket\"></i> fetch</button>\r\n    <button type=\"reset\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-warning\">\r\n      <i class=\"fa fa-refresh\"></i> Refresh</button>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Prepared By Administrator\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n\r\n\r\n          </div>\r\n          <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th>Destination</th>\r\n                <th>Spi</th>\r\n                <th>km</th>\r\n                <th>rate</th>\r\n                <th>Edit</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let dest of rate_list_data\">\r\n                <td>{{ dest.destination }}</td>\r\n                <td>{{ dest.spi }}</td>\r\n                <td>{{ dest.km ? dest.km : 0 }}</td>\r\n                <td>{{ dest.freight }}</td>\r\n                <td>\r\n                  <a class=\"badge badge-success\" href=\"#\"><i class=\"fa fa-pencil\"></i></a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <ul class=\"pagination\">\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">Prev</a>\r\n            </li>\r\n            <li class=\"page-item active\">\r\n              <a class=\"page-link\" href=\"#\">1</a>\r\n            </li>\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">2</a>\r\n            </li>\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">3</a>\r\n            </li>\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">4</a>\r\n            </li>\r\n            <li class=\"page-item\">\r\n              <a class=\"page-link\" href=\"#\">Next</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/layout/reports/components/plant-rate-list-temp/plant-rate-list-temp.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/plant-rate-list-temp/plant-rate-list-temp.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZXBvcnRzL2NvbXBvbmVudHMvcGxhbnQtcmF0ZS1saXN0LXRlbXAvcGxhbnQtcmF0ZS1saXN0LXRlbXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/reports/components/plant-rate-list-temp/plant-rate-list-temp.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/plant-rate-list-temp/plant-rate-list-temp.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: PlantRateListTempComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantRateListTempComponent", function() { return PlantRateListTempComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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





var PlantRateListTempComponent = /** @class */ (function () {
    function PlantRateListTempComponent(api, formBuilder, reportService, meta) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.reportService = reportService;
        this.meta = meta;
        this.filters = { site: '' };
        this.all_site = { results: [] };
        this.rate_list_data = {};
        this.sites = [];
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        this.filterForm = this.formBuilder.group({
            site: [''],
        });
    }
    PlantRateListTempComponent.prototype.ngOnInit = function () {
        this.getSites();
    };
    PlantRateListTempComponent.prototype.getDestinationBySite = function () {
        var _this = this;
        this.filters.site = this.filterForm.controls['site'].value;
        this.reportService.getDestinationBySite(this.filters).subscribe(function (res) {
            _this.rate_list_data = res.results[0].multidest;
            console.log(_this.rate_list_data);
        });
    };
    PlantRateListTempComponent.prototype.getSites = function () {
        var _this = this;
        this.meta.getSites().subscribe(function (res) {
            _this.sites = res;
            if (_this.usertype === 'ADMIN') {
                _this.filterForm.controls['site'].setValue(_this.sites[0].branch_name);
            }
            else {
                _this.filterForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
        });
    };
    PlantRateListTempComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plant-rate-list-temp',
            template: __webpack_require__(/*! ./plant-rate-list-temp.component.html */ "./src/app/layout/reports/components/plant-rate-list-temp/plant-rate-list-temp.component.html"),
            styles: [__webpack_require__(/*! ./plant-rate-list-temp.component.scss */ "./src/app/layout/reports/components/plant-rate-list-temp/plant-rate-list-temp.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"]])
    ], PlantRateListTempComponent);
    return PlantRateListTempComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/components/scrap-ledger-report/scrap-ledger-report.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/scrap-ledger-report/scrap-ledger-report.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n      <form [formGroup]=\"filterForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4><i class=\"fa fa-book\"></i> Scrap Ledger Report</h4>\r\n            <p class=\"text-muted\">Note: Items selection is mandatory in order to get the data.</p>\r\n            <hr />\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n              <label>Start Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp\"\r\n                  formControlName=\"start_date\"\r\n                  ngbDatepicker\r\n                  #d=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n              <label>End Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp2\"\r\n                  formControlName=\"end_date\"\r\n                  ngbDatepicker\r\n                  #d1=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Select Sites</label>\r\n              <select formControlName=\"site_name\" class=\"form-control\">\r\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                  {{ s.branch_name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <label class=\"required\">Item Name</label>\r\n            <ng-select [items]=\"items_option\" placeholder=\"Type and search items\" bindLabel=\"itemname\" bindValue=\"itemname\"\r\n              formControlName=\"item_name\">\r\n            </ng-select>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-md-4 wrapper-right\">\r\n            <button (click)=\"fetchReport()\" class=\"btn btn-primary\" >\r\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\r\n            </button>&nbsp;\r\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <hr />\r\n        \r\n      <p><b>{{filterForm.controls['item_name'].value}}</b><br><b>Opening Balance:</b> {{ items_data.opening_balance.opening_balance | number : '1.2-2' }} {{ items_data.opening_balance.type }}</p>\r\n      <table class=\"table table-hover table-striped table-bordered table-condensed\">\r\n        <thead>\r\n          <tr>\r\n            <th>Date</th>\r\n            <th>Particular</th>\r\n            <th>Dr.</th>\r\n            <th>Cr.</th>\r\n            <th>Closing</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"loading\">\r\n            <td colspan=\"5\">\r\n              <div class=\"showbox\">\r\n                <div class=\"loader\">\r\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let report of items_data?.results\">\r\n            <td>{{ report.date ? report.date : '--' }}</td>\r\n            <td>{{ report.particular ? report.particular : 'N/A' }}</td>\r\n            <td class=\"cell-align\">{{ (report.dr ? report.dr : 0 ) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.cr ? report.cr : 0)  | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.closing ? report.closing : 0)  | number : '1.2-2' }}</td>\r\n          </tr>\r\n          <tr *ngIf=\"loaded && items_data.results.length === 0\">\r\n            <td align=\"center\" colspan=\"6\">No data available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <p><b>Closing Balance:</b> {{ items_data.closing_balance | number : '1.2-2' }} {{ items_data.account_type }}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/reports/components/scrap-ledger-report/scrap-ledger-report.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/scrap-ledger-report/scrap-ledger-report.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZXBvcnRzL2NvbXBvbmVudHMvc2NyYXAtbGVkZ2VyLXJlcG9ydC9zY3JhcC1sZWRnZXItcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/reports/components/scrap-ledger-report/scrap-ledger-report.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/scrap-ledger-report/scrap-ledger-report.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ScrapLedgerReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrapLedgerReportComponent", function() { return ScrapLedgerReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
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






var ScrapLedgerReportComponent = /** @class */ (function () {
    function ScrapLedgerReportComponent(api, meta, formBuilder, reportService, toastr) {
        this.api = api;
        this.meta = meta;
        this.formBuilder = formBuilder;
        this.reportService = reportService;
        this.toastr = toastr;
        this.loading = false;
        this.loaded = true;
        this.filters = {
            site_name: '',
            item_name: '',
            start_date: '',
            end_date: '',
            page: 0
        };
        this.items_data = { results: [], closing_balance: 0, opening_balance: { opening_balance: 0, type: '' }, account_type: '' };
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        this.filterForm = this.formBuilder.group({
            site_name: [''],
            item_name: [''],
            start_date: [''],
            end_date: ['']
        });
    }
    ScrapLedgerReportComponent.prototype.ngOnInit = function () {
        this.getOptions();
        //   this.fetchReport();
    };
    ScrapLedgerReportComponent.prototype.getOptions = function () {
        this.getSites();
        this.getItems();
    };
    ScrapLedgerReportComponent.prototype.getItems = function () {
        var _this = this;
        this.meta.getScrapLedgerItemsList().subscribe(function (trackInfo) {
            _this.items_option = trackInfo['result'];
            console.log('ItemsList >>>>>', _this.items_option);
        });
    };
    ScrapLedgerReportComponent.prototype.getSites = function () {
        var _this = this;
        this.meta.getSites().subscribe(function (res) {
            _this.sites = res;
            if (_this.usertype === 'ADMIN') {
                _this.filterForm.controls['site_name'].setValue('');
            }
            else {
                _this.filterForm.controls['site_name'].setValue(_this.site_name);
            }
        }, function (err) {
        });
    };
    ScrapLedgerReportComponent.prototype.resetFilters = function () {
        this.filterForm.get('item_name').setValue('');
        this.filterForm.get('start_date').setValue('');
        this.filterForm.get('end_date').setValue('');
        this.filters = {
            site_name: '',
            item_name: '',
            start_date: '',
            end_date: '',
            page: 0
        };
        //   this.fetchReport();
    };
    ScrapLedgerReportComponent.prototype.getYesterdaysDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 1);
    };
    ScrapLedgerReportComponent.prototype.getTodaysDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    };
    ScrapLedgerReportComponent.prototype.getTommrowsDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 1);
    };
    ScrapLedgerReportComponent.prototype.fetchReport = function () {
        var _this = this;
        var startDt = '';
        var endDt = '';
        if (this.filterForm.controls['start_date'].value) {
            startDt = this.filterForm.controls['start_date'].value.year + '-' +
                this.filterForm.controls['start_date'].value.month + '-' +
                this.filterForm.controls['start_date'].value.day;
        }
        else {
            startDt = '';
        }
        if (this.filterForm.controls['end_date'].value) {
            endDt = this.filterForm.controls['end_date'].value.year + '-' +
                this.filterForm.controls['end_date'].value.month + '-' +
                (this.filterForm.controls['end_date'].value.day);
        }
        else {
            endDt = '';
        }
        console.log('startDt >>>>>>>>>.', startDt);
        console.log('endDt >>>>>>>>>>>', endDt);
        this.filters.page = this.pagination.currenPage;
        if (this.filterForm.controls['site_name'].value) {
            this.filters.site_name = this.filterForm.controls['site_name'].value;
        }
        else {
            this.filters.site_name = '';
        }
        if (this.filterForm.controls['item_name'].value) {
            this.filters.item_name = this.filterForm.controls['item_name'].value;
        }
        else {
            this.filters.item_name = '';
        }
        this.filters.start_date = startDt;
        this.filters.end_date = endDt;
        this.loading = true;
        this.loaded = false;
        // this.items_data = [];
        console.log('Filters', this.filters);
        this.reportService.getScrapReports(this.filters).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            console.log(_this.filters);
            console.log(res);
            _this.items_data = res;
            // this.pagination.total = res.total;
        }, function (err) {
            _this.loading = false;
            _this.loaded = true;
        });
    };
    ScrapLedgerReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scrap-ledger-report',
            template: __webpack_require__(/*! ./scrap-ledger-report.component.html */ "./src/app/layout/reports/components/scrap-ledger-report/scrap-ledger-report.component.html"),
            styles: [__webpack_require__(/*! ./scrap-ledger-report.component.scss */ "./src/app/layout/reports/components/scrap-ledger-report/scrap-ledger-report.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__["MetaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ScrapLedgerReportComponent);
    return ScrapLedgerReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/components/truck-ledger-report/truck-ledger-report.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/truck-ledger-report/truck-ledger-report.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n      <form [formGroup]=\"filterForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4><i class=\"fa fa-book\"></i> Truck Ledger Report</h4>\r\n            <p class=\"text-muted\">Note: Items selection is mandatory in order to get the data.</p>\r\n            <hr />\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n              <label>Start Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp\"\r\n                  formControlName=\"start_date\"\r\n                  ngbDatepicker\r\n                  #d=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n              <label>End Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp2\"\r\n                  formControlName=\"end_date\"\r\n                  ngbDatepicker\r\n                  #d1=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n              <label>Select Sites</label>\r\n              <select formControlName=\"site_name\" class=\"form-control\">\r\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                  {{ s.branch_name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <label class=\"required\">Truck No.</label>\r\n            <ng-select [items]=\"trucks_option\" placeholder=\"Type and search items\" bindLabel=\"truckno\" bindValue=\"truckno\"\r\n              formControlName=\"truck_no\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <label class=\"required\">Item Name.</label>\r\n            <ng-select [items]=\"items_option\" placeholder=\"Type and search items\" bindLabel=\"itemname\" bindValue=\"itemname\"\r\n              formControlName=\"item_name\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 wrapper-right\">\r\n            <button (click)=\"fetchReport()\" class=\"btn btn-primary\" >\r\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\r\n            </button>&nbsp;\r\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <hr />\r\n      \r\n      <!-- <ngb-pagination\r\n          [(page)]=\"pagination.currenPage\"\r\n          [pageSize]=\"pagination.pageSize\"\r\n          [collectionSize]=\"pagination.total\"\r\n          [maxSize]=\"pagination.maxSize\"\r\n          (pageChange)=\"fetchReport()\"\r\n        ></ngb-pagination>\r\n        <p><strong>Total:</strong> {{ pagination.total }}<br /><strong>Records per page:</strong> {{ pagination.pageSize }}</p> -->\r\n        \r\n      <p><b>{{filterForm.controls['truck_no'].value}}</b><br><b>Opening Balance:</b> {{ items_data.opening_balance.opening_balance | number : '1.2-2' }} {{ items_data.opening_balance.type }}</p>\r\n      <table class=\"table table-hover table-striped table-bordered table-condensed\">\r\n        <thead>\r\n          <tr>\r\n            <th>Date</th>\r\n            <th>Particular</th>\r\n            <th>Dr.</th>\r\n            <th>Cr.</th>\r\n            <th>Closing</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"loading\">\r\n            <td colspan=\"5\">\r\n              <div class=\"showbox\">\r\n                <div class=\"loader\">\r\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let report of items_data?.results\">\r\n            <td>{{ report.date ? report.date : '--' }}</td>\r\n            <td>{{ report.particular ? report.particular : 'N/A' }}</td>\r\n            <td class=\"cell-align\">{{ (report.dr ? report.dr : 0 ) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.cr ? report.cr : 0)  | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (report.closing ? report.closing : 0)  | number : '1.2-2' }}</td>\r\n          </tr>\r\n          <tr *ngIf=\"loaded && items_data.results.length === 0\">\r\n            <td align=\"center\" colspan=\"6\">No data available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <p><b>Closing Balance:</b> {{ items_data.closing_balance | number : '1.2-2' }} {{ items_data.account_type }}</p>\r\n      <!-- <ngb-pagination\r\n          [(page)]=\"pagination.currenPage\"\r\n          [pageSize]=\"pagination.pageSize\"\r\n          [collectionSize]=\"pagination.total\"\r\n          [maxSize]=\"pagination.maxSize\"\r\n          (pageChange)=\"fetchReport()\"\r\n        ></ngb-pagination> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/reports/components/truck-ledger-report/truck-ledger-report.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/truck-ledger-report/truck-ledger-report.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZXBvcnRzL2NvbXBvbmVudHMvdHJ1Y2stbGVkZ2VyLXJlcG9ydC90cnVjay1sZWRnZXItcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/reports/components/truck-ledger-report/truck-ledger-report.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/truck-ledger-report/truck-ledger-report.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TruckLedgerReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckLedgerReportComponent", function() { return TruckLedgerReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
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







var TruckLedgerReportComponent = /** @class */ (function () {
    function TruckLedgerReportComponent(api, meta, formBuilder, reportService, toastr) {
        this.api = api;
        this.meta = meta;
        this.formBuilder = formBuilder;
        this.reportService = reportService;
        this.toastr = toastr;
        this.loading = false;
        this.loaded = true;
        this.filters = {
            site_name: '',
            truck_no: '',
            item_name: '',
            start_date: '',
            end_date: '',
            page: 0
        };
        this.items_data = { results: [], closing_balance: 0, opening_balance: { opening_balance: 0, type: '' }, account_type: '' };
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        this.filterForm = this.formBuilder.group({
            site_name: [''],
            truck_no: [''],
            item_name: [''],
            start_date: [''],
            end_date: ['']
        });
    }
    TruckLedgerReportComponent.prototype.ngOnInit = function () {
        this.getOptions();
        //   this.fetchReport();
    };
    TruckLedgerReportComponent.prototype.getOptions = function () {
        this.getSites();
        this.getTruckDeptItems();
        this.getItems();
    };
    TruckLedgerReportComponent.prototype.getTruckDeptItems = function () {
        var _this = this;
        this.meta.getTruckLedgertrucknoList().subscribe(function (trackInfo) {
            _this.trucks_option = trackInfo['result'];
            console.log('ItemsList >>>>>', _this.trucks_option);
        });
    };
    TruckLedgerReportComponent.prototype.getItems = function () {
        var _this = this;
        this.meta.getTruckLedgerItemsList().subscribe(function (trackInfo) {
            _this.items_option = trackInfo['result'];
            console.log('ItemsList >>>>>', _this.items_option);
        });
    };
    TruckLedgerReportComponent.prototype.getSites = function () {
        var _this = this;
        this.meta.getSites().subscribe(function (res) {
            _this.sites = res;
            if (_this.usertype === 'ADMIN') {
                _this.filterForm.controls['site_name'].setValue('');
            }
            else {
                _this.filterForm.controls['site_name'].setValue(_this.site_name);
            }
        }, function (err) {
        });
    };
    TruckLedgerReportComponent.prototype.resetFilters = function () {
        this.filterForm.get('truck_no').setValue('');
        this.filterForm.get('start_date').setValue('');
        this.filterForm.get('end_date').setValue('');
        this.filters = {
            site_name: '',
            truck_no: '',
            item_name: '',
            start_date: '',
            end_date: '',
            page: 0
        };
        //   this.fetchReport();
    };
    TruckLedgerReportComponent.prototype.getYesterdaysDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 1);
    };
    TruckLedgerReportComponent.prototype.getTodaysDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    };
    TruckLedgerReportComponent.prototype.getTommrowsDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 1);
    };
    TruckLedgerReportComponent.prototype.fetchReport = function () {
        var _this = this;
        var startDt = '';
        var endDt = '';
        if (this.filterForm.controls['start_date'].value) {
            startDt = this.filterForm.controls['start_date'].value.year + '-' +
                this.filterForm.controls['start_date'].value.month + '-' +
                this.filterForm.controls['start_date'].value.day;
        }
        else {
            startDt = '';
        }
        if (this.filterForm.controls['end_date'].value) {
            endDt = this.filterForm.controls['end_date'].value.year + '-' +
                this.filterForm.controls['end_date'].value.month + '-' +
                (this.filterForm.controls['end_date'].value.day);
        }
        else {
            endDt = '';
        }
        console.log('startDt >>>>>>>>>.', startDt);
        console.log('endDt >>>>>>>>>>>', endDt);
        this.filters.page = this.pagination.currenPage;
        if (this.filterForm.controls['site_name'].value) {
            this.filters.site_name = this.filterForm.controls['site_name'].value;
        }
        else {
            this.filters.site_name = '';
        }
        if (this.filterForm.controls['truck_no'].value) {
            this.filters.truck_no = this.filterForm.controls['truck_no'].value;
        }
        else {
            this.filters.truck_no = '';
        }
        if (this.filterForm.controls['item_name'].value) {
            this.filters.item_name = this.filterForm.controls['item_name'].value;
        }
        else {
            this.filters.item_name = '';
        }
        this.filters.start_date = startDt;
        this.filters.end_date = endDt;
        this.loading = true;
        this.loaded = false;
        // this.items_data = [];
        console.log('Filters', this.filters);
        this.reportService.getTruckLedgerReports(this.filters).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            console.log(_this.filters);
            console.log(res);
            _this.items_data = res;
            // this.pagination.total = res.total;
        }, function (err) {
            _this.loading = false;
            _this.loaded = true;
        });
    };
    TruckLedgerReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truck-ledger-report',
            template: __webpack_require__(/*! ./truck-ledger-report.component.html */ "./src/app/layout/reports/components/truck-ledger-report/truck-ledger-report.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./truck-ledger-report.component.scss */ "./src/app/layout/reports/components/truck-ledger-report/truck-ledger-report.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], TruckLedgerReportComponent);
    return TruckLedgerReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/components/tyre-removal-report/tyre-removal-report.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/tyre-removal-report/tyre-removal-report.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n      <form [formGroup]=\"filterForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4><i class=\"fa fa-book\"></i> Tyre Removal Report</h4>\r\n            <hr />\r\n          </div>\r\n          \r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Start Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp\"\r\n                  formControlName=\"start_date\"\r\n                  ngbDatepicker\r\n                  #d=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>End Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp2\"\r\n                  formControlName=\"end_date\"\r\n                  ngbDatepicker\r\n                  #d1=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Tyre No</label>\r\n              <ng-select [items]=\"tyre_option\" placeholder=\"Type and search Truck No\" bindLabel=\"truckno\" bindValue=\"truckno\"\r\n                formControlName=\"tyre_no\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 wrapper-right\">\r\n            <button (click)=\"fetchReport()\" class=\"btn btn-primary\">\r\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\r\n            </button>&nbsp;\r\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <hr />\r\n\r\n        <p><b></b><br><b></b></p>\r\n      <table class=\"table table-hover table-striped table-bordered table-condensed\">\r\n        <thead>\r\n          <tr>\r\n            <th>Sno</th>\r\n            <th>TyreNo</th>\r\n            <th>Truck No</th>\r\n            <th>Tyre Type</th>\r\n            <th>Fitment Date</th>\r\n            <th>Remold Date</th>\r\n            <th>Company Name</th>\r\n            <th>Brand</th>\r\n            <th>Tyre Position</th>\r\n            <th>Tyre Price</th>\r\n            <th>Km Run</th>\r\n            <th>Cost Per Km</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"loading\">\r\n            <td colspan=\"5\">\r\n              <div class=\"showbox\">\r\n                <div class=\"loader\">\r\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr *ngFor=\"let m of monthlyData \">\r\n            <td>{{ m.sno ? m.sno : '--' }}</td>\r\n            <td>{{ m.tyre_no ? m.tyre_no : '--' }}</td>\r\n            <td>{{ m.vehicle_no ? m.vehicle_no : '--' }}</td>\r\n            <td>{{ m.tyre_type ? m.tyre_type : '--' }}</td>\r\n            <td>{{ m.date_of_fitment ? m.date_of_fitment : '' | date: 'dd/MM/yyyy' }}</td>\r\n            <td>{{ m.rs_date ? m.rs_date : '' | date: 'dd/MM/yyyy' }}</td>\r\n            <td>{{ m.company_name ? m.company_name : '--' }}</td>\r\n            <td>{{ m.brand ? m.brand : '--' }}</td>\r\n            <td>{{ m.tyreposition ? m.tyreposition : '--' }}</td>\r\n            <td>{{ m.price ? m.price : '0' }}</td>\r\n            <td>{{ m.kmrun ? m.kmrun : '0' }}</td>\r\n            <td>{{ m.cpkm ? m.cpkm : '0' }}</td>\r\n          </tr>\r\n          <tr *ngIf=\" loaded && monthlyData .length === 0\">\r\n            <td align=\"center\" colspan=\"4\">No data available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/reports/components/tyre-removal-report/tyre-removal-report.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/tyre-removal-report/tyre-removal-report.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZXBvcnRzL2NvbXBvbmVudHMvdHlyZS1yZW1vdmFsLXJlcG9ydC90eXJlLXJlbW92YWwtcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/reports/components/tyre-removal-report/tyre-removal-report.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/layout/reports/components/tyre-removal-report/tyre-removal-report.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TyreRemovalReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TyreRemovalReportComponent", function() { return TyreRemovalReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/inventory.service */ "./src/app/shared/services/inventory.service.ts");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TyreRemovalReportComponent = /** @class */ (function () {
    function TyreRemovalReportComponent(formBuilder, toastr, is, meta
    //   private ms: MaintenanceService,
    ) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.is = is;
        this.meta = meta;
        this.monthlyData = [];
        this.loading = false;
        this.filters = {
            start_date: '',
            end_date: '',
            tyre_no: '',
            page: 0
        };
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.totalDr = 0;
        this.totalCr = 0;
        this.loaded = true;
        this.filterForm = this.formBuilder.group({
            start_date: [''],
            end_date: [''],
            tyre_no: ['']
        });
    }
    TyreRemovalReportComponent.prototype.ngOnInit = function () {
        this.getOptions();
    };
    TyreRemovalReportComponent.prototype.getOptions = function () {
        var _this = this;
        this.meta.getTyreNoList().subscribe(function (siteInfo) {
            _this.tyre_option = siteInfo['result'];
            console.log('>>>> Tyre List', siteInfo['result']);
        });
    };
    TyreRemovalReportComponent.prototype.resetFilters = function () {
        this.filterForm.get('start_date').setValue('');
        this.filterForm.get('end_date').setValue('');
        this.filters = {
            start_date: '',
            end_date: '',
            tyre_no: '',
            page: 0
        };
        this.fetchReport();
    };
    TyreRemovalReportComponent.prototype.fetchReport = function () {
        var _this = this;
        var startDt = '';
        var endDt = '';
        if (this.filterForm.controls['start_date'].value) {
            startDt = this.filterForm.controls['start_date'].value.year + '-' +
                this.filterForm.controls['start_date'].value.month + '-' +
                this.filterForm.controls['start_date'].value.day;
        }
        else {
            startDt = '';
        }
        if (this.filterForm.controls['end_date'].value) {
            endDt = this.filterForm.controls['end_date'].value.year + '-' +
                this.filterForm.controls['end_date'].value.month + '-' +
                (this.filterForm.controls['end_date'].value.day);
        }
        else {
            endDt = '';
        }
        if (this.filterForm.controls['tyre_no'].value) {
            this.filters.tyre_no = this.filterForm.controls['tyre_no'].value;
        }
        else {
            this.filters.tyre_no = '';
        }
        this.filters.page = this.pagination.currenPage;
        this.filters.start_date = startDt;
        this.filters.end_date = endDt;
        this.loading = true;
        this.loaded = false;
        this.monthlyData = [];
        this.is.getTyreRemovalReport(this.filters).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            res.result.forEach(function (element) {
                element.date_of_fitment = moment(element.date_of_fitment, 'YYYY-MM-DD').format('DD/MM/YYYY');
                element.rs_date = moment(element.rs_date, 'YYYY-MM-DD').format('DD/MM/YYYY');
            });
            _this.monthlyData = res.result;
            // this.pagination.total = res.total;
        }, function (err) {
            _this.loaded = true;
            _this.loading = false;
        });
    };
    TyreRemovalReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tyre-removal-report',
            template: __webpack_require__(/*! ./tyre-removal-report.component.html */ "./src/app/layout/reports/components/tyre-removal-report/tyre-removal-report.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./tyre-removal-report.component.scss */ "./src/app/layout/reports/components/tyre-removal-report/tyre-removal-report.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_shared_services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__["MetaService"]
            //   private ms: MaintenanceService,
        ])
    ], TyreRemovalReportComponent);
    return TyreRemovalReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/reports-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/reports/reports-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _components_plant_rate_list_temp_plant_rate_list_temp_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/plant-rate-list-temp/plant-rate-list-temp.component */ "./src/app/layout/reports/components/plant-rate-list-temp/plant-rate-list-temp.component.ts");
/* harmony import */ var _components_dispatch_summary_dispatch_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dispatch-summary/dispatch-summary.component */ "./src/app/layout/reports/components/dispatch-summary/dispatch-summary.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_own_fleet_report_own_fleet_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/own-fleet-report/own-fleet-report.component */ "./src/app/layout/reports/components/own-fleet-report/own-fleet-report.component.ts");
/* harmony import */ var _components_accounts_ledger_report_accounts_ledger_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/accounts-ledger-report/accounts-ledger-report.component */ "./src/app/layout/reports/components/accounts-ledger-report/accounts-ledger-report.component.ts");
/* harmony import */ var _components_accounts_items_ledger_report_accounts_items_ledger_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/accounts-items-ledger-report/accounts-items-ledger-report.component */ "./src/app/layout/reports/components/accounts-items-ledger-report/accounts-items-ledger-report.component.ts");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports.component */ "./src/app/layout/reports/reports.component.ts");
/* harmony import */ var _components_dispatch_summary_site_wise_dispatch_summary_site_wise_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dispatch-summary-site-wise/dispatch-summary-site-wise.component */ "./src/app/layout/reports/components/dispatch-summary-site-wise/dispatch-summary-site-wise.component.ts");
/* harmony import */ var _components_own_fleet_report_admin_own_fleet_report_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/own-fleet-report-admin/own-fleet-report-admin.component */ "./src/app/layout/reports/components/own-fleet-report-admin/own-fleet-report-admin.component.ts");
/* harmony import */ var _components_balance_stock_report_balance_stock_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/balance-stock-report/balance-stock-report.component */ "./src/app/layout/reports/components/balance-stock-report/balance-stock-report.component.ts");
/* harmony import */ var _components_balance_scrap_report_balance_scrap_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/balance-scrap-report/balance-scrap-report.component */ "./src/app/layout/reports/components/balance-scrap-report/balance-scrap-report.component.ts");
/* harmony import */ var _components_items_ledger_report_items_ledger_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/items-ledger-report/items-ledger-report.component */ "./src/app/layout/reports/components/items-ledger-report/items-ledger-report.component.ts");
/* harmony import */ var _components_order_ledger_report_order_ledger_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/order-ledger-report/order-ledger-report.component */ "./src/app/layout/reports/components/order-ledger-report/order-ledger-report.component.ts");
/* harmony import */ var _components_scrap_ledger_report_scrap_ledger_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/scrap-ledger-report/scrap-ledger-report.component */ "./src/app/layout/reports/components/scrap-ledger-report/scrap-ledger-report.component.ts");
/* harmony import */ var _components_truck_ledger_report_truck_ledger_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/truck-ledger-report/truck-ledger-report.component */ "./src/app/layout/reports/components/truck-ledger-report/truck-ledger-report.component.ts");
/* harmony import */ var _components_dealer_wise_purchase_dealer_wise_purchase_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dealer-wise-purchase/dealer-wise-purchase.component */ "./src/app/layout/reports/components/dealer-wise-purchase/dealer-wise-purchase.component.ts");
/* harmony import */ var _components_mileage_report_mileage_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/mileage-report/mileage-report.component */ "./src/app/layout/reports/components/mileage-report/mileage-report.component.ts");
/* harmony import */ var _components_tyre_removal_report_tyre_removal_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/tyre-removal-report/tyre-removal-report.component */ "./src/app/layout/reports/components/tyre-removal-report/tyre-removal-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    {
        path: '',
        component: _reports_component__WEBPACK_IMPORTED_MODULE_7__["ReportsComponent"],
        children: [
            { path: '', redirectTo: 'own_fleet_performance', pathMatch: 'prefix' },
            {
                path: 'own_fleet_performance',
                component: _components_own_fleet_report_own_fleet_report_component__WEBPACK_IMPORTED_MODULE_4__["OwnFleetReportComponent"]
            },
            {
                path: 'own_fleet_performance_admin',
                component: _components_own_fleet_report_admin_own_fleet_report_admin_component__WEBPACK_IMPORTED_MODULE_9__["OwnFleetReportAdminComponent"]
            },
            {
                path: 'accounts_ledger_report',
                component: _components_accounts_ledger_report_accounts_ledger_report_component__WEBPACK_IMPORTED_MODULE_5__["AccountsLedgerReportComponent"]
            },
            {
                path: 'accounts_items_ledger_report',
                component: _components_accounts_items_ledger_report_accounts_items_ledger_report_component__WEBPACK_IMPORTED_MODULE_6__["AccountsItemsLedgerReportComponent"]
            },
            {
                path: 'items_ledger_report',
                component: _components_items_ledger_report_items_ledger_report_component__WEBPACK_IMPORTED_MODULE_12__["ItemsLedgerReportComponent"]
            },
            {
                path: 'order_ledger_report',
                component: _components_order_ledger_report_order_ledger_report_component__WEBPACK_IMPORTED_MODULE_13__["OrderLedgerReportComponent"]
            },
            {
                path: 'scrap_ledger_report',
                component: _components_scrap_ledger_report_scrap_ledger_report_component__WEBPACK_IMPORTED_MODULE_14__["ScrapLedgerReportComponent"]
            },
            {
                path: 'truck_ledger_report',
                component: _components_truck_ledger_report_truck_ledger_report_component__WEBPACK_IMPORTED_MODULE_15__["TruckLedgerReportComponent"]
            },
            {
                path: 'balance_stock_report',
                component: _components_balance_stock_report_balance_stock_report_component__WEBPACK_IMPORTED_MODULE_10__["BalanceStockReportComponent"]
            },
            {
                path: 'balance_scrap_report',
                component: _components_balance_scrap_report_balance_scrap_report_component__WEBPACK_IMPORTED_MODULE_11__["BalanceScrapReportComponent"]
            },
            {
                path: 'mileage_report',
                component: _components_mileage_report_mileage_report_component__WEBPACK_IMPORTED_MODULE_17__["MileageReportComponent"]
            },
            {
                path: 'tyre_removal_report',
                component: _components_tyre_removal_report_tyre_removal_report_component__WEBPACK_IMPORTED_MODULE_18__["TyreRemovalReportComponent"]
            },
            {
                path: 'dealer_wise_purchase',
                component: _components_dealer_wise_purchase_dealer_wise_purchase_component__WEBPACK_IMPORTED_MODULE_16__["DealerWisePurchaseComponent"]
            },
            {
                path: 'dispatch_summary',
                component: _components_dispatch_summary_dispatch_summary_component__WEBPACK_IMPORTED_MODULE_1__["DispatchSummaryComponent"]
            },
            {
                path: 'plant_rate_list',
                component: _components_plant_rate_list_temp_plant_rate_list_temp_component__WEBPACK_IMPORTED_MODULE_0__["PlantRateListTempComponent"]
            },
            {
                path: 'dispatch-summary-site-wise',
                component: _components_dispatch_summary_site_wise_dispatch_summary_site_wise_component__WEBPACK_IMPORTED_MODULE_8__["DispatchSummarySiteWiseComponent"]
            }
        ]
    }
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/reports/reports.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/reports/reports.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/reports/reports.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/reports/reports.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/reports/reports.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/reports/reports.component.ts ***!
  \*****************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
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

var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/layout/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.scss */ "./src/app/layout/reports/reports.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/layout/reports/reports.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/reports/reports.module.ts ***!
  \**************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_own_fleet_report_own_fleet_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/own-fleet-report/own-fleet-report.component */ "./src/app/layout/reports/components/own-fleet-report/own-fleet-report.component.ts");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/layout/reports/reports-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports.component */ "./src/app/layout/reports/reports.component.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _components_accounts_ledger_report_accounts_ledger_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/accounts-ledger-report/accounts-ledger-report.component */ "./src/app/layout/reports/components/accounts-ledger-report/accounts-ledger-report.component.ts");
/* harmony import */ var _components_dispatch_summary_dispatch_summary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dispatch-summary/dispatch-summary.component */ "./src/app/layout/reports/components/dispatch-summary/dispatch-summary.component.ts");
/* harmony import */ var _components_plant_rate_list_temp_plant_rate_list_temp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/plant-rate-list-temp/plant-rate-list-temp.component */ "./src/app/layout/reports/components/plant-rate-list-temp/plant-rate-list-temp.component.ts");
/* harmony import */ var _components_dispatch_summary_site_wise_dispatch_summary_site_wise_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dispatch-summary-site-wise/dispatch-summary-site-wise.component */ "./src/app/layout/reports/components/dispatch-summary-site-wise/dispatch-summary-site-wise.component.ts");
/* harmony import */ var _components_own_fleet_report_admin_own_fleet_report_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/own-fleet-report-admin/own-fleet-report-admin.component */ "./src/app/layout/reports/components/own-fleet-report-admin/own-fleet-report-admin.component.ts");
/* harmony import */ var _components_items_ledger_report_items_ledger_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/items-ledger-report/items-ledger-report.component */ "./src/app/layout/reports/components/items-ledger-report/items-ledger-report.component.ts");
/* harmony import */ var _components_balance_stock_report_balance_stock_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/balance-stock-report/balance-stock-report.component */ "./src/app/layout/reports/components/balance-stock-report/balance-stock-report.component.ts");
/* harmony import */ var _components_order_ledger_report_order_ledger_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/order-ledger-report/order-ledger-report.component */ "./src/app/layout/reports/components/order-ledger-report/order-ledger-report.component.ts");
/* harmony import */ var _components_scrap_ledger_report_scrap_ledger_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/scrap-ledger-report/scrap-ledger-report.component */ "./src/app/layout/reports/components/scrap-ledger-report/scrap-ledger-report.component.ts");
/* harmony import */ var _components_truck_ledger_report_truck_ledger_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/truck-ledger-report/truck-ledger-report.component */ "./src/app/layout/reports/components/truck-ledger-report/truck-ledger-report.component.ts");
/* harmony import */ var _components_accounts_items_ledger_report_accounts_items_ledger_report_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/accounts-items-ledger-report/accounts-items-ledger-report.component */ "./src/app/layout/reports/components/accounts-items-ledger-report/accounts-items-ledger-report.component.ts");
/* harmony import */ var _components_dealer_wise_purchase_dealer_wise_purchase_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/dealer-wise-purchase/dealer-wise-purchase.component */ "./src/app/layout/reports/components/dealer-wise-purchase/dealer-wise-purchase.component.ts");
/* harmony import */ var _components_tyre_removal_report_tyre_removal_report_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/tyre-removal-report/tyre-removal-report.component */ "./src/app/layout/reports/components/tyre-removal-report/tyre-removal-report.component.ts");
/* harmony import */ var _components_mileage_report_mileage_report_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/mileage-report/mileage-report.component */ "./src/app/layout/reports/components/mileage-report/mileage-report.component.ts");
/* harmony import */ var _components_balance_scrap_report_balance_scrap_report_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/balance-scrap-report/balance-scrap-report.component */ "./src/app/layout/reports/components/balance-scrap-report/balance-scrap-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























// import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
// import * as jsPDF from 'jspdf';
// import 'jspdf-autotable';
var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _reports_component__WEBPACK_IMPORTED_MODULE_7__["ReportsComponent"],
                _components_own_fleet_report_own_fleet_report_component__WEBPACK_IMPORTED_MODULE_2__["OwnFleetReportComponent"],
                _components_accounts_ledger_report_accounts_ledger_report_component__WEBPACK_IMPORTED_MODULE_9__["AccountsLedgerReportComponent"],
                _components_dispatch_summary_dispatch_summary_component__WEBPACK_IMPORTED_MODULE_10__["DispatchSummaryComponent"],
                _components_plant_rate_list_temp_plant_rate_list_temp_component__WEBPACK_IMPORTED_MODULE_11__["PlantRateListTempComponent"],
                _components_dispatch_summary_site_wise_dispatch_summary_site_wise_component__WEBPACK_IMPORTED_MODULE_12__["DispatchSummarySiteWiseComponent"],
                _components_own_fleet_report_admin_own_fleet_report_admin_component__WEBPACK_IMPORTED_MODULE_13__["OwnFleetReportAdminComponent"],
                _components_items_ledger_report_items_ledger_report_component__WEBPACK_IMPORTED_MODULE_14__["ItemsLedgerReportComponent"],
                _components_balance_stock_report_balance_stock_report_component__WEBPACK_IMPORTED_MODULE_15__["BalanceStockReportComponent"],
                _components_order_ledger_report_order_ledger_report_component__WEBPACK_IMPORTED_MODULE_16__["OrderLedgerReportComponent"],
                _components_scrap_ledger_report_scrap_ledger_report_component__WEBPACK_IMPORTED_MODULE_17__["ScrapLedgerReportComponent"],
                _components_truck_ledger_report_truck_ledger_report_component__WEBPACK_IMPORTED_MODULE_18__["TruckLedgerReportComponent"],
                _components_accounts_items_ledger_report_accounts_items_ledger_report_component__WEBPACK_IMPORTED_MODULE_19__["AccountsItemsLedgerReportComponent"],
                _components_dealer_wise_purchase_dealer_wise_purchase_component__WEBPACK_IMPORTED_MODULE_20__["DealerWisePurchaseComponent"],
                _components_tyre_removal_report_tyre_removal_report_component__WEBPACK_IMPORTED_MODULE_21__["TyreRemovalReportComponent"],
                _components_mileage_report_mileage_report_component__WEBPACK_IMPORTED_MODULE_22__["MileageReportComponent"],
                _components_balance_scrap_report_balance_scrap_report_component__WEBPACK_IMPORTED_MODULE_23__["BalanceScrapReportComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                src_app_shared__WEBPACK_IMPORTED_MODULE_8__["PageHeaderModule"],
            ]
        })
    ], ReportsModule);
    return ReportsModule;
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

/***/ "./src/app/shared/services/inventory.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/inventory.service.ts ***!
  \******************************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
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


var InventoryService = /** @class */ (function () {
    function InventoryService(api) {
        this.api = api;
    }
    InventoryService.prototype.getBalanceStock = function (filters) {
        return this.api.get('reportsinv/site_balance_stock', filters);
    };
    InventoryService.prototype.getBalanceScrapStock = function (filters) {
        return this.api.get('reportsinv/site_balance_scrap_stock', filters);
    };
    InventoryService.prototype.getDealerWisePurchase = function (filters) {
        return this.api.get('reportsinv/dealer_wise_purchase', filters);
    };
    InventoryService.prototype.getMilageReport = function (filters) {
        return this.api.get('reportsinv/mileage_report', filters);
    };
    InventoryService.prototype.getTyreRemovalReport = function (filters) {
        return this.api.get('reportsinv/tyre_removal_report', filters);
    };
    InventoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], InventoryService);
    return InventoryService;
}());



/***/ })

}]);
//# sourceMappingURL=reports-reports-module.js.map