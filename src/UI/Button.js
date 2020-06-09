import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  text-align: center;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.backgroundColor};
  margin: 10px;
  border: ${(props) => props.border};
`;

const AppButton = (props) => (
  <StyledButton
    height={props.height}
    width={props.width}
    color={props.color}
    fontsize={props.fontSize}
    backgroundColor={props.backgroundColor}
    border={props.border}
    onClick={props.clicked}
  >
    {props.icon}
    {props.text}
  </StyledButton>
);

export default AppButton;
