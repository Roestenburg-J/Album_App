import React, { useState } from "react";
import Axios from 'axios';
import "./App.css";

function App() {

  const [photoList, setPhotoList] = useState([]);
  const [imageSelected, setImageSelected] = useState([]);

  const getPhotos = () => {

    Axios.get('http://localhost:8091/photo/url/1').then((response) => {
      setPhotoList(response.data)
      console.log(response.data)
    })
  }

  const uploadImage = (files) => {
    try {
      const formData = new FormData();
      formData.append("file", imageSelected)
      // Axios.post('http://localhost:8091/photo/1', formData)
      console.log(formData.files)
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <div>
      <h1>Photos</h1>
      <button onClick={getPhotos}>Show Photos</button>

      <button>Upload Photo</button>

      <div>
        <input
          type="file"
          onChange={(event) => { setImageSelected(event.target.files[0]) }} />
        <button onClick={uploadImage}>Upload</button>
      </div>

      <div className='image-grid'>
        {photoList.map((photo) => {
          return <img src={(photo.URL)} alt={photo.URL} ></img>
        })}

      </div>
    </div >
  );

}

export default App;
