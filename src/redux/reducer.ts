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
        error,
        ...state,
      };
    }

    case Actions.showLoading: {
      return {
        isLoading: true,
        ...state,
      };
    }

    case Actions.loginUser: {
      return {
        isLoggedIn: true,
        isLoading: false,
        ...state,
      };
    }

    case Actions.getUserDate: {
      const { todos, username } = action.payload;

      return {
        todos,
        username,
        isLoading: false,
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};
