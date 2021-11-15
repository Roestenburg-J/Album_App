import './App.css';
import { useState } from 'react'


function App() {

  const [date, setDate] = useState("");
  const [location, setLocation] = useState("")
  const [takenby, setTakenBy] = useState("")

  return (
    <div className="App">

      <div className="photo-meta">
        <label>Date and Time:</label>
        <input type="text" onChange={(event) => { setDate(event.target.value); }} />
        <label>Location:</label>
        <input type="text" onChange={(event) => { setLocation(event.target.value); }} />
        <label>Taken By:</label>
        <input type="text" onChange={(event) => { setTakenBy(event.target.value); }} />

        <div className="photo">
          <form action="/">
            <label for="img">Select image:</label>
            <input type="file" id="img" name="img" accept="image/*"></input>
          </form>
        </div>

        <button>Upload Photo</button>
      </div>
    </div >
  );
}

export default App;
