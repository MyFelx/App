import React from "react";
import styled from "styled-components";
import IMDbIcon from "../IMDb-Icon.png";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;
const StyledRating = styled.div`
<<<<<<< HEAD
  font-size: 18px;
=======
  font-size: ${(props) => props.height};
>>>>>>> 73b4c0c93cd477a6d208424072ce519346ba1180
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
<<<<<<< HEAD
      <StyledIcon src={IMDbIcon} alt="oops" width="auto" height="20px" />
      <StyledRating>{props.rating.toFixed(1)}/10</StyledRating>
=======
      <StyledIcon
        src={IMDbIcon}
        alt="oops"
        width="auto"
        height={props.iconHeight}
      />
      <StyledRating height={props.textHeight}>
        {props.rating.toFixed(1)}/10
      </StyledRating>
>>>>>>> 73b4c0c93cd477a6d208424072ce519346ba1180
    </StyledDiv>
  );
};

export default IMDbRating;
