import React, { Component } from "react";
import validator from "validator";
import passwordValidator from "password-validator";
import AppButton from "../UI/Button";
import GenericInput from "../UI/Input";
import Modal from "../UI/Modal";
import ValidationNotice from "./ValidityNotice";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";

const iconStyling = {
  color: "#c1c1c1",
  fontSize: "18px",
  marginLeft: "8px",
};

class LoginModal extends Component {
  state = {
    usernameInput: "",
    usernameValid: false,
    passwordInput: "",
    passwordValid: false,
    incorrectLogin: <br />,
  };

  usernameInputChangeHandler = (event) => {
    this.setState({ usernameInput: event.target.value });
  };

  passwordInputChangeHandler = (event) => {
    this.setState({ passwordInput: event.target.value });
  };

  contiueButtonClick = () => {
    if (false) {
      alert("Logged In");
    } else {
      this.setState({
        incorrectLogin: (
          <div style={{ marginLeft: "20px" }}>
            <ValidationNotice
              isValid={this.state.confirmPasswordMatched}
              ifValid={"Password Matches"}
              ifInvalid={"Incorrect username or password"}
            />
          </div>
        ),
      });
    }
  };

  render() {
    return (
      <Modal closable={false}>
        <h1 style={{ color: "#c1c1c1", marginLeft: "10px" }}>Login</h1>
        <GenericInput
          inputType={"text"}
          icon={<UserOutlined style={iconStyling} />}
          placeholderValue={"Username"}
          inputValue={this.state.usernameInput}
          onInputChange={this.usernameInputChangeHandler}
        />
        <GenericInput
          inputType={"password"}
          icon={<KeyOutlined style={iconStyling} />}
          placeholderValue={"Password"}
          inputValue={this.state.passwordInput}
          onInputChange={this.passwordInputChangeHandler}
        />
        {this.state.incorrectLogin}
        <br />
        <div style={{ textAlign: "center" }}>
          <AppButton
            text={"Continue"}
            height={"53px"}
            width={"165px"}
            color={"#c1c1c1"}
            fontSize={"24px"}
            backgroundColor={"#303030"}
            onClick={this.contiueButtonClick}
          />
        </div>
        <div>
          <span style={{ color: "#c1c1c1" }}>Don't have an acount?</span>
          <a href="/sign-up"> Sign Up</a>
        </div>
      </Modal>
    );
  }
}

export default LoginModal;
