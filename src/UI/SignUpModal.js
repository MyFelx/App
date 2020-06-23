import React, { Component } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import passwordValidator from "password-validator";
import API from "../API/API";
import AppButton from "./Button";
import GenericInput from "./Input";
import Modal from "./Modal";
import ValidationNotice from "./ValidityNotice";
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
    emailValidityNoticeNote: null,
  };

  checkSignupValidity = () => {
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
      {
        emailValid: validator.isEmail(this.state.emailInput),
        emailValidityNoticeNote: "Email is invalid",
      },
      () => {
        this.checkSignupValidity();
      }
    );
  };

  usernameInputChangeHandler = (event) => {
    this.setState({ usernameInput: event.target.value });
  };

  usernameValidityNotice = null;
  usernameInputBlurHandler = () => {
    this.setState(
      {
        usernameValid: this.state.usernameInput.length > 0,
      },
      () => {
        this.checkSignupValidity();
        this.usernameValidityNotice = this.state.usernameInput ? (
          <ValidationNotice
            isValid={this.state.usernameValid}
            ifValid={"Username is valid"}
            ifInvalid={"Username is Invalid"}
          />
        ) : null;
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
        this.checkSignupValidity();
      }
    );
  };

  confirmPasswordInputChangeHandler = (event) => {
    this.setState({ confirmPasswordInput: event.target.value });
  };

  confirmPasswordValidityNotice = null;
  confirmPasswordInputBlurHandler = () => {
    this.setState(
      {
        confirmPasswordMatched:
          this.state.confirmPasswordInput === this.state.passwordInput,
      },
      () => {
        this.checkSignupValidity();
        this.confirmPasswordValidityNotice = this.state.confirmPasswordInput ? (
          <ValidationNotice
            isValid={this.state.confirmPasswordMatched}
            ifValid={"Password Matches"}
            ifInvalid={"Password does not match"}
          />
        ) : null;
      }
    );
  };

  onSignup = () =>
    API.signUp(
      this.state.usernameInput,
      this.state.emailInput,
      this.state.passwordInput
    ).catch((err) => {
      if (true) {
        this.setState(
          {
            emailValid: false,
            emailValidityNoticeNote: "email already exists",
          }
          // () => console.log(this.state.emailValidityNoticeNote)
        );
      }
    });
  render() {
    return (
      <div>
        <Modal closable={false}>
          <h1 style={{ color: "#c1c1c1", marginLeft: "10px" }}>Sign Up</h1>
          <GenericInput
            inputType={"text"}
            icon={<UserOutlined style={iconStyling} />}
            placeholderValue={"Username"}
            inputValue={this.state.usernameInput}
            onInputChange={this.usernameInputChangeHandler}
            onInputBlur={this.usernameInputBlurHandler}
          />
          <div style={{ marginLeft: "20px", height: "18px" }}>
            {this.usernameValidityNotice}
          </div>
          <GenericInput
            inputType={"email"}
            icon={<MailOutlined style={iconStyling} />}
            placeholderValue={"Email"}
            inputValue={this.state.emailInput}
            onInputChange={this.emailInputChangeHandler}
            onInputBlur={this.emailInputBlurHandler}
          />

          <div style={{ marginLeft: "20px", height: "18px" }}>
            {this.state.emailInput ? (
              <ValidationNotice
                isValid={this.state.passwordLen}
                ifValid={"email is valid"}
                ifInvalid={this.state.emailValidityNoticeNote}
              />
            ) : null}
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
            <ValidationNotice
              isValid={this.state.passwordLen}
              ifValid={"More Than 8 Characters"}
              ifInvalid={"More Than 8 Characters"}
            />
            <ValidationNotice
              isValid={this.state.passwordLetter}
              ifValid={"Atleast 1 uppercase and 1 lowercase letters"}
              ifInvalid={"Atleast 1 uppercase and 1 lowercase letters"}
            />
            <ValidationNotice
              isValid={this.state.passwordNumber}
              ifValid={"Atleast 1 number"}
              ifInvalid={"Atleast 1 number"}
            />
            <ValidationNotice
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
          <div style={{ marginLeft: "20px", height: "18px" }}>
            {this.confirmPasswordValidityNotice}
          </div>
          <div style={{ textAlign: "center", marginTop: "35px" }}>
            <AppButton
              text={"Join"}
              height={"53px"}
              width={"165px"}
              color={"#c1c1c1"}
              fontSize={"24px"}
              backgroundColor={"#303030"}
              onClick={this.onSignup}
              disabled={!this.state.signUpValid}
              disabledColor={"#505050"}
              disabledBackgroundColor={"#262626"}
            />
          </div>
          <div>
            <span style={{ color: "#c1c1c1" }}>Already have an acount?</span>
            <Link to={"/login"}> Login</Link>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SignUpModal;
