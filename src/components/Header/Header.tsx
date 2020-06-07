import React, { PureComponent } from "react";
import { Row, Col } from "react-bootstrap";

export class Header extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <Row className="justify-content-center mt-5 mb-5">
        <Col lg={12} className="text-center">
          <h1>{children}</h1>
        </Col>
      </Row>
    );
  }
}
