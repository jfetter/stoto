'use strict';

angular.module('stoto', ['ui.router', 'oitozero.ngSweetAlert'])

// .constant('ENV', {

//   API_URL: 'http://localhost:3000'
//   //API_URL: ''

// })

.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	//get rid of # in url (added 'base tag' to html also)
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise("/login");

	$stateProvider

    .state('home', {url:"/home", templateUrl: "templates/home.html", controller: "homeCtrl"})
    .state('login', {url:"/login", templateUrl: "templates/login.html", controller: "loginCtrl"})
    .state('pics', {url:"/pics", templateUrl: "<ui-view />", abstract: true})
    .state('pics.add', {url:"/add", templateUrl: "templates/addimage.html", controller: "PicCtrl"})
    .state('pics.album', {url:"/album", templateUrl: "templates/album.html", controller: "PicCtrl"})
    .state('pics.details', {url:"/details", templateUrl: "templates/details.html", controller: "PicCtrl"})
})