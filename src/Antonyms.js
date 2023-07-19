import React from "react";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div className="Antonyms">
        <span>Antonyms: </span>
        {props.antonyms.map(function (antonym, index) {
          if (props.antonyms.length === 1) {
            return <span key={index}>{antonym}.</span>;
          } else {
            if (index + 1 != props.antonyms.length) {
              return <span key={index}>{antonym}, </span>;
            } else {
              return <span key={index}>{antonym}.</span>;
            }
          }
        })}
      </div>
    );
  }
}
