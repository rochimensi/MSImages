app.controller('add-imageCtrl',['$scope','$location','imageService','fileReader',
    function ($scope, $location, imageService, fileReader) {

        $scope.save = function () {
            $scope.submitted = true;
            if($scope.name && $scope.file) {
                imageService.create($scope.name, $scope.description, $scope.defaultContributorSelected,$scope.tags, $scope.file)
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


        $scope.addContributor = function(){
        //    $location.path('/add-contributor');
            $scope.addContrib = true;
        };
        $scope.cancelContributor = function(){
            $scope.addContrib = false;
        };

        $scope.saveContributor = function () {
            $scope.submitted = true;
            if($scope.nameContributor) {
                $scope.contributors = imageService.addContributor($scope.nameContributor); //no tengo que llamar al servicio
                $scope.defaultContributorSelected = $scope.nameContributor;
                $scope.addContrib = false;
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
            $scope.titleView = "Upload new image";
            $scope.addContrib = false;
            $scope.submitted = false;
            $scope.showimageSrc = true;
            $scope.defaultContributorSelected = undefined;
            imageService.getContributors()
                .success(function(data){  $scope.contributors = data } );
            $scope.tags = [
                { text: 'Tag1' },
                { text: 'Tag2' },
                { text: 'Tag3' }
            ];

        };

        //Initialization
        $scope.init();
    }]);