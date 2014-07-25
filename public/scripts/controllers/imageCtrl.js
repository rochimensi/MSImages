app.controller('imageCtrl', ['$scope', '$location','imageService',
    function($scope, $location, imageService) {

        $scope.init = function () {
            $scope.titleView = "Recently Uploaded Images";
            imageService.getImages()
                .success(function(data){
                  $scope.images = data})
            $scope.sidebar = true;
            imageService.getTags()
            .success(function(data){  $scope.tags = data } );
            imageService.getContributors()
            .success(function(data){  $scope.contributors = data } );
        };

        $scope.getFormattedTags = function(tags) {
                var list = [];
                angular.forEach(tags, function(item){
                    list.push(item.text);
                });
               return list.toString();
            };
        $scope.delete = function(id) {
          imageService.delete(id)
          .success(function (){
              $location.path('/images');
          })
          .error(function(){
              $scope.errorMessage("Error");
          });
        };

        //Init data
        $scope.init();
    }
]);
