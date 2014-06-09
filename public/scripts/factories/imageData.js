app.factory('imageData', ['$q',  function ($q)  {
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
    return {
        //init object created
        getByName:function(ImageName){
            var deferred = $q.defer();
            var promise = deferred.promise;
            var result = [];
            result.push(_.find(images, function(itemImage){
                    return itemImage.name == ImageName
                })
            )
            deferred.resolve(result);
            return promise
        }}
    }]
);