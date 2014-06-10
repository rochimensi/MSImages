app.controller('searchCtrl',['$scope', '$route','imageService','imageData',
    function ($scope, $route, imageService, imageData){

        $scope.init = function(){
            $scope.titleView = "Search Results (XX)";
            $scope.sidebar = 'true';
            $scope.keyword = $route.current.params.keyword;
            imageData.getByName($scope.keyword)
                .then(function (data) {
                   $scope.images = data;
                });
         };

        $scope.search = function(){
           $scope.images = imageService.getAll();
         };

        $scope.imageList = function(){
            $scope.images = images;

        }

        //Init data
        $scope.init();

    }
]);
