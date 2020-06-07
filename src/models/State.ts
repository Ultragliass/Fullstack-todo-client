import { Todo } from "./Todo";

export interface IState {
    todos: Todo[];
    username: string | null;
    error: string | null;
    isLoggedIn: boolean;
    isLoading: boolean;
}