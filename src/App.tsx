import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Alert } from "react-bootstrap";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { connect } from "react-redux";
import { IState } from "./models/State";
import { TodosPage } from "./components/TodosPage";
import {
  loginReturningUserAction,
  dismissErrorAction,
} from "./actions/userActions";
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface AppProps {
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
  loginReturningUser(): void;
  dismissError(): void;
}

class _App extends React.PureComponent<AppProps> {
  render() {
    const { isLoading, isLoggedIn, error } = this.props;

    if (!isLoggedIn) {
      this.handleReturningUser();
    }

    return (
      <Container className="container">
        {isLoading ? <div id="cover-spin"></div> : null}

        {error ? (
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="fade"
          >
            <Alert
              className="error"
              variant="danger"
              onClose={this.handleDismissError}
              dismissible
            >
              <Alert.Heading className="text-center">Error!</Alert.Heading>
              <p>{error}</p>
            </Alert>
          </CSSTransition>
        ) : null}
        <Switch>
          <TransitionGroup>
            <Route path="/register">
              <CSSTransition
                in={true}
                appear={true}
                timeout={500}
                classNames="fade"
              >
                <Register />
              </CSSTransition>
            </Route>

            <PrivateRoute isLoggedIn={isLoggedIn} path="/todos">
              <CSSTransition
                in={true}
                appear={true}
                timeout={500}
                classNames="fade"
              >
                <TodosPage />
              </CSSTransition>
            </PrivateRoute>

            <Route exact path="/">
              <CSSTransition
                in={true}
                appear={true}
                timeout={500}
                classNames="fade"
              >
                <Login />
              </CSSTransition>
            </Route>

            <Redirect to="/" />
          </TransitionGroup>
        </Switch>
      </Container>
    );
  }

  handleReturningUser = () => {
    const { loginReturningUser } = this.props;

    loginReturningUser();
  };

  handleDismissError = () => {
    const { dismissError } = this.props;

    dismissError();
  };
}

const mapStateToProps = (state: IState) => {
  return {
    isLoggedIn: state.isLoggedIn,
    isLoading: state.isLoading,
    error: state.error,
  };
};

const mapDispatchToProps = {
  loginReturningUser: loginReturningUserAction,
  dismissError: dismissErrorAction,
};

const App = connect(mapStateToProps, mapDispatchToProps)(_App);

export default App;
