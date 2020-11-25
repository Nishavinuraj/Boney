(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analysis-report-analysis-report-module"],{

/***/ "./src/app/layout/analysis-report/analysis-report.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/analysis-report/analysis-report.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/analysis-report/analysis-report.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/analysis-report/analysis-report.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hbmFseXNpcy1yZXBvcnQvYW5hbHlzaXMtcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/analysis-report/analysis-report.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/analysis-report/analysis-report.component.ts ***!
  \*********************************************************************/
/*! exports provided: AnalysisReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisReportComponent", function() { return AnalysisReportComponent; });
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

var AnalysisReportComponent = /** @class */ (function () {
    function AnalysisReportComponent() {
    }
    AnalysisReportComponent.prototype.ngOnInit = function () {
    };
    AnalysisReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analysis-report',
            template: __webpack_require__(/*! ./analysis-report.component.html */ "./src/app/layout/analysis-report/analysis-report.component.html"),
            styles: [__webpack_require__(/*! ./analysis-report.component.scss */ "./src/app/layout/analysis-report/analysis-report.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnalysisReportComponent);
    return AnalysisReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/analysis-report/analysis-report.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/analysis-report/analysis-report.module.ts ***!
  \******************************************************************/
/*! exports provided: AnalysisReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisReportsModule", function() { return AnalysisReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _ega_report_ega_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ega-report/ega-report.component */ "./src/app/layout/analysis-report/ega-report/ega-report.component.ts");
/* harmony import */ var _analysis_report_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analysis-report.routing.module */ "./src/app/layout/analysis-report/analysis-report.routing.module.ts");
/* harmony import */ var _analysis_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./analysis-report.component */ "./src/app/layout/analysis-report/analysis-report.component.ts");
/* harmony import */ var _under_performance_truck_report_under_performance_truck_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./under-performance-truck-report/under-performance-truck-report.component */ "./src/app/layout/analysis-report/under-performance-truck-report/under-performance-truck-report.component.ts");
/* harmony import */ var _monthly_balance_chart_monthly_balance_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./monthly-balance-chart/monthly-balance-chart.component */ "./src/app/layout/analysis-report/monthly-balance-chart/monthly-balance-chart.component.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ng2_auto_complete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-auto-complete */ "./node_modules/ng2-auto-complete/dist/index.js");
/* harmony import */ var ng2_auto_complete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_auto_complete__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AnalysisReportsModule = /** @class */ (function () {
    function AnalysisReportsModule() {
    }
    AnalysisReportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _ega_report_ega_report_component__WEBPACK_IMPORTED_MODULE_5__["EgaReportComponent"],
                _analysis_report_component__WEBPACK_IMPORTED_MODULE_7__["AnalysisReportComponent"],
                _under_performance_truck_report_under_performance_truck_report_component__WEBPACK_IMPORTED_MODULE_8__["UnderPerformanceTruckReportComponent"],
                _monthly_balance_chart_monthly_balance_chart_component__WEBPACK_IMPORTED_MODULE_9__["MonthlyBalanceChartComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _analysis_report_routing_module__WEBPACK_IMPORTED_MODULE_6__["AnalysisReportsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                ng2_auto_complete__WEBPACK_IMPORTED_MODULE_11__["Ng2AutoCompleteModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_10__["ChartsModule"]
            ]
        })
    ], AnalysisReportsModule);
    return AnalysisReportsModule;
}());



/***/ }),

