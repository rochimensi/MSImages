app.service('imageService', ['$http','$q', function ($http, $q) {
    var cont = 3;
    var images =  [
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
    this.edit = function (Item) {
        Item.id = ++cont;
        images.push(Item);
        //post file name, upload file (input) method = ?
        $http.post("/",Item) //lo manda al server

    };

}]);
