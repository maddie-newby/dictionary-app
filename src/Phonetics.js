import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  if (props.phonetics && props.phonetics.text) {
    return (
      <div className="PhoneticLine">
        <h2 className="Phonetic">{props.phonetics.text}</h2>
        <button className="PlayLink">
          <ReactAudioPlayer src={props.phonetics.audio} controls />
        </button>
      </div>
    );
  } else {
    return null;
  }
}
