import { connect } from "react-redux";
import { _Todo } from "./Todo";
import {
  toggleTodoCompleteAction,
  deleteTodoAction,
} from "../../actions/todoActions";

const mapDispatchToProps = {
  toggleTodoComplete: toggleTodoCompleteAction,
  deleteTodo: deleteTodoAction,
};

export const Todo = connect(null, mapDispatchToProps)(_Todo);
