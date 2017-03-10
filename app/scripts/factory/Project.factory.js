'use strict';

/**
 * 项目有关 api
 */
angular.module('crowdsourcing')
    .factory('ProjectFactory', function ($resource, $rootScope) {
        var project_base_Url = base_Url + '/project';
        return {
            create: function () {
                return $resource(project_base_Url + '/add?project_type=:project_type&cost=:cost&delivery_cycle=:delivery_cycle&warranty_cycle=:warranty_cycle&address=:address&description=:description&project_name=:project_name&username=:username', {project_type:'@project_type',cost:'@cost',delivery_cycle:'@delivery_cycle',warranty_cycle:'@warranty_cycle',description:'@description',address:'@address',project_name:'@project_name',username:'@username'}, {
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
            confirmdev: function () {
                return $resource(project_base_Url + '/develop/confirm', {},
                    {
                        'post': {
                            method: 'POST'
                        }
                    })
            },
            projectpage: function () {
                return $resource(project_base_Url + '/page/:pageSize/:pageNumber', {pageSize:"@pageSize",pageNumber:"@pageNumber"},
                    {
                        'post': {
                            method: 'POST'
                        }
                    })
            }

            // upload:function(){
            //     return $resource(project_base_Url + '/add/file', {}，{
            //         'post':{
            //             method: 'POST'
            //         }
            //     })
            // }
            

        };

    });
