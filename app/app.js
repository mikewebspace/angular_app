(function () {
'use strict';

const app = angular.module('main', ['app-route']);

app.directive('appMenu', function () {
	return {
		restrict: 'E',
		templateUrl: 'templates/app-menu.html'
	};
});

})();