/***/ "./src/app/layout/analysis-report/analysis-report.routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/analysis-report/analysis-report.routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AnalysisReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisReportsRoutingModule", function() { return AnalysisReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ega_report_ega_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ega-report/ega-report.component */ "./src/app/layout/analysis-report/ega-report/ega-report.component.ts");
/* harmony import */ var _analysis_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analysis-report.component */ "./src/app/layout/analysis-report/analysis-report.component.ts");
/* harmony import */ var _under_performance_truck_report_under_performance_truck_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./under-performance-truck-report/under-performance-truck-report.component */ "./src/app/layout/analysis-report/under-performance-truck-report/under-performance-truck-report.component.ts");
/* harmony import */ var _monthly_balance_chart_monthly_balance_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./monthly-balance-chart/monthly-balance-chart.component */ "./src/app/layout/analysis-report/monthly-balance-chart/monthly-balance-chart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _analysis_report_component__WEBPACK_IMPORTED_MODULE_3__["AnalysisReportComponent"],
        children: [
            { path: '', redirectTo: 'ega-report', pathMatch: 'prefix' },
            { path: 'ega-report', component: _ega_report_ega_report_component__WEBPACK_IMPORTED_MODULE_2__["EgaReportComponent"] },
            { path: 'under-performance-truck-report', component: _under_performance_truck_report_under_performance_truck_report_component__WEBPACK_IMPORTED_MODULE_4__["UnderPerformanceTruckReportComponent"] },
            { path: 'monthly-balance-chart', component: _monthly_balance_chart_monthly_balance_chart_component__WEBPACK_IMPORTED_MODULE_5__["MonthlyBalanceChartComponent"] }
        ]
    }
];
var AnalysisReportsRoutingModule = /** @class */ (function () {
    function AnalysisReportsRoutingModule() {
    }
    AnalysisReportsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AnalysisReportsRoutingModule);
    return AnalysisReportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/analysis-report/ega-report/ega-report.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/analysis-report/ega-report/ega-report.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n      <form [formGroup]=\"filterForm\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h4><i class=\"fa fa-book\"></i> EGA Report</h4>\n            <hr />\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Month</label>\n              <select formControlName=\"month\" class=\"form-control\">\n                <option value=\"01\">Jan</option>\n                <option value=\"02\">Feb</option>\n                <option value=\"03\">March</option>\n                <option value=\"04\">April</option>\n                <option value=\"05\">May</option>\n                <option value=\"06\">June</option>\n                <option value=\"07\">July</option>\n                <option value=\"08\">August</option>\n                <option value=\"09\">September</option>\n                <option value=\"10\">October</option>\n                <option value=\"11\">November</option>\n                <option value=\"12\">December</option> \n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Year</label>\n              <select formControlName=\"year\" class=\"form-control\">\n              <option value=\"2018\">2018</option>\n              <option value=\"2019\">2019</option>\n              <option value=\"2020\">2020</option>\n\n            </select>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Select Sites</label>\n              <select formControlName=\"site_name\" class=\"form-control\">\n                  <option value=\"\">All</option>\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\n                  {{ s.branch_name }}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-4 wrapper-right\">\n            <button (click)=\"fetchEgaReport()\" class=\"btn btn-primary\" >\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\n            </button>&nbsp;\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\n          </div>\n        </div>\n        <p>Notes :   Report set on balance. Excellent > 20 %.   Good 15 to 20%. Average less tha 15%</p>\n      </form>\n      <hr />\n      <!-- <ngb-pagination\n          [(page)]=\"pagination.currenPage\"\n          [pageSize]=\"pagination.pageSize\"\n          [collectionSize]=\"pagination.total\"\n          [maxSize]=\"pagination.maxSize\"\n          (pageChange)=\"fetchReport()\"\n        ></ngb-pagination>\n        <p><strong>Total:</strong> {{ pagination.total }}<br /><strong>Records per page:</strong> {{ pagination.pageSize }}</p> -->\n        <div class=\"btn-group btn-group-toggle\" style=\"float: right;margin-bottom: 10px;\" ngbRadioGroup name=\"radioBasic\">\n          <!-- <label class=\"btn-primary\" ngbButtonLabel>\n            <input type=\"radio\" ngbButton  (click)=\"doFilter('all')\" [checked]=\"model.all\" [value]=\"all\"> All\n          </label> -->\n          <label class=\"btn-primary\" ngbButtonLabel>\n            <input type=\"radio\" ngbButton  (click)=\"doFilter('exc')\"  value=\"exc\"> Excellent\n          </label>\n          <label class=\"btn-primary\" ngbButtonLabel>\n            <input type=\"radio\" ngbButton  (click)=\"doFilter('good')\"  value=\"good\"> Good\n          </label>\n          <label class=\"btn-primary\" ngbButtonLabel>\n            <input type=\"radio\" ngbButton  (click)=\"doFilter('avg')\" value=\"avg\"> Average\n          </label>\n        </div>\n        <br/>\n        <div style=\"width:100%;overflow-x: auto;\" >\n        <table class=\"table table-hover table-striped table-bordered table-condensed zui-table\">\n        <thead>\n          <tr>\n            <th>Sites</th>\n            <th>Destination</th>\n            <th>Trips</th>\n            <th>Kms Run.</th>\n            <th>Balance</th>\n            <th>Cost Per KM</th>\n            <th>Value</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr *ngIf=\"loading\">\n            <td colspan=\"7\">\n              <div class=\"showbox\">\n                <div class=\"loader\">\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n                  </svg>\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr *ngFor=\"let report of dataFilter\">\n            <td >{{ report._id.site }}</td>\n            <td>{{ report._id.to }}</td>\n            <td class=\"cell-align\">{{ report.trips }}</td>\n            <td class=\"cell-align\">{{ report.km }}</td>\n            <td class=\"cell-align\">{{ report.balance}}</td>\n            <td class=\"cell-align\">{{ report.costPerkM}}</td>\n            <td class=\"cell-align\">{{ report.value}}</td>\n\n          </tr>\n          \n          <tr *ngIf=\"loaded && dataFilter?.length === 0\">\n            <td align=\"center\" colspan=\"7\">No data available</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n      <!-- <ngb-pagination\n          [(page)]=\"pagination.currenPage\"\n          [pageSize]=\"pagination.pageSize\"\n          [collectionSize]=\"pagination.total\"\n          [maxSize]=\"pagination.maxSize\"\n          (pageChange)=\"fetchReport()\"\n        ></ngb-pagination> -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/analysis-report/ega-report/ega-report.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/analysis-report/ega-report/ega-report.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tbody {\n  display: block;\n  height: 350px;\n  overflow: auto; }\n\nthead, tbody tr {\n  display: table;\n  width: 1200px;\n  table-layout: fixed;\n  /* even columns width , fix width of table too*/ }\n\nthead {\n  width: 1200px;\n  overflow: auto;\n  /* scrollbar is average 1em/16px width, remove it from thead width */ }\n\ntable {\n  width: 1200px;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FuYWx5c2lzLXJlcG9ydC9lZ2EtcmVwb3J0L0Y6XFx0ZXN0aW5nX2RlbGV0ZV9mb2xkZXJcXFRSVUNLX0RFTU9fb2xkR2FuZXNoXFxmcm9udGVuZFxcdGRfZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcYW5hbHlzaXMtcmVwb3J0XFxlZ2EtcmVwb3J0XFxlZ2EtcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWixjQUFhLEVBQUE7O0FBRWpCO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWixtQkFBa0I7RUFBQywrQ0FBQSxFQUFnRDs7QUFFdkU7RUFDSSxhQUFhO0VBQ2IsY0FBYTtFQUNiLG9FQUFBLEVBQXFFOztBQUV6RTtFQUNJLGFBQVk7RUFDWixjQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvYW5hbHlzaXMtcmVwb3J0L2VnYS1yZXBvcnQvZWdhLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxudGJvZHkge1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgaGVpZ2h0OjM1MHB4O1xuICAgIG92ZXJmbG93OmF1dG87XG59XG50aGVhZCwgdGJvZHkgdHIge1xuICAgIGRpc3BsYXk6dGFibGU7XG4gICAgd2lkdGg6MTIwMHB4O1xuICAgIHRhYmxlLWxheW91dDpmaXhlZDsvKiBldmVuIGNvbHVtbnMgd2lkdGggLCBmaXggd2lkdGggb2YgdGFibGUgdG9vKi9cbn1cbnRoZWFkIHtcbiAgICB3aWR0aDogMTIwMHB4O1xuICAgIG92ZXJmbG93OmF1dG87XG4gICAgLyogc2Nyb2xsYmFyIGlzIGF2ZXJhZ2UgMWVtLzE2cHggd2lkdGgsIHJlbW92ZSBpdCBmcm9tIHRoZWFkIHdpZHRoICovXG59XG50YWJsZSB7XG4gICAgd2lkdGg6MTIwMHB4O1xuICAgIG92ZXJmbG93OmF1dG87XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/analysis-report/ega-report/ega-report.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/analysis-report/ega-report/ega-report.component.ts ***!
  \***************************************************************************/
/*! exports provided: EgaReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgaReportComponent", function() { return EgaReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
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






var EgaReportComponent = /** @class */ (function () {
    function EgaReportComponent(api, meta, formBuilder, reportService, toastr) {
        this.api = api;
        this.meta = meta;
        this.formBuilder = formBuilder;
        this.reportService = reportService;
        this.toastr = toastr;
        this.model = 'avg';
        this.loading = false;
        this.loaded = true;
        this.filters = {
            site: '',
            year: '',
            month: ''
        };
        this.usertype = this.meta.getSiteFromStorage().role;
        this.filterForm = this.formBuilder.group({
            site_name: [''],
            year: [''],
            month: ['']
        });
        this.getSites();
    }
    EgaReportComponent.prototype.doFilter = function (value) {
        this.model = value;
        this.apply();
    };
    EgaReportComponent.prototype.apply = function () {
        var dataFilter = [];
        if (this.model == 'exc') {
            this.data.forEach(function (report) {
                if (report.value == 'Excellent') {
                    dataFilter.push(report);
                }
            });
        }
        else if (this.model == 'good') {
            this.data.forEach(function (report) {
                if (report.value == 'Good') {
                    dataFilter.push(report);
                }
            });
        }
        else if (this.model == 'avg') {
            this.data.forEach(function (report) {
                if (report.value == 'Average') {
                    dataFilter.push(report);
                }
            });
        }
        else if (this.model == 'all') {
            dataFilter = this.data;
        }
        this.dataFilter = dataFilter;
    };
    EgaReportComponent.prototype.resetFilters = function () {
        this.filterForm.setValue({
            site: '',
            year: '',
            month: ''
        });
    };
    EgaReportComponent.prototype.fetchEgaReport = function () {
        var _this = this;
        this.model = 'all';
        this.loading = true;
        this.filters.site = this.filterForm.value.site_name;
        this.filters.year = this.filterForm.value.year ? this.filterForm.value.year : new Date().getFullYear();
        this.filters.month = this.filterForm.value.month ? this.filterForm.value.month : new Date().getMonth();
        this.data = [];
        this.dataFilter = [];
        this.reportService.getEgaReport(this.filters).subscribe(function (res) {
            _this.data = res;
            _this.model = 'avg';
            _this.apply();
            _this.loading = false;
        });
    };
    EgaReportComponent.prototype.ngOnInit = function () {
    };
    EgaReportComponent.prototype.getSites = function () {
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
    EgaReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ega-report',
            template: __webpack_require__(/*! ./ega-report.component.html */ "./src/app/layout/analysis-report/ega-report/ega-report.component.html"),
            styles: [__webpack_require__(/*! ./ega-report.component.scss */ "./src/app/layout/analysis-report/ega-report/ega-report.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__["MetaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], EgaReportComponent);
    return EgaReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/analysis-report/monthly-balance-chart/monthly-balance-chart.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/analysis-report/monthly-balance-chart/monthly-balance-chart.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n      <form [formGroup]=\"filterForm\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h4><i class=\"fa fa-book\"></i> Monthly Balance Chart</h4>\n            <hr />\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Year</label>\n              <select formControlName=\"year\" class=\"form-control\">\n              <option value=\"2018\">2018</option>\n              <option value=\"2019\">2019</option>\n              <option value=\"2020\">2020</option>\n            </select>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Select Sites</label>\n              <select formControlName=\"site\" class=\"form-control\">\n                  <option value=\"\">All</option>\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\n                  {{ s.branch_name }}\n                </option>\n              </select>\n            </div>\n          </div>\n          \n\n          <div class=\"col-md-4\">\n            <div class=\"form-group\" style=\"margin-top:30px;\">\n\n            <button (click)=\"fetchReport()\" class=\"btn btn-primary\" >\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\n            </button>&nbsp;\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\n          </div></div>\n        </div>\n      </form>\n      <hr />\n      <div style=\"width:100%;height:400px !important;overflow: auto;\" >\n\n      <canvas *ngIf=\"barChartData?.length\" baseChart \n    [datasets]=\"barChartData\"\n    [labels]=\"barChartLabels\"\n    [options]=\"barChartOptions\"\n    [legend]=\"barChartLegend\"\n    [chartType]=\"barChartType\">\n  </canvas>\n  </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/analysis-report/monthly-balance-chart/monthly-balance-chart.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/analysis-report/monthly-balance-chart/monthly-balance-chart.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hbmFseXNpcy1yZXBvcnQvbW9udGhseS1iYWxhbmNlLWNoYXJ0L21vbnRobHktYmFsYW5jZS1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/analysis-report/monthly-balance-chart/monthly-balance-chart.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/analysis-report/monthly-balance-chart/monthly-balance-chart.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: MonthlyBalanceChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlyBalanceChartComponent", function() { return MonthlyBalanceChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
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






var MonthlyBalanceChartComponent = /** @class */ (function () {
    function MonthlyBalanceChartComponent(api, meta, formBuilder, reportService, toastr) {
        this.api = api;
        this.meta = meta;
        this.formBuilder = formBuilder;
        this.reportService = reportService;
        this.toastr = toastr;
        this.barChartOptions = {
            responsive: true,
        };
        this.barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        /*   public defaultXAxis = [0,0,0,0,0,0,0,0,0,0,0,0]
         */
        this.barChartData = [
        /* { data: [65, 59, 80, 81, 56, 55, 40,80, 81, 56,65, 59], label: 'Series A', stack: 'a' },
        { data: [28, 48, 40, 19, 86, 27, 90,40, 19, 86,28, 48], label: 'Series B', stack: 'a' } */
        ];
        this.model = 'all';
        this.loading = false;
        this.loaded = true;
        this.filters = {
            site: '',
            year: '',
        };
        this.usertype = this.meta.getSiteFromStorage().role;
        this.filterForm = this.formBuilder.group({
            site: [''],
            year: ['']
        });
        this.getSites();
    }
    MonthlyBalanceChartComponent.prototype.resetFilters = function () {
        this.filterForm.setValue({
            site: '',
            year: '',
        });
    };
    MonthlyBalanceChartComponent.prototype.fetchReport = function () {
        var _this = this;
        this.barChartData = [];
        this.filters.year = this.filterForm.value.year ? this.filterForm.value.year : new Date().getFullYear();
        this.filters.site = this.filterForm.value.site;
        this.reportService.getMonthlyBalanceReport(this.filters).subscribe(function (res) {
            _this.data = res;
            var map = new Map();
            _this.data.forEach(function (record) {
                if (!map.get(record['_id']['site'])) {
                    map.set(record['_id']['site'], []);
                }
                var d = {};
                d['month'] = record['_id']['month'];
                d['balance'] = record['balance'];
                map.get(record['_id']['site']).push(d);
            });
            if (map.size > 0) {
                _this.processForChart(map);
            }
            else {
                _this.barChartData.push({ data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'No Data', stack: 'a' });
            }
        });
    };
    MonthlyBalanceChartComponent.prototype.processForChart = function (map) {
        var _this = this;
        map.forEach(function (value, key) {
            var stack = { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: key, stack: 'a' };
            var entValues = map.get(key);
            console.log(entValues);
            entValues.forEach(function (entValue) {
                stack.data[parseInt(entValue['month']) - 1] = parseInt(entValue['balance']);
            });
            console.log(stack);
            _this.barChartData.push(stack);
        });
    };
    MonthlyBalanceChartComponent.prototype.ngOnInit = function () {
    };
    MonthlyBalanceChartComponent.prototype.getSites = function () {
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
    MonthlyBalanceChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monthly-balance-chart',
            template: __webpack_require__(/*! ./monthly-balance-chart.component.html */ "./src/app/layout/analysis-report/monthly-balance-chart/monthly-balance-chart.component.html"),
            styles: [__webpack_require__(/*! ./monthly-balance-chart.component.scss */ "./src/app/layout/analysis-report/monthly-balance-chart/monthly-balance-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__["MetaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], MonthlyBalanceChartComponent);
    return MonthlyBalanceChartComponent;
}());



/***/ }),

/***/ "./src/app/layout/analysis-report/under-performance-truck-report/under-performance-truck-report.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/layout/analysis-report/under-performance-truck-report/under-performance-truck-report.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n      <form [formGroup]=\"filterForm\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h4><i class=\"fa fa-book\"></i> Under Performance Truck Report</h4>\n            <hr />\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Month</label>\n              <select formControlName=\"month\" class=\"form-control\">\n                <option value=\"01\">Jan</option>\n                <option value=\"02\">Feb</option>\n                <option value=\"03\">March</option>\n                <option value=\"04\">April</option>\n                <option value=\"05\">May</option>\n                <option value=\"06\">June</option>\n                <option value=\"07\">July</option>\n                <option value=\"08\">August</option>\n                <option value=\"09\">September</option>\n                <option value=\"10\">October</option>\n                <option value=\"11\">November</option>\n                <option value=\"12\">December</option> \n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Year</label>\n              <select formControlName=\"year\" class=\"form-control\">\n              <option value=\"2018\">2018</option>\n              <option value=\"2019\">2019</option>\n              <option value=\"2020\">2020</option>\n\n            </select>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Select Tyres</label>\n              <select formControlName=\"tyre\" class=\"form-control\">\n                  <option value=\"6\">6</option>\n                  <option value=\"10\">10</option>\n                  <option value=\"12\">12</option>\n                  <option value=\"14\">14</option>\n                  <option value=\"16\">16</option>\n                  <option value=\"18\">18</option>\n\n              </select>\n            </div>\n          </div>\n          \n\n          <div class=\"col-md-4 wrapper-right\">\n            <button (click)=\"fetchReport()\" class=\"btn btn-primary\" >\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\n            </button>&nbsp;\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\n          </div>\n        </div>\n      </form>\n      <hr />\n      {{dataFilter?.length}}\n      <!-- <ngb-pagination\n          [(page)]=\"pagination.currenPage\"\n          [pageSize]=\"pagination.pageSize\"\n          [collectionSize]=\"pagination.total\"\n          [maxSize]=\"pagination.maxSize\"\n          (pageChange)=\"fetchReport()\"\n        ></ngb-pagination>\n        <p><strong>Total:</strong> {{ pagination.total }}<br /><strong>Records per page:</strong> {{ pagination.pageSize }}</p> -->\n        <div class=\"btn-group btn-group-toggle\" style=\"float: right;margin-bottom: 10px;\" ngbRadioGroup name=\"radioBasic\">\n         <!--  <label class=\"btn-primary\" ngbButtonLabel>\n            <input type=\"radio\" ngbButton  (click)=\"doFilter('all')\" [checked]=\"model.all\" [value]=\"all\"> All\n          </label> -->\n          <label class=\"btn-primary\" ngbButtonLabel>\n            <input type=\"radio\" ngbButton  (click)=\"doFilter('up')\"  value=\"up\"> Under Performance\n          </label>\n          <label class=\"btn-primary\" ngbButtonLabel>\n            <input type=\"radio\" ngbButton  (click)=\"doFilter('exc')\" value=\"exc\"> Excellent\n          </label>\n        </div>\n        <div style=\"width:100%;overflow-x: auto;\" >\n\n        <table class=\"table table-hover table-striped table-bordered table-condensed\">\n        <thead>\n          <tr>\n            <th>Truck No</th>\n            <th>Trips</th>\n            <th>Tyres</th>\n            <th>Kms Run.</th>\n            <th>Freight</th>\n            <th>Road Expense</th>\n            <th>Diesel Expense</th>\n            <th>Balance</th>\n            <th>Target</th>\n            <th>Maintenance</th>\n            <th>Value</th>\n\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr *ngIf=\"loading\">\n            <td colspan=\"9\">\n              <div class=\"showbox\">\n                <div class=\"loader\">\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n                  </svg>\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr *ngFor=\"let report of dataFilter\">\n            <td>{{ report._id.truckno }}</td>\n            <td class=\"cell-align\">{{ report.trips }}</td>\n            <td>{{ report._id.tyre }}</td>\n            <td class=\"cell-align\">{{ report.km }}</td>\n            <td class=\"cell-align\">{{ report.earning }}</td>\n            <td class=\"cell-align\">{{ report.expenses}}</td>\n            <td class=\"cell-align\">{{ report.dieselamount}}</td>\n            <td class=\"cell-align\">{{ report.balance}}</td>\n            <td class=\"cell-align\">{{ report.target}}</td>\n            <td class=\"cell-align\">{{ report.maintenance}}</td>\n            <td class=\"cell-align\">{{ report.value}}</td>\n\n          </tr>\n          \n          <tr *ngIf=\"loaded && dataFilter?.length === 0\">\n            <td align=\"center\" colspan=\"6\">No data available</td>\n          </tr>\n        </tbody>\n      </table>\n      </div>\n      <!-- <ngb-pagination\n          [(page)]=\"pagination.currenPage\"\n          [pageSize]=\"pagination.pageSize\"\n          [collectionSize]=\"pagination.total\"\n          [maxSize]=\"pagination.maxSize\"\n          (pageChange)=\"fetchReport()\"\n        ></ngb-pagination> -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/analysis-report/under-performance-truck-report/under-performance-truck-report.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/layout/analysis-report/under-performance-truck-report/under-performance-truck-report.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tbody {\n  display: block;\n  height: 350px;\n  overflow: auto; }\n\nthead, tbody tr {\n  display: table;\n  width: 1200px;\n  table-layout: fixed;\n  /* even columns width , fix width of table too*/ }\n\nthead {\n  width: 1200px;\n  overflow: auto;\n  /* scrollbar is average 1em/16px width, remove it from thead width */ }\n\ntable {\n  width: 1200px;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FuYWx5c2lzLXJlcG9ydC91bmRlci1wZXJmb3JtYW5jZS10cnVjay1yZXBvcnQvRjpcXHRlc3RpbmdfZGVsZXRlX2ZvbGRlclxcVFJVQ0tfREVNT19vbGRHYW5lc2hcXGZyb250ZW5kXFx0ZF9mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxhbmFseXNpcy1yZXBvcnRcXHVuZGVyLXBlcmZvcm1hbmNlLXRydWNrLXJlcG9ydFxcdW5kZXItcGVyZm9ybWFuY2UtdHJ1Y2stcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWixjQUFhLEVBQUE7O0FBRWpCO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWixtQkFBa0I7RUFBQywrQ0FBQSxFQUFnRDs7QUFFdkU7RUFDSSxhQUFhO0VBQ2IsY0FBYTtFQUNiLG9FQUFBLEVBQXFFOztBQUV6RTtFQUNJLGFBQVk7RUFDWixjQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvYW5hbHlzaXMtcmVwb3J0L3VuZGVyLXBlcmZvcm1hbmNlLXRydWNrLXJlcG9ydC91bmRlci1wZXJmb3JtYW5jZS10cnVjay1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRib2R5IHtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIGhlaWdodDozNTBweDtcbiAgICBvdmVyZmxvdzphdXRvO1xufVxudGhlYWQsIHRib2R5IHRyIHtcbiAgICBkaXNwbGF5OnRhYmxlO1xuICAgIHdpZHRoOjEyMDBweDtcbiAgICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7LyogZXZlbiBjb2x1bW5zIHdpZHRoICwgZml4IHdpZHRoIG9mIHRhYmxlIHRvbyovXG59XG50aGVhZCB7XG4gICAgd2lkdGg6IDEyMDBweDtcbiAgICBvdmVyZmxvdzphdXRvO1xuICAgIC8qIHNjcm9sbGJhciBpcyBhdmVyYWdlIDFlbS8xNnB4IHdpZHRoLCByZW1vdmUgaXQgZnJvbSB0aGVhZCB3aWR0aCAqL1xufVxudGFibGUge1xuICAgIHdpZHRoOjEyMDBweDtcbiAgICBvdmVyZmxvdzphdXRvO1xuXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/analysis-report/under-performance-truck-report/under-performance-truck-report.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/layout/analysis-report/under-performance-truck-report/under-performance-truck-report.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: UnderPerformanceTruckReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderPerformanceTruckReportComponent", function() { return UnderPerformanceTruckReportComponent; });
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






var UnderPerformanceTruckReportComponent = /** @class */ (function () {
    function UnderPerformanceTruckReportComponent(api, meta, formBuilder, reportService, toastr) {
        this.api = api;
        this.meta = meta;
        this.formBuilder = formBuilder;
        this.reportService = reportService;
        this.toastr = toastr;
        this.model = 'all';
        this.loading = false;
        this.loaded = true;
        this.filters = {
            tyre: '',
            year: '',
            month: ''
        };
        this.usertype = this.meta.getSiteFromStorage().role;
        this.filterForm = this.formBuilder.group({
            tyre: [''],
            year: [''],
            month: ['']
        });
    }
    UnderPerformanceTruckReportComponent.prototype.resetFilters = function () {
        this.filterForm.setValue({
            tyre: '',
            year: '',
            month: ''
        });
    };
    UnderPerformanceTruckReportComponent.prototype.doFilter = function (value) {
        this.model = value;
        this.dataFilter = [];
        if (value == 'all') {
            this.dataFilter = this.data;
        }
        else if (value == 'up') {
            var df = [];
            this.data.forEach(function (r) {
                if (r.value == "Under Performance") {
                    df.push(r);
                }
            });
            this.dataFilter = df;
        }
        else if (value == 'exc') {
            var df = [];
            this.data.forEach(function (r) {
                if (r.value == "Excellent") {
                    df.push(r);
                }
            });
            this.dataFilter = df;
        }
    };
    UnderPerformanceTruckReportComponent.prototype.fetchReport = function () {
        var _this = this;
        this.model = 'all';
        this.loading = true;
        this.filters.tyre = this.filterForm.value.tyre;
        this.filters.year = this.filterForm.value.year ? this.filterForm.value.year : new Date().getFullYear();
        this.filters.month = this.filterForm.value.month ? this.filterForm.value.month : new Date().getMonth();
        this.data = [];
        this.dataFilter = [];
        this.reportService.getUnderPerformanceTruckReport(this.filters).subscribe(function (res) {
            _this.data = res;
            _this.dataFilter = res;
            _this.loading = false;
        });
    };
    UnderPerformanceTruckReportComponent.prototype.ngOnInit = function () {
    };
    UnderPerformanceTruckReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-under-performance-truck-report',
            template: __webpack_require__(/*! ./under-performance-truck-report.component.html */ "./src/app/layout/analysis-report/under-performance-truck-report/under-performance-truck-report.component.html"),
            styles: [__webpack_require__(/*! ./under-performance-truck-report.component.scss */ "./src/app/layout/analysis-report/under-performance-truck-report/under-performance-truck-report.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__["MetaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], UnderPerformanceTruckReportComponent);
    return UnderPerformanceTruckReportComponent;
}());



/***/ })

}]);
//# sourceMappingURL=analysis-report-analysis-report-module.js.map