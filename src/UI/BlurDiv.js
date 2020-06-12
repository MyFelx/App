import React from "react";
import styled from "styled-components";

const StyledBlurDiv = styled.div`
  filter: blur(${(props) => props.blurDegree});
`;

const BlurDiv = (props) => {
  console.log(props.blurDegree);
  return (
    <div>
      <StyledBlurDiv blurDegree={props.blurDegree}>
        {props.children}
      </StyledBlurDiv>
    </div>
  );
};

export default BlurDiv;
