var express = require('express');
var router = express.Router();
var async = require('async');
var Billties = require('../../models/billties');
// var Caddress = require('../../models/caddress');

// var Accountsledgers = require('../../models/accountsledger');

var moment = require('moment');
var momentTZ = require('moment-timezone');
// var VendorMaster = require('../../models/vendor_master')

// router.get('/consignee/:name', function(req, res) {
//     Caddress.findOne({ coname: req.params.site }, (err, item) => {
//       if (err) { return console.error(err); }
//       res.send(item);
//     });
// });

router.get('/', function (req, res, next) {
    let limit = req.query.limit ? req.query.limit : 5
    let offset = req.query.offset ? req.query.offset : 0
    let searchText = req.query.searchText;
    if (searchText !== undefined) {
        var regex = new RegExp(searchText, 'i');
        Billties.find({'$or': [{'site': { $regex: regex }}, { 'lrno': { $regex: regex }}, { 'truckno': { $regex: regex }}]}).count(function (e, count) {  
            Billties.find({'$or': [{ 'site': { $regex: regex }}, { 'lrno': { $regex: regex }}, { 'truckno': { $regex: regex }}]}).skip(parseInt(offset)).limit(parseInt(limit)).exec(function(err, result) {    
               res.send({ records: result, totalRecords: count });   
            });
        });
    }
    else {
        Billties.count(function (e, count) {  
            Billties.find().sort({ lrdate: -1 }).skip(parseInt(offset)).limit(parseInt(limit)).exec(function(err, result) {    
               res.send({ records: result, totalRecords: count });   
            });
        });   
    }      
     
});

router.post('/generate_lr_number', function(req, res) {
    let site = req.body.site
    Billties.find({ site: site }).count(function (e, count) { 
        res.send({count: count});
    })
});

module.exports = router;