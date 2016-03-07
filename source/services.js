"use strict";

angular.module('stoto')

.service('AuthService', function($http){
	this.logout = () => {localStorage.removeItem('token')}

	this.login = (username, password) => {
		return $http.post('users/login', {username: username, password, password})
		//console.log("load user info and add cookie or info to local storage", username);
			
	}
	this.register = (username, password) => {
		return $http.post('users/register', {username: username, password: password})
		//console.log("register new user", username)
	}
})

.service('PicService', function($http){
	this.insertPic = pic => console.log(pic);
})

.service('UserService', function($http){
	this.loadinfo = (userid) => {
		$http.get(`/users/load/${userid}`)
		.then(res => res.data)
		.catch(err => console.err(err))
	}

})