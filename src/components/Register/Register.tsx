import React, { PureComponent } from "react";
import { Header } from "../Header/Header";
import GenericForm from "../GenericForm/GenericForm";

interface RegisterProps {
  registerUser(username: string, password: string): void;
}
export class _Register extends PureComponent<RegisterProps> {
  state = {
    username: "",
    password: "",
  };

  render() {
    const { username, password } = this.state;
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
