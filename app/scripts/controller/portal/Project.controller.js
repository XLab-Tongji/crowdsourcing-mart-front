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

    

         function addproject() {

            var data = {};
                data.project_name=$scope.project_name;
                data.project_type = $scope.project_type;
                data.cost = $scope.cost;
                data.delivery_cycle = $scope.delivery_cycle;
                data.warranty_cycle = $scope.warranty_cycle;
                data.address = $scope.address;
                data.description = $scope.description;
                // data.file = file;
                data.username=SessionService.getCurrentUser();

// console.log(data.warranty_cycle+" "+)
                ProjectFactory.create().post({
                
                    'project_type':data.project_type,
                    'cost':data.cost,
                    'delivery_cycle':data.delivery_cycle,
                    'warranty_cycle':data.warranty_cycle,
                    'address':data.address,
                    'description':data.description,
                    'project_name':data.project_name,
                    'username':data.username



                }).$promise.then(function (data) {
                    console.log(data);
                    if (data.status == 200) {
                        ToasterTool.success('需求创建成功');
                        $state.go('app.main.prolist');
                    } else{//} if (data.status == 500) {
                        ToasterTool.error('需求创建失败');
                    }
            })





            // file.upload = Upload.upload({
            // url: 'http://localhost:8080/api/project/add',
            //  data: data
            // });

            // file.upload.then(function (response) {

            //    if(response.status==200){
            //        ToasterTool.success("创建成功");
            //    }

            // }, function (evt) {
        
            //   file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            // });

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



