
'use strict';

app.controller('EnrollMemberList', ['$scope', '$state', '$rootScope', '$stateParams', 'AlertTool', 'ToasterTool',
    'ProjectFactory', 'SessionFactory', 'SessionService', 'EnrollService', function ($scope, $state, $rootScope, $stateParams, AlertTool, ToasterTool,
        ProjectFactory, SessionFactory, SessionService, EnrollService) {

        init();

        function init() {
            getmemberdetail();

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






    }]);
