
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
            }

            ).$promise.then(function(data){
                if(data.result!=null){
                var result=data.result;
                // var project_name_list=new Array;
                // var project_type_list=new Array;
                // for(var i=0;i<result.length;i++){
                //     project_name_list[i]=result[i].project_name;
                //     project_type_list[i]=result[i].project_type;

                // }
                // $scope.project_name_list=project_name_list;
                // $scope.project_type_list=project_type_list;
                $scope.result=result;
                


                }else{
                    ToasterTool.error('获取失败','请重试');
                }
                






            });
            
        }

    }]);
