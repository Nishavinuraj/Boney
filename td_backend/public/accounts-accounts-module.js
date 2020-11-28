(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accounts-accounts-module"],{

/***/ "./src/app/layout/accounts/accounts-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/accounts/accounts-routing.module.ts ***!
  \************************************************************/
/*! exports provided: AccountsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsRoutingModule", function() { return AccountsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _accounts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accounts.component */ "./src/app/layout/accounts/accounts.component.ts");
/* harmony import */ var _components_trial_balance_trial_balance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/trial-balance/trial-balance.component */ "./src/app/layout/accounts/components/trial-balance/trial-balance.component.ts");
/* harmony import */ var _components_monthly_outstanding_monthly_outstanding_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/monthly-outstanding/monthly-outstanding.component */ "./src/app/layout/accounts/components/monthly-outstanding/monthly-outstanding.component.ts");
/* harmony import */ var _components_account_transaction_account_transaction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/account-transaction/account-transaction.component */ "./src/app/layout/accounts/components/account-transaction/account-transaction.component.ts");
/* harmony import */ var _components_add_accounts_dataentry_add_accounts_dataentry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-accounts-dataentry/add-accounts-dataentry.component */ "./src/app/layout/accounts/components/add-accounts-dataentry/add-accounts-dataentry.component.ts");
/* harmony import */ var _components_edit_accounts_dataentry_edit_accounts_dataentry_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/edit-accounts-dataentry/edit-accounts-dataentry.component */ "./src/app/layout/accounts/components/edit-accounts-dataentry/edit-accounts-dataentry.component.ts");
/* harmony import */ var _components_list_accounts_dataentry_list_accounts_dataentry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/list-accounts-dataentry/list-accounts-dataentry.component */ "./src/app/layout/accounts/components/list-accounts-dataentry/list-accounts-dataentry.component.ts");
/* harmony import */ var _components_accountsdataentry_reslover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/accountsdataentry-reslover */ "./src/app/layout/accounts/components/accountsdataentry-reslover.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _accounts_component__WEBPACK_IMPORTED_MODULE_2__["AccountsComponent"],
        children: [
            { path: '', redirectTo: 'trial-balance', pathMatch: 'prefix' },
            { path: 'trial-balance', component: _components_trial_balance_trial_balance_component__WEBPACK_IMPORTED_MODULE_3__["TrialBalanceComponent"] },
            { path: 'monthly-outstanding', component: _components_monthly_outstanding_monthly_outstanding_component__WEBPACK_IMPORTED_MODULE_4__["MonthlyOutstandingComponent"] },
            { path: 'account-transactions', component: _components_account_transaction_account_transaction_component__WEBPACK_IMPORTED_MODULE_5__["AccountTransactionComponent"] },
            // Broker Master
            { path: 'accounts-dataentry', component: _components_list_accounts_dataentry_list_accounts_dataentry_component__WEBPACK_IMPORTED_MODULE_8__["ListAccountsDataentryComponent"] },
            { path: 'accounts-dataentry/:id/edit', component: _components_edit_accounts_dataentry_edit_accounts_dataentry_component__WEBPACK_IMPORTED_MODULE_7__["EditAccountsDataentryComponent"], resolve: { ade_details: _components_accountsdataentry_reslover__WEBPACK_IMPORTED_MODULE_9__["AccountsdataentryReslover"] } },
            { path: 'add-accounts-dataentry', component: _components_add_accounts_dataentry_add_accounts_dataentry_component__WEBPACK_IMPORTED_MODULE_6__["AddAccountsDataentryComponent"] },
        ]
    }
];
var AccountsRoutingModule = /** @class */ (function () {
    function AccountsRoutingModule() {
    }
    AccountsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AccountsRoutingModule);
    return AccountsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/accounts/accounts.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/accounts/accounts.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/accounts/accounts.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/accounts/accounts.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hY2NvdW50cy9hY2NvdW50cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/accounts/accounts.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/accounts/accounts.component.ts ***!
  \*******************************************************/
/*! exports provided: AccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsComponent", function() { return AccountsComponent; });
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

var AccountsComponent = /** @class */ (function () {
    function AccountsComponent() {
    }
    AccountsComponent.prototype.ngOnInit = function () {
    };
    AccountsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accounts',
            template: __webpack_require__(/*! ./accounts.component.html */ "./src/app/layout/accounts/accounts.component.html"),
            styles: [__webpack_require__(/*! ./accounts.component.scss */ "./src/app/layout/accounts/accounts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountsComponent);
    return AccountsComponent;
}());



/***/ }),

/***/ "./src/app/layout/accounts/accounts.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/accounts/accounts.module.ts ***!
  \****************************************************/
/*! exports provided: AccountsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsModule", function() { return AccountsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _accounts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accounts.component */ "./src/app/layout/accounts/accounts.component.ts");
/* harmony import */ var _components_trial_balance_trial_balance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/trial-balance/trial-balance.component */ "./src/app/layout/accounts/components/trial-balance/trial-balance.component.ts");
/* harmony import */ var _components_monthly_outstanding_monthly_outstanding_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/monthly-outstanding/monthly-outstanding.component */ "./src/app/layout/accounts/components/monthly-outstanding/monthly-outstanding.component.ts");
/* harmony import */ var _accounts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accounts-routing.module */ "./src/app/layout/accounts/accounts-routing.module.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _accounts_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./accounts.service */ "./src/app/layout/accounts/accounts.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_account_transaction_account_transaction_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/account-transaction/account-transaction.component */ "./src/app/layout/accounts/components/account-transaction/account-transaction.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _components_add_accounts_dataentry_add_accounts_dataentry_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-accounts-dataentry/add-accounts-dataentry.component */ "./src/app/layout/accounts/components/add-accounts-dataentry/add-accounts-dataentry.component.ts");
/* harmony import */ var _components_edit_accounts_dataentry_edit_accounts_dataentry_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/edit-accounts-dataentry/edit-accounts-dataentry.component */ "./src/app/layout/accounts/components/edit-accounts-dataentry/edit-accounts-dataentry.component.ts");
/* harmony import */ var _components_list_accounts_dataentry_list_accounts_dataentry_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/list-accounts-dataentry/list-accounts-dataentry.component */ "./src/app/layout/accounts/components/list-accounts-dataentry/list-accounts-dataentry.component.ts");
/* harmony import */ var _components_accountsdataentry_reslover__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/accountsdataentry-reslover */ "./src/app/layout/accounts/components/accountsdataentry-reslover.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AccountsModule = /** @class */ (function () {
    function AccountsModule() {
    }
    AccountsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _accounts_component__WEBPACK_IMPORTED_MODULE_2__["AccountsComponent"],
                _components_trial_balance_trial_balance_component__WEBPACK_IMPORTED_MODULE_3__["TrialBalanceComponent"],
                _components_monthly_outstanding_monthly_outstanding_component__WEBPACK_IMPORTED_MODULE_4__["MonthlyOutstandingComponent"],
                _components_account_transaction_account_transaction_component__WEBPACK_IMPORTED_MODULE_11__["AccountTransactionComponent"],
                _components_add_accounts_dataentry_add_accounts_dataentry_component__WEBPACK_IMPORTED_MODULE_13__["AddAccountsDataentryComponent"],
                _components_edit_accounts_dataentry_edit_accounts_dataentry_component__WEBPACK_IMPORTED_MODULE_14__["EditAccountsDataentryComponent"],
                _components_list_accounts_dataentry_list_accounts_dataentry_component__WEBPACK_IMPORTED_MODULE_15__["ListAccountsDataentryComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _accounts_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountsRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
                src_app_shared__WEBPACK_IMPORTED_MODULE_6__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            providers: [
                _accounts_service__WEBPACK_IMPORTED_MODULE_9__["AccountsService"],
                _components_accountsdataentry_reslover__WEBPACK_IMPORTED_MODULE_16__["AccountsdataentryReslover"]
            ]
        })
    ], AccountsModule);
    return AccountsModule;
}());



