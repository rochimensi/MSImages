angular
    .module('app')
    .controller('aboutCtrl', function($scope) {
        $scope.message = "We started this project with the goal to serve Making Sense's designers teams with a useful repository while learning technologies such as AngularJS, MongoDB, NodeJS and ExpressJS. Said this, images, photos, illustrations and vectors will be supported in the first version of MS-Images.";
        $scope.authors = "Rosario Mensi & Celeste Senoseain @2015"
    });