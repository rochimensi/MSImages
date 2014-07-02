app.controller('searchCtrl',['$scope', '$route','imageService','imageData',
    function ($scope, $route, imageService, imageData){

        $scope.init = function(){
            $scope.titleView = "Search Results (XX)";
            $scope.sidebar = 'true';
            $scope.keyword = $route.current.params.keyword;
            $scope.search($scope.keyword);
            $scope.tags = [
                {
                    name:'Flowers'
                },
                {
                    name:'Red'
                },
                {
                    name:'10x10'
                }
            ];
            $scope.contributors = imageService.getContributors();
            $scope.shapes = imageService.getShapes();

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
        $scope.isSelected = function(){
            $scope.tagSelected = true;
        }



        //Init data
        $scope.init();

    }
]);
