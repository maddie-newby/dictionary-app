import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length != 0) {
    return (
      <div className="Synonyms">
        <span>Synonyms: </span>
        {props.synonyms.map(function (synonym, index) {
          if (index + 1 !== props.synonyms.length) {
            return <span key={index}>{synonym}, </span>;
          } else {
            return <span key={index}>{synonym}.</span>;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
