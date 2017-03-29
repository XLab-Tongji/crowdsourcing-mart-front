'use strict';

app.controller('EstimationIndexController', ['$scope', '$state', '$rootScope', 'AlertTool', 'ToasterTool',
    'EstimationIndexFactory', 'SessionFactory', 'SessionService','Upload', function ($scope, $state, $rootScope, AlertTool, ToasterTool,
        EstimationIndexFactory, SessionFactory, SessionService,Upload) {

        init();

        function init() {
            $scope.detailedEstimate = detailedEstimate;  
            $scope.showRecords = showRecords;     
        }

        function detailedEstimate(){
            $state.go('app.main.estimationform1');
        }
        function showRecords(){
            $state.go('app.main.estimationrecords');
        }

    }]);



