import { connect } from "react-redux";
import { _GenericForm } from "./GenericForm";
import { dismissErrorAction } from "../../actions/userActions";

const mapDispatchToProps = {
  dismissError: dismissErrorAction,
};

export const GenericForm = connect(null, mapDispatchToProps)(_GenericForm);
