var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', ['$scope', '$log', function(a, b) {
   b.info(a);
}]);

