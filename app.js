var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    $scope.name = "Jane Doe";
    $scope.occupation = "Coder";
    
    $scope.getname = function() {
        return 'Name';
    }
    
    $scope.getname();
    console.log($scope);
});