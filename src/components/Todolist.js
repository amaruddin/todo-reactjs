import React, { useState } from 'react';
import Todoform from './Todoform';
import Todo from './Todo';

function Todolist() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    }

    const removeTodo = (id) => {
        const removeList = [...todos].filter((todo) => todo.id !== id);
        setTodos(removeList);
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>Aplikasi To Do List</h1>
            <Todoform
                onSubmit={addTodo}
            />
            <Todo
                todos={todos}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
                completeTodo={completeTodo}
            />

        </div>


    );
}

export default Todolist;