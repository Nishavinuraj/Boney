import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MetaService } from 'src/app/shared/services/meta.service';
import { Router } from '@angular/router';
import { SitemanagementService } from '../../sitemanagement.service';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
declare var moment: any;


@Component({
  selector: 'app-add-billty-dataentry',
  templateUrl: './add-billty-dataentry.component.html',
  styleUrls: ['./add-billty-dataentry.component.scss']
})
export class AddBilltyDataentryComponent implements OnInit {
  public bdeForm: any;
  public billtyForm: any;
  public tran_type: any;
  siteOptions = [];
  usertype: any;
  site_name: any;

  loading = false;

  // public siteOptions: any;
  public consignor_options: any;
  public consignee_options: any;
  public receipttype_options: any;
  public receiptmode_options: any;
  public paymentmode_options: any;
  public roadexpaccountname_options: any;
  public process: string;
  public rateBy: any;
  public gradE: any;
  public productUnit: any;
  public newCommission: any;
  public commRates: any;
  public truckSpi: any;
  public transactiondetails: any;
  public unloading_addresses = [];
  public truckPositions: any;
  public lrNos = [];
  public lrField = false;
  public teField = false;
  public dqField = false;
  public unloadingAddressMappings: any;
  public diesalaccountname_options: any;
  units = [];
  froms = [];
  tos = [];
  contains = [];
  public currentDate = new Date();


  constructor(
    private fb: FormBuilder,
    private ss: SitemanagementService,
    private router: Router,
    private metaService: MetaService,
    private toastr: ToastrService,
    private calendar: NgbCalendar
  ) {
    this.usertype = this.metaService.getSiteFromStorage().role;
    this.site_name = this.metaService.getSiteFromStorage().site;
   }