/***/ }),

/***/ "./src/app/layout/accounts/accounts.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/accounts/accounts.service.ts ***!
  \*****************************************************/
/*! exports provided: AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return AccountsService; });
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


var AccountsService = /** @class */ (function () {
    function AccountsService(api) {
        this.api = api;
    }
    // Accounts-Dataentry
    AccountsService.prototype.addAde = function (data) {
        return this.api.post('accounts/accounts-dataentry', data);
    };
    AccountsService.prototype.getAde = function (id) {
        return this.api.get('accounts/accounts-dataentry/' + id);
    };
    AccountsService.prototype.updatAde = function (id, data) {
        return this.api.put('accounts/accounts-dataentry?id=' + id, data);
    };
    AccountsService.prototype.deleteAde = function (id) {
        return this.api.delete("accounts/accounts-dataentry/" + id);
    };
    AccountsService.prototype.getAdeNumberDetails = function (data) {
        return this.api.post('accounts/accounts-dataentry/generate_ade_number', data);
    };
    AccountsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], AccountsService);
    return AccountsService;
}());



/***/ }),

/***/ "./src/app/layout/accounts/components/account-transaction/account-transaction.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/accounts/components/account-transaction/account-transaction.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>Account Transactions</strong>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"save(addForm.valid, addForm.value)\">\r\n      <div class=\" form-group row\">\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Site*</label>\r\n            <select formControlName=\"site_name\" class=\"form-control\" >\r\n              <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                {{ s.branch_name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Voucher Type*</label>\r\n            <select formControlName=\"voucher_type\" class=\"form-control\" required>\r\n              <option value=\"\">--Select Voucher Type--</option>\r\n              <option *ngFor=\"let v of voucher_types\" value=\"{{ v.v_name }}\">\r\n                {{ v.v_name }}\r\n              </option>\r\n            </select>\r\n            <span class=\"text-danger\" *ngIf=\"(addForm.controls['voucher_type'].dirty || submitted) && addForm.controls['voucher_type'].hasError('required')\">Voucher type is required.</span>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Voucher No*</label>\r\n            <input type=\"number\" formControlName=\"voucher_no\" class=\"form-control\">\r\n          </div>\r\n        </div> -->\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Date*</label>\r\n            <div class=\"input-group datepicker-input\">\r\n              <input\r\n                class=\"form-control\"\r\n                placeholder=\"dd/mm/yyyy\"\r\n                name=\"dp\"\r\n                formControlName=\"date\"\r\n                ngbDatepicker\r\n                #d=\"ngbDatepicker\"\r\n              />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <span class=\"text-danger\" *ngIf=\"( addForm.controls['date'].dirty || submitted) && addForm.controls['date'].hasError('required')\">Date is required.</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Account Head</label>\r\n            <select formControlName=\"account_head\" class=\"form-control\">\r\n              <option value=\"\">--Select Account Head--</option>\r\n              <option value=\"\"></option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Payment Type*</label>\r\n            <select formControlName=\"payment_type\" class=\"form-control\" required>\r\n              <option value=\"\">--Select Payment Type--</option>\r\n              <option *ngFor=\"let p of payment_types\" value=\"{{ p.p_name }}\">\r\n                {{ p.p_name }}\r\n              </option>\r\n            </select>\r\n            <span class=\"text-danger\" *ngIf=\"( addForm.controls['payment_type'].dirty || submitted) && addForm.controls['payment_type'].hasError('required')\">Payment type is required.</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Against</label>\r\n            <select formControlName=\"against\" class=\"form-control\" required>\r\n              <option value=\"\">--Select Against--</option>\r\n              <option *ngFor=\"let a of againsts\" value=\"{{ a.a_name }}\">\r\n                {{ a.a_name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Account Name*</label>\r\n            <select formControlName=\"account_name\" class=\"form-control\" required>\r\n                <option value=\"\">--Select Account Name--</option>\r\n              <option *ngFor=\"let a of accounts\" value=\"{{ a.accountname }}\">\r\n                {{ a.accountname }}\r\n              </option>\r\n            </select>\r\n            <span class=\"text-danger\" *ngIf=\"( addForm.controls['account_name'].dirty || submitted) && addForm.controls['account_name'].hasError('required')\">Account name is required.</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Debit</label>\r\n            <input type=\"number\" formControlName=\"debit\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Credit</label>\r\n            <input type=\"number\" formControlName=\"credit\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Naration*</label>\r\n            <textarea formControlName=\"naration\" class=\"form-control\" required></textarea>\r\n            <span class=\"text-danger\" *ngIf=\"( addForm.controls['naration'].dirty || submitted) && addForm.controls['naration'].hasError('required')\">Naration is required.</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-success\">\r\n        <i class=\"fa fa-get-pocket\"></i> save\r\n      </button>\r\n      <button type=\"reset\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-warning\" (click)=\"reset()\">\r\n        <i class=\"fa fa-refresh\"></i> Reset\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"animated fadeIn\">\r\n  <div class=\"row\" >\r\n    <div class=\"col-lg\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\"><i class=\"fa fa-align-justify\"></i> Prepared By Administrator</div>\r\n        <div class=\"card-body\">\r\n          <!-- <ngb-pagination\r\n            [(page)]=\"pagination.currenPage\"\r\n            [pageSize]=\"pagination.pageSize\"\r\n            [collectionSize]=\"pagination.total\"\r\n            [maxSize]=\"pagination.maxSize\"\r\n            (pageChange)=\"fetchReport()\"\r\n          ></ngb-pagination>-->\r\n          <form [formGroup]=\"editForm\">\r\n            <table class=\"table tableFixHead mytable\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Date</th>\r\n                  <th class=\"cell-align\">Site</th>\r\n                  <th class=\"cell-align\">Voucher Type</th>\r\n                  <th class=\"cell-align\">Voucher No.</th>\r\n                  <th class=\"cell-align\">Payment Type</th>\r\n                  <th class=\"cell-align\">Naration</th>\r\n                  <th class=\"cell-align\">Username</th>\r\n                  <th align=\"center\">Actions</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngIf=\"loading\">\r\n                  <td colspan=\"10\">\r\n                    <div class=\"showbox\">\r\n                      <div class=\"loader\">\r\n                        <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                          <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                        </svg>\r\n                      </div>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                <tr *ngFor=\"let t of transactions; let i = index\">\r\n                  <td class=\"cell-align\">{{ t.tdate }}</td>\r\n\r\n                  <!-- <td *ngIf=\"t.editing\">\r\n                    <input type=\"text\">\r\n                  </td> -->\r\n\r\n                  <td class=\"cell-align\">{{ t.site ? t.site : '--' }}</td>\r\n                  \r\n                  <td *ngIf=\"!t.editing\" class=\"cell-align\">{{ t.voucher_type ? t.voucher_type : '--' }}</td>\r\n                  \r\n                  <td *ngIf=\"t.editing\" class=\"cell-align\">\r\n                    <select formControlName=\"voucher_type\" class=\"form-control\">\r\n                      <option *ngFor=\"let v of voucher_types\" value=\"{{v.v_name}}\">{{v.v_name}}</option>\r\n                    </select>\r\n                  </td>\r\n                  \r\n                  <td class=\"cell-align\">{{ t.voucher_no ? t.voucher_no : '--' }}</td>\r\n                  <td *ngIf=\"!t.editing\" class=\"cell-align\">{{ t.payment_type ? t.payment_type : '--' }}</td>\r\n\r\n                  <td *ngIf=\"t.editing\">\r\n                    <select formControlName=\"payment_type\" class=\"form-control\">\r\n                      <option *ngFor=\"let p of payment_types\" value=\"{{p.p_name}}\">{{p.p_name}}</option>\r\n                    </select>\r\n                  </td>\r\n\r\n                  <td *ngIf=\"!t.editing\" class=\"cell-align\">{{ t.naration ? t.naration : '--' }}</td>\r\n\r\n                  <td *ngIf=\"t.editing\">\r\n                    <textarea class=\"form-control\" formControlName=\"naration\"></textarea>\r\n                  </td>\r\n    \r\n                  <td class=\"cell-align\">{{ t.user ? t.user : '--' }}</td>\r\n                  <td>\r\n                    <button (click)=\"edit(t)\" class=\"btn btn-primary\">Edit</button>&nbsp;&nbsp;\r\n                    <button *ngIf=\"t.editing\" (click)=\"cancel(t)\" class=\"btn btn-warning\">Cancel</button>&nbsp;&nbsp;\r\n                    <button *ngIf=\"t.editing\" (click)=\"update(t, editForm.value)\" class=\"btn btn-success\">Update</button>&nbsp;&nbsp;\r\n                    <button (click)=\"delete(t, i)\" class=\"btn btn-danger\">Delete</button>\r\n                  </td>\r\n                </tr>\r\n                <tr *ngIf=\"loaded && transactions.length === 0\">\r\n                    <td align=\"center\" colspan=\"7\">No data available</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </form>\r\n          <!-- <ngb-pagination\r\n            [(page)]=\"pagination.currenPage\"\r\n            [pageSize]=\"pagination.pageSize\"\r\n            [collectionSize]=\"pagination.total\"\r\n            [maxSize]=\"pagination.maxSize\"\r\n            (pageChange)=\"fetchReport()\"\r\n          ></ngb-pagination>-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/accounts/components/account-transaction/account-transaction.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/accounts/components/account-transaction/account-transaction.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hY2NvdW50cy9jb21wb25lbnRzL2FjY291bnQtdHJhbnNhY3Rpb24vYWNjb3VudC10cmFuc2FjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/accounts/components/account-transaction/account-transaction.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/accounts/components/account-transaction/account-transaction.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AccountTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountTransactionComponent", function() { return AccountTransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/accounts.service */ "./src/app/shared/services/accounts.service.ts");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountTransactionComponent = /** @class */ (function () {
    function AccountTransactionComponent(fb, meta, toastr, accountService) {
        this.fb = fb;
        this.meta = meta;
        this.toastr = toastr;
        this.accountService = accountService;
        this.submitted = false;
        this.sites = [];
        this.accounts = [];
        this.transactions = [];
        this.loading = false;
        this.loaded = true;
        this.voucher_types = [
            { v_name: 'Receipt' },
            { v_name: 'Payment' },
            { v_name: 'Contra' },
            { v_name: 'Journal' },
            { v_name: 'Debit Note' },
            { v_name: 'Credit Note' }
        ];
        this.payment_types = [
            { p_name: 'Bank to Bank' },
            { p_name: 'Cash' },
            { p_name: 'Cheque' },
            { p_name: 'Credit' },
            { p_name: 'Imps' },
            { p_name: 'Internal Transfer' },
            { p_name: 'Neft' },
            { p_name: 'Rtgs' }
        ];
        this.againsts = [
            { a_name: 'DOCUMENT' },
            { a_name: 'EMI' },
            { a_name: 'INVESTMENT' },
            { a_name: 'MAINTENANCE' },
            { a_name: 'SALARY' },
            { a_name: 'SITE ADVANCE' },
            { a_name: 'TYRE' }
        ];
    }
    AccountTransactionComponent.prototype.ngOnInit = function () {
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        this.addForm = this.fb.group({
            site_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            voucher_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            voucher_no: [''],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            account_head: [''],
            payment_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            against: [''],
            account_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            debit: [''],
            credit: [''],
            naration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.editForm = this.fb.group({
            site_name: [''],
            voucher_type: [''],
            date: [''],
            account_head: [''],
            payment_type: [''],
            against: [''],
            account_name: [''],
            debit: [''],
            credit: [''],
            naration: ['']
        });
        this.getSites();
        this.getAccountName();
        this.getTransactions();
    };
    AccountTransactionComponent.prototype.getSites = function () {
        var _this = this;
        this.meta.getSites().subscribe(function (res) {
            _this.sites = res;
            if (_this.usertype === 'ADMIN') {
                _this.addForm.controls['site_name'].setValue(_this.sites[0].branch_name);
            }
            else {
                _this.addForm.controls['site_name'].setValue(_this.site_name);
            }
        }, function (err) { });
    };
    AccountTransactionComponent.prototype.getTransactions = function () {
        var _this = this;
        this.loading = true;
        this.loaded = false;
        this.accountService.getTransactions().subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            res.result.forEach(function (element) {
                element.tdate = moment_timezone__WEBPACK_IMPORTED_MODULE_5__(element.placedtime).tz('Asia/Calcutta').format('DD/MM/YYYY HH:mm:ss');
                element.editing = false;
            });
            _this.transactions = res.result;
        }, function (err) {
            _this.loading = false;
            _this.loaded = true;
        });
    };
    AccountTransactionComponent.prototype.getAccountName = function () {
        var _this = this;
        this.meta.getAccounts().subscribe(function (res) {
            _this.accounts = res;
            console.log('>>>>res', res);
        }, function (err) {
            console.log('>>>>err', err);
        });
    };
    AccountTransactionComponent.prototype.save = function (isValid, formValue) {
        var _this = this;
        this.submitted = true;
        if (isValid) {
            var date = formValue.date.year + '-' + formValue.date.month + '-' + formValue.date.day;
            var debit = void 0;
            var credit = void 0;
            if (formValue.debit) {
                debit = formValue.debit;
            }
            else {
                debit = 0;
            }
            if (formValue.credit) {
                credit = formValue.credit;
            }
            else {
                credit = 0;
            }
            var obj = {
                'site': formValue.site_name,
                'voucher_type': formValue.voucher_type,
                'tdate': date,
                'account_head': formValue.account_head,
                'payment_type': formValue.payment_type,
                'against': formValue.against,
                'account_name': formValue.account_name,
                'debit': formValue.debit,
                'credit': formValue.credit,
                'naration': formValue.naration
                // 'voucher_no': formValue.voucher_no
            };
            this.accountService.addTransaction(obj).subscribe(function (res) {
                _this.getTransactions();
                _this.addForm.reset();
                _this.submitted = false;
                _this.toastr.success('Tranaction added successfully.');
                _this.addForm.controls['account_name'].setValue(undefined);
            }, function (err) {
                _this.toastr.success('Something went wrong.');
            });
        }
    };
    AccountTransactionComponent.prototype.reset = function () {
        this.addForm.reset();
        this.submitted = false;
    };
    AccountTransactionComponent.prototype.edit = function (data) {
        data.editing = true;
        this.editForm.controls['voucher_type'].setValue(data.voucher_type);
        this.editForm.controls['payment_type'].setValue(data.payment_type);
        this.editForm.controls['naration'].setValue(data.naration);
    };
    AccountTransactionComponent.prototype.cancel = function (data) {
        data.editing = false;
    };
    AccountTransactionComponent.prototype.update = function (data, formValue) {
        var _this = this;
        var obj = {
            'payment_type': formValue.payment_type,
            'voucher_type': formValue.voucher_type,
            'naration': formValue.naration
        };
        this.accountService.updateTransaction(data._id, obj).subscribe(function (res) {
            _this.toastr.success('Tranaction updated successfully.');
            data.editing = false;
            data.payment_type = formValue.payment_type;
            data.voucher_type = formValue.voucher_type;
            data.naration = formValue.naration;
        }, function (err) {
            data.editing = false;
            _this.toastr.success('Something went wrong.');
        });
    };
    AccountTransactionComponent.prototype.delete = function (data, index) {
        var _this = this;
        var conf = confirm('Are you sure you want to delete this transaction?');
        if (conf === true) {
            this.accountService.deleteTransaction(data._id).subscribe(function (res) {
                _this.toastr.success('Tranaction deleted successfully.');
                _this.transactions.splice(index, 1);
            }, function (err) {
                _this.toastr.success('Something went wrong.');
            });
        }
    };
    AccountTransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-transaction',
            template: __webpack_require__(/*! ./account-transaction.component.html */ "./src/app/layout/accounts/components/account-transaction/account-transaction.component.html"),
            styles: [__webpack_require__(/*! ./account-transaction.component.scss */ "./src/app/layout/accounts/components/account-transaction/account-transaction.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_shared_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]])
    ], AccountTransactionComponent);
    return AccountTransactionComponent;
}());



