import React, { Component } from "react";
import styled from "styled-components";
import { DownOutlined } from "@ant-design/icons";

const DividerDiv = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
`;
const TitleDiv = styled.div`
  color: ${(props) => props.color};
`;
const DividerLine = styled.hr`
  width: -webkit-fill-available;
  margin: 5px;
  color: ${(props) => props.color};
`;
const ArrowIcon = styled(DownOutlined)`
  padding: 0px 10px;
  font-size: calc(${(props) => props.fontSize}px * (2 / 3));
  color: ${(props) => props.color};
`;
const ExpandingDiv = styled.div`
  opacity: ${(props) => (props.show ? 1 : 0)};
  max-height: ${(props) => (props.show ? "100vh" : 0)};
  left: 0;
  background-color: #22dd22;
  transition: all 0.5s ease;
`;

class ExpandingDivider extends Component {
  state = {
    showContent: false,
  };

  toggleShowContent = () => {
    this.setState({ showContent: !this.state.showContent }, () =>
      console.log(this.state.showContent)
    );
  };

  render() {
    return (
      <div>
        <DividerDiv
          color={this.props.color}
          fontSize={this.props.fontSize}
          onClick={this.toggleShowContent}
        >
          <TitleDiv color={this.props.titleColor}>{this.props.title}</TitleDiv>
          <ArrowIcon
            fontSize={this.props.fontSize}
            color={this.props.titleColor}
          />
          <DividerLine color={this.props.lineColor} />
        </DividerDiv>
        <ExpandingDiv show={this.state.showContent}>
          {this.state.showContent ? this.props.children : null}
          {/* {this.props.children} */}
        </ExpandingDiv>
      </div>
    );
  }
}

export default ExpandingDivider;
