let nextTodoId = 0
export const addTodo = (text) => {
    // console.log('action', 'addTodo')

    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

///////////////////////////////////////
import fetch from 'isomorphic-fetch'

export const fetchTodoList = (type) => {

    return function (dispatch) {
        fetch(`http://localhost:4000/api/todos`)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (todos) {
                // console.log('fetchTodoList::todos', todos);
                dispatch({
                    type: 'TODO_LIST_FETCH',
                    todos: todos
                })
            });
    }
}

