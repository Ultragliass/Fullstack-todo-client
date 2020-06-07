import React, { PureComponent } from "react";
import { Header } from "../Header/Header";
import GenericForm from "../GenericForm/GenericForm";

interface LoginProps {
  loginUser(username: string, password: string): void;
}
export class _Login extends PureComponent<LoginProps> {
  state = {
    username: "",
    password: "",
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <Header>Already registered? Login!</Header>

        <GenericForm
          username={username}
          password={password}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
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
