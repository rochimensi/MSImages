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
    };
    //add a new element to array
    this.create = function (Item) {
        Item.id = ++cont;
        images.push(Item);
        //post file name, upload file (input) method = ?
        $http.post("/",Item) //lo manda al server

    };
    //edit element to array
    this.update = function (Image) {
        var elementId = _.find(images, function(Item){return Item.id == Image.id});
        var index = images.indexOf(elementId);
        images[index].name = Image.name;
        images[index].description = Image.description;
        images[index].tags = Image.tags;
        $http.put("/",Image) //lo manda al server

    };

}]);
