import { connect } from "react-redux";

import CredentialComponent from "./apolloConnector";

import {
  createEmailInput,
  createPasswordInput,
  createProfileInput,
  registerBtnPress,
  registerBtnFailure,
  onLogin,
  navigateToLogin
} from "../../dispatchers/authentication";
import { authSelector } from "../../selectors/auth";

export default connect(
  state => {
    const authState = authSelector(state);
    return {
      emailValue: authState.get("emailValue"),
      passwordValue: authState.get("passwordValue"),
      profileValue: authState.get("profileValue"),
      isLoading: authState.get("isLoading"),
      error: authState.get("error")
    };
  },
  {
    createEmailInput,
    createPasswordInput,
    createProfileInput,
    registerBtnPress,
    registerBtnFailure,
    navigateToLogin,
    onLogin
  }
)(CredentialComponent);
