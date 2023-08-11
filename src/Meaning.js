import React from "react";
import "./Meaning.css";
import Example from "./Example";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  return (
    <div>
      {props.meaning.map(function (meaning, index) {
        return (
          <div key={index} className="Meaning">
            <h3 className="PartOfSpeech">{meaning.partOfSpeech}</h3>
            <p className="Definition">{meaning.definitions[0].definition}</p>
            <Example example={meaning.definitions[0].example} />
            <Synonyms synonyms={meaning.synonyms} />
            <Antonyms antonyms={meaning.antonyms} />
          </div>
        );
      })}
    </div>
  );
}
