import React from "react";
import styled from "styled-components";
import NavBar from "../UI/NavBar";
import SignUpModal from "../UI/SignUpModal";
import BlurDiv from "../UI/BlurDiv";
import backgroundImage from "../StarsBG.jpg";
import API from "../API/API";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

class SignUp extends React.Component {
  async componentWillMount() {
    const isLoggedIn = await API.isLoggedIn();
    if (isLoggedIn) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div style={{ height: "100%" }}>
        <NavBar
          username={null}
          showMyListIcon={false}
          showSearchBar={false}
          showLoginButton={true}
          showSignUpButton={false}
          showLogOutButton={false}
        />
        <BlurDiv style={{ height: "100%" }} blurDegree={"3px"}>
          <StyledImage src={backgroundImage} alt="oops" />
        </BlurDiv>

        <SignUpModal history={this.props.history} />
      </div>
    );
  }
}

export default SignUp;
