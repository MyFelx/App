import React from "react";
import styled from "styled-components";

const colorList = [
  "#597ef7",
  "#49aa19",
  "#13a8a8",
  "#cb2b83",
  "#642ab5",
  "#177ddc",
  "#8bbb11",
  "#d8bd14",
  "#d89614",
  "#d32029",
  "#d84a1b",
  "#d87a16",
];

const randomColor = colorList[Math.floor(Math.random() * colorList.length)];

const UserIconDiv = styled.div`
  width: 35px;
  height: 35px;
  margin: 10px;
  border-radius: 50%;
  background-color: ${randomColor};
  text-align: center;
  line-height: 35px;
  margin: 10px;
`;
const StyledLetter = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;

const UserIcon = (props) => {
  return (
    <UserIconDiv>
      <StyledLetter>{props.username.charAt()}</StyledLetter>
    </UserIconDiv>
  );
};

export default UserIcon;
