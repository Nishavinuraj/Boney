(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/dashboard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/dashboard.service.ts ***!
  \******************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
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


var DashboardService = /** @class */ (function () {
    function DashboardService(api) {
        this.api = api;
    }
    DashboardService.prototype.getItemCategoryList = function () {
        return this.api.get('dashboard/itemcategoryslist');
    };
    DashboardService.prototype.getUnitList = function () {
        return this.api.get('dashboard/unitslist');
    };
    DashboardService.prototype.getProductList = function () {
        return this.api.get('dashboard/productslist');
    };
    DashboardService.prototype.getProducttypeList = function () {
        return this.api.get('dashboard/producttypeslist');
    };
    DashboardService.prototype.getItemtypeList = function () {
        return this.api.get('dashboard/itemtypeslist');
    };
    DashboardService.prototype.getGodownList = function () {
        return this.api.get('dashboard/godownslist');
    };
    DashboardService.prototype.getHSNcodeList = function () {
        return this.api.get('dashboard/hsncodeslist');
    };
    DashboardService.prototype.getTyreList = function () {
        return this.api.get('dashboard/tyreslist');
    };
    DashboardService.prototype.getTyrePositionList = function () {
        return this.api.get('dashboard/tyrepositionslist');
    };
    DashboardService.prototype.getTruckList = function () {
        return this.api.get('dashboard/truckslist');
    };
    DashboardService.prototype.getSiteTruckPostion = function (filters) {
        return this.api.get('reports/sitewise_summary', filters);
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/shared/services/estimates.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/estimates.service.ts ***!
  \******************************************************/
/*! exports provided: EstimateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateService", function() { return EstimateService; });
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


var EstimateService = /** @class */ (function () {
    function EstimateService(api) {
        this.api = api;
    }
    EstimateService.prototype.getCreatedEstimates = function () {
        return this.api.get('estimates/list_created');
    };
    EstimateService.prototype.getEstimateById = function (id) {
        return this.api.get('estimates/find/' + id);
    };
    EstimateService.prototype.getSubmissionOfVendor = function (eid, vendor) {
        return this.api.get('estimates/find-submission/' + eid + "/" + vendor);
    };
    EstimateService.prototype.addEstimate = function (data) {
        return this.api.post('estimates/create_estimate', data);
    };
    EstimateService.prototype.submitEstimate = function (data) {
        return this.api.post('estimates/submit', data);
    };
    EstimateService.prototype.getEstimatesSubmisionById = function (id) {
        return this.api.get('estimates/find_submission/' + id);
    };
    EstimateService.prototype.getEstimatesSubmisions = function () {
        return this.api.get('estimates/list_submissions');
    };
    EstimateService.prototype.updateEstimateSubmission = function (id) {
        return this.api.put('estimates/update/submission/' + id, '');
    };
    EstimateService.prototype.rejectEstimateSubmission = function (id) {
        return this.api.put('estimates/reject/submission/' + id, '');
    };
    EstimateService.prototype.getEstimatesProdSubmisions = function (id) {
        return this.api.get('estimates/list_submissions/' + id);
    };
    EstimateService.prototype.delete = function (id) {
        return this.api.delete('estimates/delete/' + id);
    };
    EstimateService.prototype.update = function (id, data) {
        return this.api.put('estimates/update/' + id, data);
    };
    EstimateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], EstimateService);
    return EstimateService;
}());



/***/ }),

/***/ "./src/app/shared/services/reports.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/reports.service.ts ***!
  \****************************************************/
/*! exports provided: ReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsService", function() { return ReportsService; });
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


var ReportsService = /** @class */ (function () {
    function ReportsService(api) {
        this.api = api;
    }
    ReportsService.prototype.getAllSite = function () {
        return this.api.get('plant_rate/get_all_site');
    };
    ReportsService.prototype.getEgaReport = function (filters) {
        return this.api.get('reports/ega', filters);
    };
    ReportsService.prototype.getTruckDestinationDetails = function (truck) {
        return this.api.get('reports/truck_dest_details', { truckno: truck });
    };
    ReportsService.prototype.getMaxLrno = function (siteValue) {
        return this.api.get('reports/max_lrno', { site: siteValue });
    };
    ReportsService.prototype.getMonthlyBalanceReport = function (filters) {
        return this.api.get('reports/monthly-balance-chart', filters);
    };
    ReportsService.prototype.getUnderPerformanceTruckReport = function (filters) {
        return this.api.get('reports/under-performance-truck-report', filters);
    };
    ReportsService.prototype.getUnderPerformanceTruckReportSite = function (filters) {
        return this.api.get('reports/under-performance-truck-report-site', filters);
    };
    ReportsService.prototype.getDestinationBySite = function (filters) {
        return this.api.get('plant_rate/get_destination_by_site', filters);
    };
    ReportsService.prototype.getDispatchSummary = function (filters) {
        return this.api.get('reports/dispatch_summary', filters);
    };
    ReportsService.prototype.getDispatchSummarySite = function (filters) {
        return this.api.get('reports/dispatch_summary_site', filters);
    };
    ReportsService.prototype.getDispatchSummarySiteWise = function (filters) {
        return this.api.get('reports/dispatch_summary_site_wise', filters);
    };
    ReportsService.prototype.getDispatchSummarySiteWiseMonthly = function (filters) {
        return this.api.get('reports/dispatch_summary_site_wise_monthly', filters);
    };
    ReportsService.prototype.getOwnFleetReportBySite = function (filters) {
        return this.api.get('reports/own_fleet_report_by_site', filters);
    };
    ReportsService.prototype.getOwnFleetReportBySiteMonthly = function (filters) {
        return this.api.get('reports/own_fleet_report_by_site_monthly', filters);
    };
    ReportsService.prototype.getAccountReports = function (filters) {
        return this.api.get('accounts/ledger', filters);
    };
    ReportsService.prototype.getAccountItemsLedgerReports = function (filters) {
        return this.api.get('accounts/accountsitemsledger', filters);
    };
    ReportsService.prototype.getItemReports = function (filters) {
        return this.api.get('itemsl/ledger', filters);
    };
    ReportsService.prototype.getTruckLedgerReports = function (filters) {
        return this.api.get('trucksl/ledger', filters);
    };
    ReportsService.prototype.getOrderReports = function (filters) {
        return this.api.get('ordersl/ledger', filters);
    };
    ReportsService.prototype.getScrapReports = function (filters) {
        return this.api.get('scrapsl/ledger', filters);
    };
    ReportsService.prototype.getOwnFleetReport = function (filters) {
        return this.api.get('reports/ownfleet_report', filters);
    };
    ReportsService.prototype.getOwnFleetTruckReport = function (truckNo) {
        return this.api.get('reports/ownfleet_truck_report/' + truckNo);
    };
    ReportsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ReportsService);
    return ReportsService;
}());



