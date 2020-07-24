import React from "react";
import Todo from "./Todo";

// presentation component
// get the state as props and action function as props function

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        // {...todo} : property object lists -> id, text, conpleted
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  );
};

export default TodoList;

// this component together with container component (VisibleTodoList) to connect with action
