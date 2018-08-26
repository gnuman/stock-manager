import { graphql } from "react-apollo";
import AddBalance from "./component";

import addBalance from "../../queries/addBalance.gql";

export default graphql(addBalance, {
  options: props => ({
    variables: {
      userId: props.userId,
      amount: props.amount,
    }
  }),
  name: "addUserBalance"
})(AddBalance);


