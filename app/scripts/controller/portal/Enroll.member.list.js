
'use strict';

app.controller('EnrollMemberList', ['$scope', '$state', '$rootScope', '$stateParams', 'AlertTool', 'ToasterTool',
    'ProjectFactory', 'SessionFactory', 'SessionService', 'EnrollService', function ($scope, $state, $rootScope, $stateParams, AlertTool, ToasterTool,
        ProjectFactory, SessionFactory, SessionService, EnrollService) {

        init();

        function init() {
            getmemberdetail();
            $scope.confirmdev = confirmdev; 
            $scope.confirmButtonTxt = "确认";

        }

        function getmemberdetail() {

            ProjectFactory.enrollmember().get({
                'project_id': $stateParams.id
            }).$promise.then(function (data) {
                if (data.status == 200) {
                    $scope.memberdata = data.result;
                } else {
                    ToasterTool.error("获取失败", "请重试");
                }
            })


        }


        function confirmdev(username) {

            var project_id = $stateParams.id;
            var username = username;
            if($scope.confirmButtonTxt == '确认'){
                $scope.confirmButtonTxt = '取消'

                 ProjectFactory.confirmdev().post({

                'project_id': project_id,
                'username': username,

            }).$promise
                .then(function (data) {
                    if (data.result == 1) {
                        ToasterTool.success('确认开发者成功');

                    } else {
                        ToasterTool.error('错误', data.message);
                          //$scope.confirmButtonTxt = 'cancel';
                    }
                })

            }else{
                $scope.confirmButtonTxt = '确认';
            }
        
        }

        
    

        




    }]);




