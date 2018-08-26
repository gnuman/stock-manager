import { Map } from "immutable";

import {
  AMOUNT_INPUT,
} from "../actions";

const initial = Map({
  balance: 0
});

const reducer = (state = initial, action) => {
  switch (action.type) {
    case AMOUNT_INPUT:
      return state.set("balance", action.input);
    case "@@INIT":
      return Map(state);
    default:
      return state;
  }
};

export default reducer;
