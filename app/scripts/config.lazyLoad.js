'use strict';

angular.module('crowdsourcing')
  // .constant('JQ_CONFIG', {
  //   slimScroll: ['../bower_components/slimscroll/jquery.slimscroll.min.js'],
  //   slider: [
  //     '../bower_components/bootstrap-slider/bootstrap-slider.js'
  //   ]
  // })
  // oclazyload config
  .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      modules: [
        {
          name: 'ui.sortable',
          files: [
            'lib/libs/sortable.js'
          ]
        },
        {
          name: 'ui.checkbox',
          files: [
            'lib/libs/angular-bootstrap-checkbox.js'
          ]
        },
        {
          name: 'iCheck',
          files: [
            'lib/css/iCheck/custom.css',
            'lib/libs/iCheck/icheck.min.js',
          ]
        },
        {
          name: 'ui.markdown',
          files: [
            'lib/libs/bootstrap-markdown/bootstrap-markdown.js',
            'lib/libs/bootstrap-markdown/markdown.js',
            'lib/css/bootstrap-markdown/bootstrap-markdown.min.css'
          ]
        }
      ]
    });
  }]);
