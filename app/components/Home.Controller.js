(function () {
    angular
        .module('myApp')
        .controller('HomeController', HomeController)
        .directive('home', homeDirective);


    function homeDirective() {
        return {
            restrict: 'AE',
            templateUrl: './app/components/home.html',
            controller: 'HomeController',
            controllerAs: 'ctrl'
        }
    }

    HomeController.$inject = ['$http', '$scope', 'distanceService'];


    function HomeController($http, $scope, distanceService) {
        /// get data
        $http.get('./app/data/branches.json/')
            .then(function (response) {
                return response.data
            })
            .then(function (response) {
                ctrl.branches = response.branches;
            });
        //controller variables
        var ctrl = this;
        ctrl.location = {};
        ctrl.branches = [];
        ctrl.bestChain = '';
        ctrl.isShowBranches = false;
        ctrl.showBranches = showBranches;

        /// controller functions
        function showBranches() {
            addDistance(ctrl.branches, ctrl.location.latitude, ctrl.location.longitude);
            ctrl.bestChain = chooseBestChainIn50KmRadius();
            ctrl.isShowBranches = true;
        }

        function addDistance(branches, lat, lng) {
            branches.forEach(function (branch) {
                branch.currDistance = distanceService.getDistanceFromLatLonInKm(lat, lng, branch.lat, branch.lon);
            })
        }

        function chooseBestChainIn50KmRadius() {
            var branchCountPerChain = [];
            var bestChainCount = 0;
            var bestChain = '';
            ctrl.branches.filter(function(branch){
                if (branch.currDistance <= 50) return branch})
                .forEach(function(branch){
                    branchCountPerChain[branch.chain] = (branchCountPerChain[branch.chain]) ? (branchCountPerChain[branch.chain] + 1) : 1;
                    if (branchCountPerChain[branch.chain] >= bestChainCount) {
                        bestChainCount = branchCountPerChain[branch.chain];
                        bestChain = branch.chain
                    }
                });
            return bestChain;
        }
    }
})();