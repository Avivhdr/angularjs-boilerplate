(function () {
    angular
        .module('myApp')
        .controller('HomeController', HomeController)
        .component('home', homeComponent());

    function homeComponent(){
        return{
            replace: true,
            restrict: 'E',
            templateUrl: './app/components/home.html',
            controller: 'HomeController',
            controllerAs: 'ctrl'
        }
    }

    HomeController.$inject = ['utilService'];

    function HomeController(utilService) {
        var ctrl = this;

        //////////

            }

})();