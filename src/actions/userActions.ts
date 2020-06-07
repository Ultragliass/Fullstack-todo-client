import { IAction } from "../models/Action";
import { Dispatch } from "redux";
import axios from "axios";
import { Actions } from "../redux/reducer";

const BASE_LINK: string = "http://localhost:3001";

export const loginUserAction = (
  username: string,
  password: string
): Function => {
  return async (dispatch: Dispatch<IAction>) => {
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

      console.log({ token });

      //localStorage.setItem("token", token);

      dispatch({
        type: Actions.loginUser,
        payload: {},
      });
    } catch (err) {
      const error = err.response.data.msg;

      console.log({ error });

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
  return async (dispatch: Dispatch<IAction>) => {
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

      //localStorage.setItem("token", token);

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
