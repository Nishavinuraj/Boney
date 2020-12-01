(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["site-data-analysis-site-data-analysis-module"],{

/***/ "./src/app/layout/site-data-analysis/site-data-analysis.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/site-data-analysis/site-data-analysis.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/site-data-analysis/site-data-analysis.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/site-data-analysis/site-data-analysis.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLWRhdGEtYW5hbHlzaXMvc2l0ZS1kYXRhLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/site-data-analysis/site-data-analysis.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/site-data-analysis/site-data-analysis.component.ts ***!
  \***************************************************************************/
/*! exports provided: SiteDataAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteDataAnalysisComponent", function() { return SiteDataAnalysisComponent; });
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

var SiteDataAnalysisComponent = /** @class */ (function () {
    function SiteDataAnalysisComponent() {
    }
    SiteDataAnalysisComponent.prototype.ngOnInit = function () {
    };
    SiteDataAnalysisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-data-analysis',
            template: __webpack_require__(/*! ./site-data-analysis.component.html */ "./src/app/layout/site-data-analysis/site-data-analysis.component.html"),
            styles: [__webpack_require__(/*! ./site-data-analysis.component.scss */ "./src/app/layout/site-data-analysis/site-data-analysis.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteDataAnalysisComponent);
    return SiteDataAnalysisComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-data-analysis/site-data-analysis.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/site-data-analysis/site-data-analysis.module.ts ***!
  \************************************************************************/
/*! exports provided: SiteDataAnalysisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteDataAnalysisModule", function() { return SiteDataAnalysisModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_auto_complete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-auto-complete */ "./node_modules/ng2-auto-complete/dist/index.js");
/* harmony import */ var ng2_auto_complete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_auto_complete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _site_ega_report_site_ega_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./site-ega-report/site-ega-report.component */ "./src/app/layout/site-data-analysis/site-ega-report/site-ega-report.component.ts");
/* harmony import */ var _site_data_analysis_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./site-data-analysis.routing.module */ "./src/app/layout/site-data-analysis/site-data-analysis.routing.module.ts");
/* harmony import */ var _site_data_analysis_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./site-data-analysis.component */ "./src/app/layout/site-data-analysis/site-data-analysis.component.ts");
/* harmony import */ var _site_under_performance_truck_site_under_performance_truck_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./site-under-performance-truck/site-under-performance-truck.component */ "./src/app/layout/site-data-analysis/site-under-performance-truck/site-under-performance-truck.component.ts");
/* harmony import */ var _site_dispatch_summary_site_dispatch_summary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./site-dispatch-summary/site-dispatch-summary.component */ "./src/app/layout/site-data-analysis/site-dispatch-summary/site-dispatch-summary.component.ts");
/* harmony import */ var _site_dispsummary_site_dispsummary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./site-dispsummary/site-dispsummary.component */ "./src/app/layout/site-data-analysis/site-dispsummary/site-dispsummary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var SiteDataAnalysisModule = /** @class */ (function () {
    function SiteDataAnalysisModule() {
    }
    SiteDataAnalysisModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _site_ega_report_site_ega_report_component__WEBPACK_IMPORTED_MODULE_6__["SiteEgaReportComponent"],
                _site_data_analysis_component__WEBPACK_IMPORTED_MODULE_8__["SiteDataAnalysisComponent"],
                _site_under_performance_truck_site_under_performance_truck_component__WEBPACK_IMPORTED_MODULE_9__["SiteUnderPerformanceTruckComponent"],
                _site_dispatch_summary_site_dispatch_summary_component__WEBPACK_IMPORTED_MODULE_10__["SiteDispatchSummaryComponent"],
                _site_dispsummary_site_dispsummary_component__WEBPACK_IMPORTED_MODULE_11__["SiteDispsummaryComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _site_data_analysis_routing_module__WEBPACK_IMPORTED_MODULE_7__["SiteDataAnalysisRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                ng2_auto_complete__WEBPACK_IMPORTED_MODULE_4__["Ng2AutoCompleteModule"]
            ]
        })
    ], SiteDataAnalysisModule);
    return SiteDataAnalysisModule;
}());



/***/ }),

