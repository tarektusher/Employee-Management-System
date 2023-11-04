
const employee = require('../models/Employee')

const registerEmployee = async ({
    firstname,
    lastname,
    emp_id,
    age,
    email,
    phonenumber,
    address,
    department,
    position,
    salary ,
    joiningdate,
    education,
    skills,}) =>{
    const emp = new employee ({firstname,
        lastname,
        emp_id,
        age,
        email,
        phonenumber,
        address,
        department,
        position,
        salary ,
        joiningdate,
        education,
        skills,});
    await emp.save();
}

module.exports = {
    registerEmployee,
}