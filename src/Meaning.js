import React from "react";
import "./Meaning.css";
import Definition from "./Definition";
import Example from "./Example";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="PartOfSpeech">{props.meaning.partOfSpeech}</h3>
      <Definition definition={props.meaning.definition} />
      <Example example={props.meaning.example} />
      <Synonyms synonyms={props.meaning.synonyms} />
      <Antonyms antonyms={props.meaning.antonyms} />
    </div>
  );
}
