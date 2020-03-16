import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Routes from "./Route/routes";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
// import { Dashboard } from "./dashboard/Dashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import Welcome from "./pages/Welcome"


ReactDOM.render(
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/auth" />} />
        <Route exact path={"/auth"} component={App}></Route>
        {/* <Route exact path="/dashboard" component={Dashboard}></Route> */}
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/welcome" component={Welcome}></Route>
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
