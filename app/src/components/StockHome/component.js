import React, { PureComponent } from "react";
import PropTypes from "prop-types";
// import LoadButton from "../LoadButton/component";
import styles from "./styles";
import AddBalance from "../AddBalance/connector";

export default class StockHome extends PureComponent {
  
  static propTypes = {
    token: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    currentUserBalanceQuery: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <div>
        <AddBalance />
        {this.props.currentUserBalanceQuery.loading ? (
            <label> Loading please wait </label>
        ):(
            <div className={styles.container}>
            <div className={styles.innerContainer}>
              <label>To do Show stock table  </label>
            </div>
            </div>
        )}
       </div>
     </div>
    );
  }
}
