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
  width: 32px;
  height: 32px;
  margin: 10px;
  border-radius: 50%;
  background-color: ${randomColor};
  text-align: center;
  display: flex;
  line-height: 32px;
  justify-content: center;
`;
const StyledLetter = styled.p`
  font-size: 23px;
  font-weight: bold;
  color: #fff;
  margin: 0;
  margin-bottom: 25%;
`;

const UserIcon = (props) => {
  return (
    <UserIconDiv>
      <StyledLetter>{props.username.charAt().toUpperCase()}</StyledLetter>
    </UserIconDiv>
  );
};

export default UserIcon;
