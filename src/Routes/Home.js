import React from "react";
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
        <div style={{ fontSize: "14px", color: "#c1c1c1", padding: "5px" }}>
          Hello
        </div>
        <div style={{ fontSize: "14px", color: "#c1c1c1", padding: "5px" }}>
          Hello
        </div>{" "}
        <div style={{ fontSize: "14px", color: "#c1c1c1", padding: "5px" }}>
          Hello
        </div>{" "}
        <div style={{ fontSize: "14px", color: "#c1c1c1", padding: "5px" }}>
          Hello
        </div>{" "}
        <div style={{ fontSize: "14px", color: "#c1c1c1", padding: "5px" }}>
          Hello
        </div>{" "}
        <div style={{ fontSize: "14px", color: "#c1c1c1", padding: "5px" }}>
          Hello
        </div>
      </ExpandingDivider>
      <ExpandingDivider
        lineColor={"#606060"}
        titleColor={"#dbdbdb"}
        fontSize={21}
        title={"Filters"}
      >
        <div style={{ fontSize: "14px", color: "#c1c1c1", padding: "5px" }}>
          Hello
        </div>{" "}
        <div style={{ fontSize: "14px", color: "#c1c1c1", padding: "5px" }}>
          Hello
        </div>{" "}
        <div style={{ fontSize: "14px", color: "#c1c1c1", padding: "5px" }}>
          Hello
        </div>{" "}
        <div style={{ fontSize: "14px", color: "#c1c1c1", padding: "5px" }}>
          Hello
        </div>{" "}
        <div style={{ fontSize: "14px", color: "#c1c1c1", padding: "5px" }}>
          Hello
        </div>
      </ExpandingDivider>
    </div>
  );
};

export default Home;