/***/ }),

/***/ "./src/app/layout/accounts/components/accountsdataentry-reslover.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/accounts/components/accountsdataentry-reslover.ts ***!
  \**************************************************************************/
/*! exports provided: AccountsdataentryReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsdataentryReslover", function() { return AccountsdataentryReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accounts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accounts.service */ "./src/app/layout/accounts/accounts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountsdataentryReslover = /** @class */ (function () {
    function AccountsdataentryReslover(as) {
        this.as = as;
    }
    AccountsdataentryReslover.prototype.resolve = function (route) {
        return this.as.getAde(route.paramMap.get('id'));
    };
    AccountsdataentryReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_accounts_service__WEBPACK_IMPORTED_MODULE_1__["AccountsService"]])
    ], AccountsdataentryReslover);
    return AccountsdataentryReslover;
}());



/***/ }),

/***/ "./src/app/layout/accounts/components/add-accounts-dataentry/add-accounts-dataentry.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/accounts/components/add-accounts-dataentry/add-accounts-dataentry.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"adeForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Accounts Data Entry</div>\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n\n          <!-- <div class=\"col-lg-3 col-md-3\"> -->\n          <div class=\"col-md-3\">\n            <label class=\"required\">Site</label>\n          <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n            formControlName=\"site\">\n          </ng-select>\n        </div>\n\n        <div class=\"col-md-3\">\n          <label class=\"required\">Voucher type</label>\n          <select class=\"form-control\" formControlName=\"ade_type\" (change)=\"generateAdeNumber()\">\n            <option value=\"\">Select type</option>\n            <option value=\"Receipt\">Receipt</option>\n            <option value=\"Payment\">Payment</option>\n            <option value=\"Contra\">Contra</option>\n            <option value=\"Journal\">Journal</option>\n            <option value=\"Debit Note\">Debit Note</option>\n            <option value=\"Credit Note\">Credit Note</option>\n          </select>\n        </div>\n\n        <div class=\"col-md-3\">\n          <label class=\"required\">Voucher no</label>\n          <input disabled type=\"text\" formControlName=\"ade_number\" class=\"form-control\" placeholder=\"\">\n        </div>\n\n        <div class=\"col-md-3\">\n          <label class=\"required\">Voucher date</label>\n          <div class=\"input-group datepicker-input\">\n            <input\n              class=\"form-control\"\n              placeholder=\"dd-mm-yyyy\"\n              name=\"dp2\"\n              formControlName=\"ade_date\"\n              ngbDatepicker\n              #d2=\"ngbDatepicker\"\n            />\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\n                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n\n        <!-- <div class=\"col-md-3\">\n          <label class=\"required\">Voucher date</label>\n          <div class=\"input-group datepicker-input\">\n            <input\n              class=\"form-control\"\n              placeholder=\"dd-mm-yyyy\"\n              name=\"dp2\"\n              formControlName=\"ade_date\"\n              ngbDatepicker\n              #d2=\"ngbDatepicker\"\n            />\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\n                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div> -->\n\n        <div class=\"col-md-3\">\n          <label class=\"required\">Payment type</label>\n          <select class=\"form-control\" formControlName=\"payment_type\">\n            <option value=\"\">Select type</option>\n            <option value=\"Bank to Bank\">Bank to Bank</option>\n            <option value=\"Cash\">Cash</option>\n            <option value=\"Cheque\">Cheque</option>\n            <option value=\"Credit\">Credit</option>\n            <option value=\"Imps\">Imps</option>\n            <option value=\"Internal Transfer\">Internal Transfer</option>\n            <option value=\"Neft\">Neft</option>\n            <option value=\"Rtgs\">Rtgs</option>\n          </select>\n        </div>\n\n        <div class=\"col-md-3\">\n          <label class=\"required\">Against</label>\n          <select class=\"form-control\" formControlName=\"against\">\n            <option value=\"\">Select type</option>\n            <option value=\"Document\">Document</option>\n            <option value=\"Investment\">Investment</option>\n            <option value=\"Maintenance\">Maintenance</option>\n            <option value=\"Salary\">Salary</option>\n            <option value=\"Site Advance\">Site Advance</option>\n            <option value=\"Tyre\">Tyre</option>\n          </select>\n        </div>\n\n        <div class=\"col-md-3\">\n          <label class=\"required\">Department</label>\n          <ng-select [items]=\"dept_option\" placeholder=\"Type and search Department\" bindLabel=\"deptname\" bindValue=\"deptname\"\n            formControlName=\"department\">\n          </ng-select>\n        </div>\n\n        <div class=\"col-md-3\">\n          <label class=\"required\">Debit Account Name</label>\n          <ng-select [items]=\"draccname_option\" placeholder=\"Type and search Account\" bindLabel=\"accountname\" bindValue=\"accountname\"\n            formControlName=\"draccount_name\">\n          </ng-select>\n        </div>\n\n        <div class=\"col-md-3\">\n          <label class=\"required\">Credit Account Name</label>\n          <ng-select [items]=\"craccname_option\" placeholder=\"Type and search Account\" bindLabel=\"accountname\" bindValue=\"accountname\"\n            formControlName=\"craccount_name\">\n          </ng-select>\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label class=\"required\">Amount</label>\n          <input type=\"number\" formControlName=\"amount\" class=\"form-control\" placeholder=\"Amount\">\n        </div>\n\n        <div class=\"col-lg-6 col-md-6\">\n          <label>Remarks</label>\n          <input type=\"text\" formControlName=\"remarks\" class=\"form-control\" placeholder=\"Remarks\">\n        </div>\n\n      </div>\n\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!adeForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/accounts/components/add-accounts-dataentry/add-accounts-dataentry.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/accounts/components/add-accounts-dataentry/add-accounts-dataentry.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hY2NvdW50cy9jb21wb25lbnRzL2FkZC1hY2NvdW50cy1kYXRhZW50cnkvYWRkLWFjY291bnRzLWRhdGFlbnRyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/accounts/components/add-accounts-dataentry/add-accounts-dataentry.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/accounts/components/add-accounts-dataentry/add-accounts-dataentry.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AddAccountsDataentryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccountsDataentryComponent", function() { return AddAccountsDataentryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _accounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../accounts.service */ "./src/app/layout/accounts/accounts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddAccountsDataentryComponent = /** @class */ (function () {
    function AddAccountsDataentryComponent(fb, metaService, as, router, calendar) {
        this.fb = fb;
        this.metaService = metaService;
        this.as = as;
        this.router = router;
        this.calendar = calendar;
        this.loading = false;
        // minDate;
        this.currentDate = new Date();
        this.usertype = this.metaService.getSiteFromStorage().role;
        this.site_name = this.metaService.getSiteFromStorage().site;
        // const current = new Date();
        // this.minDate = {
        //   year: current.getFullYear(),
        //   month: current.getMonth() + 1,
        //   day: current.getDate()
        // };
    }
    AddAccountsDataentryComponent.prototype.ngOnInit = function () {
        // this.bsConfig = Object.assign({},
        //   { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
        this.buildForm();
        this.adeForm.controls['ade_date'].setValue(this.calendar.getToday());
        this.getOptions();
        this.getSites();
    };
    AddAccountsDataentryComponent.prototype.buildForm = function () {
        this.adeForm = this.fb.group({
            'site': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'ade_type': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'ade_number': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            // 'ade_date': [{year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()}],
            'ade_date': [new Date()],
            'payment_type': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'against': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'department': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'draccount_name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'craccount_name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'amount': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'remarks': ['']
        });
    };
    AddAccountsDataentryComponent.prototype.save = function () {
        var _this = this;
        console.log('Accounts Data Save', this.adeForm.value);
        // let ade_date;
        // if (this.adeForm.controls['ade_date'].value) {
        //   const dt = this.adeForm.controls['ade_date'].value.year + '-' +
        //     this.adeForm.controls['ade_date'].value.month + '-' +
        //     this.adeForm.controls['ade_date'].value.day;
        //   ade_date = moment(dt, 'YYYY-MM-DD').format();
        //   console.log(ade_date);
        // } else {
        //   ade_date = moment().format();
        // }
        var ade_date;
        if (this.adeForm.controls['ade_date'].value) {
            var dt = this.adeForm.controls['ade_date'].value.year + '-' +
                this.adeForm.controls['ade_date'].value.month + '-' +
                this.adeForm.controls['ade_date'].value.day;
            ade_date = new Date(this.adeForm.controls['ade_date'].value.year, this.adeForm.controls['ade_date'].value.month - 1, this.adeForm.controls['ade_date'].value.day, 23, 59, 59);
            console.log(ade_date);
        }
        else {
            ade_date = moment().format();
            ade_date = new Date(ade_date.getFullYear(), ade_date.getMonth(), ade_date.getDay(), 23, 59, 59);
        }
        this.process = 'saving';
        var data = this.adeForm.value;
        data.ade_date = ade_date;
        this.as.addAde(this.adeForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/accounts/accounts-dataentry']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddAccountsDataentryComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                _this.adeForm.controls['site'].setValue(_this.siteOptions[0].branch_name);
            }
            else {
                _this.adeForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    AddAccountsDataentryComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getDeptList().subscribe(function (trackInfo) {
            _this.dept_option = trackInfo['result'];
        });
    };
    AddAccountsDataentryComponent.prototype.generateAdeNumber = function () {
        var _this = this;
        var ade_type = this.adeForm.controls.ade_type.value;
        var site = this.adeForm.controls.site.value;
        if (site && ade_type) {
            var matchCond = { site: site, ade_type: ade_type };
            console.log('mathCond >>', matchCond);
            this.as.getAdeNumberDetails(matchCond).subscribe(function (mrInfo) {
                _this.adeForm.controls.ade_number.setValue(mrInfo['count'] + 1);
            }, function (error) {
                console.log(error);
            });
        }
        console.log(' ade_type >>>>>', ade_type);
        this.metaService.getDraccountList(ade_type).subscribe(function (trackInfo) {
            _this.draccname_option = trackInfo['result'];
        });
        this.metaService.getCraccountList(ade_type).subscribe(function (trackInfo) {
            _this.craccname_option = trackInfo['result'];
        });
    };
    AddAccountsDataentryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-accounts-dataentry',
            template: __webpack_require__(/*! ./add-accounts-dataentry.component.html */ "./src/app/layout/accounts/components/add-accounts-dataentry/add-accounts-dataentry.component.html"),
            styles: [__webpack_require__(/*! ./add-accounts-dataentry.component.scss */ "./src/app/layout/accounts/components/add-accounts-dataentry/add-accounts-dataentry.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__["MetaService"],
            _accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"]])
    ], AddAccountsDataentryComponent);
    return AddAccountsDataentryComponent;
}());



