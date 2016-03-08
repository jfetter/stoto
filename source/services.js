"use strict";

angular.module('stoto')

.service('AuthService', function($http, ENV){
	this.logout = () => {localStorage.removeItem('token')}

	this.login = (username, password) => {
		return $http.post(`${ENV.API_URL}/users/login`, {username: username, password, password})
		//console.log("load user info and add cookie or info to local storage", username);
			
	}
	this.register = (username, password) => {
		return $http.post(`${ENV.API_URL}/users/register`, {username: username, password: password})
		//console.log("register new user", username)
	}
})

.service('PicService', function($http, UserService, ENV){
	

	this.assembleStories = (pics) =>{
			console.log(pics)
		let storyCollections = {};
		for(var i = 0; i < pics.length; i ++){
			var picture = pics[i];
			console.log(picture.story, "PICTURE")
			if (!storyCollections.hasOwnProperty(picture.story)){
				storyCollections[picture.story] = [picture];
			} else {
				storyCollections[picture.story].push(picture);
			}
		}
		console.log(storyCollections, "STORY COLLECTIONS")
		return storyCollections;
	}

	this.addStoto = pic =>{
		console.log(pic);
		return $http.post(`${ENV.API_URL}/pics/add`, pic)
	}
})

.service('UserService', function($http, jwtHelper, ENV){
	var userinfo;
	let decodeJWTToken = () =>{	
		if(localStorage.token){
		  var token = localStorage.token;
		  userinfo = jwtHelper.decodeToken(token);
	  } else {
	  	userinfo = "error"
	  }
	  console.log("JWT USER INFO", userinfo)
	  return userinfo;
	}
	this.userinfo = () => decodeJWTToken();

	this.loadinfo = () => {
		var userinfo = this.userinfo();
		var userid = userinfo._id;
		console.log(userid, "USER ID IN USER SERVICE")
		return $http.get(`${ENV.API_URL}/users/home/${userid}`)
	}

})