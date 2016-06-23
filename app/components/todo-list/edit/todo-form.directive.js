import 'components/todo-list/edit/todo-form.tpl.html';

class TodoForm {
    constructor() {
        this.restrict = 'E';
        this.templateUrl = 'components/todo-list/edit/todo-form.tpl.html';
        this.scope = {
            todoItem: '=',
            action: '&'
        };
    }

    static createInstance() {
        TodoForm.instance = new TodoForm();
        return TodoForm.instance;
    }
}

export { TodoForm };

