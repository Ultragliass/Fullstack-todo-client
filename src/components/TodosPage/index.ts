import { connect } from "react-redux";
import { _TodosPage } from "./TodosPage";
import { IState } from "../../models/State";
import { getUserDataAction } from "../../actions/userActions";

const mapStateToProps = (state: IState) => {
  return {
    todos: state.todos,
    username: state.username,
  };
};

const mapDispatchToProps = {
  getUserData: getUserDataAction,
};

export const TodosPage = connect(mapStateToProps, mapDispatchToProps)(_TodosPage);
