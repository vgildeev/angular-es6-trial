import 'components/main/main.html';
import 'components/main/main.sass';
import MainCtrl from 'components/main/main-controller';

import 'components/todo-list/todo-list.html';
import TodoListCtrl from 'components/todo-list/todo-list.controller';

import 'components/todo-list/add/todo-add.html';

import 'components/todo-list/edit/todo-edit.html';
import TodoEditCtrl from 'components/todo-list/edit/todo-edit.controller';

export default function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: '/components/main/main.html',
            controller: MainCtrl,
            controllerAs: 'mainCtrl'
        })
        .state('list', {
            url: '/list',
            abstract: true,
            template: '<ui-view />'
        })
        .state('list.all', {
            url: '/',
            templateUrl: '/components/todo-list/todo-list.html',
            controller: TodoListCtrl,
            controllerAs: 'list'
        })
        .state('list.add', {
            url: '/add',
            templateUrl: '/components/todo-list/add/todo-add.html',
            controller: TodoListCtrl,
            controllerAs: 'list'
        })
        .state('list.edit', {
            url: '/edit/:id',
            templateUrl: '/components/todo-list/edit/todo-edit.html',
            controller: TodoEditCtrl,
            controllerAs: 'todoEdit'
        });
}
