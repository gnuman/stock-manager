import { createSelector } from "reselect";

/**
 * Selectors relating to authentication
 */

export const authSelector = state => state.auth;

export const isLoggedInSelector = state =>
  authSelector(state).get("isLoggedIn");

export const selectAuthToken = createSelector([authSelector], auth =>
  auth.get("token")
);
