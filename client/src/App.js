import React from "react";
import SignIn from "./components/signin/SignIn";
import PrivateRoute from "./utils/PrivateRoute"
import MyCarousel from "./components/Carousel/MyCarousel"

function App() {
  return (
    <div>
      {/*<SignIn />*/}
      <MyCarousel />

      {/* 
      
      <PrivateRoute path="/" component={Home Comp}
       */}
    </div>
  );
}

export default App;
