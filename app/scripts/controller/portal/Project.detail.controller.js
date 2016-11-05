
'use strict';


app.controller('ProjectDetailController', ['$scope', '$state', '$rootScope', '$stateParams', 'AlertTool', 'ToasterTool',
    'ProjectFactory', 'SessionFactory', 'SessionService', 'EnrollService', function ($scope, $state, $rootScope, $stateParams, AlertTool, ToasterTool,
        ProjectFactory, SessionFactory, SessionService, EnrollService) {

        init();

        function init() {
            getprojectdetailbyid();
            displayenrollcount($stateParams.id);
            $scope.gotomemberlist=gotomemberlist;

        }

        function gotomemberlist(){
            $state.go('app.main.projectdetail_member', {
                        "id": $stateParams.id
                    });
        }

        function getprojectdetailbyid() {

            ProjectFactory.userlistbyid().get({

                'user': SessionService.getCurrentUser(),
                'id': $stateParams.id
            }).$promise.then(function (data) {
                if (data.result != null) {
                    var resultbyid = data.result;
                    $scope.resultbyidlist = resultbyid[0];
                    //$scope.resultbyidlist.dis = decode($scope.resultbyidlist.dis);

                } else {
                    ToasterTool.error('获取失败', '请重试');
                }
            })
        }



        function displayenrollcount(id) {


            EnrollService.getenrollcount(id, function (data) {
                $scope.count = data.result;

            });


        }
    

    }]);
