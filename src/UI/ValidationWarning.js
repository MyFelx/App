import React from "react";
import styled from "styled-components";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const StyledNotice = styled.div`
  color: ${(props) => (props.isValid ? "green" : "#EA3737")};
  font-size: 12px;
`;

const ValidationWarning = (props) => {
  return (
    <StyledNotice isValid={props.isValid}>
      {props.isValid ? (
        <CheckOutlined style={{ marginRight: "4px" }} />
      ) : (
        <CloseOutlined style={{ marginRight: "4px" }} />
      )}
      {props.isValid ? props.ifValid : props.ifInvalid}
    </StyledNotice>
  );
};
export default ValidationWarning;