/***/ }),

/***/ "./src/app/layout/accounts/components/edit-accounts-dataentry/edit-accounts-dataentry.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/accounts/components/edit-accounts-dataentry/edit-accounts-dataentry.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"adeForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Edit Accounts Data Entry</div>\n      <div class=\"card-body\">\n\n        <div class=\"form-group row\">\n          <div class=\"col-md-3\">\n            <label class=\"required\">Site</label>\n          <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n            formControlName=\"site\">\n          </ng-select>\n        </div>\n\n        <div class=\"col-md-3\">\n          <label class=\"required\">Voucher type</label>\n          <select class=\"form-control\" formControlName=\"ade_type\">\n            <option value=\"\">Select type</option>\n            <option value=\"Receipt\">Receipt</option>\n            <option value=\"Payment\">Payment</option>\n            <option value=\"Contra\">Contra</option>\n            <option value=\"Journal\">Journal</option>\n            <option value=\"Debit Note\">Debit Note</option>\n            <option value=\"Credit Note\">Credit Note</option>\n          </select>\n        </div>\n\n        <div class=\"col-md-3\">\n          <label class=\"required\">Voucher no</label>\n          <input disabled type=\"text\" formControlName=\"ade_number\" class=\"form-control\" placeholder=\"\">\n        </div>\n\n        <!-- <div class=\"col-md-3\">\n          <label class=\"required\">Voucher date</label>\n          <div class=\"input-group datepicker-input\">\n            <input\n              class=\"form-control\"\n              placeholder=\"dd-mm-yyyy\"\n              name=\"dp2\"\n              formControlName=\"ade_date\"\n              ngbDatepicker\n              #d2=\"ngbDatepicker\"\n              [minDate]=\"minDate\"\n              required\n            />\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\n                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div> -->\n\n       <div class=\"col-md-3\">\n          <label class=\"required\">Voucher date</label>\n          <div class=\"input-group datepicker-input\">\n            <input\n              class=\"form-control\"\n              placeholder=\"dd-mm-yyyy\"\n              name=\"dp2\"\n              formControlName=\"ade_date\"\n              ngbDatepicker\n              #d2=\"ngbDatepicker\"\n            />\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\n                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-3\">\n          <label class=\"required\">Payment type</label>\n          <select class=\"form-control\" formControlName=\"payment_type\">\n            <option value=\"\">Select type</option>\n            <option value=\"Bank to Bank\">Bank to Bank</option>\n            <option value=\"Cash\">Cash</option>\n            <option value=\"Cheque\">Cheque</option>\n            <option value=\"Credit\">Credit</option>\n            <option value=\"Imps\">Imps</option>\n            <option value=\"Internal Transfer\">Internal Transfer</option>\n            <option value=\"Neft\">Neft</option>\n            <option value=\"Rtgs\">Rtgs</option>\n          </select>\n        </div>\n\n        <div class=\"col-md-3\">\n          <label class=\"required\">Against</label>\n          <select class=\"form-control\" formControlName=\"against\">\n            <option value=\"\">Select type</option>\n            <option value=\"Document\">Document</option>\n            <option value=\"Investment\">Investment</option>\n            <option value=\"Maintenance\">Maintenance</option>\n            <option value=\"Salary\">Salary</option>\n            <option value=\"Site Advance\">Site Advance</option>\n            <option value=\"Tyre\">Tyre</option>\n          </select>\n        </div>\n\n        <div class=\"col-md-3\">\n          <label class=\"required\">Department</label>\n          <ng-select [items]=\"dept_option\" placeholder=\"Type and search Department\" bindLabel=\"deptname\" bindValue=\"deptname\"\n            formControlName=\"department\">\n          </ng-select>\n        </div>\n\n        <div class=\"col-md-3\">\n          <label class=\"required\">Debit Account Name</label>\n          <ng-select [items]=\"draccname_option\" placeholder=\"Type and search Account\" bindLabel=\"accountname\" bindValue=\"accountname\"\n            formControlName=\"draccount_name\">\n          </ng-select>\n        </div>\n\n        <div class=\"col-md-3\">\n          <label class=\"required\">Credit Account Name</label>\n          <ng-select [items]=\"craccname_option\" placeholder=\"Type and search Account\" bindLabel=\"accountname\" bindValue=\"accountname\"\n            formControlName=\"craccount_name\">\n          </ng-select>\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label class=\"required\">Amount</label>\n          <input type=\"number\" formControlName=\"amount\" class=\"form-control\" placeholder=\"Amount\">\n        </div>\n\n        <div class=\"col-lg-6 col-md-6\">\n          <label>Remarks</label>\n          <input type=\"text\" formControlName=\"remarks\" class=\"form-control\" placeholder=\"Remarks\">\n        </div>\n\n\n        </div>\n\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!adeForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/accounts/components/edit-accounts-dataentry/edit-accounts-dataentry.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/accounts/components/edit-accounts-dataentry/edit-accounts-dataentry.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hY2NvdW50cy9jb21wb25lbnRzL2VkaXQtYWNjb3VudHMtZGF0YWVudHJ5L2VkaXQtYWNjb3VudHMtZGF0YWVudHJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/accounts/components/edit-accounts-dataentry/edit-accounts-dataentry.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/accounts/components/edit-accounts-dataentry/edit-accounts-dataentry.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: EditAccountsDataentryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountsDataentryComponent", function() { return EditAccountsDataentryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _accounts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../accounts.service */ "./src/app/layout/accounts/accounts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';





var EditAccountsDataentryComponent = /** @class */ (function () {
    function EditAccountsDataentryComponent(fb, metaService, ms, as, router, aroute, calendar) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.as = as;
        this.router = router;
        this.aroute = aroute;
        this.calendar = calendar;
        this.loading = false;
        // minDate;
        this.currentDate = new Date();
        this.usertype = this.metaService.getSiteFromStorage().role;
        this.site_name = this.metaService.getSiteFromStorage().site;
        // const current = new Date();
        // this.minDate = {
        //   year: current.getFullYear(),
        //   month: current.getMonth() + 1,
        //   day: current.getDate()
        // };
    }
    EditAccountsDataentryComponent.prototype.ngOnInit = function () {
        this.adeDetails = this.aroute.snapshot.data['ade_details'];
        this.buildForm();
        this.getOptions();
    };
    EditAccountsDataentryComponent.prototype.buildForm = function () {
        this.adeForm = this.fb.group({
            'site': [this.adeDetails.site],
            'ade_type': [this.adeDetails.ade_type],
            'ade_number': [this.adeDetails.ade_number],
            'ade_date': [{ year: new Date(this.adeDetails.ade_date).getFullYear(), month: new Date(this.adeDetails.ade_date).getMonth() + 1, day: new Date(this.adeDetails.ade_date).getDate() }],
            'payment_type': [this.adeDetails.payment_type],
            'against': [this.adeDetails.against],
            'department': [this.adeDetails.department],
            'draccount_name': [this.adeDetails.draccount_name],
            'craccount_name': [this.adeDetails.craccount_name],
            'amount': [this.adeDetails.amount],
            'remarks': [this.adeDetails.remarks]
        });
    };
    EditAccountsDataentryComponent.prototype.save = function () {
        // let ade_date;
        // if (this.adeForm.controls['ade_date'].value) {
        //   const dt = this.adeForm.controls['ade_date'].value.year + '-' +
        //     this.adeForm.controls['ade_date'].value.month + '-' +
        //     this.adeForm.controls['ade_date'].value.day;
        //   ade_date = moment(dt, 'YYYY-MM-DD').format();
        //   console.log(ade_date);
        // } else {
        //   ade_date = moment().format();
        // }
        var _this = this;
        var ade_date;
        if (this.adeForm.controls['ade_date'].value) {
            var dt = this.adeForm.controls['ade_date'].value.year + '-' +
                this.adeForm.controls['ade_date'].value.month + '-' +
                this.adeForm.controls['ade_date'].value.day;
            ade_date = new Date(this.adeForm.controls['ade_date'].value.year, this.adeForm.controls['ade_date'].value.month - 1, this.adeForm.controls['ade_date'].value.day, 23, 59, 59);
            console.log(ade_date);
        }
        else {
            ade_date = moment().format();
            ade_date = new Date(ade_date.getFullYear(), ade_date.getMonth(), ade_date.getDay(), 23, 59, 59);
        }
        this.process = 'saving';
        var data = this.adeForm.value;
        data.ade_date = ade_date;
        this.as.updatAde(this.adeDetails['_id'], this.adeForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/accounts/accounts-dataentry']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditAccountsDataentryComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                _this.adeForm.controls['site'].setValue(_this.siteOptions[0].branch_name);
            }
            else {
                _this.adeForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    EditAccountsDataentryComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getDeptList().subscribe(function (trackInfo) {
            _this.dept_option = trackInfo['result'];
        });
    };
    EditAccountsDataentryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-accounts-dataentry',
            template: __webpack_require__(/*! ./edit-accounts-dataentry.component.html */ "./src/app/layout/accounts/components/edit-accounts-dataentry/edit-accounts-dataentry.component.html"),
            styles: [__webpack_require__(/*! ./edit-accounts-dataentry.component.scss */ "./src/app/layout/accounts/components/edit-accounts-dataentry/edit-accounts-dataentry.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_3__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_4__["MaintenanceService"],
            _accounts_service__WEBPACK_IMPORTED_MODULE_6__["AccountsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"]])
    ], EditAccountsDataentryComponent);
    return EditAccountsDataentryComponent;
}());



