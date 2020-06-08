import React, { PureComponent } from "react";
import { Header } from "../Header/Header";
import { GenericForm } from "../GenericForm";
import { Redirect } from "react-router-dom";

interface RegisterProps {
  registerUser(username: string, password: string): void;
  isLoggedIn: boolean;
}
export class _Register extends PureComponent<RegisterProps> {
  state = {
    username: "",
    password: "",
  };

  render() {
    const { username, password } = this.state;
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/todo" />;
    }

    return (
      <div>
        <Header>Not a user yet? Register!</Header>

        <GenericForm
          username={username}
          password={password}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          buttonText={"Register"}
          pathText={"Already a user? Login!"}
          path={"/"}
        />
      </div>
    );
  }

  handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event: Event) => {
    event.preventDefault();
    const { registerUser } = this.props;
    const { username, password } = this.state;

    registerUser(username, password);
  };
}
