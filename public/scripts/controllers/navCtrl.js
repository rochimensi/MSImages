app.controller('navCtrl',['$scope',function($scope){
    $scope.items =[
        {"menu":"Upload Image", "link":"#/image-upload"},
        {"menu":"Images", "link":"#/images"},
        {"menu":"About","link":"#/about"}
    ];
}]);