/***/ }),

/***/ "./src/app/layout/accounts/components/list-accounts-dataentry/list-accounts-dataentry.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/accounts/components/list-accounts-dataentry/list-accounts-dataentry.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Accounts Data Entry'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/accounts/components/list-accounts-dataentry/list-accounts-dataentry.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/accounts/components/list-accounts-dataentry/list-accounts-dataentry.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hY2NvdW50cy9jb21wb25lbnRzL2xpc3QtYWNjb3VudHMtZGF0YWVudHJ5L2xpc3QtYWNjb3VudHMtZGF0YWVudHJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/accounts/components/list-accounts-dataentry/list-accounts-dataentry.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/accounts/components/list-accounts-dataentry/list-accounts-dataentry.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ListAccountsDataentryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAccountsDataentryComponent", function() { return ListAccountsDataentryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _accounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../accounts.service */ "./src/app/layout/accounts/accounts.service.ts");
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





var ListAccountsDataentryComponent = /** @class */ (function () {
    function ListAccountsDataentryComponent(router, meta, as) {
        this.router = router;
        this.meta = meta;
        this.as = as;
        this.addButtonInfo = { text: 'Add Accounts Data Entry', url: '/accounts/add-accounts-dataentry' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('accounts/accounts-dataentry');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Accountname / User Name' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Site', name: 'site', sort: true },
                { title: 'Type', name: 'ade_type', sort: true },
                { title: 'Vouch.No', name: 'ade_number', sort: true },
                { title: 'Vouch Date', name: 'ade_date', dateFormat: 'fullDate', sort: false },
                { title: 'Dr_name', name: 'draccount_name', sort: true },
                { title: 'Cr_name', name: 'craccount_name', sort: true },
                { title: 'Amount', name: 'amount', sort: false },
                { title: 'User', name: 'user', sort: true },
                { title: 'Actions', links: ['Edit', 'Delete'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Site', name: 'site', sort: true },
                { title: 'Type', name: 'ade_type', sort: true },
                { title: 'Vouch.No', name: 'ade_number', sort: true },
                { title: 'Vouch Date', name: 'ade_date', dateFormat: 'fullDate', sort: false },
                { title: 'Dr_name', name: 'draccount_name', sort: true },
                { title: 'Cr_name', name: 'craccount_name', sort: true },
                { title: 'Amount', name: 'amount', sort: false },
                { title: 'User', name: 'user', sort: true },
                { title: 'Actions', links: ['Edit'] }
            ];
        }
    }
    ListAccountsDataentryComponent.prototype.ngOnInit = function () {
    };
    ListAccountsDataentryComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/accounts/accounts-dataentry/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListAccountsDataentryComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListAccountsDataentryComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.as.deleteAde(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) {
            console.log(error);
        });
    };
    ListAccountsDataentryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-accounts-dataentry',
            template: __webpack_require__(/*! ./list-accounts-dataentry.component.html */ "./src/app/layout/accounts/components/list-accounts-dataentry/list-accounts-dataentry.component.html"),
            styles: [__webpack_require__(/*! ./list-accounts-dataentry.component.scss */ "./src/app/layout/accounts/components/list-accounts-dataentry/list-accounts-dataentry.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"]])
    ], ListAccountsDataentryComponent);
    return ListAccountsDataentryComponent;
}());



