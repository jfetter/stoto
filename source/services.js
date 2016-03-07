"use strict";

angular.module('stoto')

.service('AuthService', function($http){
	this.logout = () => console.log("DELETE COOKIES OR LOCAL STORAGE")
	this.login = () => console.log("load user info and add cookie or info to local storage")
	this.register = () => console.log("register new user")
})

.service('PicService', function($http){
	this.insertPic = pic => console.log(pic)
})

.service('AuthService', function($http){
	this.login = user => console.log(user);
})