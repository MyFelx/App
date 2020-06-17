import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import MyList from "./Routes/MyList";
import SignUp from "./Routes/SignUp";
import Card from './UI/Card'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/my-list" component={MyList} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </div>
      {/* <Card />
      <Card />
      <Card />
      <Card /> */}
      <Card />

    </Router>
  );
}

export default App;
