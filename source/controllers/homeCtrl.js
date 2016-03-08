"use strict";

angular.module('stoto')

.controller('homeCtrl', function($scope, $state, $timeout, PicService, AuthService, UserService, $base64){
	if (!localStorage.token) {
		$state.go('login');
	};
 
	$scope.storiesObj; 
	
	let loadPageData =()=>{
		UserService.loadinfo()
		.then(res => {res.data
			console.log(res.data, "RES DATA LOAD HOME PAGE")
			$scope.user = res.data;
			$scope.pics = res.data.pics.map(function(item){
				item.image = `data:image/${item.filetype};base64,${item.image}`
				return item;
			})
			console.log(res.data.pics, "RES DATA PICS")
			$timeout(function(){
				$scope.storiesObj = PicService.assembleStories($scope.pics)
			},100);
		})
		.catch(err => {console.error(err)})
	} 
	loadPageData();

/////IN PROGRESS////
$scope.$watch('stories', function(newVal, oldVal){
	var story = JSON.parse(newVal)
	story = story.story;
	console.log("stories new val", story.story)
	goToStory(story);
})

let goToStory = function(story){
	$state.go(`story:${story}`)
}
//////////

	$scope.showDetails = function(){
		$state.go('picDetails')
	}

	$scope.search = function(){
		console.log("SEARCH")
	}

})

