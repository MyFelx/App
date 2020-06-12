import React from "react";
import AppButton from "../UI/Button";
import GenericInput from "../UI/Input";
import Modal from "../UI/Modal";
import { LoginOutlined, UserOutlined, KeyOutlined } from "@ant-design/icons";

const iconStyling = {
  color: "#c1c1c1",
  fontSize: "18px",
  marginLeft: "8px",
};

function Login() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "black" }}>
        <AppButton
          text={"Login"}
          icon={
            <LoginOutlined style={{ color: "white", marginRight: "8px" }} />
          }
          height={"32px"}
          width={"73px"}
          color={"white"}
          fontSize={"14px"}
          backgroundColor={"rgba(0,0,0,0)"}
          border={"1px solid white"}
          onClick={() => alert("Logged in")}
        />
      </div>
      <Modal closeOnClick={() => console.log("object")}>
        <h1 style={{ color: "#c1c1c1", marginLeft: "9px" }}>Login</h1>

        <GenericInput
          inputType={"text"}
          icon={<UserOutlined style={iconStyling} />}
          placeholderValue={"Username"}
        />

        <GenericInput
          inputType={"password"}
          icon={<KeyOutlined style={iconStyling} />}
          placeholderValue={"password"}
        />
        <AppButton
          text={"Join"}
          height={"53px"}
          width={"165px"}
          color={"#c1c1c1"}
          fontSize={"24px"}
          backgroundColor={"#303030"}
          onClick={() => alert("Joined")}
        />
      </Modal>
    </div>
  );
}

export default Login;
