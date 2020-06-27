// Write your Character component here
import React from "react";

import { Button } from "reactstrap";
import {attributesSpan} from "../App"
//import {P} from "../App"

const Character = (props) => {
    return(
        <div>
            <img src= {props.image}/>
            <h1>Name: {props.name} </h1>
            <p>
                <attributesSpan>Status: {props.status}</attributesSpan>
                <attributesSpan>Planet of Origin: {props.origin}</attributesSpan>
            </p>
            <p>
                <attributesSpan>Species: {props.species}</attributesSpan>
                <attributesSpan>Gender: {props.gender}</attributesSpan>
            </p>
            <Button color="primary" href={props.url}> Webpage </Button>            

        </div>
    );
};

export default Character;