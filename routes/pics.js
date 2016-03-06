"use strict";

var express = require('express');
var router = express.Router();
var Pic = require('../models/Pic')
var jwt = require('jwt-simple');


router.get("/:id", function(req, res){
  var id = req.params.id;
  
});

router.post('/', function(req, res){
  // console.log(req.body)
  // Pic.findByIdAndUpdate(req.body.userId, {$set : {avatar: req.body.image.base64}}, function(err, user){
  //   User.findById(req.body.userId, function(err, updatedUser){
  //     console.log(updatedUser)
  //     updatedUser.password = null;
  //     var userToken = jwt.encode(updatedUser, process.env.JWT_SECRET)
  //     res.cookie("token", userToken);
  //     res.send(updatedUser)
  //   })
  // })

})


module.exports = router;