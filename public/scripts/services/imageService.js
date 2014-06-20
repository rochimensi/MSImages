app.service('imageService', ['$http','$q', function ($http, $q) {
    var cont = 3;
    var images =  [
        {
            name:'Flowers 1',
            description:'Description of image 1',
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
            id:'2',
            tags: [{text: 'blue'}],
            logotype:'uploads/1465355_390814357716435_1044122934_n.png'
        },
        {
            name:'Flowers 3',
            description:'Description of image 3',
            id:'3',
            tags:[{text: 'green'}],
            logotype:'uploads/descarga.jpg'
        }];

    //return the array
    this.getAll = function () {
        return images;
    };

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
    this.create = function (imageName, imageDescription, imageTags, imageFile) {
        var tagsData = [];
        var fd = new FormData();

        fd.append('name', imageName);
        fd.append('description', imageDescription);
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

    //edit element to array
    this.update = function (Image) {
        var elementId = _.find(images, function(Item){return Item.id == Image.id});
        var index = images.indexOf(elementId);
        images[index].name = Image.name;
        images[index].description = Image.description;
        images[index].tags = Image.tags;
        $http.put("/image/"+Image.id,Image) //lo manda al server

    };
    //delete element to array
    this.delete = function (Image) {
        var elementId = _.find(images, function(Item){return Item.id == Image.id});
        var index = images.indexOf(elementId);
        //ELIMINAR
        $http.delete("/image/"+Image.id) //lo manda al server

    };

}]);
