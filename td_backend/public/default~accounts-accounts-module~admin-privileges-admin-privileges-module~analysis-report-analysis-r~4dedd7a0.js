(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~accounts-accounts-module~admin-privileges-admin-privileges-module~analysis-report-analysis-r~4dedd7a0"],{

/***/ "./src/app/shared/services/meta.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/meta.service.ts ***!
  \*************************************************/
/*! exports provided: MetaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaService", function() { return MetaService; });
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


var MetaService = /** @class */ (function () {
    function MetaService(api) {
        this.api = api;
    }
    MetaService.prototype.getSiteFromStorage = function () {
        return JSON.parse(localStorage.getItem('user'));
    };
    // checkUserType() {
    //   if (this.getSiteFromStorage().role !== 'ADMIN') {
    //     return this.getSiteFromStorage().site ;
    //   }
    // }
    MetaService.prototype.getmrVendorList = function () {
        return this.api.get('meta/mrvendorlist');
    };
    MetaService.prototype.getCompanyTruckList = function () {
        return this.api.get('meta/companytrucklist');
    };
    MetaService.prototype.getJobWorkNameList = function () {
        return this.api.get('meta/JobWorkNamelist');
    };
    MetaService.prototype.getTyrePositionList = function () {
        return this.api.get('meta/tyrepositionlist');
    };
    MetaService.prototype.getCompanyNamesList = function () {
        return this.api.get('meta/companylist');
    };
    MetaService.prototype.getBrandsList = function () {
        return this.api.get('meta/brandlist');
    };
    MetaService.prototype.getCompanyNameDetails = function (id) {
        return this.api.post('meta/generate_brand_name', { company_name: id });
    };
    MetaService.prototype.getTyreNoList = function () {
        return this.api.get('meta/tyrenolist');
    };
    MetaService.prototype.getmrItemList = function () {
        return this.api.get('meta/itemslist');
    };
    MetaService.prototype.getSites = function () {
        return this.api.get('meta/sites');
    };
    MetaService.prototype.getConsigner = function (site) {
        return this.api.get('admin-privileges/site-profile/consigner/' + site);
    };
    MetaService.prototype.getDqty = function (tyre, tcc, site) {
        return this.api.get('admin-privileges/truck-average/dqty/' + tyre + "/" + tcc + "/" + site);
    };
    MetaService.prototype.getDestinationKm = function (site, destination) {
        return this.api.get('admin-privileges/site-destinationkms/km/' + site + "/" + destination);
    };
    MetaService.prototype.getEnginetype = function (truckno) {
        return this.api.get('maintenance/job-work/enginetype/' + truckno);
    };
    MetaService.prototype.getConsignee = function (site) {
        return this.api.get('admin-privileges/consignee-master/consignee/' + site);
    };
    MetaService.prototype.getToDestinationsFromPlantRateList = function (site) {
        return this.api.get('meta/ToDestinationsFromPlantRateList/' + site);
    };
    MetaService.prototype.getTruckPositionParking = function (site) {
        return this.api.get('meta/truckpositionparking/' + site);
    };
    MetaService.prototype.getSitePetrolPump = function (site) {
        return this.api.get('meta/Sitepetrolpump/' + site);
    };
    MetaService.prototype.getLrData = function (site, bool) {
        return this.api.get('reports/lrwise_truck_positions/' + site + '/' + bool);
    };
    MetaService.prototype.getTruckLastBilltyDetails = function (data) {
        return this.api.post('meta/trucklastbilltydetails', data);
    };
    MetaService.prototype.getallSites = function () {
        return this.api.get('meta/allsites');
    };
    MetaService.prototype.getConsigneeByName = function (consignee) {
        return this.api.get('admin-privileges/consignee-master/consignee-by-name/' + consignee);
    };
    MetaService.prototype.getRate = function (vendor, dateStr) {
        return this.api.get('admin-privileges/diesal-ratemaster/rate/' + vendor + "/" + dateStr);
    };
    MetaService.prototype.getRateType = function (site) {
        return this.api.get('rates/rateby/' + site);
    };
    MetaService.prototype.getTruckDetails = function (truckno) {
        return this.api.get('meta/trucks/' + truckno);
    };
    MetaService.prototype.getfrieght = function (data) {
        return this.api.post('rates/get_freight', data);
    };
    MetaService.prototype.getworktobedonetolerance = function (data) {
        return this.api.post('maintenance/engine-typemaster/get_kmtolerance', data);
    };
    MetaService.prototype.getRoadExpanses = function (billty) {
        return this.api.post('accounts/final_amount', billty);
    };
    MetaService.prototype.getTyrepositions = function () {
        return this.api.get('meta/tyrepositions');
    };
    MetaService.prototype.getFromDestinations = function (q) {
        return this.api.get('meta/from_destinations?q=' + q);
    };
    MetaService.prototype.getToDestinations = function (q) {
        return this.api.get('meta/to_destinations?q=' + q);
    };
    MetaService.prototype.getAccounts = function () {
        return this.api.get('meta/accounts');
    };
    MetaService.prototype.getItems = function () {
        return this.api.get('meta/items');
    };
    MetaService.prototype.getStateList = function () {
        return this.api.get('meta/statelists');
    };
    MetaService.prototype.getTrafficAgents = function () {
        return this.api.get('meta/traffic_agents');
    };
    MetaService.prototype.getDeptList = function () {
        return this.api.get('meta/deptlist');
    };
    MetaService.prototype.getDraccountList = function (id) {
        return this.api.post('accounts/generate_draccountlist', { ade_type: id });
    };
    MetaService.prototype.getCraccountList = function (id) {
        return this.api.post('accounts/generate_craccountlist', { ade_type: id });
    };
    MetaService.prototype.getGodownList = function () {
        return this.api.get('meta/godownlist');
    };
    MetaService.prototype.getTransactionTypeList = function () {
        return this.api.get('meta/transactiontypelist');
    };
    MetaService.prototype.getCompanyList = function () {
        return this.api.get('meta/companylist');
    };
    MetaService.prototype.getBrandList = function () {
        return this.api.get('meta/brandlist');
    };
    MetaService.prototype.getItemsList = function () {
        return this.api.get('meta/itemslist');
    };
    MetaService.prototype.getTruckLedgertrucknoList = function () {
        return this.api.get('meta/truckledgertrucknolist');
    };
    MetaService.prototype.getTruckLedgerItemsList = function () {
        return this.api.get('meta/truckledgeritemslist');
    };
    MetaService.prototype.getOrderLedgerItemsList = function () {
        return this.api.get('meta/orderledgeritemslist');
    };
    MetaService.prototype.getScrapLedgerItemsList = function () {
        return this.api.get('meta/scrapledgeritemslist');
    };
    MetaService.prototype.getAccountsLedgerList = function () {
        return this.api.get('meta/accountsledgerslist');
    };
    MetaService.prototype.getAccountsItemsLedgerList = function () {
        return this.api.get('meta/accountsItemsledgerslist');
    };
    MetaService.prototype.getIssuedbyList = function () {
        return this.api.get('meta/issuedbylist');
    };
    MetaService.prototype.getPartyNames = function () {
        return this.api.get('meta/parties');
    };
    MetaService.prototype.getSearchPartyNames = function (q) {
        return this.api.get('meta/search_parties?q=' + q);
    };
    MetaService.prototype.getPlantRateList = function () {
        return this.api.get('plant_rates_list/plant_list');
    };
    MetaService.prototype.searchPlantRateList = function (n, s) {
        return this.api.get('plant_rates_list/search_plant_list?name=' + n + '&site=' + s);
    };
    MetaService.prototype.getSearchSite = function (q) {
        return this.api.get('meta/search_sites?q=' + q);
    };
    MetaService.prototype.getConsignorNames = function () {
        return this.api.get('meta/consignor');
    };
    MetaService.prototype.getCatNames = function () {
        return this.api.get('meta/catnames');
    };
    MetaService.prototype.getCatNamesGroup = function () {
        return this.api.get('meta/catnamesgroup');
    };
    MetaService.prototype.getTaNames = function () {
        return this.api.get('meta/trafficagentlist');
    };
    MetaService.prototype.getTyreNames = function () {
        return this.api.get('meta/tyrelist');
    };
    MetaService.prototype.getDriverNames = function () {
        return this.api.get('meta/Driverlist');
    };
    MetaService.prototype.updateTruckPositionBiltyGen = function (data) {
        return this.api.put('reports/update_truck_positions_bilty_gen/', data);
    };
    MetaService.prototype.updateKmReadingJobworkreminder = function (data) {
        return this.api.put('reports/update_km_reading_job_work_reminder/', data);
    };
    MetaService.prototype.updateTruckEnginetype = function (data) {
        return this.api.put('reports/update_truck_engine_type/', data);
    };
    MetaService.prototype.getDiesalAccountNames = function () {
        return this.api.get('meta/diesalaccountnames');
    };
    MetaService.prototype.getRoadExpAccountNames = function () {
        return this.api.get('meta/roadexpaccountnames');
    };
    MetaService.prototype.getReceiptTypeNames = function () {
        return this.api.get('meta/receipttypenames');
    };
    MetaService.prototype.getReceiptModeNames = function () {
        return this.api.get('meta/receiptmodenames');
    };
    MetaService.prototype.getDfrom = function () {
        return this.api.get('meta/dfrom');
    };
    MetaService.prototype.getDto = function () {
        return this.api.get('meta/dto');
    };
    MetaService.prototype.getprefdestinationlist = function () {
        return this.api.get('meta/prefdestinationlist');
    };
    MetaService.prototype.getUnits = function () {
        return this.api.get('meta/units');
    };
    MetaService.prototype.getContains = function () {
        return this.api.get('meta/contains');
    };
    MetaService.prototype.getConsigneeNames = function () {
        return this.api.get('meta/consignee');
    };
    // accounts master
    MetaService.prototype.getCategory = function () {
        return this.api.get('meta/accountscategory');
    };
    MetaService.prototype.getGroup = function () {
        return this.api.get('meta/accountsgroups');
    };
    MetaService.prototype.getAccounttype = function () {
        return this.api.get('meta/accounttype');
    };
    MetaService.prototype.getUnderledger = function () {
        return this.api.get('meta/underledger');
    };
    MetaService.prototype.getcity = function () {
        return this.api.get('meta/city');
    };
    MetaService.prototype.getstate = function () {
        return this.api.get('meta/state');
    };
    MetaService.prototype.getcountry = function () {
        return this.api.get('meta/country');
    };
    MetaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], MetaService);
    return MetaService;
}());



/***/ })

}]);
//# sourceMappingURL=default~accounts-accounts-module~admin-privileges-admin-privileges-module~analysis-report-analysis-r~4dedd7a0.js.map