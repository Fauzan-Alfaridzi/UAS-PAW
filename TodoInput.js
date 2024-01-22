import React, { useState } from "react";

const TodoInput = (props) => {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim()){
            props.addTodo(inputValue);
            setInputValue("");
        }
    };
return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Tambahkan Todo..."/>
        <button type="submit">Tambahkan</button>
    </form>
        );
    
};

export default TodoInput;