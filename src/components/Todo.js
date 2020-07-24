import React from "react";

// {onClick, completed, text} means an object
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    // double {{}} means first evaule the express and inside embeded object
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </li>
);

export default Todo;
