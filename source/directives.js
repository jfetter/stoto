'use strict';

angular.module('stoto')

.directive('thumbNail', function(){
	return {
		restrict: "EA",
		template:"<div> <img src='pic.image' alt='image'> <span>{{pic.caption}}</span></div>"
	};
})