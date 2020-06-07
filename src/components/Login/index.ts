import {_Login} from "./Login";
import { loginUserAction } from "../../actions/userActions";
import { connect } from "react-redux";
import { IState } from "../../models/State";

const mapStateToProps = (state: IState) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = {
    loginUser: loginUserAction,
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(_Login);