/***/ }),

/***/ "./src/app/layout/accounts/components/monthly-outstanding/monthly-outstanding.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/accounts/components/monthly-outstanding/monthly-outstanding.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n      <form [formGroup]=\"filterForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4><i class=\"fa fa-book\"></i> Monthly Outstanding</h4>\r\n            <hr />\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Select Sites</label>\r\n              <select formControlName=\"site_name\" class=\"form-control\" required>\r\n                <option value=\"\">All</option>\r\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                  {{ s.branch_name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Select Type</label>\r\n              <select formControlName=\"type\" class=\"form-control\">\r\n                <option value=\"\">--Select--</option>\r\n                <option *ngFor=\"let t of types\" value=\"{{ t.value }}\">\r\n                  {{ t.type_name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>As on Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp\"\r\n                  formControlName=\"start_date\"\r\n                  ngbDatepicker\r\n                  #d=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-4 wrapper-right\">\r\n            <button (click)=\"fetchReport()\" class=\"btn btn-primary\">\r\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\r\n            </button>&nbsp;\r\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <hr />\r\n\r\n      <!-- <ngb-pagination\r\n          [(page)]=\"pagination.currenPage\"\r\n          [pageSize]=\"pagination.pageSize\"\r\n          [collectionSize]=\"pagination.total\"\r\n          [maxSize]=\"pagination.maxSize\"\r\n          (pageChange)=\"fetchReport()\"\r\n        ></ngb-pagination>-->\r\n      <table class=\"table table-hover table-striped table-bordered table-condensed \">\r\n         <!-- mytable tableFixHead -->\r\n        <thead>\r\n          <tr>\r\n            <th>Account name</th>\r\n            <th class=\"cell-align\">Dr.</th>\r\n            <th class=\"cell-align\">Cr.</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr *ngIf=\"loading\">\r\n            <td colspan=\"10\">\r\n              <div class=\"showbox\">\r\n                <div class=\"loader\">\r\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr *ngFor=\"let m of monthlyData\">\r\n            <td>{{ m.account_name ? m.account_name : '--' }}</td>\r\n            <td class=\"cell-align\">{{ (m.dr ? m.dr : 0 ) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (m.cr ? m.cr : 0)  | number : '1.2-2' }}</td>\r\n          </tr>\r\n\r\n          <tr *ngIf=\"monthlyData.length > 0\">\r\n              <td align=\"left\" colspan=\"1\">TOTAL</td>\r\n              <td align=\"right\">{{totalDr | number : '1.2-2'}}</td>\r\n              <td align=\"right\">{{totalCr | number : '1.2-2'}}</td>\r\n          </tr>\r\n          <tr *ngIf=\" loaded && monthlyData.length === 0\">\r\n            <td align=\"center\" colspan=\"4\">No data available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <!-- <ngb-pagination\r\n          [(page)]=\"pagination.currenPage\"\r\n          [pageSize]=\"pagination.pageSize\"\r\n          [collectionSize]=\"pagination.total\"\r\n          [maxSize]=\"pagination.maxSize\"\r\n          (pageChange)=\"fetchReport()\"\r\n        ></ngb-pagination> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/accounts/components/monthly-outstanding/monthly-outstanding.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/accounts/components/monthly-outstanding/monthly-outstanding.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hY2NvdW50cy9jb21wb25lbnRzL21vbnRobHktb3V0c3RhbmRpbmcvbW9udGhseS1vdXRzdGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/accounts/components/monthly-outstanding/monthly-outstanding.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/accounts/components/monthly-outstanding/monthly-outstanding.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: MonthlyOutstandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlyOutstandingComponent", function() { return MonthlyOutstandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/accounts.service */ "./src/app/shared/services/accounts.service.ts");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
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







