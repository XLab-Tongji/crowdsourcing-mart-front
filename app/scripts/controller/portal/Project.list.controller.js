
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

                console.log(data);

            });
            
        }

    }]);
