import { graphql } from "react-apollo";
import Login from "./component";
import createSession from "../../queries/createSession.gql";

export default graphql(createSession, {
  options: props => ({
    variables: {
      email: props.emailValue,
      password: props.passwordValue
    }
  }),
  name: "createSession"
})(Login);
