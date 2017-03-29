'use strict';

app.controller('EstimationController4', ['$scope', '$state', '$rootScope', 'AlertTool', 'ToasterTool',
    'EstimationFactory4', 'SessionFactory', 'SessionService','Upload', function ($scope, $state, $rootScope, AlertTool, ToasterTool,
        EstimationFactory4, SessionFactory, SessionService,Upload) {

        init();

        function init() {
            $scope.nextStep = nextStep;         
        }

        function nextStep(){
            $state.go('app.main.estimationreport');
        }

    }]);



