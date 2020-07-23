import React from "react";
import styled from "styled-components";

const StyledBlurDiv = styled.div`
  filter: blur(${(props) => props.blurDegree + "px"});
`;

const BlurDiv = (props) => {
  return (
    <StyledBlurDiv style={props.style} blurDegree={props.blurDegree}>
      {props.children}
    </StyledBlurDiv>
  );
};

export default BlurDiv;
