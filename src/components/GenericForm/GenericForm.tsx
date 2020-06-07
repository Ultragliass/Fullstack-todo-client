import React, { PureComponent } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface GenericFormProps {
    username: string;
    password: string;
    handleInputChange: Function;
    handleSubmit: Function;
}

export default class GenericForm extends PureComponent<GenericFormProps> {
  render() {
    return (
      <Row className="justify-content-center pt-5">
        <Col lg={3}>
          <Form onSubmit={() => {}}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>

            <Form.Group>
              <Button
                variant="outline-dark"
                type="submit"
                className="form-control"
              >
                Login
              </Button>

              <Link to="/register">
                <p className="text-center">Not a user yet? Register!</p>
              </Link>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    );
  }
}
