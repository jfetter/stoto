"use strict";

var express = require('express');
var router = express.Router();
var User = require('../models/User')
var jwt = require('jwt-simple');


router.post('/login', function(req, res){
  var loginUser = req.body
  User.login(loginUser, function(err, user){
    if(user){
      var token = jwt.encode(user, process.env.JWT_SECRET);
      console.log(token)
      res.status(200).send(token)
    } else{
      res.status(404).send('Incorrect Username or Password!')
    }
  })
})



router.post('/register', function(req, res){
  User.register(req.body, function(err, user){
    if(user){ 
      console.log(user);
      var token = jwt.encode(user, process.env.JWT_SECRET);
      console.log(token)
      res.status(200).send(token)
    } else{
      res.status(404).send('username taken')
    }
  })
})

router.get("/load:id", function(req, res){
  //var id = req.params.id;
  
})//.populate('pics');

module.exports = router;