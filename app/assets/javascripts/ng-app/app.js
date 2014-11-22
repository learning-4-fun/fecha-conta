angular.module('EasyPay', ['ngRoute', 'templates'])
    .config(function ($routeProvider, $locationProvider) {
         $routeProvider
             .when('/', {
                 templateUrl: 'login.html',
                 controller: 'LoginCtrl',
                 controllerAs: 'login'
            })
            .when('/table',{
                templateUrl: 'table.html',
                controller: 'TableCtrl',
                controllerAs: 'table'    
            });
    });
