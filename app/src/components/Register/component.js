import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import LoadButton from "../LoadButton/component";
import styles from "./styles";

export default class Register extends PureComponent {
  static propTypes = {
    error: PropTypes.string,
    emailValue: PropTypes.string.isRequired,
    createEmailInput: PropTypes.func.isRequired,
    passwordValue: PropTypes.string.isRequired,
    createPasswordInput: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    profileValue: PropTypes.string.isRequired,
    createProfileInput: PropTypes.func.isRequired,
    registerBtnPress: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
    registerBtnFailure: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired
  };
  static defaultProps = {
    error: null
  };
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.field}>
            <input
              type="text"
              placeholder="Profile Name"
              onChange={event =>
                this.props.createProfileInput(event.currentTarget.value)}
            />
          </div>
          <div className={styles.field}>
            <input
              type="text"
              placeholder="Email Addr"
              onChange={event =>
                this.props.createEmailInput(event.currentTarget.value)}
            />
          </div>
          {this.props.error && <label>{this.props.error}</label>}
          <div className={styles.field}>
            <input
              type="password"
              placeholder="Password"
              onChange={event =>
                this.props.createPasswordInput(event.currentTarget.value)}
            />
          </div>

          <div className={styles.field}>
            <LoadButton
              isLoading={this.props.isLoading}
              buttonTitle="Register"
              onClick={() => {
                this.props.registerBtnPress();
                const result = this.props.createUser({
                  email: this.props.emailValue,
                  password: this.props.passwordValue,
                  profileName: this.props.profileValue
                });
                result.then(
                  data => this.props.onLogin(data.data.createSession),
                  error => this.props.registerBtnFailure(error.message)
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
