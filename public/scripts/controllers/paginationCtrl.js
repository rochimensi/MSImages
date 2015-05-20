app.controller('paginationCtrl',['$scope', 'imageService',
    function ($scope, imageService) {

        $scope.currentPage = 1,
        $scope.itemsperpage = 2;


        $scope.init = function () {
           imageService.getAllImages(0, $scope.itemsperpage)
            .success(function(data) {
               $scope.totalItems = data.length;
            })
        };

        $scope.pageChanged = function (currentPage){
          var start = (currentPage - 1 )  + $scope.itemsperpage;
          var end = start + $scope.itemsperpage;
            imageService.getAllImages(start, end)
            .success(function(data) {
                $scope.images = data;
            })
        };
        //Initialization
        $scope.init();

    }]);