'use strict';

angular.module('crowdsourcing')
    .run(
        ['$rootScope', '$state', '$stateParams',
            function($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

          $urlRouterProvider
                  .otherwise('/portal');

          $stateProvider
            .state('app', {
                abstract: true,
                url: "/index",
                controller:'AppController',
                templateUrl: "views/common/content.html",
                resolve: {
                  controller: ['$ocLazyLoad', function($ocLazyLoad) {
                      return $ocLazyLoad.load([
                          'scripts/controller/app/App.controller.js',
                      ]);
                  }]
                }
            })
            .state('app.main', {
                url: "/main",
                controller:'MainController',
                templateUrl: "views/app/main.html",
                resolve: {
                  controller: ['$ocLazyLoad', function($ocLazyLoad) {
                      return $ocLazyLoad.load([
                          'scripts/controller/app/Main.controller.js',
                      ]);
                  }]
                }
            })
            .state('app.main.form', {
                url: "/form",
                controller:'ProjectController',
                templateUrl: "views/components/projectform.html",
                resolve: {
                  controller: ['$ocLazyLoad', function($ocLazyLoad) {
                      return $ocLazyLoad.load([
                          'scripts/controller/portal/Project.controller.js',
                          'scripts/factory/Project.factory.js',
                          'scripts/factory/Session.factory.js'
                      ]);
                  }]
                }
            })
            .state('portal', {
                url: "/portal",
                templateUrl: "views/portal/portal.html",
                data: { pageTitle: '首页', specialClass: 'landing-page' },
                resolve: {
                  controller: ['$ocLazyLoad', function($ocLazyLoad) {
                      return $ocLazyLoad.load([

                        //   'lib/libs/cbpAnimatedHeader.js',
                          // 'lib/libs/classie.js',
                        //   'lib/libs/wow.min.js',
                        //   'lib/libs/inspinia.js',
                        'bower_components/bootstrap/js/scrollspy.js',
                        'lib/libs/portal/pageinit.js'


                      ]);
                  }]
                }
            })
            .state('auth', {
                url: "/auth",
                templateUrl: "views/portal/login.html",
                controller:'LoginController',
                data: { pageTitle: '登录', specialClass: 'landing-page' },
                resolve: {
                  controller: ['$ocLazyLoad', function($ocLazyLoad) {
                      return $ocLazyLoad.load([

                        'scripts/controller/portal/Login.controller.js',
                        'scripts/factory/Session.factory.js'
                         ]);
                  }]
                }
            })
            .state('signup', {
                url: "/signup",
                templateUrl: "views/portal/signup.html",
                controller:'RegisterController',
                data: { pageTitle: '注册', specialClass: 'landing-page' },
                resolve: {
                  controller: ['$ocLazyLoad', function($ocLazyLoad) {
                      return $ocLazyLoad.load([

                        'scripts/controller/portal/Register.controller.js',
                        'scripts/factory/Session.factory.js'
                        // 'styles/styles.css',
                        // 'styles/styles.min.css'
                      ]);
                  }]
                }
            })
            .state('app.main.prolist', {
                url: "/prolist",
                templateUrl: "views/components/projectlist.html",
                //controller:'LoginController',
                resolve: {
                  controller: ['$ocLazyLoad', function($ocLazyLoad) {
                      return $ocLazyLoad.load([

                        // 'scripts/controller/portal/Login.controller.js',
                        // 'scripts/factory/Session.factory.js'
                         ]);
                  }]
                }
            })
            .state('app.main.profile', {
                url: "/profile",
                templateUrl: "views/components/profile.html",
                //controller:'LoginController',
                resolve: {
                  controller: ['$ocLazyLoad', function($ocLazyLoad) {
                      return $ocLazyLoad.load([

                        'lib/libs/sparkline/jquery.sparkline.min.js'
                        // 'scripts/factory/Session.factory.js'
                         ]);
                  }]
                }
            })
            .state('app.main.enrollist', {
                url: "/enrollist",
                templateUrl: "views/components/enrolllist.html",
                //controller:'LoginController',
                resolve: {
                  controller: ['$ocLazyLoad', function($ocLazyLoad) {
                      return $ocLazyLoad.load([

                        'lib/libs/sparkline/jquery.sparkline.min.js'
                        // 'scripts/factory/Session.factory.js'
                         ]);
                  }]
                }
            })
            

        }
    ])
  .run();
