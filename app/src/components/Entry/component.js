import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Login from "../Login/connector";
import Register from "../Register/connector";
import StockHome from "../StockHome/connector";
import { LOGIN, REGISTER, STOCKHOME } from "../../actions/index";

export default class Entry extends PureComponent {
  static propTypes = {
    appState: PropTypes.string.isRequired
  };

  render() {
    switch (this.props.appState) {
      case LOGIN:
        return <Login />;
      case REGISTER:
        return <Register />;
      case STOCKHOME:
        return <StockHome />;
      default:
        return <Login />;
    }
  }
}
