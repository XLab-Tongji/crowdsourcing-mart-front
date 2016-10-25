
'use strict';

app.controller('EnrollListController', ['$scope', '$state', '$rootScope', 'AlertTool', 'ToasterTool',
    'ProjectFactory', 'SessionFactory', 'SessionService', 'EnrollService', function ($scope, $state, $rootScope, AlertTool, ToasterTool,
        ProjectFactory, SessionFactory, SessionService, EnrollService) {

        init();

        function init() {
            getalllist();
            $scope.getprojectdetail = getprojectdetail;
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

        $scope.displayenrollcount = {

            getcount: function (id) {

                EnrollService.getenrollcount(id, function (data) {
                    return data.result;
                });
            }
        };










    }]);
