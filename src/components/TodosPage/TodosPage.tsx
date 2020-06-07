import React, { PureComponent } from "react";
import { Todo } from "../../models/Todo";
import { Header } from "../Header/Header";
import TodoForm from "../TodoForm/TodoForm";

interface TodosPageProps {
  username: string | null;
  todos: Todo[];
}
export class _TodosPage extends PureComponent<TodosPageProps> {
  state = {
    date: new Date(),
    content: "",
  };

  render() {
    const { username, todos } = this.props;
    const { date, content } = this.state;

    return (
      <div>
        <Header>Welcome back, {username}</Header>

        <TodoForm
          date={date}
          content={content}
          handleDateChange={this.handleDateChange}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }

  handleDateChange = (date: Date) => {
    this.setState({ date });
  };

  handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const content = event.currentTarget.value;

    this.setState({ content });
  };
}
