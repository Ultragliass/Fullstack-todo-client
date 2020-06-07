import React, { PureComponent } from "react";
import { Header } from "../Header/Header";
import GenericForm from "../GenericForm/GenericForm";

export class _Login extends PureComponent {
  render() {
    return (
      <div>
        <Header>Already registered? Login!</Header>

        <GenericForm />
      </div>
    );
  }
}
