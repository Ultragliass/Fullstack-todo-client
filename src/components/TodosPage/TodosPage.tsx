import React, { PureComponent } from "react";
import { Todo } from "../../models/Todo";
import { Header } from "../Header/Header";
import TodoForm from "../TodoForm/TodoForm";

interface TodosPageProps {
  username: string | null;
  todos: Todo[];
  getUserData(): void;
  addTodo(date: Date, description: string): void;
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

    const {date, description} = this.state;
    const {addTodo} = this.props;

    addTodo(date, description);
  }

  componentDidMount() {
    const { getUserData } = this.props;
    getUserData();
  }
}