import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserIcon from "./UserIcon";
import MyListIcon from "./MyListIcon";
import AppButton from "./Button";
import SearchBar from "./SearchBar";
import Logo from "../MovieLogo.png";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import API from "../API/API";

const StyledNavBar = styled.div`
  z-index: 2;
  background-color: black;
  height: 50px;
  display: flex;
  position: sticky;
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
  display: flex;
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
  let myListIcon = props.showMyListIcon ? (
    <Link to="/my-list">
      <MyListIconDiv>
        <MyListIcon myListNo={750} />
      </MyListIconDiv>
    </Link>
  ) : null;
  const handleLogout = async () => {
    await API.logout();
  };
  let usernameAndAvatar = props.username ? (
    <div style={{ display: "flex", minWidth: "fit-content" }}>
      <UserIcon username={props.username} />
      <DisplayedUsername>{props.username}</DisplayedUsername>
    </div>
  ) : null;
  let buttonsList = [];
  if (props.showLoginButton)
    buttonsList.push({
      icon: <LoginOutlined style={{ color: "white", marginRight: "8px" }} />,
      text: "Login",
      linkTo: "/login",
    });
  if (props.showSignUpButton)
    buttonsList.push({
      icon: <LoginOutlined style={{ color: "white", marginRight: "8px" }} />,
      text: "Sing Up",
      linkTo: "/signup",
    });
  if (props.showLogOutButton)
    buttonsList.push({
      icon: <LogoutOutlined style={{ color: "white", marginRight: "8px" }} />,
      text: "Logout",
      linkTo: "/login",
      onClick: handleLogout,
    });

  return (
    <StyledNavBar>
      <LeftNavBarItems>
        <Link style={{ display: "flex" }} to="/">
          <StyledLogo src={Logo} alt="oops" width="auto" height="34px" />
        </Link>
        {myListIcon}
      </LeftNavBarItems>
      {props.showSearchBar ? <SearchBar /> : null}
      <RightNavBarItems>
        {buttonsList.map((button) => {
          return (
            <Link to={button.linkTo}>
              <AppButton
                text={button.text}
                icon={button.icon}
                height={"32px"}
                width={"95px"}
                color={"white"}
                onClick={(e) => button.onClick && button.onClick(e)}
                fontSize={"14px"}
                backgroundColor={"rgba(0,0,0,0)"}
                border={"1px solid white"}
              />
            </Link>
          );
        })}
        {usernameAndAvatar}
      </RightNavBarItems>
    </StyledNavBar>
  );
};
export default NavBar;
