"use strict";

angular.module('stoto')

.controller('loginCtrl', function($scope, $state, AuthService){
	
	$scope.register = function(username, password){
		AuthService.register(username, password)
		.then(res => {
			//console.log(res.data);
			swal({   title: "account created!",
			 	text: "Redirecting to home page",
			 	timer: 3000, 
			 	showConfirmButton: true, 
			 	closeOnConfirm: true });  
			localStorage.setItem('token', res.data);  
			$state.go('home');
		})
		.catch(err => {
			console.error(err)
			swal({   title: "username taken",
		 	text: "Try Again.",
		 	timer: 3000, 
		 	showConfirmButton: true, 
		 	closeOnConfirm: true });  
		})
			$scope.username = '';
			$scope.password = '';
	}	;

	$scope.login = function(username, password){
		AuthService.login(username, password)
		.then(res => {
		//	console.log(res.data);
			localStorage.setItem('token', res.data); 
			$state.go('home');
		})
		.catch(err => {
			console.error(err)
			swal({   title: "invalid username or password!",
		 	text: "Try Again.",
		 	timer: 3000, 
		 	showConfirmButton: true, 
		 	closeOnConfirm: true });  
		})
			$scope.username = '';
			$scope.password = '';
	}	;


})