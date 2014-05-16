//Controllers

// Creación del módulo que engloba todos los controllers
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl	: 'partials/home.html',
            controller 	: 'mainController'
        })
        .when('/about', {
            templateUrl : 'partials/acerca.html',
            controller 	: 'aboutController'
        })
        .when('/contact', {
            templateUrl : 'partials/contacto.html',
            controller 	: 'contactController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angularRoutingApp.controller('mainController', function($scope) {
    $scope.message = 'Hola, Mundo!';
});

angularRoutingApp.controller('aboutController', function($scope) {
    $scope.message = 'Esta es la página "Acerca de"';
});

angularRoutingApp.controller('contactController', function($scope) {
    $scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});
