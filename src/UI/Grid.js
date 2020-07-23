import React, { useState } from "react";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";
import FadeIn from "react-fade-in";
import Button from "./Button";
import BlurDiv from "./BlurDiv";

const GridStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px;
  align-items: center;
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 10px;
`;

const ButtonContainer = styled.div`
  // text-align: center;
  // text-align: center;
`;

const Grid = (props) => {
  let [isButton, SetisButton] = useState(true);

  const ButtonChangehandler = () => {
    SetisButton(false);
  };
  // const ZoomIn = () => {
  //   height = "53px";
  //   width = "200px";
  // };
  const Container = () => {
    return (
      <FadeIn>
        <GridStyle>
          <GridContainer>{props.children}</GridContainer>
          <Button
            text={" More Movie"}
            height={"53px"}
            width={"200px"}
            color={"#c1c1c1"}
            fontSize={"24px"}
            backgroundColor={"black"}
            // onMouseEnter={ZoomIn}
            onClick={ButtonChangehandler}
            icon={isButton ? null : <LoadingOutlined />}
          />
        </GridStyle>
      </FadeIn>
    );
  };
  //   <LoadingOutlined />

  return Container();
};

export default Grid;
