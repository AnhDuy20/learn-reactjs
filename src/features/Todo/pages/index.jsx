import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../compoments/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature() {
    const todoList = [
        {
            id: 1,
            title: 'Eat'
        },
        {
            id: 2,
            title: 'sleep'
        },
        {
            id: 3,
            title: 'code'
        },
    ]

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} />
        </div>
    );
}

export default TodoFeature;