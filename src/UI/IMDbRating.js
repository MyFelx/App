import React from "react";
import styled from "styled-components";
import IMDbIcon from "../IMDb-Icon.png";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;
const StyledRating = styled.div`
  font-size: ${(props) => props.height};
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
      <StyledIcon
        src={IMDbIcon}
        alt="oops"
        width="auto"
        height={props.iconHeight}
      />
      <StyledRating height={props.textHeight}>
        {props.rating.toFixed(1)}/10
      </StyledRating>
    </StyledDiv>
  );
};

export default IMDbRating;
