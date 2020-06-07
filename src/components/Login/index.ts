import {_Login} from "./Login";
import { loginUserAction } from "../../actions/userActions";
import { connect } from "react-redux";

const mapDispatchToProps = {
    loginUser: loginUserAction,
}

export const Login = connect(null, mapDispatchToProps)(_Login);