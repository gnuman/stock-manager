import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import LoadButton from "../LoadButton/component";
import styles from "./styles";

export default class AddBalance extends PureComponent {
  
  static propTypes = {
    userId: PropTypes.integer, 
    amount: PropTypes.integer,
    createAmountInput: PropTypes.func.isRequired,
    addUserBalance: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.field}>
            <input
              type="number"
              placeholder="Add Balance to your acct"
              onChange={event =>
                this.props.createAmountInput(event.currentTarget.value)}
            />
          </div>
          <div className={styles.field}>
            <LoadButton
              isLoading={this.props.isLoading}
              buttonTitle="Add Balance"
              onClick={() =>
                this.props
                  .addUserBalance({
                    userId: this.props.userId,
                    amount: this.props.amount
                  })
                  .then(({ data: { addBalance: balance } }) => {
                    console.log('anish', balance);
                  })
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
