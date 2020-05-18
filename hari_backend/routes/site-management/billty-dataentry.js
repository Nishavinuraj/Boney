var express = require('express');
var router = express.Router();
var async = require('async');
var Billties = require('../../models/billties');
var checkLogin = require('../middlewares/checkLogin');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var momentTZ = require('moment-timezone');
var Accountsledgers = require('../../models/accountsledger');

router.get('/',checkLogin(),function (req, res, next) {
    let limit = req.query.limit ? req.query.limit : 5
    let offset = req.query.offset ? req.query.offset : 0
    let searchText = req.query.searchText;
    if (searchText !== undefined) {
        var regex = new RegExp(searchText, 'i');
        let sitematchCondition = {}
        if (req.user.role == 'ADMIN') {
            sitematchCondition = {'site': { $regex: regex }};
            console.log("ADMIN  >>>>>>>", sitematchCondition) ;
            Billties.find({'$or': [sitematchCondition, { 'lrno': { $regex: regex }}, { 'truckno': { $regex: regex }}, { 'consignne': { $regex: regex }}, { 'user': { $regex: regex }}]}).count(function (e, count) {  
                Billties.find({'$or': [sitematchCondition, { 'lrno': { $regex: regex }}, { 'truckno': { $regex: regex }}, { 'consignne': { $regex: regex }}, { 'user': { $regex: regex }}]}).skip(parseInt(offset)).limit(parseInt(limit)).exec(function(err, result) {    
                res.send({ records: result, totalRecords: count });   
                });
            });

        } else {
            sitematchCondition = { site: req.user.site };
            console.log("ADMIN  >>>>>>>", sitematchCondition) ;
            Billties.find({
                $and:[
                     {$or:[ 
                        { 'lrno': { $regex: regex }}, 
                        { 'truckno': { $regex: regex }}, 
                        { 'consignne': { $regex: regex }}, 
                        { 'user': { $regex: regex }}
                    ]},
                    sitematchCondition
                 ]}).count(function (e, count) {
                    Billties.find({
                        $and:[
                             {$or:[
                                { 'lrno': { $regex: regex }}, 
                                { 'truckno': { $regex: regex }},
                                { 'consignne': { $regex: regex }}, 
                                { 'user': { $regex: regex }}
                             ]},
                             sitematchCondition
                        ]}).skip(parseInt(offset)).limit(parseInt(limit)).exec(function(err, result) {    
                            res.send({ records: result, totalRecords: count })              
                 });
                });
        }
    }
    else {
        let matchCondition = {};
        if (req.user.role == 'ADMIN') {
            console.log("ADMIN  >>>>>>>");
            matchCondition = { };
        } else {
            matchCondition = { site: req.user.site };
        }

        Billties.count(function (e, count) {  
            Billties.find(matchCondition).sort({ lrdate: -1, lrno: -1, site: 1 }).skip(parseInt(offset)).limit(parseInt(limit)).exec(function(err, result) {    
               res.send({ records: result, totalRecords: count });   
            });
        });   
    }      
     
});

