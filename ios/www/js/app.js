angular.module('App', ['App.services','App.controllers'])
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    }])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/index.html', {
            templateUrl: 'partials/main.html',
            controller: 'iconCtrl'
            
        })
        .when('/index.html/Capture', {
            controller: 'InstagramCtrl',
            templateUrl: 'partials/view.html'
        })
        .otherwise({redirectTo: '/index.html'});
    }]);





