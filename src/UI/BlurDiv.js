import React from "react";
import styled from "styled-components";

const StyledBlurDiv = styled.div`
  filter: blur(${(props) => props.blurDegree + "px"});
  pointer-events: ${(props) => (props.isBlur ? "none" : "null")};
`;

const BlurDiv = (props) => {
  return (
    <StyledBlurDiv
      style={props.style}
      blurDegree={props.blurDegree}
      isBlur={props.isBlur}
    >
      {props.children}
    </StyledBlurDiv>
  );
};

export default BlurDiv;
