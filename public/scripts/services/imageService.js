app.service('imageService', ['$http','$q', function ($http, $q) {

    this.getImages = function () {
        return $http.get('/v1/tokens/')
    };

    //generate search by id in the current array
    this.getById = function (imageId) {
       // console.log(imageId)
        //List of images data from server
        var deferred = $q.defer();
        var promise = deferred.promise;

        var images =  {
            name:'Flowers',
             description:'Description of image 1',
             id:'1',
             tags:'red'
        };
        $http.get('api/user', {params: {id: '5'}
        }).success(function(data, status, headers, config) {
            deferred.resolve(['hola','mundo']);
        }).error(function(data, status, headers, config) {
        // Handle the error
            console.log("no anda");
        });
        console.log(deferred);
       // debugger;


        return promise;
     //   return _.find(array, function(itemImage){return itemImage.id == imageId});
    };


    this.getImagebyName = function (name) {
        return $http.get('/v1/users/' + name);
    };
}]);
