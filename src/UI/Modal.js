import React, { Component } from "react";
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
  opacity: ${(props) => props.modalOpacity};
`;

const closeIconStyle = {
  color: "#404040",
  fontSize: "18px",
  margin: "8px",
  position: "absolute",
  left: "93%",
  top: "3%",
};

class Modal extends Component {
  state = {
    modalOpacity: 0,
  };

  componentDidMount() {
    this.modalFadeIn();
  }

  modalFadeIn = () => {
    const fadeInInterval = setInterval(() => {
      this.setState({ modalOpacity: this.state.modalOpacity + 0.05 }, () => {
        if (this.state.modalOpacity >= 1) {
          this.setState({ modalOpacity: 1 }, () => {
            clearInterval(fadeInInterval);
          });
        }
      });
    }, 5);
  };

  modalFadeOut = () => {
    const closingInterval = setInterval(() => {
      this.setState({ modalOpacity: this.state.modalOpacity - 0.05 }, () => {
        if (this.state.modalOpacity <= 0) {
          this.setState({ modalOpacity: 0 }, () => {
            clearInterval(closingInterval);
          });
        }
      });
    }, 5);
  };

  render() {
    let closeModalButton = null;
    if (this.props.closable) {
      closeModalButton = (
        <CloseOutlined style={closeIconStyle} onClick={this.modalFadeOut} />
      );
    }

    return (
      <StyledModal modalOpacity={this.state.modalOpacity}>
        {closeModalButton}
        {this.props.children}
      </StyledModal>
    );
  }
}

export default Modal;
