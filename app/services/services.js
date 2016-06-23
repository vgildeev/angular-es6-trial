import angular from 'angular';

import Todos from 'components/todo-list/todo-list.service.js';

angular.module('services', [])

.service('Todos', Todos);
