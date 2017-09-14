angular.module('traleApp')
	.controller('NavController', NavController);

function NavController($http, $location, $window) {
	var vm = this;
	vm.isActiveTab = function(url) {
    var currentPath = $location.path().split('/')[1];
    return (url === currentPath ? 'active' : '');
  }
};