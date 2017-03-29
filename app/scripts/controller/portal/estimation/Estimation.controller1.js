'use strict';

app.controller('EstimationController1', ['$scope', '$state', '$rootScope', 'AlertTool', 'ToasterTool',
    'EstimationFactory1', 'SessionFactory', 'SessionService','Upload', function ($scope, $state, $rootScope, AlertTool, ToasterTool,
        EstimationFactory1, SessionFactory, SessionService,Upload) {

        init();

        function init() {
            $scope.nextStep = nextStep;         
        }

        function nextStep(){
            $state.go('app.main.estimationform2');
        }

    }]);



