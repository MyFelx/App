import React from "react";
import AppButton from "../UI/Button";
import GenericInput from "../UI/Input";
import Modal from "../UI/Modal";
import NavBar from "../UI/NavBar";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";

const iconStyling = {
  color: "#c1c1c1",
  fontSize: "18px",
  marginLeft: "8px",
};

function Login() {
  return (
    <div className="App">
      <NavBar
        username={"Fady Philips"}
        showMyListIcon={true}
        showSearchbar={true}
        showLoginButton={false}
        showSignUpButton={true}
        showLogOutButton={false}
      />
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
      </Modal> */}
    </div>
  );
}

export default Login;
