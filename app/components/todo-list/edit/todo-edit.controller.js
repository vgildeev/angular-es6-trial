import _ from 'lodash';

const TODOS = new WeakMap();

class TodoEditCtrl {
    constructor($rootScope, Todos) {
        this.todoForEdit = {};
        this.todos = [];

        this.$stateParams = $rootScope.$stateParams;
        TODOS.set(this, Todos);
        TODOS.get(this).fetch().then(
            (success) => {
                this.todos = success;
                this.todoForEdit = _.find(this.todos, (o) => {
                    return o.id === this.$stateParams.id;
                });
            },
            (error) => { console.log(error); }
        );
    }

    editTodo(todo) {
        if (!todo || !todo.title) { return; }
        TODOS.get(this).addToStorage(this.todos);
        alert('Todo has been successfully updated');
    }
}

TodoEditCtrl.$inject = ['$rootScope', 'Todos'];

export default TodoEditCtrl;
