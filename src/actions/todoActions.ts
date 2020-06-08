import { Dispatch } from "react";
import { IAction } from "../models/Action";
import { Actions } from "../redux/reducer";
import axios from "axios";

const BASE_LINK: string = "http://localhost:3001";

export function addTodoAction(date: Date, description: String): Function {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      dispatch({
        type: Actions.showLoading,
        payload: {},
      });

      const token = localStorage.getItem("token");

      const response = await axios({
        method: "POST",
        url: `${BASE_LINK}/todos`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
            deadline: date,
            description
        },
      });

      const { id } = response.data;

      dispatch({
        type: Actions.addTodo,
        payload: {
          id,
          deadline: date,
          description,
        },
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
}
