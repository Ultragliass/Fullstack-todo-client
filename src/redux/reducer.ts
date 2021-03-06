import { IAction } from "../models/Action";
import { IState } from "../models/State";

const initialState: IState = {
  username: null,
  todos: [],
  error: null,
  isLoggedIn: false,
  isLoading: false,
};

export enum Actions {
  loginUser = "LOGIN_USER",
  getUserData = "GET_USER_DATA",
  showError = "SHOW_ERROR",
  showLoading = "SHOW_LOADING",
  addTodo = "ADD_TODO",
  logoutUser = "LOGOUT_USER",
  toggleTodoComplete = "TOGGLE_TODO_COMPLEET",
  deleteTodo = "DELETE_TODO",
}

export const reducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case Actions.showError: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isLoading: false,
      };
    }

    case Actions.showLoading: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case Actions.loginUser: {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    }

    case Actions.getUserData: {
      const { todos, username } = action.payload;

      return {
        ...state,
        todos,
        username,
        isLoading: false,
      };
    }

    case Actions.addTodo: {
      const { id, deadline, description } = action.payload;
      const modifiedTodos = state.todos.slice();

      modifiedTodos.push({
        id,
        deadline,
        description,
        complete: false,
      });

      return {
        ...state,
        todos: modifiedTodos,
        isLoading: false,
      };
    }

    case Actions.toggleTodoComplete: {
      const { id } = action.payload;

      const modifiedTodos = state.todos.slice();

      const index = modifiedTodos.findIndex((todo) => id === todo.id);

      modifiedTodos[index].complete = !modifiedTodos[index].complete;

      return {
        ...state,
        todos: modifiedTodos,
        isLoading: false,
      };
    }

    case Actions.deleteTodo: {
      const { id } = action.payload;

      const modifiedTodos = state.todos.slice();

      const index = modifiedTodos.findIndex((todo) => id === todo.id);

      modifiedTodos.splice(index, 1);

      return {
        ...state,
        todos: modifiedTodos,
        isLoading: false,
      };
    }

    case Actions.logoutUser: {
      localStorage.removeItem("token");

      return initialState;
    }

    default: {
      return state;
    }
  }
};