/***/ }),

/***/ "./src/app/shared/services/site.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/site.service.ts ***!
  \*************************************************/
/*! exports provided: SiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteService", function() { return SiteService; });
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


var SiteService = /** @class */ (function () {
    function SiteService(api) {
        this.api = api;
    }
    SiteService.prototype.getRecords = function (filters) {
        return this.api.get('site_management/principal_billing', filters);
    };
    SiteService.prototype.deleteRecord = function (k) {
        return this.api.delete('billing/bill_delete', { params: k });
    };
    SiteService.prototype.deleteBillByNumber = function (id) {
        return this.api.delete('billing/bill_delete_by_bill_no', { params: id });
    };
    SiteService.prototype.deleteLedgerByBillNumber = function (id) {
        return this.api.delete('billing/delete_principle_billing_posting', { params: id });
    };
    SiteService.prototype.saveRecord = function (data) {
        return this.api.post('billing/insert_bill', data);
    };
    SiteService.prototype.getBillNo = function (site, accountname) {
        return this.api.get('billing/billing_maxnum?site=' + site + '&accountname=' + accountname);
    };
    SiteService.prototype.getBillingRecords = function () {
        return this.api.get('billing/billing_list');
    };
    SiteService.prototype.getBillNumberData = function (bill_no, site_name, account_name) {
        return this.api.get('billing/bill_number_data?bill_no=' + bill_no + '&site_name=' + site_name + '&account_name=' + account_name);
    };
    SiteService.prototype.addTruckPosition = function (data) {
        return this.api.post('plants_truck_position/add', data);
    };
    SiteService.prototype.deleteTruckPosition = function (k) {
        return this.api.delete('plants_truck_position/delete', { params: k });
    };
    SiteService.prototype.updateTruckPosition = function (data) {
        return this.api.put('plants_truck_position/update', data);
    };
    SiteService.prototype.getTruckPosition = function (filters) {
        return this.api.get('plants_truck_position/list', filters);
    };
    SiteService.prototype.getDestinationList = function (query) {
        return this.api.get('meta/to_destinations?q=' + query);
    };
    SiteService.prototype.getBilltyList = function (truckNo) {
        return this.api.get('reports/billty_latest?truck_no=' + truckNo);
    };
    SiteService.prototype.updateBillties = function (data) {
        return this.api.put('plants_truck_position/update_billty_time', data);
    };
    SiteService.prototype.updatePlacedtime = function (data) {
        return this.api.put('plants_truck_position/update_placed_time', data);
    };
    SiteService.prototype.getTruckPositionList = function (query) {
        return this.api.get('meta/trucks?q=' + query);
    };
    SiteService.prototype.getCompanyTruckPositionList = function (query) {
        return this.api.get('meta/company_trucks?q=' + query);
    };
    SiteService.prototype.getLrNumber = function (filters) {
        return this.api.get('meta/lr_numbers', filters);
    };
    SiteService.prototype.cancelPositionEntry = function (data) {
        return this.api.put('plants_truck_position/cancel_position_entry', data);
    };
    SiteService.prototype.getDocumentStatus = function (params) {
        return this.api.get('plants_truck_position/document_names', params);
    };
    SiteService.prototype.getConsignorCity = function (consignor) {
        return this.api.get('accounts/consignor_city?consignor=' + consignor);
    };
    SiteService.prototype.principleBillingPosting = function (data) {
        return this.api.post('accounts/principle_billing_posting', data);
    };
    SiteService.prototype.updateBillByLrNo = function (billno, lrno, data) {
        return this.api.put('billing/update_bill?billno=' + billno + '&lrno=' + lrno, data);
    };
    SiteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], SiteService);
    return SiteService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map