angular.module('EasyPay', ['ngRoute', 'templates', 'directive.facebook.user'])
    .config(function ($routeProvider) {
         $routeProvider
             .when('/', {
                 templateUrl: 'login.html',
                 controller: 'LoginCtrl',
                 controllerAs: 'login'
            })
            .when('/table',{
                templateUrl: 'table.html',
                controller: 'TableCtrl'  
            });
    });
