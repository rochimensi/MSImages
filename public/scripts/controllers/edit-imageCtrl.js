app.controller('edit-imageCtrl', ['$scope','$location','$routeParams','imageService','fileReader',
        function ($scope, $location, $routeParams, imageService, fileReader) {

            $scope.save = function () {
                if($scope.name) {
                    imageService.updateImage($scope.id, $scope.name, $scope.description, $scope.contributorSelected,$scope.tags, $scope.albumSelected)
                        .success(function (data, status, headers, config) {
                            $location.path('/images');
                        })
                        .error(function (current, status, headers, config) {
                            console.log(current.err); // TODO: Display error on view.
                        });
                }
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
                $scope.size = 'true';
                $scope.addAlbum = false;
                imageService.getByImageId($routeParams.imageId)
                    .success(function(data){
                        $scope.current = data;
                        $scope.name = $scope.current.name;
                        if ($scope.current.description.isUndefined)
                            $scope.description = "Description";
                        else
                            $scope.description = $scope.current.description;
                        $scope.size = $scope.current.size;
                        $scope.contributorSelected = $scope.current.contributor;
                        imageService.getContributors()
                            .success(function(data){  $scope.contributors = data } );
                        $scope.tags = $scope.current.tags;
                        $scope.albumSelected = $scope.current.album;
                        imageService.getAlbums()
                        .success(function(data){  $scope.albums = data;} );
                        $scope.showimageSrc = false;
                        $scope.id = $routeParams.imageId;} );

             };

            //Initialization
            $scope.init();
        }
]);
