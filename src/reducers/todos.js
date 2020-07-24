// state: todos share in the whole app
// export state: todos to store shared in the whole app

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        // everything in the previous state
        ...state,
        // todo task object, change the object state based on action data
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
