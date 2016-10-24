
'use strict';

app.controller('ProjectDetailController', ['$scope', '$state', '$rootScope','$stateParams', 'AlertTool', 'ToasterTool',
    'ProjectFactory', 'SessionFactory', 'SessionService', function ($scope, $state, $rootScope,$stateParams, AlertTool, ToasterTool,
        ProjectFactory, SessionFactory, SessionService) {

        init();

        function init() {
            getprojectdetailbyid();

        }


        function getprojectdetailbyid() {

            ProjectFactory.userlistbyid().get({

                'user': SessionService.getCurrentUser(),
                'id': $stateParams.id
            }).$promise.then(function (data) {
                if (data.result != null) {
                    var resultbyid = data.result;
                    $scope.resultbyidlist=resultbyid[0];
                
                } else {
                    ToasterTool.error('获取失败', '请重试');
                }
            })
        }


    }]);
