'use strict';

angular.module('stoto')

.directive('thumbNail', function(){
	return {
		restrict: "EA",
		template:"<span> <img class='thumbnail' src={{pic.image}} alt='image'> <h3>{{pic.captch}}</h3></span>"
	};
})
