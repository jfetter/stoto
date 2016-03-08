'use strict';

angular.module('stoto')

.controller('picCtrl', function($scope, $state, PicService, UserService){
		console.log("pic Ctrl")
		$scope.storriesArray = PicService.mystories;

		$scope.createStoto = event =>{
			event.preventDefault();
			var newStoto = {};
			var userinfo = UserService.userinfo()
			var userid = userinfo._id;
			var fileType = $('#imagefile').val()  
			var match = fileType.match(/\.\w+$/);
			//var file = files[0];
			newStoto.user = userid;
			newStoto.captch = $scope.captch;
  		newStoto.filetype = match ? match[0] : '';
			console.log(match, "FILE TYPE")
			newStoto.image = $scope.image; 
			newStoto.date = $scope.date; 
			newStoto.place = $scope.place;
			newStoto.story = $scope.story;
			if ($scope.names){
				newStoto.people = $scope.names.split(",")
			} else {
			newStoto.people =  null;
			}
			$scope.image = "";
			//$scope.album = "";
			$scope.captch ="";
			$scope.date = "";
			$scope.names = "";

			$scope.stotoform.$setPristine();
			PicService.addStoto(newStoto)
			.then(res => {
				console.log(res.body)
			})
			.catch(err => {
				console.error(err)
				swal({   title: "unable to upload file",
			 	text: "Try Again.",
			 	timer: 3000, 
			 	showConfirmButton: true, 
			 	closeOnConfirm: true });  
			})
		}


		// need to make function to sort through users pics to put them into albums
		// make sure album name is not already used

})