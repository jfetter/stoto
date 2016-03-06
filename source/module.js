'use strict';

angular.module('stoto', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/home");

	$stateProvider

    .state('home', {url:"/home", templateUrl: "templates/home.html", controller: "homeCtrl"})
    .state('details', {url:"/details", templateUrl: "templates/details.html", controller: "detailsCtrl"})

})