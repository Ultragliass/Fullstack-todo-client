import { connect } from "react-redux";
import { _Register } from "./Register";
import { registerUserAction } from "../../actions/userActions";

const mapDispatchToProps = {
  registerUser: registerUserAction,
};

export const Register = connect(null, mapDispatchToProps)(_Register);
