
'use strict';

app.controller('EnrollListController', ['$scope', '$state', '$rootScope', 'AlertTool', 'ToasterTool',
    'ProjectFactory', 'SessionFactory', 'SessionService', 'EnrollService', function ($scope, $state, $rootScope, AlertTool, ToasterTool,
        ProjectFactory, SessionFactory, SessionService, EnrollService) {

        init();

        function init() {
            getalllist();
            $scope.getprojectdetail = getprojectdetail;
            $scope.enrollproject = enrollproject;
            // $scope.displayenrollcount=displayenrollcount;

        }

        function getalllist() {
            ProjectFactory.list().get({

            }).$promise.then(function (data) {
                if (data.result != null) {
                    var result = data.result;
                    $scope.result = result;

                } else {
                    ToasterTool.error('获取失败', '请重试');
                }
            })



        }


        function getprojectdetail(id) {

            ProjectFactory.userlistbyid().get({

                'user': SessionService.getCurrentUser(),
                'id': id
            }).$promise.then(function (data) {
                if (data.result != null) {
                    var resultbyid = data.result;
                    $scope.resultlist = resultbyid[0];

                    $state.go('app.main.enrolllistdetail', {
                        "id": id
                    });
                } else {
                    ToasterTool.error('获取失败', '请重试');
                }
            })




        }

        function enrollproject(id) {
            ProjectFactory.enroll().post({
                "username": SessionService.getCurrentUser(),
                "project_id": id
            }).$promise.then(function (data) {
                if (data.status == 200) {
                    ToasterTool.success('报名成功');
                } else if (data.status == 500) {
                    ToasterTool.error('报名失败', '不能重复报名');
                }
            })
        }

    }]);
