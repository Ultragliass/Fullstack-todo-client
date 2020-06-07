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

interface AppProps {
  isLoggedIn: boolean;
  isLoading: boolean;
}

class _App extends React.PureComponent<AppProps> {
  render() {
    const { isLoading, isLoggedIn } = this.props;

    if (isLoading) {
      return <Redirect to="/todos" />;
    }

    return (
      <Container className="container">
        {isLoading ? <div id="cover-spin"></div> : null}
        <Switch>
          <Route path="/register">
            <Register />
          </Route>

          <PrivateRoute isLoggedIn={isLoggedIn} path="/todos"></PrivateRoute>

          <Route exact path="/">
            <Login />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Container>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    isLoggedIn: state.isLoggedIn,
    isLoading: state.isLoading,
  };
};

const App = connect(mapStateToProps)(_App);

export default App;
