import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="WordContainer">
          <h1 className="Word">{props.results.word}</h1>
          <Phonetics phonetics={props.results.phonetics[0]} />
        </div>
        <div className="MeaningContainer">
          <Meaning meaning={props.results.meanings} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
