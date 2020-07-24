// container component
import { connect } from "react-redux";
import { VisibilityFilters, toggleTodo } from "../actions";
import TodoList from "../components/TodoList";

// container component
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((task) => task.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((task) => !task.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

// add props value from state changed base on changed.
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

// add props function from actions
const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

// this component is to get the changed state and map to property
