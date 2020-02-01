import React from "react";
import SignIn from "./components/signin/SignIn";
import PrivateRoute from "./utils/PrivateRoute"

import Home from "./components/home/Home"
import Stories from "./components/stories/Stories"
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

import 'typeface-roboto';

function App() {
  return (
    <div>
     {/* <CssBaseline />*/}
      {/*<SignIn />*/}
      


      <Link to='/'>
        Home
      </Link>
      <Link to='/Stories'>
        Stories
      </Link>
      <Link to='/Signin'>
        SignIn
      </Link>
      
      <Route  path='/Signin' component={SignIn}/>
      <Route exact path='/' component={Home}/>
      <Route path='/Stories' component={Stories}/>
      {/* 
      
      <PrivateRoute path="/" component={Home Comp}
       */}
    </div>
  );
}

export default App;
