'use strict';

/**
 * 报名有关api
 */
angular.module('crowdsourcing')
    .factory('EnrollFactory', function ($resource, $rootScope) {
        var project_base_Url = base_Url + '/project';
        return {
            create: function () {
                return $resource(project_base_Url + '/add', {}, {
                    'post': {
                        method: 'POST'
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
                return $resource(project_base_Url + '/list/:user/:id', { user: '@user', id: '@id' }, {
                    'get': {
                        method: 'GET'
                    }
                })
            },

        };

    });
