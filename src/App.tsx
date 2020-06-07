import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { Switch, Route, Redirect } from "react-router-dom";

class App extends React.PureComponent {
  render() {
    return (
    <Container className="container">
      <Switch>

        <Route path="/">

        </Route>

      <Redirect to="/"/>
      
      </Switch>
    </Container>
    );
  }
}

export default App;
