app.controller('imageCtrl', ['$scope', '$location','imageService',
    function($scope, $location, imageService) {

        $scope.init = function () {
            $scope.titleView = "Recently Uploaded Images";
            $scope.images = imageService.getAll(); // get last image
            $scope.sidebar = true;
        };

        $scope.getFormattedTags = function(tags) {
                var list = [];
                angular.forEach(tags, function(item){
                    list.push(item.text);
                });
               return list.toString();
            };

        //Init data
        $scope.init();
    }
]);
