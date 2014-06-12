app.controller('imageCtrl', ['$scope', '$location','imageService',
    function($scope, $location, imageService) {

        $scope.init = function () {
            $scope.titleView = "Recently Uploaded Images";
            $scope.images = imageService.getAll(); // get last image
            $scope.sidebar = true;
        };


        //Init data
        $scope.init();
    }
]);
