'use strict';

angular.module('stoto', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/auth");

	$stateProvider

    .state('home', {url:"/home", templateUrl: "templates/home.html", controller: "homeCtrl"})
    .state('auth', {url:"/login", templateUrl: "templates/auth.html", controller: "authCtrl"})
    .state('pics', {url:"/pics", templateUrl: "<ui-view />", abstract: true})
    .state('pics.add', {url:"/add", templateUrl: "templates/album.html", controller: "PicCtrl"})
    .state('pics.album', {url:"/album", templateUrl: "templates/album.html", controller: "PicCtrl"})
    .state('pics.details', {url:"/details", templateUrl: "templates/details.html", controller: "PicCtrl"})
})