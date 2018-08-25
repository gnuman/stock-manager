import { graphql } from "react-apollo";
import StockHome from "./component";
import currentUserBalance from "../../queries/currentUserBalance.gql";

export default graphql(currentUserBalance, {
  options: props => ({
    variables: {
      token: props.token,
    }
  }),
  name: "currentUserBalanceQuery"
})(StockHome);


