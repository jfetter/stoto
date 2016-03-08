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
	let assembleStories = () =>{
		let storyCollections = {};
		//name: [array of pic objects]
		var pics = UserService.userinfo.pics;
		for(var i = 0; i < pics.length; i ++){
			var picture = pics[i];

			if (storyCollections.indexOf(picture.story) !== -1 ){
				story[picture.story] = [picture];
			} else {
				storyCollections[picture.story].push(picture);
			}
			// if (i === pics.length -1){
			// 	for (key in story){
			// 		stories.push story[0]
			// 	}
			
		}
		return storyCollections;
	}

	this.mystories = () => assembleStories;

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