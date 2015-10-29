'use strict';

angular.module('mean.d3').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('d3-page', {
      url: '/d3/example',
      templateUrl: 'd3/views/index.html'
    });
  }
]);
