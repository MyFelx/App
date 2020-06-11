import React from "react";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

const StyledModal = styled.div`
  position: fixed;
  z-index: 500;
  background-color: #202020;
  width: auto;
  padding: 16px;
  margin: 0 auto;
  box-sizing: border-box;
  display: block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const closeIconStyle = {
  color: "#404040",
  fontSize: "18px",
  margin: "8px",
  position: "absolute",
  left: "93%",
  top: "3%",
};

const Modal = (props) => {
  return (
    <div>
      <StyledModal>
        <CloseOutlined style={closeIconStyle} onClick={props.closeOnClick} />
        {props.children}
      </StyledModal>
    </div>
  );
};

export default Modal;
