import angular from 'angular';

import { TodoList } from 'components/todo-list/list/todo-list.directive.js';

angular.module('directives', [])

.directive('todoList', TodoList.createInstance);
