import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserIcon from "./UserIcon";
import MyListIcon from "./MyListIcon";
import AppButton from "./Button";
import SearchBar from "./SearchBar";
import Logo from "../MovieLogo.png";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";

const StyledNavBar = styled.div`
  background-color: black;
  height: 50px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  padding: 5px 20px;
  justify-content: space-between;
`;
const StyledLogo = styled.img`
  align-self: center;
  margin: 5px;
`;
const DisplayedUsername = styled.span`
  color: white;
  align-items: center;
  transform: translate(0, 30%);
`;
const RightNavBarItems = styled.div`
  display: flex;
  width: 450px;
  justify-content: flex-end;
`;
const LeftNavBarItems = styled.div`
  display: flex;
  width: 450px;
  justify-content: flex-start;
`;
const MyListIconDiv = styled.div`
  position: relative;
  top: 10px;
  left: 10px;
`;

const NavBar = (props) => {
  let myListIcon = null;
  if (props.showMyListIcon) {
    myListIcon = (
      <MyListIconDiv>
        <MyListIcon
          myListNo={750}
          onIconClick={() => console.log("Open My List")}
        />
      </MyListIconDiv>
    );
  }
  let searchBar = null;
  if (props.showSearchbar) {
    searchBar = <SearchBar />;
  }
  let usernameAndAvatar = null;
  if (props.username !== undefined) {
    usernameAndAvatar = (
      <div style={{ display: "flex" }}>
        <UserIcon username={props.username} />
        <DisplayedUsername>{props.username}</DisplayedUsername>
      </div>
    );
  }
  let loginButton = null;
  if (props.showLoginButton) {
    loginButton = (
      <Link to="/login">
        <AppButton
          text={"Login"}
          icon={
            <LoginOutlined style={{ color: "white", marginRight: "8px" }} />
          }
          height={"32px"}
          width={"95px"}
          color={"white"}
          fontSize={"14px"}
          backgroundColor={"rgba(0,0,0,0)"}
          border={"1px solid white"}
          onClick={() => alert("Login Page")}
        />
      </Link>
    );
  }
  let signUpButton = null;
  if (props.showSignUpButton) {
    signUpButton = (
      <Link to="/sign-up">
        <AppButton
          text={"Sign Up"}
          icon={
            <LoginOutlined style={{ color: "white", marginRight: "8px" }} />
          }
          height={"32px"}
          width={"95px"}
          color={"white"}
          fontSize={"14px"}
          backgroundColor={"rgba(0,0,0,0)"}
          border={"1px solid white"}
          onClick={<Link to="/sign-up"></Link>}
        />
      </Link>
    );
  }
  let logOutButton = null;
  if (props.showLogOutButton) {
    logOutButton = (
      <Link to="/login">
        <AppButton
          text={"Log out"}
          icon={
            <LogoutOutlined style={{ color: "white", marginRight: "8px" }} />
          }
          height={"32px"}
          width={"95px"}
          color={"white"}
          fontSize={"14px"}
          backgroundColor={"rgba(0,0,0,0)"}
          border={"1px solid white"}
          onClick={() => alert("Logged out")}
        />
      </Link>
    );
  }

  return (
    <StyledNavBar>
      <LeftNavBarItems>
        <StyledLogo src={Logo} alt="oops" width="auto" height="34px" />
        {myListIcon}
      </LeftNavBarItems>
      {searchBar}
      <RightNavBarItems>
        {loginButton}
        {signUpButton}
        {logOutButton}
        {usernameAndAvatar}
      </RightNavBarItems>
    </StyledNavBar>
  );
};
export default NavBar;
