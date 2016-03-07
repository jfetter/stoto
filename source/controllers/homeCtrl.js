"use strict";

angular.module('stoto')

.controller('homeCtrl', function($scope, $state, PicService){
	console.log("ON HOME");
	$scope.user = {
		name: 'MR EXAMPLE', 
		albums:["ALBUM1","ALBUM2"], 
		pics: [{caption: 'test caption 1', image: "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"}, 
		{caption: 'test cap 2', image:"https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"} ]
	}
})

