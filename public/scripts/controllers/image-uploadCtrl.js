app.controller('image-uploadCtrl', function ($scope,$rootScope, $location){
        $scope.cancel = function () {
           $location.path("/");
        };
        $scope.init = function () {
            $scope.titleView = "ADD Image";
        };
        //Initialization
        $scope.init();
    }
);

//services como parametro
// service http.get ()