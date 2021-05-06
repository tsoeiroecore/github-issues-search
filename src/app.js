const requires = ["ngRoute", "ngAnimate", "ngAria", "ngMaterial", "ngMessages"];
const app = angular.module('app', requires);
app.config(function ($mdThemingProvider, $mdIconProvider, $provide) {
        $mdThemingProvider.theme("green")
        .primaryPalette("teal")
        .accentPalette("red");

    $mdThemingProvider.alwaysWatchTheme(true);
});

angular.module("app").config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
}]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ["app"]);
});