import React from "react";
import SignIn from "./components/signin/SignIn";
import PrivateRoute from "./utils/PrivateRoute";


import Home from "./components/Home/Home";

import Stories from "./components/stories/Stories";

import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import "typeface-roboto";

function App() {
  return (
    <div className="app-wrapper">
      <CssBaseline />
      {/*<SignIn />*/}
      <Navigation />

      <Route exact path="/" component={Home} />
      <Route path="/Stories" component={Stories} />
      <Route path="/Signin" component={SignIn} />
      {/* 
      
      <PrivateRoute path="/" component={Home Comp}
       */}
    </div>
  );
}

export default App;
