import { IAction } from "../models/Action";
import { Dispatch } from "redux";
import axios from "axios";
import { Actions } from "../redux/reducer";

const BASE_LINK: string = "http://localhost:3001";

export const loginUserAction = (username: string, password: string) => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      const response = await axios.post(`${BASE_LINK}/login`, {
        username,
        password,
      });

      const { token } = response.data;

      localStorage.setItem("token", token);

      dispatch({
        type: Actions.loginUser,
        payload: {
          token,
        },
      });

    } catch (response) {
        const error = response.data.msg;

        dispatch({
            type: Actions.showError,
            payload: {
                error
            }
        });
    }
  };
};
