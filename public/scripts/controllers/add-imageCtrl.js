app.controller('add-imageCtrl',['$scope','$location','imageService','fileReader',
    function ($scope, $location, imageService, fileReader) {

        $scope.save = function () {
            $scope.submitted = true;
            var formIsvalid = $scope.name && $scope.description && $scope.tags;
            if(formIsvalid) {
                imageService.create($scope.name, $scope.description, $scope.tags, $scope.file)
                    .success(function (data, status, headers, config) {
                        $scope.submitted = false;
                        $location.path('/images');
                    })
                    .error(function (current, status, headers, config) {
                        console.log(current.err); // TODO: Display error on view.
                    });
            }
        };

        $scope.cancel = function () {
            $location.path("/");
        };

        $scope.getFile = function () {
            $scope.progress = 0;
            fileReader.readAsDataUrl($scope.file, $scope)
                .then(function(result) {
                    $scope.imageSrc = result;
                });
        };

        $scope.init = function () {
            $scope.titleView = "Upload new image";
            $scope.submitted = false;
            // TODO: these tags are just an example. Will be removed.
            $scope.tags = [
                { text: 'Tag1' },
                { text: 'Tag2' },
                { text: 'Tag3' }
            ];

        };

        //Initialization
        $scope.init();
    }]);