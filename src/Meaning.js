import React from "react";
import "./Meaning.css";
import Example from "./Example";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  let definition = `${
    props.meaning.definition.charAt(0).toUpperCase() +
    props.meaning.definition.substr(1)
  }.`;

  return (
    <div className="Meaning">
      <h3 className="PartOfSpeech">{props.meaning.partOfSpeech}</h3>
      <p className="Definition">{definition}</p>
      <Example example={props.meaning.example} />
      <Synonyms synonyms={props.meaning.synonyms} />
      <Antonyms antonyms={props.meaning.antonyms} />
    </div>
  );
}
