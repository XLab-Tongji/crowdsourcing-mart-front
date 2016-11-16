'use strict';

app.controller('ProjectController', ['$scope', '$state', '$rootScope', 'AlertTool', 'ToasterTool',
    'ProjectFactory', 'SessionFactory', 'SessionService','Upload', function ($scope, $state, $rootScope, AlertTool, ToasterTool,
        ProjectFactory, SessionFactory, SessionService,Upload) {

        init();

        function init() {
            $scope.addproject = addproject;
            getprojectlist();
          
            
        }
        
        function deleteform() {
            delete $scope.project_name;
            delete $scope.project_type;
            delete $scope.cost;
            delete $scope.delivery_cycle;
            delete $scope.warranty_cycle;
            delete $scope.address;
            delete $scope.description;

        }

    

         function addproject(file) {

            var data = {};
                data.project_name=$scope.project_name;
                data.project_type = $scope.project_type;
                data.cost = $scope.cost;
                data.delivery_cycle = $scope.delivery_cycle;
                data.warranty_cycle = $scope.warranty_cycle;
                data.address = $scope.address;
                data.description = $scope.description;
                data.file = file;
                data.username=SessionService.getCurrentUser();

            file.upload = Upload.upload({
            url: 'http://localhost:8080/api/project/add',
             data: data
            });

            file.upload.then(function (response) {

               if(response.status==200){
                   ToasterTool.success("创建成功");
               }

            }, function (evt) {
              // Math.min is to fix IE which reports 200% sometimes
              file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });

            }



        function getprojectlist() {

            ProjectFactory.userlist().get({
                'userid': SessionService.getCurrentUser()
            }

            ).$promise.then(function (data) {

                var result = data.result;

            });

        }

    }]);



