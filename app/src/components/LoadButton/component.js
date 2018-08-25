import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";
import { ClipLoader } from "react-spinners";

export default class LoadButton extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    buttonTitle: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object
  };
  render() {
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;
    if (this.props.isLoading) {
      return;
      <ClipLoader
        className={override}
        sizeUnit={"px"}
        size={150}
        color={"#123abc"}
        loading
      />;
    } else {
      return (
        <input
          type="button"
          value={this.props.buttonTitle}
          onClick={this.props.onClick}
        />
      );
    }
  }
}

LoadButton.defaultProps = {
  style: {
    backgroundColor: "#616161",
    width: 250,
    height: 40,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    marginTop: 15
  }
};
