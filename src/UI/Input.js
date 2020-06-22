import React, { Component } from "react";
import styled from "styled-components";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const StyledInput = styled.input`
  color: #c1c1c1;
  background-color: #303030;
  width: 495px;
  border: none;
  outline: none;
  font-size: 16px;
`;
const OuterDiv = styled.div`
  background-color: #303030;
  display: flex;
  align-items: center;
  padding: 5px;
  padding-right: 10px;

  justify-content: left;
  width: 550px;
  margin: 10px;
`;
const passwordIconStyling = {
  color: "#c1c1c1",
  fontSize: "18px",
  display: "flex",
};
class GenericInput extends Component {
  state = {
    showPassword: false,
  };
  toggleShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  getInputPasswordIcon = () => {
    if (this.props.inputType === "password") {
      if (this.state.showPassword) {
        return (
          <EyeOutlined
            style={passwordIconStyling}
            onClick={this.toggleShowPassword}
          />
        );
      } else {
        return (
          <EyeInvisibleOutlined
            style={passwordIconStyling}
            onClick={this.toggleShowPassword}
          />
        );
      }
    }
  };
  render() {
    return (
      <OuterDiv>
        <div style={{ marginRight: "3px", display: "flex" }}>
          {this.props.icon}
        </div>
        <StyledInput
          placeholder={this.props.placeholderValue}
          type={this.state.showPassword ? "text" : this.props.inputType}
          onChange={this.props.onInputChange}
          onBlur={this.props.onInputBlur}
          value={this.props.inputValue}
        />

        <div>{this.getInputPasswordIcon()}</div>
      </OuterDiv>
    );
  }
}

export default GenericInput;
