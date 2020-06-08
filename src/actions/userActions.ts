import { IAction } from "../models/Action";
import { Dispatch } from "redux";
import axios from "axios";
import { Actions } from "../redux/reducer";

const BASE_LINK: string = "http://localhost:3001";

export const loginReturningUserAction = (): Function | void => {
  return (dispatch: Dispatch<IAction>) => {
    if (!localStorage.getItem("token")) {
      return;
    }

    dispatch({
      type: Actions.loginUser,
      payload: {},
    });
  };
};

export const loginUserAction = (
  username: string,
  password: string
): Function => {
  return async (dispatch: Dispatch<IAction>): Promise<void> => {
    try {
      dispatch({
        type: Actions.showLoading,
        payload: {},
      });

      const response = await axios.post(`${BASE_LINK}/login`, {
        username,
        password,
      });

      const { token } = response.data;

      localStorage.setItem("token", token);

      dispatch({
        type: Actions.loginUser,
        payload: {},
      });
    } catch (err) {
      const error = err.response.data.msg;

      dispatch({
        type: Actions.showError,
        payload: {
          error,
        },
      });
    }
  };
};

export const registerUserAction = (
  username: string,
  password: string
): Function => {
  return async (dispatch: Dispatch<IAction>): Promise<void> => {
    try {
      dispatch({
        type: Actions.showLoading,
        payload: {},
      });

      const response = await axios.post(`${BASE_LINK}/register`, {
        username,
        password,
      });

      const { token } = response.data;

      localStorage.setItem("token", token);

      dispatch({
        type: Actions.loginUser,
        payload: {},
      });
    } catch (err) {
      const error = err.response.data.msg;

      dispatch({
        type: Actions.showError,
        payload: {
          error,
        },
      });
    }
  };
};

export function getUserDataAction(): Function {
  return async (dispatch: Dispatch<IAction>): Promise<void> => {
    try {
      dispatch({
        type: Actions.showLoading,
        payload: {},
      });

      const token = localStorage.getItem("token");

      const response = await axios({
        method: "GET",
        url: `${BASE_LINK}/todos`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { todos, username } = response.data.userData;

      dispatch({
        type: Actions.getUserData,
        payload: {
          todos,
          username,
        },
      });
    } catch (err) {
      localStorage.removeItem("token");

      dispatch({
        type: Actions.logoutUser,
        payload: {},
      });
    }
  };
}
