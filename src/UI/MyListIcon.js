import React from "react";
import styled from "styled-components";
import { HeartFilled } from "@ant-design/icons";

const heartIconStyling = {
  color: "#c1c1c1",
  fontSize: "29px",
};

const NumberDiv = styled.div`
  position: relative;
  width: 17px;
  border-radius: 50%;
  background-color: red;
  text-align: center;
  line-height: 17px;
  left: 14px;
  top: -19px;
`;
const StyledNumber = styled.div`
  font-size: 8px;
  font-weight: 550;
  color: #fff;
`;

const MyListIcon = (props) => {
  let myListNo = props.myListNo;
  if (myListNo > 99) {
    myListNo = "99+";
  }

  return (
    <div>
      <HeartFilled style={heartIconStyling} onClick={props.onIconClick} />
      <NumberDiv onClick={props.onIconClick}>
        <StyledNumber>{myListNo}</StyledNumber>
      </NumberDiv>
    </div>
  );
};

export default MyListIcon;
