app.directive('navigation', function() {
    return {
            restrict: 'E',
        //items adentro de la directiva
        //afuera de la directiva lo llamos igual por usar =
           scope: {
                items: '=itemMenu'
            },
        templateUrl : '../partials/nav.html'
    };
});
