var app = angular.module('StudioVI_View', ['ngRoute']);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('');
}]);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
    .when("/home", {
        templateUrl : "views/holder.html",
        controller  : "home-controller"
    })
    .when("/contact", {
        templateUrl : "views/contact.php",
        controller  : "contact-controller"
    })
    .when("/notFound", {
        templateUrl : "views/notFound.html",
        controller  : ""
    })
    .otherwise({
        redirectTo : "/home"
    });

}]);

app.controller('contact-controller',['$scope', function($scope){
}]);

app.controller('confirm-controller',['$scope', function($scope){

    setTimeout("location.href = 'http://studiovi.io';",500000);

}]);