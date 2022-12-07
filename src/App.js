import React, { useState } from 'react';
import axios from "axios"
import './App.css';
const App = () => {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");

  const changeHandler = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setName(value);
  }

  const clickHandler = (event) => {
    event.preventDefault();
    if (name === "") {
      alert("write something");
    }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=7e4dc5d9621c65a85ad1f36c13575bb9&units=metric`)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => { console.log(error.message) })

  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      clickHandler()
    }
  };

  return (
    <div>
      <div className="top-banner">
        <div className="container">
          <h1 className="heading">Weather App</h1>
          <form>
            <input type="text" placeholder="Search for a city" onChange={changeHandler} onKeyDown={handleKeyDown} />
            <button onClick={clickHandler}>Search</button>
            <span className="msg">

            </span>
          </form>
          <br />
          <div className="data">
            {
              data !== null ? <h1 className="h1N">Name: {data.name} , Temperature: {data.main.temp}</h1> : <h1 className="h1T">Loding...</h1>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;