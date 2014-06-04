angular
    .module('app')
    .controller('mainCtrl', function($scope, $location) {

        $scope.message = 'Main ctrl!';

        $scope.init = function(){

        };

        //Go to search
        $scope.search = function (keyword) {
            $location.path("/search_results"+keyword);
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
);
