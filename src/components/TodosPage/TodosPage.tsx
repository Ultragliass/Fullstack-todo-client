import React, { PureComponent } from "react";
import { Todo as ITodo } from "../../models/Todo";
import { Header } from "../Header/Header";
import TodoForm from "../TodoForm/TodoForm";
import { Todo } from "../Todo";
import { Row, Button } from "react-bootstrap";

interface TodosPageProps {
  username: string | null;
  todos: ITodo[];
  getUserData(): void;
  addTodo(date: Date, description: string): void;
  logoutUser(): void;
}
export class _TodosPage extends PureComponent<TodosPageProps> {
  state = {
    date: new Date(),
    description: "",
  };

  render() {
    const { username, todos } = this.props;
    const { date, description } = this.state;

    return (
      <div>
        <Header>Welcome back, {username}!</Header>

        <TodoForm
          date={date}
          description={description}
          handleDateChange={this.handleDateChange}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />

        <Row className="justify-content-center">
          {!todos.length ? (
            <Header>Looks like you have no todos yet!</Header>
          ) : (
            todos.map((todo) => <Todo key={todo.id} {...todo} />)
          )}
        </Row>

        <Button
          variant="danger"
          className="user-logout"
          onClick={this.handleUserLogout}
        >
          Logout
        </Button>
      </div>
    );
  }

  handleDateChange = (date: Date) => {
    this.setState({ date });
  };

  handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const description = event.currentTarget.value;

    this.setState({ description });
  };

  handleFormSubmit = (event: Event) => {
    event.preventDefault();

    const { date, description } = this.state;
    const { addTodo } = this.props;

    addTodo(date, description);
  };

  handleUserLogout = () => {
    const { logoutUser } = this.props;

    logoutUser();
  };

  componentDidMount() {
    const { getUserData } = this.props;
    getUserData();
  }
}
