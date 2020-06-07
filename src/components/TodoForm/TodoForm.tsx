import React, { PureComponent, ChangeEvent } from "react";
import { Row, Form, Button, Col } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface TodoFormProps {
  date: Date;
  description: string;
  handleDateChange(date: Date): void;
  handleInputChange(event: any): void;
}

export default class TodoForm extends PureComponent<TodoFormProps> {
  render() {
    const { date, description } = this.props;

    return (
      <Row className="justify-content-center pt-5">
        <Col lg={4}>
          <Form.Group>
            <Calendar value={date} onChange={this.onChangeDate} />

            <Form.Control
              as="textarea"
              rows={12}
              placeholder="What do you need to do?"
              value={description}
              onChange={this.onChangeInput}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="success" className="form-control">
            Add Task
          </Button>
        </Col>
      </Row>
    );
  }

  onChangeDate = (date: any) => {
    const { handleDateChange } = this.props;

    handleDateChange(date);
  };

  onChangeInput = (event: ChangeEvent) => {
    const { handleInputChange } = this.props;

    handleInputChange(event);
  };
}
