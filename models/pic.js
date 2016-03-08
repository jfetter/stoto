'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var aws = require('aws-sdk');
var s3 = new aws.S3();
var uuid = require('node-uuid');

var Pic;

var picSchema = Schema({
  user: {type: Schema.Types.ObjectId, ref: "User"},
  captch: String,
  filetype: String,
  image: String,
  date: Date,
  place: String,
  story: String,
  people: Array
});

picSchema.statics.uploadPic = (b64, cb) =>{
		console.log(b64, "IN PICSCHEMA")
	  var data = new Buffer(b64.toString(), 'base64'); 
	  var key = uuid.v1() 
	  console.log(data, "buffer")
	  var params = {
	    Bucket: process.env.AWS_BUCKET,
	    Key: key, 
	    Body: data
	  };

	  s3.putObject(params, function(err) {
	  	console.log("MADE IT TO S3")
	    if(err) return cb(err);
	    var url = process.env.AWS_URL + process.env.AWS_BUCKET + '/' + key;
	    console.log("URL", url)
	    return cb (url)
	  });
}

Pic = mongoose.model('Pic', picSchema);
module.exports = Pic;