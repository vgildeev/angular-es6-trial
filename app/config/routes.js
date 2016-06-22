import 'components/main/main.html';
import 'components/main/main.sass';
import mainCtrl from 'components/main/main-controller';

import 'components/todo-list/todo-list.html';
import TodoListCtrl from 'components/todo-list/todo-list.controller';

export default function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: '/components/main/main.html',
            controller: mainCtrl,
            controllerAs: 'mainCtrl'
        })
        .state('todo-list', {
            url: '/todo-list',
            templateUrl: '/components/todo-list/todo-list.html',
            controller: TodoListCtrl,
            controllerAs: 'TodoListCtrl'
        });
}
