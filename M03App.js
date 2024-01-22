import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import "./M03.css"

const M03App =() => {
    const [todos, setTodos] = useState(["Belajar React"]);
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (index) =>{
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="M03App">
            <h1> To-Do List </h1>
            <TodoInput addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo}/>
        </div>
    );
};

export default M03App;