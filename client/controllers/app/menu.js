angular.module('app').controller('app_menu', app_menu);
function app_menu($scope,$location,$window, app) {
    'use strict';
    app.init($scope);
    
    $scope.showDashboard = function(index) {
	    /*app.call('app.home');*/
	   /* app.action('app.home','http://hkdnte250:82/');
	   /* $window.location.href = 'http://hkdnte250:82/';
	    /*$location.path('http://hkdnte250:82/');*/
	    
       /* app.call('Home.showDashboard',{'index':index});*/
    
	};
}
