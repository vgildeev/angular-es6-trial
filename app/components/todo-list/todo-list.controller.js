import uuid from 'node-uuid';

const TODOS = new WeakMap();

class TodoListCtrl {
    constructor(Todos) {
        this.todo = {};
        this.todos = [];

        TODOS.set(this, Todos);
        TODOS.get(this).fetch().then(
            (success) => { this.todos = success; },
            (error) => { console.log(error); }
        );
    }

    addTodo(todo, form) {
        if (!todo || !todo.title) { return; }
        todo.id = uuid.v1();
        this.todos.push(todo);
        TODOS.get(this).addToStorage(this.todos);
        this.todo = {};
        form.$setValidity();
        form.$setUntouched();
        alert('Todo has been added successfully');
    }
}

TodoListCtrl.$inject = ['Todos'];

export default TodoListCtrl;
