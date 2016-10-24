
'use strict';

app.controller('ProjectListController', ['$scope', '$state', '$rootScope', 'AlertTool', 'ToasterTool',
    'ProjectFactory', 'SessionFactory', 'SessionService', function ($scope, $state, $rootScope, AlertTool, ToasterTool,
        ProjectFactory, SessionFactory, SessionService) {

        init();

        function init() {
            getprojectlist();
            
        }
        
        function getprojectlist() {

            ProjectFactory.userlist().get({
                 'user': SessionService.getCurrentUser()

            }).$promise.then(function(data){
                if(data.result!=null){
                var result=data.result;
                $scope.result=result;
                }else{
                    ToasterTool.error('获取失败','请重试');
                }
                
            });
            
        }

        function getprojectdetail(id){
            
            ProjectFactory.userlistbyid().get({
                'user': SessionService.getCurrentUser(),
                'id': id
            }).$promise.then(function(data){
                if(data.result!=null){
                    var resultbyid=data.result;
                    $scope.resultbyid=resultbyid;
                     $state.go('app.main.detail');
                }else{
                    ToasterTool.error('获取失败','请重试');
                }
            })
            
            
        }

    }]);
