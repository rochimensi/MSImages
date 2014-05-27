app.service('ImageService', ['$http', function ($http) {

    this.getImages = function () {
        return $http.get('/v1/tokens/')
    };


    this.getImagebyName = function (name) {
        return $http.get('/v1/users/' + name);
    };
}]);
