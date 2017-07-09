(function () {
	'use strict';

	var app = angular.module('app-route', ['ui.router']);

	app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {

		$locationProvider.html5Mode(true);

		$stateProvider.state({
			name: 'home',
			url: '/',
			templateUrl: 'templates/home.html'
		});
		$stateProvider.state({
			name: 'menu1',
			url: '/menu1',
			templateUrl: 'templates/menu1.html'
		});
		$stateProvider.state({
			name: 'menu2',
			url: '/menu2',
			templateUrl: 'templates/menu2.html'
		});
		// Redirection vers le home si URL non trouvée
		$urlRouterProvider.otherwise('/');
	});

})();
