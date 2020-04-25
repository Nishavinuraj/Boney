const mongoose = require('mongoose');
const departmentsSchema = mongoose.Schema({
    deptname:{
        type: String,
        required: false
    }
});


const Departments = module.exports = mongoose.model('Department', departmentsSchema);