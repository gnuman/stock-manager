import { Map } from "immutable";
export default (state = {}, action = {}) => {
  if (action.type === "@@redux/INIT" || action.type === "@@INIT") {
    return state;
  }
  return state;
};
