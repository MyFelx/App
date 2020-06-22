import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  text-align: center;
  color: ${(props) => (props.disabled ? props.disabledColor : props.color)};
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) =>
    props.disabled ? props.disabledBackgroundColor : props.backgroundColor};
  margin: 10px;
  border: ${(props) => (props.border === undefined ? "none" : props.border)};
  outline: none;
  cursor: ${(props) => (!props.disabled ? "pointer" : "not-allowed")};
`;

const AppButton = (props) => (
  <StyledButton
    height={props.height}
    width={props.width}
    color={props.color}
    fontSize={props.fontSize}
    backgroundColor={props.backgroundColor}
    border={props.border}
    onClick={props.onClick}
    disabled={props.disabled}
    disabledColor={props.disabledColor}
    disabledBackgroundColor={props.disabledBackgroundColor}
  >
    {props.icon}
    {props.text}
  </StyledButton>
);

export default AppButton;
