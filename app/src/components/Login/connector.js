import { connect } from "react-redux";
import CredentialComponent from "./apolloConnector";

import {
  createEmailInput,
  createPasswordInput,
  registerBtnPress,
  registerBtnFailure,
  onLogin,
  navigateToRegister
} from "../../dispatchers/authentication";
import { authSelector } from "../../selectors/auth";

export default connect(
  state => {
    const authState = authSelector(state);
    //const { emailValue, passwordValue, isLoading, error } = authSelector(state);
    return {
      emailValue: authState.get("emailValue"),
      passwordValue: authState.get("passwordValue"),
      isLoading: authState.get("isLoading"),
      error: authState.get("error")
    };
  },
  {
    createEmailInput,
    createPasswordInput,
    registerBtnPress,
    registerBtnFailure,
    navigateToRegister,
    onLogin
  }
)(CredentialComponent);
