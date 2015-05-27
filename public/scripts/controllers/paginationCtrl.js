app.controller('paginationCtrl',['$scope', 'imageService',
    function ($scope, imageService) {

        $scope.currentPage = 1,
        $scope.itemsPerPage = 12;


        $scope.init = function () {
           imageService.getAllImages(0, $scope.itemsperpage)
            .success(function(data) {
               $scope.totalItems = data.length;
            })
        };

        $scope.pageChanged = function (){
             imageService.getImagesPerPage($scope.itemsPerPage, $scope.currentPage)
            .success(function(data) {
                $scope.images = [];
                $scope.images = data;
            })
        };
        //Initialization
        $scope.init();

    }]);