import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import MyList from "./Routes/MyList";
import SignUp from "./Routes/SignUp";

const ContainerDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #333333;
`;

class App extends React.Component {
  render() {
    return (
      <ContainerDiv>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/my-list" component={MyList} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </ContainerDiv>
    );
  }
}

export default App;
