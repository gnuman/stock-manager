/**
   Authentication dispatchers.

   Note that authentication explicitely deals with users, eg figuring out who
   is who. This is different from permissions, which actually deals with
   getting permission from the OS.
*/

import { redirect } from "redux-first-router";
import { fromJS } from "immutable";
import { post } from "./fetch";

import {
  EMAIL_INPUT,
  PASSWORD_INPUT,
  PROFILE_INPUT,
  AUTH_ERROR,
  CONFIRM_PRESS,
  AUTH_SUCCESS,
  LOGIN,
  REGISTER,
  STOCKHOME,
} from "../actions/index";

import { authSelector } from "../selectors/auth";

export const createEmailInput = whatInput => ({
  type: EMAIL_INPUT,
  input: whatInput
});

export const createPasswordInput = whatInput => ({
  type: PASSWORD_INPUT,
  input: whatInput
});

export const createProfileInput = whatInput => ({
  type: PROFILE_INPUT,
  input: whatInput
});

export const createError = whatInput => ({
  type: AUTH_ERROR,
  input: whatInput
});

export const registerBtnPress = () => dispatch => {
  dispatch({ type: CONFIRM_PRESS });
};

export const navigateToRegister = () => ({
  type: REGISTER
});

export const navigateToLogin = () => ({
  type: LOGIN
});

export const onLogin = ({ token }) => (dispatch, getState) => {
  dispatch({ type: AUTH_SUCCESS, token });
  const globalState = getState();
  const authState = authSelector(globalState);
  const nextAction = authState.get("nextAction");
  dispatch(
    redirect(
      nextAction || {
        type: STOCKHOME
      }
    )
  );
};

export const registerBtnFailure = errorMsg => dispatch => {
  dispatch(createError(errorMsg));
};

export const confirmLogin = credentials => (dispatch, getState) => {
  post(`login`, credentials).then(
    response => {
      response.json().then(json => {
        dispatch({ type: AUTH_SUCCESS, user: fromJS(json) });
        const globalState = getState();
        const authState = authSelector(globalState);
        const nextAction = authState.get("nextAction");
        dispatch(redirect(nextAction));
      });
    },
    error => {
      dispatch(createError(error.message));
    }
  );
  dispatch({ type: CONFIRM_PRESS });
};
