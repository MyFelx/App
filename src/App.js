import React from "react";
import AppButton from "./UI/Button";
import {
  LoginOutlined,
  UserOutlined,
  MailOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import GenericInput from "./UI/Input";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "#202020" }}>
        <AppButton
          text={"Join"}
          height={"53px"}
          width={"165px"}
          color={"#c1c1c1"}
          fontSize={"24px"}
          backgroundColor={"#303030"}
          onClick={() => alert("Joined")}
        />
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
      <div
        style={{
          backgroundColor: "#202020",
          alignContent: "center",
          padding: "10px",
        }}
      >
        <GenericInput
          inputType={"text"}
          icon={
            <UserOutlined
              style={{ color: "#c1c1c1", fontSize: "18px", marginLeft: "8px" }}
            />
          }
          initValue={"Username"}
        />
        <GenericInput
          inputType={"text"}
          icon={
            <MailOutlined
              style={{ color: "#c1c1c1", fontSize: "18px", marginLeft: "8px" }}
            />
          }
          initValue={"email"}
        />
        <GenericInput
          inputType={"password"}
          icon={
            <KeyOutlined
              style={{ color: "#c1c1c1", fontSize: "18px", marginLeft: "8px" }}
            />
          }
          initValue={"password"}
        />
      </div>
    </div>
  );
}

export default App;