var MonthlyOutstandingComponent = /** @class */ (function () {
    function MonthlyOutstandingComponent(formBuilder, toastr, accountService, calendar, meta) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.accountService = accountService;
        this.calendar = calendar;
        this.meta = meta;
        this.monthlyData = [];
        this.loading = false;
        this.types = [
            { type_name: 'All', value: '' },
            { type_name: 'Sundry Debtors', value: 'Sundry Debtors' },
            { type_name: 'Sundry Creditors', value: 'Sundry Creditors' },
        ];
        this.filters = {
            site_name: '',
            start_date: '',
            // end_date: '',
            category: '',
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
            // end_date: [''],
            type: ['']
        });
    }
    MonthlyOutstandingComponent.prototype.ngOnInit = function () {
        this.filterForm.controls['start_date'].setValue(this.calendar.getToday());
        this.getSites();
    };
    // getSites() {
    //     this.meta.getSites().subscribe((res: any) => {
    //         this.sites = res;
    //         if (this.usertype === 'ADMIN') {
    //             this.filterForm.controls['site_name'].setValue(this.sites[0].branch_name);
    //         } else {
    //             this.filterForm.controls['site_name'].setValue(this.site_name);
    //         }
    //     }, err => {
    //     });
    // }
    MonthlyOutstandingComponent.prototype.getSites = function () {
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
    MonthlyOutstandingComponent.prototype.resetFilters = function () {
        this.filterForm.get('start_date').setValue('');
        // this.filterForm.get('end_date').setValue('');
        this.filters = {
            site_name: '',
            start_date: '',
            // end_date: '',
            category: '',
            page: 0
        };
        this.fetchReport();
    };
    MonthlyOutstandingComponent.prototype.fetchReport = function () {
        var _this = this;
        var startDt = '';
        // let endDt = '';
        if (this.filterForm.controls['site_name'].value) {
            this.filters.site_name = this.filterForm.controls['site_name'].value;
        }
        else {
            this.filters.site_name = '';
        }
        if (this.filterForm.controls['type'].value) {
            this.filters.category = this.filterForm.controls['type'].value;
        }
        else {
            this.filters.category = '';
        }
        if (this.filterForm.controls['start_date'].value) {
            startDt = this.filterForm.controls['start_date'].value.year + '-' +
                this.filterForm.controls['start_date'].value.month + '-' +
                this.filterForm.controls['start_date'].value.day;
        }
        else {
            startDt = '';
        }
        // if (this.filterForm.controls['end_date'].value) {
        //     endDt = this.filterForm.controls['end_date'].value.year + '-' +
        //         this.filterForm.controls['end_date'].value.month + '-' +
        //         (this.filterForm.controls['end_date'].value.day);
        // } else {
        //     endDt = '';
        // }
        this.filters.page = this.pagination.currenPage;
        this.filters.start_date = startDt;
        // this.filters.end_date = endDt;
        this.loading = true;
        this.loaded = false;
        this.monthlyData = [];
        this.accountService.getMonthlyOutstanding(this.filters).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            _this.totalDr = 0;
            _this.totalCr = 0;
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
    MonthlyOutstandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monthly-outstanding',
            template: __webpack_require__(/*! ./monthly-outstanding.component.html */ "./src/app/layout/accounts/components/monthly-outstanding/monthly-outstanding.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./monthly-outstanding.component.scss */ "./src/app/layout/accounts/components/monthly-outstanding/monthly-outstanding.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_shared_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCalendar"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__["MetaService"]])
    ], MonthlyOutstandingComponent);
    return MonthlyOutstandingComponent;
}());



/***/ }),

