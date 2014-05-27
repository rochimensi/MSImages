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
        .when('/image-upload', {
            templateUrl	: '../partials/image-upload.html',
            controller 	: 'image-uploadCtrl'
        })
        .when('/about', {
            templateUrl : '../partials/about.html',
            controller 	: 'aboutCtrl'
        })
        .when('/contact', {
            templateUrl : '../partials/contact.html',
            controller 	: 'contactCtrl'
        })
        .when('/search_results:keyword', {
            templateUrl : '../partials/search_results.html',
            controller 	: 'searchCtrl'
        })
        .when('/edit-image/:imageId', {
            templateUrl : '../partials/image-upload.html',
            controller 	: 'edit-imageCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

