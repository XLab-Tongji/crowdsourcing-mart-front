'use strict';

app.controller('EstimationController3', ['$scope', '$state', '$rootScope', 'AlertTool', 'ToasterTool',
    'EstimationFactory3', 'SessionFactory', 'SessionService','Upload', function ($scope, $state, $rootScope, AlertTool, ToasterTool,
        EstimationFactory3, SessionFactory, SessionService,Upload) {

        init();

        function init() {
            $scope.nextStep = nextStep;         
        }

        function nextStep(){
            $state.go('app.main.estimationform4');
        }

    }]);



