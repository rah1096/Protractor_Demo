angular.module('testApp', [
	'myApp.login',
	'ui.router',
])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('root', {
                url: '/',
                template: '<h1>{{ test.statement }}</h1>',
                controller: 'TestCtrl as test'
            });

        $urlRouterProvider.otherwise('/');
    })

    .controller('TestCtrl', function(debug) {
        debug('say it is so.');
        this.statement = 'This is the application root.'
    })
;