
'use strict';

app.controller('DevelopListDetail', ['$scope', '$state', '$rootScope', 'AlertTool', 'ToasterTool',
    'ProjectFactory', 'SessionFactory', 'SessionService', 'EnrollService', function ($scope, $state, $rootScope, AlertTool, ToasterTool,
        ProjectFactory, SessionFactory, SessionService, EnrollService) {

        init();

        function init() {

            getdeveloplist();
            

        }

        function getdeveloplist() {

            ProjectFactory.getdevelopdetail().get({

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
