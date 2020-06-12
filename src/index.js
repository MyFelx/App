import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Test from "./API/test"

ReactDOM.render(
  <React.StrictMode>
    {/* this is for test purpose   */}
    <Router>
      <Switch>
        <Route component={Test} path="/test">
        </Route>
      </Switch>
    </Router>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
