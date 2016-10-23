'use strict';

/**
 * 项目有关 api
 */
angular.module('crowdsourcing')
    .factory('ProjectFactory', function($resource, $rootScope) {
        var project_base_Url = base_Url + '/project';
        return {
            create: function(){
                return $resource(project_base_Url+ '/add', {}, {
                    'post': {
                        method: 'POST'
                    }
                });
            },
            
            get_project_list: function(){
                return $resource(project_base_Url+'/list',{},{
                    'get':{
                        method: 'GET'
                    }
                })
            }

        };

    });
