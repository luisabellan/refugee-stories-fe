import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Story.scss";

function Story() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://refu-stories-backend.herokuapp.com/api/stories`)
      .then(res => setData(res.data[0]))
      .catch(err => `Houston we have an error: ${err}`);
  }, []);
  console.log(data);

return (
      <div className="story">
        <h2 key={data.id}>{data.title}</h2>
        <p key={data.id}>{data.contents}</p>
      </div>
)
  
}

export default Story;
