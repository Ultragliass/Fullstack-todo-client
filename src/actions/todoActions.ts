import { Dispatch } from "react";
import { IAction } from "../models/Action";
import { Actions } from "../redux/reducer";
import axios from "axios";

const BASE_LINK: string = "http://localhost:3001";

export function addTodo(date: Date, description: String): Function {
    return async (dispatch: Dispatch<IAction>) => {
        try {
            dispatch({
                type: Actions.showLoading,
                payload: {},
              });

              const token = localStorage.getItem("token");

              const response = await axios({
                  method: "GET",
                  headers: {
                      Authorization: `Bearer ${token}`
                  }
              });



        } catch (err) {

        }
    }
}