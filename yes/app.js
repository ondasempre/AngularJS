/* simple function to use buttons */
(function(angular) {
  'use strict';

var app = angular.module('burla', []);


app.controller('SpicyController', ['$scope', function($scope) {

    $scope.si = function() {
        $scope.spice = 'Happy !!! EHEE EHE EHE';
    };

    $scope.no = function() {
        $scope.spice = 'depressing .... :-(';
    };
}]);
})(window.angular);