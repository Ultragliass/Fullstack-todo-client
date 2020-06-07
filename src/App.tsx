import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { connect } from "react-redux";
import { IState } from "./models/State";
import { TodosPage } from "./components/TodosPage";
import { loginReturningUserAction } from "./actions/userActions";

interface AppProps {
  isLoggedIn: boolean;
  isLoading: boolean;
  loginReturningUser(): void;
}

class _App extends React.PureComponent<AppProps> {
  render() {
    const { isLoading, isLoggedIn } = this.props;

    if (!isLoggedIn) {
      this.handleReturningUser();
    }

    return (
      <Container className="container">
        {isLoading ? <div id="cover-spin"></div> : null}
        <Switch>
          <Route path="/register">
            <Register />
          </Route>

          <PrivateRoute isLoggedIn={isLoggedIn} path="/todos">
            <TodosPage />
          </PrivateRoute>

          <Route exact path="/">
            <Login />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Container>
    );
  }

  handleReturningUser = () => {
    const { loginReturningUser } = this.props;

    loginReturningUser();
  };
}

const mapStateToProps = (state: IState) => {
  return {
    isLoggedIn: state.isLoggedIn,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = {
  loginReturningUser: loginReturningUserAction,
};

const App = connect(mapStateToProps, mapDispatchToProps)(_App);

export default App;
