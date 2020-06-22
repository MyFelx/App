import React from "react";
import styled from "styled-components";
import NavBar from "../UI/NavBar";
import LoginModal from "../UI/LoginModal";
import BlurDiv from "../UI/BlurDiv";
import backgroundImage from "../StarsBG.jpg";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Login() {
  return (
    <div style={{ height: "100%" }}>
      <NavBar
        username={null}
        showMyListIcon={false}
        showSearchbar={false}
        showLoginButton={false}
        showSignUpButton={true}
        showLogOutButton={false}
      />
      <BlurDiv style={{ height: "100%" }} blurDegree={"3px"}>
        <StyledImage src={backgroundImage} alt="oops" />
      </BlurDiv>

      <LoginModal />
    </div>
  );
}

export default Login;
