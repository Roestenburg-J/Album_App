import React, { useState } from "react";
import Axios from "axios";
import photos from "./mock_data.json";
import "./public/css/App.css";


function App() {

  const [imageList, setImageList] = useState(photos.resources)
  return (<div className="image-gird">
    {imageList.map((image) => (
      <img src={(image.url)} alt="" ></img>
    ))
    }

  </div >
  );

}

export default App;
