'use strict';

app.controller('MainController', ['$scope', '$state', 'ToasterTool', 'SessionService',function($scope,
    $state, ToasterTool, SessionService) {

    $scope.data = "test";

    init();

    function init(){
    }

}]);
