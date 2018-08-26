import { connect } from "react-redux";
import AddBalanceComponent from "./apolloConnector";

import {
  createAmountInput
} from "../../dispatchers/amount";

import { authSelector } from "../../selectors/auth";
import { amountSelector } from "../../selectors/amount";

export default connect(
  state => {
    const authState = authSelector(state);
    const amountState = amountSelector(state);
    return {
      userId: authState.get("userId"),
      amount: amountState.get("balance")
    };
  },
  {
    createAmountInput,
  }
)(AddBalanceComponent);
