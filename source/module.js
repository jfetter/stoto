'use strict';

angular.module('stoto', ['ui.router', 'oitozero.ngSweetAlert', 'naif.base64', 'base64', 'angular-jwt'])

.constant('ENV', {
  API_URL: 'http://localhost:3000'
  //API_URL: 'https://obscure-brook-51353.herokuapp.com/'
})

.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	//get rid of # in url (added 'base tag' to html also)
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise("/login");

	$stateProvider

    .state('home', {url:"/home", templateUrl: "templates/home.html", controller: "homeCtrl"})
    .state('login', {url:"/login", templateUrl: "templates/login.html", controller: "loginCtrl"})
    // .state('pics', {url:"/pics", templateUrl: "<ui-view />", abstract: true})
    .state('addPics', {url:"/add", templateUrl: "templates/addimage.html", controller: "picCtrl"})
    .state('picAlbum', {url:"/album", templateUrl: "templates/album.html", controller: "picCtrl"})
    .state('picDetails', {url:"/details", templateUrl: "templates/details.html", controller: "picCtrl"})
})