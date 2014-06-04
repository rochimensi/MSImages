app.controller('edit-imageCtrl', ['$scope','$location','$routeParams','imageService',
        function ($scope, $location, $routeParams, imageService) {

            $scope.cancel = function () {
                $location.path("/");
            };
            $scope.save = function () {
                $location.path("/");
            };


            // Edit image information. Call to imageService.edit()
            $scope.edit = function () {

                $scope.imageService.update($scope.current.id, {id: $scope.current.id, name: $scope.name, text: $scope.type});
                $location.path("\images");
            };

            $scope.init = function () {
                $scope.titleView = "EDIT Image";
                $scope.current = imageService.getById($routeParams.imageId);
                $scope.name = $scope.current.name;
                $scope.description = $scope.current.description;
                $scope.tags = $scope.current.tags;

            };

            //Initialization
            $scope.init();
        }
]);
//services como parametro
// service http.get ()