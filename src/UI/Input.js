import React, { Component } from "react";
import styled from "styled-components";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const StyledInput = styled.input`
  color: #c1c1c1;
  background-color: #303030;
  width: 495px;
  margin: 10px;
  border: none;
  outline: none;
  font-size: 16px;
`;
const OuterDiv = styled.div`
  background-color: #303030;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 550px;
`;

class GenericInput extends Component {
  state = {
    showTogglePasswordButton: null,
    inputType: this.props.inputType,
  };

  isPassword = () => {
    if (this.props.inputType === "password") {
      this.setState({
        showTogglePasswordButton: (
          <EyeInvisibleOutlined
            style={{ color: "#c1c1c1", fontSize: "18px", margin: "8px" }}
            onClick={this.showPasswordChar}
          />
        ),
      });
    }
  };

  showPasswordChar = () => {
    if (this.state.inputType === "password") {
      this.setState({
        inputType: "text",
        showTogglePasswordButton: (
          <EyeOutlined
            style={{ color: "#c1c1c1", fontSize: "18px", margin: "8px" }}
            onClick={this.showPasswordChar}
          />
        ),
      });
    } else {
      this.setState({
        inputType: "password",
        showTogglePasswordButton: (
          <EyeInvisibleOutlined
            style={{ color: "#c1c1c1", fontSize: "18px", margin: "8px" }}
            onClick={this.showPasswordChar}
          />
        ),
      });
    }
  };

  componentWillMount() {
    this.isPassword();
  }

  render() {
    console.log(this.state.showTogglePasswordButton);
    console.log(this.state.inputType);
    return (
      <OuterDiv style={{ margin: "10px" }}>
        {this.props.icon}
        <StyledInput
          placeholder={this.props.initValue}
          type={this.state.inputType}
        />
        <div>{this.state.showTogglePasswordButton}</div>
      </OuterDiv>
    );
  }
}

export default GenericInput;
