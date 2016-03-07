'use strict';

angular.module('stoto')

.controller('navCtrl', function($scope, $state, AuthService){
	$scope.logout = function(){
		AuthService.logout();
		$state.go('login')
	};	

})