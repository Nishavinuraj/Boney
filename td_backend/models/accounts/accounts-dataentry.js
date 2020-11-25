const mongoose = require('mongoose');

const AccdataentrySchema = mongoose.Schema({
    site: {
        type: String,
        required: false
    }, ade_type: {
        type: String,
        required: true
    }, ade_number: {
        type: Number,
        required: true
    }, ade_date: {
        type: Date,
        required: true
    }, payment_type: {
        type: String,
        required: true
    }, department: {
        type: String,
        required: false
    }, against: {
        type: String,
        required: false
    }, draccount_name: {
        type: String,
        required: true
    }, craccount_name: {
        type: String,
        required: true
     }, amount: {
        type: Number,
        required: true
    }, naration: {
        type: String,
        required: false
    }, user: {
        type: String,
        required: false
    }
});


const Accdataentry = module.exports = mongoose.model('Accdataentry', AccdataentrySchema);