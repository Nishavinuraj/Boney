const mongoose = require('mongoose');


const PlantsTruckPositionSchema = mongoose.Schema({
        site: {
            type: String,
            required: false
        },
        truckno: {
            type: String,
            required: false
        },
        destination: {
            type: String,
            required: false
        },
        pdate: {
            type: Date,
            default: Date.now,
            required: false
        },
        srno: {
            type: Number,
            required: false
        },
        cc: {
            type: Number,
            required: false
        },
        timein: {
            type: Date,
            required: false
        },
        placedtime: {
            type: Date,
            required: false
        },
        billtytime: {
            type: Date,
            required: false
        },
        km_reading: {
            type: String,
            required: false
        },
        remarks: {
            type: String,
            required: false
        },
        status: {
            type: String,
            default: "Active",
            required: true
        }

});
const PlantsTruckPosition = module.exports = mongoose.model('PlantsTruckPosition', PlantsTruckPositionSchema);