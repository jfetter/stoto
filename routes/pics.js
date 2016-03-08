"use strict";

var express = require('express');
var router = express.Router();
var Pic = require('../models/Pic');
var User = require('../models/User');

router.get("/:id", function(req, res){
  var id = req.params.id;
  
});

router.post('/add', function(req, res){
 var user = req.body.user;
 var pic = req.body;
 pic.image = pic.image.base64;
 console.log(pic);
 //var b64 = stoto.image;
 //Pic.uploadPic(b64, function(err, imageUrl){
  //  if (err){res.status(400).send(err)};
    //stoto.image = imageUrl;
     Pic.create(pic, function(err, savedPic) {
      console.log("IN PIC SAVE", savedPic)
      if (err){res.status(400).send(err)};
      var picId = savedPic._id;
      User.findByIdAndUpdate(user, {$push: {pics: picId}} ,function(err, foundUser){
        if (err){res.status(400).send(err.message)};
      res.status( 200).send(picId);
      })
    })
 // })
})
        // var newUser = new User;
        // newUser.username = username;
        // newUser.password = password;
        // console.log(newUser)
        // newUser.save(function(err, savedUser){

module.exports = router;

