const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = express();
employeeRoutes.use(bodyParser.json());
const employeeServices = require('../services/employeeServices');
const Employee = require('../models/Employee');


//! API to create a user 
employeeRoutes.post('/employee', async (req,res) =>{
    
    const {
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
        skills,
      } = req.body;
    try {
        
        await employeeServices.registerEmployee({
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
            skills,
          });
        res.status(201).json({ message: 'Employee registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
})

//! API to update a user
employeeRoutes.put('/employee/:id', async (req,res) =>{
    try {
        const emp = {
            emp_id : req.params.id,
        } 
        const body = req.body;
        const employee = await Employee.findOneAndUpdate(emp,body,{new : true});
        if(employee){
            res.json(employee);
        }
        else {
            res.status(404).json({message : `Employee is not Found`});
        }
        
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
})

//! API to delete a User
employeeRoutes.delete('/employee/:id', async(req, res) =>{
    console.log(req.body.emp_id);
    console.log(req.body.email);
     const { 
        emp_id,
        email
    } = req.body
    try {
        const employee_id = await Employee.findOne({emp_id});
        const employee_email = await Employee.findOne({email});
        if(employee_id && employee_email){
            if(JSON.stringify(employee_email) === JSON.stringify(employee_id)){
                await Employee.findOneAndDelete({emp_id});
                res.status(200).json({message : 'Employee Deleted successfully'});
            }
            else{
                res.status(404).json({message : 'Employee Email and Employee Id does not match '})
            }
        }
        else{
            res.status(404).json({message : `Employee is not Found`});
        }
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
})
//! API to get all User

employeeRoutes.get('/employee', async (req, res) =>{
    try {
        const employees = await Employee.find({});
        if(employees){
            res.json(employees);
        }
        else{
            res.status(404).json({message : `No Employee Record`});
        }
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
})

//! API to get a specific user
employeeRoutes.get('/employee/:id', async(req, res) =>{
    try {
        
            emp_id = req.params.id;
            email = req.params.email;
        
        const employee_id = await Employee.findOne({emp_id});
        const employee_email = await Employee.findOne({email});

        if(employee_id && employee_email){
            res.status(200).json(employee_id);
        }
        else{
            res.status(404).json({message : `Employee is not Found`});
        }
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
})
module.exports = employeeRoutes;