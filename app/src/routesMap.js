import { redirect, NOT_FOUND } from "redux-first-router";
import { LOGIN, REGISTER } from "./actions";

export default {
  // HOME: '/',
  [LOGIN]: {
    path: "/"
  },
  [REGISTER]: {
    path: "/user/register",
    thunk: (dispatch, getState, bag) => {}
  }
};
