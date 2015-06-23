app.controller('navCtrl',['$scope','$location', function($scope, $location){

    $scope.items =[
        {"menu":"Upload Image", "path":"#/image-upload"},
        {"menu":"Images", "path":"#/images"},
        {"menu":"About","path":"#/about"}
    ];
    $scope.selectedRow = null;  // initialize our variable to null
    $scope.setClickedRow = function(index){  //function that sets the value of selectedRow to current index
        $scope.selectedRow = index;
    }

}]);