/***/ "./src/app/layout/accounts/components/trial-balance/trial-balance.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/accounts/components/trial-balance/trial-balance.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 min-height\">\r\n      <form [formGroup]=\"filterForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4><i class=\"fa fa-book\"></i> Trial Balance</h4>\r\n            <hr />\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Select Sites</label>\r\n              <select formControlName=\"site_name\" class=\"form-control\" required>\r\n                <option value=\"\">All</option>\r\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                  {{ s.branch_name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>As On Date</label>\r\n              <div class=\"input-group datepicker-input\">\r\n                <input\r\n                  class=\"form-control\"\r\n                  placeholder=\"dd/mm/yyyy\"\r\n                  name=\"dp\"\r\n                  formControlName=\"start_date\"\r\n                  ngbDatepicker\r\n                  #d=\"ngbDatepicker\"\r\n                />\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 wrapper-right\">\r\n            <button (click)=\"fetchReport()\" class=\"btn btn-primary\">\r\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\r\n            </button>&nbsp;\r\n            <button (click)=\"resetFilters()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Reset </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <hr />\r\n      <!-- <ngb-pagination\r\n          [(page)]=\"pagination.currenPage\"\r\n          [pageSize]=\"pagination.pageSize\"\r\n          [collectionSize]=\"pagination.total\"\r\n          [maxSize]=\"pagination.maxSize\"\r\n          (pageChange)=\"fetchReport()\"\r\n        ></ngb-pagination>-->\r\n\r\n      <table class=\"table table-hover table-striped table-bordered table-condensed\">\r\n        <thead>\r\n          <tr>\r\n            <th>Account name</th>\r\n            <th class=\"cell-align\">Dr.</th>\r\n            <th class=\"cell-align\">Cr.</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngIf=\"loading\">\r\n            <td colspan=\"10\">\r\n              <div class=\"showbox\">\r\n                <div class=\"loader\">\r\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let balance of trialBalances\">\r\n            <td>{{ balance.account_name ? balance.account_name : '--' }}</td>\r\n            <td class=\"cell-align\">{{ (balance.dr ? balance.dr : 0 ) | number : '1.2-2' }}</td>\r\n            <td class=\"cell-align\">{{ (balance.cr ? balance.cr : 0)  | number : '1.2-2' }}</td>\r\n          </tr>\r\n          <tr *ngIf=\"trialBalances.length > 0\">\r\n            <td align=\"right\" colspan=\"1\">Total</td>\r\n            <td align=\"right\">{{totalDr | number : '1.2-2'}}</td>\r\n            <td align=\"right\">{{totalCr | number : '1.2-2'}}</td>\r\n          </tr>\r\n          <tr *ngIf=\" loaded && trialBalances.length === 0\">\r\n            <td align=\"center\" colspan=\"1\">No data available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <!-- <ngb-pagination\r\n          [(page)]=\"pagination.currenPage\"\r\n          [pageSize]=\"pagination.pageSize\"\r\n          [collectionSize]=\"pagination.total\"\r\n          [maxSize]=\"pagination.maxSize\"\r\n          (pageChange)=\"fetchReport()\"\r\n        ></ngb-pagination> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/accounts/components/trial-balance/trial-balance.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/accounts/components/trial-balance/trial-balance.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hY2NvdW50cy9jb21wb25lbnRzL3RyaWFsLWJhbGFuY2UvdHJpYWwtYmFsYW5jZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/accounts/components/trial-balance/trial-balance.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/accounts/components/trial-balance/trial-balance.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TrialBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrialBalanceComponent", function() { return TrialBalanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/accounts.service */ "./src/app/shared/services/accounts.service.ts");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
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







var TrialBalanceComponent = /** @class */ (function () {
    function TrialBalanceComponent(formBuilder, toastr, accountService, calendar, meta) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.accountService = accountService;
        this.calendar = calendar;
        this.meta = meta;
        this.trialBalances = [];
        this.loading = false;
        this.filters = {
            site_name: '',
            start_date: '',
            // end_date: '',
            page: 0
        };
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.totalDr = 0;
        this.totalCr = 0;
        this.loaded = true;
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        this.filterForm = this.formBuilder.group({
            site_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            start_date: [''],
        });
    }
    TrialBalanceComponent.prototype.ngOnInit = function () {
        this.filterForm.controls['start_date'].setValue(this.calendar.getToday());
        this.getSites();
        // this.fetchReport();
    };
    TrialBalanceComponent.prototype.getSites = function () {
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
    TrialBalanceComponent.prototype.resetFilters = function () {
        this.filterForm.get('start_date').setValue('');
        this.filterForm.get('end_date').setValue('');
        this.filters = {
            site_name: '',
            start_date: '',
            // end_date: '',
            page: 0
        };
        this.fetchReport();
    };
    TrialBalanceComponent.prototype.fetchReport = function () {
        var _this = this;
        var startDt = '';
        // let endDt = '';
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
        // if (this.filterForm.controls['end_date'].value) {
        //     endDt = this.filterForm.controls['end_date'].value.year + '-' +
        //         this.filterForm.controls['end_date'].value.month + '-' +
        //         (this.filterForm.controls['end_date'].value.day);
        // } else {
        //     endDt = '';
        // }
        this.filters.page = this.pagination.currenPage;
        this.filters.start_date = startDt;
        // this.filters.end_date = endDt;
        this.loading = true;
        this.loaded = false;
        this.trialBalances = [];
        console.log('', this.filters);
        this.accountService.getTrialBalance(this.filters).subscribe(function (res) {
            _this.loading = false;
            _this.loaded = true;
            console.log(' trialBalances >>>', res.result);
            _this.totalDr = 0;
            _this.totalCr = 0;
            res.result.forEach(function (element) {
                _this.totalDr = _this.totalDr + element.dr;
                _this.totalCr = _this.totalCr + element.cr;
            });
            _this.trialBalances = res.result;
            // this.pagination.total = res.total;
        }, function (err) {
            _this.loaded = true;
            _this.loading = false;
        });
    };
    TrialBalanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trial-balance',
            template: __webpack_require__(/*! ./trial-balance.component.html */ "./src/app/layout/accounts/components/trial-balance/trial-balance.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./trial-balance.component.scss */ "./src/app/layout/accounts/components/trial-balance/trial-balance.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            src_app_shared_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCalendar"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__["MetaService"]])
    ], TrialBalanceComponent);
    return TrialBalanceComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/accounts.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/accounts.service.ts ***!
  \*****************************************************/
/*! exports provided: AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return AccountsService; });
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


var AccountsService = /** @class */ (function () {
    function AccountsService(api) {
        this.api = api;
    }
    AccountsService.prototype.getTrialBalance = function (filters) {
        // return this.api.get('reports/site_trial_balance', filters);
        // return this.api.get('reports/trial_balance_check', filters);
        // return this.api.get('reports/trial_balance', filters);
        // return this.api.get('reports/trial_balance_new', filters);
        return this.api.get('reports/trialbalance_new', filters);
    };
    AccountsService.prototype.getMonthlyOutstanding = function (filters) {
        return this.api.get('reports/site_monthly_outstanding', filters);
    };
    AccountsService.prototype.getBalanceStock = function (filters) {
        return this.api.get('reports/site_balance_stock', filters);
    };
    AccountsService.prototype.addTransaction = function (data) {
        return this.api.post('accounts_transaction/create', data);
    };
    AccountsService.prototype.deleteTransaction = function (id) {
        return this.api.delete('accounts_transaction/delete?id=' + id);
    };
    AccountsService.prototype.getTransactions = function () {
        return this.api.get('accounts_transaction/list');
    };
    AccountsService.prototype.updateTransaction = function (id, data) {
        return this.api.put('accounts_transaction/update?id=' + id, data);
    };
    AccountsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], AccountsService);
    return AccountsService;
}());



/***/ })

}]);
//# sourceMappingURL=accounts-accounts-module.js.map