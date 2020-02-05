import React, { useState, useEffect } from "react";
import axios from "axios";
import Story from "./Story";
const Stories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://refu-stories-backend.herokuapp.com/api/stories`)
      .then(res => setData(res.data))
      .catch(err => `Houston we have an error: ${err}`);
  }, []);

  console.log(data);

  return data.map(story => (
    <div>
      <Story str={story} />
    </div>
  ));
};

export default Stories;
