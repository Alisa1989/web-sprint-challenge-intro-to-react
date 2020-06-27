import React, { useState, useEffect } from 'react';
import axios from "axios";

import './App.css';
import Character from "./components/Character"

const App = () => {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then(response => {
        console.log("Response from useEffect of App.js", response);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("Error occured in useEffect of App.js: ", error);
      });
  }, []);
  
  //console.log(characters.results)

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="characters">
        {characters.map(char => {
          return (
            <Character 
              name= {char.name}
              status= {char.status}
              species= {char.species}
              gender= {char.gender}
              origin= {char.origin.name}
              image= {char.image}
              url= {char.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.
//<Character title={characters.results.name}/>

// Fetch characters from the API in an effect hook. Remember, anytime you have a 
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.