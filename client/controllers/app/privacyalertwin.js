angular.module('app').controller('app_privacyalertwin', app_privacyalertwin);
function app_privacyalertwin($scope, app,$sce) {
    'use strict';
    app.init($scope);
    
    $scope.privacyinfo = $sce.trustAsHtml($scope.data.privacyInfo);
    
}