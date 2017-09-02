(function() {
  'use strict';
    
  var _templateBase = './scripts';
  
  angular.module('app', [
    'ngRoute'
  ])
  .config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.when('/', {
      templateUrl: _templateBase + '/user/user.html' ,
      controller: 'UserCtrl'
    });
    $routeProvider.otherwise({ redirectTo: '/' });
  }]);
})();