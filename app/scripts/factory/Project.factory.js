'use strict';

/**
 * 项目有关 api
 */
angular.module('crowdsourcing')
    .factory('ProjectFactory', function ($resource, $rootScope) {
        var project_base_Url = base_Url + '/project';
        return {
            create: function () {
                return $resource(project_base_Url + '/add', {}, {
                    'post': {
                        method: 'POST'
                    }
                });
            },

            get_project_list: function () {
                return $resource(project_base_Url + '/list/user/:', {}, {
                    'get': {
                        method: 'GET'
                    }
                });
            },
            list: function () {
                return $resource(project_base_Url + '/list', {}, {
                    'get': {
                        method: 'GET'
                    }
                })
            },
            userlist: function () {
                return $resource(project_base_Url + '/list/:user', { user: '@user' }, {
                    'get': {
                        method: 'GET'
                    }
                })
            },
            userlistbyid: function () {
                return $resource(project_base_Url + '/list/:user/:id', { user: '@user',id:'@id' }, {
                    'get': {
                        method: 'GET'
                    }
                })
            },

        };

    });
