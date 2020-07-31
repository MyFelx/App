import React from "react";
import styled from "styled-components";

const Checkbox = (props) => {
  return (
    <div onClick={props.onClick}>
      <input
        type="checkbox"
        value="greenEggs"
        style={{ margin: "5px" }}
        checked={props.boxChecked}
      />
      <label style={{ color: "#c1c1c1" }}>{props.lable}</label>
    </div>
  );
};

export default Checkbox;
