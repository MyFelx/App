import React from "react";
import styled from "styled-components";
import ExpandingDivider from "../UI/ExpandingDivider";

const Home = (props) => {
  return (
    <div>
      <ExpandingDivider
        lineColor={"#606060"}
        titleColor={"#dbdbdb"}
        fontSize={21}
        title={"Movies"}
      >
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </ExpandingDivider>
      <ExpandingDivider
        lineColor={"#606060"}
        titleColor={"#dbdbdb"}
        fontSize={21}
        title={"Filters"}
      >
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </ExpandingDivider>
    </div>
  );
};

export default Home;
