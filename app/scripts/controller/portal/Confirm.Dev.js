
'use strict';
// 确认开发者

app.controller('ConfirmDev', ['$scope', '$state', '$rootScope', 'AlertTool', 'ToasterTool',
    'ProjectFactory', 'SessionFactory', 'SessionService', 'EnrollService', function ($scope, $state, $rootScope, AlertTool, ToasterTool,
        ProjectFactory, SessionFactory, SessionService, EnrollService) {
 
        init();

        function init() {

            confirmdev();
            

        }
        

        function confirmdev() {
            var project_id = $stateParams.id;
            var username = $scope.username;

            ProjectFactory.create().post({

                'project_id': project_id,
                'username': username,

            }).$promise
                .then(function (data) {
                    if (data.result == 1) {
                        ToasterTool.success('确认开发者成功');

                    } else {
                        ToasterTool.error('错误', data.message);
                    }
                })
        }


    }]);
