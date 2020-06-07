import React, { PureComponent, ChangeEvent, FormEvent } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface GenericFormProps {
  username: string;
  password: string;
  handleInputChange(event: any): void;
  handleSubmit(event: any): void;
  buttonText: string;
  pathText: string;
  path: string;
}

export default class GenericForm extends PureComponent<GenericFormProps> {
  render() {
    const { username, password, buttonText, path, pathText } = this.props;

    return (
      <Row className="justify-content-center pt-5">
        <Col lg={3}>
          <Form onSubmit={this.onSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={this.onInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.onInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Button
                variant="outline-dark"
                type="submit"
                className="form-control"
              >
                {buttonText}
              </Button>

              <Link to={path}>
                <p className="text-center">{pathText}</p>
              </Link>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    );
  }

  onInputChange = (event: ChangeEvent) => {
    const { handleInputChange } = this.props;

    handleInputChange(event);
  };

  onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const { handleSubmit } = this.props;

    handleSubmit(event);
  };
}
