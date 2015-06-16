app.controller('add-imageCtrl',['$scope','$location','imageService','fileReader',
    function ($scope, $location, imageService, fileReader) {

        $scope.save = function () {
            var tags;
            $scope.submitted = true;
            if($scope.name && $scope.file && $scope.tags) {
               imageService.create($scope.name, $scope.description, $scope.contributorSelected, $scope.tags, $scope.file, $scope.albumSelected)
                   .success(function (data, status, headers, config) {
                          $location.path('/images');
                    })
                    .error(function (current, status, headers, config) {
                        console.log(current.err);
                    });
            }
        };


        $scope.cancel = function () {
            $location.path("/images");
        };

        $scope.getFile = function (file) {
            $scope.progress = 0;
            fileReader.readAsDataUrl($scope.file, $scope)
                .then(function(result) {
                    $scope.imageSrc = result;
                    $scope.imageName = $scope.file.name;
                });
        };

        $scope.init = function () {
            $scope.titleView = "Upload new image";
            $scope.submitted = false;
            $scope.contributorSelected = undefined;
            $scope.albumSelected = undefined;
            $scope.size = false;
            $scope.tags = "";
            $scope.showimageSrc = true;
            imageService.getContributors()
                .success(function(data){  $scope.contributors = data } );
            imageService.getAlbums()
            .success(function(data){  $scope.albums = data } );

        };

        //Initialization
        $scope.init();
    }]);