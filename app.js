var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

<<<<<<< HEAD
myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.name = 'Karina';
    
    $timeout(function() {
        $scope.name = 'Everybody';
    }, 3000);
 
}]);
=======
myApp.controller('mainController', function($scope, $log, $filter, $resource) {
    $scope.name = "john";
    $scope.formattedname = $filter('uppercase')($scope.name);
    
    $log.info($scope.name);
    $log.info($scope.formattedname);
    
    $log.log($resource);
    
});
>>>>>>> 4393146b9efbf77da7e5292e0f9eee4f86c814a5

