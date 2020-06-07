import React, { PureComponent } from "react";
import { Header } from "../Header/Header";
import GenericForm from "../GenericForm/GenericForm";
import { Redirect } from "react-router-dom";

interface LoginProps {
  loginUser(username: string, password: string): void;
  isLoggedIn: boolean;
}
export class _Login extends PureComponent<LoginProps> {
  state = {
    username: "",
    password: "",
  };

  render() {
    const { username, password } = this.state;
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/todos" />;
    }

    return (
      <div>
        <Header>Already registered? Login!</Header>

        <GenericForm
          username={username}
          password={password}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          buttonText={"Login"}
          pathText={"Not a user yet? Register!"}
          path={"/register"}
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
    const { loginUser } = this.props;
    const { username, password } = this.state;

    loginUser(username, password);
  };
}
