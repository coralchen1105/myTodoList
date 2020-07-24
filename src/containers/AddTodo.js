import React from "react";

import { connect } from "react-redux";
import { addTodo } from "../actions";

// dispatch: function from redux to dispatch function from action,
// dispatch is the function from store and use to change state by action
const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          // addTodo is from action, we pass the input value to action for modify
          // hoop input data to change state
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input type="text" ref={(el) => (input = el)} />
        <button type="submit">Add Todo </button>
      </form>
    </div>
  );
};

// connect function connects a React component to a redux store
//If you call connect without providing any arguments, your component will:
//not re-render when the store changes
//receive props.dispatch that you may use to manually dispatch action
export default connect()(AddTodo);
