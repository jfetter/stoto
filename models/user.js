'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jwt = require('jwt-simple');
var moment = require('moment');
var bcrypt = require('bcrypt');

var User;

var userSchema = Schema({
  username: String,
  avatar: String,
  password: String,
  pics: [{type: Schema.Types.ObjectId, ref: "Pic"}]
});

userSchema.statics.register = function(user, cb){
  var username = user.username;
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, password) {
      User.find({username: username}, function(err, user){
        if (err || user[0]){return console.log(err || "Username already exists")}
        var newUser = new User;
        newUser.username = username;
        newUser.password = password;
        newUser.save(function(err, savedUser){
          savedUser.password = null;
          cb(err, savedUser)
        })
      })
    });
  });
}

userSchema.statics.login = function(user, cb){
  var username = user.username;
  var password = user.password;

  User.findOne({username: username}, function(err, dbUser){
    if(err || !dbUser) return cb(err || 'Incorrect username or password');
    bcrypt.compare(user.password, dbUser.password, function(err, correct){
      if(err || !correct) return cb(err || 'Incorrect username or password');
      dbUser.password = null;
      dbUser.avatar = null
      cb(null, dbUser);
    })
  })
}

User = mongoose.model('User', userSchema);
module.exports = User;