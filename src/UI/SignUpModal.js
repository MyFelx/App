import React, { Component } from "react";
import validator from "validator";
import passwordValidator from "password-validator";
import AppButton from "../UI/Button";
import GenericInput from "../UI/Input";
import Modal from "../UI/Modal";
import ValidationWarning from "../UI/ValidationWarning";
import { UserOutlined, KeyOutlined, MailOutlined } from "@ant-design/icons";

const iconStyling = {
  color: "#c1c1c1",
  fontSize: "18px",
  marginLeft: "8px",
};

var passwordLength = new passwordValidator();
passwordLength.is().min(8);

var passwordLetters = new passwordValidator();
passwordLetters.has().uppercase().has().lowercase();

var passwordNumbers = new passwordValidator();
passwordNumbers.has().digits();

var passwordSymbols = new passwordValidator();
passwordSymbols.has().symbols();

class SignUpModal extends Component {
  state = {
    usernameInput: "",
    usernameValid: false,
    emailInput: "",
    emailValid: false,
    passwordInput: "",
    passwordLen: false,
    passwordLetter: false,
    passwordNumber: false,
    passwordSpecial: false,
    confirmPasswordInput: "",
    confirmPasswordMatched: false,
    signUpValid: false,
  };

  setSignUpValid = () => {
    this.setState({
      signUpValid:
        this.state.usernameValid &&
        this.state.emailValid &&
        this.state.passwordLen &&
        this.state.passwordLetter &&
        this.state.passwordNumber &&
        this.state.passwordSpecial &&
        this.state.confirmPasswordMatched,
    });
  };

  emailInputChangeHandler = (event) => {
    this.setState({ emailInput: event.target.value });
  };

  emailInputBlurHandler = () => {
    this.setState(
      { emailValid: validator.isEmail(this.state.emailInput) },
      () => {
        this.setSignUpValid();
      }
    );
  };

  usernameInputChangeHandler = (event) => {
    this.setState({ usernameInput: event.target.value });
  };

  usernameInputBlurHandler = () => {
    this.setState(
      { usernameValid: this.state.usernameInput.length > 0 },
      () => {
        this.setSignUpValid();
      }
    );
  };

  passwordInputChangeHandler = (event) => {
    this.setState({ passwordInput: event.target.value });
  };

  passwordInputBlurHandler = () => {
    this.setState(
      {
        passwordLen: passwordLength.validate(this.state.passwordInput),
        passwordLetter: passwordLetters.validate(this.state.passwordInput),
        passwordNumber: passwordNumbers.validate(this.state.passwordInput),
        passwordSpecial: passwordSymbols.validate(this.state.passwordInput),
      },
      () => {
        this.setSignUpValid();
      }
    );
  };

  confirmPasswordInputChangeHandler = (event) => {
    this.setState({ confirmPasswordInput: event.target.value });
  };

  confirmPasswordInputBlurHandler = () => {
    this.setState(
      {
        confirmPasswordMatched:
          this.state.confirmPasswordInput === this.state.passwordInput,
      },
      () => {
        this.setSignUpValid();
      }
    );
  };

  render() {
    return (
      <div>
        <Modal>
          <h1 style={{ color: "#c1c1c1", marginLeft: "10px" }}>Sign Up</h1>
          <GenericInput
            inputType={"text"}
            icon={<UserOutlined style={iconStyling} />}
            placeholderValue={"Username"}
            inputValue={this.state.usernameInput}
            onInputChange={this.usernameInputChangeHandler}
            onInputBlur={this.usernameInputBlurHandler}
          />
          <div style={{ marginLeft: "20px" }}>
            <ValidationWarning
              isValid={this.state.usernameValid}
              ifValid={"Username is valid"}
              ifInvalid={"Username already exists"}
            />
          </div>
          <GenericInput
            inputType={"email"}
            icon={<MailOutlined style={iconStyling} />}
            placeholderValue={"Email"}
            inputValue={this.state.emailInput}
            onInputChange={this.emailInputChangeHandler}
            onInputBlur={this.emailInputBlurHandler}
          />
          <div style={{ marginLeft: "20px" }}>
            <ValidationWarning
              isValid={this.state.emailValid}
              ifValid={"email is valid"}
              ifInvalid={"email is invalid"}
            />
          </div>
          <GenericInput
            inputType={"password"}
            icon={<KeyOutlined style={iconStyling} />}
            placeholderValue={"Password"}
            inputValue={this.state.passwordInput}
            onInputChange={this.passwordInputChangeHandler}
            onInputBlur={this.passwordInputBlurHandler}
          />
          <div style={{ marginLeft: "20px" }}>
            <ValidationWarning
              isValid={this.state.passwordLen}
              ifValid={"More Than 8 Characters"}
              ifInvalid={"More Than 8 Characters"}
            />
            <ValidationWarning
              isValid={this.state.passwordLetter}
              ifValid={"Atleast 1 uppercase and 1 lowercase letters"}
              ifInvalid={"Atleast 1 uppercase and 1 lowercase letters"}
            />
            <ValidationWarning
              isValid={this.state.passwordNumber}
              ifValid={"Atleast 1 number"}
              ifInvalid={"Atleast 1 number"}
            />
            <ValidationWarning
              isValid={this.state.passwordSpecial}
              ifValid={"Atleast 1 special character"}
              ifInvalid={"Atleast 1 special character"}
            />
          </div>
          <GenericInput
            inputType={"password"}
            icon={<KeyOutlined style={iconStyling} />}
            placeholderValue={"Confirm Password"}
            inputValue={this.state.confirmPasswordInput}
            onInputChange={this.confirmPasswordInputChangeHandler}
            onInputBlur={this.confirmPasswordInputBlurHandler}
          />
          <div style={{ marginLeft: "20px" }}>
            <ValidationWarning
              isValid={this.state.confirmPasswordMatched}
              ifValid={"Password Matches"}
              ifInvalid={"Password does not match"}
            />
          </div>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <AppButton
              text={"Join"}
              height={"53px"}
              width={"165px"}
              color={"#c1c1c1"}
              fontSize={"24px"}
              backgroundColor={"#303030"}
              onClick={() => alert("Joined")}
              disabledButton={!this.state.signUpValid}
            />
          </div>
          <div>
            <span style={{ color: "#c1c1c1" }}>Already have an acount?</span>
            <a href="/login"> Login</a>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SignUpModal;
