angular.module('EasyPay', ['ngRoute', 'templates'])
    .config(function ($routeProvider, $locationProvider) {
         $routeProvider
             .when('/', {
                            templateUrl: '_login.html',
                            controller: 'LoginCtrl',
                            controllerAs: 'login'
                        });
        $locationProvider.html5Mode(true);
    });
