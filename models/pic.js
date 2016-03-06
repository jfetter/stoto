'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var Pic;

var picSchema = Schema({
  user: {type: Schema.Types.ObjectId, ref: "User"},
  catption: String,
  image: String,
  date: Date,
  place: String,
  album: String,
  people: Array,
  password: String
});



Pic = mongoose.model('Pic', picSchema);
module.exports = Pic;