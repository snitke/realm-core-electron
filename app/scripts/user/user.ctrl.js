(function() {
  'use strict';

    
  function UserCtrl(UserService, $scope, $q) {
    $scope.text = UserService.getText("Test 1");
  }
  UserCtrl.$inject = ["UserService", "$scope", "$q"];

  angular.module('app').controller('UserCtrl', UserCtrl);
})();