"use strict";

angular.module('stoto')

.controller('homeCtrl', function($scope, $state, PicService, AuthService){
	if (!localStorage.token) {
		$state.go('login');
	};
	console.log("ON HOME");

	// let userid = localStorage.userid;
	//$scope.userinfo = UserService.loadinfo(userid)

	$scope.user = {
		name: 'MR EXAMPLE', 
		stories:["STORY1","STORY2"], 
		pics: [{caption: 'test caption 1', image: "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"}, 
		{caption: 'test cap 2', image:"https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"} ]
	}

	$scope.showDetails = function(){
		$state.go('pics.details')
	}

})

