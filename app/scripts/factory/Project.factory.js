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
            list: function () {
                return $resource(project_base_Url + '/all', {}, {
                    'get': {
                        method: 'GET'
                    }
                })
            },
            listbyid: function () {
                return $resource(project_base_Url + '/list/:id', { id: '@id' }, {
                    'get': {
                        method: 'GET'
                    }
                })
            },
            userlist: function () {
                return $resource(project_base_Url + '/all/:user', { user: '@user' }, {
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
            enroll: function () {
                return $resource(project_base_Url + '/develop/enroll', {}, {
                    'post': {
                        method: 'POST'
                    }
                })
            },
            cancelenroll: function () {
                return $resource(project_base_Url + '/develop/enroll/cancel', {}, {
                    'delete': {
                        method: 'DELETE'
                    }
                })
            },
            enrollcount: function () {
                return $resource(project_base_Url + '/develop/enroll/count/:id', { id: "@id" }, {
                    'get': {
                        method: 'GET'
                    }
                })
            },
            enrollmember: function () {
                return $resource(project_base_Url + '/develop/enroll/member/detail/:project_id', { project_id: "@project_id" },
                    {
                        'get': {
                            method: 'GET'
                        }
                    })
            },
            getenrolldetail: function () {
                return $resource(project_base_Url + '/develop/enroll/list/:username', { username: "@username" },
                    {
                        'get': {
                            method: 'GET'
                        }
                    })
            },
            getdevelopdetail: function () {
                return $resource(project_base_Url + '/develop/list/:username', { username: "@username" },
                    {
                        'get': {
                            method: 'GET'
                        }
                    })
            },
            
        };

    });
