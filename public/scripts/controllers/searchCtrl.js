app.controller('searchCtrl',['$scope', '$route','imageService','imageData',
    function ($scope, $route, imageService, imageData){

        $scope.init = function(){
            $scope.titleView = "Search Results (XX)";
            $scope.sidebar = 'true';
            $scope.keyword = $route.current.params.keyword;
            $scope.search($scope.keyword);

         };

        $scope.getFormattedTags = function(tags) {
            var list = [];
            angular.forEach(tags, function(item){
                list.push(item.text);
            });
            return list.toString();
        };

        $scope.search = function(word){
           imageData.getByName(word)
                .then(function (data) {
                    $scope.images = data;
                });
         };



        //Init data
        $scope.init();

    }
]);
