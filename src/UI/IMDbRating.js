import React from "react";
import styled from "styled-components";
import IMDbIcon from "../IMDb-Icon.png";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
`;
const StyledRating = styled.div`
  font-size: 18px;
  color: #c1c1c1;
`;
const StyledIcon = styled.img`
  align-self: center;
  margin: 5px;
  margin-right: 15px;
`;

const IMDbRating = (props) => {
  return (
    <StyledDiv>
      <StyledIcon src={IMDbIcon} alt="oops" width="auto" height="20px" />
      <StyledRating>{props.rating.toFixed(1)}/10</StyledRating>
    </StyledDiv>
  );
};

export default IMDbRating;
