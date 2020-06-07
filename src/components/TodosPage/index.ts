import { connect } from "react-redux";
import { _TodosPage } from "./TodosPage";
import { IState } from "../../models/State";

const mapStateToProps = (state: IState) => {
    return {
        todos: state.todos,
        username: state.username,
    }
}

export const TodosPage = connect(mapStateToProps)(_TodosPage);