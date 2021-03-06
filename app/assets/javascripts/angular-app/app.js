(function() {
    var app = angular.module('app', ['ngRoute', 'ngResource', 'templates']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            controller: 'HomeCtrl'
        }).when('/:status', {
            controller: 'HomeCtrl'
        }).otherwise({
            redirectTo: '/'
        });
    }]);
})();