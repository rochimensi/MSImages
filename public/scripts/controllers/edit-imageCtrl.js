app.controller('edit-imageCtrl', function ($scope, $rootScope, $location){

        $scope.cancel = function () {
           $location.path("/");
        };
        $scope.save = function () {
            $location.path("/");
        };
        $scope.init = function () {
            $scope.titleView = "EDIT Image";

        };
        //Initialization
        $scope.init();
    }
);

//services como parametro
// service http.get ()