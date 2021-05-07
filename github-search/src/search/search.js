function SearchCtrl($scope, $http, $mdToast) {
    var vm = this;

    //TODO: use environment variables to store values below
    const BACKEND_URL = 'http://localhost:3000/issues'; //Make sure backend service is running (Check README.md file for instructions)

    this.$onInit = function () {
        vm.searchText = "";
        vm.totalIssues = 0;
    };

    vm.query = function (searchText) {
        /*  
            TODO: add API call in separate service
        */
        return $http({
            method: 'GET',
            url: `${BACKEND_URL}?search=${searchText}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function (result) {
            vm.totalIssues = result.data.total_count; //total issues found
            return result.data.items;
        }).catch(function () {
            vm.totalIssues = 0;
            vm.notifiy();
            return [];
        })
    };

    vm.openIssue = function (url) {
        if (url) window.open(url, '_blank');
    };

    vm.notifiy = function () {
        $mdToast.show(
            $mdToast.simple()
                .textContent("Something went wrong!")
                .hideDelay(3000))
    }
}

angular.module("app").component("search", {
    bindings: {},
    templateUrl: "src/search/search.html",
    controller: SearchCtrl
});