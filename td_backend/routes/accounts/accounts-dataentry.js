var express = require('express');
var router = express.Router();
var async = require('async');
var Accdataentry = require('../../models/accounts/accounts-dataentry');
var checkLogin = require('../middlewares/checkLogin');

router.get('/',checkLogin(),function (req, res, next) {
    let limit = req.query.limit ? req.query.limit : 5
    let offset = req.query.offset ? req.query.offset : 0
    let searchText = req.query.searchText;
    if (searchText !== undefined) {
        var regex = new RegExp(searchText, 'i');
        let sitematchCondition = {}
        if (req.user.role == 'ADMIN') {
            console.log("ADMIN  >>>>>>>");
            sitematchCondition = {'site': { $regex: regex }};
        } else {
            sitematchCondition = { site: req.user.site };
        }
        Accdataentry.find({'$or': [sitematchCondition, { 'brokername': { $regex: regex }}]}).count(function (e, count) {  
            Accdataentry.find({'$or': [sitematchCondition, { 'brokername': { $regex: regex }}]}).skip(parseInt(offset)).limit(parseInt(limit)).exec(function(err, result) {    
               res.send({ records: result, totalRecords: count });   
            });
        });
    }
    else {
        let matchCondition = {};
        if (req.user.role == 'ADMIN') {
            console.log("ADMIN  >>>>>>>");
            matchCondition = { };
        } else {
            matchCondition = { site: req.user.site };
        }

        Accdataentry.count(function (e, count) {  
            Accdataentry.find(matchCondition).sort({ brokername: 1 }).skip(parseInt(offset)).limit(parseInt(limit)).exec(function(err, result) {    
               res.send({ records: result, totalRecords: count });   
            });
        });   
    }      
     
});

router.get('/:id', function(req, res) {
    Accdataentry.findOne({ _id: req.params.id }, (err, item) => {
      if (err) { return console.error(err); }
      res.send(item);
    });
});

router.post('/', function (req, res, next) {
    var im = new Accdataentry({
        site: req.body.site,
        brokername: req.body.brokername,
        mobileno: req.body.mobileno,
        panno: req.body.panno,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        pinno: req.body.pinno

    });
    im.save(function (err, result) {
        res.send(result);
    });
});


router.put('/', function (req, res, next) {
    let item_id = req.query.id
    Accdataentry.update({_id:item_id},{$set:{    
        site: req.body.site,
        brokername: req.body.brokername,
        mobileno: req.body.mobileno,
        panno: req.body.panno,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        pinno: req.body.pinno
    }})
    .then(function(result) {
        console.log('item_id',item_id)
        res.send(result);
    }).catch(function(err) {
        console.log('error', err)
        res.send(err);
    });
});

router.delete ('/:id', function(req, res, next) {
    console.log('Site profile Delete', req.params.id);
    
    Accdataentry.deleteOne({"_id": req.params.id}).then(function(deleteResult) {   
        
        res.send(deleteResult);

    }).catch(function(err) {
        res.send(err);
    });
});



module.exports = router;
