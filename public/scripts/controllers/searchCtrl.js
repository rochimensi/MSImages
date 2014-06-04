app.controller('searchCtrl',['$scope', '$routeParams','imageService',
    function ($scope, $routeParams, imageService){

        $scope.init = function(){
            $scope.images = imageService.getAll();
         };

        $scope.search = function(){
           var key = $routeParams.keyword;
           $scope.images = imageService.getAll();
         };

        $scope.imageList = function(){
            $scope.images = images;

        }

        //Init data
        $scope.init();

    }
]);
