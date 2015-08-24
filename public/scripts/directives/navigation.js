app.directive('navigation', function() {
    return {
            restrict: 'E',
        // If we want to use items inside the directive
        // we use items
        // out to the directive use =itemMenu or "=" to use the same name

        templateUrl : '../partials/nav.html'
    };
});
