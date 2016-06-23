import angular from 'angular';

import { TodoList } from 'components/todo-list/list/todo-list.directive.js';
import { TodoForm } from 'components/todo-list/edit/todo-form.directive.js';

angular.module('directives', [])

.directive('todoList', TodoList.createInstance)
.directive('todoForm', TodoForm.createInstance);
