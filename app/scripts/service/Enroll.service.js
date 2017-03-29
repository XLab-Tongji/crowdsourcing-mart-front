'use strict';

angular.module('crowdsourcing')
  .service('EnrollService', ['ProjectFactory', function (ProjectFactory) {



    this.getenrollcount = function (id, callback) {
      var count = -1;

      ProjectFactory.enrollcount().get({
        'id': id

      }).$promise.then(function (data) {
        callback(data);
      })
    };

  }]);
