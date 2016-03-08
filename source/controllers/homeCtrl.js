"use strict";

angular.module('stoto')

.controller('homeCtrl', function($scope, $state, PicService, AuthService, UserService, $base64){
	if (!localStorage.token) {
		$state.go('login');
	};

	$scope.stories = PicService.mystories(); 
	
	let loadPageData =()=>{
		UserService.loadinfo()
		.then(res => {res.data
			console.log(res.data, "RES DATA LOAD HOME PAGE")
			$scope.user = res.data;
			$scope.pics = res.data.pics.map(function(item){
				item.image = `data:image/${item.filetype};base64,${item.image}`
				return item;
			})
		})
		.catch(err => {console.error(err)})
	} 
	loadPageData();

		// $scope.user= {
		// name: 'MR EXAMPLE', 
		// stories:["STORY1","STORY2"], 
		// pics: [{caption: 'test caption 1', image: "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"}, 
		// {caption: 'test cap 2', image:"https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"} ]

	$scope.showDetails = function(){
		$state.go('pics.details')
	}

	$scope.search = function(){
		console.log("SEARCH")
	}

})

