import React, { useState, useEffect } from 'react';
import axios from "axios";

import './App.css';
import Character from "./components/Character"

import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import styled, { css } from "styled-components";

//CODE
//styled-components
export const characterContainer = styled.div`
  background: gray;
  `;

// export const P = styled.p`
//   display: flex;
//   justify-content: space-between;
// `;

export const attributesSpan = styled.span`
  margin: 2em;
  font-weight: bold;
`;

//App function
const App = () => {
  const [characters, setCharacters] = useState([]);
  
  //fetch data from API
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
  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <characterContainer>
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
      </characterContainer>
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