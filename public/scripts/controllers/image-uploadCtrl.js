app.controller('image-uploadCtrl',['$scope', '$http','$location','imageService',
        function ($scope, $http, $location, imageService) {

        $scope.addImage = function() {
            imageService.create({name:$scope.name, description:$scope.description, tags:$scope.tags, obj:$scope.files});
            $location.path("\images");
        };
       
        $scope.cancel = function () {
           $location.path("/");
        };
        $scope.init = function () {
            $scope.titleView = "ADD Image";
        };
        //Initialization
        $scope.init();
    }
]);

//services como parametro
// service http.get ()