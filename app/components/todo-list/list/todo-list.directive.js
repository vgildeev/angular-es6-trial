import 'components/todo-list/list/todo-list.tpl.html';

const TODOS = new WeakMap();

class TodoList {
    constructor(Todos) {
        this.restrict = 'E';
        this.templateUrl = 'components/todo-list/list/todo-list.tpl.html';
        this.scope = {
            todos: '='
        };
        TODOS.set(this, Todos);
    }

    link(scope) {
        scope.removeTodo = (idx) => {
            scope.todos.splice(idx, 1);
            TODOS.get(this).addToStorage(scope.todos);
        };
    }

    static createInstance(Todos) {
        TodoList.instance = new TodoList(Todos);
        return TodoList.instance;
    }
}

TodoList.$inject = ['Todos'];

export { TodoList };