  ngOnInit() {
    this.buildForm();
    this.bdeForm.controls['lrdate'].setValue(this.calendar.getToday());
    this.bdeForm.controls['loadingdate'].setValue(this.calendar.getToday());
    this.bdeForm.controls['diesaldate'].setValue(this.calendar.getToday());
    this.bdeForm.controls.transactiondetails.patchValue([{'date': this.calendar.getToday()}]);


    this.bdeForm.get('diesalaccountname').valueChanges.subscribe(val => {
      var date = this.bdeForm.controls['lrdate'].value;
      var mstr = date.month;
      var dstr = date.day;
      if ((mstr + '').toString().length === 1) {
        mstr = "0" + mstr;
      }

      if((dstr + '').toString().length === 1) {
        dstr = '0' + dstr;
      }
      var dateStr = date.year + "-" + mstr + "-" + dstr;
      this.metaService.getRate(val,dateStr).subscribe(res => {
        this.bdeForm.patchValue({drate:res['rate']})
      });
    });

    this.bdeForm.get('diesaldate').valueChanges.subscribe(date => {
      var vendor = this.bdeForm.controls['site'].value;
      var mstr = date.month;
      var dstr = date.day;
      if((mstr + '').toString().length === 1) {
        mstr = "0" + mstr;
      }

      if((dstr + '').toString().length === 1) {
        dstr = "0" + dstr;
      }
      var dateStr = date.year + "-" + mstr + "-" + dstr;
      this.metaService.getRate(vendor,dateStr).subscribe(res => {
      this.bdeForm.patchValue({drate:res['rate']})
      });
    });

    this.bdeForm.get('to').valueChanges.subscribe(val => {
      var site = this.bdeForm.controls['site'].value;
      if(site) {
        var lrno = this.bdeForm.controls['lrno'].value;
        if(lrno) {
          this.performLrOperation(lrno);
        }
        this.metaService.getDestinationKm(site,val).subscribe(res => {
            this.bdeForm.patchValue({'newkm':res['km']});
       });

      }
    });

    this.bdeForm.get('newkm').valueChanges.subscribe(val => {
      var site = this.bdeForm.controls['site'].value;
      var tcc = this.bdeForm.controls['tcc'].value;
      var tyre = this.bdeForm.controls['tyre'].value;
      var km = val;
      if(tcc && tyre && site && km) {
        this.metaService.getDqty(tyre,tcc,site).subscribe(res => {
          var tavg = res['tavg'];
          var value = Number(km) / Number(tavg)
          this.bdeForm.patchValue({'dqty':value.toFixed(0)});
        });
      }

    });

    this.bdeForm.get('tyre').valueChanges.subscribe(val => {
      var site = this.bdeForm.controls['site'].value;
      var tcc = this.bdeForm.controls['tcc'].value;
      var tyre = val;
      var km = this.bdeForm.controls['newkm'].value;
      if(tcc && tyre && site && km) {
        this.metaService.getDqty(tyre,tcc,site).subscribe(res => {
          var tavg = res['tavg'];
          var value = Number(km) / Number(tavg)
          this.bdeForm.patchValue({'dqty':value.toFixed(0)});
        });
      }

    });

    this.bdeForm.get('tcc').valueChanges.subscribe(val => {
      var site = this.bdeForm.controls['site'].value;
      var tyre = this.bdeForm.controls['tyre'].value;
      var tcc = val;
      var km = this.bdeForm.controls['newkm'].value;
      if(tcc && tyre && site && km) {
        this.metaService.getDqty(tyre,tcc,site).subscribe(res => {
          var tavg = res['tavg'];
          var value = Number(km) / Number(tavg)
          this.bdeForm.patchValue({'dqty':value.toFixed(0)});
        });
      }
    });

    // site value changes
    this.bdeForm.get('site').valueChanges.subscribe(val => {
      this.bdeForm.patchValue({tplrno: '', unloadingtype:'Fix', ppaymentmode: 'To Be Billed', calculatedweight: 'Weight'});
      this.bdeForm.patchValue({contains: 'Cement', unit:'Bags', dtransactiontype: 'Credit', product: 'Bag'});
      this.bdeForm.patchValue({podpendings: 'Yes', podok:'No'});

      // getting consignor details
      this.metaService.getConsigner(val).subscribe(res => {
        this.bdeForm.controls['consigner'].setValue(res['consigner']);
        this.bdeForm.controls['from'].setValue(res['from']);
        this.metaService.getRateType(val).subscribe(ret => {
            this.rateBy = ret['rateBy']
        })
      });


      var tcc = this.bdeForm.controls['tcc'].value;
      var tyre = this.bdeForm.controls['tyre'].value;
      var site = val;
      var km = this.bdeForm.controls['newkm'].value;
      if(tcc && tyre && site && km) {
        this.metaService.getDqty(tyre,tcc,site).subscribe(res => {
          var tavg = res['tavg'];
          var value = Number(km) / Number(tavg)
          this.bdeForm.patchValue({'dqty':value.toFixed(0)});
        });
      }
      var to = this.bdeForm.controls['to'].value;
      if(to) {
        this.metaService.getDestinationKm(val,to).subscribe(res => {
            this.bdeForm.patchValue({'newkm':res['km']});
        });
      }

      // default loading address
      this.metaService.getConsignee(val).subscribe(res => {
        this.bdeForm.controls['consignne'].setValue(res['consignee']);
        var unloadAdd = [];
        this.unloadingAddressMappings = res['info'];
        res['info'].forEach(dim => {
          unloadAdd.push(dim.unloadingaddress);
        });
        this.unloading_addresses = unloadAdd;
      });

      // getting to destination form plant rate list
      this.metaService.getToDestinationsFromPlantRateList(val).subscribe(res => {
        console.log('To destination', res['info'] );
        var toDestination = [];
        res['info'].forEach(dim => {
          toDestination.push(dim.destination);
        });
        this.tos = toDestination;
      });


      this.metaService.getLrData(val,false).subscribe(res => {
          var lrs = [];
          this.truckPositions = res['result'];
          res['result'].forEach(tp => {
              lrs.push(tp.lrno)
          });
          this.lrNos = lrs;
      });

      // petrol pump to fetch
      this.metaService.getSitePetrolPump(val).subscribe(res => {
        var sitePetrolpump = [];
        res['info'].forEach(dim => {
          sitePetrolpump.push(dim.vendername);
        });
        this.diesalaccountname_options = sitePetrolpump;
      });

    });

    // consginee value changes getting its unloading address
    this.bdeForm.get('consignne').valueChanges.subscribe(val => {
      //
      this.bdeForm.controls['unloadingaddress'].setValue(null);

      this.metaService.getConsigneeByName(val).subscribe(res => {
        var unloadAdd = [];
        this.unloadingAddressMappings = res['info'];
        res['info'].forEach(dim => {
          unloadAdd.push(dim.unloadingaddress);
        });
        this.unloading_addresses = unloadAdd;
      });
    });



    this.bdeForm.get('mannual').valueChanges.subscribe(val => {
      this.bdeForm.controls['tplrno'].setValue(null);
      this.bdeForm.controls['lrno'].setValue(null);
      this.lrField = val;

      var site = this.bdeForm.controls['site'].value;
      this.metaService.getLrData(site,val).subscribe(res => {
        var lrs = [];
        this.truckPositions = res['result'];
        res['result'].forEach(tp => {
            lrs.push(tp.lrno)
        })
        this.lrNos = lrs
      });
    });

    this.bdeForm.get('mannualroadexp').valueChanges.subscribe(val => {
      this.teField = val;
    });

    this.bdeForm.get('mannualdqty').valueChanges.subscribe(val => {
      this.dqField = val;
    });

    /// tplrno changes getting inforamtion from truck position
    this.bdeForm.get('tplrno').valueChanges.subscribe(val => {
          this.performLrOperation(val);
    });

    this.bdeForm.get('unloadingexpences').valueChanges.subscribe(val => {
      this.podcal(this.bdeForm.get('unloadingtype').value);
    });

    this.bdeForm.get('unloadingaddress').valueChanges.subscribe(val => {
      if(this.unloadingAddressMappings) {
        this.unloadingAddressMappings.forEach(mapping => {
          if(mapping.unloadingaddress === val) {
            this.bdeForm.controls['contactperson'].setValue(mapping['contactperson']);
            this.bdeForm.controls['phoneno'].setValue(mapping['phoneno']);
          }
        });
      }
    });

    this.bdeForm.get('mannualpetrolpump').valueChanges.subscribe(val => {
      this.bdeForm.controls['diesalaccountname'].setValue(null);
      this.metaService.getDiesalAccountNames().subscribe(siteInfo => {
        // console.log('>>>>diesalaccountname_options', siteInfo['result']);
        this.diesalaccountname_options = siteInfo['result'];
      });
    });

    this.bdeForm.get('mannualtodest').valueChanges.subscribe(val => {
      this.bdeForm.controls['to'].setValue(null);
      this.metaService.getprefdestinationlist().subscribe(siteInfo => {

        this.tos = siteInfo['result'];
        console.log('All Destination list >>>>>', this.tos);
      }, err => {
        console.log('err   >>>', err);
      });

    });
    this.bdeForm.get('truckexpences').valueChanges.subscribe(val => {
      console.log('Truck Expences ',this.bdeForm.value.truckexpences);

      // this.bdeForm.controls.transactiondetails[0].amount.setValue(null);
      this.bdeForm.controls.transactiondetails.patchValue([{'amount': 0}]);
      this.bdeForm.controls.transactiondetails.patchValue([{'amount': this.bdeForm.value.truckexpences}]);
      this.podcal(this.bdeForm.get('unloadingtype').value);
      this.partyweightratechange();

    });

    // this.bdeForm.controls.transactiondetails.valueChanges.subscribe(changes => {
    //   console.log(this.bdeForm.value.transactiondetails[0].amount)
    //   this.bdeForm.patchValue({'truckexpences':this.bdeForm.value.transactiondetails[0].amount})
    //   this.podcal(this.bdeForm.get('unloadingtype').value)
    //   this.partyweightratechange();
    // });

    this.getOptions();
    this.getSites();

    this.bdeForm.get('unloadingtype').valueChanges.subscribe(val => {
      this.podcal(val);
    });

    this.bdeForm.get('rate').valueChanges.subscribe(val => {
      this.transratechange();
    });

    this.bdeForm.get('actualweight').valueChanges.subscribe(val => {
      this.bdeForm.controls['cweight'].setValue(null);
      this.bdeForm.controls['cweight'].setValue(this.bdeForm.controls['actualweight'].value);
      this.partyweightratechange();
    });

    this.bdeForm.get('product').valueChanges.subscribe(val => {
      this.bdeForm.controls['unit'].setValue(null);
      if (this.bdeForm.controls['product'].value === "Bag") {
        this.productUnit = "Bags";
        var xx,pack;

        xx = Number(this.bdeForm.controls['actualweight'].value);
        pack = Number(xx) * 20;
        this.bdeForm.get('packages').setValue(Number(pack));
      }  else  {
        this.productUnit = "Per MT";
        this.bdeForm.controls['packages'].setValue(this.productUnit);
      }
      this.bdeForm.controls['unit'].setValue(this.productUnit);
    });

    this.bdeForm.get('newrate').valueChanges.subscribe(val => {
      this.partyweightratechange();
    });

    this.bdeForm.get('dqty').valueChanges.subscribe(val => {
      this.dieselqtyratechange();
    });

    this.bdeForm.get('drate').valueChanges.subscribe(val => {
      this.dieselqtyratechange();
    });

    this.bdeForm.get('vamount').valueChanges.subscribe(val => {
      this.transratechange();
    });

    this.bdeForm.get('paymentcharge').valueChanges.subscribe(val => {
      this.transratechange();
    });
  }

