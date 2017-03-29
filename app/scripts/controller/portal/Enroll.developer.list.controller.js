
'use strict';

app.controller('EnrollDevlistController', ['$scope', '$state', '$rootScope', 'AlertTool', 'ToasterTool',
    'ProjectFactory', 'SessionFactory', 'SessionService', 'EnrollService', function ($scope, $state, $rootScope, AlertTool, ToasterTool,
        ProjectFactory, SessionFactory, SessionService, EnrollService) {

        init();

        function init() {

            getenrolllist();
            

        }

        function getenrolllist() {

            ProjectFactory.getenrolldetail().get({

                "username":SessionService.getCurrentUser()

            }).$promise.then(function (data) {
                if (data.result != null) {
                    var result = data.result;
                    $scope.result = result;

                } else {
                    ToasterTool.error('获取失败', '请重试');
                }
            })
        }


    }]);
