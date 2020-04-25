(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+O9J":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("nm5K"),r=n("CcnG"),o=function(){function t(t){this.api=t}return t.prototype.getRecords=function(t){return this.api.get("site_management/principal_billing",t)},t.prototype.deleteRecord=function(t){return this.api.delete("billing/bill_delete",{params:t})},t.prototype.deleteBillByNumber=function(t){return this.api.delete("billing/bill_delete_by_bill_no",{params:t})},t.prototype.deleteLedgerByBillNumber=function(t){return this.api.delete("billing/delete_principle_billing_posting",{params:t})},t.prototype.saveRecord=function(t){return this.api.post("billing/insert_bill",t)},t.prototype.getBillNo=function(t,e){return this.api.get("billing/billing_maxnum?site="+t+"&accountname="+e)},t.prototype.getBillingRecords=function(){return this.api.get("billing/billing_list")},t.prototype.getBillNumberData=function(t,e,n){return this.api.get("billing/bill_number_data?bill_no="+t+"&site_name="+e+"&account_name="+n)},t.prototype.addTruckPosition=function(t){return this.api.post("plants_truck_position/add",t)},t.prototype.deleteTruckPosition=function(t){return this.api.delete("plants_truck_position/delete",{params:t})},t.prototype.updateTruckPosition=function(t){return this.api.put("plants_truck_position/update",t)},t.prototype.getTruckPosition=function(t){return this.api.get("plants_truck_position/list",t)},t.prototype.getDestinationList=function(t){return this.api.get("meta/to_destinations?q="+t)},t.prototype.getBilltyList=function(t){return this.api.get("reports/billty_latest?truck_no="+t)},t.prototype.updateBillties=function(t){return this.api.put("plants_truck_position/update_billty_time",t)},t.prototype.updatePlacedtime=function(t){return this.api.put("plants_truck_position/update_placed_time",t)},t.prototype.getTruckPositionList=function(t){return this.api.get("meta/trucks?q="+t)},t.prototype.getCompanyTruckPositionList=function(t){return this.api.get("meta/company_trucks?q="+t)},t.prototype.getLrNumber=function(t){return this.api.get("meta/lr_numbers",t)},t.prototype.cancelPositionEntry=function(t){return this.api.put("plants_truck_position/cancel_position_entry",t)},t.prototype.getDocumentStatus=function(t){return this.api.get("plants_truck_position/document_names",t)},t.prototype.getConsignorCity=function(t){return this.api.get("accounts/consignor_city?consignor="+t)},t.prototype.principleBillingPosting=function(t){return this.api.post("accounts/principle_billing_posting",t)},t.prototype.updateBillByLrNo=function(t,e,n){return this.api.put("billing/update_bill?billno="+t+"&lrno="+e,n)},t.ngInjectableDef=r.defineInjectable({factory:function(){return new t(r.inject(i.a))},token:t,providedIn:"root"}),t}()},"+Sv0":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){return function(){}}()},"3zLz":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(){}return t.prototype.ngOnInit=function(){},t}()},Puct:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("nm5K"),r=n("CcnG"),o=function(){function t(t){this.api=t}return t.prototype.getItemCategoryList=function(){return this.api.get("dashboard/itemcategoryslist")},t.prototype.getUnitList=function(){return this.api.get("dashboard/unitslist")},t.prototype.getGodownList=function(){return this.api.get("dashboard/godownslist")},t.prototype.getTyreList=function(){return this.api.get("dashboard/tyreslist")},t.prototype.getTyrePositionList=function(){return this.api.get("dashboard/tyrepositionslist")},t.prototype.getTruckList=function(){return this.api.get("dashboard/truckslist")},t.prototype.getSiteTruckPostion=function(t){return this.api.get("reports/sitewise_summary",t)},t.ngInjectableDef=r.defineInjectable({factory:function(){return new t(r.inject(i.a))},token:t,providedIn:"root"}),t}()},Ug8t:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("nm5K"),r=n("CcnG"),o=function(){function t(t){this.api=t}return t.prototype.getAllSite=function(){return this.api.get("plant_rate/get_all_site")},t.prototype.getEgaReport=function(t){return this.api.get("reports/ega",t)},t.prototype.getTruckDestinationDetails=function(t){return this.api.get("reports/truck_dest_details",{truckno:t})},t.prototype.getMaxLrno=function(t){return this.api.get("reports/max_lrno",{site:t})},t.prototype.getMonthlyBalanceReport=function(t){return this.api.get("reports/monthly-balance-chart",t)},t.prototype.getUnderPerformanceTruckReport=function(t){return this.api.get("reports/under-performance-truck-report",t)},t.prototype.getUnderPerformanceTruckReportSite=function(t){return this.api.get("reports/under-performance-truck-report-site",t)},t.prototype.getDestinationBySite=function(t){return this.api.get("plant_rate/get_destination_by_site",t)},t.prototype.getDispatchSummary=function(t){return this.api.get("reports/dispatch_summary",t)},t.prototype.getDispatchSummarySite=function(t){return this.api.get("reports/dispatch_summary_site",t)},t.prototype.getDispatchSummarySiteWise=function(t){return this.api.get("reports/dispatch_summary_site_wise",t)},t.prototype.getDispatchSummarySiteWiseMonthly=function(t){return this.api.get("reports/dispatch_summary_site_wise_monthly",t)},t.prototype.getOwnFleetReportBySite=function(t){return this.api.get("reports/own_fleet_report_by_site",t)},t.prototype.getOwnFleetReportBySiteMonthly=function(t){return this.api.get("reports/own_fleet_report_by_site_monthly",t)},t.prototype.getAccountReports=function(t){return this.api.get("accounts/ledger",t)},t.prototype.getAccountItemsLedgerReports=function(t){return this.api.get("accounts/accountsitemsledger",t)},t.prototype.getItemReports=function(t){return this.api.get("itemsl/ledger",t)},t.prototype.getTruckLedgerReports=function(t){return this.api.get("trucksl/ledger",t)},t.prototype.getOrderReports=function(t){return this.api.get("ordersl/ledger",t)},t.prototype.getScrapReports=function(t){return this.api.get("scrapsl/ledger",t)},t.prototype.getOwnFleetReport=function(t){return this.api.get("reports/ownfleet_report",t)},t.prototype.getOwnFleetTruckReport=function(t){return this.api.get("reports/ownfleet_truck_report/"+t)},t.ngInjectableDef=r.defineInjectable({factory:function(){return new t(r.inject(i.a))},token:t,providedIn:"root"}),t}()},kE45:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("nm5K"),r=n("CcnG"),o=function(){function t(t){this.api=t}return t.prototype.getCreatedEstimates=function(){return this.api.get("estimates/list_created")},t.prototype.getEstimateById=function(t){return this.api.get("estimates/find/"+t)},t.prototype.getSubmissionOfVendor=function(t,e){return this.api.get("estimates/find-submission/"+t+"/"+e)},t.prototype.addEstimate=function(t){return this.api.post("estimates/create_estimate",t)},t.prototype.submitEstimate=function(t){return this.api.post("estimates/submit",t)},t.prototype.getEstimatesSubmisionById=function(t){return this.api.get("estimates/find_submission/"+t)},t.prototype.getEstimatesSubmisions=function(){return this.api.get("estimates/list_submissions")},t.prototype.updateEstimateSubmission=function(t){return this.api.put("estimates/update/submission/"+t,"")},t.prototype.rejectEstimateSubmission=function(t){return this.api.put("estimates/reject/submission/"+t,"")},t.prototype.getEstimatesProdSubmisions=function(t){return this.api.get("estimates/list_submissions/"+t)},t.prototype.delete=function(t){return this.api.delete("estimates/delete/"+t)},t.prototype.update=function(t,e){return this.api.put("estimates/update/"+t,e)},t.ngInjectableDef=r.defineInjectable({factory:function(){return new t(r.inject(i.a))},token:t,providedIn:"root"}),t}()},rMXk:function(t,e,n){"use strict";var i=n("CcnG"),r=n("ZYCi"),o=n("Ip0R");n("3zLz"),n.d(e,"a",function(){return u}),n.d(e,"b",function(){return s});var u=i["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function s(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(t()(),i["\u0275eld"](1,0,null,null,12,"div",[["class","col-xl-12"]],null,null,null,null,null)),(t()(),i["\u0275eld"](2,0,null,null,1,"h2",[["class","page-header"]],null,null,null,null,null)),(t()(),i["\u0275ted"](3,null,[" "," "])),(t()(),i["\u0275eld"](4,0,null,null,9,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(t()(),i["\u0275eld"](5,0,null,null,5,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(t()(),i["\u0275eld"](6,0,null,null,0,"i",[["class","fa fa-dashboard"]],null,null,null,null,null)),(t()(),i["\u0275eld"](7,0,null,null,3,"a",[["href","Javascript:void(0)"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(t,e,n){var r=!0;return"click"===e&&(r=!1!==i["\u0275nov"](t,8).onClick(n.button,n.ctrlKey,n.metaKey,n.shiftKey)&&r),r},null,null)),i["\u0275did"](8,671744,null,0,r.n,[r.l,r.a,o.LocationStrategy],{routerLink:[0,"routerLink"]},null),i["\u0275pad"](9,1),(t()(),i["\u0275ted"](-1,null,["Dashboard"])),(t()(),i["\u0275eld"](11,0,null,null,2,"li",[["class","breadcrumb-item active"]],null,null,null,null,null)),(t()(),i["\u0275eld"](12,0,null,null,0,"i",[],[[8,"className",0]],null,null,null,null)),(t()(),i["\u0275ted"](13,null,[" ",""]))],function(t,e){var n=t(e,9,0,"/dashboard");t(e,8,0,n)},function(t,e){var n=e.component;t(e,3,0,n.heading),t(e,7,0,i["\u0275nov"](e,8).target,i["\u0275nov"](e,8).href),t(e,12,0,i["\u0275inlineInterpolate"](1,"fa ",n.icon,"")),t(e,13,0,n.heading)})}}}]);