app.service('imageService', ['$http','$q', function ($http, $q) {

    //Get all images
    this.getImages = function () {
        return $http.get("/api/images");
    };

    //Get all contributors
    this.getContributors = function(){
      return $http.get("/api/images/contributors");
    }

    //Get all Tags
    this.getTags = function(){
        return $http.get("/api/images/tags");
    }

    this.getShapes = function(){
        //return $http.get("/api/images/shapes");
    }

    //Get Image by Id
    this.getByImageId = function (ImageId) {
        return $http.get("/api/images/"+ImageId);
    };

    //Get Image by Name
    this.getImageByName = function (ImageName) {
       return $http.get("/api/images/"+ImageName);
        //Get /images); item por page and pageNumber 1 los siguientes
    };

    //Create a new Image
    this.create = function (imageName, imageDescription, imageContributor, imageTags, imageFile) {
        var fd = new FormData();

        fd.append('name', imageName);
        fd.append('description', imageDescription);
        fd.append('contributor',imageContributor);
        angular.forEach(imageTags, function(tag){
            fd.append('tags', tag.text);
        });
        fd.append('file', imageFile);

        return $http.post("/api/images", fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        });
    };

    // Update Image
    this.updateImage = function (imageId, imageName, imageDescription, imageContributor, imageTags) {
        var formattedTags = [];
        var tags = [];

        angular.forEach(imageTags, function(tag) {
            formattedTags.push(tag.text);
        });
        var updatedImage = {
            name: imageName,
            contributor: imageContributor,
            description: imageDescription,
            tags : formattedTags

        }
        return $http.put("/api/images/"+imageId, updatedImage);

    };

    //Delete Image of DB //Parameter ID_Image
    this.delete = function (id) {
        return $http.delete("/api/images/"+id);
    };

}]);
