import { Map } from "immutable";

import {
  EMAIL_INPUT,
  PASSWORD_INPUT,
  PROFILE_INPUT,
  AUTH_ERROR,
  CONFIRM_PRESS,
  AUTH_SUCCESS,
  LOGIN,
  REGISTER
} from "../actions";

const initial = Map({
  error: null,
  emailValue: "anish.developer@gmail.com",
  passwordValue: "mypassword",
  profileValue: "",
  isLoading: false,
  nextAction: null, // where to go once completed
  isLoggedIn: false,
  token: null,
  userId: 1,
});

const reducer = (state = initial, action) => {
  switch (action.type) {
    case EMAIL_INPUT:
      return state.set("emailValue", action.input);
    case PASSWORD_INPUT:
      return state.set("passwordValue", action.input);
    case PROFILE_INPUT:
      return state.set("profileValue", action.input);
    case AUTH_ERROR:
      return state.set("error", action.input).set("isLoading", false);
    case AUTH_SUCCESS:
      return state
        .set("isLoading", false)
        .set("isLoggedIn", true)
        .set("token", action.token);
    case CONFIRM_PRESS:
      return state.set("isLoading", true);
    case LOGIN:
    case REGISTER:
      return state.set("nextAction", action.next || state.get("nextAction"));
    case "@@INIT":
      return Map(state);
    default: {
      return state;
    }
  }
};

export default reducer;
