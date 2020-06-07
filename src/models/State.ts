import { Todo } from "./Todo";

export interface IState {
    todos: Todo[];
    username: string | null;
}