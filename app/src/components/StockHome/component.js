import React, { PureComponent } from "react";
import PropTypes from "prop-types";
// import LoadButton from "../LoadButton/component";
import styles from "./styles";

export default class StockHome extends PureComponent {
  
  static propTypes = {
    token: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    currentUserBalanceQuery: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        {this.props.currentUserBalanceQuery.loading ? (
            <label> Loading please wait </label>
        ):(
         <div className={styles.container}>
           <div className={styles.innerContainer}>
             <label> This is home page </label>
          </div>
        </div>
       )}
     </div>
    );
  }
}
