import React from "react";
import "./Meaning.css";
import Definition from "./Definition";
import Example from "./Example";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.meaning.map(function (meaning, index) {
        return (
          <div key={index}>
            <h3 className="PartOfSpeech">{meaning.partOfSpeech}</h3>
            <Definition definition={meaning.definitions.definition} />
            <Example example={meaning.definitions.example} />
            <Synonyms synonyms={meaning.definitions.synonyms} />
            <Antonyms antonyms={meaning.definitions.antonyms} />
          </div>
        );
      })}
    </div>
  );
}
