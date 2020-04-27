import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(public api: ApiService) { }

    getSiteFromStorage() {
      return JSON.parse(localStorage.getItem('user'));
    }

    // checkUserType() {
    //   if (this.getSiteFromStorage().role !== 'ADMIN') {
    //     return this.getSiteFromStorage().site ;
    //   }
    // }

    getmrVendorList() {
      return this.api.get('meta/mrvendorlist');
    }

    getCompanyTruckList() {
      return this.api.get('meta/companytrucklist');
    }

    getJobWorkNameList() {
      return this.api.get('meta/JobWorkNamelist');
    }

    getTyrePositionList() {
      return this.api.get('meta/tyrepositionlist');
    }

    getCompanyNamesList() {
      return this.api.get('meta/companylist');
    }

    getBrandsList() {
      return this.api.get('meta/brandlist');
    }

    getCompanyNameDetails(id) {
      return this.api.post('meta/generate_brand_name', { company_name: id });
    }

    getTyreNoList() {
      return this.api.get('meta/tyrenolist');
    }

    getmrItemList() {
      return this.api.get('meta/itemslist');
    }
    getSites() {
      return this.api.get('meta/sites');
    }
    getConsigner(site){
      return this.api.get('admin-privileges/site-profile/consigner/'+site);
    }

    getDqty(tyre,tcc,site){
      return this.api.get('admin-privileges/truck-average/dqty/'+tyre+"/"+tcc+"/"+site);
    }

    getDestinationKm(site,destination){
      return this.api.get('admin-privileges/site-destinationkms/km/'+site+"/"+destination);
    }

    getEnginetype(truckno){
      return this.api.get('maintenance/job-work/enginetype/'+truckno);
    }

    getConsignee(site){
      return this.api.get('admin-privileges/consignee-master/consignee/'+site)
    }

    getToDestinationsFromPlantRateList(site){
      return this.api.get('meta/ToDestinationsFromPlantRateList/'+site);
    }
    getTruckPositionParking(site){
      return this.api.get('meta/truckpositionparking/' + site);
    }
    getSitePetrolPump(site){
      return this.api.get('meta/Sitepetrolpump/' + site);
    }
    getLrData(site,bool){
      return this.api.get('reports/lrwise_truck_positions/' + site + '/' + bool);
    }

    getTruckLastBilltyDetails(data) {
      return this.api.post('meta/trucklastbilltydetails', data);
    }
    getallSites() {
      return this.api.get('meta/allsites');
    }
    getConsigneeByName(consignee){
      return this.api.get('admin-privileges/consignee-master/consignee-by-name/' + consignee);
    }

    getRate(vendor,dateStr){
      return this.api.get('admin-privileges/diesal-ratemaster/rate/' + vendor + "/" + dateStr);
    }

    getRateType(site){
      return this.api.get('rates/rateby/' + site);
    }

    getTruckDetails(truckno) {
      return this.api.get('meta/trucks/' + truckno);
    }

    getfrieght(data){
      return this.api.post('rates/get_freight', data);
    }

    getworktobedonetolerance(data){
      return this.api.post('maintenance/engine-typemaster/get_kmtolerance', data);
    }

    getRoadExpanses(billty){
      return this.api.post('accounts/final_amount',billty);
    }


    getTyrepositions() {
      return this.api.get('meta/tyrepositions');
    }
    getFromDestinations(q) {
      return this.api.get('meta/from_destinations?q=' + q);
    }

    getToDestinations(q) {
      return this.api.get('meta/to_destinations?q=' + q);
    }

    getAccounts() {
      return this.api.get('meta/accounts');
    }

    getItems() {
      return this.api.get('meta/items');
    }

    getStateList() {
      return this.api.get('meta/statelists');
    }


    getTrafficAgents() {
      return this.api.get('meta/traffic_agents');
    }
    getDeptList() {
      return this.api.get('meta/deptlist');
    }

    getDraccountList(id) {
      return this.api.post('accounts/generate_draccountlist', {ade_type: id });
    }

    getCraccountList(id) {
      return this.api.post('accounts/generate_craccountlist', {ade_type: id });
    }

    getGodownList() {
      return this.api.get('meta/godownlist');
    }

    getTransactionTypeList() {
      return this.api.get('meta/transactiontypelist');
    }

    getCompanyList() {
      return this.api.get('meta/companylist');
    }
    getBrandList() {
      return this.api.get('meta/brandlist');
    }

    getItemsList() {
      return this.api.get('meta/itemslist');
    }

    getTruckLedgertrucknoList() {
      return this.api.get('meta/truckledgertrucknolist');
    }

    getTruckLedgerItemsList() {
      return this.api.get('meta/truckledgeritemslist');
    }

    getOrderLedgerItemsList() {
      return this.api.get('meta/orderledgeritemslist');
    }

    getScrapLedgerItemsList() {
      return this.api.get('meta/scrapledgeritemslist');
    }

    getAccountsLedgerList() {
      return this.api.get('meta/accountsledgerslist');
    }

    getAccountsItemsLedgerList() {
      return this.api.get('meta/accountsItemsledgerslist');
    }
    getIssuedbyList() {
      return this.api.get('meta/issuedbylist');
    }


    getPartyNames() {
      return this.api.get('meta/parties');
    }

    getSearchPartyNames(q) {
      return this.api.get('meta/search_parties?q=' + q);
    }

    getPlantRateList() {
      return this.api.get('plant_rates_list/plant_list');
    }

    searchPlantRateList(n, s) {
      return this.api.get('plant_rates_list/search_plant_list?name=' + n + '&site=' + s);
    }

    getSearchSite(q) {
      return this.api.get('meta/search_sites?q=' + q);
    }

    getConsignorNames() {
      return this.api.get('meta/consignor');
    }

    getCatNames() {
      return this.api.get('meta/catnames');
    }

    getCatNamesGroup() {
      return this.api.get('meta/catnamesgroup');
    }
    getTaNames() {
      return this.api.get('meta/trafficagentlist');
    }

    getTyreNames() {
      return this.api.get('meta/tyrelist');
    }

    getDriverNames() {
      return this.api.get('meta/Driverlist');
    }

    updateTruckPositionBiltyGen(data){
      return this.api.put('reports/update_truck_positions_bilty_gen/',data);
    }

    updateKmReadingJobworkreminder(data){
      return this.api.put('reports/update_km_reading_job_work_reminder/',data);
    }

    updateTruckEnginetype(data){
      return this.api.put('reports/update_truck_engine_type/',data);
    }

    getDiesalAccountNames() {
      return this.api.get('meta/diesalaccountnames');
    }

    getRoadExpAccountNames() {
      return this.api.get('meta/roadexpaccountnames');
    }

    getReceiptTypeNames() {
      return this.api.get('meta/receipttypenames');
    }

    getReceiptModeNames() {
      return this.api.get('meta/receiptmodenames');
    }

    getDfrom() {
      return this.api.get('meta/dfrom');
    }


    getDto() {
      return this.api.get('meta/dto');
    }
    getprefdestinationlist() {
      return this.api.get('meta/prefdestinationlist');
    }
    getUnits() {
      return this.api.get('meta/units');
    }

    getContains() {
      return this.api.get('meta/contains');
    }

    getConsigneeNames() {
      return this.api.get('meta/consignee');
    }

    // accounts master
    getCategory() {
      return this.api.get('meta/accountscategory');
    }

    getGroup() {
      return this.api.get('meta/accountsgroups');
    }

    getAccounttype() {
      return this.api.get('meta/accounttype');
    }
    getUnderledger() {
      return this.api.get('meta/underledger');
    }
    getcity() {
      return this.api.get('meta/city');
    }
    getstate() {
      return this.api.get('meta/state');
    }

    getcountry() {
      return this.api.get('meta/country');
    }

  }
