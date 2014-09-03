app.controller('add-imageCtrl',['$scope','$location','imageService','fileReader',
    function ($scope, $location, imageService, fileReader) {

        $scope.save = function () {
            var tags;
            $scope.submitted = true;
            if($scope.name && $scope.file && $scope.tags) {
               imageService.create($scope.name, $scope.description, $scope.defaultContributorSelected, $scope.tags, $scope.file)
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


        $scope.addContributor = function(){
           $scope.addContrib = true;
        };
        $scope.cancelContributor = function(){
            $scope.addContrib = false;
        };

        $scope.saveContributor = function () {
            var contributors = [];
            $scope.submitted = true;
            if($scope.nameContributor) {
                $scope.defaultContributorSelected = $scope.nameContributor;
                imageService.getContributors()
                .success(function(data){
                    data.push($scope.nameContributor);
                    $scope.contributors = data;
                 });
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
            $scope.size = false;
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