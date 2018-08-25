import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import LoadButton from "../LoadButton/component";
import styles from "./styles";

export default class Login extends PureComponent {
  static propTypes = {
    error: PropTypes.string,
    emailValue: PropTypes.string.isRequired,
    createEmailInput: PropTypes.func.isRequired,
    passwordValue: PropTypes.string.isRequired,
    createPasswordInput: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    navigateToRegister: PropTypes.func.isRequired,
    createSession: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired
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
              placeholder="Username"
              onChange={event =>
                this.props.createEmailInput(event.currentTarget.value)}
            />
          </div>
          <div className={styles.field}>
            <input
              className="form-input"
              placeholder="Password"
              type="password"
              onChange={event =>
                this.props.createPasswordInput(event.currentTarget.value)}
            />
          </div>
          <div className={styles.field}>
            <LoadButton
              isLoading={this.props.isLoading}
              buttonTitle="Login"
              onClick={() =>
                this.props
                  .createSession({
                    email: this.props.emailValue,
                    password: this.props.passwordValue
                  })
                  .then(({ data: { createSession: token } }) =>
                    this.props.onLogin({ token })
                  )}
            />
          </div>
          <div className={styles.field}>
            <button onClick={() => this.props.navigateToRegister()}>
              {" "}
              New User{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
