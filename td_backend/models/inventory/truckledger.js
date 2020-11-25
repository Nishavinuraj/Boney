const mongoose = require('mongoose');
const TruckledgerSchema = mongoose.Schema({
    site: {
        type: String,
        required: false
    },
    truckno: {
        type: String,
        required: false
    },
    itemaccname: {
        type: String,
        required: false
    },
    avouno: {
        type: Number,
        required: false
    },
    arefno: {
        type: String,
        required: false
    },
    adoctp: {
        type: String,
        required: false
    },
    adebtamt: {
        type: String,
        required: false
    },
    acrdtamt: {
        type: String,
        required: false
    },
    avoudt: {
        type: String,
        required: false
    },
    dqty: {
        type: String,
        required: false
    },
    cqty: {
        type: String,
        required: false
    },
    pname: {
        type: String,
        required: false
    },
    user: {
        type: String,
        required: false
    },
    truck_id: {type: String, required: true}
});


const Truckledger = module.exports = mongoose.model('Truckledger', TruckledgerSchema);

