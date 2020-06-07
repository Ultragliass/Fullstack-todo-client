import { connect } from "react-redux";
import { _Register } from "./Register";
import { registerUserAction } from "../../actions/userActions";
import { IState } from "../../models/State";

const mapStateToProps = (state: IState) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = {
  registerUser: registerUserAction,
};

export const Register = connect(mapStateToProps, mapDispatchToProps)(_Register);
