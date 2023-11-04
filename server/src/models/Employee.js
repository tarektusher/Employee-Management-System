const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true,
    },
    lastname : {
        type : String,
        required : true,
    },
    emp_id : {
        type : String,
        required : true,
        unique : true,
    },
    age : {
        type : Number,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique  : true,
    },
    phonenumber : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    
    department : {
        type : String,
        required : true,
    },
    position : {
        type : String,
        required : true,
    },
    salary : {
        type : Number,
        required : true,
    },
    joiningdate : {
        type : String,
        required : true,
    },
   education : {
        degree : {
            type : String,
            required : true,
        },
        subject : {
            type : String,
            required : true,
        },
        universityname : {
            type : String,
            required : true,
        },
        gradutionyear : {
            type : String,
            required : true,
        }
    },
    skills : [{
        type : String,
        required : true,
    }]

   
},
    {
        timestamps : true
    }
   )

const Employee = mongoose.model('Employee',employeeSchema);
module.exports = Employee;