app.service('imageService', ['$http','$q', function ($http, $q) {
    var cont = 3;
    var images =  [
        {
            name:'Flowers 1',
            description:'Description of image 1',
            contributor:'Celeste Senoseain',
            id:'1',
            tags:[
                { text: 'Tag1' },
                { text: 'Tag2' },
                { text: 'Tag3' }
            ],
            logotype:'uploads/descarga.png'
        },
        {
            name:'Flowers 2',
            description:'Description of image 2',
            contributor:'Rosario Mensi',
            id:'2',
            tags: [{text: 'blue'}],
            logotype:'uploads/1465355_390814357716435_1044122934_n.png'
        },
        {
            name:'Flowers 3',
            description:'Description of image 3',
            contributor:'Juan Diego Raimondi',
            id:'3',
            tags:[{text: 'green'}],
            logotype:'uploads/descarga.jpg'
        },
        {
            name:'Flowers 4',
            description:'Description of image 4',
            contributor:' ',
            id:'4',
            tags:[{text: 'green'}],
            logotype:'uploads/descarga.jpg'
        }];

    //return the array
    this.getAll = function () {
        return images;
    };
    this.getContributors = function(){
        var contributor = [images[0].contributor,images[1].contributor,images[2].contributor];
        //return $http.get("/api/contributor");
        return contributor;
    }
    //generate search by id in the current array
    this.getById = function (ImageId) {
          return _.find(images, function(itemImage){
            return itemImage.id == ImageId});
    };
    //generate search by id in the current array
    this.getByName = function (ImageName) {
        return _.find(images, function(itemImage){
            return itemImage.name == ImageName});
        //Get /images); item por page and pageNumber 1 los siguientes
    };
    //add a new element to array
    this.create = function (imageName, imageDescription, imageContributor, imageTags, imageFile) {
        var tagsData = [];
        var fd = new FormData();

        fd.append('name', imageName);
        fd.append('description', imageDescription);
        fd.append('contributor',imageContributor);
        imageTags.forEach(function(tag){
            fd.append('tags', tag.text);
        });
        fd.append('tags', tagsData);
        fd.append('file', imageFile);

        return $http.post("/api/images", fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        });
       /* Item.id = ++cont;
        images.push(Item);*/
    };

    this.addContributor = function (contributorName) {
        var tagsData = [];
        var fd = new FormData();

        fd.append('name', contributorName);
        images[3].contributor = contributorName;

        var contributor = [images[0].contributor,images[1].contributor,images[2].contributor, images[3].contributor];
        //return $http.get("/api/contributor");
        return contributor;

//        return $http.post("/api/contributor", fd, {
//            transformRequest: angular.identity,
//            headers: {'Content-Type': undefined}
//        });
        /* Item.id = ++cont;
         images.push(Item);*/
    };
    this.getContributorById = function(contribId){
        var contributor = [images[0].contributor];
        //return $http.get("/api/contributor");
        return contributor;
    }
    //edit element to array
    this.update = function (imageId, imageName, imageDescription, imageContributor,imageTags,imageFile) {
        var tagsData = [];
        var fd = new FormData();

        fd.append('name', imageName);
        fd.append('description', imageDescription);
        fd.append('contributor',imageContributor);
        imageTags.forEach(function(tag){
            fd.append('tags', tag.text);
        });
        fd.append('tags', tagsData);
        fd.append('file', imageFile);

        return $http.put("/api/images"+imageId, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        });

    };
    //delete element to array
    this.delete = function (Image) {
        var elementId = _.find(images, function(Item){return Item.id == Image.id});
        var index = images.indexOf(elementId);
        //ELIMINAR
        $http.delete("/image/"+Image.id) //lo manda al server

    };

}]);
