'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var Pic;

var picSchema = Schema({
  user: {type: Schema.Types.ObjectId, ref: "User"},
  catptch: String,
  image: String,
  date: Date,
  place: String,
  story: String,
  people: Array
});



Pic = mongoose.model('Pic', picSchema);
module.exports = Pic;