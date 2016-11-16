
'use strict';

app.controller('EnrollListController', ['$scope', '$state', '$rootScope', 'AlertTool', 'ToasterTool',
    'ProjectFactory', 'SessionFactory', 'SessionService', 'EnrollService', function ($scope, $state, $rootScope, AlertTool, ToasterTool,
        ProjectFactory, SessionFactory, SessionService, EnrollService) {

        init();

        function init() {
            // getalllist();

         
            getallprojectlistbypage(1);
            $scope.getprojectdetail = getprojectdetail;
            $scope.getallprojectlistbypage=getallprojectlistbypage;
            $scope.enrollproject = enrollproject;
            
            // $scope.displayenrollcount=displayenrollcount;
        }

        // function getalllist() {
        //     ProjectFactory.list().get({

        //     }).$promise.then(function (data) {
        //         if (data.result != null) {
        //             var result = data.result;
        //             $scope.result = result;

        //         } else {
        //             ToasterTool.error('获取失败', '请重试');
        //         }
        //     })



        // }


/*分页获取项目页面显示
pagesize 页面显示数量
count页码数
*/
        function getallprojectlistbypage(count){

            // count=count+1;

            ProjectFactory.projectpage().get({
                'pageSize':8,
                'pageNumber':count
            }).$promise.then(function (data){
                if(data.result!=null){
                    var result=data.result[1];
                    $scope.result=result;
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

        function enrollproject(id) {
            ProjectFactory.enroll().post({
                "username": SessionService.getCurrentUser(),
                "project_id": id
            }).$promise.then(function (data) {
                if (data.status == 200) {
                    ToasterTool.success('报名成功');
                } else if (data.status == 500) {
                    ToasterTool.error('报名失败', '不能重复报名');
                }
            })
        }

    }]);
