import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../API/API";
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
    emailInput: "",
    emailValid: false,
    passwordInput: "",
    passwordValid: false,
    incorrectLogin: false,
  };

  emailInputChangeHandler = (event) => {
    this.setState({ emailInput: event.target.value });
  };

  passwordInputChangeHandler = (event) => {
    this.setState({ passwordInput: event.target.value });
  };

  loginFailed = () => {
    this.setState({
      incorrectLogin: true,
    });
  };

  render() {
    return (
      <Modal closable={false}>
        <h1 style={{ color: "#c1c1c1", marginLeft: "10px" }}>Login</h1>
        <GenericInput
          inputType={"text"}
          icon={<UserOutlined style={iconStyling} />}
          placeholderValue={"email"}
          inputValue={this.state.emailInput}
          onInputChange={this.emailInputChangeHandler}
        />
        <GenericInput
          inputType={"password"}
          icon={<KeyOutlined style={iconStyling} />}
          placeholderValue={"Password"}
          inputValue={this.state.passwordInput}
          onInputChange={this.passwordInputChangeHandler}
        />
        <div style={{ height: "20px", paddingLeft: "20px" }}>
          {this.state.incorrectLogin ? (
            <div>
              <ValidationNotice
                isValid={false}
                noticeMessage={"Incorrect email or password"}
              />
            </div>
          ) : null}
        </div>
        <div style={{ textAlign: "center" }}>
          <AppButton
            text={"Continue"}
            height={"53px"}
            width={"165px"}
            color={"#c1c1c1"}
            fontSize={"24px"}
            backgroundColor={"#303030"}
            onClick={() =>
              API.login(
                this.state.emailInput,
                this.state.passwordInput,
                this.loginFailed()
              )
            }
          />
        </div>
        <div>
          <span style={{ color: "#c1c1c1" }}>Don't have an acount?</span>
          <Link to={"/signup"}> Sign Up</Link>
        </div>
      </Modal>
    );
  }
}

export default LoginModal;
