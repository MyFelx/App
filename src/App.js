import React from "react";
import AppButton from "./UI/Button";
import { LoginOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "#202020" }}>
        <AppButton
          text={"Join"}
          height={"53px"}
          width={"165px"}
          color={"#c1c1c1"}
          fontsize={"24px"}
          backgroundColor={"#303030"}
          border={"none"}
          icon={null}
          clicked={() => alert("Joined")}
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
          backgroundColor={"black"}
          border={"1px solid white"}
          clicked={() => alert("Logged in")}
        />
      </div>
    </div>
  );
}

export default App;
