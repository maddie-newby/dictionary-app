import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <span>Synonyms: </span>
        {props.synonyms.map(function (synonym, index) {
          if (props.synonyms.length === 1) {
            return <span key={index}>{synonym}.</span>;
          } else {
            if (index + 1 != props.synonyms.length) {
              return <span key={index}>{synonym}, </span>;
            } else {
              return <span key={index}>{synonym}.</span>;
            }
          }
        })}
      </div>
    );
  }
}
