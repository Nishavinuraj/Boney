var express = require('express');
var router = express.Router();
var Billty = require('../models/billties');
var Tyrepositionmaster = require('../models/tyre-management/tyrepositionmaster');
var Tires = require('../models/tires');
var Trucks = require('../models/trucks');
var moment = require('moment');
var Single = require('../models/single');

/* GET users listing. */
router.get('/dispatch', function(req, res, next) {
	// Billty.find({lrdate: moment().format('YYYY-MM-DD')}).limit(10).then(function (result) {
	// 	res.send(result);
	// }).catch(function (err) {

    // });
    var todayDate = moment().format('YYYY-MM-DD') + "T00:00:00Z";
    
    // console.log(todayDate);
	Billty.aggregate([{
        $match: { lrdate: new Date(todayDate)},
    }, {
        $group: {
            _id: null,
            total: {
                $sum: "$actualweight"
            }
        }
    }]).then(function(result) {
        res.send(result.length > 0 ? result[0] : {});
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/advance', function(req, res, next) {
    var todayDate = moment().format('YYYY-MM-DD') + "T00:00:00Z";
	Billty.aggregate([{
        $match: { lrdate: new Date(todayDate)},
    }, {
        $group: {
            _id: null,
            total: {
                $sum: "$totaltruckexpences"
            }
        }
    }]).then(function(result) {
        res.send(result.length > 0 ? result[0] : {});
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/unbilled', function(req, res, next) {
	Billty.aggregate([{
        $match: {$or: [{ billno: 0 }, { billno: null }]},
    }, {
        $group: {
            _id: null,
            newamount: {
                $sum: "$newamount"
            }
        }
    }]).then(function(result) {
        res.send(result.length > 0 ? result[0] : {});
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/charts/advance', function(req, res, next) {
    var todayDate = moment().format('YYYY-MM-DD') + "T00:00:00Z";
    var startOfMonth = moment().startOf('month').format('YYYY-MM-DD')+ "T00:00:00Z";
    var startOfYear = moment().startOf('year').format('YYYY-MM-DD')+ "T00:00:00Z";
    // console.log("startOfMonth >>>>>>>",startOfMonth);
    // console.log("startOfYear  >>>>>>>",startOfYear);

    var matchCondition = "";
    if(req.query.period === 'today'){
        matchCondition = { lrdate: new Date(todayDate)};
    } else if(req.query.period === "month") {
        matchCondition = {
            lrdate : {"$gte": new Date(startOfMonth),
                      "$lte": new Date(todayDate)}
          }
    } else if (req.query.period === 'year') {
        matchCondition = {
            lrdate : {"$gte": new Date(startOfYear),
                      "$lte": new Date(todayDate)}
          }
    } else {
        matchCondition = { lrdate: new Date(todayDate)};
    }
    
    
    Billty.aggregate([{
        $match: matchCondition,
    }, {
        $group: {
            _id: "$site",
            total: {
                $sum: "$totaltruckexpences"
            }
        }
    }]).then(function(result) {
        res.send(result);
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/charts/dispatch', function(req, res, next) {
    var todayDate = moment().format('YYYY-MM-DD') + "T00:00:00Z";
    var startOfMonth = moment().startOf('month').format('YYYY-MM-DD')+ "T00:00:00Z";
    var startOfYear = moment().startOf('year').format('YYYY-MM-DD')+ "T00:00:00Z";
    // console.log("startOfMonth >>>>>>>",startOfMonth);
    // console.log("startOfYear  >>>>>>>",startOfYear);

    var matchCondition = "";
    if(req.query.period == 'today'){
        matchCondition = { lrdate: new Date(todayDate)};
    } else if(req.query.period == 'month') {
        matchCondition = {
            lrdate : {"$gte": new Date(startOfMonth),
                      "$lte": new Date(todayDate)}
          }
    } else if (req.query.period == 'year') {
        matchCondition = {
            lrdate : {"$gte": new Date(startOfYear),
                      "$lte": new Date(todayDate)}
          }
    } else {
        matchCondition = { lrdate: new Date(todayDate)};
    }

	Billty.aggregate([{
        $match: matchCondition,
    }, {
        $group: {
            _id: "$site",
            total: {
                $sum: "$actualweight"
            }
        }
    }]).then(function(result) {
        res.send(result);
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/charts/unbilled', function(req, res, next) {
    var todayDate = moment().format('YYYY-MM-DD') + "T00:00:00Z";
    var startOfMonth = moment().startOf('month').format('YYYY-MM-DD')+ "T00:00:00Z";
    var startOfYear = moment().startOf('year').format('YYYY-MM-DD')+ "T00:00:00Z";
    // console.log("startOfMonth >>>>>>>",startOfMonth);
    // console.log("startOfYear  >>>>>>>",startOfYear);

    var matchCondition = "";
    if(req.query.period == 'today'){
        matchCondition = { lrdate: new Date(todayDate)};
    } else if(req.query.period == 'month') {
        matchCondition = {$and: [{ 
            lrdate : {"$gte": new Date(startOfMonth),
                      "$lte": new Date(todayDate)}
        }, { 
            $or: [{ billno: 0 }, { billno: null }]     
         }]}
    } else if (req.query.period == 'year') {
        matchCondition = {$and: [{ 
            lrdate : {"$gte": new Date(startOfYear),
                      "$lte": new Date(todayDate)}
        }, { 
            $or: [{ billno: 0 }, { billno: null }]     
         }]}
    } else {
        matchCondition = { lrdate: new Date(todayDate)};
    }

    Billty.aggregate([{
        $match: matchCondition,
    }, {
        $group: {
            _id: "$site",
            newamount: {
                $sum: "$newamount"
            }
        }
    }]).then(function(result) {
        res.send(result);
    }).catch(function(err) {
        res.send(err);
    });
});

router.get("/tyreslist", function(req, res, next) {
    Tires.find()
    .sort({ name: 1 })
    .collation({ locale: "en_US", numericOrdering: true })
    .then(function(result) {
    res.send(result);
    })
    .catch(function(err) {
    res.send(err);
    });
});


router.get("/tyrepositionslist", function(req, res, next) {
    Tyrepositionmaster.find()
    .sort({ positionname: 1 })
    .then(function(result) {
    res.send(result);
    })
    .catch(function(err) {
    res.send(err);
    });
});

router.get('/truckslist', function(req, res, next) {
	Trucks.find({}, {
        "truckno":"$truckno",
        "vtype":"$type",
        "taname":"$spi",
        "purchasedate":"$purchasedate",
    }).then(function(result) {
        res.send(result);
    }).catch(function(err) {
        res.send(err);
    });
});

router.get('/itemcategoryslist', function(req, res, next) {
    var matchCondition = {};

    matchCondition = { field: 'ItemCategory' };

    Single.aggregate([
        {
            $match : matchCondition
        },{ 
            "$project": {
                "name": "$name" 
        }},
        { "$sort": { "name": 1 } }

    ]).then(function(result) {
        var name = [];
        result.forEach(element => {
            name.push({'itemcategory': element.name});
        });

        res.send(name);
    }).catch(function (err) {
        console.log(err);
        res.status(500).send(err);
    });
});

router.get('/unitslist', function(req, res, next) {
    var matchCondition = {};

    matchCondition = { field: 'Unit' };

    Single.aggregate([
        {
            $match : matchCondition
        },{ 
            "$project": {
                "name": "$name" 
        }},
        { "$sort": { "name": 1 } }

    ]).then(function(result) {
        var name = [];
        result.forEach(element => {
            name.push({'unit': element.name});
        });

        res.send(name);
    }).catch(function (err) {
        console.log(err);
        res.status(500).send(err);
    });
});


router.get('/godownslist', function(req, res, next) {
    var matchCondition = {};

    matchCondition = { field: 'Godown' };

    Single.aggregate([
        {
            $match : matchCondition
        },{ 
            "$project": {
                "name": "$name" 
        }},
        { "$sort": { "name": 1 } }

    ]).then(function(result) {
        var name = [];
        result.forEach(element => {
            name.push({'godown': element.name});
        });

        res.send(name);
    }).catch(function (err) {
        console.log(err);
        res.status(500).send(err);
    });
});


module.exports = router;