app.controller('image-uploadCtrl', function ($scope,$rootScope, $location){
        $scope.cancel = function () {
            console.log("Go to Home");
             $location.path("/");
        };
    }
);
