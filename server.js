"use strict";

var PORT = process.env.PORT || 3000;
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var app = express();
var path = require('path');
var cookieParser = require("cookie-parser");

var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/stoto");

app.set('views');
app.set("view engine", "jade");

//require('dotenv').load();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded ({extended: true}));
app.use(bodyParser.json());
//app.use(express.static("source"));
app.use(express.static(path.join(__dirname, 'source')));
app.use(cookieParser())

//ROUTES
//app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/users"));
app.use("/pics", require("./routes/pics"));

app.use('/', function(req, res){
	res.render('index')
});
// 404 HANDLER
app.use(function(req, res){
  res.status(404).render('404')
})


app.listen(PORT, function(){console.log("Listening on port", PORT); });

