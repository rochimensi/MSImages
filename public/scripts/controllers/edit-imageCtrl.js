app.controller('edit-imageCtrl', ['$scope','$location','$routeParams','imageService','fileReader',
        function ($scope, $location, $routeParams, imageService, fileReader) {

            $scope.cancel = function () {
                $location.path("/");
            };

            $scope.save = function () {
                imageService.update({id: $scope.id, name: $scope.name, description: $scope.description, tags: $scope.tags, obj: $scope.files});
                $location.path("\images");
            };

            $scope.getFile = function () {
                $scope.progress = 0;
                fileReader.readAsDataUrl($scope.file, $scope)
                    .then(function(result) {
                        $scope.imageSrc = result;
                    });
            };

            $scope.init = function () {
                $scope.titleView = "EDIT Image";
                $scope.sidebar = 'false';
                $scope.current = imageService.getById($routeParams.imageId);
                $scope.name = $scope.current.name;
                $scope.description = $scope.current.description;
                $scope.tags = $scope.current.tags;
                $scope.imageSrc = $scope.current.logotype;
                $scope.id = $routeParams.imageId;
             };

            //Initialization
            $scope.init();
        }
]);
