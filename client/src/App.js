import React, { useState, useEffect } from "react";
import Axios from 'axios';
import "./App.css";


function App() {

  const [photoList, setPhotoList] = useState([]);

  const getPhotos = () => {

    Axios.get('http://localhost:8091/photo/url/1').then((response) => {
      setPhotoList(response.data)
      console.log(response.data)
    })
  }


  return (
    <div>
      <p>Hello world</p>
      <button onClick={getPhotos}>Show Photos</button>

      <div className='image-grid'>
        {photoList.map((photo) => {
          return <img src={(photo.URL)} alt={photo.URL} ></img>
        })}

      </div>
    </div >
  );

}

export default App;
