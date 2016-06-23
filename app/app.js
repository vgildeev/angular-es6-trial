import angular from 'angular';
import 'angular-ui-router';

import 'directives/directives';
import 'services/services';

import routes from 'config/routes';

angular.module('trial-task', ['ui.router', 'directives', 'services'])

.config(routes)

.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
