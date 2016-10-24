
'use strict';

app.controller('EnrollListDetailController', ['$scope', '$state', '$rootScope', '$stateParams','AlertTool', 'ToasterTool',
    'ProjectFactory', 'SessionFactory', 'SessionService', function ($scope, $state, $rootScope, $stateParams,AlertTool, ToasterTool,
        ProjectFactory, SessionFactory, SessionService) {

        init();

        function init() {
            getprojectdetail();

        }

        function getprojectdetail() {


            ProjectFactory.listbyid().get({

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

        function enrollproject(){
            ProjectFactory.enroll().post({
                "dev_username":SessionService.getCurrentUser(),
                "enroll_project_id": $stateParams.id
            }).$promise.then(function(data){
                if(data.result!=null){
                    
                }
            })
        }

        




    }]);
