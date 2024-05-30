(function(){
    'use strict';
    
    angular.module('app', [])
    .controller('nameCalulatorController', function($scope){
        $scope.name = "";
        $scope.totalValue = 0;

        $scope.displayNameNumeric = function(){
            $scope.totalValue = calculateNumeric($scope.name)
        }
    });
    







    


    function calculateNumeric(string) {
        var results = 0;
        for(var i = 0; i < string.length; i++) {
            results += string.charCodeAt(i);
        }
        return results;
    };

})();