import React, { useState } from 'react';
import axios from "axios"
import './App.css';
const App = () => {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const changeHandler = (event) => {
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
        console.log(1);
        console.log(response);
        setData(response.data)
        console.log(2);
      })
      .catch((error) => {
        console.log(3);
        console.log(error);
        setError(error.response.data.cod);
        console.log(4);
      })
  }


  return (
    <div>
      <div className="top-banner">
        <div className="container">
          <h1 className="heading">Weather App</h1>
          <form>
            <input type="text" placeholder="Search for a city" onChange={changeHandler} />
            <button onClick={clickHandler}>Search</button>
            <div className="msg">
              {
                error === "404" && <span>{error.response.data.message}</span>
              }
            </div>
          </form>
          <br />
          <div className="data">
            {
              data !== null && <h1 className="h1N">Name: {data.name} , Temperature: {data.main.temp}</h1>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;