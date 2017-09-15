 angular.module('traleApp', ['ngRoute']).config(config);
 function config($routeProvider) {
 	$routeProvider
 	.when('/', {
 		templateUrl: 'views/traleMain.html'
 	})
 	.when('/tralePortfolio', {
 		templateUrl: 'views/tralePortfolio.html'
 	})
 	.when('/tralePricing', {
 		templateUrl: 'views/tralePricing.html'
 	})
 	.when('/traleContact', {
 		templateUrl: 'views/traleContact.html'
 	})
 	.otherwise({
 		redirectTo:'/'
 	});
 }