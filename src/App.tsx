import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./components/Login";

class App extends React.PureComponent {
  render() {
    return (
      <Container className="container">
        <Switch>
          <Route path="/">
            <Login />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Container>
    );
  }
}

export default App;
