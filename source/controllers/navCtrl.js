'use strict';

angular.module('stoto')

.controller('navCtrl', function($scope, $state, AuthService){
	$scope.logout = function(){
		AuthService.logout();
	};	
	$scope.login = function(){
		AuthService.login();
	}	;
	$scope.register = function(){
		AuthService.register();
	};

})