import React from "react";
import styled from "styled-components";
import { HeartFilled } from "@ant-design/icons";

const heartIconStyling = {
  color: "#c1c1c1",
  fontSize: "34px",
};

const NumberDiv = styled.div`
  position: relative;
  width: 20px;
  border-radius: 50%;
  background-color: red;
  text-align: center;
  line-height: 20px;
  left: 17px;
  top: -24px;
`;
const StyledNumber = styled.div`
  font-size: 10px;
  font-weight: 550;
  color: #fff;
`;

const MyListIcon = (props) => {
  let myListNo = props.myListNo;
  if (myListNo > 99) {
    myListNo = "99+";
  }

  return (
    <div st>
      <HeartFilled style={heartIconStyling} onClick={props.onIconClick} />
      <NumberDiv>
        <StyledNumber>{myListNo}</StyledNumber>
      </NumberDiv>
    </div>
  );
};

export default MyListIcon;
