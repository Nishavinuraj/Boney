(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-privileges-admin-privileges-module"],{

/***/ "./src/app/layout/admin-privileges/admin-privileges-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/admin-privileges-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AdminPrivilegesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPrivilegesRoutingModule", function() { return AdminPrivilegesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_privileges_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-privileges.component */ "./src/app/layout/admin-privileges/admin-privileges.component.ts");
/* harmony import */ var _components_sync_plan_list_sync_plan_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sync-plan-list/sync-plan-list.component */ "./src/app/layout/admin-privileges/components/sync-plan-list/sync-plan-list.component.ts");
/* harmony import */ var _components_plants_rate_list_plants_rate_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/plants-rate-list/plants-rate-list.component */ "./src/app/layout/admin-privileges/components/plants-rate-list/plants-rate-list.component.ts");
/* harmony import */ var _components_gps_rate_list_gps_rate_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/gps-rate-list/gps-rate-list.component */ "./src/app/layout/admin-privileges/components/gps-rate-list/gps-rate-list.component.ts");
/* harmony import */ var _components_plants_rate_multiple_destination_plants_rate_multiple_destination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/plants-rate-multiple-destination/plants-rate-multiple-destination.component */ "./src/app/layout/admin-privileges/components/plants-rate-multiple-destination/plants-rate-multiple-destination.component.ts");
/* harmony import */ var _components_site_multiple_destination_site_multiple_destination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/site-multiple-destination/site-multiple-destination.component */ "./src/app/layout/admin-privileges/components/site-multiple-destination/site-multiple-destination.component.ts");
/* harmony import */ var _components_site_truck_expenses_site_truck_expenses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/site-truck-expenses/site-truck-expenses.component */ "./src/app/layout/admin-privileges/components/site-truck-expenses/site-truck-expenses.component.ts");
/* harmony import */ var _components_fleet_targets_fleet_targets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/fleet-targets/fleet-targets.component */ "./src/app/layout/admin-privileges/components/fleet-targets/fleet-targets.component.ts");
/* harmony import */ var _components_import_site_truck_expense_import_site_truck_expense_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/import-site-truck-expense/import-site-truck-expense.component */ "./src/app/layout/admin-privileges/components/import-site-truck-expense/import-site-truck-expense.component.ts");
/* harmony import */ var _components_import_plant_rate_list_import_plant_rate_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/import-plant-rate-list/import-plant-rate-list.component */ "./src/app/layout/admin-privileges/components/import-plant-rate-list/import-plant-rate-list.component.ts");
/* harmony import */ var _components_user_creation_user_creation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user-creation/user-creation.component */ "./src/app/layout/admin-privileges/components/user-creation/user-creation.component.ts");
/* harmony import */ var _components_user_creation_list_user_creation_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user-creation-list/user-creation-list.component */ "./src/app/layout/admin-privileges/components/user-creation-list/user-creation-list.component.ts");
/* harmony import */ var _components_agent_assigned_site_agent_assigned_site_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/agent-assigned-site/agent-assigned-site.component */ "./src/app/layout/admin-privileges/components/agent-assigned-site/agent-assigned-site.component.ts");
/* harmony import */ var _components_update_plant_rate_list_update_plant_rate_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/update-plant-rate-list/update-plant-rate-list.component */ "./src/app/layout/admin-privileges/components/update-plant-rate-list/update-plant-rate-list.component.ts");
/* harmony import */ var _components_add_tyre_ratelist_add_tyre_ratelist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/add-tyre-ratelist/add-tyre-ratelist.component */ "./src/app/layout/admin-privileges/components/add-tyre-ratelist/add-tyre-ratelist.component.ts");
/* harmony import */ var _components_edit_tyre_ratelist_edit_tyre_ratelist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/edit-tyre-ratelist/edit-tyre-ratelist.component */ "./src/app/layout/admin-privileges/components/edit-tyre-ratelist/edit-tyre-ratelist.component.ts");
/* harmony import */ var _components_view_tyre_ratelist_view_tyre_ratelist_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/view-tyre-ratelist/view-tyre-ratelist.component */ "./src/app/layout/admin-privileges/components/view-tyre-ratelist/view-tyre-ratelist.component.ts");
/* harmony import */ var _components_list_tyre_ratelist_list_tyre_ratelist_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/list-tyre-ratelist/list-tyre-ratelist.component */ "./src/app/layout/admin-privileges/components/list-tyre-ratelist/list-tyre-ratelist.component.ts");
/* harmony import */ var _components_tyreratelist_reslover__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/tyreratelist-reslover */ "./src/app/layout/admin-privileges/components/tyreratelist-reslover.ts");
/* harmony import */ var _components_add_site_profile_add_site_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/add-site-profile/add-site-profile.component */ "./src/app/layout/admin-privileges/components/add-site-profile/add-site-profile.component.ts");
/* harmony import */ var _components_edit_site_profile_edit_site_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/edit-site-profile/edit-site-profile.component */ "./src/app/layout/admin-privileges/components/edit-site-profile/edit-site-profile.component.ts");
/* harmony import */ var _components_list_site_profile_list_site_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/list-site-profile/list-site-profile.component */ "./src/app/layout/admin-privileges/components/list-site-profile/list-site-profile.component.ts");
/* harmony import */ var _components_siteprofile_reslover__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/siteprofile-reslover */ "./src/app/layout/admin-privileges/components/siteprofile-reslover.ts");
/* harmony import */ var _components_add_broker_master_add_broker_master_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/add-broker-master/add-broker-master.component */ "./src/app/layout/admin-privileges/components/add-broker-master/add-broker-master.component.ts");
/* harmony import */ var _components_edit_broker_master_edit_broker_master_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/edit-broker-master/edit-broker-master.component */ "./src/app/layout/admin-privileges/components/edit-broker-master/edit-broker-master.component.ts");
/* harmony import */ var _components_list_broker_master_list_broker_master_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/list-broker-master/list-broker-master.component */ "./src/app/layout/admin-privileges/components/list-broker-master/list-broker-master.component.ts");
/* harmony import */ var _components_brokermaster_reslover__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/brokermaster-reslover */ "./src/app/layout/admin-privileges/components/brokermaster-reslover.ts");
/* harmony import */ var _components_add_diesal_ratemaster_add_diesal_ratemaster_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/add-diesal-ratemaster/add-diesal-ratemaster.component */ "./src/app/layout/admin-privileges/components/add-diesal-ratemaster/add-diesal-ratemaster.component.ts");
/* harmony import */ var _components_edit_diesal_ratemaster_edit_diesal_ratemaster_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/edit-diesal-ratemaster/edit-diesal-ratemaster.component */ "./src/app/layout/admin-privileges/components/edit-diesal-ratemaster/edit-diesal-ratemaster.component.ts");
/* harmony import */ var _components_list_diesal_ratemaster_list_diesal_ratemaster_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/list-diesal-ratemaster/list-diesal-ratemaster.component */ "./src/app/layout/admin-privileges/components/list-diesal-ratemaster/list-diesal-ratemaster.component.ts");
/* harmony import */ var _components_diesalratemaster_reslover__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/diesalratemaster-reslover */ "./src/app/layout/admin-privileges/components/diesalratemaster-reslover.ts");
/* harmony import */ var _components_add_consignee_master_add_consignee_master_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/add-consignee-master/add-consignee-master.component */ "./src/app/layout/admin-privileges/components/add-consignee-master/add-consignee-master.component.ts");
/* harmony import */ var _components_edit_consignee_master_edit_consignee_master_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/edit-consignee-master/edit-consignee-master.component */ "./src/app/layout/admin-privileges/components/edit-consignee-master/edit-consignee-master.component.ts");
/* harmony import */ var _components_list_consignee_master_list_consignee_master_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/list-consignee-master/list-consignee-master.component */ "./src/app/layout/admin-privileges/components/list-consignee-master/list-consignee-master.component.ts");
/* harmony import */ var _components_consigneemaster_reslover__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/consigneemaster-reslover */ "./src/app/layout/admin-privileges/components/consigneemaster-reslover.ts");
/* harmony import */ var _components_add_site_petrolpump_add_site_petrolpump_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/add-site-petrolpump/add-site-petrolpump.component */ "./src/app/layout/admin-privileges/components/add-site-petrolpump/add-site-petrolpump.component.ts");
/* harmony import */ var _components_edit_site_petrolpump_edit_site_petrolpump_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/edit-site-petrolpump/edit-site-petrolpump.component */ "./src/app/layout/admin-privileges/components/edit-site-petrolpump/edit-site-petrolpump.component.ts");
/* harmony import */ var _components_list_site_petrolpump_list_site_petrolpump_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/list-site-petrolpump/list-site-petrolpump.component */ "./src/app/layout/admin-privileges/components/list-site-petrolpump/list-site-petrolpump.component.ts");
/* harmony import */ var _components_sitepetrolpump_reslover__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/sitepetrolpump-reslover */ "./src/app/layout/admin-privileges/components/sitepetrolpump-reslover.ts");
/* harmony import */ var _components_list_site_destinationkms_list_site_destinationkms_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/list-site-destinationkms/list-site-destinationkms.component */ "./src/app/layout/admin-privileges/components/list-site-destinationkms/list-site-destinationkms.component.ts");
/* harmony import */ var _components_edit_site_destinationkms_edit_site_destinationkms_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/edit-site-destinationkms/edit-site-destinationkms.component */ "./src/app/layout/admin-privileges/components/edit-site-destinationkms/edit-site-destinationkms.component.ts");
/* harmony import */ var _components_add_site_destinationkms_add_site_destinationkms_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/add-site-destinationkms/add-site-destinationkms.component */ "./src/app/layout/admin-privileges/components/add-site-destinationkms/add-site-destinationkms.component.ts");
/* harmony import */ var _components_sitedestinationkms_reslover__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/sitedestinationkms-reslover */ "./src/app/layout/admin-privileges/components/sitedestinationkms-reslover.ts");
/* harmony import */ var _components_add_truck_average_add_truck_average_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/add-truck-average/add-truck-average.component */ "./src/app/layout/admin-privileges/components/add-truck-average/add-truck-average.component.ts");
/* harmony import */ var _components_list_truck_average_list_truck_average_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/list-truck-average/list-truck-average.component */ "./src/app/layout/admin-privileges/components/list-truck-average/list-truck-average.component.ts");
/* harmony import */ var _components_edit_truck_average_edit_truck_average_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/edit-truck-average/edit-truck-average.component */ "./src/app/layout/admin-privileges/components/edit-truck-average/edit-truck-average.component.ts");
/* harmony import */ var _components_truckaverage_reslover__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/truckaverage-reslover */ "./src/app/layout/admin-privileges/components/truckaverage-reslover.ts");
/* harmony import */ var _components_add_tyre_target_master_add_tyre_target_master_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/add-tyre-target-master/add-tyre-target-master.component */ "./src/app/layout/admin-privileges/components/add-tyre-target-master/add-tyre-target-master.component.ts");
/* harmony import */ var _components_list_tyre_target_master_list_tyre_target_master_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/list-tyre-target-master/list-tyre-target-master.component */ "./src/app/layout/admin-privileges/components/list-tyre-target-master/list-tyre-target-master.component.ts");
/* harmony import */ var _components_edit_tyre_target_master_edit_tyre_target_master_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/edit-tyre-target-master/edit-tyre-target-master.component */ "./src/app/layout/admin-privileges/components/edit-tyre-target-master/edit-tyre-target-master.component.ts");
/* harmony import */ var _components_tyretargetmaster_reslover__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/tyretargetmaster-reslover */ "./src/app/layout/admin-privileges/components/tyretargetmaster-reslover.ts");
/* harmony import */ var _components_add_admin_master_add_admin_master_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/add-admin-master/add-admin-master.component */ "./src/app/layout/admin-privileges/components/add-admin-master/add-admin-master.component.ts");
/* harmony import */ var _components_list_admin_master_list_admin_master_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/list-admin-master/list-admin-master.component */ "./src/app/layout/admin-privileges/components/list-admin-master/list-admin-master.component.ts");
/* harmony import */ var _components_edit_admin_master_edit_admin_master_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/edit-admin-master/edit-admin-master.component */ "./src/app/layout/admin-privileges/components/edit-admin-master/edit-admin-master.component.ts");
/* harmony import */ var _components_adminmaster_reslover__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/adminmaster-reslover */ "./src/app/layout/admin-privileges/components/adminmaster-reslover.ts");
/* harmony import */ var _components_add_accounts_master_add_accounts_master_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/add-accounts-master/add-accounts-master.component */ "./src/app/layout/admin-privileges/components/add-accounts-master/add-accounts-master.component.ts");
/* harmony import */ var _components_edit_accounts_master_edit_accounts_master_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/edit-accounts-master/edit-accounts-master.component */ "./src/app/layout/admin-privileges/components/edit-accounts-master/edit-accounts-master.component.ts");
/* harmony import */ var _components_list_accounts_master_list_accounts_master_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/list-accounts-master/list-accounts-master.component */ "./src/app/layout/admin-privileges/components/list-accounts-master/list-accounts-master.component.ts");
/* harmony import */ var _components_accountsmaster_reslover__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/accountsmaster-reslover */ "./src/app/layout/admin-privileges/components/accountsmaster-reslover.ts");
/* harmony import */ var _components_add_accounts_category_add_accounts_category_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/add-accounts-category/add-accounts-category.component */ "./src/app/layout/admin-privileges/components/add-accounts-category/add-accounts-category.component.ts");
/* harmony import */ var _components_edit_accounts_category_edit_accounts_category_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/edit-accounts-category/edit-accounts-category.component */ "./src/app/layout/admin-privileges/components/edit-accounts-category/edit-accounts-category.component.ts");
/* harmony import */ var _components_list_accounts_category_list_accounts_category_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/list-accounts-category/list-accounts-category.component */ "./src/app/layout/admin-privileges/components/list-accounts-category/list-accounts-category.component.ts");
/* harmony import */ var _components_accountscategory_reslover__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/accountscategory-reslover */ "./src/app/layout/admin-privileges/components/accountscategory-reslover.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// tyre-ratelist





// site profile




// broker master




// diesal rates master




// Consignee master




// site petrol pump




// site destination kms




// truck average




// tyre-target-master




// admin-master




// Accounts Master




// Accounts Category




var routes = [
    {
        path: '',
        component: _admin_privileges_component__WEBPACK_IMPORTED_MODULE_2__["AdminPrivilegesComponent"],
        children: [
            { path: '', redirectTo: 'sync-plan-list', pathMatch: 'prefix' },
            { path: 'sync-plan-list', component: _components_sync_plan_list_sync_plan_list_component__WEBPACK_IMPORTED_MODULE_3__["SyncPlanListComponent"] },
            { path: 'plants-rate-list', component: _components_plants_rate_list_plants_rate_list_component__WEBPACK_IMPORTED_MODULE_4__["PlantsRateListComponent"] },
            // Tyre Rate List
            { path: 'tyre-ratelist', component: _components_list_tyre_ratelist_list_tyre_ratelist_component__WEBPACK_IMPORTED_MODULE_19__["ListTyreRatelistComponent"] },
            { path: 'tyre-ratelist/:id/view', component: _components_view_tyre_ratelist_view_tyre_ratelist_component__WEBPACK_IMPORTED_MODULE_18__["ViewTyreRatelistComponent"], resolve: { trl_details: _components_tyreratelist_reslover__WEBPACK_IMPORTED_MODULE_20__["TyreratelistReslover"] } },
            { path: 'tyre-ratelist/:id/edit', component: _components_edit_tyre_ratelist_edit_tyre_ratelist_component__WEBPACK_IMPORTED_MODULE_17__["EditTyreRatelistComponent"], resolve: { trl_details: _components_tyreratelist_reslover__WEBPACK_IMPORTED_MODULE_20__["TyreratelistReslover"] } },
            { path: 'add-tyre-ratelist', component: _components_add_tyre_ratelist_add_tyre_ratelist_component__WEBPACK_IMPORTED_MODULE_16__["AddTyreRatelistComponent"] },
            // Site profile
            { path: 'site-profile', component: _components_list_site_profile_list_site_profile_component__WEBPACK_IMPORTED_MODULE_23__["ListSiteProfileComponent"] },
            { path: 'site-profile/:id/edit', component: _components_edit_site_profile_edit_site_profile_component__WEBPACK_IMPORTED_MODULE_22__["EditSiteProfileComponent"], resolve: { spro_details: _components_siteprofile_reslover__WEBPACK_IMPORTED_MODULE_24__["SiteprofileReslover"] } },
            { path: 'add-site-profile', component: _components_add_site_profile_add_site_profile_component__WEBPACK_IMPORTED_MODULE_21__["AddSiteProfileComponent"] },
            // Broker Master
            { path: 'broker-master', component: _components_list_broker_master_list_broker_master_component__WEBPACK_IMPORTED_MODULE_27__["ListBrokerMasterComponent"] },
            { path: 'broker-master/:id/edit', component: _components_edit_broker_master_edit_broker_master_component__WEBPACK_IMPORTED_MODULE_26__["EditBrokerMasterComponent"], resolve: { bm_details: _components_brokermaster_reslover__WEBPACK_IMPORTED_MODULE_28__["BrokermasterReslover"] } },
            { path: 'add-broker-master', component: _components_add_broker_master_add_broker_master_component__WEBPACK_IMPORTED_MODULE_25__["AddBrokerMasterComponent"] },
            // Diesal rate Master
            { path: 'diesal-ratemaster', component: _components_list_diesal_ratemaster_list_diesal_ratemaster_component__WEBPACK_IMPORTED_MODULE_31__["ListDiesalRatemasterComponent"] },
            { path: 'diesal-ratemaster/:id/edit', component: _components_edit_diesal_ratemaster_edit_diesal_ratemaster_component__WEBPACK_IMPORTED_MODULE_30__["EditDiesalRatemasterComponent"], resolve: { drm_details: _components_diesalratemaster_reslover__WEBPACK_IMPORTED_MODULE_32__["DiesalratemasterReslover"] } },
            { path: 'add-diesal-ratemaster', component: _components_add_diesal_ratemaster_add_diesal_ratemaster_component__WEBPACK_IMPORTED_MODULE_29__["AddDiesalRatemasterComponent"] },
            // Consignee Master
            { path: 'consignee-master', component: _components_list_consignee_master_list_consignee_master_component__WEBPACK_IMPORTED_MODULE_35__["ListConsigneeMasterComponent"] },
            { path: 'consignee-master/:id/edit', component: _components_edit_consignee_master_edit_consignee_master_component__WEBPACK_IMPORTED_MODULE_34__["EditConsigneeMasterComponent"], resolve: { cm_details: _components_consigneemaster_reslover__WEBPACK_IMPORTED_MODULE_36__["ConsigneemasterReslover"] } },
            { path: 'add-consignee-master', component: _components_add_consignee_master_add_consignee_master_component__WEBPACK_IMPORTED_MODULE_33__["AddConsigneeMasterComponent"] },
            // Site Petrol Pump
            { path: 'site-petrolpump', component: _components_list_site_petrolpump_list_site_petrolpump_component__WEBPACK_IMPORTED_MODULE_39__["ListSitePetrolpumpComponent"] },
            { path: 'site-petrolpump/:id/edit', component: _components_edit_site_petrolpump_edit_site_petrolpump_component__WEBPACK_IMPORTED_MODULE_38__["EditSitePetrolpumpComponent"], resolve: { spp_details: _components_sitepetrolpump_reslover__WEBPACK_IMPORTED_MODULE_40__["SitepetrolpumpReslover"] } },
            { path: 'add-site-petrolpump', component: _components_add_site_petrolpump_add_site_petrolpump_component__WEBPACK_IMPORTED_MODULE_37__["AddSitePetrolpumpComponent"] },
            // Accounts - Master
            { path: 'accounts-master', component: _components_list_accounts_master_list_accounts_master_component__WEBPACK_IMPORTED_MODULE_59__["ListAccountsMasterComponent"] },
            { path: 'accounts-master/:id/edit', component: _components_edit_accounts_master_edit_accounts_master_component__WEBPACK_IMPORTED_MODULE_58__["EditAccountsMasterComponent"], resolve: { am_details: _components_accountsmaster_reslover__WEBPACK_IMPORTED_MODULE_60__["AccountsmasterReslover"] } },
            { path: 'add-accounts-master', component: _components_add_accounts_master_add_accounts_master_component__WEBPACK_IMPORTED_MODULE_57__["AddAccountsMasterComponent"] },
            // Accounts - Category
            { path: 'accounts-category', component: _components_list_accounts_category_list_accounts_category_component__WEBPACK_IMPORTED_MODULE_63__["ListAccountsCategoryComponent"] },
            { path: 'accounts-category/:id/edit', component: _components_edit_accounts_category_edit_accounts_category_component__WEBPACK_IMPORTED_MODULE_62__["EditAccountsCategoryComponent"], resolve: { ac_details: _components_accountscategory_reslover__WEBPACK_IMPORTED_MODULE_64__["AccountscategoryReslover"] } },
            { path: 'add-accounts-category', component: _components_add_accounts_category_add_accounts_category_component__WEBPACK_IMPORTED_MODULE_61__["AddAccountsCategoryComponent"] },
            // Site destinationkms
            { path: 'site-destinationkms', component: _components_list_site_destinationkms_list_site_destinationkms_component__WEBPACK_IMPORTED_MODULE_41__["ListSiteDestinationkmsComponent"] },
            { path: 'site-destinationkms/:id/edit', component: _components_edit_site_destinationkms_edit_site_destinationkms_component__WEBPACK_IMPORTED_MODULE_42__["EditSiteDestinationkmsComponent"], resolve: { sdk_details: _components_sitedestinationkms_reslover__WEBPACK_IMPORTED_MODULE_44__["SitedestinationkmsReslover"] } },
            { path: 'add-site-destinationkms', component: _components_add_site_destinationkms_add_site_destinationkms_component__WEBPACK_IMPORTED_MODULE_43__["AddSiteDestinationkmsComponent"] },
            // Truck Average
            { path: 'truck-average', component: _components_list_truck_average_list_truck_average_component__WEBPACK_IMPORTED_MODULE_46__["ListTruckAverageComponent"] },
            { path: 'truck-average/:id/edit', component: _components_edit_truck_average_edit_truck_average_component__WEBPACK_IMPORTED_MODULE_47__["EditTruckAverageComponent"], resolve: { ta_details: _components_truckaverage_reslover__WEBPACK_IMPORTED_MODULE_48__["TruckaverageReslover"] } },
            { path: 'add-truck-average', component: _components_add_truck_average_add_truck_average_component__WEBPACK_IMPORTED_MODULE_45__["AddTruckAverageComponent"] },
            // Tyre target master
            { path: 'tyre-target-master', component: _components_list_tyre_target_master_list_tyre_target_master_component__WEBPACK_IMPORTED_MODULE_50__["ListTyreTargetMasterComponent"] },
            { path: 'tyre-target-master/:id/edit', component: _components_edit_tyre_target_master_edit_tyre_target_master_component__WEBPACK_IMPORTED_MODULE_51__["EditTyreTargetMasterComponent"], resolve: { ttm_details: _components_tyretargetmaster_reslover__WEBPACK_IMPORTED_MODULE_52__["TyretargetmasterReslover"] } },
            { path: 'add-tyre-target-master', component: _components_add_tyre_target_master_add_tyre_target_master_component__WEBPACK_IMPORTED_MODULE_49__["AddTyreTargetMasterComponent"] },
            // Admin master
            { path: 'admin-master', component: _components_list_admin_master_list_admin_master_component__WEBPACK_IMPORTED_MODULE_54__["ListAdminMasterComponent"] },
            { path: 'admin-master/:id/edit', component: _components_edit_admin_master_edit_admin_master_component__WEBPACK_IMPORTED_MODULE_55__["EditAdminMasterComponent"], resolve: { am_details: _components_adminmaster_reslover__WEBPACK_IMPORTED_MODULE_56__["AdminmasterReslover"] } },
            { path: 'add-admin-master', component: _components_add_admin_master_add_admin_master_component__WEBPACK_IMPORTED_MODULE_53__["AddAdminMasterComponent"] },
            { path: 'site-truck-expenses', component: _components_site_truck_expenses_site_truck_expenses_component__WEBPACK_IMPORTED_MODULE_8__["SiteTruckExpensesComponent"] },
            { path: 'gps-rate-list', component: _components_gps_rate_list_gps_rate_list_component__WEBPACK_IMPORTED_MODULE_5__["GpsRateListComponent"] },
            { path: 'site-multiple-destination/:name', component: _components_site_multiple_destination_site_multiple_destination_component__WEBPACK_IMPORTED_MODULE_7__["SiteMultipleDestinationComponent"] },
            { path: 'plants-rate-multiple-destination/:name', component: _components_plants_rate_multiple_destination_plants_rate_multiple_destination_component__WEBPACK_IMPORTED_MODULE_6__["PlantsRateMultipleDestinationComponent"] },
            { path: 'fleet-targets', component: _components_fleet_targets_fleet_targets_component__WEBPACK_IMPORTED_MODULE_9__["FleetTargetsComponent"] },
            { path: 'import-site-truck-expenses', component: _components_import_site_truck_expense_import_site_truck_expense_component__WEBPACK_IMPORTED_MODULE_10__["ImportSiteTruckExpenseComponent"] },
            { path: 'import-plant-rate-list', component: _components_import_plant_rate_list_import_plant_rate_list_component__WEBPACK_IMPORTED_MODULE_11__["ImportPlantRateListComponent"] },
            { path: 'update-plant-rate-list', component: _components_update_plant_rate_list_update_plant_rate_list_component__WEBPACK_IMPORTED_MODULE_15__["UpdatePlantRateListComponent"] },
            { path: 'user-create', component: _components_user_creation_user_creation_component__WEBPACK_IMPORTED_MODULE_12__["UserCreationComponent"] },
            { path: 'user-list', component: _components_user_creation_list_user_creation_list_component__WEBPACK_IMPORTED_MODULE_13__["UserCreationListComponent"] },
            { path: 'site-assign-to-agents', component: _components_agent_assigned_site_agent_assigned_site_component__WEBPACK_IMPORTED_MODULE_14__["AgentAssignedSiteComponent"] }
        ]
    }
];
var AdminPrivilegesRoutingModule = /** @class */ (function () {
    function AdminPrivilegesRoutingModule() {
    }
    AdminPrivilegesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminPrivilegesRoutingModule);
    return AdminPrivilegesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/admin-privileges.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/admin-privileges.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/admin-privileges.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/admin-privileges.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2FkbWluLXByaXZpbGVnZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/admin-privileges.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/admin-privileges/admin-privileges.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdminPrivilegesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPrivilegesComponent", function() { return AdminPrivilegesComponent; });
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

var AdminPrivilegesComponent = /** @class */ (function () {
    function AdminPrivilegesComponent() {
    }
    AdminPrivilegesComponent.prototype.ngOnInit = function () {
    };
    AdminPrivilegesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-privileges',
            template: __webpack_require__(/*! ./admin-privileges.component.html */ "./src/app/layout/admin-privileges/admin-privileges.component.html"),
            styles: [__webpack_require__(/*! ./admin-privileges.component.scss */ "./src/app/layout/admin-privileges/admin-privileges.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminPrivilegesComponent);
    return AdminPrivilegesComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/admin-privileges.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/admin-privileges/admin-privileges.module.ts ***!
  \********************************************************************/
/*! exports provided: AdminPrivilegesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPrivilegesModule", function() { return AdminPrivilegesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_privileges_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-privileges.component */ "./src/app/layout/admin-privileges/admin-privileges.component.ts");
/* harmony import */ var _components_sync_plan_list_sync_plan_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sync-plan-list/sync-plan-list.component */ "./src/app/layout/admin-privileges/components/sync-plan-list/sync-plan-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _admin_privileges_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-privileges-routing.module */ "./src/app/layout/admin-privileges/admin-privileges-routing.module.ts");
/* harmony import */ var _components_plants_rate_list_plants_rate_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/plants-rate-list/plants-rate-list.component */ "./src/app/layout/admin-privileges/components/plants-rate-list/plants-rate-list.component.ts");
/* harmony import */ var _components_gps_rate_list_gps_rate_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/gps-rate-list/gps-rate-list.component */ "./src/app/layout/admin-privileges/components/gps-rate-list/gps-rate-list.component.ts");
/* harmony import */ var _components_site_truck_expenses_site_truck_expenses_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/site-truck-expenses/site-truck-expenses.component */ "./src/app/layout/admin-privileges/components/site-truck-expenses/site-truck-expenses.component.ts");
/* harmony import */ var _components_plants_rate_multiple_destination_plants_rate_multiple_destination_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/plants-rate-multiple-destination/plants-rate-multiple-destination.component */ "./src/app/layout/admin-privileges/components/plants-rate-multiple-destination/plants-rate-multiple-destination.component.ts");
/* harmony import */ var _components_site_multiple_destination_site_multiple_destination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/site-multiple-destination/site-multiple-destination.component */ "./src/app/layout/admin-privileges/components/site-multiple-destination/site-multiple-destination.component.ts");
/* harmony import */ var _components_fleet_targets_fleet_targets_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/fleet-targets/fleet-targets.component */ "./src/app/layout/admin-privileges/components/fleet-targets/fleet-targets.component.ts");
/* harmony import */ var _components_import_site_truck_expense_import_site_truck_expense_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/import-site-truck-expense/import-site-truck-expense.component */ "./src/app/layout/admin-privileges/components/import-site-truck-expense/import-site-truck-expense.component.ts");
/* harmony import */ var _components_import_plant_rate_list_import_plant_rate_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/import-plant-rate-list/import-plant-rate-list.component */ "./src/app/layout/admin-privileges/components/import-plant-rate-list/import-plant-rate-list.component.ts");
/* harmony import */ var _components_user_creation_user_creation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user-creation/user-creation.component */ "./src/app/layout/admin-privileges/components/user-creation/user-creation.component.ts");
/* harmony import */ var _components_user_creation_list_user_creation_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/user-creation-list/user-creation-list.component */ "./src/app/layout/admin-privileges/components/user-creation-list/user-creation-list.component.ts");
/* harmony import */ var ng2_auto_complete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-auto-complete */ "./node_modules/ng2-auto-complete/dist/index.js");
/* harmony import */ var ng2_auto_complete__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ng2_auto_complete__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_agent_assigned_site_agent_assigned_site_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/agent-assigned-site/agent-assigned-site.component */ "./src/app/layout/admin-privileges/components/agent-assigned-site/agent-assigned-site.component.ts");
/* harmony import */ var _components_user_creation_edit_user_creation_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/user-creation-edit/user-creation-edit.component */ "./src/app/layout/admin-privileges/components/user-creation-edit/user-creation-edit.component.ts");
/* harmony import */ var _components_update_plant_rate_list_update_plant_rate_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/update-plant-rate-list/update-plant-rate-list.component */ "./src/app/layout/admin-privileges/components/update-plant-rate-list/update-plant-rate-list.component.ts");
/* harmony import */ var _components_add_tyre_ratelist_add_tyre_ratelist_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/add-tyre-ratelist/add-tyre-ratelist.component */ "./src/app/layout/admin-privileges/components/add-tyre-ratelist/add-tyre-ratelist.component.ts");
/* harmony import */ var _components_edit_tyre_ratelist_edit_tyre_ratelist_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/edit-tyre-ratelist/edit-tyre-ratelist.component */ "./src/app/layout/admin-privileges/components/edit-tyre-ratelist/edit-tyre-ratelist.component.ts");
/* harmony import */ var _components_list_tyre_ratelist_list_tyre_ratelist_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/list-tyre-ratelist/list-tyre-ratelist.component */ "./src/app/layout/admin-privileges/components/list-tyre-ratelist/list-tyre-ratelist.component.ts");
/* harmony import */ var _components_view_tyre_ratelist_view_tyre_ratelist_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/view-tyre-ratelist/view-tyre-ratelist.component */ "./src/app/layout/admin-privileges/components/view-tyre-ratelist/view-tyre-ratelist.component.ts");
/* harmony import */ var _components_tyreratelist_reslover__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/tyreratelist-reslover */ "./src/app/layout/admin-privileges/components/tyreratelist-reslover.ts");
/* harmony import */ var _components_adminprivileges_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
/* harmony import */ var _components_add_site_destinationkms_add_site_destinationkms_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/add-site-destinationkms/add-site-destinationkms.component */ "./src/app/layout/admin-privileges/components/add-site-destinationkms/add-site-destinationkms.component.ts");
/* harmony import */ var _components_edit_site_destinationkms_edit_site_destinationkms_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/edit-site-destinationkms/edit-site-destinationkms.component */ "./src/app/layout/admin-privileges/components/edit-site-destinationkms/edit-site-destinationkms.component.ts");
/* harmony import */ var _components_list_site_destinationkms_list_site_destinationkms_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/list-site-destinationkms/list-site-destinationkms.component */ "./src/app/layout/admin-privileges/components/list-site-destinationkms/list-site-destinationkms.component.ts");
/* harmony import */ var _components_sitedestinationkms_reslover__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/sitedestinationkms-reslover */ "./src/app/layout/admin-privileges/components/sitedestinationkms-reslover.ts");
/* harmony import */ var _components_add_truck_average_add_truck_average_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/add-truck-average/add-truck-average.component */ "./src/app/layout/admin-privileges/components/add-truck-average/add-truck-average.component.ts");
/* harmony import */ var _components_edit_truck_average_edit_truck_average_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/edit-truck-average/edit-truck-average.component */ "./src/app/layout/admin-privileges/components/edit-truck-average/edit-truck-average.component.ts");
/* harmony import */ var _components_list_truck_average_list_truck_average_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/list-truck-average/list-truck-average.component */ "./src/app/layout/admin-privileges/components/list-truck-average/list-truck-average.component.ts");
/* harmony import */ var _components_truckaverage_reslover__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/truckaverage-reslover */ "./src/app/layout/admin-privileges/components/truckaverage-reslover.ts");
/* harmony import */ var _components_add_site_petrolpump_add_site_petrolpump_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/add-site-petrolpump/add-site-petrolpump.component */ "./src/app/layout/admin-privileges/components/add-site-petrolpump/add-site-petrolpump.component.ts");
/* harmony import */ var _components_edit_site_petrolpump_edit_site_petrolpump_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/edit-site-petrolpump/edit-site-petrolpump.component */ "./src/app/layout/admin-privileges/components/edit-site-petrolpump/edit-site-petrolpump.component.ts");
/* harmony import */ var _components_list_site_petrolpump_list_site_petrolpump_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/list-site-petrolpump/list-site-petrolpump.component */ "./src/app/layout/admin-privileges/components/list-site-petrolpump/list-site-petrolpump.component.ts");
/* harmony import */ var _components_sitepetrolpump_reslover__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/sitepetrolpump-reslover */ "./src/app/layout/admin-privileges/components/sitepetrolpump-reslover.ts");
/* harmony import */ var _components_add_tyre_target_master_add_tyre_target_master_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/add-tyre-target-master/add-tyre-target-master.component */ "./src/app/layout/admin-privileges/components/add-tyre-target-master/add-tyre-target-master.component.ts");
/* harmony import */ var _components_edit_tyre_target_master_edit_tyre_target_master_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/edit-tyre-target-master/edit-tyre-target-master.component */ "./src/app/layout/admin-privileges/components/edit-tyre-target-master/edit-tyre-target-master.component.ts");
/* harmony import */ var _components_list_tyre_target_master_list_tyre_target_master_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/list-tyre-target-master/list-tyre-target-master.component */ "./src/app/layout/admin-privileges/components/list-tyre-target-master/list-tyre-target-master.component.ts");
/* harmony import */ var _components_tyretargetmaster_reslover__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/tyretargetmaster-reslover */ "./src/app/layout/admin-privileges/components/tyretargetmaster-reslover.ts");
/* harmony import */ var _components_add_admin_master_add_admin_master_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/add-admin-master/add-admin-master.component */ "./src/app/layout/admin-privileges/components/add-admin-master/add-admin-master.component.ts");
/* harmony import */ var _components_edit_admin_master_edit_admin_master_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/edit-admin-master/edit-admin-master.component */ "./src/app/layout/admin-privileges/components/edit-admin-master/edit-admin-master.component.ts");
/* harmony import */ var _components_list_admin_master_list_admin_master_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/list-admin-master/list-admin-master.component */ "./src/app/layout/admin-privileges/components/list-admin-master/list-admin-master.component.ts");
/* harmony import */ var _components_adminmaster_reslover__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/adminmaster-reslover */ "./src/app/layout/admin-privileges/components/adminmaster-reslover.ts");
/* harmony import */ var _components_add_site_profile_add_site_profile_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/add-site-profile/add-site-profile.component */ "./src/app/layout/admin-privileges/components/add-site-profile/add-site-profile.component.ts");
/* harmony import */ var _components_edit_site_profile_edit_site_profile_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/edit-site-profile/edit-site-profile.component */ "./src/app/layout/admin-privileges/components/edit-site-profile/edit-site-profile.component.ts");
/* harmony import */ var _components_list_site_profile_list_site_profile_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/list-site-profile/list-site-profile.component */ "./src/app/layout/admin-privileges/components/list-site-profile/list-site-profile.component.ts");
/* harmony import */ var _components_siteprofile_reslover__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/siteprofile-reslover */ "./src/app/layout/admin-privileges/components/siteprofile-reslover.ts");
/* harmony import */ var _components_add_broker_master_add_broker_master_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/add-broker-master/add-broker-master.component */ "./src/app/layout/admin-privileges/components/add-broker-master/add-broker-master.component.ts");
/* harmony import */ var _components_edit_broker_master_edit_broker_master_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/edit-broker-master/edit-broker-master.component */ "./src/app/layout/admin-privileges/components/edit-broker-master/edit-broker-master.component.ts");
/* harmony import */ var _components_list_broker_master_list_broker_master_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/list-broker-master/list-broker-master.component */ "./src/app/layout/admin-privileges/components/list-broker-master/list-broker-master.component.ts");
/* harmony import */ var _components_brokermaster_reslover__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/brokermaster-reslover */ "./src/app/layout/admin-privileges/components/brokermaster-reslover.ts");
/* harmony import */ var _components_add_consignee_master_add_consignee_master_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/add-consignee-master/add-consignee-master.component */ "./src/app/layout/admin-privileges/components/add-consignee-master/add-consignee-master.component.ts");
/* harmony import */ var _components_edit_consignee_master_edit_consignee_master_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/edit-consignee-master/edit-consignee-master.component */ "./src/app/layout/admin-privileges/components/edit-consignee-master/edit-consignee-master.component.ts");
/* harmony import */ var _components_list_consignee_master_list_consignee_master_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/list-consignee-master/list-consignee-master.component */ "./src/app/layout/admin-privileges/components/list-consignee-master/list-consignee-master.component.ts");
/* harmony import */ var _components_consigneemaster_reslover__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/consigneemaster-reslover */ "./src/app/layout/admin-privileges/components/consigneemaster-reslover.ts");
/* harmony import */ var _components_add_diesal_ratemaster_add_diesal_ratemaster_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/add-diesal-ratemaster/add-diesal-ratemaster.component */ "./src/app/layout/admin-privileges/components/add-diesal-ratemaster/add-diesal-ratemaster.component.ts");
/* harmony import */ var _components_edit_diesal_ratemaster_edit_diesal_ratemaster_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/edit-diesal-ratemaster/edit-diesal-ratemaster.component */ "./src/app/layout/admin-privileges/components/edit-diesal-ratemaster/edit-diesal-ratemaster.component.ts");
/* harmony import */ var _components_list_diesal_ratemaster_list_diesal_ratemaster_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/list-diesal-ratemaster/list-diesal-ratemaster.component */ "./src/app/layout/admin-privileges/components/list-diesal-ratemaster/list-diesal-ratemaster.component.ts");
/* harmony import */ var _components_diesalratemaster_reslover__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/diesalratemaster-reslover */ "./src/app/layout/admin-privileges/components/diesalratemaster-reslover.ts");
/* harmony import */ var _components_add_accounts_master_add_accounts_master_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./components/add-accounts-master/add-accounts-master.component */ "./src/app/layout/admin-privileges/components/add-accounts-master/add-accounts-master.component.ts");
/* harmony import */ var _components_edit_accounts_master_edit_accounts_master_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./components/edit-accounts-master/edit-accounts-master.component */ "./src/app/layout/admin-privileges/components/edit-accounts-master/edit-accounts-master.component.ts");
/* harmony import */ var _components_list_accounts_master_list_accounts_master_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./components/list-accounts-master/list-accounts-master.component */ "./src/app/layout/admin-privileges/components/list-accounts-master/list-accounts-master.component.ts");
/* harmony import */ var _components_accountsmaster_reslover__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./components/accountsmaster-reslover */ "./src/app/layout/admin-privileges/components/accountsmaster-reslover.ts");
/* harmony import */ var _components_add_accounts_category_add_accounts_category_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./components/add-accounts-category/add-accounts-category.component */ "./src/app/layout/admin-privileges/components/add-accounts-category/add-accounts-category.component.ts");
/* harmony import */ var _components_edit_accounts_category_edit_accounts_category_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./components/edit-accounts-category/edit-accounts-category.component */ "./src/app/layout/admin-privileges/components/edit-accounts-category/edit-accounts-category.component.ts");
/* harmony import */ var _components_list_accounts_category_list_accounts_category_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./components/list-accounts-category/list-accounts-category.component */ "./src/app/layout/admin-privileges/components/list-accounts-category/list-accounts-category.component.ts");
/* harmony import */ var _components_accountscategory_reslover__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./components/accountscategory-reslover */ "./src/app/layout/admin-privileges/components/accountscategory-reslover.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// tslint:disable-next-line:max-line-length











// tyre rate list






// site destination kms




// truck average








// tyre target master




// admin master




// site profile




// broker master




// consignee master




// diesal rate master




// accounts master




// accounts category




var AdminPrivilegesModule = /** @class */ (function () {
    function AdminPrivilegesModule() {
    }
    AdminPrivilegesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _admin_privileges_component__WEBPACK_IMPORTED_MODULE_2__["AdminPrivilegesComponent"],
                _components_sync_plan_list_sync_plan_list_component__WEBPACK_IMPORTED_MODULE_3__["SyncPlanListComponent"],
                _components_plants_rate_list_plants_rate_list_component__WEBPACK_IMPORTED_MODULE_9__["PlantsRateListComponent"],
                _components_gps_rate_list_gps_rate_list_component__WEBPACK_IMPORTED_MODULE_10__["GpsRateListComponent"],
                _components_site_truck_expenses_site_truck_expenses_component__WEBPACK_IMPORTED_MODULE_11__["SiteTruckExpensesComponent"],
                _components_plants_rate_multiple_destination_plants_rate_multiple_destination_component__WEBPACK_IMPORTED_MODULE_12__["PlantsRateMultipleDestinationComponent"],
                _components_site_multiple_destination_site_multiple_destination_component__WEBPACK_IMPORTED_MODULE_13__["SiteMultipleDestinationComponent"],
                _components_fleet_targets_fleet_targets_component__WEBPACK_IMPORTED_MODULE_14__["FleetTargetsComponent"],
                _components_import_site_truck_expense_import_site_truck_expense_component__WEBPACK_IMPORTED_MODULE_15__["ImportSiteTruckExpenseComponent"],
                _components_import_plant_rate_list_import_plant_rate_list_component__WEBPACK_IMPORTED_MODULE_16__["ImportPlantRateListComponent"],
                _components_user_creation_user_creation_component__WEBPACK_IMPORTED_MODULE_17__["UserCreationComponent"],
                _components_user_creation_list_user_creation_list_component__WEBPACK_IMPORTED_MODULE_18__["UserCreationListComponent"],
                _components_agent_assigned_site_agent_assigned_site_component__WEBPACK_IMPORTED_MODULE_20__["AgentAssignedSiteComponent"],
                _components_user_creation_edit_user_creation_edit_component__WEBPACK_IMPORTED_MODULE_21__["UserCreationEditComponent"],
                _components_update_plant_rate_list_update_plant_rate_list_component__WEBPACK_IMPORTED_MODULE_22__["UpdatePlantRateListComponent"],
                _components_add_tyre_ratelist_add_tyre_ratelist_component__WEBPACK_IMPORTED_MODULE_23__["AddTyreRatelistComponent"],
                _components_edit_tyre_ratelist_edit_tyre_ratelist_component__WEBPACK_IMPORTED_MODULE_24__["EditTyreRatelistComponent"],
                _components_list_tyre_ratelist_list_tyre_ratelist_component__WEBPACK_IMPORTED_MODULE_25__["ListTyreRatelistComponent"],
                _components_view_tyre_ratelist_view_tyre_ratelist_component__WEBPACK_IMPORTED_MODULE_26__["ViewTyreRatelistComponent"],
                _components_add_site_destinationkms_add_site_destinationkms_component__WEBPACK_IMPORTED_MODULE_29__["AddSiteDestinationkmsComponent"],
                _components_edit_site_destinationkms_edit_site_destinationkms_component__WEBPACK_IMPORTED_MODULE_30__["EditSiteDestinationkmsComponent"],
                _components_list_site_destinationkms_list_site_destinationkms_component__WEBPACK_IMPORTED_MODULE_31__["ListSiteDestinationkmsComponent"],
                _components_add_truck_average_add_truck_average_component__WEBPACK_IMPORTED_MODULE_33__["AddTruckAverageComponent"],
                _components_edit_truck_average_edit_truck_average_component__WEBPACK_IMPORTED_MODULE_34__["EditTruckAverageComponent"],
                _components_list_truck_average_list_truck_average_component__WEBPACK_IMPORTED_MODULE_35__["ListTruckAverageComponent"],
                _components_add_site_petrolpump_add_site_petrolpump_component__WEBPACK_IMPORTED_MODULE_37__["AddSitePetrolpumpComponent"],
                _components_edit_site_petrolpump_edit_site_petrolpump_component__WEBPACK_IMPORTED_MODULE_38__["EditSitePetrolpumpComponent"],
                _components_list_site_petrolpump_list_site_petrolpump_component__WEBPACK_IMPORTED_MODULE_39__["ListSitePetrolpumpComponent"],
                _components_add_tyre_target_master_add_tyre_target_master_component__WEBPACK_IMPORTED_MODULE_41__["AddTyreTargetMasterComponent"],
                _components_edit_tyre_target_master_edit_tyre_target_master_component__WEBPACK_IMPORTED_MODULE_42__["EditTyreTargetMasterComponent"],
                _components_list_tyre_target_master_list_tyre_target_master_component__WEBPACK_IMPORTED_MODULE_43__["ListTyreTargetMasterComponent"],
                _components_add_site_profile_add_site_profile_component__WEBPACK_IMPORTED_MODULE_49__["AddSiteProfileComponent"],
                _components_edit_site_profile_edit_site_profile_component__WEBPACK_IMPORTED_MODULE_50__["EditSiteProfileComponent"],
                _components_list_site_profile_list_site_profile_component__WEBPACK_IMPORTED_MODULE_51__["ListSiteProfileComponent"],
                _components_add_broker_master_add_broker_master_component__WEBPACK_IMPORTED_MODULE_53__["AddBrokerMasterComponent"],
                _components_edit_broker_master_edit_broker_master_component__WEBPACK_IMPORTED_MODULE_54__["EditBrokerMasterComponent"],
                _components_list_broker_master_list_broker_master_component__WEBPACK_IMPORTED_MODULE_55__["ListBrokerMasterComponent"],
                _components_add_consignee_master_add_consignee_master_component__WEBPACK_IMPORTED_MODULE_57__["AddConsigneeMasterComponent"],
                _components_edit_consignee_master_edit_consignee_master_component__WEBPACK_IMPORTED_MODULE_58__["EditConsigneeMasterComponent"],
                _components_list_consignee_master_list_consignee_master_component__WEBPACK_IMPORTED_MODULE_59__["ListConsigneeMasterComponent"],
                _components_add_diesal_ratemaster_add_diesal_ratemaster_component__WEBPACK_IMPORTED_MODULE_61__["AddDiesalRatemasterComponent"],
                _components_edit_diesal_ratemaster_edit_diesal_ratemaster_component__WEBPACK_IMPORTED_MODULE_62__["EditDiesalRatemasterComponent"],
                _components_list_diesal_ratemaster_list_diesal_ratemaster_component__WEBPACK_IMPORTED_MODULE_63__["ListDiesalRatemasterComponent"],
                _components_add_accounts_master_add_accounts_master_component__WEBPACK_IMPORTED_MODULE_65__["AddAccountsMasterComponent"],
                _components_edit_accounts_master_edit_accounts_master_component__WEBPACK_IMPORTED_MODULE_66__["EditAccountsMasterComponent"],
                _components_list_accounts_master_list_accounts_master_component__WEBPACK_IMPORTED_MODULE_67__["ListAccountsMasterComponent"],
                _components_add_accounts_category_add_accounts_category_component__WEBPACK_IMPORTED_MODULE_69__["AddAccountsCategoryComponent"],
                _components_edit_accounts_category_edit_accounts_category_component__WEBPACK_IMPORTED_MODULE_70__["EditAccountsCategoryComponent"],
                _components_list_accounts_category_list_accounts_category_component__WEBPACK_IMPORTED_MODULE_71__["ListAccountsCategoryComponent"],
                _components_add_admin_master_add_admin_master_component__WEBPACK_IMPORTED_MODULE_45__["AddAdminMasterComponent"],
                _components_edit_admin_master_edit_admin_master_component__WEBPACK_IMPORTED_MODULE_46__["EditAdminMasterComponent"],
                _components_list_admin_master_list_admin_master_component__WEBPACK_IMPORTED_MODULE_47__["ListAdminMasterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _admin_privileges_routing_module__WEBPACK_IMPORTED_MODULE_8__["AdminPrivilegesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                ng2_auto_complete__WEBPACK_IMPORTED_MODULE_19__["Ng2AutoCompleteModule"]
            ],
            providers: [
                _components_adminprivileges_service__WEBPACK_IMPORTED_MODULE_28__["AdminprivilegesService"],
                _components_tyreratelist_reslover__WEBPACK_IMPORTED_MODULE_27__["TyreratelistReslover"],
                _components_sitedestinationkms_reslover__WEBPACK_IMPORTED_MODULE_32__["SitedestinationkmsReslover"],
                _components_truckaverage_reslover__WEBPACK_IMPORTED_MODULE_36__["TruckaverageReslover"],
                _components_sitepetrolpump_reslover__WEBPACK_IMPORTED_MODULE_40__["SitepetrolpumpReslover"],
                _components_tyretargetmaster_reslover__WEBPACK_IMPORTED_MODULE_44__["TyretargetmasterReslover"],
                _components_adminmaster_reslover__WEBPACK_IMPORTED_MODULE_48__["AdminmasterReslover"],
                _components_siteprofile_reslover__WEBPACK_IMPORTED_MODULE_52__["SiteprofileReslover"],
                _components_brokermaster_reslover__WEBPACK_IMPORTED_MODULE_56__["BrokermasterReslover"],
                _components_consigneemaster_reslover__WEBPACK_IMPORTED_MODULE_60__["ConsigneemasterReslover"],
                _components_diesalratemaster_reslover__WEBPACK_IMPORTED_MODULE_64__["DiesalratemasterReslover"],
                _components_accountsmaster_reslover__WEBPACK_IMPORTED_MODULE_68__["AccountsmasterReslover"],
                _components_accountscategory_reslover__WEBPACK_IMPORTED_MODULE_72__["AccountscategoryReslover"]
            ],
            entryComponents: [
                _components_user_creation_edit_user_creation_edit_component__WEBPACK_IMPORTED_MODULE_21__["UserCreationEditComponent"]
            ]
        })
    ], AdminPrivilegesModule);
    return AdminPrivilegesModule;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/accountscategory-reslover.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/accountscategory-reslover.ts ***!
  \*********************************************************************************/
/*! exports provided: AccountscategoryReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountscategoryReslover", function() { return AccountscategoryReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountscategoryReslover = /** @class */ (function () {
    function AccountscategoryReslover(aps) {
        this.aps = aps;
    }
    AccountscategoryReslover.prototype.resolve = function (route) {
        return this.aps.getAc(route.paramMap.get('id'));
    };
    AccountscategoryReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__["AdminprivilegesService"]])
    ], AccountscategoryReslover);
    return AccountscategoryReslover;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/accountsmaster-reslover.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/accountsmaster-reslover.ts ***!
  \*******************************************************************************/
/*! exports provided: AccountsmasterReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsmasterReslover", function() { return AccountsmasterReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountsmasterReslover = /** @class */ (function () {
    function AccountsmasterReslover(aps) {
        this.aps = aps;
    }
    AccountsmasterReslover.prototype.resolve = function (route) {
        return this.aps.getAm(route.paramMap.get('id'));
    };
    AccountsmasterReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__["AdminprivilegesService"]])
    ], AccountsmasterReslover);
    return AccountsmasterReslover;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-accounts-category/add-accounts-category.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-accounts-category/add-accounts-category.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"AcForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Add Accounts Category</div>\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Category Name</label>\n            <input type=\"text\" formControlName=\"catname\" class=\"form-control\" placeholder=\"Category Name\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Type</label>\n            <select class=\"form-control\" formControlName=\"cattype\">\n              <option value=\"\">Select Type</option>\n              <option value=\"\"></option>\n              <option value=\"Primary\">Primary</option>\n            </select>\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Under Group</label>\n            <ng-select [items]=\"undergroup_options\" placeholder=\"Type and UnderGropu\" bindLabel=\"catname\" bindValue=\"catname\"\n              formControlName=\"undergroup\">\n            </ng-select>\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Accounts</label>\n            <select class=\"form-control\" formControlName=\"accounts\">\n              <option value=\"\">Select Accounts</option>\n              <option value=\"Trading\">Trading</option>\n              <option value=\"Profit and Loss\">Profit and Loss</option>\n              <option value=\"Balance Sheet\">Balance Sheet</option>\n            </select>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>DrCr</label>\n            <select class=\"form-control\" formControlName=\"drcr\">\n              <option value=\"\">Select Account Mode</option>\n              <option value=\"Debit\">Debit</option>\n              <option value=\"Credit\">Credit</option>\n            </select>\n          </div>\n      </div>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!AcForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-accounts-category/add-accounts-category.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-accounts-category/add-accounts-category.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvYWRkLWFjY291bnRzLWNhdGVnb3J5L2FkZC1hY2NvdW50cy1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-accounts-category/add-accounts-category.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-accounts-category/add-accounts-category.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AddAccountsCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccountsCategoryComponent", function() { return AddAccountsCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddAccountsCategoryComponent = /** @class */ (function () {
    function AddAccountsCategoryComponent(fb, metaService, as, router) {
        this.fb = fb;
        this.metaService = metaService;
        this.as = as;
        this.router = router;
    }
    AddAccountsCategoryComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getOptions();
    };
    AddAccountsCategoryComponent.prototype.buildForm = function () {
        this.AcForm = this.fb.group({
            'catname': [''],
            'cattype': [''],
            'undergroup': [''],
            'accounts': [''],
            'drcr': [''],
        });
    };
    AddAccountsCategoryComponent.prototype.save = function () {
        var _this = this;
        console.log('Accounts Category Save', this.AcForm.value);
        this.process = 'saving';
        this.as.addAc(this.AcForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/accounts-category']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddAccountsCategoryComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getCatNamesGroup().subscribe(function (siteInfo) {
            _this.undergroup_options = siteInfo['result'];
        });
    };
    AddAccountsCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-accounts-category',
            template: __webpack_require__(/*! ./add-accounts-category.component.html */ "./src/app/layout/admin-privileges/components/add-accounts-category/add-accounts-category.component.html"),
            styles: [__webpack_require__(/*! ./add-accounts-category.component.scss */ "./src/app/layout/admin-privileges/components/add-accounts-category/add-accounts-category.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddAccountsCategoryComponent);
    return AddAccountsCategoryComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-accounts-master/add-accounts-master.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-accounts-master/add-accounts-master.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"amForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"col-md-12\">\n          <h4><i></i> Add Accounts Master</h4>\n        </div>\n      </div>\n\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Account Name</label>\n            <input type=\"text\" formControlName=\"accountname\" class=\"form-control\" placeholder=\"Account Name\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Category</label>\n            <ng-select [items]=\"category_options\" placeholder=\"Type and search Category\" bindLabel=\"catname\" bindValue=\"catname\"\n              formControlName=\"category\">\n            </ng-select>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Group</label>\n            <ng-select [items]=\"group_options\" placeholder=\"Type and search Group\" bindLabel=\"catname\" bindValue=\"catname\"\n              formControlName=\"group\">\n            </ng-select>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Account Type</label>\n            <ng-select [items]=\"accounttype_options\" placeholder=\"Type and search Type\" bindLabel=\"name\" bindValue=\"name\"\n              formControlName=\"accounttype\">\n            </ng-select>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Under Ledger</label>\n            <ng-select [items]=\"underledger_options\" placeholder=\"Type and search Under Ledger\" bindLabel=\"accountname\" bindValue=\"accountname\"\n              formControlName=\"underledger\">\n            </ng-select>\n          </div>\n          <div class=\"col-md-3\">\n            <label >Site</label>\n            <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n              formControlName=\"site\" class=\"auto-entry\">\n            </ng-select>\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Gst No.</label>\n            <input type=\"text\" formControlName=\"gstnumber\" class=\"form-control\" placeholder=\"Gst No\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Pan No.</label>\n            <input type=\"text\" formControlName=\"panno\" class=\"form-control\" placeholder=\"Pan No.\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Vendor Code</label>\n            <input type=\"text\" formControlName=\"vcode\" class=\"form-control\" placeholder=\"Vendor Code\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Contact Person Name</label>\n            <input type=\"text\" formControlName=\"contactpersonname\" class=\"form-control\" placeholder=\"Name\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Email</label>\n            <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Mobile 1</label>\n            <input type=\"number\" formControlName=\"mobile1\" class=\"form-control\" placeholder=\"Mobile No.\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Mobile 2</label>\n            <input type=\"number\" formControlName=\"mobile2\" class=\"form-control\" placeholder=\"Mobile No.\">\n          </div>\n\n          <div class=\"col-md-12\">\n            <h4><i></i> Balances</h4>\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Opening Balance</label>\n            <input type=\"text\" formControlName=\"opbal\" class=\"form-control\" placeholder=\"Opening Balance\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>O.DrCr</label>\n            <select class=\"form-control\" formControlName=\"ocrdr\">\n              <option value=\"\">Select Account Mode</option>\n              <option value=\"Debit\">Debit</option>\n              <option value=\"Credit\">Credit</option>\n            </select>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Closing Balance</label>\n            <input type=\"text\" formControlName=\"clbal\" class=\"form-control\" placeholder=\"Closing Balance\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>C.DrCr</label>\n            <select class=\"form-control\" formControlName=\"cdrcr\">\n              <option value=\"\">Select Account Mode</option>\n              <option value=\"Debit\">Debit</option>\n              <option value=\"Credit\">Credit</option>\n            </select>\n          </div>\n\n          <div class=\"col-md-12\">\n            <h4><i class=\"fa fa-truck\"></i> Shipping Address</h4>\n            <hr />\n          </div>\n\n            <div class=\"col-lg-3 col-md-3\">\n              <label>Street 1</label>\n              <input type=\"text\" formControlName=\"bstreet1\" class=\"form-control\" placeholder=\"Steet 1\">\n            </div>\n            <div class=\"col-lg-3 col-md-3\">\n              <label>Street 2</label>\n              <input type=\"text\" formControlName=\"bstreet2\" class=\"form-control\" placeholder=\"Steet 2\">\n            </div>\n            <div class=\"col-lg-3 col-md-3\">\n              <label>City</label>\n              <ng-select [items]=\"bcity_options\" placeholder=\"Type and search City\" bindLabel=\"name\" bindValue=\"name\"\n                formControlName=\"bcity\">\n              </ng-select>\n            </div>\n            <div class=\"col-lg-3 col-md-3\">\n              <label>State</label>\n              <ng-select [items]=\"bstate_options\" placeholder=\"Type and search State\" bindLabel=\"name\" bindValue=\"name\"\n                formControlName=\"bstate\">\n              </ng-select>\n            </div>\n            <div class=\"col-lg-3 col-md-3\">\n              <label>PinCode</label>\n              <input type=\"number\" formControlName=\"bzip\" class=\"form-control\" placeholder=\"Pin No\">\n            </div>\n            <div class=\"col-lg-3 col-md-3\">\n              <label>Country</label>\n              <ng-select [items]=\"bcountry_options\" placeholder=\"Type and search country\" bindLabel=\"name\" bindValue=\"name\"\n                formControlName=\"bcountry\">\n              </ng-select>\n            </div>\n\n            <div class=\"col-lg-3 col-md-3\">\n              <label>Phone No</label>\n              <input type=\"number\" formControlName=\"bphone\" class=\"form-control\" placeholder=\"Phone No\">\n            </div>\n\n          <div class=\"col-md-12\">\n            <h4><i class=\"fa fa-truck\"></i> Shipping Details</h4>\n            <hr />\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Street 1</label>\n            <input type=\"text\" formControlName=\"sstreet1\" class=\"form-control\" placeholder=\"Steet 1\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Street 2</label>\n            <input type=\"text\" formControlName=\"sstreet2\" class=\"form-control\" placeholder=\"Steet 2\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>City</label>\n            <ng-select [items]=\"scity_options\" placeholder=\"Type and search City\" bindLabel=\"name\" bindValue=\"name\"\n              formControlName=\"scity\">\n            </ng-select>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>State</label>\n            <ng-select [items]=\"sstate_options\" placeholder=\"Type and search State\" bindLabel=\"name\" bindValue=\"name\"\n              formControlName=\"sstate\">\n            </ng-select>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>PinCode</label>\n            <input type=\"number\" formControlName=\"bzip\" class=\"form-control\" placeholder=\"Pin No\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Country</label>\n            <ng-select [items]=\"scountry_options\" placeholder=\"Type and search country\" bindLabel=\"name\" bindValue=\"name\"\n              formControlName=\"scountry\">\n            </ng-select>\n          </div>\n        <div class=\"col-lg-3 col-md-3\">\n            <label>Phone No</label>\n            <input type=\"number\" formControlName=\"sphone\" class=\"form-control\" placeholder=\"Phone No\">\n          </div>\n      </div>\n\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!amForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-accounts-master/add-accounts-master.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-accounts-master/add-accounts-master.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvYWRkLWFjY291bnRzLW1hc3Rlci9hZGQtYWNjb3VudHMtbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-accounts-master/add-accounts-master.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-accounts-master/add-accounts-master.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AddAccountsMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccountsMasterComponent", function() { return AddAccountsMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddAccountsMasterComponent = /** @class */ (function () {
    function AddAccountsMasterComponent(fb, metaService, as, router) {
        this.fb = fb;
        this.metaService = metaService;
        this.as = as;
        this.router = router;
        this.loading = false;
        // public siteOptions: any;
        this.siteOptions = [];
        this.usertype = this.metaService.getSiteFromStorage().role;
        this.site_name = this.metaService.getSiteFromStorage().site;
    }
    AddAccountsMasterComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getOptions();
        this.getSites();
    };
    AddAccountsMasterComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            // if (this.usertype === 'ADMIN') {
            //   // this.amForm.controls['site'].setValue(this.siteOptions[0].branch_name);
            // } else {
            //   this.amForm.controls['site'].setValue(this.site_name);
            // }
        }, function (err) {
            _this.loading = false;
        });
    };
    AddAccountsMasterComponent.prototype.buildForm = function () {
        this.amForm = this.fb.group({
            'accountname': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'category': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'group': [''],
            'accounttype': [''],
            'site': [''],
            'underledger': [''],
            'gstnumber': [''],
            'panno': [''],
            'vcode': [''],
            'contactpersonname': [''],
            'email': [''],
            'mobile1': [''],
            'mobile2': [''],
            'opbal': [0],
            'ocrdr': ['Debit'],
            'clbal': [0],
            'cdrcr': ['Debit'],
            'bstreet1': [''],
            'bstreet2': [''],
            'bcity': ['Nagpur'],
            'bstate': ['Maharashtra'],
            'bzip': [''],
            'bcountry': ['India'],
            'bphone': [''],
            'sstreet1': [''],
            'sstreet2': [''],
            'scity': ['Nagpur'],
            'sstate': ['Maharashtra'],
            'szip': [''],
            'scountry': ['India'],
            'sphone': [''],
        });
    };
    AddAccountsMasterComponent.prototype.save = function () {
        var _this = this;
        console.log('Accounts Master Save', this.amForm.value);
        this.process = 'saving';
        this.as.addAm(this.amForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/accounts-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddAccountsMasterComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getCatNames().subscribe(function (siteInfo) {
            _this.category_options = siteInfo['result'];
        });
        this.metaService.getCatNamesGroup().subscribe(function (siteInfo) {
            _this.group_options = siteInfo['result'];
        });
        this.metaService.getAccounttype().subscribe(function (siteInfo) {
            _this.accounttype_options = siteInfo['result'];
        });
        this.metaService.getUnderledger().subscribe(function (siteInfo) {
            _this.underledger_options = siteInfo['result'];
        });
        this.metaService.getcity().subscribe(function (siteInfo) {
            _this.bcity_options = siteInfo['result'];
        });
        this.metaService.getstate().subscribe(function (siteInfo) {
            _this.bstate_options = siteInfo['result'];
        });
        this.metaService.getcountry().subscribe(function (siteInfo) {
            _this.bcountry_options = siteInfo['result'];
        });
        this.metaService.getcity().subscribe(function (siteInfo) {
            _this.scity_options = siteInfo['result'];
        });
        this.metaService.getstate().subscribe(function (siteInfo) {
            _this.sstate_options = siteInfo['result'];
        });
        this.metaService.getcountry().subscribe(function (siteInfo) {
            _this.scountry_options = siteInfo['result'];
        });
    };
    AddAccountsMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-accounts-master',
            template: __webpack_require__(/*! ./add-accounts-master.component.html */ "./src/app/layout/admin-privileges/components/add-accounts-master/add-accounts-master.component.html"),
            styles: [__webpack_require__(/*! ./add-accounts-master.component.scss */ "./src/app/layout/admin-privileges/components/add-accounts-master/add-accounts-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddAccountsMasterComponent);
    return AddAccountsMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-admin-master/add-admin-master.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-admin-master/add-admin-master.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"admForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Add Admin Master</div>\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n          <div class=\"col-lg-3 col-md-3\">\n              <label class=\"required\">Name</label>\n              <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                placeholder=\"Name\">\n            </div>\n\n            <div class=\"col-lg-3 col-md-3\">\n              <label class=\"required\">Type</label>\n              <select class=\"form-control manual-entry\" formControlName=\"field\">\n                <option value=\"\">Select Type</option>\n                <option value=\"AC\">AC</option>\n                <option value=\"AT\">AT</option>\n                <option value=\"CType\">CType</option>\n                <option value=\"Department\">Department</option>\n                <option value=\"Destination\">Destination</option>\n                <option value=\"Exp\">Exp</option>\n                <option value=\"Godown\">Godown</option>\n                <option value=\"HSNcode\">HSNcode</option>\n                <option value=\"Item Category\">Item Category</option>\n                <option value=\"Item Type\">Item Type</option>\n                <option value=\"Product\">Product</option>\n                <option value=\"Product Type\">Product Type</option>\n                <option value=\"Site\">Site</option>\n                <option value=\"Unit\">Unit</option>\n              </select>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"card-footer\">\n      <button class=\"btn btn-success float-right\" (click)=\"saveitems()\" [disabled]=\"!admForm.valid || process == 'saving'\" type=\"button\">\n        Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n      </button>\n    </div>\n\n  </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-admin-master/add-admin-master.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-admin-master/add-admin-master.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvYWRkLWFkbWluLW1hc3Rlci9hZGQtYWRtaW4tbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-admin-master/add-admin-master.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-admin-master/add-admin-master.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AddAdminMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdminMasterComponent", function() { return AddAdminMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
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




var AddAdminMasterComponent = /** @class */ (function () {
    function AddAdminMasterComponent(fb, as, router) {
        this.fb = fb;
        this.as = as;
        this.router = router;
    }
    AddAdminMasterComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getOptions();
    };
    AddAdminMasterComponent.prototype.buildForm = function () {
        this.admForm = this.fb.group({
            'name': [''],
            'field': ['']
        });
    };
    AddAdminMasterComponent.prototype.saveitems = function () {
        var _this = this;
        this.process = 'saving';
        console.log(this.admForm.value);
        this.as.addAdm(this.admForm.value).subscribe(function (ordersInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/admin-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddAdminMasterComponent.prototype.getOptions = function () {
    };
    AddAdminMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-admin-master',
            template: __webpack_require__(/*! ./add-admin-master.component.html */ "./src/app/layout/admin-privileges/components/add-admin-master/add-admin-master.component.html"),
            styles: [__webpack_require__(/*! ./add-admin-master.component.scss */ "./src/app/layout/admin-privileges/components/add-admin-master/add-admin-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_2__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddAdminMasterComponent);
    return AddAdminMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-broker-master/add-broker-master.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-broker-master/add-broker-master.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"sdkForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Add Broker Master</div>\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n\n          <div class=\"col-lg-3 col-md-3\">\n          <label class=\"required\">Site</label>\n          <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n            formControlName=\"site\">\n          </ng-select>\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label>Broker Name</label>\n          <input type=\"text\" formControlName=\"brokername\" class=\"form-control\" placeholder=\"Broker Name\">\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label>Mobile No.</label>\n          <input type=\"text\" formControlName=\"mobileno\" class=\"form-control\" placeholder=\"Mobile No\">\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label>Pan No</label>\n          <input type=\"text\" formControlName=\"panno\" class=\"form-control\" placeholder=\"Pan No\">\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label>Address</label>\n          <input type=\"text\" formControlName=\"address\" class=\"form-control\" placeholder=\"Address\">\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label>City</label>\n          <input type=\"text\" formControlName=\"city\" class=\"form-control\" placeholder=\"city\">\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label class=\"required\">State</label>\n          <ng-select [items]=\"state_option\" placeholder=\"State\" bindLabel=\"statename\" bindValue=\"statename\"\n            formControlName=\"state\">\n          </ng-select>\n        </div>\n\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label>Pin No</label>\n          <input type=\"text\" formControlName=\"pinno\" class=\"form-control\" placeholder=\"Pin No\">\n        </div>\n\n      </div>\n\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!sdkForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-broker-master/add-broker-master.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-broker-master/add-broker-master.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvYWRkLWJyb2tlci1tYXN0ZXIvYWRkLWJyb2tlci1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-broker-master/add-broker-master.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-broker-master/add-broker-master.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AddBrokerMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBrokerMasterComponent", function() { return AddBrokerMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddBrokerMasterComponent = /** @class */ (function () {
    function AddBrokerMasterComponent(fb, metaService, as, router) {
        this.fb = fb;
        this.metaService = metaService;
        this.as = as;
        this.router = router;
        this.loading = false;
        this.usertype = this.metaService.getSiteFromStorage().role;
        this.site_name = this.metaService.getSiteFromStorage().site;
    }
    AddBrokerMasterComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getOptions();
        this.getSites();
    };
    AddBrokerMasterComponent.prototype.buildForm = function () {
        this.sdkForm = this.fb.group({
            'site': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'brokername': [''],
            'mobileno': [''],
            'panno': [''],
            'address': [''],
            'city': [''],
            'state': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'pinno': [''],
        });
    };
    AddBrokerMasterComponent.prototype.save = function () {
        var _this = this;
        console.log('Site Profile Save', this.sdkForm.value);
        this.process = 'saving';
        this.as.addBm(this.sdkForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/broker-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddBrokerMasterComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                _this.sdkForm.controls['site'].setValue(_this.siteOptions[0].branch_name);
            }
            else {
                _this.sdkForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    AddBrokerMasterComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getStateList().subscribe(function (trackInfo) {
            _this.state_option = trackInfo['result'];
            console.log('>>>>StateIndia', trackInfo['result']);
        });
    };
    AddBrokerMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-broker-master',
            template: __webpack_require__(/*! ./add-broker-master.component.html */ "./src/app/layout/admin-privileges/components/add-broker-master/add-broker-master.component.html"),
            styles: [__webpack_require__(/*! ./add-broker-master.component.scss */ "./src/app/layout/admin-privileges/components/add-broker-master/add-broker-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddBrokerMasterComponent);
    return AddBrokerMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-consignee-master/add-consignee-master.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-consignee-master/add-consignee-master.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"cmForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Add Consignee Master</div>\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n        <div class=\"col-lg-3 col-md-3\">\n          <label class=\"required\">Site</label>\n          <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n            formControlName=\"site\">\n          </ng-select>\n        </div>\n        <div class=\"col-lg-3 col-md-3\">\n          <label>Consignee Name</label>\n          <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"Consignee Name\">\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label>Mobile No.</label>\n          <input type=\"text\" formControlName=\"mobile\" class=\"form-control\" placeholder=\"Mobile No\">\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label>Gst No</label>\n          <input type=\"text\" formControlName=\"gst\" class=\"form-control\" placeholder=\"Gst No\">\n        </div>\n\n      </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Sub Dealer Details\n                <button class=\"btn btn-primary float-right\" (click)=\"addCmItems()\" [disabled]=\"!cmForm.valid\"\n                  type=\"button\">\n                  Add Sub Dealer\n                </button>\n              </div>\n              <!-- /.box-header -->\n              <div class=\"card-body\" *ngIf=\"cmForm.controls.multidest.controls.length > 0\">\n                <table class=\"table table-bordered\" formArrayName=\"multidest\">\n                  <tr>\n                    <th>Sub Dealer Name and Unloading Address</th>\n                    <th>Contact Person</th>\n                    <th>Phone No</th>\n                    <th>Action</th>\n                  </tr>\n                  \n                  <tr *ngFor=\"let school of cmForm.controls.multidest.controls; let i=index\" formGroupName=\"{{i}}\">\n                    <td>\n                      <input type=\"text\" formControlName=\"unloadingaddress\" class=\"form-control\">\n                    </td>\n                    <td>\n                      <input type=\"text\" formControlName=\"contactperson\" class=\"form-control\">\n                    </td>\n                    <td>\n                      <input type=\"text\" formControlName=\"phoneno\" class=\"form-control\">\n                    </td>\n\n                    <td>\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"cmForm.controls?.multidest.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                      </button>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n              <div class=\"card-body\" *ngIf=\"cmForm.controls?.multidest.controls.length == 0\">\n                <p>Please select vendor</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!cmForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-consignee-master/add-consignee-master.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-consignee-master/add-consignee-master.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvYWRkLWNvbnNpZ25lZS1tYXN0ZXIvYWRkLWNvbnNpZ25lZS1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-consignee-master/add-consignee-master.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-consignee-master/add-consignee-master.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AddConsigneeMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddConsigneeMasterComponent", function() { return AddConsigneeMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddConsigneeMasterComponent = /** @class */ (function () {
    function AddConsigneeMasterComponent(fb, metaService, as, router) {
        this.fb = fb;
        this.metaService = metaService;
        this.as = as;
        this.router = router;
        this.loading = false;
        this.usertype = this.metaService.getSiteFromStorage().role;
        this.site_name = this.metaService.getSiteFromStorage().site;
    }
    AddConsigneeMasterComponent.prototype.ngOnInit = function () {
        this.buildForm();
        // this.cmForm.controls.multidest.valueChanges.subscribe(changes => {
        //   this.updateValues();
        // });
        this.getOptions();
        this.getSites();
    };
    AddConsigneeMasterComponent.prototype.buildForm = function () {
        this.cmForm = this.fb.group({
            'site': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'name': [''],
            'mobile': [''],
            'gst': [''],
            'multidest': this.fb.array([]),
        });
        this.addCmItems();
    };
    AddConsigneeMasterComponent.prototype.initItems = function () {
        return this.fb.group({
            'unloadingaddress': [''],
            'contactperson': [''],
            'phoneno': ['']
        });
    };
    AddConsigneeMasterComponent.prototype.addCmItems = function () {
        var control = this.cmForm.controls['multidest'];
        control.push(this.initItems());
    };
    AddConsigneeMasterComponent.prototype.removeItems = function (i) {
        var control = this.cmForm.controls['multidest'];
        control.removeAt(i);
    };
    AddConsigneeMasterComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var multidest = this.cmForm.controls['multidest'].value;
        var index = multidest.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    AddConsigneeMasterComponent.prototype.save = function () {
        var _this = this;
        console.log('Consignee Master Save', this.cmForm.value);
        this.process = 'saving';
        this.as.addCm(this.cmForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/consignee-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddConsigneeMasterComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                _this.cmForm.controls['site'].setValue(_this.siteOptions[0].branch_name);
            }
            else {
                _this.cmForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    AddConsigneeMasterComponent.prototype.getOptions = function () {
    };
    AddConsigneeMasterComponent.prototype.updateValues = function () {
    };
    AddConsigneeMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-consignee-master',
            template: __webpack_require__(/*! ./add-consignee-master.component.html */ "./src/app/layout/admin-privileges/components/add-consignee-master/add-consignee-master.component.html"),
            styles: [__webpack_require__(/*! ./add-consignee-master.component.scss */ "./src/app/layout/admin-privileges/components/add-consignee-master/add-consignee-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddConsigneeMasterComponent);
    return AddConsigneeMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-diesal-ratemaster/add-diesal-ratemaster.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-diesal-ratemaster/add-diesal-ratemaster.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"drmForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Add Diesal Rate Master</div>\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n\n          <div class=\"col-lg-3 col-md-3\">\n          <label class=\"required\">Site</label>\n          <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n            formControlName=\"site\">\n          </ng-select>\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Pump Name</label>\n            <ng-select [items]=\"vendername_options\" placeholder=\"Type and search Pump Owner\" bindLabel=\"vendername\" bindValue=\"vendername\"\n              formControlName=\"vendername\">\n            </ng-select>\n          </div>\n\n          <div class=\"col-md-3\">\n            <label class=\"required\">Date</label>\n            <div class=\"input-group datepicker-input\">\n              <input\n                class=\"form-control\"\n                placeholder=\"dd-mm-yyyy\"\n                name=\"dp2\"\n                formControlName=\"date\"\n                ngbDatepicker\n                #d2=\"ngbDatepicker\" \n                [minDate]=\"minDate\" \n                required\n              />\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        <div class=\"col-lg-3 col-md-3\">\n          <label>Rate</label>\n          <input type=\"number\" formControlName=\"rate\" class=\"form-control\" placeholder=\"Diesal Rate\">\n        </div>\n      </div>\n\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!drmForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-diesal-ratemaster/add-diesal-ratemaster.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-diesal-ratemaster/add-diesal-ratemaster.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvYWRkLWRpZXNhbC1yYXRlbWFzdGVyL2FkZC1kaWVzYWwtcmF0ZW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-diesal-ratemaster/add-diesal-ratemaster.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-diesal-ratemaster/add-diesal-ratemaster.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AddDiesalRatemasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDiesalRatemasterComponent", function() { return AddDiesalRatemasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddDiesalRatemasterComponent = /** @class */ (function () {
    function AddDiesalRatemasterComponent(fb, metaService, as, router) {
        this.fb = fb;
        this.metaService = metaService;
        this.as = as;
        this.router = router;
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
    AddDiesalRatemasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.getOptions();
        this.getSites();
        this.drmForm.get('site').valueChanges.subscribe(function (val) {
            _this.drmForm.controls['vendername'].setValue(null);
            _this.drmForm.patchValue({ vendername: '' });
            _this.generateVendername(val);
        });
    };
    AddDiesalRatemasterComponent.prototype.buildForm = function () {
        this.drmForm = this.fb.group({
            'site': [''],
            'vendername': [''],
            'date': [{ year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() }],
            'rate': [0],
        });
    };
    AddDiesalRatemasterComponent.prototype.save = function () {
        var _this = this;
        console.log('Diesal Rate Save', this.drmForm.value);
        var date;
        if (this.drmForm.controls['date'].value) {
            var dt = this.drmForm.controls['date'].value.year + '-' +
                this.drmForm.controls['date'].value.month + '-' +
                this.drmForm.controls['date'].value.day;
            date = moment(dt, 'YYYY-MM-DD').format();
        }
        else {
            date = moment().format();
        }
        this.process = 'saving';
        var data = this.drmForm.value;
        data.date = date;
        this.as.addDrm(this.drmForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/diesal-ratemaster']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddDiesalRatemasterComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                _this.drmForm.controls['site'].setValue(_this.siteOptions[0].branch_name);
            }
            else {
                _this.drmForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    AddDiesalRatemasterComponent.prototype.getOptions = function () {
    };
    AddDiesalRatemasterComponent.prototype.generateVendername = function (value) {
        var _this = this;
        console.log(' generate vendername ');
        //     this.as.getSitePetrolpump(value).subscribe(res=>{
        //       this.currSiteVname = res;
        //       this.vendername_options = [];
        //       this.currSiteVname.multidest.forEach(tcm => {
        //         if(this.vendername_options.map(function(e) { return e.vendername; }).indexOf(tcm.vendername)==-1){
        //           this.vendername_options.push(tcm);
        //         }
        //       });
        // /*       this.brand_option = this.currSiteVname.tcm_items;
        //  */    }, error=>{
        //     });
        this.metaService.getSitePetrolPump(value).subscribe(function (res) {
            var sitePetrolpump = [];
            res['info'].forEach(function (dim) {
                sitePetrolpump.push(dim.vendername);
            });
            _this.vendername_options = sitePetrolpump;
        });
    };
    AddDiesalRatemasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-diesal-ratemaster',
            template: __webpack_require__(/*! ./add-diesal-ratemaster.component.html */ "./src/app/layout/admin-privileges/components/add-diesal-ratemaster/add-diesal-ratemaster.component.html"),
            styles: [__webpack_require__(/*! ./add-diesal-ratemaster.component.scss */ "./src/app/layout/admin-privileges/components/add-diesal-ratemaster/add-diesal-ratemaster.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddDiesalRatemasterComponent);
    return AddDiesalRatemasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-site-destinationkms/add-site-destinationkms.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-site-destinationkms/add-site-destinationkms.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"sdkForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Add Site Destination Kms</div>\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n        <div class=\"col-lg-3 col-md-3\">\n          <label class=\"required\">Site</label>\n          <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n            formControlName=\"site\">\n          </ng-select>\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label class=\"required\">Destination</label>\n          <input type=\"text\" formControlName=\"destination\" class=\"form-control\"\n            placeholder=\"Destination\">\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label class=\"required\">Km</label>\n          <input type=\"text\" formControlName=\"km\" class=\"form-control\"\n            placeholder=\"Km\">\n        </div>\n        \n      </div>\n\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!sdkForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-site-destinationkms/add-site-destinationkms.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-site-destinationkms/add-site-destinationkms.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvYWRkLXNpdGUtZGVzdGluYXRpb25rbXMvYWRkLXNpdGUtZGVzdGluYXRpb25rbXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-site-destinationkms/add-site-destinationkms.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-site-destinationkms/add-site-destinationkms.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AddSiteDestinationkmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSiteDestinationkmsComponent", function() { return AddSiteDestinationkmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddSiteDestinationkmsComponent = /** @class */ (function () {
    function AddSiteDestinationkmsComponent(fb, metaService, as, router) {
        this.fb = fb;
        this.metaService = metaService;
        this.as = as;
        this.router = router;
    }
    AddSiteDestinationkmsComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getOptions();
    };
    AddSiteDestinationkmsComponent.prototype.buildForm = function () {
        this.sdkForm = this.fb.group({
            'site': [''],
            'destination': [''],
            'km': [0]
        });
    };
    AddSiteDestinationkmsComponent.prototype.save = function () {
        var _this = this;
        console.log('Site Destination Kms Save', this.sdkForm.value);
        this.process = 'saving';
        this.as.addSdk(this.sdkForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/site-destinationkms']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddSiteDestinationkmsComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getallSites().subscribe(function (siteInfo) {
            _this.siteOptions = siteInfo;
        });
    };
    AddSiteDestinationkmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-site-destinationkms',
            template: __webpack_require__(/*! ./add-site-destinationkms.component.html */ "./src/app/layout/admin-privileges/components/add-site-destinationkms/add-site-destinationkms.component.html"),
            styles: [__webpack_require__(/*! ./add-site-destinationkms.component.scss */ "./src/app/layout/admin-privileges/components/add-site-destinationkms/add-site-destinationkms.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddSiteDestinationkmsComponent);
    return AddSiteDestinationkmsComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-site-petrolpump/add-site-petrolpump.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-site-petrolpump/add-site-petrolpump.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"sppForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Add Site Petrol Pump</div>\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n        <div class=\"col-lg-3 col-md-3\">\n          <label class=\"required\">Site</label>\n          <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n            formControlName=\"site\">\n          </ng-select>\n        </div>\n      </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Petrol Pump Details\n                <button class=\"btn btn-primary float-right\" (click)=\"addSppItems()\" [disabled]=\"!sppForm.valid\"\n                  type=\"button\">\n                  Add Pump\n                </button>\n              </div>\n              <!-- /.box-header -->\n              <div class=\"card-body\" *ngIf=\"sppForm.controls.multidest.controls.length > 0\">\n                <table class=\"table table-bordered\" formArrayName=\"multidest\">\n                  <tr>\n                    <th>Petrol Pump Name</th>\n                    <th>Oil Company Name</th>\n                    <th>Mobile No</th>\n                    <th>Email </th>\n                    <th>Status </th>\n                    <th>Action</th>\n                  </tr>\n                  \n                  <tr *ngFor=\"let school of sppForm.controls.multidest.controls; let i=index\" formGroupName=\"{{i}}\">\n                    <td>\n                      <input type=\"text\" formControlName=\"vendername\" class=\"form-control\">\n                    </td>\n                    <td>\n                      <input type=\"text\" formControlName=\"company\" class=\"form-control\">\n                    </td>\n                    <td>\n                      <input type=\"text\" formControlName=\"mobileno\" class=\"form-control\">\n                    </td>\n                    <td>\n                      <input type=\"text\" formControlName=\"email\" class=\"form-control\">\n                    </td>\n                    <td>\n                      <div class=\"input-group\">\n                        <select class=\"form-control\" formControlName=\"status\">\n                          <option value=\"\">Status</option>\n                          <option value=\"Active\">Active</option>\n                          <option value=\"Non Active\">Non Active</option>\n                        </select>\n                        </div>\n                    </td>                    \n\n                    <td>\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"sppForm.controls?.multidest.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                      </button>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n              <div class=\"card-body\" *ngIf=\"sppForm.controls?.multidest.controls.length == 0\">\n                <p>Please select vendor</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!sppForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-site-petrolpump/add-site-petrolpump.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-site-petrolpump/add-site-petrolpump.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvYWRkLXNpdGUtcGV0cm9scHVtcC9hZGQtc2l0ZS1wZXRyb2xwdW1wLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-site-petrolpump/add-site-petrolpump.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-site-petrolpump/add-site-petrolpump.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AddSitePetrolpumpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSitePetrolpumpComponent", function() { return AddSitePetrolpumpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddSitePetrolpumpComponent = /** @class */ (function () {
    function AddSitePetrolpumpComponent(fb, metaService, as, router) {
        this.fb = fb;
        this.metaService = metaService;
        this.as = as;
        this.router = router;
        this.loading = false;
        this.usertype = this.metaService.getSiteFromStorage().role;
        this.site_name = this.metaService.getSiteFromStorage().site;
    }
    AddSitePetrolpumpComponent.prototype.ngOnInit = function () {
        this.buildForm();
        // this.sppForm.controls.multidest.valueChanges.subscribe(changes => {
        //   this.updateValues();
        // });
        this.getOptions();
        this.getSites();
    };
    AddSitePetrolpumpComponent.prototype.buildForm = function () {
        this.sppForm = this.fb.group({
            'site': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'multidest': this.fb.array([]),
        });
        this.addSppItems();
    };
    AddSitePetrolpumpComponent.prototype.initItems = function () {
        return this.fb.group({
            'vendername': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'company': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mobileno': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'status': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    AddSitePetrolpumpComponent.prototype.addSppItems = function () {
        var control = this.sppForm.controls['multidest'];
        control.push(this.initItems());
    };
    AddSitePetrolpumpComponent.prototype.removeItems = function (i) {
        var control = this.sppForm.controls['multidest'];
        control.removeAt(i);
    };
    AddSitePetrolpumpComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var multidest = this.sppForm.controls['multidest'].value;
        var index = multidest.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    AddSitePetrolpumpComponent.prototype.save = function () {
        var _this = this;
        console.log('Petrol pump Save', this.sppForm.value);
        this.process = 'saving';
        this.as.addSpp(this.sppForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/site-petrolpump']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddSitePetrolpumpComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                _this.sppForm.controls['site'].setValue(_this.siteOptions[0].branch_name);
            }
            else {
                _this.sppForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    AddSitePetrolpumpComponent.prototype.getOptions = function () {
        // this.metaService.getallSites().subscribe(siteInfo => {
        //   this.siteOptions = siteInfo;
        // });
    };
    AddSitePetrolpumpComponent.prototype.updateValues = function () {
    };
    AddSitePetrolpumpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-site-petrolpump',
            template: __webpack_require__(/*! ./add-site-petrolpump.component.html */ "./src/app/layout/admin-privileges/components/add-site-petrolpump/add-site-petrolpump.component.html"),
            styles: [__webpack_require__(/*! ./add-site-petrolpump.component.scss */ "./src/app/layout/admin-privileges/components/add-site-petrolpump/add-site-petrolpump.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddSitePetrolpumpComponent);
    return AddSitePetrolpumpComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-site-profile/add-site-profile.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-site-profile/add-site-profile.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"sdkForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Add Site Profile</div>\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n        <div class=\"col-lg-3 col-md-3\">\n          <label class=\"required\">Site</label>\n          <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n            formControlName=\"site\">\n          </ng-select>\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Consignor</label>\n            <ng-select [items]=\"consignor_options\" placeholder=\"Type and search Consignor\" bindLabel=\"accountname\" bindValue=\"accountname\"\n              formControlName=\"consignor\">\n            </ng-select>\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Parking Area Name</label>\n            <input type=\"text\" formControlName=\"destination\" class=\"form-control\" placeholder=\"Parking Name\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n          <label class=\"required\">From Destination</label>\n          <ng-select [items]=\"froms\" placeholder=\"Type and search Destination\" bindLabel=\"name\" bindValue=\"name\"\n            formControlName=\"from\">\n          </ng-select>\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label class=\"required\">Godown</label>\n          <ng-select [items]=\"godown_option\" placeholder=\"Type and search godown\" bindLabel=\"name\" bindValue=\"name\"\n            formControlName=\"godown\">\n          </ng-select>\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label class=\"required\">Department</label>\n          <ng-select [items]=\"department_option\" placeholder=\"Type and search Department\" bindLabel=\"name\" bindValue=\"name\"\n            formControlName=\"department\">\n          </ng-select>\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label>Gst No.</label>\n          <input type=\"text\" formControlName=\"gstno\" class=\"form-control\" placeholder=\"Gst No\">\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label>Address</label>\n          <input type=\"text\" formControlName=\"siteaddress\" class=\"form-control\" placeholder=\"Address\">\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label>Phone No</label>\n          <input type=\"text\" formControlName=\"phoneno\" class=\"form-control\" placeholder=\"Phone No\">\n        </div>\n\n        <div class=\"col-lg-3 col-md-3\">\n          <label>Email Id</label>\n          <input type=\"text\" formControlName=\"emailid\" class=\"form-control\" placeholder=\"Email\">\n        </div>\n        <div class=\"col-lg-3 col-md-3\">\n          <label>Customer Care No</label>\n          <input type=\"text\" formControlName=\"custcareno\" class=\"form-control\" placeholder=\"Customer Care No\">\n        </div>\n\n      </div>\n\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!sdkForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-site-profile/add-site-profile.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-site-profile/add-site-profile.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvYWRkLXNpdGUtcHJvZmlsZS9hZGQtc2l0ZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-site-profile/add-site-profile.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-site-profile/add-site-profile.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AddSiteProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSiteProfileComponent", function() { return AddSiteProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddSiteProfileComponent = /** @class */ (function () {
    function AddSiteProfileComponent(fb, metaService, as, router) {
        this.fb = fb;
        this.metaService = metaService;
        this.as = as;
        this.router = router;
        this.froms = [];
    }
    AddSiteProfileComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getOptions();
    };
    AddSiteProfileComponent.prototype.buildForm = function () {
        this.sdkForm = this.fb.group({
            'site': [''],
            'consignor': [''],
            'destination': [''],
            'from': [''],
            'godown': [''],
            'department': [''],
            'gstno': [''],
            'siteaddress': [''],
            'phoneno': [''],
            'emailid': [''],
            'custcareno': [''],
        });
    };
    AddSiteProfileComponent.prototype.save = function () {
        var _this = this;
        console.log('Site Profile Save', this.sdkForm.value);
        this.process = 'saving';
        this.as.addSpro(this.sdkForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/site-profile']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddSiteProfileComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getallSites().subscribe(function (siteInfo) {
            _this.siteOptions = siteInfo;
        });
        this.metaService.getConsignorNames().subscribe(function (siteInfo) {
            // console.log('>>>>consignor_options', siteInfo['result']);
            _this.consignor_options = siteInfo['result'];
        });
        this.metaService.getDfrom().subscribe(function (siteInfo) {
            // console.log('>>>>From Destination', siteInfo['result']);
            _this.froms = siteInfo['result'];
        });
        this.metaService.getDeptList().subscribe(function (siteInfo) {
            console.log('>>>>Department List', siteInfo['result']);
            _this.department_option = siteInfo['result'];
        });
        this.metaService.getGodownList().subscribe(function (siteInfo) {
            // console.log('>>>>Godown List', siteInfo['result']);
            _this.godown_option = siteInfo['result'];
        });
    };
    AddSiteProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-site-profile',
            template: __webpack_require__(/*! ./add-site-profile.component.html */ "./src/app/layout/admin-privileges/components/add-site-profile/add-site-profile.component.html"),
            styles: [__webpack_require__(/*! ./add-site-profile.component.scss */ "./src/app/layout/admin-privileges/components/add-site-profile/add-site-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddSiteProfileComponent);
    return AddSiteProfileComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-truck-average/add-truck-average.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-truck-average/add-truck-average.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"taForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Add Truck Average</div>\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n        <div class=\"col-lg-3 col-md-3\">\n          <label class=\"required\">Site</label>\n          <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n            formControlName=\"site\">\n          </ng-select>\n        </div>\n      </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Truck Average Details\n                <button class=\"btn btn-primary float-right\" (click)=\"addTaItems()\" [disabled]=\"!taForm.valid\"\n                  type=\"button\">\n                  Add Average Details\n                </button>\n              </div>\n              <!-- /.box-header -->\n              <div class=\"card-body\" *ngIf=\"taForm.controls.multidest.controls.length > 0\">\n                <table class=\"table table-bordered\" formArrayName=\"multidest\">\n                  <tr>\n                    <th>Tyre</th>\n                    <th>CC</th>\n                    <th>Average</th>\n                    <th>Action</th>\n                  </tr>\n                  \n                  <tr *ngFor=\"let school of taForm.controls.multidest.controls; let i=index\" formGroupName=\"{{i}}\">\n                    <td>\n                      <div class=\"input-group\">\n                        <select class=\"form-control\" formControlName=\"tyre\">\n                          <option value=\"\">Select Tyre</option>\n                          <option *ngFor=\"let t of tyre_option\" [value]=\"t.name\"> {{t.name}}</option>\n                        </select>\n                      </div>\n                    </td>\n                    <td>\n                      <input type=\"Number\" formControlName=\"tcc\" class=\"form-control\">\n                    </td>\n                    <td>\n                      <input type=\"Number\" formControlName=\"tavg\" class=\"form-control\">\n                    </td>\n\n                    <td>\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"taForm.controls?.multidest.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                      </button>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n              <div class=\"card-body\" *ngIf=\"taForm.controls?.multidest.controls.length == 0\">\n                <p>Please select vendor</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!taForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-truck-average/add-truck-average.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-truck-average/add-truck-average.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvYWRkLXRydWNrLWF2ZXJhZ2UvYWRkLXRydWNrLWF2ZXJhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-truck-average/add-truck-average.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-truck-average/add-truck-average.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AddTruckAverageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTruckAverageComponent", function() { return AddTruckAverageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
/* harmony import */ var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddTruckAverageComponent = /** @class */ (function () {
    function AddTruckAverageComponent(fb, metaService, as, ds, router) {
        this.fb = fb;
        this.metaService = metaService;
        this.as = as;
        this.ds = ds;
        this.router = router;
    }
    AddTruckAverageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.taForm.controls.multidest.valueChanges.subscribe(function (changes) {
            _this.updateValues();
        });
        this.getOptions();
    };
    AddTruckAverageComponent.prototype.buildForm = function () {
        this.taForm = this.fb.group({
            'site': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'multidest': this.fb.array([]),
        });
        this.addTaItems();
    };
    AddTruckAverageComponent.prototype.initItems = function () {
        return this.fb.group({
            'tyre': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'tcc': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'tavg': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    AddTruckAverageComponent.prototype.addTaItems = function () {
        var control = this.taForm.controls['multidest'];
        control.push(this.initItems());
    };
    AddTruckAverageComponent.prototype.removeItems = function (i) {
        var control = this.taForm.controls['multidest'];
        control.removeAt(i);
    };
    AddTruckAverageComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var multidest = this.taForm.controls['multidest'].value;
        var index = multidest.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    AddTruckAverageComponent.prototype.save = function () {
        var _this = this;
        console.log('Truck Average Save', this.taForm.value);
        this.process = 'saving';
        this.as.addTa(this.taForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/truck-average']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddTruckAverageComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getallSites().subscribe(function (siteInfo) {
            _this.siteOptions = siteInfo;
        });
        this.ds.getTyreList().subscribe(function (res) {
            _this.tyre_option = res;
        });
    };
    AddTruckAverageComponent.prototype.updateValues = function () {
        // const control = <FormArray>this.taForm.controls['multidest'];
        // for (var intial_val = 0; intial_val < control.length; intial_val++) {
        //   const values = control.controls[intial_val].value;
        //   const item_mater_data = this.multidest.find(item => item['_id'] == values['vender_id']);
        //   // Tax calculation ends here
        //   control.controls[intial_val].patchValue({
        //     name: item_mater_data ? item_mater_data.name : '',
        //     location: item_mater_data ? item_mater_data.location : ''
        //   }, { emitEvent: false });
        // }
        // this.taForm.patchValue({
        //   // 'net_amount': net_price,
        //   // 'rounded_off': net_price,
        //   // 'total_amount': net_price
        // }, { emitEvent: false });
    };
    AddTruckAverageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-truck-average',
            template: __webpack_require__(/*! ./add-truck-average.component.html */ "./src/app/layout/admin-privileges/components/add-truck-average/add-truck-average.component.html"),
            styles: [__webpack_require__(/*! ./add-truck-average.component.scss */ "./src/app/layout/admin-privileges/components/add-truck-average/add-truck-average.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__["AdminprivilegesService"],
            src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddTruckAverageComponent);
    return AddTruckAverageComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-tyre-ratelist/add-tyre-ratelist.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-tyre-ratelist/add-tyre-ratelist.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"trlForm\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Add Tyre Rate List</div>\r\n      <div class=\"card-body\">\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Date</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" #mr=\"bsDatepicker\" [bsConfig]=\"{ containerClass: 'theme-blue', 'dateInputFormat': 'DD-MM-YYYY', 'showWeekNumbers': false, 'minDate': currentDate }\" bsDatepicker formControlName=\"trl_date\"\r\n                class=\"form-control\">\r\n              <div class=\"input-group-prepend\" (click)=\"mr.toggle()\">\r\n                <span class=\"input-group-text\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Company Name</label>\r\n            <ng-select [items]=\"company_option\" placeholder=\"Type and search Company\" bindLabel=\"name\" bindValue=\"name\"\r\n              formControlName=\"company_name\">\r\n            </ng-select>\r\n          </div>\r\n          \r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Brand</label>\r\n            <ng-select [items]=\"brand_option\" placeholder=\"Type and search Brand\" bindLabel=\"name\" bindValue=\"name\"\r\n              formControlName=\"brand\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label class=\"required\">Tyre Type</label>\r\n              <select formControlName=\"tyre_type\" class=\"form-control\">\r\n                <option value=\"\">Select Tyre Type</option>\r\n                <option *ngFor=\"let r of tyre_types\" value=\"{{ r.tyre_type }}\">\r\n                  {{ r.tyre_type }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Tyre Size</label>\r\n            <input type=\"text\" formControlName=\"tyre_size\" class=\"form-control\" placeholder=\"Tyre Size\">\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">NSD</label>\r\n            <input type=\"text\" formControlName=\"nsd\" class=\"form-control\" placeholder=\"nsd\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Vendor Details\r\n                <button class=\"btn btn-primary float-right\" (click)=\"addMrItems()\" [disabled]=\"!trlForm.valid\"\r\n                  type=\"button\">\r\n                  Add Vendor\r\n                </button>\r\n              </div>\r\n              <!-- /.box-header -->\r\n              <div class=\"card-body\" *ngIf=\"trlForm.controls.trl_items.controls.length > 0\">\r\n                <table class=\"table table-bordered\" formArrayName=\"trl_items\">\r\n                  <tr>\r\n                    <th>Vendor</th>\r\n                    <th>Location</th>\r\n                    <th>Price(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                  \r\n                  <tr *ngFor=\"let school of trlForm.controls.trl_items.controls; let i=index\" formGroupName=\"{{i}}\">\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"item_id\">\r\n                          <option value=\"\">Please select Vendor</option>\r\n                          <option *ngFor=\"let option of trl_items\" [value]=\"option._id\"> {{option.name}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"text\" formControlName=\"location\" class=\"form-control\">\r\n                    </td>\r\n\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"price\" class=\"form-control price\">\r\n                    </td>\r\n                    <td>\r\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"trlForm.controls?.trl_items.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\r\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <div class=\"card-body\" *ngIf=\"trlForm.controls?.trl_items.controls.length == 0\">\r\n                <p>Please select vendor</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button class=\"btn btn-success float-right\" (click)=\"save()\" [disabled]=\"!trlForm.valid || process == 'saving'\" type=\"button\">\r\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-tyre-ratelist/add-tyre-ratelist.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-tyre-ratelist/add-tyre-ratelist.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  overflow-x: scroll;\n  width: 100%;\n  display: block; }\n  table select {\n    width: 150px; }\n  table .vendor {\n    width: 150px; }\n  table .location {\n    width: 150px; }\n  table .price {\n    width: 120px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FkbWluLXByaXZpbGVnZXMvY29tcG9uZW50cy9hZGQtdHlyZS1yYXRlbGlzdC9GOlxcdGVzdGluZ19kZWxldGVfZm9sZGVyXFxUUlVDS19ERU1PX29sZEdhbmVzaFxcZnJvbnRlbmRcXHRkX2Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXGFkbWluLXByaXZpbGVnZXNcXGNvbXBvbmVudHNcXGFkZC10eXJlLXJhdGVsaXN0XFxhZGQtdHlyZS1yYXRlbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYyxFQUFBO0VBSGxCO0lBS1EsWUFDSixFQUFBO0VBTko7SUFRUSxZQUNKLEVBQUE7RUFUSjtJQVdRLFlBQ0osRUFBQTtFQVpKO0lBY1EsWUFDSixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FkbWluLXByaXZpbGVnZXMvY29tcG9uZW50cy9hZGQtdHlyZS1yYXRlbGlzdC9hZGQtdHlyZS1yYXRlbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweFxyXG4gICAgfVxyXG4gICAgLnZlbmRvciB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4XHJcbiAgICB9XHJcbiAgICAubG9jYXRpb24ge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweFxyXG4gICAgfVxyXG4gICAgLnByaWNle1xyXG4gICAgICAgIHdpZHRoOiAxMjBweFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-tyre-ratelist/add-tyre-ratelist.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-tyre-ratelist/add-tyre-ratelist.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AddTyreRatelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTyreRatelistComponent", function() { return AddTyreRatelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddTyreRatelistComponent = /** @class */ (function () {
    function AddTyreRatelistComponent(fb, metaService, as, router) {
        this.fb = fb;
        this.metaService = metaService;
        this.as = as;
        this.router = router;
        this.currentDate = new Date();
        this.tyre_types = [
            { tyre_type: 'New Nylon' },
            { tyre_type: 'New Radial' },
            { tyre_type: 'Retread Nylon' },
            { tyre_type: 'Retread Radial' },
            { tyre_type: 'Khol' }
        ];
    }
    AddTyreRatelistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bsConfig = Object.assign({}, { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
        this.buildForm();
        this.trlForm.controls.trl_items.valueChanges.subscribe(function (changes) {
            _this.updateValues();
        });
        this.getOptions();
    };
    AddTyreRatelistComponent.prototype.buildForm = function () {
        this.trlForm = this.fb.group({
            'trl_date': [new Date()],
            'company_name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'brand': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'tyre_type': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'tyre_size': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'nsd': [''],
            'trl_items': this.fb.array([]),
        });
        this.addMrItems();
    };
    AddTyreRatelistComponent.prototype.initItems = function () {
        return this.fb.group({
            'name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'item_id': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'location': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'price': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    AddTyreRatelistComponent.prototype.addMrItems = function () {
        var control = this.trlForm.controls['trl_items'];
        control.push(this.initItems());
    };
    AddTyreRatelistComponent.prototype.removeItems = function (i) {
        var control = this.trlForm.controls['trl_items'];
        control.removeAt(i);
    };
    AddTyreRatelistComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var trl_items = this.trlForm.controls['trl_items'].value;
        var index = trl_items.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    AddTyreRatelistComponent.prototype.save = function () {
        var _this = this;
        console.log('Tyre rate List Save', this.trlForm.value);
        this.process = 'saving';
        this.as.addTrl(this.trlForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/tyre-ratelist']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddTyreRatelistComponent.prototype.getOptions = function () {
        var _this = this;
        this.as.getVendorMaster().subscribe(function (trackInfo) {
            _this.trl_items = trackInfo['records'];
        });
        this.metaService.getCompanyList().subscribe(function (trackInfo) {
            _this.company_option = trackInfo['result'];
        });
        this.metaService.getBrandList().subscribe(function (trackInfo) {
            _this.brand_option = trackInfo['result'];
            console.log('>>>>brand_option', trackInfo['result']);
        });
    };
    AddTyreRatelistComponent.prototype.updateValues = function () {
        var control = this.trlForm.controls['trl_items'];
        var _loop_1 = function () {
            var values = control.controls[intial_val].value;
            var item_mater_data = this_1.trl_items.find(function (item) { return item['_id'] == values['item_id']; });
            // Tax calculation ends here
            control.controls[intial_val].patchValue({
                name: item_mater_data ? item_mater_data.name : '',
                location: item_mater_data ? item_mater_data.location : ''
            }, { emitEvent: false });
        };
        var this_1 = this;
        for (var intial_val = 0; intial_val < control.length; intial_val++) {
            _loop_1();
        }
        this.trlForm.patchValue({
        // 'net_amount': net_price,
        // 'rounded_off': net_price,
        // 'total_amount': net_price
        }, { emitEvent: false });
    };
    AddTyreRatelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-tyre-ratelist',
            template: __webpack_require__(/*! ./add-tyre-ratelist.component.html */ "./src/app/layout/admin-privileges/components/add-tyre-ratelist/add-tyre-ratelist.component.html"),
            styles: [__webpack_require__(/*! ./add-tyre-ratelist.component.scss */ "./src/app/layout/admin-privileges/components/add-tyre-ratelist/add-tyre-ratelist.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddTyreRatelistComponent);
    return AddTyreRatelistComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-tyre-target-master/add-tyre-target-master.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-tyre-target-master/add-tyre-target-master.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"ttmForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Add Tyre Target Master</div>\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n          <div class=\"col-lg-3 col-md-3\">\n              <label class=\"required\">Tyre Number</label>\n              <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                placeholder=\"Tyre Number\">\n            </div>\n\n            <div class=\"col-lg-3 col-md-3\">\n              <label class=\"required\">Target amount</label>\n              <input type=\"number\" formControlName=\"tamount\" class=\"form-control\"\n                placeholder=\"Target Amount\">\n            </div>\n\n        </div>\n    </div>\n    <div class=\"card-footer\">\n      <button class=\"btn btn-success float-right\" (click)=\"saveitems()\" [disabled]=\"!ttmForm.valid || process == 'saving'\" type=\"button\">\n        Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n      </button>\n    </div>\n\n  </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-tyre-target-master/add-tyre-target-master.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-tyre-target-master/add-tyre-target-master.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvYWRkLXR5cmUtdGFyZ2V0LW1hc3Rlci9hZGQtdHlyZS10YXJnZXQtbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/add-tyre-target-master/add-tyre-target-master.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/add-tyre-target-master/add-tyre-target-master.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AddTyreTargetMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTyreTargetMasterComponent", function() { return AddTyreTargetMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
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




var AddTyreTargetMasterComponent = /** @class */ (function () {
    function AddTyreTargetMasterComponent(fb, as, router) {
        this.fb = fb;
        this.as = as;
        this.router = router;
    }
    AddTyreTargetMasterComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getOptions();
    };
    AddTyreTargetMasterComponent.prototype.buildForm = function () {
        this.ttmForm = this.fb.group({
            'name': [''],
            'tamount': [0]
        });
    };
    AddTyreTargetMasterComponent.prototype.saveitems = function () {
        var _this = this;
        this.process = 'saving';
        console.log(this.ttmForm.value);
        this.as.addTtm(this.ttmForm.value).subscribe(function (ordersInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/tyre-target-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    AddTyreTargetMasterComponent.prototype.getOptions = function () {
    };
    AddTyreTargetMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-tyre-target-master',
            template: __webpack_require__(/*! ./add-tyre-target-master.component.html */ "./src/app/layout/admin-privileges/components/add-tyre-target-master/add-tyre-target-master.component.html"),
            styles: [__webpack_require__(/*! ./add-tyre-target-master.component.scss */ "./src/app/layout/admin-privileges/components/add-tyre-target-master/add-tyre-target-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_2__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddTyreTargetMasterComponent);
    return AddTyreTargetMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/adminmaster-reslover.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/adminmaster-reslover.ts ***!
  \****************************************************************************/
/*! exports provided: AdminmasterReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminmasterReslover", function() { return AdminmasterReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminmasterReslover = /** @class */ (function () {
    function AdminmasterReslover(aps) {
        this.aps = aps;
    }
    AdminmasterReslover.prototype.resolve = function (route) {
        return this.aps.getAdm(route.paramMap.get('id'));
    };
    AdminmasterReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__["AdminprivilegesService"]])
    ], AdminmasterReslover);
    return AdminmasterReslover;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/adminprivileges.service.ts ***!
  \*******************************************************************************/
/*! exports provided: AdminprivilegesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminprivilegesService", function() { return AdminprivilegesService; });
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


var AdminprivilegesService = /** @class */ (function () {
    function AdminprivilegesService(api) {
        this.api = api;
    }
    // Tyre-Rate-List
    AdminprivilegesService.prototype.addTrl = function (data) {
        return this.api.post('admin-privileges/tyre-ratelist', data);
    };
    AdminprivilegesService.prototype.updateRateMultidestKm = function () {
        return this.api.get('admin-privileges/site-destinationkms/update/rates_site_dest_kms');
    };
    AdminprivilegesService.prototype.updateSiteDestKm = function () {
        return this.api.get('admin-privileges/site-destinationkms/update/site_dest_kms');
    };
    AdminprivilegesService.prototype.getTrl = function (id) {
        return this.api.get('admin-privileges/tyre-ratelist/' + id);
    };
    AdminprivilegesService.prototype.updatTrl = function (id, data) {
        return this.api.put('admin-privileges/tyre-ratelist?id=' + id, data);
    };
    AdminprivilegesService.prototype.deleteTrl = function (id) {
        return this.api.delete("admin-privileges/tyre-ratelist/" + id);
    };
    AdminprivilegesService.prototype.getVendorMaster = function () {
        return this.api.get('vendor_master/all_vendors');
    };
    // Broker-Master
    AdminprivilegesService.prototype.addBm = function (data) {
        return this.api.post('admin-privileges/broker-master', data);
    };
    AdminprivilegesService.prototype.getBm = function (id) {
        return this.api.get('admin-privileges/broker-master/' + id);
    };
    AdminprivilegesService.prototype.updatBm = function (id, data) {
        return this.api.put('admin-privileges/broker-master?id=' + id, data);
    };
    AdminprivilegesService.prototype.deleteBm = function (id) {
        return this.api.delete("admin-privileges/broker-master/" + id);
    };
    // Site-profile
    AdminprivilegesService.prototype.addSpro = function (data) {
        return this.api.post('admin-privileges/site-profile', data);
    };
    AdminprivilegesService.prototype.getSpro = function (id) {
        return this.api.get('admin-privileges/site-profile/' + id);
    };
    AdminprivilegesService.prototype.updatSpro = function (id, data) {
        return this.api.put('admin-privileges/site-profile?id=' + id, data);
    };
    AdminprivilegesService.prototype.deleteSpro = function (id) {
        return this.api.delete("admin-privileges/site-profile/" + id);
    };
    // diesal rate master
    AdminprivilegesService.prototype.addDrm = function (data) {
        return this.api.post('admin-privileges/diesal-ratemaster', data);
    };
    AdminprivilegesService.prototype.getDrm = function (id) {
        return this.api.get('admin-privileges/diesal-ratemaster/' + id);
    };
    AdminprivilegesService.prototype.updatDrm = function (id, data) {
        return this.api.put('admin-privileges/diesal-ratemaster?id=' + id, data);
    };
    AdminprivilegesService.prototype.deleteDrm = function (id) {
        return this.api.delete("admin-privileges/diesal-ratemaster/" + id);
    };
    // Accounts - Master
    AdminprivilegesService.prototype.addAm = function (data) {
        return this.api.post('admin-privileges/accounts-master', data);
    };
    AdminprivilegesService.prototype.getAm = function (id) {
        return this.api.get('admin-privileges/accounts-master/' + id);
    };
    AdminprivilegesService.prototype.updatAm = function (id, data) {
        return this.api.put('admin-privileges/accounts-master?id=' + id, data);
    };
    AdminprivilegesService.prototype.deleteAm = function (id) {
        return this.api.delete("admin-privileges/accounts-master/" + id);
    };
    // Accounts - category
    AdminprivilegesService.prototype.addAc = function (data) {
        return this.api.post('admin-privileges/accounts-category', data);
    };
    AdminprivilegesService.prototype.getAc = function (id) {
        return this.api.get('admin-privileges/accounts-category/' + id);
    };
    AdminprivilegesService.prototype.updatAc = function (id, data) {
        return this.api.put('admin-privileges/accounts-category?id=' + id, data);
    };
    AdminprivilegesService.prototype.deleteAc = function (id) {
        return this.api.delete("admin-privileges/accounts-category/" + id);
    };
    // Site-petrolpump
    AdminprivilegesService.prototype.addSpp = function (data) {
        return this.api.post('admin-privileges/site-petrolpump', data);
    };
    AdminprivilegesService.prototype.getSpp = function (id) {
        return this.api.get('admin-privileges/site-petrolpump/' + id);
    };
    AdminprivilegesService.prototype.updatSpp = function (id, data) {
        return this.api.put('admin-privileges/site-petrolpump?id=' + id, data);
    };
    AdminprivilegesService.prototype.deleteSpp = function (id) {
        return this.api.delete("admin-privileges/site-petrolpump/" + id);
    };
    AdminprivilegesService.prototype.getSitePetrolpump = function (name) {
        return this.api.get('meta/site/' + name);
    };
    // site-destinationkms
    AdminprivilegesService.prototype.addSdk = function (data) {
        return this.api.post('admin-privileges/site-destinationkms', data);
    };
    AdminprivilegesService.prototype.getSdk = function (id) {
        return this.api.get('admin-privileges/site-destinationkms/' + id);
    };
    AdminprivilegesService.prototype.updatSdk = function (id, data) {
        return this.api.put('admin-privileges/site-destinationkms?id=' + id, data);
    };
    AdminprivilegesService.prototype.deleteSdk = function (id) {
        return this.api.delete("admin-privileges/site-destinationkms/" + id);
    };
    // Truck Average
    AdminprivilegesService.prototype.addTa = function (data) {
        return this.api.post('admin-privileges/truck-average', data);
    };
    AdminprivilegesService.prototype.getTa = function (id) {
        return this.api.get('admin-privileges/truck-average/' + id);
    };
    AdminprivilegesService.prototype.updatTa = function (id, data) {
        return this.api.put('admin-privileges/truck-average?id=' + id, data);
    };
    AdminprivilegesService.prototype.deleteTa = function (id) {
        return this.api.delete("admin-privileges/truck-average/" + id);
    };
    // Tyre-target-master
    AdminprivilegesService.prototype.addTtm = function (data) {
        return this.api.post('admin-privileges/tyre-target-master', data);
    };
    AdminprivilegesService.prototype.getTtm = function (id) {
        return this.api.get('admin-privileges/tyre-target-master/' + id);
    };
    AdminprivilegesService.prototype.updatTtm = function (id, data) {
        return this.api.put('admin-privileges/tyre-target-master?id=' + id, data);
    };
    AdminprivilegesService.prototype.deleteTtm = function (id) {
        return this.api.delete("admin-privileges/tyre-target-master/" + id);
    };
    // Admin-master
    AdminprivilegesService.prototype.addAdm = function (data) {
        return this.api.post('admin-privileges/admin-master', data);
    };
    AdminprivilegesService.prototype.getAdm = function (id) {
        return this.api.get('admin-privileges/admin-master/' + id);
    };
    AdminprivilegesService.prototype.updatAdm = function (id, data) {
        return this.api.put('admin-privileges/admin-master?id=' + id, data);
    };
    AdminprivilegesService.prototype.deleteAdm = function (id) {
        return this.api.delete("admin-privileges/admin-master/" + id);
    };
    // Site-petrolpump
    AdminprivilegesService.prototype.addCm = function (data) {
        return this.api.post('admin-privileges/consignee-master', data);
    };
    AdminprivilegesService.prototype.getCm = function (id) {
        return this.api.get('admin-privileges/consignee-master/' + id);
    };
    AdminprivilegesService.prototype.updatCm = function (id, data) {
        return this.api.put('admin-privileges/consignee-master?id=' + id, data);
    };
    AdminprivilegesService.prototype.deleteCm = function (id) {
        return this.api.delete("admin-privileges/consignee-master/" + id);
    };
    AdminprivilegesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], AdminprivilegesService);
    return AdminprivilegesService;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/agent-assigned-site/agent-assigned-site.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/agent-assigned-site/agent-assigned-site.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\">\r\n      <form [formGroup]=\"addForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Site Assign To Traffic Agents</h4>\r\n            <hr />\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Traffic Agent</label>\r\n              <select formControlName=\"traffic_agent\" class=\"form-control\">\r\n                <option value=\"\">Select Agent</option>\r\n                <option *ngFor=\"let a of agents\" value=\"{{ a.name }}\">\r\n                  {{ a.name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n\r\n            <div class=\"form-group\">\r\n              <label>Site</label>\r\n              <select formControlName=\"site\" class=\"form-control\" multiple>\r\n                <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                  {{ s.branch_name }}\r\n                </option>\r\n              </select>\r\n            </div>    \r\n\r\n          </div>\r\n          <div class=\"col-md-1 pull-right\">\r\n            <label>Save</label>\r\n            <button (click)=\"save()\" class=\"btn btn-primary\"><i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Save</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <!-- Loader -->\r\n  <div class=\"showbox\" [hidden]=\"!shown\">\r\n    <div class=\"loader\">\r\n      <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n        <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n      </svg>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/agent-assigned-site/agent-assigned-site.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/agent-assigned-site/agent-assigned-site.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvYWdlbnQtYXNzaWduZWQtc2l0ZS9hZ2VudC1hc3NpZ25lZC1zaXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/agent-assigned-site/agent-assigned-site.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/agent-assigned-site/agent-assigned-site.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AgentAssignedSiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentAssignedSiteComponent", function() { return AgentAssignedSiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/admin-privileges.service */ "./src/app/shared/services/admin-privileges.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AgentAssignedSiteComponent = /** @class */ (function () {
    function AgentAssignedSiteComponent(meta, fb, admin_privileges, toastr) {
        this.meta = meta;
        this.fb = fb;
        this.admin_privileges = admin_privileges;
        this.toastr = toastr;
        this.agents = [];
        this.sites = [];
        this.shown = false;
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        // Filter form control
        this.addForm = this.fb.group({
            site: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            traffic_agent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    AgentAssignedSiteComponent.prototype.ngOnInit = function () {
        this.getAgentList();
        this.getSites();
    };
    AgentAssignedSiteComponent.prototype.getAgentList = function () {
        var _this = this;
        this.meta.getTrafficAgents().subscribe(function (res) {
            _this.agents = res;
        }, function (err) { });
    };
    AgentAssignedSiteComponent.prototype.getSites = function () {
        var _this = this;
        this.meta.getSites().subscribe(function (res) {
            _this.sites = res;
            if (_this.usertype === 'ADMIN') {
                _this.addForm.controls['site'].setValue(_this.sites[0].branch_name);
            }
            else {
                _this.addForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.toastr.error('Something went wrong.');
        });
    };
    AgentAssignedSiteComponent.prototype.save = function () {
        var _this = this;
        var val = {
            taname: this.addForm.value.traffic_agent,
            sites: []
        };
        this.addForm.value.site.forEach(function (element) {
            val.sites.push({ 'site': element });
        });
        this.shown = true;
        this.admin_privileges.saveTrafficAgentsData(val).subscribe(function (res) {
            _this.shown = false;
            _this.toastr.success('Site assign to traffic agent successfully.');
            _this.addForm.reset();
            _this.addForm.controls['traffic_agent'].setValue('');
        }, function (err) {
            _this.shown = false;
            _this.toastr.error('Something went wrong.');
        });
    };
    AgentAssignedSiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agent-assigned-site',
            template: __webpack_require__(/*! ./agent-assigned-site.component.html */ "./src/app/layout/admin-privileges/components/agent-assigned-site/agent-assigned-site.component.html"),
            styles: [__webpack_require__(/*! ./agent-assigned-site.component.scss */ "./src/app/layout/admin-privileges/components/agent-assigned-site/agent-assigned-site.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__["MetaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_3__["AdminPrivilegesService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AgentAssignedSiteComponent);
    return AgentAssignedSiteComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/brokermaster-reslover.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/brokermaster-reslover.ts ***!
  \*****************************************************************************/
/*! exports provided: BrokermasterReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokermasterReslover", function() { return BrokermasterReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrokermasterReslover = /** @class */ (function () {
    function BrokermasterReslover(aps) {
        this.aps = aps;
    }
    BrokermasterReslover.prototype.resolve = function (route) {
        return this.aps.getBm(route.paramMap.get('id'));
    };
    BrokermasterReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__["AdminprivilegesService"]])
    ], BrokermasterReslover);
    return BrokermasterReslover;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/consigneemaster-reslover.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/consigneemaster-reslover.ts ***!
  \********************************************************************************/
/*! exports provided: ConsigneemasterReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsigneemasterReslover", function() { return ConsigneemasterReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsigneemasterReslover = /** @class */ (function () {
    function ConsigneemasterReslover(aps) {
        this.aps = aps;
    }
    ConsigneemasterReslover.prototype.resolve = function (route) {
        return this.aps.getCm(route.paramMap.get('id'));
    };
    ConsigneemasterReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__["AdminprivilegesService"]])
    ], ConsigneemasterReslover);
    return ConsigneemasterReslover;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/diesalratemaster-reslover.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/diesalratemaster-reslover.ts ***!
  \*********************************************************************************/
/*! exports provided: DiesalratemasterReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiesalratemasterReslover", function() { return DiesalratemasterReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiesalratemasterReslover = /** @class */ (function () {
    function DiesalratemasterReslover(aps) {
        this.aps = aps;
    }
    DiesalratemasterReslover.prototype.resolve = function (route) {
        return this.aps.getDrm(route.paramMap.get('id'));
    };
    DiesalratemasterReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__["AdminprivilegesService"]])
    ], DiesalratemasterReslover);
    return DiesalratemasterReslover;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-accounts-category/edit-accounts-category.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-accounts-category/edit-accounts-category.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"acForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Edit Site Profile</div>\n      <div class=\"card-body\">\n\n        <div class=\"form-group row\">\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Category Name</label>\n            <input type=\"text\" formControlName=\"catname\" class=\"form-control\" placeholder=\"Category Name\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Type</label>\n            <select class=\"form-control\" formControlName=\"cattype\">\n              <option value=\"\">Select Type</option>\n              <option value=\"\"></option>\n              <option value=\"Primary\">Primary</option>\n            </select>\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Under Group</label>\n            <ng-select [items]=\"undergroup_options\" placeholder=\"Type and UnderGropu\" bindLabel=\"catname\" bindValue=\"catname\"\n              formControlName=\"undergroup\">\n            </ng-select>\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Accounts</label>\n            <select class=\"form-control\" formControlName=\"accounts\">\n              <option value=\"\">Select Accounts</option>\n              <option value=\"Trading\">Trading</option>\n              <option value=\"Profit and Loss\">Profit and Loss</option>\n              <option value=\"Balance Sheet\">Balance Sheet</option>\n            </select>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>DrCr</label>\n            <select class=\"form-control\" formControlName=\"drcr\">\n              <option value=\"\">Select Account Mode</option>\n              <option value=\"Debit\">Debit</option>\n              <option value=\"Credit\">Credit</option>\n            </select>\n          </div>\n      </div>\n\n\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"saveAc()\" [disabled]=\"!acForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-accounts-category/edit-accounts-category.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-accounts-category/edit-accounts-category.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvZWRpdC1hY2NvdW50cy1jYXRlZ29yeS9lZGl0LWFjY291bnRzLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-accounts-category/edit-accounts-category.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-accounts-category/edit-accounts-category.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: EditAccountsCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountsCategoryComponent", function() { return EditAccountsCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditAccountsCategoryComponent = /** @class */ (function () {
    function EditAccountsCategoryComponent(fb, metaService, as, router, aroute) {
        this.fb = fb;
        this.metaService = metaService;
        this.as = as;
        this.router = router;
        this.aroute = aroute;
    }
    EditAccountsCategoryComponent.prototype.ngOnInit = function () {
        this.acDetails = this.aroute.snapshot.data['ac_details'];
        this.buildForm();
        this.getOptions();
    };
    EditAccountsCategoryComponent.prototype.buildForm = function () {
        this.acForm = this.fb.group({
            'catname': [this.acDetails.catname],
            'cattype': [this.acDetails.cattype],
            'undergroup': [this.acDetails.undergroup],
            'accounts': [this.acDetails.accounts],
            'drcr': [this.acDetails.drcr],
        });
    };
    EditAccountsCategoryComponent.prototype.saveAc = function () {
        var _this = this;
        this.process = 'saving';
        this.as.updatAc(this.acDetails['_id'], this.acForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/accounts-category']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditAccountsCategoryComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getCatNames().subscribe(function (siteInfo) {
            _this.undergroup_options = siteInfo['result'];
        });
    };
    EditAccountsCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-accounts-category',
            template: __webpack_require__(/*! ./edit-accounts-category.component.html */ "./src/app/layout/admin-privileges/components/edit-accounts-category/edit-accounts-category.component.html"),
            styles: [__webpack_require__(/*! ./edit-accounts-category.component.scss */ "./src/app/layout/admin-privileges/components/edit-accounts-category/edit-accounts-category.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_4__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditAccountsCategoryComponent);
    return EditAccountsCategoryComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-accounts-master/edit-accounts-master.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-accounts-master/edit-accounts-master.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"amForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"col-md-12\">\n          <h4><i></i> Edit Accounts Master</h4>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group row\">\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Account Name</label>\n            <input type=\"text\" formControlName=\"accountname\" class=\"form-control\" placeholder=\"Account Name\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Category</label>\n            <ng-select [items]=\"category_options\" placeholder=\"Type and search Category\" bindLabel=\"catname\" bindValue=\"catname\"\n              formControlName=\"category\">\n            </ng-select>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Group</label>\n            <ng-select [items]=\"group_options\" placeholder=\"Type and search Group\" bindLabel=\"catname\" bindValue=\"catname\"\n              formControlName=\"group\">\n            </ng-select>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Account Type</label>\n            <ng-select [items]=\"accounttype_options\" placeholder=\"Type and search Type\" bindLabel=\"name\" bindValue=\"name\"\n              formControlName=\"accounttype\">\n            </ng-select>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Under Ledger</label>\n            <ng-select [items]=\"underledger_options\" placeholder=\"Type and search Under Ledger\" bindLabel=\"accountname\" bindValue=\"accountname\"\n              formControlName=\"underledger\">\n            </ng-select>\n          </div>\n          <div class=\"col-md-3\">\n            <label >Site</label>\n            <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n              formControlName=\"site\" class=\"auto-entry\">\n            </ng-select>\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Gst No.</label>\n            <input type=\"text\" formControlName=\"gstnumber\" class=\"form-control\" placeholder=\"Gst No\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Pan No.</label>\n            <input type=\"text\" formControlName=\"panno\" class=\"form-control\" placeholder=\"Pan No.\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Vendor Code</label>\n            <input type=\"text\" formControlName=\"vcode\" class=\"form-control\" placeholder=\"Vendor Code\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Contact Person Name</label>\n            <input type=\"text\" formControlName=\"contactpersonname\" class=\"form-control\" placeholder=\"Name\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Email</label>\n            <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Mobile 1</label>\n            <input type=\"number\" formControlName=\"mobile1\" class=\"form-control\" placeholder=\"Mobile No.\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Mobile 2</label>\n            <input type=\"number\" formControlName=\"mobile2\" class=\"form-control\" placeholder=\"Mobile No.\">\n          </div>\n\n          <div class=\"col-md-12\">\n            <h4><i></i> Balances</h4>\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Opening Balance</label>\n            <input type=\"text\" formControlName=\"opbal\" class=\"form-control\" placeholder=\"Opening Balance\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>O.DrCr</label>\n            <select class=\"form-control\" formControlName=\"ocrdr\">\n              <option value=\"\">Select Account Mode</option>\n              <option value=\"Debit\">Debit</option>\n              <option value=\"Credit\">Credit</option>\n            </select>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Closing Balance</label>\n            <input type=\"text\" formControlName=\"clbal\" class=\"form-control\" placeholder=\"Closing Balance\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>C.DrCr</label>\n            <select class=\"form-control\" formControlName=\"cdrcr\">\n              <option value=\"\">Select Account Mode</option>\n              <option value=\"Debit\">Debit</option>\n              <option value=\"Credit\">Credit</option>\n            </select>\n          </div>\n\n          <div class=\"col-md-12\">\n            <h4><i class=\"fa fa-truck\"></i> Shipping Address</h4>\n            <hr />\n          </div>\n\n            <div class=\"col-lg-3 col-md-3\">\n              <label>Street 1</label>\n              <input type=\"text\" formControlName=\"bstreet1\" class=\"form-control\" placeholder=\"Steet 1\">\n            </div>\n            <div class=\"col-lg-3 col-md-3\">\n              <label>Street 2</label>\n              <input type=\"text\" formControlName=\"bstreet2\" class=\"form-control\" placeholder=\"Steet 2\">\n            </div>\n            <div class=\"col-lg-3 col-md-3\">\n              <label>City</label>\n              <ng-select [items]=\"bcity_options\" placeholder=\"Type and search City\" bindLabel=\"name\" bindValue=\"name\"\n                formControlName=\"bcity\">\n              </ng-select>\n            </div>\n            <div class=\"col-lg-3 col-md-3\">\n              <label>State</label>\n              <ng-select [items]=\"bstate_options\" placeholder=\"Type and search State\" bindLabel=\"name\" bindValue=\"name\"\n                formControlName=\"bstate\">\n              </ng-select>\n            </div>\n            <div class=\"col-lg-3 col-md-3\">\n              <label>PinCode</label>\n              <input type=\"number\" formControlName=\"bzip\" class=\"form-control\" placeholder=\"Pin No\">\n            </div>\n            <div class=\"col-lg-3 col-md-3\">\n              <label>Country</label>\n              <ng-select [items]=\"bcountry_options\" placeholder=\"Type and search country\" bindLabel=\"name\" bindValue=\"name\"\n                formControlName=\"bcountry\">\n              </ng-select>\n            </div>\n\n            <div class=\"col-lg-3 col-md-3\">\n              <label>Phone No</label>\n              <input type=\"number\" formControlName=\"bphone\" class=\"form-control\" placeholder=\"Phone No\">\n            </div>\n\n          <div class=\"col-md-12\">\n            <h4><i class=\"fa fa-truck\"></i> Shipping Details</h4>\n            <hr />\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Street 1</label>\n            <input type=\"text\" formControlName=\"sstreet1\" class=\"form-control\" placeholder=\"Steet 1\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Street 2</label>\n            <input type=\"text\" formControlName=\"sstreet2\" class=\"form-control\" placeholder=\"Steet 2\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>City</label>\n            <ng-select [items]=\"scity_options\" placeholder=\"Type and search City\" bindLabel=\"name\" bindValue=\"name\"\n              formControlName=\"scity\">\n            </ng-select>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>State</label>\n            <ng-select [items]=\"sstate_options\" placeholder=\"Type and search State\" bindLabel=\"name\" bindValue=\"name\"\n              formControlName=\"sstate\">\n            </ng-select>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>PinCode</label>\n            <input type=\"number\" formControlName=\"bzip\" class=\"form-control\" placeholder=\"Pin No\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Country</label>\n            <ng-select [items]=\"scountry_options\" placeholder=\"Type and search country\" bindLabel=\"name\" bindValue=\"name\"\n              formControlName=\"scountry\">\n            </ng-select>\n          </div>\n        <div class=\"col-lg-3 col-md-3\">\n            <label>Phone No</label>\n            <input type=\"number\" formControlName=\"sphone\" class=\"form-control\" placeholder=\"Phone No\">\n          </div>\n      </div>\n\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"saveAm()\" [disabled]=\"!amForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-accounts-master/edit-accounts-master.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-accounts-master/edit-accounts-master.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvZWRpdC1hY2NvdW50cy1tYXN0ZXIvZWRpdC1hY2NvdW50cy1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-accounts-master/edit-accounts-master.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-accounts-master/edit-accounts-master.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: EditAccountsMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountsMasterComponent", function() { return EditAccountsMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditAccountsMasterComponent = /** @class */ (function () {
    function EditAccountsMasterComponent(fb, metaService, ms, as, router, aroute) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.as = as;
        this.router = router;
        this.aroute = aroute;
        // public siteOptions: any;
        this.loading = false;
        // public siteOptions: any;
        this.siteOptions = [];
        this.usertype = this.metaService.getSiteFromStorage().role;
        this.site_name = this.metaService.getSiteFromStorage().site;
    }
    EditAccountsMasterComponent.prototype.ngOnInit = function () {
        this.amDetails = this.aroute.snapshot.data['am_details'];
        this.buildForm();
        this.getOptions();
        this.getSites();
    };
    EditAccountsMasterComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            // if (this.usertype === 'ADMIN') {
            //   // this.amForm.controls['site'].setValue(this.siteOptions[0].branch_name);
            // } else {
            //   this.amForm.controls['site'].setValue(this.site_name);
            // }
        }, function (err) {
            _this.loading = false;
        });
    };
    EditAccountsMasterComponent.prototype.buildForm = function () {
        this.amForm = this.fb.group({
            'accountname': [this.amDetails.accountname],
            'category': [this.amDetails.category],
            'group': [this.amDetails.group],
            'accounttype': [this.amDetails.accounttype],
            'underledger': [this.amDetails.underledger],
            'site': [this.amDetails.site],
            'gstnumber': [this.amDetails.gstnumber],
            'panno': [this.amDetails.panno],
            'vcode': [this.amDetails.vcode],
            'contactpersonname': [this.amDetails.contactpersonname],
            'email': [this.amDetails.email],
            'mobile1': [this.amDetails.mobile1],
            'mobile2': [this.amDetails.mobile2],
            'opbal': [this.amDetails.opbal],
            'ocrdr': [this.amDetails.ocrdr],
            'clbal': [this.amDetails.clbal],
            'cdrcr': [this.amDetails.cdrcr],
            'bstreet1': [this.amDetails.bstreet1],
            'bstreet2': [this.amDetails.bstreet2],
            'bcity': [this.amDetails.bcity],
            'bstate': [this.amDetails.bstate],
            'bzip': [this.amDetails.bzip],
            'bcountry': [this.amDetails.bcountry],
            'bphone': [this.amDetails.bphone],
            'sstreet1': [this.amDetails.sstreet1],
            'sstreet2': [this.amDetails.sstreet2],
            'scity': [this.amDetails.scity],
            'sstate': [this.amDetails.sstate],
            'szip': [this.amDetails.szip],
            'scountry': [this.amDetails.scountry],
            'sphone': [this.amDetails.sphone]
        });
    };
    EditAccountsMasterComponent.prototype.saveAm = function () {
        var _this = this;
        this.process = 'saving';
        this.as.updatAm(this.amDetails['_id'], this.amForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/accounts-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditAccountsMasterComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getCatNames().subscribe(function (siteInfo) {
            _this.category_options = siteInfo['result'];
        });
        this.metaService.getCatNamesGroup().subscribe(function (siteInfo) {
            _this.group_options = siteInfo['result'];
        });
        this.metaService.getAccounttype().subscribe(function (siteInfo) {
            _this.accounttype_options = siteInfo['result'];
        });
        this.metaService.getUnderledger().subscribe(function (siteInfo) {
            _this.underledger_options = siteInfo['result'];
        });
        this.metaService.getcity().subscribe(function (siteInfo) {
            _this.bcity_options = siteInfo['result'];
        });
        this.metaService.getstate().subscribe(function (siteInfo) {
            _this.bstate_options = siteInfo['result'];
        });
        this.metaService.getcountry().subscribe(function (siteInfo) {
            _this.bcountry_options = siteInfo['result'];
        });
        this.metaService.getcity().subscribe(function (siteInfo) {
            _this.scity_options = siteInfo['result'];
        });
        this.metaService.getstate().subscribe(function (siteInfo) {
            _this.sstate_options = siteInfo['result'];
        });
        this.metaService.getcountry().subscribe(function (siteInfo) {
            _this.scountry_options = siteInfo['result'];
        });
    };
    EditAccountsMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-accounts-master',
            template: __webpack_require__(/*! ./edit-accounts-master.component.html */ "./src/app/layout/admin-privileges/components/edit-accounts-master/edit-accounts-master.component.html"),
            styles: [__webpack_require__(/*! ./edit-accounts-master.component.scss */ "./src/app/layout/admin-privileges/components/edit-accounts-master/edit-accounts-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_5__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditAccountsMasterComponent);
    return EditAccountsMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-admin-master/edit-admin-master.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-admin-master/edit-admin-master.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"admForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Edit Admin Master</div>\n      <div class=\"card-body\">\n\n        <div class=\"form-group row\">\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Name</label>\n            <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n              placeholder=\"Name\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Type</label>\n            <select class=\"form-control manual-entry\" formControlName=\"field\">\n              <option value=\"\">Select Type</option>\n              <option value=\"AC\">AC</option>\n              <option value=\"AT\">AT</option>\n              <option value=\"CType\">CType</option>\n              <option value=\"Department\">Department</option>\n              <option value=\"Destination\">Destination</option>\n              <option value=\"Exp\">Exp</option>\n              <option value=\"Godown\">Godown</option>\n              <option value=\"HSNcode\">HSNcode</option>\n              <option value=\"Item Category\">Item Category</option>\n              <option value=\"Item Type\">Item Type</option>\n              <option value=\"Product\">Product</option>\n              <option value=\"Product Type\">Product Type</option>\n              <option value=\"Site\">Site</option>\n              <option value=\"Unit\">Unit</option>\n            </select>\n          </div>\n\n        </div>\n       </div>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"saveitems()\" [disabled]=\"!admForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-admin-master/edit-admin-master.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-admin-master/edit-admin-master.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvZWRpdC1hZG1pbi1tYXN0ZXIvZWRpdC1hZG1pbi1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-admin-master/edit-admin-master.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-admin-master/edit-admin-master.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditAdminMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAdminMasterComponent", function() { return EditAdminMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
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




var EditAdminMasterComponent = /** @class */ (function () {
    function EditAdminMasterComponent(fb, as, router, aroute) {
        this.fb = fb;
        this.as = as;
        this.router = router;
        this.aroute = aroute;
    }
    EditAdminMasterComponent.prototype.ngOnInit = function () {
        this.admDetails = this.aroute.snapshot.data['adm_details'];
        console.log(this.admDetails);
        this.buildForm();
        this.getOptions();
    };
    EditAdminMasterComponent.prototype.buildForm = function () {
        this.admForm = this.fb.group({
            'name': [this.admDetails.name],
            'field': [this.admDetails.field]
        });
    };
    EditAdminMasterComponent.prototype.saveitems = function () {
        var _this = this;
        this.process = 'saving';
        this.as.updatAdm(this.admDetails['_id'], this.admForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/admin-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditAdminMasterComponent.prototype.getOptions = function () {
    };
    EditAdminMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-admin-master',
            template: __webpack_require__(/*! ./edit-admin-master.component.html */ "./src/app/layout/admin-privileges/components/edit-admin-master/edit-admin-master.component.html"),
            styles: [__webpack_require__(/*! ./edit-admin-master.component.scss */ "./src/app/layout/admin-privileges/components/edit-admin-master/edit-admin-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_2__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditAdminMasterComponent);
    return EditAdminMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-broker-master/edit-broker-master.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-broker-master/edit-broker-master.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"sdkForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Edit Broker Master</div>\n      <div class=\"card-body\">\n\n        <div class=\"form-group row\">\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Site</label>\n            <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n              formControlName=\"site\">\n            </ng-select>\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Broker Name</label>\n            <input type=\"text\" formControlName=\"brokername\" class=\"form-control\" placeholder=\"Broker Name\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Mobile No.</label>\n            <input type=\"text\" formControlName=\"mobileno\" class=\"form-control\" placeholder=\"Mobile No\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Pan No</label>\n            <input type=\"text\" formControlName=\"panno\" class=\"form-control\" placeholder=\"Pan No\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Address</label>\n            <input type=\"text\" formControlName=\"address\" class=\"form-control\" placeholder=\"Address\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>City</label>\n            <input type=\"text\" formControlName=\"city\" class=\"form-control\" placeholder=\"city\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">State</label>\n            <ng-select [items]=\"state_option\" placeholder=\"State\" bindLabel=\"statename\" bindValue=\"statename\"\n              formControlName=\"state\">\n            </ng-select>\n          </div>\n\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Pin No</label>\n            <input type=\"text\" formControlName=\"pinno\" class=\"form-control\" placeholder=\"Pin No\">\n          </div>\n\n          </div>\n\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"saveBm()\" [disabled]=\"!sdkForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-broker-master/edit-broker-master.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-broker-master/edit-broker-master.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvZWRpdC1icm9rZXItbWFzdGVyL2VkaXQtYnJva2VyLW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-broker-master/edit-broker-master.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-broker-master/edit-broker-master.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EditBrokerMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBrokerMasterComponent", function() { return EditBrokerMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditBrokerMasterComponent = /** @class */ (function () {
    function EditBrokerMasterComponent(fb, metaService, ms, as, router, aroute) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.as = as;
        this.router = router;
        this.aroute = aroute;
        this.loading = false;
    }
    EditBrokerMasterComponent.prototype.ngOnInit = function () {
        this.bmDetails = this.aroute.snapshot.data['bm_details'];
        this.buildForm();
        this.getOptions();
    };
    EditBrokerMasterComponent.prototype.buildForm = function () {
        this.sdkForm = this.fb.group({
            'site': [this.bmDetails.site],
            'brokername': [this.bmDetails.brokername],
            'mobileno': [this.bmDetails.mobileno],
            'panno': [this.bmDetails.panno],
            'address': [this.bmDetails.address],
            'city': [this.bmDetails.city],
            'state': [this.bmDetails.state],
            'pinno': [this.bmDetails.pinno]
        });
    };
    EditBrokerMasterComponent.prototype.saveBm = function () {
        var _this = this;
        this.process = 'saving';
        this.as.updatBm(this.bmDetails['_id'], this.sdkForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/broker-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditBrokerMasterComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.metaService.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.siteOptions = res;
            if (_this.usertype === 'ADMIN') {
                _this.sdkForm.controls['site'].setValue(_this.siteOptions[0].branch_name);
            }
            else {
                _this.sdkForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    EditBrokerMasterComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getStateList().subscribe(function (trackInfo) {
            _this.state_option = trackInfo['result'];
            console.log('>>>>StateIndia', trackInfo['result']);
        });
    };
    EditBrokerMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-broker-master',
            template: __webpack_require__(/*! ./edit-broker-master.component.html */ "./src/app/layout/admin-privileges/components/edit-broker-master/edit-broker-master.component.html"),
            styles: [__webpack_require__(/*! ./edit-broker-master.component.scss */ "./src/app/layout/admin-privileges/components/edit-broker-master/edit-broker-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_5__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditBrokerMasterComponent);
    return EditBrokerMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-consignee-master/edit-consignee-master.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-consignee-master/edit-consignee-master.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"cmForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Edit Consignee Master</div>\n      <div class=\"card-body\">\n\n        <div class=\"form-group row\">\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Site</label>\n            <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n              formControlName=\"site\">\n            </ng-select>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Consignee Name</label>\n            <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"Consignee Name\">\n          </div>\n  \n          <div class=\"col-lg-3 col-md-3\">\n            <label>Mobile No.</label>\n            <input type=\"text\" formControlName=\"mobile\" class=\"form-control\" placeholder=\"Mobile No\">\n          </div>\n  \n          <div class=\"col-lg-3 col-md-3\">\n            <label>Gst No</label>\n            <input type=\"text\" formControlName=\"gst\" class=\"form-control\" placeholder=\"Gst No\">\n          </div>\n            \n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Sub Dealer Details\n                <button class=\"btn btn-primary float-right\" (click)=\"addCmItems()\" [disabled]=\"!cmForm.valid\"\n                  type=\"button\">\n                  Add Sub Dealer\n                </button>\n              </div>\n              <!-- /.box-header -->\n              <div class=\"card-body\" *ngIf=\"cmForm.controls.multidest.controls.length > 0\">\n                <table class=\"table table-bordered\" formArrayName=\"multidest\">\n                  <tr>\n                    <th>Sub Dealer Name and Unloading Address</th>\n                    <th>Contact Person</th>\n                    <th>Phone No</th>\n                    <th>Action</th>\n                  </tr>\n                  \n                  <tr *ngFor=\"let school of cmForm.controls.multidest.controls; let i=index\" formGroupName=\"{{i}}\">\n                    <td>\n                      <input type=\"text\" formControlName=\"unloadingaddress\" class=\"form-control\">\n                    </td>\n                    <td>\n                      <input type=\"text\" formControlName=\"contactperson\" class=\"form-control\">\n                    </td>\n                    <td>\n                      <input type=\"text\" formControlName=\"phoneno\" class=\"form-control\">\n                    </td>\n                    <td>\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"cmForm.controls?.multidest.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                      </button>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n              <div class=\"card-body\" *ngIf=\"cmForm.controls?.multidest.controls.length == 0\">\n                <p>Please select vendor</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"saveCm()\" [disabled]=\"!cmForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  \n  </form>\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-consignee-master/edit-consignee-master.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-consignee-master/edit-consignee-master.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvZWRpdC1jb25zaWduZWUtbWFzdGVyL2VkaXQtY29uc2lnbmVlLW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-consignee-master/edit-consignee-master.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-consignee-master/edit-consignee-master.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: EditConsigneeMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditConsigneeMasterComponent", function() { return EditConsigneeMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditConsigneeMasterComponent = /** @class */ (function () {
    function EditConsigneeMasterComponent(fb, metaService, ms, as, router, aroute) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.as = as;
        this.router = router;
        this.aroute = aroute;
        this.loading = false;
    }
    EditConsigneeMasterComponent.prototype.ngOnInit = function () {
        this.cmDetails = this.aroute.snapshot.data['cm_details'];
        this.buildForm();
        // this.cmForm.controls.multidest.valueChanges.subscribe(changes => {
        //   this.updateValues();
        // });
        this.getOptions();
    };
    EditConsigneeMasterComponent.prototype.buildForm = function () {
        var _this = this;
        this.cmForm = this.fb.group({
            'site': [this.cmDetails.site, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'name': [this.cmDetails.name],
            'mobile': [this.cmDetails.mobile],
            'gst': [this.cmDetails.gst],
            'multidest': this.fb.array([]),
        });
        // this.addMaterialreceiptItems()
        this.cmDetails.multidest.forEach(function (element) {
            var control = _this.cmForm.controls['multidest'];
            control.push(_this.initItemsData(element));
        });
    };
    EditConsigneeMasterComponent.prototype.initItemsData = function (data) {
        return this.fb.group({
            'unloadingaddress': [data.unloadingaddress],
            'contactperson': [data.contactperson],
            'phoneno': [data.phoneno]
        });
    };
    EditConsigneeMasterComponent.prototype.initItems = function () {
        return this.fb.group({
            'unloadingaddress': [''],
            'contactperson': [''],
            'phoneno': ['']
        });
    };
    EditConsigneeMasterComponent.prototype.addCmItems = function () {
        var control = this.cmForm.controls['multidest'];
        control.push(this.initItems());
    };
    EditConsigneeMasterComponent.prototype.removeItems = function (i) {
        var control = this.cmForm.controls['multidest'];
        control.removeAt(i);
    };
    EditConsigneeMasterComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var multidest = this.cmForm.controls['multidest'].value;
        var index = multidest.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    EditConsigneeMasterComponent.prototype.saveCm = function () {
        var _this = this;
        this.process = 'saving';
        this.as.updatCm(this.cmDetails['_id'], this.cmForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/consignee-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditConsigneeMasterComponent.prototype.getOptions = function () {
        // this.metaService.getallSites().subscribe(siteInfo => {
        //   this.siteOptions = siteInfo;
        // });
    };
    EditConsigneeMasterComponent.prototype.updateValues = function () {
    };
    EditConsigneeMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-consignee-master',
            template: __webpack_require__(/*! ./edit-consignee-master.component.html */ "./src/app/layout/admin-privileges/components/edit-consignee-master/edit-consignee-master.component.html"),
            styles: [__webpack_require__(/*! ./edit-consignee-master.component.scss */ "./src/app/layout/admin-privileges/components/edit-consignee-master/edit-consignee-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_5__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditConsigneeMasterComponent);
    return EditConsigneeMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-diesal-ratemaster/edit-diesal-ratemaster.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-diesal-ratemaster/edit-diesal-ratemaster.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"drmForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Edit Diesal Rate Master</div>\n      <div class=\"card-body\">\n\n        <div class=\"form-group row\">\n          <div class=\"col-md-3\">\n            <label>Site</label>\n            <input type=\"text\" formControlName=\"site\" class=\"form-control\" placeholder=\"Site\">\n          </div>\n\n          <div class=\"col-md-3\">\n            <label>Pump Name</label>\n            <input type=\"text\" formControlName=\"vendername\" class=\"form-control\" placeholder=\"Vender Name\">\n          </div>\n\n          <div class=\"col-md-3\">\n            <label class=\"required\">Date</label>\n            <div class=\"input-group\">\n              <input type=\"text\" #mr=\"bsDatepicker\" [bsConfig]=\"{ containerClass: 'theme-blue', 'dateInputFormat': 'DD-MM-YYYY', 'showWeekNumbers': false, 'minDate': currentDate }\" bsDatepicker formControlName=\"date\"\n                class=\"form-control\">\n              <div class=\"input-group-prepend\" (click)=\"mr.toggle()\">\n                <span class=\"input-group-text\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-3\">\n            <label>Rate</label>\n            <input type=\"number\" formControlName=\"rate\" class=\"form-control\" placeholder=\"Diesal Rate\">\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"saveDrm()\" [disabled]=\"!drmForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  \n  </form>\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-diesal-ratemaster/edit-diesal-ratemaster.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-diesal-ratemaster/edit-diesal-ratemaster.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvZWRpdC1kaWVzYWwtcmF0ZW1hc3Rlci9lZGl0LWRpZXNhbC1yYXRlbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-diesal-ratemaster/edit-diesal-ratemaster.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-diesal-ratemaster/edit-diesal-ratemaster.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: EditDiesalRatemasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDiesalRatemasterComponent", function() { return EditDiesalRatemasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditDiesalRatemasterComponent = /** @class */ (function () {
    function EditDiesalRatemasterComponent(fb, metaService, ms, as, router, aroute) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.as = as;
        this.router = router;
        this.aroute = aroute;
        this.loading = false;
        this.currentDate = new Date();
    }
    EditDiesalRatemasterComponent.prototype.ngOnInit = function () {
        this.drmDetails = this.aroute.snapshot.data['drm_details'];
        this.buildForm();
        this.getOptions();
    };
    EditDiesalRatemasterComponent.prototype.buildForm = function () {
        this.drmForm = this.fb.group({
            'site': [this.drmDetails.site],
            'vendername': [this.drmDetails.vendername],
            'date': [new Date(this.drmDetails.date)],
            'rate': [this.drmDetails.rate]
        });
    };
    EditDiesalRatemasterComponent.prototype.saveDrm = function () {
        var _this = this;
        this.process = 'saving';
        this.as.updatDrm(this.drmDetails['_id'], this.drmForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/diesal-ratemaster']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditDiesalRatemasterComponent.prototype.getOptions = function () {
    };
    EditDiesalRatemasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-diesal-ratemaster',
            template: __webpack_require__(/*! ./edit-diesal-ratemaster.component.html */ "./src/app/layout/admin-privileges/components/edit-diesal-ratemaster/edit-diesal-ratemaster.component.html"),
            styles: [__webpack_require__(/*! ./edit-diesal-ratemaster.component.scss */ "./src/app/layout/admin-privileges/components/edit-diesal-ratemaster/edit-diesal-ratemaster.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_5__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditDiesalRatemasterComponent);
    return EditDiesalRatemasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-site-destinationkms/edit-site-destinationkms.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-site-destinationkms/edit-site-destinationkms.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"sdkForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Edit Site Destination Kms</div>\n      <div class=\"card-body\">\n\n        <div class=\"form-group row\">\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Site</label>\n            <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n              formControlName=\"site\">\n            </ng-select>\n          </div>\n        \n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Destination</label>\n            <input type=\"text\" formControlName=\"destination\" class=\"form-control\"\n              placeholder=\"Destination\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Km</label>\n            <input type=\"text\" formControlName=\"km\" class=\"form-control\"\n              placeholder=\"Km\">\n          </div>\n        </div>\n\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"saveSdk()\" [disabled]=\"!sdkForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  \n  </form>\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-site-destinationkms/edit-site-destinationkms.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-site-destinationkms/edit-site-destinationkms.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvZWRpdC1zaXRlLWRlc3RpbmF0aW9ua21zL2VkaXQtc2l0ZS1kZXN0aW5hdGlvbmttcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-site-destinationkms/edit-site-destinationkms.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-site-destinationkms/edit-site-destinationkms.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: EditSiteDestinationkmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSiteDestinationkmsComponent", function() { return EditSiteDestinationkmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditSiteDestinationkmsComponent = /** @class */ (function () {
    function EditSiteDestinationkmsComponent(fb, metaService, ms, as, router, aroute) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.as = as;
        this.router = router;
        this.aroute = aroute;
    }
    EditSiteDestinationkmsComponent.prototype.ngOnInit = function () {
        this.sdkDetails = this.aroute.snapshot.data['sdk_details'];
        this.buildForm();
        this.getOptions();
    };
    EditSiteDestinationkmsComponent.prototype.buildForm = function () {
        this.sdkForm = this.fb.group({
            'site': [this.sdkDetails.site],
            'destination': [this.sdkDetails.destination],
            'km': [this.sdkDetails.km]
        });
    };
    EditSiteDestinationkmsComponent.prototype.saveSdk = function () {
        var _this = this;
        this.process = 'saving';
        this.as.updatSdk(this.sdkDetails['_id'], this.sdkForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/site-destinationkms']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditSiteDestinationkmsComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getallSites().subscribe(function (siteInfo) {
            _this.siteOptions = siteInfo;
        });
    };
    EditSiteDestinationkmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-site-destinationkms',
            template: __webpack_require__(/*! ./edit-site-destinationkms.component.html */ "./src/app/layout/admin-privileges/components/edit-site-destinationkms/edit-site-destinationkms.component.html"),
            styles: [__webpack_require__(/*! ./edit-site-destinationkms.component.scss */ "./src/app/layout/admin-privileges/components/edit-site-destinationkms/edit-site-destinationkms.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_5__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditSiteDestinationkmsComponent);
    return EditSiteDestinationkmsComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-site-petrolpump/edit-site-petrolpump.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-site-petrolpump/edit-site-petrolpump.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"sppForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Edit Site Petrol Pump</div>\n      <div class=\"card-body\">\n\n        <div class=\"form-group row\">\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Site</label>\n            <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n              formControlName=\"site\">\n            </ng-select>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Petrol Pump Details\n                <button class=\"btn btn-primary float-right\" (click)=\"addSppItems()\" [disabled]=\"!sppForm.valid\"\n                  type=\"button\">\n                  Add Pump\n                </button>\n              </div>\n              <!-- /.box-header -->\n              <div class=\"card-body\" *ngIf=\"sppForm.controls.multidest.controls.length > 0\">\n                <table class=\"table table-bordered\" formArrayName=\"multidest\">\n                  <tr>\n                    <th>Petrol Pump Name</th>\n                    <th>Oil Company Name</th>\n                    <th>Mobile No</th>\n                    <th>Email </th>\n                    <th>Status </th>\n                    <th>Action</th>\n                  </tr>\n                  \n                  <tr *ngFor=\"let school of sppForm.controls.multidest.controls; let i=index\" formGroupName=\"{{i}}\">\n                    <td>\n                      <input type=\"text\" formControlName=\"vendername\" class=\"form-control\">\n                    </td>\n                    <td>\n                      <input type=\"text\" formControlName=\"company\" class=\"form-control\">\n                    </td>\n                    <td>\n                      <input type=\"text\" formControlName=\"mobileno\" class=\"form-control\">\n                    </td>\n                    <td>\n                      <input type=\"text\" formControlName=\"email\" class=\"form-control\">\n                    </td>\n                    <td>\n                      <div class=\"input-group\">\n                        <select class=\"form-control\" formControlName=\"status\">\n                          <option value=\"\">Status</option>\n                          <option value=\"Active\">Active</option>\n                          <option value=\"Non Active\">Non Active</option>\n                        </select>\n                        </div>\n                    </td>                    \n                    <td>\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"sppForm.controls?.multidest.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                      </button>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n              <div class=\"card-body\" *ngIf=\"sppForm.controls?.multidest.controls.length == 0\">\n                <p>Please select vendor</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"saveSpp()\" [disabled]=\"!sppForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  \n  </form>\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-site-petrolpump/edit-site-petrolpump.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-site-petrolpump/edit-site-petrolpump.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvZWRpdC1zaXRlLXBldHJvbHB1bXAvZWRpdC1zaXRlLXBldHJvbHB1bXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-site-petrolpump/edit-site-petrolpump.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-site-petrolpump/edit-site-petrolpump.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: EditSitePetrolpumpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSitePetrolpumpComponent", function() { return EditSitePetrolpumpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditSitePetrolpumpComponent = /** @class */ (function () {
    function EditSitePetrolpumpComponent(fb, metaService, ms, as, router, aroute) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.as = as;
        this.router = router;
        this.aroute = aroute;
    }
    EditSitePetrolpumpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sppDetails = this.aroute.snapshot.data['spp_details'];
        this.buildForm();
        this.sppForm.controls.multidest.valueChanges.subscribe(function (changes) {
            _this.updateValues();
        });
        this.getOptions();
    };
    EditSitePetrolpumpComponent.prototype.buildForm = function () {
        var _this = this;
        this.sppForm = this.fb.group({
            'site': [this.sppDetails.site, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'multidest': this.fb.array([]),
        });
        // this.addMaterialreceiptItems()
        this.sppDetails.multidest.forEach(function (element) {
            var control = _this.sppForm.controls['multidest'];
            control.push(_this.initItemsData(element));
        });
    };
    EditSitePetrolpumpComponent.prototype.initItemsData = function (data) {
        return this.fb.group({
            'vendername': [data.vendername],
            'company': [data.company, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mobileno': [data.mobileno, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'email': [data.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'status': [data.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    EditSitePetrolpumpComponent.prototype.initItems = function () {
        return this.fb.group({
            'vendername': [''],
            'company': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'mobileno': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'status': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    EditSitePetrolpumpComponent.prototype.addSppItems = function () {
        var control = this.sppForm.controls['multidest'];
        control.push(this.initItems());
    };
    EditSitePetrolpumpComponent.prototype.removeItems = function (i) {
        var control = this.sppForm.controls['multidest'];
        control.removeAt(i);
    };
    EditSitePetrolpumpComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var multidest = this.sppForm.controls['multidest'].value;
        var index = multidest.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    EditSitePetrolpumpComponent.prototype.saveSpp = function () {
        var _this = this;
        this.process = 'saving';
        this.as.updatSpp(this.sppDetails['_id'], this.sppForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/site-petrolpump']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditSitePetrolpumpComponent.prototype.getOptions = function () {
        // this.metaService.getallSites().subscribe(siteInfo => {
        //   this.siteOptions = siteInfo;
        // });
    };
    EditSitePetrolpumpComponent.prototype.updateValues = function () {
    };
    EditSitePetrolpumpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-site-petrolpump',
            template: __webpack_require__(/*! ./edit-site-petrolpump.component.html */ "./src/app/layout/admin-privileges/components/edit-site-petrolpump/edit-site-petrolpump.component.html"),
            styles: [__webpack_require__(/*! ./edit-site-petrolpump.component.scss */ "./src/app/layout/admin-privileges/components/edit-site-petrolpump/edit-site-petrolpump.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_5__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditSitePetrolpumpComponent);
    return EditSitePetrolpumpComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-site-profile/edit-site-profile.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-site-profile/edit-site-profile.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"sdkForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Edit Site Profile</div>\n      <div class=\"card-body\">\n\n        <div class=\"form-group row\">\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Site</label>\n            <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n              formControlName=\"site\">\n            </ng-select>\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n              <label class=\"required\">Consignor</label>\n              <ng-select [items]=\"consignor_options\" placeholder=\"Type and search Consignor\" bindLabel=\"accountname\" bindValue=\"accountname\"\n                formControlName=\"consignor\">\n              </ng-select>\n            </div>\n            <div class=\"col-lg-3 col-md-3\">\n              <label>Parking Area Name</label>\n              <input type=\"text\" formControlName=\"destination\" class=\"form-control\" placeholder=\"Parking Name\">\n            </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">From Destination</label>\n            <ng-select [items]=\"froms\" placeholder=\"Type and search Destination\" bindLabel=\"name\" bindValue=\"name\"\n              formControlName=\"from\">\n            </ng-select>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Godown</label>\n            <ng-select [items]=\"godown_option\" placeholder=\"Type and search godown\" bindLabel=\"name\" bindValue=\"name\"\n              formControlName=\"godown\">\n            </ng-select>\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Department</label>\n            <ng-select [items]=\"department_option\" placeholder=\"Type and search Department\" bindLabel=\"deptname\" bindValue=\"deptname\"\n              formControlName=\"department\">\n            </ng-select>\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Gst No.</label>\n            <input type=\"text\" formControlName=\"gstno\" class=\"form-control\" placeholder=\"Gst No\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Address</label>\n            <input type=\"text\" formControlName=\"siteaddress\" class=\"form-control\" placeholder=\"Address\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Phone No</label>\n            <input type=\"text\" formControlName=\"phoneno\" class=\"form-control\" placeholder=\"Phone No\">\n          </div>\n\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Email Id</label>\n            <input type=\"text\" formControlName=\"emailid\" class=\"form-control\" placeholder=\"Email\">\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label>Customer Care No</label>\n            <input type=\"text\" formControlName=\"custcareno\" class=\"form-control\" placeholder=\"Customer Care No\">\n          </div>\n\n          </div>\n\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"saveSpro()\" [disabled]=\"!sdkForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-site-profile/edit-site-profile.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-site-profile/edit-site-profile.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvZWRpdC1zaXRlLXByb2ZpbGUvZWRpdC1zaXRlLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-site-profile/edit-site-profile.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-site-profile/edit-site-profile.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditSiteProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSiteProfileComponent", function() { return EditSiteProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditSiteProfileComponent = /** @class */ (function () {
    function EditSiteProfileComponent(fb, metaService, ms, as, router, aroute) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.as = as;
        this.router = router;
        this.aroute = aroute;
        this.froms = [];
    }
    EditSiteProfileComponent.prototype.ngOnInit = function () {
        this.sproDetails = this.aroute.snapshot.data['spro_details'];
        this.buildForm();
        this.getOptions();
    };
    EditSiteProfileComponent.prototype.buildForm = function () {
        this.sdkForm = this.fb.group({
            'site': [this.sproDetails.site],
            'consignor': [this.sproDetails.consignor],
            'destination': [this.sproDetails.destination],
            'from': [this.sproDetails.from],
            'godown': [this.sproDetails.godown],
            'department': [this.sproDetails.department],
            'gstno': [this.sproDetails.gstno],
            'siteaddress': [this.sproDetails.siteaddress],
            'phoneno': [this.sproDetails.phoneno],
            'emailid': [this.sproDetails.emailid],
            'custcareno': [this.sproDetails.custcareno]
        });
    };
    EditSiteProfileComponent.prototype.saveSpro = function () {
        var _this = this;
        this.process = 'saving';
        this.as.updatSpro(this.sproDetails['_id'], this.sdkForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/site-profile']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditSiteProfileComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getallSites().subscribe(function (siteInfo) {
            _this.siteOptions = siteInfo;
        });
        this.metaService.getConsignorNames().subscribe(function (siteInfo) {
            console.log('>>>>consignor_options', siteInfo['result']);
            _this.consignor_options = siteInfo['result'];
        });
        this.metaService.getDfrom().subscribe(function (siteInfo) {
            console.log('>>>>From Destination', siteInfo['result']);
            _this.froms = siteInfo['result'];
        });
        this.metaService.getDfrom().subscribe(function (siteInfo) {
            // console.log('>>>>From Destination', siteInfo['result']);
            _this.froms = siteInfo['result'];
        });
        this.metaService.getDeptList().subscribe(function (siteInfo) {
            console.log('>>>>Department List', siteInfo['result']);
            _this.department_option = siteInfo['result'];
        });
        this.metaService.getGodownList().subscribe(function (siteInfo) {
            // console.log('>>>>Godown List', siteInfo['result']);
            _this.godown_option = siteInfo['result'];
        });
    };
    EditSiteProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-site-profile',
            template: __webpack_require__(/*! ./edit-site-profile.component.html */ "./src/app/layout/admin-privileges/components/edit-site-profile/edit-site-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-site-profile.component.scss */ "./src/app/layout/admin-privileges/components/edit-site-profile/edit-site-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_5__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditSiteProfileComponent);
    return EditSiteProfileComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-truck-average/edit-truck-average.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-truck-average/edit-truck-average.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"taForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Edit Truck Average</div>\n      <div class=\"card-body\">\n\n        <div class=\"form-group row\">\n          <div class=\"col-lg-3 col-md-3\">\n            <label class=\"required\">Site</label>\n            <ng-select [items]=\"siteOptions\" placeholder=\"Type and search site\" bindLabel=\"branch_name\" bindValue=\"branch_name\"\n              formControlName=\"site\">\n            </ng-select>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                Truck Average Details\n                <button class=\"btn btn-primary float-right\" (click)=\"addTaItems()\" [disabled]=\"!taForm.valid\"\n                  type=\"button\">\n                  Add Pump\n                </button>\n              </div>\n              <!-- /.box-header -->\n              <div class=\"card-body\" *ngIf=\"taForm.controls.multidest.controls.length > 0\">\n                <table class=\"table table-bordered\" formArrayName=\"multidest\">\n                  <tr>\n                    <th>Tyre</th>\n                    <th>CC</th>\n                    <th>Average</th>\n                    <th>Action</th>\n                  </tr>\n                  \n                  <tr *ngFor=\"let school of taForm.controls.multidest.controls; let i=index\" formGroupName=\"{{i}}\">\n                    <td>\n                      <div class=\"input-group\">\n                        <select class=\"form-control\" formControlName=\"tyre\">\n                          <option value=\"\">Select Tyre</option>\n                          <option *ngFor=\"let t of tyre_option\" [value]=\"t.name\"> {{t.name}}</option>\n                        </select>\n                      </div>\n                    </td>\n                    <td>\n                      <input type=\"Number\" formControlName=\"tcc\" class=\"form-control\">\n                    </td>\n                    <td>\n                      <input type=\"Number\" formControlName=\"tavg\" class=\"form-control\">\n                    </td>\n                    <td>\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"taForm.controls?.multidest.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                      </button>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n              <div class=\"card-body\" *ngIf=\"taForm.controls?.multidest.controls.length == 0\">\n                <p>Please select vendor</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"saveTa()\" [disabled]=\"!taForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n    </div>\n  \n  </form>\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-truck-average/edit-truck-average.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-truck-average/edit-truck-average.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvZWRpdC10cnVjay1hdmVyYWdlL2VkaXQtdHJ1Y2stYXZlcmFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-truck-average/edit-truck-average.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-truck-average/edit-truck-average.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EditTruckAverageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTruckAverageComponent", function() { return EditTruckAverageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
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







var EditTruckAverageComponent = /** @class */ (function () {
    function EditTruckAverageComponent(fb, metaService, ms, as, router, ds, aroute) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.as = as;
        this.router = router;
        this.ds = ds;
        this.aroute = aroute;
    }
    EditTruckAverageComponent.prototype.ngOnInit = function () {
        this.TaDetails = this.aroute.snapshot.data['ta_details'];
        this.buildForm();
        this.getOptions();
    };
    EditTruckAverageComponent.prototype.buildForm = function () {
        var _this = this;
        this.taForm = this.fb.group({
            'site': [this.TaDetails.site, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'multidest': this.fb.array([]),
        });
        // this.addMaterialreceiptItems()
        this.TaDetails.multidest.forEach(function (element) {
            var control = _this.taForm.controls['multidest'];
            control.push(_this.initItemsData(element));
        });
    };
    EditTruckAverageComponent.prototype.initItemsData = function (data) {
        return this.fb.group({
            'tyre': [data.tyre],
            'tcc': [data.tcc, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'tavg': [data.tavg, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    EditTruckAverageComponent.prototype.initItems = function () {
        return this.fb.group({
            'tyre': [''],
            'tcc': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'tavg': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    EditTruckAverageComponent.prototype.addTaItems = function () {
        var control = this.taForm.controls['multidest'];
        control.push(this.initItems());
    };
    EditTruckAverageComponent.prototype.removeItems = function (i) {
        var control = this.taForm.controls['multidest'];
        control.removeAt(i);
    };
    EditTruckAverageComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var multidest = this.taForm.controls['multidest'].value;
        var index = multidest.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    EditTruckAverageComponent.prototype.saveTa = function () {
        var _this = this;
        this.process = 'saving';
        this.as.updatTa(this.TaDetails['_id'], this.taForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/truck-average']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditTruckAverageComponent.prototype.getOptions = function () {
        var _this = this;
        this.metaService.getallSites().subscribe(function (siteInfo) {
            _this.siteOptions = siteInfo;
        });
        this.ds.getTyreList().subscribe(function (res) {
            _this.tyre_option = res;
        });
    };
    EditTruckAverageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-truck-average',
            template: __webpack_require__(/*! ./edit-truck-average.component.html */ "./src/app/layout/admin-privileges/components/edit-truck-average/edit-truck-average.component.html"),
            styles: [__webpack_require__(/*! ./edit-truck-average.component.scss */ "./src/app/layout/admin-privileges/components/edit-truck-average/edit-truck-average.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_5__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditTruckAverageComponent);
    return EditTruckAverageComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-tyre-ratelist/edit-tyre-ratelist.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-tyre-ratelist/edit-tyre-ratelist.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form [formGroup]=\"trlForm\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Edit Material Receipt</div>\r\n      <div class=\"card-body\">\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Date</label>\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" #mr=\"bsDatepicker\" [bsConfig]=\"{ containerClass: 'theme-blue', 'dateInputFormat': 'DD-MM-YYYY', 'showWeekNumbers': false, 'minDate': currentDate }\" bsDatepicker formControlName=\"trl_date\"\r\n                class=\"form-control\">\r\n              <div class=\"input-group-prepend\" (click)=\"mr.toggle()\">\r\n                <span class=\"input-group-text\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Company Name</label>\r\n            <ng-select [items]=\"company_option\" placeholder=\"Type and search Company\" bindLabel=\"name\" bindValue=\"name\"\r\n              formControlName=\"company_name\">\r\n            </ng-select>\r\n          </div>\r\n          \r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Brand</label>\r\n            <ng-select [items]=\"brand_option\" placeholder=\"Type and search Brand\" bindLabel=\"name\" bindValue=\"name\"\r\n              formControlName=\"brand\">\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label class=\"required\">Tyre Type</label>\r\n              <select formControlName=\"tyre_type\" class=\"form-control\">\r\n                <option value=\"\">Select Tyre Type</option>\r\n                <option *ngFor=\"let r of tyre_types\" value=\"{{ r.tyre_type }}\">\r\n                  {{ r.tyre_type }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">Tyre Size</label>\r\n            <input type=\"text\" formControlName=\"tyre_size\" class=\"form-control\" placeholder=\"Tyre Size\">\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-3\">\r\n            <label class=\"required\">NSD</label>\r\n            <input type=\"text\" formControlName=\"nsd\" class=\"form-control\" placeholder=\"nsd\">\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                Vendor Details\r\n                <button class=\"btn btn-primary float-right\" (click)=\"addTrlItems()\" [disabled]=\"!trlForm.valid\"\r\n                  type=\"button\">\r\n                  Add Vendor\r\n                </button>\r\n              </div>\r\n              <!-- /.box-header -->\r\n              <div class=\"card-body\" *ngIf=\"trlForm.controls.trl_items.controls.length > 0\">\r\n                <table class=\"table table-bordered\" formArrayName=\"trl_items\">\r\n                  <tr>\r\n                    <th>Vendor</th>\r\n                    <th>Location</th>\r\n                    <th>Price(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                  \r\n                  <tr *ngFor=\"let school of trlForm.controls.trl_items.controls; let i=index\" formGroupName=\"{{i}}\">\r\n                    <td>\r\n                      <div class=\"input-group\">\r\n                        <select class=\"form-control\" formControlName=\"item_id\">\r\n                          <option value=\"\">Please select Vendor</option>\r\n                          <option *ngFor=\"let option of trl_items\" [value]=\"option._id\"> {{option.name}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <input type=\"text\" formControlName=\"location\" class=\"form-control\">\r\n                    </td>\r\n\r\n                    <td>\r\n                      <input type=\"number\" min=\"0\" formControlName=\"price\" class=\"form-control price\">\r\n                    </td>\r\n                    <td>\r\n                      <button class=\"btn btn-danger float-right\" [disabled]=\"trlForm.controls?.trl_items.controls.length == 1\" (click)=\"removeItems(i)\" type=\"button\">\r\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <div class=\"card-body\" *ngIf=\"trlForm.controls?.trl_items.controls.length == 0\">\r\n                <p>Please select vendor</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button class=\"btn btn-success float-right\" (click)=\"saveTrl()\" [disabled]=\"!trlForm.valid || process == 'saving'\" type=\"button\">\r\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  \r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-tyre-ratelist/edit-tyre-ratelist.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-tyre-ratelist/edit-tyre-ratelist.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvZWRpdC10eXJlLXJhdGVsaXN0L2VkaXQtdHlyZS1yYXRlbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-tyre-ratelist/edit-tyre-ratelist.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-tyre-ratelist/edit-tyre-ratelist.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EditTyreRatelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTyreRatelistComponent", function() { return EditTyreRatelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maintenance.service */ "./src/app/shared/services/maintenance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditTyreRatelistComponent = /** @class */ (function () {
    function EditTyreRatelistComponent(fb, metaService, ms, as, router, aroute) {
        this.fb = fb;
        this.metaService = metaService;
        this.ms = ms;
        this.as = as;
        this.router = router;
        this.aroute = aroute;
        this.currentDate = new Date();
        this.tyre_types = [
            { tyre_type: 'New Nylon' },
            { tyre_type: 'New Radial' },
            { tyre_type: 'Retread Nylon' },
            { tyre_type: 'Retread Radial' },
            { tyre_type: 'Khol' }
        ];
    }
    EditTyreRatelistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trlDetails = this.aroute.snapshot.data['trl_details'];
        this.bsConfig = Object.assign({}, { containerClass: 'theme-blue', 'rangeInputFormat': 'MMMM Do YYYY', minDate: new Date(), 'showWeekNumbers': false });
        this.buildForm();
        this.trlForm.controls.trl_items.valueChanges.subscribe(function (changes) {
            _this.updateValues();
        });
        this.getOptions();
    };
    EditTyreRatelistComponent.prototype.buildForm = function () {
        var _this = this;
        this.trlForm = this.fb.group({
            'trl_date': [new Date(this.trlDetails.trl_date)],
            'company_name': { value: this.trlDetails.company_name, disabled: true },
            'brand': { value: this.trlDetails.brand, disabled: true },
            'tyre_type': { value: this.trlDetails.tyre_type, disabled: true },
            'tyre_size': { value: this.trlDetails.tyre_size, disabled: true },
            'nsd': { value: this.trlDetails.nsd, disabled: true },
            'trl_items': this.fb.array([]),
        });
        // this.addMaterialreceiptItems()
        this.trlDetails.trl_items.forEach(function (element) {
            var control = _this.trlForm.controls['trl_items'];
            control.push(_this.initItemsData(element));
        });
    };
    EditTyreRatelistComponent.prototype.initItemsData = function (data) {
        return this.fb.group({
            'name': [data.name],
            'item_id': [data.item_id, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'location': [data.location, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'price': [data.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    EditTyreRatelistComponent.prototype.initItems = function () {
        return this.fb.group({
            'name': [''],
            'item_id': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'location': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'price': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    EditTyreRatelistComponent.prototype.addTrlItems = function () {
        var control = this.trlForm.controls['trl_items'];
        control.push(this.initItems());
    };
    EditTyreRatelistComponent.prototype.removeItems = function (i) {
        var control = this.trlForm.controls['trl_items'];
        control.removeAt(i);
    };
    EditTyreRatelistComponent.prototype.removed = function (value) {
        var product_id = value['id'];
        var trl_items = this.trlForm.controls['trl_items'].value;
        var index = trl_items.map(function (items) { return items.product_id; }).indexOf(product_id);
        this.removeItems(index);
    };
    EditTyreRatelistComponent.prototype.saveTrl = function () {
        var _this = this;
        this.process = 'saving';
        this.as.updatTrl(this.trlDetails['_id'], this.trlForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/tyre-ratelist']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditTyreRatelistComponent.prototype.getOptions = function () {
        var _this = this;
        this.as.getVendorMaster().subscribe(function (trackInfo) {
            _this.trl_items = trackInfo['records'];
        });
        this.metaService.getCompanyList().subscribe(function (trackInfo) {
            _this.company_option = trackInfo['result'];
        });
        this.metaService.getBrandList().subscribe(function (trackInfo) {
            _this.brand_option = trackInfo['result'];
        });
    };
    EditTyreRatelistComponent.prototype.updateValues = function () {
        var control = this.trlForm.controls['trl_items'];
        var _loop_1 = function () {
            var values = control.controls[intial_val].value;
            var item_mater_data = this_1.trl_items.find(function (item) { return item['_id'] == values['item_id']; });
            // Tax calculation ends here
            control.controls[intial_val].patchValue({
                name: item_mater_data ? item_mater_data.name : '',
                location: item_mater_data ? item_mater_data.location : ''
            }, { emitEvent: false });
        };
        var this_1 = this;
        for (var intial_val = 0; intial_val < control.length; intial_val++) {
            _loop_1();
        }
        this.trlForm.patchValue({
        // 'net_amount': net_price,
        // 'rounded_off': net_price,
        // 'total_amount': net_price
        }, { emitEvent: false });
    };
    EditTyreRatelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-tyre-ratelist',
            template: __webpack_require__(/*! ./edit-tyre-ratelist.component.html */ "./src/app/layout/admin-privileges/components/edit-tyre-ratelist/edit-tyre-ratelist.component.html"),
            styles: [__webpack_require__(/*! ./edit-tyre-ratelist.component.scss */ "./src/app/layout/admin-privileges/components/edit-tyre-ratelist/edit-tyre-ratelist.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_2__["MetaService"],
            src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_5__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditTyreRatelistComponent);
    return EditTyreRatelistComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-tyre-target-master/edit-tyre-target-master.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-tyre-target-master/edit-tyre-target-master.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"ttmForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Edit Tyre Target Master</div>\n      <div class=\"card-body\">\n\n        <div class=\"form-group row\">\n            <div class=\"col-lg-3 col-md-3\">\n              <label class=\"required\">Tyre Number</label>\n              <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                placeholder=\"Tyre Number\">\n            </div>\n\n            <div class=\"col-lg-3 col-md-3\">\n              <label class=\"required\">Target amount</label>\n              <input type=\"number\" formControlName=\"tamount\" class=\"form-control\"\n                placeholder=\"Target Amount\">\n            </div>\n\n        </div>\n       </div>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-success float-right\" (click)=\"saveitems()\" [disabled]=\"!ttmForm.valid || process == 'saving'\" type=\"button\">\n          Save <i *ngIf=\"process == 'saving'\" class=\"fa fa-spinner fa-spin\"></i>\n        </button>\n      </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-tyre-target-master/edit-tyre-target-master.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-tyre-target-master/edit-tyre-target-master.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvZWRpdC10eXJlLXRhcmdldC1tYXN0ZXIvZWRpdC10eXJlLXRhcmdldC1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/edit-tyre-target-master/edit-tyre-target-master.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/edit-tyre-target-master/edit-tyre-target-master.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: EditTyreTargetMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTyreTargetMasterComponent", function() { return EditTyreTargetMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
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




var EditTyreTargetMasterComponent = /** @class */ (function () {
    function EditTyreTargetMasterComponent(fb, as, router, aroute) {
        this.fb = fb;
        this.as = as;
        this.router = router;
        this.aroute = aroute;
    }
    EditTyreTargetMasterComponent.prototype.ngOnInit = function () {
        this.ttmDetails = this.aroute.snapshot.data['ttm_details'];
        console.log(this.ttmDetails);
        this.buildForm();
        this.getOptions();
    };
    EditTyreTargetMasterComponent.prototype.buildForm = function () {
        this.ttmForm = this.fb.group({
            'name': [this.ttmDetails.name],
            'tamount': [this.ttmDetails.tamount]
        });
    };
    EditTyreTargetMasterComponent.prototype.saveitems = function () {
        var _this = this;
        this.process = 'saving';
        this.as.updatTtm(this.ttmDetails['_id'], this.ttmForm.value).subscribe(function (mrInfo) {
            _this.process = 'done';
            _this.router.navigate(['/admin-privileges/tyre-target-master']);
        }, function (error) {
            _this.process = 'done';
            console.log(error);
        });
    };
    EditTyreTargetMasterComponent.prototype.getOptions = function () {
    };
    EditTyreTargetMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-tyre-target-master',
            template: __webpack_require__(/*! ./edit-tyre-target-master.component.html */ "./src/app/layout/admin-privileges/components/edit-tyre-target-master/edit-tyre-target-master.component.html"),
            styles: [__webpack_require__(/*! ./edit-tyre-target-master.component.scss */ "./src/app/layout/admin-privileges/components/edit-tyre-target-master/edit-tyre-target-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_2__["AdminprivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditTyreTargetMasterComponent);
    return EditTyreTargetMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/fleet-targets/fleet-targets.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/fleet-targets/fleet-targets.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 scroll-h-page\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n          <h4><i class=\"fa fa-truck\"></i> Fleet Targets</h4>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <form [formGroup]=\"filterForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Select Years</label>\r\n              <select formControlName=\"years\" class=\"form-control\">\r\n                <option value=\"\">--Select--</option>\r\n                <option *ngFor=\"let y of years\" value=\"{{ y.year }}\">\r\n                  {{ y.year }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Select tyres</label>\r\n              <select formControlName=\"tyres\" class=\"form-control\">\r\n                <option value=\"\">--Select--</option>\r\n                <option *ngFor=\"let t of tyres\" value=\"{{ t.name }}\">\r\n                  {{ t.name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 pull-right\">\r\n            <button (click)=\"fetchReport()\" class=\"btn btn-primary\" style=\"margin-top: 27px;\">\r\n              <i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch\r\n            </button>&nbsp;\r\n            <button style=\"margin-top:26px;\" (click)=\"refersh()\" class=\"btn btn-warning\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Refersh </button>\r\n          </div>\r\n        </div>\r\n      </form>  \r\n      <div class=\"row\">\r\n          <div class=\"col col-md-6 col-sm-6 col-xl-6 col-lg-6\">\r\n            <!-- <ngb-pagination\r\n              [(page)]=\"pagination.currenPage\"\r\n              [pageSize]=\"pagination.pageSize\"\r\n              [collectionSize]=\"pagination.total\"\r\n              [maxSize]=\"pagination.maxSize\"\r\n              (pageChange)=\"getMultiDes()\"\r\n            ></ngb-pagination> -->\r\n          </div>\r\n      </div>\r\n      <form [formGroup]=\"editForm\" class=\"table-overflow\">\r\n        <table class=\"table tableFixHead\">\r\n          <thead>\r\n            <tr>\r\n              <th>Truck No.</th>\r\n              <th>Year</th>\r\n              <th>Jan</th>\r\n              <th>Feb</th>\r\n              <th>March</th>\r\n              <th>April</th>\r\n              <th>May</th>\r\n              <th>June</th>\r\n              <th>July</th>\r\n              <th>Aug</th>\r\n              <th>Sept</th>\r\n              <th>Oct</th>\r\n              <th>Nov</th>\r\n              <th>Dec</th>\r\n              <th colspan=\"2\">Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngIf=\"loading\">\r\n              <td colspan=\"14\">\r\n                <div class=\"showbox\">\r\n                  <div class=\"loader\">\r\n                    <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                      <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                    </svg>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr *ngFor=\"let report of reports; let i = index\">\r\n\r\n              <td>{{report.truckno ? report.truckno : '--'}}</td>\r\n\r\n              <td *ngIf=\"!report.updated\">{{report.year ? report.year : '----'}}</td>\r\n              <td *ngIf=\"report.updated\">\r\n                <select style=\"width:110px;\" formControlName=\"years\" class=\"form-control\">\r\n                  <option value=\"\">--Select--</option>\r\n                  <option *ngFor=\"let y of years\" value=\"{{ y.year }}\">\r\n                    {{ y.year }}\r\n                  </option>\r\n                </select>\r\n              </td>\r\n\r\n              <td *ngFor=\"let month of report.months; let j = index\">\r\n                <span *ngIf=\"!report.updated\"> {{month.target}}</span>\r\n                <span *ngIf=\"report.updated\"> \r\n                  <span>\r\n                    <input type=\"text\" [formControlName]=\"month.name\" [placeholder]=\"month.name\" />\r\n                  </span>\r\n                </span>\r\n              </td>\r\n\r\n              <td>\r\n                <button (click)=\"edit(report, report.months)\" class=\"btn btn-primary\"><i class=\"fa fa-pencil\"></i> Edit</button>\r\n              </td>\r\n\r\n              <td>\r\n                <button *ngIf=\"report.updated\" (click)=\"updateValue(report.months,report)\" class=\"btn btn-danger\">\r\n                  <i class=\"fa fa-pencil-square-o\"></i> Update\r\n                </button>\r\n              </td>\r\n            </tr>\r\n            <tr *ngIf=\"reports.length === 0\">\r\n              <td align=\"center\" colspan=\"14\">No data available.</td>\r\n            </tr> \r\n          </tbody>\r\n        </table>\r\n      </form>\r\n      <!-- <ngb-pagination\r\n        [(page)]=\"pagination.currenPage\"\r\n        [pageSize]=\"pagination.pageSize\"\r\n        [collectionSize]=\"pagination.total\"\r\n        [maxSize]=\"pagination.maxSize\"\r\n        (pageChange)=\"getMultiDes()\"\r\n      ></ngb-pagination> -->\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/fleet-targets/fleet-targets.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/fleet-targets/fleet-targets.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-overflow {\n  overflow: scroll; }\n\n.mg-top-20 {\n  margin-top: 27px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FkbWluLXByaXZpbGVnZXMvY29tcG9uZW50cy9mbGVldC10YXJnZXRzL0Y6XFx0ZXN0aW5nX2RlbGV0ZV9mb2xkZXJcXFRSVUNLX0RFTU9fb2xkR2FuZXNoXFxmcm9udGVuZFxcdGRfZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcYWRtaW4tcHJpdmlsZWdlc1xcY29tcG9uZW50c1xcZmxlZXQtdGFyZ2V0c1xcZmxlZXQtdGFyZ2V0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FkbWluLXByaXZpbGVnZXMvY29tcG9uZW50cy9mbGVldC10YXJnZXRzL2ZsZWV0LXRhcmdldHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtb3ZlcmZsb3cge1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLm1nLXRvcC0yMCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/fleet-targets/fleet-targets.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/fleet-targets/fleet-targets.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: FleetTargetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FleetTargetsComponent", function() { return FleetTargetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/admin-privileges.service */ "./src/app/shared/services/admin-privileges.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FleetTargetsComponent = /** @class */ (function () {
    function FleetTargetsComponent(adminService, toastr, formBuilder, dashboardService) {
        this.adminService = adminService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.dashboardService = dashboardService;
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.filters = {
            year: '',
            tyre_no: ''
        };
        this.reports = [];
        this.years = [];
        this.tyres = [];
        this.loading = false;
        for (var i = 2025; i >= 2015; i--) {
            this.years.push({ year: i });
        }
        this.filterForm = this.formBuilder.group({
            years: [''],
            tyres: ['']
        });
        this.editForm = this.formBuilder.group({
            January: [''],
            February: [''],
            March: [''],
            April: [''],
            May: [''],
            June: [''],
            July: [''],
            August: [''],
            September: [''],
            October: [''],
            November: [''],
            December: [''],
            years: ['']
        });
    }
    FleetTargetsComponent.prototype.ngOnInit = function () {
        this.fetchReport();
        this.getTyres();
    };
    FleetTargetsComponent.prototype.fetchReport = function () {
        var _this = this;
        if (this.filterForm.controls['years'].value) {
            this.filters.year = this.filterForm.controls['years'].value;
        }
        else {
            this.filters.year = '';
        }
        if (this.filterForm.controls['tyres'].value) {
            this.filters.tyre_no = this.filterForm.controls['tyres'].value;
        }
        else {
            this.filters.tyre_no = '';
        }
        this.loading = true;
        this.adminService.getFleetTargetList(this.filters).subscribe(function (res) {
            _this.loading = false;
            res.forEach(function (e) {
                e.updated = false;
            });
            _this.reports = res;
            // this.pagination.total = res.total;
            // console.log('>>>>>>>>>>>>>res ', res);
        }, function (err) {
            _this.loading = false;
            console.log('>>>>>>>>>>>>>err', err);
        });
    };
    FleetTargetsComponent.prototype.edit = function (report, month) {
        var _this = this;
        report.updated = !report.updated;
        month.forEach(function (element) {
            _this.editForm.controls[element.name].setValue(element.target);
        });
        this.editForm.controls['years'].setValue(report.year);
    };
    FleetTargetsComponent.prototype.getTyres = function () {
        var _this = this;
        this.dashboardService.getTyreList().subscribe(function (res) {
            _this.tyres = res;
        }, function (err) {
        });
    };
    FleetTargetsComponent.prototype.updateValue = function (data, report) {
        var _this = this;
        var month = [];
        data.forEach(function (element) {
            for (var key in _this.editForm.controls) {
                if (key === element.name) {
                    element.target = _this.editForm.controls[key].value;
                    month.push(element);
                }
            }
        });
        var obj = {
            truckno: report.truckno,
            year: this.editForm.controls['years'].value,
            months: month
        };
        this.adminService.updateFleetTargetList(obj).subscribe(function (res) {
            _this.toastr.success('Data updated successfully.');
            report.updated = false;
            _this.fetchReport();
        }, function (err) {
            console.log('>>>>>>>>>>>>err', err);
            _this.toastr.error('Something went wrong.');
        });
    };
    FleetTargetsComponent.prototype.refersh = function () {
        this.fetchReport();
    };
    FleetTargetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fleet-targets',
            template: __webpack_require__(/*! ./fleet-targets.component.html */ "./src/app/layout/admin-privileges/components/fleet-targets/fleet-targets.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./fleet-targets.component.scss */ "./src/app/layout/admin-privileges/components/fleet-targets/fleet-targets.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_1__["AdminPrivilegesService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]])
    ], FleetTargetsComponent);
    return FleetTargetsComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/gps-rate-list/gps-rate-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/gps-rate-list/gps-rate-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>\r\n      <i class=\"fa fa-compass\"></i> ADD GPS RATE\r\n    </strong>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <form [formGroup]=\"addForm\">\r\n      <div class=\" form-group row\">\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Destination</label>\r\n            <ng-select [items]=\"cities\"\r\n                   bindLabel=\"name\"\r\n                   placeholder=\"Type to select\"\r\n                   [(ngModel)]=\"selectedCity\"\r\n                   formControlName=\"destination\"\r\n                   >\r\n        </ng-select>\r\n          </div>\r\n          <!-- <div class=\"form-group\">\r\n            <label>Destination</label>\r\n\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-prepend\"><span class=\"input-group-text\"><i\r\n                    class=\"fa fa-compass\"></i></span></span>\r\n              <select name=\"destination\" class=\"form-control\" formControlName=\"destination\">\r\n                  <option *ngFor=\"let obj of dropdown_data\" [value]=\"obj.name\">{{obj.name}}</option>\r\n              </select>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <label>8Mt</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"eight_mt\" name=\"eight_mt\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <label>21Mt</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"twentyone_mt\" name=\"twentyone_mt\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <label>25Mt</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"twentyfive_mt\" name=\"twentyfive_mt\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <div class=\"form-group\">\r\n            <label>33Mt</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"thirtythree_mt\" name=\"thirtythree_mt\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <button type=\"submit\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-success\" (click)=\"addData()\">\r\n      <i class=\"fa fa-floppy-o\"></i> Save</button>\r\n    <button type=\"reset\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-warning\" (click)=\"resetFilters()\">\r\n      <i class=\"fa fa-refresh\"></i> Refresh</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-compass\"></i> GPS RATE LIST\r\n        </div>\r\n        <div class=\"card-body\">\r\n\r\n          <div class=\"clearfix\"></div>\r\n          <br>\r\n          <table id=\"table_one\" class=\"table mytable\">\r\n            <thead>\r\n              <tr>\r\n                <th>Destination</th>\r\n                <th class=\"cell-align\">8 mt</th>\r\n                <th class=\"cell-align\">21 mt</th>\r\n                <th class=\"cell-align\">25 mt</th>\r\n                <th class=\"cell-align\">33 mt</th>\r\n                <!-- <th>Edit</th> -->\r\n                <th class=\"cell-align\">Delete</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let report of table_data\">\r\n                <td>{{ report.destination }}</td>\r\n                <td class=\"cell-align\">{{ report.eight_mt ? report.eight_mt : '-' }}</td>\r\n                <td class=\"cell-align\">{{ report.twentyone_mt}}</td>\r\n                <td class=\"cell-align\">{{ report.twentyfive_mt}}</td>\r\n                <td class=\"cell-align\">{{ report.thirtythree_mt}}</td>\r\n\r\n                <!-- <td><a class=\"badge badge-success\" (click)=\"editData(report)\"><i class=\"fa fa-pencil\" ></i></a></td> -->\r\n                <td class=\"cell-align\"><a class=\"badge badge-danger\" (click)=\"deleteData(report)\"><i class=\"fa fa-trash\"></i></a></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/gps-rate-list/gps-rate-list.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/gps-rate-list/gps-rate-list.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvZ3BzLXJhdGUtbGlzdC9ncHMtcmF0ZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/gps-rate-list/gps-rate-list.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/gps-rate-list/gps-rate-list.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: GpsRateListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpsRateListComponent", function() { return GpsRateListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_services_gps_rate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/gps-rate.service */ "./src/app/shared/services/gps-rate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GpsRateListComponent = /** @class */ (function () {
    function GpsRateListComponent(api, gpsRateService, formBuilder) {
        this.api = api;
        this.gpsRateService = gpsRateService;
        this.formBuilder = formBuilder;
        this.table_data = [];
        this.cities = [];
        this.addForm = this.formBuilder.group({
            destination: '',
            eight_mt: [0],
            twentyone_mt: [0],
            twentyfive_mt: [0],
            thirtythree_mt: [0],
        });
    }
    GpsRateListComponent.prototype.ngOnInit = function () {
        this.fetchTableData();
        this.fetchDropDownData();
    };
    GpsRateListComponent.prototype.fetchTableData = function () {
        var _this = this;
        this.gpsRateService.getAllGpsRate().subscribe(function (res) {
            console.log(res);
            _this.table_data = res;
        }, function (err) {
        });
    };
    GpsRateListComponent.prototype.fetchDropDownData = function () {
        var _this = this;
        this.gpsRateService.getDestination().subscribe(function (res) {
            console.log(res);
            _this.cities = res;
            //   this.dropdown_data.push(0, {
            //     'name': 'please select Destination'
            // });
        }, function (err) {
        });
    };
    GpsRateListComponent.prototype.addData = function () {
        var _this = this;
        var data = {
            // tslint:disable-next-line:max-line-length
            'destination': this.addForm.controls['destination'].value.name ? this.addForm.controls['destination'].value.name : this.addForm.controls['destination'].value,
            'eight_mt': this.addForm.controls['eight_mt'].value,
            'twentyone_mt': this.addForm.controls['twentyone_mt'].value,
            'twentyfive_mt': this.addForm.controls['twentyfive_mt'].value,
            'thirtythree_mt': this.addForm.controls['thirtythree_mt'].value
        };
        console.log(data);
        this.gpsRateService.addRate(data).subscribe(function (res) {
            console.log(res);
            _this.resetFilters();
            _this.fetchTableData();
        }, function (err) {
        });
    };
    GpsRateListComponent.prototype.editData = function (val) {
        console.log(val);
        this.addForm.controls['destination'].setValue(val.destination);
        this.addForm.controls['eight_mt'].setValue(val.eight_mt);
        this.addForm.controls['twentyone_mt'].setValue(val.twentyone_mt);
        this.addForm.controls['twentyfive_mt'].setValue(val.twentyfive_mt);
        this.addForm.controls['thirtythree_mt'].setValue(val.thirtythree_mt);
    };
    GpsRateListComponent.prototype.deleteData = function (val) {
        var _this = this;
        var data = {
            'destination': val.destination,
        };
        // console.log(val)
        this.gpsRateService.deleteData(data).subscribe(function (res) {
            console.log(res);
            _this.fetchTableData();
        }, function (err) {
        });
    };
    GpsRateListComponent.prototype.resetFilters = function () {
        this.addForm.reset();
    };
    GpsRateListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gps-rate-list',
            template: __webpack_require__(/*! ./gps-rate-list.component.html */ "./src/app/layout/admin-privileges/components/gps-rate-list/gps-rate-list.component.html"),
            styles: [__webpack_require__(/*! ./gps-rate-list.component.scss */ "./src/app/layout/admin-privileges/components/gps-rate-list/gps-rate-list.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_shared_services_gps_rate_service__WEBPACK_IMPORTED_MODULE_3__["GpsRateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], GpsRateListComponent);
    return GpsRateListComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/import-plant-rate-list/import-plant-rate-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/import-plant-rate-list/import-plant-rate-list.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\">\r\n    <form [formGroup]=\"filterForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <h4><i class=\"fa fa-truck\"></i> Import Plant Rate List</h4>\r\n          <hr />\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Companies</label>\r\n            <select formControlName=\"name\" class=\"form-control\">\r\n              <option value=\"\">Select Company</option>\r\n              <option *ngFor=\"let c of companies\" value=\"{{ c.accountname }}\">\r\n                {{ c.accountname }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Site</label>\r\n            <select formControlName=\"site\" class=\"form-control\">\r\n              <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                {{ s.branch_name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Rate By</label>\r\n            <select formControlName=\"rateby\" class=\"form-control\">\r\n              <option value=\"SPI\">SPI</option>\r\n              <option value=\"TON\">TON</option>\r\n              <option value=\"ACCTYRE\">ACCTYRE</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Status</label>\r\n            <select formControlName=\"status\" class=\"form-control\">\r\n              <option value=\"Active\">Active</option>\r\n              <option value=\"Non Active\">Non Active</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 pull-right\">\r\n          <label>Choose file to import</label>\r\n          <br />\r\n          <input type=\"file\" accept=\".xlsx, .xls, .csv\" class=\"inputfile\" name=\"file1\" id=\"file1\" multiple (change)=\"onSelectCSV($event)\" />\r\n          <label class=\"btn btn-success\" for=\"file1\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i> Select file</label>\r\n          {{ file ? file.name : '' }}\r\n        </div>\r\n        <div class=\"col-md-1 pull-right\">\r\n          <label>Import</label>\r\n          <button [disabled]=\"shown\" (click)=\"startImport()\" class=\"btn btn-primary\"><i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Import</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<!-- Loader -->\r\n<div class=\"showbox\" [hidden]=\"!shown\">\r\n  <div class=\"loader\">\r\n    <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n      <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n    </svg>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/import-plant-rate-list/import-plant-rate-list.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/import-plant-rate-list/import-plant-rate-list.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FkbWluLXByaXZpbGVnZXMvY29tcG9uZW50cy9pbXBvcnQtcGxhbnQtcmF0ZS1saXN0L0Y6XFx0ZXN0aW5nX2RlbGV0ZV9mb2xkZXJcXFRSVUNLX0RFTU9fb2xkR2FuZXNoXFxmcm9udGVuZFxcdGRfZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcYWRtaW4tcHJpdmlsZWdlc1xcY29tcG9uZW50c1xcaW1wb3J0LXBsYW50LXJhdGUtbGlzdFxcaW1wb3J0LXBsYW50LXJhdGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FkbWluLXByaXZpbGVnZXMvY29tcG9uZW50cy9pbXBvcnQtcGxhbnQtcmF0ZS1saXN0L2ltcG9ydC1wbGFudC1yYXRlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXRmaWxlIHtcclxuXHR3aWR0aDogMC4xcHg7XHJcblx0aGVpZ2h0OiAwLjFweDtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHotaW5kZXg6IC0xO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/import-plant-rate-list/import-plant-rate-list.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/import-plant-rate-list/import-plant-rate-list.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ImportPlantRateListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportPlantRateListComponent", function() { return ImportPlantRateListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/admin-privileges.service */ "./src/app/shared/services/admin-privileges.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImportPlantRateListComponent = /** @class */ (function () {
    function ImportPlantRateListComponent(meta, formBuilder, Admin, toastr) {
        this.meta = meta;
        this.formBuilder = formBuilder;
        this.Admin = Admin;
        this.toastr = toastr;
        this.sites = [];
        this.companies = [];
        this.shown = false;
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        console.log('>>>>>SItename', this.site_name);
        // Filter form control
        this.filterForm = this.formBuilder.group({
            name: [''],
            site: [''],
            status: ['Active'],
            rateby: ['SPI']
        });
        this.getSites();
        this.getCompanies();
    }
    ImportPlantRateListComponent.prototype.ngOnInit = function () {
    };
    // getSites() {
    //     this.meta.getSites().subscribe(res => {
    //         this.sites = res;
    //         if (this.usertype === 'ADMIN') {
    //             this.filterForm.controls['site'].setValue(this.sites[0].branch_name);
    //         } else {
    //           this.filterForm.controls['site'].setValue(this.site_name);
    //         }
    //     }, err => {
    //         // on error
    //     });
    // }
    ImportPlantRateListComponent.prototype.getSites = function () {
        var _this = this;
        this.meta.getallSites().subscribe(function (siteInfo) {
            _this.sites = siteInfo;
        });
    };
    ImportPlantRateListComponent.prototype.getCompanies = function () {
        var _this = this;
        this.meta.getPartyNames().subscribe(function (res) {
            _this.companies = res;
        }, function (err) {
            // on error
        });
    };
    ImportPlantRateListComponent.prototype.onSelectCSV = function (event) {
        this.file = event.target.files[0];
    };
    ImportPlantRateListComponent.prototype.startImport = function () {
        var _this = this;
        this.shown = true;
        var d = new FormData();
        d.append('file', this.file);
        d.append('name', this.filterForm.value.name);
        d.append('site', this.filterForm.value.site);
        d.append('status', this.filterForm.value.status);
        d.append('rateby', this.filterForm.value.rateby);
        this.Admin.importPlantRateList(d).subscribe(function (res) {
            _this.toastr.success('Imported successfully.');
            _this.shown = false;
            _this.file = '';
            _this.filterForm.controls['name'].setValue('');
        }, function (err) {
            _this.toastr.error('Something went wrong when importing.');
            _this.shown = false;
            _this.file = '';
        });
    };
    ImportPlantRateListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-plant-rate-list',
            template: __webpack_require__(/*! ./import-plant-rate-list.component.html */ "./src/app/layout/admin-privileges/components/import-plant-rate-list/import-plant-rate-list.component.html"),
            styles: [__webpack_require__(/*! ./import-plant-rate-list.component.scss */ "./src/app/layout/admin-privileges/components/import-plant-rate-list/import-plant-rate-list.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__["MetaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_3__["AdminPrivilegesService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ImportPlantRateListComponent);
    return ImportPlantRateListComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/import-site-truck-expense/import-site-truck-expense.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/import-site-truck-expense/import-site-truck-expense.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\">\r\n    <form [formGroup]=\"filterForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <h4><i class=\"fa fa-truck\"></i> Import Site Truck Expenses</h4>\r\n          <hr />\r\n        </div>\r\n        <div class=\"col-md-2 pull-right\">\r\n            <label>Choose file to import</label>\r\n            <br>\r\n          <input type=\"file\" accept=\".xlsx, .xls, .csv\" class=\"inputfile\" name=\"file1\" id=\"file1\"\r\n              multiple (change)=\"onSelectCSV($event)\">\r\n            <label class=\"btn btn-success\" for=\"file1\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i>\r\n              Select file</label>\r\n              {{file ? file.name : ''}}\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Site</label>\r\n            <select formControlName=\"site\" class=\"form-control\">\r\n              <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                {{ s.branch_name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Status</label>\r\n            <select formControlName=\"status\" class=\"form-control\">\r\n              <option value=\"Active\">Active</option>\r\n              <option value=\"Non Active\">Non Active</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-1 pull-right\">\r\n          <label>Import</label>\r\n          <button [disabled]=\"shown\" (click)=\"startImport()\" class=\"btn btn-primary\"><i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Import</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<!-- Loader -->\r\n<div class=\"showbox\" [hidden]=\"!shown\">\r\n  <div class=\"loader\">\r\n    <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n      <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n    </svg>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/import-site-truck-expense/import-site-truck-expense.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/import-site-truck-expense/import-site-truck-expense.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FkbWluLXByaXZpbGVnZXMvY29tcG9uZW50cy9pbXBvcnQtc2l0ZS10cnVjay1leHBlbnNlL0Y6XFx0ZXN0aW5nX2RlbGV0ZV9mb2xkZXJcXFRSVUNLX0RFTU9fb2xkR2FuZXNoXFxmcm9udGVuZFxcdGRfZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcYWRtaW4tcHJpdmlsZWdlc1xcY29tcG9uZW50c1xcaW1wb3J0LXNpdGUtdHJ1Y2stZXhwZW5zZVxcaW1wb3J0LXNpdGUtdHJ1Y2stZXhwZW5zZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FkbWluLXByaXZpbGVnZXMvY29tcG9uZW50cy9pbXBvcnQtc2l0ZS10cnVjay1leHBlbnNlL2ltcG9ydC1zaXRlLXRydWNrLWV4cGVuc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXRmaWxlIHtcclxuXHR3aWR0aDogMC4xcHg7XHJcblx0aGVpZ2h0OiAwLjFweDtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHotaW5kZXg6IC0xO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/import-site-truck-expense/import-site-truck-expense.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/import-site-truck-expense/import-site-truck-expense.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ImportSiteTruckExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportSiteTruckExpenseComponent", function() { return ImportSiteTruckExpenseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/admin-privileges.service */ "./src/app/shared/services/admin-privileges.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImportSiteTruckExpenseComponent = /** @class */ (function () {
    function ImportSiteTruckExpenseComponent(meta, formBuilder, Admin, toastr) {
        this.meta = meta;
        this.formBuilder = formBuilder;
        this.Admin = Admin;
        this.toastr = toastr;
        this.sites = [];
        this.shown = false;
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        // Filter form control
        this.filterForm = this.formBuilder.group({
            site: [''],
            status: ['Active']
        });
        this.getSites();
    }
    ImportSiteTruckExpenseComponent.prototype.ngOnInit = function () {
    };
    ImportSiteTruckExpenseComponent.prototype.getSites = function () {
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
            // on error
        });
    };
    ImportSiteTruckExpenseComponent.prototype.onSelectCSV = function (event) {
        this.file = event.target.files[0];
    };
    ImportSiteTruckExpenseComponent.prototype.startImport = function () {
        var _this = this;
        this.shown = true;
        var d = new FormData();
        d.append('file', this.file);
        d.append('site', this.filterForm.value.site);
        d.append('status', this.filterForm.value.status);
        this.Admin.importSiteTruckExpense(d).subscribe(function (res) {
            _this.toastr.success('Imported successfully.');
            _this.shown = false;
            _this.file = '';
        }, function (err) {
            _this.shown = false;
            _this.file = '';
            _this.toastr.error('Something went wrong when importing.');
        });
    };
    ImportSiteTruckExpenseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-site-truck-expense',
            template: __webpack_require__(/*! ./import-site-truck-expense.component.html */ "./src/app/layout/admin-privileges/components/import-site-truck-expense/import-site-truck-expense.component.html"),
            styles: [__webpack_require__(/*! ./import-site-truck-expense.component.scss */ "./src/app/layout/admin-privileges/components/import-site-truck-expense/import-site-truck-expense.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_1__["MetaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_3__["AdminPrivilegesService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ImportSiteTruckExpenseComponent);
    return ImportSiteTruckExpenseComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-accounts-category/list-accounts-category.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-accounts-category/list-accounts-category.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Accounts Category'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-accounts-category/list-accounts-category.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-accounts-category/list-accounts-category.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvbGlzdC1hY2NvdW50cy1jYXRlZ29yeS9saXN0LWFjY291bnRzLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-accounts-category/list-accounts-category.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-accounts-category/list-accounts-category.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ListAccountsCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAccountsCategoryComponent", function() { return ListAccountsCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
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





var ListAccountsCategoryComponent = /** @class */ (function () {
    function ListAccountsCategoryComponent(router, meta, as) {
        this.router = router;
        this.meta = meta;
        this.as = as;
        this.addButtonInfo = { text: 'Add Accounts Category', url: '/admin-privileges/add-accounts-category' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('admin-privileges/accounts-category');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Category/Type/UnderGroup' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Category', name: 'catname', sort: true },
                { title: 'Type', name: 'cattype', sort: true },
                { title: 'Under Group', name: 'undergroup', sort: true },
                { title: 'Accounts', name: 'accounts', sort: true },
                { title: 'Debit-Credit', name: 'drcr', sort: true },
                { title: 'Actions', links: ['Edit', 'Delete'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Category', name: 'catname', sort: true },
                { title: 'Type', name: 'cattype', sort: true },
                { title: 'Under Group', name: 'undergroup', sort: true },
                { title: 'Accounts', name: 'accounts', sort: true },
                { title: 'Debit-Credit', name: 'drcr', sort: true },
                { title: 'Actions', links: ['Edit'] }
            ];
        }
    }
    ListAccountsCategoryComponent.prototype.ngOnInit = function () {
    };
    ListAccountsCategoryComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/admin-privileges/accounts-category/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListAccountsCategoryComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListAccountsCategoryComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.as.deleteAc(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) {
            console.log(error);
        });
    };
    ListAccountsCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-accounts-category',
            template: __webpack_require__(/*! ./list-accounts-category.component.html */ "./src/app/layout/admin-privileges/components/list-accounts-category/list-accounts-category.component.html"),
            styles: [__webpack_require__(/*! ./list-accounts-category.component.scss */ "./src/app/layout/admin-privileges/components/list-accounts-category/list-accounts-category.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__["AdminprivilegesService"]])
    ], ListAccountsCategoryComponent);
    return ListAccountsCategoryComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-accounts-master/list-accounts-master.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-accounts-master/list-accounts-master.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Accounts Master'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-accounts-master/list-accounts-master.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-accounts-master/list-accounts-master.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvbGlzdC1hY2NvdW50cy1tYXN0ZXIvbGlzdC1hY2NvdW50cy1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-accounts-master/list-accounts-master.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-accounts-master/list-accounts-master.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ListAccountsMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAccountsMasterComponent", function() { return ListAccountsMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
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





var ListAccountsMasterComponent = /** @class */ (function () {
    function ListAccountsMasterComponent(router, meta, as) {
        this.router = router;
        this.meta = meta;
        this.as = as;
        this.addButtonInfo = { text: 'Add Accounts Master', url: '/admin-privileges/add-accounts-master' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('admin-privileges/accounts-master');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Accounts Name/Category/Group/City' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Name', name: 'accountname', sort: true },
                { title: 'Category', name: 'category', sort: true },
                { title: 'Under Group', name: 'group', sort: true },
                { title: 'Site', name: 'site', sort: true },
                { title: 'Opening', name: 'opbal', sort: true },
                { title: 'DRCR', name: 'ocrdr', sort: true },
                { title: 'Actions', links: ['Edit', 'Delete'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Name', name: 'accountname', sort: true },
                { title: 'Category', name: 'category', sort: true },
                { title: 'Under Group', name: 'group', sort: true },
                { title: 'Site', name: 'site', sort: true },
                { title: 'Opening', name: 'opbal', sort: true },
                { title: 'DRCR', name: 'ocrdr', sort: true },
                { title: 'Actions', links: ['Edit'] }
            ];
        }
    }
    ListAccountsMasterComponent.prototype.ngOnInit = function () {
    };
    ListAccountsMasterComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/admin-privileges/accounts-master/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListAccountsMasterComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListAccountsMasterComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.as.deleteAm(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) {
            console.log(error);
        });
    };
    ListAccountsMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-accounts-master',
            template: __webpack_require__(/*! ./list-accounts-master.component.html */ "./src/app/layout/admin-privileges/components/list-accounts-master/list-accounts-master.component.html"),
            styles: [__webpack_require__(/*! ./list-accounts-master.component.scss */ "./src/app/layout/admin-privileges/components/list-accounts-master/list-accounts-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__["AdminprivilegesService"]])
    ], ListAccountsMasterComponent);
    return ListAccountsMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-admin-master/list-admin-master.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-admin-master/list-admin-master.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Admin Master'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete Admin Master</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete this Admin Master?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-admin-master/list-admin-master.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-admin-master/list-admin-master.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvbGlzdC1hZG1pbi1tYXN0ZXIvbGlzdC1hZG1pbi1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-admin-master/list-admin-master.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-admin-master/list-admin-master.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ListAdminMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAdminMasterComponent", function() { return ListAdminMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
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





var ListAdminMasterComponent = /** @class */ (function () {
    function ListAdminMasterComponent(router, meta, as) {
        this.router = router;
        this.meta = meta;
        this.as = as;
        this.addButtonInfo = { text: 'Add Admin-Master', url: '/admin-privileges/add-admin-master' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('admin-privileges/admin-master');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Name/Type' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Name', name: 'name', sort: true },
                { title: 'Type', name: 'field', sort: true },
                { title: 'Actions', links: ['Edit', 'Delete'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Name', name: 'name', sort: true },
                { title: 'Type', name: 'field', sort: true },
                { title: 'Actions', links: ['Edit'] }
            ];
        }
    }
    ListAdminMasterComponent.prototype.ngOnInit = function () {
    };
    ListAdminMasterComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/admin-privileges/admin-master/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListAdminMasterComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListAdminMasterComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.as.deleteAdm(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) {
            console.log(error);
        });
    };
    ListAdminMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-admin-master',
            template: __webpack_require__(/*! ./list-admin-master.component.html */ "./src/app/layout/admin-privileges/components/list-admin-master/list-admin-master.component.html"),
            styles: [__webpack_require__(/*! ./list-admin-master.component.scss */ "./src/app/layout/admin-privileges/components/list-admin-master/list-admin-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__["AdminprivilegesService"]])
    ], ListAdminMasterComponent);
    return ListAdminMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-broker-master/list-broker-master.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-broker-master/list-broker-master.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Broker Master'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-broker-master/list-broker-master.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-broker-master/list-broker-master.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvbGlzdC1icm9rZXItbWFzdGVyL2xpc3QtYnJva2VyLW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-broker-master/list-broker-master.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-broker-master/list-broker-master.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ListBrokerMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBrokerMasterComponent", function() { return ListBrokerMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
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





var ListBrokerMasterComponent = /** @class */ (function () {
    function ListBrokerMasterComponent(router, meta, as) {
        this.router = router;
        this.meta = meta;
        this.as = as;
        this.addButtonInfo = { text: 'Add Broker Master', url: '/admin-privileges/add-broker-master' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('admin-privileges/broker-master');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Brokername' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Site', name: 'site', sort: true },
                { title: 'Broker Name', name: 'brokername', sort: true },
                { title: 'Mobile No', name: 'mobileno', sort: true },
                { title: 'State', name: 'statename', sort: true },
                { title: 'Actions', links: ['Edit', 'Delete'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Site', name: 'site', sort: true },
                { title: 'Broker Name', name: 'brokername', sort: true },
                { title: 'Mobile No', name: 'mobileno', sort: true },
                { title: 'State', name: 'statename', sort: true },
                { title: 'Actions', links: ['Edit'] }
            ];
        }
    }
    ListBrokerMasterComponent.prototype.ngOnInit = function () {
    };
    ListBrokerMasterComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/admin-privileges/broker-master/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListBrokerMasterComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListBrokerMasterComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.as.deleteBm(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) {
            console.log(error);
        });
    };
    ListBrokerMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-broker-master',
            template: __webpack_require__(/*! ./list-broker-master.component.html */ "./src/app/layout/admin-privileges/components/list-broker-master/list-broker-master.component.html"),
            styles: [__webpack_require__(/*! ./list-broker-master.component.scss */ "./src/app/layout/admin-privileges/components/list-broker-master/list-broker-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__["AdminprivilegesService"]])
    ], ListBrokerMasterComponent);
    return ListBrokerMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-consignee-master/list-consignee-master.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-consignee-master/list-consignee-master.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Consignee Master'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-consignee-master/list-consignee-master.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-consignee-master/list-consignee-master.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvbGlzdC1jb25zaWduZWUtbWFzdGVyL2xpc3QtY29uc2lnbmVlLW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-consignee-master/list-consignee-master.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-consignee-master/list-consignee-master.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ListConsigneeMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListConsigneeMasterComponent", function() { return ListConsigneeMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
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





var ListConsigneeMasterComponent = /** @class */ (function () {
    function ListConsigneeMasterComponent(router, meta, as) {
        this.router = router;
        this.meta = meta;
        this.as = as;
        this.addButtonInfo = { text: 'Add Consignee Master', url: '/admin-privileges/add-consignee-master' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('admin-privileges/consignee-master');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Consignee Name' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Site Name', name: 'site', sort: true },
                { title: 'Consignee', name: 'name', sort: true },
                { title: 'Mobile No', name: 'mobile', sort: true },
                { title: 'Actions', links: ['Edit', 'Delete'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Site Name', name: 'site', sort: true },
                { title: 'Consignee', name: 'name', sort: true },
                { title: 'Mobile No', name: 'mobile', sort: true },
                { title: 'Actions', links: ['Edit'] }
            ];
        }
    }
    ListConsigneeMasterComponent.prototype.ngOnInit = function () {
    };
    ListConsigneeMasterComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        // console.log('list material', data);
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/admin-privileges/consignee-master/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListConsigneeMasterComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListConsigneeMasterComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.as.deleteCm(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) { console.log(error); });
    };
    ListConsigneeMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-consignee-master',
            template: __webpack_require__(/*! ./list-consignee-master.component.html */ "./src/app/layout/admin-privileges/components/list-consignee-master/list-consignee-master.component.html"),
            styles: [__webpack_require__(/*! ./list-consignee-master.component.scss */ "./src/app/layout/admin-privileges/components/list-consignee-master/list-consignee-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__["AdminprivilegesService"]])
    ], ListConsigneeMasterComponent);
    return ListConsigneeMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-diesal-ratemaster/list-diesal-ratemaster.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-diesal-ratemaster/list-diesal-ratemaster.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Diesal Rate Masters'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-diesal-ratemaster/list-diesal-ratemaster.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-diesal-ratemaster/list-diesal-ratemaster.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvbGlzdC1kaWVzYWwtcmF0ZW1hc3Rlci9saXN0LWRpZXNhbC1yYXRlbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-diesal-ratemaster/list-diesal-ratemaster.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-diesal-ratemaster/list-diesal-ratemaster.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ListDiesalRatemasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDiesalRatemasterComponent", function() { return ListDiesalRatemasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
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





var ListDiesalRatemasterComponent = /** @class */ (function () {
    function ListDiesalRatemasterComponent(router, meta, as) {
        this.router = router;
        this.meta = meta;
        this.as = as;
        this.addButtonInfo = { text: 'Add Diesal Rates', url: '/admin-privileges/add-diesal-ratemaster' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('admin-privileges/diesal-ratemaster');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by pump name' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Site', name: 'site', sort: true },
                { title: 'Pump Name', name: 'vendername', sort: true },
                { title: 'Date', name: 'date', sort: true },
                { title: 'Rate', name: 'rate', sort: true },
                { title: 'UserName', name: 'username', sort: true },
                { title: 'Actions', links: ['Edit', 'Delete'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Site', name: 'site', sort: true },
                { title: 'Pump Name', name: 'vendername', sort: true },
                { title: 'Date', name: 'date', sort: true },
                { title: 'Rate', name: 'rate', sort: true },
                { title: 'UserName', name: 'username', sort: true },
                { title: 'Actions', links: ['Edit'] }
            ];
        }
    }
    ListDiesalRatemasterComponent.prototype.ngOnInit = function () {
    };
    ListDiesalRatemasterComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/admin-privileges/diesal-ratemaster/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListDiesalRatemasterComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListDiesalRatemasterComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.as.deleteDrm(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) {
            console.log(error);
        });
    };
    ListDiesalRatemasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-diesal-ratemaster',
            template: __webpack_require__(/*! ./list-diesal-ratemaster.component.html */ "./src/app/layout/admin-privileges/components/list-diesal-ratemaster/list-diesal-ratemaster.component.html"),
            styles: [__webpack_require__(/*! ./list-diesal-ratemaster.component.scss */ "./src/app/layout/admin-privileges/components/list-diesal-ratemaster/list-diesal-ratemaster.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__["AdminprivilegesService"]])
    ], ListDiesalRatemasterComponent);
    return ListDiesalRatemasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-site-destinationkms/list-site-destinationkms.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-site-destinationkms/list-site-destinationkms.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div style=\"margin-bottom: 5px !important;\">\n    <button class=\"btn btn-primary\" style=\"margin-bottom: 5px !important;\"> Site Destination kms</button>&nbsp;\n\n  <button class=\"btn btn-secondary\" (click)=\"updateSiteDestKm()\" style=\"margin-bottom: 5px !important;\">{{sdkName}}</button>&nbsp;\n  <button class=\"btn btn-secondary\" (click)=\"updateRateDestKm()\" style=\"margin-bottom: 5px !important;\"> {{rdkName}}</button>\n  <!-- <button class=\"btn btn-secondary\" (click)=\"updateZeroDestKm()\" style=\"margin-bottom: 5px !important;\"> {{sdkZero}}</button> -->\n</div>\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Site Destination kms'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete Site Destination</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete this Site?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-site-destinationkms/list-site-destinationkms.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-site-destinationkms/list-site-destinationkms.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvbGlzdC1zaXRlLWRlc3RpbmF0aW9ua21zL2xpc3Qtc2l0ZS1kZXN0aW5hdGlvbmttcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-site-destinationkms/list-site-destinationkms.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-site-destinationkms/list-site-destinationkms.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ListSiteDestinationkmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSiteDestinationkmsComponent", function() { return ListSiteDestinationkmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListSiteDestinationkmsComponent = /** @class */ (function () {
    function ListSiteDestinationkmsComponent(router, as) {
        this.router = router;
        this.as = as;
        this.addButtonInfo = { text: 'Add Site Destination Kms', url: '/admin-privileges/add-site-destinationkms' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('admin-privileges/site-destinationkms');
        this.columns = [];
        this.sdkName = "Update Invalid Site Destination kms";
        this.rdkName = "Update Invalid Site Rates Destinations";
        this.sdkZero = "Update Site Destination kms equals zero";
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Site / Destination Name' };
        this.columns = [
            { title: 'Site Name', name: 'site', sort: false },
            { title: 'Destination', name: 'destination', sort: false },
            { title: 'KM', name: 'km', sort: false },
            { title: 'Actions', links: ['Edit', 'Delete'] }
        ];
    }
    ListSiteDestinationkmsComponent.prototype.updateSiteDestKm = function () {
        var _this = this;
        this.sdkName = "Please wait...";
        this.as.updateSiteDestKm().subscribe(function (res) {
            _this.sdkName = "Update Invalid Site Destination kms";
        });
    };
    ListSiteDestinationkmsComponent.prototype.updateRateDestKm = function () {
        var _this = this;
        this.rdkName = 'Please Wait...';
        this.as.updateRateMultidestKm().subscribe(function (res) {
            _this.rdkName = "Update Invalid Site Rates Destinations";
        });
    };
    ListSiteDestinationkmsComponent.prototype.ngOnInit = function () {
    };
    ListSiteDestinationkmsComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        // console.log('list material', data);
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/admin-privileges/site-destinationkms/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListSiteDestinationkmsComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListSiteDestinationkmsComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.as.deleteSdk(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) { console.log(error); });
    };
    ListSiteDestinationkmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-site-destinationkms',
            template: __webpack_require__(/*! ./list-site-destinationkms.component.html */ "./src/app/layout/admin-privileges/components/list-site-destinationkms/list-site-destinationkms.component.html"),
            styles: [__webpack_require__(/*! ./list-site-destinationkms.component.scss */ "./src/app/layout/admin-privileges/components/list-site-destinationkms/list-site-destinationkms.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__["AdminprivilegesService"]])
    ], ListSiteDestinationkmsComponent);
    return ListSiteDestinationkmsComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-site-petrolpump/list-site-petrolpump.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-site-petrolpump/list-site-petrolpump.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Site Petrol Pump'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete Site Petrol Pump</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete this Site Petrol Pump?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-site-petrolpump/list-site-petrolpump.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-site-petrolpump/list-site-petrolpump.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvbGlzdC1zaXRlLXBldHJvbHB1bXAvbGlzdC1zaXRlLXBldHJvbHB1bXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-site-petrolpump/list-site-petrolpump.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-site-petrolpump/list-site-petrolpump.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ListSitePetrolpumpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSitePetrolpumpComponent", function() { return ListSitePetrolpumpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
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





var ListSitePetrolpumpComponent = /** @class */ (function () {
    function ListSitePetrolpumpComponent(router, meta, as) {
        this.router = router;
        this.meta = meta;
        this.as = as;
        this.addButtonInfo = { text: 'Add Petrol Pump', url: '/admin-privileges/add-site-petrolpump' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('admin-privileges/site-petrolpump');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Site Name' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Site Name', name: 'site', sort: false },
                { title: 'Actions', links: ['Edit', 'Delete'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Site Name', name: 'site', sort: false },
                { title: 'Actions', links: ['Edit'] }
            ];
        }
    }
    ListSitePetrolpumpComponent.prototype.ngOnInit = function () {
    };
    ListSitePetrolpumpComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        // console.log('list material', data);
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/admin-privileges/site-petrolpump/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListSitePetrolpumpComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListSitePetrolpumpComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.as.deleteSpp(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) { console.log(error); });
    };
    ListSitePetrolpumpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-site-petrolpump',
            template: __webpack_require__(/*! ./list-site-petrolpump.component.html */ "./src/app/layout/admin-privileges/components/list-site-petrolpump/list-site-petrolpump.component.html"),
            styles: [__webpack_require__(/*! ./list-site-petrolpump.component.scss */ "./src/app/layout/admin-privileges/components/list-site-petrolpump/list-site-petrolpump.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__["AdminprivilegesService"]])
    ], ListSitePetrolpumpComponent);
    return ListSitePetrolpumpComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-site-profile/list-site-profile.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-site-profile/list-site-profile.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Site Profile'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-site-profile/list-site-profile.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-site-profile/list-site-profile.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvbGlzdC1zaXRlLXByb2ZpbGUvbGlzdC1zaXRlLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-site-profile/list-site-profile.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-site-profile/list-site-profile.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ListSiteProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSiteProfileComponent", function() { return ListSiteProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
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





var ListSiteProfileComponent = /** @class */ (function () {
    function ListSiteProfileComponent(router, meta, as) {
        this.router = router;
        this.meta = meta;
        this.as = as;
        this.addButtonInfo = { text: 'Add Site Profile', url: '/admin-privileges/add-site-profile' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('admin-privileges/site-profile');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Job Site' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Site', name: 'site', sort: true },
                { title: 'Consignor', name: 'consignor', sort: true },
                { title: 'Parking', name: 'destination', sort: true },
                { title: 'From', name: 'from', sort: true },
                { title: 'Actions', links: ['Edit', 'Delete'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Site', name: 'site', sort: true },
                { title: 'Consignor', name: 'consignor', sort: true },
                { title: 'Parking', name: 'destination', sort: true },
                { title: 'From', name: 'from', sort: true },
                { title: 'Actions', links: ['Edit'] }
            ];
        }
    }
    ListSiteProfileComponent.prototype.ngOnInit = function () {
    };
    ListSiteProfileComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/admin-privileges/site-profile/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListSiteProfileComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListSiteProfileComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.as.deleteSpro(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) {
            console.log(error);
        });
    };
    ListSiteProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-site-profile',
            template: __webpack_require__(/*! ./list-site-profile.component.html */ "./src/app/layout/admin-privileges/components/list-site-profile/list-site-profile.component.html"),
            styles: [__webpack_require__(/*! ./list-site-profile.component.scss */ "./src/app/layout/admin-privileges/components/list-site-profile/list-site-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__["AdminprivilegesService"]])
    ], ListSiteProfileComponent);
    return ListSiteProfileComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-truck-average/list-truck-average.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-truck-average/list-truck-average.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Truck Average'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete Site Truck Average</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete this Site Truck Average?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-truck-average/list-truck-average.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-truck-average/list-truck-average.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvbGlzdC10cnVjay1hdmVyYWdlL2xpc3QtdHJ1Y2stYXZlcmFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-truck-average/list-truck-average.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-truck-average/list-truck-average.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ListTruckAverageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTruckAverageComponent", function() { return ListTruckAverageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListTruckAverageComponent = /** @class */ (function () {
    function ListTruckAverageComponent(router, as) {
        this.router = router;
        this.as = as;
        this.addButtonInfo = { text: 'Add Truck Average', url: '/admin-privileges/add-truck-average' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('admin-privileges/truck-average');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Site Name' };
        this.columns = [
            { title: 'Site Name', name: 'site', sort: false },
            { title: 'Actions', links: ['Edit', 'Delete'] }
        ];
    }
    ListTruckAverageComponent.prototype.ngOnInit = function () {
    };
    ListTruckAverageComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        // console.log('list material', data);
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/admin-privileges/truck-average/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListTruckAverageComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListTruckAverageComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.as.deleteTa(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) { console.log(error); });
    };
    ListTruckAverageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-truck-average',
            template: __webpack_require__(/*! ./list-truck-average.component.html */ "./src/app/layout/admin-privileges/components/list-truck-average/list-truck-average.component.html"),
            styles: [__webpack_require__(/*! ./list-truck-average.component.scss */ "./src/app/layout/admin-privileges/components/list-truck-average/list-truck-average.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__["AdminprivilegesService"]])
    ], ListTruckAverageComponent);
    return ListTruckAverageComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-tyre-ratelist/list-tyre-ratelist.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-tyre-ratelist/list-tyre-ratelist.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Tyre Rate List'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\r\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\r\n  </app-smart-table>\r\n</div>\r\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\r\n  <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Delete Tyre Rate List</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <p>Are you sure you want to delete this tyre Rate List?</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\r\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\r\n                <span *ngIf=\"process !='processing'\">Delete</span>\r\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\r\n              </button>\r\n          </div>\r\n      </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-tyre-ratelist/list-tyre-ratelist.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-tyre-ratelist/list-tyre-ratelist.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvbGlzdC10eXJlLXJhdGVsaXN0L2xpc3QtdHlyZS1yYXRlbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-tyre-ratelist/list-tyre-ratelist.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-tyre-ratelist/list-tyre-ratelist.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ListTyreRatelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTyreRatelistComponent", function() { return ListTyreRatelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListTyreRatelistComponent = /** @class */ (function () {
    function ListTyreRatelistComponent(router, as) {
        this.router = router;
        this.as = as;
        this.addButtonInfo = { text: 'Add Tyre Rate List', url: '/admin-privileges/add-tyre-ratelist' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('admin-privileges/tyre-ratelist');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by CompanyName/Brand/TyreType/TyreSize' };
        this.columns = [
            { title: 'Company Name', name: 'company_name', sort: false },
            { title: 'Brand', name: 'brand', sort: false },
            { title: 'Tyre Type', name: 'tyre_type', sort: false },
            { title: 'Tyre size', name: 'tyre_size', sort: false },
            { title: 'NSD', name: 'nsd', sort: false },
            { title: 'Date', name: 'trl_date', dateFormat: 'fullDate', sort: false },
            { title: 'Actions', links: ['Edit', 'Delete', 'View'] }
        ];
    }
    ListTyreRatelistComponent.prototype.ngOnInit = function () {
    };
    ListTyreRatelistComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        // console.log('list material', data);
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/admin-privileges/tyre-ratelist/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (event.data.action === 'View') {
            this.router.navigate(["/admin-privileges/tyre-ratelist/" + this.dataRow['row']['_id'] + "/view"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListTyreRatelistComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListTyreRatelistComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.as.deleteTrl(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) { console.log(error); });
    };
    ListTyreRatelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-tyre-ratelist',
            template: __webpack_require__(/*! ./list-tyre-ratelist.component.html */ "./src/app/layout/admin-privileges/components/list-tyre-ratelist/list-tyre-ratelist.component.html"),
            styles: [__webpack_require__(/*! ./list-tyre-ratelist.component.scss */ "./src/app/layout/admin-privileges/components/list-tyre-ratelist/list-tyre-ratelist.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__["AdminprivilegesService"]])
    ], ListTyreRatelistComponent);
    return ListTyreRatelistComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-tyre-target-master/list-tyre-target-master.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-tyre-target-master/list-tyre-target-master.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-smart-table [commonFilter]=\"commonFilter\" [addButtonInfo]=\"addButtonInfo\" [screenName]=\"'Tyre Target Master'\" [columns]=\"columns\" [fetchUrl]=\"fetchUrl\" [limit]=\"5\"\n    [refreshRedTable]=\"refreshRedTable\" (event)=\"linkClicked($event)\">\n  </app-smart-table>\n</div>\n<div class=\"modal fade\" role=\"dialog\" id=\"deleteModal\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Delete Tyre Target Master</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <p>Are you sure you want to delete this Tyre Target Master?</p>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancel</button>\n              <button type=\"button\" [disabled]=\"process =='processing'\" (click)=\"deleteRecord()\" class=\"actions-button btn btn-danger\">\n                <span *ngIf=\"process !='processing'\">Delete</span>\n                <span *ngIf=\"process == 'processing'\">Deleting<i class=\"fa fa-spinner fa-spin\"></i></span>\n              </button>\n          </div>\n      </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-tyre-target-master/list-tyre-target-master.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-tyre-target-master/list-tyre-target-master.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvbGlzdC10eXJlLXRhcmdldC1tYXN0ZXIvbGlzdC10eXJlLXRhcmdldC1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/list-tyre-target-master/list-tyre-target-master.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/list-tyre-target-master/list-tyre-target-master.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ListTyreTargetMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTyreTargetMasterComponent", function() { return ListTyreTargetMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../parameters */ "./src/app/parameters.ts");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
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





var ListTyreTargetMasterComponent = /** @class */ (function () {
    function ListTyreTargetMasterComponent(router, meta, as) {
        this.router = router;
        this.meta = meta;
        this.as = as;
        this.addButtonInfo = { text: 'Add Tyre-Target-Master', url: '/admin-privileges/add-tyre-target-master' };
        this.fetchUrl = Object(_parameters__WEBPACK_IMPORTED_MODULE_2__["GetApiurl"])('admin-privileges/tyre-target-master');
        this.columns = [];
        this.commonFilter = { filterString: '', columnName: 'searchString', placeholder: 'Search by Name' };
        this.usertype = this.meta.getSiteFromStorage().role;
        console.log(' Usertype >>>  ', this.usertype);
        if (this.usertype === 'ADMIN') {
            this.columns = [
                { title: 'Name', name: 'name', sort: true },
                { title: 'Amount', name: 'tamount', sort: true },
                { title: 'Actions', links: ['Edit', 'Delete'] }
            ];
        }
        else {
            this.columns = [
                { title: 'Name', name: 'name', sort: true },
                { title: 'Amount', name: 'tamount', sort: true },
                { title: 'Actions', links: ['Edit'] }
            ];
        }
    }
    ListTyreTargetMasterComponent.prototype.ngOnInit = function () {
    };
    ListTyreTargetMasterComponent.prototype.linkClicked = function (event) {
        var data = event.data;
        this.dataRow = data;
        if (event.data.action === 'Edit') {
            this.router.navigate(["/admin-privileges/tyre-target-master/" + this.dataRow['row']['_id'] + "/edit"]);
        }
        if (data.action === 'Delete') {
            $('#deleteModal').modal('show');
        }
    };
    ListTyreTargetMasterComponent.prototype.deleteRecord = function () {
        this.process = 'processing';
        this.deleteProject(this.dataRow['row']['_id']);
    };
    ListTyreTargetMasterComponent.prototype.deleteProject = function (index) {
        var _this = this;
        this.as.deleteTtm(index).subscribe(function (ng2TableData) {
            _this.process = 'done';
            $('#deleteModal').modal('hide');
            _this.refreshRedTable = { mode: 'delete', id: index };
        }, // filter(row => row.id != index),
        function (// filter(row => row.id != index),
        error) {
            console.log(error);
        });
    };
    ListTyreTargetMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-tyre-target-master',
            template: __webpack_require__(/*! ./list-tyre-target-master.component.html */ "./src/app/layout/admin-privileges/components/list-tyre-target-master/list-tyre-target-master.component.html"),
            styles: [__webpack_require__(/*! ./list-tyre-target-master.component.scss */ "./src/app/layout/admin-privileges/components/list-tyre-target-master/list-tyre-target-master.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _adminprivileges_service__WEBPACK_IMPORTED_MODULE_3__["AdminprivilegesService"]])
    ], ListTyreTargetMasterComponent);
    return ListTyreTargetMasterComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/plants-rate-list/plants-rate-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/plants-rate-list/plants-rate-list.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>Plants Rate List</strong>\r\n  </div>\r\n\r\n  <!-- <div class=\"card-body\">\r\n    <!-- <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n      <div class=\" form-group row\">\r\n        <div class=\"col-sm-3\">\r\n          <label for=\"city\">*Company Name</label>\r\n          <select id=\"select1\" name=\"select1\" required class=\"form-control\">\r\n            <option value=\"0\">Please select</option>\r\n            <option value=\"1\">Nagpur</option>\r\n            <option value=\"2\">Awarpur</option>\r\n            <option value=\"3\">Bela Coal MP</option>\r\n            <option value=\"4\">Bela MP</option>\r\n            <option value=\"5\">Maihar MP</option>\r\n            <option value=\"6\">MCW Gadchandur</option>\r\n            <option value=\"7\">NWC Plant</option>\r\n            <option value=\"8\">Reliance Hazira</option>\r\n            <option value=\"9\">Rewa Hub MP</option>\r\n            <option value=\"10\">Sidhi MP</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"col-sm-3\">\r\n          <label for=\"city\">*Site</label>\r\n          <select id=\"select1\" name=\"select1\" required class=\"form-control\">\r\n            <option value=\"0\">Please select</option>\r\n            <option value=\"1\">Nagpur</option>\r\n            <option value=\"2\">Awarpur</option>\r\n            <option value=\"3\">Bela Coal MP</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n          <label for=\"city\">*Rate By</label>\r\n          <select id=\"select1\" name=\"select1\" required class=\"form-control\">\r\n            <option value=\"0\">Please select</option>\r\n            <option value=\"1\">SPI</option>\r\n            <option value=\"2\">TON</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"col-sm-3\">\r\n          <label for=\"city\">*Status</label>\r\n          <select id=\"select1\" name=\"select1\" required class=\"form-control\">\r\n            <option value=\"0\">Please select</option>\r\n            <option value=\"1\">Active</option>\r\n            <option value=\"2\">InActive</option>\r\n          </select>\r\n        </div>\r\n\r\n\r\n      </div>\r\n      <!--/.row1-->\r\n      <!-- <div class=\" form-group row\">\r\n        <div class=\"col-sm-2\">\r\n          <label for=\"city\">*Destination</label>\r\n          <select id=\"select1\" name=\"select1\" required class=\"form-control\">\r\n            <option value=\"0\">Please select</option>\r\n            <option value=\"1\">Nagpur</option>\r\n            <option value=\"2\">Awarpur</option>\r\n            <option value=\"3\">Bela Coal MP</option>\r\n            <option value=\"4\">Bela MP</option>\r\n            <option value=\"5\">Maihar MP</option>\r\n            <option value=\"6\">MCW Gadchandur</option>\r\n            <option value=\"7\">NWC Plant</option>\r\n            <option value=\"8\">Reliance Hazira</option>\r\n            <option value=\"9\">Rewa Hub MP</option>\r\n            <option value=\"10\">Sidhi MP</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <label for=\"postal-code\">SPI</label>\r\n          <input type=\"text\" class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <label for=\"postal-code\">*KM</label>\r\n          <input type=\"text\" class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <label for=\"postal-code\">*Rate</label>\r\n          <input type=\"text\" class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"col-sm\">\r\n          <label for=\"postal-code\">*Start Date</label>\r\n          <input type=\"date\" class=\"form-control\" id=\"postal-code\">\r\n        </div>\r\n\r\n        <div class=\"col-sm\">\r\n          <label for=\"postal-code\">*End Date</label>\r\n          <input type=\"date\" class=\"form-control\" id=\"postal-code\">\r\n        </div>\r\n      </div> -->\r\n\r\n\r\n      <!--/.row2-->\r\n\r\n      <!-- <div class=\" form-group row\">\r\n        <div class=\"col-sm\">\r\n          <label for=\"city\">Item Name</label>\r\n          <select id=\"select1\" name=\"select1\" required class=\"form-control\">\r\n            <option value=\"0\">Please select</option>\r\n            <option value=\"1\">Nagpur</option>\r\n            <option value=\"2\">Awarpur</option>\r\n            <option value=\"3\">Bela Coal MP</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-sm\">\r\n          <label for=\"postal-code\">QTY</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"postal-code\">\r\n        </div>\r\n        <div class=\"col-sm\">\r\n          <label for=\"city\">Unit</label>\r\n          <select id=\"select1\" name=\"select1\" required class=\"form-control\">\r\n            <option value=\"0\">Please select</option>\r\n            <option value=\"1\">Nagpur</option>\r\n            <option value=\"2\">Awarpur</option>\r\n            <option value=\"3\">Bela Coal MP</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-sm\">\r\n          <label for=\"postal-code\">Rate</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"postal-code\">\r\n        </div>\r\n        <div class=\"col-sm\">\r\n          <label for=\"postal-code\">Disc</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"postal-code\">\r\n        </div>\r\n        <div class=\"col-sm\">\r\n          <label for=\"postal-code\">CGST</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"postal-code\">\r\n        </div>\r\n        <div class=\"col-sm\">\r\n          <label for=\"postal-code\">SGST</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"postal-code\">\r\n        </div>\r\n        <div class=\"col-sm\">\r\n          <label for=\"postal-code\">IGST</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"postal-code\">\r\n        </div>\r\n        <div class=\"col-sm\">\r\n          <label for=\"postal-code\">Amount</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"postal-code\">\r\n        </div>\r\n      </div> -->\r\n\r\n      <!--/.row3-->\r\n      <!-- <div class=\" form-group row\">\r\n        <div class=\"col-sm-auto\" style=\"margin-right: 10px\">\r\n          <i class=\"fa fa-plus-square fa-lg mt-4\"></i>\r\n\r\n        </div>\r\n        <div class=\"col-sm\">\r\n          <i class=\"fa fa-minus-square fa-lg mt-4\"></i>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\" form-group row\">\r\n        <div class=\"col-sm\">\r\n          <label for=\"postal-code\">Narration</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"postal-code\">\r\n        </div>\r\n        <div class=\"col-sm\">\r\n          <label for=\"postal-code\">Terms And Conditions</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"postal-code\">\r\n        </div>\r\n      </div>\r\n      <div class=\" form-group row\">\r\n        <div class=\"col-sm\">\r\n          <label for=\"postal-code\">Net Amount</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"postal-code\">\r\n        </div>\r\n        <div class=\"col-sm\">\r\n          <label for=\"postal-code\">Rounded off</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"postal-code\">\r\n        </div>\r\n        <div class=\"col-sm\">\r\n          <label for=\"postal-code\">Type</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"postal-code\">\r\n        </div>\r\n      </div>\r\n      <div class=\" form-group row\">\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"postal-code\">Total Amount</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"postal-code\">\r\n        </div>\r\n      </div> -->\r\n\r\n    <!-- </form> -->\r\n  <!-- </div> -->\r\n  <!-- <div class=\"card-footer\">\r\n    <button type=\"submit\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-success\">\r\n      <i class=\"fa fa-dot-circle-o\"></i> Save</button>\r\n    <button type=\"reset\" style=\"margin-right: 10px\" class=\"btn btn-sm btn-warning\">\r\n      <i class=\"fa fa-refresh\"></i> Refresh</button>\r\n\r\n  </div> -->\r\n<!-- </div> -->\r\n\r\n\r\n\r\n    <div class=\"animated fadeIn\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg\">\r\n          <div class=\"card\">\r\n            <!-- <div class=\"card-header\">\r\n              <i class=\"fa fa-align-justify\"></i> Prepared By Administrator\r\n            </div> -->\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n\r\n                  <!-- <div class=\"col-md-8\">\r\n                    <ul class=\"pagination\">\r\n                      <li class=\"page-item\">\r\n                        <a class=\"page-link\" href=\"#\">Copy</a>\r\n                      </li>\r\n                      <li class=\"page-item \">\r\n                        <a class=\"page-link\" href=\"#\">Excel</a>\r\n                      </li>\r\n                      <li class=\"page-item\">\r\n                        <a class=\"page-link\" href=\"#\">PDF</a>\r\n                      </li>\r\n                      <li class=\"page-item\">\r\n                        <a class=\"page-link\" href=\"#\">Column Visibility</a>\r\n                      </li>\r\n\r\n                    </ul>\r\n                  </div> -->\r\n                  <!-- <div class=\"col-md-4\">\r\n                      <div class=\"input-group\">\r\n                        <span class=\"input-group-addon\">\r\n                          <i class=\"fa fa-search\"></i>\r\n                        </span>\r\n                        <input type=\"text\" class=\"form-control\"  placeholder=\"Search by name\" />\r\n                      </div>\r\n                    </div> -->\r\n                </div>\r\n                <ngb-pagination\r\n                [(page)]=\"pagination.currenPage\"\r\n                [pageSize]=\"pagination.pageSize\"\r\n                [collectionSize]=\"pagination.total\"\r\n                [maxSize]=\"pagination.maxSize\"\r\n                (pageChange)=\"fetchReport()\"\r\n                ></ngb-pagination>\r\n                <p>\r\n                  <strong>Total:</strong> {{ pagination.total }}, <strong>Records per page:</strong> {{ pagination.pageSize }},\r\n                  <strong>Showing:</strong> {{ (pagination.currenPage - 1) * pagination.pageSize }} -\r\n                  {{ (pagination.currenPage - 1) * pagination.pageSize + 50 }}\r\n                </p>\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Site</th>\r\n                    <th>Name</th>\r\n                    <th>Rate by</th>\r\n                    <th>Status</th>\r\n                    <!-- <th>Edit</th>\r\n                    <th>Print</th>\r\n                    <th>Delete</th> -->\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngIf=\"loading\">\r\n                    <td colspan=\"14\">\r\n                      <div class=\"showbox\">\r\n                        <div class=\"loader\">\r\n                          <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                          </svg>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngFor= \"let planRate of plantRates; let i = index\">\r\n                    <td><a [routerLink]=\"['/admin-privileges/plants-rate-multiple-destination', planRate.site]\">{{planRate.site ? planRate.site : '--'}}</a></td>\r\n                    <td>{{planRate.name ? planRate.name : '--'}}</td>\r\n                    <td>{{planRate.rateby ? planRate.rateby : '--'}}</td>\r\n                    <td>{{planRate.status ? planRate.status : '--'}}</td>\r\n\r\n                    <!-- <td>\r\n                        <a class=\"badge badge-success\" href=\"#\"><i class=\"fa fa-pencil\"></i></a>\r\n\r\n                      </td>\r\n                      <td>\r\n                        <a class=\"badge badge-secondary\" href=\"#\"><i class=\"fa fa-print\"></i></a>\r\n                      </td>\r\n                      <td>\r\n                          <a class=\"badge badge-danger\" href=\"#\"><i class=\"fa fa-trash\"></i></a>\r\n                        </td> -->\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <ngb-pagination\r\n              [(page)]=\"pagination.currenPage\"\r\n              [pageSize]=\"pagination.pageSize\"\r\n              [collectionSize]=\"pagination.total\"\r\n              [maxSize]=\"pagination.maxSize\"\r\n              (pageChange)=\"fetchReport()\"\r\n              ></ngb-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/plants-rate-list/plants-rate-list.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/plants-rate-list/plants-rate-list.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvcGxhbnRzLXJhdGUtbGlzdC9wbGFudHMtcmF0ZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/plants-rate-list/plants-rate-list.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/plants-rate-list/plants-rate-list.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PlantsRateListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantsRateListComponent", function() { return PlantsRateListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/admin-privileges.service */ "./src/app/shared/services/admin-privileges.service.ts");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlantsRateListComponent = /** @class */ (function () {
    function PlantsRateListComponent(adminService) {
        this.adminService = adminService;
        this.plantRates = [];
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.filters = { page: 0 };
        this.loading = false;
        this.planRateList();
    }
    PlantsRateListComponent.prototype.ngOnInit = function () {
    };
    PlantsRateListComponent.prototype.planRateList = function () {
        var _this = this;
        this.filters.page = this.pagination.currenPage;
        this.loading = true;
        this.adminService.getPlanRateList(this.filters).subscribe(function (res) {
            _this.loading = false;
            _this.plantRates = res.results;
            _this.pagination.total = res.total;
            console.log('>>>>>>>>>>>>>res ', res);
        }, function (err) {
            _this.loading = false;
            console.log('>>>>>>>>>>>>>err', err);
        });
    };
    PlantsRateListComponent.prototype.fetchReport = function () {
    };
    PlantsRateListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plants-rate-list',
            template: __webpack_require__(/*! ./plants-rate-list.component.html */ "./src/app/layout/admin-privileges/components/plants-rate-list/plants-rate-list.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./plants-rate-list.component.scss */ "./src/app/layout/admin-privileges/components/plants-rate-list/plants-rate-list.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_1__["AdminPrivilegesService"]])
    ], PlantsRateListComponent);
    return PlantsRateListComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/plants-rate-multiple-destination/plants-rate-multiple-destination.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/plants-rate-multiple-destination/plants-rate-multiple-destination.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 scroll-h-page\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-11 col-sm-11 col-md-11 col-lg-11\">\r\n            <h4><i class=\"fa fa-truck\"></i> Plants Rate Multiple Destination -> {{siteName}}</h4>          \r\n        </div>\r\n        <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['/admin-privileges/plants-rate-list']\" routerLinkActive=\"router-link-active\" > <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Back</a>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <form [formGroup]=\"searchForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-sm-12 col-xs-12 col-xl-6 col-lg-6\">\r\n            <ngb-pagination\r\n              [(page)]=\"pagination.currenPage\"\r\n              [pageSize]=\"pagination.pageSize\"\r\n              [collectionSize]=\"pagination.total\"\r\n              [maxSize]=\"pagination.maxSize\"\r\n              (pageChange)=\"getMultiDes()\"\r\n            ></ngb-pagination>        \r\n          </div>\r\n          <div class=\"col-md-4 col-sm-12 col-xs-12 col-xl-4 col-lg-4\">\r\n              <div class=\"form-group input-group\">\r\n                  <input style=\"width:100%\" class=\"form-control\" ng2-auto-complete\r\n                  formControlName=\"destination\" placeholder=\"Search with destination\"\r\n                  [source]=\"destSearch.bind(this)\" list-formatter=\"name\" />\r\n\r\n                  <!-- <input type=\"text\" formControlName=\"destination\" placeholder=\"Search with destination\" class=\"form-control\"> -->\r\n                  <div class=\"input-group-append\">\r\n                      <button class=\"btn btn-secondary\" (click)=\"search()\"><i class=\"fa fa-search\"></i></button>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-2 col-sm-12 col-xs-12 col-xl-2 col-lg-2\">\r\n            <button class=\"btn btn-primary pull-right\" (click)=\"addModal(add_plant_rate_multi_dest)\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add</button>\r\n            <button class=\"btn btn-warning pull-right\" (click)=\"refershPage()\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Refresh</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n      <form [formGroup]=\"multiDestForm\">\r\n        <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Destination</th>\r\n              <th style=\"width: 10%\">Spi</th>\r\n              <th style=\"width: 10%\">Km</th>\r\n              <th style=\"width: 10%\">Freight</th>\r\n              <th style=\"width: 10%\">Rate By</th>\r\n              <th >Start Date</th>\r\n              <th >End Date</th>\r\n              <th colspan=\"2\" align=\"center\">Actions</th>\r\n              <!-- <th>Edit</th>\r\n              <th>Print</th>\r\n              <th>Delete</th> -->\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngIf=\"loading\">\r\n              <td colspan=\"14\">\r\n                <div class=\"showbox\">\r\n                  <div class=\"loader\">\r\n                    <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                      <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                    </svg>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr *ngFor= \"let planRate of rows; let i = index\">\r\n\r\n              <td *ngIf=\"!planRate.updated\">{{planRate.destination ? planRate.destination : '--'}}</td>\r\n              <td *ngIf=\"planRate.updated\">\r\n                <div>\r\n                  <input style=\"width:100%\" class=\"form-control\" ng2-auto-complete (valueChanged)=\"onDestChange($event)\"\r\n                  formControlName=\"destination\" placeholder=\"Search with destination\"\r\n                  [source]=\"destSearch.bind(this)\" list-formatter=\"name\" />\r\n                  <!-- <input type=\"text\" formControlName=\"destination\" placeholder=\"Enter destination name\"> -->\r\n                </div>\r\n              </td>\r\n\r\n              <td *ngIf=\"!planRate.updated\">{{planRate.spi ? planRate.spi : '--'}}</td>\r\n              <td *ngIf=\"planRate.updated\">\r\n                <div>\r\n                  <input style=\"width: 60px\" type=\"text\" formControlName=\"spi\" placeholder=\"Enter spi\">\r\n                </div>\r\n              </td>\r\n\r\n              <td *ngIf=\"!planRate.updated\">{{planRate.km ? planRate.km : '--'}}</td>\r\n              <td *ngIf=\"planRate.updated\">\r\n                <div  >\r\n                  <input style=\"width: 60px\" type=\"number\" formControlName=\"km\" placeholder=\"Enter km\">\r\n                </div>\r\n              </td>\r\n\r\n              <td *ngIf=\"!planRate.updated\">{{planRate.freight ? planRate.freight : '--'}}</td>\r\n              <td *ngIf=\"planRate.updated\">\r\n                <div  >\r\n                  <input style=\"width: 60px\" type=\"number\" formControlName=\"freight\" placeholder=\"Enter freight\">\r\n                </div>\r\n              </td>\r\n\r\n              <td *ngIf=\"!planRate.updated\">{{planRate.rateby ? planRate.rateby : '--'}}</td>\r\n              <td *ngIf=\"planRate.updated\">\r\n                <div>\r\n                  <select style=\"width: 100px\" formControlName=\"rateby\" class=\"form-control\">\r\n                    <option value=\"SPI\">SPI</option>\r\n                    <option value=\"TON\">TON</option>\r\n                    <option value=\"ACCTYRE\">ACCTYRE</option>\r\n                  </select>\r\n                </div>\r\n              </td> \r\n              \r\n              <td *ngIf=\"!planRate.updated\">{{planRate.startdate ? planRate.startdate : '--'}}</td>\r\n              <td style=\"width: 20%\" *ngIf=\"planRate.updated\">\r\n                <div>\r\n                  <input style=\"width: 150px\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                    name=\"dp\" formControlName=\"startdate\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></button>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              \r\n              <td *ngIf=\"!planRate.updated\">{{planRate.enddate ? planRate.enddate : '--'}}</td>\r\n              <td *ngIf=\"planRate.updated\">\r\n                <div>\r\n                  <input style=\"width: 150px\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                    name=\"dp2\" formControlName=\"enddate\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></button>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n\r\n              <td>\r\n                <button (click)=\"edit(planRate)\" class=\"btn btn-primary\"><i class=\"fa fa-pencil\"></i> Edit</button>\r\n              </td>\r\n              <td><button *ngIf=\"planRate.updated\" (click)=\"updateValue(planRate, i)\" class=\"btn btn-danger\"><i class=\"fa fa-pencil-square-o\"></i> Update</button></td>\r\n            </tr>\r\n            <tr *ngIf=\"rows.length === 0\">\r\n                <td align=\"center\" colspan=\"10\">No data available.</td>\r\n              </tr>\r\n          </tbody>\r\n        </table>\r\n      </form>\r\n      <ngb-pagination\r\n      [(page)]=\"pagination.currenPage\"\r\n      [pageSize]=\"pagination.pageSize\"\r\n      [collectionSize]=\"pagination.total\"\r\n      [maxSize]=\"pagination.maxSize\"\r\n      (pageChange)=\"getMultiDes()\"\r\n      ></ngb-pagination>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- Add Plant rate -->\r\n<ng-template #add_plant_rate_multi_dest let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Plant Rate List</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"addPlantRateForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Companies</label>\r\n            <select formControlName=\"name\" class=\"form-control\">\r\n              <option value=\"\">Select Company</option>\r\n              <option *ngFor=\"let c of companies\" value=\"{{ c.accountname }}\">\r\n                {{ c.accountname }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Site</label>\r\n            <select formControlName=\"site\" class=\"form-control\">\r\n              <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                {{ s.branch_name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Rate By</label>\r\n            <select formControlName=\"rateby\" class=\"form-control\">\r\n              <option value=\"SPI\">SPI</option>\r\n              <option value=\"TON\">TON</option>\r\n              <option value=\"ACCTYRE\">ACCTYRE</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Status</label>\r\n            <select formControlName=\"status\" class=\"form-control\">\r\n              <option value=\"Active\">Active</option>\r\n              <option value=\"Non Active\">Non Active</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>Destination</label>\r\n            <input style=\"width:100%\" class=\"form-control\" ng2-auto-complete\r\n            formControlName=\"destination\" placeholder=\"Search with destination\"\r\n            [source]=\"destSearch.bind(this)\" list-formatter=\"name\" />\r\n            <!-- <input id=\"typeahead-http\" type=\"text\" class=\"form-control\" (change)=\"onDestChange()\" formControlName=\"destination\" [ngbTypeahead]=\"searchDestination\" placeholder=\"Search\" /> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>SPI</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"spi\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>KM</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"km\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label>RATE</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"freight\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"dateOfBirth\">Start Date</label>\r\n            <div class=\"input-group\">\r\n              <input id=\"dateOfBirth\" class=\"form-control\" formControlName=\"startdate\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"dp.toggle()\" type=\"button\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"dateOfBirth\">End Date</label>\r\n            <div class=\"input-group\">\r\n              <input id=\"dateOfBirth\" class=\"form-control\" formControlName=\"enddate\" placeholder=\"yyyy-mm-dd\" name=\"dp2\" ngbDatepicker #dp2=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary calendar\" (click)=\"dp2.toggle()\" type=\"button\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"savePlatRateList()\">Save</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/plants-rate-multiple-destination/plants-rate-multiple-destination.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/plants-rate-multiple-destination/plants-rate-multiple-destination.component.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-h-page {\n  overflow: scroll; }\n\n::ng-deep .my-class .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FkbWluLXByaXZpbGVnZXMvY29tcG9uZW50cy9wbGFudHMtcmF0ZS1tdWx0aXBsZS1kZXN0aW5hdGlvbi9GOlxcdGVzdGluZ19kZWxldGVfZm9sZGVyXFxUUlVDS19ERU1PX29sZEdhbmVzaFxcZnJvbnRlbmRcXHRkX2Zyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXGFkbWluLXByaXZpbGVnZXNcXGNvbXBvbmVudHNcXHBsYW50cy1yYXRlLW11bHRpcGxlLWRlc3RpbmF0aW9uXFxwbGFudHMtcmF0ZS1tdWx0aXBsZS1kZXN0aW5hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGNBQWM7RUFDZCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvYWRtaW4tcHJpdmlsZWdlcy9jb21wb25lbnRzL3BsYW50cy1yYXRlLW11bHRpcGxlLWRlc3RpbmF0aW9uL3BsYW50cy1yYXRlLW11bHRpcGxlLWRlc3RpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC1oLXBhZ2Uge1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5teS1jbGFzcyAubW9kYWwtZGlhbG9nIHsgXHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/plants-rate-multiple-destination/plants-rate-multiple-destination.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/plants-rate-multiple-destination/plants-rate-multiple-destination.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: PlantsRateMultipleDestinationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantsRateMultipleDestinationComponent", function() { return PlantsRateMultipleDestinationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/admin-privileges.service */ "./src/app/shared/services/admin-privileges.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/site.service */ "./src/app/shared/services/site.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PlantsRateMultipleDestinationComponent = /** @class */ (function () {
    function PlantsRateMultipleDestinationComponent(meta, adminService, activatedRoute, toastr, formBuilder, modalService, calendar, site) {
        var _this = this;
        this.meta = meta;
        this.adminService = adminService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.calendar = calendar;
        this.site = site;
        this.rows = [];
        this.siteName = '';
        this.editing = {};
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.filters = { page: 0 };
        this.sites = [];
        this.companies = [];
        this.destinations = [];
        this.loading = false;
        // onDestChange() {
        //   clearTimeout(this.typingTimer);
        //   this.typingTimer = setTimeout(() => {
        //     this.meta.getToDestinations(this.addPlantRateForm.value.destination).subscribe((res: any) => {
        //     const arr = [];
        //       res.forEach(r => {
        //         arr.push(r.name);
        //       });
        //       this.destinations = arr;
        //     });
        //   }, 1000);
        // }
        this.searchDestination = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (term) { return term === '' ? []
                : _this.destinations.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        // Search query for destination list
        this.destSearch = function (keyword) {
            if (keyword) {
                return _this.site.getDestinationList(keyword)
                    .map(function (res) {
                    return res;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"].of([]);
            }
        };
        this.activatedRoute.params.subscribe(function (res) {
            _this.siteName = res.name;
        });
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        this.multiDestForm = this.formBuilder.group({
            company: [''],
            destination: [''],
            startdate: [''],
            enddate: [''],
            freight: [''],
            km: [''],
            spi: [''],
            rateby: [''],
        });
        this.searchForm = this.formBuilder.group({
            destination: ['']
        });
        this.addPlantRateForm = this.formBuilder.group({
            name: [''],
            site: [''],
            status: ['Active'],
            rateby: ['SPI'],
            destination: [''],
            km: [''],
            spi: [''],
            freight: [''],
            startdate: [''],
            enddate: ['']
        });
        this.getSites();
        this.getCompanies();
    }
    PlantsRateMultipleDestinationComponent.prototype.ngOnInit = function () {
        this.getMultiDes();
    };
    // getSites() {
    //   this.meta.getSites().subscribe(res => {
    //       this.sites = res;
    //       if (this.usertype === 'ADMIN') {
    //         this.addPlantRateForm.controls['site'].setValue(this.sites[0].branch_name);
    //       } else {
    //         this.addPlantRateForm.controls['site'].setValue(this.site_name);
    //       }
    //   }, err => {
    //       // on error
    //   });
    // }
    PlantsRateMultipleDestinationComponent.prototype.getSites = function () {
        var _this = this;
        this.meta.getallSites().subscribe(function (res) {
            _this.sites = res;
            // if (this.usertype === 'ADMIN') {
            // this.addPlantRateForm.controls['site'].setValue(this.sites[0].branch_name);
            // } else {
            //   this.addPlantRateForm.controls['site'].setValue(this.site_name);
            // }
            _this.addPlantRateForm.controls['site'].setValue(_this.site_name);
            // this.addPlantRateForm.controls['site'].setValue(this.sites[0].branch_name);
        }, function (err) {
            // on error
        });
    };
    PlantsRateMultipleDestinationComponent.prototype.getCompanies = function () {
        var _this = this;
        this.meta.getPartyNames().subscribe(function (res) {
            _this.companies = res;
        }, function (err) {
            // on error
        });
    };
    PlantsRateMultipleDestinationComponent.prototype.getMultiDes = function () {
        var _this = this;
        this.filters.page = this.pagination.currenPage;
        var obj = {
            'site_name': this.siteName,
            'page': this.filters.page,
            'destination_name': '',
            'limit': 100
        };
        if (this.searchForm.value.destination) {
            obj.destination_name = this.searchForm.value.destination;
        }
        this.loading = true;
        this.adminService.getSitePlanRateDetails(obj).subscribe(function (res) {
            _this.loading = false;
            res.results.forEach(function (element) {
                element.updated = false;
                element.startdate = element.startdate ? moment(element.startdate).format('DD/MM/YYYY') : '--';
                element.enddate = element.enddate ? moment(element.enddate).format('DD/MM/YYYY') : '--';
            });
            _this.rows = res.results;
            _this.pagination.total = res.total;
        }, function (err) {
            console.log('>>>>>>>>>>>>err', err);
            _this.loading = false;
            _this.toastr.error('Something went wrong.');
        });
    };
    PlantsRateMultipleDestinationComponent.prototype.edit = function (data) {
        data.updated = !data.updated;
        // set value for date when edit button clicked
        var splitStartDt = data.startdate.split('/');
        var endSplitDt = data.enddate.split('/');
        var startDtObj = {
            day: parseInt(splitStartDt[0]),
            month: parseInt(splitStartDt[1]),
            year: parseInt(splitStartDt[2])
        };
        var endDtObj = {
            day: parseInt(endSplitDt[0]),
            month: parseInt(endSplitDt[1]),
            year: parseInt(endSplitDt[2])
        };
        this.startdt = startDtObj;
        this.enddt = endDtObj;
        // Set Form Value for edit form
        this.multiDestForm.controls['startdate'].setValue(this.startdt);
        this.multiDestForm.controls['enddate'].setValue(this.enddt);
        this.multiDestForm.controls['company'].setValue(data.company);
        this.multiDestForm.controls['destination'].setValue(data.destination);
        this.multiDestForm.controls['freight'].setValue(data.freight);
        this.multiDestForm.controls['km'].setValue(data.km);
        this.multiDestForm.controls['spi'].setValue(data.spi);
        this.multiDestForm.controls['rateby'].setValue(data.rateby);
    };
    PlantsRateMultipleDestinationComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        else {
            return null;
        }
    };
    PlantsRateMultipleDestinationComponent.prototype.onDestChange = function (event) {
        var e;
        if (event) {
            e = event.name;
        }
        this.dest = e ? e : this.multiDestForm.value.destination;
    };
    PlantsRateMultipleDestinationComponent.prototype.updateValue = function (data, index) {
        var stDate = this.multiDestForm.value.startdate;
        var edDate = this.multiDestForm.value.enddate;
        stDate = stDate.year.toString() + '-' + stDate.month.toString() + '-' + stDate.day.toString();
        edDate = edDate.year.toString() + '-' + edDate.month.toString() + '-' + edDate.day.toString();
        var startDate = stDate;
        var endDate = edDate;
        var obj = {
            id: data.id,
            multidest_id: data.multidest_id,
            name: this.multiDestForm.value.name,
            company: this.multiDestForm.value.company,
            destination: this.dest,
            startdate: startDate,
            enddate: endDate,
            freight: this.multiDestForm.value.freight,
            km: this.multiDestForm.value.km,
            spi: this.multiDestForm.value.spi,
            rateby: this.multiDestForm.value.rateby,
        };
        console.log('>>>>>Obj', obj);
        // this.adminService.updateSitePlanRate(obj).subscribe(res => {
        //   this.toastr.success('Data updated successfully.');
        //   this.rows[index].updated = false;
        //   // Set vale for start date and end date
        //   let stDate = this.multiDestForm.value.startdate;
        //   let endDate = this.multiDestForm.value.enddate;
        //   if (stDate) {
        //     stDate = stDate.day.toString() + '/' + stDate.month.toString() + '/' + stDate.year.toString();
        //     data.startdate = stDate;
        //   } else {
        //     this.multiDestForm.controls['startdate'].reset();
        //   }
        //   if (endDate) {
        //     endDate = endDate.day.toString() + '/' + endDate.month.toString() + '/' + endDate.year.toString();
        //     data.enddate = endDate;
        //   } else {
        //     this.multiDestForm.controls['enddate'].reset();
        //   }
        //   data.spi = this.multiDestForm.value.spi;
        //   data.km = this.multiDestForm.value.km;
        //   data.freight = this.multiDestForm.value.freight;
        //   data.rateby = this.multiDestForm.value.rateby;
        //   data.destination = this.multiDestForm.value.destination;
        // }, err => {
        //   console.log('>>>>>>>>>>>>err', err);
        //   this.toastr.error('Something went wrong.');
        // });
    };
    PlantsRateMultipleDestinationComponent.prototype.refershPage = function () {
        this.getMultiDes();
    };
    PlantsRateMultipleDestinationComponent.prototype.search = function () {
        this.getMultiDes();
    };
    // Add Modal
    PlantsRateMultipleDestinationComponent.prototype.addModal = function (add_plant_rate_multi_dest) {
        var modalRef = this.modalService.open(add_plant_rate_multi_dest, {
            backdrop: 'static',
            keyboard: false,
            windowClass: 'my-class'
        });
        // Modal result
        modalRef.result.then(function (res) {
        }, function (reason) {
            console.log('>>>>>>>>>>>>>', reason);
        });
    };
    PlantsRateMultipleDestinationComponent.prototype.savePlatRateList = function () {
        var _this = this;
        console.log(this.addPlantRateForm.value);
        var data = JSON.parse(JSON.stringify(this.addPlantRateForm.value));
        data.startdate = this.addPlantRateForm.value.startdate.year + '-' +
            this.addPlantRateForm.value.startdate.month + '-' + this.addPlantRateForm.value.startdate.day;
        data.enddate = this.addPlantRateForm.value.enddate.year + '-' +
            this.addPlantRateForm.value.enddate.month + '-' + this.addPlantRateForm.value.enddate.day;
        data.multidest = {
            destination: data.destination.name,
            km: data.km,
            spi: data.spi,
            freight: data.freight,
            startdate: data.startdate,
            enddate: data.enddate
        };
        delete data.destination.name;
        delete data.km;
        delete data.spi;
        delete data.freight;
        delete data.startdate;
        delete data.enddate;
        // console.log(JSON.stringify(data));
        this.adminService.addPlantRateList(data).subscribe(function (res) {
            _this.toastr.success('Added!');
            _this.addPlantRateForm.reset();
            if (_this.usertype === 'ADMIN') {
                _this.addPlantRateForm.controls['site'].setValue(_this.sites[0].branch_name);
            }
            else {
                _this.addPlantRateForm.controls['site'].setValue(_this.site_name);
            }
            _this.addPlantRateForm.controls['status'].setValue('Active');
            _this.addPlantRateForm.controls['rateby'].setValue('SPI');
            _this.addPlantRateForm.controls['name'].setValue('');
            _this.modalService.dismissAll();
        }, function (err) {
            _this.toastr.error('Something went wrong when adding!');
        });
    };
    PlantsRateMultipleDestinationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plants-rate-multiple-destination',
            template: __webpack_require__(/*! ./plants-rate-multiple-destination.component.html */ "./src/app/layout/admin-privileges/components/plants-rate-multiple-destination/plants-rate-multiple-destination.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./plants-rate-multiple-destination.component.scss */ "./src/app/layout/admin-privileges/components/plants-rate-multiple-destination/plants-rate-multiple-destination.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_7__["MetaService"],
            src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_2__["AdminPrivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCalendar"],
            src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_11__["SiteService"]])
    ], PlantsRateMultipleDestinationComponent);
    return PlantsRateMultipleDestinationComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/site-multiple-destination/site-multiple-destination.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/site-multiple-destination/site-multiple-destination.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12 scroll-h-page\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-11 col-sm-11 col-md-11 col-lg-11\">\r\n          <h4><i class=\"fa fa-truck\"></i> Site Multiple Destination -> {{siteName}}</h4>\r\n        </div>\r\n        <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1\">\r\n          <a class=\"btn btn-primary\" [routerLink]=\"['/admin-privileges/site-truck-expenses']\" routerLinkActive=\"router-link-active\">\r\n            <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Back</a\r\n          >\r\n        </div>\r\n      </div>\r\n      <hr />\r\n      <form [formGroup]=\"searchForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 col-sm-12 col-xs-12 col-xl-6 col-lg-6\">\r\n              <ngb-pagination\r\n                [(page)]=\"pagination.currenPage\"\r\n                [pageSize]=\"pagination.pageSize\"\r\n                [collectionSize]=\"pagination.total\"\r\n                [maxSize]=\"pagination.maxSize\"\r\n                (pageChange)=\"getMultiDes()\"\r\n              ></ngb-pagination>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-12 col-xs-12 col-xl-4 col-lg-4\">\r\n                <div class=\"form-group input-group\">\r\n                  <input style=\"width:100%\" class=\"form-control\" ng2-auto-complete\r\n                  formControlName=\"destination\" placeholder=\"Search with destination\"\r\n                  [source]=\"destSearch.bind(this)\" list-formatter=\"name\" />\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-secondary\" (click)=\"search()\"><i class=\"fa fa-search\"></i></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2 col-sm-12 col-xs-12 col-xl-2 col-lg-2\">\r\n              <button class=\"btn btn-primary pull-right\" (click)=\"addModal(content)\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add</button>\r\n              <button class=\"btn btn-warning pull-right\" (click)=\"refershPage()\"><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Refresh</button>\r\n            </div>\r\n        </div>\r\n      </form>\r\n      <form [formGroup]=\"multiDestForm\">\r\n        <table class=\"table tableFixHead\">\r\n          <thead>\r\n            <tr>\r\n              <th>Destination</th>\r\n              <th>Spi</th>\r\n              <th>Km</th>\r\n              <th>loading</th>\r\n              <th>Bhatta</th>\r\n              <th>Misc</th>\r\n              <th>Toll</th>\r\n              <th>Total</th>\r\n              <th style=\"width: 10%;\">Status</th>\r\n              <th align=\"center\">Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngIf=\"loading\">\r\n              <td colspan=\"14\">\r\n                <div class=\"showbox\">\r\n                  <div class=\"loader\">\r\n                    <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                      <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                    </svg>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr *ngFor=\"let dest of rows; let i = index\">\r\n\r\n              <td *ngIf=\"!dest.updated\">{{ dest.destination ? dest.destination : '--' }}</td>\r\n              <td *ngIf=\"dest.updated\">\r\n                <div>\r\n                  <input type=\"text\" formControlName=\"destination\" placeholder=\"Enter destination name\" />\r\n                </div>\r\n              </td>\r\n\r\n              <td *ngIf=\"!dest.updated\">{{ dest.spi ? dest.spi : 0 }}</td>\r\n              <td *ngIf=\"dest.updated\">\r\n                <div>\r\n                  <input type=\"text\" formControlName=\"spi\" placeholder=\"Enter Spi\" />\r\n                </div>\r\n              </td>\r\n              \r\n              <td *ngIf=\"!dest.updated\">{{ dest.km ? dest.km : 0 }}</td>\r\n              <td *ngIf=\"dest.updated\">\r\n                <div>\r\n                  <input type=\"number\" formControlName=\"km\" placeholder=\"Enter km\" />\r\n                </div>\r\n              </td>\r\n              \r\n              <td *ngIf=\"!dest.updated\">{{ dest.loading ? dest.loading : 0 }}</td>\r\n              <td *ngIf=\"dest.updated\">\r\n                <div>\r\n                  <input type=\"number\" formControlName=\"loading\" placeholder=\"Enter loading\" />\r\n                </div>\r\n              </td>\r\n              \r\n              <td *ngIf=\"!dest.updated\">{{ dest.newbhatta ? dest.newbhatta : 0 }}</td>\r\n              <td *ngIf=\"dest.updated\">\r\n                <div>\r\n                  <input type=\"number\" formControlName=\"newbhatta\" placeholder=\"Enter bhatta\" />\r\n                </div>\r\n              </td>\r\n\r\n              <td *ngIf=\"!dest.updated\">{{ dest.newmisc ? dest.newmisc : 0 }}</td>\r\n              <td *ngIf=\"dest.updated\">\r\n                <div>\r\n                  <input type=\"number\" formControlName=\"newmisc\" placeholder=\"Enter misc\" />\r\n                </div>\r\n              </td>\r\n\r\n              <td *ngIf=\"!dest.updated\">{{ dest.newtoll ? dest.newtoll : 0 }}</td>\r\n              <td *ngIf=\"dest.updated\">\r\n                <div>\r\n                  <input type=\"number\" formControlName=\"newtoll\" placeholder=\"Enter Toll\" />\r\n                </div>\r\n              </td>\r\n\r\n              <td>{{ dest.newtotal ? dest.newtotal : 0 }}</td>\r\n\r\n              <td *ngIf=\"!dest.updated\">{{ dest.status ? dest.status : '--' }}</td>\r\n              <td *ngIf=\"dest.updated\">\r\n                <div>\r\n                  <select style=\"width: 100px;\" formControlName=\"status\" class=\"form-control\">\r\n                    <option value=\"Active\">Active</option>\r\n                    <option value=\"Non Active\">Non Active</option>\r\n                  </select>\r\n                </div>\r\n              </td>\r\n\r\n              <td>\r\n                <button (click)=\"edit(dest)\" class=\"btn btn-primary\"><i class=\"fa fa-pencil\"></i> Edit</button>\r\n              </td>\r\n              <td>\r\n                <button *ngIf=\"dest.updated\" (click)=\"updateValue(dest, i)\" class=\"btn btn-danger\">\r\n                  <i class=\"fa fa-pencil-square-o\"></i> Update\r\n                </button>\r\n              </td>\r\n            </tr>\r\n            <tr *ngIf=\"rows.length === 0\">\r\n              <td align=\"center\" colspan=\"10\">No data available.</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </form>\r\n      <ngb-pagination\r\n        [(page)]=\"pagination.currenPage\"\r\n        [pageSize]=\"pagination.pageSize\"\r\n        [collectionSize]=\"pagination.total\"\r\n        [maxSize]=\"pagination.maxSize\"\r\n        (pageChange)=\"getMultiDes()\"\r\n      ></ngb-pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- Add Plant rate -->\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Site Expense List</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n      <form [formGroup]=\"addExpenseForm\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Site</label>\r\n                <select formControlName=\"site\" class=\"form-control\">\r\n                  <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                    {{ s.branch_name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Status</label>\r\n                <select formControlName=\"status\" class=\"form-control\">\r\n                  <option value=\"Active\">Active</option>\r\n                  <option value=\"Non Active\">Non Active</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Destination</label>\r\n                <input id=\"typeahead-http\" type=\"text\" class=\"form-control\" (change)=\"onDestChange()\" formControlName=\"destination\" [ngbTypeahead]=\"searchDestination\" placeholder=\"Search\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>SPI</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"spi\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>KM</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"km\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Toll Tax</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"newtoll\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Bhatta</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"newbhatta\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Loading</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"loading\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Misc</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"newmisc\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"saveSiteTruckExpense()\">Save</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/site-multiple-destination/site-multiple-destination.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/site-multiple-destination/site-multiple-destination.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-h-page {\n  overflow: scroll; }\n\n::ng-deep .my-class .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FkbWluLXByaXZpbGVnZXMvY29tcG9uZW50cy9zaXRlLW11bHRpcGxlLWRlc3RpbmF0aW9uL0Y6XFx0ZXN0aW5nX2RlbGV0ZV9mb2xkZXJcXFRSVUNLX0RFTU9fb2xkR2FuZXNoXFxmcm9udGVuZFxcdGRfZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcYWRtaW4tcHJpdmlsZWdlc1xcY29tcG9uZW50c1xcc2l0ZS1tdWx0aXBsZS1kZXN0aW5hdGlvblxcc2l0ZS1tdWx0aXBsZS1kZXN0aW5hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLGNBQWM7RUFDZCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvYWRtaW4tcHJpdmlsZWdlcy9jb21wb25lbnRzL3NpdGUtbXVsdGlwbGUtZGVzdGluYXRpb24vc2l0ZS1tdWx0aXBsZS1kZXN0aW5hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtaC1wYWdlIHtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLm15LWNsYXNzIC5tb2RhbC1kaWFsb2cgeyBcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/site-multiple-destination/site-multiple-destination.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/site-multiple-destination/site-multiple-destination.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: SiteMultipleDestinationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteMultipleDestinationComponent", function() { return SiteMultipleDestinationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/admin-privileges.service */ "./src/app/shared/services/admin-privileges.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/site.service */ "./src/app/shared/services/site.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SiteMultipleDestinationComponent = /** @class */ (function () {
    function SiteMultipleDestinationComponent(adminService, activatedRoute, toastr, formBuilder, modalService, meta, site) {
        var _this = this;
        this.adminService = adminService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.meta = meta;
        this.site = site;
        this.rows = [];
        this.siteName = '';
        this.editing = {};
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.filters = { page: 0 };
        this.sites = [];
        this.destinations = [];
        this.loading = false;
        this.searchDestination = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (term) { return term === '' ? []
                : _this.destinations.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        // Search query for destination list
        this.destSearch = function (keyword) {
            if (keyword) {
                return _this.site.getDestinationList(keyword)
                    .map(function (res) {
                    return res;
                });
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_10__["Observable"].of([]);
            }
        };
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        this.activatedRoute.params.subscribe(function (res) {
            _this.siteName = res.name;
        });
        this.site_name = this.meta.getSiteFromStorage().site;
        this.multiDestForm = this.formBuilder.group({
            loading: [''],
            destination: [''],
            km: [''],
            newbhatta: [''],
            newmisc: [''],
            newtoll: [''],
            spi: [''],
            newtotal: [''],
            status: ['Active']
        });
        this.searchForm = this.formBuilder.group({
            destination: ['']
        });
        this.addExpenseForm = this.formBuilder.group({
            site: [''],
            status: ['Active'],
            destination: [''],
            spi: [''],
            km: [''],
            newtoll: [''],
            newbhatta: [''],
            loading: [''],
            newmisc: ['']
        });
        this.getSites();
    }
    SiteMultipleDestinationComponent.prototype.getSites = function () {
        var _this = this;
        this.meta.getSites().subscribe(function (res) {
            _this.sites = res;
            if (_this.usertype === 'ADMIN') {
                _this.addExpenseForm.controls['site'].setValue(_this.sites[0].branch_name);
            }
            else {
                _this.addExpenseForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            // on error
        });
    };
    SiteMultipleDestinationComponent.prototype.ngOnInit = function () {
        this.getMultiDes();
    };
    SiteMultipleDestinationComponent.prototype.getMultiDes = function () {
        var _this = this;
        this.filters.page = this.pagination.currenPage;
        var obj = {
            'site_name': this.siteName,
            'page': this.filters.page,
            'limit': 100
        };
        this.loading = true;
        this.adminService.getMultiDest(obj).subscribe(function (res) {
            _this.loading = false;
            res.results.forEach(function (element) {
                element.updated = false;
            });
            _this.rows = res.results;
            _this.pagination.total = res.total;
            _this.searchForm.controls['destination'].setValue('');
        }, function (err) {
            _this.loading = false;
            console.log('>>>>>>>>>>>>err', err);
            _this.toastr.error('Something went wrong.');
        });
    };
    SiteMultipleDestinationComponent.prototype.edit = function (data) {
        data.updated = !data.updated;
        // Set Form Value for edit form
        this.multiDestForm.controls['loading'].setValue(data.loading);
        this.multiDestForm.controls['destination'].setValue(data.destination);
        this.multiDestForm.controls['km'].setValue(data.km);
        this.multiDestForm.controls['newbhatta'].setValue(data.newbhatta);
        this.multiDestForm.controls['newmisc'].setValue(data.newmisc);
        this.multiDestForm.controls['newtoll'].setValue(data.newtoll);
        this.multiDestForm.controls['spi'].setValue(data.spi);
        this.multiDestForm.controls['newtotal'].setValue(data.newtotal);
        this.multiDestForm.controls['status'].setValue(data.status);
    };
    SiteMultipleDestinationComponent.prototype.updateValue = function (data, index) {
        var _this = this;
        var obj = {
            id: data.id,
            multidest_id: data.multidest_id,
            loading: this.multiDestForm.value.loading,
            destination: this.multiDestForm.value.destination,
            km: this.multiDestForm.value.km,
            newbhatta: this.multiDestForm.value.newbhatta,
            newmisc: this.multiDestForm.value.newmisc,
            newtoll: this.multiDestForm.value.newtoll,
            spi: this.multiDestForm.value.spi,
            newtotal: this.multiDestForm.value.loading + this.multiDestForm.value.newbhatta + this.multiDestForm.value.newmisc + this.multiDestForm.value.newtoll,
            status: this.multiDestForm.value.status
        };
        this.adminService.updateSiteTruckExp(obj).subscribe(function (res) {
            _this.toastr.success('Data updated successfully.');
            data.updated = false;
            // Set the value after update
            data.loading = _this.multiDestForm.value.loading,
                data.destination = _this.multiDestForm.value.destination,
                data.km = _this.multiDestForm.value.km,
                data.newbhatta = _this.multiDestForm.value.newbhatta,
                data.newmisc = _this.multiDestForm.value.newmisc,
                data.newtoll = _this.multiDestForm.value.newtoll,
                data.spi = _this.multiDestForm.value.spi,
                data.newtotal = _this.multiDestForm.value.loading + _this.multiDestForm.value.newbhatta + _this.multiDestForm.value.newmisc + _this.multiDestForm.value.newtoll;
            data.status = _this.multiDestForm.value.status;
        }, function (err) {
            console.log('>>>>>>>>>>>>err', err);
            _this.toastr.error('Something went wrong.');
        });
    };
    SiteMultipleDestinationComponent.prototype.refershPage = function () {
        this.getMultiDes();
    };
    SiteMultipleDestinationComponent.prototype.search = function () {
        var _this = this;
        var obj = {
            'destination_name': this.searchForm.value.destination
        };
        this.adminService.getMultiDest(obj).subscribe(function (res) {
            res.results.forEach(function (element) {
                element.updated = false;
            });
            _this.rows = res.results;
            _this.pagination.total = res.total;
            // this.searchForm.controls['destination'].setValue('');
        }, function (err) {
            console.log('>>>>>>>>>>>>err', err);
            _this.toastr.error('Something went wrong.');
        });
    };
    // Add Modal
    SiteMultipleDestinationComponent.prototype.addModal = function (content) {
        var modalRef = this.modalService.open(content, {
            backdrop: 'static',
            keyboard: false,
            windowClass: 'my-class'
        });
        // Modal result
        modalRef.result.then(function (res) {
        }, function (reason) {
            console.log('>>>>>>>>>>>>>', reason);
        });
    };
    SiteMultipleDestinationComponent.prototype.onDestChange = function () {
        var _this = this;
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(function () {
            _this.meta.getToDestinations(_this.addExpenseForm.value.destination).subscribe(function (res) {
                var arr = [];
                res.forEach(function (r) {
                    arr.push(r.name);
                });
                _this.destinations = arr;
            });
        }, 1000);
    };
    SiteMultipleDestinationComponent.prototype.saveSiteTruckExpense = function () {
        var _this = this;
        var data = JSON.parse(JSON.stringify(this.addExpenseForm.value));
        data.loading = parseInt(data.loading, 10);
        data.km = parseInt(data.km, 10);
        data.newbhatta = parseInt(data.newbhatta, 10);
        data.newmisc = parseInt(data.newmisc, 10);
        data.newtoll = parseInt(data.newtoll, 10);
        data.spi = parseInt(data.spi, 10);
        data.newtotal = data.loading + data.newmisc + data.newbhatta + data.newtoll;
        data.multidest = {
            destination: data.destination,
            spi: data.spi,
            km: data.km,
            newtoll: data.newtoll,
            newbhatta: data.newbhatta,
            loading: data.loading,
            newmisc: data.newmisc,
            newtotal: data.newtotal
        };
        delete data.destination;
        delete data.spi;
        delete data.km;
        delete data.newtoll;
        delete data.newbhatta;
        delete data.loading;
        delete data.newmisc;
        delete data.newtotal;
        // console.log(JSON.stringify(data));
        this.adminService.addSiteTruckExpenseList(data).subscribe(function (res) {
            _this.toastr.success('Added!');
            _this.addExpenseForm.reset();
            if (_this.usertype === 'ADMIN') {
                _this.addExpenseForm.controls['site'].setValue(_this.sites[0].branch_name);
            }
            else {
                _this.addExpenseForm.controls['site'].setValue(_this.site_name);
            }
            _this.addExpenseForm.controls['status'].setValue('Active');
            _this.modalService.dismissAll();
        }, function (err) {
            _this.toastr.error('Something went wrong when adding!');
        });
    };
    SiteMultipleDestinationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-multiple-destination',
            template: __webpack_require__(/*! ./site-multiple-destination.component.html */ "./src/app/layout/admin-privileges/components/site-multiple-destination/site-multiple-destination.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./site-multiple-destination.component.scss */ "./src/app/layout/admin-privileges/components/site-multiple-destination/site-multiple-destination.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_1__["AdminPrivilegesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_7__["MetaService"],
            src_app_shared_services_site_service__WEBPACK_IMPORTED_MODULE_11__["SiteService"]])
    ], SiteMultipleDestinationComponent);
    return SiteMultipleDestinationComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/site-truck-expenses/site-truck-expenses.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/site-truck-expenses/site-truck-expenses.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <h4><i class=\"fa fa-truck\"></i> Site Truck Expenses</h4>\r\n          <hr />\r\n        </div>\r\n      </div>\r\n\r\n      <ngb-pagination\r\n      [(page)]=\"pagination.currenPage\"\r\n      [pageSize]=\"pagination.pageSize\"\r\n      [collectionSize]=\"pagination.total\"\r\n      [maxSize]=\"pagination.maxSize\"\r\n      (pageChange)=\"getExpenseList()\"\r\n      ></ngb-pagination>\r\n      <p>\r\n        <strong>Total:</strong> {{ pagination.total }}, <strong>Records per page:</strong> {{ pagination.pageSize }},\r\n        <strong>Showing:</strong> {{ (pagination.currenPage - 1) * pagination.pageSize }} -\r\n        {{ (pagination.currenPage - 1) * pagination.pageSize + 50 }}\r\n      </p>\r\n      <table class=\"table table-hover table-striped table-bordered table-condensed\">\r\n        <thead>\r\n          <tr>\r\n            <th>Site</th>\r\n            <th>Status</th>\r\n            <!-- <th>Actions</th> -->\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"loading\">\r\n            <td colspan=\"14\">\r\n              <div class=\"showbox\">\r\n                <div class=\"loader\">\r\n                  <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n                    <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n                  </svg>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let expense of expenses; let i = index\">\r\n            <td>\r\n              <a (click)=\"multiDest(expense)\" [routerLink]=\"['/admin-privileges/site-multiple-destination', expense.site]\">{{ expense.site ? expense.site : '--' }}</a>\r\n            </td>\r\n            <td>{{ expense.status ? expense.status : '--' }}</td>\r\n            <!-- <td>\r\n              <button class=\"btn btn-primary\" (click)=\"edit(expense.site)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit</button\r\n              >&nbsp;\r\n              <button class=\"btn btn-danger\" (click)=\"delete()\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</button>\r\n            </td> -->\r\n          </tr>\r\n          <tr *ngIf=\"expenses.length === 0\">\r\n            <td align=\"center\" colspan=\"8\">No data available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <!-- <ngb-pagination\r\n      [(page)]=\"pagination.currenPage\"\r\n      [pageSize]=\"pagination.pageSize\"\r\n      [collectionSize]=\"pagination.total\"\r\n      [maxSize]=\"pagination.maxSize\"\r\n      (pageChange)=\"getExpenseList()\"\r\n      ></ngb-pagination> -->\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/site-truck-expenses/site-truck-expenses.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/site-truck-expenses/site-truck-expenses.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvc2l0ZS10cnVjay1leHBlbnNlcy9zaXRlLXRydWNrLWV4cGVuc2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/site-truck-expenses/site-truck-expenses.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/site-truck-expenses/site-truck-expenses.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: SiteTruckExpensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteTruckExpensesComponent", function() { return SiteTruckExpensesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/admin-privileges.service */ "./src/app/shared/services/admin-privileges.service.ts");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SiteTruckExpensesComponent = /** @class */ (function () {
    function SiteTruckExpensesComponent(adminService) {
        this.adminService = adminService;
        this.expenses = [];
        this.multiDests = [];
        this.activeTab = 'list';
        this.pagination = { total: 0, currenPage: 1, pageSize: 50, maxSize: 10 };
        this.filters = { page: 0 };
        this.loading = false;
    }
    SiteTruckExpensesComponent.prototype.ngOnInit = function () {
        this.getExpenseList();
    };
    SiteTruckExpensesComponent.prototype.getExpenseList = function () {
        var _this = this;
        this.filters.page = this.pagination.currenPage;
        this.loading = true;
        this.adminService.getSiteTruckExp(this.filters).subscribe(function (res) {
            _this.loading = false;
            _this.expenses = res.results;
            _this.pagination.total = res.total;
        }, function (err) {
            _this.loading = false;
            console.log('>>>>>>>>>>>>>err', err);
        });
    };
    SiteTruckExpensesComponent.prototype.multiDest = function (obj) {
        localStorage.setItem('siteName', JSON.stringify(obj.site));
    };
    SiteTruckExpensesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-truck-expenses',
            template: __webpack_require__(/*! ./site-truck-expenses.component.html */ "./src/app/layout/admin-privileges/components/site-truck-expenses/site-truck-expenses.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./site-truck-expenses.component.scss */ "./src/app/layout/admin-privileges/components/site-truck-expenses/site-truck-expenses.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_1__["AdminPrivilegesService"]])
    ], SiteTruckExpensesComponent);
    return SiteTruckExpensesComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/sitedestinationkms-reslover.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/sitedestinationkms-reslover.ts ***!
  \***********************************************************************************/
/*! exports provided: SitedestinationkmsReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitedestinationkmsReslover", function() { return SitedestinationkmsReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SitedestinationkmsReslover = /** @class */ (function () {
    function SitedestinationkmsReslover(aps) {
        this.aps = aps;
    }
    SitedestinationkmsReslover.prototype.resolve = function (route) {
        return this.aps.getSdk(route.paramMap.get('id'));
    };
    SitedestinationkmsReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__["AdminprivilegesService"]])
    ], SitedestinationkmsReslover);
    return SitedestinationkmsReslover;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/sitepetrolpump-reslover.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/sitepetrolpump-reslover.ts ***!
  \*******************************************************************************/
/*! exports provided: SitepetrolpumpReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitepetrolpumpReslover", function() { return SitepetrolpumpReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SitepetrolpumpReslover = /** @class */ (function () {
    function SitepetrolpumpReslover(aps) {
        this.aps = aps;
    }
    SitepetrolpumpReslover.prototype.resolve = function (route) {
        return this.aps.getSpp(route.paramMap.get('id'));
    };
    SitepetrolpumpReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__["AdminprivilegesService"]])
    ], SitepetrolpumpReslover);
    return SitepetrolpumpReslover;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/siteprofile-reslover.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/siteprofile-reslover.ts ***!
  \****************************************************************************/
/*! exports provided: SiteprofileReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteprofileReslover", function() { return SiteprofileReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiteprofileReslover = /** @class */ (function () {
    function SiteprofileReslover(aps) {
        this.aps = aps;
    }
    SiteprofileReslover.prototype.resolve = function (route) {
        return this.aps.getSpro(route.paramMap.get('id'));
    };
    SiteprofileReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__["AdminprivilegesService"]])
    ], SiteprofileReslover);
    return SiteprofileReslover;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/sync-plan-list/sync-plan-list.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/sync-plan-list/sync-plan-list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary btn-lg\" (click)=\"updateDatabase()\">Update Database</button>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/sync-plan-list/sync-plan-list.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/sync-plan-list/sync-plan-list.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvc3luYy1wbGFuLWxpc3Qvc3luYy1wbGFuLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/sync-plan-list/sync-plan-list.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/sync-plan-list/sync-plan-list.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SyncPlanListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncPlanListComponent", function() { return SyncPlanListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/admin-privileges.service */ "./src/app/shared/services/admin-privileges.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SyncPlanListComponent = /** @class */ (function () {
    function SyncPlanListComponent(admin, toastr) {
        this.admin = admin;
        this.toastr = toastr;
    }
    SyncPlanListComponent.prototype.ngOnInit = function () {
    };
    SyncPlanListComponent.prototype.updateDatabase = function () {
        var _this = this;
        this.admin.planRateList().subscribe(function (res) {
            _this.toastr.success('Database Updated.');
            console.log('>>>>>res', res);
        }, function (err) {
            _this.toastr.error('Something went wrong.');
            console.log('>>>>>Err', err);
        });
    };
    SyncPlanListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sync-plan-list',
            template: __webpack_require__(/*! ./sync-plan-list.component.html */ "./src/app/layout/admin-privileges/components/sync-plan-list/sync-plan-list.component.html"),
            styles: [__webpack_require__(/*! ./sync-plan-list.component.scss */ "./src/app/layout/admin-privileges/components/sync-plan-list/sync-plan-list.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_1__["AdminPrivilegesService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], SyncPlanListComponent);
    return SyncPlanListComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/truckaverage-reslover.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/truckaverage-reslover.ts ***!
  \*****************************************************************************/
/*! exports provided: TruckaverageReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckaverageReslover", function() { return TruckaverageReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TruckaverageReslover = /** @class */ (function () {
    function TruckaverageReslover(aps) {
        this.aps = aps;
    }
    TruckaverageReslover.prototype.resolve = function (route) {
        return this.aps.getTa(route.paramMap.get('id'));
    };
    TruckaverageReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__["AdminprivilegesService"]])
    ], TruckaverageReslover);
    return TruckaverageReslover;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/tyreratelist-reslover.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/tyreratelist-reslover.ts ***!
  \*****************************************************************************/
/*! exports provided: TyreratelistReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TyreratelistReslover", function() { return TyreratelistReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TyreratelistReslover = /** @class */ (function () {
    function TyreratelistReslover(aps) {
        this.aps = aps;
    }
    TyreratelistReslover.prototype.resolve = function (route) {
        return this.aps.getTrl(route.paramMap.get('id'));
    };
    TyreratelistReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__["AdminprivilegesService"]])
    ], TyreratelistReslover);
    return TyreratelistReslover;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/tyretargetmaster-reslover.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/tyretargetmaster-reslover.ts ***!
  \*********************************************************************************/
/*! exports provided: TyretargetmasterReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TyretargetmasterReslover", function() { return TyretargetmasterReslover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminprivileges.service */ "./src/app/layout/admin-privileges/components/adminprivileges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TyretargetmasterReslover = /** @class */ (function () {
    function TyretargetmasterReslover(aps) {
        this.aps = aps;
    }
    TyretargetmasterReslover.prototype.resolve = function (route) {
        return this.aps.getTtm(route.paramMap.get('id'));
    };
    TyretargetmasterReslover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_adminprivileges_service__WEBPACK_IMPORTED_MODULE_1__["AdminprivilegesService"]])
    ], TyretargetmasterReslover);
    return TyretargetmasterReslover;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/update-plant-rate-list/update-plant-rate-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/update-plant-rate-list/update-plant-rate-list.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col col-md-12 col-sm-12 col-xl-12 col-lg-12\">\r\n    <form [formGroup]=\"filterForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <h4><i class=\"fa fa-truck\"></i> Update Plant Rate List</h4>\r\n          <hr />\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Companies</label>\r\n            <select formControlName=\"name\" class=\"form-control\">\r\n              <option value=\"\">Select Company</option>\r\n              <option *ngFor=\"let c of companies\" value=\"{{ c.accountname }}\">\r\n                {{ c.accountname }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Site</label>\r\n            <select formControlName=\"site\" class=\"form-control\">\r\n              <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                {{ s.branch_name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Rate By</label>\r\n            <select formControlName=\"rateby\" class=\"form-control\">\r\n              <option value=\"SPI\">SPI</option>\r\n              <option value=\"TON\">TON</option>\r\n              <option value=\"ACCTYRE\">ACCTYRE</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label>Status</label>\r\n            <select formControlName=\"status\" class=\"form-control\">\r\n              <option value=\"Active\">Active</option>\r\n              <option value=\"Non Active\">Non Active</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\t\r\n          <label>From Date</label>\t\r\n          <div class=\"form-inline\">\t\r\n            <div class=\"form-group\">\t\r\n              <input\t\r\n                class=\"form-control\"\t\r\n                placeholder=\"dd/mm/yyyy\"\t\r\n                name=\"dp\"\t\r\n                formControlName=\"date_from\"\t\r\n                ngbDatepicker\t\r\n                #d1=\"ngbDatepicker\"\t\r\n              />\t\r\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\t\r\n                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\t\r\n              </button>\t\r\n            </div>\t\r\n          </div>\t\r\n        </div>\t\r\n\r\n        <div class=\"col-md-3\">\t\r\n          <label>To Date</label>\t\r\n          <div class=\"form-inline\">\t\r\n            <div class=\"form-group\">\t\r\n              <input\t\r\n                class=\"form-control\"\t\r\n                placeholder=\"dd/mm/yyyy\"\t\r\n                name=\"dp\"\t\r\n                formControlName=\"date_to\"\t\r\n                ngbDatepicker\t\r\n                #d2=\"ngbDatepicker\"\t\r\n              />\t\r\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\t\r\n                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\t\r\n              </button>\t\r\n            </div>\t\r\n          </div>\t\r\n        </div>\t\r\n        <br>\t\r\n\r\n        <div class=\"col-md-3\"></div>\t\r\n        <div class=\"col-md-3\"></div>\t\r\n\r\n        <div class=\"col-md-2 pull-right\">\r\n          <label>Choose file to import</label>\r\n          <br />\r\n          <input type=\"file\" accept=\".xlsx, .xls, .csv\" class=\"inputfile\" name=\"file1\" id=\"file1\" multiple (change)=\"onSelectCSV($event)\" />\r\n          <label class=\"btn btn-success\" for=\"file1\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i> Select file</label>\r\n          {{ file ? file.name : '' }}\r\n        </div>\r\n        <div class=\"col-md-1 pull-right\">\r\n          <label>Import</label>\r\n          <button [disabled]=\"shown\" (click)=\"startImport()\" class=\"btn btn-primary\"><i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Import</button>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\t\r\n        </div>\t\r\n\r\n        <div class=\"col-md-1 pull-right\">\t\r\n          <label> </label>\t\r\n          <button (click)=\"getSearchPlantRateList()\" class=\"btn btn-warning\"><i class=\"fa fa-get-pocket\" aria-hidden=\"true\"></i> Fetch </button>\t\r\n        </div>\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<!-- Loader -->\r\n<div class=\"showbox\" [hidden]=\"!shown\">\r\n  <div class=\"loader\">\r\n    <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n      <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n    </svg>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- ---------------- List -------------------- -->\t\r\n\r\n<div class=\"card\">\t\r\n  <div class=\"animated fadeIn\">\t\r\n    <div class=\"row\">\t\r\n      <div class=\"col-lg\">\t\r\n        <div class=\"card\">\t\r\n          <div class=\"card-body\">\t\r\n              <!-- <p></p>           -->\t\r\n            <h4>Plant Rates List</h4>\t\r\n            <table class=\"table tableFixHead mytable\">\t\r\n              <thead>\t\r\n                <tr>\t\r\n                  <th>Sr No</th>\t\r\n                  <th>Name</th>\t\r\n                  <th>Site</th>\t\r\n                  <th>Status</th>\t\r\n                  <th>rateby</th>\t\r\n                  <th>date_from</th>\t\r\n                  <th>date_to</th>\t\r\n                </tr>\t\r\n              </thead>\t\r\n              <tbody>\t\r\n                <tr *ngFor=\"let data of plantRateList; let i = index\">\t\r\n                  <td>{{ data.srno ? data.srno : '--' }}</td>\t\r\n                  <td>{{ data.name ? data.name : '--' }}</td>\t\r\n                  <td>{{ data.site ? data.site : '--' }}</td>\t\r\n                  <td>{{ data.status ? data.status : '--' }}</td>\t\r\n                  <td>{{ data.rateby ? data.rateby : '--' }}</td>\t\r\n                  <td>{{ data.date_from ? data.date_from : '--' }}</td>\t\r\n                  <td>{{ data.date_to ? data.date_to : '--' }}</td>\t\r\n                </tr>\t\r\n              </tbody>\t\r\n            </table>\t\r\n          </div>\t\r\n        </div>\t\r\n      </div>\t\r\n    </div>\t\r\n  </div>\t\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/update-plant-rate-list/update-plant-rate-list.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/update-plant-rate-list/update-plant-rate-list.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FkbWluLXByaXZpbGVnZXMvY29tcG9uZW50cy91cGRhdGUtcGxhbnQtcmF0ZS1saXN0L0Y6XFx0ZXN0aW5nX2RlbGV0ZV9mb2xkZXJcXFRSVUNLX0RFTU9fb2xkR2FuZXNoXFxmcm9udGVuZFxcdGRfZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcYWRtaW4tcHJpdmlsZWdlc1xcY29tcG9uZW50c1xcdXBkYXRlLXBsYW50LXJhdGUtbGlzdFxcdXBkYXRlLXBsYW50LXJhdGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FkbWluLXByaXZpbGVnZXMvY29tcG9uZW50cy91cGRhdGUtcGxhbnQtcmF0ZS1saXN0L3VwZGF0ZS1wbGFudC1yYXRlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXRmaWxlIHtcclxuXHR3aWR0aDogMC4xcHg7XHJcblx0aGVpZ2h0OiAwLjFweDtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHotaW5kZXg6IC0xO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/update-plant-rate-list/update-plant-rate-list.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/update-plant-rate-list/update-plant-rate-list.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: UpdatePlantRateListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePlantRateListComponent", function() { return UpdatePlantRateListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/admin-privileges.service */ "./src/app/shared/services/admin-privileges.service.ts");
/* harmony import */ var src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/meta.service */ "./src/app/shared/services/meta.service.ts");
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






var UpdatePlantRateListComponent = /** @class */ (function () {
    function UpdatePlantRateListComponent(meta, formBuilder, Admin, toastr) {
        this.meta = meta;
        this.formBuilder = formBuilder;
        this.Admin = Admin;
        this.toastr = toastr;
        this.sites = [];
        this.companies = [];
        this.shown = false;
        this.plantRateList = [];
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        console.log('>>>>>SItename', this.site_name);
        // Filter form control
        this.filterForm = this.formBuilder.group({
            name: [''],
            site: [''],
            status: ['Active'],
            rateby: ['SPI'],
            date_from: [''],
            date_to: [''],
        });
        this.getSites();
        this.getCompanies();
    }
    UpdatePlantRateListComponent.prototype.ngOnInit = function () {
        this.getPlantRateList();
    };
    UpdatePlantRateListComponent.prototype.getSites = function () {
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
            // on error
        });
    };
    UpdatePlantRateListComponent.prototype.getPlantRateList = function () {
        var _this = this;
        this.meta.getPlantRateList().subscribe(function (res) {
            res.result.forEach(function (element) {
                element.date_from = moment_timezone__WEBPACK_IMPORTED_MODULE_5__(element.date_from).tz('Asia/Calcutta').format('DD/MM/YYYY');
                element.date_to = moment_timezone__WEBPACK_IMPORTED_MODULE_5__(element.date_to).tz('Asia/Calcutta').format('DD/MM/YYYY');
            });
            _this.plantRateList = res.result;
            console.log('plantRateList >>>', _this.plantRateList);
        }, function (err) {
            console.log('error', err);
        });
    };
    UpdatePlantRateListComponent.prototype.getSearchPlantRateList = function () {
        var _this = this;
        var getFormData = this.filterForm.value;
        console.log('getFormData >>>>>', getFormData);
        var Name = getFormData.name;
        var Site = getFormData.site;
        this.meta.searchPlantRateList(Name, Site).subscribe(function (res) {
            res.result.forEach(function (element) {
                element.date_from = moment_timezone__WEBPACK_IMPORTED_MODULE_5__(element.date_from).tz('Asia/Calcutta').format('DD/MM/YYYY');
                element.date_to = moment_timezone__WEBPACK_IMPORTED_MODULE_5__(element.date_to).tz('Asia/Calcutta').format('DD/MM/YYYY');
            });
            _this.plantRateList = res.result;
            console.log('plantRateList >>>', _this.plantRateList);
        }, function (err) {
            console.log('error', err);
        });
    };
    UpdatePlantRateListComponent.prototype.getCompanies = function () {
        var _this = this;
        this.meta.getPartyNames().subscribe(function (res) {
            _this.companies = res;
        }, function (err) {
            // on error
        });
    };
    UpdatePlantRateListComponent.prototype.onSelectCSV = function (event) {
        this.file = event.target.files[0];
    };
    UpdatePlantRateListComponent.prototype.startImport = function () {
        var _this = this;
        this.shown = true;
        var d = new FormData();
        var date = this.filterForm.value.date_from;
        var fdate = this.filterForm.value.date_to;
        var fronDate = date.year + '-' + date.month + '-' + date.day;
        var toDate = fdate.year + '-' + fdate.month + '-' + fdate.day;
        d.append('file', this.file);
        d.append('name', this.filterForm.value.name);
        d.append('site', this.filterForm.value.site);
        d.append('status', this.filterForm.value.status);
        d.append('rateby', this.filterForm.value.rateby);
        d.append('date_from', fronDate);
        d.append('date_to', toDate);
        this.Admin.updatePlantRateList(d).subscribe(function (res) {
            _this.toastr.success('Imported successfully.');
            _this.shown = false;
            _this.file = '';
            _this.filterForm.controls['name'].setValue('');
        }, function (err) {
            _this.toastr.error('Something went wrong when importing.');
            _this.shown = false;
            _this.file = '';
        });
    };
    UpdatePlantRateListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-plant-rate-list',
            template: __webpack_require__(/*! ./update-plant-rate-list.component.html */ "./src/app/layout/admin-privileges/components/update-plant-rate-list/update-plant-rate-list.component.html"),
            styles: [__webpack_require__(/*! ./update-plant-rate-list.component.scss */ "./src/app/layout/admin-privileges/components/update-plant-rate-list/update-plant-rate-list.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_3__["AdminPrivilegesService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], UpdatePlantRateListComponent);
    return UpdatePlantRateListComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/user-creation-edit/user-creation-edit.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/user-creation-edit/user-creation-edit.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">User Creation Edit</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form [formGroup]=\"editForm\">\r\n    \r\n    <ul class=\"list-group\"><label>Permissions List</label>\r\n      <li *ngFor=\"let p of permissions\" class=\"list-group-item\" (click)=\"onPermissionClick(p)\">{{p.name}} \r\n        <i *ngIf=\"p.checked\" class=\"fa fa-check-square-o pull-right\" aria-hidden=\"true\"></i> \r\n        <i *ngIf=\"!p.checked\" class=\"fa fa-square-o pull-right\" aria-hidden=\"true\"></i>\r\n      </li>\r\n    </ul>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Site</label>\r\n      <select formControlName=\"site\" class=\"form-control\" required>\r\n        <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n          {{ s.branch_name }}\r\n        </option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Role</label>\r\n      <select formControlName=\"role\" class=\"form-control\" required>\r\n        <option value=\"\">Select Role</option>\r\n        <option *ngFor=\"let r of roles\" value=\"{{ r.role_name }}\">\r\n          {{ r.role_name }}\r\n        </option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Name</label>\r\n      <input type=\"text\" class=\"form-control\" formControlName=\"name\" />\r\n    </div>\r\n    <button class=\"btn btn-primary\" (click)=\"update()\">Update</button>\r\n  </form>\r\n</div>\r\n\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/user-creation-edit/user-creation-edit.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/user-creation-edit/user-creation-edit.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvdXNlci1jcmVhdGlvbi1lZGl0L3VzZXItY3JlYXRpb24tZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/user-creation-edit/user-creation-edit.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/user-creation-edit/user-creation-edit.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: UserCreationEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreationEditComponent", function() { return UserCreationEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/admin-privileges.service */ "./src/app/shared/services/admin-privileges.service.ts");
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






var UserCreationEditComponent = /** @class */ (function () {
    function UserCreationEditComponent(activeModal, fb, adminService, toastr, meta) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.adminService = adminService;
        this.toastr = toastr;
        this.meta = meta;
        this.permissions = [];
        this.sites = [];
        this.loading = false;
        this.roles = [
            { role_name: 'ADMIN' },
            { role_name: 'STAFF' },
            { role_name: 'DRIVER' },
            { role_name: 'AP' }
        ];
    }
    UserCreationEditComponent.prototype.ngOnInit = function () {
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        this.editForm = this.fb.group({
            permissions: [''],
            name: [''],
            site: [''],
            role: [''],
        });
        this.getSites();
        this.getPermissions();
        // Get permission array
        this.editForm.controls['name'].setValue(this.user_data.name);
        this.editForm.controls['site'].setValue(this.user_data.site);
        this.editForm.controls['role'].setValue(this.user_data.role);
    };
    UserCreationEditComponent.prototype.getPermissions = function () {
        var _this = this;
        this.adminService.getPermissions().subscribe(function (res) {
            res.forEach(function (element) {
                element.checked = false;
            });
            _this.user_data.permissions.forEach(function (p) {
                p = p.trim();
                res.forEach(function (element) {
                    if (p === element.name) {
                        element.checked = true;
                    }
                });
            });
            _this.permissions = res;
        }, function (err) {
            // on error
        });
    };
    UserCreationEditComponent.prototype.onPermissionClick = function (p) {
        p.checked = !p.checked;
    };
    UserCreationEditComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.meta.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.sites = res;
        }, function (err) {
            _this.loading = false;
        });
    };
    UserCreationEditComponent.prototype.update = function () {
        var _this = this;
        var getFromData = this.editForm.value;
        var val = {
            'name': getFromData.name,
            'site': getFromData.site,
            'role': getFromData.role,
            'permissions': []
        };
        var mainArray = [];
        console.log(' my permissions', this.permissions);
        this.permissions.forEach(function (element) {
            if (element.checked === true) {
                var obj = {
                    'pname': element.name,
                    'pvalue': element.value
                };
                val.permissions.push(obj);
            }
        });
        this.adminService.updateUserCreation(this.user_data._id, val).subscribe(function (res) {
            _this.activeModal.close(res);
            _this.toastr.success('User creation updated!');
        }, function (err) {
            _this.activeModal.dismiss();
            _this.toastr.error('Something went wrong when adding!');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserCreationEditComponent.prototype, "user_data", void 0);
    UserCreationEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-creation-edit',
            template: __webpack_require__(/*! ./user-creation-edit.component.html */ "./src/app/layout/admin-privileges/components/user-creation-edit/user-creation-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-creation-edit.component.scss */ "./src/app/layout/admin-privileges/components/user-creation-edit/user-creation-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_3__["AdminPrivilegesService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_4__["MetaService"]])
    ], UserCreationEditComponent);
    return UserCreationEditComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/user-creation-list/user-creation-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/user-creation-list/user-creation-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>Users List</strong>\r\n  </div>\r\n\r\n  <div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <table class=\"table tableFixHead mytable\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Name</th>\r\n                        <th>Site</th>\r\n                        <th>Role</th>\r\n                        <!-- <th>Permissions</th> -->\r\n                        <th>Edit</th>\r\n                        <th>Delete</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor= \"let user of usersList; let i = index\">\r\n                          <!-- <a [routerLink]=\"['/admin-privileges/plants-rate-multiple-destination', user.site]\"> -->\r\n                        <td>{{user.name ? user.name : '--'}}</td>\r\n                        <td>{{user.site ? user.site : '--'}}</td>\r\n                        <td>{{user.role ? user.role : '--'}}</td>\r\n                        <!-- <td>{{user.permissions ? user.permissions : '--'}}</td> -->\r\n                        <td><button class=\"btn btn-primary\" (click)=\"edit(user)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit</button>&nbsp;</td>\r\n                        <td>\r\n                          <button class=\"btn btn-danger\" (click)=\"delete(user, i)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</button>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/user-creation-list/user-creation-list.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/user-creation-list/user-creation-list.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvdXNlci1jcmVhdGlvbi1saXN0L3VzZXItY3JlYXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/user-creation-list/user-creation-list.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/user-creation-list/user-creation-list.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: UserCreationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreationListComponent", function() { return UserCreationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_user_creation_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/user-creation-service.service */ "./src/app/shared/services/user-creation-service.service.ts");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _user_creation_edit_user_creation_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-creation-edit/user-creation-edit.component */ "./src/app/layout/admin-privileges/components/user-creation-edit/user-creation-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserCreationListComponent = /** @class */ (function () {
    function UserCreationListComponent(usersService, formBuilder, toastr, modalService) {
        this.usersService = usersService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.modalService = modalService;
        this.usersList = [];
        this.getUsersList();
    }
    UserCreationListComponent.prototype.getUsersList = function () {
        var _this = this;
        this.usersService.getUsersList().subscribe(function (res) {
            _this.usersList = res;
            _this.usersList.forEach(function (r) {
                var per = [];
                r.permissions.forEach(function (e) {
                    var data = ' ' + e.pname;
                    per.push(data);
                });
                r.permissions = per;
            });
        }, function (err) {
            // on error
        });
    };
    UserCreationListComponent.prototype.delete = function (data, index) {
        var _this = this;
        var obj = {
            name: data.name,
        };
        var conf = confirm('Are you sure you want to delete this record ?');
        if (conf === true) {
            // this.loading = true;
            console.log('data  >>>>', obj);
            this.usersService.deleteRecord(obj).subscribe(function (res) {
                _this.usersList.splice(index, 1);
                _this.toastr.success('User deleted successfully.');
                // this.loading = false;
            }, function (err) {
                _this.toastr.error('Something went wrong.');
                // this.loading = false;
            });
        }
    };
    UserCreationListComponent.prototype.ngOnInit = function () {
    };
    UserCreationListComponent.prototype.edit = function (d) {
        var _this = this;
        var modalRef = this.modalService.open(_user_creation_edit_user_creation_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserCreationEditComponent"]);
        modalRef.componentInstance.user_data = d;
        modalRef.result.then(function (res) {
            if (res) {
                _this.getUsersList();
            }
        });
    };
    UserCreationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-creation-list',
            template: __webpack_require__(/*! ./user-creation-list.component.html */ "./src/app/layout/admin-privileges/components/user-creation-list/user-creation-list.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./user-creation-list.component.scss */ "./src/app/layout/admin-privileges/components/user-creation-list/user-creation-list.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_user_creation_service_service__WEBPACK_IMPORTED_MODULE_1__["UserCreationServiceService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], UserCreationListComponent);
    return UserCreationListComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/user-creation/user-creation.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/user-creation/user-creation.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\r\n      <form [formGroup]=\"addExpenseForm\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Select Permissions</label>\r\n                <select formControlName=\"permissions\" class=\"form-control\" multiple>\r\n                  <option value=\"\">Select Permissions</option>\r\n                  <option *ngFor=\"let p of permissions\" value=\"{{ p.value }}\">\r\n                    {{ p.name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Name</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Password</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"password\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>T Password</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"tpassword\" />\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Site</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"site\" />\r\n              </div>\r\n            </div> -->\r\n\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Site</label>\r\n                  <select formControlName=\"site\" class=\"form-control\" required>\r\n                    <option *ngFor=\"let s of sites\" value=\"{{ s.branch_name }}\">\r\n                      {{ s.branch_name }}\r\n                    </option>\r\n                  </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Role</label>\r\n                <select formControlName=\"role\" class=\"form-control\" required>\r\n                  <option value=\"\">Select Role</option>\r\n                  <option *ngFor=\"let r of roles\" value=\"{{ r.role_name }}\">\r\n                    {{ r.role_name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"save()\"> Save </button>\r\n    <!-- (click)=\"saveSiteTruckExpense()\"> -->\r\n  </div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/user-creation/user-creation.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/user-creation/user-creation.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvdXNlci1jcmVhdGlvbi91c2VyLWNyZWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/user-creation/user-creation.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/user-creation/user-creation.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: UserCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreationComponent", function() { return UserCreationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/admin-privileges.service */ "./src/app/shared/services/admin-privileges.service.ts");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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






var UserCreationComponent = /** @class */ (function () {
    function UserCreationComponent(adminService, formBuilder, toastr, meta) {
        this.adminService = adminService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.meta = meta;
        this.permissions = [];
        this.sites = [];
        this.loading = false;
        this.roles = [
            { role_name: 'ADMIN' },
            { role_name: 'STAFF' },
            { role_name: 'DRIVER' },
            { role_name: 'AP' }
        ];
        this.usertype = this.meta.getSiteFromStorage().role;
        this.site_name = this.meta.getSiteFromStorage().site;
        this.addExpenseForm = this.formBuilder.group({
            name: [''],
            password: [''],
            tpassword: [''],
            site: [''],
            role: [''],
            permissions: [''],
        });
        this.getPermissions();
        this.getSites();
    }
    UserCreationComponent.prototype.getPermissions = function () {
        var _this = this;
        this.adminService.getPermissions().subscribe(function (res) {
            _this.permissions = res;
        }, function (err) {
            // on error
        });
    };
    UserCreationComponent.prototype.ngOnInit = function () {
    };
    UserCreationComponent.prototype.getSites = function () {
        var _this = this;
        this.loading = true;
        this.meta.getSites().subscribe(function (res) {
            _this.loading = false;
            _this.sites = res;
            if (_this.usertype === 'ADMIN') {
                _this.addExpenseForm.controls['site'].setValue(_this.sites[0].branch_name);
            }
            else {
                _this.addExpenseForm.controls['site'].setValue(_this.site_name);
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    UserCreationComponent.prototype.save = function () {
        var _this = this;
        var mainArray = [];
        var getFromData = this.addExpenseForm.value;
        var getAllPermissionsFromUser = getFromData['permissions'];
        var getAllPermissionsFromDB = this.permissions;
        // console.log('getAllPermissionsFromUser  >>>>', getAllPermissionsFromUser);
        getAllPermissionsFromUser.forEach(function (r) {
            getAllPermissionsFromDB.forEach(function (i) {
                if (r === i.value) {
                    var obj = {
                        'pname': i.name,
                        'pvalue': i.value
                    };
                    mainArray.push(obj);
                }
            });
        });
        console.log('mainArray  >>>>', mainArray);
        getFromData['permissions'] = mainArray;
        console.log('After Add  >>>>', getFromData);
        this.adminService.addUser(getFromData).subscribe(function (res) {
            _this.toastr.success('Added!');
            _this.addExpenseForm.reset();
            _this.addExpenseForm.controls['site'].setValue(_this.site_name);
            // this.modalService.dismissAll();
        }, function (err) {
            console.log('err   >>>', err);
            _this.toastr.error('Something went wrong when adding!');
        });
    };
    UserCreationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-creation',
            template: __webpack_require__(/*! ./user-creation.component.html */ "./src/app/layout/admin-privileges/components/user-creation/user-creation.component.html"),
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./user-creation.component.scss */ "./src/app/layout/admin-privileges/components/user-creation/user-creation.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_admin_privileges_service__WEBPACK_IMPORTED_MODULE_1__["AdminPrivilegesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            src_app_shared_services_meta_service__WEBPACK_IMPORTED_MODULE_5__["MetaService"]])
    ], UserCreationComponent);
    return UserCreationComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin-privileges/components/view-tyre-ratelist/view-tyre-ratelist.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/view-tyre-ratelist/view-tyre-ratelist.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      View tyre Rate List\r\n      <button class=\"btn btn-primary float-right\" (click)=\"gotoEdit()\"  type=\"button\">\r\n        <i class=\"fa fa-edit\" aria-hidden=\"true\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-3 col-md-3\">Date</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{trlDetails?.trl_date | date}}</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-lg-8 col-md-4\">Company</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{trlDetails?.company_name}}</label>\r\n          </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Brand</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{trlDetails?.brand}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-8\">Tyre Type</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{trlDetails?.tyre_type}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">Tyre Size</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{trlDetails?.tyre_size}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-lg-4 col-md-4\">NSD</label>\r\n            <label class=\"col-lg-8 col-md-8 font-weight-bold\">{{trlDetails?.nsd}}</label>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n      \r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">Vendor Details</div>\r\n            <div class=\"card-body\">\r\n              <table class=\"table table-bordered\">\r\n                <tr>\r\n                  <th>Item</th>\r\n                  <th>location</th>\r\n                  <th>Price(<i class=\"fa fa-inr\" aria-hidden=\"true\"></i>)</th>\r\n                </tr>\r\n                <tr *ngFor=\"let items of trlDetails.trl_items; let i=index\">\r\n                  <td>{{items?.name}}</td>\r\n                  <td>{{items?.location}}</td>\r\n                  <td>{{items?.price}}</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/view-tyre-ratelist/view-tyre-ratelist.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/view-tyre-ratelist/view-tyre-ratelist.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi1wcml2aWxlZ2VzL2NvbXBvbmVudHMvdmlldy10eXJlLXJhdGVsaXN0L3ZpZXctdHlyZS1yYXRlbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/admin-privileges/components/view-tyre-ratelist/view-tyre-ratelist.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/admin-privileges/components/view-tyre-ratelist/view-tyre-ratelist.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ViewTyreRatelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTyreRatelistComponent", function() { return ViewTyreRatelistComponent; });
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


var ViewTyreRatelistComponent = /** @class */ (function () {
    function ViewTyreRatelistComponent(aroute, router) {
        this.aroute = aroute;
        this.router = router;
    }
    ViewTyreRatelistComponent.prototype.ngOnInit = function () {
        this.trlDetails = this.aroute.snapshot.data['trl_details'];
    };
    ViewTyreRatelistComponent.prototype.gotoEdit = function () {
        this.router.navigate(["/admin-privileges/tyre-ratelist/" + this.trlDetails['_id'] + "/edit"]);
    };
    ViewTyreRatelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-tyre-ratelist',
            template: __webpack_require__(/*! ./view-tyre-ratelist.component.html */ "./src/app/layout/admin-privileges/components/view-tyre-ratelist/view-tyre-ratelist.component.html"),
            styles: [__webpack_require__(/*! ./view-tyre-ratelist.component.scss */ "./src/app/layout/admin-privileges/components/view-tyre-ratelist/view-tyre-ratelist.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewTyreRatelistComponent);
    return ViewTyreRatelistComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/admin-privileges.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/admin-privileges.service.ts ***!
  \*************************************************************/
/*! exports provided: AdminPrivilegesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPrivilegesService", function() { return AdminPrivilegesService; });
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


var AdminPrivilegesService = /** @class */ (function () {
    function AdminPrivilegesService(api) {
        this.api = api;
    }
    AdminPrivilegesService.prototype.planRateList = function () {
        return this.api.get('plant_rate/async_plant_rate_list');
    };
    AdminPrivilegesService.prototype.getPlanRateList = function (filters) {
        return this.api.get('plant_rate/plant_rate_list', filters);
    };
    AdminPrivilegesService.prototype.getSitePlanRateDetails = function (filters) {
        return this.api.get('plant_rate/plant_rate_detail', filters);
    };
    AdminPrivilegesService.prototype.updateSitePlanRate = function (data) {
        return this.api.put('plant_rate/plant_rate_update', data);
    };
    AdminPrivilegesService.prototype.getSiteTruckExp = function (filters) {
        return this.api.get('site_expense/site_expense_list', filters);
    };
    AdminPrivilegesService.prototype.updateSiteTruckExp = function (data) {
        return this.api.put('site_expense/site_expense_update', data);
    };
    AdminPrivilegesService.prototype.getMultiDest = function (filters) {
        return this.api.get('site_expense/site_expense_multidest_detail', filters);
    };
    AdminPrivilegesService.prototype.getFleetTargetList = function (filters) {
        return this.api.get('fleets_target/fleets_targets_list', filters);
    };
    AdminPrivilegesService.prototype.updateFleetTargetList = function (data) {
        return this.api.put('fleets_target/fleets_targets_update', data);
    };
    AdminPrivilegesService.prototype.importSiteTruckExpense = function (data) {
        return this.api.post('import/site_truck_expenses', data);
    };
    AdminPrivilegesService.prototype.importPlantRateList = function (data) {
        return this.api.post('import/plant_rate_list', data);
    };
    AdminPrivilegesService.prototype.updatePlantRateList = function (data) {
        return this.api.post('plant_rates_list/data', data);
    };
    AdminPrivilegesService.prototype.addPlantRateList = function (data) {
        return this.api.post('plant_rate/plant_rate_multidest_add', data);
    };
    AdminPrivilegesService.prototype.addSiteTruckExpenseList = function (data) {
        return this.api.post('site_expense/site_expense_multidest_add', data);
    };
    AdminPrivilegesService.prototype.getPermissions = function () {
        return this.api.get('user_creation/list_of_permissions');
    };
    AdminPrivilegesService.prototype.addUser = function (data) {
        return this.api.post('user_creation/create_user', data);
    };
    AdminPrivilegesService.prototype.saveTrafficAgentsData = function (data) {
        return this.api.post('site_assign_to_traffic_agents/create_traffic_agent', data);
    };
    AdminPrivilegesService.prototype.getAssignedSitesList = function (agent_name) {
        return this.api.get('site_assign_to_traffic_agents/select_traffic_agent?ta_name=' + agent_name);
    };
    AdminPrivilegesService.prototype.updateUserCreation = function (id, data) {
        return this.api.put('user_creation/update_user?id=' + id, data);
    };
    AdminPrivilegesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], AdminPrivilegesService);
    return AdminPrivilegesService;
}());



/***/ }),

/***/ "./src/app/shared/services/gps-rate.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/gps-rate.service.ts ***!
  \*****************************************************/
/*! exports provided: GpsRateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpsRateService", function() { return GpsRateService; });
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


var GpsRateService = /** @class */ (function () {
    function GpsRateService(api) {
        this.api = api;
    }
    GpsRateService.prototype.getAllGpsRate = function () {
        return this.api.get('gps_rate_master/getgpsrate');
    };
    GpsRateService.prototype.getGpsRateByDestination = function (filters) {
        return this.api.get('gps_rate_master/getgpsratebydestination', filters);
    };
    GpsRateService.prototype.getDestination = function () {
        return this.api.get('gps_rate_master/getdestination');
    };
    GpsRateService.prototype.addRate = function (data) {
        return this.api.post('gps_rate_master/insert_gps_rate', data);
    };
    GpsRateService.prototype.deleteData = function (filters) {
        return this.api.get('gps_rate_master/deleteData', filters);
    };
    GpsRateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], GpsRateService);
    return GpsRateService;
}());



/***/ }),

/***/ "./src/app/shared/services/user-creation-service.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/user-creation-service.service.ts ***!
  \******************************************************************/
/*! exports provided: UserCreationServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreationServiceService", function() { return UserCreationServiceService; });
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


var UserCreationServiceService = /** @class */ (function () {
    function UserCreationServiceService(api) {
        this.api = api;
    }
    UserCreationServiceService.prototype.getUsersList = function () {
        return this.api.get('user_creation/list_of_users');
    };
    UserCreationServiceService.prototype.deleteRecord = function (k) {
        return this.api.delete('user_creation/delete_user', { params: k });
    };
    UserCreationServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], UserCreationServiceService);
    return UserCreationServiceService;
}());



/***/ })

}]);
//# sourceMappingURL=admin-privileges-admin-privileges-module.js.map