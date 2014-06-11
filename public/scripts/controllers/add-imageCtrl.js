app.controller('add-imageCtrl',['$scope', '$http','$location','imageService','fileReader',
            function ($scope, $http, $location, imageService,fileReader) {



        $scope.save = function() {
            var formIsvalid = $scope.name && $scope.description && $scope.tags;
            if(formIsvalid) {
                imageService.create({name: $scope.name, description: $scope.description, tags: $scope.tags, obj: $scope.files});
                $scope.imageName = $scope.name;

                $location.path("\images");
            }
        };

        $scope.getFile = function () {
                    $scope.progress = 0;
                    fileReader.readAsDataUrl($scope.file, $scope)
                        .then(function(result) {
                            $scope.imageSrc = result;
                        });
        };

        $scope.cancel = function () {
           $location.path("/");
        };
        $scope.init = function () {
            $scope.titleView = "ADD Image";
            $scope.sidebar = 'false';

        };
        //Initialization
        $scope.init();
    }
]);

//services como parametro
// service http.get ()