(function () {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            // Do something to allow users to set their username
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/enterUsername.html',
                controller: 'EnterUsernameCtrl',
                controllerAs: '$ctrl',
                size: 'sm',
            });

            modalInstance.result.then(function (data) {

                $cookies.put('blocChatCurrentUser', data);
                console.log($cookies.get('blocChatCurrentUser'));

            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }
    }

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

    angular.module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies']);
    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();