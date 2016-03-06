"use strict";

var express = require('express');
var router = express.Router();
var Pic = require('../models/User')
var jwt = require('jwt-simple');


router.get("/login:id", function(req, res){
  //var id = req.params.id;
  
})//.populate('pics');

router.post('/', function(req, res){

})


module.exports = router;