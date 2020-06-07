import { IAction } from "../models/Action";
import { IState } from "../models/State";

const initialState: IState = {
  username: null,
  todos: [],
};

export enum Actions {
  getUserDate = "GET_USER_DATA",
}

export const reducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case Actions.getUserDate: {
      const { todos, username } = action.payload;
      
      return {
        todos,
        username,
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};
