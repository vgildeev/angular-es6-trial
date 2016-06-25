import angular from 'angular';

import Todos from 'components/todo-list/todo-list.service';
import Utility from 'components/table-plots/utility.service';

angular.module('services', [])

.service('Todos', Todos)
.service('Utility', Utility);
