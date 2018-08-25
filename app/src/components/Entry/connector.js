import { connect } from "react-redux";
import { selectAppState } from "../../selectors/appstate";
import Entry from "./component";

export default connect(state => ({
  appState: selectAppState(state)
}))(Entry);
