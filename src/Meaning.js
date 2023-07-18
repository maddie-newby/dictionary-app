import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  let definition = `${
    props.meaning.definition.charAt(0).toUpperCase() +
    props.meaning.definition.substr(1)
  }.`;

  if (props.meaning.example) {
    let example = `Example: ${
      props.meaning.example.charAt(0).toUpperCase() +
      props.meaning.example.substr(1)
    }.`;
    return (
      <div className="Meaning">
        <h3 className="PartOfSpeech">{props.meaning.partOfSpeech}</h3>
        <p className="Definition">{definition}</p>
        <p className="Example">{example}</p>
      </div>
    );
  } else {
    return (
      <div className="Meaning">
        <h3 className="PartOfSpeech">{props.meaning.partOfSpeech}</h3>
        <p className="Definition">{definition}</p>
      </div>
    );
  }
}
