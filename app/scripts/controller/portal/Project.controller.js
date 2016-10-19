'use strict';

app.controller('ProjectController', ['$scope', '$state', '$rootScope', 'AlertTool', 'ToasterTool',
 'ProjectFactory','SessionFactory', 'SessionService',function($scope,$state, $rootScope, AlertTool, ToasterTool,
   ProjectFactory,SessionFactory,SessionService) {

    init();

    function init(){
         $scope.addproject = addproject;
    }

    function addproject(){
        var project_name = $scope.project_name;
        var project_type = $scope.project_type;
        var cost = $scope.cost;
        var delivery_cycle = $scope.delivery_cycle;
        var warranty_cycle = $scope.warranty_cycle;
        var address=$scope.address;
        var description=$scope.description;
        var project_user_name=SessionService.getCurrentUser();
      //  var file=$scope.file;

        ProjectFactory.create().post({
            'project_name': project_name,
            'project_type': project_type,
            'cost': cost,
            'delivery_cycle': delivery_cycle,
            'warranty_cycle': warranty_cycle,
            'address': address,
            'description':description,
            'project_user_name':project_user_name
          //  'file':file;
        }).$promise
            .then(function(data){
                if (data.result==1) {
                    ToasterTool.success('需求创建成功');
                    //$state.go('auth');
                }else{
                    ToasterTool.error('错误',data.message);
                }
            });

    }

}]);
