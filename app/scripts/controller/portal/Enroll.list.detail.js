
'use strict';

app.controller('EnrollListDetailController', ['$scope', '$state', '$rootScope', '$stateParams', 'AlertTool', 'ToasterTool',
    'ProjectFactory', 'SessionFactory', 'SessionService', 'EnrollService', function ($scope, $state, $rootScope, $stateParams, AlertTool, ToasterTool,
        ProjectFactory, SessionFactory, SessionService, EnrollService) {

        init();

        function init() {
            getprojectdetail();
            $scope.enrollproject = enrollproject;
            $scope.cancelenroll = cancelenroll;
            displayenrollcount($stateParams.id);
            $scope.gotomemberlist=gotomemberlist;

        }

        function getprojectdetail() {


            ProjectFactory.listbyid().get({

                'id': $stateParams.id

            }).$promise.then(function (data) {
                if (data.result != null) {
                    var resultbyid = data.result;
                    $scope.resultbyidlist = resultbyid[0];

                } else {
                    ToasterTool.error('获取失败', '请重试');
                }
            })

        }


        function gotomemberlist(){
            $state.go('app.main.projectdetail_member', {
                        "id": id
                    });
            // ProjectFactory.enrollmember().get({
            //     'project_id':$stateParams.id
            // }).$promise.then(function (data) {
            //     if(data.status==200)
            //         console.log(data);
            // })


        }


   

        function enrollproject() {

            ProjectFactory.enroll().post({
                "username": SessionService.getCurrentUser(),
                "project_id": $stateParams.id
            }).$promise.then(function (data) {
                if (data.status == 200) {
                    ToasterTool.success('报名成功');
                } else if (data.status == 500) {
                    ToasterTool.error('报名失败', '不能重复报名');
                }
            })
        }


        function cancelenroll() {

            ProjectFactory.cancelenroll().delete({
                "dev_username": SessionService.getCurrentUser(),
                "enroll_project_id": $stateParams.id
            }).$promise.then(function (data) {
                if (data.status == 200) {
                    ToasterTool.success("取消报名成功");
                } else if (data.status == 500) {
                    ToasterTool.error("报名取消失败");
                }
            })
        }


        function displayenrollcount(id) {

            EnrollService.getenrollcount(id, function (data) {
                $scope.count = data.result;
            });


        }

    }]);
