import React, { PureComponent } from "react";
import { Col, Card } from "react-bootstrap";

interface TodoProps {
  id: number;
  description: string;
  deadline: Date;
  complete: boolean;
  toggleTodoComplete(id: number): void;
}

export class _Todo extends PureComponent<TodoProps> {
  render() {
    const { description, deadline, complete } = this.props;

    const date = new Date(deadline);

    const formattedDeadline = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    return (
      <Col lg={4} className="mb-4">
        <Card className={complete ? "complete todo" : "todo"}>
          <button
            className="toggle-complete"
            onClick={this.handleTodoCompleteToggle}
          >
            {complete ? (
              <img src="/icons/reload.svg" alt="" className="icon" />
            ) : (
              <img src="/icons/check.svg" alt="" className="icon" />
            )}
          </button>

          <Card.Body>
            <Card.Text className="text-center">
              <h4>{formattedDeadline}</h4>
            </Card.Text>
            <hr />
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  handleTodoCompleteToggle = () => {
    const { toggleTodoComplete, id } = this.props;

    toggleTodoComplete(id);
  };
}
