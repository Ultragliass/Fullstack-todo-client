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
  getUserDate = "GET_USER_DATA",
  showError = "SHOW_ERROR",
  showLoading = "SHOW_LOADING",
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

    case Actions.getUserDate: {
      const { todos, username } = action.payload;

      return {
        ...state,
        todos,
        username,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};
