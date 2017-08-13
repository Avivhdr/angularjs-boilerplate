(function () {
    angular
        .module('myApp')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        var homeState = {
            url: "/home",
            template: '<home></home>'
        };

        var aboutState = {
            url: '/about',
            template: '<about></about>'
        };

        $stateProvider
            .state('home', homeState)
            .state('about', aboutState)

    }

})();
