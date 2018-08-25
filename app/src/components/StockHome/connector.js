import { connect } from "react-redux";
import StockHomeComponent from "./apolloConnector";


import { authSelector } from "../../selectors/auth";

export default connect(
  state => {
    const authState = authSelector(state);
    return {
      token: authState.get("token"),
      
    };
  },
  {
    
  }
)(StockHomeComponent);
