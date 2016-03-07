'use strict';

angular.module('stoto')

.directive('thumbNail', function(){
	return {
		restrict: "EA",
		template:"<span> <img class='thumbnail' ng-src='{{pic.image}}' alt='image'> <h3>{{pic.caption}}</h3></span>"
	};
})