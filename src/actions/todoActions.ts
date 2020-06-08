import { Dispatch } from "react";
import { IAction } from "../models/Action";
import { Actions } from "../redux/reducer";
import axios from "axios";

const BASE_LINK: string = "http://localhost:3001/todos";

const TOKEN = localStorage.getItem("token");

export function addTodoAction(date: Date, description: String): Function {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      showLoading(dispatch);

      const response = await axios({
        method: "POST",
        url: BASE_LINK,
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
        data: {
          deadline: date,
          description,
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
      showError(dispatch, err);
    }
  };
}

export function toggleTodoCompleteAction(id: number): Function {
  return async (dispatch: Dispatch<IAction>): Promise<void> => {
    try {
      showLoading(dispatch);

      await axios({
        method: "PUT",
        url: BASE_LINK,
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
        data: {
          todoId: id,
        },
      });

      dispatch({
        type: Actions.toggleTodoComplete,
        payload: {
          id,
        },
      });
    } catch (err) {
      showError(dispatch, err);
    }
  };
}

export function deleteTodoAction(id: number): Function {
  return async (dispatch: Dispatch<IAction>): Promise<void> => {
    try {
      showLoading(dispatch);

      await axios({
        method: "DELETE",
        url: BASE_LINK,
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
        data: {
          todoId: id,
        },
      });

      dispatch({
        type: Actions.deleteTodo,
        payload: {
          id,
        },
      });
    } catch (err) {
      showError(dispatch, err);
    }
  };
}

function showLoading(dispatch: Dispatch<IAction>): void {
  dispatch({
    type: Actions.showLoading,
    payload: {},
  });
}

function showError(dispatch: Dispatch<IAction>, err: any): void {
  const error = err.response.data.msg;

  dispatch({
    type: Actions.showError,
    payload: {
      error,
    },
  });
}
