import React, { useState } from 'react';
import axios from "axios"
import './App.css';
const App = () => {
  const [data, setData] = useState(null);
  console.log(data);
  const [name, setName] = useState("");

  const changeHandler = (event) => {
    const value = event.target.value;
    setName(value);
  }

  const clickHandler = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=7e4dc5d9621c65a85ad1f36c13575bb9&units=metric`)
      .then((response) => {
        console.log(response.data)
        setData(response.data)
        const tmp = {
          name: data.name,
          temperature: data.main.temp,
        }
      })
      .catch((error) => {console.log(error)})
  }


  return (
    <div>
      <div className="top-banner">
        <div className="container">
          <h1 className="heading">Weather App</h1>
          <form>
            <input type="text" placeholder="Search for a city" onChange={changeHandler} />
            <button onClick={clickHandler}>Search</button>
            <span className="msg"></span>
          </form>
          <div>
            {/* {
              data.length ?
              data.map(item =><h3>{item.data.tmp}</h3>) :
              <h1>Loding....</h1>
            } */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;