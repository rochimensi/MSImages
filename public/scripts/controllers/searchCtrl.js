app.controller('searchCtrl',['$scope', '$route','imageService','imageData',
    function ($scope, $route, imageService, imageData){

        $scope.init = function(){
            $scope.titleView = "Search Results (XX)";
            $scope.keyword = $route.current.params.keyword;
            imageData.getByName($scope.keyword)
                .then(function (data) {
                    var data =  [
                        {
                            name:'Flowers 1',
                            description:'Description of image 1',
                            id:'1',
                            tags:'red'
                        },
                        {
                            name:'Flowers 2',
                            description:'Description of image 2',
                            id:'2',
                            tags:'blue'
                        },
                        {
                            name:'Flowers 3',
                            description:'Description of image 3',
                            id:'3',
                            tags:'green'
                        }];
                    $scope.images = data;
                });
         };

        $scope.search = function(){
           $scope.images = imageService.getAll();
         };

        $scope.imageList = function(){
            $scope.images = images;

        }

        //Init data
        $scope.init();

    }
]);
