import { connect } from "react-redux";
import { _Todo } from "./Todo";
import { toggleTodoCompleteAction } from "../../actions/todoActions";

const mapDispatchToProps = {
    toggleTodoComplete: toggleTodoCompleteAction,
}

export const Todo = connect(null, mapDispatchToProps)(_Todo);