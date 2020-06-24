import React from "react";
import styled from "styled-components";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const StyledNotice = styled.div`
  color: ${(props) => (props.isValid ? "green" : "#EA3737")};
  font-size: 12px;
`;

const ValidationNotice = (props) => {
  return (
    <StyledNotice isValid={props.isValid}>
      {props.isValid ? (
        <CheckOutlined style={{ marginRight: "4px" }} />
      ) : (
        <CloseOutlined style={{ marginRight: "4px" }} />
      )}
      {props.noticeMessage}
    </StyledNotice>
  );
};
export default ValidationNotice;
