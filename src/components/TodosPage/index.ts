import { connect } from "react-redux";
import { _TodosPage } from "./TodosPage";
import { IState } from "../../models/State";
import { getUserDataAction, logoutUserAction } from "../../actions/userActions";
import { addTodoAction } from "../../actions/todoActions";

const mapStateToProps = (state: IState) => {
  return {
    todos: state.todos,
    username: state.username,
  };
};

const mapDispatchToProps = {
  getUserData: getUserDataAction,
  addTodo: addTodoAction,
  logoutUser: logoutUserAction,
};

export const TodosPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TodosPage);
