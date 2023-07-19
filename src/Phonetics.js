import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  if (props.phonetics.text) {
    return (
      <span className="PhoneticLine">
        <h2 className="Phonetic">{props.phonetics.text}</h2>
        <button className="PlayLink">
          <ReactAudioPlayer src={props.phonetics.audio} controls />
        </button>
      </span>
    );
  } else {
    return null;
  }
}
