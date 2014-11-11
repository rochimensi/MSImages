app.controller('paginationCtrl',['$scope', 'imageService',
    function ($scope, imageService) {

        $scope.filteredTodos = [],
        $scope.currentPage = 1,

        $scope.maxSize = 5;

        //Initialization
        $scope.init();

        $scope.init = function () {
           imageService.pagination()
            .success(function(data) {
               $scope.numPerPage = data;
                $scope.name = $scope.current.name;
            })
        };
        $scope.numPages = function () {
            return Math.ceil($scope.todos.length / $scope.numPerPage);
        };

        $scope.$watch('currentPage + numPerPage', function() {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
            , end = begin + $scope.numPerPage;

            $scope.filteredTodos = $scope.todos;
        });
    }]);