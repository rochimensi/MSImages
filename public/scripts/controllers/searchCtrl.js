app.controller('searchCtrl', function ($scope, $routeParams){

        //List of images data from server
        var images = [{name:'Flowers', id:'1', tag:'red'},
            {name: 'Flowers2', id:'2', tag:'yellow'},
            {name: 'Flowers3', id:'3', tag:'black'}
        ]

        $scope.init = function(){
           var key = $routeParams.keyword;
            $scope.imageList();
        };

        $scope.imageList = function(){
            $scope.images = images;

        }

        //Init data
        $scope.init();

    }
);
