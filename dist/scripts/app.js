(function () {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true, //disable the hashbang URLs
                requireBase: false
            });

        $stateProvider
            .state('main', {
                url: '/',
                controller: 'MainCtrl as main',
                templateUrl: '/templates/main.html'
            })
    }

    angular.module('blocChat', ['ui.router', 'firebase']);
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();