const express = require('express');
const userServices = require('../services/userServices');
const userRoutes = express.Router();
const User = require('../models/User');




userRoutes.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: 'Please provide username, email, and password' });
  }

  try {
    await userServices.registerUser({ username, email, password });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
});
userRoutes.get('/users', async (req, res) =>{
  try {
      const users = await User.find({});
      if(users){
          res.status(200).json(users);
      }
      else{
          res.status(404).json({message : `No users Record`});
      }
  } catch (error) {
      res.status(500).json({ message: error?.message });
  }
})
module.exports = userRoutes;
