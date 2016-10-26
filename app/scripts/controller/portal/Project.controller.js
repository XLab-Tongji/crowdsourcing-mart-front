'use strict';

app.controller('ProjectController', ['$scope', '$state', '$rootScope', 'AlertTool', 'ToasterTool',
    'ProjectFactory', 'SessionFactory', 'SessionService', function ($scope, $state, $rootScope, AlertTool, ToasterTool,
        ProjectFactory, SessionFactory, SessionService) {

        init();

        function init() {
            $scope.addproject = addproject;
            getprojectlist();
        }
        function deleteform() {
            delete $scope.project_name;
            delete $scope.project_type;
            delete $scope.cost;
            delete $scope.delivery_cycle;
            delete $scope.warranty_cycle;
            delete $scope.address;
            delete $scope.description;

        }


        function addproject() {
            var project_name = $scope.project_name;
            var project_type = $scope.project_type;
            var cost = $scope.cost;
            var delivery_cycle = $scope.delivery_cycle;
            var warranty_cycle = $scope.warranty_cycle;
            var address = $scope.address;
            var description = $scope.description;
            var project_user_name = SessionService.getCurrentUser();
            var enroll_stop_time=$scope.enroll_stop_time;

            ProjectFactory.create().post({
                'project_name': project_name,
                'project_type': project_type,
                'cost': cost,
                'delivery_cycle': delivery_cycle,
                'warranty_cycle': warranty_cycle,
                'address': address,
                'description': description,
                'username': project_user_name,
                'enroll_stop_time':enroll_stop_time
                //  'file':file;
            }).$promise
                .then(function (data) {
                    if (data.result == 1) {
                        ToasterTool.success('需求创建成功');
                        //$state.go('auth');

                        deleteform();

                    } else {
                        ToasterTool.error('错误', data.message);
                    }
                });

        }

        function getprojectlist() {

            ProjectFactory.userlist().get({
                 'userid': SessionService.getCurrentUser()
            }

            ).$promise.then(function(data){

                var result=data.result;

            });
            
        }

    }]);
