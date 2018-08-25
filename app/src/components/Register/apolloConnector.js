import { graphql } from "react-apollo";
import Auth from "./component";
import createUser from "../../queries/createUser.gql";

export default graphql(createUser, {
  // skip: (props) => !props.confirmRegister,
  options: props => ({
    fetchPolicy: "cache-and-network",
    variables: {
      email: props.emailValue,
      password: props.passwordValue,
      profileName: props.profileValue
    }
  }),
  name: "createUser"
})(Auth);
