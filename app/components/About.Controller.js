(function () {
    angular
        .module('myApp')
        .controller("AboutController", AboutController)
        .directive('about', aboutComponent);


    function aboutComponent() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: './app/components/about.html',
            controller: 'AboutController',
            controllerAs: 'ctrl'
        }
    }

    AboutController.$inject = ['utilService'];

    function AboutController(utilService) {
        var ctrl = this;

        //////////


    }

})();

