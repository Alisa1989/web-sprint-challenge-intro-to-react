// Write your Character component here

import React from "react";

const Character = (props) => {
    return(
        <div>
            <img src= {props.image}/>
            <h1>Name: {props.name} </h1>
            <p>
                <span>Status: {props.status}</span>
                <span>Planet of Origin: {props.origin}</span>
            </p>
            <p>
                <span>Species: {props.species}</span>
                <span>Gender: {props.gender}</span>
            </p>
            <p>Website Page: {props.url}</p>            

        </div>
    );
};

export default Character;