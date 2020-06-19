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
      <Card BGURL={"https://m.media-amazon.com/images/M/MV5BZjNlZmUyYmMtNjNjMS00NzQ5LTlmYjktNDVkMmRjMTQyMmVjXkEyXkFqcGdeQXVyNzk0NTA5NQ@@._V1_SY1000_CR0,0,677,1000_AL_.jpg"} />
      <Card BGURL={"https://m.media-amazon.com/images/M/MV5BODY1NWE2OTctOTU5MC00NTlmLWI2MzktMmYzMTUzYjk4YjEzXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SY1000_CR0,0,701,1000_AL_.jpg"} />
      <Card BGURL={"https://m.media-amazon.com/images/M/MV5BYmI3NDRlYzUtZWRkMC00ZjU2LWFkYjAtMzYzY2UyNGYxOWJmXkEyXkFqcGdeQXVyMzI2NzE3MDc@._V1_.jpg"} />
      <Card BGURL={"https://m.media-amazon.com/images/M/MV5BMWRmNDRkN2ItYTEyNS00NWVhLWFkNzgtNWJkM2RkOTcyNWRmXkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_.jpg"} />
      <Card BGURL={"https://m.media-amazon.com/images/M/MV5BY2Y4MTE2MDEtOTRhNS00Yzk0LTk0M2MtNzJmMGI5YmIxNmE1XkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_.jpg"} />

    </Router>
  );
}

export default App;
