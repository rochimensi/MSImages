app.controller('image-uploadCtrl', function ($scope,$rootScope, $location){
        $scope.cancel = function () {
           $location.path("/");
        };
    }
);