router.post('/', function (req, res, next) {
    // accounts posting starts
    var site = req.body.site;
    var truckno = req.body.truckno;
    var lrno = req.body.lrno;
    var ppaymentmode = req.body.ppaymentmode;
    var trandate = req.body.lrdate;
    var transtype = "Billty"

    var user_name;
    jwt.verify(req.headers['x-auth'], 'secretPassword', function(err, decoded) {

        if (err) {
            console.log("err   >>>>>>>", err);
            return res.status(401).json({ statusCode: 401, code: "Invalid Token...!" });
        }

        user_name = decoded.split(":")[0];
    });
    
    req.body.user = user_name;

    var d = new Billties(req.body);
    d.save(function (err, save) {
        req.body.transactiondetails.forEach(element => {
            // road expences posting
            var tpadebtamt= 0;
            var tpacrdtamt= element['amount'];
            var redate =  element['date'];
            var paymentmode = element['paymentmode']; 
            var tparefno = element['accountname'] +" paid agnst Lr No. "+lrno+" - "+req.body.truckno;

            var roadexpLeg = new Accountsledgers(
                {    
                    branch:site,
                    accountname:paymentmode,
                    avouno:lrno,
                    avoudt:redate,
                    arefno:tparefno,
                    adoctp:transtype,
                    adebtamt:tpadebtamt,
                    acrdtamt:tpacrdtamt,
                    user:req.params.user,
                    accounts_id: save['_id']
                });
            roadexpLeg.save(function(i_err,i_save) {
                console.log('Road Expences saveinfo ', i_err, i_save)
                // console.log(element['accounts_id'])
            });              

            var tpadebtamt= element['amount']; 
            var tpacrdtamt= 0;
            var tparefno = element['accountname'] +" paid agnst Lr No. "+lrno;
            var roadexp_Leg = new Accountsledgers(
                {    
                    branch:site,
                    accountname:truckno,
                    avouno:lrno,
                    avoudt:redate,
                    arefno:tparefno,
                    adoctp:"Billty",
                    adebtamt:tpadebtamt,
                    acrdtamt:tpacrdtamt,
                    user:req.params.user,
                    accounts_id: save['_id']
                });
            roadexp_Leg.save(function(i_err,i_save) {
                console.log('Road Expences 1 saveinfo ', i_err, i_save)
                // console.log(element['accounts_id'])
            });              

        }); 

        // accounts posting
        
        if(ppaymentmode == "To Be Billed"){
            var tparefno = "Freight from "+req.body.from+" to "+req.body.to+" agnst Lr No. "+req.body.lrno+" - "+req.body.truckno;
            var tpadebtamt=  req.body.newamount;
            var accountname = req.body.consigner  + " TPT INC";
            var tpacrdtamt= 0;

            var ALeg = new Accountsledgers(
                {    
                    branch:site,
                    accountname:accountname,
                    avouno:lrno,
                    avoudt:trandate,
                    arefno:tparefno,
                    adoctp:transtype,
                    adebtamt:tpadebtamt,
                    acrdtamt:tpacrdtamt,
                    user:req.params.user,
                    accounts_id: save['_id']
                });
            ALeg.save(function(i_err,i_save) {
                console.log('To be Billed Dr saveinfo ', i_err, i_save)
                // console.log(element['accounts_id'])
            });
    
            var tparefno = "Freight from "+req.body.from+" to "+req.body.to+" agnst Lr No. "+req.body.lrno+" - "+req.body.truckno;
            var accountname = req.body.consigner  + " UNBILLED A/C.";
            var tpadebtamt=  0;
            var tpacrdtamt= req.body.newamount;

            var BLeg = new Accountsledgers(
                {    
                    branch:site,
                    accountname:accountname,
                    avouno:lrno,
                    avoudt:trandate,
                    arefno:tparefno,
                    adoctp:transtype,
                    adebtamt:tpadebtamt,
                    acrdtamt:tpacrdtamt,
                    user:req.params.user,
                    accounts_id: save['_id']
                });
            BLeg.save(function(i_err,i_save) {
                console.log('To be Billed Cr saveinfo ', i_err, i_save)
                // console.log(element['accounts_id'])
            });
        }

        // transportation charges
        var tparefno = "Freight from "+req.body.from+" to "+req.body.to+" agnst Lr No. "+req.body.lrno+" - "+req.body.truckno;
        var accountname = req.body.consigner  + " TPT CHARGES";
        var tpadebtamt=  req.body.finalamount;
        var tpacrdtamt= 0;

        var CLeg = new Accountsledgers(
            {    
                branch:site,
                accountname:accountname,
                avouno:lrno,
                avoudt:trandate,
                arefno:tparefno,
                adoctp:transtype,
                adebtamt:tpadebtamt,
                acrdtamt:tpacrdtamt,
                user:req.params.user,
                accounts_id: save['_id']
            });
        CLeg.save(function(i_err,i_save) {
            console.log('transportation charges Dr saveinfo ', i_err, i_save)
            // console.log(element['accounts_id'])
        });

        var tparefno = "Freight from "+req.body.from+" to "+req.body.to+" agnst Lr No. "+req.body.lrno;
        var accountname = req.body.truckno;
        var tpadebtamt =  0; 
        var tpacrdtamt = req.body.finalamount;

        var DLeg = new Accountsledgers(
            {    
                branch:site,
                accountname:accountname,
                avouno:lrno,
                avoudt:trandate,
                arefno:tparefno,
                adoctp:transtype,
                adebtamt:tpadebtamt,
                acrdtamt:tpacrdtamt,
                user:req.params.user,
                accounts_id: save['_id']
            });
        DLeg.save(function(i_err,i_save) {
            console.log('transportation charges  Cr saveinfo ', i_err, i_save)
            // console.log(element['accounts_id'])
        });

        // diesal amount posting
        // if diesal amount > 0 
        if((req.body.damount != null)&&(req.body.damount != "0")&&(req.body.damount != 0)){
            var tparefno = req.body.dtransactiontype+" Slip No. "+req.body.dslipno+ " "+req.body.dqty+ " Ltr. diesel paid agnst Lr No. "+req.body.lrno+" - "+req.body.diesalaccountname;
            var accountname = req.body.truckno;
            var tpadebtamt=  req.body.damount;
            var tpacrdtamt= 0;

            var ELeg = new Accountsledgers(
                {    
                    branch:site,
                    accountname:accountname,
                    avouno:lrno,
                    avoudt:trandate,
                    arefno:tparefno,
                    adoctp:transtype,
                    adebtamt:tpadebtamt,
                    acrdtamt:tpacrdtamt,
                    user:req.params.user,
                    accounts_id: save['_id']
                });
            ELeg.save(function(i_err,i_save) {
                console.log('Diesal Dr saveinfo ', i_err, i_save)
                // console.log(element['accounts_id'])
            });
            var tparefno = req.body.dtransactiontype+" Slip No. "+req.body.dslipno+ " "+req.body.dqty+ " Ltr. diesel paid agnst Lr No. "+req.body.lrno+" - "+req.body.truckno;
            var accountname = req.body.diesalaccountname;
            var tpadebtamt =  0; 
            var tpacrdtamt = req.body.damount;

            var FLeg = new Accountsledgers(
                {    
                    branch:site,
                    accountname:accountname,
                    avouno:lrno,
                    avoudt:trandate,
                    arefno:tparefno,
                    adoctp:transtype,
                    adebtamt:tpadebtamt,
                    acrdtamt:tpacrdtamt,
                    user:req.params.user,
                    accounts_id: save['_id']
                });
            FLeg.save(function(i_err,i_save) {
                console.log('Diesal Cr saveinfo ', i_err, i_save)
                // console.log(element['accounts_id'])
            });

        };

        if((req.body.padvance != null)&&(req.body.padvance != "0")&&(req.body.padvance != 0)){

            var tparefno = "Advance paid agnst Lr No. "+lrno ;
            var accountname = req.body.truckno;
            var tpadebtamt = req.body.padvance;
            var tpacrdtamt = 0;
            var GLeg = new Accountsledgers(
                {    
                    branch:site,
                    accountname:accountname,
                    avouno:lrno,
                    avoudt:trandate,
                    arefno:tparefno,
                    adoctp:transtype,
                    adebtamt:tpadebtamt,
                    acrdtamt:tpacrdtamt,
                    user:req.params.user,
                    accounts_id: save['_id']
                });
            GLeg.save(function(i_err,i_save) {
                console.log('Party Advance Dr saveinfo ', i_err, i_save)
                // console.log(element['accounts_id'])
            });

            var tparefno = "Advance paid agnst Lr No. "+lrno ;
            var accountname = req.body.consigner;
            var tpadebtamt =  0; 
            var tpacrdtamt = req.body.padvance;

            var HLeg = new Accountsledgers(
                {    
                    branch:site,
                    accountname:accountname,
                    avouno:lrno,
                    avoudt:trandate,
                    arefno:tparefno,
                    adoctp:transtype,
                    adebtamt:tpadebtamt,
                    acrdtamt:tpacrdtamt,
                    user:req.params.user,
                    accounts_id: save['_id']
                });
            HLeg.save(function(i_err,i_save) {
                console.log('Party Advance Cr saveinfo ', i_err, i_save)
                // console.log(element['accounts_id'])
            });
        
        };

        res.send(save);
    });
});

router.delete ('/:id', function(req, res, next) {
    console.log('Billty Data Entry Delete', req.params.id);
    
    Billties.deleteOne({"_id": req.params.id}).then(function(deleteResult) {   
        Accountsledgers.deleteMany({ accounts_id: req.params.id }, function (err, result) {
        });
        res.send(deleteResult);
    }).catch(function(err) {
        res.send(err);
    });
});

router.post('/generate_lr_number', function(req, res) {
    let site = req.body.site
    Billties.find({ site: site }).count(function (e, count) { 
        res.send({count: count});
    })
});

module.exports = router;