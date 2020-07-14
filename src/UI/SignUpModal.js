import React, { Component } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import passwordValidator from "password-validator";
import styled from "styled-components";
import API from "../API/API";
import AppButton from "./Button";
import GenericInput from "./Input";
import Modal from "./Modal";
import ERROR_MESSAGES from "../enums/ErrorMessages";

import ValidationNotice from "./ValidityNotice";
import { UserOutlined, KeyOutlined, MailOutlined } from "@ant-design/icons";

const iconStyling = {
  color: "#c1c1c1",
  fontSize: "18px",
  marginLeft: "8px",
};
const NoticeContainer = styled.div`
  margin-left: 20px;
  height: 18px;
`;

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

  onInputChangeHandler = (event, inputToChange, callbackFunction) => {
    this.setState({ [inputToChange]: event.target.value }, callbackFunction);
  };

  isUsernameValid = (username) => {
    // this is temporary check until we can replace it with a proper
    // check against the uniqueness of the username.
    return username.length > 0;
  };

  emailValidate = () => {
    const emailValid = validator.isEmail(this.state.emailInput);
    let emailValidityString;
    if (emailValid) {
      emailValidityString = "Email is Valid!";
    } else {
      emailValidityString = "Email is InValid!";
    }
    this.setState(
      {
        emailValid,
        emailValidityString,
      },
      () => {
        this.checkSignupValidity();
      }
    );
  };

  usernameValidate = () => {
    const usernameValid = this.isUsernameValid(this.state.usernameInput);
    let usernameValidityString;
    if (usernameValid) {
      usernameValidityString = "";
    } else {
      usernameValidityString = "";
    }
    this.setState(
      {
        usernameValid,
        usernameValidityString,
      },
      () => {
        this.checkSignupValidity();
      }
    );
  };
  passwordValidate = () => {
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

  confirmPasswordValidate = () => {
    const confirmPasswordMatched =
      this.state.confirmPasswordInput === this.state.passwordInput;
    let confirmPasswordValidityString;
    if (confirmPasswordMatched) {
      confirmPasswordValidityString = "Password does not match!";
    } else {
      confirmPasswordValidityString = "Password Matches!";
    }
    this.setState(
      {
        confirmPasswordMatched,
        confirmPasswordValidityString,
      },
      () => {
        this.checkSignupValidity();
      }
    );
  };

  onSignup = () => {
    API.signUp(
      this.state.usernameInput,
      this.state.emailInput,
      this.state.passwordInput,
      () => {
        this.props.history.push("/");
      },
      (err) => {
        console.log(err);
        if (err) {
          this.setState({
            emailValidityString: ERROR_MESSAGES[err.errorCode],
          });
        }
      }
    );
  };

  createValidityNotice(noticeMessage, isValid) {
    return <ValidationNotice noticeMessage={noticeMessage} isValid={isValid} />;
  }
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
            onInputChange={(event) =>
              this.onInputChangeHandler(
                event,
                "usernameInput",
                this.usernameValidate
              )
            }
          />
          <NoticeContainer>
            {this.state.usernameValidityString
              ? this.createValidityNotice(
                  this.state.usernameValidityString,
                  this.state.usernameValid
                )
              : null}
          </NoticeContainer>

          <GenericInput
            inputType={"email"}
            icon={<MailOutlined style={iconStyling} />}
            placeholderValue={"Email"}
            inputValue={this.state.emailInput}
            onInputChange={(event) =>
              this.onInputChangeHandler(event, "emailInput", this.emailValidate)
            }
          />
          <NoticeContainer>
            {this.state.emailValidityString
              ? this.createValidityNotice(
                  this.state.emailValidityString,
                  this.state.emailValid
                )
              : null}
          </NoticeContainer>

          <GenericInput
            inputType={"password"}
            icon={<KeyOutlined style={iconStyling} />}
            placeholderValue={"Password"}
            inputValue={this.state.passwordInput}
            onInputChange={(event) => {
              this.onInputChangeHandler(
                event,
                "passwordInput",
                this.passwordValidate
              );
            }}
          />
          <div style={{ marginLeft: "20px" }}>
            {this.createValidityNotice(
              "More Than 8 Characters",
              this.state.passwordLen
            )}
            {this.createValidityNotice(
              "Atleast 1 uppercase and 1 lowercase letters",
              this.state.passwordLetter
            )}
            {this.createValidityNotice(
              "Atleast 1 number",
              this.state.passwordNumber
            )}
            {this.createValidityNotice(
              "Atleast 1 special character",
              this.state.passwordSpecial
            )}
          </div>

          <GenericInput
            inputType={"password"}
            icon={<KeyOutlined style={iconStyling} />}
            placeholderValue={"Confirm Password"}
            inputValue={this.state.confirmPasswordInput}
            onInputChange={(event) =>
              this.onInputChangeHandler(
                event,
                "confirmPasswordInput",
                this.confirmPasswordValidate
              )
            }
          />
          <NoticeContainer>
            {this.state.confirmPasswordValidityString
              ? this.createValidityNotice(
                  this.state.confirmPasswordValidityString,
                  this.state.confirmPasswordMatched
                )
              : null}
          </NoticeContainer>

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
