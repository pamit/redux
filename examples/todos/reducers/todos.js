import React from 'react'

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            });
        default:
            return state
    }
};

const todos = (state = [], action) => {
    // console.log('todo::reducer', action.type)

    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];

        case 'TOGGLE_TODO':
            return state.map(t =>
                todo(t, action)
            );

        case 'TODO_LIST_FETCH':
            console.log('todo::reducer::TODO_LIST_FETCH', action.todos);
            // return Object.assign({}, state, action.todos)
            // return [...state];
            return action.todos;

        // case 'TODO_LIST':
        //     console.log('action.type', 'TODO_LIST');

        default:
            return state
    }
};

export default todos
