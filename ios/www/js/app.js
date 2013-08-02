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
        .when('/index.html/Accelerometer', {
            controller: 'AccelCtrl',
            templateUrl: 'partials/accelerometer.html'
        })
        .when('/index.html/Discussions', {
            controller: 'DiscussionCtrl',
            templateUrl: 'partials/Discussions.html'
        })
        .when('/index.html/Camera', {
            controller: 'CameraCtrl',
            templateUrl: 'partials/camera.html'
        })
        .when('/index.html/Geolocation', {
            controller: 'GeoCtrl',
            templateUrl: 'partials/geolocation.html'
        })
        .when('/index.html/InAppBrowser', {
            controller: 'InAppBrowserController',
            templateUrl: 'partials/browser.html'
        })
        .otherwise({redirectTo: '/index.html'});
    }]);





