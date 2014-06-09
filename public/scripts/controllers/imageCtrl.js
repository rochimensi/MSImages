app.controller('imageCtrl', ['$scope', '$location','imageService',
    function($scope, $location, imageService) {

        $scope.init = function () {
            $scope.titleView = "Recently Uploaded Images";
            $scope.files = imageService.getAll(); // get last image
        };

        $scope.goToImage = function() {
            $location.path("/add-image");
        };

        $scope.editImage = function(image) {
            $location.path("/edit-image/"+image._id);
        };
        //Init data
        $scope.init();
    }
]);
