import angular from 'angular';
import 'angular-ui-router';

import 'services/services';
import 'directives/directives';

import routes from 'config/routes';

angular.module('trial-task', ['ui.router', 'services', 'directives'])

.config(routes);
