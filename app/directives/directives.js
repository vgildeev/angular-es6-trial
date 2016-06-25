import angular from 'angular';

import { TodoList } from 'components/todo-list/list/todo-list.directive.js';
import { TodoForm } from 'components/todo-list/edit/todo-form.directive.js';
import { TablePlots } from 'components/table-plots/table-plots.directive.js';
import { Plot } from 'components/table-plots/plots.directive.js';

angular.module('directives', [])

.directive('todoList', TodoList.createInstance)
.directive('todoForm', TodoForm.createInstance)
.directive('tablePlots', TablePlots.createInstance)
.directive('plot', Plot.createInstance);
