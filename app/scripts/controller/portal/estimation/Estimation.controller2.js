'use strict';

app.controller('EstimationController2', ['$scope', '$state', '$rootScope', 'AlertTool', 'ToasterTool',
    'EstimationFactory2', 'SessionFactory', 'SessionService','Upload', function ($scope, $state, $rootScope, AlertTool, ToasterTool,
        EstimationFactory2, SessionFactory, SessionService,Upload) {

        init();

        function init() {
            $scope.nextStep = nextStep;         
        }

        function nextStep(){
            $state.go('app.main.estimationform3');
        }

    }]);



