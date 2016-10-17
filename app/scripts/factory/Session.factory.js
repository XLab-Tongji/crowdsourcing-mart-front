'use strict';

/**
 * 登录 api
 */
angular.module('crowdsourcing')
    .factory('SessionFactory', function($resource, $rootScope, SessionService) {
        var account_base_Url = base_Url + '/account';
        return {
            login: function(headers){
                return $resource(account_base_Url+ '/authentication', {}, {
                    'post': {
                        method: 'POST',
                        headers: headers
                    }
                });
            },

            register: function(){
                return $resource(account_base_Url + '/register', {}, {
                    'post': {
                        method: 'POST'
                    }
                });
            },

        };

    });
