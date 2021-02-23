import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import styled from "styled-components";
import MyList from "./Routes/MyList";
import SignUp from "./Routes/SignUp";

const ContainerDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #333333;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
    position: fixed;
  }
  ::-webkit-scrollbar-thumb {
    background: #454545;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

ReactDOM.render(
  <ContainerDiv id="mainContainer">
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/my-list" component={MyList} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  </ContainerDiv>,
  document.getElementById("root")
);