/***/ "./src/app/layout/site-data-analysis/site-data-analysis.routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/site-data-analysis/site-data-analysis.routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: SiteDataAnalysisRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteDataAnalysisRoutingModule", function() { return SiteDataAnalysisRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _site_ega_report_site_ega_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site-ega-report/site-ega-report.component */ "./src/app/layout/site-data-analysis/site-ega-report/site-ega-report.component.ts");
/* harmony import */ var _site_data_analysis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./site-data-analysis.component */ "./src/app/layout/site-data-analysis/site-data-analysis.component.ts");
/* harmony import */ var _site_under_performance_truck_site_under_performance_truck_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site-under-performance-truck/site-under-performance-truck.component */ "./src/app/layout/site-data-analysis/site-under-performance-truck/site-under-performance-truck.component.ts");
/* harmony import */ var _site_dispatch_summary_site_dispatch_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./site-dispatch-summary/site-dispatch-summary.component */ "./src/app/layout/site-data-analysis/site-dispatch-summary/site-dispatch-summary.component.ts");
/* harmony import */ var _site_dispsummary_site_dispsummary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./site-dispsummary/site-dispsummary.component */ "./src/app/layout/site-data-analysis/site-dispsummary/site-dispsummary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _site_data_analysis_component__WEBPACK_IMPORTED_MODULE_3__["SiteDataAnalysisComponent"],
        children: [
            { path: '', redirectTo: 'site-ega-report', pathMatch: 'prefix' },
            { path: 'site-ega-report', component: _site_ega_report_site_ega_report_component__WEBPACK_IMPORTED_MODULE_2__["SiteEgaReportComponent"] },
            { path: 'site-under-performance-truck', component: _site_under_performance_truck_site_under_performance_truck_component__WEBPACK_IMPORTED_MODULE_4__["SiteUnderPerformanceTruckComponent"] },
            { path: 'site-dispatch-summary', component: _site_dispatch_summary_site_dispatch_summary_component__WEBPACK_IMPORTED_MODULE_5__["SiteDispatchSummaryComponent"] },
            { path: 'site-dispsummary', component: _site_dispsummary_site_dispsummary_component__WEBPACK_IMPORTED_MODULE_6__["SiteDispsummaryComponent"] },
        ]
    }
];
var SiteDataAnalysisRoutingModule = /** @class */ (function () {
    function SiteDataAnalysisRoutingModule() {
    }
    SiteDataAnalysisRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SiteDataAnalysisRoutingModule);
    return SiteDataAnalysisRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/site-data-analysis/site-dispatch-summary/site-dispatch-summary.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/layout/site-data-analysis/site-dispatch-summary/site-dispatch-summary.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\"  *ngIf=\"activeTab == 'main_report'\">\n  <div class=\"card-header\">\n    <strong>Dispatch Summary</strong>\n  </div>\n\n  <div class=\"card-body\">\n    <form [formGroup]=\"filterForm\">\n      <div class=\" form-group row\">\n\n        <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Start Date</label>\n              <div class=\"input-group datepicker-input\">\n                <input\n                  class=\"form-control\"\n                  placeholder=\"dd/mm/yyyy\"\n                  name=\"dp\"\n                  formControlName=\"start_date\"\n                  ngbDatepicker\n                  #d=\"ngbDatepicker\"\n                />\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>End Date</label>\n              <div class=\"input-group datepicker-input\">\n                <input\n                  class=\"form-control\"\n                  placeholder=\"dd/mm/yyyy\"\n                  name=\"dp2\"\n                  formControlName=\"end_date\"\n                  ngbDatepicker\n                  #d1=\"ngbDatepicker\"\n                />\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Select Sites</label>\n              <select formControlName=\"site_name\" class=\"form-control\">\n                  <!-- <option value=\"\">All</option> -->\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\n                  {{ s.branch_name }}\n                </option>\n              </select>\n            </div>\n          </div>\n\n      </div>\n    </form>\n  </div>\n  <div class=\"card-footer\">\n    <button type=\"submit\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-success\" (click)=\"fetchReport()\">\n      <i class=\"fa fa-get-pocket\"></i> Fetch</button>\n    <button type=\"reset\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-warning\" (click)=\"resetFilters()\">\n      <i class=\"fa fa-refresh\"></i> Refresh</button>\n\n  </div>\n</div>\n\n\n\n<div class=\"animated fadeIn\">\n  <div class=\"row\" *ngIf=\"activeTab == 'main_report'\">\n    <div class=\"col-lg\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Prepared By Administrator\n        </div>\n        <div class=\"card-body\">\n          <ul class=\"pagination\">\n            <li class=\"page-item\">\n              <a class=\"page-link\" href=\"#\">Prev</a>\n            </li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\">\n              <a class=\"page-link\" href=\"#\">Next</a>\n            </li>\n          </ul>\n\n          <table class=\"table tableFixHead mytable\">\n            <thead>\n              <tr>\n                  <th>Site</th>\n                  <th class=\"cell-align\">Dispatch</th>\n                  <th class=\"cell-align\">Tons</th>\n                  <th class=\"cell-align\">O. Trips</th>\n                  <th class=\"cell-align\">A. Trips</th>\n                  <th class=\"cell-align\">O. Tons</th>\n                  <th class=\"cell-align\">A. Ton</th>\n                  <th class=\"cell-align\">O.Ratio</th>\n                  <th class=\"cell-align\">A.Ratio</th>\n                  <!-- <th class=\"cell-align\">O.Comm</th>\n                  <th class=\"cell-align\">A.Comm</th>\n                  <th class=\"cell-align\">Net Profit</th> -->\n\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let summary of dispatch_summary_data?.result\">\n                <td (click)=\"onSiteSelect(summary)\" class=\"truck-selection\"><i class=\"fa fa-industry\" aria-hidden=\"true\"></i> {{ summary._id ? summary._id : '--' }}</td>\n                <td class=\"cell-align\">{{ summary.trip ? summary.trip : '--'}}</td>\n                <td class=\"cell-align\">{{ (summary.ton ? summary.ton : 0) | number: '1.2-2'}}</td>\n                <td class=\"cell-align\">{{ summary.Co_Trips ? summary.Co_Trips : '--'}}</td>\n                <td class=\"cell-align\">{{ summary.A_Trips ? summary.A_Trips : '--'}}</td>\n                <td class=\"cell-align\">{{ (summary.Co_Tons ? summary.Co_Tons : 0) | number: '1.2-2'}}</td>\n                <td class=\"cell-align\">{{ (summary.A_Tons ? summary.A_Tons : 0) | number: '1.2-2'}}</td>\n                <td class=\"cell-align\">{{ (summary.o_ratio ? summary.o_ratio : 0) | number: '1.2-2' }}%</td>\n                <td class=\"cell-align\">{{ (summary.A_ratio ? summary.A_ratio : 0) | number: '1.2-2' }}%</td>\n                <!-- <td class=\"cell-align\">{{ (summary.Co_profit ? summary.Co_profit : 0) | number: '1.2-2'}}</td>\n                <td class=\"cell-align\">{{ (summary.A_profit ? summary.A_profit : 0) | number: '1.2-2' }}</td>\n                <td class=\"cell-align\">{{ (summary.net_profit ? summary.net_profit : 0) | number: '1.2-2' }}</td> -->\n              </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\">\n              <a class=\"page-link\" href=\"#\">Prev</a>\n            </li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\">\n              <a class=\"page-link\" href=\"#\">Next</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\" *ngIf=\"activeTab == 'secondary_report'\">\n        <p><a class=\"btn btn-info\" href=\"javascript:void(0)\" (click)=\"activeTab = 'main_report'\"><i class=\"fa fa-chevron-circle-left\" aria-hidden=\"true\"></i> Back</a></p>\n          <h4>Site Wise Dispatch Summary <br><i class=\"fa fa-truck\"></i> Truck: {{selected_site_name}}</h4>\n        <table class=\"table table-hover table-striped table-bordered table-condensed\">\n          <thead>\n            <tr>\n              <th>Month</th>\n              <th>Trips</th>\n              <th>Target</th>\n              <th>Achieved</th>\n              <th>Income</th>\n              <th>Expenses</th>\n              <th>Profit</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngIf=\"loading\">\n              <td colspan=\"10\">\n                <div class=\"showbox\">\n                  <div class=\"loader\">\n                    <svg class=\"circular\" viewBox=\"25 25 50 50\">\n                      <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n                    </svg>\n                  </div>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/layout/site-data-analysis/site-dispatch-summary/site-dispatch-summary.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/layout/site-data-analysis/site-dispatch-summary/site-dispatch-summary.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cell-align {\n  text-align: right; }\n\n.truck-selection {\n  cursor: pointer;\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpdGUtZGF0YS1hbmFseXNpcy9zaXRlLWRpc3BhdGNoLXN1bW1hcnkvRDpcXHRlc3RpbmdfZm9sZGVyXFx0aGlydVxcZnJvbnRlbmRcXHRkX2Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNpdGUtZGF0YS1hbmFseXNpc1xcc2l0ZS1kaXNwYXRjaC1zdW1tYXJ5XFxzaXRlLWRpc3BhdGNoLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFlO0VBQ2YsMEJBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLWRhdGEtYW5hbHlzaXMvc2l0ZS1kaXNwYXRjaC1zdW1tYXJ5L3NpdGUtZGlzcGF0Y2gtc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRhYmxlIHtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBvdmVyZmxvdy14OiBhdXRvO1xyXG4vLyAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbi8vIH1cclxuXHJcbi5jZWxsLWFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAudHJ1Y2stc2VsZWN0aW9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/layout/site-data-analysis/site-dispatch-summary/site-dispatch-summary.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/site-data-analysis/site-dispatch-summary/site-dispatch-summary.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SiteDispatchSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteDispatchSummaryComponent", function() { return SiteDispatchSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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







var SiteDispatchSummaryComponent = /** @class */ (function () {
    function SiteDispatchSummaryComponent(meta, api, formBuilder, toastr, reportService, myRouter) {
        this.meta = meta;
        this.api = api;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.reportService = reportService;
        this.myRouter = myRouter;
        this.activeTab = 'main_report';
        this.loading = false;
        this.filters = {
            site_name: '',
            site: '',
            start_date: '',
            end_date: '',
            page: 0
        };
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.dispatch_summary_data = { result: [] };
        this.filterForm = this.formBuilder.group({
            site_name: '',
            site: '',
            start_date: [0],
            end_date: [0]
        });
    }
    SiteDispatchSummaryComponent.prototype.ngOnInit = function () {
        this.getSites();
        // this.fetchReport();
    };
    SiteDispatchSummaryComponent.prototype.onSiteSelect = function (t) {
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
        // this.myRouter.navigate(['/reports/dispatch-summary-site-wise', { site: t._id, start_date: startDt, end_date: endDt,
        //   year: this.filterForm.controls['start_date'].value.year }]);
        this.myRouter.navigate(['/site-data-analysis/site-dispsummary', { site: t._id, start_date: startDt, end_date: endDt,
                year: this.filterForm.controls['start_date'].value.year }]);
    };
    SiteDispatchSummaryComponent.prototype.resetFilters = function () {
    };
    SiteDispatchSummaryComponent.prototype.getTodaysDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    };
    SiteDispatchSummaryComponent.prototype.getTommrowsDate = function () {
        var today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 1);
    };
    SiteDispatchSummaryComponent.prototype.fetchReport = function () {
        var _this = this;
        var startDt = '';
        var endDt = '';
        this.filters.site = this.filterForm.value.site_name;
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
            endDt = this.getTommrowsDate();
            // this.filterForm.controls['end_date'].setValue(endDt);
        }
        console.log('site >>>>>>>>>.', this.filters.site);
        console.log('startDt >>>>>>>>>.', startDt);
        console.log('endDt >>>>>>>>>>>', endDt);
        this.loading = true;
        this.filters.page = this.pagination.currenPage;
        this.filters.site = this.filterForm.value.site_name;
        this.filters.start_date = startDt;
        this.filters.end_date = endDt;
        // console.log('filters');
        // console.log(this.filters);
        this.reportService.getDispatchSummarySite(this.filters).subscribe(function (res) {
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
    SiteDispatchSummaryComponent.prototype.getSites = function () {
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
    SiteDispatchSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-dispatch-summary',
            template: __webpack_require__(/*! ./site-dispatch-summary.component.html */ "./src/app/layout/site-data-analysis/site-dispatch-summary/site-dispatch-summary.component.html"),
            styles: [__webpack_require__(/*! ./site-dispatch-summary.component.scss */ "./src/app/layout/site-data-analysis/site-dispatch-summary/site-dispatch-summary.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_6__["MetaService"],
            src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SiteDispatchSummaryComponent);
    return SiteDispatchSummaryComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-data-analysis/site-dispsummary/site-dispsummary.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/site-data-analysis/site-dispsummary/site-dispsummary.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <a routerLink=\"/reports/dispatch_summary_site\" [routerLinkActive]=\"['router-link-active']\">\n            <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> &nbsp;\n          </a>\n          <span>\n            <i class=\"fa fa-industry\"></i> {{ sitename }}\n          </span>\n\n          <button  style=\"margin-right: 10px\" class=\"btn btn-sm btn-success pull-right\" (click)=\"ExportAsExcel()\">\n              <i class=\"fa fa fa-file-excel-o\"></i> Save As EXCEL</button>\n\n        </div>\n        <div class=\"card-body\">\n          <form [formGroup]=\"form\">\n\n            <div class=\"btn-group btn-group-toggle pull-right\" (change)=\"onReportParameterChange(form.value['filters'])\"\n              ngbRadioGroup name=\"radioBasic\" formControlName=\"filters\">\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\n                <input ngbButton type=\"radio\" value=\"date\"> Date Wise\n              </label>\n              <label ngbButtonLabel class=\"btn-primary btn-sm\">\n                <input ngbButton type=\"radio\" value=\"month\"> Month Wise\n              </label>\n            </div>\n          </form>\n          <div class=\"clearfix\"></div>\n          <br>\n          <table id=\"dailytable\" class=\"table mytable tableFixHead\" *ngIf=\"active_report == 'date'\">\n            <thead>\n              <tr>\n                <th>Date</th>\n                <th>D.I No.</th>\n                <th>Lr no.</th>\n                <th>From</th>\n                <th>Destination</th>\n                <th>Consignee Name</th>\n                <th>Truck no</th>\n                <th>Owner name</th>\n                <th class=\"cell-align\">KM</th>\n                <th class=\"cell-align\">Qty</th>\n                <th class=\"cell-align\">C.Rate</th>\n                <th class=\"cell-align\">C.Freight</th>\n                <th class=\"cell-align\">P.Rate</th>\n                <th class=\"cell-align\">P.Freight</th>\n                <th class=\"cell-align\">Comm</th>\n                <th class=\"cell-align\">GPS</th>\n                <th class=\"cell-align\">D.Qty</th>\n                <th class=\"cell-align\">D.Amt</th>\n                <th class=\"cell-align\">JST Adv</th>\n                <th class=\"cell-align\">Party Adv.</th>\n                <th class=\"cell-align\">Ex. Diesal</th>\n                <th class=\"cell-align\">Ex.Exp</th>\n                <!-- <th class=\"cell-align\">Profit</th> -->\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let report of report_data\">\n                <td>{{ report.LR_Date | date: 'dd/MM/yyyy'}}</td>\n                <td class=\"cell-align\">{{ report.G_I_No }}</td>\n                <td>{{ report.LrNo}}</td>\n                <td>{{ report.From}}</td>\n                <td>{{ report.Destination}}</td>\n                <td>{{ report.Consignne }}</td>\n                <td>{{ report.Truckno }}</td>\n                <td>{{ report.Ownername ? report.Ownername : '-' }}</td>\n                <td class=\"cell-align\">{{ report.km }}</td>\n                <td class=\"cell-align\">{{ report.C_WT}}</td>\n                <td class=\"cell-align\">{{ report.C_Rate ? report.C_Rate : 0 }}</td>\n                <td class=\"cell-align\">{{ report.C_Freight ? report.C_Freight : 0 }}</td>\n                <td class=\"cell-align\">{{ report.P_Rate ? report.P_Rate : 0 }}</td>\n                <td class=\"cell-align\">{{ report.P_Freight ? report.P_Freight : 0 }}</td>\n                <td class=\"cell-align\">{{ report.Commision ? report.Commision : 0 | number : '1.2-2' }}</td>\n                <td class=\"cell-align\">{{ report.gps ? 'yes' : 'no' }}</td>\n                <td class=\"cell-align\">{{ report.D_Qty ? report.D_Qty : 0 | number : '1.2-2' }}</td>\n                <td class=\"cell-align\">{{ report.D_Amt ? report.D_Amt : 0 }}</td>\n                <td class=\"cell-align\">{{ report.JSTC_Adv? report.JSTC_Adv : 0 | number : '1.2-2'  }}</td>\n                <td class=\"cell-align\">{{ report.Party_Adv? report.Party_Adv : 0 | number : '1.2-2'}}</td>\n                <td class=\"cell-align\">{{ 0 }}</td>\n                <td class=\"cell-align\">{{ 0 }}</td>\n                <!-- <td class=\"cell-align\">{{ report.Profit ? report.Profit : 0 | number : '1.2-2' }}</td> -->\n              </tr>\n            </tbody>\n          </table>\n          <table class=\"table mytable tableFixHead\" *ngIf=\"active_report == 'month'\">\n            <thead>\n              <tr>\n                <th>Month</th>\n                <th class=\"cell-align\">Dispatch</th>\n                <th class=\"cell-align\">Tons</th>\n                <th class=\"cell-align\">OT</th>\n                <th class=\"cell-align\">AT</th>\n                <th class=\"cell-align\">CTons</th>\n                <th class=\"cell-align\">ATons</th>\n                <th class=\"cell-align\">C.Ratio</th>\n                <th class=\"cell-align\">ARAtio</th>\n                <!-- <th class=\"cell-align\">O.Comm</th>\n                <th class=\"cell-align\">A.Comm</th>\n                <th class=\"cell-align\">Net Profit</th> -->\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let report of report_data_monthly\">\n                <td>{{ report.month}}</td>\n                <td class=\"cell-align\">{{ report.trips}}</td>\n                <td class=\"cell-align\">{{ report.tons.toFixed(2)}}</td>\n                <td class=\"cell-align\">{{ report.OT}}</td>\n                <td class=\"cell-align\">{{ report.AT }}</td>\n                <td class=\"cell-align\">{{ report.CTons.toFixed(2)}}</td>\n                <td class=\"cell-align\">{{ report.ATons.toFixed(2) }}</td>\n                <td class=\"cell-align\">{{ report.o_ratio.toFixed(2)}}%</td>\n                <td class=\"cell-align\">{{ report.a_ratio | number : '1.2-2' }}%</td>\n                <!-- <td class=\"cell-align\">{{ report.Co_profit.toFixed(2) }}</td>\n                <td class=\"cell-align\">{{ report.A_profit.toFixed(2) }}</td>\n                <td class=\"cell-align\">{{ report.net_profit.toFixed(2) }}</td> -->\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/layout/site-data-analysis/site-dispsummary/site-dispsummary.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/site-data-analysis/site-dispsummary/site-dispsummary.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLWRhdGEtYW5hbHlzaXMvc2l0ZS1kaXNwc3VtbWFyeS9zaXRlLWRpc3BzdW1tYXJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/site-data-analysis/site-dispsummary/site-dispsummary.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/site-data-analysis/site-dispsummary/site-dispsummary.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SiteDispsummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteDispsummaryComponent", function() { return SiteDispsummaryComponent; });
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






var SiteDispsummaryComponent = /** @class */ (function () {
    function SiteDispsummaryComponent(route, api, reportService, formBuilder, excelService) {
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
    SiteDispsummaryComponent.prototype.ngOnInit = function () {
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
    SiteDispsummaryComponent.prototype.onReportParameterChange = function (val) {
        console.log(val);
        this.active_report = val;
    };
    SiteDispsummaryComponent.prototype.fetchhData = function () {
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
    SiteDispsummaryComponent.prototype.fetchMonthWiseData = function () {
        var _this = this;
        this.mFilters.site = this.route.snapshot.paramMap.get('site');
        this.mFilters.year = '2020';
        // this.mFilters.year = this.route.snapshot.paramMap.get['end_date'].value.year;
        // console.log('monthly report filter');
        // console.log(this.mFilters);
        this.reportService.getDispatchSummarySiteWiseMonthly(this.mFilters).subscribe(function (res) {
            // console.log('monthly report');
            // console.log(res);
            _this.report_data_monthly = res;
        }, function (err) {
        });
    };
    SiteDispsummaryComponent.prototype.ExportAsExcel = function () {
        if (this.active_report === 'date') {
            this.excelService.exportAsExcelFile(this.report_data, this.sitename + '_dispatch_summary');
        }
        else {
            this.excelService.exportAsExcelFile(this.report_data_monthly, this.sitename + '_dispatch_summary');
        }
    };
    SiteDispsummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-dispsummary',
            template: __webpack_require__(/*! ./site-dispsummary.component.html */ "./src/app/layout/site-data-analysis/site-dispsummary/site-dispsummary.component.html"),
            styles: [__webpack_require__(/*! ./site-dispsummary.component.scss */ "./src/app/layout/site-data-analysis/site-dispsummary/site-dispsummary.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"]])
    ], SiteDispsummaryComponent);
    return SiteDispsummaryComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-data-analysis/site-ega-report/site-ega-report.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/site-data-analysis/site-ega-report/site-ega-report.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n      <form [formGroup]=\"filterForm\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h4><i class=\"fa fa-book\"></i> EGA Report</h4>\n            <hr />\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Month</label>\n              <select formControlName=\"month\" class=\"form-control\">\n                <option value=\"01\">Jan</option>\n                <option value=\"02\">Feb</option>\n                <option value=\"03\">March</option>\n                <option value=\"04\">April</option>\n                <option value=\"05\">May</option>\n                <option value=\"06\">June</option>\n                <option value=\"07\">July</option>\n                <option value=\"08\">August</option>\n                <option value=\"09\">September</option>\n                <option value=\"10\">October</option>\n                <option value=\"11\">November</option>\n                <option value=\"12\">December</option> \n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Year</label>\n              <select formControlName=\"year\" class=\"form-control\">\n              <option value=\"2018\">2018</option>\n              <option value=\"2019\">2019</option>\n              <option value=\"2020\">2020</option>\n\n            </select>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Select Sites</label>\n              <select formControlName=\"site_name\" class=\"form-control\">\n                  <!-- <option value=\"\">All</option> -->\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\n                  {{ s.branch_name }}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-4 wrapper-right\">\n            <button (click)=\"fetchEgaReport()\" class=\"btn btn-primary\" >\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\n            </button>&nbsp;\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\n          </div>\n        </div>\n        <p>Notes :   Report set on balance. Excellent > 20 %.   Good 15 to 20%. Average less tha 15%</p>\n      </form>\n      <hr />\n      <!-- <ngb-pagination\n          [(page)]=\"pagination.currenPage\"\n          [pageSize]=\"pagination.pageSize\"\n          [collectionSize]=\"pagination.total\"\n          [maxSize]=\"pagination.maxSize\"\n          (pageChange)=\"fetchReport()\"\n        ></ngb-pagination>\n        <p><strong>Total:</strong> {{ pagination.total }}<br /><strong>Records per page:</strong> {{ pagination.pageSize }}</p> -->\n        <div class=\"btn-group btn-group-toggle\" style=\"float: right;margin-bottom: 10px;\" ngbRadioGroup name=\"radioBasic\">\n          <!-- <label class=\"btn-primary\" ngbButtonLabel>\n            <input type=\"radio\" ngbButton  (click)=\"doFilter('all')\" [checked]=\"model.all\" [value]=\"all\"> All\n          </label> -->\n          <label class=\"btn-primary\" ngbButtonLabel>\n            <input type=\"radio\" ngbButton  (click)=\"doFilter('exc')\"  value=\"exc\"> Excellent\n          </label>\n          <label class=\"btn-primary\" ngbButtonLabel>\n            <input type=\"radio\" ngbButton  (click)=\"doFilter('good')\"  value=\"good\"> Good\n          </label>\n          <label class=\"btn-primary\" ngbButtonLabel>\n            <input type=\"radio\" ngbButton  (click)=\"doFilter('avg')\" value=\"avg\"> Average\n          </label>\n        </div>\n        <br/>\n        <div style=\"width:100%;overflow-x: auto;\" >\n        <table class=\"table table-hover table-striped table-bordered table-condensed zui-table\">\n        <thead>\n          <tr>\n            <th>Sites</th>\n            <th>Destination</th>\n            <th>Trips</th>\n            <th>Kms Run.</th>\n            <th>Balance</th>\n            <th>Cost Per KM</th>\n            <th>Value</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr *ngIf=\"loading\">\n            <td colspan=\"7\">\n              <div class=\"showbox\">\n                <div class=\"loader\">\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n                  </svg>\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr *ngFor=\"let report of dataFilter\">\n            <td >{{ report._id.site }}</td>\n            <td>{{ report._id.to }}</td>\n            <td class=\"cell-align\">{{ report.trips }}</td>\n            <td class=\"cell-align\">{{ report.km }}</td>\n            <td class=\"cell-align\">{{ report.balance}}</td>\n            <td class=\"cell-align\">{{ report.costPerkM}}</td>\n            <td class=\"cell-align\">{{ report.value}}</td>\n\n          </tr>\n          \n          <tr *ngIf=\"loaded && dataFilter?.length === 0\">\n            <td align=\"center\" colspan=\"7\">No data available</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n      <!-- <ngb-pagination\n          [(page)]=\"pagination.currenPage\"\n          [pageSize]=\"pagination.pageSize\"\n          [collectionSize]=\"pagination.total\"\n          [maxSize]=\"pagination.maxSize\"\n          (pageChange)=\"fetchReport()\"\n        ></ngb-pagination> -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/site-data-analysis/site-ega-report/site-ega-report.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/site-data-analysis/site-ega-report/site-ega-report.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tbody {\n  display: block;\n  height: 350px;\n  overflow: auto; }\n\nthead, tbody tr {\n  display: table;\n  width: 1200px;\n  table-layout: fixed;\n  /* even columns width , fix width of table too*/ }\n\nthead {\n  width: 1200px;\n  overflow: auto;\n  /* scrollbar is average 1em/16px width, remove it from thead width */ }\n\ntable {\n  width: 1200px;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpdGUtZGF0YS1hbmFseXNpcy9zaXRlLWVnYS1yZXBvcnQvRDpcXHRlc3RpbmdfZm9sZGVyXFx0aGlydVxcZnJvbnRlbmRcXHRkX2Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNpdGUtZGF0YS1hbmFseXNpc1xcc2l0ZS1lZ2EtcmVwb3J0XFxzaXRlLWVnYS1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLGNBQWEsRUFBQTs7QUFFakI7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLG1CQUFrQjtFQUFDLCtDQUFBLEVBQWdEOztBQUV2RTtFQUNJLGFBQWE7RUFDYixjQUFhO0VBQ2Isb0VBQUEsRUFBcUU7O0FBRXpFO0VBQ0ksYUFBWTtFQUNaLGNBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLWRhdGEtYW5hbHlzaXMvc2l0ZS1lZ2EtcmVwb3J0L3NpdGUtZWdhLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG50Ym9keSB7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgaGVpZ2h0OjM1MHB4O1xyXG4gICAgb3ZlcmZsb3c6YXV0bztcclxufVxyXG50aGVhZCwgdGJvZHkgdHIge1xyXG4gICAgZGlzcGxheTp0YWJsZTtcclxuICAgIHdpZHRoOjEyMDBweDtcclxuICAgIHRhYmxlLWxheW91dDpmaXhlZDsvKiBldmVuIGNvbHVtbnMgd2lkdGggLCBmaXggd2lkdGggb2YgdGFibGUgdG9vKi9cclxufVxyXG50aGVhZCB7XHJcbiAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6YXV0bztcclxuICAgIC8qIHNjcm9sbGJhciBpcyBhdmVyYWdlIDFlbS8xNnB4IHdpZHRoLCByZW1vdmUgaXQgZnJvbSB0aGVhZCB3aWR0aCAqL1xyXG59XHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOjEyMDBweDtcclxuICAgIG92ZXJmbG93OmF1dG87XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/site-data-analysis/site-ega-report/site-ega-report.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/site-data-analysis/site-ega-report/site-ega-report.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SiteEgaReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteEgaReportComponent", function() { return SiteEgaReportComponent; });
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






var SiteEgaReportComponent = /** @class */ (function () {
    function SiteEgaReportComponent(api, meta, formBuilder, reportService, toastr) {
        this.api = api;
        this.meta = meta;
        this.formBuilder = formBuilder;
        this.reportService = reportService;
        this.toastr = toastr;
        this.model = 'avg';
        this.loading = false;
        this.loaded = true;
        this.filters = {
            site_name: '',
            site: '',
            year: '',
            month: ''
        };
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        this.filterForm = this.formBuilder.group({
            site_name: [''],
            year: [''],
            month: ['']
        });
        this.getSites();
    }
    SiteEgaReportComponent.prototype.doFilter = function (value) {
        this.model = value;
        this.apply();
    };
    SiteEgaReportComponent.prototype.apply = function () {
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
    SiteEgaReportComponent.prototype.resetFilters = function () {
        this.filterForm.setValue({
            site_name: '',
            site: '',
            year: '',
            month: ''
        });
    };
    SiteEgaReportComponent.prototype.fetchEgaReport = function () {
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
    SiteEgaReportComponent.prototype.ngOnInit = function () {
    };
    //   getSites() {
    //     this.meta.getSites().subscribe((res: any) => {
    //         this.sites = res;
    //         if (this.usertype === 'ADMIN') {
    //             this.filterForm.controls['site_name'].setValue('');
    //         } else {
    //             this.filterForm.controls['site_name'].setValue('');
    //         }
    //     }, err => {
    //     });
    // }
    SiteEgaReportComponent.prototype.getSites = function () {
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
    SiteEgaReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-ega-report',
            template: __webpack_require__(/*! ./site-ega-report.component.html */ "./src/app/layout/site-data-analysis/site-ega-report/site-ega-report.component.html"),
            styles: [__webpack_require__(/*! ./site-ega-report.component.scss */ "./src/app/layout/site-data-analysis/site-ega-report/site-ega-report.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__["MetaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], SiteEgaReportComponent);
    return SiteEgaReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/site-data-analysis/site-under-performance-truck/site-under-performance-truck.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/layout/site-data-analysis/site-under-performance-truck/site-under-performance-truck.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\n      <form [formGroup]=\"filterForm\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h4><i class=\"fa fa-book\"></i> Under Performance Truck Report</h4>\n            <hr />\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Month</label>\n              <select formControlName=\"month\" class=\"form-control\">\n                <option value=\"01\">Jan</option>\n                <option value=\"02\">Feb</option>\n                <option value=\"03\">March</option>\n                <option value=\"04\">April</option>\n                <option value=\"05\">May</option>\n                <option value=\"06\">June</option>\n                <option value=\"07\">July</option>\n                <option value=\"08\">August</option>\n                <option value=\"09\">September</option>\n                <option value=\"10\">October</option>\n                <option value=\"11\">November</option>\n                <option value=\"12\">December</option> \n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Year</label>\n              <select formControlName=\"year\" class=\"form-control\">\n              <option value=\"2018\">2018</option>\n              <option value=\"2019\">2019</option>\n              <option value=\"2020\">2020</option>\n\n            </select>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Select Sites</label>\n              <select formControlName=\"site_name\" class=\"form-control\">\n                  <!-- <option value=\"\">All</option> -->\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\n                  {{ s.branch_name }}\n                </option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <label>Select Tyres</label>\n              <select formControlName=\"tyre\" class=\"form-control\">\n                  <option value=\"6\">6</option>\n                  <option value=\"10\">10</option>\n                  <option value=\"12\">12</option>\n                  <option value=\"14\">14</option>\n                  <option value=\"16\">16</option>\n                  <option value=\"18\">18</option>\n\n              </select>\n            </div>\n          </div>\n          \n\n          <div class=\"col-md-4 wrapper-right\">\n            <button (click)=\"fetchReport()\" class=\"btn btn-primary\" >\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\n            </button>&nbsp;\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\n          </div>\n        </div>\n      </form>\n      <hr />\n      {{dataFilter?.length}}\n      <!-- <ngb-pagination\n          [(page)]=\"pagination.currenPage\"\n          [pageSize]=\"pagination.pageSize\"\n          [collectionSize]=\"pagination.total\"\n          [maxSize]=\"pagination.maxSize\"\n          (pageChange)=\"fetchReport()\"\n        ></ngb-pagination>\n        <p><strong>Total:</strong> {{ pagination.total }}<br /><strong>Records per page:</strong> {{ pagination.pageSize }}</p> -->\n        <div class=\"btn-group btn-group-toggle\" style=\"float: right;margin-bottom: 10px;\" ngbRadioGroup name=\"radioBasic\">\n         <!--  <label class=\"btn-primary\" ngbButtonLabel>\n            <input type=\"radio\" ngbButton  (click)=\"doFilter('all')\" [checked]=\"model.all\" [value]=\"all\"> All\n          </label> -->\n          <label class=\"btn-primary\" ngbButtonLabel>\n            <input type=\"radio\" ngbButton  (click)=\"doFilter('up')\"  value=\"up\"> Under Performance\n          </label>\n          <label class=\"btn-primary\" ngbButtonLabel>\n            <input type=\"radio\" ngbButton  (click)=\"doFilter('exc')\" value=\"exc\"> Excellent\n          </label>\n        </div>\n        <div style=\"width:100%;overflow-x: auto;\" >\n\n        <table class=\"table table-hover table-striped table-bordered table-condensed\">\n        <thead>\n          <tr>\n            <th>Truck No</th>\n            <th>Trips</th>\n            <th>Tyres</th>\n            <th>Kms Run.</th>\n            <th>Freight</th>\n            <th>Road Expense</th>\n            <th>Diesel Expense</th>\n            <th>Balance</th>\n            <th>Target</th>\n            <th>Maintenance</th>\n            <th>Value</th>\n\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr *ngIf=\"loading\">\n            <td colspan=\"9\">\n              <div class=\"showbox\">\n                <div class=\"loader\">\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n                  </svg>\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr *ngFor=\"let report of dataFilter\">\n            <td>{{ report._id.truckno }}</td>\n            <td class=\"cell-align\">{{ report.trips }}</td>\n            <td>{{ report._id.tyre }}</td>\n            <td class=\"cell-align\">{{ report.km }}</td>\n            <td class=\"cell-align\">{{ report.earning }}</td>\n            <td class=\"cell-align\">{{ report.expenses}}</td>\n            <td class=\"cell-align\">{{ report.dieselamount}}</td>\n            <td class=\"cell-align\">{{ report.balance}}</td>\n            <td class=\"cell-align\">{{ report.target}}</td>\n            <td class=\"cell-align\">{{ report.maintenance}}</td>\n            <td class=\"cell-align\">{{ report.value}}</td>\n\n          </tr>\n          \n          <tr *ngIf=\"loaded && dataFilter?.length === 0\">\n            <td align=\"center\" colspan=\"6\">No data available</td>\n          </tr>\n        </tbody>\n      </table>\n      </div>\n      <!-- <ngb-pagination\n          [(page)]=\"pagination.currenPage\"\n          [pageSize]=\"pagination.pageSize\"\n          [collectionSize]=\"pagination.total\"\n          [maxSize]=\"pagination.maxSize\"\n          (pageChange)=\"fetchReport()\"\n        ></ngb-pagination> -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/site-data-analysis/site-under-performance-truck/site-under-performance-truck.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/layout/site-data-analysis/site-under-performance-truck/site-under-performance-truck.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tbody {\n  display: block;\n  height: 350px;\n  overflow: auto; }\n\nthead, tbody tr {\n  display: table;\n  width: 1200px;\n  table-layout: fixed;\n  /* even columns width , fix width of table too*/ }\n\nthead {\n  width: 1200px;\n  overflow: auto;\n  /* scrollbar is average 1em/16px width, remove it from thead width */ }\n\ntable {\n  width: 1200px;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpdGUtZGF0YS1hbmFseXNpcy9zaXRlLXVuZGVyLXBlcmZvcm1hbmNlLXRydWNrL0Q6XFx0ZXN0aW5nX2ZvbGRlclxcdGhpcnVcXGZyb250ZW5kXFx0ZF9mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxzaXRlLWRhdGEtYW5hbHlzaXNcXHNpdGUtdW5kZXItcGVyZm9ybWFuY2UtdHJ1Y2tcXHNpdGUtdW5kZXItcGVyZm9ybWFuY2UtdHJ1Y2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLGNBQWEsRUFBQTs7QUFFakI7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLG1CQUFrQjtFQUFDLCtDQUFBLEVBQWdEOztBQUV2RTtFQUNJLGFBQWE7RUFDYixjQUFhO0VBQ2Isb0VBQUEsRUFBcUU7O0FBRXpFO0VBQ0ksYUFBWTtFQUNaLGNBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaXRlLWRhdGEtYW5hbHlzaXMvc2l0ZS11bmRlci1wZXJmb3JtYW5jZS10cnVjay9zaXRlLXVuZGVyLXBlcmZvcm1hbmNlLXRydWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnRib2R5IHtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBoZWlnaHQ6MzUwcHg7XHJcbiAgICBvdmVyZmxvdzphdXRvO1xyXG59XHJcbnRoZWFkLCB0Ym9keSB0ciB7XHJcbiAgICBkaXNwbGF5OnRhYmxlO1xyXG4gICAgd2lkdGg6MTIwMHB4O1xyXG4gICAgdGFibGUtbGF5b3V0OmZpeGVkOy8qIGV2ZW4gY29sdW1ucyB3aWR0aCAsIGZpeCB3aWR0aCBvZiB0YWJsZSB0b28qL1xyXG59XHJcbnRoZWFkIHtcclxuICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICBvdmVyZmxvdzphdXRvO1xyXG4gICAgLyogc2Nyb2xsYmFyIGlzIGF2ZXJhZ2UgMWVtLzE2cHggd2lkdGgsIHJlbW92ZSBpdCBmcm9tIHRoZWFkIHdpZHRoICovXHJcbn1cclxudGFibGUge1xyXG4gICAgd2lkdGg6MTIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6YXV0bztcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/site-data-analysis/site-under-performance-truck/site-under-performance-truck.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/layout/site-data-analysis/site-under-performance-truck/site-under-performance-truck.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: SiteUnderPerformanceTruckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteUnderPerformanceTruckComponent", function() { return SiteUnderPerformanceTruckComponent; });
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






var SiteUnderPerformanceTruckComponent = /** @class */ (function () {
    function SiteUnderPerformanceTruckComponent(api, meta, formBuilder, reportService, toastr) {
        this.api = api;
        this.meta = meta;
        this.formBuilder = formBuilder;
        this.reportService = reportService;
        this.toastr = toastr;
        this.model = 'all';
        this.loading = false;
        this.loaded = true;
        this.filters = {
            site_name: '',
            site: '',
            tyre: '',
            year: '',
            month: ''
        };
        this.usertype = this.meta.getSiteFromStorage().role;
        this.filterForm = this.formBuilder.group({
            site_name: [''],
            tyre: [''],
            year: [''],
            month: ['']
        });
        this.getSites();
    }
    SiteUnderPerformanceTruckComponent.prototype.resetFilters = function () {
        this.filterForm.setValue({
            site_name: '',
            site: '',
            tyre: '',
            year: '',
            month: ''
        });
    };
    SiteUnderPerformanceTruckComponent.prototype.doFilter = function (value) {
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
    SiteUnderPerformanceTruckComponent.prototype.fetchReport = function () {
        var _this = this;
        this.model = 'all';
        this.loading = true;
        this.filters.site = this.filterForm.value.site_name;
        this.filters.tyre = this.filterForm.value.tyre;
        this.filters.year = this.filterForm.value.year ? this.filterForm.value.year : new Date().getFullYear();
        this.filters.month = this.filterForm.value.month ? this.filterForm.value.month : new Date().getMonth();
        this.data = [];
        this.dataFilter = [];
        this.reportService.getUnderPerformanceTruckReportSite(this.filters).subscribe(function (res) {
            _this.data = res;
            _this.dataFilter = res;
            _this.loading = false;
        });
    };
    SiteUnderPerformanceTruckComponent.prototype.ngOnInit = function () {
    };
    SiteUnderPerformanceTruckComponent.prototype.getSites = function () {
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
    SiteUnderPerformanceTruckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-under-performance-truck',
            template: __webpack_require__(/*! ./site-under-performance-truck.component.html */ "./src/app/layout/site-data-analysis/site-under-performance-truck/site-under-performance-truck.component.html"),
            styles: [__webpack_require__(/*! ./site-under-performance-truck.component.scss */ "./src/app/layout/site-data-analysis/site-under-performance-truck/site-under-performance-truck.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__["MetaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], SiteUnderPerformanceTruckComponent);
    return SiteUnderPerformanceTruckComponent;
}());



/***/ })

}]);
//# sourceMappingURL=site-data-analysis-site-data-analysis-module.js.map