  performLrOperation(val) {
    if(this.truckPositions) {
      this.truckPositions.forEach(tp => {
        if (tp.lrno === val) {
          this.bdeForm.controls['lrno'].setValue(val);
          this.bdeForm.controls['srno'].setValue(tp['srno']);
          this.bdeForm.controls['truckno'].setValue(tp['truckno']);
          this.bdeForm.controls['tkmr'].setValue(tp['km_reading']);
          this.bdeForm.controls['tcc'].setValue(tp['cc']);
        };
      });
    }

    // getting information of trucks
    this.bdeForm.get('truckno').valueChanges.subscribe(val => {
      this.metaService.getTruckDetails(this.bdeForm.get('truckno').value).subscribe(result => {
        this.bdeForm.controls['vehicletype'].setValue(result['vtype']);
        this.bdeForm.controls['drivername'].setValue(result['drivername']);
        this.bdeForm.controls['ownername'].setValue(result['ownername']);
        this.bdeForm.controls['panno'].setValue(result['newpan']);
        this.bdeForm.controls['spi'].setValue(result['spi']);
        this.bdeForm.controls['tyre'].setValue(result['type']);
        this.bdeForm.controls['actualweight'].setValue(result['newcarring']);
        this.bdeForm.controls['cweight'].setValue(result['newcarring']);
        this.bdeForm.controls['paymentcharge'].setValue(result['newpaymentcharge']);
        // need to bring its commission type
        // this.newCommission = result['newcommission'];
        // this.commRates = result['newrates'];

        let newCommission;
        let commRates;
        let typeoft;
        let vnewCarring ;
        this.gradE = this.bdeForm.controls['grade'].value;

        vnewCarring = Number(result['newcarring']);
        newCommission = result['newcommision'];
        commRates = result['newrates'];

        console.log('Carrying capacity of truck ', vnewCarring);
        console.log('Rate by  ', this.rateBy);
        console.log('Commission Type ', newCommission);
        console.log('Commission Rates ', commRates);

        if (this.rateBy === "TON") {

        }
          if(this.gradE = 'Trade') {
            if(vnewCarring > 26) {
              this.truckSpi = 1101;
            } else if ((vnewCarring > 11) && (vnewCarring <= 26)) {
              this.truckSpi = 1102;
            } else if (vnewCarring <= 11) {
              this.truckSpi = 1105;
            }
        } else if (this.gradE = 'Non Trade') {
            if(vnewCarring > 26) {
              this.truckSpi = 1103;
            } else if (vnewCarring <= 26) {
              this.truckSpi = 1104;
            }
        } else if (this.gradE = 'Bulker') {
            if(vnewCarring > 26) {
              this.truckSpi = 1201;
            } else if (vnewCarring <= 26) {
              this.truckSpi = 1202;
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


        let data = {
          site:this.bdeForm.controls['site'].value,
          consignor:this.bdeForm.controls['consigner'].value,
          destination:this.bdeForm.controls['to'].value,
           spi:this.truckSpi
        };

        console.log(' Rates Data >>>>', data);

        if(data.site && data.consignor && data.destination && data.spi) {
            console.log('True');

          this.metaService.getfrieght(data).subscribe(res => {

            console.log('Party Freight F', res);

            // this.bdeForm.controls['newrate'].setValue(result['freight']);
            this.bdeForm.patchValue({'newrate': Number(res['freight'])});

            console.log(' newcommission >>>' , result['newcommision'] );
            console.log(' Freight >>>' , Number(res['freight']) );
            console.log(' CommRates >>>' , result['newrates']);


            if(result['newcommision'] === 'Weight') {
              this.bdeForm.patchValue({'rate':(Number(res['freight']) - Number(result['newrates'])) + ''});

            } else if (result['newcommision'] === 'Percentage') {

              this.bdeForm.patchValue({'rate':(Number(res['freight']) - (Number(res['freight']) * (Number(result['newrates'] / 100))))})
            }
            let billtyd = {
              vehicletype:result['vtype'],
              consignor:data.consignor,
              site:data.site,
              destination:data.destination
            }

            console.log('Road Expences >>>', billtyd);

            this.metaService.getRoadExpanses(billtyd).subscribe(namr => {
                const currentsite = this.bdeForm.controls['site'].value + ' CASH';
                console.log(' Current Site ', currentsite);
                // console.log(' Unloading expences', namr['newunloading']);

                this.bdeForm.controls.transactiondetails.patchValue([{'accounttype': 'Advance'}]);
                this.bdeForm.controls.transactiondetails.patchValue([{'accountname': 'Road Expences'}]);
                this.bdeForm.controls.transactiondetails.patchValue([{'paymenttype': 'Cash'}]);
                this.bdeForm.controls.transactiondetails.patchValue([{'paymentmode': (this.bdeForm.controls['site'].value + ' CASh')}]);
                // this.bdeForm.controls.transactiondetails.patchValue([{'amount': namr['newamount']}]);
                this.bdeForm.patchValue({'truckexpences':namr['newamount']});
                // this.bdeForm.patchValue({'unloadingexpences':namr['newunloading']});
                this.podcal(this.bdeForm.get('unloadingtype').value);
                this.partyweightratechange();
            })
          });
        }

      });
    });
  }

  partyweightratechange() {
    var a,b,c;
    a = Number(this.bdeForm.controls["actualweight"].value);
    b = Number(this.bdeForm.controls["newrate"].value);
    c = Number(a) * Number(b);
    c = Math.round(c * 100) / 100;
    this.bdeForm.patchValue({'newamount':Number(c)});
    this.podcal(this.bdeForm.controls['unloadingtype'].value);
}

dieselqtyratechange() {

    var a,b,c;
    a = this.bdeForm.controls["dqty"].value;
    b = this.bdeForm.controls["drate"].value;
    c = Number(a) * Number(b);
    c = Math.round(c * 100) / 100;
    this.bdeForm.patchValue({'damount':Number(c)});
}

 transratechange() {
    var a,b,c;
    a = Number(this.bdeForm.controls["rate"].value);
    b = Number(this.bdeForm.controls["cweight"].value);
    this.podcal(this.bdeForm.controls['unloadingtype'].value);

    c = Number(a) * Number(b);
    c = Math.round(c * 100) / 100 ;

    // this.bdeForm.controls["vamount"].value= c;
    this.bdeForm.controls['vamount'].setValue(Number(c));

    var paymentcharge =  this.bdeForm.controls['paymentcharge'].value;


    var virtualtotal = Number(c) - Number(paymentcharge);
    virtualtotal = Math.round(virtualtotal * 100) / 100;

    this.bdeForm.controls['finalamount'].setValue(Number(virtualtotal));

  }

  podcal(value) {

    if (this.bdeForm.controls['product'].value === "Bag") {
      this.productUnit = "Bags";
      var xx,pack;

      xx = Number(this.bdeForm.controls['actualweight'].value);
      pack = Number(xx) * 20;
      this.bdeForm.get('packages').setValue(Number(pack));
    }  else  {
      this.productUnit = "Per MT";
      this.bdeForm.controls['packages'].setValue(this.productUnit);
    }


    var yy,xy,yx,zz;

    // xx=Number(this.bdeForm.controls['actualweight'].value);
    // pack = Number(xx)*20;
    // this.bdeForm.get('packages').setValue(Number(pack));

    if(value === "Per MT") {
      xx = Number(this.bdeForm.controls['actualweight'].value);
      yy = Number(this.bdeForm.controls["unloadingexpences"].value);

      this.bdeForm.patchValue({'actualexpences':(xx * yy)});

      xy = Number(this.bdeForm.controls["actualexpences"].value);
      yx = Number(this.bdeForm.controls["truckexpences"].value);

      this.bdeForm.patchValue({'totaltruckexpences':(xy + yx)});

      /* var bbb = this.bdeForm.get("totaltruckexpences").value;
      console.log(bbb);
      this.bdeForm.get('okokok').setValue(Number(bbb)); */

    } else {
      yy = Number(this.bdeForm.controls["unloadingexpences"].value);

      this.bdeForm.patchValue({"actualexpences":yy});

      xy = Number(this.bdeForm.controls["actualexpences"].value);
      yx = Number(this.bdeForm.controls["truckexpences"].value);

      this.bdeForm.patchValue({"totaltruckexpences":xy + yx});
     /*  var bbb = this.bdeForm.get("totaltruckexpences").value;
      document.getElementById('okokok').value= Number(bbb); */
    }

  }

  getAllToDestination() {
    this.metaService.getDto().subscribe(siteInfo => {
      // console.log('>>>>To Destination', siteInfo['result']);
      this.tos = siteInfo['result'];
    });
  }

  getSites() {
    this.loading = true;
    this.metaService.getSites().subscribe((res: any) => {
        this.loading = false;
        this.siteOptions = res;
        if (this.usertype === 'ADMIN') {
          // this.bdeForm.controls['site'].setValue(this.siteOptions[0].branch_name);
        } else {
          this.bdeForm.controls['site'].setValue(this.site_name);
        }
      },
      err => {
        this.loading = false;
      }
    );
  }

  private getOptions() {
    this.metaService.getConsignorNames().subscribe(siteInfo => {
      // console.log('>>>>consignor_options', siteInfo['result']);
      this.consignor_options = siteInfo['result'];
    });


    this.metaService.getTransactionTypeList().subscribe(siteInfo => {
      // console.log('>>>>Transaction_type ', siteInfo['result']);
      this.tran_type = siteInfo['result'];
    });

    this.metaService.getConsigneeNames().subscribe(siteInfo => {
      // console.log('>>>>consignee_options', siteInfo['result']);
      this.consignee_options = siteInfo['result'];
    });


    this.metaService.getRoadExpAccountNames().subscribe(siteInfo => {
      // console.log('>>>>roadexpaccountname_options', siteInfo['result']);
      this.roadexpaccountname_options = siteInfo['result'];
    });

    this.metaService.getReceiptTypeNames().subscribe(siteInfo => {
      // console.log('>>>>receipttype_options', siteInfo['result']);
      this.receipttype_options = siteInfo['result'];
    });

    this.metaService.getReceiptModeNames().subscribe(siteInfo => {
      // console.log('>>>>receiptmode_options', siteInfo['result']);
      this.paymentmode_options = siteInfo['result'];
      this.receiptmode_options = siteInfo['result'];
    });

    this.metaService.getUnits().subscribe(siteInfo => {
      // console.log('>>>>Units', siteInfo['result']);
      this.units = siteInfo['result'];
    });

    this.metaService.getDfrom().subscribe(siteInfo => {
      // console.log('>>>>From Destination', siteInfo['result']);
      this.froms = siteInfo['result'];
    });


    this.metaService.getContains().subscribe(siteInfo => {
      // console.log('>>>>Contains', siteInfo['result']);
      this.contains = siteInfo['result'];
    });

  }
  public buildForm(): void {
    /* this.transForm = this.fb.group(
      {
        'truckexpences':[''],
        'unloadingexpences':[''],
        'unloadingtype':['Fix'],
        'actualexpences':[''],
        'totaltruckexpences':['']
      }); */
    this.bdeForm = this.fb.group(
      {
        'site': ['', [Validators.required]],
        'tplrno': ['', [Validators.required]],
        'lrno': ['', [Validators.required]],
        'lrdate': [new Date()],
        'consigner': ['', [Validators.required]],
        'consignne': ['', [Validators.required]],
        'unloadingaddress': [''],
        'contactperson': [''],
        'phoneno': [''],
        'from': ['', [Validators.required]],
        'to': ['', [Validators.required]],
        'mannualtodest':[''],
        'grade':[''],
        'substation': [''],
        'srno': ['', [Validators.required]],
        'vehicletype': ['', [Validators.required]],
        'truckno': ['', [Validators.required]],
        'brokername': [''],
        'drivername': [''],
        'idno': [''],
        'ownername': [''],
        'panno': [''],
        'spi': [''],
        'tyre': [''],
        'cweight': [0, [Validators.required]],
        'rate': [0],
        'vamount': [0],
        'paymentcharge': [0],
        'finalamount': [0],
        'tkmr': [0],
        'tcc': [0],
        'mannual':[''],
        'ppaymentmode': [''],
        'loadingdate': [''],
        'unloadingdate': [null],
        'packages': [''],
        'actualweight': [0],
        'mannualaweight': [''],
        'calculatedweight': [''],
        'contains': ['', [Validators.required]],
        'unit': ['', [Validators.required]],
        'newrate': [0],
        'newamount': [0],
        'fmno': [''],
        'newkm': [0, [Validators.required]],
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
        'diesalaccountname': ['',[Validators.required]],
        'mannualpetrolpump':[''],
        'dqty': [0],
        'mannualdqty':[''],
        'drate': [0],
        'damount': [0],
        'dslipno': [''],
        'poddate': [null],
        'podpendings': [''],
        'podok': [''],
        'podremarks': [''],
        'billno': [''],
        'billdate': [null],
        'billremarks': [''],
        'truckexpences': [0],
        'unlaodingexpences': [0],
        'actualexpences': [0],
        'totaltruckexpences': [0],
        'mannualroadexp':[''],
        'newinvoicedate':[null],
        'product':[''],
        'unloadingexpences':[''],
        'unloadingtype':['Fix'],
        'transactiondetails': this.fb.array([
        ])
      }
    );
    this.addTcmitems();
  }

  getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var d = dd + '';
    var m = mm + '';
    var td = today.toString();
    var yyyy = today.getFullYear();
    if(dd < 10) {d = '0' + dd;} if(mm < 10) {m = '0' + mm;} td = yyyy + '-' + m + '-' + d;
    return td;

  }
  private initItems() {
    return this.fb.group({
      'date': [this.getCurrentDate()],
      'accounttype': [''],
      'accountname': ['',[Validators.required]],
      'amount': [0],
      'paymenttype': [''],
      'paymentmode': [''],
      'remark': [''],
    });
  }
  addTcmitems() {
    const control = <FormArray>this.bdeForm.controls['transactiondetails'];
    control.push(this.initItems());
  }
  removeItems(i: number) {
    const control = <FormArray>this.bdeForm.controls['transactiondetails'];
    control.removeAt(i);
  }
  public removed(value: any): void {
    const product_id = value['id'];
    const transactiondetails = this.bdeForm.controls['transactiondetails'].value;
    var index = transactiondetails.map(function (items) { return items.product_id; }).indexOf(product_id);
    this.removeItems(index);
  }


  findInvalidControls() {
    const invalid = [];
    const controls = this.bdeForm.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    return invalid;
}

  public save() {
/*     [disabled]="!bdeForm.valid || process == 'saving'"
 */
    if(this.bdeForm.valid) {
      let lrdate;
    if (this.bdeForm.controls['lrdate'].value) {
      const dt = this.bdeForm.controls['lrdate'].value.year + '-' +
        this.bdeForm.controls['lrdate'].value.month + '-' +
        this.bdeForm.controls['lrdate'].value.day;
      lrdate = new Date(this.bdeForm.controls['lrdate'].value.year, this.bdeForm.controls['lrdate'].value.month - 1, this.bdeForm.controls['lrdate'].value.day,23,59,59);
      console.log(lrdate);
    } else {
      lrdate = moment().format();
      lrdate = new Date(lrdate.getFullYear(),lrdate.getMonth(),lrdate.getDay(),23,59,59);
    }

    let newinvoicedate;
    if (this.bdeForm.controls['newinvoicedate'].value) {
      const dt = this.bdeForm.controls['newinvoicedate'].value.year + '-' +
        this.bdeForm.controls['newinvoicedate'].value.month + '-' +
        this.bdeForm.controls['newinvoicedate'].value.day;
      newinvoicedate = moment(dt, 'YYYY-MM-DD').format();
      console.log(newinvoicedate);
    } else {
      newinvoicedate = moment().format();
    }

    let unloadingdate;
    if (this.bdeForm.controls['unloadingdate'].value) {
      const dt = this.bdeForm.controls['unloadingdate'].value.year + '-' +
        this.bdeForm.controls['unloadingdate'].value.month + '-' +
        this.bdeForm.controls['unloadingdate'].value.day;
      unloadingdate = moment(dt, 'YYYY-MM-DD').format();
      console.log(unloadingdate);
    } else {
      unloadingdate = moment().format();
    }


    let loadingdate;
    if (this.bdeForm.controls['loadingdate'].value) {
      const dt = this.bdeForm.controls['loadingdate'].value.year + '-' +
        this.bdeForm.controls['loadingdate'].value.month + '-' +
        this.bdeForm.controls['loadingdate'].value.day;
      loadingdate = moment(dt, 'YYYY-MM-DD').format();
      console.log(loadingdate);
    } else {
      loadingdate = moment().format();
    }

    let padate;
    if (this.bdeForm.controls['padate'].value) {
      const dt = this.bdeForm.controls['padate'].value.year + '-' +
        this.bdeForm.controls['padate'].value.month + '-' +
        this.bdeForm.controls['padate'].value.day;
      padate = moment(dt, 'YYYY-MM-DD').format();
      console.log(padate);
    } else {
      padate = moment().format();
    }

    let billdate;
    if (this.bdeForm.controls['billdate'].value) {
      const dt = this.bdeForm.controls['billdate'].value.year + '-' +
        this.bdeForm.controls['billdate'].value.month + '-' +
        this.bdeForm.controls['billdate'].value.day;
      billdate = moment(dt, 'YYYY-MM-DD').format();
      console.log(billdate);
    } else {
      //billdate = moment().format();
    }

    let diesaldate;
    if (this.bdeForm.controls['diesaldate'].value) {
      const dt = this.bdeForm.controls['diesaldate'].value.year + '-' +
        this.bdeForm.controls['diesaldate'].value.month + '-' +
        this.bdeForm.controls['diesaldate'].value.day;
      diesaldate = moment(dt, 'YYYY-MM-DD').format();
      console.log(diesaldate);
    } else {
      diesaldate = moment().format();
    }

    let poddate;
    if (this.bdeForm.controls['poddate'].value) {
      const dt = this.bdeForm.controls['poddate'].value.year + '-' +
        this.bdeForm.controls['poddate'].value.month + '-' +
        this.bdeForm.controls['poddate'].value.day;
      poddate = moment(dt, 'YYYY-MM-DD').format();
      console.log(poddate);
    } else {
      poddate = moment().format();
    }


    console.log ('Billty Data Entry >> Save', this.bdeForm.value);

    let saveData = this.bdeForm.value;
    saveData.lrdate = lrdate;
    saveData.padate = padate;
    saveData.unloadingdate = unloadingdate;
    saveData.billdate = billdate;
    saveData.diesaldate = diesaldate;
    saveData.loadingdate = loadingdate;
    saveData.newinvoicedate = newinvoicedate;
    let dval = saveData.transactiondetails[0].date;
    let fdval = dval ? dval.year + "-" + (dval.month < 10 ? "0" + dval.month : dval.month) + "-" + (dval.day < 10 ? "0" + dval.day : dval.day) : this.getCurrentDate();
    saveData.transactiondetails[0].date = fdval;

    if (saveData.newamount > saveData.vamount && saveData.newamount > saveData.totaltruckexpences) {
      this.process = 'saving';
      this.ss.addBde(this.bdeForm.value).subscribe(miInfo => {
        this.process = 'done';
        let data = {
          site: saveData.site,
          truckno: saveData.truckno,
          lrno: saveData.lrno,
          tkmr: saveData.tkmr
        };

        this.metaService.updateKmReadingJobworkreminder(data).subscribe(kmrInfo => {
          this.metaService.updateTruckPositionBiltyGen(data).subscribe(res => {
            this.router.navigate(['/site-management/billty-dataentry']);
          }, error => { this.process = 'done'; console.log(error);
          });

        });



      });
    } else {
      this.toastr.error("Party Amount must be greater than Transporter Amount and Road Expenses.");
    }
    }

  }

  private generateConsignee(value) {
    console.log(' generate consignee ');
    this.metaService.getConsigneeNames().subscribe(siteInfo => {
      console.log('>>>>consignee_options', siteInfo['result']);
      this.consignee_options = siteInfo['result'];
    });
}
/* public generateLrno() {
  const site = this.bdeForm.controls.site.value;
  this.ss.getLrNumberDetails(site).subscribe(lrInfo => {
    this.bdeForm.controls.lrno.setValue(lrInfo['count'] + 1);
  }, error => { console.log(error);
   });
} */

}
