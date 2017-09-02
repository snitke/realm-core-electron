(function () {
  'use strict';
  // var mysql = require('mysql');
  
  // // Creates MySql database connection
  // var connection = mysql.createConnection({
  //     host: "localhost",
  //     user: "root",
  //     password: "password",
  //     database: "customer_manager"
  // });
  
  function UserService($q) {

    return {
      getText: GetText
    };
    
    function GetText(initText) {
      return initText + " This is the text";
    }
  }
  UserService.$inject = ["$q"];
    
  angular.module('app').service('UserService', UserService);
})();