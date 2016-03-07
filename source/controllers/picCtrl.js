'use strict';

angular.module('stoto')

.controller('picCtrl', function($scope, $state, PicService){
		console.log("pic Ctrl")

		$scope.createStoto = function(event){
			event.preventDefault();
			var newStoto = {};
			newStoto.image = $scope.image; 
			newStoto.album = $scope.album;
			newStoto.captch = $scope.captch;
			newStoto.date = $scope.date;
			newStoto.names = $scope.names.split(",");
			console.log(newStoto);
			$scope.image = "";
			//$scope.album = "";
			$scope.captch ="";
			$scope.date = "";
			$scope.names = "";
			$scope.stotoform.$setPristine();
		}

		// need to make function to sort through users pics to put them into albums


})