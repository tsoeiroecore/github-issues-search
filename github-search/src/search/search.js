function SearchCtrl($scope, $http, $mdToast) {
    var vm = this;

    //TODO: use environment variables to store values below
    const BACKEND_URL = 'https://api.github.com/search/issues';
    
    this.$onInit = function () {
        vm.searchText = "";
        vm.totalIssues = 0;
    };

    vm.query = function (searchText) {
        /*  
            TODO: add API call in separate service
            TODO: add pagination logic 
        */
        return $http({
            method: 'GET',
            url: `${BACKEND_URL}?q=${searchText}+user:facebook+state:open&per_page=100&sort=created&order=desc`,
            headers: {
                'Accept': 'application/json',
                //TODO: uncomment below to use your Github personal access token
                // 'Authorization': `Bearer ${GITHUB_TOKEN}`,
                'Content-Type': 'application/json'
            }
        }).then(function (result) {
            console.log(result.data);
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