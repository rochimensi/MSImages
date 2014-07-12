app.controller('edit-imageCtrl', ['$scope','$location','$routeParams','imageService','fileReader',
        function ($scope, $location, $routeParams, imageService, fileReader) {

            $scope.cancel = function () {
                $location.path("/");
            };

            $scope.save = function () {
                $scope.submitted = true;
                if($scope.name && $scope.file) {
                    imageService.update($scope.id, $scope.name, $scope.description, $scope.defaultContributorSelected,$scope.tags, $scope.file)
                        .success(function (data, status, headers, config) {
                            $scope.submitted = false;
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

            $scope.addContributor = function(){
                $location.path('/add-contributor');
            };
            $scope.init = function () {
                $scope.titleView = "EDIT Image";
                $scope.sidebar = 'false';
                imageService.getById($routeParams.imageId)
                    .success(function(data){  $scope.current = data;
                        $scope.name = $scope.current.name;
                        $scope.description = $scope.current.description;
                        $scope.defaultContributorSelected = $scope.current.contributor;
                        imageService.getContributors()
                            .success(function(data){  $scope.contributors = data } );
                        $scope.tags = $scope.current.tags;
                        $scope.imageSrc = $scope.current.logotype;
                        $scope.id = $routeParams.imageId;} );

             };

            //Initialization
            $scope.init();
        }
]);
