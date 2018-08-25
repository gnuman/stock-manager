import { Map } from "immutable";

import { LOGIN, REGISTER, STOCKHOME } from "../actions";

const initial = Map({
  appState: LOGIN
});

const reducer = (state = initial, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
    case STOCKHOME:
      return state.set("appState", action.type);
    case "@@INIT":
      return Map(state);
    default:
      return state;
  }
};

export default reducer;
