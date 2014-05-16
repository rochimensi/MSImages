//Controllers

// Creación del módulo que engloba todos los controllers
var app = angular.module('app', ['ngRoute']);

// Configuración de las rutas
app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl	: '../partials/home.html',
            controller 	: 'mainCtrl'
        })
        .when('/about', {
            templateUrl : '../partials/about.html',
            controller 	: 'aboutCtrl'
        })
        .when('/contact', {
            templateUrl : '../partials/contact.html',
            controller 	: 'contactCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

