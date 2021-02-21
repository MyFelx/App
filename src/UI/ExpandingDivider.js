import React, { Component } from "react";
import styled from "styled-components";
import { DownOutlined } from "@ant-design/icons";

const DividerDiv = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
  cursor: pointer;
`;
const TitleDiv = styled.div`
  color: ${(props) => props.color};
  text-transform: uppercase;
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
  transition: all 0.5s ease;
  transform: ${(props) => (!props.showing ? "rotate(-90deg)" : null)};
`;
const ExpandingDiv = styled.div`
  opacity: ${(props) => (props.show ? 1 : 0)};
  max-height: ${(props) =>
    props.show ? (props.height ? props.height + "px" : "unset") : 0};
  overflow: hidden;
  left: 0;
  transition: all 0.5s ease;
`;

class ExpandingDivider extends Component {
  state = {
    showContent: false,
  };

  expandingDivRef = React.createRef();

  toggleShowContent = () => {
    this.setState({ showContent: !this.state.showContent });
  };
  getContentHeight() {
    return this.expandingDivRef.current?.scrollHeight;
  }
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
            showing={this.state.showContent}
            fontSize={this.props.fontSize}
            color={this.props.titleColor}
          />
          <DividerLine color={this.props.lineColor} />
        </DividerDiv>
        <ExpandingDiv
          ref={this.expandingDivRef}
          height={this.getContentHeight()}
          show={this.state.showContent}
        >
          {this.props.children}
          <DividerLine
            color={this.props.lineColor}
            style={{ margin: "0px 15px" }}
          />
        </ExpandingDiv>
      </div>
    );
  }
}

export default ExpandingDivider;
