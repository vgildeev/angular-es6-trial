const STORAGE_ID = 'simple-todos';
const Q = new WeakMap();

class Todos {
    constructor($q) {
        Q.set(this, $q);
    }

    getFromStorage() {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    }

    addToStorage(todos) {
        localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
    }

    fetch() {
        const deferred = Q.get(this).defer();

        deferred.resolve(this.getFromStorage());
        return deferred.promise;
    }
}

Todos.$inject = ['$q'];

export default Todos;
