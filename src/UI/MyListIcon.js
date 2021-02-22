import React from "react";
import styled from "styled-components";
import { HeartFilled } from "@ant-design/icons";
import API from "../API/API";

const heartIconStyling = {
  color: "#c1c1c1",
  fontSize: "31px",
};

const NumberDiv = styled.div`
  position: relative;
  width: 19px;
  border-radius: 50%;
  background-color: red;
  text-align: center;
  line-height: 19px;
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
    <div onClick={props.onIconClick}>
      <HeartFilled style={heartIconStyling} />
      <NumberDiv>
        <StyledNumber>{myListNo}</StyledNumber>
      </NumberDiv>
    </div>
  );
};

export default MyListIcon;
