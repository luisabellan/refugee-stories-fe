import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Story.css";
import "../../App.css";

function Story(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://refu-stories-backend.herokuapp.com/api/stories`)
      .then(res => setData(res.data))
      .catch(err => `Houston we have an error: ${err}`);
  }, []);
  console.log(data);

 return (
      <div className="story">
        <h2 >{props.str.title}</h2>
        <p >{props.str.contents}</p>
      </div>
 )



  
}

export default Story;
