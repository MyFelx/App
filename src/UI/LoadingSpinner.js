import React from "react";
import styled from "styled-components";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const StyledSpinner = styled(Spin)`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 100;
  transform: translate(calc(-50% - 0.5px), calc(-50%));
`;

const antIcon = (
  <LoadingOutlined
    style={{
      zIndex: 5,
      fontSize: 100,
      color: "#c1c1c1",
    }}
    spin
  />
);

const LoadingSpinner = (props) => {
  return (
    <div>
      <StyledSpinner id="spinner" indicator={antIcon} />
    </div>
  );
};

export default LoadingSpinner;
